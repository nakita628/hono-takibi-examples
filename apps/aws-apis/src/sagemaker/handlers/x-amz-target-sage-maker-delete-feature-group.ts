import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteFeatureGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDeleteFeatureGroupHandler = app.openapi(
  postXAmzTargetSageMakerDeleteFeatureGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
