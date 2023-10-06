"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export function ToastSimple() {
  const { toast } = useToast();

  return (
    <Button
      onClick={() => {
        toast({
          description: "Your message has been sent.",
        });
      }}
    >
      Send Message
    </Button>
  );
}
