import { OpenAPIHono } from '@hono/zod-openapi'
import { getUsergroupsUsersListRoute, postUsergroupsUsersUpdateRoute } from '../routes'

const app = new OpenAPIHono()

export const usergroupsUsersHandler = app
  .openapi(getUsergroupsUsersListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsergroupsUsersUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
