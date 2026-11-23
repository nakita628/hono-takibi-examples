import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOtelExportersOtelExporterIdRoute,
  getOtelExportersRoute,
  postOtelExportersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const otelHandler = app
  .openapi(getOtelExportersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOtelExportersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOtelExportersOtelExporterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
