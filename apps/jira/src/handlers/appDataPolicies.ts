import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestApi3DataPolicyProjectRoute, getRestApi3DataPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const appDataPoliciesHandler = app
  .openapi(getRestApi3DataPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3DataPolicyProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
