import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1beta1FixedIncomeLatestPricesRoute,
  getV1beta1FixedIncomeLatestQuotesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fixedIncomeHandler = app
  .openapi(getV1beta1FixedIncomeLatestPricesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1FixedIncomeLatestQuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
