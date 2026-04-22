import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Card from '../components/ui/Card';
import './FAQ.css';

const faqs = [
  {
    question: "How do I donate food as a restaurant?",
    answer: "Getting started is easy! Create a Donor account, verify your business, and you can start listing surplus food immediately. When you list an item, local verified NGOs and volunteers will be notified instantly."
  },
  {
    question: "Are volunteers vetted?",
    answer: "Yes, all our volunteer drivers must go through a background check and complete a basic food safety handling course before they can accept pickup jobs."
  },
  {
    question: "Can individuals request food?",
    answer: "Our primary model connects donors with NGOs, shelters, and community kitchens who then distribute to individuals. However, we are piloting a direct-to-individual program in select cities."
  },
  {
    question: "Is there a cost to use FoodShare?",
    answer: "FoodShare is 100% free for NGOs and those receiving food. We charge a small subscription fee to enterprise restaurants to cover platform logistics and volunteer insurance, while independent restaurants can use it for free."
  },
  {
    question: "What items can be donated?",
    answer: "We accept prepared meals, fresh produce, dairy, bakery items, and packaged goods. All food must be within its safe consumption window. We cannot accept food that has been served to a customer or is past its expiration date."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="faq-page animate-fade-in">
      <section className="faq-header bg-mesh-pattern">
        <div className="container text-center">
          <h1 className="page-title">Frequently Asked Questions</h1>
          <p className="page-subtitle">
            Find answers to common questions about donating, receiving, and volunteering with FoodShare.
          </p>
        </div>
      </section>

      <section className="faq-content">
        <div className="container faq-container">
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <Card 
                key={idx} 
                className={`faq-item ${openIndex === idx ? 'faq-open' : ''}`}
                onClick={() => toggleFAQ(idx)}
              >
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  {openIndex === idx ? <ChevronUp className="text-secondary" /> : <ChevronDown className="text-muted" />}
                </div>
                {openIndex === idx && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
