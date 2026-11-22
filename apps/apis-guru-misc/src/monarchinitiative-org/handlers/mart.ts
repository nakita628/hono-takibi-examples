import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMartCaseObjectCategoryTaxonRoute,
  getMartDiseaseObjectCategoryTaxonRoute,
  getMartGeneObjectCategoryTaxonRoute,
  getMartOrthologTaxon1Taxon2Route,
  getMartParalogTaxon1Taxon2Route,
} from '../routes'

const app = new OpenAPIHono()

export const martHandler = app
  .openapi(getMartCaseObjectCategoryTaxonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMartDiseaseObjectCategoryTaxonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMartGeneObjectCategoryTaxonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMartOrthologTaxon1Taxon2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMartParalogTaxon1Taxon2Route, (c) => {
    throw new Error('Not implemented')
  })
