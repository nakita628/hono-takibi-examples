import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1BillingSummaryRoute, getV1WhoamiRoute } from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(getV1WhoamiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BillingSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
