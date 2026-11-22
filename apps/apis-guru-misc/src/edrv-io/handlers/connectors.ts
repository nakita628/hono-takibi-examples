import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ConnectorsIdRoute,
  getV1ConnectorsIdRoute,
  getV1ConnectorsRoute,
  patchV1ConnectorsIdRoute,
  postV1ConnectorsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const connectorsHandler = app
  .openapi(getV1ConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConnectorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConnectorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ConnectorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
