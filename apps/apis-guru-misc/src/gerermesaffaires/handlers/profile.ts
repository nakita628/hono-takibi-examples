import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getProfileIdFileRoute,
  getProfileRoute,
  patchProfileEmailRoute,
  patchProfileMobileRoute,
  patchProfileRoute,
  postProfileRoute,
} from '../routes'

export const getProfileRouteHandler: RouteHandler<typeof getProfileRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchProfileRouteHandler: RouteHandler<typeof patchProfileRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postProfileRouteHandler: RouteHandler<typeof postProfileRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchProfileEmailRouteHandler: RouteHandler<typeof patchProfileEmailRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getProfileIdFileRouteHandler: RouteHandler<typeof getProfileIdFileRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchProfileMobileRouteHandler: RouteHandler<typeof patchProfileMobileRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
