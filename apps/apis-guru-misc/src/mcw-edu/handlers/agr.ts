import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAgrAffectedGenomicModelsTaxonIdRoute,
  getAgrAllelesTaxonIdRoute,
  getAgrExpressionTaxonIdRoute,
  getAgrPhenotypesTaxonIdRoute,
  getAgrTaxonIdRoute,
  getAgrVariantsTaxonIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agrHandler = app
  .openapi(getAgrAffectedGenomicModelsTaxonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgrAllelesTaxonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgrExpressionTaxonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgrPhenotypesTaxonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgrVariantsTaxonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgrTaxonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
