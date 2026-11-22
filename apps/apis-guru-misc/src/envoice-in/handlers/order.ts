import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiOrderAllRoute,
  getApiOrderDetailsRoute,
  postApiOrderChangeshippingdetailsRoute,
  postApiOrderChangestatusRoute,
  postApiOrderDeleteRoute,
  postApiOrderNewRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orderHandler = app
  .openapi(getApiOrderAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrderChangeshippingdetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrderChangestatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrderDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrderDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrderNewRoute, (c) => {
    throw new Error('Not implemented')
  })
