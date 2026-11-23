import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTaskAddressFeaturesIdIndexRoute,
  getTaskAddressFeaturesIndexRoute,
} from '../routes'

export const getTaskAddressFeaturesIndexRouteHandler: RouteHandler<
  typeof getTaskAddressFeaturesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTaskAddressFeaturesIdIndexRouteHandler: RouteHandler<
  typeof getTaskAddressFeaturesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
