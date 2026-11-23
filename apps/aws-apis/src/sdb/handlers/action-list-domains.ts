import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListDomainsRoute, postActionListDomainsRoute } from '../routes'

const app = new OpenAPIHono()

export const actionListDomainsHandler = app
  .openapi(getActionListDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
