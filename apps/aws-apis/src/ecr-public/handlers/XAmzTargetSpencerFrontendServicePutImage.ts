import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSpencerFrontendServicePutImageRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSpencerFrontendServicePutImageHandler = app.openapi(
  postXAmzTargetSpencerFrontendServicePutImageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
