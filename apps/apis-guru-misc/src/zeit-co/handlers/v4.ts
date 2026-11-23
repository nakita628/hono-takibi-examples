import { OpenAPIHono } from '@hono/zod-openapi'
import { getV4DomainsNameRoute, getV4DomainsRoute } from '../routes'

const app = new OpenAPIHono()

export const v4Handler = app
  .openapi(getV4DomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4DomainsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
