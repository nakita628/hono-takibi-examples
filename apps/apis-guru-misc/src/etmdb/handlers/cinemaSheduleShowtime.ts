import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1CinemaSheduleShowtimeSearchallParamRoute,
  getApiV1CinemaSheduleShowtimeSearchMovieTitleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cinemaSheduleShowtimeHandler = app
  .openapi(getApiV1CinemaSheduleShowtimeSearchMovieTitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CinemaSheduleShowtimeSearchallParamRoute, (c) => {
    throw new Error('Not implemented')
  })
