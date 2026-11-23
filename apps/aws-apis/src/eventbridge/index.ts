import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAwsEventsActivateEventSourceHandler,
  xAmzTargetAwsEventsCancelReplayHandler,
  xAmzTargetAwsEventsCreateApiDestinationHandler,
  xAmzTargetAwsEventsCreateArchiveHandler,
  xAmzTargetAwsEventsCreateConnectionHandler,
  xAmzTargetAwsEventsCreateEndpointHandler,
  xAmzTargetAwsEventsCreateEventBusHandler,
  xAmzTargetAwsEventsCreatePartnerEventSourceHandler,
  xAmzTargetAwsEventsDeactivateEventSourceHandler,
  xAmzTargetAwsEventsDeauthorizeConnectionHandler,
  xAmzTargetAwsEventsDeleteApiDestinationHandler,
  xAmzTargetAwsEventsDeleteArchiveHandler,
  xAmzTargetAwsEventsDeleteConnectionHandler,
  xAmzTargetAwsEventsDeleteEndpointHandler,
  xAmzTargetAwsEventsDeleteEventBusHandler,
  xAmzTargetAwsEventsDeletePartnerEventSourceHandler,
  xAmzTargetAwsEventsDeleteRuleHandler,
  xAmzTargetAwsEventsDescribeApiDestinationHandler,
  xAmzTargetAwsEventsDescribeArchiveHandler,
  xAmzTargetAwsEventsDescribeConnectionHandler,
  xAmzTargetAwsEventsDescribeEndpointHandler,
  xAmzTargetAwsEventsDescribeEventBusHandler,
  xAmzTargetAwsEventsDescribeEventSourceHandler,
  xAmzTargetAwsEventsDescribePartnerEventSourceHandler,
  xAmzTargetAwsEventsDescribeReplayHandler,
  xAmzTargetAwsEventsDescribeRuleHandler,
  xAmzTargetAwsEventsDisableRuleHandler,
  xAmzTargetAwsEventsEnableRuleHandler,
  xAmzTargetAwsEventsListApiDestinationsHandler,
  xAmzTargetAwsEventsListArchivesHandler,
  xAmzTargetAwsEventsListConnectionsHandler,
  xAmzTargetAwsEventsListEndpointsHandler,
  xAmzTargetAwsEventsListEventBusesHandler,
  xAmzTargetAwsEventsListEventSourcesHandler,
  xAmzTargetAwsEventsListPartnerEventSourceAccountsHandler,
  xAmzTargetAwsEventsListPartnerEventSourcesHandler,
  xAmzTargetAwsEventsListReplaysHandler,
  xAmzTargetAwsEventsListRuleNamesByTargetHandler,
  xAmzTargetAwsEventsListRulesHandler,
  xAmzTargetAwsEventsListTagsForResourceHandler,
  xAmzTargetAwsEventsListTargetsByRuleHandler,
  xAmzTargetAwsEventsPutEventsHandler,
  xAmzTargetAwsEventsPutPartnerEventsHandler,
  xAmzTargetAwsEventsPutPermissionHandler,
  xAmzTargetAwsEventsPutRuleHandler,
  xAmzTargetAwsEventsPutTargetsHandler,
  xAmzTargetAwsEventsRemovePermissionHandler,
  xAmzTargetAwsEventsRemoveTargetsHandler,
  xAmzTargetAwsEventsStartReplayHandler,
  xAmzTargetAwsEventsTagResourceHandler,
  xAmzTargetAwsEventsTestEventPatternHandler,
  xAmzTargetAwsEventsUntagResourceHandler,
  xAmzTargetAwsEventsUpdateApiDestinationHandler,
  xAmzTargetAwsEventsUpdateArchiveHandler,
  xAmzTargetAwsEventsUpdateConnectionHandler,
  xAmzTargetAwsEventsUpdateEndpointHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAwsEventsActivateEventSourceHandler)
  .route('/', xAmzTargetAwsEventsCancelReplayHandler)
  .route('/', xAmzTargetAwsEventsCreateApiDestinationHandler)
  .route('/', xAmzTargetAwsEventsCreateArchiveHandler)
  .route('/', xAmzTargetAwsEventsCreateConnectionHandler)
  .route('/', xAmzTargetAwsEventsCreateEndpointHandler)
  .route('/', xAmzTargetAwsEventsCreateEventBusHandler)
  .route('/', xAmzTargetAwsEventsCreatePartnerEventSourceHandler)
  .route('/', xAmzTargetAwsEventsDeactivateEventSourceHandler)
  .route('/', xAmzTargetAwsEventsDeauthorizeConnectionHandler)
  .route('/', xAmzTargetAwsEventsDeleteApiDestinationHandler)
  .route('/', xAmzTargetAwsEventsDeleteArchiveHandler)
  .route('/', xAmzTargetAwsEventsDeleteConnectionHandler)
  .route('/', xAmzTargetAwsEventsDeleteEndpointHandler)
  .route('/', xAmzTargetAwsEventsDeleteEventBusHandler)
  .route('/', xAmzTargetAwsEventsDeletePartnerEventSourceHandler)
  .route('/', xAmzTargetAwsEventsDeleteRuleHandler)
  .route('/', xAmzTargetAwsEventsDescribeApiDestinationHandler)
  .route('/', xAmzTargetAwsEventsDescribeArchiveHandler)
  .route('/', xAmzTargetAwsEventsDescribeConnectionHandler)
  .route('/', xAmzTargetAwsEventsDescribeEndpointHandler)
  .route('/', xAmzTargetAwsEventsDescribeEventBusHandler)
  .route('/', xAmzTargetAwsEventsDescribeEventSourceHandler)
  .route('/', xAmzTargetAwsEventsDescribePartnerEventSourceHandler)
  .route('/', xAmzTargetAwsEventsDescribeReplayHandler)
  .route('/', xAmzTargetAwsEventsDescribeRuleHandler)
  .route('/', xAmzTargetAwsEventsDisableRuleHandler)
  .route('/', xAmzTargetAwsEventsEnableRuleHandler)
  .route('/', xAmzTargetAwsEventsListApiDestinationsHandler)
  .route('/', xAmzTargetAwsEventsListArchivesHandler)
  .route('/', xAmzTargetAwsEventsListConnectionsHandler)
  .route('/', xAmzTargetAwsEventsListEndpointsHandler)
  .route('/', xAmzTargetAwsEventsListEventBusesHandler)
  .route('/', xAmzTargetAwsEventsListEventSourcesHandler)
  .route('/', xAmzTargetAwsEventsListPartnerEventSourceAccountsHandler)
  .route('/', xAmzTargetAwsEventsListPartnerEventSourcesHandler)
  .route('/', xAmzTargetAwsEventsListReplaysHandler)
  .route('/', xAmzTargetAwsEventsListRuleNamesByTargetHandler)
  .route('/', xAmzTargetAwsEventsListRulesHandler)
  .route('/', xAmzTargetAwsEventsListTagsForResourceHandler)
  .route('/', xAmzTargetAwsEventsListTargetsByRuleHandler)
  .route('/', xAmzTargetAwsEventsPutEventsHandler)
  .route('/', xAmzTargetAwsEventsPutPartnerEventsHandler)
  .route('/', xAmzTargetAwsEventsPutPermissionHandler)
  .route('/', xAmzTargetAwsEventsPutRuleHandler)
  .route('/', xAmzTargetAwsEventsPutTargetsHandler)
  .route('/', xAmzTargetAwsEventsRemovePermissionHandler)
  .route('/', xAmzTargetAwsEventsRemoveTargetsHandler)
  .route('/', xAmzTargetAwsEventsStartReplayHandler)
  .route('/', xAmzTargetAwsEventsTagResourceHandler)
  .route('/', xAmzTargetAwsEventsTestEventPatternHandler)
  .route('/', xAmzTargetAwsEventsUntagResourceHandler)
  .route('/', xAmzTargetAwsEventsUpdateApiDestinationHandler)
  .route('/', xAmzTargetAwsEventsUpdateArchiveHandler)
  .route('/', xAmzTargetAwsEventsUpdateConnectionHandler)
  .route('/', xAmzTargetAwsEventsUpdateEndpointHandler)

export default app
