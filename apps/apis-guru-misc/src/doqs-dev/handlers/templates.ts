import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTemplatesIdRoute,
  getTemplatesIdFileRoute,
  getTemplatesIdRoute,
  getTemplatesRoute,
  postTemplatesIdFillRoute,
  postTemplatesRoute,
  putTemplatesIdRoute,
} from '../routes'

export const getTemplatesRouteHandler: RouteHandler<typeof getTemplatesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTemplatesRouteHandler: RouteHandler<typeof postTemplatesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTemplatesIdRouteHandler: RouteHandler<typeof deleteTemplatesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getTemplatesIdRouteHandler: RouteHandler<typeof getTemplatesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putTemplatesIdRouteHandler: RouteHandler<typeof putTemplatesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTemplatesIdFileRouteHandler: RouteHandler<typeof getTemplatesIdFileRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postTemplatesIdFillRouteHandler: RouteHandler<
  typeof postTemplatesIdFillRoute
> = async (c) => {
  throw new Error('Not implemented')
}
