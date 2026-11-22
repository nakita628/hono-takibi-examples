import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdateArtifactRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerUpdateArtifactHandler = app.openapi(
  postXAmzTargetSageMakerUpdateArtifactRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
