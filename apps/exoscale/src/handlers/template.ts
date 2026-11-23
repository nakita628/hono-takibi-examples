import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTemplateIdRoute,
  getTemplateIdRoute,
  getTemplateRoute,
  postTemplateIdRoute,
  postTemplateRoute,
  putTemplateIdRoute,
} from '../routes'

export const deleteTemplateIdRouteHandler: RouteHandler<typeof deleteTemplateIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postTemplateIdRouteHandler: RouteHandler<typeof postTemplateIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putTemplateIdRouteHandler: RouteHandler<typeof putTemplateIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTemplateIdRouteHandler: RouteHandler<typeof getTemplateIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTemplateRouteHandler: RouteHandler<typeof getTemplateRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTemplateRouteHandler: RouteHandler<typeof postTemplateRoute> = async (c) => {
  throw new Error('Not implemented')
}
