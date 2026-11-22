import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdRoute,
  getProjectsProjectIdDatasetsDatasetIdRoutinesRoute,
  getProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdRoute,
  postProjectsProjectIdDatasetsDatasetIdRoutinesRoute,
  putProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const routinesHandler = app
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
