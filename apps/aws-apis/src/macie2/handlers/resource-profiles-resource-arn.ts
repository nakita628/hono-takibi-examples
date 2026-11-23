import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getResourceProfilesResourceArnRoute,
  patchResourceProfilesResourceArnRoute,
} from '../routes'

export const getResourceProfilesResourceArnRouteHandler: RouteHandler<
  typeof getResourceProfilesResourceArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchResourceProfilesResourceArnRouteHandler: RouteHandler<
  typeof patchResourceProfilesResourceArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}
