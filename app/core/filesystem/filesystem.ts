/**
 * Filesystem helpers
 */

import { resolve } from "path";

export const storage_path = function (path: string): string {
  return resolve(".", "storage", path);
};
