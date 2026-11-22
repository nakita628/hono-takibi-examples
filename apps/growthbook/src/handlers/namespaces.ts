import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NamespacesIdRoute,
  getV1NamespacesIdMembershipsRoute,
  getV1NamespacesIdRoute,
  getV1NamespacesRoute,
  postV1NamespacesIdRotateSeedRoute,
  postV1NamespacesRoute,
  putV1NamespacesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const namespacesHandler = app
  .openapi(getV1NamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NamespacesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1NamespacesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1NamespacesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NamespacesIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NamespacesIdRotateSeedRoute, (c) => {
    throw new Error('Not implemented')
  })
