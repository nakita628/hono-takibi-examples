import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListModelMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListModelMetadataHandler = app.openapi(
  postXAmzTargetSageMakerListModelMetadataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
