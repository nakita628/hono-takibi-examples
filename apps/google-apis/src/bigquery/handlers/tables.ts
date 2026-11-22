import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectIdDatasetsDatasetIdTablesTableIdRoute,
  getProjectsProjectIdDatasetsDatasetIdTablesRoute,
  getProjectsProjectIdDatasetsDatasetIdTablesTableIdRoute,
  patchProjectsProjectIdDatasetsDatasetIdTablesTableIdRoute,
  postProjectsProjectIdDatasetsDatasetIdTablesRoute,
  postResourceGetIamPolicyRoute,
  postResourceSetIamPolicyRoute,
  postResourceTestIamPermissionsRoute,
  putProjectsProjectIdDatasetsDatasetIdTablesTableIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tablesHandler = app
  .openapi(getProjectsProjectIdDatasetsDatasetIdTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdDatasetsDatasetIdTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdDatasetsDatasetIdTablesTableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdDatasetsDatasetIdTablesTableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectIdDatasetsDatasetIdTablesTableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsProjectIdDatasetsDatasetIdTablesTableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
