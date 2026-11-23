import { OpenAPIHono } from '@hono/zod-openapi'
import { getSearchCompanyRoute, getSearchKeywordRoute, getSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(getSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchKeywordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchCompanyRoute, (c) => {
    throw new Error('Not implemented')
  })
