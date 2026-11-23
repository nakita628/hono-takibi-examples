import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteArtifactRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDeleteArtifactHandler = app.openapi(
  postXAmzTargetSageMakerDeleteArtifactRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
