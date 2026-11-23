import { injectMutation, mutationOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetRekognitionServiceAssociateFacesKey() {
  return ['#X-Amz-Target=RekognitionService.AssociateFaces'] as const
}

export function getXAmzTargetRekognitionServiceCompareFacesKey() {
  return ['#X-Amz-Target=RekognitionService.CompareFaces'] as const
}

export function getXAmzTargetRekognitionServiceCopyProjectVersionKey() {
  return ['#X-Amz-Target=RekognitionService.CopyProjectVersion'] as const
}

export function getXAmzTargetRekognitionServiceCreateCollectionKey() {
  return ['#X-Amz-Target=RekognitionService.CreateCollection'] as const
}

export function getXAmzTargetRekognitionServiceCreateDatasetKey() {
  return ['#X-Amz-Target=RekognitionService.CreateDataset'] as const
}

export function getXAmzTargetRekognitionServiceCreateFaceLivenessSessionKey() {
  return ['#X-Amz-Target=RekognitionService.CreateFaceLivenessSession'] as const
}

export function getXAmzTargetRekognitionServiceCreateProjectKey() {
  return ['#X-Amz-Target=RekognitionService.CreateProject'] as const
}

export function getXAmzTargetRekognitionServiceCreateProjectVersionKey() {
  return ['#X-Amz-Target=RekognitionService.CreateProjectVersion'] as const
}

export function getXAmzTargetRekognitionServiceCreateStreamProcessorKey() {
  return ['#X-Amz-Target=RekognitionService.CreateStreamProcessor'] as const
}

export function getXAmzTargetRekognitionServiceCreateUserKey() {
  return ['#X-Amz-Target=RekognitionService.CreateUser'] as const
}

export function getXAmzTargetRekognitionServiceDeleteCollectionKey() {
  return ['#X-Amz-Target=RekognitionService.DeleteCollection'] as const
}

export function getXAmzTargetRekognitionServiceDeleteDatasetKey() {
  return ['#X-Amz-Target=RekognitionService.DeleteDataset'] as const
}

export function getXAmzTargetRekognitionServiceDeleteFacesKey() {
  return ['#X-Amz-Target=RekognitionService.DeleteFaces'] as const
}

export function getXAmzTargetRekognitionServiceDeleteProjectKey() {
  return ['#X-Amz-Target=RekognitionService.DeleteProject'] as const
}

export function getXAmzTargetRekognitionServiceDeleteProjectPolicyKey() {
  return ['#X-Amz-Target=RekognitionService.DeleteProjectPolicy'] as const
}

export function getXAmzTargetRekognitionServiceDeleteProjectVersionKey() {
  return ['#X-Amz-Target=RekognitionService.DeleteProjectVersion'] as const
}

export function getXAmzTargetRekognitionServiceDeleteStreamProcessorKey() {
  return ['#X-Amz-Target=RekognitionService.DeleteStreamProcessor'] as const
}

export function getXAmzTargetRekognitionServiceDeleteUserKey() {
  return ['#X-Amz-Target=RekognitionService.DeleteUser'] as const
}

export function getXAmzTargetRekognitionServiceDescribeCollectionKey() {
  return ['#X-Amz-Target=RekognitionService.DescribeCollection'] as const
}

export function getXAmzTargetRekognitionServiceDescribeDatasetKey() {
  return ['#X-Amz-Target=RekognitionService.DescribeDataset'] as const
}

export function getXAmzTargetRekognitionServiceDescribeProjectVersionsKey() {
  return ['#X-Amz-Target=RekognitionService.DescribeProjectVersions'] as const
}

export function getXAmzTargetRekognitionServiceDescribeProjectsKey() {
  return ['#X-Amz-Target=RekognitionService.DescribeProjects'] as const
}

export function getXAmzTargetRekognitionServiceDescribeStreamProcessorKey() {
  return ['#X-Amz-Target=RekognitionService.DescribeStreamProcessor'] as const
}

export function getXAmzTargetRekognitionServiceDetectCustomLabelsKey() {
  return ['#X-Amz-Target=RekognitionService.DetectCustomLabels'] as const
}

export function getXAmzTargetRekognitionServiceDetectFacesKey() {
  return ['#X-Amz-Target=RekognitionService.DetectFaces'] as const
}

export function getXAmzTargetRekognitionServiceDetectLabelsKey() {
  return ['#X-Amz-Target=RekognitionService.DetectLabels'] as const
}

export function getXAmzTargetRekognitionServiceDetectModerationLabelsKey() {
  return ['#X-Amz-Target=RekognitionService.DetectModerationLabels'] as const
}

export function getXAmzTargetRekognitionServiceDetectProtectiveEquipmentKey() {
  return ['#X-Amz-Target=RekognitionService.DetectProtectiveEquipment'] as const
}

export function getXAmzTargetRekognitionServiceDetectTextKey() {
  return ['#X-Amz-Target=RekognitionService.DetectText'] as const
}

export function getXAmzTargetRekognitionServiceDisassociateFacesKey() {
  return ['#X-Amz-Target=RekognitionService.DisassociateFaces'] as const
}

export function getXAmzTargetRekognitionServiceDistributeDatasetEntriesKey() {
  return ['#X-Amz-Target=RekognitionService.DistributeDatasetEntries'] as const
}

export function getXAmzTargetRekognitionServiceGetCelebrityInfoKey() {
  return ['#X-Amz-Target=RekognitionService.GetCelebrityInfo'] as const
}

export function getXAmzTargetRekognitionServiceGetCelebrityRecognitionKey() {
  return ['#X-Amz-Target=RekognitionService.GetCelebrityRecognition'] as const
}

export function getXAmzTargetRekognitionServiceGetContentModerationKey() {
  return ['#X-Amz-Target=RekognitionService.GetContentModeration'] as const
}

export function getXAmzTargetRekognitionServiceGetFaceDetectionKey() {
  return ['#X-Amz-Target=RekognitionService.GetFaceDetection'] as const
}

export function getXAmzTargetRekognitionServiceGetFaceLivenessSessionResultsKey() {
  return ['#X-Amz-Target=RekognitionService.GetFaceLivenessSessionResults'] as const
}

export function getXAmzTargetRekognitionServiceGetFaceSearchKey() {
  return ['#X-Amz-Target=RekognitionService.GetFaceSearch'] as const
}

export function getXAmzTargetRekognitionServiceGetLabelDetectionKey() {
  return ['#X-Amz-Target=RekognitionService.GetLabelDetection'] as const
}

export function getXAmzTargetRekognitionServiceGetPersonTrackingKey() {
  return ['#X-Amz-Target=RekognitionService.GetPersonTracking'] as const
}

export function getXAmzTargetRekognitionServiceGetSegmentDetectionKey() {
  return ['#X-Amz-Target=RekognitionService.GetSegmentDetection'] as const
}

export function getXAmzTargetRekognitionServiceGetTextDetectionKey() {
  return ['#X-Amz-Target=RekognitionService.GetTextDetection'] as const
}

export function getXAmzTargetRekognitionServiceIndexFacesKey() {
  return ['#X-Amz-Target=RekognitionService.IndexFaces'] as const
}

export function getXAmzTargetRekognitionServiceListCollectionsKey() {
  return ['#X-Amz-Target=RekognitionService.ListCollections'] as const
}

export function getXAmzTargetRekognitionServiceListDatasetEntriesKey() {
  return ['#X-Amz-Target=RekognitionService.ListDatasetEntries'] as const
}

export function getXAmzTargetRekognitionServiceListDatasetLabelsKey() {
  return ['#X-Amz-Target=RekognitionService.ListDatasetLabels'] as const
}

export function getXAmzTargetRekognitionServiceListFacesKey() {
  return ['#X-Amz-Target=RekognitionService.ListFaces'] as const
}

export function getXAmzTargetRekognitionServiceListProjectPoliciesKey() {
  return ['#X-Amz-Target=RekognitionService.ListProjectPolicies'] as const
}

export function getXAmzTargetRekognitionServiceListStreamProcessorsKey() {
  return ['#X-Amz-Target=RekognitionService.ListStreamProcessors'] as const
}

export function getXAmzTargetRekognitionServiceListTagsForResourceKey() {
  return ['#X-Amz-Target=RekognitionService.ListTagsForResource'] as const
}

export function getXAmzTargetRekognitionServiceListUsersKey() {
  return ['#X-Amz-Target=RekognitionService.ListUsers'] as const
}

export function getXAmzTargetRekognitionServicePutProjectPolicyKey() {
  return ['#X-Amz-Target=RekognitionService.PutProjectPolicy'] as const
}

export function getXAmzTargetRekognitionServiceRecognizeCelebritiesKey() {
  return ['#X-Amz-Target=RekognitionService.RecognizeCelebrities'] as const
}

export function getXAmzTargetRekognitionServiceSearchFacesKey() {
  return ['#X-Amz-Target=RekognitionService.SearchFaces'] as const
}

export function getXAmzTargetRekognitionServiceSearchFacesByImageKey() {
  return ['#X-Amz-Target=RekognitionService.SearchFacesByImage'] as const
}

export function getXAmzTargetRekognitionServiceSearchUsersKey() {
  return ['#X-Amz-Target=RekognitionService.SearchUsers'] as const
}

export function getXAmzTargetRekognitionServiceSearchUsersByImageKey() {
  return ['#X-Amz-Target=RekognitionService.SearchUsersByImage'] as const
}

export function getXAmzTargetRekognitionServiceStartCelebrityRecognitionKey() {
  return ['#X-Amz-Target=RekognitionService.StartCelebrityRecognition'] as const
}

export function getXAmzTargetRekognitionServiceStartContentModerationKey() {
  return ['#X-Amz-Target=RekognitionService.StartContentModeration'] as const
}

export function getXAmzTargetRekognitionServiceStartFaceDetectionKey() {
  return ['#X-Amz-Target=RekognitionService.StartFaceDetection'] as const
}

export function getXAmzTargetRekognitionServiceStartFaceSearchKey() {
  return ['#X-Amz-Target=RekognitionService.StartFaceSearch'] as const
}

export function getXAmzTargetRekognitionServiceStartLabelDetectionKey() {
  return ['#X-Amz-Target=RekognitionService.StartLabelDetection'] as const
}

export function getXAmzTargetRekognitionServiceStartPersonTrackingKey() {
  return ['#X-Amz-Target=RekognitionService.StartPersonTracking'] as const
}

export function getXAmzTargetRekognitionServiceStartProjectVersionKey() {
  return ['#X-Amz-Target=RekognitionService.StartProjectVersion'] as const
}

export function getXAmzTargetRekognitionServiceStartSegmentDetectionKey() {
  return ['#X-Amz-Target=RekognitionService.StartSegmentDetection'] as const
}

export function getXAmzTargetRekognitionServiceStartStreamProcessorKey() {
  return ['#X-Amz-Target=RekognitionService.StartStreamProcessor'] as const
}

export function getXAmzTargetRekognitionServiceStartTextDetectionKey() {
  return ['#X-Amz-Target=RekognitionService.StartTextDetection'] as const
}

export function getXAmzTargetRekognitionServiceStopProjectVersionKey() {
  return ['#X-Amz-Target=RekognitionService.StopProjectVersion'] as const
}

export function getXAmzTargetRekognitionServiceStopStreamProcessorKey() {
  return ['#X-Amz-Target=RekognitionService.StopStreamProcessor'] as const
}

export function getXAmzTargetRekognitionServiceTagResourceKey() {
  return ['#X-Amz-Target=RekognitionService.TagResource'] as const
}

export function getXAmzTargetRekognitionServiceUntagResourceKey() {
  return ['#X-Amz-Target=RekognitionService.UntagResource'] as const
}

export function getXAmzTargetRekognitionServiceUpdateDatasetEntriesKey() {
  return ['#X-Amz-Target=RekognitionService.UpdateDatasetEntries'] as const
}

export function getXAmzTargetRekognitionServiceUpdateStreamProcessorKey() {
  return ['#X-Amz-Target=RekognitionService.UpdateStreamProcessor'] as const
}

export function getPostXAmzTargetRekognitionServiceAssociateFacesMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.AssociateFaces',
    '/#X-Amz-Target=RekognitionService.AssociateFaces',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceAssociateFacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=RekognitionService.AssociateFaces']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.AssociateFaces']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceAssociateFacesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.AssociateFaces']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.AssociateFaces'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceAssociateFaces<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.AssociateFaces']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.AssociateFaces']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceAssociateFacesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceCompareFacesMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.CompareFaces',
    '/#X-Amz-Target=RekognitionService.CompareFaces',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceCompareFacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=RekognitionService.CompareFaces']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.CompareFaces']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceCompareFacesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.CompareFaces']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.CompareFaces'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceCompareFaces<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.CompareFaces']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.CompareFaces']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceCompareFacesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceCopyProjectVersionMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.CopyProjectVersion',
    '/#X-Amz-Target=RekognitionService.CopyProjectVersion',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceCopyProjectVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.CopyProjectVersion']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.CopyProjectVersion']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceCopyProjectVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.CopyProjectVersion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.CopyProjectVersion'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceCopyProjectVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.CopyProjectVersion']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.CopyProjectVersion']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceCopyProjectVersionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceCreateCollectionMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.CreateCollection',
    '/#X-Amz-Target=RekognitionService.CreateCollection',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceCreateCollectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.CreateCollection']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.CreateCollection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceCreateCollectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.CreateCollection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.CreateCollection'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceCreateCollection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.CreateCollection']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.CreateCollection']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceCreateCollectionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceCreateDatasetMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.CreateDataset',
    '/#X-Amz-Target=RekognitionService.CreateDataset',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceCreateDatasetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=RekognitionService.CreateDataset']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.CreateDataset']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceCreateDatasetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.CreateDataset']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.CreateDataset'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceCreateDataset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.CreateDataset']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.CreateDataset']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceCreateDatasetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceCreateFaceLivenessSessionMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.CreateFaceLivenessSession',
    '/#X-Amz-Target=RekognitionService.CreateFaceLivenessSession',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceCreateFaceLivenessSessionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.CreateFaceLivenessSession']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.CreateFaceLivenessSession']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceCreateFaceLivenessSessionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.CreateFaceLivenessSession']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.CreateFaceLivenessSession'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceCreateFaceLivenessSession<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.CreateFaceLivenessSession']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.CreateFaceLivenessSession']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetRekognitionServiceCreateFaceLivenessSessionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceCreateProjectMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.CreateProject',
    '/#X-Amz-Target=RekognitionService.CreateProject',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceCreateProjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=RekognitionService.CreateProject']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.CreateProject']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceCreateProjectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.CreateProject']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.CreateProject'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceCreateProject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.CreateProject']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.CreateProject']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceCreateProjectMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceCreateProjectVersionMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.CreateProjectVersion',
    '/#X-Amz-Target=RekognitionService.CreateProjectVersion',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceCreateProjectVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.CreateProjectVersion']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.CreateProjectVersion']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceCreateProjectVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.CreateProjectVersion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.CreateProjectVersion'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceCreateProjectVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.CreateProjectVersion']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.CreateProjectVersion']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceCreateProjectVersionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceCreateStreamProcessorMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.CreateStreamProcessor',
    '/#X-Amz-Target=RekognitionService.CreateStreamProcessor',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceCreateStreamProcessorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.CreateStreamProcessor']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.CreateStreamProcessor']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceCreateStreamProcessorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.CreateStreamProcessor']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.CreateStreamProcessor'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceCreateStreamProcessor<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.CreateStreamProcessor']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.CreateStreamProcessor']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetRekognitionServiceCreateStreamProcessorMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceCreateUserMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.CreateUser',
    '/#X-Amz-Target=RekognitionService.CreateUser',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceCreateUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=RekognitionService.CreateUser']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.CreateUser']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceCreateUserMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.CreateUser']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.CreateUser'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceCreateUser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=RekognitionService.CreateUser']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.CreateUser']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceCreateUserMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceDeleteCollectionMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.DeleteCollection',
    '/#X-Amz-Target=RekognitionService.DeleteCollection',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceDeleteCollectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.DeleteCollection']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.DeleteCollection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceDeleteCollectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.DeleteCollection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.DeleteCollection'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceDeleteCollection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.DeleteCollection']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.DeleteCollection']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceDeleteCollectionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceDeleteDatasetMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.DeleteDataset',
    '/#X-Amz-Target=RekognitionService.DeleteDataset',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceDeleteDatasetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=RekognitionService.DeleteDataset']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.DeleteDataset']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceDeleteDatasetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.DeleteDataset']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.DeleteDataset'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceDeleteDataset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.DeleteDataset']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.DeleteDataset']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceDeleteDatasetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceDeleteFacesMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.DeleteFaces',
    '/#X-Amz-Target=RekognitionService.DeleteFaces',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceDeleteFacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=RekognitionService.DeleteFaces']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.DeleteFaces']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceDeleteFacesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.DeleteFaces']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.DeleteFaces'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceDeleteFaces<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=RekognitionService.DeleteFaces']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.DeleteFaces']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceDeleteFacesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceDeleteProjectMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.DeleteProject',
    '/#X-Amz-Target=RekognitionService.DeleteProject',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceDeleteProjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=RekognitionService.DeleteProject']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.DeleteProject']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceDeleteProjectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.DeleteProject']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.DeleteProject'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceDeleteProject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.DeleteProject']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.DeleteProject']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceDeleteProjectMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceDeleteProjectPolicyMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.DeleteProjectPolicy',
    '/#X-Amz-Target=RekognitionService.DeleteProjectPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceDeleteProjectPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.DeleteProjectPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.DeleteProjectPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceDeleteProjectPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.DeleteProjectPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.DeleteProjectPolicy'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceDeleteProjectPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.DeleteProjectPolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.DeleteProjectPolicy']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceDeleteProjectPolicyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceDeleteProjectVersionMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.DeleteProjectVersion',
    '/#X-Amz-Target=RekognitionService.DeleteProjectVersion',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceDeleteProjectVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.DeleteProjectVersion']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.DeleteProjectVersion']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceDeleteProjectVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.DeleteProjectVersion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.DeleteProjectVersion'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceDeleteProjectVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.DeleteProjectVersion']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.DeleteProjectVersion']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceDeleteProjectVersionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceDeleteStreamProcessorMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.DeleteStreamProcessor',
    '/#X-Amz-Target=RekognitionService.DeleteStreamProcessor',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceDeleteStreamProcessorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.DeleteStreamProcessor']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.DeleteStreamProcessor']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceDeleteStreamProcessorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.DeleteStreamProcessor']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.DeleteStreamProcessor'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceDeleteStreamProcessor<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.DeleteStreamProcessor']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.DeleteStreamProcessor']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetRekognitionServiceDeleteStreamProcessorMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceDeleteUserMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.DeleteUser',
    '/#X-Amz-Target=RekognitionService.DeleteUser',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceDeleteUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=RekognitionService.DeleteUser']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.DeleteUser']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceDeleteUserMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.DeleteUser']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.DeleteUser'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceDeleteUser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=RekognitionService.DeleteUser']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.DeleteUser']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceDeleteUserMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceDescribeCollectionMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.DescribeCollection',
    '/#X-Amz-Target=RekognitionService.DescribeCollection',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceDescribeCollectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.DescribeCollection']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.DescribeCollection']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceDescribeCollectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.DescribeCollection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.DescribeCollection'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceDescribeCollection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.DescribeCollection']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.DescribeCollection']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceDescribeCollectionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceDescribeDatasetMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.DescribeDataset',
    '/#X-Amz-Target=RekognitionService.DescribeDataset',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceDescribeDatasetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=RekognitionService.DescribeDataset']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.DescribeDataset']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceDescribeDatasetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.DescribeDataset']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.DescribeDataset'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceDescribeDataset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.DescribeDataset']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.DescribeDataset']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceDescribeDatasetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceDescribeProjectVersionsMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.DescribeProjectVersions',
    '/#X-Amz-Target=RekognitionService.DescribeProjectVersions',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceDescribeProjectVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.DescribeProjectVersions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.DescribeProjectVersions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceDescribeProjectVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.DescribeProjectVersions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.DescribeProjectVersions'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceDescribeProjectVersions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.DescribeProjectVersions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.DescribeProjectVersions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetRekognitionServiceDescribeProjectVersionsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceDescribeProjectsMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.DescribeProjects',
    '/#X-Amz-Target=RekognitionService.DescribeProjects',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceDescribeProjectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.DescribeProjects']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.DescribeProjects']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceDescribeProjectsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.DescribeProjects']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.DescribeProjects'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceDescribeProjects<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.DescribeProjects']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.DescribeProjects']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceDescribeProjectsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceDescribeStreamProcessorMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.DescribeStreamProcessor',
    '/#X-Amz-Target=RekognitionService.DescribeStreamProcessor',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceDescribeStreamProcessorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.DescribeStreamProcessor']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.DescribeStreamProcessor']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceDescribeStreamProcessorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.DescribeStreamProcessor']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.DescribeStreamProcessor'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceDescribeStreamProcessor<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.DescribeStreamProcessor']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.DescribeStreamProcessor']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetRekognitionServiceDescribeStreamProcessorMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceDetectCustomLabelsMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.DetectCustomLabels',
    '/#X-Amz-Target=RekognitionService.DetectCustomLabels',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceDetectCustomLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.DetectCustomLabels']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.DetectCustomLabels']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceDetectCustomLabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.DetectCustomLabels']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.DetectCustomLabels'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceDetectCustomLabels<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.DetectCustomLabels']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.DetectCustomLabels']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceDetectCustomLabelsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceDetectFacesMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.DetectFaces',
    '/#X-Amz-Target=RekognitionService.DetectFaces',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceDetectFacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=RekognitionService.DetectFaces']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.DetectFaces']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceDetectFacesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.DetectFaces']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.DetectFaces'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceDetectFaces<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=RekognitionService.DetectFaces']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.DetectFaces']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceDetectFacesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceDetectLabelsMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.DetectLabels',
    '/#X-Amz-Target=RekognitionService.DetectLabels',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceDetectLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=RekognitionService.DetectLabels']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.DetectLabels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceDetectLabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.DetectLabels']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.DetectLabels'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceDetectLabels<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.DetectLabels']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.DetectLabels']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceDetectLabelsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceDetectModerationLabelsMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.DetectModerationLabels',
    '/#X-Amz-Target=RekognitionService.DetectModerationLabels',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceDetectModerationLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.DetectModerationLabels']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.DetectModerationLabels']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceDetectModerationLabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.DetectModerationLabels']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.DetectModerationLabels'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceDetectModerationLabels<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.DetectModerationLabels']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.DetectModerationLabels']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetRekognitionServiceDetectModerationLabelsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceDetectProtectiveEquipmentMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.DetectProtectiveEquipment',
    '/#X-Amz-Target=RekognitionService.DetectProtectiveEquipment',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceDetectProtectiveEquipmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.DetectProtectiveEquipment']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.DetectProtectiveEquipment']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceDetectProtectiveEquipmentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.DetectProtectiveEquipment']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.DetectProtectiveEquipment'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceDetectProtectiveEquipment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.DetectProtectiveEquipment']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.DetectProtectiveEquipment']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetRekognitionServiceDetectProtectiveEquipmentMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceDetectTextMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.DetectText',
    '/#X-Amz-Target=RekognitionService.DetectText',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceDetectTextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=RekognitionService.DetectText']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.DetectText']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceDetectTextMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.DetectText']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.DetectText'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceDetectText<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=RekognitionService.DetectText']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.DetectText']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceDetectTextMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceDisassociateFacesMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.DisassociateFaces',
    '/#X-Amz-Target=RekognitionService.DisassociateFaces',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceDisassociateFacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.DisassociateFaces']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.DisassociateFaces']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceDisassociateFacesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.DisassociateFaces']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.DisassociateFaces'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceDisassociateFaces<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.DisassociateFaces']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.DisassociateFaces']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceDisassociateFacesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceDistributeDatasetEntriesMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.DistributeDatasetEntries',
    '/#X-Amz-Target=RekognitionService.DistributeDatasetEntries',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceDistributeDatasetEntriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.DistributeDatasetEntries']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.DistributeDatasetEntries']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceDistributeDatasetEntriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.DistributeDatasetEntries']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.DistributeDatasetEntries'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceDistributeDatasetEntries<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.DistributeDatasetEntries']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.DistributeDatasetEntries']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetRekognitionServiceDistributeDatasetEntriesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceGetCelebrityInfoMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.GetCelebrityInfo',
    '/#X-Amz-Target=RekognitionService.GetCelebrityInfo',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceGetCelebrityInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.GetCelebrityInfo']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.GetCelebrityInfo']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceGetCelebrityInfoMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.GetCelebrityInfo']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.GetCelebrityInfo'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceGetCelebrityInfo<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.GetCelebrityInfo']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.GetCelebrityInfo']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceGetCelebrityInfoMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceGetCelebrityRecognitionMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.GetCelebrityRecognition',
    '/#X-Amz-Target=RekognitionService.GetCelebrityRecognition',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceGetCelebrityRecognitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.GetCelebrityRecognition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.GetCelebrityRecognition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceGetCelebrityRecognitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.GetCelebrityRecognition']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.GetCelebrityRecognition'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceGetCelebrityRecognition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.GetCelebrityRecognition']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.GetCelebrityRecognition']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetRekognitionServiceGetCelebrityRecognitionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceGetContentModerationMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.GetContentModeration',
    '/#X-Amz-Target=RekognitionService.GetContentModeration',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceGetContentModerationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.GetContentModeration']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.GetContentModeration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceGetContentModerationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.GetContentModeration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.GetContentModeration'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceGetContentModeration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.GetContentModeration']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.GetContentModeration']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceGetContentModerationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceGetFaceDetectionMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.GetFaceDetection',
    '/#X-Amz-Target=RekognitionService.GetFaceDetection',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceGetFaceDetectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.GetFaceDetection']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.GetFaceDetection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceGetFaceDetectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.GetFaceDetection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.GetFaceDetection'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceGetFaceDetection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.GetFaceDetection']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.GetFaceDetection']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceGetFaceDetectionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceGetFaceLivenessSessionResultsMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.GetFaceLivenessSessionResults',
    '/#X-Amz-Target=RekognitionService.GetFaceLivenessSessionResults',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceGetFaceLivenessSessionResultsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.GetFaceLivenessSessionResults']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.GetFaceLivenessSessionResults']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceGetFaceLivenessSessionResultsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.GetFaceLivenessSessionResults']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.GetFaceLivenessSessionResults'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceGetFaceLivenessSessionResults<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.GetFaceLivenessSessionResults']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.GetFaceLivenessSessionResults']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetRekognitionServiceGetFaceLivenessSessionResultsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceGetFaceSearchMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.GetFaceSearch',
    '/#X-Amz-Target=RekognitionService.GetFaceSearch',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceGetFaceSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=RekognitionService.GetFaceSearch']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.GetFaceSearch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceGetFaceSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.GetFaceSearch']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.GetFaceSearch'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceGetFaceSearch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.GetFaceSearch']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.GetFaceSearch']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceGetFaceSearchMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceGetLabelDetectionMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.GetLabelDetection',
    '/#X-Amz-Target=RekognitionService.GetLabelDetection',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceGetLabelDetectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.GetLabelDetection']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.GetLabelDetection']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceGetLabelDetectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.GetLabelDetection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.GetLabelDetection'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceGetLabelDetection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.GetLabelDetection']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.GetLabelDetection']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceGetLabelDetectionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceGetPersonTrackingMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.GetPersonTracking',
    '/#X-Amz-Target=RekognitionService.GetPersonTracking',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceGetPersonTrackingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.GetPersonTracking']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.GetPersonTracking']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceGetPersonTrackingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.GetPersonTracking']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.GetPersonTracking'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceGetPersonTracking<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.GetPersonTracking']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.GetPersonTracking']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceGetPersonTrackingMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceGetSegmentDetectionMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.GetSegmentDetection',
    '/#X-Amz-Target=RekognitionService.GetSegmentDetection',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceGetSegmentDetectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.GetSegmentDetection']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.GetSegmentDetection']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceGetSegmentDetectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.GetSegmentDetection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.GetSegmentDetection'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceGetSegmentDetection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.GetSegmentDetection']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.GetSegmentDetection']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceGetSegmentDetectionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceGetTextDetectionMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.GetTextDetection',
    '/#X-Amz-Target=RekognitionService.GetTextDetection',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceGetTextDetectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.GetTextDetection']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.GetTextDetection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceGetTextDetectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.GetTextDetection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.GetTextDetection'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceGetTextDetection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.GetTextDetection']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.GetTextDetection']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceGetTextDetectionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceIndexFacesMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.IndexFaces',
    '/#X-Amz-Target=RekognitionService.IndexFaces',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceIndexFacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=RekognitionService.IndexFaces']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.IndexFaces']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceIndexFacesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.IndexFaces']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.IndexFaces'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceIndexFaces<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=RekognitionService.IndexFaces']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.IndexFaces']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceIndexFacesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceListCollectionsMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.ListCollections',
    '/#X-Amz-Target=RekognitionService.ListCollections',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceListCollectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=RekognitionService.ListCollections']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.ListCollections']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceListCollectionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.ListCollections']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.ListCollections'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceListCollections<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.ListCollections']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.ListCollections']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceListCollectionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceListDatasetEntriesMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.ListDatasetEntries',
    '/#X-Amz-Target=RekognitionService.ListDatasetEntries',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceListDatasetEntriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.ListDatasetEntries']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.ListDatasetEntries']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceListDatasetEntriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.ListDatasetEntries']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.ListDatasetEntries'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceListDatasetEntries<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.ListDatasetEntries']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.ListDatasetEntries']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceListDatasetEntriesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceListDatasetLabelsMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.ListDatasetLabels',
    '/#X-Amz-Target=RekognitionService.ListDatasetLabels',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceListDatasetLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.ListDatasetLabels']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.ListDatasetLabels']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceListDatasetLabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.ListDatasetLabels']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.ListDatasetLabels'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceListDatasetLabels<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.ListDatasetLabels']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.ListDatasetLabels']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceListDatasetLabelsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceListFacesMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.ListFaces',
    '/#X-Amz-Target=RekognitionService.ListFaces',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceListFacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=RekognitionService.ListFaces']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.ListFaces']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceListFacesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.ListFaces']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.ListFaces'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceListFaces<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=RekognitionService.ListFaces']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.ListFaces']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceListFacesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceListProjectPoliciesMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.ListProjectPolicies',
    '/#X-Amz-Target=RekognitionService.ListProjectPolicies',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceListProjectPoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.ListProjectPolicies']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.ListProjectPolicies']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceListProjectPoliciesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.ListProjectPolicies']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.ListProjectPolicies'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceListProjectPolicies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.ListProjectPolicies']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.ListProjectPolicies']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceListProjectPoliciesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceListStreamProcessorsMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.ListStreamProcessors',
    '/#X-Amz-Target=RekognitionService.ListStreamProcessors',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceListStreamProcessorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.ListStreamProcessors']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.ListStreamProcessors']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceListStreamProcessorsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.ListStreamProcessors']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.ListStreamProcessors'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceListStreamProcessors<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.ListStreamProcessors']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.ListStreamProcessors']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceListStreamProcessorsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.ListTagsForResource',
    '/#X-Amz-Target=RekognitionService.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceListTagsForResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.ListTagsForResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.ListTagsForResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceListTagsForResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceListUsersMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.ListUsers',
    '/#X-Amz-Target=RekognitionService.ListUsers',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceListUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=RekognitionService.ListUsers']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.ListUsers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceListUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.ListUsers']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.ListUsers'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceListUsers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=RekognitionService.ListUsers']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.ListUsers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceListUsersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServicePutProjectPolicyMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.PutProjectPolicy',
    '/#X-Amz-Target=RekognitionService.PutProjectPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServicePutProjectPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.PutProjectPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.PutProjectPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServicePutProjectPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.PutProjectPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.PutProjectPolicy'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServicePutProjectPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.PutProjectPolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.PutProjectPolicy']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServicePutProjectPolicyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceRecognizeCelebritiesMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.RecognizeCelebrities',
    '/#X-Amz-Target=RekognitionService.RecognizeCelebrities',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceRecognizeCelebritiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.RecognizeCelebrities']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.RecognizeCelebrities']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceRecognizeCelebritiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.RecognizeCelebrities']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.RecognizeCelebrities'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceRecognizeCelebrities<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.RecognizeCelebrities']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.RecognizeCelebrities']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceRecognizeCelebritiesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceSearchFacesMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.SearchFaces',
    '/#X-Amz-Target=RekognitionService.SearchFaces',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceSearchFacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=RekognitionService.SearchFaces']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.SearchFaces']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceSearchFacesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.SearchFaces']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.SearchFaces'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceSearchFaces<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=RekognitionService.SearchFaces']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.SearchFaces']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceSearchFacesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceSearchFacesByImageMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.SearchFacesByImage',
    '/#X-Amz-Target=RekognitionService.SearchFacesByImage',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceSearchFacesByImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.SearchFacesByImage']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.SearchFacesByImage']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceSearchFacesByImageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.SearchFacesByImage']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.SearchFacesByImage'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceSearchFacesByImage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.SearchFacesByImage']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.SearchFacesByImage']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceSearchFacesByImageMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceSearchUsersMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.SearchUsers',
    '/#X-Amz-Target=RekognitionService.SearchUsers',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceSearchUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=RekognitionService.SearchUsers']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.SearchUsers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceSearchUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.SearchUsers']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.SearchUsers'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceSearchUsers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=RekognitionService.SearchUsers']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.SearchUsers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceSearchUsersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceSearchUsersByImageMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.SearchUsersByImage',
    '/#X-Amz-Target=RekognitionService.SearchUsersByImage',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceSearchUsersByImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.SearchUsersByImage']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.SearchUsersByImage']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceSearchUsersByImageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.SearchUsersByImage']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.SearchUsersByImage'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceSearchUsersByImage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.SearchUsersByImage']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.SearchUsersByImage']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceSearchUsersByImageMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceStartCelebrityRecognitionMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.StartCelebrityRecognition',
    '/#X-Amz-Target=RekognitionService.StartCelebrityRecognition',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceStartCelebrityRecognitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.StartCelebrityRecognition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.StartCelebrityRecognition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceStartCelebrityRecognitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.StartCelebrityRecognition']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.StartCelebrityRecognition'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceStartCelebrityRecognition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.StartCelebrityRecognition']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.StartCelebrityRecognition']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetRekognitionServiceStartCelebrityRecognitionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceStartContentModerationMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.StartContentModeration',
    '/#X-Amz-Target=RekognitionService.StartContentModeration',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceStartContentModerationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.StartContentModeration']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.StartContentModeration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceStartContentModerationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.StartContentModeration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.StartContentModeration'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceStartContentModeration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.StartContentModeration']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.StartContentModeration']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetRekognitionServiceStartContentModerationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceStartFaceDetectionMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.StartFaceDetection',
    '/#X-Amz-Target=RekognitionService.StartFaceDetection',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceStartFaceDetectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.StartFaceDetection']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.StartFaceDetection']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceStartFaceDetectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.StartFaceDetection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.StartFaceDetection'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceStartFaceDetection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.StartFaceDetection']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.StartFaceDetection']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceStartFaceDetectionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceStartFaceSearchMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.StartFaceSearch',
    '/#X-Amz-Target=RekognitionService.StartFaceSearch',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceStartFaceSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=RekognitionService.StartFaceSearch']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.StartFaceSearch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceStartFaceSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.StartFaceSearch']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.StartFaceSearch'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceStartFaceSearch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.StartFaceSearch']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.StartFaceSearch']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceStartFaceSearchMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceStartLabelDetectionMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.StartLabelDetection',
    '/#X-Amz-Target=RekognitionService.StartLabelDetection',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceStartLabelDetectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.StartLabelDetection']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.StartLabelDetection']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceStartLabelDetectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.StartLabelDetection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.StartLabelDetection'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceStartLabelDetection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.StartLabelDetection']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.StartLabelDetection']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceStartLabelDetectionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceStartPersonTrackingMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.StartPersonTracking',
    '/#X-Amz-Target=RekognitionService.StartPersonTracking',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceStartPersonTrackingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.StartPersonTracking']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.StartPersonTracking']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceStartPersonTrackingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.StartPersonTracking']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.StartPersonTracking'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceStartPersonTracking<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.StartPersonTracking']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.StartPersonTracking']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceStartPersonTrackingMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceStartProjectVersionMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.StartProjectVersion',
    '/#X-Amz-Target=RekognitionService.StartProjectVersion',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceStartProjectVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.StartProjectVersion']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.StartProjectVersion']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceStartProjectVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.StartProjectVersion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.StartProjectVersion'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceStartProjectVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.StartProjectVersion']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.StartProjectVersion']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceStartProjectVersionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceStartSegmentDetectionMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.StartSegmentDetection',
    '/#X-Amz-Target=RekognitionService.StartSegmentDetection',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceStartSegmentDetectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.StartSegmentDetection']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.StartSegmentDetection']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceStartSegmentDetectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.StartSegmentDetection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.StartSegmentDetection'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceStartSegmentDetection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.StartSegmentDetection']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.StartSegmentDetection']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetRekognitionServiceStartSegmentDetectionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceStartStreamProcessorMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.StartStreamProcessor',
    '/#X-Amz-Target=RekognitionService.StartStreamProcessor',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceStartStreamProcessorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.StartStreamProcessor']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.StartStreamProcessor']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceStartStreamProcessorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.StartStreamProcessor']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.StartStreamProcessor'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceStartStreamProcessor<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.StartStreamProcessor']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.StartStreamProcessor']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceStartStreamProcessorMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceStartTextDetectionMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.StartTextDetection',
    '/#X-Amz-Target=RekognitionService.StartTextDetection',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceStartTextDetectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.StartTextDetection']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.StartTextDetection']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceStartTextDetectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.StartTextDetection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.StartTextDetection'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceStartTextDetection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.StartTextDetection']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.StartTextDetection']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceStartTextDetectionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceStopProjectVersionMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.StopProjectVersion',
    '/#X-Amz-Target=RekognitionService.StopProjectVersion',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceStopProjectVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.StopProjectVersion']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.StopProjectVersion']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceStopProjectVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.StopProjectVersion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.StopProjectVersion'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceStopProjectVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.StopProjectVersion']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.StopProjectVersion']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceStopProjectVersionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceStopStreamProcessorMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.StopStreamProcessor',
    '/#X-Amz-Target=RekognitionService.StopStreamProcessor',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceStopStreamProcessorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.StopStreamProcessor']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.StopStreamProcessor']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceStopStreamProcessorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.StopStreamProcessor']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.StopStreamProcessor'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceStopStreamProcessor<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.StopStreamProcessor']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.StopStreamProcessor']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceStopStreamProcessorMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceTagResourceMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.TagResource',
    '/#X-Amz-Target=RekognitionService.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceTagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=RekognitionService.TagResource']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceTagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.TagResource'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceTagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=RekognitionService.TagResource']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.TagResource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceTagResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceUntagResourceMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.UntagResource',
    '/#X-Amz-Target=RekognitionService.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=RekognitionService.UntagResource']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceUntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.UntagResource'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceUntagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.UntagResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.UntagResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceUntagResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceUpdateDatasetEntriesMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.UpdateDatasetEntries',
    '/#X-Amz-Target=RekognitionService.UpdateDatasetEntries',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceUpdateDatasetEntriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.UpdateDatasetEntries']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.UpdateDatasetEntries']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceUpdateDatasetEntriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.UpdateDatasetEntries']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.UpdateDatasetEntries'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceUpdateDatasetEntries<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.UpdateDatasetEntries']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.UpdateDatasetEntries']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRekognitionServiceUpdateDatasetEntriesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetRekognitionServiceUpdateStreamProcessorMutationKey() {
  return [
    '#X-Amz-Target=RekognitionService.UpdateStreamProcessor',
    '/#X-Amz-Target=RekognitionService.UpdateStreamProcessor',
    'POST',
  ] as const
}

export function getPostXAmzTargetRekognitionServiceUpdateStreamProcessorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=RekognitionService.UpdateStreamProcessor']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.UpdateStreamProcessor']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRekognitionServiceUpdateStreamProcessorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RekognitionService.UpdateStreamProcessor']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RekognitionService.UpdateStreamProcessor'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetRekognitionServiceUpdateStreamProcessor<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RekognitionService.UpdateStreamProcessor']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RekognitionService.UpdateStreamProcessor']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetRekognitionServiceUpdateStreamProcessorMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
