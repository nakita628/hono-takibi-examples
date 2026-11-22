import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetAWSMigrationHubAssociateCreatedArtifactHandler,
  XAmzTargetAWSMigrationHubAssociateDiscoveredResourceHandler,
  XAmzTargetAWSMigrationHubCreateProgressUpdateStreamHandler,
  XAmzTargetAWSMigrationHubDeleteProgressUpdateStreamHandler,
  XAmzTargetAWSMigrationHubDescribeApplicationStateHandler,
  XAmzTargetAWSMigrationHubDescribeMigrationTaskHandler,
  XAmzTargetAWSMigrationHubDisassociateCreatedArtifactHandler,
  XAmzTargetAWSMigrationHubDisassociateDiscoveredResourceHandler,
  XAmzTargetAWSMigrationHubImportMigrationTaskHandler,
  XAmzTargetAWSMigrationHubListApplicationStatesHandler,
  XAmzTargetAWSMigrationHubListCreatedArtifactsHandler,
  XAmzTargetAWSMigrationHubListDiscoveredResourcesHandler,
  XAmzTargetAWSMigrationHubListMigrationTasksHandler,
  XAmzTargetAWSMigrationHubListProgressUpdateStreamsHandler,
  XAmzTargetAWSMigrationHubNotifyApplicationStateHandler,
  XAmzTargetAWSMigrationHubNotifyMigrationTaskStateHandler,
  XAmzTargetAWSMigrationHubPutResourceAttributesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetAWSMigrationHubAssociateCreatedArtifactHandler)
  .route('/', XAmzTargetAWSMigrationHubAssociateDiscoveredResourceHandler)
  .route('/', XAmzTargetAWSMigrationHubCreateProgressUpdateStreamHandler)
  .route('/', XAmzTargetAWSMigrationHubDeleteProgressUpdateStreamHandler)
  .route('/', XAmzTargetAWSMigrationHubDescribeApplicationStateHandler)
  .route('/', XAmzTargetAWSMigrationHubDescribeMigrationTaskHandler)
  .route('/', XAmzTargetAWSMigrationHubDisassociateCreatedArtifactHandler)
  .route('/', XAmzTargetAWSMigrationHubDisassociateDiscoveredResourceHandler)
  .route('/', XAmzTargetAWSMigrationHubImportMigrationTaskHandler)
  .route('/', XAmzTargetAWSMigrationHubListApplicationStatesHandler)
  .route('/', XAmzTargetAWSMigrationHubListCreatedArtifactsHandler)
  .route('/', XAmzTargetAWSMigrationHubListDiscoveredResourcesHandler)
  .route('/', XAmzTargetAWSMigrationHubListMigrationTasksHandler)
  .route('/', XAmzTargetAWSMigrationHubListProgressUpdateStreamsHandler)
  .route('/', XAmzTargetAWSMigrationHubNotifyApplicationStateHandler)
  .route('/', XAmzTargetAWSMigrationHubNotifyMigrationTaskStateHandler)
  .route('/', XAmzTargetAWSMigrationHubPutResourceAttributesHandler)

export default app
