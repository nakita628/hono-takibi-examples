import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getHealthRoute,
  getMetricsRoute,
  getStatsAppRoute,
  getStatsDbRoute,
  getSupportRoute,
} from '../routes'

const app = new OpenAPIHono()

export const healthHandler = app
  .openapi(getHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatsAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatsDbRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSupportRoute, (c) => {
    throw new Error('Not implemented')
  })
