import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccount(options?: ClientRequestOptions) {
  return await parseResponse(client.account.$get(undefined, options))
}

export async function getCollections(options?: ClientRequestOptions) {
  return await parseResponse(client.collections.$get(undefined, options))
}

export async function getCollectionsCollectionSlug(
  args: InferRequestType<(typeof client.collections)[':collection_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':collection_slug'].$get(args, options))
}

export async function getDeployments(options?: ClientRequestOptions) {
  return await parseResponse(client.deployments.$get(undefined, options))
}

export async function postDeployments(
  args: InferRequestType<typeof client.deployments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deployments.$post(args, options))
}

export async function getDeploymentsDeploymentOwnerDeploymentName(
  args: InferRequestType<
    (typeof client.deployments)[':deployment_owner'][':deployment_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.deployments[':deployment_owner'][':deployment_name'].$get(args, options),
  )
}

export async function deleteDeploymentsDeploymentOwnerDeploymentName(
  args: InferRequestType<
    (typeof client.deployments)[':deployment_owner'][':deployment_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.deployments[':deployment_owner'][':deployment_name'].$delete(args, options),
  )
}

export async function patchDeploymentsDeploymentOwnerDeploymentName(
  args: InferRequestType<
    (typeof client.deployments)[':deployment_owner'][':deployment_name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.deployments[':deployment_owner'][':deployment_name'].$patch(args, options),
  )
}

export async function postDeploymentsDeploymentOwnerDeploymentNamePredictions(
  args: InferRequestType<
    (typeof client.deployments)[':deployment_owner'][':deployment_name']['predictions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.deployments[':deployment_owner'][':deployment_name'].predictions.$post(args, options),
  )
}

export async function getFiles(options?: ClientRequestOptions) {
  return await parseResponse(client.files.$get(undefined, options))
}

export async function postFiles(
  args: InferRequestType<typeof client.files.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files.$post(args, options))
}

export async function getFilesFileId(
  args: InferRequestType<(typeof client.files)[':file_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':file_id'].$get(args, options))
}

export async function deleteFilesFileId(
  args: InferRequestType<(typeof client.files)[':file_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':file_id'].$delete(args, options))
}

export async function getFilesFileIdDownload(
  args: InferRequestType<(typeof client.files)[':file_id']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':file_id'].download.$get(args, options))
}

export async function getHardware(options?: ClientRequestOptions) {
  return await parseResponse(client.hardware.$get(undefined, options))
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

export async function queryModels(
  args: InferRequestType<typeof client.models.$query>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.models.$query(args, options))
}

export async function getModelsModelOwnerModelName(
  args: InferRequestType<(typeof client.models)[':model_owner'][':model_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.models[':model_owner'][':model_name'].$get(args, options))
}

export async function deleteModelsModelOwnerModelName(
  args: InferRequestType<(typeof client.models)[':model_owner'][':model_name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.models[':model_owner'][':model_name'].$delete(args, options))
}

export async function patchModelsModelOwnerModelName(
  args: InferRequestType<(typeof client.models)[':model_owner'][':model_name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.models[':model_owner'][':model_name'].$patch(args, options))
}

export async function getModelsModelOwnerModelNameExamples(
  args: InferRequestType<(typeof client.models)[':model_owner'][':model_name']['examples']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.models[':model_owner'][':model_name'].examples.$get(args, options),
  )
}

export async function postModelsModelOwnerModelNamePredictions(
  args: InferRequestType<
    (typeof client.models)[':model_owner'][':model_name']['predictions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.models[':model_owner'][':model_name'].predictions.$post(args, options),
  )
}

export async function getModelsModelOwnerModelNameReadme(
  args: InferRequestType<(typeof client.models)[':model_owner'][':model_name']['readme']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.models[':model_owner'][':model_name'].readme.$get(args, options),
  )
}

export async function getModelsModelOwnerModelNameVersions(
  args: InferRequestType<(typeof client.models)[':model_owner'][':model_name']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.models[':model_owner'][':model_name'].versions.$get(args, options),
  )
}

export async function getModelsModelOwnerModelNameVersionsVersionId(
  args: InferRequestType<
    (typeof client.models)[':model_owner'][':model_name']['versions'][':version_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.models[':model_owner'][':model_name'].versions[':version_id'].$get(args, options),
  )
}

export async function deleteModelsModelOwnerModelNameVersionsVersionId(
  args: InferRequestType<
    (typeof client.models)[':model_owner'][':model_name']['versions'][':version_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.models[':model_owner'][':model_name'].versions[':version_id'].$delete(args, options),
  )
}

export async function postModelsModelOwnerModelNameVersionsVersionIdTrainings(
  args: InferRequestType<
    (typeof client.models)[':model_owner'][':model_name']['versions'][':version_id']['trainings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.models[':model_owner'][':model_name'].versions[':version_id'].trainings.$post(
      args,
      options,
    ),
  )
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

export async function getPredictionsPredictionId(
  args: InferRequestType<(typeof client.predictions)[':prediction_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.predictions[':prediction_id'].$get(args, options))
}

export async function postPredictionsPredictionIdCancel(
  args: InferRequestType<(typeof client.predictions)[':prediction_id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.predictions[':prediction_id'].cancel.$post(args, options))
}

export async function getSearch(
  args: InferRequestType<typeof client.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.$get(args, options))
}

export async function getTrainings(options?: ClientRequestOptions) {
  return await parseResponse(client.trainings.$get(undefined, options))
}

export async function getTrainingsTrainingId(
  args: InferRequestType<(typeof client.trainings)[':training_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.trainings[':training_id'].$get(args, options))
}

export async function postTrainingsTrainingIdCancel(
  args: InferRequestType<(typeof client.trainings)[':training_id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.trainings[':training_id'].cancel.$post(args, options))
}

export async function getWebhooksDefaultSecret(options?: ClientRequestOptions) {
  return await parseResponse(client.webhooks.default.secret.$get(undefined, options))
}
