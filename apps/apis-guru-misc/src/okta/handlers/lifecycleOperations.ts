import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApiV1UsersUserIdLifecycleActivateRoute,
  postApiV1UsersUserIdLifecycleDeactivateRoute,
  postApiV1UsersUserIdLifecycleExpirePasswordRoute,
  postApiV1UsersUserIdLifecycleResetPasswordRoute,
  postApiV1UsersUserIdLifecycleSuspendRoute,
  postApiV1UsersUserIdLifecycleUnlockRoute,
  postApiV1UsersUserIdLifecycleUnsuspendRoute,
} from '../routes'

const app = new OpenAPIHono()

export const lifecycleOperationsHandler = app
  .openapi(postApiV1UsersUserIdLifecycleActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersUserIdLifecycleDeactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersUserIdLifecycleExpirePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersUserIdLifecycleResetPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersUserIdLifecycleSuspendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersUserIdLifecycleUnlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersUserIdLifecycleUnsuspendRoute, (c) => {
    throw new Error('Not implemented')
  })
