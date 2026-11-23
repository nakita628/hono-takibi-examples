import { OpenAPIHono } from '@hono/zod-openapi'
import { getUsergroupsListRoute } from '../routes'

const app = new OpenAPIHono()

export const usergroupsListHandler = app.openapi(getUsergroupsListRoute, (c) => {
  throw new Error('Not implemented')
})
