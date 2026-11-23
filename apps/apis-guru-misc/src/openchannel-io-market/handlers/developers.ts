import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDevelopersDeveloperIdRoute,
  getDevelopersDeveloperIdRoute,
  getDevelopersRoute,
  patchDevelopersDeveloperIdRoute,
  postDevelopersDeveloperIdRoute,
} from '../routes'

export const getDevelopersRouteHandler: RouteHandler<typeof getDevelopersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDevelopersDeveloperIdRouteHandler: RouteHandler<
  typeof deleteDevelopersDeveloperIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevelopersDeveloperIdRouteHandler: RouteHandler<
  typeof getDevelopersDeveloperIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDevelopersDeveloperIdRouteHandler: RouteHandler<
  typeof patchDevelopersDeveloperIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevelopersDeveloperIdRouteHandler: RouteHandler<
  typeof postDevelopersDeveloperIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
