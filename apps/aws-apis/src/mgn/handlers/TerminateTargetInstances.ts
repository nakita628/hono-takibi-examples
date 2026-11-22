import { OpenAPIHono } from '@hono/zod-openapi'
import { postTerminateTargetInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const TerminateTargetInstancesHandler = app.openapi(
  postTerminateTargetInstancesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
