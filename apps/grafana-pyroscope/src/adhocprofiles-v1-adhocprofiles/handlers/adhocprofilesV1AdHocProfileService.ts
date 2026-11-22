import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAdhocprofilesV1AdHocProfileServiceDiffRoute,
  postAdhocprofilesV1AdHocProfileServiceGetRoute,
  postAdhocprofilesV1AdHocProfileServiceListRoute,
  postAdhocprofilesV1AdHocProfileServiceUploadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adhocprofilesV1AdHocProfileServiceHandler = app
  .openapi(postAdhocprofilesV1AdHocProfileServiceDiffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdhocprofilesV1AdHocProfileServiceGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdhocprofilesV1AdHocProfileServiceListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdhocprofilesV1AdHocProfileServiceUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
