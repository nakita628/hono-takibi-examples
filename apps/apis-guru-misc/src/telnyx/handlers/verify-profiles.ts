import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteVerifyProfilesVerifyProfileIdRoute,
  getVerifyProfilesRoute,
  getVerifyProfilesVerifyProfileIdRoute,
  patchVerifyProfilesVerifyProfileIdRoute,
  postVerifyProfilesRoute,
} from '../routes'

export const getVerifyProfilesRouteHandler: RouteHandler<typeof getVerifyProfilesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postVerifyProfilesRouteHandler: RouteHandler<typeof postVerifyProfilesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteVerifyProfilesVerifyProfileIdRouteHandler: RouteHandler<
  typeof deleteVerifyProfilesVerifyProfileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVerifyProfilesVerifyProfileIdRouteHandler: RouteHandler<
  typeof getVerifyProfilesVerifyProfileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchVerifyProfilesVerifyProfileIdRouteHandler: RouteHandler<
  typeof patchVerifyProfilesVerifyProfileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
