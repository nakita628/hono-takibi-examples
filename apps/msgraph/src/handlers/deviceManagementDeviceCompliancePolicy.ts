import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdAssignmentsDeviceCompliancePolicyAssignmentIdRoute,
  deleteDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdDeviceSettingStateSummariesSettingStateDeviceSummaryIdRoute,
  deleteDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdDeviceStatusesDeviceComplianceDeviceStatusIdRoute,
  deleteDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdDeviceStatusOverviewRoute,
  deleteDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdRoute,
  deleteDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdScheduledActionsForRuleDeviceComplianceScheduledActionForRuleIdRoute,
  deleteDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdScheduledActionsForRuleDeviceComplianceScheduledActionForRuleIdScheduledActionConfigurationsDeviceComplianceActionItemIdRoute,
  deleteDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdUserStatusesDeviceComplianceUserStatusIdRoute,
  deleteDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdUserStatusOverviewRoute,
  getDeviceManagementDeviceCompliancePoliciesCountRoute,
  getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdAssignmentsCountRoute,
  getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdAssignmentsDeviceCompliancePolicyAssignmentIdRoute,
  getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdAssignmentsRoute,
  getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdDeviceSettingStateSummariesCountRoute,
  getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdDeviceSettingStateSummariesRoute,
  getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdDeviceSettingStateSummariesSettingStateDeviceSummaryIdRoute,
  getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdDeviceStatusesCountRoute,
  getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdDeviceStatusesDeviceComplianceDeviceStatusIdRoute,
  getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdDeviceStatusesRoute,
  getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdDeviceStatusOverviewRoute,
  getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdRoute,
  getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdScheduledActionsForRuleCountRoute,
  getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdScheduledActionsForRuleDeviceComplianceScheduledActionForRuleIdRoute,
  getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdScheduledActionsForRuleDeviceComplianceScheduledActionForRuleIdScheduledActionConfigurationsCountRoute,
  getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdScheduledActionsForRuleDeviceComplianceScheduledActionForRuleIdScheduledActionConfigurationsDeviceComplianceActionItemIdRoute,
  getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdScheduledActionsForRuleDeviceComplianceScheduledActionForRuleIdScheduledActionConfigurationsRoute,
  getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdScheduledActionsForRuleRoute,
  getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdUserStatusesCountRoute,
  getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdUserStatusesDeviceComplianceUserStatusIdRoute,
  getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdUserStatusesRoute,
  getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdUserStatusOverviewRoute,
  getDeviceManagementDeviceCompliancePoliciesRoute,
  patchDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdAssignmentsDeviceCompliancePolicyAssignmentIdRoute,
  patchDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdDeviceSettingStateSummariesSettingStateDeviceSummaryIdRoute,
  patchDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdDeviceStatusesDeviceComplianceDeviceStatusIdRoute,
  patchDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdDeviceStatusOverviewRoute,
  patchDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdRoute,
  patchDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdScheduledActionsForRuleDeviceComplianceScheduledActionForRuleIdRoute,
  patchDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdScheduledActionsForRuleDeviceComplianceScheduledActionForRuleIdScheduledActionConfigurationsDeviceComplianceActionItemIdRoute,
  patchDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdUserStatusesDeviceComplianceUserStatusIdRoute,
  patchDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdUserStatusOverviewRoute,
  postDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdAssignmentsRoute,
  postDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdAssignRoute,
  postDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdDeviceSettingStateSummariesRoute,
  postDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdDeviceStatusesRoute,
  postDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdScheduleActionsForRulesRoute,
  postDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdScheduledActionsForRuleDeviceComplianceScheduledActionForRuleIdScheduledActionConfigurationsRoute,
  postDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdScheduledActionsForRuleRoute,
  postDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdUserStatusesRoute,
  postDeviceManagementDeviceCompliancePoliciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementDeviceCompliancePolicyHandler = app
  .openapi(getDeviceManagementDeviceCompliancePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementDeviceCompliancePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdAssignmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdAssignmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdAssignmentsDeviceCompliancePolicyAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdAssignmentsDeviceCompliancePolicyAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdAssignmentsDeviceCompliancePolicyAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdAssignmentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdDeviceSettingStateSummariesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdDeviceSettingStateSummariesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdDeviceSettingStateSummariesSettingStateDeviceSummaryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdDeviceSettingStateSummariesSettingStateDeviceSummaryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdDeviceSettingStateSummariesSettingStateDeviceSummaryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdDeviceSettingStateSummariesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdDeviceStatusesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdDeviceStatusesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdDeviceStatusesDeviceComplianceDeviceStatusIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdDeviceStatusesDeviceComplianceDeviceStatusIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdDeviceStatusesDeviceComplianceDeviceStatusIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdDeviceStatusesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdDeviceStatusOverviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdDeviceStatusOverviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdDeviceStatusOverviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdAssignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdScheduleActionsForRulesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdScheduledActionsForRuleRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdScheduledActionsForRuleRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdScheduledActionsForRuleDeviceComplianceScheduledActionForRuleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdScheduledActionsForRuleDeviceComplianceScheduledActionForRuleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdScheduledActionsForRuleDeviceComplianceScheduledActionForRuleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdScheduledActionsForRuleDeviceComplianceScheduledActionForRuleIdScheduledActionConfigurationsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdScheduledActionsForRuleDeviceComplianceScheduledActionForRuleIdScheduledActionConfigurationsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdScheduledActionsForRuleDeviceComplianceScheduledActionForRuleIdScheduledActionConfigurationsDeviceComplianceActionItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdScheduledActionsForRuleDeviceComplianceScheduledActionForRuleIdScheduledActionConfigurationsDeviceComplianceActionItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdScheduledActionsForRuleDeviceComplianceScheduledActionForRuleIdScheduledActionConfigurationsDeviceComplianceActionItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdScheduledActionsForRuleDeviceComplianceScheduledActionForRuleIdScheduledActionConfigurationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdScheduledActionsForRuleCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdUserStatusesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdUserStatusesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdUserStatusesDeviceComplianceUserStatusIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdUserStatusesDeviceComplianceUserStatusIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdUserStatusesDeviceComplianceUserStatusIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdUserStatusesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdUserStatusOverviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdUserStatusOverviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdUserStatusOverviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceManagementDeviceCompliancePoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
