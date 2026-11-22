import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1CinemaSearchIdRoute } from '../routes'

const app = new OpenAPIHono()

export const cinemaHandler = app.openapi(getApiV1CinemaSearchIdRoute, (c) => {
  throw new Error('Not implemented')
})
