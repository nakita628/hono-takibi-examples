import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWatchprovidersMoviesRoute,
  getWatchprovidersRegionsRoute,
  getWatchprovidersTvRoute,
} from '../routes'

const app = new OpenAPIHono()

export const watchprovidersHandler = app
  .openapi(getWatchprovidersRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWatchprovidersMoviesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWatchprovidersTvRoute, (c) => {
    throw new Error('Not implemented')
  })
