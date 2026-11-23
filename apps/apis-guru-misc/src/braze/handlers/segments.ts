import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSegmentsDataSeriesRoute,
  getSegmentsDetailsRoute,
  getSegmentsListRoute,
} from '../routes'

const app = new OpenAPIHono()

export const segmentsHandler = app
  .openapi(getSegmentsDataSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSegmentsDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSegmentsListRoute, (c) => {
    throw new Error('Not implemented')
  })
