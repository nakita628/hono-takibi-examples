import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV13DeploymentsIdRoute,
  getV13DeploymentsIdOrUrlRoute,
  postV13DeploymentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v13Handler = app
  .openapi(getV13DeploymentsIdOrUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV13DeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV13DeploymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
