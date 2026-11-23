import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRatingsEloRoute,
  getRatingsSpConferencesRoute,
  getRatingsSpRoute,
  getRatingsSrsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ratingsHandler = app
  .openapi(getRatingsEloRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRatingsSpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRatingsSpConferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRatingsSrsRoute, (c) => {
    throw new Error('Not implemented')
  })
