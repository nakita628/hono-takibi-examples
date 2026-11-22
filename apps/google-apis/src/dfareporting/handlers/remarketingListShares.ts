import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserprofilesProfileIdRemarketingListSharesRemarketingListIdRoute,
  patchUserprofilesProfileIdRemarketingListSharesRoute,
  putUserprofilesProfileIdRemarketingListSharesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const remarketingListSharesHandler = app
  .openapi(patchUserprofilesProfileIdRemarketingListSharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdRemarketingListSharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdRemarketingListSharesRemarketingListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
