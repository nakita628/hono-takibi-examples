import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV1Chapters(
  args: InferRequestType<typeof client.api.v1.chapters.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.chapters.$get(args, options))
}

export async function getApiV1ChaptersChapterNumber(
  args: InferRequestType<(typeof client.api.v1.chapters)[':chapter_number']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.chapters[':chapter_number'].$get(args, options))
}

export async function getApiV1ChaptersChapterNumberVerses(
  args: InferRequestType<(typeof client.api.v1.chapters)[':chapter_number']['verses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.chapters[':chapter_number'].verses.$get(args, options))
}

export async function getApiV1ChaptersChapterNumberVersesVerseNumber(
  args: InferRequestType<
    (typeof client.api.v1.chapters)[':chapter_number']['verses'][':verse_number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.chapters[':chapter_number'].verses[':verse_number'].$get(args, options),
  )
}

export async function getApiV1Verses(
  args: InferRequestType<typeof client.api.v1.verses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.verses.$get(args, options))
}

export async function postAuthOauthToken(
  args: InferRequestType<typeof client.auth.oauth.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.oauth.token.$post(args, options))
}
