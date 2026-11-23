import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetRekognitionServiceAssociateFacesHandler,
  xAmzTargetRekognitionServiceCompareFacesHandler,
  xAmzTargetRekognitionServiceCopyProjectVersionHandler,
  xAmzTargetRekognitionServiceCreateCollectionHandler,
  xAmzTargetRekognitionServiceCreateDatasetHandler,
  xAmzTargetRekognitionServiceCreateFaceLivenessSessionHandler,
  xAmzTargetRekognitionServiceCreateProjectHandler,
  xAmzTargetRekognitionServiceCreateProjectVersionHandler,
  xAmzTargetRekognitionServiceCreateStreamProcessorHandler,
  xAmzTargetRekognitionServiceCreateUserHandler,
  xAmzTargetRekognitionServiceDeleteCollectionHandler,
  xAmzTargetRekognitionServiceDeleteDatasetHandler,
  xAmzTargetRekognitionServiceDeleteFacesHandler,
  xAmzTargetRekognitionServiceDeleteProjectHandler,
  xAmzTargetRekognitionServiceDeleteProjectPolicyHandler,
  xAmzTargetRekognitionServiceDeleteProjectVersionHandler,
  xAmzTargetRekognitionServiceDeleteStreamProcessorHandler,
  xAmzTargetRekognitionServiceDeleteUserHandler,
  xAmzTargetRekognitionServiceDescribeCollectionHandler,
  xAmzTargetRekognitionServiceDescribeDatasetHandler,
  xAmzTargetRekognitionServiceDescribeProjectsHandler,
  xAmzTargetRekognitionServiceDescribeProjectVersionsHandler,
  xAmzTargetRekognitionServiceDescribeStreamProcessorHandler,
  xAmzTargetRekognitionServiceDetectCustomLabelsHandler,
  xAmzTargetRekognitionServiceDetectFacesHandler,
  xAmzTargetRekognitionServiceDetectLabelsHandler,
  xAmzTargetRekognitionServiceDetectModerationLabelsHandler,
  xAmzTargetRekognitionServiceDetectProtectiveEquipmentHandler,
  xAmzTargetRekognitionServiceDetectTextHandler,
  xAmzTargetRekognitionServiceDisassociateFacesHandler,
  xAmzTargetRekognitionServiceDistributeDatasetEntriesHandler,
  xAmzTargetRekognitionServiceGetCelebrityInfoHandler,
  xAmzTargetRekognitionServiceGetCelebrityRecognitionHandler,
  xAmzTargetRekognitionServiceGetContentModerationHandler,
  xAmzTargetRekognitionServiceGetFaceDetectionHandler,
  xAmzTargetRekognitionServiceGetFaceLivenessSessionResultsHandler,
  xAmzTargetRekognitionServiceGetFaceSearchHandler,
  xAmzTargetRekognitionServiceGetLabelDetectionHandler,
  xAmzTargetRekognitionServiceGetPersonTrackingHandler,
  xAmzTargetRekognitionServiceGetSegmentDetectionHandler,
  xAmzTargetRekognitionServiceGetTextDetectionHandler,
  xAmzTargetRekognitionServiceIndexFacesHandler,
  xAmzTargetRekognitionServiceListCollectionsHandler,
  xAmzTargetRekognitionServiceListDatasetEntriesHandler,
  xAmzTargetRekognitionServiceListDatasetLabelsHandler,
  xAmzTargetRekognitionServiceListFacesHandler,
  xAmzTargetRekognitionServiceListProjectPoliciesHandler,
  xAmzTargetRekognitionServiceListStreamProcessorsHandler,
  xAmzTargetRekognitionServiceListTagsForResourceHandler,
  xAmzTargetRekognitionServiceListUsersHandler,
  xAmzTargetRekognitionServicePutProjectPolicyHandler,
  xAmzTargetRekognitionServiceRecognizeCelebritiesHandler,
  xAmzTargetRekognitionServiceSearchFacesByImageHandler,
  xAmzTargetRekognitionServiceSearchFacesHandler,
  xAmzTargetRekognitionServiceSearchUsersByImageHandler,
  xAmzTargetRekognitionServiceSearchUsersHandler,
  xAmzTargetRekognitionServiceStartCelebrityRecognitionHandler,
  xAmzTargetRekognitionServiceStartContentModerationHandler,
  xAmzTargetRekognitionServiceStartFaceDetectionHandler,
  xAmzTargetRekognitionServiceStartFaceSearchHandler,
  xAmzTargetRekognitionServiceStartLabelDetectionHandler,
  xAmzTargetRekognitionServiceStartPersonTrackingHandler,
  xAmzTargetRekognitionServiceStartProjectVersionHandler,
  xAmzTargetRekognitionServiceStartSegmentDetectionHandler,
  xAmzTargetRekognitionServiceStartStreamProcessorHandler,
  xAmzTargetRekognitionServiceStartTextDetectionHandler,
  xAmzTargetRekognitionServiceStopProjectVersionHandler,
  xAmzTargetRekognitionServiceStopStreamProcessorHandler,
  xAmzTargetRekognitionServiceTagResourceHandler,
  xAmzTargetRekognitionServiceUntagResourceHandler,
  xAmzTargetRekognitionServiceUpdateDatasetEntriesHandler,
  xAmzTargetRekognitionServiceUpdateStreamProcessorHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetRekognitionServiceAssociateFacesHandler)
  .route('/', xAmzTargetRekognitionServiceCompareFacesHandler)
  .route('/', xAmzTargetRekognitionServiceCopyProjectVersionHandler)
  .route('/', xAmzTargetRekognitionServiceCreateCollectionHandler)
  .route('/', xAmzTargetRekognitionServiceCreateDatasetHandler)
  .route('/', xAmzTargetRekognitionServiceCreateFaceLivenessSessionHandler)
  .route('/', xAmzTargetRekognitionServiceCreateProjectHandler)
  .route('/', xAmzTargetRekognitionServiceCreateProjectVersionHandler)
  .route('/', xAmzTargetRekognitionServiceCreateStreamProcessorHandler)
  .route('/', xAmzTargetRekognitionServiceCreateUserHandler)
  .route('/', xAmzTargetRekognitionServiceDeleteCollectionHandler)
  .route('/', xAmzTargetRekognitionServiceDeleteDatasetHandler)
  .route('/', xAmzTargetRekognitionServiceDeleteFacesHandler)
  .route('/', xAmzTargetRekognitionServiceDeleteProjectHandler)
  .route('/', xAmzTargetRekognitionServiceDeleteProjectPolicyHandler)
  .route('/', xAmzTargetRekognitionServiceDeleteProjectVersionHandler)
  .route('/', xAmzTargetRekognitionServiceDeleteStreamProcessorHandler)
  .route('/', xAmzTargetRekognitionServiceDeleteUserHandler)
  .route('/', xAmzTargetRekognitionServiceDescribeCollectionHandler)
  .route('/', xAmzTargetRekognitionServiceDescribeDatasetHandler)
  .route('/', xAmzTargetRekognitionServiceDescribeProjectVersionsHandler)
  .route('/', xAmzTargetRekognitionServiceDescribeProjectsHandler)
  .route('/', xAmzTargetRekognitionServiceDescribeStreamProcessorHandler)
  .route('/', xAmzTargetRekognitionServiceDetectCustomLabelsHandler)
  .route('/', xAmzTargetRekognitionServiceDetectFacesHandler)
  .route('/', xAmzTargetRekognitionServiceDetectLabelsHandler)
  .route('/', xAmzTargetRekognitionServiceDetectModerationLabelsHandler)
  .route('/', xAmzTargetRekognitionServiceDetectProtectiveEquipmentHandler)
  .route('/', xAmzTargetRekognitionServiceDetectTextHandler)
  .route('/', xAmzTargetRekognitionServiceDisassociateFacesHandler)
  .route('/', xAmzTargetRekognitionServiceDistributeDatasetEntriesHandler)
  .route('/', xAmzTargetRekognitionServiceGetCelebrityInfoHandler)
  .route('/', xAmzTargetRekognitionServiceGetCelebrityRecognitionHandler)
  .route('/', xAmzTargetRekognitionServiceGetContentModerationHandler)
  .route('/', xAmzTargetRekognitionServiceGetFaceDetectionHandler)
  .route('/', xAmzTargetRekognitionServiceGetFaceLivenessSessionResultsHandler)
  .route('/', xAmzTargetRekognitionServiceGetFaceSearchHandler)
  .route('/', xAmzTargetRekognitionServiceGetLabelDetectionHandler)
  .route('/', xAmzTargetRekognitionServiceGetPersonTrackingHandler)
  .route('/', xAmzTargetRekognitionServiceGetSegmentDetectionHandler)
  .route('/', xAmzTargetRekognitionServiceGetTextDetectionHandler)
  .route('/', xAmzTargetRekognitionServiceIndexFacesHandler)
  .route('/', xAmzTargetRekognitionServiceListCollectionsHandler)
  .route('/', xAmzTargetRekognitionServiceListDatasetEntriesHandler)
  .route('/', xAmzTargetRekognitionServiceListDatasetLabelsHandler)
  .route('/', xAmzTargetRekognitionServiceListFacesHandler)
  .route('/', xAmzTargetRekognitionServiceListProjectPoliciesHandler)
  .route('/', xAmzTargetRekognitionServiceListStreamProcessorsHandler)
  .route('/', xAmzTargetRekognitionServiceListTagsForResourceHandler)
  .route('/', xAmzTargetRekognitionServiceListUsersHandler)
  .route('/', xAmzTargetRekognitionServicePutProjectPolicyHandler)
  .route('/', xAmzTargetRekognitionServiceRecognizeCelebritiesHandler)
  .route('/', xAmzTargetRekognitionServiceSearchFacesHandler)
  .route('/', xAmzTargetRekognitionServiceSearchFacesByImageHandler)
  .route('/', xAmzTargetRekognitionServiceSearchUsersHandler)
  .route('/', xAmzTargetRekognitionServiceSearchUsersByImageHandler)
  .route('/', xAmzTargetRekognitionServiceStartCelebrityRecognitionHandler)
  .route('/', xAmzTargetRekognitionServiceStartContentModerationHandler)
  .route('/', xAmzTargetRekognitionServiceStartFaceDetectionHandler)
  .route('/', xAmzTargetRekognitionServiceStartFaceSearchHandler)
  .route('/', xAmzTargetRekognitionServiceStartLabelDetectionHandler)
  .route('/', xAmzTargetRekognitionServiceStartPersonTrackingHandler)
  .route('/', xAmzTargetRekognitionServiceStartProjectVersionHandler)
  .route('/', xAmzTargetRekognitionServiceStartSegmentDetectionHandler)
  .route('/', xAmzTargetRekognitionServiceStartStreamProcessorHandler)
  .route('/', xAmzTargetRekognitionServiceStartTextDetectionHandler)
  .route('/', xAmzTargetRekognitionServiceStopProjectVersionHandler)
  .route('/', xAmzTargetRekognitionServiceStopStreamProcessorHandler)
  .route('/', xAmzTargetRekognitionServiceTagResourceHandler)
  .route('/', xAmzTargetRekognitionServiceUntagResourceHandler)
  .route('/', xAmzTargetRekognitionServiceUpdateDatasetEntriesHandler)
  .route('/', xAmzTargetRekognitionServiceUpdateStreamProcessorHandler)

export default app
