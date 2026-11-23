import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAppClients(
  args: InferRequestType<typeof client.appClients.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.appClients.$get(args, options))
}

export async function postAppClients(
  args: InferRequestType<typeof client.appClients.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.appClients.$post(args, options))
}

export async function optionsAppClients(
  args: InferRequestType<typeof client.appClients.$options>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.appClients.$options(args, options))
}

export async function deleteAppClientsAppClientId(
  args: InferRequestType<(typeof client.appClients)[':appClientId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.appClients[':appClientId'].$delete(args, options))
}

export async function optionsAppClientsAppClientId(
  args: InferRequestType<(typeof client.appClients)[':appClientId']['$options']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.appClients[':appClientId'].$options(args, options))
}

export async function patchAppClientsAppClientId(
  args: InferRequestType<(typeof client.appClients)[':appClientId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.appClients[':appClientId'].$patch(args, options))
}

export async function getAssets(
  args: InferRequestType<typeof client.assets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets.$get(args, options))
}

export async function postAssets(
  args: InferRequestType<typeof client.assets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets.$post(args, options))
}

export async function optionsAssets(
  args: InferRequestType<typeof client.assets.$options>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets.$options(args, options))
}

export async function getAssetsAssetId(
  args: InferRequestType<(typeof client.assets)[':assetId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets[':assetId'].$get(args, options))
}

export async function deleteAssetsAssetId(
  args: InferRequestType<(typeof client.assets)[':assetId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets[':assetId'].$delete(args, options))
}

export async function optionsAssetsAssetId(
  args: InferRequestType<(typeof client.assets)[':assetId']['$options']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets[':assetId'].$options(args, options))
}

export async function patchAssetsAssetId(
  args: InferRequestType<(typeof client.assets)[':assetId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets[':assetId'].$patch(args, options))
}

export async function getDatasets(
  args: InferRequestType<typeof client.datasets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasets.$get(args, options))
}

export async function postDatasets(
  args: InferRequestType<typeof client.datasets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasets.$post(args, options))
}

export async function optionsDatasets(
  args: InferRequestType<typeof client.datasets.$options>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasets.$options(args, options))
}

export async function getDatasetsDatasetId(
  args: InferRequestType<(typeof client.datasets)[':datasetId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasets[':datasetId'].$get(args, options))
}

export async function deleteDatasetsDatasetId(
  args: InferRequestType<(typeof client.datasets)[':datasetId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasets[':datasetId'].$delete(args, options))
}

export async function optionsDatasetsDatasetId(
  args: InferRequestType<(typeof client.datasets)[':datasetId']['$options']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasets[':datasetId'].$options(args, options))
}

export async function patchDatasetsDatasetId(
  args: InferRequestType<(typeof client.datasets)[':datasetId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasets[':datasetId'].$patch(args, options))
}

export async function getDeploymentEnvironments(
  args: InferRequestType<typeof client.deploymentEnvironments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deploymentEnvironments.$get(args, options))
}

export async function optionsDeploymentEnvironments(
  args: InferRequestType<typeof client.deploymentEnvironments.$options>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deploymentEnvironments.$options(args, options))
}

export async function getDeploymentEnvironmentsDeploymentEnvironmentId(
  args: InferRequestType<
    (typeof client.deploymentEnvironments)[':deploymentEnvironmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.deploymentEnvironments[':deploymentEnvironmentId'].$get(args, options),
  )
}

export async function optionsDeploymentEnvironmentsDeploymentEnvironmentId(
  args: InferRequestType<
    (typeof client.deploymentEnvironments)[':deploymentEnvironmentId']['$options']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.deploymentEnvironments[':deploymentEnvironmentId'].$options(args, options),
  )
}

export async function getDocuments(
  args: InferRequestType<typeof client.documents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents.$get(args, options))
}

export async function postDocuments(
  args: InferRequestType<typeof client.documents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents.$post(args, options))
}

export async function deleteDocuments(
  args: InferRequestType<typeof client.documents.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents.$delete(args, options))
}

export async function optionsDocuments(
  args: InferRequestType<typeof client.documents.$options>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents.$options(args, options))
}

export async function getDocumentsDocumentId(
  args: InferRequestType<(typeof client.documents)[':documentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':documentId'].$get(args, options))
}

export async function deleteDocumentsDocumentId(
  args: InferRequestType<(typeof client.documents)[':documentId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':documentId'].$delete(args, options))
}

export async function optionsDocumentsDocumentId(
  args: InferRequestType<(typeof client.documents)[':documentId']['$options']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':documentId'].$options(args, options))
}

export async function patchDocumentsDocumentId(
  args: InferRequestType<(typeof client.documents)[':documentId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':documentId'].$patch(args, options))
}

export async function getLogs(
  args: InferRequestType<typeof client.logs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logs.$get(args, options))
}

