import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSalesSchedulesIdRoute,
  getSalesSchedulesIdRoute,
  getSalesSchedulesRoute,
  patchSalesSchedulesIdRoute,
  postSalesSchedulesIdActualizationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const salesSchedulesHandler = app
  .openapi(getSalesSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSalesSchedulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSalesSchedulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSalesSchedulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSalesSchedulesIdActualizationRoute, (c) => {
    throw new Error('Not implemented')
  })
