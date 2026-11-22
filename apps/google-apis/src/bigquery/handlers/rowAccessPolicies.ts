import { OpenAPIHono } from '@hono/zod-openapi'
import { getProjectsProjectIdDatasetsDatasetIdTablesTableIdRowAccessPoliciesRoute } from '../routes'

const app = new OpenAPIHono()

export const rowAccessPoliciesHandler = app.openapi(
  getProjectsProjectIdDatasetsDatasetIdTablesTableIdRowAccessPoliciesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
