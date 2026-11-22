import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getKmsKeyIdListKeyRotationsRoute,
  getKmsKeyIdRoute,
  getKmsKeyRoute,
  postKmsKeyIdCancelDeletionRoute,
  postKmsKeyIdDisableKeyRotationRoute,
  postKmsKeyIdDisableRoute,
  postKmsKeyIdEnableKeyRotationRoute,
  postKmsKeyIdEnableRoute,
  postKmsKeyIdReplicateRoute,
  postKmsKeyIdRotateRoute,
  postKmsKeyIdScheduleDeletionRoute,
  postKmsKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const kmsKeyHandler = app
  .openapi(postKmsKeyIdDisableKeyRotationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKmsKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKmsKeyIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKmsKeyIdListKeyRotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKmsKeyIdEnableKeyRotationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKmsKeyIdRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKmsKeyIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKmsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKmsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKmsKeyIdScheduleDeletionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKmsKeyIdReplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKmsKeyIdCancelDeletionRoute, (c) => {
    throw new Error('Not implemented')
  })
