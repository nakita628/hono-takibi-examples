import { OpenAPIHono } from '@hono/zod-openapi'
import { getTaxonomiesIndexRoute, getTaxonomiesTaxonomyIdIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const taxonomiesHandler = app
  .openapi(getTaxonomiesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTaxonomiesTaxonomyIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
