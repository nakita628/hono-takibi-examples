import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVolumesIdRoute,
  getVolumesActionsIdRoute,
  getVolumesActionsRoute,
  getVolumesIdActionsActionIdRoute,
  getVolumesIdActionsRoute,
  getVolumesIdRoute,
  getVolumesRoute,
  postVolumesIdActionsAttachRoute,
  postVolumesIdActionsChangeProtectionRoute,
  postVolumesIdActionsDetachRoute,
  postVolumesIdActionsResizeRoute,
  postVolumesRoute,
  putVolumesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const volumesHandler = app
  .openapi(getVolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVolumesActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVolumesActionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVolumesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVolumesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVolumesIdRoute, (c) => {
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
