import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV3MovieLookupImdbRoute,
  getApiV3MovieLookupRoute,
  getApiV3MovieLookupTmdbRoute,
} from '../routes'

const app = new OpenAPIHono()

export const movieLookupHandler = app
  .openapi(getApiV3MovieLookupTmdbRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3MovieLookupImdbRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3MovieLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
