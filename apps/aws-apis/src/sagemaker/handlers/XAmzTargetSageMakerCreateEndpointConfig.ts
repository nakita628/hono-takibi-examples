import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateEndpointConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerCreateEndpointConfigHandler = app.openapi(
  postXAmzTargetSageMakerCreateEndpointConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
