import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdaptersNameRoute,
  getAdaptersNameLogsRoute,
  getAdaptersNameRoute,
  getAdaptersNameStatusRoute,
  getAdaptersRoute,
  postAdaptersNameMcpRoute,
  postAdaptersRoute,
  putAdaptersNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adaptersHandler = app
  .openapi(postAdaptersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdaptersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdaptersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdaptersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdaptersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdaptersNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdaptersNameLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdaptersNameMcpRoute, (c) => {
    throw new Error('Not implemented')
  })
