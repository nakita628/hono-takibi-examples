import { OpenAPIHono } from '@hono/zod-openapi'
import { getAppInstanceUsersAppInstanceArnRoute } from '../routes'

const app = new OpenAPIHono()

export const appInstanceUsersAppInstanceArnHandler = app.openapi(
  getAppInstanceUsersAppInstanceArnRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
