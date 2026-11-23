import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteResourcesIdRoute,
  deleteResourcesRoute,
  getResourcesDownloadRoute,
  getResourcesIdRoute,
  getResourcesListIdRoute,
  getResourcesListRoute,
  getResourcesPreviewRoute,
  getResourcesRoute,
  patchResourcesIdRoute,
  postResourcesCompressRoute,
  postResourcesCopyRoute,
  postResourcesExtractRoute,
  postResourcesMoveRoute,
  postResourcesRoute,
  postResourcesUploadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const resourcesHandler = app
  .openapi(deleteResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postResourcesCompressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postResourcesCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postResourcesExtractRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postResourcesMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postResourcesUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteResourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchResourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
