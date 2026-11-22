import { OpenAPIHono } from '@hono/zod-openapi'
import { getV05HiServicesServiceIdRoute } from '../routes'

const app = new OpenAPIHono()

export const servicesHandler = app.openapi(getV05HiServicesServiceIdRoute, (c) => {
  throw new Error('Not implemented')
})
