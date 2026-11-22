import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postMediaBridge202609AppIdPropertiesObjectTypeBatchArchiveRoute,
  postMediaBridge202609AppIdPropertiesObjectTypeBatchCreateRoute,
  postMediaBridge202609AppIdPropertiesObjectTypeBatchReadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const batchHandler = app
  .openapi(postMediaBridge202609AppIdPropertiesObjectTypeBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMediaBridge202609AppIdPropertiesObjectTypeBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMediaBridge202609AppIdPropertiesObjectTypeBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
