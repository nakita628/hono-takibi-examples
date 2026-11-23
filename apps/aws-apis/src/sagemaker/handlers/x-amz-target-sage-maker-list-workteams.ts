import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListWorkteamsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListWorkteamsHandler = app.openapi(
  postXAmzTargetSageMakerListWorkteamsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
