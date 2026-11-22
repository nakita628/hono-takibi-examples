import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSearchEntityAutocompleteTermRoute,
  getSearchEntityHpoPlTermRoute,
  getSearchEntityTermRoute,
} from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(getSearchEntityAutocompleteTermRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchEntityHpoPlTermRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchEntityTermRoute, (c) => {
    throw new Error('Not implemented')
  })
