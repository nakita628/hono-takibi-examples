import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSnisSniNameOrIdRoute,
  getSnisRoute,
  getSnisSniNameOrIdRoute,
  patchSnisSniNameOrIdRoute,
  postSnisRoute,
  putSnisSniNameOrIdRoute,
} from '../routes'

export const getSnisRouteHandler: RouteHandler<typeof getSnisRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSnisRouteHandler: RouteHandler<typeof postSnisRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSnisSniNameOrIdRouteHandler: RouteHandler<
  typeof deleteSnisSniNameOrIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSnisSniNameOrIdRouteHandler: RouteHandler<typeof getSnisSniNameOrIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchSnisSniNameOrIdRouteHandler: RouteHandler<
  typeof patchSnisSniNameOrIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSnisSniNameOrIdRouteHandler: RouteHandler<typeof putSnisSniNameOrIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
