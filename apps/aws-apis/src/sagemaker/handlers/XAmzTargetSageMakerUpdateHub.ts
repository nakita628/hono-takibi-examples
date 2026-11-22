import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdateHubRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerUpdateHubHandler = app.openapi(
  postXAmzTargetSageMakerUpdateHubRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
