import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesIdRoute,
  getServicesCountRoute,
  getServicesIdRoute,
  getServicesLabelsRoute,
  getServicesRoute,
  getServicesSearchRoute,
  putServicesIdMetadataRoute,
  putServicesIdOperationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const servicesHandler = app
  .openapi(getServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesIdOperationRoute, (c) => {
    throw new Error('Not implemented')
  })
