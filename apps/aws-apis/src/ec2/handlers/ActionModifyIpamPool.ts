import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionModifyIpamPoolRoute, postActionModifyIpamPoolRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionModifyIpamPoolHandler = app
  .openapi(getActionModifyIpamPoolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyIpamPoolRoute, (c) => {
    throw new Error('Not implemented')
  })
