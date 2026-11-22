import { OpenAPIHono } from '@hono/zod-openapi'
import { getDataExtractsEventsRoute, getDataExtractsUserDataRoute } from '../routes'

const app = new OpenAPIHono()

export const dataExtractsHandler = app
  .openapi(getDataExtractsEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataExtractsUserDataRoute, (c) => {
    throw new Error('Not implemented')
  })
