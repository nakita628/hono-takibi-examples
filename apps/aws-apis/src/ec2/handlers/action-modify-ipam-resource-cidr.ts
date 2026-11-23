import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyIpamResourceCidrRoute,
  postActionModifyIpamResourceCidrRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionModifyIpamResourceCidrHandler = app
  .openapi(getActionModifyIpamResourceCidrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyIpamResourceCidrRoute, (c) => {
    throw new Error('Not implemented')
  })
