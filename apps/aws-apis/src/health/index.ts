import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetAWSHealth20160804DescribeAffectedAccountsForOrganizationHandler,
  XAmzTargetAWSHealth20160804DescribeAffectedEntitiesForOrganizationHandler,
  XAmzTargetAWSHealth20160804DescribeAffectedEntitiesHandler,
  XAmzTargetAWSHealth20160804DescribeEntityAggregatesHandler,
  XAmzTargetAWSHealth20160804DescribeEventAggregatesHandler,
  XAmzTargetAWSHealth20160804DescribeEventDetailsForOrganizationHandler,
  XAmzTargetAWSHealth20160804DescribeEventDetailsHandler,
  XAmzTargetAWSHealth20160804DescribeEventsForOrganizationHandler,
  XAmzTargetAWSHealth20160804DescribeEventsHandler,
  XAmzTargetAWSHealth20160804DescribeEventTypesHandler,
  XAmzTargetAWSHealth20160804DescribeHealthServiceStatusForOrganizationHandler,
  XAmzTargetAWSHealth20160804DisableHealthServiceAccessForOrganizationHandler,
  XAmzTargetAWSHealth20160804EnableHealthServiceAccessForOrganizationHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetAWSHealth20160804DescribeAffectedAccountsForOrganizationHandler)
  .route('/', XAmzTargetAWSHealth20160804DescribeAffectedEntitiesHandler)
  .route('/', XAmzTargetAWSHealth20160804DescribeAffectedEntitiesForOrganizationHandler)
  .route('/', XAmzTargetAWSHealth20160804DescribeEntityAggregatesHandler)
  .route('/', XAmzTargetAWSHealth20160804DescribeEventAggregatesHandler)
  .route('/', XAmzTargetAWSHealth20160804DescribeEventDetailsHandler)
  .route('/', XAmzTargetAWSHealth20160804DescribeEventDetailsForOrganizationHandler)
  .route('/', XAmzTargetAWSHealth20160804DescribeEventTypesHandler)
  .route('/', XAmzTargetAWSHealth20160804DescribeEventsHandler)
  .route('/', XAmzTargetAWSHealth20160804DescribeEventsForOrganizationHandler)
  .route('/', XAmzTargetAWSHealth20160804DescribeHealthServiceStatusForOrganizationHandler)
  .route('/', XAmzTargetAWSHealth20160804DisableHealthServiceAccessForOrganizationHandler)
  .route('/', XAmzTargetAWSHealth20160804EnableHealthServiceAccessForOrganizationHandler)

export default app
