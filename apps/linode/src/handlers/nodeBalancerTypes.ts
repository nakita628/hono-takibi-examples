import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiVersionNodebalancersTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const nodeBalancerTypesHandler = app.openapi(getApiVersionNodebalancersTypesRoute, (c) => {
  throw new Error('Not implemented')
})
