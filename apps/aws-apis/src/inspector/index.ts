import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetInspectorServiceAddAttributesToFindingsHandler,
  xAmzTargetInspectorServiceCreateAssessmentTargetHandler,
  xAmzTargetInspectorServiceCreateAssessmentTemplateHandler,
  xAmzTargetInspectorServiceCreateExclusionsPreviewHandler,
  xAmzTargetInspectorServiceCreateResourceGroupHandler,
  xAmzTargetInspectorServiceDeleteAssessmentRunHandler,
  xAmzTargetInspectorServiceDeleteAssessmentTargetHandler,
  xAmzTargetInspectorServiceDeleteAssessmentTemplateHandler,
  xAmzTargetInspectorServiceDescribeAssessmentRunsHandler,
  xAmzTargetInspectorServiceDescribeAssessmentTargetsHandler,
  xAmzTargetInspectorServiceDescribeAssessmentTemplatesHandler,
  xAmzTargetInspectorServiceDescribeCrossAccountAccessRoleHandler,
  xAmzTargetInspectorServiceDescribeExclusionsHandler,
  xAmzTargetInspectorServiceDescribeFindingsHandler,
  xAmzTargetInspectorServiceDescribeResourceGroupsHandler,
  xAmzTargetInspectorServiceDescribeRulesPackagesHandler,
  xAmzTargetInspectorServiceGetAssessmentReportHandler,
  xAmzTargetInspectorServiceGetExclusionsPreviewHandler,
  xAmzTargetInspectorServiceGetTelemetryMetadataHandler,
  xAmzTargetInspectorServiceListAssessmentRunAgentsHandler,
  xAmzTargetInspectorServiceListAssessmentRunsHandler,
  xAmzTargetInspectorServiceListAssessmentTargetsHandler,
  xAmzTargetInspectorServiceListAssessmentTemplatesHandler,
  xAmzTargetInspectorServiceListEventSubscriptionsHandler,
  xAmzTargetInspectorServiceListExclusionsHandler,
  xAmzTargetInspectorServiceListFindingsHandler,
  xAmzTargetInspectorServiceListRulesPackagesHandler,
  xAmzTargetInspectorServiceListTagsForResourceHandler,
  xAmzTargetInspectorServicePreviewAgentsHandler,
  xAmzTargetInspectorServiceRegisterCrossAccountAccessRoleHandler,
  xAmzTargetInspectorServiceRemoveAttributesFromFindingsHandler,
  xAmzTargetInspectorServiceSetTagsForResourceHandler,
  xAmzTargetInspectorServiceStartAssessmentRunHandler,
  xAmzTargetInspectorServiceStopAssessmentRunHandler,
  xAmzTargetInspectorServiceSubscribeToEventHandler,
  xAmzTargetInspectorServiceUnsubscribeFromEventHandler,
  xAmzTargetInspectorServiceUpdateAssessmentTargetHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetInspectorServiceAddAttributesToFindingsHandler)
  .route('/', xAmzTargetInspectorServiceCreateAssessmentTargetHandler)
  .route('/', xAmzTargetInspectorServiceCreateAssessmentTemplateHandler)
  .route('/', xAmzTargetInspectorServiceCreateExclusionsPreviewHandler)
  .route('/', xAmzTargetInspectorServiceCreateResourceGroupHandler)
  .route('/', xAmzTargetInspectorServiceDeleteAssessmentRunHandler)
  .route('/', xAmzTargetInspectorServiceDeleteAssessmentTargetHandler)
  .route('/', xAmzTargetInspectorServiceDeleteAssessmentTemplateHandler)
  .route('/', xAmzTargetInspectorServiceDescribeAssessmentRunsHandler)
  .route('/', xAmzTargetInspectorServiceDescribeAssessmentTargetsHandler)
  .route('/', xAmzTargetInspectorServiceDescribeAssessmentTemplatesHandler)
  .route('/', xAmzTargetInspectorServiceDescribeCrossAccountAccessRoleHandler)
  .route('/', xAmzTargetInspectorServiceDescribeExclusionsHandler)
  .route('/', xAmzTargetInspectorServiceDescribeFindingsHandler)
  .route('/', xAmzTargetInspectorServiceDescribeResourceGroupsHandler)
  .route('/', xAmzTargetInspectorServiceDescribeRulesPackagesHandler)
  .route('/', xAmzTargetInspectorServiceGetAssessmentReportHandler)
  .route('/', xAmzTargetInspectorServiceGetExclusionsPreviewHandler)
  .route('/', xAmzTargetInspectorServiceGetTelemetryMetadataHandler)
  .route('/', xAmzTargetInspectorServiceListAssessmentRunAgentsHandler)
  .route('/', xAmzTargetInspectorServiceListAssessmentRunsHandler)
  .route('/', xAmzTargetInspectorServiceListAssessmentTargetsHandler)
  .route('/', xAmzTargetInspectorServiceListAssessmentTemplatesHandler)
  .route('/', xAmzTargetInspectorServiceListEventSubscriptionsHandler)
  .route('/', xAmzTargetInspectorServiceListExclusionsHandler)
  .route('/', xAmzTargetInspectorServiceListFindingsHandler)
  .route('/', xAmzTargetInspectorServiceListRulesPackagesHandler)
  .route('/', xAmzTargetInspectorServiceListTagsForResourceHandler)
  .route('/', xAmzTargetInspectorServicePreviewAgentsHandler)
  .route('/', xAmzTargetInspectorServiceRegisterCrossAccountAccessRoleHandler)
  .route('/', xAmzTargetInspectorServiceRemoveAttributesFromFindingsHandler)
  .route('/', xAmzTargetInspectorServiceSetTagsForResourceHandler)
  .route('/', xAmzTargetInspectorServiceStartAssessmentRunHandler)
  .route('/', xAmzTargetInspectorServiceStopAssessmentRunHandler)
  .route('/', xAmzTargetInspectorServiceSubscribeToEventHandler)
  .route('/', xAmzTargetInspectorServiceUnsubscribeFromEventHandler)
  .route('/', xAmzTargetInspectorServiceUpdateAssessmentTargetHandler)

export default app
