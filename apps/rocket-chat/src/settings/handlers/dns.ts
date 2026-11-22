import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1DnsResolveSrvRoute, postApiV1DnsResolveTxtRoute } from '../routes'

const app = new OpenAPIHono()

export const dnsHandler = app
  .openapi(postApiV1DnsResolveTxtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DnsResolveSrvRoute, (c) => {
    throw new Error('Not implemented')
  })
