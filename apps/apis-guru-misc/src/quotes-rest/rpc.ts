import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getQod(
  args: InferRequestType<typeof client.qod.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.qod.$get(args, options))
}

export async function getQodCategories(
  args: InferRequestType<typeof client.qod.categories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.qod.categories.$get(args, options))
}

export async function getQodLanguages(options?: ClientRequestOptions) {
  return await parseResponse(client.qod.languages.$get(undefined, options))
}

export async function getQshow(
  args: InferRequestType<typeof client.qshow.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.qshow.$get(args, options))
}

export async function putQshow(
  args: InferRequestType<typeof client.qshow.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.qshow.$put(args, options))
}

export async function deleteQshow(
  args: InferRequestType<typeof client.qshow.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.qshow.$delete(args, options))
}

export async function patchQshow(
  args: InferRequestType<typeof client.qshow.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.qshow.$patch(args, options))
}

export async function getQshowList(
  args: InferRequestType<typeof client.qshow.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.qshow.list.$get(args, options))
}

export async function getQshowQuotes(
  args: InferRequestType<typeof client.qshow.quotes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.qshow.quotes.$get(args, options))
}

export async function postQshowQuotesAdd(
  args: InferRequestType<typeof client.qshow.quotes.add.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.qshow.quotes.add.$post(args, options))
}

export async function postQshowQuotesRemove(
  args: InferRequestType<typeof client.qshow.quotes.remove.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.qshow.quotes.remove.$post(args, options))
}

export async function getQuote(
  args: InferRequestType<typeof client.quote.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quote.$get(args, options))
}

export async function putQuote(
  args: InferRequestType<typeof client.quote.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quote.$put(args, options))
}

export async function postQuote(
  args: InferRequestType<typeof client.quote.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quote.$post(args, options))
}

export async function deleteQuote(
  args: InferRequestType<typeof client.quote.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quote.$delete(args, options))
}

export async function patchQuote(
  args: InferRequestType<typeof client.quote.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quote.$patch(args, options))
}

export async function getQuoteAuthorsPopular(
  args: InferRequestType<typeof client.quote.authors.popular.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quote.authors.popular.$get(args, options))
}

export async function getQuoteAuthorsSearch(
  args: InferRequestType<typeof client.quote.authors.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quote.authors.search.$get(args, options))
}

export async function getQuoteCategoriesPopular(
  args: InferRequestType<typeof client.quote.categories.popular.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quote.categories.popular.$get(args, options))
}

export async function getQuoteCategoriesSearch(
  args: InferRequestType<typeof client.quote.categories.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quote.categories.search.$get(args, options))
}

export async function putQuoteDislike(
  args: InferRequestType<typeof client.quote.dislike.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quote.dislike.$put(args, options))
}

export async function postQuoteDislike(
  args: InferRequestType<typeof client.quote.dislike.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quote.dislike.$post(args, options))
}

export async function deleteQuoteDislike(
  args: InferRequestType<typeof client.quote.dislike.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quote.dislike.$delete(args, options))
}

export async function getQuoteImage(
  args: InferRequestType<typeof client.quote.image.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quote.image.$get(args, options))
}

export async function putQuoteImage(
  args: InferRequestType<typeof client.quote.image.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quote.image.$put(args, options))
}

export async function deleteQuoteImage(
  args: InferRequestType<typeof client.quote.image.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quote.image.$delete(args, options))
}

export async function postQuoteImageBackground(
  args: InferRequestType<typeof client.quote.image.background.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quote.image.background.$post(args, options))
}

export async function deleteQuoteImageBackground(
  args: InferRequestType<typeof client.quote.image.background.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quote.image.background.$delete(args, options))
}

export async function getQuoteImageBackgroundList(
  args: InferRequestType<typeof client.quote.image.background.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quote.image.background.list.$get(args, options))
}

export async function getQuoteImageBackgroundSearch(
  args: InferRequestType<typeof client.quote.image.background.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quote.image.background.search.$get(args, options))
}

export async function postQuoteImageBackgroundTagsAdd(
  args: InferRequestType<typeof client.quote.image.background.tags.add.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quote.image.background.tags.add.$post(args, options))
}

export async function postQuoteImageBackgroundTagsRemove(
  args: InferRequestType<typeof client.quote.image.background.tags.remove.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quote.image.background.tags.remove.$post(args, options))
}

export async function postQuoteImageFont(
  args: InferRequestType<typeof client.quote.image.font.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quote.image.font.$post(args, options))
}

export async function deleteQuoteImageFont(
  args: InferRequestType<typeof client.quote.image.font.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quote.image.font.$delete(args, options))
}

export async function getQuoteImageFontList(
  args: InferRequestType<typeof client.quote.image.font.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quote.image.font.list.$get(args, options))
}

export async function getQuoteImageFontSearch(
  args: InferRequestType<typeof client.quote.image.font.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quote.image.font.search.$get(args, options))
}

export async function postQuoteImageFontTagsAdd(
  args: InferRequestType<typeof client.quote.image.font.tags.add.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quote.image.font.tags.add.$post(args, options))
}

export async function postQuoteImageFontTagsRemove(
  args: InferRequestType<typeof client.quote.image.font.tags.remove.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quote.image.font.tags.remove.$post(args, options))
}

export async function getQuoteImageSearch(
  args: InferRequestType<typeof client.quote.image.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quote.image.search.$get(args, options))
}

export async function putQuoteLike(
  args: InferRequestType<typeof client.quote.like.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quote.like.$put(args, options))
}

export async function postQuoteLike(
  args: InferRequestType<typeof client.quote.like.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quote.like.$post(args, options))
}

export async function deleteQuoteLike(
  args: InferRequestType<typeof client.quote.like.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quote.like.$delete(args, options))
}

export async function getQuoteList(
  args: InferRequestType<typeof client.quote.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quote.list.$get(args, options))
}

export async function getQuoteRandom(
  args: InferRequestType<typeof client.quote.random.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quote.random.$get(args, options))
}

export async function getQuoteSearch(
  args: InferRequestType<typeof client.quote.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quote.search.$get(args, options))
}

export async function postQuoteTagsAdd(
  args: InferRequestType<typeof client.quote.tags.add.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quote.tags.add.$post(args, options))
}

export async function postQuoteTagsRemove(
  args: InferRequestType<typeof client.quote.tags.remove.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quote.tags.remove.$post(args, options))
}
