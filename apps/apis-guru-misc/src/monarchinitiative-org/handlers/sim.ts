import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSimCompareRoute,
  getSimScoreRoute,
  getSimSearchRoute,
  postSimCompareRoute,
  postSimScoreRoute,
} from '../routes'

export const getSimCompareRouteHandler: RouteHandler<typeof getSimCompareRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSimCompareRouteHandler: RouteHandler<typeof postSimCompareRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSimScoreRouteHandler: RouteHandler<typeof getSimScoreRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSimScoreRouteHandler: RouteHandler<typeof postSimScoreRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSimSearchRouteHandler: RouteHandler<typeof getSimSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}
