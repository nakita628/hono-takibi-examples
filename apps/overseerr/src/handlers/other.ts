import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getKeywordKeywordIdRoute,
  getWatchprovidersMoviesRoute,
  getWatchprovidersRegionsRoute,
  getWatchprovidersTvRoute,
} from '../routes'

const app = new OpenAPIHono()

export const otherHandler = app
  .openapi(getKeywordKeywordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWatchprovidersRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWatchprovidersMoviesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWatchprovidersTvRoute, (c) => {
    throw new Error('Not implemented')
  })
