import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteInstanceIdFieldRoute,
  deleteInstanceIdRoute,
  getInstanceIdPasswordRoute,
  getInstanceIdRoute,
  getInstanceRoute,
  postInstanceIdCreateSnapshotRoute,
  postInstanceIdEnableTpmRoute,
  postInstanceInstanceIdRevertSnapshotRoute,
  postInstanceRoute,
  putInstanceIdAddProtectionRoute,
  putInstanceIdRebootRoute,
  putInstanceIdRemoveProtectionRoute,
  putInstanceIdResetPasswordRoute,
  putInstanceIdResetRoute,
  putInstanceIdResizeDiskRoute,
  putInstanceIdRoute,
  putInstanceIdScaleRoute,
  putInstanceIdStartRoute,
  putInstanceIdStopRoute,
} from '../routes'

const app = new OpenAPIHono()

export const instanceHandler = app
  .openapi(postInstanceIdCreateSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstanceIdPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInstanceIdResizeDiskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInstanceIdResetPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInstanceIdStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInstanceIdEnableTpmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInstanceIdScaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInstanceIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInstanceIdAddProtectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteInstanceIdFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInstanceIdRemoveProtectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInstanceIdResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInstanceIdRebootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInstanceInstanceIdRevertSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
