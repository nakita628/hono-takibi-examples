import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1E2eFetchMyKeysRoute,
  getApiV1E2eFetchUsersWaitingForGroupKeyRoute,
  getApiV1E2eGetUsersOfRoomWithoutKeyRoute,
  postApiV1E2eAcceptSuggestedGroupKeyRoute,
  postApiV1E2eProvideUsersSuggestedGroupKeysRoute,
  postApiV1E2eRejectSuggestedGroupKeyRoute,
  postApiV1E2eRequestSubscriptionKeysRoute,
  postApiV1E2eResetRoomKeyRoute,
  postApiV1E2eSetRoomKeyIDRoute,
  postApiV1E2eSetUserPublicAndPrivateKeysRoute,
  postApiV1E2eUpdateGroupKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const e2EHandler = app
  .openapi(getApiV1E2eFetchMyKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1E2eGetUsersOfRoomWithoutKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1E2eSetRoomKeyIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1E2eSetUserPublicAndPrivateKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1E2eUpdateGroupKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1E2eRequestSubscriptionKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1E2eAcceptSuggestedGroupKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1E2eRejectSuggestedGroupKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1E2eFetchUsersWaitingForGroupKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1E2eProvideUsersSuggestedGroupKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1E2eResetRoomKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
