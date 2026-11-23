import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteAccountPasswordPolicyRoute,
  postActionDeleteAccountPasswordPolicyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteAccountPasswordPolicyHandler = app
  .openapi(getActionDeleteAccountPasswordPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteAccountPasswordPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
