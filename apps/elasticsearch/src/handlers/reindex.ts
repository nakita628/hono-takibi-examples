import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getReindexRoute,
  getReindexTaskIdRoute,
  postReindexRoute,
  postReindexTaskIdCancelRoute,
  postReindexTaskIdRethrottleRoute,
} from '../routes'

export const postReindexTaskIdCancelRouteHandler: RouteHandler<
  typeof postReindexTaskIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReindexTaskIdRouteHandler: RouteHandler<typeof getReindexTaskIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getReindexRouteHandler: RouteHandler<typeof getReindexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postReindexRouteHandler: RouteHandler<typeof postReindexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postReindexTaskIdRethrottleRouteHandler: RouteHandler<
  typeof postReindexTaskIdRethrottleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
