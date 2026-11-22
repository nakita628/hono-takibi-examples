import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiActionsIdRoute, postApiActionsRoute } from '../routes'

const app = new OpenAPIHono()

export const actionsHandler = app
  .openapi(postApiActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiActionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
