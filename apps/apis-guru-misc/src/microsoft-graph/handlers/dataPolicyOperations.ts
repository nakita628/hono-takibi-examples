import { OpenAPIHono } from '@hono/zod-openapi'
import { getDataPolicyOperationsCountRoute } from '../routes'

const app = new OpenAPIHono()

export const dataPolicyOperationsHandler = app.openapi(getDataPolicyOperationsCountRoute, (c) => {
  throw new Error('Not implemented')
})
