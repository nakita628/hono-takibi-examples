import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeletePublicIpv4PoolRoute, postActionDeletePublicIpv4PoolRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeletePublicIpv4PoolHandler = app
  .openapi(getActionDeletePublicIpv4PoolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeletePublicIpv4PoolRoute, (c) => {
    throw new Error('Not implemented')
  })
