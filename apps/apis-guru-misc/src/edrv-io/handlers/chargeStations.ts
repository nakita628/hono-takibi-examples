import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ChargestationsIdRoute,
  getV1ChargestationsIdConnectorsRoute,
  getV1ChargestationsIdRoute,
  getV1ChargestationsRoute,
  patchV1ChargestationsIdRoute,
  postV1ChargestationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chargeStationsHandler = app
  .openapi(getV1ChargestationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ChargestationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ChargestationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ChargestationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ChargestationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ChargestationsIdConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
