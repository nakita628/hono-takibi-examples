import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdateArtifactRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerUpdateArtifactHandler = app.openapi(
  postXAmzTargetSageMakerUpdateArtifactRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
