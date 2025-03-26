
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="section-container">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About MavMeme</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            MavMeme is the ultimate trading platform for meme coins, designed with simplicity and performance in mind.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We're on a mission to make memecoin trading accessible to everyone. Our platform combines cutting-edge technology with an intuitive interface, ensuring that both novice and experienced traders can navigate the memecoin market with confidence.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Why MavMeme?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  MavMeme offers lightning-fast execution, the lowest fees in the industry, and advanced trading tools to help you maximize your trading potential. Our platform is built for reliability and security, ensuring your assets are protected.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Security is our top priority. We employ industry-leading encryption and multi-layered security protocols to ensure your funds and personal information remain safe. Our platform undergoes regular security audits to stay ahead of potential threats.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  MavMeme is more than just a trading platform—it's a community of memecoin enthusiasts. Join our vibrant community to share insights, strategies, and stay updated on the latest trends in the memecoin market.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What are meme coins?</AccordionTrigger>
              <AccordionContent>
                Meme coins are cryptocurrencies that originated from internet memes or have humorous characteristics. Unlike traditional cryptocurrencies, which often emphasize technical innovation or utility, meme coins primarily focus on building communities around shared humor and internet culture.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>How do I start trading on MavMeme?</AccordionTrigger>
              <AccordionContent>
                Getting started with MavMeme is simple. Create an account, complete the verification process, deposit funds into your account, and you're ready to trade. Our platform offers a user-friendly interface that makes it easy for beginners to navigate.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>What fees does MavMeme charge?</AccordionTrigger>
              <AccordionContent>
                MavMeme charges some of the lowest fees in the industry. Our standard trading fee is 0.1%, with discounts available for high-volume traders. We also offer fee reductions for users who hold our native token. Deposit fees vary depending on the payment method, while withdrawals have minimal network fees.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>Is MavMeme regulated?</AccordionTrigger>
              <AccordionContent>
                MavMeme operates in compliance with applicable regulations in the jurisdictions where we offer services. We implement robust AML and KYC procedures to ensure a secure and compliant trading environment. Our team stays updated on regulatory developments to adapt our practices accordingly.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger>How secure is MavMeme?</AccordionTrigger>
              <AccordionContent>
                Security is our top priority. We employ industry-leading encryption, multi-factor authentication, and cold storage solutions to protect your assets. Our platform undergoes regular security audits and penetration testing to identify and address potential vulnerabilities before they can be exploited.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default About;
