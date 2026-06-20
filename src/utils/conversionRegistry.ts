import { convertKrutidevToUnicode, convertUnicodeToKrutidev } from './krutidevConverter';
import { convertKrutidevToChanakya, convertChanakyaToKrutidev } from './chanakyaConverter';

export const CONVERSION_FUNCTIONS: Record<string, (text: string) => string> = {
  'krutidev-to-unicode': convertKrutidevToUnicode,
  'unicode-to-krutidev': convertUnicodeToKrutidev,
  'krutidev-to-mangal': convertKrutidevToUnicode,
  'mangal-to-krutidev': convertUnicodeToKrutidev,
  'krutidev-to-chanakya': convertKrutidevToChanakya,
  'chanakya-to-krutidev': convertChanakyaToKrutidev,
};
