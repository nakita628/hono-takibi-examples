import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTemplatesIdRoute,
  getTemplatesIdPreviewRoute,
  getTemplatesIdRoute,
  getTemplatesRoute,
  postTemplatesPreviewRoute,
  postTemplatesRoute,
  putTemplatesIdDefaultRoute,
  putTemplatesIdRoute,
} from '../routes'

export const getTemplatesRouteHandler: RouteHandler<typeof getTemplatesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTemplatesRouteHandler: RouteHandler<typeof postTemplatesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTemplatesIdRouteHandler: RouteHandler<typeof getTemplatesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putTemplatesIdRouteHandler: RouteHandler<typeof putTemplatesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTemplatesIdRouteHandler: RouteHandler<typeof deleteTemplatesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postTemplatesPreviewRouteHandler: RouteHandler<
  typeof postTemplatesPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTemplatesIdPreviewRouteHandler: RouteHandler<
  typeof getTemplatesIdPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putTemplatesIdDefaultRouteHandler: RouteHandler<
  typeof putTemplatesIdDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}
