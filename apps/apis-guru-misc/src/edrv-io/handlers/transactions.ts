import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1TransactionsIdCostRoute,
  getV1TransactionsIdRoute,
  getV1TransactionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transactionsHandler = app
  .openapi(getV1TransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TransactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TransactionsIdCostRoute, (c) => {
    throw new Error('Not implemented')
  })
