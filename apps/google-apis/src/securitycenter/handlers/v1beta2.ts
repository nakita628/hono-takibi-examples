import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1beta2NameCalculateRoute,
  getV1beta2NameRoute,
  patchV1beta2NameRoute,
} from '../routes'

export const getV1beta2NameRouteHandler: RouteHandler<typeof getV1beta2NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1beta2NameRouteHandler: RouteHandler<typeof patchV1beta2NameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1beta2NameCalculateRouteHandler: RouteHandler<
  typeof getV1beta2NameCalculateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
