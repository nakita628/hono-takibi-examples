import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getQtlsChrStartStopMapKeyRoute,
  getQtlsMappedChrStartStopMapKeyRoute,
  getQtlsRgdIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const qtlHandler = app
  .openapi(getQtlsMappedChrStartStopMapKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQtlsChrStartStopMapKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQtlsRgdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
