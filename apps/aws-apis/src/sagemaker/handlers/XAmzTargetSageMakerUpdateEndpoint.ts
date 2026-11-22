import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdateEndpointRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerUpdateEndpointHandler = app.openapi(
  postXAmzTargetSageMakerUpdateEndpointRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
