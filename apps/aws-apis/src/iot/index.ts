import { OpenAPIHono } from '@hono/zod-openapi'
import {
  acceptCertificateTransferHandler,
  activeViolationsHandler,
  attachedPoliciesHandler,
  auditHandler,
  authorizerHandler,
  authorizersHandler,
  behaviorModelTrainingHandler,
  billingGroupsHandler,
  cacertificateHandler,
  cacertificatesHandler,
  cancelCertificateTransferHandler,
  certificateHandler,
  certificatesByCaHandler,
  certificatesHandler,
  certificatesOutGoingHandler,
  confirmdestinationHandler,
  customMetricHandler,
  customMetricsHandler,
  defaultAuthorizerHandler,
  destinationsHandler,
  detectHandler,
  dimensionsHandler,
  domainConfigurationsHandler,
  dynamicThingGroupsHandler,
  effectivePoliciesHandler,
  endpointHandler,
  eventConfigurationsHandler,
  fleetMetricHandler,
  fleetMetricsHandler,
  indexingHandler,
  indicesHandler,
  jobsHandler,
  jobTemplatesHandler,
  keysAndCertificateHandler,
  loggingOptionsHandler,
  managedJobTemplatesHandler,
  metricValuesThingNameMetricNameStartTimeEndTimeHandler,
  mitigationactionsHandler,
  otaUpdatesHandler,
  policiesHandler,
  policyPrincipalsXAmznIotPolicyHandler,
  policyTargetsHandler,
  principalPoliciesHandler,
  principalPoliciesXAmznIotPrincipalHandler,
  principalsHandler,
  provisioningTemplatesHandler,
  registrationcodeHandler,
  rejectCertificateTransferHandler,
  roleAliasesHandler,
  rulesHandler,
  securityProfileBehaviorsHandler,
  securityProfilesForTargetSecurityProfileTargetArnHandler,
  securityProfilesHandler,
  streamsHandler,
  tagsHandler,
  tagsResourceArnHandler,
  targetPoliciesHandler,
  testAuthorizationHandler,
  thingGroupsHandler,
  thingRegistrationTasksHandler,
  thingsHandler,
  thingTypesHandler,
  transferCertificateHandler,
  untagHandler,
  v2LoggingLevelHandler,
  v2LoggingLevelTargetTypeTargetNameHandler,
  v2LoggingOptionsHandler,
  violationEventsStartTimeEndTimeHandler,
  violationsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', acceptCertificateTransferHandler)
  .route('/', billingGroupsHandler)
  .route('/', thingGroupsHandler)
  .route('/', jobsHandler)
  .route('/', targetPoliciesHandler)
  .route('/', principalPoliciesHandler)
  .route('/', securityProfilesHandler)
  .route('/', thingsHandler)
  .route('/', auditHandler)
  .route('/', cancelCertificateTransferHandler)
  .route('/', detectHandler)
  .route('/', defaultAuthorizerHandler)
  .route('/', confirmdestinationHandler)
  .route('/', authorizerHandler)
  .route('/', certificatesHandler)
  .route('/', customMetricHandler)
  .route('/', dimensionsHandler)
  .route('/', domainConfigurationsHandler)
  .route('/', dynamicThingGroupsHandler)
  .route('/', fleetMetricHandler)
  .route('/', jobTemplatesHandler)
  .route('/', keysAndCertificateHandler)
  .route('/', mitigationactionsHandler)
  .route('/', otaUpdatesHandler)
  .route('/', policiesHandler)
  .route('/', provisioningTemplatesHandler)
  .route('/', roleAliasesHandler)
  .route('/', streamsHandler)
  .route('/', thingTypesHandler)
  .route('/', rulesHandler)
  .route('/', destinationsHandler)
  .route('/', cacertificateHandler)
  .route('/', registrationcodeHandler)
  .route('/', v2LoggingLevelTargetTypeTargetNameHandler)
  .route('/', endpointHandler)
  .route('/', eventConfigurationsHandler)
  .route('/', indicesHandler)
  .route('/', managedJobTemplatesHandler)
  .route('/', thingRegistrationTasksHandler)
  .route('/', behaviorModelTrainingHandler)
  .route('/', effectivePoliciesHandler)
  .route('/', indexingHandler)
  .route('/', loggingOptionsHandler)
  .route('/', v2LoggingOptionsHandler)
  .route('/', activeViolationsHandler)
  .route('/', attachedPoliciesHandler)
  .route('/', authorizersHandler)
  .route('/', cacertificatesHandler)
  .route('/', certificatesByCaHandler)
  .route('/', customMetricsHandler)
  .route('/', fleetMetricsHandler)
  .route('/', metricValuesThingNameMetricNameStartTimeEndTimeHandler)
  .route('/', certificatesOutGoingHandler)
  .route('/', policyPrincipalsXAmznIotPolicyHandler)
  .route('/', principalPoliciesXAmznIotPrincipalHandler)
  .route('/', principalsHandler)
  .route('/', securityProfilesForTargetSecurityProfileTargetArnHandler)
  .route('/', tagsResourceArnHandler)
  .route('/', policyTargetsHandler)
  .route('/', v2LoggingLevelHandler)
  .route('/', violationEventsStartTimeEndTimeHandler)
  .route('/', violationsHandler)
  .route('/', certificateHandler)
  .route('/', rejectCertificateTransferHandler)
  .route('/', tagsHandler)
  .route('/', testAuthorizationHandler)
  .route('/', transferCertificateHandler)
  .route('/', untagHandler)
  .route('/', securityProfileBehaviorsHandler)

export default app
