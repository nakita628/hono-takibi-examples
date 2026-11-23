import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreatePublicIpv4PoolRoute, postActionCreatePublicIpv4PoolRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCreatePublicIpv4PoolHandler = app
  .openapi(getActionCreatePublicIpv4PoolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreatePublicIpv4PoolRoute, (c) => {
    throw new Error('Not implemented')
  })
