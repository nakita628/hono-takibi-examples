import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetCloudHsmFrontendServiceAddTagsToResourceKey() {
  return [
    '#X-Amz-Target=CloudHsmFrontendService.AddTagsToResource',
    '/#X-Amz-Target=CloudHsmFrontendService.AddTagsToResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetCloudHsmFrontendServiceAddTagsToResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CloudHsmFrontendService.AddTagsToResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCloudHsmFrontendServiceAddTagsToResourceKey()
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
            (typeof client)['#X-Amz-Target=CloudHsmFrontendService.AddTagsToResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CloudHsmFrontendService.AddTagsToResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCloudHsmFrontendServiceCreateHapgKey() {
  return [
    '#X-Amz-Target=CloudHsmFrontendService.CreateHapg',
    '/#X-Amz-Target=CloudHsmFrontendService.CreateHapg',
    'POST',
  ] as const
}

export function usePostXAmzTargetCloudHsmFrontendServiceCreateHapg<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CloudHsmFrontendService.CreateHapg']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCloudHsmFrontendServiceCreateHapgKey()
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
            (typeof client)['#X-Amz-Target=CloudHsmFrontendService.CreateHapg']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CloudHsmFrontendService.CreateHapg'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCloudHsmFrontendServiceCreateHsmKey() {
  return [
    '#X-Amz-Target=CloudHsmFrontendService.CreateHsm',
    '/#X-Amz-Target=CloudHsmFrontendService.CreateHsm',
    'POST',
  ] as const
}

export function usePostXAmzTargetCloudHsmFrontendServiceCreateHsm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CloudHsmFrontendService.CreateHsm']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCloudHsmFrontendServiceCreateHsmKey()
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
            (typeof client)['#X-Amz-Target=CloudHsmFrontendService.CreateHsm']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CloudHsmFrontendService.CreateHsm'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCloudHsmFrontendServiceCreateLunaClientKey() {
  return [
    '#X-Amz-Target=CloudHsmFrontendService.CreateLunaClient',
    '/#X-Amz-Target=CloudHsmFrontendService.CreateLunaClient',
    'POST',
  ] as const
}

export function usePostXAmzTargetCloudHsmFrontendServiceCreateLunaClient<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CloudHsmFrontendService.CreateLunaClient']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCloudHsmFrontendServiceCreateLunaClientKey()
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
            (typeof client)['#X-Amz-Target=CloudHsmFrontendService.CreateLunaClient']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CloudHsmFrontendService.CreateLunaClient'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCloudHsmFrontendServiceDeleteHapgKey() {
  return [
    '#X-Amz-Target=CloudHsmFrontendService.DeleteHapg',
    '/#X-Amz-Target=CloudHsmFrontendService.DeleteHapg',
    'POST',
  ] as const
}

export function usePostXAmzTargetCloudHsmFrontendServiceDeleteHapg<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CloudHsmFrontendService.DeleteHapg']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCloudHsmFrontendServiceDeleteHapgKey()
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
            (typeof client)['#X-Amz-Target=CloudHsmFrontendService.DeleteHapg']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CloudHsmFrontendService.DeleteHapg'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCloudHsmFrontendServiceDeleteHsmKey() {
  return [
    '#X-Amz-Target=CloudHsmFrontendService.DeleteHsm',
    '/#X-Amz-Target=CloudHsmFrontendService.DeleteHsm',
    'POST',
  ] as const
}

export function usePostXAmzTargetCloudHsmFrontendServiceDeleteHsm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CloudHsmFrontendService.DeleteHsm']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCloudHsmFrontendServiceDeleteHsmKey()
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
            (typeof client)['#X-Amz-Target=CloudHsmFrontendService.DeleteHsm']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CloudHsmFrontendService.DeleteHsm'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCloudHsmFrontendServiceDeleteLunaClientKey() {
  return [
    '#X-Amz-Target=CloudHsmFrontendService.DeleteLunaClient',
    '/#X-Amz-Target=CloudHsmFrontendService.DeleteLunaClient',
    'POST',
  ] as const
}

