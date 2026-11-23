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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1NameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':name']['$get']>>,
) {
  return ['v1', '/v1/:name', toValue(args)] as const
}

export function getV1NameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1NameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':name'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getV1NameQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1NameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1NameMutationKey() {
  return ['v1', '/v1/:name', 'DELETE'] as const
}

export function getDeleteV1NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name']['$delete']>) {
      return parseResponse(client.v1[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteV1NameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchV1NameMutationKey() {
  return ['v1', '/v1/:name', 'PATCH'] as const
}

export function getPatchV1NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name']['$patch']>) {
      return parseResponse(client.v1[':name'].$patch(args, options))
    },
  })
}

export function usePatchV1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':name']['$patch']>,
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
  const mutationDefaults = getPatchV1NameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1NameOperationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':name']['operations']['$get']>>,
) {
  return ['v1', '/v1/:name/operations', toValue(args)] as const
}

export function getV1NameOperationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':name']['operations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1NameOperationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':name'].operations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1NameOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['operations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':name']['operations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':name']['operations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':name']['operations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1NameOperationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['operations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameOperationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1NameOperationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':name'].operations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1NameAddMeasurementMutationKey() {
  return ['v1', '/v1/:name:addMeasurement', 'POST'] as const
}

export function getPostV1NameAddMeasurementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':name:addMeasurement']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:addMeasurement']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameAddMeasurementMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:addMeasurement']['$post']>) {
      return parseResponse(client.v1[':name:addMeasurement'].$post(args, options))
    },
  })
}

export function usePostV1NameAddMeasurement<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':name:addMeasurement']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':name:addMeasurement']['$post']>,
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
  const mutationDefaults = getPostV1NameAddMeasurementMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1NameCancelMutationKey() {
  return ['v1', '/v1/:name:cancel', 'POST'] as const
}

export function getPostV1NameCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:cancel']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:cancel']['$post']>) {
      return parseResponse(client.v1[':name:cancel'].$post(args, options))
    },
  })
}

export function usePostV1NameCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:cancel']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':name:cancel']['$post']>,
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
  const mutationDefaults = getPostV1NameCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1NameCheckEarlyStoppingStateMutationKey() {
  return ['v1', '/v1/:name:checkEarlyStoppingState', 'POST'] as const
}

export function getPostV1NameCheckEarlyStoppingStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':name:checkEarlyStoppingState']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:checkEarlyStoppingState']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameCheckEarlyStoppingStateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':name:checkEarlyStoppingState']['$post']>,
    ) {
      return parseResponse(client.v1[':name:checkEarlyStoppingState'].$post(args, options))
    },
  })
}

export function usePostV1NameCheckEarlyStoppingState<
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
                Awaited<ReturnType<(typeof client.v1)[':name:checkEarlyStoppingState']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':name:checkEarlyStoppingState']['$post']>,
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
  const mutationDefaults = getPostV1NameCheckEarlyStoppingStateMutationOptions<
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

export function getPostV1NameCompleteMutationKey() {
  return ['v1', '/v1/:name:complete', 'POST'] as const
}

export function getPostV1NameCompleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:complete']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:complete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameCompleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:complete']['$post']>) {
      return parseResponse(client.v1[':name:complete'].$post(args, options))
    },
  })
}

export function usePostV1NameComplete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':name:complete']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':name:complete']['$post']>,
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
  const mutationDefaults = getPostV1NameCompleteMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1NameExplainMutationKey() {
  return ['v1', '/v1/:name:explain', 'POST'] as const
}

export function getPostV1NameExplainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:explain']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:explain']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameExplainMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:explain']['$post']>) {
      return parseResponse(client.v1[':name:explain'].$post(args, options))
    },
  })
}

export function usePostV1NameExplain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':name:explain']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':name:explain']['$post']>,
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
  const mutationDefaults = getPostV1NameExplainMutationOptions<TError, TOnMutateResult>(
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

export function getV1NameGetConfigQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':name:getConfig']['$get']>>,
) {
  return ['v1', '/v1/:name:getConfig', toValue(args)] as const
}

export function getV1NameGetConfigQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':name:getConfig']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1NameGetConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':name:getConfig'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1NameGetConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:getConfig']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':name:getConfig']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':name:getConfig']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':name:getConfig']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1NameGetConfigQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:getConfig']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameGetConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1NameGetConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':name:getConfig'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1NamePredictMutationKey() {
  return ['v1', '/v1/:name:predict', 'POST'] as const
}

export function getPostV1NamePredictMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:predict']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:predict']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NamePredictMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:predict']['$post']>) {
      return parseResponse(client.v1[':name:predict'].$post(args, options))
    },
  })
}

