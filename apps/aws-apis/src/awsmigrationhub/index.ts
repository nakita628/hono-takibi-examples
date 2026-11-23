import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postXAmzTargetAWSMigrationHubAssociateCreatedArtifactRoute,
  postXAmzTargetAWSMigrationHubAssociateDiscoveredResourceRoute,
  postXAmzTargetAWSMigrationHubCreateProgressUpdateStreamRoute,
  postXAmzTargetAWSMigrationHubDeleteProgressUpdateStreamRoute,
  postXAmzTargetAWSMigrationHubDescribeApplicationStateRoute,
  postXAmzTargetAWSMigrationHubDescribeMigrationTaskRoute,
  postXAmzTargetAWSMigrationHubDisassociateCreatedArtifactRoute,
  postXAmzTargetAWSMigrationHubDisassociateDiscoveredResourceRoute,
  postXAmzTargetAWSMigrationHubImportMigrationTaskRoute,
  postXAmzTargetAWSMigrationHubListApplicationStatesRoute,
  postXAmzTargetAWSMigrationHubListCreatedArtifactsRoute,
  postXAmzTargetAWSMigrationHubListDiscoveredResourcesRoute,
  postXAmzTargetAWSMigrationHubListMigrationTasksRoute,
  postXAmzTargetAWSMigrationHubListProgressUpdateStreamsRoute,
  postXAmzTargetAWSMigrationHubNotifyApplicationStateRoute,
  postXAmzTargetAWSMigrationHubNotifyMigrationTaskStateRoute,
  postXAmzTargetAWSMigrationHubPutResourceAttributesRoute,
} from './routes'
import {
  postXAmzTargetAWSMigrationHubAssociateCreatedArtifactRouteHandler,
  postXAmzTargetAWSMigrationHubAssociateDiscoveredResourceRouteHandler,
  postXAmzTargetAWSMigrationHubCreateProgressUpdateStreamRouteHandler,
  postXAmzTargetAWSMigrationHubDeleteProgressUpdateStreamRouteHandler,
  postXAmzTargetAWSMigrationHubDescribeApplicationStateRouteHandler,
  postXAmzTargetAWSMigrationHubDescribeMigrationTaskRouteHandler,
  postXAmzTargetAWSMigrationHubDisassociateCreatedArtifactRouteHandler,
  postXAmzTargetAWSMigrationHubDisassociateDiscoveredResourceRouteHandler,
  postXAmzTargetAWSMigrationHubImportMigrationTaskRouteHandler,
  postXAmzTargetAWSMigrationHubListApplicationStatesRouteHandler,
  postXAmzTargetAWSMigrationHubListCreatedArtifactsRouteHandler,
  postXAmzTargetAWSMigrationHubListDiscoveredResourcesRouteHandler,
  postXAmzTargetAWSMigrationHubListMigrationTasksRouteHandler,
  postXAmzTargetAWSMigrationHubListProgressUpdateStreamsRouteHandler,
  postXAmzTargetAWSMigrationHubNotifyApplicationStateRouteHandler,
  postXAmzTargetAWSMigrationHubNotifyMigrationTaskStateRouteHandler,
  postXAmzTargetAWSMigrationHubPutResourceAttributesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postXAmzTargetAWSMigrationHubAssociateCreatedArtifactRoute,
    postXAmzTargetAWSMigrationHubAssociateCreatedArtifactRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSMigrationHubAssociateDiscoveredResourceRoute,
    postXAmzTargetAWSMigrationHubAssociateDiscoveredResourceRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSMigrationHubCreateProgressUpdateStreamRoute,
    postXAmzTargetAWSMigrationHubCreateProgressUpdateStreamRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSMigrationHubDeleteProgressUpdateStreamRoute,
    postXAmzTargetAWSMigrationHubDeleteProgressUpdateStreamRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSMigrationHubDescribeApplicationStateRoute,
    postXAmzTargetAWSMigrationHubDescribeApplicationStateRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSMigrationHubDescribeMigrationTaskRoute,
    postXAmzTargetAWSMigrationHubDescribeMigrationTaskRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSMigrationHubDisassociateCreatedArtifactRoute,
    postXAmzTargetAWSMigrationHubDisassociateCreatedArtifactRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSMigrationHubDisassociateDiscoveredResourceRoute,
    postXAmzTargetAWSMigrationHubDisassociateDiscoveredResourceRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSMigrationHubImportMigrationTaskRoute,
    postXAmzTargetAWSMigrationHubImportMigrationTaskRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSMigrationHubListApplicationStatesRoute,
    postXAmzTargetAWSMigrationHubListApplicationStatesRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSMigrationHubListCreatedArtifactsRoute,
    postXAmzTargetAWSMigrationHubListCreatedArtifactsRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSMigrationHubListDiscoveredResourcesRoute,
    postXAmzTargetAWSMigrationHubListDiscoveredResourcesRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSMigrationHubListMigrationTasksRoute,
    postXAmzTargetAWSMigrationHubListMigrationTasksRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSMigrationHubListProgressUpdateStreamsRoute,
    postXAmzTargetAWSMigrationHubListProgressUpdateStreamsRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSMigrationHubNotifyApplicationStateRoute,
    postXAmzTargetAWSMigrationHubNotifyApplicationStateRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSMigrationHubNotifyMigrationTaskStateRoute,
    postXAmzTargetAWSMigrationHubNotifyMigrationTaskStateRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSMigrationHubPutResourceAttributesRoute,
    postXAmzTargetAWSMigrationHubPutResourceAttributesRouteHandler,
  )

export default app
