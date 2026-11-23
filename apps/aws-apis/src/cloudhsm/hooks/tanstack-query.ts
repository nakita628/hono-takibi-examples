import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetCloudHsmFrontendServiceAddTagsToResourceKey() {
  return ['#X-Amz-Target=CloudHsmFrontendService.AddTagsToResource'] as const
}

export function getXAmzTargetCloudHsmFrontendServiceCreateHapgKey() {
  return ['#X-Amz-Target=CloudHsmFrontendService.CreateHapg'] as const
}

export function getXAmzTargetCloudHsmFrontendServiceCreateHsmKey() {
  return ['#X-Amz-Target=CloudHsmFrontendService.CreateHsm'] as const
}

export function getXAmzTargetCloudHsmFrontendServiceCreateLunaClientKey() {
  return ['#X-Amz-Target=CloudHsmFrontendService.CreateLunaClient'] as const
}

export function getXAmzTargetCloudHsmFrontendServiceDeleteHapgKey() {
  return ['#X-Amz-Target=CloudHsmFrontendService.DeleteHapg'] as const
}

export function getXAmzTargetCloudHsmFrontendServiceDeleteHsmKey() {
  return ['#X-Amz-Target=CloudHsmFrontendService.DeleteHsm'] as const
}

export function getXAmzTargetCloudHsmFrontendServiceDeleteLunaClientKey() {
  return ['#X-Amz-Target=CloudHsmFrontendService.DeleteLunaClient'] as const
}

export function getXAmzTargetCloudHsmFrontendServiceDescribeHapgKey() {
  return ['#X-Amz-Target=CloudHsmFrontendService.DescribeHapg'] as const
}

export function getXAmzTargetCloudHsmFrontendServiceDescribeHsmKey() {
  return ['#X-Amz-Target=CloudHsmFrontendService.DescribeHsm'] as const
}

export function getXAmzTargetCloudHsmFrontendServiceDescribeLunaClientKey() {
  return ['#X-Amz-Target=CloudHsmFrontendService.DescribeLunaClient'] as const
}

export function getXAmzTargetCloudHsmFrontendServiceGetConfigKey() {
  return ['#X-Amz-Target=CloudHsmFrontendService.GetConfig'] as const
}

export function getXAmzTargetCloudHsmFrontendServiceListAvailableZonesKey() {
  return ['#X-Amz-Target=CloudHsmFrontendService.ListAvailableZones'] as const
}

export function getXAmzTargetCloudHsmFrontendServiceListHapgsKey() {
  return ['#X-Amz-Target=CloudHsmFrontendService.ListHapgs'] as const
}

export function getXAmzTargetCloudHsmFrontendServiceListHsmsKey() {
  return ['#X-Amz-Target=CloudHsmFrontendService.ListHsms'] as const
}

export function getXAmzTargetCloudHsmFrontendServiceListLunaClientsKey() {
  return ['#X-Amz-Target=CloudHsmFrontendService.ListLunaClients'] as const
}

export function getXAmzTargetCloudHsmFrontendServiceListTagsForResourceKey() {
  return ['#X-Amz-Target=CloudHsmFrontendService.ListTagsForResource'] as const
}

export function getXAmzTargetCloudHsmFrontendServiceModifyHapgKey() {
  return ['#X-Amz-Target=CloudHsmFrontendService.ModifyHapg'] as const
}

export function getXAmzTargetCloudHsmFrontendServiceModifyHsmKey() {
  return ['#X-Amz-Target=CloudHsmFrontendService.ModifyHsm'] as const
}

export function getXAmzTargetCloudHsmFrontendServiceModifyLunaClientKey() {
  return ['#X-Amz-Target=CloudHsmFrontendService.ModifyLunaClient'] as const
}

export function getXAmzTargetCloudHsmFrontendServiceRemoveTagsFromResourceKey() {
  return ['#X-Amz-Target=CloudHsmFrontendService.RemoveTagsFromResource'] as const
}

