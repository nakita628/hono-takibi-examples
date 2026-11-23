import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdateFeatureMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerUpdateFeatureMetadataHandler = app.openapi(
  postXAmzTargetSageMakerUpdateFeatureMetadataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
