import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionSetInstanceHealthRoute, postActionSetInstanceHealthRoute } from '../routes'

const app = new OpenAPIHono()

export const actionSetInstanceHealthHandler = app
  .openapi(getActionSetInstanceHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSetInstanceHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
