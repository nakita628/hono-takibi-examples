import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRestApi3ConfigurationTimetrackingListRoute,
  getRestApi3ConfigurationTimetrackingOptionsRoute,
  getRestApi3ConfigurationTimetrackingRoute,
  putRestApi3ConfigurationTimetrackingOptionsRoute,
  putRestApi3ConfigurationTimetrackingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const timeTrackingHandler = app
  .openapi(getRestApi3ConfigurationTimetrackingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3ConfigurationTimetrackingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ConfigurationTimetrackingListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ConfigurationTimetrackingOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3ConfigurationTimetrackingOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
