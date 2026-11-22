import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV4SystemConfigStorageS3TagsIdRoute,
  getV4SystemConfigStorageS3Route,
  getV4SystemConfigStorageS3TagsIdRoute,
  getV4SystemConfigStorageS3TagsRoute,
  postV4SystemConfigStorageS3Route,
  postV4SystemConfigStorageS3TagsRoute,
  putV4SystemConfigStorageS3Route,
} from '../routes'

const app = new OpenAPIHono()

export const systemStorageConfigHandler = app
  .openapi(getV4SystemConfigStorageS3Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SystemConfigStorageS3Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4SystemConfigStorageS3Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SystemConfigStorageS3TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SystemConfigStorageS3TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4SystemConfigStorageS3TagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SystemConfigStorageS3TagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
