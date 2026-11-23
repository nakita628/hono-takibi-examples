import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiProjectsFormatRoute, getApiProjectsIdFormatRoute, getApiRoute } from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProjectsIdFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProjectsFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
