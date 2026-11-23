import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListSubscribedWorkteamsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListSubscribedWorkteamsHandler = app.openapi(
  postXAmzTargetSageMakerListSubscribedWorkteamsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
