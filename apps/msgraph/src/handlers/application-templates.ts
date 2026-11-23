import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getApplicationTemplatesApplicationTemplateIdRoute,
  getApplicationTemplatesCountRoute,
  getApplicationTemplatesRoute,
  postApplicationTemplatesApplicationTemplateIdInstantiateRoute,
} from '../routes'

export const getApplicationTemplatesRouteHandler: RouteHandler<
  typeof getApplicationTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationTemplatesApplicationTemplateIdRouteHandler: RouteHandler<
  typeof getApplicationTemplatesApplicationTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationTemplatesApplicationTemplateIdInstantiateRouteHandler: RouteHandler<
  typeof postApplicationTemplatesApplicationTemplateIdInstantiateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationTemplatesCountRouteHandler: RouteHandler<
  typeof getApplicationTemplatesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}
