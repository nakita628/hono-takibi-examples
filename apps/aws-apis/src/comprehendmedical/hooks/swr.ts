import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetComprehendMedical_20181030DescribeEntitiesDetectionV2JobKey() {
  return ['#X-Amz-Target=ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job'] as const
}

export function getXAmzTargetComprehendMedical_20181030DescribeICD10CMInferenceJobKey() {
  return ['#X-Amz-Target=ComprehendMedical_20181030.DescribeICD10CMInferenceJob'] as const
}

export function getXAmzTargetComprehendMedical_20181030DescribePHIDetectionJobKey() {
  return ['#X-Amz-Target=ComprehendMedical_20181030.DescribePHIDetectionJob'] as const
}

export function getXAmzTargetComprehendMedical_20181030DescribeRxNormInferenceJobKey() {
  return ['#X-Amz-Target=ComprehendMedical_20181030.DescribeRxNormInferenceJob'] as const
}

export function getXAmzTargetComprehendMedical_20181030DescribeSNOMEDCTInferenceJobKey() {
  return ['#X-Amz-Target=ComprehendMedical_20181030.DescribeSNOMEDCTInferenceJob'] as const
}

export function getXAmzTargetComprehendMedical_20181030DetectEntitiesKey() {
  return ['#X-Amz-Target=ComprehendMedical_20181030.DetectEntities'] as const
}

export function getXAmzTargetComprehendMedical_20181030DetectEntitiesV2Key() {
  return ['#X-Amz-Target=ComprehendMedical_20181030.DetectEntitiesV2'] as const
}

export function getXAmzTargetComprehendMedical_20181030DetectPHIKey() {
  return ['#X-Amz-Target=ComprehendMedical_20181030.DetectPHI'] as const
}

export function getXAmzTargetComprehendMedical_20181030InferICD10CMKey() {
  return ['#X-Amz-Target=ComprehendMedical_20181030.InferICD10CM'] as const
}

export function getXAmzTargetComprehendMedical_20181030InferRxNormKey() {
  return ['#X-Amz-Target=ComprehendMedical_20181030.InferRxNorm'] as const
}

export function getXAmzTargetComprehendMedical_20181030InferSNOMEDCTKey() {
  return ['#X-Amz-Target=ComprehendMedical_20181030.InferSNOMEDCT'] as const
}

export function getXAmzTargetComprehendMedical_20181030ListEntitiesDetectionV2JobsKey() {
  return ['#X-Amz-Target=ComprehendMedical_20181030.ListEntitiesDetectionV2Jobs'] as const
}

export function getXAmzTargetComprehendMedical_20181030ListICD10CMInferenceJobsKey() {
  return ['#X-Amz-Target=ComprehendMedical_20181030.ListICD10CMInferenceJobs'] as const
}

export function getXAmzTargetComprehendMedical_20181030ListPHIDetectionJobsKey() {
  return ['#X-Amz-Target=ComprehendMedical_20181030.ListPHIDetectionJobs'] as const
}

export function getXAmzTargetComprehendMedical_20181030ListRxNormInferenceJobsKey() {
  return ['#X-Amz-Target=ComprehendMedical_20181030.ListRxNormInferenceJobs'] as const
}

export function getXAmzTargetComprehendMedical_20181030ListSNOMEDCTInferenceJobsKey() {
  return ['#X-Amz-Target=ComprehendMedical_20181030.ListSNOMEDCTInferenceJobs'] as const
}

export function getXAmzTargetComprehendMedical_20181030StartEntitiesDetectionV2JobKey() {
  return ['#X-Amz-Target=ComprehendMedical_20181030.StartEntitiesDetectionV2Job'] as const
}

export function getXAmzTargetComprehendMedical_20181030StartICD10CMInferenceJobKey() {
  return ['#X-Amz-Target=ComprehendMedical_20181030.StartICD10CMInferenceJob'] as const
}

export function getXAmzTargetComprehendMedical_20181030StartPHIDetectionJobKey() {
  return ['#X-Amz-Target=ComprehendMedical_20181030.StartPHIDetectionJob'] as const
}

export function getXAmzTargetComprehendMedical_20181030StartRxNormInferenceJobKey() {
  return ['#X-Amz-Target=ComprehendMedical_20181030.StartRxNormInferenceJob'] as const
}

export function getXAmzTargetComprehendMedical_20181030StartSNOMEDCTInferenceJobKey() {
  return ['#X-Amz-Target=ComprehendMedical_20181030.StartSNOMEDCTInferenceJob'] as const
}

export function getXAmzTargetComprehendMedical_20181030StopEntitiesDetectionV2JobKey() {
  return ['#X-Amz-Target=ComprehendMedical_20181030.StopEntitiesDetectionV2Job'] as const
}

