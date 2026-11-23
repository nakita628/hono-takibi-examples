import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getVideogamesRoute,
  getVideogamesVideogameIdOrSlugLeaguesRoute,
  getVideogamesVideogameIdOrSlugRoute,
  getVideogamesVideogameIdOrSlugSeriesRoute,
  getVideogamesVideogameIdOrSlugTournamentsRoute,
  getVideogamesVideogameIdOrSlugVersionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const videogamesHandler = app
  .openapi(getVideogamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideogamesVideogameIdOrSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideogamesVideogameIdOrSlugLeaguesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideogamesVideogameIdOrSlugSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideogamesVideogameIdOrSlugTournamentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideogamesVideogameIdOrSlugVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
