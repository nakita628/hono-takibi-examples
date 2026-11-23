import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetAccountPasswordPolicyRoute,
  postActionGetAccountPasswordPolicyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionGetAccountPasswordPolicyHandler = app
  .openapi(getActionGetAccountPasswordPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetAccountPasswordPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
