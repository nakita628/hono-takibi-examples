import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesServiceIdOrNameRoute,
  getServicesRoute,
  getServicesServiceIdOrNameRoute,
  patchServicesServiceIdOrNameRoute,
  postServicesRoute,
  putServicesServiceIdOrNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const servicesHandler = app
  .openapi(getServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesServiceIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesServiceIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchServicesServiceIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesServiceIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
