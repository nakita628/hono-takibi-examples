import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postOcrImageToLinesWithLocation(
  args: InferRequestType<(typeof client.ocr.image.to)['lines-with-location']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocr.image.to['lines-with-location'].$post(args, options))
}

export async function postOcrImageToWordsWithLocation(
  args: InferRequestType<(typeof client.ocr.image.to)['words-with-location']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocr.image.to['words-with-location'].$post(args, options))
}

export async function postOcrImageToText(
  args: InferRequestType<typeof client.ocr.image.toText.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocr.image.toText.$post(args, options))
}

export async function postOcrPdfToLinesWithLocation(
  args: InferRequestType<(typeof client.ocr.pdf.to)['lines-with-location']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocr.pdf.to['lines-with-location'].$post(args, options))
}

export async function postOcrPdfToWordsWithLocation(
  args: InferRequestType<(typeof client.ocr.pdf.to)['words-with-location']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocr.pdf.to['words-with-location'].$post(args, options))
}

export async function postOcrPdfToText(
  args: InferRequestType<typeof client.ocr.pdf.toText.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocr.pdf.toText.$post(args, options))
}

export async function postOcrPhotoRecognizeBusinessCard(
  args: InferRequestType<(typeof client.ocr.photo.recognize)['business-card']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocr.photo.recognize['business-card'].$post(args, options))
}

export async function postOcrPhotoRecognizeForm(
  args: InferRequestType<typeof client.ocr.photo.recognize.form.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocr.photo.recognize.form.$post(args, options))
}

export async function postOcrPhotoRecognizeFormAdvanced(
  args: InferRequestType<typeof client.ocr.photo.recognize.form.advanced.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocr.photo.recognize.form.advanced.$post(args, options))
}

export async function postOcrPhotoRecognizeReceipt(
  args: InferRequestType<typeof client.ocr.photo.recognize.receipt.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocr.photo.recognize.receipt.$post(args, options))
}

export async function postOcrPhotoToWordsWithLocation(
  args: InferRequestType<(typeof client.ocr.photo.to)['words-with-location']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocr.photo.to['words-with-location'].$post(args, options))
}

export async function postOcrPhotoToText(
  args: InferRequestType<typeof client.ocr.photo.toText.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocr.photo.toText.$post(args, options))
}

export async function postOcrPreprocessingImageBinarize(
  args: InferRequestType<typeof client.ocr.preprocessing.image.binarize.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocr.preprocessing.image.binarize.$post(args, options))
}

export async function postOcrPreprocessingImageBinarizeAdvanced(
  args: InferRequestType<typeof client.ocr.preprocessing.image.binarize.advanced.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocr.preprocessing.image.binarize.advanced.$post(args, options))
}

export async function postOcrPreprocessingImageGetPageAngle(
  args: InferRequestType<(typeof client.ocr.preprocessing.image)['get-page-angle']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocr.preprocessing.image['get-page-angle'].$post(args, options))
}

export async function postOcrPreprocessingImageUnrotate(
  args: InferRequestType<typeof client.ocr.preprocessing.image.unrotate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocr.preprocessing.image.unrotate.$post(args, options))
}

export async function postOcrPreprocessingImageUnrotateAdvanced(
  args: InferRequestType<typeof client.ocr.preprocessing.image.unrotate.advanced.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocr.preprocessing.image.unrotate.advanced.$post(args, options))
}

export async function postOcrPreprocessingImageUnskew(
  args: InferRequestType<typeof client.ocr.preprocessing.image.unskew.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocr.preprocessing.image.unskew.$post(args, options))
}

export async function postOcrReceiptsPhotoToCsv(
  args: InferRequestType<typeof client.ocr.receipts.photo.to.csv.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocr.receipts.photo.to.csv.$post(args, options))
}
