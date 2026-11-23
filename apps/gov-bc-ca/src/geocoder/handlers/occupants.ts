import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOccupantsAddressesOutputFormatRoute,
  getOccupantsNearestOutputFormatRoute,
  getOccupantsNearOutputFormatRoute,
  getOccupantsOccupantIDOutputFormatRoute,
  getOccupantsWithinOutputFormatRoute,
} from '../routes'

export const getOccupantsAddressesOutputFormatRouteHandler: RouteHandler<
  typeof getOccupantsAddressesOutputFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOccupantsNearOutputFormatRouteHandler: RouteHandler<
  typeof getOccupantsNearOutputFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOccupantsNearestOutputFormatRouteHandler: RouteHandler<
  typeof getOccupantsNearestOutputFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOccupantsWithinOutputFormatRouteHandler: RouteHandler<
  typeof getOccupantsWithinOutputFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOccupantsOccupantIDOutputFormatRouteHandler: RouteHandler<
  typeof getOccupantsOccupantIDOutputFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}
