import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getNlpAnnotateEntitiesRoute,
  getNlpAnnotateIndexRoute,
  postNlpAnnotateEntitiesRoute,
  postNlpAnnotateIndexRoute,
} from '../routes'

export const getNlpAnnotateIndexRouteHandler: RouteHandler<
  typeof getNlpAnnotateIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNlpAnnotateIndexRouteHandler: RouteHandler<
  typeof postNlpAnnotateIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNlpAnnotateEntitiesRouteHandler: RouteHandler<
  typeof getNlpAnnotateEntitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNlpAnnotateEntitiesRouteHandler: RouteHandler<
  typeof postNlpAnnotateEntitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
