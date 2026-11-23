import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ProjectsProjectIdTestMatricesTestMatrixIdRoute,
  getV1TestEnvironmentCatalogEnvironmentTypeRoute,
  postV1ApplicationDetailServiceGetApkDetailsRoute,
  postV1ProjectsProjectIdTestMatricesRoute,
  postV1ProjectsProjectIdTestMatricesTestMatrixIdCancelRoute,
} from './routes'
import {
  getV1ProjectsProjectIdTestMatricesTestMatrixIdRouteHandler,
  getV1TestEnvironmentCatalogEnvironmentTypeRouteHandler,
  postV1ApplicationDetailServiceGetApkDetailsRouteHandler,
  postV1ProjectsProjectIdTestMatricesRouteHandler,
  postV1ProjectsProjectIdTestMatricesTestMatrixIdCancelRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postV1ApplicationDetailServiceGetApkDetailsRoute,
    postV1ApplicationDetailServiceGetApkDetailsRouteHandler,
  )
  .openapi(
    postV1ProjectsProjectIdTestMatricesRoute,
    postV1ProjectsProjectIdTestMatricesRouteHandler,
  )
  .openapi(
    getV1ProjectsProjectIdTestMatricesTestMatrixIdRoute,
    getV1ProjectsProjectIdTestMatricesTestMatrixIdRouteHandler,
  )
  .openapi(
    postV1ProjectsProjectIdTestMatricesTestMatrixIdCancelRoute,
    postV1ProjectsProjectIdTestMatricesTestMatrixIdCancelRouteHandler,
  )
  .openapi(
    getV1TestEnvironmentCatalogEnvironmentTypeRoute,
    getV1TestEnvironmentCatalogEnvironmentTypeRouteHandler,
  )

export default app
