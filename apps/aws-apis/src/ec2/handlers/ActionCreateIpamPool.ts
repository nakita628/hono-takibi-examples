import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateIpamPoolRoute, postActionCreateIpamPoolRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCreateIpamPoolHandler = app
  .openapi(getActionCreateIpamPoolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateIpamPoolRoute, (c) => {
    throw new Error('Not implemented')
  })
