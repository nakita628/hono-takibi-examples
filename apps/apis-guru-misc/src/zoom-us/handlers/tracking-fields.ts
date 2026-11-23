import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTrackingFieldsFieldIdRoute,
  getTrackingFieldsFieldIdRoute,
  getTrackingFieldsRoute,
  patchTrackingFieldsFieldIdRoute,
  postTrackingFieldsRoute,
} from '../routes'

export const getTrackingFieldsRouteHandler: RouteHandler<typeof getTrackingFieldsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postTrackingFieldsRouteHandler: RouteHandler<typeof postTrackingFieldsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteTrackingFieldsFieldIdRouteHandler: RouteHandler<
  typeof deleteTrackingFieldsFieldIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTrackingFieldsFieldIdRouteHandler: RouteHandler<
  typeof getTrackingFieldsFieldIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTrackingFieldsFieldIdRouteHandler: RouteHandler<
  typeof patchTrackingFieldsFieldIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
