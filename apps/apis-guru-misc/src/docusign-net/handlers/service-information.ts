import { OpenAPIHono } from '@hono/zod-openapi'
import { getServiceInformationRoute } from '../routes'

const app = new OpenAPIHono()

export const serviceInformationHandler = app.openapi(getServiceInformationRoute, (c) => {
  throw new Error('Not implemented')
})
