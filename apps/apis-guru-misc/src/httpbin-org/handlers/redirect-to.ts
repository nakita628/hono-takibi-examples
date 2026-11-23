import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRedirectToRoute,
  getRedirectToRoute,
  patchRedirectToRoute,
  postRedirectToRoute,
  putRedirectToRoute,
  traceRedirectToRoute,
} from '../routes'

export const deleteRedirectToRouteHandler: RouteHandler<typeof deleteRedirectToRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getRedirectToRouteHandler: RouteHandler<typeof getRedirectToRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchRedirectToRouteHandler: RouteHandler<typeof patchRedirectToRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRedirectToRouteHandler: RouteHandler<typeof postRedirectToRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putRedirectToRouteHandler: RouteHandler<typeof putRedirectToRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const traceRedirectToRouteHandler: RouteHandler<typeof traceRedirectToRoute> = async (c) => {
  throw new Error('Not implemented')
}
