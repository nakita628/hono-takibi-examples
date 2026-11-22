import { OpenAPIHono } from '@hono/zod-openapi'
import { getSchedulesScheduleCIndexRoute, getSchedulesScheduleCSubIdIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const loansHandler = app
  .openapi(getSchedulesScheduleCIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesScheduleCSubIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
