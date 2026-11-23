import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getHearingCongressChamberJacketNumberRoute,
  getHearingCongressChamberRoute,
  getHearingCongressRoute,
  getHearingRoute,
} from '../routes'

export const getHearingRouteHandler: RouteHandler<typeof getHearingRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getHearingCongressRouteHandler: RouteHandler<typeof getHearingCongressRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getHearingCongressChamberRouteHandler: RouteHandler<
  typeof getHearingCongressChamberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getHearingCongressChamberJacketNumberRouteHandler: RouteHandler<
  typeof getHearingCongressChamberJacketNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}
