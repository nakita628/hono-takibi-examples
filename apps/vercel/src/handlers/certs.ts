import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV8CertsIdRoute,
  getV8CertsIdRoute,
  getV8CertsRoute,
  postV8CertsRoute,
  putV8CertsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const certsHandler = app
  .openapi(getV8CertsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV8CertsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV8CertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV8CertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV8CertsRoute, (c) => {
    throw new Error('Not implemented')
  })
