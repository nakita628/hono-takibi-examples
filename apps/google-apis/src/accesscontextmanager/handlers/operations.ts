import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1betaNameRoute } from '../routes'

const app = new OpenAPIHono()

export const operationsHandler = app.openapi(getV1betaNameRoute, (c) => {
  throw new Error('Not implemented')
})
