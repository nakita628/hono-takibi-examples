import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1ProcedureIdRoute, getApiV1ProcedureRoute } from '../routes'

const app = new OpenAPIHono()

export const procedureHandler = app
  .openapi(getApiV1ProcedureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ProcedureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
