import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMetalGatewaysIdRoute,
  getMetalGatewaysIdIpsRoute,
  getMetalGatewaysIdRoute,
  getProjectsProjectIdMetalGatewaysRoute,
  postMetalGatewaysIdIpsRoute,
  postProjectsProjectIdMetalGatewaysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metalGatewaysHandler = app
  .openapi(deleteMetalGatewaysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetalGatewaysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetalGatewaysIdIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMetalGatewaysIdIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdMetalGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdMetalGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
