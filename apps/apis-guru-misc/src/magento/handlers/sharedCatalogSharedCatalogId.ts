import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1SharedCatalogSharedCatalogIdRoute,
  getV1SharedCatalogSharedCatalogIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sharedCatalogSharedCatalogIdHandler = app
  .openapi(deleteV1SharedCatalogSharedCatalogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SharedCatalogSharedCatalogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
