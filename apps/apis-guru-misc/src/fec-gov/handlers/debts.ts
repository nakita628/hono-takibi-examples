import { OpenAPIHono } from '@hono/zod-openapi'
import { getSchedulesScheduleDIndexRoute, getSchedulesScheduleDSubIdIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const debtsHandler = app
  .openapi(getSchedulesScheduleDIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesScheduleDSubIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
