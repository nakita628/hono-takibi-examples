import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getClassificationScopesIdRoute,
  getClassificationScopesRoute,
  patchClassificationScopesIdRoute,
} from '../routes'

export const getClassificationScopesIdRouteHandler: RouteHandler<
  typeof getClassificationScopesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchClassificationScopesIdRouteHandler: RouteHandler<
  typeof patchClassificationScopesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getClassificationScopesRouteHandler: RouteHandler<
  typeof getClassificationScopesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
