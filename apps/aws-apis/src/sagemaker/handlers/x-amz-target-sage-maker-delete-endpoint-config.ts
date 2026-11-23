import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteEndpointConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDeleteEndpointConfigHandler = app.openapi(
  postXAmzTargetSageMakerDeleteEndpointConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
