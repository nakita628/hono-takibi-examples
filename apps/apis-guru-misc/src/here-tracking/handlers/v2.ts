import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV2HealthRoute,
  getV2TimestampRoute,
  getV2VersionRoute,
  postV2IndexRoute,
  postV2TokenRoute,
} from '../routes'

export const postV2IndexRouteHandler: RouteHandler<typeof postV2IndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2HealthRouteHandler: RouteHandler<typeof getV2HealthRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2TimestampRouteHandler: RouteHandler<typeof getV2TimestampRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2TokenRouteHandler: RouteHandler<typeof postV2TokenRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2VersionRouteHandler: RouteHandler<typeof getV2VersionRoute> = async (c) => {
  throw new Error('Not implemented')
}
