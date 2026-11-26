import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTemplatesRoute,
  postTemplatesRoute,
  getTemplatesIdRoute,
  putTemplatesIdRoute,
  deleteTemplatesIdRoute,
  postTemplatesIdRenderRoute,
  getTemplatesFieldsRoute,
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

export const postTemplatesIdRenderRouteHandler: RouteHandler<
  typeof postTemplatesIdRenderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTemplatesFieldsRouteHandler: RouteHandler<typeof getTemplatesFieldsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
