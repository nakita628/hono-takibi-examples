import { OpenAPIHono } from '@hono/zod-openapi'
import { getQueryBannedUsersRoute } from '../routes'

const app = new OpenAPIHono()

export const queryBannedUsersHandler = app.openapi(getQueryBannedUsersRoute, (c) => {
  throw new Error('Not implemented')
})
