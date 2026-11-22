import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1EnvironmentsIdRoute,
  getV1EnvironmentsRoute,
  postV1EnvironmentsRoute,
  putV1EnvironmentsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const environmentsHandler = app
  .openapi(getV1EnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1EnvironmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1EnvironmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
