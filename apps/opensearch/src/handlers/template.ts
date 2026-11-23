import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTemplateNameRoute,
  getTemplateNameRoute,
  getTemplateRoute,
  headTemplateNameRoute,
  postTemplateNameRoute,
  putTemplateNameRoute,
} from '../routes'

export const getTemplateRouteHandler: RouteHandler<typeof getTemplateRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTemplateNameRouteHandler: RouteHandler<typeof deleteTemplateNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getTemplateNameRouteHandler: RouteHandler<typeof getTemplateNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const headTemplateNameRouteHandler: RouteHandler<typeof headTemplateNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postTemplateNameRouteHandler: RouteHandler<typeof postTemplateNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putTemplateNameRouteHandler: RouteHandler<typeof putTemplateNameRoute> = async (c) => {
  throw new Error('Not implemented')
}
