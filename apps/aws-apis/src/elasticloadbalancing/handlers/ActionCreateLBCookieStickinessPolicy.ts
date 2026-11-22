import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateLBCookieStickinessPolicyRoute,
  postActionCreateLBCookieStickinessPolicyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCreateLBCookieStickinessPolicyHandler = app
  .openapi(getActionCreateLBCookieStickinessPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateLBCookieStickinessPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
