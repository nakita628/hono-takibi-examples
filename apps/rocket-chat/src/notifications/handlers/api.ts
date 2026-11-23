import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteApiV1PushTokenRoute,
  getApiV1BannersIdRoute,
  getApiV1BannersRoute,
  getApiV1PushGetRoute,
  getApiV1PushInfoRoute,
  postApiV1BannersDismissRoute,
  postApiV1PushTestRoute,
  postApiV1PushTokenRoute,
} from '../routes'

export const getApiV1BannersIdRouteHandler: RouteHandler<typeof getApiV1BannersIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1BannersRouteHandler: RouteHandler<typeof getApiV1BannersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1BannersDismissRouteHandler: RouteHandler<
  typeof postApiV1BannersDismissRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PushGetRouteHandler: RouteHandler<typeof getApiV1PushGetRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1PushTokenRouteHandler: RouteHandler<
  typeof deleteApiV1PushTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1PushTokenRouteHandler: RouteHandler<typeof postApiV1PushTokenRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1PushInfoRouteHandler: RouteHandler<typeof getApiV1PushInfoRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1PushTestRouteHandler: RouteHandler<typeof postApiV1PushTestRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
