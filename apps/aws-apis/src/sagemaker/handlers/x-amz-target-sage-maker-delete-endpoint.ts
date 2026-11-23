import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteEndpointRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDeleteEndpointHandler = app.openapi(
  postXAmzTargetSageMakerDeleteEndpointRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
