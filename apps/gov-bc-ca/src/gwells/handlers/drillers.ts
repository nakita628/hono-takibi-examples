import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDrillersIndexRoute,
  getDrillersNamesIndexRoute,
  getDrillersPersonGuidFilesIndexRoute,
} from '../routes'

export const getDrillersIndexRouteHandler: RouteHandler<typeof getDrillersIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getDrillersNamesIndexRouteHandler: RouteHandler<
  typeof getDrillersNamesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDrillersPersonGuidFilesIndexRouteHandler: RouteHandler<
  typeof getDrillersPersonGuidFilesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
