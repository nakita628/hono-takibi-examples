import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ViewsDestroyManyRoute,
  deleteApiV2ViewsViewIdRoute,
  getApiV2ViewsActiveRoute,
  getApiV2ViewsCompactRoute,
  getApiV2ViewsCountManyRoute,
  getApiV2ViewsCountRoute,
  getApiV2ViewsDefinitionsRoute,
  getApiV2ViewsRoute,
  getApiV2ViewsSearchRoute,
  getApiV2ViewsShowManyRoute,
  getApiV2ViewsViewIdCountRoute,
  getApiV2ViewsViewIdExecuteRoute,
  getApiV2ViewsViewIdExportRoute,
  getApiV2ViewsViewIdRoute,
  getApiV2ViewsViewIdTicketsRoute,
  postApiV2ViewsPreviewCountRoute,
  postApiV2ViewsPreviewRoute,
  postApiV2ViewsRoute,
  putApiV2ViewsUpdateManyRoute,
  putApiV2ViewsViewIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const viewsHandler = app
  .openapi(getApiV2ViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ViewsViewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ViewsViewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ViewsViewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ViewsViewIdCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ViewsViewIdExecuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ViewsViewIdExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ViewsViewIdTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ViewsActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ViewsCompactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ViewsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ViewsCountManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ViewsDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ViewsDestroyManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ViewsPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ViewsPreviewCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ViewsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ViewsShowManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ViewsUpdateManyRoute, (c) => {
    throw new Error('Not implemented')
  })
