import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1AccountsIdFeaturedTagsRoute,
  getApiV1AccountsIdFollowersRoute,
  getApiV1AccountsIdFollowingRoute,
  getApiV1AccountsIdIdentityProofsRoute,
  getApiV1AccountsIdListsRoute,
  getApiV1AccountsIdRoute,
  getApiV1AccountsIdStatusesRoute,
  getApiV1AccountsRelationshipsRoute,
  getApiV1AccountsSearchRoute,
  getApiV1AccountsVerifyCredentialsRoute,
  patchApiV1AccountsUpdateCredentialsRoute,
  postApiV1AccountsIdBlockRoute,
  postApiV1AccountsIdFollowRoute,
  postApiV1AccountsIdMuteRoute,
  postApiV1AccountsIdNoteRoute,
  postApiV1AccountsIdPinRoute,
  postApiV1AccountsIdUnblockRoute,
  postApiV1AccountsIdUnfollowRoute,
  postApiV1AccountsIdUnmuteRoute,
  postApiV1AccountsIdUnpinRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(getApiV1AccountsRelationshipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AccountsUpdateCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsVerifyCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsIdBlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsIdFeaturedTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsIdFollowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsIdFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsIdFollowingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsIdIdentityProofsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsIdListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsIdMuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsIdNoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsIdPinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsIdStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsIdUnblockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsIdUnfollowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsIdUnmuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsIdUnpinRoute, (c) => {
    throw new Error('Not implemented')
  })
