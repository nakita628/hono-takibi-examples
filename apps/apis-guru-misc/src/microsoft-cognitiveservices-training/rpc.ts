import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getDomains(options?: ClientRequestOptions) {
  return await parseResponse(client.domains.$get(undefined, options))
}

export async function getDomainsDomainId(
  args: InferRequestType<(typeof client.domains)[':domainId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':domainId'].$get(args, options))
}

export async function getProjects(options?: ClientRequestOptions) {
  return await parseResponse(client.projects.$get(undefined, options))
}

export async function postProjects(
  args: InferRequestType<typeof client.projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects.$post(args, options))
}

export async function postProjectsImport(
  args: InferRequestType<typeof client.projects.import.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects.import.$post(args, options))
}

export async function getProjectsProjectId(
  args: InferRequestType<(typeof client.projects)[':projectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].$get(args, options))
}

export async function deleteProjectsProjectId(
  args: InferRequestType<(typeof client.projects)[':projectId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].$delete(args, options))
}

export async function patchProjectsProjectId(
  args: InferRequestType<(typeof client.projects)[':projectId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].$patch(args, options))
}

export async function getProjectsProjectIdExport(
  args: InferRequestType<(typeof client.projects)[':projectId']['export']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].export.$get(args, options))
}

export async function postProjectsProjectIdImages(
  args: InferRequestType<(typeof client.projects)[':projectId']['images']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].images.$post(args, options))
}

export async function deleteProjectsProjectIdImages(
  args: InferRequestType<(typeof client.projects)[':projectId']['images']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].images.$delete(args, options))
}

export async function postProjectsProjectIdImagesFiles(
  args: InferRequestType<(typeof client.projects)[':projectId']['images']['files']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].images.files.$post(args, options))
}

export async function getProjectsProjectIdImagesId(
  args: InferRequestType<(typeof client.projects)[':projectId']['images']['id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].images.id.$get(args, options))
}

export async function postProjectsProjectIdImagesPredictions(
  args: InferRequestType<(typeof client.projects)[':projectId']['images']['predictions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].images.predictions.$post(args, options))
}

export async function postProjectsProjectIdImagesRegions(
  args: InferRequestType<(typeof client.projects)[':projectId']['images']['regions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].images.regions.$post(args, options))
}

export async function deleteProjectsProjectIdImagesRegions(
  args: InferRequestType<(typeof client.projects)[':projectId']['images']['regions']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].images.regions.$delete(args, options))
}

export async function postProjectsProjectIdImagesSuggested(
  args: InferRequestType<(typeof client.projects)[':projectId']['images']['suggested']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].images.suggested.$post(args, options))
}

export async function postProjectsProjectIdImagesSuggestedCount(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['images']['suggested']['count']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].images.suggested.count.$post(args, options),
  )
}

export async function getProjectsProjectIdImagesTagged(
  args: InferRequestType<(typeof client.projects)[':projectId']['images']['tagged']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].images.tagged.$get(args, options))
}

export async function getProjectsProjectIdImagesTaggedCount(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['images']['tagged']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].images.tagged.count.$get(args, options))
}

export async function postProjectsProjectIdImagesTags(
  args: InferRequestType<(typeof client.projects)[':projectId']['images']['tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].images.tags.$post(args, options))
}

export async function deleteProjectsProjectIdImagesTags(
  args: InferRequestType<(typeof client.projects)[':projectId']['images']['tags']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].images.tags.$delete(args, options))
}

export async function getProjectsProjectIdImagesUntagged(
  args: InferRequestType<(typeof client.projects)[':projectId']['images']['untagged']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].images.untagged.$get(args, options))
}

export async function getProjectsProjectIdImagesUntaggedCount(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['images']['untagged']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].images.untagged.count.$get(args, options),
  )
}

export async function postProjectsProjectIdImagesUrls(
  args: InferRequestType<(typeof client.projects)[':projectId']['images']['urls']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].images.urls.$post(args, options))
}

