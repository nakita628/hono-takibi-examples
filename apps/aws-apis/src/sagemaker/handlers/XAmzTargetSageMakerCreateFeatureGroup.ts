import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateFeatureGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerCreateFeatureGroupHandler = app.openapi(
  postXAmzTargetSageMakerCreateFeatureGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
