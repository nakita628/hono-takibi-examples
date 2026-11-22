import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxySitesNameRoute,
  getServicesHaproxySitesNameRoute,
  getServicesHaproxySitesRoute,
  postServicesHaproxySitesRoute,
  putServicesHaproxySitesNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesHandler = app
  .openapi(getServicesHaproxySitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxySitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxySitesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxySitesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxySitesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
