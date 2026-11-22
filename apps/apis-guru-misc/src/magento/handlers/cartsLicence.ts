import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CartsLicenceRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsLicenceHandler = app.openapi(getV1CartsLicenceRoute, (c) => {
  throw new Error('Not implemented')
})
