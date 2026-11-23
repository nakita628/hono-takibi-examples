import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteLicensesIdRoute, getLicensesIdRoute, putLicensesIdRoute } from '../routes'

const app = new OpenAPIHono()

export const licensesHandler = app
  .openapi(deleteLicensesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLicensesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLicensesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
