import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSeasonsNowRoute,
  getSeasonsRoute,
  getSeasonsUpcomingRoute,
  getSeasonsYearSeasonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const seasonsHandler = app
  .openapi(getSeasonsNowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSeasonsYearSeasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSeasonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSeasonsUpcomingRoute, (c) => {
    throw new Error('Not implemented')
  })
