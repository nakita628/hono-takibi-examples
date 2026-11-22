import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserprofilesProfileIdTargetableRemarketingListsIdRoute,
  getUserprofilesProfileIdTargetableRemarketingListsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const targetableRemarketingListsHandler = app
  .openapi(getUserprofilesProfileIdTargetableRemarketingListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdTargetableRemarketingListsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
