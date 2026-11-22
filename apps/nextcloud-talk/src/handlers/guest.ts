import { OpenAPIHono } from '@hono/zod-openapi'
import { postOcsV2PhpAppsSpreedApiApiVersionGuestTokenNameRoute } from '../routes'

const app = new OpenAPIHono()

export const guestHandler = app.openapi(
  postOcsV2PhpAppsSpreedApiApiVersionGuestTokenNameRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
