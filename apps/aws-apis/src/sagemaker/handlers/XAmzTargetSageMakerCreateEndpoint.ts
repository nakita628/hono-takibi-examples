import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateEndpointRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerCreateEndpointHandler = app.openapi(
  postXAmzTargetSageMakerCreateEndpointRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
