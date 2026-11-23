import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV2Key() {
  return ['v2'] as const
}

export function getPutV2BotAudienceGroupUploadMutationKey() {
  return ['v2', '/v2/bot/audienceGroup/upload', 'PUT'] as const
}

export function getPutV2BotAudienceGroupUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.audienceGroup.upload.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.bot.audienceGroup.upload.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV2BotAudienceGroupUploadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.bot.audienceGroup.upload.$put>) {
      return parseResponse(client.v2.bot.audienceGroup.upload.$put(args, options))
    },
  })
}

export function usePutV2BotAudienceGroupUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.bot.audienceGroup.upload.$put>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v2.bot.audienceGroup.upload.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2BotAudienceGroupUploadMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV2BotAudienceGroupUploadMutationKey() {
  return ['v2', '/v2/bot/audienceGroup/upload', 'POST'] as const
}

export function getPostV2BotAudienceGroupUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.audienceGroup.upload.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.bot.audienceGroup.upload.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BotAudienceGroupUploadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.bot.audienceGroup.upload.$post>) {
      return parseResponse(client.v2.bot.audienceGroup.upload.$post(args, options))
    },
  })
}

export function usePostV2BotAudienceGroupUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.bot.audienceGroup.upload.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v2.bot.audienceGroup.upload.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2BotAudienceGroupUploadMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutV2BotAudienceGroupUploadByFileMutationKey() {
  return ['v2', '/v2/bot/audienceGroup/upload/byFile', 'PUT'] as const
}

export function getPutV2BotAudienceGroupUploadByFileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.bot.audienceGroup.upload.byFile.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v2.bot.audienceGroup.upload.byFile.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV2BotAudienceGroupUploadByFileMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v2.bot.audienceGroup.upload.byFile.$put>,
    ) {
      return parseResponse(client.v2.bot.audienceGroup.upload.byFile.$put(args, options))
    },
  })
}

export function usePutV2BotAudienceGroupUploadByFile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.bot.audienceGroup.upload.byFile.$put>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v2.bot.audienceGroup.upload.byFile.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2BotAudienceGroupUploadByFileMutationOptions<
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

export function getPostV2BotAudienceGroupUploadByFileMutationKey() {
  return ['v2', '/v2/bot/audienceGroup/upload/byFile', 'POST'] as const
}

export function getPostV2BotAudienceGroupUploadByFileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.bot.audienceGroup.upload.byFile.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v2.bot.audienceGroup.upload.byFile.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BotAudienceGroupUploadByFileMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v2.bot.audienceGroup.upload.byFile.$post>,
    ) {
      return parseResponse(client.v2.bot.audienceGroup.upload.byFile.$post(args, options))
    },
  })
}

export function usePostV2BotAudienceGroupUploadByFile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.bot.audienceGroup.upload.byFile.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v2.bot.audienceGroup.upload.byFile.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2BotAudienceGroupUploadByFileMutationOptions<
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

export function getPostV2BotAudienceGroupClickMutationKey() {
  return ['v2', '/v2/bot/audienceGroup/click', 'POST'] as const
}

export function getPostV2BotAudienceGroupClickMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.audienceGroup.click.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.bot.audienceGroup.click.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BotAudienceGroupClickMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.bot.audienceGroup.click.$post>) {
      return parseResponse(client.v2.bot.audienceGroup.click.$post(args, options))
    },
  })
}

export function usePostV2BotAudienceGroupClick<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.bot.audienceGroup.click.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v2.bot.audienceGroup.click.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2BotAudienceGroupClickMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV2BotAudienceGroupImpMutationKey() {
  return ['v2', '/v2/bot/audienceGroup/imp', 'POST'] as const
}

export function getPostV2BotAudienceGroupImpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.audienceGroup.imp.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.bot.audienceGroup.imp.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BotAudienceGroupImpMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.bot.audienceGroup.imp.$post>) {
      return parseResponse(client.v2.bot.audienceGroup.imp.$post(args, options))
    },
  })
}

export function usePostV2BotAudienceGroupImp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.audienceGroup.imp.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.bot.audienceGroup.imp.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2BotAudienceGroupImpMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutV2BotAudienceGroupAudienceGroupIdUpdateDescriptionMutationKey() {
  return ['v2', '/v2/bot/audienceGroup/:audienceGroupId/updateDescription', 'PUT'] as const
}

export function getPutV2BotAudienceGroupAudienceGroupIdUpdateDescriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.bot.audienceGroup)[':audienceGroupId']['updateDescription']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.bot.audienceGroup)[':audienceGroupId']['updateDescription']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2BotAudienceGroupAudienceGroupIdUpdateDescriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.bot.audienceGroup)[':audienceGroupId']['updateDescription']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.bot.audienceGroup[':audienceGroupId'].updateDescription.$put(args, options),
      )
    },
  })
}

export function usePutV2BotAudienceGroupAudienceGroupIdUpdateDescription<
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
                  (typeof client.v2.bot.audienceGroup)[':audienceGroupId']['updateDescription']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.bot.audienceGroup)[':audienceGroupId']['updateDescription']['$put']
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
  const mutationDefaults = getPutV2BotAudienceGroupAudienceGroupIdUpdateDescriptionMutationOptions<
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

