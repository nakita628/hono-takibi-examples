import { OpenAPIHono } from '@hono/zod-openapi'
import { getCatalogItemCatalogItemIdRoute, getCatalogItemsRoute } from '../routes'

const app = new OpenAPIHono()

export const catalogHandler = app
  .openapi(getCatalogItemCatalogItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatalogItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
