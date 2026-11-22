import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV3DeploymentsIdRoute,
  getV3DeploymentsIdRoute,
  getV3DeploymentsRoute,
  postV3DeploymentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deploymentsHandler = app
  .openapi(getV3DeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3DeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3DeploymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3DeploymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
