import { OpenAPIHono } from '@hono/zod-openapi'
import { getCustomsearchV1Route, getCustomsearchV1SiterestrictRoute } from '../routes'

const app = new OpenAPIHono()

export const cseHandler = app
  .openapi(getCustomsearchV1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomsearchV1SiterestrictRoute, (c) => {
    throw new Error('Not implemented')
  })
