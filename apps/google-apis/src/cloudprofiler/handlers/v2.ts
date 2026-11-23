import type { RouteHandler } from '@hono/zod-openapi'
import type {
  patchV2NameRoute,
  postV2ParentProfilesCreateOfflineRoute,
  postV2ParentProfilesRoute,
} from '../routes'

export const patchV2NameRouteHandler: RouteHandler<typeof patchV2NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2ParentProfilesRouteHandler: RouteHandler<
  typeof postV2ParentProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2ParentProfilesCreateOfflineRouteHandler: RouteHandler<
  typeof postV2ParentProfilesCreateOfflineRoute
> = async (c) => {
  throw new Error('Not implemented')
}
