import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1CinemaScheduleSearchallParamRoute,
  getApiV1CinemaScheduleSearchMovieTitleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cinemaScheduleHandler = app
  .openapi(getApiV1CinemaScheduleSearchMovieTitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CinemaScheduleSearchallParamRoute, (c) => {
    throw new Error('Not implemented')
  })
