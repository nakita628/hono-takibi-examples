import { OpenAPIHono } from '@hono/zod-openapi'
import {
  batchDeleteWorldsHandler,
  batchDescribeSimulationJobHandler,
  cancelDeploymentJobHandler,
  cancelSimulationJobBatchHandler,
  cancelSimulationJobHandler,
  cancelWorldExportJobHandler,
  cancelWorldGenerationJobHandler,
  createDeploymentJobHandler,
  createFleetHandler,
  createRobotApplicationHandler,
  createRobotApplicationVersionHandler,
  createRobotHandler,
  createSimulationApplicationHandler,
  createSimulationApplicationVersionHandler,
  createSimulationJobHandler,
  createWorldExportJobHandler,
  createWorldGenerationJobHandler,
  createWorldTemplateHandler,
  deleteFleetHandler,
  deleteRobotApplicationHandler,
  deleteRobotHandler,
  deleteSimulationApplicationHandler,
  deleteWorldTemplateHandler,
  deregisterRobotHandler,
  describeDeploymentJobHandler,
  describeFleetHandler,
  describeRobotApplicationHandler,
  describeRobotHandler,
  describeSimulationApplicationHandler,
  describeSimulationJobBatchHandler,
  describeSimulationJobHandler,
  describeWorldExportJobHandler,
  describeWorldGenerationJobHandler,
  describeWorldHandler,
  describeWorldTemplateHandler,
  getWorldTemplateBodyHandler,
  listDeploymentJobsHandler,
  listFleetsHandler,
  listRobotApplicationsHandler,
  listRobotsHandler,
  listSimulationApplicationsHandler,
  listSimulationJobBatchesHandler,
  listSimulationJobsHandler,
  listWorldExportJobsHandler,
  listWorldGenerationJobsHandler,
  listWorldsHandler,
  listWorldTemplatesHandler,
  registerRobotHandler,
  restartSimulationJobHandler,
  startSimulationJobBatchHandler,
  syncDeploymentJobHandler,
  tagsHandler,
  updateRobotApplicationHandler,
  updateSimulationApplicationHandler,
  updateWorldTemplateHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', batchDeleteWorldsHandler)
  .route('/', batchDescribeSimulationJobHandler)
  .route('/', cancelDeploymentJobHandler)
  .route('/', cancelSimulationJobHandler)
  .route('/', cancelSimulationJobBatchHandler)
  .route('/', cancelWorldExportJobHandler)
  .route('/', cancelWorldGenerationJobHandler)
  .route('/', createDeploymentJobHandler)
  .route('/', createFleetHandler)
  .route('/', createRobotHandler)
  .route('/', createRobotApplicationHandler)
  .route('/', createRobotApplicationVersionHandler)
  .route('/', createSimulationApplicationHandler)
  .route('/', createSimulationApplicationVersionHandler)
  .route('/', createSimulationJobHandler)
  .route('/', createWorldExportJobHandler)
  .route('/', createWorldGenerationJobHandler)
  .route('/', createWorldTemplateHandler)
  .route('/', deleteFleetHandler)
  .route('/', deleteRobotHandler)
  .route('/', deleteRobotApplicationHandler)
  .route('/', deleteSimulationApplicationHandler)
  .route('/', deleteWorldTemplateHandler)
  .route('/', deregisterRobotHandler)
  .route('/', describeDeploymentJobHandler)
  .route('/', describeFleetHandler)
  .route('/', describeRobotHandler)
  .route('/', describeRobotApplicationHandler)
  .route('/', describeSimulationApplicationHandler)
  .route('/', describeSimulationJobHandler)
  .route('/', describeSimulationJobBatchHandler)
  .route('/', describeWorldHandler)
  .route('/', describeWorldExportJobHandler)
  .route('/', describeWorldGenerationJobHandler)
  .route('/', describeWorldTemplateHandler)
  .route('/', getWorldTemplateBodyHandler)
  .route('/', listDeploymentJobsHandler)
  .route('/', listFleetsHandler)
  .route('/', listRobotApplicationsHandler)
  .route('/', listRobotsHandler)
  .route('/', listSimulationApplicationsHandler)
  .route('/', listSimulationJobBatchesHandler)
  .route('/', listSimulationJobsHandler)
  .route('/', tagsHandler)
  .route('/', listWorldExportJobsHandler)
  .route('/', listWorldGenerationJobsHandler)
  .route('/', listWorldTemplatesHandler)
  .route('/', listWorldsHandler)
  .route('/', registerRobotHandler)
  .route('/', restartSimulationJobHandler)
  .route('/', startSimulationJobBatchHandler)
  .route('/', syncDeploymentJobHandler)
  .route('/', updateRobotApplicationHandler)
  .route('/', updateSimulationApplicationHandler)
  .route('/', updateWorldTemplateHandler)

export default app
