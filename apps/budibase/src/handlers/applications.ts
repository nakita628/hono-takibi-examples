import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApplicationsAppIdRoute,
  getApplicationsAppIdRoute,
  postApplicationsAppIdExportRoute,
  postApplicationsAppIdImportRoute,
  postApplicationsAppIdPublishRoute,
  postApplicationsAppIdUnpublishRoute,
  postApplicationsRoute,
  postApplicationsSearchRoute,
  putApplicationsAppIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationsHandler = app
  .openapi(postApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApplicationsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApplicationsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsAppIdUnpublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsAppIdPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsAppIdImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsAppIdExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
