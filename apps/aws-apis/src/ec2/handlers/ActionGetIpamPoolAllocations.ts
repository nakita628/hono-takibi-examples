import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetIpamPoolAllocationsRoute,
  postActionGetIpamPoolAllocationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionGetIpamPoolAllocationsHandler = app
  .openapi(getActionGetIpamPoolAllocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetIpamPoolAllocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
