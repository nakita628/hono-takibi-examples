import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAiTestsSchedulesV1CronJobsIdRoute,
  deleteAiTestsTestFrameworkV1AiagentsIdRoute,
  deleteAiTestsTestFrameworkV1MetricsIdRoute,
  deleteAiTestsTestFrameworkV1ResultsIdRoute,
  deleteAiTestsTestFrameworkV1ScenariosIdRoute,
  getAiTestsSchedulesV1CronJobsIdRoute,
  getAiTestsSchedulesV1CronJobsRoute,
  getAiTestsTestFrameworkV1AiagentsIdRoute,
  getAiTestsTestFrameworkV1AiagentsRoute,
  getAiTestsTestFrameworkV1MetricsGenerateMetricsProgressRoute,
  getAiTestsTestFrameworkV1MetricsIdRoute,
  getAiTestsTestFrameworkV1MetricsRoute,
  getAiTestsTestFrameworkV1PersonalitiesRoute,
  getAiTestsTestFrameworkV1ResultsIdRoute,
  getAiTestsTestFrameworkV1ResultsRoute,
  getAiTestsTestFrameworkV1ScenariosExportScenariosRoute,
  getAiTestsTestFrameworkV1ScenariosGenerateProgressRoute,
  getAiTestsTestFrameworkV1ScenariosIdRoute,
  getAiTestsTestFrameworkV1ScenariosRoute,
  getAiTestsTestFrameworkV1ScenariosScenarioAgentProgressRoute,
  patchAiTestsSchedulesV1CronJobsIdRoute,
  patchAiTestsTestFrameworkV1MetricsIdRoute,
  patchAiTestsTestFrameworkV1ScenariosIdRoute,
  postAiTestsSchedulesV1CronJobsRoute,
  postAiTestsTestFrameworkV1AiagentsRoute,
  postAiTestsTestFrameworkV1MetricsBulkCreateRoute,
  postAiTestsTestFrameworkV1MetricsGenerateMetricsRoute,
  postAiTestsTestFrameworkV1MetricsRoute,
  postAiTestsTestFrameworkV1ResultsIdRerunRoute,
  postAiTestsTestFrameworkV1ScenariosGenerateBgRoute,
  postAiTestsTestFrameworkV1ScenariosRoute,
  postAiTestsTestFrameworkV1ScenariosRunScenariosRoute,
  postAiTestsTestFrameworkV1ScenariosScenarioAgentRoute,
  putAiTestsTestFrameworkV1AiagentsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aiTestsHandler = app
  .openapi(getAiTestsSchedulesV1CronJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiTestsSchedulesV1CronJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiTestsSchedulesV1CronJobsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiTestsSchedulesV1CronJobsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAiTestsSchedulesV1CronJobsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiTestsTestFrameworkV1AiagentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiTestsTestFrameworkV1AiagentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiTestsTestFrameworkV1AiagentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiTestsTestFrameworkV1AiagentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAiTestsTestFrameworkV1AiagentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiTestsTestFrameworkV1MetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiTestsTestFrameworkV1MetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiTestsTestFrameworkV1MetricsBulkCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiTestsTestFrameworkV1MetricsGenerateMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiTestsTestFrameworkV1MetricsGenerateMetricsProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiTestsTestFrameworkV1MetricsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiTestsTestFrameworkV1MetricsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAiTestsTestFrameworkV1MetricsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiTestsTestFrameworkV1PersonalitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiTestsTestFrameworkV1ResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiTestsTestFrameworkV1ResultsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiTestsTestFrameworkV1ResultsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiTestsTestFrameworkV1ResultsIdRerunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiTestsTestFrameworkV1ScenariosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiTestsTestFrameworkV1ScenariosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiTestsTestFrameworkV1ScenariosExportScenariosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiTestsTestFrameworkV1ScenariosGenerateBgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiTestsTestFrameworkV1ScenariosGenerateProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiTestsTestFrameworkV1ScenariosRunScenariosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiTestsTestFrameworkV1ScenariosScenarioAgentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiTestsTestFrameworkV1ScenariosScenarioAgentProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiTestsTestFrameworkV1ScenariosIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiTestsTestFrameworkV1ScenariosIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAiTestsTestFrameworkV1ScenariosIdRoute, (c) => {
    throw new Error('Not implemented')
  })