export function usePostXAmzTargetCloudHsmFrontendServiceDeleteLunaClient<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CloudHsmFrontendService.DeleteLunaClient']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCloudHsmFrontendServiceDeleteLunaClientKey()
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
            (typeof client)['#X-Amz-Target=CloudHsmFrontendService.DeleteLunaClient']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CloudHsmFrontendService.DeleteLunaClient'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCloudHsmFrontendServiceDescribeHapgKey() {
  return [
    '#X-Amz-Target=CloudHsmFrontendService.DescribeHapg',
    '/#X-Amz-Target=CloudHsmFrontendService.DescribeHapg',
    'POST',
  ] as const
}

export function usePostXAmzTargetCloudHsmFrontendServiceDescribeHapg<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CloudHsmFrontendService.DescribeHapg']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCloudHsmFrontendServiceDescribeHapgKey()
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
            (typeof client)['#X-Amz-Target=CloudHsmFrontendService.DescribeHapg']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CloudHsmFrontendService.DescribeHapg'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCloudHsmFrontendServiceDescribeHsmKey() {
  return [
    '#X-Amz-Target=CloudHsmFrontendService.DescribeHsm',
    '/#X-Amz-Target=CloudHsmFrontendService.DescribeHsm',
    'POST',
  ] as const
}

export function usePostXAmzTargetCloudHsmFrontendServiceDescribeHsm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CloudHsmFrontendService.DescribeHsm']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCloudHsmFrontendServiceDescribeHsmKey()
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
            (typeof client)['#X-Amz-Target=CloudHsmFrontendService.DescribeHsm']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CloudHsmFrontendService.DescribeHsm'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCloudHsmFrontendServiceDescribeLunaClientKey() {
  return [
    '#X-Amz-Target=CloudHsmFrontendService.DescribeLunaClient',
    '/#X-Amz-Target=CloudHsmFrontendService.DescribeLunaClient',
    'POST',
  ] as const
}

