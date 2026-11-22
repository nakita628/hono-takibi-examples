import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2NameRoute,
  getV2NameKeyStringRoute,
  getV2NameRoute,
  getV2ParentKeysRoute,
  patchV2NameRoute,
  postV2NameUndeleteRoute,
  postV2ParentKeysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(deleteV2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2NameKeyStringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2NameUndeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
