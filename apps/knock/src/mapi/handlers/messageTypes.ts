import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1MessageTypesMessageTypeKeyRoute,
  getV1MessageTypesRoute,
  putV1MessageTypesMessageTypeKeyRoute,
  putV1MessageTypesMessageTypeKeyValidateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const messageTypesHandler = app
  .openapi(getV1MessageTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1MessageTypesMessageTypeKeyValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MessageTypesMessageTypeKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1MessageTypesMessageTypeKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