export function usePostXAmzTargetCloudHsmFrontendServiceDescribeLunaClient<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CloudHsmFrontendService.DescribeLunaClient']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCloudHsmFrontendServiceDescribeLunaClientKey()
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
            (typeof client)['#X-Amz-Target=CloudHsmFrontendService.DescribeLunaClient']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CloudHsmFrontendService.DescribeLunaClient'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCloudHsmFrontendServiceGetConfigKey() {
  return [
    '#X-Amz-Target=CloudHsmFrontendService.GetConfig',
    '/#X-Amz-Target=CloudHsmFrontendService.GetConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetCloudHsmFrontendServiceGetConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CloudHsmFrontendService.GetConfig']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCloudHsmFrontendServiceGetConfigKey()
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
            (typeof client)['#X-Amz-Target=CloudHsmFrontendService.GetConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CloudHsmFrontendService.GetConfig'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCloudHsmFrontendServiceListAvailableZonesKey() {
  return [
    '#X-Amz-Target=CloudHsmFrontendService.ListAvailableZones',
    '/#X-Amz-Target=CloudHsmFrontendService.ListAvailableZones',
    'POST',
  ] as const
}

export function usePostXAmzTargetCloudHsmFrontendServiceListAvailableZones<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ListAvailableZones']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCloudHsmFrontendServiceListAvailableZonesKey()
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
            (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ListAvailableZones']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CloudHsmFrontendService.ListAvailableZones'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCloudHsmFrontendServiceListHapgsKey() {
  return [
    '#X-Amz-Target=CloudHsmFrontendService.ListHapgs',
    '/#X-Amz-Target=CloudHsmFrontendService.ListHapgs',
    'POST',
  ] as const
}

export function usePostXAmzTargetCloudHsmFrontendServiceListHapgs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CloudHsmFrontendService.ListHapgs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCloudHsmFrontendServiceListHapgsKey()
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
            (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ListHapgs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CloudHsmFrontendService.ListHapgs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCloudHsmFrontendServiceListHsmsKey() {
  return [
    '#X-Amz-Target=CloudHsmFrontendService.ListHsms',
    '/#X-Amz-Target=CloudHsmFrontendService.ListHsms',
    'POST',
  ] as const
}

export function usePostXAmzTargetCloudHsmFrontendServiceListHsms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CloudHsmFrontendService.ListHsms']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCloudHsmFrontendServiceListHsmsKey()
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
            (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ListHsms']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CloudHsmFrontendService.ListHsms'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCloudHsmFrontendServiceListLunaClientsKey() {
  return [
    '#X-Amz-Target=CloudHsmFrontendService.ListLunaClients',
    '/#X-Amz-Target=CloudHsmFrontendService.ListLunaClients',
    'POST',
  ] as const
}

export function usePostXAmzTargetCloudHsmFrontendServiceListLunaClients<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ListLunaClients']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCloudHsmFrontendServiceListLunaClientsKey()
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
            (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ListLunaClients']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CloudHsmFrontendService.ListLunaClients'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCloudHsmFrontendServiceListTagsForResourceKey() {
  return [
    '#X-Amz-Target=CloudHsmFrontendService.ListTagsForResource',
    '/#X-Amz-Target=CloudHsmFrontendService.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetCloudHsmFrontendServiceListTagsForResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCloudHsmFrontendServiceListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CloudHsmFrontendService.ListTagsForResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCloudHsmFrontendServiceModifyHapgKey() {
  return [
    '#X-Amz-Target=CloudHsmFrontendService.ModifyHapg',
    '/#X-Amz-Target=CloudHsmFrontendService.ModifyHapg',
    'POST',
  ] as const
}

export function usePostXAmzTargetCloudHsmFrontendServiceModifyHapg<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CloudHsmFrontendService.ModifyHapg']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCloudHsmFrontendServiceModifyHapgKey()
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
            (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ModifyHapg']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CloudHsmFrontendService.ModifyHapg'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCloudHsmFrontendServiceModifyHsmKey() {
  return [
    '#X-Amz-Target=CloudHsmFrontendService.ModifyHsm',
    '/#X-Amz-Target=CloudHsmFrontendService.ModifyHsm',
    'POST',
  ] as const
}

export function usePostXAmzTargetCloudHsmFrontendServiceModifyHsm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CloudHsmFrontendService.ModifyHsm']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCloudHsmFrontendServiceModifyHsmKey()
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
            (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ModifyHsm']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CloudHsmFrontendService.ModifyHsm'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCloudHsmFrontendServiceModifyLunaClientKey() {
  return [
    '#X-Amz-Target=CloudHsmFrontendService.ModifyLunaClient',
    '/#X-Amz-Target=CloudHsmFrontendService.ModifyLunaClient',
    'POST',
  ] as const
}

export function usePostXAmzTargetCloudHsmFrontendServiceModifyLunaClient<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ModifyLunaClient']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCloudHsmFrontendServiceModifyLunaClientKey()
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
            (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ModifyLunaClient']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CloudHsmFrontendService.ModifyLunaClient'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCloudHsmFrontendServiceRemoveTagsFromResourceKey() {
  return [
    '#X-Amz-Target=CloudHsmFrontendService.RemoveTagsFromResource',
    '/#X-Amz-Target=CloudHsmFrontendService.RemoveTagsFromResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetCloudHsmFrontendServiceRemoveTagsFromResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CloudHsmFrontendService.RemoveTagsFromResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCloudHsmFrontendServiceRemoveTagsFromResourceKey()
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
            (typeof client)['#X-Amz-Target=CloudHsmFrontendService.RemoveTagsFromResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CloudHsmFrontendService.RemoveTagsFromResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
