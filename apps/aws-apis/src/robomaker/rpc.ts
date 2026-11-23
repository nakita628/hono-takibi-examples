import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postBatchDeleteWorlds(
  args: InferRequestType<typeof client.batchDeleteWorlds.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.batchDeleteWorlds.$post(args, options))
}

export async function postBatchDescribeSimulationJob(
  args: InferRequestType<typeof client.batchDescribeSimulationJob.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.batchDescribeSimulationJob.$post(args, options))
}

export async function postCancelDeploymentJob(
  args: InferRequestType<typeof client.cancelDeploymentJob.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cancelDeploymentJob.$post(args, options))
}

export async function postCancelSimulationJob(
  args: InferRequestType<typeof client.cancelSimulationJob.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cancelSimulationJob.$post(args, options))
}

export async function postCancelSimulationJobBatch(
  args: InferRequestType<typeof client.cancelSimulationJobBatch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cancelSimulationJobBatch.$post(args, options))
}

export async function postCancelWorldExportJob(
  args: InferRequestType<typeof client.cancelWorldExportJob.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cancelWorldExportJob.$post(args, options))
}

export async function postCancelWorldGenerationJob(
  args: InferRequestType<typeof client.cancelWorldGenerationJob.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cancelWorldGenerationJob.$post(args, options))
}

export async function postCreateDeploymentJob(
  args: InferRequestType<typeof client.createDeploymentJob.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.createDeploymentJob.$post(args, options))
}

export async function postCreateFleet(
  args: InferRequestType<typeof client.createFleet.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.createFleet.$post(args, options))
}

export async function postCreateRobot(
  args: InferRequestType<typeof client.createRobot.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.createRobot.$post(args, options))
}

export async function postCreateRobotApplication(
  args: InferRequestType<typeof client.createRobotApplication.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.createRobotApplication.$post(args, options))
}

export async function postCreateRobotApplicationVersion(
  args: InferRequestType<typeof client.createRobotApplicationVersion.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.createRobotApplicationVersion.$post(args, options))
}

export async function postCreateSimulationApplication(
  args: InferRequestType<typeof client.createSimulationApplication.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.createSimulationApplication.$post(args, options))
}

export async function postCreateSimulationApplicationVersion(
  args: InferRequestType<typeof client.createSimulationApplicationVersion.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.createSimulationApplicationVersion.$post(args, options))
}

export async function postCreateSimulationJob(
  args: InferRequestType<typeof client.createSimulationJob.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.createSimulationJob.$post(args, options))
}

export async function postCreateWorldExportJob(
  args: InferRequestType<typeof client.createWorldExportJob.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.createWorldExportJob.$post(args, options))
}

export async function postCreateWorldGenerationJob(
  args: InferRequestType<typeof client.createWorldGenerationJob.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.createWorldGenerationJob.$post(args, options))
}

export async function postCreateWorldTemplate(
  args: InferRequestType<typeof client.createWorldTemplate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.createWorldTemplate.$post(args, options))
}

export async function postDeleteFleet(
  args: InferRequestType<typeof client.deleteFleet.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deleteFleet.$post(args, options))
}

export async function postDeleteRobot(
  args: InferRequestType<typeof client.deleteRobot.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deleteRobot.$post(args, options))
}

export async function postDeleteRobotApplication(
  args: InferRequestType<typeof client.deleteRobotApplication.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deleteRobotApplication.$post(args, options))
}

export async function postDeleteSimulationApplication(
  args: InferRequestType<typeof client.deleteSimulationApplication.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deleteSimulationApplication.$post(args, options))
}

export async function postDeleteWorldTemplate(
  args: InferRequestType<typeof client.deleteWorldTemplate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deleteWorldTemplate.$post(args, options))
}

export async function postDeregisterRobot(
  args: InferRequestType<typeof client.deregisterRobot.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deregisterRobot.$post(args, options))
}

export async function postDescribeDeploymentJob(
  args: InferRequestType<typeof client.describeDeploymentJob.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.describeDeploymentJob.$post(args, options))
}

export async function postDescribeFleet(
  args: InferRequestType<typeof client.describeFleet.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.describeFleet.$post(args, options))
}

