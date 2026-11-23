import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListEndpointConfigsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListEndpointConfigsHandler = app.openapi(
  postXAmzTargetSageMakerListEndpointConfigsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
