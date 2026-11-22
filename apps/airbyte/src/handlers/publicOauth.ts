import { OpenAPIHono } from '@hono/zod-openapi'
import { getPublicV1OauthCallbackRoute } from '../routes'

const app = new OpenAPIHono()

export const publicOauthHandler = app.openapi(getPublicV1OauthCallbackRoute, (c) => {
  throw new Error('Not implemented')
})
