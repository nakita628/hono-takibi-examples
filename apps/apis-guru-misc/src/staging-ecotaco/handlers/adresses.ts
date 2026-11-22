import { OpenAPIHono } from '@hono/zod-openapi'
import { postAddressesPlacesAutocompleteRoute, postAddressesPlacesDetailsRoute } from '../routes'

const app = new OpenAPIHono()

export const adressesHandler = app
  .openapi(postAddressesPlacesAutocompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAddressesPlacesDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
