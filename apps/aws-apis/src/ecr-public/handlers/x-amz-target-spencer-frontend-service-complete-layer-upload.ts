import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSpencerFrontendServiceCompleteLayerUploadRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSpencerFrontendServiceCompleteLayerUploadHandler = app.openapi(
  postXAmzTargetSpencerFrontendServiceCompleteLayerUploadRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
