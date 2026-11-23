import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1TaxCountrycodeRoute, getV1TaxIpRoute } from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1TaxCountrycodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TaxIpRoute, (c) => {
    throw new Error('Not implemented')
  })
