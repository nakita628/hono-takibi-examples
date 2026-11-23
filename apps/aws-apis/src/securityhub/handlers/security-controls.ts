import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSecurityControlsDefinitionsRoute,
  postSecurityControlsBatchGetRoute,
} from '../routes'

export const postSecurityControlsBatchGetRouteHandler: RouteHandler<
  typeof postSecurityControlsBatchGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecurityControlsDefinitionsRouteHandler: RouteHandler<
  typeof getSecurityControlsDefinitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
