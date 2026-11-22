import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionAllocateIpamPoolCidrRoute, postActionAllocateIpamPoolCidrRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionAllocateIpamPoolCidrHandler = app
  .openapi(getActionAllocateIpamPoolCidrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAllocateIpamPoolCidrRoute, (c) => {
    throw new Error('Not implemented')
  })
