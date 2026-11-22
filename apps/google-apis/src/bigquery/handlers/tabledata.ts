import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProjectsProjectIdDatasetsDatasetIdTablesTableIdDataRoute,
  postProjectsProjectIdDatasetsDatasetIdTablesTableIdInsertAllRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tabledataHandler = app
  .openapi(getProjectsProjectIdDatasetsDatasetIdTablesTableIdDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdDatasetsDatasetIdTablesTableIdInsertAllRoute, (c) => {
    throw new Error('Not implemented')
  })
