import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AppStoreVersionLocalizationsIdRoute,
  getV1AppStoreVersionLocalizationsIdAppPreviewSetsRoute,
  getV1AppStoreVersionLocalizationsIdAppScreenshotSetsRoute,
  getV1AppStoreVersionLocalizationsIdRoute,
  patchV1AppStoreVersionLocalizationsIdRoute,
  postV1AppStoreVersionLocalizationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appStoreVersionLocalizationsHandler = app
  .openapi(postV1AppStoreVersionLocalizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AppStoreVersionLocalizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppStoreVersionLocalizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AppStoreVersionLocalizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppStoreVersionLocalizationsIdAppPreviewSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppStoreVersionLocalizationsIdAppScreenshotSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
