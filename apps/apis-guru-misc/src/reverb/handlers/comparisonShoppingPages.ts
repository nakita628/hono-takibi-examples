import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getComparisonShoppingPagesFindRoute,
  getComparisonShoppingPagesIdListingsRoute,
  getComparisonShoppingPagesIdReviewsRoute,
  getComparisonShoppingPagesIdRoute,
  getComparisonShoppingPagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const comparisonShoppingPagesHandler = app
  .openapi(getComparisonShoppingPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getComparisonShoppingPagesFindRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getComparisonShoppingPagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getComparisonShoppingPagesIdListingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getComparisonShoppingPagesIdReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
