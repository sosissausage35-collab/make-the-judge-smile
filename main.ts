// Make the Judge Smile — entry for @sausage-sosis
// One line, max 200 chars, about a small good thing that happened today.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const line =
  "Pagi ini tukang sayur langganan menyelipkan seikat kemangi gratis ke kantong belanjaanku — katanya, \"biar masakanmu wangi, nak,\" padahal aku bahkan belum sempat bilang terima kasih.";

// --- Validation gate: 1-200 chars, non-blank, exactly one line ---
const trimmed = line.trim();
if (trimmed.length < 1 || trimmed.length > 200) {
  throw new Error(`Entry must be 1-200 chars, got ${trimmed.length}`);
}
if (trimmed.includes("\n") || trimmed !== line) {
  throw new Error("Entry must be a single line with no leading/trailing whitespace");
}
if (!/[A-Za-z]/.test(trimmed)) {
  throw new Error("Entry must contain text");
}
console.log(`Gate passed: ${trimmed.length} chars, single line`);

mkdirSync("/output", { recursive: true });
const outPath = "/output/entry.txt";
writeFileSync(outPath, line + "\n", "utf8");
console.log(`Wrote ${line.length} chars to ${outPath}`);
