import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getTranslationsJson(options?: ClientRequestOptions) {
  return await parseResponse(client['translations.json'].$get(undefined, options))
}

export async function getTranslationsTxt(options?: ClientRequestOptions) {
  return await parseResponse(client['translations.txt'].$get(undefined, options))
}

export async function getTranslationsSha(options?: ClientRequestOptions) {
  return await parseResponse(client['translations.sha'].$get(undefined, options))
}

export async function getChecksumJson(options?: ClientRequestOptions) {
  return await parseResponse(client['checksum.json'].$get(undefined, options))
}

export async function getChecksumTxt(options?: ClientRequestOptions) {
  return await parseResponse(client['checksum.txt'].$get(undefined, options))
}

export async function getChecksumSha(options?: ClientRequestOptions) {
  return await parseResponse(client['checksum.sha'].$get(undefined, options))
}

export async function getAbbreviationJson(
  args: InferRequestType<(typeof client)[':abbreviation.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':abbreviation.json'].$get(args, options))
}

export async function getAbbreviationSha(
  args: InferRequestType<(typeof client)[':abbreviation.sha']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':abbreviation.sha'].$get(args, options))
}

export async function getAbbreviationBooksJson(
  args: InferRequestType<(typeof client)[':abbreviation']['books.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':abbreviation']['books.json'].$get(args, options))
}

export async function getAbbreviationBooksTxt(
  args: InferRequestType<(typeof client)[':abbreviation']['books.txt']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':abbreviation']['books.txt'].$get(args, options))
}

export async function getAbbreviationBooksSha(
  args: InferRequestType<(typeof client)[':abbreviation']['books.sha']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':abbreviation']['books.sha'].$get(args, options))
}

export async function getAbbreviationChecksumJson(
  args: InferRequestType<(typeof client)[':abbreviation']['checksum.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':abbreviation']['checksum.json'].$get(args, options))
}

export async function getAbbreviationChecksumTxt(
  args: InferRequestType<(typeof client)[':abbreviation']['checksum.txt']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':abbreviation']['checksum.txt'].$get(args, options))
}

export async function getAbbreviationChecksumSha(
  args: InferRequestType<(typeof client)[':abbreviation']['checksum.sha']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':abbreviation']['checksum.sha'].$get(args, options))
}

export async function getAbbreviationBookJson(
  args: InferRequestType<(typeof client)[':abbreviation'][':book.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':abbreviation'][':book.json'].$get(args, options))
}

export async function getAbbreviationBookSha(
  args: InferRequestType<(typeof client)[':abbreviation'][':book.sha']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':abbreviation'][':book.sha'].$get(args, options))
}

export async function getAbbreviationBookChaptersJson(
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['chapters.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':abbreviation'][':book']['chapters.json'].$get(args, options))
}

export async function getAbbreviationBookChaptersTxt(
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['chapters.txt']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':abbreviation'][':book']['chapters.txt'].$get(args, options))
}

export async function getAbbreviationBookChaptersSha(
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['chapters.sha']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':abbreviation'][':book']['chapters.sha'].$get(args, options))
}

export async function getAbbreviationBookChecksumJson(
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['checksum.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':abbreviation'][':book']['checksum.json'].$get(args, options))
}

export async function getAbbreviationBookChecksumTxt(
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['checksum.txt']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':abbreviation'][':book']['checksum.txt'].$get(args, options))
}

export async function getAbbreviationBookChecksumSha(
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['checksum.sha']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':abbreviation'][':book']['checksum.sha'].$get(args, options))
}

export async function getAbbreviationBookChapterJson(
  args: InferRequestType<(typeof client)[':abbreviation'][':book'][':chapter.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':abbreviation'][':book'][':chapter.json'].$get(args, options))
}

export async function getAbbreviationBookChapterSha(
  args: InferRequestType<(typeof client)[':abbreviation'][':book'][':chapter.sha']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':abbreviation'][':book'][':chapter.sha'].$get(args, options))
}

export async function getOpenapiJson(options?: ClientRequestOptions) {
  return await parseResponse(client['openapi.json'].$get(undefined, options))
}

export async function getOpenapiSha(options?: ClientRequestOptions) {
  return await parseResponse(client['openapi.sha'].$get(undefined, options))
}
