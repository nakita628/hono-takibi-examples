import { OpenAPIHono } from '@hono/zod-openapi'
import { getDnsBlockingRoute, postDnsBlockingRoute } from '../routes'

const app = new OpenAPIHono()

export const dnsControlHandler = app
  .openapi(getDnsBlockingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDnsBlockingRoute, (c) => {
    throw new Error('Not implemented')
  })
