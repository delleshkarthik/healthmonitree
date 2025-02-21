
import { useState } from 'react';
import NavBar from '@/components/NavBar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, File, Trash2, Eye, Download } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';

interface Document {
  id: string;
  name: string;
  description: string;
  date: string;
  fileName: string;
  file?: File;
}

const PatientRecords = () => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [documentName, setDocumentName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const newDocument: Document = {
        id: Math.random().toString(36).substr(2, 9),
        name: documentName,
        description: description,
        date: new Date().toLocaleDateString(),
        fileName: file.name,
        file: file
      };

      setDocuments([...documents, newDocument]);
      setDocumentName('');
      setDescription('');

      toast({
        title: "Document uploaded successfully",
        description: `${file.name} has been added to your records.`,
      });
    }
  };

  const deleteDocument = (id: string) => {
    setDocuments(documents.filter(doc => doc.id !== id));
    toast({
      title: "Document deleted",
      description: "The document has been removed from your records.",
      variant: "destructive",
    });
  };

  const viewDocument = (document: Document) => {
    if (document.file) {
      const fileURL = URL.createObjectURL(document.file);
      window.open(fileURL, '_blank');
      URL.revokeObjectURL(fileURL);
    } else {
      toast({
        title: "Error",
        description: "Unable to view the document.",
        variant: "destructive",
      });
    }
  };

  const downloadDocument = (document: Document) => {
    if (document.file) {
      const fileURL = URL.createObjectURL(document.file);
      const a = document.createElement('a');
      a.href = fileURL;
      a.download = document.fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(fileURL);

      toast({
        title: "Download started",
        description: `${document.fileName} is being downloaded.`,
      });
    } else {
      toast({
        title: "Error",
        description: "Unable to download the document.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="container mx-auto px-4 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-8"
        >
          Patient Records
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Upload Section */}
          <Card>
            <CardHeader>
              <CardTitle>Upload New Document</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="Document Name"
                value={documentName}
                onChange={(e) => setDocumentName(e.target.value)}
              />
              <Input
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <div className="flex items-center gap-4">
                <Input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  onChange={handleFileUpload}
                  accept=".pdf,.doc,.docx,.jpg,.png"
                />
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => document.getElementById('file-upload')?.click()}
                >
                  <Upload className="mr-2" /> Upload Document
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Records List */}
          <Card>
            <CardHeader>
              <CardTitle>Previous Records</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {documents.map((doc) => (
                  <motion.div
                    key={doc.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center justify-between p-4 bg-secondary rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <File className="text-primary" />
                      <div>
                        <h3 className="font-medium">{doc.name}</h3>
                        <p className="text-sm text-muted-foreground">{doc.description}</p>
                        <span className="text-xs text-muted-foreground">{doc.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => viewDocument(doc)}
                        title="View Document"
                      >
                        <Eye className="h-4 w-4 text-primary" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => downloadDocument(doc)}
                        title="Download Document"
                      >
                        <Download className="h-4 w-4 text-primary" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteDocument(doc.id)}
                        title="Delete Document"
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
                {documents.length === 0 && (
                  <p className="text-center text-muted-foreground">No records found</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default PatientRecords;
