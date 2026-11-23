import { OpenAPIHono } from '@hono/zod-openapi'
import { postUsergroupsDisableRoute } from '../routes'

const app = new OpenAPIHono()

export const usergroupsDisableHandler = app.openapi(postUsergroupsDisableRoute, (c) => {
  throw new Error('Not implemented')
})
