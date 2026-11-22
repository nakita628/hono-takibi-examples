import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserprofilesProfileIdEventTagsIdRoute,
  getUserprofilesProfileIdEventTagsIdRoute,
  getUserprofilesProfileIdEventTagsRoute,
  patchUserprofilesProfileIdEventTagsRoute,
  postUserprofilesProfileIdEventTagsRoute,
  putUserprofilesProfileIdEventTagsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventTagsHandler = app
  .openapi(getUserprofilesProfileIdEventTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdEventTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdEventTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdEventTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserprofilesProfileIdEventTagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdEventTagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
