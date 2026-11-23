import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionsIdRoute, getActionsRoute } from '../routes'

const app = new OpenAPIHono()

export const actionsHandler = app
  .openapi(getActionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
