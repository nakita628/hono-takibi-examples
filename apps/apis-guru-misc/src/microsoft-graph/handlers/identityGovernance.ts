import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getIdentityGovernanceAccessReviewsDefinitionsAccessReviewScheduleDefinitionIdInstancesAccessReviewInstanceIdContactedReviewersCountRoute,
  getIdentityGovernanceAccessReviewsDefinitionsAccessReviewScheduleDefinitionIdInstancesAccessReviewInstanceIdDecisionsCountRoute,
  getIdentityGovernanceAccessReviewsDefinitionsAccessReviewScheduleDefinitionIdInstancesAccessReviewInstanceIdStagesAccessReviewStageIdDecisionsCountRoute,
  getIdentityGovernanceAccessReviewsDefinitionsAccessReviewScheduleDefinitionIdInstancesAccessReviewInstanceIdStagesCountRoute,
  getIdentityGovernanceAccessReviewsDefinitionsAccessReviewScheduleDefinitionIdInstancesCountRoute,
  getIdentityGovernanceAccessReviewsDefinitionsCountRoute,
  getIdentityGovernanceAccessReviewsHistoryDefinitionsAccessReviewHistoryDefinitionIdInstancesCountRoute,
  getIdentityGovernanceAccessReviewsHistoryDefinitionsCountRoute,
  getIdentityGovernanceAppConsentAppConsentRequestsAppConsentRequestIdUserConsentRequestsCountRoute,
  getIdentityGovernanceAppConsentAppConsentRequestsAppConsentRequestIdUserConsentRequestsUserConsentRequestIdApprovalStagesCountRoute,
  getIdentityGovernanceAppConsentAppConsentRequestsCountRoute,
  getIdentityGovernanceEntitlementManagementAccessPackageAssignmentApprovalsApprovalIdStagesCountRoute,
  getIdentityGovernanceEntitlementManagementAccessPackageAssignmentApprovalsCountRoute,
  getIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdAccessPackagesIncompatibleWithCountRoute,
  getIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdAssignmentPoliciesAccessPackageAssignmentPolicyIdQuestionsCountRoute,
  getIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdAssignmentPoliciesCountRoute,
  getIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdIncompatibleAccessPackagesCountRoute,
  getIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdIncompatibleGroupsCountRoute,
  getIdentityGovernanceEntitlementManagementAccessPackagesCountRoute,
  getIdentityGovernanceEntitlementManagementAssignmentPoliciesAccessPackageAssignmentPolicyIdQuestionsCountRoute,
  getIdentityGovernanceEntitlementManagementAssignmentPoliciesCountRoute,
  getIdentityGovernanceEntitlementManagementAssignmentRequestsCountRoute,
  getIdentityGovernanceEntitlementManagementAssignmentsCountRoute,
  getIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdAccessPackagesIncompatibleWithCountRoute,
  getIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdAssignmentPoliciesAccessPackageAssignmentPolicyIdQuestionsCountRoute,
  getIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdAssignmentPoliciesCountRoute,
  getIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdIncompatibleAccessPackagesCountRoute,
  getIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdIncompatibleGroupsCountRoute,
  getIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesCountRoute,
  getIdentityGovernanceEntitlementManagementCatalogsCountRoute,
  getIdentityGovernanceEntitlementManagementConnectedOrganizationsConnectedOrganizationIdExternalSponsorsCountRoute,
  getIdentityGovernanceEntitlementManagementConnectedOrganizationsConnectedOrganizationIdInternalSponsorsCountRoute,
  getIdentityGovernanceEntitlementManagementConnectedOrganizationsCountRoute,
  getIdentityGovernanceTermsOfUseAgreementAcceptancesCountRoute,
  getIdentityGovernanceTermsOfUseAgreementsAgreementIdAcceptancesCountRoute,
  getIdentityGovernanceTermsOfUseAgreementsAgreementIdFileLocalizationsAgreementFileLocalizationIdVersionsCountRoute,
  getIdentityGovernanceTermsOfUseAgreementsAgreementIdFileLocalizationsCountRoute,
  getIdentityGovernanceTermsOfUseAgreementsAgreementIdFilesAgreementFileLocalizationIdVersionsCountRoute,
  getIdentityGovernanceTermsOfUseAgreementsAgreementIdFilesCountRoute,
  getIdentityGovernanceTermsOfUseAgreementsCountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const identityGovernanceHandler = app
  .openapi(getIdentityGovernanceAccessReviewsDefinitionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getIdentityGovernanceAccessReviewsDefinitionsAccessReviewScheduleDefinitionIdInstancesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceAccessReviewsDefinitionsAccessReviewScheduleDefinitionIdInstancesAccessReviewInstanceIdContactedReviewersCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceAccessReviewsDefinitionsAccessReviewScheduleDefinitionIdInstancesAccessReviewInstanceIdDecisionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceAccessReviewsDefinitionsAccessReviewScheduleDefinitionIdInstancesAccessReviewInstanceIdStagesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceAccessReviewsDefinitionsAccessReviewScheduleDefinitionIdInstancesAccessReviewInstanceIdStagesAccessReviewStageIdDecisionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityGovernanceAccessReviewsHistoryDefinitionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getIdentityGovernanceAccessReviewsHistoryDefinitionsAccessReviewHistoryDefinitionIdInstancesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityGovernanceAppConsentAppConsentRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getIdentityGovernanceAppConsentAppConsentRequestsAppConsentRequestIdUserConsentRequestsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceAppConsentAppConsentRequestsAppConsentRequestIdUserConsentRequestsUserConsentRequestIdApprovalStagesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementAccessPackageAssignmentApprovalsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementAccessPackageAssignmentApprovalsApprovalIdStagesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityGovernanceEntitlementManagementAccessPackagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdAccessPackagesIncompatibleWithCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdAssignmentPoliciesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdAssignmentPoliciesAccessPackageAssignmentPolicyIdQuestionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdIncompatibleAccessPackagesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementAccessPackagesAccessPackageIdIncompatibleGroupsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityGovernanceEntitlementManagementAssignmentPoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getIdentityGovernanceEntitlementManagementAssignmentPoliciesAccessPackageAssignmentPolicyIdQuestionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityGovernanceEntitlementManagementAssignmentRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityGovernanceEntitlementManagementAssignmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityGovernanceEntitlementManagementCatalogsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdAccessPackagesIncompatibleWithCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdAssignmentPoliciesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdAssignmentPoliciesAccessPackageAssignmentPolicyIdQuestionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdIncompatibleAccessPackagesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementCatalogsAccessPackageCatalogIdAccessPackagesAccessPackageIdIncompatibleGroupsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityGovernanceEntitlementManagementConnectedOrganizationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getIdentityGovernanceEntitlementManagementConnectedOrganizationsConnectedOrganizationIdExternalSponsorsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceEntitlementManagementConnectedOrganizationsConnectedOrganizationIdInternalSponsorsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityGovernanceTermsOfUseAgreementAcceptancesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityGovernanceTermsOfUseAgreementsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityGovernanceTermsOfUseAgreementsAgreementIdAcceptancesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityGovernanceTermsOfUseAgreementsAgreementIdFileLocalizationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getIdentityGovernanceTermsOfUseAgreementsAgreementIdFileLocalizationsAgreementFileLocalizationIdVersionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityGovernanceTermsOfUseAgreementsAgreementIdFilesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getIdentityGovernanceTermsOfUseAgreementsAgreementIdFilesAgreementFileLocalizationIdVersionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
