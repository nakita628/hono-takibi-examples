import { OpenAPIHono } from '@hono/zod-openapi'
import { getStoragePoliciesRoute, getStoragePoliciesStoragePolicyIdRoute } from '../routes'

const app = new OpenAPIHono()

export const storagePoliciesHandler = app
  .openapi(getStoragePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoragePoliciesStoragePolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
