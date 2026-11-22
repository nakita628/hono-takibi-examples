import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSubusersStatsMonthlyRoute,
  getSubusersStatsRoute,
  getSubusersStatsSumsRoute,
  getSubusersSubuserNameStatsMonthlyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subuserStatisticsHandler = app
  .openapi(getSubusersStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubusersStatsMonthlyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubusersStatsSumsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubusersSubuserNameStatsMonthlyRoute, (c) => {
    throw new Error('Not implemented')
  })
