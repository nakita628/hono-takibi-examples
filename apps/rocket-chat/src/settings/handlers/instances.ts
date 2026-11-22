import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1InstancesGetRoute } from '../routes'

const app = new OpenAPIHono()

export const instancesHandler = app.openapi(getApiV1InstancesGetRoute, (c) => {
  throw new Error('Not implemented')
})
