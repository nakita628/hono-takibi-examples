import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetInspectorServiceAddAttributesToFindingsHandler,
  XAmzTargetInspectorServiceCreateAssessmentTargetHandler,
  XAmzTargetInspectorServiceCreateAssessmentTemplateHandler,
  XAmzTargetInspectorServiceCreateExclusionsPreviewHandler,
  XAmzTargetInspectorServiceCreateResourceGroupHandler,
  XAmzTargetInspectorServiceDeleteAssessmentRunHandler,
  XAmzTargetInspectorServiceDeleteAssessmentTargetHandler,
  XAmzTargetInspectorServiceDeleteAssessmentTemplateHandler,
  XAmzTargetInspectorServiceDescribeAssessmentRunsHandler,
  XAmzTargetInspectorServiceDescribeAssessmentTargetsHandler,
  XAmzTargetInspectorServiceDescribeAssessmentTemplatesHandler,
  XAmzTargetInspectorServiceDescribeCrossAccountAccessRoleHandler,
  XAmzTargetInspectorServiceDescribeExclusionsHandler,
  XAmzTargetInspectorServiceDescribeFindingsHandler,
  XAmzTargetInspectorServiceDescribeResourceGroupsHandler,
  XAmzTargetInspectorServiceDescribeRulesPackagesHandler,
  XAmzTargetInspectorServiceGetAssessmentReportHandler,
  XAmzTargetInspectorServiceGetExclusionsPreviewHandler,
  XAmzTargetInspectorServiceGetTelemetryMetadataHandler,
  XAmzTargetInspectorServiceListAssessmentRunAgentsHandler,
  XAmzTargetInspectorServiceListAssessmentRunsHandler,
  XAmzTargetInspectorServiceListAssessmentTargetsHandler,
  XAmzTargetInspectorServiceListAssessmentTemplatesHandler,
  XAmzTargetInspectorServiceListEventSubscriptionsHandler,
  XAmzTargetInspectorServiceListExclusionsHandler,
  XAmzTargetInspectorServiceListFindingsHandler,
  XAmzTargetInspectorServiceListRulesPackagesHandler,
  XAmzTargetInspectorServiceListTagsForResourceHandler,
  XAmzTargetInspectorServicePreviewAgentsHandler,
  XAmzTargetInspectorServiceRegisterCrossAccountAccessRoleHandler,
  XAmzTargetInspectorServiceRemoveAttributesFromFindingsHandler,
  XAmzTargetInspectorServiceSetTagsForResourceHandler,
  XAmzTargetInspectorServiceStartAssessmentRunHandler,
  XAmzTargetInspectorServiceStopAssessmentRunHandler,
  XAmzTargetInspectorServiceSubscribeToEventHandler,
  XAmzTargetInspectorServiceUnsubscribeFromEventHandler,
  XAmzTargetInspectorServiceUpdateAssessmentTargetHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetInspectorServiceAddAttributesToFindingsHandler)
  .route('/', XAmzTargetInspectorServiceCreateAssessmentTargetHandler)
  .route('/', XAmzTargetInspectorServiceCreateAssessmentTemplateHandler)
  .route('/', XAmzTargetInspectorServiceCreateExclusionsPreviewHandler)
  .route('/', XAmzTargetInspectorServiceCreateResourceGroupHandler)
  .route('/', XAmzTargetInspectorServiceDeleteAssessmentRunHandler)
  .route('/', XAmzTargetInspectorServiceDeleteAssessmentTargetHandler)
  .route('/', XAmzTargetInspectorServiceDeleteAssessmentTemplateHandler)
  .route('/', XAmzTargetInspectorServiceDescribeAssessmentRunsHandler)
  .route('/', XAmzTargetInspectorServiceDescribeAssessmentTargetsHandler)
  .route('/', XAmzTargetInspectorServiceDescribeAssessmentTemplatesHandler)
  .route('/', XAmzTargetInspectorServiceDescribeCrossAccountAccessRoleHandler)
  .route('/', XAmzTargetInspectorServiceDescribeExclusionsHandler)
  .route('/', XAmzTargetInspectorServiceDescribeFindingsHandler)
  .route('/', XAmzTargetInspectorServiceDescribeResourceGroupsHandler)
  .route('/', XAmzTargetInspectorServiceDescribeRulesPackagesHandler)
  .route('/', XAmzTargetInspectorServiceGetAssessmentReportHandler)
  .route('/', XAmzTargetInspectorServiceGetExclusionsPreviewHandler)
  .route('/', XAmzTargetInspectorServiceGetTelemetryMetadataHandler)
  .route('/', XAmzTargetInspectorServiceListAssessmentRunAgentsHandler)
  .route('/', XAmzTargetInspectorServiceListAssessmentRunsHandler)
  .route('/', XAmzTargetInspectorServiceListAssessmentTargetsHandler)
  .route('/', XAmzTargetInspectorServiceListAssessmentTemplatesHandler)
  .route('/', XAmzTargetInspectorServiceListEventSubscriptionsHandler)
  .route('/', XAmzTargetInspectorServiceListExclusionsHandler)
  .route('/', XAmzTargetInspectorServiceListFindingsHandler)
  .route('/', XAmzTargetInspectorServiceListRulesPackagesHandler)
  .route('/', XAmzTargetInspectorServiceListTagsForResourceHandler)
  .route('/', XAmzTargetInspectorServicePreviewAgentsHandler)
  .route('/', XAmzTargetInspectorServiceRegisterCrossAccountAccessRoleHandler)
  .route('/', XAmzTargetInspectorServiceRemoveAttributesFromFindingsHandler)
  .route('/', XAmzTargetInspectorServiceSetTagsForResourceHandler)
  .route('/', XAmzTargetInspectorServiceStartAssessmentRunHandler)
  .route('/', XAmzTargetInspectorServiceStopAssessmentRunHandler)
  .route('/', XAmzTargetInspectorServiceSubscribeToEventHandler)
  .route('/', XAmzTargetInspectorServiceUnsubscribeFromEventHandler)
  .route('/', XAmzTargetInspectorServiceUpdateAssessmentTargetHandler)

export default app