export function getXAmzTargetComprehendMedical_20181030StopICD10CMInferenceJobKey() {
  return ['#X-Amz-Target=ComprehendMedical_20181030.StopICD10CMInferenceJob'] as const
}

export function getXAmzTargetComprehendMedical_20181030StopPHIDetectionJobKey() {
  return ['#X-Amz-Target=ComprehendMedical_20181030.StopPHIDetectionJob'] as const
}

export function getXAmzTargetComprehendMedical_20181030StopRxNormInferenceJobKey() {
  return ['#X-Amz-Target=ComprehendMedical_20181030.StopRxNormInferenceJob'] as const
}

export function getXAmzTargetComprehendMedical_20181030StopSNOMEDCTInferenceJobKey() {
  return ['#X-Amz-Target=ComprehendMedical_20181030.StopSNOMEDCTInferenceJob'] as const
}

export function getPostXAmzTargetComprehendMedical20181030DescribeEntitiesDetectionV2JobKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job',
    '/#X-Amz-Target=ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehendMedical20181030DescribeEntitiesDetectionV2Job<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComprehendMedical20181030DescribeEntitiesDetectionV2JobKey()
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
            (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehendMedical20181030DescribeICD10CMInferenceJobKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.DescribeICD10CMInferenceJob',
    '/#X-Amz-Target=ComprehendMedical_20181030.DescribeICD10CMInferenceJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehendMedical20181030DescribeICD10CMInferenceJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DescribeICD10CMInferenceJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DescribeICD10CMInferenceJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComprehendMedical20181030DescribeICD10CMInferenceJobKey()
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
            (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DescribeICD10CMInferenceJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ComprehendMedical_20181030.DescribeICD10CMInferenceJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehendMedical20181030DescribePHIDetectionJobKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.DescribePHIDetectionJob',
    '/#X-Amz-Target=ComprehendMedical_20181030.DescribePHIDetectionJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehendMedical20181030DescribePHIDetectionJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DescribePHIDetectionJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DescribePHIDetectionJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehendMedical20181030DescribePHIDetectionJobKey()
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
            (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DescribePHIDetectionJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ComprehendMedical_20181030.DescribePHIDetectionJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehendMedical20181030DescribeRxNormInferenceJobKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.DescribeRxNormInferenceJob',
    '/#X-Amz-Target=ComprehendMedical_20181030.DescribeRxNormInferenceJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehendMedical20181030DescribeRxNormInferenceJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DescribeRxNormInferenceJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DescribeRxNormInferenceJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComprehendMedical20181030DescribeRxNormInferenceJobKey()
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
            (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DescribeRxNormInferenceJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ComprehendMedical_20181030.DescribeRxNormInferenceJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehendMedical20181030DescribeSNOMEDCTInferenceJobKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.DescribeSNOMEDCTInferenceJob',
    '/#X-Amz-Target=ComprehendMedical_20181030.DescribeSNOMEDCTInferenceJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehendMedical20181030DescribeSNOMEDCTInferenceJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DescribeSNOMEDCTInferenceJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DescribeSNOMEDCTInferenceJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComprehendMedical20181030DescribeSNOMEDCTInferenceJobKey()
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
            (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DescribeSNOMEDCTInferenceJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ComprehendMedical_20181030.DescribeSNOMEDCTInferenceJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehendMedical20181030DetectEntitiesKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.DetectEntities',
    '/#X-Amz-Target=ComprehendMedical_20181030.DetectEntities',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehendMedical20181030DetectEntities<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DetectEntities']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DetectEntities']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehendMedical20181030DetectEntitiesKey()
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
            (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DetectEntities']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ComprehendMedical_20181030.DetectEntities'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehendMedical20181030DetectEntitiesV2Key() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.DetectEntitiesV2',
    '/#X-Amz-Target=ComprehendMedical_20181030.DetectEntitiesV2',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehendMedical20181030DetectEntitiesV2<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DetectEntitiesV2']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DetectEntitiesV2']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehendMedical20181030DetectEntitiesV2Key()
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
            (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DetectEntitiesV2']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ComprehendMedical_20181030.DetectEntitiesV2'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehendMedical20181030DetectPHIKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.DetectPHI',
    '/#X-Amz-Target=ComprehendMedical_20181030.DetectPHI',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehendMedical20181030DetectPHI<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DetectPHI']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DetectPHI']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehendMedical20181030DetectPHIKey()
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
            (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DetectPHI']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ComprehendMedical_20181030.DetectPHI'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehendMedical20181030InferICD10CMKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.InferICD10CM',
    '/#X-Amz-Target=ComprehendMedical_20181030.InferICD10CM',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehendMedical20181030InferICD10CM<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.InferICD10CM']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.InferICD10CM']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehendMedical20181030InferICD10CMKey()
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
            (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.InferICD10CM']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ComprehendMedical_20181030.InferICD10CM'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehendMedical20181030InferRxNormKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.InferRxNorm',
    '/#X-Amz-Target=ComprehendMedical_20181030.InferRxNorm',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehendMedical20181030InferRxNorm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.InferRxNorm']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.InferRxNorm']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehendMedical20181030InferRxNormKey()
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
            (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.InferRxNorm']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ComprehendMedical_20181030.InferRxNorm'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehendMedical20181030InferSNOMEDCTKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.InferSNOMEDCT',
    '/#X-Amz-Target=ComprehendMedical_20181030.InferSNOMEDCT',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehendMedical20181030InferSNOMEDCT<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.InferSNOMEDCT']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.InferSNOMEDCT']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehendMedical20181030InferSNOMEDCTKey()
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
            (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.InferSNOMEDCT']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ComprehendMedical_20181030.InferSNOMEDCT'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehendMedical20181030ListEntitiesDetectionV2JobsKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.ListEntitiesDetectionV2Jobs',
    '/#X-Amz-Target=ComprehendMedical_20181030.ListEntitiesDetectionV2Jobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehendMedical20181030ListEntitiesDetectionV2Jobs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.ListEntitiesDetectionV2Jobs']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.ListEntitiesDetectionV2Jobs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComprehendMedical20181030ListEntitiesDetectionV2JobsKey()
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
            (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.ListEntitiesDetectionV2Jobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ComprehendMedical_20181030.ListEntitiesDetectionV2Jobs'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehendMedical20181030ListICD10CMInferenceJobsKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.ListICD10CMInferenceJobs',
    '/#X-Amz-Target=ComprehendMedical_20181030.ListICD10CMInferenceJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehendMedical20181030ListICD10CMInferenceJobs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.ListICD10CMInferenceJobs']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.ListICD10CMInferenceJobs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComprehendMedical20181030ListICD10CMInferenceJobsKey()
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
            (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.ListICD10CMInferenceJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ComprehendMedical_20181030.ListICD10CMInferenceJobs'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehendMedical20181030ListPHIDetectionJobsKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.ListPHIDetectionJobs',
    '/#X-Amz-Target=ComprehendMedical_20181030.ListPHIDetectionJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehendMedical20181030ListPHIDetectionJobs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.ListPHIDetectionJobs']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.ListPHIDetectionJobs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehendMedical20181030ListPHIDetectionJobsKey()
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
            (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.ListPHIDetectionJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ComprehendMedical_20181030.ListPHIDetectionJobs'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehendMedical20181030ListRxNormInferenceJobsKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.ListRxNormInferenceJobs',
    '/#X-Amz-Target=ComprehendMedical_20181030.ListRxNormInferenceJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehendMedical20181030ListRxNormInferenceJobs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.ListRxNormInferenceJobs']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.ListRxNormInferenceJobs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehendMedical20181030ListRxNormInferenceJobsKey()
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
            (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.ListRxNormInferenceJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ComprehendMedical_20181030.ListRxNormInferenceJobs'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehendMedical20181030ListSNOMEDCTInferenceJobsKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.ListSNOMEDCTInferenceJobs',
    '/#X-Amz-Target=ComprehendMedical_20181030.ListSNOMEDCTInferenceJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehendMedical20181030ListSNOMEDCTInferenceJobs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.ListSNOMEDCTInferenceJobs']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.ListSNOMEDCTInferenceJobs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComprehendMedical20181030ListSNOMEDCTInferenceJobsKey()
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
            (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.ListSNOMEDCTInferenceJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ComprehendMedical_20181030.ListSNOMEDCTInferenceJobs'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehendMedical20181030StartEntitiesDetectionV2JobKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.StartEntitiesDetectionV2Job',
    '/#X-Amz-Target=ComprehendMedical_20181030.StartEntitiesDetectionV2Job',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehendMedical20181030StartEntitiesDetectionV2Job<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StartEntitiesDetectionV2Job']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StartEntitiesDetectionV2Job']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComprehendMedical20181030StartEntitiesDetectionV2JobKey()
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
            (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StartEntitiesDetectionV2Job']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ComprehendMedical_20181030.StartEntitiesDetectionV2Job'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehendMedical20181030StartICD10CMInferenceJobKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.StartICD10CMInferenceJob',
    '/#X-Amz-Target=ComprehendMedical_20181030.StartICD10CMInferenceJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehendMedical20181030StartICD10CMInferenceJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StartICD10CMInferenceJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StartICD10CMInferenceJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComprehendMedical20181030StartICD10CMInferenceJobKey()
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
            (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StartICD10CMInferenceJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ComprehendMedical_20181030.StartICD10CMInferenceJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehendMedical20181030StartPHIDetectionJobKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.StartPHIDetectionJob',
    '/#X-Amz-Target=ComprehendMedical_20181030.StartPHIDetectionJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehendMedical20181030StartPHIDetectionJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StartPHIDetectionJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StartPHIDetectionJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehendMedical20181030StartPHIDetectionJobKey()
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
            (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StartPHIDetectionJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ComprehendMedical_20181030.StartPHIDetectionJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehendMedical20181030StartRxNormInferenceJobKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.StartRxNormInferenceJob',
    '/#X-Amz-Target=ComprehendMedical_20181030.StartRxNormInferenceJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehendMedical20181030StartRxNormInferenceJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StartRxNormInferenceJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StartRxNormInferenceJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehendMedical20181030StartRxNormInferenceJobKey()
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
            (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StartRxNormInferenceJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ComprehendMedical_20181030.StartRxNormInferenceJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehendMedical20181030StartSNOMEDCTInferenceJobKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.StartSNOMEDCTInferenceJob',
    '/#X-Amz-Target=ComprehendMedical_20181030.StartSNOMEDCTInferenceJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehendMedical20181030StartSNOMEDCTInferenceJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StartSNOMEDCTInferenceJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StartSNOMEDCTInferenceJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComprehendMedical20181030StartSNOMEDCTInferenceJobKey()
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
            (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StartSNOMEDCTInferenceJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ComprehendMedical_20181030.StartSNOMEDCTInferenceJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehendMedical20181030StopEntitiesDetectionV2JobKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.StopEntitiesDetectionV2Job',
    '/#X-Amz-Target=ComprehendMedical_20181030.StopEntitiesDetectionV2Job',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehendMedical20181030StopEntitiesDetectionV2Job<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StopEntitiesDetectionV2Job']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StopEntitiesDetectionV2Job']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComprehendMedical20181030StopEntitiesDetectionV2JobKey()
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
            (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StopEntitiesDetectionV2Job']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ComprehendMedical_20181030.StopEntitiesDetectionV2Job'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehendMedical20181030StopICD10CMInferenceJobKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.StopICD10CMInferenceJob',
    '/#X-Amz-Target=ComprehendMedical_20181030.StopICD10CMInferenceJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehendMedical20181030StopICD10CMInferenceJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StopICD10CMInferenceJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StopICD10CMInferenceJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehendMedical20181030StopICD10CMInferenceJobKey()
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
            (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StopICD10CMInferenceJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ComprehendMedical_20181030.StopICD10CMInferenceJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehendMedical20181030StopPHIDetectionJobKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.StopPHIDetectionJob',
    '/#X-Amz-Target=ComprehendMedical_20181030.StopPHIDetectionJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehendMedical20181030StopPHIDetectionJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StopPHIDetectionJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StopPHIDetectionJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehendMedical20181030StopPHIDetectionJobKey()
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
            (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StopPHIDetectionJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ComprehendMedical_20181030.StopPHIDetectionJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehendMedical20181030StopRxNormInferenceJobKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.StopRxNormInferenceJob',
    '/#X-Amz-Target=ComprehendMedical_20181030.StopRxNormInferenceJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehendMedical20181030StopRxNormInferenceJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StopRxNormInferenceJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StopRxNormInferenceJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehendMedical20181030StopRxNormInferenceJobKey()
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
            (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StopRxNormInferenceJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ComprehendMedical_20181030.StopRxNormInferenceJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehendMedical20181030StopSNOMEDCTInferenceJobKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.StopSNOMEDCTInferenceJob',
    '/#X-Amz-Target=ComprehendMedical_20181030.StopSNOMEDCTInferenceJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehendMedical20181030StopSNOMEDCTInferenceJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StopSNOMEDCTInferenceJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StopSNOMEDCTInferenceJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComprehendMedical20181030StopSNOMEDCTInferenceJobKey()
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
            (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StopSNOMEDCTInferenceJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ComprehendMedical_20181030.StopSNOMEDCTInferenceJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
