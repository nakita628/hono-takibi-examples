import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteEphemerisEphemerisIdRoute,
  getEphemerisEphemerisIdRoute,
  postEphemerisRoute,
  putEphemerisEphemerisIdRoute,
} from '../routes'

export const postEphemerisRouteHandler: RouteHandler<typeof postEphemerisRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEphemerisEphemerisIdRouteHandler: RouteHandler<
  typeof deleteEphemerisEphemerisIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEphemerisEphemerisIdRouteHandler: RouteHandler<
  typeof getEphemerisEphemerisIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEphemerisEphemerisIdRouteHandler: RouteHandler<
  typeof putEphemerisEphemerisIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
