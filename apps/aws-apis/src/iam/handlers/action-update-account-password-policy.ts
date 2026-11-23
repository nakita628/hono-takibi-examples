import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionUpdateAccountPasswordPolicyRoute,
  postActionUpdateAccountPasswordPolicyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionUpdateAccountPasswordPolicyHandler = app
  .openapi(getActionUpdateAccountPasswordPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUpdateAccountPasswordPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
