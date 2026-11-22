import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateArtifactRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerCreateArtifactHandler = app.openapi(
  postXAmzTargetSageMakerCreateArtifactRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
