import { OpenAPIHono } from '@hono/zod-openapi'
import { postUsergroupsEnableRoute } from '../routes'

const app = new OpenAPIHono()

export const usergroupsEnableHandler = app.openapi(postUsergroupsEnableRoute, (c) => {
  throw new Error('Not implemented')
})
