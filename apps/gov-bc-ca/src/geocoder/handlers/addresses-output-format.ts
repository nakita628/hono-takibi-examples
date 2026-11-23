import { OpenAPIHono } from '@hono/zod-openapi'
import { getAddressesOutputFormatRoute } from '../routes'

const app = new OpenAPIHono()

export const addressesOutputFormatHandler = app.openapi(getAddressesOutputFormatRoute, (c) => {
  throw new Error('Not implemented')
})
