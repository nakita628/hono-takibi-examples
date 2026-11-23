import { OpenAPIHono } from '@hono/zod-openapi'
import { getFeatureCategoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const featureCategoriesHandler = app.openapi(getFeatureCategoriesRoute, (c) => {
  throw new Error('Not implemented')
})
