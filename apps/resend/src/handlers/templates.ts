import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postTemplatesRoute,
  getTemplatesRoute,
  getTemplatesIdRoute,
  patchTemplatesIdRoute,
  deleteTemplatesIdRoute,
  postTemplatesIdPublishRoute,
  postTemplatesIdDuplicateRoute,
} from '../routes'

export const postTemplatesRouteHandler: RouteHandler<typeof postTemplatesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTemplatesRouteHandler: RouteHandler<typeof getTemplatesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTemplatesIdRouteHandler: RouteHandler<typeof getTemplatesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTemplatesIdRouteHandler: RouteHandler<typeof patchTemplatesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteTemplatesIdRouteHandler: RouteHandler<typeof deleteTemplatesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postTemplatesIdPublishRouteHandler: RouteHandler<
  typeof postTemplatesIdPublishRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTemplatesIdDuplicateRouteHandler: RouteHandler<
  typeof postTemplatesIdDuplicateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
