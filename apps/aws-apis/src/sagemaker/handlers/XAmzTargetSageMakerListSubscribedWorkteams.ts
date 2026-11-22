import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListSubscribedWorkteamsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListSubscribedWorkteamsHandler = app.openapi(
  postXAmzTargetSageMakerListSubscribedWorkteamsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
