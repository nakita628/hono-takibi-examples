import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
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

export function getPostXAmzTargetComprehendMedical20181030DescribeEntitiesDetectionV2JobMutationKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job',
    '/#X-Amz-Target=ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehendMedical20181030DescribeEntitiesDetectionV2JobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetComprehendMedical20181030DescribeEntitiesDetectionV2JobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetComprehendMedical20181030DescribeEntitiesDetectionV2Job<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetComprehendMedical20181030DescribeEntitiesDetectionV2JobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetComprehendMedical20181030DescribeICD10CMInferenceJobMutationKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.DescribeICD10CMInferenceJob',
    '/#X-Amz-Target=ComprehendMedical_20181030.DescribeICD10CMInferenceJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehendMedical20181030DescribeICD10CMInferenceJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DescribeICD10CMInferenceJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehendMedical20181030DescribeICD10CMInferenceJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DescribeICD10CMInferenceJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComprehendMedical_20181030.DescribeICD10CMInferenceJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetComprehendMedical20181030DescribeICD10CMInferenceJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DescribeICD10CMInferenceJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetComprehendMedical20181030DescribeICD10CMInferenceJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetComprehendMedical20181030DescribePHIDetectionJobMutationKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.DescribePHIDetectionJob',
    '/#X-Amz-Target=ComprehendMedical_20181030.DescribePHIDetectionJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehendMedical20181030DescribePHIDetectionJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DescribePHIDetectionJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehendMedical20181030DescribePHIDetectionJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DescribePHIDetectionJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComprehendMedical_20181030.DescribePHIDetectionJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetComprehendMedical20181030DescribePHIDetectionJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DescribePHIDetectionJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetComprehendMedical20181030DescribePHIDetectionJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetComprehendMedical20181030DescribeRxNormInferenceJobMutationKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.DescribeRxNormInferenceJob',
    '/#X-Amz-Target=ComprehendMedical_20181030.DescribeRxNormInferenceJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehendMedical20181030DescribeRxNormInferenceJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DescribeRxNormInferenceJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehendMedical20181030DescribeRxNormInferenceJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DescribeRxNormInferenceJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComprehendMedical_20181030.DescribeRxNormInferenceJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetComprehendMedical20181030DescribeRxNormInferenceJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DescribeRxNormInferenceJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetComprehendMedical20181030DescribeRxNormInferenceJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetComprehendMedical20181030DescribeSNOMEDCTInferenceJobMutationKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.DescribeSNOMEDCTInferenceJob',
    '/#X-Amz-Target=ComprehendMedical_20181030.DescribeSNOMEDCTInferenceJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehendMedical20181030DescribeSNOMEDCTInferenceJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DescribeSNOMEDCTInferenceJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetComprehendMedical20181030DescribeSNOMEDCTInferenceJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DescribeSNOMEDCTInferenceJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComprehendMedical_20181030.DescribeSNOMEDCTInferenceJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetComprehendMedical20181030DescribeSNOMEDCTInferenceJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DescribeSNOMEDCTInferenceJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetComprehendMedical20181030DescribeSNOMEDCTInferenceJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetComprehendMedical20181030DetectEntitiesMutationKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.DetectEntities',
    '/#X-Amz-Target=ComprehendMedical_20181030.DetectEntities',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehendMedical20181030DetectEntitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DetectEntities']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehendMedical20181030DetectEntitiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DetectEntities']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComprehendMedical_20181030.DetectEntities'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetComprehendMedical20181030DetectEntities<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DetectEntities']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetComprehendMedical20181030DetectEntitiesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetComprehendMedical20181030DetectEntitiesV2MutationKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.DetectEntitiesV2',
    '/#X-Amz-Target=ComprehendMedical_20181030.DetectEntitiesV2',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehendMedical20181030DetectEntitiesV2MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DetectEntitiesV2']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehendMedical20181030DetectEntitiesV2MutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DetectEntitiesV2']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComprehendMedical_20181030.DetectEntitiesV2'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetComprehendMedical20181030DetectEntitiesV2<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DetectEntitiesV2']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetComprehendMedical20181030DetectEntitiesV2MutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetComprehendMedical20181030DetectPHIMutationKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.DetectPHI',
    '/#X-Amz-Target=ComprehendMedical_20181030.DetectPHI',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehendMedical20181030DetectPHIMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DetectPHI']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehendMedical20181030DetectPHIMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DetectPHI']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComprehendMedical_20181030.DetectPHI'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetComprehendMedical20181030DetectPHI<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.DetectPHI']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetComprehendMedical20181030DetectPHIMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetComprehendMedical20181030InferICD10CMMutationKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.InferICD10CM',
    '/#X-Amz-Target=ComprehendMedical_20181030.InferICD10CM',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehendMedical20181030InferICD10CMMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.InferICD10CM']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehendMedical20181030InferICD10CMMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.InferICD10CM']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComprehendMedical_20181030.InferICD10CM'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetComprehendMedical20181030InferICD10CM<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.InferICD10CM']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetComprehendMedical20181030InferICD10CMMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetComprehendMedical20181030InferRxNormMutationKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.InferRxNorm',
    '/#X-Amz-Target=ComprehendMedical_20181030.InferRxNorm',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehendMedical20181030InferRxNormMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.InferRxNorm']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehendMedical20181030InferRxNormMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.InferRxNorm']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComprehendMedical_20181030.InferRxNorm'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetComprehendMedical20181030InferRxNorm<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.InferRxNorm']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetComprehendMedical20181030InferRxNormMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetComprehendMedical20181030InferSNOMEDCTMutationKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.InferSNOMEDCT',
    '/#X-Amz-Target=ComprehendMedical_20181030.InferSNOMEDCT',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehendMedical20181030InferSNOMEDCTMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.InferSNOMEDCT']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehendMedical20181030InferSNOMEDCTMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.InferSNOMEDCT']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComprehendMedical_20181030.InferSNOMEDCT'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetComprehendMedical20181030InferSNOMEDCT<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.InferSNOMEDCT']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetComprehendMedical20181030InferSNOMEDCTMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetComprehendMedical20181030ListEntitiesDetectionV2JobsMutationKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.ListEntitiesDetectionV2Jobs',
    '/#X-Amz-Target=ComprehendMedical_20181030.ListEntitiesDetectionV2Jobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehendMedical20181030ListEntitiesDetectionV2JobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.ListEntitiesDetectionV2Jobs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehendMedical20181030ListEntitiesDetectionV2JobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.ListEntitiesDetectionV2Jobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComprehendMedical_20181030.ListEntitiesDetectionV2Jobs'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetComprehendMedical20181030ListEntitiesDetectionV2Jobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.ListEntitiesDetectionV2Jobs']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetComprehendMedical20181030ListEntitiesDetectionV2JobsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetComprehendMedical20181030ListICD10CMInferenceJobsMutationKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.ListICD10CMInferenceJobs',
    '/#X-Amz-Target=ComprehendMedical_20181030.ListICD10CMInferenceJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehendMedical20181030ListICD10CMInferenceJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.ListICD10CMInferenceJobs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehendMedical20181030ListICD10CMInferenceJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.ListICD10CMInferenceJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComprehendMedical_20181030.ListICD10CMInferenceJobs'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetComprehendMedical20181030ListICD10CMInferenceJobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.ListICD10CMInferenceJobs']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetComprehendMedical20181030ListICD10CMInferenceJobsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetComprehendMedical20181030ListPHIDetectionJobsMutationKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.ListPHIDetectionJobs',
    '/#X-Amz-Target=ComprehendMedical_20181030.ListPHIDetectionJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehendMedical20181030ListPHIDetectionJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.ListPHIDetectionJobs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehendMedical20181030ListPHIDetectionJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.ListPHIDetectionJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComprehendMedical_20181030.ListPHIDetectionJobs'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetComprehendMedical20181030ListPHIDetectionJobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.ListPHIDetectionJobs']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetComprehendMedical20181030ListPHIDetectionJobsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetComprehendMedical20181030ListRxNormInferenceJobsMutationKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.ListRxNormInferenceJobs',
    '/#X-Amz-Target=ComprehendMedical_20181030.ListRxNormInferenceJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehendMedical20181030ListRxNormInferenceJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.ListRxNormInferenceJobs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehendMedical20181030ListRxNormInferenceJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.ListRxNormInferenceJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComprehendMedical_20181030.ListRxNormInferenceJobs'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetComprehendMedical20181030ListRxNormInferenceJobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.ListRxNormInferenceJobs']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetComprehendMedical20181030ListRxNormInferenceJobsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetComprehendMedical20181030ListSNOMEDCTInferenceJobsMutationKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.ListSNOMEDCTInferenceJobs',
    '/#X-Amz-Target=ComprehendMedical_20181030.ListSNOMEDCTInferenceJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehendMedical20181030ListSNOMEDCTInferenceJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.ListSNOMEDCTInferenceJobs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehendMedical20181030ListSNOMEDCTInferenceJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.ListSNOMEDCTInferenceJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComprehendMedical_20181030.ListSNOMEDCTInferenceJobs'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetComprehendMedical20181030ListSNOMEDCTInferenceJobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.ListSNOMEDCTInferenceJobs']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetComprehendMedical20181030ListSNOMEDCTInferenceJobsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetComprehendMedical20181030StartEntitiesDetectionV2JobMutationKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.StartEntitiesDetectionV2Job',
    '/#X-Amz-Target=ComprehendMedical_20181030.StartEntitiesDetectionV2Job',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehendMedical20181030StartEntitiesDetectionV2JobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StartEntitiesDetectionV2Job']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehendMedical20181030StartEntitiesDetectionV2JobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StartEntitiesDetectionV2Job']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComprehendMedical_20181030.StartEntitiesDetectionV2Job'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetComprehendMedical20181030StartEntitiesDetectionV2Job<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StartEntitiesDetectionV2Job']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetComprehendMedical20181030StartEntitiesDetectionV2JobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetComprehendMedical20181030StartICD10CMInferenceJobMutationKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.StartICD10CMInferenceJob',
    '/#X-Amz-Target=ComprehendMedical_20181030.StartICD10CMInferenceJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehendMedical20181030StartICD10CMInferenceJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StartICD10CMInferenceJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehendMedical20181030StartICD10CMInferenceJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StartICD10CMInferenceJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComprehendMedical_20181030.StartICD10CMInferenceJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetComprehendMedical20181030StartICD10CMInferenceJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StartICD10CMInferenceJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetComprehendMedical20181030StartICD10CMInferenceJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetComprehendMedical20181030StartPHIDetectionJobMutationKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.StartPHIDetectionJob',
    '/#X-Amz-Target=ComprehendMedical_20181030.StartPHIDetectionJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehendMedical20181030StartPHIDetectionJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StartPHIDetectionJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehendMedical20181030StartPHIDetectionJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StartPHIDetectionJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComprehendMedical_20181030.StartPHIDetectionJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetComprehendMedical20181030StartPHIDetectionJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StartPHIDetectionJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetComprehendMedical20181030StartPHIDetectionJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetComprehendMedical20181030StartRxNormInferenceJobMutationKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.StartRxNormInferenceJob',
    '/#X-Amz-Target=ComprehendMedical_20181030.StartRxNormInferenceJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehendMedical20181030StartRxNormInferenceJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StartRxNormInferenceJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehendMedical20181030StartRxNormInferenceJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StartRxNormInferenceJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComprehendMedical_20181030.StartRxNormInferenceJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetComprehendMedical20181030StartRxNormInferenceJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StartRxNormInferenceJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetComprehendMedical20181030StartRxNormInferenceJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetComprehendMedical20181030StartSNOMEDCTInferenceJobMutationKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.StartSNOMEDCTInferenceJob',
    '/#X-Amz-Target=ComprehendMedical_20181030.StartSNOMEDCTInferenceJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehendMedical20181030StartSNOMEDCTInferenceJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StartSNOMEDCTInferenceJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehendMedical20181030StartSNOMEDCTInferenceJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StartSNOMEDCTInferenceJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComprehendMedical_20181030.StartSNOMEDCTInferenceJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetComprehendMedical20181030StartSNOMEDCTInferenceJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StartSNOMEDCTInferenceJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetComprehendMedical20181030StartSNOMEDCTInferenceJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetComprehendMedical20181030StopEntitiesDetectionV2JobMutationKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.StopEntitiesDetectionV2Job',
    '/#X-Amz-Target=ComprehendMedical_20181030.StopEntitiesDetectionV2Job',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehendMedical20181030StopEntitiesDetectionV2JobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StopEntitiesDetectionV2Job']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehendMedical20181030StopEntitiesDetectionV2JobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StopEntitiesDetectionV2Job']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComprehendMedical_20181030.StopEntitiesDetectionV2Job'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetComprehendMedical20181030StopEntitiesDetectionV2Job<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StopEntitiesDetectionV2Job']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetComprehendMedical20181030StopEntitiesDetectionV2JobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetComprehendMedical20181030StopICD10CMInferenceJobMutationKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.StopICD10CMInferenceJob',
    '/#X-Amz-Target=ComprehendMedical_20181030.StopICD10CMInferenceJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehendMedical20181030StopICD10CMInferenceJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StopICD10CMInferenceJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehendMedical20181030StopICD10CMInferenceJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StopICD10CMInferenceJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComprehendMedical_20181030.StopICD10CMInferenceJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetComprehendMedical20181030StopICD10CMInferenceJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StopICD10CMInferenceJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetComprehendMedical20181030StopICD10CMInferenceJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetComprehendMedical20181030StopPHIDetectionJobMutationKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.StopPHIDetectionJob',
    '/#X-Amz-Target=ComprehendMedical_20181030.StopPHIDetectionJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehendMedical20181030StopPHIDetectionJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StopPHIDetectionJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehendMedical20181030StopPHIDetectionJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StopPHIDetectionJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComprehendMedical_20181030.StopPHIDetectionJob'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetComprehendMedical20181030StopPHIDetectionJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StopPHIDetectionJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetComprehendMedical20181030StopPHIDetectionJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetComprehendMedical20181030StopRxNormInferenceJobMutationKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.StopRxNormInferenceJob',
    '/#X-Amz-Target=ComprehendMedical_20181030.StopRxNormInferenceJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehendMedical20181030StopRxNormInferenceJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StopRxNormInferenceJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehendMedical20181030StopRxNormInferenceJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StopRxNormInferenceJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComprehendMedical_20181030.StopRxNormInferenceJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetComprehendMedical20181030StopRxNormInferenceJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StopRxNormInferenceJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetComprehendMedical20181030StopRxNormInferenceJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetComprehendMedical20181030StopSNOMEDCTInferenceJobMutationKey() {
  return [
    '#X-Amz-Target=ComprehendMedical_20181030.StopSNOMEDCTInferenceJob',
    '/#X-Amz-Target=ComprehendMedical_20181030.StopSNOMEDCTInferenceJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehendMedical20181030StopSNOMEDCTInferenceJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StopSNOMEDCTInferenceJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehendMedical20181030StopSNOMEDCTInferenceJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StopSNOMEDCTInferenceJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComprehendMedical_20181030.StopSNOMEDCTInferenceJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetComprehendMedical20181030StopSNOMEDCTInferenceJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComprehendMedical_20181030.StopSNOMEDCTInferenceJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetComprehendMedical20181030StopSNOMEDCTInferenceJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
