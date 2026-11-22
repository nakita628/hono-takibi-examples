import { OpenAPIHono } from '@hono/zod-openapi'
import { postIdentityVerifyIdRoute } from '../routes'

const app = new OpenAPIHono()

export const identityHandler = app.openapi(postIdentityVerifyIdRoute, (c) => {
  throw new Error('Not implemented')
})
