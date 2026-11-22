import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesServiceIdHeadersHeaderIdRoute,
  getServicesServiceIdHeadersRoute,
  postServicesServiceIdHeadersRoute,
  putServicesServiceIdHeadersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const services__HeadersHandler = app
  .openapi(getServicesServiceIdHeadersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesServiceIdHeadersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesServiceIdHeadersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesServiceIdHeadersHeaderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
