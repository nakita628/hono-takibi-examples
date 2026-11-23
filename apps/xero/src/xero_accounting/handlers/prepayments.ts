import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePrepaymentsPrepaymentIDAllocationsAllocationIDRoute,
  getPrepaymentsPrepaymentIDHistoryRoute,
  getPrepaymentsPrepaymentIDRoute,
  getPrepaymentsRoute,
  putPrepaymentsPrepaymentIDAllocationsRoute,
  putPrepaymentsPrepaymentIDHistoryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const prepaymentsHandler = app
  .openapi(getPrepaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrepaymentsPrepaymentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPrepaymentsPrepaymentIDAllocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePrepaymentsPrepaymentIDAllocationsAllocationIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrepaymentsPrepaymentIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPrepaymentsPrepaymentIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
