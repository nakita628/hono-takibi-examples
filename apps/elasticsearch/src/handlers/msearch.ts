import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getMsearchRoute,
  getMsearchTemplateRoute,
  postMsearchRoute,
  postMsearchTemplateRoute,
} from '../routes'

export const getMsearchRouteHandler: RouteHandler<typeof getMsearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMsearchRouteHandler: RouteHandler<typeof postMsearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMsearchTemplateRouteHandler: RouteHandler<typeof getMsearchTemplateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postMsearchTemplateRouteHandler: RouteHandler<
  typeof postMsearchTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
