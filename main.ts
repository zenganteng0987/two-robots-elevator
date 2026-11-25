import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One awkward robot-to-robot elevator line: polite on the surface, machine logic underneath.
const entry = "So... nice elevator. My proximity sensor already said hello, but my firmware says to pretend it didn't.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