export async function optionsLogs(
  args: InferRequestType<typeof client.logs.$options>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logs.$options(args, options))
}

export async function getLogsLogId(
  args: InferRequestType<(typeof client.logs)[':logId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logs[':logId'].$get(args, options))
}

export async function optionsLogsLogId(
  args: InferRequestType<(typeof client.logs)[':logId']['$options']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logs[':logId'].$options(args, options))
}

export async function getModels(
  args: InferRequestType<typeof client.models.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.models.$get(args, options))
}

export async function postModels(
  args: InferRequestType<typeof client.models.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.models.$post(args, options))
}

export async function optionsModels(
  args: InferRequestType<typeof client.models.$options>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.models.$options(args, options))
}

export async function getModelsModelId(
  args: InferRequestType<(typeof client.models)[':modelId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.models[':modelId'].$get(args, options))
}

export async function deleteModelsModelId(
  args: InferRequestType<(typeof client.models)[':modelId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.models[':modelId'].$delete(args, options))
}

export async function optionsModelsModelId(
  args: InferRequestType<(typeof client.models)[':modelId']['$options']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.models[':modelId'].$options(args, options))
}

export async function patchModelsModelId(
  args: InferRequestType<(typeof client.models)[':modelId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.models[':modelId'].$patch(args, options))
}

export async function getModelsModelIdDataBundles(
  args: InferRequestType<(typeof client.models)[':modelId']['dataBundles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.models[':modelId'].dataBundles.$get(args, options))
}

export async function postModelsModelIdDataBundles(
  args: InferRequestType<(typeof client.models)[':modelId']['dataBundles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.models[':modelId'].dataBundles.$post(args, options))
}

export async function optionsModelsModelIdDataBundles(
  args: InferRequestType<(typeof client.models)[':modelId']['dataBundles']['$options']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.models[':modelId'].dataBundles.$options(args, options))
}

export async function deleteModelsModelIdDataBundlesDataBundleId(
  args: InferRequestType<
    (typeof client.models)[':modelId']['dataBundles'][':dataBundleId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.models[':modelId'].dataBundles[':dataBundleId'].$delete(args, options),
  )
}

export async function optionsModelsModelIdDataBundlesDataBundleId(
  args: InferRequestType<
    (typeof client.models)[':modelId']['dataBundles'][':dataBundleId']['$options']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.models[':modelId'].dataBundles[':dataBundleId'].$options(args, options),
  )
}

export async function patchModelsModelIdDataBundlesDataBundleId(
  args: InferRequestType<
    (typeof client.models)[':modelId']['dataBundles'][':dataBundleId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.models[':modelId'].dataBundles[':dataBundleId'].$patch(args, options),
  )
}

export async function getModelsModelIdTrainings(
  args: InferRequestType<(typeof client.models)[':modelId']['trainings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.models[':modelId'].trainings.$get(args, options))
}

export async function postModelsModelIdTrainings(
  args: InferRequestType<(typeof client.models)[':modelId']['trainings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.models[':modelId'].trainings.$post(args, options))
}

export async function optionsModelsModelIdTrainings(
  args: InferRequestType<(typeof client.models)[':modelId']['trainings']['$options']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.models[':modelId'].trainings.$options(args, options))
}

export async function optionsModelsModelIdTrainingsTrainingId(
  args: InferRequestType<
    (typeof client.models)[':modelId']['trainings'][':trainingId']['$options']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.models[':modelId'].trainings[':trainingId'].$options(args, options),
  )
}

export async function patchModelsModelIdTrainingsTrainingId(
  args: InferRequestType<(typeof client.models)[':modelId']['trainings'][':trainingId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.models[':modelId'].trainings[':trainingId'].$patch(args, options),
  )
}

export async function getOrganizations(
  args: InferRequestType<typeof client.organizations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations.$get(args, options))
}

export async function postOrganizations(
  args: InferRequestType<typeof client.organizations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations.$post(args, options))
}

export async function optionsOrganizations(
  args: InferRequestType<typeof client.organizations.$options>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations.$options(args, options))
}

export async function getOrganizationsOrganizationId(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationId'].$get(args, options))
}

export async function optionsOrganizationsOrganizationId(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['$options']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationId'].$options(args, options))
}

export async function patchOrganizationsOrganizationId(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationId'].$patch(args, options))
}

export async function getPaymentMethods(
  args: InferRequestType<typeof client.paymentMethods.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.paymentMethods.$get(args, options))
}

export async function postPaymentMethods(
  args: InferRequestType<typeof client.paymentMethods.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.paymentMethods.$post(args, options))
}

export async function optionsPaymentMethods(
  args: InferRequestType<typeof client.paymentMethods.$options>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.paymentMethods.$options(args, options))
}

