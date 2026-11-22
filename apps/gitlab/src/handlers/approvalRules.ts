import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4ProjectsIdApprovalRulesApprovalRuleIdRoute,
  deleteApiV4ProjectsIdApprovalSettingsRulesApprovalRuleIdRoute,
  getApiV4GroupsIdApprovalRulesRoute,
  getApiV4ProjectsIdApprovalRulesApprovalRuleIdRoute,
  getApiV4ProjectsIdApprovalRulesRoute,
  getApiV4ProjectsIdApprovalSettingsRoute,
  postApiV4GroupsIdApprovalRulesRoute,
  postApiV4ProjectsIdApprovalRulesRoute,
  postApiV4ProjectsIdApprovalSettingsRulesRoute,
  putApiV4GroupsIdApprovalRulesApprovalRuleIdRoute,
  putApiV4ProjectsIdApprovalRulesApprovalRuleIdRoute,
  putApiV4ProjectsIdApprovalSettingsRulesApprovalRuleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const approvalRulesHandler = app
  .openapi(getApiV4ProjectsIdApprovalSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdApprovalSettingsRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdApprovalSettingsRulesApprovalRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdApprovalSettingsRulesApprovalRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdApprovalRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdApprovalRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdApprovalRulesApprovalRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdApprovalRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdApprovalRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdApprovalRulesApprovalRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdApprovalRulesApprovalRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdApprovalRulesApprovalRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
