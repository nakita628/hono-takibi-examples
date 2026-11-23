import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionResumeProcessesRoute, postActionResumeProcessesRoute } from '../routes'

const app = new OpenAPIHono()

export const actionResumeProcessesHandler = app
  .openapi(getActionResumeProcessesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionResumeProcessesRoute, (c) => {
    throw new Error('Not implemented')
  })
