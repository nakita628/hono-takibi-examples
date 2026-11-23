import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBillinginfoAccountIdBillingIdRoute,
  getBillinginfoAccountIdRoute,
  getBillinginfoRoute,
  patchBillinginfoAccountIdBillingIdRoute,
  putBillinginfoAccountIdBillingIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const billinginfoHandler = app
  .openapi(getBillinginfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBillinginfoAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBillinginfoAccountIdBillingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBillinginfoAccountIdBillingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBillinginfoAccountIdBillingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
