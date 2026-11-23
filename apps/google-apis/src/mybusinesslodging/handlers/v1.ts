import type { RouteHandler } from '@hono/zod-openapi'
import type { getV1NameGetGoogleUpdatedRoute, getV1NameRoute, patchV1NameRoute } from '../routes'

export const getV1NameRouteHandler: RouteHandler<typeof getV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1NameRouteHandler: RouteHandler<typeof patchV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NameGetGoogleUpdatedRouteHandler: RouteHandler<
  typeof getV1NameGetGoogleUpdatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}