export function usePostV1NamePredict<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':name:predict']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':name:predict']['$post']>,
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
  const mutationDefaults = getPostV1NamePredictMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1NameSetDefaultMutationKey() {
  return ['v1', '/v1/:name:setDefault', 'POST'] as const
}

export function getPostV1NameSetDefaultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:setDefault']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:setDefault']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameSetDefaultMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:setDefault']['$post']>) {
      return parseResponse(client.v1[':name:setDefault'].$post(args, options))
    },
  })
}

export function usePostV1NameSetDefault<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':name:setDefault']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':name:setDefault']['$post']>,
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
  const mutationDefaults = getPostV1NameSetDefaultMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1NameStopMutationKey() {
  return ['v1', '/v1/:name:stop', 'POST'] as const
}

export function getPostV1NameStopMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:stop']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:stop']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameStopMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:stop']['$post']>) {
      return parseResponse(client.v1[':name:stop'].$post(args, options))
    },
  })
}

export function usePostV1NameStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:stop']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':name:stop']['$post']>,
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
  const mutationDefaults = getPostV1NameStopMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ParentJobsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['jobs']['$get']>>,
) {
  return ['v1', '/v1/:parent/jobs', toValue(args)] as const
}

export function getV1ParentJobsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['jobs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ParentJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':parent'].jobs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ParentJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['jobs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['jobs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['jobs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['jobs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ParentJobsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['jobs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ParentJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':parent'].jobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ParentJobsMutationKey() {
  return ['v1', '/v1/:parent/jobs', 'POST'] as const
}

export function getPostV1ParentJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['jobs']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['jobs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentJobsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':parent']['jobs']['$post']>) {
      return parseResponse(client.v1[':parent'].jobs.$post(args, options))
    },
  })
}

export function usePostV1ParentJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['jobs']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':parent']['jobs']['$post']>,
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
  const mutationDefaults = getPostV1ParentJobsMutationOptions<TError, TOnMutateResult>(
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

export function getV1ParentLocationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['locations']['$get']>>,
) {
  return ['v1', '/v1/:parent/locations', toValue(args)] as const
}

export function getV1ParentLocationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['locations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ParentLocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':parent'].locations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ParentLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['locations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['locations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['locations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['locations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ParentLocationsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)[':parent']['locations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentLocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ParentLocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':parent'].locations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ParentModelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['models']['$get']>>,
) {
  return ['v1', '/v1/:parent/models', toValue(args)] as const
}

export function getV1ParentModelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['models']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ParentModelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':parent'].models.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ParentModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['models']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['models']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['models']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['models']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ParentModelsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['models']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentModelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ParentModelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':parent'].models.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ParentModelsMutationKey() {
  return ['v1', '/v1/:parent/models', 'POST'] as const
}

export function getPostV1ParentModelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['models']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['models']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentModelsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':parent']['models']['$post']>) {
      return parseResponse(client.v1[':parent'].models.$post(args, options))
    },
  })
}

export function usePostV1ParentModels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['models']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':parent']['models']['$post']>,
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
  const mutationDefaults = getPostV1ParentModelsMutationOptions<TError, TOnMutateResult>(
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

export function getV1ParentStudiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['studies']['$get']>>,
) {
  return ['v1', '/v1/:parent/studies', toValue(args)] as const
}

export function getV1ParentStudiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['studies']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ParentStudiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':parent'].studies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ParentStudies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['studies']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['studies']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['studies']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['studies']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ParentStudiesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['studies']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentStudiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ParentStudiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':parent'].studies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ParentStudiesMutationKey() {
  return ['v1', '/v1/:parent/studies', 'POST'] as const
}

export function getPostV1ParentStudiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['studies']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['studies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentStudiesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':parent']['studies']['$post']>) {
      return parseResponse(client.v1[':parent'].studies.$post(args, options))
    },
  })
}

export function usePostV1ParentStudies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['studies']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':parent']['studies']['$post']>,
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
  const mutationDefaults = getPostV1ParentStudiesMutationOptions<TError, TOnMutateResult>(
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

export function getV1ParentTrialsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['trials']['$get']>>,
) {
  return ['v1', '/v1/:parent/trials', toValue(args)] as const
}

export function getV1ParentTrialsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['trials']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ParentTrialsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':parent'].trials.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ParentTrials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['trials']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['trials']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['trials']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['trials']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ParentTrialsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['trials']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentTrialsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ParentTrialsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':parent'].trials.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ParentTrialsMutationKey() {
  return ['v1', '/v1/:parent/trials', 'POST'] as const
}

