import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdateEndpointWeightsAndCapacitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerUpdateEndpointWeightsAndCapacitiesHandler = app.openapi(
  postXAmzTargetSageMakerUpdateEndpointWeightsAndCapacitiesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
