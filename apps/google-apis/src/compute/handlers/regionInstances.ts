import { OpenAPIHono } from '@hono/zod-openapi'
import { postProjectsProjectRegionsRegionInstancesBulkInsertRoute } from '../routes'

const app = new OpenAPIHono()

export const regionInstancesHandler = app.openapi(
  postProjectsProjectRegionsRegionInstancesBulkInsertRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
