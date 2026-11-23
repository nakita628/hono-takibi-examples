import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postAdminJobsTriggerInferenceRoute,
  postAdminJobsTriggerRecrawlRoute,
  postAdminJobsTriggerReindexRoute,
  putAdminUsersUserIdRoute,
} from '../routes'

export const putAdminUsersUserIdRouteHandler: RouteHandler<
  typeof putAdminUsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminJobsTriggerRecrawlRouteHandler: RouteHandler<
  typeof postAdminJobsTriggerRecrawlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminJobsTriggerReindexRouteHandler: RouteHandler<
  typeof postAdminJobsTriggerReindexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminJobsTriggerInferenceRouteHandler: RouteHandler<
  typeof postAdminJobsTriggerInferenceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
