import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteHubRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDeleteHubHandler = app.openapi(
  postXAmzTargetSageMakerDeleteHubRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
