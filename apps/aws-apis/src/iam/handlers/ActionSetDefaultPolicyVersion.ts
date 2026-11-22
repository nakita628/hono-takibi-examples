import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionSetDefaultPolicyVersionRoute,
  postActionSetDefaultPolicyVersionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionSetDefaultPolicyVersionHandler = app
  .openapi(getActionSetDefaultPolicyVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSetDefaultPolicyVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
