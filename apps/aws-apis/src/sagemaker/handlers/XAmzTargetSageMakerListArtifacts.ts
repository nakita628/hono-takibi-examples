import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListArtifactsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListArtifactsHandler = app.openapi(
  postXAmzTargetSageMakerListArtifactsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
