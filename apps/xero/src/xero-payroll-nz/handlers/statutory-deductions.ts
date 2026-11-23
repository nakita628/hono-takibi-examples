import { OpenAPIHono } from '@hono/zod-openapi'
import { getStatutoryDeductionsIdRoute, getStatutoryDeductionsRoute } from '../routes'

const app = new OpenAPIHono()

export const statutoryDeductionsHandler = app
  .openapi(getStatutoryDeductionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatutoryDeductionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