export function getV2BotAudienceGroupAudienceGroupIdQueryKey(
  args: InferRequestType<(typeof client.v2.bot.audienceGroup)[':audienceGroupId']['$get']>,
) {
  return ['v2', '/v2/bot/audienceGroup/:audienceGroupId', args] as const
}

export function getV2BotAudienceGroupAudienceGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.audienceGroup)[':audienceGroupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.bot.audienceGroup)[':audienceGroupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bot.audienceGroup)[':audienceGroupId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotAudienceGroupAudienceGroupIdQueryKey>
  >({
    queryKey: getV2BotAudienceGroupAudienceGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.audienceGroup[':audienceGroupId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2BotAudienceGroupAudienceGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.audienceGroup)[':audienceGroupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.bot.audienceGroup)[':audienceGroupId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.bot.audienceGroup)[':audienceGroupId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BotAudienceGroupAudienceGroupIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2BotAudienceGroupAudienceGroupIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2BotAudienceGroupAudienceGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.audienceGroup)[':audienceGroupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.bot.audienceGroup)[':audienceGroupId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.bot.audienceGroup)[':audienceGroupId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BotAudienceGroupAudienceGroupIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2BotAudienceGroupAudienceGroupIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV2BotAudienceGroupAudienceGroupIdMutationKey() {
  return ['v2', '/v2/bot/audienceGroup/:audienceGroupId', 'DELETE'] as const
}

export function getDeleteV2BotAudienceGroupAudienceGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bot.audienceGroup)[':audienceGroupId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.bot.audienceGroup)[':audienceGroupId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2BotAudienceGroupAudienceGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.bot.audienceGroup)[':audienceGroupId']['$delete']>,
    ) {
      return parseResponse(client.v2.bot.audienceGroup[':audienceGroupId'].$delete(args, options))
    },
  })
}

export function useDeleteV2BotAudienceGroupAudienceGroupId<
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
                ReturnType<(typeof client.v2.bot.audienceGroup)[':audienceGroupId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.bot.audienceGroup)[':audienceGroupId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2BotAudienceGroupAudienceGroupIdMutationOptions<
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

export function getV2BotAudienceGroupListQueryKey(
  args: InferRequestType<typeof client.v2.bot.audienceGroup.list.$get>,
) {
  return ['v2', '/v2/bot/audienceGroup/list', args] as const
}

export function getV2BotAudienceGroupListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.audienceGroup.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.bot.audienceGroup.list.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.audienceGroup.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotAudienceGroupListQueryKey>
  >({
    queryKey: getV2BotAudienceGroupListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.audienceGroup.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2BotAudienceGroupList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.audienceGroup.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.bot.audienceGroup.list.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.audienceGroup.list.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BotAudienceGroupListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2BotAudienceGroupListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2BotAudienceGroupList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.audienceGroup.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.bot.audienceGroup.list.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.audienceGroup.list.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BotAudienceGroupListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2BotAudienceGroupListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2BotAudienceGroupSharedAudienceGroupIdQueryKey(
  args: InferRequestType<(typeof client.v2.bot.audienceGroup.shared)[':audienceGroupId']['$get']>,
) {
  return ['v2', '/v2/bot/audienceGroup/shared/:audienceGroupId', args] as const
}

export function getV2BotAudienceGroupSharedAudienceGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.audienceGroup.shared)[':audienceGroupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.bot.audienceGroup.shared)[':audienceGroupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.bot.audienceGroup.shared)[':audienceGroupId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotAudienceGroupSharedAudienceGroupIdQueryKey>
  >({
    queryKey: getV2BotAudienceGroupSharedAudienceGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.audienceGroup.shared[':audienceGroupId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2BotAudienceGroupSharedAudienceGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.audienceGroup.shared)[':audienceGroupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.bot.audienceGroup.shared)[':audienceGroupId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.bot.audienceGroup.shared)[':audienceGroupId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BotAudienceGroupSharedAudienceGroupIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2BotAudienceGroupSharedAudienceGroupIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2BotAudienceGroupSharedAudienceGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.bot.audienceGroup.shared)[':audienceGroupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.bot.audienceGroup.shared)[':audienceGroupId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.bot.audienceGroup.shared)[':audienceGroupId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BotAudienceGroupSharedAudienceGroupIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2BotAudienceGroupSharedAudienceGroupIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2BotAudienceGroupSharedListQueryKey(
  args: InferRequestType<typeof client.v2.bot.audienceGroup.shared.list.$get>,
) {
  return ['v2', '/v2/bot/audienceGroup/shared/list', args] as const
}

export function getV2BotAudienceGroupSharedListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.audienceGroup.shared.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.bot.audienceGroup.shared.list.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.bot.audienceGroup.shared.list.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BotAudienceGroupSharedListQueryKey>
  >({
    queryKey: getV2BotAudienceGroupSharedListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bot.audienceGroup.shared.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2BotAudienceGroupSharedList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.audienceGroup.shared.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.bot.audienceGroup.shared.list.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.bot.audienceGroup.shared.list.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BotAudienceGroupSharedListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2BotAudienceGroupSharedListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2BotAudienceGroupSharedList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.audienceGroup.shared.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.bot.audienceGroup.shared.list.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.bot.audienceGroup.shared.list.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BotAudienceGroupSharedListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2BotAudienceGroupSharedListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
