import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectIdDatasetsDatasetIdRoute,
  getProjectsProjectIdDatasetsDatasetIdRoute,
  getProjectsProjectIdDatasetsRoute,
  patchProjectsProjectIdDatasetsDatasetIdRoute,
  postProjectsProjectIdDatasetsDatasetIdUndeleteRoute,
  postProjectsProjectIdDatasetsRoute,
  putProjectsProjectIdDatasetsDatasetIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const datasetsHandler = app
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
  .openapi(postProjectsProjectIdDatasetsDatasetIdUndeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
