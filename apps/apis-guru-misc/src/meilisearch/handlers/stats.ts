import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getHealthRoute,
  getIndexesBooksStatsRoute,
  getStatsRoute,
  getVersionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const statsHandler = app
  .openapi(getHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesBooksStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
