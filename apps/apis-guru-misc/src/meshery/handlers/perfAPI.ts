import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiPerfProfileResultIdRoute,
  getApiPerfProfileResultRoute,
  getApiPerfProfileRoute,
} from '../routes'

const app = new OpenAPIHono()

export const perfAPIHandler = app
  .openapi(getApiPerfProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPerfProfileResultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPerfProfileResultIdRoute, (c) => {
    throw new Error('Not implemented')
  })
