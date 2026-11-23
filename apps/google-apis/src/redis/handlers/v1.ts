import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameAuthStringRoute,
  getV1NameLocationsRoute,
  getV1NameOperationsRoute,
  getV1NameRoute,
  getV1ParentInstancesRoute,
  patchV1NameRoute,
  postV1NameCancelRoute,
  postV1NameExportRoute,
  postV1NameFailoverRoute,
  postV1NameImportRoute,
  postV1NameRescheduleMaintenanceRoute,
  postV1NameUpgradeRoute,
  postV1ParentInstancesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameAuthStringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameFailoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameRescheduleMaintenanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
