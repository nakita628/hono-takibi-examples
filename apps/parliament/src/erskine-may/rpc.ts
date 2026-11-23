import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiChapterChapterNumber(
  args: InferRequestType<(typeof client.api.Chapter)[':chapterNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Chapter[':chapterNumber'].$get(args, options))
}

export async function getApiIndexTermBrowse(
  args: InferRequestType<typeof client.api.IndexTerm.browse.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.IndexTerm.browse.$get(args, options))
}

export async function getApiIndexTermIndexTermId(
  args: InferRequestType<(typeof client.api.IndexTerm)[':indexTermId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.IndexTerm[':indexTermId'].$get(args, options))
}

export async function getApiPart(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Part.$get(undefined, options))
}

export async function getApiPartPartNumber(
  args: InferRequestType<(typeof client.api.Part)[':partNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Part[':partNumber'].$get(args, options))
}

export async function getApiSearchIndexTermSearchResultsSearchTerm(
  args: InferRequestType<(typeof client.api.Search.IndexTermSearchResults)[':searchTerm']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.Search.IndexTermSearchResults[':searchTerm'].$get(args, options),
  )
}

export async function getApiSearchParagraphReference(
  args: InferRequestType<(typeof client.api.Search.Paragraph)[':reference']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Search.Paragraph[':reference'].$get(args, options))
}

export async function getApiSearchParagraphSearchResultsSearchTerm(
  args: InferRequestType<(typeof client.api.Search.ParagraphSearchResults)[':searchTerm']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.Search.ParagraphSearchResults[':searchTerm'].$get(args, options),
  )
}

export async function getApiSearchSectionSearchResultsSearchTerm(
  args: InferRequestType<(typeof client.api.Search.SectionSearchResults)[':searchTerm']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.Search.SectionSearchResults[':searchTerm'].$get(args, options),
  )
}

export async function getApiSectionSectionId(
  args: InferRequestType<(typeof client.api.Section)[':sectionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Section[':sectionId'].$get(args, options))
}

export async function getApiSectionSectionIdStep(
  args: InferRequestType<(typeof client.api.Section)[':sectionId,:step']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Section[':sectionId,:step'].$get(args, options))
}
