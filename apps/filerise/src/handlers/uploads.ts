import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApiUploadCheckExistingPhpRoute,
  postApiUploadRemoveChunksPhpRoute,
  postApiUploadUploadPhpRoute,
} from '../routes'

const app = new OpenAPIHono()

export const uploadsHandler = app
  .openapi(postApiUploadCheckExistingPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUploadRemoveChunksPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUploadUploadPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