export function getPostXAmzTargetCloudHsmFrontendServiceAddTagsToResourceMutationKey() {
  return [
    '#X-Amz-Target=CloudHsmFrontendService.AddTagsToResource',
    '/#X-Amz-Target=CloudHsmFrontendService.AddTagsToResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetCloudHsmFrontendServiceAddTagsToResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CloudHsmFrontendService.AddTagsToResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CloudHsmFrontendService.AddTagsToResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCloudHsmFrontendServiceAddTagsToResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CloudHsmFrontendService.AddTagsToResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CloudHsmFrontendService.AddTagsToResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCloudHsmFrontendServiceAddTagsToResource<
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
                  (typeof client)['#X-Amz-Target=CloudHsmFrontendService.AddTagsToResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CloudHsmFrontendService.AddTagsToResource']['$post']
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
  const mutationDefaults = getPostXAmzTargetCloudHsmFrontendServiceAddTagsToResourceMutationOptions<
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

export function getPostXAmzTargetCloudHsmFrontendServiceCreateHapgMutationKey() {
  return [
    '#X-Amz-Target=CloudHsmFrontendService.CreateHapg',
    '/#X-Amz-Target=CloudHsmFrontendService.CreateHapg',
    'POST',
  ] as const
}

export function getPostXAmzTargetCloudHsmFrontendServiceCreateHapgMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CloudHsmFrontendService.CreateHapg']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=CloudHsmFrontendService.CreateHapg']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCloudHsmFrontendServiceCreateHapgMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CloudHsmFrontendService.CreateHapg']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CloudHsmFrontendService.CreateHapg'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCloudHsmFrontendServiceCreateHapg<
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
                  (typeof client)['#X-Amz-Target=CloudHsmFrontendService.CreateHapg']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CloudHsmFrontendService.CreateHapg']['$post']
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
  const mutationDefaults = getPostXAmzTargetCloudHsmFrontendServiceCreateHapgMutationOptions<
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

export function getPostXAmzTargetCloudHsmFrontendServiceCreateHsmMutationKey() {
  return [
    '#X-Amz-Target=CloudHsmFrontendService.CreateHsm',
    '/#X-Amz-Target=CloudHsmFrontendService.CreateHsm',
    'POST',
  ] as const
}

export function getPostXAmzTargetCloudHsmFrontendServiceCreateHsmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CloudHsmFrontendService.CreateHsm']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=CloudHsmFrontendService.CreateHsm']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCloudHsmFrontendServiceCreateHsmMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CloudHsmFrontendService.CreateHsm']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CloudHsmFrontendService.CreateHsm'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCloudHsmFrontendServiceCreateHsm<
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
                  (typeof client)['#X-Amz-Target=CloudHsmFrontendService.CreateHsm']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CloudHsmFrontendService.CreateHsm']['$post']
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
  const mutationDefaults = getPostXAmzTargetCloudHsmFrontendServiceCreateHsmMutationOptions<
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

export function getPostXAmzTargetCloudHsmFrontendServiceCreateLunaClientMutationKey() {
  return [
    '#X-Amz-Target=CloudHsmFrontendService.CreateLunaClient',
    '/#X-Amz-Target=CloudHsmFrontendService.CreateLunaClient',
    'POST',
  ] as const
}

export function getPostXAmzTargetCloudHsmFrontendServiceCreateLunaClientMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CloudHsmFrontendService.CreateLunaClient']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CloudHsmFrontendService.CreateLunaClient']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCloudHsmFrontendServiceCreateLunaClientMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CloudHsmFrontendService.CreateLunaClient']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CloudHsmFrontendService.CreateLunaClient'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCloudHsmFrontendServiceCreateLunaClient<
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
                  (typeof client)['#X-Amz-Target=CloudHsmFrontendService.CreateLunaClient']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CloudHsmFrontendService.CreateLunaClient']['$post']
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
  const mutationDefaults = getPostXAmzTargetCloudHsmFrontendServiceCreateLunaClientMutationOptions<
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

export function getPostXAmzTargetCloudHsmFrontendServiceDeleteHapgMutationKey() {
  return [
    '#X-Amz-Target=CloudHsmFrontendService.DeleteHapg',
    '/#X-Amz-Target=CloudHsmFrontendService.DeleteHapg',
    'POST',
  ] as const
}

export function getPostXAmzTargetCloudHsmFrontendServiceDeleteHapgMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CloudHsmFrontendService.DeleteHapg']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=CloudHsmFrontendService.DeleteHapg']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCloudHsmFrontendServiceDeleteHapgMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CloudHsmFrontendService.DeleteHapg']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CloudHsmFrontendService.DeleteHapg'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCloudHsmFrontendServiceDeleteHapg<
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
                  (typeof client)['#X-Amz-Target=CloudHsmFrontendService.DeleteHapg']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CloudHsmFrontendService.DeleteHapg']['$post']
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
  const mutationDefaults = getPostXAmzTargetCloudHsmFrontendServiceDeleteHapgMutationOptions<
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

