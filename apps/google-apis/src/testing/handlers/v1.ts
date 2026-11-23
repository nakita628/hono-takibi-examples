import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ProjectsProjectIdTestMatricesTestMatrixIdRoute,
  getV1TestEnvironmentCatalogEnvironmentTypeRoute,
  postV1ApplicationDetailServiceGetApkDetailsRoute,
  postV1ProjectsProjectIdTestMatricesRoute,
  postV1ProjectsProjectIdTestMatricesTestMatrixIdCancelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1ApplicationDetailServiceGetApkDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectIdTestMatricesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdTestMatricesTestMatrixIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectIdTestMatricesTestMatrixIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TestEnvironmentCatalogEnvironmentTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
