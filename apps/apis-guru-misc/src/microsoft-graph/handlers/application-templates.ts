import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getApplicationTemplatesApplicationTemplateIdRoute,
  getApplicationTemplatesCountRoute,
  getApplicationTemplatesRoute,
  postApplicationTemplatesApplicationTemplateIdMicrosoftGraphInstantiateRoute,
} from '../routes'

export const getApplicationTemplatesRouteHandler: RouteHandler<
  typeof getApplicationTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationTemplatesCountRouteHandler: RouteHandler<
  typeof getApplicationTemplatesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationTemplatesApplicationTemplateIdRouteHandler: RouteHandler<
  typeof getApplicationTemplatesApplicationTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationTemplatesApplicationTemplateIdMicrosoftGraphInstantiateRouteHandler: RouteHandler<
  typeof postApplicationTemplatesApplicationTemplateIdMicrosoftGraphInstantiateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
