import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdateFeatureGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerUpdateFeatureGroupHandler = app.openapi(
  postXAmzTargetSageMakerUpdateFeatureGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
