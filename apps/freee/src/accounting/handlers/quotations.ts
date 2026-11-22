import { OpenAPIHono } from '@hono/zod-openapi'
import { getApi1QuotationsIdRoute, getApi1QuotationsRoute } from '../routes'

const app = new OpenAPIHono()

export const quotationsHandler = app
  .openapi(getApi1QuotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1QuotationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
