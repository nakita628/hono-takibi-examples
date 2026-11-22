import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeArtifactRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDescribeArtifactHandler = app.openapi(
  postXAmzTargetSageMakerDescribeArtifactRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