export async function getPaymentMethodsPaymentMethodId(
  args: InferRequestType<(typeof client.paymentMethods)[':paymentMethodId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.paymentMethods[':paymentMethodId'].$get(args, options))
}

export async function deletePaymentMethodsPaymentMethodId(
  args: InferRequestType<(typeof client.paymentMethods)[':paymentMethodId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.paymentMethods[':paymentMethodId'].$delete(args, options))
}

export async function optionsPaymentMethodsPaymentMethodId(
  args: InferRequestType<(typeof client.paymentMethods)[':paymentMethodId']['$options']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.paymentMethods[':paymentMethodId'].$options(args, options))
}

export async function patchPaymentMethodsPaymentMethodId(
  args: InferRequestType<(typeof client.paymentMethods)[':paymentMethodId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.paymentMethods[':paymentMethodId'].$patch(args, options))
}

export async function getPlans(
  args: InferRequestType<typeof client.plans.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plans.$get(args, options))
}

export async function optionsPlans(
  args: InferRequestType<typeof client.plans.$options>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plans.$options(args, options))
}

export async function getPlansPlanId(
  args: InferRequestType<(typeof client.plans)[':planId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plans[':planId'].$get(args, options))
}

export async function optionsPlansPlanId(
  args: InferRequestType<(typeof client.plans)[':planId']['$options']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plans[':planId'].$options(args, options))
}

export async function getPredictions(
  args: InferRequestType<typeof client.predictions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.predictions.$get(args, options))
}

export async function postPredictions(
  args: InferRequestType<typeof client.predictions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.predictions.$post(args, options))
}

export async function optionsPredictions(
  args: InferRequestType<typeof client.predictions.$options>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.predictions.$options(args, options))
}

export async function getProfilesProfileId(
  args: InferRequestType<(typeof client.profiles)[':profileId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.profiles[':profileId'].$get(args, options))
}

export async function optionsProfilesProfileId(
  args: InferRequestType<(typeof client.profiles)[':profileId']['$options']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.profiles[':profileId'].$options(args, options))
}

export async function patchProfilesProfileId(
  args: InferRequestType<(typeof client.profiles)[':profileId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.profiles[':profileId'].$patch(args, options))
}

export async function getSecrets(
  args: InferRequestType<typeof client.secrets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.secrets.$get(args, options))
}

export async function postSecrets(
  args: InferRequestType<typeof client.secrets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.secrets.$post(args, options))
}

export async function optionsSecrets(
  args: InferRequestType<typeof client.secrets.$options>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.secrets.$options(args, options))
}

export async function deleteSecretsSecretId(
  args: InferRequestType<(typeof client.secrets)[':secretId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.secrets[':secretId'].$delete(args, options))
}

export async function optionsSecretsSecretId(
  args: InferRequestType<(typeof client.secrets)[':secretId']['$options']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.secrets[':secretId'].$options(args, options))
}

export async function patchSecretsSecretId(
  args: InferRequestType<(typeof client.secrets)[':secretId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.secrets[':secretId'].$patch(args, options))
}

export async function postSignup(
  args: InferRequestType<typeof client.signup.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.signup.$post(args, options))
}

export async function optionsSignup(
  args: InferRequestType<typeof client.signup.$options>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.signup.$options(args, options))
}

export async function getTransitions(
  args: InferRequestType<typeof client.transitions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transitions.$get(args, options))
}

export async function postTransitions(
  args: InferRequestType<typeof client.transitions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transitions.$post(args, options))
}

export async function optionsTransitions(
  args: InferRequestType<typeof client.transitions.$options>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transitions.$options(args, options))
}

