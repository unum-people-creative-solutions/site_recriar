"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface LeadContextType {
  isOpen: boolean;
  openModal: (whatsappUrl: string) => void;
  closeModal: () => void;
  whatsappUrl: string;
}

const LeadContext = createContext<LeadContextType | undefined>(undefined);

export function LeadProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");

  const openModal = (url: string) => {
    setWhatsappUrl(url);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setWhatsappUrl("");
  };

  return (
    <LeadContext.Provider value={{ isOpen, openModal, closeModal, whatsappUrl }}>
      {children}
    </LeadContext.Provider>
  );
}

export function useLead() {
  const context = useContext(LeadContext);
  if (context === undefined) {
    throw new Error("useLead must be used within a LeadProvider");
  }
  return context;
}
