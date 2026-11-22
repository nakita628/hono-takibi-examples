import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1alpha2NameRoute,
  getV1alpha2NameRoute,
  getV1alpha2ParentWorkerPoolsRoute,
  patchV1alpha2NameRoute,
  postV1alpha2NameCancelRoute,
  postV1alpha2ParentWorkerPoolsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(deleteV1alpha2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1alpha2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha2NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha2ParentWorkerPoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha2ParentWorkerPoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
