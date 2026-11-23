import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionReleaseIpamPoolAllocationRoute,
  postActionReleaseIpamPoolAllocationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionReleaseIpamPoolAllocationHandler = app
  .openapi(getActionReleaseIpamPoolAllocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionReleaseIpamPoolAllocationRoute, (c) => {
    throw new Error('Not implemented')
  })
