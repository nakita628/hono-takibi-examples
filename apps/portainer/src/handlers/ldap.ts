import { OpenAPIHono } from '@hono/zod-openapi'
import { postLdapCheckRoute } from '../routes'

const app = new OpenAPIHono()

export const ldapHandler = app.openapi(postLdapCheckRoute, (c) => {
  throw new Error('Not implemented')
})