export async function getTransitionsTransitionId(
  args: InferRequestType<(typeof client.transitions)[':transitionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transitions[':transitionId'].$get(args, options))
}

export async function deleteTransitionsTransitionId(
  args: InferRequestType<(typeof client.transitions)[':transitionId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transitions[':transitionId'].$delete(args, options))
}

export async function optionsTransitionsTransitionId(
  args: InferRequestType<(typeof client.transitions)[':transitionId']['$options']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transitions[':transitionId'].$options(args, options))
}

export async function patchTransitionsTransitionId(
  args: InferRequestType<(typeof client.transitions)[':transitionId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transitions[':transitionId'].$patch(args, options))
}

export async function getTransitionsTransitionIdExecutions(
  args: InferRequestType<(typeof client.transitions)[':transitionId']['executions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transitions[':transitionId'].executions.$get(args, options))
}

export async function postTransitionsTransitionIdExecutions(
  args: InferRequestType<(typeof client.transitions)[':transitionId']['executions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transitions[':transitionId'].executions.$post(args, options))
}

export async function optionsTransitionsTransitionIdExecutions(
  args: InferRequestType<(typeof client.transitions)[':transitionId']['executions']['$options']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transitions[':transitionId'].executions.$options(args, options))
}

export async function getTransitionsTransitionIdExecutionsExecutionId(
  args: InferRequestType<
    (typeof client.transitions)[':transitionId']['executions'][':executionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.transitions[':transitionId'].executions[':executionId'].$get(args, options),
  )
}

export async function optionsTransitionsTransitionIdExecutionsExecutionId(
  args: InferRequestType<
    (typeof client.transitions)[':transitionId']['executions'][':executionId']['$options']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.transitions[':transitionId'].executions[':executionId'].$options(args, options),
  )
}

export async function patchTransitionsTransitionIdExecutionsExecutionId(
  args: InferRequestType<
    (typeof client.transitions)[':transitionId']['executions'][':executionId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.transitions[':transitionId'].executions[':executionId'].$patch(args, options),
  )
}

export async function postTransitionsTransitionIdExecutionsExecutionIdHeartbeats(
  args: InferRequestType<
    (typeof client.transitions)[':transitionId']['executions'][':executionId']['heartbeats']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.transitions[':transitionId'].executions[':executionId'].heartbeats.$post(args, options),
  )
}

export async function optionsTransitionsTransitionIdExecutionsExecutionIdHeartbeats(
  args: InferRequestType<
    (typeof client.transitions)[':transitionId']['executions'][':executionId']['heartbeats']['$options']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.transitions[':transitionId'].executions[':executionId'].heartbeats.$options(
      args,
      options,
    ),
  )
}

export async function getUsers(
  args: InferRequestType<typeof client.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$get(args, options))
}

export async function postUsers(
  args: InferRequestType<typeof client.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$post(args, options))
}

export async function optionsUsers(
  args: InferRequestType<typeof client.users.$options>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$options(args, options))
}

export async function getUsersUserId(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].$get(args, options))
}

export async function deleteUsersUserId(
  args: InferRequestType<(typeof client.users)[':userId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].$delete(args, options))
}

export async function optionsUsersUserId(
  args: InferRequestType<(typeof client.users)[':userId']['$options']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].$options(args, options))
}

export async function patchUsersUserId(
  args: InferRequestType<(typeof client.users)[':userId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].$patch(args, options))
}

export async function getWorkflows(
  args: InferRequestType<typeof client.workflows.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflows.$get(args, options))
}

export async function postWorkflows(
  args: InferRequestType<typeof client.workflows.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflows.$post(args, options))
}

export async function optionsWorkflows(
  args: InferRequestType<typeof client.workflows.$options>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflows.$options(args, options))
}

export async function getWorkflowsWorkflowId(
  args: InferRequestType<(typeof client.workflows)[':workflowId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflows[':workflowId'].$get(args, options))
}

export async function deleteWorkflowsWorkflowId(
  args: InferRequestType<(typeof client.workflows)[':workflowId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflows[':workflowId'].$delete(args, options))
}

export async function optionsWorkflowsWorkflowId(
  args: InferRequestType<(typeof client.workflows)[':workflowId']['$options']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflows[':workflowId'].$options(args, options))
}

export async function patchWorkflowsWorkflowId(
  args: InferRequestType<(typeof client.workflows)[':workflowId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflows[':workflowId'].$patch(args, options))
}

export async function getWorkflowsWorkflowIdExecutions(
  args: InferRequestType<(typeof client.workflows)[':workflowId']['executions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflows[':workflowId'].executions.$get(args, options))
}

export async function postWorkflowsWorkflowIdExecutions(
  args: InferRequestType<(typeof client.workflows)[':workflowId']['executions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflows[':workflowId'].executions.$post(args, options))
}

export async function optionsWorkflowsWorkflowIdExecutions(
  args: InferRequestType<(typeof client.workflows)[':workflowId']['executions']['$options']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflows[':workflowId'].executions.$options(args, options))
}

export async function getWorkflowsWorkflowIdExecutionsExecutionId(
  args: InferRequestType<
    (typeof client.workflows)[':workflowId']['executions'][':executionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workflows[':workflowId'].executions[':executionId'].$get(args, options),
  )
}

export async function deleteWorkflowsWorkflowIdExecutionsExecutionId(
  args: InferRequestType<
    (typeof client.workflows)[':workflowId']['executions'][':executionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workflows[':workflowId'].executions[':executionId'].$delete(args, options),
  )
}

export async function optionsWorkflowsWorkflowIdExecutionsExecutionId(
  args: InferRequestType<
    (typeof client.workflows)[':workflowId']['executions'][':executionId']['$options']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workflows[':workflowId'].executions[':executionId'].$options(args, options),
  )
}

export async function patchWorkflowsWorkflowIdExecutionsExecutionId(
  args: InferRequestType<
    (typeof client.workflows)[':workflowId']['executions'][':executionId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workflows[':workflowId'].executions[':executionId'].$patch(args, options),
  )
}
