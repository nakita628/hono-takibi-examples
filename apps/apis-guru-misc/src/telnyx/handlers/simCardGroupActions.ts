import { OpenAPIHono } from '@hono/zod-openapi'
import { getSimCardGroupActionsIdRoute, getSimCardGroupActionsRoute } from '../routes'

const app = new OpenAPIHono()

export const simCardGroupActionsHandler = app
  .openapi(getSimCardGroupActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSimCardGroupActionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
