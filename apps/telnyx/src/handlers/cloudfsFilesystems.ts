import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteStorageCloudfsIdRoute,
  getStorageCloudfsIdRoute,
  getStorageCloudfsRoute,
  patchStorageCloudfsIdRoute,
  postStorageCloudfsIdActionsRotateMetaTokenRoute,
  postStorageCloudfsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cloudfsFilesystemsHandler = app
  .openapi(getStorageCloudfsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStorageCloudfsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStorageCloudfsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStorageCloudfsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStorageCloudfsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStorageCloudfsIdActionsRotateMetaTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
