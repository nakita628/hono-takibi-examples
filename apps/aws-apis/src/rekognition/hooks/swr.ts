import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetRekognitionServiceAssociateFacesKey() {
  return [
    '#X-Amz-Target=RekognitionService.AssociateFaces',
    '/#X-Amz-Target=RekognitionService.AssociateFaces',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceAssociateFaces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.AssociateFaces']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceAssociateFacesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.AssociateFaces']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.AssociateFaces'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceCompareFacesKey() {
  return [
    '#X-Amz-Target=RekognitionService.CompareFaces',
    '/#X-Amz-Target=RekognitionService.CompareFaces',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceCompareFaces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.CompareFaces']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceCompareFacesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.CompareFaces']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.CompareFaces'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceCopyProjectVersionKey() {
  return [
    '#X-Amz-Target=RekognitionService.CopyProjectVersion',
    '/#X-Amz-Target=RekognitionService.CopyProjectVersion',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceCopyProjectVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.CopyProjectVersion']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceCopyProjectVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.CopyProjectVersion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.CopyProjectVersion'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceCreateCollectionKey() {
  return [
    '#X-Amz-Target=RekognitionService.CreateCollection',
    '/#X-Amz-Target=RekognitionService.CreateCollection',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceCreateCollection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.CreateCollection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceCreateCollectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.CreateCollection']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.CreateCollection'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceCreateDatasetKey() {
  return [
    '#X-Amz-Target=RekognitionService.CreateDataset',
    '/#X-Amz-Target=RekognitionService.CreateDataset',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceCreateDataset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.CreateDataset']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceCreateDatasetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.CreateDataset']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.CreateDataset'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceCreateFaceLivenessSessionKey() {
  return [
    '#X-Amz-Target=RekognitionService.CreateFaceLivenessSession',
    '/#X-Amz-Target=RekognitionService.CreateFaceLivenessSession',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceCreateFaceLivenessSession<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.CreateFaceLivenessSession']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceCreateFaceLivenessSessionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.CreateFaceLivenessSession']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.CreateFaceLivenessSession'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceCreateProjectKey() {
  return [
    '#X-Amz-Target=RekognitionService.CreateProject',
    '/#X-Amz-Target=RekognitionService.CreateProject',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceCreateProject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.CreateProject']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceCreateProjectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.CreateProject']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.CreateProject'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceCreateProjectVersionKey() {
  return [
    '#X-Amz-Target=RekognitionService.CreateProjectVersion',
    '/#X-Amz-Target=RekognitionService.CreateProjectVersion',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceCreateProjectVersion<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.CreateProjectVersion']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceCreateProjectVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.CreateProjectVersion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.CreateProjectVersion'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceCreateStreamProcessorKey() {
  return [
    '#X-Amz-Target=RekognitionService.CreateStreamProcessor',
    '/#X-Amz-Target=RekognitionService.CreateStreamProcessor',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceCreateStreamProcessor<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.CreateStreamProcessor']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceCreateStreamProcessorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.CreateStreamProcessor']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.CreateStreamProcessor'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceCreateUserKey() {
  return [
    '#X-Amz-Target=RekognitionService.CreateUser',
    '/#X-Amz-Target=RekognitionService.CreateUser',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceCreateUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.CreateUser']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceCreateUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.CreateUser']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.CreateUser'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceDeleteCollectionKey() {
  return [
    '#X-Amz-Target=RekognitionService.DeleteCollection',
    '/#X-Amz-Target=RekognitionService.DeleteCollection',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceDeleteCollection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.DeleteCollection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceDeleteCollectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.DeleteCollection']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.DeleteCollection'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceDeleteDatasetKey() {
  return [
    '#X-Amz-Target=RekognitionService.DeleteDataset',
    '/#X-Amz-Target=RekognitionService.DeleteDataset',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceDeleteDataset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.DeleteDataset']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceDeleteDatasetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.DeleteDataset']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.DeleteDataset'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceDeleteFacesKey() {
  return [
    '#X-Amz-Target=RekognitionService.DeleteFaces',
    '/#X-Amz-Target=RekognitionService.DeleteFaces',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceDeleteFaces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.DeleteFaces']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceDeleteFacesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.DeleteFaces']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.DeleteFaces'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceDeleteProjectKey() {
  return [
    '#X-Amz-Target=RekognitionService.DeleteProject',
    '/#X-Amz-Target=RekognitionService.DeleteProject',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceDeleteProject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.DeleteProject']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceDeleteProjectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.DeleteProject']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.DeleteProject'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceDeleteProjectPolicyKey() {
  return [
    '#X-Amz-Target=RekognitionService.DeleteProjectPolicy',
    '/#X-Amz-Target=RekognitionService.DeleteProjectPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceDeleteProjectPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.DeleteProjectPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceDeleteProjectPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.DeleteProjectPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.DeleteProjectPolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceDeleteProjectVersionKey() {
  return [
    '#X-Amz-Target=RekognitionService.DeleteProjectVersion',
    '/#X-Amz-Target=RekognitionService.DeleteProjectVersion',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceDeleteProjectVersion<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.DeleteProjectVersion']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceDeleteProjectVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.DeleteProjectVersion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.DeleteProjectVersion'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceDeleteStreamProcessorKey() {
  return [
    '#X-Amz-Target=RekognitionService.DeleteStreamProcessor',
    '/#X-Amz-Target=RekognitionService.DeleteStreamProcessor',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceDeleteStreamProcessor<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.DeleteStreamProcessor']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceDeleteStreamProcessorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.DeleteStreamProcessor']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.DeleteStreamProcessor'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceDeleteUserKey() {
  return [
    '#X-Amz-Target=RekognitionService.DeleteUser',
    '/#X-Amz-Target=RekognitionService.DeleteUser',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceDeleteUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.DeleteUser']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceDeleteUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.DeleteUser']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.DeleteUser'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceDescribeCollectionKey() {
  return [
    '#X-Amz-Target=RekognitionService.DescribeCollection',
    '/#X-Amz-Target=RekognitionService.DescribeCollection',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceDescribeCollection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.DescribeCollection']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceDescribeCollectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.DescribeCollection']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.DescribeCollection'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceDescribeDatasetKey() {
  return [
    '#X-Amz-Target=RekognitionService.DescribeDataset',
    '/#X-Amz-Target=RekognitionService.DescribeDataset',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceDescribeDataset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.DescribeDataset']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceDescribeDatasetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.DescribeDataset']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.DescribeDataset'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceDescribeProjectVersionsKey() {
  return [
    '#X-Amz-Target=RekognitionService.DescribeProjectVersions',
    '/#X-Amz-Target=RekognitionService.DescribeProjectVersions',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceDescribeProjectVersions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.DescribeProjectVersions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceDescribeProjectVersionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.DescribeProjectVersions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.DescribeProjectVersions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceDescribeProjectsKey() {
  return [
    '#X-Amz-Target=RekognitionService.DescribeProjects',
    '/#X-Amz-Target=RekognitionService.DescribeProjects',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceDescribeProjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.DescribeProjects']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceDescribeProjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.DescribeProjects']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.DescribeProjects'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceDescribeStreamProcessorKey() {
  return [
    '#X-Amz-Target=RekognitionService.DescribeStreamProcessor',
    '/#X-Amz-Target=RekognitionService.DescribeStreamProcessor',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceDescribeStreamProcessor<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.DescribeStreamProcessor']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceDescribeStreamProcessorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.DescribeStreamProcessor']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.DescribeStreamProcessor'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceDetectCustomLabelsKey() {
  return [
    '#X-Amz-Target=RekognitionService.DetectCustomLabels',
    '/#X-Amz-Target=RekognitionService.DetectCustomLabels',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceDetectCustomLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.DetectCustomLabels']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceDetectCustomLabelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.DetectCustomLabels']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.DetectCustomLabels'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceDetectFacesKey() {
  return [
    '#X-Amz-Target=RekognitionService.DetectFaces',
    '/#X-Amz-Target=RekognitionService.DetectFaces',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceDetectFaces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.DetectFaces']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceDetectFacesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.DetectFaces']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.DetectFaces'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceDetectLabelsKey() {
  return [
    '#X-Amz-Target=RekognitionService.DetectLabels',
    '/#X-Amz-Target=RekognitionService.DetectLabels',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceDetectLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.DetectLabels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceDetectLabelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.DetectLabels']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.DetectLabels'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceDetectModerationLabelsKey() {
  return [
    '#X-Amz-Target=RekognitionService.DetectModerationLabels',
    '/#X-Amz-Target=RekognitionService.DetectModerationLabels',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceDetectModerationLabels<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.DetectModerationLabels']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceDetectModerationLabelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.DetectModerationLabels']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.DetectModerationLabels'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceDetectProtectiveEquipmentKey() {
  return [
    '#X-Amz-Target=RekognitionService.DetectProtectiveEquipment',
    '/#X-Amz-Target=RekognitionService.DetectProtectiveEquipment',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceDetectProtectiveEquipment<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.DetectProtectiveEquipment']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceDetectProtectiveEquipmentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.DetectProtectiveEquipment']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.DetectProtectiveEquipment'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceDetectTextKey() {
  return [
    '#X-Amz-Target=RekognitionService.DetectText',
    '/#X-Amz-Target=RekognitionService.DetectText',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceDetectText<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.DetectText']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceDetectTextKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.DetectText']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.DetectText'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceDisassociateFacesKey() {
  return [
    '#X-Amz-Target=RekognitionService.DisassociateFaces',
    '/#X-Amz-Target=RekognitionService.DisassociateFaces',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceDisassociateFaces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.DisassociateFaces']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceDisassociateFacesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.DisassociateFaces']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.DisassociateFaces'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceDistributeDatasetEntriesKey() {
  return [
    '#X-Amz-Target=RekognitionService.DistributeDatasetEntries',
    '/#X-Amz-Target=RekognitionService.DistributeDatasetEntries',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceDistributeDatasetEntries<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.DistributeDatasetEntries']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceDistributeDatasetEntriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.DistributeDatasetEntries']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.DistributeDatasetEntries'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceGetCelebrityInfoKey() {
  return [
    '#X-Amz-Target=RekognitionService.GetCelebrityInfo',
    '/#X-Amz-Target=RekognitionService.GetCelebrityInfo',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceGetCelebrityInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.GetCelebrityInfo']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceGetCelebrityInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.GetCelebrityInfo']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.GetCelebrityInfo'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceGetCelebrityRecognitionKey() {
  return [
    '#X-Amz-Target=RekognitionService.GetCelebrityRecognition',
    '/#X-Amz-Target=RekognitionService.GetCelebrityRecognition',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceGetCelebrityRecognition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.GetCelebrityRecognition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceGetCelebrityRecognitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.GetCelebrityRecognition']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.GetCelebrityRecognition'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceGetContentModerationKey() {
  return [
    '#X-Amz-Target=RekognitionService.GetContentModeration',
    '/#X-Amz-Target=RekognitionService.GetContentModeration',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceGetContentModeration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.GetContentModeration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceGetContentModerationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.GetContentModeration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.GetContentModeration'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceGetFaceDetectionKey() {
  return [
    '#X-Amz-Target=RekognitionService.GetFaceDetection',
    '/#X-Amz-Target=RekognitionService.GetFaceDetection',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceGetFaceDetection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.GetFaceDetection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceGetFaceDetectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.GetFaceDetection']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.GetFaceDetection'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceGetFaceLivenessSessionResultsKey() {
  return [
    '#X-Amz-Target=RekognitionService.GetFaceLivenessSessionResults',
    '/#X-Amz-Target=RekognitionService.GetFaceLivenessSessionResults',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceGetFaceLivenessSessionResults<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.GetFaceLivenessSessionResults']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceGetFaceLivenessSessionResultsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.GetFaceLivenessSessionResults']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.GetFaceLivenessSessionResults'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceGetFaceSearchKey() {
  return [
    '#X-Amz-Target=RekognitionService.GetFaceSearch',
    '/#X-Amz-Target=RekognitionService.GetFaceSearch',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceGetFaceSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.GetFaceSearch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceGetFaceSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.GetFaceSearch']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.GetFaceSearch'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceGetLabelDetectionKey() {
  return [
    '#X-Amz-Target=RekognitionService.GetLabelDetection',
    '/#X-Amz-Target=RekognitionService.GetLabelDetection',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceGetLabelDetection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.GetLabelDetection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceGetLabelDetectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.GetLabelDetection']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.GetLabelDetection'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceGetPersonTrackingKey() {
  return [
    '#X-Amz-Target=RekognitionService.GetPersonTracking',
    '/#X-Amz-Target=RekognitionService.GetPersonTracking',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceGetPersonTracking<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.GetPersonTracking']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceGetPersonTrackingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.GetPersonTracking']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.GetPersonTracking'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceGetSegmentDetectionKey() {
  return [
    '#X-Amz-Target=RekognitionService.GetSegmentDetection',
    '/#X-Amz-Target=RekognitionService.GetSegmentDetection',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceGetSegmentDetection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.GetSegmentDetection']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceGetSegmentDetectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.GetSegmentDetection']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.GetSegmentDetection'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceGetTextDetectionKey() {
  return [
    '#X-Amz-Target=RekognitionService.GetTextDetection',
    '/#X-Amz-Target=RekognitionService.GetTextDetection',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceGetTextDetection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.GetTextDetection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceGetTextDetectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.GetTextDetection']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.GetTextDetection'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceIndexFacesKey() {
  return [
    '#X-Amz-Target=RekognitionService.IndexFaces',
    '/#X-Amz-Target=RekognitionService.IndexFaces',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceIndexFaces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.IndexFaces']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceIndexFacesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.IndexFaces']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.IndexFaces'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceListCollectionsKey() {
  return [
    '#X-Amz-Target=RekognitionService.ListCollections',
    '/#X-Amz-Target=RekognitionService.ListCollections',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceListCollections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.ListCollections']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceListCollectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.ListCollections']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.ListCollections'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceListDatasetEntriesKey() {
  return [
    '#X-Amz-Target=RekognitionService.ListDatasetEntries',
    '/#X-Amz-Target=RekognitionService.ListDatasetEntries',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceListDatasetEntries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.ListDatasetEntries']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceListDatasetEntriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.ListDatasetEntries']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.ListDatasetEntries'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceListDatasetLabelsKey() {
  return [
    '#X-Amz-Target=RekognitionService.ListDatasetLabels',
    '/#X-Amz-Target=RekognitionService.ListDatasetLabels',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceListDatasetLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.ListDatasetLabels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceListDatasetLabelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.ListDatasetLabels']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.ListDatasetLabels'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceListFacesKey() {
  return [
    '#X-Amz-Target=RekognitionService.ListFaces',
    '/#X-Amz-Target=RekognitionService.ListFaces',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceListFaces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.ListFaces']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceListFacesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.ListFaces']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.ListFaces'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceListProjectPoliciesKey() {
  return [
    '#X-Amz-Target=RekognitionService.ListProjectPolicies',
    '/#X-Amz-Target=RekognitionService.ListProjectPolicies',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceListProjectPolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.ListProjectPolicies']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceListProjectPoliciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.ListProjectPolicies']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.ListProjectPolicies'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceListStreamProcessorsKey() {
  return [
    '#X-Amz-Target=RekognitionService.ListStreamProcessors',
    '/#X-Amz-Target=RekognitionService.ListStreamProcessors',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceListStreamProcessors<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.ListStreamProcessors']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceListStreamProcessorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.ListStreamProcessors']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.ListStreamProcessors'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceListTagsForResourceKey() {
  return [
    '#X-Amz-Target=RekognitionService.ListTagsForResource',
    '/#X-Amz-Target=RekognitionService.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceListTagsForResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceListTagsForResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.ListTagsForResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceListUsersKey() {
  return [
    '#X-Amz-Target=RekognitionService.ListUsers',
    '/#X-Amz-Target=RekognitionService.ListUsers',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceListUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.ListUsers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceListUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.ListUsers']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.ListUsers'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServicePutProjectPolicyKey() {
  return [
    '#X-Amz-Target=RekognitionService.PutProjectPolicy',
    '/#X-Amz-Target=RekognitionService.PutProjectPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServicePutProjectPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.PutProjectPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServicePutProjectPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.PutProjectPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.PutProjectPolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceRecognizeCelebritiesKey() {
  return [
    '#X-Amz-Target=RekognitionService.RecognizeCelebrities',
    '/#X-Amz-Target=RekognitionService.RecognizeCelebrities',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceRecognizeCelebrities<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.RecognizeCelebrities']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceRecognizeCelebritiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.RecognizeCelebrities']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.RecognizeCelebrities'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceSearchFacesKey() {
  return [
    '#X-Amz-Target=RekognitionService.SearchFaces',
    '/#X-Amz-Target=RekognitionService.SearchFaces',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceSearchFaces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.SearchFaces']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceSearchFacesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.SearchFaces']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.SearchFaces'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceSearchFacesByImageKey() {
  return [
    '#X-Amz-Target=RekognitionService.SearchFacesByImage',
    '/#X-Amz-Target=RekognitionService.SearchFacesByImage',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceSearchFacesByImage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.SearchFacesByImage']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceSearchFacesByImageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.SearchFacesByImage']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.SearchFacesByImage'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceSearchUsersKey() {
  return [
    '#X-Amz-Target=RekognitionService.SearchUsers',
    '/#X-Amz-Target=RekognitionService.SearchUsers',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceSearchUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.SearchUsers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceSearchUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.SearchUsers']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.SearchUsers'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceSearchUsersByImageKey() {
  return [
    '#X-Amz-Target=RekognitionService.SearchUsersByImage',
    '/#X-Amz-Target=RekognitionService.SearchUsersByImage',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceSearchUsersByImage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.SearchUsersByImage']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceSearchUsersByImageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.SearchUsersByImage']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.SearchUsersByImage'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceStartCelebrityRecognitionKey() {
  return [
    '#X-Amz-Target=RekognitionService.StartCelebrityRecognition',
    '/#X-Amz-Target=RekognitionService.StartCelebrityRecognition',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceStartCelebrityRecognition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.StartCelebrityRecognition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceStartCelebrityRecognitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.StartCelebrityRecognition']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.StartCelebrityRecognition'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceStartContentModerationKey() {
  return [
    '#X-Amz-Target=RekognitionService.StartContentModeration',
    '/#X-Amz-Target=RekognitionService.StartContentModeration',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceStartContentModeration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.StartContentModeration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceStartContentModerationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.StartContentModeration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.StartContentModeration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceStartFaceDetectionKey() {
  return [
    '#X-Amz-Target=RekognitionService.StartFaceDetection',
    '/#X-Amz-Target=RekognitionService.StartFaceDetection',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceStartFaceDetection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.StartFaceDetection']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceStartFaceDetectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.StartFaceDetection']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.StartFaceDetection'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceStartFaceSearchKey() {
  return [
    '#X-Amz-Target=RekognitionService.StartFaceSearch',
    '/#X-Amz-Target=RekognitionService.StartFaceSearch',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceStartFaceSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.StartFaceSearch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceStartFaceSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.StartFaceSearch']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.StartFaceSearch'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceStartLabelDetectionKey() {
  return [
    '#X-Amz-Target=RekognitionService.StartLabelDetection',
    '/#X-Amz-Target=RekognitionService.StartLabelDetection',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceStartLabelDetection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.StartLabelDetection']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceStartLabelDetectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.StartLabelDetection']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.StartLabelDetection'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceStartPersonTrackingKey() {
  return [
    '#X-Amz-Target=RekognitionService.StartPersonTracking',
    '/#X-Amz-Target=RekognitionService.StartPersonTracking',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceStartPersonTracking<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.StartPersonTracking']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceStartPersonTrackingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.StartPersonTracking']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.StartPersonTracking'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceStartProjectVersionKey() {
  return [
    '#X-Amz-Target=RekognitionService.StartProjectVersion',
    '/#X-Amz-Target=RekognitionService.StartProjectVersion',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceStartProjectVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.StartProjectVersion']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceStartProjectVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.StartProjectVersion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.StartProjectVersion'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceStartSegmentDetectionKey() {
  return [
    '#X-Amz-Target=RekognitionService.StartSegmentDetection',
    '/#X-Amz-Target=RekognitionService.StartSegmentDetection',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceStartSegmentDetection<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.StartSegmentDetection']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceStartSegmentDetectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.StartSegmentDetection']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.StartSegmentDetection'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceStartStreamProcessorKey() {
  return [
    '#X-Amz-Target=RekognitionService.StartStreamProcessor',
    '/#X-Amz-Target=RekognitionService.StartStreamProcessor',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceStartStreamProcessor<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.StartStreamProcessor']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceStartStreamProcessorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.StartStreamProcessor']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.StartStreamProcessor'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceStartTextDetectionKey() {
  return [
    '#X-Amz-Target=RekognitionService.StartTextDetection',
    '/#X-Amz-Target=RekognitionService.StartTextDetection',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceStartTextDetection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.StartTextDetection']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceStartTextDetectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.StartTextDetection']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.StartTextDetection'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceStopProjectVersionKey() {
  return [
    '#X-Amz-Target=RekognitionService.StopProjectVersion',
    '/#X-Amz-Target=RekognitionService.StopProjectVersion',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceStopProjectVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.StopProjectVersion']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceStopProjectVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.StopProjectVersion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.StopProjectVersion'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceStopStreamProcessorKey() {
  return [
    '#X-Amz-Target=RekognitionService.StopStreamProcessor',
    '/#X-Amz-Target=RekognitionService.StopStreamProcessor',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceStopStreamProcessor<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.StopStreamProcessor']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceStopStreamProcessorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.StopStreamProcessor']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.StopStreamProcessor'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceTagResourceKey() {
  return [
    '#X-Amz-Target=RekognitionService.TagResource',
    '/#X-Amz-Target=RekognitionService.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceTagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceTagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceUntagResourceKey() {
  return [
    '#X-Amz-Target=RekognitionService.UntagResource',
    '/#X-Amz-Target=RekognitionService.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceUntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=RekognitionService.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceUntagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceUpdateDatasetEntriesKey() {
  return [
    '#X-Amz-Target=RekognitionService.UpdateDatasetEntries',
    '/#X-Amz-Target=RekognitionService.UpdateDatasetEntries',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceUpdateDatasetEntries<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.UpdateDatasetEntries']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceUpdateDatasetEntriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.UpdateDatasetEntries']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.UpdateDatasetEntries'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRekognitionServiceUpdateStreamProcessorKey() {
  return [
    '#X-Amz-Target=RekognitionService.UpdateStreamProcessor',
    '/#X-Amz-Target=RekognitionService.UpdateStreamProcessor',
    'POST',
  ] as const
}

export function usePostXAmzTargetRekognitionServiceUpdateStreamProcessor<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=RekognitionService.UpdateStreamProcessor']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRekognitionServiceUpdateStreamProcessorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=RekognitionService.UpdateStreamProcessor']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RekognitionService.UpdateStreamProcessor'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
