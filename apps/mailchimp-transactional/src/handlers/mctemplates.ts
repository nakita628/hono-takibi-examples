import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postMctemplatesInfoRoute,
  postMctemplatesListRoute,
  postMctemplatesRenderRoute,
  postMctemplatesTimeSeriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mctemplatesHandler = app
  .openapi(postMctemplatesInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMctemplatesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMctemplatesRenderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMctemplatesTimeSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
