import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetRekognitionServiceAssociateFacesHandler,
  XAmzTargetRekognitionServiceCompareFacesHandler,
  XAmzTargetRekognitionServiceCopyProjectVersionHandler,
  XAmzTargetRekognitionServiceCreateCollectionHandler,
  XAmzTargetRekognitionServiceCreateDatasetHandler,
  XAmzTargetRekognitionServiceCreateFaceLivenessSessionHandler,
  XAmzTargetRekognitionServiceCreateProjectHandler,
  XAmzTargetRekognitionServiceCreateProjectVersionHandler,
  XAmzTargetRekognitionServiceCreateStreamProcessorHandler,
  XAmzTargetRekognitionServiceCreateUserHandler,
  XAmzTargetRekognitionServiceDeleteCollectionHandler,
  XAmzTargetRekognitionServiceDeleteDatasetHandler,
  XAmzTargetRekognitionServiceDeleteFacesHandler,
  XAmzTargetRekognitionServiceDeleteProjectHandler,
  XAmzTargetRekognitionServiceDeleteProjectPolicyHandler,
  XAmzTargetRekognitionServiceDeleteProjectVersionHandler,
  XAmzTargetRekognitionServiceDeleteStreamProcessorHandler,
  XAmzTargetRekognitionServiceDeleteUserHandler,
  XAmzTargetRekognitionServiceDescribeCollectionHandler,
  XAmzTargetRekognitionServiceDescribeDatasetHandler,
  XAmzTargetRekognitionServiceDescribeProjectsHandler,
  XAmzTargetRekognitionServiceDescribeProjectVersionsHandler,
  XAmzTargetRekognitionServiceDescribeStreamProcessorHandler,
  XAmzTargetRekognitionServiceDetectCustomLabelsHandler,
  XAmzTargetRekognitionServiceDetectFacesHandler,
  XAmzTargetRekognitionServiceDetectLabelsHandler,
  XAmzTargetRekognitionServiceDetectModerationLabelsHandler,
  XAmzTargetRekognitionServiceDetectProtectiveEquipmentHandler,
  XAmzTargetRekognitionServiceDetectTextHandler,
  XAmzTargetRekognitionServiceDisassociateFacesHandler,
  XAmzTargetRekognitionServiceDistributeDatasetEntriesHandler,
  XAmzTargetRekognitionServiceGetCelebrityInfoHandler,
  XAmzTargetRekognitionServiceGetCelebrityRecognitionHandler,
  XAmzTargetRekognitionServiceGetContentModerationHandler,
  XAmzTargetRekognitionServiceGetFaceDetectionHandler,
  XAmzTargetRekognitionServiceGetFaceLivenessSessionResultsHandler,
  XAmzTargetRekognitionServiceGetFaceSearchHandler,
  XAmzTargetRekognitionServiceGetLabelDetectionHandler,
  XAmzTargetRekognitionServiceGetPersonTrackingHandler,
  XAmzTargetRekognitionServiceGetSegmentDetectionHandler,
  XAmzTargetRekognitionServiceGetTextDetectionHandler,
  XAmzTargetRekognitionServiceIndexFacesHandler,
  XAmzTargetRekognitionServiceListCollectionsHandler,
  XAmzTargetRekognitionServiceListDatasetEntriesHandler,
  XAmzTargetRekognitionServiceListDatasetLabelsHandler,
  XAmzTargetRekognitionServiceListFacesHandler,
  XAmzTargetRekognitionServiceListProjectPoliciesHandler,
  XAmzTargetRekognitionServiceListStreamProcessorsHandler,
  XAmzTargetRekognitionServiceListTagsForResourceHandler,
  XAmzTargetRekognitionServiceListUsersHandler,
  XAmzTargetRekognitionServicePutProjectPolicyHandler,
  XAmzTargetRekognitionServiceRecognizeCelebritiesHandler,
  XAmzTargetRekognitionServiceSearchFacesByImageHandler,
  XAmzTargetRekognitionServiceSearchFacesHandler,
  XAmzTargetRekognitionServiceSearchUsersByImageHandler,
  XAmzTargetRekognitionServiceSearchUsersHandler,
  XAmzTargetRekognitionServiceStartCelebrityRecognitionHandler,
  XAmzTargetRekognitionServiceStartContentModerationHandler,
  XAmzTargetRekognitionServiceStartFaceDetectionHandler,
  XAmzTargetRekognitionServiceStartFaceSearchHandler,
  XAmzTargetRekognitionServiceStartLabelDetectionHandler,
  XAmzTargetRekognitionServiceStartPersonTrackingHandler,
  XAmzTargetRekognitionServiceStartProjectVersionHandler,
  XAmzTargetRekognitionServiceStartSegmentDetectionHandler,
  XAmzTargetRekognitionServiceStartStreamProcessorHandler,
  XAmzTargetRekognitionServiceStartTextDetectionHandler,
  XAmzTargetRekognitionServiceStopProjectVersionHandler,
  XAmzTargetRekognitionServiceStopStreamProcessorHandler,
  XAmzTargetRekognitionServiceTagResourceHandler,
  XAmzTargetRekognitionServiceUntagResourceHandler,
  XAmzTargetRekognitionServiceUpdateDatasetEntriesHandler,
  XAmzTargetRekognitionServiceUpdateStreamProcessorHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetRekognitionServiceAssociateFacesHandler)
  .route('/', XAmzTargetRekognitionServiceCompareFacesHandler)
  .route('/', XAmzTargetRekognitionServiceCopyProjectVersionHandler)
  .route('/', XAmzTargetRekognitionServiceCreateCollectionHandler)
  .route('/', XAmzTargetRekognitionServiceCreateDatasetHandler)
  .route('/', XAmzTargetRekognitionServiceCreateFaceLivenessSessionHandler)
  .route('/', XAmzTargetRekognitionServiceCreateProjectHandler)
  .route('/', XAmzTargetRekognitionServiceCreateProjectVersionHandler)
  .route('/', XAmzTargetRekognitionServiceCreateStreamProcessorHandler)
  .route('/', XAmzTargetRekognitionServiceCreateUserHandler)
  .route('/', XAmzTargetRekognitionServiceDeleteCollectionHandler)
  .route('/', XAmzTargetRekognitionServiceDeleteDatasetHandler)
  .route('/', XAmzTargetRekognitionServiceDeleteFacesHandler)
  .route('/', XAmzTargetRekognitionServiceDeleteProjectHandler)
  .route('/', XAmzTargetRekognitionServiceDeleteProjectPolicyHandler)
  .route('/', XAmzTargetRekognitionServiceDeleteProjectVersionHandler)
  .route('/', XAmzTargetRekognitionServiceDeleteStreamProcessorHandler)
  .route('/', XAmzTargetRekognitionServiceDeleteUserHandler)
  .route('/', XAmzTargetRekognitionServiceDescribeCollectionHandler)
  .route('/', XAmzTargetRekognitionServiceDescribeDatasetHandler)
  .route('/', XAmzTargetRekognitionServiceDescribeProjectVersionsHandler)
  .route('/', XAmzTargetRekognitionServiceDescribeProjectsHandler)
  .route('/', XAmzTargetRekognitionServiceDescribeStreamProcessorHandler)
  .route('/', XAmzTargetRekognitionServiceDetectCustomLabelsHandler)
  .route('/', XAmzTargetRekognitionServiceDetectFacesHandler)
  .route('/', XAmzTargetRekognitionServiceDetectLabelsHandler)
  .route('/', XAmzTargetRekognitionServiceDetectModerationLabelsHandler)
  .route('/', XAmzTargetRekognitionServiceDetectProtectiveEquipmentHandler)
  .route('/', XAmzTargetRekognitionServiceDetectTextHandler)
  .route('/', XAmzTargetRekognitionServiceDisassociateFacesHandler)
  .route('/', XAmzTargetRekognitionServiceDistributeDatasetEntriesHandler)
  .route('/', XAmzTargetRekognitionServiceGetCelebrityInfoHandler)
  .route('/', XAmzTargetRekognitionServiceGetCelebrityRecognitionHandler)
  .route('/', XAmzTargetRekognitionServiceGetContentModerationHandler)
  .route('/', XAmzTargetRekognitionServiceGetFaceDetectionHandler)
  .route('/', XAmzTargetRekognitionServiceGetFaceLivenessSessionResultsHandler)
  .route('/', XAmzTargetRekognitionServiceGetFaceSearchHandler)
  .route('/', XAmzTargetRekognitionServiceGetLabelDetectionHandler)
  .route('/', XAmzTargetRekognitionServiceGetPersonTrackingHandler)
  .route('/', XAmzTargetRekognitionServiceGetSegmentDetectionHandler)
  .route('/', XAmzTargetRekognitionServiceGetTextDetectionHandler)
  .route('/', XAmzTargetRekognitionServiceIndexFacesHandler)
  .route('/', XAmzTargetRekognitionServiceListCollectionsHandler)
  .route('/', XAmzTargetRekognitionServiceListDatasetEntriesHandler)
  .route('/', XAmzTargetRekognitionServiceListDatasetLabelsHandler)
  .route('/', XAmzTargetRekognitionServiceListFacesHandler)
  .route('/', XAmzTargetRekognitionServiceListProjectPoliciesHandler)
  .route('/', XAmzTargetRekognitionServiceListStreamProcessorsHandler)
  .route('/', XAmzTargetRekognitionServiceListTagsForResourceHandler)
  .route('/', XAmzTargetRekognitionServiceListUsersHandler)
  .route('/', XAmzTargetRekognitionServicePutProjectPolicyHandler)
  .route('/', XAmzTargetRekognitionServiceRecognizeCelebritiesHandler)
  .route('/', XAmzTargetRekognitionServiceSearchFacesHandler)
  .route('/', XAmzTargetRekognitionServiceSearchFacesByImageHandler)
  .route('/', XAmzTargetRekognitionServiceSearchUsersHandler)
  .route('/', XAmzTargetRekognitionServiceSearchUsersByImageHandler)
  .route('/', XAmzTargetRekognitionServiceStartCelebrityRecognitionHandler)
  .route('/', XAmzTargetRekognitionServiceStartContentModerationHandler)
  .route('/', XAmzTargetRekognitionServiceStartFaceDetectionHandler)
  .route('/', XAmzTargetRekognitionServiceStartFaceSearchHandler)
  .route('/', XAmzTargetRekognitionServiceStartLabelDetectionHandler)
  .route('/', XAmzTargetRekognitionServiceStartPersonTrackingHandler)
  .route('/', XAmzTargetRekognitionServiceStartProjectVersionHandler)
  .route('/', XAmzTargetRekognitionServiceStartSegmentDetectionHandler)
  .route('/', XAmzTargetRekognitionServiceStartStreamProcessorHandler)
  .route('/', XAmzTargetRekognitionServiceStartTextDetectionHandler)
  .route('/', XAmzTargetRekognitionServiceStopProjectVersionHandler)
  .route('/', XAmzTargetRekognitionServiceStopStreamProcessorHandler)
  .route('/', XAmzTargetRekognitionServiceTagResourceHandler)
  .route('/', XAmzTargetRekognitionServiceUntagResourceHandler)
  .route('/', XAmzTargetRekognitionServiceUpdateDatasetEntriesHandler)
  .route('/', XAmzTargetRekognitionServiceUpdateStreamProcessorHandler)

export default app
