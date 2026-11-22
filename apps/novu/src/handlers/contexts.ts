import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2ContextsTypeIdRoute,
  getV2ContextsRoute,
  getV2ContextsTypeIdRoute,
  patchV2ContextsTypeIdRoute,
  postV2ContextsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contextsHandler = app
  .openapi(postV2ContextsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ContextsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2ContextsTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ContextsTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ContextsTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
