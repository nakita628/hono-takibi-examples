import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdInferenceClassificationOverridesInferenceClassificationOverrideIdRoute,
  getUsersUserIdInferenceClassificationOverridesInferenceClassificationOverrideIdRoute,
  getUsersUserIdInferenceClassificationOverridesRoute,
  getUsersUserIdInferenceClassificationRoute,
  patchUsersUserIdInferenceClassificationOverridesInferenceClassificationOverrideIdRoute,
  patchUsersUserIdInferenceClassificationRoute,
  postUsersUserIdInferenceClassificationOverridesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersInferenceClassificationHandler = app
  .openapi(getUsersUserIdInferenceClassificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdInferenceClassificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdInferenceClassificationOverridesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdInferenceClassificationOverridesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdInferenceClassificationOverridesInferenceClassificationOverrideIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdInferenceClassificationOverridesInferenceClassificationOverrideIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdInferenceClassificationOverridesInferenceClassificationOverrideIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
