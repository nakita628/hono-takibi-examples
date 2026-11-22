import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1EnvironmentsEnvironmentIdRoute,
  getV1EnvironmentsEnvironmentIdRoute,
  getV1ProductsProductIdEnvironmentsRoute,
  postV1ProductsProductIdEnvironmentsRoute,
  putV1EnvironmentsEnvironmentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const environmentsHandler = app
  .openapi(deleteV1EnvironmentsEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EnvironmentsEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1EnvironmentsEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsProductIdEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsProductIdEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
