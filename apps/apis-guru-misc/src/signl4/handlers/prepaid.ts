import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPrepaidBalanceRoute,
  getPrepaidSettingsRoute,
  getPrepaidTransactionsRoute,
  putPrepaidSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const prepaidHandler = app
  .openapi(getPrepaidBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrepaidSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPrepaidSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrepaidTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
