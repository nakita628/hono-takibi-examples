import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1alphaNameRoute,
  getV1alphaNameRoute,
  getV1alphaParentInstancesRoute,
  getV1alphaParentWorkerpoolsRoute,
  patchV1alphaNameRoute,
  postV1alphaNameTestNotifyRoute,
  postV1alphaParentInstancesRoute,
  postV1alphaParentWorkerpoolsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1alphaHandler = app
  .openapi(deleteV1alphaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alphaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1alphaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alphaNameTestNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alphaParentInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alphaParentInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alphaParentWorkerpoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alphaParentWorkerpoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
