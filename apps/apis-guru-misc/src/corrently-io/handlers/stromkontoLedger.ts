import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getStromkontoBalancesRoute,
  getStromkontoChoicesRoute,
  postStromkontoLoginRoute,
  postStromkontoPrepareTransactionRoute,
  postStromkontoRegisterRoute,
} from '../routes'

const app = new OpenAPIHono()

export const stromkontoLedgerHandler = app
  .openapi(getStromkontoBalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStromkontoChoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStromkontoLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStromkontoPrepareTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStromkontoRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
