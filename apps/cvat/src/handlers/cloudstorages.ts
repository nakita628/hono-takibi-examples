import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiCloudstoragesIdRoute,
  getApiCloudstoragesIdActionsRoute,
  getApiCloudstoragesIdContentV2Route,
  getApiCloudstoragesIdPreviewRoute,
  getApiCloudstoragesIdRoute,
  getApiCloudstoragesIdStatusRoute,
  getApiCloudstoragesRoute,
  patchApiCloudstoragesIdRoute,
  postApiCloudstoragesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cloudstoragesHandler = app
  .openapi(getApiCloudstoragesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCloudstoragesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCloudstoragesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiCloudstoragesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCloudstoragesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCloudstoragesIdActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCloudstoragesIdContentV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCloudstoragesIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCloudstoragesIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
