import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServersIdRoute,
  getServersIdMetricsRoute,
  getServersIdRoute,
  getServersRoute,
  postServersRoute,
  putServersIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const serversHandler = app
  .openapi(getServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServersIdMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
