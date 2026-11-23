import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSpencerFrontendServiceBatchDeleteImageRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSpencerFrontendServiceBatchDeleteImageHandler = app.openapi(
  postXAmzTargetSpencerFrontendServiceBatchDeleteImageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
