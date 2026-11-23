import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAwsHealth20160804DescribeAffectedAccountsForOrganizationHandler,
  xAmzTargetAwsHealth20160804DescribeAffectedEntitiesForOrganizationHandler,
  xAmzTargetAwsHealth20160804DescribeAffectedEntitiesHandler,
  xAmzTargetAwsHealth20160804DescribeEntityAggregatesHandler,
  xAmzTargetAwsHealth20160804DescribeEventAggregatesHandler,
  xAmzTargetAwsHealth20160804DescribeEventDetailsForOrganizationHandler,
  xAmzTargetAwsHealth20160804DescribeEventDetailsHandler,
  xAmzTargetAwsHealth20160804DescribeEventsForOrganizationHandler,
  xAmzTargetAwsHealth20160804DescribeEventsHandler,
  xAmzTargetAwsHealth20160804DescribeEventTypesHandler,
  xAmzTargetAwsHealth20160804DescribeHealthServiceStatusForOrganizationHandler,
  xAmzTargetAwsHealth20160804DisableHealthServiceAccessForOrganizationHandler,
  xAmzTargetAwsHealth20160804EnableHealthServiceAccessForOrganizationHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAwsHealth20160804DescribeAffectedAccountsForOrganizationHandler)
  .route('/', xAmzTargetAwsHealth20160804DescribeAffectedEntitiesHandler)
  .route('/', xAmzTargetAwsHealth20160804DescribeAffectedEntitiesForOrganizationHandler)
  .route('/', xAmzTargetAwsHealth20160804DescribeEntityAggregatesHandler)
  .route('/', xAmzTargetAwsHealth20160804DescribeEventAggregatesHandler)
  .route('/', xAmzTargetAwsHealth20160804DescribeEventDetailsHandler)
  .route('/', xAmzTargetAwsHealth20160804DescribeEventDetailsForOrganizationHandler)
  .route('/', xAmzTargetAwsHealth20160804DescribeEventTypesHandler)
  .route('/', xAmzTargetAwsHealth20160804DescribeEventsHandler)
  .route('/', xAmzTargetAwsHealth20160804DescribeEventsForOrganizationHandler)
  .route('/', xAmzTargetAwsHealth20160804DescribeHealthServiceStatusForOrganizationHandler)
  .route('/', xAmzTargetAwsHealth20160804DisableHealthServiceAccessForOrganizationHandler)
  .route('/', xAmzTargetAwsHealth20160804EnableHealthServiceAccessForOrganizationHandler)

export default app
