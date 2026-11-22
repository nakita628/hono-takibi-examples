import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeBioTaxonomyRoute } from '../routes'

const app = new OpenAPIHono()

export const typeBioTaxonomyHandler = app.openapi(getRepositorySearchTypeBioTaxonomyRoute, (c) => {
  throw new Error('Not implemented')
})
