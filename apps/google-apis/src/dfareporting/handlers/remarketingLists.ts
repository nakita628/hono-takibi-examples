import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserprofilesProfileIdRemarketingListsIdRoute,
  getUserprofilesProfileIdRemarketingListsRoute,
  patchUserprofilesProfileIdRemarketingListsRoute,
  postUserprofilesProfileIdRemarketingListsRoute,
  putUserprofilesProfileIdRemarketingListsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const remarketingListsHandler = app
  .openapi(getUserprofilesProfileIdRemarketingListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdRemarketingListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdRemarketingListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdRemarketingListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdRemarketingListsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
