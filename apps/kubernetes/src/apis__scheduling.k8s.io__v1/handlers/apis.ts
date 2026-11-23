import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApisSchedulingK8sIoV1PriorityclassesNameRoute,
  deleteApisSchedulingK8sIoV1PriorityclassesRoute,
  getApisSchedulingK8sIoV1IndexRoute,
  getApisSchedulingK8sIoV1PriorityclassesNameRoute,
  getApisSchedulingK8sIoV1PriorityclassesRoute,
  getApisSchedulingK8sIoV1WatchPriorityclassesNameRoute,
  getApisSchedulingK8sIoV1WatchPriorityclassesRoute,
  patchApisSchedulingK8sIoV1PriorityclassesNameRoute,
  postApisSchedulingK8sIoV1PriorityclassesRoute,
  putApisSchedulingK8sIoV1PriorityclassesNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apisHandler = app
  .openapi(getApisSchedulingK8sIoV1IndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisSchedulingK8sIoV1PriorityclassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisSchedulingK8sIoV1PriorityclassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisSchedulingK8sIoV1PriorityclassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisSchedulingK8sIoV1PriorityclassesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisSchedulingK8sIoV1PriorityclassesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisSchedulingK8sIoV1PriorityclassesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisSchedulingK8sIoV1PriorityclassesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisSchedulingK8sIoV1WatchPriorityclassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisSchedulingK8sIoV1WatchPriorityclassesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
