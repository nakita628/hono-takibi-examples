import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCreditUnitsRoute,
  postCreditUnitsCreditUnitIdArchiveCommandRoute,
  postCreditUnitsCreditUnitIdReactivateCommandRoute,
  postCreditUnitsCreditUnitIdRoute,
  postCreditUnitsRoute,
} from '../routes'

export const getCreditUnitsRouteHandler: RouteHandler<typeof getCreditUnitsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCreditUnitsRouteHandler: RouteHandler<typeof postCreditUnitsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCreditUnitsCreditUnitIdArchiveCommandRouteHandler: RouteHandler<
  typeof postCreditUnitsCreditUnitIdArchiveCommandRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCreditUnitsCreditUnitIdRouteHandler: RouteHandler<
  typeof postCreditUnitsCreditUnitIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCreditUnitsCreditUnitIdReactivateCommandRouteHandler: RouteHandler<
  typeof postCreditUnitsCreditUnitIdReactivateCommandRoute
> = async (c) => {
  throw new Error('Not implemented')
}
