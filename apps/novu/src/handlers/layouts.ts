import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2LayoutsLayoutIdRoute,
  getV2LayoutsLayoutIdRoute,
  getV2LayoutsLayoutIdUsageRoute,
  getV2LayoutsRoute,
  postV2LayoutsLayoutIdDuplicateRoute,
  postV2LayoutsLayoutIdPreviewRoute,
  postV2LayoutsRoute,
  putV2LayoutsLayoutIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const layoutsHandler = app
  .openapi(postV2LayoutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LayoutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2LayoutsLayoutIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LayoutsLayoutIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2LayoutsLayoutIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LayoutsLayoutIdDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LayoutsLayoutIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LayoutsLayoutIdUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
