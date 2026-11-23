import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionImportStacksToStackSetRoute,
  postActionImportStacksToStackSetRoute,
} from '../routes'

export const getActionImportStacksToStackSetRouteHandler: RouteHandler<
  typeof getActionImportStacksToStackSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionImportStacksToStackSetRouteHandler: RouteHandler<
  typeof postActionImportStacksToStackSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
