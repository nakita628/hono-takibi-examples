import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getVolumesActionsIdRoute,
  getVolumesActionsRoute,
  getVolumesIdActionsActionIdRoute,
  getVolumesIdActionsRoute,
  postVolumesIdActionsAttachRoute,
  postVolumesIdActionsChangeProtectionRoute,
  postVolumesIdActionsDetachRoute,
  postVolumesIdActionsResizeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const volumeActionsHandler = app
  .openapi(getVolumesActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVolumesActionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
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
