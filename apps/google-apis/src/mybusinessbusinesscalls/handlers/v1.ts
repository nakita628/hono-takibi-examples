import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1NameRoute,
  getV1ParentBusinesscallsinsightsRoute,
  patchV1NameRoute,
} from '../routes'

export const getV1NameRouteHandler: RouteHandler<typeof getV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1NameRouteHandler: RouteHandler<typeof patchV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ParentBusinesscallsinsightsRouteHandler: RouteHandler<
  typeof getV1ParentBusinesscallsinsightsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
