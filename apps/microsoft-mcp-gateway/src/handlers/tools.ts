import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteToolsNameRoute,
  getToolsNameLogsRoute,
  getToolsNameRoute,
  getToolsNameStatusRoute,
  getToolsRoute,
  postToolsRoute,
  putToolsNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const toolsHandler = app
  .openapi(postToolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putToolsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteToolsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolsNameLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
