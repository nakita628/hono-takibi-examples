import { OpenAPIHono } from '@hono/zod-openapi'
import { getEmailVerifyRoute } from '../routes'

const app = new OpenAPIHono()

export const emailVerifyHandler = app.openapi(getEmailVerifyRoute, (c) => {
  throw new Error('Not implemented')
})
