import React, { useCallback } from "react";
import { load } from "@finapi/web-form";

export function FinApiWebForm(props: {
  formId: string;
  onComplete: () => void;
}) {
  const { formId, onComplete } = { ...props };

  const createWebForm = useCallback(
    async (target: HTMLElement) => {
      load(
        target,
        { token: formId, targetEnvironment: "sandbox" },
        { onComplete }
      );
    },
    [formId, onComplete]
  );

  const containerRef = (container: HTMLDivElement) => {
    // This is making sure that we don't try create WF on null container
    // We will update the confluence page
    if (container) {
      createWebForm(container);
    }
  };

  return <div ref={containerRef}></div>;
}
