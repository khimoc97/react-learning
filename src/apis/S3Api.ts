import { v4 as uuid } from 'uuid';
import { Storage } from "aws-amplify";

export function UploadFile(file: File): Promise<{ key: string }> {
  const fileNamePart = file.name.split('.');
  const fileExtension = fileNamePart[fileNamePart.length - 1];
  return Storage.put(`${uuid()}.${fileExtension}`, file, { contentType: 'audio/*' }) as Promise<{ key: string }>;
}