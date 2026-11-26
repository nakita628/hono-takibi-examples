import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDuplicatesRoute,
  getDuplicatesRoute,
  postDuplicatesResolveRoute,
  deleteDuplicatesIdRoute,
} from '../routes'

export const deleteDuplicatesRouteHandler: RouteHandler<typeof deleteDuplicatesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getDuplicatesRouteHandler: RouteHandler<typeof getDuplicatesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postDuplicatesResolveRouteHandler: RouteHandler<
  typeof postDuplicatesResolveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDuplicatesIdRouteHandler: RouteHandler<typeof deleteDuplicatesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
