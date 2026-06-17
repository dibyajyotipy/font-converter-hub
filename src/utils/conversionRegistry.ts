import { convertKrutidevToUnicode, convertUnicodeToKrutidev } from './krutidevConverter';

export const CONVERSION_FUNCTIONS: Record<string, (text: string) => string> = {
  'krutidev-to-unicode': convertKrutidevToUnicode,
  'unicode-to-krutidev': convertUnicodeToKrutidev,
};
