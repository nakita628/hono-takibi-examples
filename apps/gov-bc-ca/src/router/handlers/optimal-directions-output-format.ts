import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOptimalDirectionsOutputFormatRoute,
  postOptimalDirectionsOutputFormatRoute,
} from '../routes'

const app = new OpenAPIHono()

export const optimalDirectionsOutputFormatHandler = app
  .openapi(getOptimalDirectionsOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOptimalDirectionsOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
