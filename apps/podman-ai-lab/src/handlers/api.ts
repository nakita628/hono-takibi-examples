import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getApiPsRoute,
  getApiTagsRoute,
  getApiVersionRoute,
  postApiChatRoute,
  postApiGenerateRoute,
  postApiPullRoute,
  postApiShowRoute,
} from '../routes'

export const getApiVersionRouteHandler: RouteHandler<typeof getApiVersionRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTagsRouteHandler: RouteHandler<typeof getApiTagsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPullRouteHandler: RouteHandler<typeof postApiPullRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiShowRouteHandler: RouteHandler<typeof postApiShowRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiGenerateRouteHandler: RouteHandler<typeof postApiGenerateRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiChatRouteHandler: RouteHandler<typeof postApiChatRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPsRouteHandler: RouteHandler<typeof getApiPsRoute> = async (c) => {
  throw new Error('Not implemented')
}
