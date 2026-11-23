import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getStatsSeriesPeriodFieldsRoute,
  getStatsTotalRoute,
  postStatsIncrementFieldRoute,
} from '../routes'

const app = new OpenAPIHono()

export const statsHandler = app
  .openapi(postStatsIncrementFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatsSeriesPeriodFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatsTotalRoute, (c) => {
    throw new Error('Not implemented')
  })
