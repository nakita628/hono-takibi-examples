import { OpenAPIHono } from '@hono/zod-openapi'
import { postOpikAuthOauthRoute } from '../routes'

const app = new OpenAPIHono()

export const opikHandler = app.openapi(postOpikAuthOauthRoute, (c) => {
  throw new Error('Not implemented')
})
