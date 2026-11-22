import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1AddressesValidateRoute, putV1AddressesRecognizeRoute } from '../routes'

const app = new OpenAPIHono()

export const addressesHandler = app
  .openapi(putV1AddressesRecognizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AddressesValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
