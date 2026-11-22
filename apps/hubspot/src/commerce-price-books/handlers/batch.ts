import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchArchiveRoute,
  postCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchCreateRoute,
  postCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const batchHandler = app
  .openapi(postCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
