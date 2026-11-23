import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteStructuredOutputIdRoute,
  getStructuredOutputIdRoute,
  getStructuredOutputRoute,
  patchStructuredOutputIdRoute,
  postStructuredOutputRoute,
  postStructuredOutputRunRoute,
} from '../routes'

export const getStructuredOutputRouteHandler: RouteHandler<
  typeof getStructuredOutputRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStructuredOutputRouteHandler: RouteHandler<
  typeof postStructuredOutputRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStructuredOutputIdRouteHandler: RouteHandler<
  typeof getStructuredOutputIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchStructuredOutputIdRouteHandler: RouteHandler<
  typeof patchStructuredOutputIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteStructuredOutputIdRouteHandler: RouteHandler<
  typeof deleteStructuredOutputIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStructuredOutputRunRouteHandler: RouteHandler<
  typeof postStructuredOutputRunRoute
> = async (c) => {
  throw new Error('Not implemented')
}
