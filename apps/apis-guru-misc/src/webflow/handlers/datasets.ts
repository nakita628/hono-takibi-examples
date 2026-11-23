import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDatasetsDatasetIdRoute,
  getDatasetsDatasetIdRoute,
  getDatasetsRoute,
  optionsDatasetsDatasetIdRoute,
  optionsDatasetsRoute,
  patchDatasetsDatasetIdRoute,
  postDatasetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const datasetsHandler = app
  .openapi(getDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDatasetsDatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatasetsDatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsDatasetsDatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDatasetsDatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
