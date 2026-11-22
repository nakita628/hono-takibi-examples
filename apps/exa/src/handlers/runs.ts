import { OpenAPIHono } from '@hono/zod-openapi'
import { getMonitorsIdRunsRoute, getMonitorsIdRunsRunIdRoute } from '../routes'

const app = new OpenAPIHono()

export const runsHandler = app
  .openapi(getMonitorsIdRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMonitorsIdRunsRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
