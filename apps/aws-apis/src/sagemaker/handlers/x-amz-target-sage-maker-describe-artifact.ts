import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeArtifactRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDescribeArtifactHandler = app.openapi(
  postXAmzTargetSageMakerDescribeArtifactRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
