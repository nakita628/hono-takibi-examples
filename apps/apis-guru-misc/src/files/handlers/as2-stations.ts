import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAs2StationsIdRoute,
  getAs2StationsIdRoute,
  getAs2StationsRoute,
  patchAs2StationsIdRoute,
  postAs2StationsRoute,
} from '../routes'

export const getAs2StationsRouteHandler: RouteHandler<typeof getAs2StationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAs2StationsRouteHandler: RouteHandler<typeof postAs2StationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAs2StationsIdRouteHandler: RouteHandler<
  typeof deleteAs2StationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAs2StationsIdRouteHandler: RouteHandler<typeof getAs2StationsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchAs2StationsIdRouteHandler: RouteHandler<typeof patchAs2StationsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
