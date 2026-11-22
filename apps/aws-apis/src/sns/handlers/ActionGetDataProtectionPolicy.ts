import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetDataProtectionPolicyRoute,
  postActionGetDataProtectionPolicyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionGetDataProtectionPolicyHandler = app
  .openapi(getActionGetDataProtectionPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetDataProtectionPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
