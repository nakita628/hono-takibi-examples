import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCanaryNameRoute,
  getCanaryNameRoute,
  patchCanaryNameRoute,
  postCanaryNameRunsRoute,
  postCanaryNameStartRoute,
  postCanaryNameStopRoute,
  postCanaryRoute,
} from '../routes'

export const postCanaryRouteHandler: RouteHandler<typeof postCanaryRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCanaryNameRouteHandler: RouteHandler<typeof deleteCanaryNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCanaryNameRouteHandler: RouteHandler<typeof getCanaryNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCanaryNameRouteHandler: RouteHandler<typeof patchCanaryNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCanaryNameRunsRouteHandler: RouteHandler<typeof postCanaryNameRunsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postCanaryNameStartRouteHandler: RouteHandler<
  typeof postCanaryNameStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCanaryNameStopRouteHandler: RouteHandler<typeof postCanaryNameStopRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
