import { OpenAPIHono } from '@hono/zod-openapi'
import { getClassificationsElectronicAddressTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const electronicAddressTypesHandler = app.openapi(
  getClassificationsElectronicAddressTypesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
