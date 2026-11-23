import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetIpamPoolCidrsRoute, postActionGetIpamPoolCidrsRoute } from '../routes'

const app = new OpenAPIHono()

export const actionGetIpamPoolCidrsHandler = app
  .openapi(getActionGetIpamPoolCidrsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetIpamPoolCidrsRoute, (c) => {
    throw new Error('Not implemented')
  })
