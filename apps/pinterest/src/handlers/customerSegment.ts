import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdAccountsAdAccountIdCustomerSegmentsRoute,
  patchAdAccountsAdAccountIdCustomerSegmentsRoute,
  postAdAccountsAdAccountIdCustomerSegmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customerSegmentHandler = app
  .openapi(getAdAccountsAdAccountIdCustomerSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdCustomerSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdAccountsAdAccountIdCustomerSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
