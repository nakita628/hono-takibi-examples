import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getScenesDashboardIndexRoute,
  getScenesOrderListIndexRoute,
  getScenesRecurrenceListIndexRoute,
  getScenesTaskListIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scenesHandler = app
  .openapi(getScenesDashboardIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScenesOrderListIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScenesRecurrenceListIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScenesTaskListIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
