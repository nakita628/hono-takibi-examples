import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCoursesContentIdActivationsRoute,
  getCoursesContentIdPermissionsRoute,
  getCoursesContentIdRoute,
  getCoursesRoute,
  postCoursesRootContentIdPermissionsUserEmailRoute,
  putCoursesContentIdMetadataCategoryRoute,
  putCoursesContentIdMetadataLevelRoute,
  putCoursesContentIdMetadataTagsRoute,
  putCoursesContentIdMetadataTopicRoute,
} from '../routes'

export const getCoursesRouteHandler: RouteHandler<typeof getCoursesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCoursesContentIdRouteHandler: RouteHandler<
  typeof getCoursesContentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCoursesContentIdActivationsRouteHandler: RouteHandler<
  typeof getCoursesContentIdActivationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putCoursesContentIdMetadataCategoryRouteHandler: RouteHandler<
  typeof putCoursesContentIdMetadataCategoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putCoursesContentIdMetadataLevelRouteHandler: RouteHandler<
  typeof putCoursesContentIdMetadataLevelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putCoursesContentIdMetadataTagsRouteHandler: RouteHandler<
  typeof putCoursesContentIdMetadataTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putCoursesContentIdMetadataTopicRouteHandler: RouteHandler<
  typeof putCoursesContentIdMetadataTopicRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCoursesContentIdPermissionsRouteHandler: RouteHandler<
  typeof getCoursesContentIdPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCoursesRootContentIdPermissionsUserEmailRouteHandler: RouteHandler<
  typeof postCoursesRootContentIdPermissionsUserEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}
