import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionProvisionPublicIpv4PoolCidrRoute,
  postActionProvisionPublicIpv4PoolCidrRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionProvisionPublicIpv4PoolCidrHandler = app
  .openapi(getActionProvisionPublicIpv4PoolCidrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionProvisionPublicIpv4PoolCidrRoute, (c) => {
    throw new Error('Not implemented')
  })
