import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteIndexTemplateNameRoute,
  getIndexTemplateNameRoute,
  getIndexTemplateRoute,
  headIndexTemplateNameRoute,
  postIndexTemplateNameRoute,
  postIndexTemplateSimulateIndexNameRoute,
  postIndexTemplateSimulateNameRoute,
  postIndexTemplateSimulateRoute,
  putIndexTemplateNameRoute,
} from '../routes'

export const getIndexTemplateNameRouteHandler: RouteHandler<
  typeof getIndexTemplateNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putIndexTemplateNameRouteHandler: RouteHandler<
  typeof putIndexTemplateNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIndexTemplateNameRouteHandler: RouteHandler<
  typeof postIndexTemplateNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIndexTemplateNameRouteHandler: RouteHandler<
  typeof deleteIndexTemplateNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const headIndexTemplateNameRouteHandler: RouteHandler<
  typeof headIndexTemplateNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIndexTemplateRouteHandler: RouteHandler<typeof getIndexTemplateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postIndexTemplateSimulateIndexNameRouteHandler: RouteHandler<
  typeof postIndexTemplateSimulateIndexNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIndexTemplateSimulateRouteHandler: RouteHandler<
  typeof postIndexTemplateSimulateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIndexTemplateSimulateNameRouteHandler: RouteHandler<
  typeof postIndexTemplateSimulateNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
