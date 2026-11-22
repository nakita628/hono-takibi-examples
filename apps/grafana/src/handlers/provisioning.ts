import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ProvisioningAlertRulesUIDRoute,
  deleteV1ProvisioningContactPointsUIDRoute,
  deleteV1ProvisioningFolderFolderUIDRuleGroupsGroupRoute,
  deleteV1ProvisioningMuteTimingsNameRoute,
  deleteV1ProvisioningPoliciesRoute,
  deleteV1ProvisioningTemplatesNameRoute,
  getV1ProvisioningAlertRulesExportRoute,
  getV1ProvisioningAlertRulesRoute,
  getV1ProvisioningAlertRulesUIDExportRoute,
  getV1ProvisioningAlertRulesUIDRoute,
  getV1ProvisioningContactPointsExportRoute,
  getV1ProvisioningContactPointsRoute,
  getV1ProvisioningFolderFolderUIDRuleGroupsGroupExportRoute,
  getV1ProvisioningFolderFolderUIDRuleGroupsGroupRoute,
  getV1ProvisioningMuteTimingsExportRoute,
  getV1ProvisioningMuteTimingsNameExportRoute,
  getV1ProvisioningMuteTimingsNameRoute,
  getV1ProvisioningMuteTimingsRoute,
  getV1ProvisioningPoliciesExportRoute,
  getV1ProvisioningPoliciesRoute,
  getV1ProvisioningTemplatesNameRoute,
  getV1ProvisioningTemplatesRoute,
  postV1ProvisioningAlertRulesRoute,
  postV1ProvisioningContactPointsRoute,
  postV1ProvisioningMuteTimingsRoute,
  putV1ProvisioningAlertRulesUIDRoute,
  putV1ProvisioningContactPointsUIDRoute,
  putV1ProvisioningFolderFolderUIDRuleGroupsGroupRoute,
  putV1ProvisioningMuteTimingsNameRoute,
  putV1ProvisioningPoliciesRoute,
  putV1ProvisioningTemplatesNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const provisioningHandler = app
  .openapi(getV1ProvisioningAlertRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProvisioningAlertRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProvisioningAlertRulesExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProvisioningAlertRulesUIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProvisioningAlertRulesUIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProvisioningAlertRulesUIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProvisioningAlertRulesUIDExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProvisioningContactPointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProvisioningContactPointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProvisioningContactPointsExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProvisioningContactPointsUIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProvisioningContactPointsUIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProvisioningFolderFolderUIDRuleGroupsGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProvisioningFolderFolderUIDRuleGroupsGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProvisioningFolderFolderUIDRuleGroupsGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProvisioningFolderFolderUIDRuleGroupsGroupExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProvisioningMuteTimingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProvisioningMuteTimingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProvisioningMuteTimingsExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProvisioningMuteTimingsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProvisioningMuteTimingsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProvisioningMuteTimingsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProvisioningMuteTimingsNameExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProvisioningPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProvisioningPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProvisioningPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProvisioningPoliciesExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProvisioningTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProvisioningTemplatesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProvisioningTemplatesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProvisioningTemplatesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
