import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeprovisionPublicIpv4PoolCidrRoute,
  postActionDeprovisionPublicIpv4PoolCidrRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeprovisionPublicIpv4PoolCidrHandler = app
  .openapi(getActionDeprovisionPublicIpv4PoolCidrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeprovisionPublicIpv4PoolCidrRoute, (c) => {
    throw new Error('Not implemented')
  })
