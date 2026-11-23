import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOntolIdentifierIndexRoute,
  getOntolInformationContentSubjectCategoryObjectCategorySubjectTaxonRoute,
  getOntolLabelerIndexRoute,
  getOntolSubgraphOntologyNodeRoute,
  postOntolIdentifierIndexRoute,
  postOntolSubgraphOntologyNodeRoute,
} from '../routes'

export const getOntolIdentifierIndexRouteHandler: RouteHandler<
  typeof getOntolIdentifierIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOntolIdentifierIndexRouteHandler: RouteHandler<
  typeof postOntolIdentifierIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOntolInformationContentSubjectCategoryObjectCategorySubjectTaxonRouteHandler: RouteHandler<
  typeof getOntolInformationContentSubjectCategoryObjectCategorySubjectTaxonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOntolLabelerIndexRouteHandler: RouteHandler<
  typeof getOntolLabelerIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOntolSubgraphOntologyNodeRouteHandler: RouteHandler<
  typeof getOntolSubgraphOntologyNodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOntolSubgraphOntologyNodeRouteHandler: RouteHandler<
  typeof postOntolSubgraphOntologyNodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
