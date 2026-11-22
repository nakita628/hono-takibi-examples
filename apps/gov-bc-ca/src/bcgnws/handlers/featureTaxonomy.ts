import { OpenAPIHono } from '@hono/zod-openapi'
import { getFeatureCategoriesRoute, getFeatureClassesRoute, getFeatureTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const featureTaxonomyHandler = app
  .openapi(getFeatureCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFeatureClassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFeatureTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
