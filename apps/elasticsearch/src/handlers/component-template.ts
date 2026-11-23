import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteComponentTemplateNameRoute,
  getComponentTemplateNameRoute,
  getComponentTemplateRoute,
  headComponentTemplateNameRoute,
  postComponentTemplateNameRoute,
  putComponentTemplateNameRoute,
} from '../routes'

export const getComponentTemplateNameRouteHandler: RouteHandler<
  typeof getComponentTemplateNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putComponentTemplateNameRouteHandler: RouteHandler<
  typeof putComponentTemplateNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postComponentTemplateNameRouteHandler: RouteHandler<
  typeof postComponentTemplateNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteComponentTemplateNameRouteHandler: RouteHandler<
  typeof deleteComponentTemplateNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const headComponentTemplateNameRouteHandler: RouteHandler<
  typeof headComponentTemplateNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getComponentTemplateRouteHandler: RouteHandler<
  typeof getComponentTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
