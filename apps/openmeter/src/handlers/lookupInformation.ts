import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1InfoCurrenciesRoute, getApiV1InfoProgressIdRoute } from '../routes'

const app = new OpenAPIHono()

export const lookupInformationHandler = app
  .openapi(getApiV1InfoCurrenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1InfoProgressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
