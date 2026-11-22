import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionLinodeInstancesLinodeIdRoute,
  getApiVersionLinodeInstancesLinodeIdRoute,
  getApiVersionLinodeInstancesRoute,
  postApiVersionLinodeInstancesLinodeIdBootRoute,
  postApiVersionLinodeInstancesLinodeIdCloneRoute,
  postApiVersionLinodeInstancesLinodeIdMigrateRoute,
  postApiVersionLinodeInstancesLinodeIdMutateRoute,
  postApiVersionLinodeInstancesLinodeIdPasswordRoute,
  postApiVersionLinodeInstancesLinodeIdRebootRoute,
  postApiVersionLinodeInstancesLinodeIdRebuildRoute,
  postApiVersionLinodeInstancesLinodeIdRescueRoute,
  postApiVersionLinodeInstancesLinodeIdResizeRoute,
  postApiVersionLinodeInstancesLinodeIdShutdownRoute,
  postApiVersionLinodeInstancesRoute,
  putApiVersionLinodeInstancesLinodeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const linodeInstancesHandler = app
  .openapi(postApiVersionLinodeInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeInstancesLinodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionLinodeInstancesLinodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionLinodeInstancesLinodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeInstancesLinodeIdBootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeInstancesLinodeIdCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeInstancesLinodeIdMigrateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeInstancesLinodeIdMutateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeInstancesLinodeIdPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeInstancesLinodeIdRebootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeInstancesLinodeIdRebuildRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeInstancesLinodeIdRescueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeInstancesLinodeIdResizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeInstancesLinodeIdShutdownRoute, (c) => {
    throw new Error('Not implemented')
  })
