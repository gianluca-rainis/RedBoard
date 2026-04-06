"use client";

import { FilloutStandardEmbed } from "@fillout/react";

export default function FormPage({ filloutId }) {
  return (
    <div className="pt-2">
      <FilloutStandardEmbed filloutId={filloutId} dynamicResize />
    </div>
  );
}
