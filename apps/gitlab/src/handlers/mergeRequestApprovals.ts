import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4ProjectsIdMergeRequestsMergeRequestIidApprovalRulesApprovalRuleIdRoute,
  getApiV4GroupsIdMergeRequestApprovalSettingRoute,
  getApiV4ProjectsIdMergeRequestApprovalSettingRoute,
  getApiV4ProjectsIdMergeRequestsMergeRequestIidApprovalRulesApprovalRuleIdRoute,
  getApiV4ProjectsIdMergeRequestsMergeRequestIidApprovalRulesRoute,
  getApiV4ProjectsIdMergeRequestsMergeRequestIidApprovalsRoute,
  getApiV4ProjectsIdMergeRequestsMergeRequestIidApprovalStateRoute,
  postApiV4ProjectsIdMergeRequestsMergeRequestIidApprovalRulesRoute,
  postApiV4ProjectsIdMergeRequestsMergeRequestIidApprovalsRoute,
  postApiV4ProjectsIdMergeRequestsMergeRequestIidApproveRoute,
  postApiV4ProjectsIdMergeRequestsMergeRequestIidUnapproveRoute,
  putApiV4GroupsIdMergeRequestApprovalSettingRoute,
  putApiV4ProjectsIdMergeRequestApprovalSettingRoute,
  putApiV4ProjectsIdMergeRequestsMergeRequestIidApprovalRulesApprovalRuleIdRoute,
  putApiV4ProjectsIdMergeRequestsMergeRequestIidResetApprovalsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mergeRequestApprovalsHandler = app
  .openapi(getApiV4ProjectsIdMergeRequestsMergeRequestIidApprovalRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdMergeRequestsMergeRequestIidApprovalRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMergeRequestsMergeRequestIidApprovalRulesApprovalRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdMergeRequestsMergeRequestIidApprovalRulesApprovalRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteApiV4ProjectsIdMergeRequestsMergeRequestIidApprovalRulesApprovalRuleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV4ProjectsIdMergeRequestApprovalSettingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdMergeRequestApprovalSettingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdMergeRequestApprovalSettingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdMergeRequestApprovalSettingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMergeRequestsMergeRequestIidApprovalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdMergeRequestsMergeRequestIidApprovalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdMergeRequestsMergeRequestIidApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdMergeRequestsMergeRequestIidUnapproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdMergeRequestsMergeRequestIidResetApprovalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMergeRequestsMergeRequestIidApprovalStateRoute, (c) => {
    throw new Error('Not implemented')
  })
