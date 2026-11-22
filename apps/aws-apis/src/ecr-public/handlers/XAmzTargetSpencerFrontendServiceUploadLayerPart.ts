import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSpencerFrontendServiceUploadLayerPartRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSpencerFrontendServiceUploadLayerPartHandler = app.openapi(
  postXAmzTargetSpencerFrontendServiceUploadLayerPartRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
