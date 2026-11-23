import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiIconsetsV3CategoriesPlatformPlatformLanguageLanguageRoute,
  getApiIconsetsV3CategoryCategoryCategorySubcategorySubcategoryAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageRoute,
  getApiIconsetsV3LatestTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageRoute,
  getApiIconsetsV3SearchTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageExactAmountExactAmountRoute,
  getApiIconsetsV3TotalSinceSinceRoute,
  getApiIconsetsV4SearchTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageExactAmountExactAmountRoute,
  postApiTaskWebFontCollectionRoute,
  postApiTaskWebFontIconsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiIconsetsV3CategoriesPlatformPlatformLanguageLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiIconsetsV3CategoryCategoryCategorySubcategorySubcategoryAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiIconsetsV3LatestTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiIconsetsV3SearchTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageExactAmountExactAmountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiIconsetsV3TotalSinceSinceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiIconsetsV4SearchTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageExactAmountExactAmountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postApiTaskWebFontCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTaskWebFontIconsRoute, (c) => {
    throw new Error('Not implemented')
  })
