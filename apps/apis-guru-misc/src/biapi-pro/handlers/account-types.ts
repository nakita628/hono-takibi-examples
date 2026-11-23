import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountTypesIdAccountTypeRoute, getAccountTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const accountTypesHandler = app
  .openapi(getAccountTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountTypesIdAccountTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
