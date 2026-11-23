import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChannelsChannelNameRoute,
  deleteDatasetsDatasetNameContentRoute,
  deleteDatasetsDatasetNameRoute,
  deleteDatastoresDatastoreNameRoute,
  deletePipelinesPipelineNameReprocessingReprocessingIdRoute,
  deletePipelinesPipelineNameRoute,
  deleteTagsResourceArnTagKeysRoute,
  getChannelsChannelNameRoute,
  getChannelsChannelNameSampleRoute,
  getChannelsRoute,
  getDatasetsDatasetNameContentRoute,
  getDatasetsDatasetNameContentsRoute,
  getDatasetsDatasetNameRoute,
  getDatasetsRoute,
  getDatastoresDatastoreNameRoute,
  getDatastoresRoute,
  getLoggingRoute,
  getPipelinesPipelineNameRoute,
  getPipelinesRoute,
  getTagsResourceArnRoute,
  postChannelsRoute,
  postDatasetsDatasetNameContentRoute,
  postDatasetsRoute,
  postDatastoresRoute,
  postMessagesBatchRoute,
  postPipelineactivitiesRunRoute,
  postPipelinesPipelineNameReprocessingRoute,
  postPipelinesRoute,
  postTagsResourceArnRoute,
  putChannelsChannelNameRoute,
  putDatasetsDatasetNameRoute,
  putDatastoresDatastoreNameRoute,
  putLoggingRoute,
  putPipelinesPipelineNameRoute,
} from './routes'
import {
  deleteChannelsChannelNameRouteHandler,
  deleteDatasetsDatasetNameContentRouteHandler,
  deleteDatasetsDatasetNameRouteHandler,
  deleteDatastoresDatastoreNameRouteHandler,
  deletePipelinesPipelineNameReprocessingReprocessingIdRouteHandler,
  deletePipelinesPipelineNameRouteHandler,
  deleteTagsResourceArnTagKeysRouteHandler,
  getChannelsChannelNameRouteHandler,
  getChannelsChannelNameSampleRouteHandler,
  getChannelsRouteHandler,
  getDatasetsDatasetNameContentRouteHandler,
  getDatasetsDatasetNameContentsRouteHandler,
  getDatasetsDatasetNameRouteHandler,
  getDatasetsRouteHandler,
  getDatastoresDatastoreNameRouteHandler,
  getDatastoresRouteHandler,
  getLoggingRouteHandler,
  getPipelinesPipelineNameRouteHandler,
  getPipelinesRouteHandler,
  getTagsResourceArnRouteHandler,
  postChannelsRouteHandler,
  postDatasetsDatasetNameContentRouteHandler,
  postDatasetsRouteHandler,
  postDatastoresRouteHandler,
  postMessagesBatchRouteHandler,
  postPipelineactivitiesRunRouteHandler,
  postPipelinesPipelineNameReprocessingRouteHandler,
  postPipelinesRouteHandler,
  postTagsResourceArnRouteHandler,
  putChannelsChannelNameRouteHandler,
  putDatasetsDatasetNameRouteHandler,
  putDatastoresDatastoreNameRouteHandler,
  putLoggingRouteHandler,
  putPipelinesPipelineNameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postMessagesBatchRoute, postMessagesBatchRouteHandler)
  .openapi(
    deletePipelinesPipelineNameReprocessingReprocessingIdRoute,
    deletePipelinesPipelineNameReprocessingReprocessingIdRouteHandler,
  )
  .openapi(postChannelsRoute, postChannelsRouteHandler)
  .openapi(getChannelsRoute, getChannelsRouteHandler)
  .openapi(postDatasetsRoute, postDatasetsRouteHandler)
  .openapi(getDatasetsRoute, getDatasetsRouteHandler)
  .openapi(postDatasetsDatasetNameContentRoute, postDatasetsDatasetNameContentRouteHandler)
  .openapi(deleteDatasetsDatasetNameContentRoute, deleteDatasetsDatasetNameContentRouteHandler)
  .openapi(getDatasetsDatasetNameContentRoute, getDatasetsDatasetNameContentRouteHandler)
  .openapi(postDatastoresRoute, postDatastoresRouteHandler)
  .openapi(getDatastoresRoute, getDatastoresRouteHandler)
  .openapi(postPipelinesRoute, postPipelinesRouteHandler)
  .openapi(getPipelinesRoute, getPipelinesRouteHandler)
  .openapi(deleteChannelsChannelNameRoute, deleteChannelsChannelNameRouteHandler)
  .openapi(getChannelsChannelNameRoute, getChannelsChannelNameRouteHandler)
  .openapi(putChannelsChannelNameRoute, putChannelsChannelNameRouteHandler)
  .openapi(deleteDatasetsDatasetNameRoute, deleteDatasetsDatasetNameRouteHandler)
  .openapi(getDatasetsDatasetNameRoute, getDatasetsDatasetNameRouteHandler)
  .openapi(putDatasetsDatasetNameRoute, putDatasetsDatasetNameRouteHandler)
  .openapi(deleteDatastoresDatastoreNameRoute, deleteDatastoresDatastoreNameRouteHandler)
  .openapi(getDatastoresDatastoreNameRoute, getDatastoresDatastoreNameRouteHandler)
  .openapi(putDatastoresDatastoreNameRoute, putDatastoresDatastoreNameRouteHandler)
  .openapi(deletePipelinesPipelineNameRoute, deletePipelinesPipelineNameRouteHandler)
  .openapi(getPipelinesPipelineNameRoute, getPipelinesPipelineNameRouteHandler)
  .openapi(putPipelinesPipelineNameRoute, putPipelinesPipelineNameRouteHandler)
  .openapi(getLoggingRoute, getLoggingRouteHandler)
  .openapi(putLoggingRoute, putLoggingRouteHandler)
  .openapi(getDatasetsDatasetNameContentsRoute, getDatasetsDatasetNameContentsRouteHandler)
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(postPipelineactivitiesRunRoute, postPipelineactivitiesRunRouteHandler)
  .openapi(getChannelsChannelNameSampleRoute, getChannelsChannelNameSampleRouteHandler)
  .openapi(
    postPipelinesPipelineNameReprocessingRoute,
    postPipelinesPipelineNameReprocessingRouteHandler,
  )
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)

export default app
