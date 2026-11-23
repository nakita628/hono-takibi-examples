import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionPutDataProtectionPolicyRoute,
  postActionPutDataProtectionPolicyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionPutDataProtectionPolicyHandler = app
  .openapi(getActionPutDataProtectionPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionPutDataProtectionPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
