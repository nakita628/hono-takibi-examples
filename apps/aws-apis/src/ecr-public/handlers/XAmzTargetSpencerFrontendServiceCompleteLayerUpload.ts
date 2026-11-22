import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSpencerFrontendServiceCompleteLayerUploadRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSpencerFrontendServiceCompleteLayerUploadHandler = app.openapi(
  postXAmzTargetSpencerFrontendServiceCompleteLayerUploadRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
