import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1AccountsIcanTransactionsFilterRoute,
  getV1AccountsIcanTransactionsRoute,
  getV3AccountsIcanTransactionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transactionsHandler = app
  .openapi(getV1AccountsIcanTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsIcanTransactionsFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3AccountsIcanTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
