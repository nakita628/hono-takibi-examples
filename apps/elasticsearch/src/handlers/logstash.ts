import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLogstashPipelineIdRoute,
  getLogstashPipelineIdRoute,
  getLogstashPipelineRoute,
  putLogstashPipelineIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const logstashHandler = app
  .openapi(getLogstashPipelineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLogstashPipelineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLogstashPipelineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLogstashPipelineRoute, (c) => {
    throw new Error('Not implemented')
  })
