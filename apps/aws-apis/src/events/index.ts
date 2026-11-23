import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAwsEventsActivateEventSourceHandler,
  xAmzTargetAwsEventsCancelReplayHandler,
  xAmzTargetAwsEventsCreateApiDestinationHandler,
  xAmzTargetAwsEventsCreateArchiveHandler,
  xAmzTargetAwsEventsCreateConnectionHandler,
  xAmzTargetAwsEventsCreateEventBusHandler,
  xAmzTargetAwsEventsCreatePartnerEventSourceHandler,
  xAmzTargetAwsEventsDeactivateEventSourceHandler,
  xAmzTargetAwsEventsDeauthorizeConnectionHandler,
  xAmzTargetAwsEventsDeleteApiDestinationHandler,
  xAmzTargetAwsEventsDeleteArchiveHandler,
  xAmzTargetAwsEventsDeleteConnectionHandler,
  xAmzTargetAwsEventsDeleteEventBusHandler,
  xAmzTargetAwsEventsDeletePartnerEventSourceHandler,
  xAmzTargetAwsEventsDeleteRuleHandler,
  xAmzTargetAwsEventsDescribeApiDestinationHandler,
  xAmzTargetAwsEventsDescribeArchiveHandler,
  xAmzTargetAwsEventsDescribeConnectionHandler,
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
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAwsEventsActivateEventSourceHandler)
  .route('/', xAmzTargetAwsEventsCancelReplayHandler)
  .route('/', xAmzTargetAwsEventsCreateApiDestinationHandler)
  .route('/', xAmzTargetAwsEventsCreateArchiveHandler)
  .route('/', xAmzTargetAwsEventsCreateConnectionHandler)
  .route('/', xAmzTargetAwsEventsCreateEventBusHandler)
  .route('/', xAmzTargetAwsEventsCreatePartnerEventSourceHandler)
  .route('/', xAmzTargetAwsEventsDeactivateEventSourceHandler)
  .route('/', xAmzTargetAwsEventsDeauthorizeConnectionHandler)
  .route('/', xAmzTargetAwsEventsDeleteApiDestinationHandler)
  .route('/', xAmzTargetAwsEventsDeleteArchiveHandler)
  .route('/', xAmzTargetAwsEventsDeleteConnectionHandler)
  .route('/', xAmzTargetAwsEventsDeleteEventBusHandler)
  .route('/', xAmzTargetAwsEventsDeletePartnerEventSourceHandler)
  .route('/', xAmzTargetAwsEventsDeleteRuleHandler)
  .route('/', xAmzTargetAwsEventsDescribeApiDestinationHandler)
  .route('/', xAmzTargetAwsEventsDescribeArchiveHandler)
  .route('/', xAmzTargetAwsEventsDescribeConnectionHandler)
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

export default app
