import { OpenAPIHono } from '@hono/zod-openapi'
import { getTaskEventsIdIndexRoute, getTaskEventsIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const taskEventsHandler = app
  .openapi(getTaskEventsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTaskEventsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
