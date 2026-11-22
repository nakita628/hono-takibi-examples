import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSalesOrdersIdRoute,
  getSalesOrdersRoute,
  patchSalesOrdersIdRoute,
  postSalesOrdersIdCancellationRoute,
  postSalesOrdersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const salesOrdersHandler = app
  .openapi(getSalesOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSalesOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSalesOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSalesOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSalesOrdersIdCancellationRoute, (c) => {
    throw new Error('Not implemented')
  })
