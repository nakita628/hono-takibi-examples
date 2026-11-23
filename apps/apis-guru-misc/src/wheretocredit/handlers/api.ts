import { OpenAPIHono } from '@hono/zod-openapi'
import { getApi10ProgramsRoute, postApi10CalculateRoute } from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(postApi10CalculateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi10ProgramsRoute, (c) => {
    throw new Error('Not implemented')
  })
