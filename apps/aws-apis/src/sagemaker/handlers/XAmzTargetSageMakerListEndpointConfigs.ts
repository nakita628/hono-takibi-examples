import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListEndpointConfigsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListEndpointConfigsHandler = app.openapi(
  postXAmzTargetSageMakerListEndpointConfigsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
