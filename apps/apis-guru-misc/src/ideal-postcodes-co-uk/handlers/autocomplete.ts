import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAutocompleteAddressesAddressGbrRoute,
  getAutocompleteAddressesAddressUsaRoute,
  getAutocompleteAddressesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const autocompleteHandler = app
  .openapi(getAutocompleteAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutocompleteAddressesAddressGbrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutocompleteAddressesAddressUsaRoute, (c) => {
    throw new Error('Not implemented')
  })
