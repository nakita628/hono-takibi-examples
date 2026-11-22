import { OpenAPIHono } from '@hono/zod-openapi'
import { getBillinginfoAccountIdRoute, getBillinginfoRoute } from '../routes'

const app = new OpenAPIHono()

export const billingInfoHandler = app
  .openapi(getBillinginfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBillinginfoAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
