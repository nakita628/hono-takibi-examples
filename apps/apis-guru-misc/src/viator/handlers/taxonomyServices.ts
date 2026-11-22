import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTaxonomyCategoriesRoute,
  getTaxonomyDestinationsRoute,
  postTaxonomyAttractionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const taxonomyServicesHandler = app
  .openapi(postTaxonomyAttractionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTaxonomyCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTaxonomyDestinationsRoute, (c) => {
    throw new Error('Not implemented')
  })
