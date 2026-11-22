import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListEndpointsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListEndpointsHandler = app.openapi(
  postXAmzTargetSageMakerListEndpointsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
