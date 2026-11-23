import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getRecurrencesIdIndexRoute,
  getRecurrencesIndexRoute,
  patchRecurrencesIdIndexRoute,
  postRecurrencesIndexRoute,
  putRecurrencesIdIndexRoute,
} from '../routes'

export const getRecurrencesIndexRouteHandler: RouteHandler<
  typeof getRecurrencesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRecurrencesIndexRouteHandler: RouteHandler<
  typeof postRecurrencesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRecurrencesIdIndexRouteHandler: RouteHandler<
  typeof getRecurrencesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchRecurrencesIdIndexRouteHandler: RouteHandler<
  typeof patchRecurrencesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRecurrencesIdIndexRouteHandler: RouteHandler<
  typeof putRecurrencesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
