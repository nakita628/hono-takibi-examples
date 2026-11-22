import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV4GroupsIdIterationsRoute, getApiV4ProjectsIdIterationsRoute } from '../routes'

const app = new OpenAPIHono()

export const iterationsHandler = app
  .openapi(getApiV4ProjectsIdIterationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdIterationsRoute, (c) => {
    throw new Error('Not implemented')
  })
