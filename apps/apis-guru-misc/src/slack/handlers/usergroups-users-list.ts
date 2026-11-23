import { OpenAPIHono } from '@hono/zod-openapi'
import { getUsergroupsUsersListRoute } from '../routes'

const app = new OpenAPIHono()

export const usergroupsUsersListHandler = app.openapi(getUsergroupsUsersListRoute, (c) => {
  throw new Error('Not implemented')
})
