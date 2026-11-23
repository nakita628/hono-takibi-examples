import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAdhocprofilesV1AdHocProfileServiceDiffRoute,
  postAdhocprofilesV1AdHocProfileServiceGetRoute,
  postAdhocprofilesV1AdHocProfileServiceListRoute,
  postAdhocprofilesV1AdHocProfileServiceUploadRoute,
} from './routes'
import {
  postAdhocprofilesV1AdHocProfileServiceDiffRouteHandler,
  postAdhocprofilesV1AdHocProfileServiceGetRouteHandler,
  postAdhocprofilesV1AdHocProfileServiceListRouteHandler,
  postAdhocprofilesV1AdHocProfileServiceUploadRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postAdhocprofilesV1AdHocProfileServiceDiffRoute,
    postAdhocprofilesV1AdHocProfileServiceDiffRouteHandler,
  )
  .openapi(
    postAdhocprofilesV1AdHocProfileServiceGetRoute,
    postAdhocprofilesV1AdHocProfileServiceGetRouteHandler,
  )
  .openapi(
    postAdhocprofilesV1AdHocProfileServiceListRoute,
    postAdhocprofilesV1AdHocProfileServiceListRouteHandler,
  )
  .openapi(
    postAdhocprofilesV1AdHocProfileServiceUploadRoute,
    postAdhocprofilesV1AdHocProfileServiceUploadRouteHandler,
  )

export default app
