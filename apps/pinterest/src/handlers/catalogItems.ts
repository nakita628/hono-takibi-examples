import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCatalogsItemsBatchBatchIdRoute,
  postCatalogsItemsBatchRoute,
  postCatalogsItemsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const catalogItemsHandler = app
  .openapi(postCatalogsItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCatalogsItemsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatalogsItemsBatchBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
