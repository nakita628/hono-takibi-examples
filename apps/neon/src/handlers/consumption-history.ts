import { OpenAPIHono } from '@hono/zod-openapi'
import { getConsumptionHistoryAccountRoute, getConsumptionHistoryProjectsRoute } from '../routes'

const app = new OpenAPIHono()

export const consumptionHistoryHandler = app
  .openapi(getConsumptionHistoryAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumptionHistoryProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
