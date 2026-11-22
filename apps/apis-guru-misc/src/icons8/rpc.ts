import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiIconsetsV3CategoriesPlatformPlatformLanguageLanguage(
  args: InferRequestType<
    (typeof client.api.iconsets.v3)['categories?platform=:platform&language=:language']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.iconsets.v3['categories?platform=:platform&language=:language'].$get(args, options),
  )
}

export async function getApiIconsetsV3CategoryCategoryCategorySubcategorySubcategoryAmountAmountOffsetOffsetPlatformPlatformLanguageLanguage(
  args: InferRequestType<
    (typeof client.api.iconsets.v3)['category?category=:category&subcategory=:subcategory&amount=:amount&offset=:offset&platform=:platform&language=:language']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.iconsets.v3[
      'category?category=:category&subcategory=:subcategory&amount=:amount&offset=:offset&platform=:platform&language=:language'
    ].$get(args, options),
  )
}

export async function getApiIconsetsV3LatestTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguage(
  args: InferRequestType<
    (typeof client.api.iconsets.v3)['latest?term=:term&amount=:amount&offset=:offset&platform=:platform&language=:language']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.iconsets.v3[
      'latest?term=:term&amount=:amount&offset=:offset&platform=:platform&language=:language'
    ].$get(args, options),
  )
}

export async function getApiIconsetsV3SearchTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageExactAmountExactAmount(
  args: InferRequestType<
    (typeof client.api.iconsets.v3)['search?term=:term&amount=:amount&offset=:offset&platform=:platform&language=:language&exact_amount=:exact_amount']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.iconsets.v3[
      'search?term=:term&amount=:amount&offset=:offset&platform=:platform&language=:language&exact_amount=:exact_amount'
    ].$get(args, options),
  )
}

export async function getApiIconsetsV3TotalSinceSince(
  args: InferRequestType<(typeof client.api.iconsets.v3)['total?since=:since']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.iconsets.v3['total?since=:since'].$get(args, options))
}

export async function getApiIconsetsV4SearchTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageExactAmountExactAmount(
  args: InferRequestType<
    (typeof client.api.iconsets.v4)['search?term=:term&amount=:amount&offset=:offset&platform=:platform&language=:language&exact_amount=:exact_amount']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.iconsets.v4[
      'search?term=:term&amount=:amount&offset=:offset&platform=:platform&language=:language&exact_amount=:exact_amount'
    ].$get(args, options),
  )
}

export async function postApiTaskWebFontCollection(
  args: InferRequestType<(typeof client.api.task)['web-font']['collection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.task['web-font'].collection.$post(args, options))
}

export async function postApiTaskWebFontIcons(
  args: InferRequestType<(typeof client.api.task)['web-font']['icons']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.task['web-font'].icons.$post(args, options))
}