export async function postDescribeRobot(
  args: InferRequestType<typeof client.describeRobot.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.describeRobot.$post(args, options))
}

export async function postDescribeRobotApplication(
  args: InferRequestType<typeof client.describeRobotApplication.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.describeRobotApplication.$post(args, options))
}

export async function postDescribeSimulationApplication(
  args: InferRequestType<typeof client.describeSimulationApplication.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.describeSimulationApplication.$post(args, options))
}

export async function postDescribeSimulationJob(
  args: InferRequestType<typeof client.describeSimulationJob.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.describeSimulationJob.$post(args, options))
}

export async function postDescribeSimulationJobBatch(
  args: InferRequestType<typeof client.describeSimulationJobBatch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.describeSimulationJobBatch.$post(args, options))
}

export async function postDescribeWorld(
  args: InferRequestType<typeof client.describeWorld.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.describeWorld.$post(args, options))
}

export async function postDescribeWorldExportJob(
  args: InferRequestType<typeof client.describeWorldExportJob.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.describeWorldExportJob.$post(args, options))
}

export async function postDescribeWorldGenerationJob(
  args: InferRequestType<typeof client.describeWorldGenerationJob.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.describeWorldGenerationJob.$post(args, options))
}

export async function postDescribeWorldTemplate(
  args: InferRequestType<typeof client.describeWorldTemplate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.describeWorldTemplate.$post(args, options))
}

export async function postGetWorldTemplateBody(
  args: InferRequestType<typeof client.getWorldTemplateBody.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getWorldTemplateBody.$post(args, options))
}

export async function postListDeploymentJobs(
  args: InferRequestType<typeof client.listDeploymentJobs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listDeploymentJobs.$post(args, options))
}

export async function postListFleets(
  args: InferRequestType<typeof client.listFleets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listFleets.$post(args, options))
}

export async function postListRobotApplications(
  args: InferRequestType<typeof client.listRobotApplications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listRobotApplications.$post(args, options))
}

export async function postListRobots(
  args: InferRequestType<typeof client.listRobots.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listRobots.$post(args, options))
}

export async function postListSimulationApplications(
  args: InferRequestType<typeof client.listSimulationApplications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listSimulationApplications.$post(args, options))
}

export async function postListSimulationJobBatches(
  args: InferRequestType<typeof client.listSimulationJobBatches.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listSimulationJobBatches.$post(args, options))
}

export async function postListSimulationJobs(
  args: InferRequestType<typeof client.listSimulationJobs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listSimulationJobs.$post(args, options))
}

export async function getTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$get(args, options))
}

export async function postTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$post(args, options))
}

export async function postListWorldExportJobs(
  args: InferRequestType<typeof client.listWorldExportJobs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listWorldExportJobs.$post(args, options))
}

export async function postListWorldGenerationJobs(
  args: InferRequestType<typeof client.listWorldGenerationJobs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listWorldGenerationJobs.$post(args, options))
}

export async function postListWorldTemplates(
  args: InferRequestType<typeof client.listWorldTemplates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listWorldTemplates.$post(args, options))
}

export async function postListWorlds(
  args: InferRequestType<typeof client.listWorlds.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listWorlds.$post(args, options))
}

export async function postRegisterRobot(
  args: InferRequestType<typeof client.registerRobot.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.registerRobot.$post(args, options))
}

export async function postRestartSimulationJob(
  args: InferRequestType<typeof client.restartSimulationJob.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.restartSimulationJob.$post(args, options))
}

export async function postStartSimulationJobBatch(
  args: InferRequestType<typeof client.startSimulationJobBatch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.startSimulationJobBatch.$post(args, options))
}

export async function postSyncDeploymentJob(
  args: InferRequestType<typeof client.syncDeploymentJob.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.syncDeploymentJob.$post(args, options))
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
}

export async function postUpdateRobotApplication(
  args: InferRequestType<typeof client.updateRobotApplication.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.updateRobotApplication.$post(args, options))
}

export async function postUpdateSimulationApplication(
  args: InferRequestType<typeof client.updateSimulationApplication.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.updateSimulationApplication.$post(args, options))
}

export async function postUpdateWorldTemplate(
  args: InferRequestType<typeof client.updateWorldTemplate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.updateWorldTemplate.$post(args, options))
}
