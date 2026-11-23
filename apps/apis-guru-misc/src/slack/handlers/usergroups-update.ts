import { OpenAPIHono } from '@hono/zod-openapi'
import { postUsergroupsUpdateRoute } from '../routes'

const app = new OpenAPIHono()

export const usergroupsUpdateHandler = app.openapi(postUsergroupsUpdateRoute, (c) => {
  throw new Error('Not implemented')
})
