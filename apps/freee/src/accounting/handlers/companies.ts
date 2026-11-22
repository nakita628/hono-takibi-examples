import { OpenAPIHono } from '@hono/zod-openapi'
import { getApi1CompaniesIdRoute, getApi1CompaniesRoute } from '../routes'

const app = new OpenAPIHono()

export const companiesHandler = app
  .openapi(getApi1CompaniesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1CompaniesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
