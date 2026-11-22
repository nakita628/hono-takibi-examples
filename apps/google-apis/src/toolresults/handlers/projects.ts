import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getToolresultsV1beta3NameAccessibilityClustersRoute,
  getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClustersClusterIdRoute,
  getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClustersRoute,
  getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironmentsEnvironmentIdRoute,
  getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironmentsRoute,
  getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdRoute,
  getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsRoute,
  getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfMetricsSummaryRoute,
  getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesRoute,
  getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdRoute,
  getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdSamplesRoute,
  getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdRoute,
  getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCasesRoute,
  getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCasesTestCaseIdRoute,
  getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdThumbnailsRoute,
  getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsRoute,
  getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdRoute,
  getToolresultsV1beta3ProjectsProjectIdHistoriesRoute,
  getToolresultsV1beta3ProjectsProjectIdSettingsRoute,
  patchToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdRoute,
  patchToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdRoute,
  postToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsRoute,
  postToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfMetricsSummaryRoute,
  postToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesRoute,
  postToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdSamplesBatchCreateRoute,
  postToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPublishXunitXmlFilesRoute,
  postToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsRoute,
  postToolresultsV1beta3ProjectsProjectIdHistoriesRoute,
  postToolresultsV1beta3ProjectsProjectIdInitializeSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getToolresultsV1beta3ProjectsProjectIdHistoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolresultsV1beta3ProjectsProjectIdHistoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClustersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClustersClusterIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironmentsEnvironmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfMetricsSummaryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfMetricsSummaryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdSamplesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdSamplesBatchCreateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCasesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCasesTestCaseIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdThumbnailsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPublishXunitXmlFilesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getToolresultsV1beta3ProjectsProjectIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolresultsV1beta3ProjectsProjectIdInitializeSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolresultsV1beta3NameAccessibilityClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
