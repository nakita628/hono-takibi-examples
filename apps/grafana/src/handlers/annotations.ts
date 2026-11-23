import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAnnotationsAnnotationIdRoute,
  getAnnotationsAnnotationIdRoute,
  getAnnotationsRoute,
  getAnnotationsTagsRoute,
  patchAnnotationsAnnotationIdRoute,
  postAnnotationsGraphiteRoute,
  postAnnotationsMassDeleteRoute,
  postAnnotationsRoute,
  putAnnotationsAnnotationIdRoute,
} from '../routes'

export const getAnnotationsRouteHandler: RouteHandler<typeof getAnnotationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAnnotationsRouteHandler: RouteHandler<typeof postAnnotationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAnnotationsGraphiteRouteHandler: RouteHandler<
  typeof postAnnotationsGraphiteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAnnotationsMassDeleteRouteHandler: RouteHandler<
  typeof postAnnotationsMassDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAnnotationsTagsRouteHandler: RouteHandler<typeof getAnnotationsTagsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteAnnotationsAnnotationIdRouteHandler: RouteHandler<
  typeof deleteAnnotationsAnnotationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAnnotationsAnnotationIdRouteHandler: RouteHandler<
  typeof getAnnotationsAnnotationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAnnotationsAnnotationIdRouteHandler: RouteHandler<
  typeof patchAnnotationsAnnotationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAnnotationsAnnotationIdRouteHandler: RouteHandler<
  typeof putAnnotationsAnnotationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
