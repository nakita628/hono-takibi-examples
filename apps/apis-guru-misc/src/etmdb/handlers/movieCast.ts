import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1MovieCastSearchallParamRoute,
  getApiV1MovieCastSearchMovieTitleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const movieCastHandler = app
  .openapi(getApiV1MovieCastSearchMovieTitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MovieCastSearchallParamRoute, (c) => {
    throw new Error('Not implemented')
  })
