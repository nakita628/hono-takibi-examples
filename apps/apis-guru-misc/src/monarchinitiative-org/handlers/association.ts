import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAssociationBetweenSubjectObjectRoute,
  getAssociationFindSubjectCategoryObjectCategoryRoute,
  getAssociationFindSubjectCategoryRoute,
  getAssociationFromSubjectRoute,
  getAssociationIdRoute,
  getAssociationToObjectRoute,
  getAssociationTypeAssociationTypeRoute,
} from '../routes'

export const getAssociationBetweenSubjectObjectRouteHandler: RouteHandler<
  typeof getAssociationBetweenSubjectObjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAssociationFindSubjectCategoryRouteHandler: RouteHandler<
  typeof getAssociationFindSubjectCategoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAssociationFindSubjectCategoryObjectCategoryRouteHandler: RouteHandler<
  typeof getAssociationFindSubjectCategoryObjectCategoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAssociationFromSubjectRouteHandler: RouteHandler<
  typeof getAssociationFromSubjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAssociationToObjectRouteHandler: RouteHandler<
  typeof getAssociationToObjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAssociationTypeAssociationTypeRouteHandler: RouteHandler<
  typeof getAssociationTypeAssociationTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAssociationIdRouteHandler: RouteHandler<typeof getAssociationIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
