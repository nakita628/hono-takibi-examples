import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSeriesPastRoute,
  getSeriesRoute,
  getSeriesRunningRoute,
  getSeriesSerieIdOrSlugMatchesPastRoute,
  getSeriesSerieIdOrSlugMatchesRoute,
  getSeriesSerieIdOrSlugMatchesRunningRoute,
  getSeriesSerieIdOrSlugMatchesUpcomingRoute,
  getSeriesSerieIdOrSlugPlayersRoute,
  getSeriesSerieIdOrSlugRoute,
  getSeriesSerieIdOrSlugTournamentsRoute,
  getSeriesUpcomingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const seriesHandler = app
  .openapi(getSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSeriesPastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSeriesRunningRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSeriesUpcomingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSeriesSerieIdOrSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSeriesSerieIdOrSlugMatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSeriesSerieIdOrSlugMatchesPastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSeriesSerieIdOrSlugMatchesRunningRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSeriesSerieIdOrSlugMatchesUpcomingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSeriesSerieIdOrSlugPlayersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSeriesSerieIdOrSlugTournamentsRoute, (c) => {
    throw new Error('Not implemented')
  })
