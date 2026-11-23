import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1beta1Key() {
  return ['v1beta1'] as const
}

export function getV1beta1AlertsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta1.alerts.$get>>,
) {
  return ['v1beta1', '/v1beta1/alerts', toValue(args)] as const
}

export function getV1beta1AlertsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta1.alerts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1AlertsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1.alerts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1Alerts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.alerts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta1.alerts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.alerts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.alerts.$get>>>>
          >,
          ReturnType<typeof getV1beta1AlertsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.alerts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1AlertsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1AlertsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1.alerts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta1AlertsAlertIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1.alerts)[':alertId']['$get']>>,
) {
  return ['v1beta1', '/v1beta1/alerts/:alertId', toValue(args)] as const
}

export function getV1beta1AlertsAlertIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1.alerts)[':alertId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1AlertsAlertIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1.alerts[':alertId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1AlertsAlertId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1.alerts)[':alertId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1.alerts)[':alertId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1.alerts)[':alertId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1.alerts)[':alertId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta1AlertsAlertIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1.alerts)[':alertId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1AlertsAlertIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1AlertsAlertIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1.alerts[':alertId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1beta1AlertsAlertIdMutationKey() {
  return ['v1beta1', '/v1beta1/alerts/:alertId', 'DELETE'] as const
}

export function getDeleteV1beta1AlertsAlertIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1.alerts)[':alertId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1.alerts)[':alertId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1beta1AlertsAlertIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1.alerts)[':alertId']['$delete']>,
    ) {
      return parseResponse(client.v1beta1.alerts[':alertId'].$delete(args, options))
    },
  })
}

export function useDeleteV1beta1AlertsAlertId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1.alerts)[':alertId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1.alerts)[':alertId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1beta1AlertsAlertIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1beta1AlertsAlertIdFeedbackQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1.alerts)[':alertId']['feedback']['$get']>
  >,
) {
  return ['v1beta1', '/v1beta1/alerts/:alertId/feedback', toValue(args)] as const
}

export function getV1beta1AlertsAlertIdFeedbackQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1.alerts)[':alertId']['feedback']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1AlertsAlertIdFeedbackQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1.alerts[':alertId'].feedback.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1AlertsAlertIdFeedback<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1.alerts)[':alertId']['feedback']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1.alerts)[':alertId']['feedback']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1.alerts)[':alertId']['feedback']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1.alerts)[':alertId']['feedback']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta1AlertsAlertIdFeedbackQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1.alerts)[':alertId']['feedback']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1AlertsAlertIdFeedbackQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1AlertsAlertIdFeedbackQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1.alerts[':alertId'].feedback.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1beta1AlertsAlertIdFeedbackMutationKey() {
  return ['v1beta1', '/v1beta1/alerts/:alertId/feedback', 'POST'] as const
}

export function getPostV1beta1AlertsAlertIdFeedbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1.alerts)[':alertId']['feedback']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1.alerts)[':alertId']['feedback']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1AlertsAlertIdFeedbackMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1.alerts)[':alertId']['feedback']['$post']>,
    ) {
      return parseResponse(client.v1beta1.alerts[':alertId'].feedback.$post(args, options))
    },
  })
}

export function usePostV1beta1AlertsAlertIdFeedback<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1.alerts)[':alertId']['feedback']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1.alerts)[':alertId']['feedback']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1beta1AlertsAlertIdFeedbackMutationOptions<
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

export function getV1beta1AlertsAlertIdMetadataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1.alerts)[':alertId']['metadata']['$get']>
  >,
) {
  return ['v1beta1', '/v1beta1/alerts/:alertId/metadata', toValue(args)] as const
}

export function getV1beta1AlertsAlertIdMetadataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1.alerts)[':alertId']['metadata']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1AlertsAlertIdMetadataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1.alerts[':alertId'].metadata.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1AlertsAlertIdMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1.alerts)[':alertId']['metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1.alerts)[':alertId']['metadata']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1.alerts)[':alertId']['metadata']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1.alerts)[':alertId']['metadata']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta1AlertsAlertIdMetadataQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1.alerts)[':alertId']['metadata']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1AlertsAlertIdMetadataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1AlertsAlertIdMetadataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1.alerts[':alertId'].metadata.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1beta1AlertsAlertIdUndeleteMutationKey() {
  return ['v1beta1', '/v1beta1/alerts/:alertId:undelete', 'POST'] as const
}

export function getPostV1beta1AlertsAlertIdUndeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1.alerts)[':alertId:undelete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1.alerts)[':alertId:undelete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1AlertsAlertIdUndeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1.alerts)[':alertId:undelete']['$post']>,
    ) {
      return parseResponse(client.v1beta1.alerts[':alertId:undelete'].$post(args, options))
    },
  })
}

export function usePostV1beta1AlertsAlertIdUndelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1.alerts)[':alertId:undelete']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1.alerts)[':alertId:undelete']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1beta1AlertsAlertIdUndeleteMutationOptions<
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

export function getPostV1beta1AlertsBatchDeleteMutationKey() {
  return ['v1beta1', '/v1beta1/alerts:batchDelete', 'POST'] as const
}

export function getPostV1beta1AlertsBatchDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)['alerts:batchDelete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)['alerts:batchDelete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1AlertsBatchDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)['alerts:batchDelete']['$post']>,
    ) {
      return parseResponse(client.v1beta1['alerts:batchDelete'].$post(args, options))
    },
  })
}

export function usePostV1beta1AlertsBatchDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)['alerts:batchDelete']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)['alerts:batchDelete']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1beta1AlertsBatchDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1beta1AlertsBatchUndeleteMutationKey() {
  return ['v1beta1', '/v1beta1/alerts:batchUndelete', 'POST'] as const
}

export function getPostV1beta1AlertsBatchUndeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)['alerts:batchUndelete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)['alerts:batchUndelete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1AlertsBatchUndeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)['alerts:batchUndelete']['$post']>,
    ) {
      return parseResponse(client.v1beta1['alerts:batchUndelete'].$post(args, options))
    },
  })
}

export function usePostV1beta1AlertsBatchUndelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)['alerts:batchUndelete']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)['alerts:batchUndelete']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1beta1AlertsBatchUndeleteMutationOptions<
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

export function getV1beta1SettingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta1.settings.$get>>,
) {
  return ['v1beta1', '/v1beta1/settings', toValue(args)] as const
}

export function getV1beta1SettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta1.settings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1SettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1.settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1Settings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta1.settings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.settings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.settings.$get>>>
            >
          >,
          ReturnType<typeof getV1beta1SettingsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1SettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1SettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1.settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV1beta1SettingsMutationKey() {
  return ['v1beta1', '/v1beta1/settings', 'PATCH'] as const
}

export function getPatchV1beta1SettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.settings.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.v1beta1.settings.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1beta1SettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1beta1.settings.$patch>) {
      return parseResponse(client.v1beta1.settings.$patch(args, options))
    },
  })
}

export function usePatchV1beta1Settings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.settings.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1beta1.settings.$patch>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1beta1SettingsMutationOptions<TError, TOnMutateResult>(
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
