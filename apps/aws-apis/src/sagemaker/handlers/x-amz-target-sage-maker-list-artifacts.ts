import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListArtifactsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListArtifactsHandler = app.openapi(
  postXAmzTargetSageMakerListArtifactsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
