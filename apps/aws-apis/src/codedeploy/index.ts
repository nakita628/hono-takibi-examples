import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetCodeDeploy20141006AddTagsToOnPremisesInstancesHandler,
  xAmzTargetCodeDeploy20141006BatchGetApplicationRevisionsHandler,
  xAmzTargetCodeDeploy20141006BatchGetApplicationsHandler,
  xAmzTargetCodeDeploy20141006BatchGetDeploymentGroupsHandler,
  xAmzTargetCodeDeploy20141006BatchGetDeploymentInstancesHandler,
  xAmzTargetCodeDeploy20141006BatchGetDeploymentsHandler,
  xAmzTargetCodeDeploy20141006BatchGetDeploymentTargetsHandler,
  xAmzTargetCodeDeploy20141006BatchGetOnPremisesInstancesHandler,
  xAmzTargetCodeDeploy20141006ContinueDeploymentHandler,
  xAmzTargetCodeDeploy20141006CreateApplicationHandler,
  xAmzTargetCodeDeploy20141006CreateDeploymentConfigHandler,
  xAmzTargetCodeDeploy20141006CreateDeploymentGroupHandler,
  xAmzTargetCodeDeploy20141006CreateDeploymentHandler,
  xAmzTargetCodeDeploy20141006DeleteApplicationHandler,
  xAmzTargetCodeDeploy20141006DeleteDeploymentConfigHandler,
  xAmzTargetCodeDeploy20141006DeleteDeploymentGroupHandler,
  xAmzTargetCodeDeploy20141006DeleteGitHubAccountTokenHandler,
  xAmzTargetCodeDeploy20141006DeleteResourcesByExternalIdHandler,
  xAmzTargetCodeDeploy20141006DeregisterOnPremisesInstanceHandler,
  xAmzTargetCodeDeploy20141006GetApplicationHandler,
  xAmzTargetCodeDeploy20141006GetApplicationRevisionHandler,
  xAmzTargetCodeDeploy20141006GetDeploymentConfigHandler,
  xAmzTargetCodeDeploy20141006GetDeploymentGroupHandler,
  xAmzTargetCodeDeploy20141006GetDeploymentHandler,
  xAmzTargetCodeDeploy20141006GetDeploymentInstanceHandler,
  xAmzTargetCodeDeploy20141006GetDeploymentTargetHandler,
  xAmzTargetCodeDeploy20141006GetOnPremisesInstanceHandler,
  xAmzTargetCodeDeploy20141006ListApplicationRevisionsHandler,
  xAmzTargetCodeDeploy20141006ListApplicationsHandler,
  xAmzTargetCodeDeploy20141006ListDeploymentConfigsHandler,
  xAmzTargetCodeDeploy20141006ListDeploymentGroupsHandler,
  xAmzTargetCodeDeploy20141006ListDeploymentInstancesHandler,
  xAmzTargetCodeDeploy20141006ListDeploymentsHandler,
  xAmzTargetCodeDeploy20141006ListDeploymentTargetsHandler,
  xAmzTargetCodeDeploy20141006ListGitHubAccountTokenNamesHandler,
  xAmzTargetCodeDeploy20141006ListOnPremisesInstancesHandler,
  xAmzTargetCodeDeploy20141006ListTagsForResourceHandler,
  xAmzTargetCodeDeploy20141006PutLifecycleEventHookExecutionStatusHandler,
  xAmzTargetCodeDeploy20141006RegisterApplicationRevisionHandler,
  xAmzTargetCodeDeploy20141006RegisterOnPremisesInstanceHandler,
  xAmzTargetCodeDeploy20141006RemoveTagsFromOnPremisesInstancesHandler,
  xAmzTargetCodeDeploy20141006SkipWaitTimeForInstanceTerminationHandler,
  xAmzTargetCodeDeploy20141006StopDeploymentHandler,
  xAmzTargetCodeDeploy20141006TagResourceHandler,
  xAmzTargetCodeDeploy20141006UntagResourceHandler,
  xAmzTargetCodeDeploy20141006UpdateApplicationHandler,
  xAmzTargetCodeDeploy20141006UpdateDeploymentGroupHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetCodeDeploy20141006AddTagsToOnPremisesInstancesHandler)
  .route('/', xAmzTargetCodeDeploy20141006BatchGetApplicationRevisionsHandler)
  .route('/', xAmzTargetCodeDeploy20141006BatchGetApplicationsHandler)
  .route('/', xAmzTargetCodeDeploy20141006BatchGetDeploymentGroupsHandler)
  .route('/', xAmzTargetCodeDeploy20141006BatchGetDeploymentInstancesHandler)
  .route('/', xAmzTargetCodeDeploy20141006BatchGetDeploymentTargetsHandler)
  .route('/', xAmzTargetCodeDeploy20141006BatchGetDeploymentsHandler)
  .route('/', xAmzTargetCodeDeploy20141006BatchGetOnPremisesInstancesHandler)
  .route('/', xAmzTargetCodeDeploy20141006ContinueDeploymentHandler)
  .route('/', xAmzTargetCodeDeploy20141006CreateApplicationHandler)
  .route('/', xAmzTargetCodeDeploy20141006CreateDeploymentHandler)
  .route('/', xAmzTargetCodeDeploy20141006CreateDeploymentConfigHandler)
  .route('/', xAmzTargetCodeDeploy20141006CreateDeploymentGroupHandler)
  .route('/', xAmzTargetCodeDeploy20141006DeleteApplicationHandler)
  .route('/', xAmzTargetCodeDeploy20141006DeleteDeploymentConfigHandler)
  .route('/', xAmzTargetCodeDeploy20141006DeleteDeploymentGroupHandler)
  .route('/', xAmzTargetCodeDeploy20141006DeleteGitHubAccountTokenHandler)
  .route('/', xAmzTargetCodeDeploy20141006DeleteResourcesByExternalIdHandler)
  .route('/', xAmzTargetCodeDeploy20141006DeregisterOnPremisesInstanceHandler)
  .route('/', xAmzTargetCodeDeploy20141006GetApplicationHandler)
  .route('/', xAmzTargetCodeDeploy20141006GetApplicationRevisionHandler)
  .route('/', xAmzTargetCodeDeploy20141006GetDeploymentHandler)
  .route('/', xAmzTargetCodeDeploy20141006GetDeploymentConfigHandler)
  .route('/', xAmzTargetCodeDeploy20141006GetDeploymentGroupHandler)
  .route('/', xAmzTargetCodeDeploy20141006GetDeploymentInstanceHandler)
  .route('/', xAmzTargetCodeDeploy20141006GetDeploymentTargetHandler)
  .route('/', xAmzTargetCodeDeploy20141006GetOnPremisesInstanceHandler)
  .route('/', xAmzTargetCodeDeploy20141006ListApplicationRevisionsHandler)
  .route('/', xAmzTargetCodeDeploy20141006ListApplicationsHandler)
  .route('/', xAmzTargetCodeDeploy20141006ListDeploymentConfigsHandler)
  .route('/', xAmzTargetCodeDeploy20141006ListDeploymentGroupsHandler)
  .route('/', xAmzTargetCodeDeploy20141006ListDeploymentInstancesHandler)
  .route('/', xAmzTargetCodeDeploy20141006ListDeploymentTargetsHandler)
  .route('/', xAmzTargetCodeDeploy20141006ListDeploymentsHandler)
  .route('/', xAmzTargetCodeDeploy20141006ListGitHubAccountTokenNamesHandler)
  .route('/', xAmzTargetCodeDeploy20141006ListOnPremisesInstancesHandler)
  .route('/', xAmzTargetCodeDeploy20141006ListTagsForResourceHandler)
  .route('/', xAmzTargetCodeDeploy20141006PutLifecycleEventHookExecutionStatusHandler)
  .route('/', xAmzTargetCodeDeploy20141006RegisterApplicationRevisionHandler)
  .route('/', xAmzTargetCodeDeploy20141006RegisterOnPremisesInstanceHandler)
  .route('/', xAmzTargetCodeDeploy20141006RemoveTagsFromOnPremisesInstancesHandler)
  .route('/', xAmzTargetCodeDeploy20141006SkipWaitTimeForInstanceTerminationHandler)
  .route('/', xAmzTargetCodeDeploy20141006StopDeploymentHandler)
  .route('/', xAmzTargetCodeDeploy20141006TagResourceHandler)
  .route('/', xAmzTargetCodeDeploy20141006UntagResourceHandler)
  .route('/', xAmzTargetCodeDeploy20141006UpdateApplicationHandler)
  .route('/', xAmzTargetCodeDeploy20141006UpdateDeploymentGroupHandler)

export default app
