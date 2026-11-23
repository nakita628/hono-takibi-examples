import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTransactionRoute,
  getTransactionTransactionNumberRoute,
  postTransactionRoute,
  postTransactionTransactionNumberRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transactionHandler = app
  .openapi(getTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransactionTransactionNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransactionTransactionNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
