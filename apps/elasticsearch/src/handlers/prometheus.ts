import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPrometheusApiV1StatusBuildinfoRoute,
  getPrometheusIndexApiV1StatusBuildinfoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const prometheusHandler = app
  .openapi(getPrometheusApiV1StatusBuildinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrometheusIndexApiV1StatusBuildinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
