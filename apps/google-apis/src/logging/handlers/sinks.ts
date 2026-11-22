import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2SinkNameRoute,
  getV2ParentSinksRoute,
  getV2SinkNameRoute,
  postV2ParentSinksRoute,
  putV2SinkNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sinksHandler = app
  .openapi(getV2ParentSinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentSinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2SinkNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SinkNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2SinkNameRoute, (c) => {
    throw new Error('Not implemented')
  })
