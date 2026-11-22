import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiAdminInstanceAdminStatisticsCsvRoute,
  getApiAdminInstanceAdminStatisticsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const instanceAdminHandler = app
  .openapi(getApiAdminInstanceAdminStatisticsCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminInstanceAdminStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
