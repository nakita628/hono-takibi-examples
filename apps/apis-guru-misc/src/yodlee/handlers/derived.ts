import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDerivedHoldingSummaryRoute,
  getDerivedNetworthRoute,
  getDerivedTransactionSummaryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const derivedHandler = app
  .openapi(getDerivedHoldingSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDerivedNetworthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDerivedTransactionSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
