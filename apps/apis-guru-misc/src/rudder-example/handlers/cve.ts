import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCveCheckConfigRoute,
  getCveCheckLastRoute,
  getCveRoute,
  postCveCheckConfigRoute,
  postCveCheckRoute,
  postCveListRoute,
  postCveUpdateFsRoute,
  postCveUpdateIndexRoute,
} from '../routes'

export const getCveRouteHandler: RouteHandler<typeof getCveRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCveCheckRouteHandler: RouteHandler<typeof postCveCheckRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCveCheckConfigRouteHandler: RouteHandler<typeof getCveCheckConfigRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postCveCheckConfigRouteHandler: RouteHandler<typeof postCveCheckConfigRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCveCheckLastRouteHandler: RouteHandler<typeof getCveCheckLastRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCveListRouteHandler: RouteHandler<typeof postCveListRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCveUpdateIndexRouteHandler: RouteHandler<typeof postCveUpdateIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postCveUpdateFsRouteHandler: RouteHandler<typeof postCveUpdateFsRoute> = async (c) => {
  throw new Error('Not implemented')
}
