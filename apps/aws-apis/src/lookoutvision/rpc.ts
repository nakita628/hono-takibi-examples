import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function post20201120ProjectsProjectNameDatasets(
  args: InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['datasets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-11-20'].projects[':projectName'].datasets.$post(args, options),
  )
}

export async function get20201120ProjectsProjectNameModels(
  args: InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['models']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-11-20'].projects[':projectName'].models.$get(args, options),
  )
}

export async function post20201120ProjectsProjectNameModels(
  args: InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['models']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-11-20'].projects[':projectName'].models.$post(args, options),
  )
}

export async function get20201120Projects(
  args: InferRequestType<(typeof client)['2020-11-20']['projects']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-11-20'].projects.$get(args, options))
}

export async function post20201120Projects(
  args: InferRequestType<(typeof client)['2020-11-20']['projects']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-11-20'].projects.$post(args, options))
}

export async function get20201120ProjectsProjectNameDatasetsDatasetType(
  args: InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['datasets'][':datasetType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-11-20'].projects[':projectName'].datasets[':datasetType'].$get(args, options),
  )
}

export async function delete20201120ProjectsProjectNameDatasetsDatasetType(
  args: InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['datasets'][':datasetType']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-11-20'].projects[':projectName'].datasets[':datasetType'].$delete(args, options),
  )
}

export async function get20201120ProjectsProjectNameModelsModelVersion(
  args: InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-11-20'].projects[':projectName'].models[':modelVersion'].$get(args, options),
  )
}

export async function delete20201120ProjectsProjectNameModelsModelVersion(
  args: InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-11-20'].projects[':projectName'].models[':modelVersion'].$delete(args, options),
  )
}

export async function get20201120ProjectsProjectName(
  args: InferRequestType<(typeof client)['2020-11-20']['projects'][':projectName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-11-20'].projects[':projectName'].$get(args, options))
}

export async function delete20201120ProjectsProjectName(
  args: InferRequestType<(typeof client)['2020-11-20']['projects'][':projectName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-11-20'].projects[':projectName'].$delete(args, options))
}

export async function get20201120ProjectsProjectNameModelpackagingjobsJobName(
  args: InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['modelpackagingjobs'][':jobName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-11-20'].projects[':projectName'].modelpackagingjobs[':jobName'].$get(
      args,
      options,
    ),
  )
}

export async function post20201120ProjectsProjectNameModelsModelVersionDetectContentType(
  args: InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['detect#Content-Type']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-11-20'].projects[':projectName'].models[':modelVersion'][
      'detect#Content-Type'
    ].$post(args, options),
  )
}

export async function get20201120ProjectsProjectNameDatasetsDatasetTypeEntries(
  args: InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['datasets'][':datasetType']['entries']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-11-20'].projects[':projectName'].datasets[':datasetType'].entries.$get(
      args,
      options,
    ),
  )
}

export async function patch20201120ProjectsProjectNameDatasetsDatasetTypeEntries(
  args: InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['datasets'][':datasetType']['entries']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-11-20'].projects[':projectName'].datasets[':datasetType'].entries.$patch(
      args,
      options,
    ),
  )
}

export async function get20201120ProjectsProjectNameModelpackagingjobs(
  args: InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['modelpackagingjobs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-11-20'].projects[':projectName'].modelpackagingjobs.$get(args, options),
  )
}

export async function post20201120ProjectsProjectNameModelpackagingjobs(
  args: InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['modelpackagingjobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-11-20'].projects[':projectName'].modelpackagingjobs.$post(args, options),
  )
}

export async function get20201120TagsResourceArn(
  args: InferRequestType<(typeof client)['2020-11-20']['tags'][':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-11-20'].tags[':resourceArn'].$get(args, options))
}

export async function post20201120TagsResourceArn(
  args: InferRequestType<(typeof client)['2020-11-20']['tags'][':resourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-11-20'].tags[':resourceArn'].$post(args, options))
}

export async function post20201120ProjectsProjectNameModelsModelVersionStart(
  args: InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['start']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-11-20'].projects[':projectName'].models[':modelVersion'].start.$post(
      args,
      options,
    ),
  )
}

export async function post20201120ProjectsProjectNameModelsModelVersionStop(
  args: InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['stop']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-11-20'].projects[':projectName'].models[':modelVersion'].stop.$post(args, options),
  )
}

export async function delete20201120TagsResourceArnTagKeys(
  args: InferRequestType<(typeof client)['2020-11-20']['tags'][':resourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-11-20'].tags[':resourceArn#tagKeys'].$delete(args, options),
  )
}
