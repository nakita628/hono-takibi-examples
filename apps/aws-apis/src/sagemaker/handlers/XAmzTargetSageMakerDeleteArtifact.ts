import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteArtifactRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDeleteArtifactHandler = app.openapi(
  postXAmzTargetSageMakerDeleteArtifactRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
