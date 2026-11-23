import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSignaturesIdIndexRoute,
  getSignaturesIdIndexRoute,
  getSignaturesIndexRoute,
  postSignaturesBatchDeleteIndexRoute,
  postSignaturesIndexRoute,
} from '../routes'

export const getSignaturesIndexRouteHandler: RouteHandler<typeof getSignaturesIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSignaturesIndexRouteHandler: RouteHandler<
  typeof postSignaturesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSignaturesBatchDeleteIndexRouteHandler: RouteHandler<
  typeof postSignaturesBatchDeleteIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSignaturesIdIndexRouteHandler: RouteHandler<
  typeof deleteSignaturesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSignaturesIdIndexRouteHandler: RouteHandler<
  typeof getSignaturesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
