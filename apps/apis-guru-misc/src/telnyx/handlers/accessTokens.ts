import { OpenAPIHono } from '@hono/zod-openapi'
import { postTelephonyCredentialsIdTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const accessTokensHandler = app.openapi(postTelephonyCredentialsIdTokenRoute, (c) => {
  throw new Error('Not implemented')
})
