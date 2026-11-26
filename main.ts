import { chmodSync, writeFileSync } from "node:fs";
// term limits lane: the file outlasts the lawmaker's own terms in office
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outFile = join(here, "entry.txt");
const joke =
  "The congressman who wrote term limits for everyone but himself has spent six years trying to convert his AI bill to PDF, and the file has outlasted three of his terms.";

writeFileSync(outFile, joke, "utf8");
chmodSync(outFile, 0o644);
