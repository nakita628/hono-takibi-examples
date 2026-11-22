import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetCodeDeploy20141006AddTagsToOnPremisesInstancesHandler,
  XAmzTargetCodeDeploy20141006BatchGetApplicationRevisionsHandler,
  XAmzTargetCodeDeploy20141006BatchGetApplicationsHandler,
  XAmzTargetCodeDeploy20141006BatchGetDeploymentGroupsHandler,
  XAmzTargetCodeDeploy20141006BatchGetDeploymentInstancesHandler,
  XAmzTargetCodeDeploy20141006BatchGetDeploymentsHandler,
  XAmzTargetCodeDeploy20141006BatchGetDeploymentTargetsHandler,
  XAmzTargetCodeDeploy20141006BatchGetOnPremisesInstancesHandler,
  XAmzTargetCodeDeploy20141006ContinueDeploymentHandler,
  XAmzTargetCodeDeploy20141006CreateApplicationHandler,
  XAmzTargetCodeDeploy20141006CreateDeploymentConfigHandler,
  XAmzTargetCodeDeploy20141006CreateDeploymentGroupHandler,
  XAmzTargetCodeDeploy20141006CreateDeploymentHandler,
  XAmzTargetCodeDeploy20141006DeleteApplicationHandler,
  XAmzTargetCodeDeploy20141006DeleteDeploymentConfigHandler,
  XAmzTargetCodeDeploy20141006DeleteDeploymentGroupHandler,
  XAmzTargetCodeDeploy20141006DeleteGitHubAccountTokenHandler,
  XAmzTargetCodeDeploy20141006DeleteResourcesByExternalIdHandler,
  XAmzTargetCodeDeploy20141006DeregisterOnPremisesInstanceHandler,
  XAmzTargetCodeDeploy20141006GetApplicationHandler,
  XAmzTargetCodeDeploy20141006GetApplicationRevisionHandler,
  XAmzTargetCodeDeploy20141006GetDeploymentConfigHandler,
  XAmzTargetCodeDeploy20141006GetDeploymentGroupHandler,
  XAmzTargetCodeDeploy20141006GetDeploymentHandler,
  XAmzTargetCodeDeploy20141006GetDeploymentInstanceHandler,
  XAmzTargetCodeDeploy20141006GetDeploymentTargetHandler,
  XAmzTargetCodeDeploy20141006GetOnPremisesInstanceHandler,
  XAmzTargetCodeDeploy20141006ListApplicationRevisionsHandler,
  XAmzTargetCodeDeploy20141006ListApplicationsHandler,
  XAmzTargetCodeDeploy20141006ListDeploymentConfigsHandler,
  XAmzTargetCodeDeploy20141006ListDeploymentGroupsHandler,
  XAmzTargetCodeDeploy20141006ListDeploymentInstancesHandler,
  XAmzTargetCodeDeploy20141006ListDeploymentsHandler,
  XAmzTargetCodeDeploy20141006ListDeploymentTargetsHandler,
  XAmzTargetCodeDeploy20141006ListGitHubAccountTokenNamesHandler,
  XAmzTargetCodeDeploy20141006ListOnPremisesInstancesHandler,
  XAmzTargetCodeDeploy20141006ListTagsForResourceHandler,
  XAmzTargetCodeDeploy20141006PutLifecycleEventHookExecutionStatusHandler,
  XAmzTargetCodeDeploy20141006RegisterApplicationRevisionHandler,
  XAmzTargetCodeDeploy20141006RegisterOnPremisesInstanceHandler,
  XAmzTargetCodeDeploy20141006RemoveTagsFromOnPremisesInstancesHandler,
  XAmzTargetCodeDeploy20141006SkipWaitTimeForInstanceTerminationHandler,
  XAmzTargetCodeDeploy20141006StopDeploymentHandler,
  XAmzTargetCodeDeploy20141006TagResourceHandler,
  XAmzTargetCodeDeploy20141006UntagResourceHandler,
  XAmzTargetCodeDeploy20141006UpdateApplicationHandler,
  XAmzTargetCodeDeploy20141006UpdateDeploymentGroupHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetCodeDeploy20141006AddTagsToOnPremisesInstancesHandler)
  .route('/', XAmzTargetCodeDeploy20141006BatchGetApplicationRevisionsHandler)
  .route('/', XAmzTargetCodeDeploy20141006BatchGetApplicationsHandler)
  .route('/', XAmzTargetCodeDeploy20141006BatchGetDeploymentGroupsHandler)
  .route('/', XAmzTargetCodeDeploy20141006BatchGetDeploymentInstancesHandler)
  .route('/', XAmzTargetCodeDeploy20141006BatchGetDeploymentTargetsHandler)
  .route('/', XAmzTargetCodeDeploy20141006BatchGetDeploymentsHandler)
  .route('/', XAmzTargetCodeDeploy20141006BatchGetOnPremisesInstancesHandler)
  .route('/', XAmzTargetCodeDeploy20141006ContinueDeploymentHandler)
  .route('/', XAmzTargetCodeDeploy20141006CreateApplicationHandler)
  .route('/', XAmzTargetCodeDeploy20141006CreateDeploymentHandler)
  .route('/', XAmzTargetCodeDeploy20141006CreateDeploymentConfigHandler)
  .route('/', XAmzTargetCodeDeploy20141006CreateDeploymentGroupHandler)
  .route('/', XAmzTargetCodeDeploy20141006DeleteApplicationHandler)
  .route('/', XAmzTargetCodeDeploy20141006DeleteDeploymentConfigHandler)
  .route('/', XAmzTargetCodeDeploy20141006DeleteDeploymentGroupHandler)
  .route('/', XAmzTargetCodeDeploy20141006DeleteGitHubAccountTokenHandler)
  .route('/', XAmzTargetCodeDeploy20141006DeleteResourcesByExternalIdHandler)
  .route('/', XAmzTargetCodeDeploy20141006DeregisterOnPremisesInstanceHandler)
  .route('/', XAmzTargetCodeDeploy20141006GetApplicationHandler)
  .route('/', XAmzTargetCodeDeploy20141006GetApplicationRevisionHandler)
  .route('/', XAmzTargetCodeDeploy20141006GetDeploymentHandler)
  .route('/', XAmzTargetCodeDeploy20141006GetDeploymentConfigHandler)
  .route('/', XAmzTargetCodeDeploy20141006GetDeploymentGroupHandler)
  .route('/', XAmzTargetCodeDeploy20141006GetDeploymentInstanceHandler)
  .route('/', XAmzTargetCodeDeploy20141006GetDeploymentTargetHandler)
  .route('/', XAmzTargetCodeDeploy20141006GetOnPremisesInstanceHandler)
  .route('/', XAmzTargetCodeDeploy20141006ListApplicationRevisionsHandler)
  .route('/', XAmzTargetCodeDeploy20141006ListApplicationsHandler)
  .route('/', XAmzTargetCodeDeploy20141006ListDeploymentConfigsHandler)
  .route('/', XAmzTargetCodeDeploy20141006ListDeploymentGroupsHandler)
  .route('/', XAmzTargetCodeDeploy20141006ListDeploymentInstancesHandler)
  .route('/', XAmzTargetCodeDeploy20141006ListDeploymentTargetsHandler)
  .route('/', XAmzTargetCodeDeploy20141006ListDeploymentsHandler)
  .route('/', XAmzTargetCodeDeploy20141006ListGitHubAccountTokenNamesHandler)
  .route('/', XAmzTargetCodeDeploy20141006ListOnPremisesInstancesHandler)
  .route('/', XAmzTargetCodeDeploy20141006ListTagsForResourceHandler)
  .route('/', XAmzTargetCodeDeploy20141006PutLifecycleEventHookExecutionStatusHandler)
  .route('/', XAmzTargetCodeDeploy20141006RegisterApplicationRevisionHandler)
  .route('/', XAmzTargetCodeDeploy20141006RegisterOnPremisesInstanceHandler)
  .route('/', XAmzTargetCodeDeploy20141006RemoveTagsFromOnPremisesInstancesHandler)
  .route('/', XAmzTargetCodeDeploy20141006SkipWaitTimeForInstanceTerminationHandler)
  .route('/', XAmzTargetCodeDeploy20141006StopDeploymentHandler)
  .route('/', XAmzTargetCodeDeploy20141006TagResourceHandler)
  .route('/', XAmzTargetCodeDeploy20141006UntagResourceHandler)
  .route('/', XAmzTargetCodeDeploy20141006UpdateApplicationHandler)
  .route('/', XAmzTargetCodeDeploy20141006UpdateDeploymentGroupHandler)

export default app
