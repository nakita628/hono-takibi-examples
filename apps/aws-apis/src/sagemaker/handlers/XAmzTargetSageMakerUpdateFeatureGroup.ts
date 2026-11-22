import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdateFeatureGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerUpdateFeatureGroupHandler = app.openapi(
  postXAmzTargetSageMakerUpdateFeatureGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
