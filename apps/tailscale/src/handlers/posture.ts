import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePostureIntegrationsIdRoute,
  getPostureIntegrationsIdRoute,
  patchPostureIntegrationsIdRoute,
} from '../routes'

export const getPostureIntegrationsIdRouteHandler: RouteHandler<
  typeof getPostureIntegrationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPostureIntegrationsIdRouteHandler: RouteHandler<
  typeof patchPostureIntegrationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePostureIntegrationsIdRouteHandler: RouteHandler<
  typeof deletePostureIntegrationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
