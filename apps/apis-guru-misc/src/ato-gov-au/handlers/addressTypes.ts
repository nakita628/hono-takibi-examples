import { OpenAPIHono } from '@hono/zod-openapi'
import { getClassificationsAddressTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const addressTypesHandler = app.openapi(getClassificationsAddressTypesRoute, (c) => {
  throw new Error('Not implemented')
})
