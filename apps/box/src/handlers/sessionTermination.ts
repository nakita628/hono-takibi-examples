import { OpenAPIHono } from '@hono/zod-openapi'
import { postGroupsTerminateSessionsRoute, postUsersTerminateSessionsRoute } from '../routes'

const app = new OpenAPIHono()

export const sessionTerminationHandler = app
  .openapi(postUsersTerminateSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsTerminateSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