export function getPostXAmzTargetCloudHsmFrontendServiceDeleteHsmMutationKey() {
  return [
    '#X-Amz-Target=CloudHsmFrontendService.DeleteHsm',
    '/#X-Amz-Target=CloudHsmFrontendService.DeleteHsm',
    'POST',
  ] as const
}

export function getPostXAmzTargetCloudHsmFrontendServiceDeleteHsmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CloudHsmFrontendService.DeleteHsm']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=CloudHsmFrontendService.DeleteHsm']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCloudHsmFrontendServiceDeleteHsmMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CloudHsmFrontendService.DeleteHsm']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CloudHsmFrontendService.DeleteHsm'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCloudHsmFrontendServiceDeleteHsm<
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
                  (typeof client)['#X-Amz-Target=CloudHsmFrontendService.DeleteHsm']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CloudHsmFrontendService.DeleteHsm']['$post']
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
  const mutationDefaults = getPostXAmzTargetCloudHsmFrontendServiceDeleteHsmMutationOptions<
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

export function getPostXAmzTargetCloudHsmFrontendServiceDeleteLunaClientMutationKey() {
  return [
    '#X-Amz-Target=CloudHsmFrontendService.DeleteLunaClient',
    '/#X-Amz-Target=CloudHsmFrontendService.DeleteLunaClient',
    'POST',
  ] as const
}

export function getPostXAmzTargetCloudHsmFrontendServiceDeleteLunaClientMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CloudHsmFrontendService.DeleteLunaClient']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CloudHsmFrontendService.DeleteLunaClient']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCloudHsmFrontendServiceDeleteLunaClientMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CloudHsmFrontendService.DeleteLunaClient']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CloudHsmFrontendService.DeleteLunaClient'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCloudHsmFrontendServiceDeleteLunaClient<
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
                  (typeof client)['#X-Amz-Target=CloudHsmFrontendService.DeleteLunaClient']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CloudHsmFrontendService.DeleteLunaClient']['$post']
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
  const mutationDefaults = getPostXAmzTargetCloudHsmFrontendServiceDeleteLunaClientMutationOptions<
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

export function getPostXAmzTargetCloudHsmFrontendServiceDescribeHapgMutationKey() {
  return [
    '#X-Amz-Target=CloudHsmFrontendService.DescribeHapg',
    '/#X-Amz-Target=CloudHsmFrontendService.DescribeHapg',
    'POST',
  ] as const
}

export function getPostXAmzTargetCloudHsmFrontendServiceDescribeHapgMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CloudHsmFrontendService.DescribeHapg']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CloudHsmFrontendService.DescribeHapg']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCloudHsmFrontendServiceDescribeHapgMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CloudHsmFrontendService.DescribeHapg']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CloudHsmFrontendService.DescribeHapg'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCloudHsmFrontendServiceDescribeHapg<
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
                  (typeof client)['#X-Amz-Target=CloudHsmFrontendService.DescribeHapg']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CloudHsmFrontendService.DescribeHapg']['$post']
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
  const mutationDefaults = getPostXAmzTargetCloudHsmFrontendServiceDescribeHapgMutationOptions<
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

export function getPostXAmzTargetCloudHsmFrontendServiceDescribeHsmMutationKey() {
  return [
    '#X-Amz-Target=CloudHsmFrontendService.DescribeHsm',
    '/#X-Amz-Target=CloudHsmFrontendService.DescribeHsm',
    'POST',
  ] as const
}

export function getPostXAmzTargetCloudHsmFrontendServiceDescribeHsmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CloudHsmFrontendService.DescribeHsm']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=CloudHsmFrontendService.DescribeHsm']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCloudHsmFrontendServiceDescribeHsmMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CloudHsmFrontendService.DescribeHsm']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CloudHsmFrontendService.DescribeHsm'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCloudHsmFrontendServiceDescribeHsm<
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
                  (typeof client)['#X-Amz-Target=CloudHsmFrontendService.DescribeHsm']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CloudHsmFrontendService.DescribeHsm']['$post']
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
  const mutationDefaults = getPostXAmzTargetCloudHsmFrontendServiceDescribeHsmMutationOptions<
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

export function getPostXAmzTargetCloudHsmFrontendServiceDescribeLunaClientMutationKey() {
  return [
    '#X-Amz-Target=CloudHsmFrontendService.DescribeLunaClient',
    '/#X-Amz-Target=CloudHsmFrontendService.DescribeLunaClient',
    'POST',
  ] as const
}

