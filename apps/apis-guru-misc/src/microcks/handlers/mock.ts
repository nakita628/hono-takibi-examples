import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesIdRoute,
  getExportRoute,
  getServicesCountRoute,
  getServicesIdRoute,
  getServicesLabelsRoute,
  getServicesRoute,
  getServicesSearchRoute,
  postImportRoute,
  putServicesIdMetadataRoute,
  putServicesIdOperationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mockHandler = app
  .openapi(getExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesIdOperationRoute, (c) => {
    throw new Error('Not implemented')
  })
