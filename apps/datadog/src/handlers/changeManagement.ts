import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ChangeManagementChangeRequestChangeRequestIdDecisionsDecisionIdRoute,
  getApiV2ChangeManagementChangeRequestChangeRequestIdRoute,
  patchApiV2ChangeManagementChangeRequestChangeRequestIdDecisionsDecisionIdRoute,
  patchApiV2ChangeManagementChangeRequestChangeRequestIdRoute,
  postApiV2ChangeManagementChangeRequestChangeRequestIdBranchRoute,
  postApiV2ChangeManagementChangeRequestRoute,
} from '../routes'

const app = new OpenAPIHono()

export const changeManagementHandler = app
  .openapi(postApiV2ChangeManagementChangeRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ChangeManagementChangeRequestChangeRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ChangeManagementChangeRequestChangeRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ChangeManagementChangeRequestChangeRequestIdBranchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ChangeManagementChangeRequestChangeRequestIdDecisionsDecisionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ChangeManagementChangeRequestChangeRequestIdDecisionsDecisionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