export function getPostXAmzTargetCloudHsmFrontendServiceDescribeLunaClientMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CloudHsmFrontendService.DescribeLunaClient']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CloudHsmFrontendService.DescribeLunaClient']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCloudHsmFrontendServiceDescribeLunaClientMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CloudHsmFrontendService.DescribeLunaClient']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CloudHsmFrontendService.DescribeLunaClient'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCloudHsmFrontendServiceDescribeLunaClient<
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
                  (typeof client)['#X-Amz-Target=CloudHsmFrontendService.DescribeLunaClient']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CloudHsmFrontendService.DescribeLunaClient']['$post']
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
    getPostXAmzTargetCloudHsmFrontendServiceDescribeLunaClientMutationOptions<
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

export function getPostXAmzTargetCloudHsmFrontendServiceGetConfigMutationKey() {
  return [
    '#X-Amz-Target=CloudHsmFrontendService.GetConfig',
    '/#X-Amz-Target=CloudHsmFrontendService.GetConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetCloudHsmFrontendServiceGetConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CloudHsmFrontendService.GetConfig']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=CloudHsmFrontendService.GetConfig']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCloudHsmFrontendServiceGetConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CloudHsmFrontendService.GetConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CloudHsmFrontendService.GetConfig'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCloudHsmFrontendServiceGetConfig<
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
                  (typeof client)['#X-Amz-Target=CloudHsmFrontendService.GetConfig']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CloudHsmFrontendService.GetConfig']['$post']
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
  const mutationDefaults = getPostXAmzTargetCloudHsmFrontendServiceGetConfigMutationOptions<
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

export function getPostXAmzTargetCloudHsmFrontendServiceListAvailableZonesMutationKey() {
  return [
    '#X-Amz-Target=CloudHsmFrontendService.ListAvailableZones',
    '/#X-Amz-Target=CloudHsmFrontendService.ListAvailableZones',
    'POST',
  ] as const
}

export function getPostXAmzTargetCloudHsmFrontendServiceListAvailableZonesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ListAvailableZones']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ListAvailableZones']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCloudHsmFrontendServiceListAvailableZonesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ListAvailableZones']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CloudHsmFrontendService.ListAvailableZones'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCloudHsmFrontendServiceListAvailableZones<
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
                  (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ListAvailableZones']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ListAvailableZones']['$post']
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
    getPostXAmzTargetCloudHsmFrontendServiceListAvailableZonesMutationOptions<
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

export function getPostXAmzTargetCloudHsmFrontendServiceListHapgsMutationKey() {
  return [
    '#X-Amz-Target=CloudHsmFrontendService.ListHapgs',
    '/#X-Amz-Target=CloudHsmFrontendService.ListHapgs',
    'POST',
  ] as const
}

export function getPostXAmzTargetCloudHsmFrontendServiceListHapgsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CloudHsmFrontendService.ListHapgs']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=CloudHsmFrontendService.ListHapgs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCloudHsmFrontendServiceListHapgsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ListHapgs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CloudHsmFrontendService.ListHapgs'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCloudHsmFrontendServiceListHapgs<
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
                  (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ListHapgs']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ListHapgs']['$post']
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
  const mutationDefaults = getPostXAmzTargetCloudHsmFrontendServiceListHapgsMutationOptions<
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

export function getPostXAmzTargetCloudHsmFrontendServiceListHsmsMutationKey() {
  return [
    '#X-Amz-Target=CloudHsmFrontendService.ListHsms',
    '/#X-Amz-Target=CloudHsmFrontendService.ListHsms',
    'POST',
  ] as const
}

export function getPostXAmzTargetCloudHsmFrontendServiceListHsmsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CloudHsmFrontendService.ListHsms']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=CloudHsmFrontendService.ListHsms']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCloudHsmFrontendServiceListHsmsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ListHsms']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CloudHsmFrontendService.ListHsms'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCloudHsmFrontendServiceListHsms<
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
                  (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ListHsms']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ListHsms']['$post']
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
  const mutationDefaults = getPostXAmzTargetCloudHsmFrontendServiceListHsmsMutationOptions<
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

export function getPostXAmzTargetCloudHsmFrontendServiceListLunaClientsMutationKey() {
  return [
    '#X-Amz-Target=CloudHsmFrontendService.ListLunaClients',
    '/#X-Amz-Target=CloudHsmFrontendService.ListLunaClients',
    'POST',
  ] as const
}

