import { OpenAPIHono } from '@hono/zod-openapi'
import { postVerifyAccountProviderAccountIdRoute } from '../routes'

const app = new OpenAPIHono()

export const verifyAccountHandler = app.openapi(postVerifyAccountProviderAccountIdRoute, (c) => {
  throw new Error('Not implemented')
})
