import { OpenAPIHono } from '@hono/zod-openapi'
import { getV7DeploymentsRoute, postV7DomainsRoute } from '../routes'

const app = new OpenAPIHono()

export const v7Handler = app
  .openapi(postV7DomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV7DeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
