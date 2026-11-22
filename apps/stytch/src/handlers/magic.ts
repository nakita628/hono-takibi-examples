import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1MagicLinksAuthenticateRoute, postV1MagicLinksRoute } from '../routes'

const app = new OpenAPIHono()

export const magicHandler = app
  .openapi(postV1MagicLinksAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MagicLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
