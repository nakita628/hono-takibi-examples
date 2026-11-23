import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getFormatDriverDriveridRoute,
  getFormatDriverRaceProjectionsRaceidRoute,
  getFormatDriversRoute,
  getFormatRaceresultRaceidRoute,
  getFormatRacesSeasonRoute,
  getFormatSeriesRoute,
} from '../routes'

export const getFormatDriverRaceProjectionsRaceidRouteHandler: RouteHandler<
  typeof getFormatDriverRaceProjectionsRaceidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFormatDriverDriveridRouteHandler: RouteHandler<
  typeof getFormatDriverDriveridRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFormatDriversRouteHandler: RouteHandler<typeof getFormatDriversRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getFormatRaceresultRaceidRouteHandler: RouteHandler<
  typeof getFormatRaceresultRaceidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFormatRacesSeasonRouteHandler: RouteHandler<
  typeof getFormatRacesSeasonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFormatSeriesRouteHandler: RouteHandler<typeof getFormatSeriesRoute> = async (c) => {
  throw new Error('Not implemented')
}
