import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2NameRoute,
  getV2NameRoute,
  getV2ParentRoute,
  postV2ParentRoute,
  putV2NameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(deleteV2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentRoute, (c) => {
    throw new Error('Not implemented')
  })
