import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateEndpointConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerCreateEndpointConfigHandler = app.openapi(
  postXAmzTargetSageMakerCreateEndpointConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
