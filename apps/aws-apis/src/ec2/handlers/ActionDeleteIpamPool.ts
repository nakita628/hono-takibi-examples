import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteIpamPoolRoute, postActionDeleteIpamPoolRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteIpamPoolHandler = app
  .openapi(getActionDeleteIpamPoolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteIpamPoolRoute, (c) => {
    throw new Error('Not implemented')
  })
