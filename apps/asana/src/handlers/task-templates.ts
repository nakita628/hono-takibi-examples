import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTaskTemplatesTaskTemplateGidRoute,
  getTaskTemplatesRoute,
  getTaskTemplatesTaskTemplateGidRoute,
  postTaskTemplatesTaskTemplateGidInstantiateTaskRoute,
} from '../routes'

export const getTaskTemplatesRouteHandler: RouteHandler<typeof getTaskTemplatesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getTaskTemplatesTaskTemplateGidRouteHandler: RouteHandler<
  typeof getTaskTemplatesTaskTemplateGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTaskTemplatesTaskTemplateGidRouteHandler: RouteHandler<
  typeof deleteTaskTemplatesTaskTemplateGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTaskTemplatesTaskTemplateGidInstantiateTaskRouteHandler: RouteHandler<
  typeof postTaskTemplatesTaskTemplateGidInstantiateTaskRoute
> = async (c) => {
  throw new Error('Not implemented')
}
