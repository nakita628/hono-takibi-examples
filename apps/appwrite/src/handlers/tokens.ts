import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTokensTokenIdRoute,
  getTokensBucketsBucketIdFilesFileIdRoute,
  getTokensTokenIdRoute,
  patchTokensTokenIdRoute,
  postTokensBucketsBucketIdFilesFileIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tokensHandler = app
  .openapi(getTokensBucketsBucketIdFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTokensBucketsBucketIdFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
