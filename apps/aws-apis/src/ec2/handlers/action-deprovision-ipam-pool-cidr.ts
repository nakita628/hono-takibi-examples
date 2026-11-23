import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeprovisionIpamPoolCidrRoute,
  postActionDeprovisionIpamPoolCidrRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeprovisionIpamPoolCidrHandler = app
  .openapi(getActionDeprovisionIpamPoolCidrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeprovisionIpamPoolCidrRoute, (c) => {
    throw new Error('Not implemented')
  })
