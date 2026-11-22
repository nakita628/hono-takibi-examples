import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdAccountsAdAccountIdOrderLinesOrderLineIdRoute,
  getAdAccountsAdAccountIdOrderLinesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orderLinesHandler = app
  .openapi(getAdAccountsAdAccountIdOrderLinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdOrderLinesOrderLineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
