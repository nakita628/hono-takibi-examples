import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDeveloperAccountsDeveloperAccountIdRoute,
  getDeveloperAccountsDeveloperAccountIdRoute,
  getDeveloperAccountsRoute,
  patchDeveloperAccountsDeveloperAccountIdRoute,
  postDeveloperAccountsDeveloperAccountIdRoute,
} from '../routes'

export const getDeveloperAccountsRouteHandler: RouteHandler<
  typeof getDeveloperAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDeveloperAccountsDeveloperAccountIdRouteHandler: RouteHandler<
  typeof deleteDeveloperAccountsDeveloperAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDeveloperAccountsDeveloperAccountIdRouteHandler: RouteHandler<
  typeof getDeveloperAccountsDeveloperAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDeveloperAccountsDeveloperAccountIdRouteHandler: RouteHandler<
  typeof patchDeveloperAccountsDeveloperAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDeveloperAccountsDeveloperAccountIdRouteHandler: RouteHandler<
  typeof postDeveloperAccountsDeveloperAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
