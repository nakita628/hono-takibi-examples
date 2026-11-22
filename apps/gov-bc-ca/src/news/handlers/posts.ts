import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiPostsKeyRoute,
  getApiPostsKeysIndexKindIndexKeyRoute,
  getApiPostsKeysReferenceRoute,
  getApiPostsLatestIndexKindIndexKeyRoute,
  getApiPostsLatestMediaUriMediaTypeRoute,
  getApiPostsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const postsHandler = app
  .openapi(getApiPostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPostsKeysIndexKindIndexKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPostsKeysReferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPostsLatestIndexKindIndexKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPostsLatestMediaUriMediaTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPostsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
