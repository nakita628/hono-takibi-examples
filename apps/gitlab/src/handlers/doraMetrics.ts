import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV4GroupsIdDoraMetricsRoute, getApiV4ProjectsIdDoraMetricsRoute } from '../routes'

const app = new OpenAPIHono()

export const doraMetricsHandler = app
  .openapi(getApiV4ProjectsIdDoraMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdDoraMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
