import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getStyleCustomCssRoute,
  getStyleLogoPngRoute,
  postStyleCustomCssRoute,
  postStyleLogoPngRoute,
} from '../routes'

export const getStyleCustomCssRouteHandler: RouteHandler<typeof getStyleCustomCssRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postStyleCustomCssRouteHandler: RouteHandler<typeof postStyleCustomCssRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getStyleLogoPngRouteHandler: RouteHandler<typeof getStyleLogoPngRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postStyleLogoPngRouteHandler: RouteHandler<typeof postStyleLogoPngRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
