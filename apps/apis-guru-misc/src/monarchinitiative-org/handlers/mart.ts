import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getMartCaseObjectCategoryTaxonRoute,
  getMartDiseaseObjectCategoryTaxonRoute,
  getMartGeneObjectCategoryTaxonRoute,
  getMartOrthologTaxon1Taxon2Route,
  getMartParalogTaxon1Taxon2Route,
} from '../routes'

export const getMartCaseObjectCategoryTaxonRouteHandler: RouteHandler<
  typeof getMartCaseObjectCategoryTaxonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMartDiseaseObjectCategoryTaxonRouteHandler: RouteHandler<
  typeof getMartDiseaseObjectCategoryTaxonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMartGeneObjectCategoryTaxonRouteHandler: RouteHandler<
  typeof getMartGeneObjectCategoryTaxonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMartOrthologTaxon1Taxon2RouteHandler: RouteHandler<
  typeof getMartOrthologTaxon1Taxon2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMartParalogTaxon1Taxon2RouteHandler: RouteHandler<
  typeof getMartParalogTaxon1Taxon2Route
> = async (c) => {
  throw new Error('Not implemented')
}
