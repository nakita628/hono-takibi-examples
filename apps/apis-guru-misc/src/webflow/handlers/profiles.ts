import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getProfilesProfileIdRoute,
  optionsProfilesProfileIdRoute,
  patchProfilesProfileIdRoute,
} from '../routes'

export const getProfilesProfileIdRouteHandler: RouteHandler<
  typeof getProfilesProfileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsProfilesProfileIdRouteHandler: RouteHandler<
  typeof optionsProfilesProfileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchProfilesProfileIdRouteHandler: RouteHandler<
  typeof patchProfilesProfileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
