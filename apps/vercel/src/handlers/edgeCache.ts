import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1EdgeCacheDangerouslyDeleteBySrcImagesRoute,
  postV1EdgeCacheDangerouslyDeleteByTagsRoute,
  postV1EdgeCacheInvalidateBySrcImagesRoute,
  postV1EdgeCacheInvalidateByTagsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const edgeCacheHandler = app
  .openapi(postV1EdgeCacheInvalidateByTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EdgeCacheDangerouslyDeleteByTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EdgeCacheInvalidateBySrcImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EdgeCacheDangerouslyDeleteBySrcImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