export async function postProjectsProjectIdImagesImageIdRegionproposals(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['images'][':imageId']['regionproposals']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].images[':imageId'].regionproposals.$post(args, options),
  )
}

export async function getProjectsProjectIdIterations(
  args: InferRequestType<(typeof client.projects)[':projectId']['iterations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].iterations.$get(args, options))
}

export async function getProjectsProjectIdIterationsIterationId(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['iterations'][':iterationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].iterations[':iterationId'].$get(args, options),
  )
}

export async function deleteProjectsProjectIdIterationsIterationId(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['iterations'][':iterationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].iterations[':iterationId'].$delete(args, options),
  )
}

export async function patchProjectsProjectIdIterationsIterationId(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['iterations'][':iterationId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].iterations[':iterationId'].$patch(args, options),
  )
}

export async function getProjectsProjectIdIterationsIterationIdExport(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['iterations'][':iterationId']['export']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].iterations[':iterationId'].export.$get(args, options),
  )
}

export async function postProjectsProjectIdIterationsIterationIdExport(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['iterations'][':iterationId']['export']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].iterations[':iterationId'].export.$post(args, options),
  )
}

export async function getProjectsProjectIdIterationsIterationIdPerformance(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['iterations'][':iterationId']['performance']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].iterations[':iterationId'].performance.$get(args, options),
  )
}

export async function getProjectsProjectIdIterationsIterationIdPerformanceImages(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['iterations'][':iterationId']['performance']['images']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].iterations[':iterationId'].performance.images.$get(args, options),
  )
}

export async function getProjectsProjectIdIterationsIterationIdPerformanceImagesCount(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['iterations'][':iterationId']['performance']['images']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].iterations[':iterationId'].performance.images.count.$get(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectIdIterationsIterationIdPublish(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['iterations'][':iterationId']['publish']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].iterations[':iterationId'].publish.$post(args, options),
  )
}

export async function deleteProjectsProjectIdIterationsIterationIdPublish(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['iterations'][':iterationId']['publish']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].iterations[':iterationId'].publish.$delete(args, options),
  )
}

export async function deleteProjectsProjectIdPredictions(
  args: InferRequestType<(typeof client.projects)[':projectId']['predictions']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].predictions.$delete(args, options))
}

export async function postProjectsProjectIdPredictionsQuery(
  args: InferRequestType<(typeof client.projects)[':projectId']['predictions']['query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].predictions.query.$post(args, options))
}

export async function postProjectsProjectIdQuicktestImage(
  args: InferRequestType<(typeof client.projects)[':projectId']['quicktest']['image']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].quicktest.image.$post(args, options))
}

export async function postProjectsProjectIdQuicktestUrl(
  args: InferRequestType<(typeof client.projects)[':projectId']['quicktest']['url']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].quicktest.url.$post(args, options))
}

export async function getProjectsProjectIdTags(
  args: InferRequestType<(typeof client.projects)[':projectId']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].tags.$get(args, options))
}

export async function postProjectsProjectIdTags(
  args: InferRequestType<(typeof client.projects)[':projectId']['tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].tags.$post(args, options))
}

export async function getProjectsProjectIdTagsTagId(
  args: InferRequestType<(typeof client.projects)[':projectId']['tags'][':tagId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].tags[':tagId'].$get(args, options))
}

export async function deleteProjectsProjectIdTagsTagId(
  args: InferRequestType<(typeof client.projects)[':projectId']['tags'][':tagId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].tags[':tagId'].$delete(args, options))
}

export async function patchProjectsProjectIdTagsTagId(
  args: InferRequestType<(typeof client.projects)[':projectId']['tags'][':tagId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].tags[':tagId'].$patch(args, options))
}

export async function postProjectsProjectIdTagsandregionsSuggestions(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['tagsandregions']['suggestions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].tagsandregions.suggestions.$post(args, options),
  )
}

export async function postProjectsProjectIdTrain(
  args: InferRequestType<(typeof client.projects)[':projectId']['train']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].train.$post(args, options))
}
