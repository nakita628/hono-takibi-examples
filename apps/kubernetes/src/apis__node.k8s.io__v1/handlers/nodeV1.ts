import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApisNodeK8sIoV1RuntimeclassesNameRoute,
  deleteApisNodeK8sIoV1RuntimeclassesRoute,
  getApisNodeK8sIoV1IndexRoute,
  getApisNodeK8sIoV1RuntimeclassesNameRoute,
  getApisNodeK8sIoV1RuntimeclassesRoute,
  getApisNodeK8sIoV1WatchRuntimeclassesNameRoute,
  getApisNodeK8sIoV1WatchRuntimeclassesRoute,
  patchApisNodeK8sIoV1RuntimeclassesNameRoute,
  postApisNodeK8sIoV1RuntimeclassesRoute,
  putApisNodeK8sIoV1RuntimeclassesNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const nodeV1Handler = app
  .openapi(getApisNodeK8sIoV1IndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisNodeK8sIoV1RuntimeclassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisNodeK8sIoV1RuntimeclassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisNodeK8sIoV1RuntimeclassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisNodeK8sIoV1RuntimeclassesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisNodeK8sIoV1RuntimeclassesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisNodeK8sIoV1RuntimeclassesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisNodeK8sIoV1RuntimeclassesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisNodeK8sIoV1WatchRuntimeclassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisNodeK8sIoV1WatchRuntimeclassesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
