import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSpencerFrontendServiceInitiateLayerUploadRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSpencerFrontendServiceInitiateLayerUploadHandler = app.openapi(
  postXAmzTargetSpencerFrontendServiceInitiateLayerUploadRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
