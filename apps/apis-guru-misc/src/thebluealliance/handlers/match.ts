import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getMatchMatchKeyRoute,
  getMatchMatchKeySimpleRoute,
  getMatchMatchKeyTimeseriesRoute,
  getMatchMatchKeyZebraMotionworksRoute,
} from '../routes'

export const getMatchMatchKeyRouteHandler: RouteHandler<typeof getMatchMatchKeyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getMatchMatchKeySimpleRouteHandler: RouteHandler<
  typeof getMatchMatchKeySimpleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMatchMatchKeyTimeseriesRouteHandler: RouteHandler<
  typeof getMatchMatchKeyTimeseriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMatchMatchKeyZebraMotionworksRouteHandler: RouteHandler<
  typeof getMatchMatchKeyZebraMotionworksRoute
> = async (c) => {
  throw new Error('Not implemented')
}
