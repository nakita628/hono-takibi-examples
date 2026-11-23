import { OpenAPIHono } from '@hono/zod-openapi'
import { postTerminateTargetInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const terminateTargetInstancesHandler = app.openapi(
  postTerminateTargetInstancesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
