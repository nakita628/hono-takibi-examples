import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateAppCookieStickinessPolicyRoute,
  postActionCreateAppCookieStickinessPolicyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCreateAppCookieStickinessPolicyHandler = app
  .openapi(getActionCreateAppCookieStickinessPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateAppCookieStickinessPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
