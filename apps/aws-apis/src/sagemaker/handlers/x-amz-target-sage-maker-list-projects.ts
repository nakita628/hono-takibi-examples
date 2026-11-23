import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListProjectsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListProjectsHandler = app.openapi(
  postXAmzTargetSageMakerListProjectsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
