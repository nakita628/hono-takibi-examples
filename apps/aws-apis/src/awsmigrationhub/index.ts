import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAwsMigrationHubAssociateCreatedArtifactHandler,
  xAmzTargetAwsMigrationHubAssociateDiscoveredResourceHandler,
  xAmzTargetAwsMigrationHubCreateProgressUpdateStreamHandler,
  xAmzTargetAwsMigrationHubDeleteProgressUpdateStreamHandler,
  xAmzTargetAwsMigrationHubDescribeApplicationStateHandler,
  xAmzTargetAwsMigrationHubDescribeMigrationTaskHandler,
  xAmzTargetAwsMigrationHubDisassociateCreatedArtifactHandler,
  xAmzTargetAwsMigrationHubDisassociateDiscoveredResourceHandler,
  xAmzTargetAwsMigrationHubImportMigrationTaskHandler,
  xAmzTargetAwsMigrationHubListApplicationStatesHandler,
  xAmzTargetAwsMigrationHubListCreatedArtifactsHandler,
  xAmzTargetAwsMigrationHubListDiscoveredResourcesHandler,
  xAmzTargetAwsMigrationHubListMigrationTasksHandler,
  xAmzTargetAwsMigrationHubListProgressUpdateStreamsHandler,
  xAmzTargetAwsMigrationHubNotifyApplicationStateHandler,
  xAmzTargetAwsMigrationHubNotifyMigrationTaskStateHandler,
  xAmzTargetAwsMigrationHubPutResourceAttributesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAwsMigrationHubAssociateCreatedArtifactHandler)
  .route('/', xAmzTargetAwsMigrationHubAssociateDiscoveredResourceHandler)
  .route('/', xAmzTargetAwsMigrationHubCreateProgressUpdateStreamHandler)
  .route('/', xAmzTargetAwsMigrationHubDeleteProgressUpdateStreamHandler)
  .route('/', xAmzTargetAwsMigrationHubDescribeApplicationStateHandler)
  .route('/', xAmzTargetAwsMigrationHubDescribeMigrationTaskHandler)
  .route('/', xAmzTargetAwsMigrationHubDisassociateCreatedArtifactHandler)
  .route('/', xAmzTargetAwsMigrationHubDisassociateDiscoveredResourceHandler)
  .route('/', xAmzTargetAwsMigrationHubImportMigrationTaskHandler)
  .route('/', xAmzTargetAwsMigrationHubListApplicationStatesHandler)
  .route('/', xAmzTargetAwsMigrationHubListCreatedArtifactsHandler)
  .route('/', xAmzTargetAwsMigrationHubListDiscoveredResourcesHandler)
  .route('/', xAmzTargetAwsMigrationHubListMigrationTasksHandler)
  .route('/', xAmzTargetAwsMigrationHubListProgressUpdateStreamsHandler)
  .route('/', xAmzTargetAwsMigrationHubNotifyApplicationStateHandler)
  .route('/', xAmzTargetAwsMigrationHubNotifyMigrationTaskStateHandler)
  .route('/', xAmzTargetAwsMigrationHubPutResourceAttributesHandler)

export default app