export function getPostXAmzTargetCloudHsmFrontendServiceListLunaClientsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ListLunaClients']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ListLunaClients']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCloudHsmFrontendServiceListLunaClientsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ListLunaClients']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CloudHsmFrontendService.ListLunaClients'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCloudHsmFrontendServiceListLunaClients<
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
                  (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ListLunaClients']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ListLunaClients']['$post']
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
  const mutationDefaults = getPostXAmzTargetCloudHsmFrontendServiceListLunaClientsMutationOptions<
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

export function getPostXAmzTargetCloudHsmFrontendServiceListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=CloudHsmFrontendService.ListTagsForResource',
    '/#X-Amz-Target=CloudHsmFrontendService.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetCloudHsmFrontendServiceListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCloudHsmFrontendServiceListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CloudHsmFrontendService.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCloudHsmFrontendServiceListTagsForResource<
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
                  (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ListTagsForResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ListTagsForResource']['$post']
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
    getPostXAmzTargetCloudHsmFrontendServiceListTagsForResourceMutationOptions<
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

export function getPostXAmzTargetCloudHsmFrontendServiceModifyHapgMutationKey() {
  return [
    '#X-Amz-Target=CloudHsmFrontendService.ModifyHapg',
    '/#X-Amz-Target=CloudHsmFrontendService.ModifyHapg',
    'POST',
  ] as const
}

export function getPostXAmzTargetCloudHsmFrontendServiceModifyHapgMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CloudHsmFrontendService.ModifyHapg']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=CloudHsmFrontendService.ModifyHapg']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCloudHsmFrontendServiceModifyHapgMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ModifyHapg']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CloudHsmFrontendService.ModifyHapg'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCloudHsmFrontendServiceModifyHapg<
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
                  (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ModifyHapg']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ModifyHapg']['$post']
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
  const mutationDefaults = getPostXAmzTargetCloudHsmFrontendServiceModifyHapgMutationOptions<
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

export function getPostXAmzTargetCloudHsmFrontendServiceModifyHsmMutationKey() {
  return [
    '#X-Amz-Target=CloudHsmFrontendService.ModifyHsm',
    '/#X-Amz-Target=CloudHsmFrontendService.ModifyHsm',
    'POST',
  ] as const
}

export function getPostXAmzTargetCloudHsmFrontendServiceModifyHsmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CloudHsmFrontendService.ModifyHsm']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=CloudHsmFrontendService.ModifyHsm']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCloudHsmFrontendServiceModifyHsmMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ModifyHsm']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CloudHsmFrontendService.ModifyHsm'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCloudHsmFrontendServiceModifyHsm<
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
                  (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ModifyHsm']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ModifyHsm']['$post']
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
  const mutationDefaults = getPostXAmzTargetCloudHsmFrontendServiceModifyHsmMutationOptions<
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

export function getPostXAmzTargetCloudHsmFrontendServiceModifyLunaClientMutationKey() {
  return [
    '#X-Amz-Target=CloudHsmFrontendService.ModifyLunaClient',
    '/#X-Amz-Target=CloudHsmFrontendService.ModifyLunaClient',
    'POST',
  ] as const
}

export function getPostXAmzTargetCloudHsmFrontendServiceModifyLunaClientMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ModifyLunaClient']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ModifyLunaClient']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCloudHsmFrontendServiceModifyLunaClientMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ModifyLunaClient']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CloudHsmFrontendService.ModifyLunaClient'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCloudHsmFrontendServiceModifyLunaClient<
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
                  (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ModifyLunaClient']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ModifyLunaClient']['$post']
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
  const mutationDefaults = getPostXAmzTargetCloudHsmFrontendServiceModifyLunaClientMutationOptions<
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

export function getPostXAmzTargetCloudHsmFrontendServiceRemoveTagsFromResourceMutationKey() {
  return [
    '#X-Amz-Target=CloudHsmFrontendService.RemoveTagsFromResource',
    '/#X-Amz-Target=CloudHsmFrontendService.RemoveTagsFromResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetCloudHsmFrontendServiceRemoveTagsFromResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CloudHsmFrontendService.RemoveTagsFromResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CloudHsmFrontendService.RemoveTagsFromResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCloudHsmFrontendServiceRemoveTagsFromResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CloudHsmFrontendService.RemoveTagsFromResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CloudHsmFrontendService.RemoveTagsFromResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCloudHsmFrontendServiceRemoveTagsFromResource<
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
                  (typeof client)['#X-Amz-Target=CloudHsmFrontendService.RemoveTagsFromResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CloudHsmFrontendService.RemoveTagsFromResource']['$post']
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
    getPostXAmzTargetCloudHsmFrontendServiceRemoveTagsFromResourceMutationOptions<
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
