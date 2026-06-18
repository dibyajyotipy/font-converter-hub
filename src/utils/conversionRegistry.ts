import { convertKrutidevToUnicode, convertUnicodeToKrutidev } from './krutidevConverter.js';

export const CONVERSION_FUNCTIONS: Record<string, (text: string) => string> = {
  'krutidev-to-unicode': convertKrutidevToUnicode,
  'unicode-to-krutidev': convertUnicodeToKrutidev,
};
