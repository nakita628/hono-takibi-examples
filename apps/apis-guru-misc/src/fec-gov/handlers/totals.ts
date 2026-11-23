import { OpenAPIHono } from '@hono/zod-openapi'
import { getTotalsByEntityIndexRoute, getTotalsEntityTypeIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const totalsHandler = app
  .openapi(getTotalsByEntityIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTotalsEntityTypeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
