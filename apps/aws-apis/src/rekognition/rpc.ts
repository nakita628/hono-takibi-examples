import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetRekognitionServiceAssociateFaces(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.AssociateFaces']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.AssociateFaces'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceCompareFaces(
  args: InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.CompareFaces']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.CompareFaces'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceCopyProjectVersion(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.CopyProjectVersion']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.CopyProjectVersion'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceCreateCollection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.CreateCollection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.CreateCollection'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceCreateDataset(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.CreateDataset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.CreateDataset'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceCreateFaceLivenessSession(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.CreateFaceLivenessSession']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.CreateFaceLivenessSession'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceCreateProject(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.CreateProject']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.CreateProject'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceCreateProjectVersion(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.CreateProjectVersion']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.CreateProjectVersion'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceCreateStreamProcessor(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.CreateStreamProcessor']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.CreateStreamProcessor'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceCreateUser(
  args: InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.CreateUser']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.CreateUser'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceDeleteCollection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.DeleteCollection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.DeleteCollection'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceDeleteDataset(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.DeleteDataset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.DeleteDataset'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceDeleteFaces(
  args: InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.DeleteFaces']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.DeleteFaces'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceDeleteProject(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.DeleteProject']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.DeleteProject'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceDeleteProjectPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.DeleteProjectPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.DeleteProjectPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceDeleteProjectVersion(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.DeleteProjectVersion']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.DeleteProjectVersion'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceDeleteStreamProcessor(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.DeleteStreamProcessor']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.DeleteStreamProcessor'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceDeleteUser(
  args: InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.DeleteUser']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.DeleteUser'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceDescribeCollection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.DescribeCollection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.DescribeCollection'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceDescribeDataset(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.DescribeDataset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.DescribeDataset'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceDescribeProjectVersions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.DescribeProjectVersions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.DescribeProjectVersions'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceDescribeProjects(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.DescribeProjects']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.DescribeProjects'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceDescribeStreamProcessor(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.DescribeStreamProcessor']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.DescribeStreamProcessor'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceDetectCustomLabels(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.DetectCustomLabels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.DetectCustomLabels'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceDetectFaces(
  args: InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.DetectFaces']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.DetectFaces'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceDetectLabels(
  args: InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.DetectLabels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.DetectLabels'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceDetectModerationLabels(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.DetectModerationLabels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.DetectModerationLabels'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceDetectProtectiveEquipment(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.DetectProtectiveEquipment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.DetectProtectiveEquipment'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceDetectText(
  args: InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.DetectText']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.DetectText'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceDisassociateFaces(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.DisassociateFaces']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.DisassociateFaces'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceDistributeDatasetEntries(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.DistributeDatasetEntries']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.DistributeDatasetEntries'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceGetCelebrityInfo(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.GetCelebrityInfo']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.GetCelebrityInfo'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceGetCelebrityRecognition(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.GetCelebrityRecognition']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.GetCelebrityRecognition'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceGetContentModeration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.GetContentModeration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.GetContentModeration'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceGetFaceDetection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.GetFaceDetection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.GetFaceDetection'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceGetFaceLivenessSessionResults(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.GetFaceLivenessSessionResults']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.GetFaceLivenessSessionResults'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceGetFaceSearch(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.GetFaceSearch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.GetFaceSearch'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceGetLabelDetection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.GetLabelDetection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.GetLabelDetection'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceGetPersonTracking(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.GetPersonTracking']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.GetPersonTracking'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceGetSegmentDetection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.GetSegmentDetection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.GetSegmentDetection'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceGetTextDetection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.GetTextDetection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.GetTextDetection'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceIndexFaces(
  args: InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.IndexFaces']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.IndexFaces'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceListCollections(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.ListCollections']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.ListCollections'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceListDatasetEntries(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.ListDatasetEntries']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.ListDatasetEntries'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceListDatasetLabels(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.ListDatasetLabels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.ListDatasetLabels'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceListFaces(
  args: InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.ListFaces']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.ListFaces'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceListProjectPolicies(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.ListProjectPolicies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.ListProjectPolicies'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceListStreamProcessors(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.ListStreamProcessors']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.ListStreamProcessors'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceListUsers(
  args: InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.ListUsers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.ListUsers'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServicePutProjectPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.PutProjectPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.PutProjectPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceRecognizeCelebrities(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.RecognizeCelebrities']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.RecognizeCelebrities'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceSearchFaces(
  args: InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.SearchFaces']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.SearchFaces'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceSearchFacesByImage(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.SearchFacesByImage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.SearchFacesByImage'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceSearchUsers(
  args: InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.SearchUsers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.SearchUsers'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceSearchUsersByImage(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.SearchUsersByImage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.SearchUsersByImage'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceStartCelebrityRecognition(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.StartCelebrityRecognition']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.StartCelebrityRecognition'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceStartContentModeration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.StartContentModeration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.StartContentModeration'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceStartFaceDetection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.StartFaceDetection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.StartFaceDetection'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceStartFaceSearch(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.StartFaceSearch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.StartFaceSearch'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceStartLabelDetection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.StartLabelDetection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.StartLabelDetection'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceStartPersonTracking(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.StartPersonTracking']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.StartPersonTracking'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceStartProjectVersion(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.StartProjectVersion']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.StartProjectVersion'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceStartSegmentDetection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.StartSegmentDetection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.StartSegmentDetection'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceStartStreamProcessor(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.StartStreamProcessor']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.StartStreamProcessor'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceStartTextDetection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.StartTextDetection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.StartTextDetection'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceStopProjectVersion(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.StopProjectVersion']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.StopProjectVersion'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceStopStreamProcessor(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.StopStreamProcessor']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.StopStreamProcessor'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceTagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.TagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceUntagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.UntagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceUpdateDatasetEntries(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.UpdateDatasetEntries']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.UpdateDatasetEntries'].$post(args, options),
  )
}

export async function postXAmzTargetRekognitionServiceUpdateStreamProcessor(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=RekognitionService.UpdateStreamProcessor']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=RekognitionService.UpdateStreamProcessor'].$post(args, options),
  )
}
