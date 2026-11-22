import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransactionsIdRoute,
  getApiTransactionsIdRoute,
  getApiTransactionsRoute,
  patchApiTransactionsIdRoute,
  postApiTransactionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transactionHandler = app
  .openapi(getApiTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiTransactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
