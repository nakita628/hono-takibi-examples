import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1CinemaDetailSearchCinemaNameRoute } from '../routes'

const app = new OpenAPIHono()

export const cinemaDetailHandler = app.openapi(getApiV1CinemaDetailSearchCinemaNameRoute, (c) => {
  throw new Error('Not implemented')
})
