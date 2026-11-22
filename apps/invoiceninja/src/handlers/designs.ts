import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1DesignsIdRoute,
  getApiV1DesignsCreateRoute,
  getApiV1DesignsIdEditRoute,
  getApiV1DesignsIdRoute,
  getApiV1DesignsRoute,
  postApiV1DesignsBulkRoute,
  postApiV1DesignsRoute,
  putApiV1DesignsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const designsHandler = app
  .openapi(getApiV1DesignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DesignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DesignsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1DesignsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1DesignsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DesignsIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DesignsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DesignsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
