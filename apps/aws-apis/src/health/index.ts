import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postXAmzTargetAWSHealth20160804DescribeAffectedAccountsForOrganizationRoute,
  postXAmzTargetAWSHealth20160804DescribeAffectedEntitiesForOrganizationRoute,
  postXAmzTargetAWSHealth20160804DescribeAffectedEntitiesRoute,
  postXAmzTargetAWSHealth20160804DescribeEntityAggregatesRoute,
  postXAmzTargetAWSHealth20160804DescribeEventAggregatesRoute,
  postXAmzTargetAWSHealth20160804DescribeEventDetailsForOrganizationRoute,
  postXAmzTargetAWSHealth20160804DescribeEventDetailsRoute,
  postXAmzTargetAWSHealth20160804DescribeEventsForOrganizationRoute,
  postXAmzTargetAWSHealth20160804DescribeEventsRoute,
  postXAmzTargetAWSHealth20160804DescribeEventTypesRoute,
  postXAmzTargetAWSHealth20160804DescribeHealthServiceStatusForOrganizationRoute,
  postXAmzTargetAWSHealth20160804DisableHealthServiceAccessForOrganizationRoute,
  postXAmzTargetAWSHealth20160804EnableHealthServiceAccessForOrganizationRoute,
} from './routes'
import {
  postXAmzTargetAWSHealth20160804DescribeAffectedAccountsForOrganizationRouteHandler,
  postXAmzTargetAWSHealth20160804DescribeAffectedEntitiesForOrganizationRouteHandler,
  postXAmzTargetAWSHealth20160804DescribeAffectedEntitiesRouteHandler,
  postXAmzTargetAWSHealth20160804DescribeEntityAggregatesRouteHandler,
  postXAmzTargetAWSHealth20160804DescribeEventAggregatesRouteHandler,
  postXAmzTargetAWSHealth20160804DescribeEventDetailsForOrganizationRouteHandler,
  postXAmzTargetAWSHealth20160804DescribeEventDetailsRouteHandler,
  postXAmzTargetAWSHealth20160804DescribeEventsForOrganizationRouteHandler,
  postXAmzTargetAWSHealth20160804DescribeEventsRouteHandler,
  postXAmzTargetAWSHealth20160804DescribeEventTypesRouteHandler,
  postXAmzTargetAWSHealth20160804DescribeHealthServiceStatusForOrganizationRouteHandler,
  postXAmzTargetAWSHealth20160804DisableHealthServiceAccessForOrganizationRouteHandler,
  postXAmzTargetAWSHealth20160804EnableHealthServiceAccessForOrganizationRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postXAmzTargetAWSHealth20160804DescribeAffectedAccountsForOrganizationRoute,
    postXAmzTargetAWSHealth20160804DescribeAffectedAccountsForOrganizationRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSHealth20160804DescribeAffectedEntitiesRoute,
    postXAmzTargetAWSHealth20160804DescribeAffectedEntitiesRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSHealth20160804DescribeAffectedEntitiesForOrganizationRoute,
    postXAmzTargetAWSHealth20160804DescribeAffectedEntitiesForOrganizationRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSHealth20160804DescribeEntityAggregatesRoute,
    postXAmzTargetAWSHealth20160804DescribeEntityAggregatesRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSHealth20160804DescribeEventAggregatesRoute,
    postXAmzTargetAWSHealth20160804DescribeEventAggregatesRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSHealth20160804DescribeEventDetailsRoute,
    postXAmzTargetAWSHealth20160804DescribeEventDetailsRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSHealth20160804DescribeEventDetailsForOrganizationRoute,
    postXAmzTargetAWSHealth20160804DescribeEventDetailsForOrganizationRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSHealth20160804DescribeEventTypesRoute,
    postXAmzTargetAWSHealth20160804DescribeEventTypesRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSHealth20160804DescribeEventsRoute,
    postXAmzTargetAWSHealth20160804DescribeEventsRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSHealth20160804DescribeEventsForOrganizationRoute,
    postXAmzTargetAWSHealth20160804DescribeEventsForOrganizationRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSHealth20160804DescribeHealthServiceStatusForOrganizationRoute,
    postXAmzTargetAWSHealth20160804DescribeHealthServiceStatusForOrganizationRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSHealth20160804DisableHealthServiceAccessForOrganizationRoute,
    postXAmzTargetAWSHealth20160804DisableHealthServiceAccessForOrganizationRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSHealth20160804EnableHealthServiceAccessForOrganizationRoute,
    postXAmzTargetAWSHealth20160804EnableHealthServiceAccessForOrganizationRouteHandler,
  )

export default app
