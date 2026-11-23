import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getGrantsGrantIdDisbursementsDisbursementIdRoute,
  getGrantsGrantIdDisbursementsRoute,
  getGrantsGrantIdRoute,
  getGrantsRoute,
  patchGrantsGrantIdDisbursementsDisbursementIdRoute,
  postGrantsRoute,
} from '../routes'

export const getGrantsRouteHandler: RouteHandler<typeof getGrantsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postGrantsRouteHandler: RouteHandler<typeof postGrantsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getGrantsGrantIdRouteHandler: RouteHandler<typeof getGrantsGrantIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getGrantsGrantIdDisbursementsRouteHandler: RouteHandler<
  typeof getGrantsGrantIdDisbursementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGrantsGrantIdDisbursementsDisbursementIdRouteHandler: RouteHandler<
  typeof getGrantsGrantIdDisbursementsDisbursementIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchGrantsGrantIdDisbursementsDisbursementIdRouteHandler: RouteHandler<
  typeof patchGrantsGrantIdDisbursementsDisbursementIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
