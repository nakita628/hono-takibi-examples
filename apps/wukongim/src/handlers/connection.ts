import { OpenAPIHono } from '@hono/zod-openapi'
import { postConnKickRoute, postConnRemoveRoute } from '../routes'

const app = new OpenAPIHono()

export const connectionHandler = app
  .openapi(postConnRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConnKickRoute, (c) => {
    throw new Error('Not implemented')
  })
