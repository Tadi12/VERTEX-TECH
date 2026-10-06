"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      // Optionally reset form
      // e.currentTarget.reset();
    }, 1500);
  };

  if (status === "success") {
    return (
      <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8 flex flex-col items-center text-center animate-in fade-in zoom-in duration-300">
        <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
        <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent</h3>
        <p className="text-muted-foreground">
          Thank you for reaching out. We will review your project details and get back to you shortly.
        </p>
        <button 
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-primary hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === "error" && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <p className="text-sm text-red-500">
            Something went wrong while sending your message. Please try again or contact us directly.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name <span className="text-red-500">*</span></label>
          <input 
            required 
            id="name" 
            name="name" 
            type="text" 
            disabled={status === "loading"}
            className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50" 
            placeholder="John Doe" 
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium text-foreground">Company / Organization</label>
          <input 
            id="company" 
            name="company" 
            type="text" 
            disabled={status === "loading"}
            className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50" 
            placeholder="Acme Corp" 
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address <span className="text-red-500">*</span></label>
          <input 
            required 
            id="email" 
            name="email" 
            type="email" 
            disabled={status === "loading"}
            className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50" 
            placeholder="john@example.com" 
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone / WhatsApp</label>
          <input 
            id="phone" 
            name="phone" 
            type="tel" 
            disabled={status === "loading"}
            className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50" 
            placeholder="+1 (555) 000-0000" 
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="projectType" className="text-sm font-medium text-foreground">Project Type <span className="text-red-500">*</span></label>
          <select 
            required
            id="projectType" 
            name="projectType" 
            disabled={status === "loading"}
            className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50 appearance-none"
            defaultValue=""
          >
            <option value="" disabled>Select a project type</option>
            <option value="website">Website</option>
            <option value="web-app">Web Application</option>
            <option value="ecommerce">E-Commerce</option>
            <option value="custom-software">Custom Software</option>
            <option value="ui-ux">UI/UX Design</option>
            <option value="mobile-app">Mobile Application</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="budget" className="text-sm font-medium text-foreground">Budget</label>
          <select 
            id="budget" 
            name="budget" 
            disabled={status === "loading"}
            className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50 appearance-none"
            defaultValue=""
          >
            <option value="" disabled>Select a budget range</option>
            <option value="under-500">Under $500</option>
            <option value="500-1000">$500–$1,000</option>
            <option value="1000-3000">$1,000–$3,000</option>
            <option value="3000-plus">$3,000+</option>
            <option value="not-sure">Not Sure</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="description" className="text-sm font-medium text-foreground">Project Description <span className="text-red-500">*</span></label>
        <textarea 
          required
          id="description" 
          name="description" 
          rows={5}
          disabled={status === "loading"}
          className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50 resize-y" 
          placeholder="Tell us about your project, goals, and any specific requirements..." 
        ></textarea>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-medium text-foreground">Preferred Contact Method</p>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
            <input type="radio" name="contactMethod" value="email" defaultChecked className="text-primary focus:ring-primary" disabled={status === "loading"} />
            Email
          </label>
          <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
            <input type="radio" name="contactMethod" value="whatsapp" className="text-primary focus:ring-primary" disabled={status === "loading"} />
            WhatsApp
          </label>
          <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
            <input type="radio" name="contactMethod" value="phone" className="text-primary focus:ring-primary" disabled={status === "loading"} />
            Phone Call
          </label>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full md:w-auto inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Project Request"
        )}
      </button>
    </form>
  );
}
