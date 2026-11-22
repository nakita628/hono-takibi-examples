import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeCloudClipboardItemsCloudClipboardItemIdRoute,
  deleteMeCloudClipboardRoute,
  getMeCloudClipboardItemsCloudClipboardItemIdRoute,
  getMeCloudClipboardItemsCountRoute,
  getMeCloudClipboardItemsRoute,
  getMeCloudClipboardRoute,
  patchMeCloudClipboardItemsCloudClipboardItemIdRoute,
  patchMeCloudClipboardRoute,
  postMeCloudClipboardItemsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meCloudClipboardRootHandler = app
  .openapi(getMeCloudClipboardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeCloudClipboardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeCloudClipboardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCloudClipboardItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCloudClipboardItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCloudClipboardItemsCloudClipboardItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeCloudClipboardItemsCloudClipboardItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeCloudClipboardItemsCloudClipboardItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCloudClipboardItemsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
