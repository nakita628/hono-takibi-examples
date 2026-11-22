import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionLinodeInstancesLinodeIdDisksDiskIdRoute,
  getApiVersionLinodeInstancesLinodeIdDisksDiskIdRoute,
  getApiVersionLinodeInstancesLinodeIdDisksRoute,
  postApiVersionLinodeInstancesLinodeIdDisksDiskIdCloneRoute,
  postApiVersionLinodeInstancesLinodeIdDisksDiskIdPasswordRoute,
  postApiVersionLinodeInstancesLinodeIdDisksDiskIdResizeRoute,
  postApiVersionLinodeInstancesLinodeIdDisksRoute,
  putApiVersionLinodeInstancesLinodeIdDisksDiskIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const disksHandler = app
  .openapi(postApiVersionLinodeInstancesLinodeIdDisksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeInstancesLinodeIdDisksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeInstancesLinodeIdDisksDiskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionLinodeInstancesLinodeIdDisksDiskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionLinodeInstancesLinodeIdDisksDiskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeInstancesLinodeIdDisksDiskIdCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeInstancesLinodeIdDisksDiskIdPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeInstancesLinodeIdDisksDiskIdResizeRoute, (c) => {
    throw new Error('Not implemented')
  })
