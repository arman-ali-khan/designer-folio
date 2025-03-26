import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Input
            placeholder="Your Name"
            required
            className="bg-background"
          />
        </div>
        <div className="space-y-2">
          <Input
            type="email"
            placeholder="Your Email"
            required
            className="bg-background"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Input
          placeholder="Subject"
          required
          className="bg-background"
        />
      </div>
      <div className="space-y-2">
        <Textarea
          placeholder="Your Message"
          required
          className="min-h-[150px] bg-background"
        />
      </div>
      <Button
        type="submit"
        className="w-full md:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}