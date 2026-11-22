import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBackdropsRoute,
  getGenresMovieRoute,
  getGenresTvRoute,
  getLanguagesRoute,
  getNetworkNetworkIdRoute,
  getRegionsRoute,
  getStudioStudioIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tmdbHandler = app
  .openapi(getRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStudioStudioIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworkNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGenresMovieRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGenresTvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBackdropsRoute, (c) => {
    throw new Error('Not implemented')
  })
