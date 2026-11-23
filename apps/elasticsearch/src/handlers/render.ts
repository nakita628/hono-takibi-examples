import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getRenderTemplateIdRoute,
  getRenderTemplateRoute,
  postRenderTemplateIdRoute,
  postRenderTemplateRoute,
} from '../routes'

export const getRenderTemplateRouteHandler: RouteHandler<typeof getRenderTemplateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postRenderTemplateRouteHandler: RouteHandler<typeof postRenderTemplateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getRenderTemplateIdRouteHandler: RouteHandler<
  typeof getRenderTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRenderTemplateIdRouteHandler: RouteHandler<
  typeof postRenderTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
