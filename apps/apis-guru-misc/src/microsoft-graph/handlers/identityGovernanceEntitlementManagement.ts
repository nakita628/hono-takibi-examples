import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIdentityGovernanceEntitlementManagementAccessPackageAssignmentApprovalsApprovalIdRoute,
  deleteIdentityGovernanceEntitlementManagementAccessPackageAssignmentApprovalsApprovalIdStagesApprovalStageIdRoute,
  deleteIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdAssignmentPoliciesAccessPackageAssignmentPolicyIdQuestionsAccessPackageQuestionIdRoute,
  deleteIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdAssignmentPoliciesAccessPackageAssignmentPolicyIdRoute,
  deleteIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdIncompatibleAccessPackagesAccessPackageId1RefRoute,
  deleteIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdIncompatibleGroupsGroupIdRefRoute,
  deleteIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdRoute,
  deleteIdentityGovernanceEntitlementManagementAssignmentPoliciesAccessPackageAssignmentPolicyIdQuestionsAccessPackageQuestionIdRoute,
  deleteIdentityGovernanceEntitlementManagementAssignmentPoliciesAccessPackageAssignmentPolicyIdRoute,
  deleteIdentityGovernanceEntitlementManagementAssignmentRequestsAccessPackageAssignmentRequestIdRoute,
  deleteIdentityGovernanceEntitlementManagementAssignmentsAccessPackageAssignmentIdRoute,
  deleteIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdAssignmentPoliciesAccessPackageAssignmentPolicyIdQuestionsAccessPackageQuestionIdRoute,
  deleteIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdAssignmentPoliciesAccessPackageAssignmentPolicyIdRoute,
  deleteIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdIncompatibleAccessPackagesAccessPackageId1RefRoute,
  deleteIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdIncompatibleGroupsGroupIdRefRoute,
  deleteIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdRoute,
  deleteIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdRoute,
  deleteIdentityGovernanceEntitlementManagementConnectedOrganizationsConnectedOrganizationIdExternalSponsorsDirectoryObjectIdRefRoute,
  deleteIdentityGovernanceEntitlementManagementConnectedOrganizationsConnectedOrganizationIdInternalSponsorsDirectoryObjectIdRefRoute,
  deleteIdentityGovernanceEntitlementManagementConnectedOrganizationsConnectedOrganizationIdRoute,
  deleteIdentityGovernanceEntitlementManagementRoute,
  deleteIdentityGovernanceEntitlementManagementSettingsRoute,
  getIdentityGovernanceEntitlementManagementAccessPackageAssignmentApprovalsApprovalIdRoute,
  getIdentityGovernanceEntitlementManagementAccessPackageAssignmentApprovalsApprovalIdStagesApprovalStageIdRoute,
  getIdentityGovernanceEntitlementManagementAccessPackageAssignmentApprovalsApprovalIdStagesRoute,
  getIdentityGovernanceEntitlementManagementAccessPackageAssignmentApprovalsRoute,
  getIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdAccessPackagesIncompatibleWithAccessPackageId1Route,
  getIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdAccessPackagesIncompatibleWithRoute,
  getIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdAssignmentPoliciesAccessPackageAssignmentPolicyIdAccessPackageRoute,
  getIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdAssignmentPoliciesAccessPackageAssignmentPolicyIdCatalogRoute,
  getIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdAssignmentPoliciesAccessPackageAssignmentPolicyIdQuestionsAccessPackageQuestionIdRoute,
  getIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdAssignmentPoliciesAccessPackageAssignmentPolicyIdQuestionsRoute,
  getIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdAssignmentPoliciesAccessPackageAssignmentPolicyIdRoute,
  getIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdAssignmentPoliciesRoute,
  getIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdCatalogRoute,
  getIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdIncompatibleAccessPackagesRefRoute,
  getIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdIncompatibleAccessPackagesRoute,
  getIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdIncompatibleGroupsRefRoute,
  getIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdIncompatibleGroupsRoute,
  getIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdRoute,
  getIdentityGovernanceEntitlementManagementAccessPackagesRoute,
  getIdentityGovernanceEntitlementManagementAssignmentPoliciesAccessPackageAssignmentPolicyIdAccessPackageRoute,
  getIdentityGovernanceEntitlementManagementAssignmentPoliciesAccessPackageAssignmentPolicyIdCatalogRoute,
  getIdentityGovernanceEntitlementManagementAssignmentPoliciesAccessPackageAssignmentPolicyIdQuestionsAccessPackageQuestionIdRoute,
  getIdentityGovernanceEntitlementManagementAssignmentPoliciesAccessPackageAssignmentPolicyIdQuestionsRoute,
  getIdentityGovernanceEntitlementManagementAssignmentPoliciesAccessPackageAssignmentPolicyIdRoute,
  getIdentityGovernanceEntitlementManagementAssignmentPoliciesRoute,
  getIdentityGovernanceEntitlementManagementAssignmentRequestsAccessPackageAssignmentRequestIdAccessPackageRoute,
  getIdentityGovernanceEntitlementManagementAssignmentRequestsAccessPackageAssignmentRequestIdAssignmentRoute,
  getIdentityGovernanceEntitlementManagementAssignmentRequestsAccessPackageAssignmentRequestIdRequestorRoute,
  getIdentityGovernanceEntitlementManagementAssignmentRequestsAccessPackageAssignmentRequestIdRoute,
  getIdentityGovernanceEntitlementManagementAssignmentRequestsRoute,
  getIdentityGovernanceEntitlementManagementAssignmentsAccessPackageAssignmentIdAccessPackageRoute,
  getIdentityGovernanceEntitlementManagementAssignmentsAccessPackageAssignmentIdAssignmentPolicyRoute,
  getIdentityGovernanceEntitlementManagementAssignmentsAccessPackageAssignmentIdRoute,
  getIdentityGovernanceEntitlementManagementAssignmentsAccessPackageAssignmentIdTargetRoute,
  getIdentityGovernanceEntitlementManagementAssignmentsRoute,
  getIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdAccessPackagesIncompatibleWithAccessPackageId1Route,
  getIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdAccessPackagesIncompatibleWithRoute,
  getIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdAssignmentPoliciesAccessPackageAssignmentPolicyIdAccessPackageRoute,
  getIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdAssignmentPoliciesAccessPackageAssignmentPolicyIdCatalogRoute,
  getIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdAssignmentPoliciesAccessPackageAssignmentPolicyIdQuestionsAccessPackageQuestionIdRoute,
  getIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdAssignmentPoliciesAccessPackageAssignmentPolicyIdQuestionsRoute,
  getIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdAssignmentPoliciesAccessPackageAssignmentPolicyIdRoute,
  getIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdAssignmentPoliciesRoute,
  getIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdCatalogRoute,
  getIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdIncompatibleAccessPackagesRefRoute,
  getIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdIncompatibleAccessPackagesRoute,
  getIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdIncompatibleGroupsRefRoute,
  getIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdIncompatibleGroupsRoute,
  getIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdRoute,
  getIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesRoute,
  getIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdRoute,
  getIdentityGovernanceEntitlementManagementCatalogsRoute,
  getIdentityGovernanceEntitlementManagementConnectedOrganizationsConnectedOrganizationIdExternalSponsorsRefRoute,
  getIdentityGovernanceEntitlementManagementConnectedOrganizationsConnectedOrganizationIdExternalSponsorsRoute,
  getIdentityGovernanceEntitlementManagementConnectedOrganizationsConnectedOrganizationIdInternalSponsorsRefRoute,
  getIdentityGovernanceEntitlementManagementConnectedOrganizationsConnectedOrganizationIdInternalSponsorsRoute,
  getIdentityGovernanceEntitlementManagementConnectedOrganizationsConnectedOrganizationIdRoute,
  getIdentityGovernanceEntitlementManagementConnectedOrganizationsRoute,
  getIdentityGovernanceEntitlementManagementRoute,
  getIdentityGovernanceEntitlementManagementSettingsRoute,
  patchIdentityGovernanceEntitlementManagementAccessPackageAssignmentApprovalsApprovalIdRoute,
  patchIdentityGovernanceEntitlementManagementAccessPackageAssignmentApprovalsApprovalIdStagesApprovalStageIdRoute,
  patchIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdAssignmentPoliciesAccessPackageAssignmentPolicyIdQuestionsAccessPackageQuestionIdRoute,
  patchIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdAssignmentPoliciesAccessPackageAssignmentPolicyIdRoute,
  patchIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdRoute,
  patchIdentityGovernanceEntitlementManagementAssignmentPoliciesAccessPackageAssignmentPolicyIdQuestionsAccessPackageQuestionIdRoute,
  patchIdentityGovernanceEntitlementManagementAssignmentRequestsAccessPackageAssignmentRequestIdRoute,
  patchIdentityGovernanceEntitlementManagementAssignmentsAccessPackageAssignmentIdRoute,
  patchIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdAssignmentPoliciesAccessPackageAssignmentPolicyIdQuestionsAccessPackageQuestionIdRoute,
  patchIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdAssignmentPoliciesAccessPackageAssignmentPolicyIdRoute,
  patchIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdRoute,
  patchIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdRoute,
  patchIdentityGovernanceEntitlementManagementConnectedOrganizationsConnectedOrganizationIdRoute,
  patchIdentityGovernanceEntitlementManagementRoute,
  patchIdentityGovernanceEntitlementManagementSettingsRoute,
  postIdentityGovernanceEntitlementManagementAccessPackageAssignmentApprovalsApprovalIdStagesRoute,
  postIdentityGovernanceEntitlementManagementAccessPackageAssignmentApprovalsRoute,
  postIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdAssignmentPoliciesAccessPackageAssignmentPolicyIdQuestionsRoute,
  postIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdAssignmentPoliciesRoute,
  postIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdIncompatibleAccessPackagesRefRoute,
  postIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdIncompatibleGroupsRefRoute,
  postIdentityGovernanceEntitlementManagementAccessPackagesRoute,
  postIdentityGovernanceEntitlementManagementAssignmentPoliciesAccessPackageAssignmentPolicyIdQuestionsRoute,
  postIdentityGovernanceEntitlementManagementAssignmentPoliciesRoute,
  postIdentityGovernanceEntitlementManagementAssignmentRequestsRoute,
  postIdentityGovernanceEntitlementManagementAssignmentsRoute,
  postIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdAssignmentPoliciesAccessPackageAssignmentPolicyIdQuestionsRoute,
  postIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdAssignmentPoliciesRoute,
  postIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdIncompatibleAccessPackagesRefRoute,
  postIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdIncompatibleGroupsRefRoute,
  postIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesRoute,
  postIdentityGovernanceEntitlementManagementCatalogsRoute,
  postIdentityGovernanceEntitlementManagementConnectedOrganizationsConnectedOrganizationIdExternalSponsorsRefRoute,
  postIdentityGovernanceEntitlementManagementConnectedOrganizationsConnectedOrganizationIdExternalSponsorsRoute,
  postIdentityGovernanceEntitlementManagementConnectedOrganizationsConnectedOrganizationIdInternalSponsorsRefRoute,
  postIdentityGovernanceEntitlementManagementConnectedOrganizationsConnectedOrganizationIdInternalSponsorsRoute,
  postIdentityGovernanceEntitlementManagementConnectedOrganizationsRoute,
  putIdentityGovernanceEntitlementManagementAssignmentPoliciesAccessPackageAssignmentPolicyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const identityGovernanceEntitlementManagementHandler = app
  .openapi(deleteIdentityGovernanceEntitlementManagementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityGovernanceEntitlementManagementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIdentityGovernanceEntitlementManagementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityGovernanceEntitlementManagementAccessPackageAssignmentApprovalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postIdentityGovernanceEntitlementManagementAccessPackageAssignmentApprovalsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteIdentityGovernanceEntitlementManagementAccessPackageAssignmentApprovalsApprovalIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementAccessPackageAssignmentApprovalsApprovalIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchIdentityGovernanceEntitlementManagementAccessPackageAssignmentApprovalsApprovalIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementAccessPackageAssignmentApprovalsApprovalIdStagesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postIdentityGovernanceEntitlementManagementAccessPackageAssignmentApprovalsApprovalIdStagesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteIdentityGovernanceEntitlementManagementAccessPackageAssignmentApprovalsApprovalIdStagesApprovalStageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementAccessPackageAssignmentApprovalsApprovalIdStagesApprovalStageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchIdentityGovernanceEntitlementManagementAccessPackageAssignmentApprovalsApprovalIdStagesApprovalStageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityGovernanceEntitlementManagementAccessPackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityGovernanceEntitlementManagementAccessPackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdAccessPackagesIncompatibleWithRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdAccessPackagesIncompatibleWithAccessPackageId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdAssignmentPoliciesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdAssignmentPoliciesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdAssignmentPoliciesAccessPackageAssignmentPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdAssignmentPoliciesAccessPackageAssignmentPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdAssignmentPoliciesAccessPackageAssignmentPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdAssignmentPoliciesAccessPackageAssignmentPolicyIdAccessPackageRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdAssignmentPoliciesAccessPackageAssignmentPolicyIdCatalogRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdAssignmentPoliciesAccessPackageAssignmentPolicyIdQuestionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdAssignmentPoliciesAccessPackageAssignmentPolicyIdQuestionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdAssignmentPoliciesAccessPackageAssignmentPolicyIdQuestionsAccessPackageQuestionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdAssignmentPoliciesAccessPackageAssignmentPolicyIdQuestionsAccessPackageQuestionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdAssignmentPoliciesAccessPackageAssignmentPolicyIdQuestionsAccessPackageQuestionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdCatalogRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdIncompatibleAccessPackagesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdIncompatibleAccessPackagesRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdIncompatibleAccessPackagesRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdIncompatibleAccessPackagesAccessPackageId1RefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdIncompatibleGroupsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdIncompatibleGroupsRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdIncompatibleGroupsRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdIncompatibleGroupsGroupIdRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityGovernanceEntitlementManagementAssignmentPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityGovernanceEntitlementManagementAssignmentPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteIdentityGovernanceEntitlementManagementAssignmentPoliciesAccessPackageAssignmentPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementAssignmentPoliciesAccessPackageAssignmentPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putIdentityGovernanceEntitlementManagementAssignmentPoliciesAccessPackageAssignmentPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementAssignmentPoliciesAccessPackageAssignmentPolicyIdAccessPackageRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementAssignmentPoliciesAccessPackageAssignmentPolicyIdCatalogRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementAssignmentPoliciesAccessPackageAssignmentPolicyIdQuestionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postIdentityGovernanceEntitlementManagementAssignmentPoliciesAccessPackageAssignmentPolicyIdQuestionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteIdentityGovernanceEntitlementManagementAssignmentPoliciesAccessPackageAssignmentPolicyIdQuestionsAccessPackageQuestionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementAssignmentPoliciesAccessPackageAssignmentPolicyIdQuestionsAccessPackageQuestionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchIdentityGovernanceEntitlementManagementAssignmentPoliciesAccessPackageAssignmentPolicyIdQuestionsAccessPackageQuestionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityGovernanceEntitlementManagementAssignmentRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityGovernanceEntitlementManagementAssignmentRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteIdentityGovernanceEntitlementManagementAssignmentRequestsAccessPackageAssignmentRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementAssignmentRequestsAccessPackageAssignmentRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchIdentityGovernanceEntitlementManagementAssignmentRequestsAccessPackageAssignmentRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementAssignmentRequestsAccessPackageAssignmentRequestIdAccessPackageRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementAssignmentRequestsAccessPackageAssignmentRequestIdAssignmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementAssignmentRequestsAccessPackageAssignmentRequestIdRequestorRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityGovernanceEntitlementManagementAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityGovernanceEntitlementManagementAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteIdentityGovernanceEntitlementManagementAssignmentsAccessPackageAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementAssignmentsAccessPackageAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchIdentityGovernanceEntitlementManagementAssignmentsAccessPackageAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementAssignmentsAccessPackageAssignmentIdAccessPackageRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementAssignmentsAccessPackageAssignmentIdAssignmentPolicyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementAssignmentsAccessPackageAssignmentIdTargetRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityGovernanceEntitlementManagementCatalogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityGovernanceEntitlementManagementCatalogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdAccessPackagesIncompatibleWithRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdAccessPackagesIncompatibleWithAccessPackageId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdAssignmentPoliciesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdAssignmentPoliciesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdAssignmentPoliciesAccessPackageAssignmentPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdAssignmentPoliciesAccessPackageAssignmentPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdAssignmentPoliciesAccessPackageAssignmentPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdAssignmentPoliciesAccessPackageAssignmentPolicyIdAccessPackageRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdAssignmentPoliciesAccessPackageAssignmentPolicyIdCatalogRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdAssignmentPoliciesAccessPackageAssignmentPolicyIdQuestionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdAssignmentPoliciesAccessPackageAssignmentPolicyIdQuestionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdAssignmentPoliciesAccessPackageAssignmentPolicyIdQuestionsAccessPackageQuestionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdAssignmentPoliciesAccessPackageAssignmentPolicyIdQuestionsAccessPackageQuestionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdAssignmentPoliciesAccessPackageAssignmentPolicyIdQuestionsAccessPackageQuestionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdCatalogRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdIncompatibleAccessPackagesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdIncompatibleAccessPackagesRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdIncompatibleAccessPackagesRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdIncompatibleAccessPackagesAccessPackageId1RefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdIncompatibleGroupsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdIncompatibleGroupsRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdIncompatibleGroupsRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdIncompatibleGroupsGroupIdRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityGovernanceEntitlementManagementConnectedOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityGovernanceEntitlementManagementConnectedOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteIdentityGovernanceEntitlementManagementConnectedOrganizationsConnectedOrganizationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementConnectedOrganizationsConnectedOrganizationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchIdentityGovernanceEntitlementManagementConnectedOrganizationsConnectedOrganizationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementConnectedOrganizationsConnectedOrganizationIdExternalSponsorsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postIdentityGovernanceEntitlementManagementConnectedOrganizationsConnectedOrganizationIdExternalSponsorsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementConnectedOrganizationsConnectedOrganizationIdExternalSponsorsRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postIdentityGovernanceEntitlementManagementConnectedOrganizationsConnectedOrganizationIdExternalSponsorsRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteIdentityGovernanceEntitlementManagementConnectedOrganizationsConnectedOrganizationIdExternalSponsorsDirectoryObjectIdRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementConnectedOrganizationsConnectedOrganizationIdInternalSponsorsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postIdentityGovernanceEntitlementManagementConnectedOrganizationsConnectedOrganizationIdInternalSponsorsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementConnectedOrganizationsConnectedOrganizationIdInternalSponsorsRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postIdentityGovernanceEntitlementManagementConnectedOrganizationsConnectedOrganizationIdInternalSponsorsRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteIdentityGovernanceEntitlementManagementConnectedOrganizationsConnectedOrganizationIdInternalSponsorsDirectoryObjectIdRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteIdentityGovernanceEntitlementManagementSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityGovernanceEntitlementManagementSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIdentityGovernanceEntitlementManagementSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
