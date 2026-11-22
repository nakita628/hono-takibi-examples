import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectIdDatasetsDatasetIdModelsModelIdRoute,
  getProjectsProjectIdDatasetsDatasetIdModelsModelIdRoute,
  getProjectsProjectIdDatasetsDatasetIdModelsRoute,
  patchProjectsProjectIdDatasetsDatasetIdModelsModelIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const modelsHandler = app
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
