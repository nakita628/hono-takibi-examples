import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCanvasDataSeriesRoute,
  getCanvasDataSummaryRoute,
  getCanvasDetailsRoute,
  getCanvasListRoute,
  postCanvasTriggerScheduleCreateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const canvasHandler = app
  .openapi(getCanvasDataSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCanvasDataSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCanvasDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCanvasListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCanvasTriggerScheduleCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
