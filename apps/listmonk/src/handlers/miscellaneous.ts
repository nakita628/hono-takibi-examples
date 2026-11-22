import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getConfigRoute,
  getDashboardChartsRoute,
  getDashboardCountsRoute,
  getHealthRoute,
  getLangLangRoute,
} from '../routes'

const app = new OpenAPIHono()

export const miscellaneousHandler = app
  .openapi(getHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLangLangRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDashboardChartsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDashboardCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
