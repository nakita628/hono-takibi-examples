import { OpenAPIHono } from '@hono/zod-openapi'
import { postStorageBucketsBucketNameObjectNamePresignedUrlRoute } from '../routes'

const app = new OpenAPIHono()

export const presignedObjectURLsHandler = app.openapi(
  postStorageBucketsBucketNameObjectNamePresignedUrlRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
