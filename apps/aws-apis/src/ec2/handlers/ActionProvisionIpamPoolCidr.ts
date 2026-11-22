import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionProvisionIpamPoolCidrRoute,
  postActionProvisionIpamPoolCidrRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionProvisionIpamPoolCidrHandler = app
  .openapi(getActionProvisionIpamPoolCidrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionProvisionIpamPoolCidrRoute, (c) => {
    throw new Error('Not implemented')
  })
