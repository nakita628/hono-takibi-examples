import { OpenAPIHono } from '@hono/zod-openapi'
import { getClientsClientTypeStatsRoute, getClientsStatsRoute } from '../routes'

const app = new OpenAPIHono()

export const clientsHandler = app
  .openapi(getClientsStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClientsClientTypeStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
