import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDestinationsIdRoute,
  getDestinationsIdRoute,
  getDestinationsRoute,
  postDestinationsRoute,
  putDestinationsIdArchiveRoute,
  putDestinationsIdDisableRoute,
  putDestinationsIdEnableRoute,
  putDestinationsIdRoute,
  putDestinationsIdUnarchiveRoute,
  putDestinationsRoute,
} from '../routes'

export const getDestinationsRouteHandler: RouteHandler<typeof getDestinationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postDestinationsRouteHandler: RouteHandler<typeof postDestinationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putDestinationsRouteHandler: RouteHandler<typeof putDestinationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDestinationsIdRouteHandler: RouteHandler<typeof getDestinationsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putDestinationsIdRouteHandler: RouteHandler<typeof putDestinationsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteDestinationsIdRouteHandler: RouteHandler<
  typeof deleteDestinationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDestinationsIdDisableRouteHandler: RouteHandler<
  typeof putDestinationsIdDisableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDestinationsIdArchiveRouteHandler: RouteHandler<
  typeof putDestinationsIdArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDestinationsIdEnableRouteHandler: RouteHandler<
  typeof putDestinationsIdEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDestinationsIdUnarchiveRouteHandler: RouteHandler<
  typeof putDestinationsIdUnarchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}
