import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 text-center">
      <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-8">
        <span className="text-4xl font-bold text-muted-foreground">404</span>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
        Looks like you've reached a dead end.
      </h1>
      <p className="text-lg text-muted-foreground max-w-md mx-auto mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Link>
    </div>
  );
}
