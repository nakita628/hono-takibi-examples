import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getVolumesIdActionsActionIdRoute,
  getVolumesIdActionsRoute,
  postVolumesIdActionsAttachRoute,
  postVolumesIdActionsChangeProtectionRoute,
  postVolumesIdActionsDetachRoute,
  postVolumesIdActionsResizeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const volumeActionsHandler = app
  .openapi(getVolumesIdActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVolumesIdActionsAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVolumesIdActionsChangeProtectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVolumesIdActionsDetachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVolumesIdActionsResizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVolumesIdActionsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
