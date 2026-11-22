import { OpenAPIHono } from '@hono/zod-openapi'
import { postAddressAutocompleteRoute } from '../routes'

const app = new OpenAPIHono()

export const addressHandler = app.openapi(postAddressAutocompleteRoute, (c) => {
  throw new Error('Not implemented')
})
