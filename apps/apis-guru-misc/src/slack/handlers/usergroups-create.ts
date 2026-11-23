import { OpenAPIHono } from '@hono/zod-openapi'
import { postUsergroupsCreateRoute } from '../routes'

const app = new OpenAPIHono()

export const usergroupsCreateHandler = app.openapi(postUsergroupsCreateRoute, (c) => {
  throw new Error('Not implemented')
})
