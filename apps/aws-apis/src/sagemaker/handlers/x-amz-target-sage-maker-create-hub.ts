import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateHubRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerCreateHubHandler = app.openapi(
  postXAmzTargetSageMakerCreateHubRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
