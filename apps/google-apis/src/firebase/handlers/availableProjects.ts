import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1beta1AvailableProjectsRoute } from '../routes'

const app = new OpenAPIHono()

export const availableProjectsHandler = app.openapi(getV1beta1AvailableProjectsRoute, (c) => {
  throw new Error('Not implemented')
})
