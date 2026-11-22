import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBillinginfoAccountIdBillingIdRoute,
  patchBillinginfoAccountIdBillingIdRoute,
  putBillinginfoAccountIdBillingIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const budgetHandler = app
  .openapi(getBillinginfoAccountIdBillingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBillinginfoAccountIdBillingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBillinginfoAccountIdBillingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
