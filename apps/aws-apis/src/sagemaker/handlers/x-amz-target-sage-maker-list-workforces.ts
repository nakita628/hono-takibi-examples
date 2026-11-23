import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListWorkforcesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListWorkforcesHandler = app.openapi(
  postXAmzTargetSageMakerListWorkforcesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
