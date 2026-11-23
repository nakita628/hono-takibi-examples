import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectIdDatasetsDatasetIdModelsModelIdRoute,
  deleteProjectsProjectIdDatasetsDatasetIdRoute,
  deleteProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdRoute,
  deleteProjectsProjectIdDatasetsDatasetIdTablesTableIdRoute,
  deleteProjectsProjectIdJobsJobIdDeleteRoute,
  getProjectsProjectIdDatasetsDatasetIdModelsModelIdRoute,
  getProjectsProjectIdDatasetsDatasetIdModelsRoute,
  getProjectsProjectIdDatasetsDatasetIdRoute,
  getProjectsProjectIdDatasetsDatasetIdRoutinesRoute,
  getProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdRoute,
  getProjectsProjectIdDatasetsDatasetIdTablesRoute,
  getProjectsProjectIdDatasetsDatasetIdTablesTableIdDataRoute,
  getProjectsProjectIdDatasetsDatasetIdTablesTableIdRoute,
  getProjectsProjectIdDatasetsDatasetIdTablesTableIdRowAccessPoliciesRoute,
  getProjectsProjectIdDatasetsRoute,
  getProjectsProjectIdJobsJobIdRoute,
  getProjectsProjectIdJobsRoute,
  getProjectsProjectIdQueriesJobIdRoute,
  getProjectsProjectIdServiceAccountRoute,
  getProjectsRoute,
  patchProjectsProjectIdDatasetsDatasetIdModelsModelIdRoute,
  patchProjectsProjectIdDatasetsDatasetIdRoute,
  patchProjectsProjectIdDatasetsDatasetIdTablesTableIdRoute,
  postProjectsProjectIdDatasetsDatasetIdRoutinesRoute,
  postProjectsProjectIdDatasetsDatasetIdTablesRoute,
  postProjectsProjectIdDatasetsDatasetIdTablesTableIdInsertAllRoute,
  postProjectsProjectIdDatasetsDatasetIdUndeleteRoute,
  postProjectsProjectIdDatasetsRoute,
  postProjectsProjectIdJobsJobIdCancelRoute,
  postProjectsProjectIdJobsRoute,
  postProjectsProjectIdQueriesRoute,
  putProjectsProjectIdDatasetsDatasetIdRoute,
  putProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdRoute,
  putProjectsProjectIdDatasetsDatasetIdTablesTableIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdDatasetsDatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdDatasetsDatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectIdDatasetsDatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsProjectIdDatasetsDatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdDatasetsDatasetIdModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdDatasetsDatasetIdModelsModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdDatasetsDatasetIdModelsModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectIdDatasetsDatasetIdModelsModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdDatasetsDatasetIdRoutinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdDatasetsDatasetIdRoutinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getProjectsProjectIdDatasetsDatasetIdTablesTableIdDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdDatasetsDatasetIdTablesTableIdInsertAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdDatasetsDatasetIdTablesTableIdRowAccessPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdDatasetsDatasetIdUndeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdJobsJobIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdJobsJobIdDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdQueriesJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdServiceAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
