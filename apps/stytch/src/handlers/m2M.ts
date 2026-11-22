import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1M2mClientsClientIdRoute,
  getV1M2mClientsClientIdRoute,
  postV1M2mClientsRoute,
  postV1M2mClientsSearchRoute,
  putV1M2mClientsClientIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const m2MHandler = app
  .openapi(getV1M2mClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1M2mClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1M2mClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1M2mClientsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1M2mClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
