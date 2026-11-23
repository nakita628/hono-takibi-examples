import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteClickwrapsIdRoute,
  getClickwrapsIdRoute,
  getClickwrapsRoute,
  patchClickwrapsIdRoute,
  postClickwrapsRoute,
} from '../routes'

export const getClickwrapsRouteHandler: RouteHandler<typeof getClickwrapsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postClickwrapsRouteHandler: RouteHandler<typeof postClickwrapsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteClickwrapsIdRouteHandler: RouteHandler<typeof deleteClickwrapsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getClickwrapsIdRouteHandler: RouteHandler<typeof getClickwrapsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchClickwrapsIdRouteHandler: RouteHandler<typeof patchClickwrapsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