export function getPostV1ParentTrialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['trials']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['trials']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentTrialsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':parent']['trials']['$post']>) {
      return parseResponse(client.v1[':parent'].trials.$post(args, options))
    },
  })
}

export function usePostV1ParentTrials<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['trials']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':parent']['trials']['$post']>,
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
  const mutationDefaults = getPostV1ParentTrialsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ParentTrialsListOptimalTrialsMutationKey() {
  return ['v1', '/v1/:parent/trials:listOptimalTrials', 'POST'] as const
}

export function getPostV1ParentTrialsListOptimalTrialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['trials:listOptimalTrials']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['trials:listOptimalTrials']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentTrialsListOptimalTrialsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['trials:listOptimalTrials']['$post']>,
    ) {
      return parseResponse(client.v1[':parent']['trials:listOptimalTrials'].$post(args, options))
    },
  })
}

export function usePostV1ParentTrialsListOptimalTrials<
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
                Awaited<
                  ReturnType<(typeof client.v1)[':parent']['trials:listOptimalTrials']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':parent']['trials:listOptimalTrials']['$post']>,
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
  const mutationDefaults = getPostV1ParentTrialsListOptimalTrialsMutationOptions<
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

export function getPostV1ParentTrialsSuggestMutationKey() {
  return ['v1', '/v1/:parent/trials:suggest', 'POST'] as const
}

export function getPostV1ParentTrialsSuggestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['trials:suggest']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['trials:suggest']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentTrialsSuggestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['trials:suggest']['$post']>,
    ) {
      return parseResponse(client.v1[':parent']['trials:suggest'].$post(args, options))
    },
  })
}

export function usePostV1ParentTrialsSuggest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['trials:suggest']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':parent']['trials:suggest']['$post']>,
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
  const mutationDefaults = getPostV1ParentTrialsSuggestMutationOptions<TError, TOnMutateResult>(
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

export function getV1ParentVersionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['versions']['$get']>>,
) {
  return ['v1', '/v1/:parent/versions', toValue(args)] as const
}

export function getV1ParentVersionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['versions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ParentVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':parent'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ParentVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['versions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['versions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['versions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['versions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ParentVersionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['versions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ParentVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':parent'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ParentVersionsMutationKey() {
  return ['v1', '/v1/:parent/versions', 'POST'] as const
}

export function getPostV1ParentVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['versions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['versions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentVersionsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':parent']['versions']['$post']>) {
      return parseResponse(client.v1[':parent'].versions.$post(args, options))
    },
  })
}

export function usePostV1ParentVersions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['versions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':parent']['versions']['$post']>,
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
  const mutationDefaults = getPostV1ParentVersionsMutationOptions<TError, TOnMutateResult>(
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

export function getV1ResourceGetIamPolicyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':resource:getIamPolicy']['$get']>>,
) {
  return ['v1', '/v1/:resource:getIamPolicy', toValue(args)] as const
}

export function getV1ResourceGetIamPolicyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':resource:getIamPolicy']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ResourceGetIamPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':resource:getIamPolicy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ResourceGetIamPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':resource:getIamPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':resource:getIamPolicy']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':resource:getIamPolicy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':resource:getIamPolicy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ResourceGetIamPolicyQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)[':resource:getIamPolicy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ResourceGetIamPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ResourceGetIamPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':resource:getIamPolicy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ResourceSetIamPolicyMutationKey() {
  return ['v1', '/v1/:resource:setIamPolicy', 'POST'] as const
}

export function getPostV1ResourceSetIamPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':resource:setIamPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':resource:setIamPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ResourceSetIamPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':resource:setIamPolicy']['$post']>,
    ) {
      return parseResponse(client.v1[':resource:setIamPolicy'].$post(args, options))
    },
  })
}

export function usePostV1ResourceSetIamPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':resource:setIamPolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':resource:setIamPolicy']['$post']>,
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
  const mutationDefaults = getPostV1ResourceSetIamPolicyMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ResourceTestIamPermissionsMutationKey() {
  return ['v1', '/v1/:resource:testIamPermissions', 'POST'] as const
}

export function getPostV1ResourceTestIamPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':resource:testIamPermissions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':resource:testIamPermissions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ResourceTestIamPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':resource:testIamPermissions']['$post']>,
    ) {
      return parseResponse(client.v1[':resource:testIamPermissions'].$post(args, options))
    },
  })
}

export function usePostV1ResourceTestIamPermissions<
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
                Awaited<ReturnType<(typeof client.v1)[':resource:testIamPermissions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':resource:testIamPermissions']['$post']>,
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
  const mutationDefaults = getPostV1ResourceTestIamPermissionsMutationOptions<
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
