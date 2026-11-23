import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTaxonomiesExportTaxonomyIdRoute,
  getTaxonomiesRoute,
  getTaxonomiesTaxonomyTagsTaxonomyIdRoute,
  getTaxonomiesViewTaxonomyIdRoute,
  postTaxonomiesDisableTaxonomyIdRoute,
  postTaxonomiesEnableTaxonomyIdRoute,
  postTaxonomiesUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const taxonomiesHandler = app
  .openapi(getTaxonomiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTaxonomiesViewTaxonomyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTaxonomiesEnableTaxonomyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTaxonomiesDisableTaxonomyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTaxonomiesUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTaxonomiesTaxonomyTagsTaxonomyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTaxonomiesExportTaxonomyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
