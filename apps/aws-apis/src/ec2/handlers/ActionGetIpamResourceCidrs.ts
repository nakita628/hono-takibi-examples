import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetIpamResourceCidrsRoute, postActionGetIpamResourceCidrsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionGetIpamResourceCidrsHandler = app
  .openapi(getActionGetIpamResourceCidrsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetIpamResourceCidrsRoute, (c) => {
    throw new Error('Not implemented')
  })
