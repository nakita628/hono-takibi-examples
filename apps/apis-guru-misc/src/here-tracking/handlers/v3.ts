import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV3HealthRoute,
  getV3VersionRoute,
  postV3BatchRoute,
  postV3IndexRoute,
} from '../routes'

export const postV3IndexRouteHandler: RouteHandler<typeof postV3IndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV3BatchRouteHandler: RouteHandler<typeof postV3BatchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV3HealthRouteHandler: RouteHandler<typeof getV3HealthRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV3VersionRouteHandler: RouteHandler<typeof getV3VersionRoute> = async (c) => {
  throw new Error('Not implemented')
}
