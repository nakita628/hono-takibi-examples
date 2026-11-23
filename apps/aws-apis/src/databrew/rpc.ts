import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postRecipesNameBatchDeleteRecipeVersion(
  args: InferRequestType<(typeof client.recipes)[':name']['batchDeleteRecipeVersion']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes[':name'].batchDeleteRecipeVersion.$post(args, options))
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

export async function postProfileJobs(
  args: InferRequestType<typeof client.profileJobs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.profileJobs.$post(args, options))
}

export async function getProjects(
  args: InferRequestType<typeof client.projects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects.$get(args, options))
}

export async function postProjects(
  args: InferRequestType<typeof client.projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects.$post(args, options))
}

export async function getRecipes(
  args: InferRequestType<typeof client.recipes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes.$get(args, options))
}

export async function postRecipes(
  args: InferRequestType<typeof client.recipes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes.$post(args, options))
}

export async function postRecipeJobs(
  args: InferRequestType<typeof client.recipeJobs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipeJobs.$post(args, options))
}

export async function getRulesets(
  args: InferRequestType<typeof client.rulesets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rulesets.$get(args, options))
}

export async function postRulesets(
  args: InferRequestType<typeof client.rulesets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rulesets.$post(args, options))
}

export async function getSchedules(
  args: InferRequestType<typeof client.schedules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedules.$get(args, options))
}

export async function postSchedules(
  args: InferRequestType<typeof client.schedules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedules.$post(args, options))
}

export async function getDatasetsName(
  args: InferRequestType<(typeof client.datasets)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasets[':name'].$get(args, options))
}

export async function putDatasetsName(
  args: InferRequestType<(typeof client.datasets)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasets[':name'].$put(args, options))
}

export async function deleteDatasetsName(
  args: InferRequestType<(typeof client.datasets)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasets[':name'].$delete(args, options))
}

export async function getJobsName(
  args: InferRequestType<(typeof client.jobs)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':name'].$get(args, options))
}

export async function deleteJobsName(
  args: InferRequestType<(typeof client.jobs)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':name'].$delete(args, options))
}

export async function getProjectsName(
  args: InferRequestType<(typeof client.projects)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':name'].$get(args, options))
}

export async function putProjectsName(
  args: InferRequestType<(typeof client.projects)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':name'].$put(args, options))
}

export async function deleteProjectsName(
  args: InferRequestType<(typeof client.projects)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':name'].$delete(args, options))
}

export async function deleteRecipesNameRecipeVersionRecipeVersion(
  args: InferRequestType<
    (typeof client.recipes)[':name']['recipeVersion'][':recipeVersion']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.recipes[':name'].recipeVersion[':recipeVersion'].$delete(args, options),
  )
}

export async function getRulesetsName(
  args: InferRequestType<(typeof client.rulesets)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rulesets[':name'].$get(args, options))
}

export async function putRulesetsName(
  args: InferRequestType<(typeof client.rulesets)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rulesets[':name'].$put(args, options))
}

export async function deleteRulesetsName(
  args: InferRequestType<(typeof client.rulesets)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rulesets[':name'].$delete(args, options))
}

export async function getSchedulesName(
  args: InferRequestType<(typeof client.schedules)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedules[':name'].$get(args, options))
}

export async function putSchedulesName(
  args: InferRequestType<(typeof client.schedules)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedules[':name'].$put(args, options))
}

export async function deleteSchedulesName(
  args: InferRequestType<(typeof client.schedules)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedules[':name'].$delete(args, options))
}

export async function getJobsNameJobRunRunId(
  args: InferRequestType<(typeof client.jobs)[':name']['jobRun'][':runId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':name'].jobRun[':runId'].$get(args, options))
}

export async function getRecipesName(
  args: InferRequestType<(typeof client.recipes)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes[':name'].$get(args, options))
}

export async function putRecipesName(
  args: InferRequestType<(typeof client.recipes)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes[':name'].$put(args, options))
}

export async function getJobsNameJobRuns(
  args: InferRequestType<(typeof client.jobs)[':name']['jobRuns']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':name'].jobRuns.$get(args, options))
}

export async function getJobs(
  args: InferRequestType<typeof client.jobs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs.$get(args, options))
}

export async function getRecipeVersionsName(
  args: InferRequestType<(typeof client)['recipeVersions#name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['recipeVersions#name'].$get(args, options))
}

export async function getTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':ResourceArn'].$get(args, options))
}

export async function postTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':ResourceArn'].$post(args, options))
}

export async function postRecipesNamePublishRecipe(
  args: InferRequestType<(typeof client.recipes)[':name']['publishRecipe']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipes[':name'].publishRecipe.$post(args, options))
}

export async function putProjectsNameSendProjectSessionAction(
  args: InferRequestType<(typeof client.projects)[':name']['sendProjectSessionAction']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':name'].sendProjectSessionAction.$put(args, options))
}

export async function postJobsNameStartJobRun(
  args: InferRequestType<(typeof client.jobs)[':name']['startJobRun']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':name'].startJobRun.$post(args, options))
}

export async function putProjectsNameStartProjectSession(
  args: InferRequestType<(typeof client.projects)[':name']['startProjectSession']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':name'].startProjectSession.$put(args, options))
}

export async function postJobsNameJobRunRunIdStopJobRun(
  args: InferRequestType<(typeof client.jobs)[':name']['jobRun'][':runId']['stopJobRun']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':name'].jobRun[':runId'].stopJobRun.$post(args, options))
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':ResourceArn#tagKeys'].$delete(args, options))
}

export async function putProfileJobsName(
  args: InferRequestType<(typeof client.profileJobs)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.profileJobs[':name'].$put(args, options))
}

export async function putRecipeJobsName(
  args: InferRequestType<(typeof client.recipeJobs)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipeJobs[':name'].$put(args, options))
}
