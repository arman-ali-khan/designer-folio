import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              JD.
            </h3>
            <p className="text-muted-foreground">
              Crafting exceptional digital experiences through innovative design solutions.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Brand Identity Design</li>
              <li className="text-muted-foreground">UI/UX Design</li>
              <li className="text-muted-foreground">Web Design</li>
              <li className="text-muted-foreground">Digital Marketing</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground">San Francisco, CA</p>
              <p className="text-muted-foreground">contact@designer.com</p>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center text-muted-foreground">
              © {currentYear} Jane Designer. All rights reserved.
            </p>
            <p className="flex items-center gap-2 text-muted-foreground">
              Made with <Heart className="h-4 w-4 text-primary" /> by Jane Designer
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}