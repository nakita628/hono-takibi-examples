import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeFeatureMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDescribeFeatureMetadataHandler = app.openapi(
  postXAmzTargetSageMakerDescribeFeatureMetadataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
