import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetAWSEventsActivateEventSourceHandler,
  XAmzTargetAWSEventsCancelReplayHandler,
  XAmzTargetAWSEventsCreateApiDestinationHandler,
  XAmzTargetAWSEventsCreateArchiveHandler,
  XAmzTargetAWSEventsCreateConnectionHandler,
  XAmzTargetAWSEventsCreateEndpointHandler,
  XAmzTargetAWSEventsCreateEventBusHandler,
  XAmzTargetAWSEventsCreatePartnerEventSourceHandler,
  XAmzTargetAWSEventsDeactivateEventSourceHandler,
  XAmzTargetAWSEventsDeauthorizeConnectionHandler,
  XAmzTargetAWSEventsDeleteApiDestinationHandler,
  XAmzTargetAWSEventsDeleteArchiveHandler,
  XAmzTargetAWSEventsDeleteConnectionHandler,
  XAmzTargetAWSEventsDeleteEndpointHandler,
  XAmzTargetAWSEventsDeleteEventBusHandler,
  XAmzTargetAWSEventsDeletePartnerEventSourceHandler,
  XAmzTargetAWSEventsDeleteRuleHandler,
  XAmzTargetAWSEventsDescribeApiDestinationHandler,
  XAmzTargetAWSEventsDescribeArchiveHandler,
  XAmzTargetAWSEventsDescribeConnectionHandler,
  XAmzTargetAWSEventsDescribeEndpointHandler,
  XAmzTargetAWSEventsDescribeEventBusHandler,
  XAmzTargetAWSEventsDescribeEventSourceHandler,
  XAmzTargetAWSEventsDescribePartnerEventSourceHandler,
  XAmzTargetAWSEventsDescribeReplayHandler,
  XAmzTargetAWSEventsDescribeRuleHandler,
  XAmzTargetAWSEventsDisableRuleHandler,
  XAmzTargetAWSEventsEnableRuleHandler,
  XAmzTargetAWSEventsListApiDestinationsHandler,
  XAmzTargetAWSEventsListArchivesHandler,
  XAmzTargetAWSEventsListConnectionsHandler,
  XAmzTargetAWSEventsListEndpointsHandler,
  XAmzTargetAWSEventsListEventBusesHandler,
  XAmzTargetAWSEventsListEventSourcesHandler,
  XAmzTargetAWSEventsListPartnerEventSourceAccountsHandler,
  XAmzTargetAWSEventsListPartnerEventSourcesHandler,
  XAmzTargetAWSEventsListReplaysHandler,
  XAmzTargetAWSEventsListRuleNamesByTargetHandler,
  XAmzTargetAWSEventsListRulesHandler,
  XAmzTargetAWSEventsListTagsForResourceHandler,
  XAmzTargetAWSEventsListTargetsByRuleHandler,
  XAmzTargetAWSEventsPutEventsHandler,
  XAmzTargetAWSEventsPutPartnerEventsHandler,
  XAmzTargetAWSEventsPutPermissionHandler,
  XAmzTargetAWSEventsPutRuleHandler,
  XAmzTargetAWSEventsPutTargetsHandler,
  XAmzTargetAWSEventsRemovePermissionHandler,
  XAmzTargetAWSEventsRemoveTargetsHandler,
  XAmzTargetAWSEventsStartReplayHandler,
  XAmzTargetAWSEventsTagResourceHandler,
  XAmzTargetAWSEventsTestEventPatternHandler,
  XAmzTargetAWSEventsUntagResourceHandler,
  XAmzTargetAWSEventsUpdateApiDestinationHandler,
  XAmzTargetAWSEventsUpdateArchiveHandler,
  XAmzTargetAWSEventsUpdateConnectionHandler,
  XAmzTargetAWSEventsUpdateEndpointHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetAWSEventsActivateEventSourceHandler)
  .route('/', XAmzTargetAWSEventsCancelReplayHandler)
  .route('/', XAmzTargetAWSEventsCreateApiDestinationHandler)
  .route('/', XAmzTargetAWSEventsCreateArchiveHandler)
  .route('/', XAmzTargetAWSEventsCreateConnectionHandler)
  .route('/', XAmzTargetAWSEventsCreateEndpointHandler)
  .route('/', XAmzTargetAWSEventsCreateEventBusHandler)
  .route('/', XAmzTargetAWSEventsCreatePartnerEventSourceHandler)
  .route('/', XAmzTargetAWSEventsDeactivateEventSourceHandler)
  .route('/', XAmzTargetAWSEventsDeauthorizeConnectionHandler)
  .route('/', XAmzTargetAWSEventsDeleteApiDestinationHandler)
  .route('/', XAmzTargetAWSEventsDeleteArchiveHandler)
  .route('/', XAmzTargetAWSEventsDeleteConnectionHandler)
  .route('/', XAmzTargetAWSEventsDeleteEndpointHandler)
  .route('/', XAmzTargetAWSEventsDeleteEventBusHandler)
  .route('/', XAmzTargetAWSEventsDeletePartnerEventSourceHandler)
  .route('/', XAmzTargetAWSEventsDeleteRuleHandler)
  .route('/', XAmzTargetAWSEventsDescribeApiDestinationHandler)
  .route('/', XAmzTargetAWSEventsDescribeArchiveHandler)
  .route('/', XAmzTargetAWSEventsDescribeConnectionHandler)
  .route('/', XAmzTargetAWSEventsDescribeEndpointHandler)
  .route('/', XAmzTargetAWSEventsDescribeEventBusHandler)
  .route('/', XAmzTargetAWSEventsDescribeEventSourceHandler)
  .route('/', XAmzTargetAWSEventsDescribePartnerEventSourceHandler)
  .route('/', XAmzTargetAWSEventsDescribeReplayHandler)
  .route('/', XAmzTargetAWSEventsDescribeRuleHandler)
  .route('/', XAmzTargetAWSEventsDisableRuleHandler)
  .route('/', XAmzTargetAWSEventsEnableRuleHandler)
  .route('/', XAmzTargetAWSEventsListApiDestinationsHandler)
  .route('/', XAmzTargetAWSEventsListArchivesHandler)
  .route('/', XAmzTargetAWSEventsListConnectionsHandler)
  .route('/', XAmzTargetAWSEventsListEndpointsHandler)
  .route('/', XAmzTargetAWSEventsListEventBusesHandler)
  .route('/', XAmzTargetAWSEventsListEventSourcesHandler)
  .route('/', XAmzTargetAWSEventsListPartnerEventSourceAccountsHandler)
  .route('/', XAmzTargetAWSEventsListPartnerEventSourcesHandler)
  .route('/', XAmzTargetAWSEventsListReplaysHandler)
  .route('/', XAmzTargetAWSEventsListRuleNamesByTargetHandler)
  .route('/', XAmzTargetAWSEventsListRulesHandler)
  .route('/', XAmzTargetAWSEventsListTagsForResourceHandler)
  .route('/', XAmzTargetAWSEventsListTargetsByRuleHandler)
  .route('/', XAmzTargetAWSEventsPutEventsHandler)
  .route('/', XAmzTargetAWSEventsPutPartnerEventsHandler)
  .route('/', XAmzTargetAWSEventsPutPermissionHandler)
  .route('/', XAmzTargetAWSEventsPutRuleHandler)
  .route('/', XAmzTargetAWSEventsPutTargetsHandler)
  .route('/', XAmzTargetAWSEventsRemovePermissionHandler)
  .route('/', XAmzTargetAWSEventsRemoveTargetsHandler)
  .route('/', XAmzTargetAWSEventsStartReplayHandler)
  .route('/', XAmzTargetAWSEventsTagResourceHandler)
  .route('/', XAmzTargetAWSEventsTestEventPatternHandler)
  .route('/', XAmzTargetAWSEventsUntagResourceHandler)
  .route('/', XAmzTargetAWSEventsUpdateApiDestinationHandler)
  .route('/', XAmzTargetAWSEventsUpdateArchiveHandler)
  .route('/', XAmzTargetAWSEventsUpdateConnectionHandler)
  .route('/', XAmzTargetAWSEventsUpdateEndpointHandler)

export default app
