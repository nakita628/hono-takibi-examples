import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1StacksIdOrSlugRoute,
  getInstancesInstanceIdConnectionsRoute,
  getV1StacksIdOrSlugConnectionsRoute,
  getV1StacksIdOrSlugReadinessRoute,
  getV1StacksIdOrSlugRoute,
  getV1StacksRoute,
  postV1StacksCheckUrlRoute,
  postV1StacksIdOrSlugRoute,
  postV1StacksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const stacksHandler = app
  .openapi(getInstancesInstanceIdConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StacksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1StacksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1StacksCheckUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1StacksIdOrSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StacksIdOrSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1StacksIdOrSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StacksIdOrSlugConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StacksIdOrSlugReadinessRoute, (c) => {
    throw new Error('Not implemented')
  })
