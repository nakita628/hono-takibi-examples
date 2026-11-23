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

export function getApiKey() {
  return ['api'] as const
}

export function getApiClientAllQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.client.all.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/client/all', keyArgs] as const
}

export function getApiClientAllQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.client.all.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiClientAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.client.all.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiClientAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.client.all.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.all.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.all.$get>>>>
          >,
          ReturnType<typeof getApiClientAllQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiClientAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiClientAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.client.all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiClientCandeleteQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.client.candelete.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/client/candelete', keyArgs] as const
}

export function getApiClientCandeleteQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.client.candelete.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiClientCandeleteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.client.candelete.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiClientCandelete<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.candelete.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.client.candelete.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.client.candelete.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.client.candelete.$get>>>
            >
          >,
          ReturnType<typeof getApiClientCandeleteQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.candelete.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiClientCandeleteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiClientCandeleteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.client.candelete.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiClientDeleteMutationKey() {
  return ['api', '/api/client/delete', 'POST'] as const
}

export function getPostApiClientDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.delete.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.client.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiClientDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.client.delete.$post>) {
      return parseResponse(client.api.client.delete.$post(args, options))
    },
  })
}

export function usePostApiClientDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.client.delete.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.client.delete.$post>,
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
  const mutationDefaults = getPostApiClientDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getApiClientDetailsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.client.details.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/client/details', keyArgs] as const
}

export function getApiClientDetailsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.client.details.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiClientDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.client.details.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiClientDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.client.details.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.client.details.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.client.details.$get>>>
            >
          >,
          ReturnType<typeof getApiClientDetailsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.details.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiClientDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiClientDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.client.details.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiClientNewMutationKey() {
  return ['api', '/api/client/new', 'POST'] as const
}

export function getPostApiClientNewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.new.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.client.new.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiClientNewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.client.new.$post>) {
      return parseResponse(client.api.client.new.$post(args, options))
    },
  })
}

export function usePostApiClientNew<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.client.new.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.client.new.$post>,
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
  const mutationDefaults = getPostApiClientNewMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiClientUpdateMutationKey() {
  return ['api', '/api/client/update', 'POST'] as const
}

export function getPostApiClientUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.update.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.client.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiClientUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.client.update.$post>) {
      return parseResponse(client.api.client.update.$post(args, options))
    },
  })
}

export function usePostApiClientUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.api.client.update.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.client.update.$post>,
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
  const mutationDefaults = getPostApiClientUpdateMutationOptions<TError, TOnMutateResult>(
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

export function getApiEstimationAllQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.estimation.all.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/estimation/all', keyArgs] as const
}

export function getApiEstimationAllQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.estimation.all.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiEstimationAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.estimation.all.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiEstimationAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.estimation.all.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.all.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.all.$get>>>
            >
          >,
          ReturnType<typeof getApiEstimationAllQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiEstimationAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiEstimationAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.estimation.all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiEstimationChangestatusMutationKey() {
  return ['api', '/api/estimation/changestatus', 'POST'] as const
}

export function getPostApiEstimationChangestatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.changestatus.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.estimation.changestatus.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiEstimationChangestatusMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.estimation.changestatus.$post>) {
      return parseResponse(client.api.estimation.changestatus.$post(args, options))
    },
  })
}

export function usePostApiEstimationChangestatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.estimation.changestatus.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.estimation.changestatus.$post>,
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
  const mutationDefaults = getPostApiEstimationChangestatusMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiEstimationConvertMutationKey() {
  return ['api', '/api/estimation/convert', 'POST'] as const
}

export function getPostApiEstimationConvertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.convert.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.estimation.convert.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiEstimationConvertMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.estimation.convert.$post>) {
      return parseResponse(client.api.estimation.convert.$post(args, options))
    },
  })
}

export function usePostApiEstimationConvert<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.convert.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.estimation.convert.$post>,
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
  const mutationDefaults = getPostApiEstimationConvertMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiEstimationDeleteMutationKey() {
  return ['api', '/api/estimation/delete', 'POST'] as const
}

export function getPostApiEstimationDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.delete.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.estimation.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiEstimationDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.estimation.delete.$post>) {
      return parseResponse(client.api.estimation.delete.$post(args, options))
    },
  })
}

export function usePostApiEstimationDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.delete.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.estimation.delete.$post>,
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
  const mutationDefaults = getPostApiEstimationDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getApiEstimationDetailsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.estimation.details.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/estimation/details', keyArgs] as const
}

export function getApiEstimationDetailsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.estimation.details.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiEstimationDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.estimation.details.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiEstimationDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.estimation.details.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.details.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.details.$get>>>
            >
          >,
          ReturnType<typeof getApiEstimationDetailsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.details.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiEstimationDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiEstimationDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.estimation.details.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiEstimationNewMutationKey() {
  return ['api', '/api/estimation/new', 'POST'] as const
}

export function getPostApiEstimationNewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.new.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.estimation.new.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiEstimationNewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.estimation.new.$post>) {
      return parseResponse(client.api.estimation.new.$post(args, options))
    },
  })
}

export function usePostApiEstimationNew<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.new.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.estimation.new.$post>,
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
  const mutationDefaults = getPostApiEstimationNewMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiEstimationSendtoclientMutationKey() {
  return ['api', '/api/estimation/sendtoclient', 'POST'] as const
}

export function getPostApiEstimationSendtoclientMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.sendtoclient.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.estimation.sendtoclient.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiEstimationSendtoclientMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.estimation.sendtoclient.$post>) {
      return parseResponse(client.api.estimation.sendtoclient.$post(args, options))
    },
  })
}

export function usePostApiEstimationSendtoclient<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.estimation.sendtoclient.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.estimation.sendtoclient.$post>,
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
  const mutationDefaults = getPostApiEstimationSendtoclientMutationOptions<TError, TOnMutateResult>(
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

export function getApiEstimationStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.estimation.status.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/estimation/status', keyArgs] as const
}

export function getApiEstimationStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.estimation.status.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiEstimationStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.estimation.status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiEstimationStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.estimation.status.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.status.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.status.$get>>>
            >
          >,
          ReturnType<typeof getApiEstimationStatusQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.status.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiEstimationStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiEstimationStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.estimation.status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiEstimationUpdateMutationKey() {
  return ['api', '/api/estimation/update', 'POST'] as const
}

export function getPostApiEstimationUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.update.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.estimation.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiEstimationUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.estimation.update.$post>) {
      return parseResponse(client.api.estimation.update.$post(args, options))
    },
  })
}

export function usePostApiEstimationUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.update.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.estimation.update.$post>,
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
  const mutationDefaults = getPostApiEstimationUpdateMutationOptions<TError, TOnMutateResult>(
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

export function getApiEstimationUriQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.estimation.uri.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/estimation/uri', keyArgs] as const
}

export function getApiEstimationUriQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.estimation.uri.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiEstimationUriQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.estimation.uri.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiEstimationUri<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.uri.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.estimation.uri.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.uri.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.uri.$get>>>
            >
          >,
          ReturnType<typeof getApiEstimationUriQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.uri.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiEstimationUriQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiEstimationUriQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.estimation.uri.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiGeneralCountriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.general.countries.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/general/countries', keyArgs] as const
}

export function getApiGeneralCountriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.general.countries.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiGeneralCountriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.general.countries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiGeneralCountries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.general.countries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.general.countries.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.general.countries.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.general.countries.$get>>>
            >
          >,
          ReturnType<typeof getApiGeneralCountriesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.general.countries.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiGeneralCountriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiGeneralCountriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.general.countries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiGeneralCurrenciesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.general.currencies.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/general/currencies', keyArgs] as const
}

export function getApiGeneralCurrenciesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.general.currencies.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiGeneralCurrenciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.general.currencies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiGeneralCurrencies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.general.currencies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.general.currencies.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.general.currencies.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.general.currencies.$get>>>
            >
          >,
          ReturnType<typeof getApiGeneralCurrenciesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.general.currencies.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiGeneralCurrenciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiGeneralCurrenciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.general.currencies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiGeneralDateformatsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.general.dateformats.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/general/dateformats', keyArgs] as const
}

export function getApiGeneralDateformatsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.general.dateformats.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiGeneralDateformatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.general.dateformats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiGeneralDateformats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.general.dateformats.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.general.dateformats.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.general.dateformats.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.general.dateformats.$get>>>
            >
          >,
          ReturnType<typeof getApiGeneralDateformatsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.general.dateformats.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiGeneralDateformatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiGeneralDateformatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.general.dateformats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiGeneralUilanguagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.general.uilanguages.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/general/uilanguages', keyArgs] as const
}

export function getApiGeneralUilanguagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.general.uilanguages.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiGeneralUilanguagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.general.uilanguages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiGeneralUilanguages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.general.uilanguages.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.general.uilanguages.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.general.uilanguages.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.general.uilanguages.$get>>>
            >
          >,
          ReturnType<typeof getApiGeneralUilanguagesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.general.uilanguages.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiGeneralUilanguagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiGeneralUilanguagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.general.uilanguages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiInvoiceAllQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.invoice.all.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/invoice/all', keyArgs] as const
}

export function getApiInvoiceAllQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.invoice.all.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiInvoiceAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.invoice.all.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiInvoiceAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.invoice.all.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.all.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.all.$get>>>
            >
          >,
          ReturnType<typeof getApiInvoiceAllQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiInvoiceAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiInvoiceAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.invoice.all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiInvoiceAllcategoriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.invoice.allcategories.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/invoice/allcategories', keyArgs] as const
}

export function getApiInvoiceAllcategoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.invoice.allcategories.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiInvoiceAllcategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.invoice.allcategories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiInvoiceAllcategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.allcategories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.invoice.allcategories.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.invoice.allcategories.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.invoice.allcategories.$get>>
              >
            >
          >,
          ReturnType<typeof getApiInvoiceAllcategoriesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.allcategories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiInvoiceAllcategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiInvoiceAllcategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.invoice.allcategories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiInvoiceChangestatusMutationKey() {
  return ['api', '/api/invoice/changestatus', 'POST'] as const
}

export function getPostApiInvoiceChangestatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.changestatus.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.invoice.changestatus.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiInvoiceChangestatusMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.invoice.changestatus.$post>) {
      return parseResponse(client.api.invoice.changestatus.$post(args, options))
    },
  })
}

export function usePostApiInvoiceChangestatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.invoice.changestatus.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.invoice.changestatus.$post>,
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
  const mutationDefaults = getPostApiInvoiceChangestatusMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiInvoiceDeleteMutationKey() {
  return ['api', '/api/invoice/delete', 'POST'] as const
}

export function getPostApiInvoiceDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.delete.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.invoice.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiInvoiceDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.invoice.delete.$post>) {
      return parseResponse(client.api.invoice.delete.$post(args, options))
    },
  })
}

export function usePostApiInvoiceDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.delete.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.invoice.delete.$post>,
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
  const mutationDefaults = getPostApiInvoiceDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiInvoiceDeletecategoryMutationKey() {
  return ['api', '/api/invoice/deletecategory', 'POST'] as const
}

export function getPostApiInvoiceDeletecategoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.deletecategory.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.invoice.deletecategory.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiInvoiceDeletecategoryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.invoice.deletecategory.$post>) {
      return parseResponse(client.api.invoice.deletecategory.$post(args, options))
    },
  })
}

export function usePostApiInvoiceDeletecategory<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.invoice.deletecategory.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.invoice.deletecategory.$post>,
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
  const mutationDefaults = getPostApiInvoiceDeletecategoryMutationOptions<TError, TOnMutateResult>(
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

export function getApiInvoiceDetailsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.invoice.details.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/invoice/details', keyArgs] as const
}

export function getApiInvoiceDetailsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.invoice.details.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiInvoiceDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.invoice.details.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiInvoiceDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.invoice.details.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.details.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.details.$get>>>
            >
          >,
          ReturnType<typeof getApiInvoiceDetailsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.details.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiInvoiceDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiInvoiceDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.invoice.details.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiInvoiceNewMutationKey() {
  return ['api', '/api/invoice/new', 'POST'] as const
}

export function getPostApiInvoiceNewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.new.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.invoice.new.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiInvoiceNewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.invoice.new.$post>) {
      return parseResponse(client.api.invoice.new.$post(args, options))
    },
  })
}

export function usePostApiInvoiceNew<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.new.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.invoice.new.$post>,
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
  const mutationDefaults = getPostApiInvoiceNewMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiInvoiceNewcategoryMutationKey() {
  return ['api', '/api/invoice/newcategory', 'POST'] as const
}

export function getPostApiInvoiceNewcategoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.newcategory.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.invoice.newcategory.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiInvoiceNewcategoryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.invoice.newcategory.$post>) {
      return parseResponse(client.api.invoice.newcategory.$post(args, options))
    },
  })
}

export function usePostApiInvoiceNewcategory<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.newcategory.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.invoice.newcategory.$post>,
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
  const mutationDefaults = getPostApiInvoiceNewcategoryMutationOptions<TError, TOnMutateResult>(
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

export function getApiInvoicePdfQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.invoice.pdf.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/invoice/pdf', keyArgs] as const
}

export function getApiInvoicePdfQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.invoice.pdf.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiInvoicePdfQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.invoice.pdf.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiInvoicePdf<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.pdf.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.invoice.pdf.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.pdf.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.pdf.$get>>>
            >
          >,
          ReturnType<typeof getApiInvoicePdfQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.pdf.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiInvoicePdfQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiInvoicePdfQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.invoice.pdf.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiInvoiceSendtoaccountantMutationKey() {
  return ['api', '/api/invoice/sendtoaccountant', 'POST'] as const
}

export function getPostApiInvoiceSendtoaccountantMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.sendtoaccountant.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.invoice.sendtoaccountant.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiInvoiceSendtoaccountantMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.invoice.sendtoaccountant.$post>) {
      return parseResponse(client.api.invoice.sendtoaccountant.$post(args, options))
    },
  })
}

export function usePostApiInvoiceSendtoaccountant<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.invoice.sendtoaccountant.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.invoice.sendtoaccountant.$post>,
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
  const mutationDefaults = getPostApiInvoiceSendtoaccountantMutationOptions<
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

export function getPostApiInvoiceSendtoclientMutationKey() {
  return ['api', '/api/invoice/sendtoclient', 'POST'] as const
}

export function getPostApiInvoiceSendtoclientMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.sendtoclient.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.invoice.sendtoclient.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiInvoiceSendtoclientMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.invoice.sendtoclient.$post>) {
      return parseResponse(client.api.invoice.sendtoclient.$post(args, options))
    },
  })
}

export function usePostApiInvoiceSendtoclient<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.invoice.sendtoclient.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.invoice.sendtoclient.$post>,
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
  const mutationDefaults = getPostApiInvoiceSendtoclientMutationOptions<TError, TOnMutateResult>(
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

export function getApiInvoiceStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.invoice.status.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/invoice/status', keyArgs] as const
}

export function getApiInvoiceStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.invoice.status.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiInvoiceStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.invoice.status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiInvoiceStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.invoice.status.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.status.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.status.$get>>>
            >
          >,
          ReturnType<typeof getApiInvoiceStatusQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiInvoiceStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiInvoiceStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.invoice.status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiInvoiceUpdateMutationKey() {
  return ['api', '/api/invoice/update', 'POST'] as const
}

export function getPostApiInvoiceUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.update.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.invoice.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiInvoiceUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.invoice.update.$post>) {
      return parseResponse(client.api.invoice.update.$post(args, options))
    },
  })
}

export function usePostApiInvoiceUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.update.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.invoice.update.$post>,
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
  const mutationDefaults = getPostApiInvoiceUpdateMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiInvoiceUpdatecategoryMutationKey() {
  return ['api', '/api/invoice/updatecategory', 'POST'] as const
}

export function getPostApiInvoiceUpdatecategoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.updatecategory.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.invoice.updatecategory.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiInvoiceUpdatecategoryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.invoice.updatecategory.$post>) {
      return parseResponse(client.api.invoice.updatecategory.$post(args, options))
    },
  })
}

export function usePostApiInvoiceUpdatecategory<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.invoice.updatecategory.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.invoice.updatecategory.$post>,
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
  const mutationDefaults = getPostApiInvoiceUpdatecategoryMutationOptions<TError, TOnMutateResult>(
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

export function getApiInvoiceUriQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.invoice.uri.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/invoice/uri', keyArgs] as const
}

export function getApiInvoiceUriQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.invoice.uri.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiInvoiceUriQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.invoice.uri.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiInvoiceUri<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.uri.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.invoice.uri.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.uri.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.uri.$get>>>
            >
          >,
          ReturnType<typeof getApiInvoiceUriQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.uri.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiInvoiceUriQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiInvoiceUriQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.invoice.uri.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiOrderAllQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.order.all.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/order/all', keyArgs] as const
}

export function getApiOrderAllQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.order.all.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOrderAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.order.all.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOrderAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.order.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.order.all.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.order.all.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.order.all.$get>>>>
          >,
          ReturnType<typeof getApiOrderAllQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.order.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrderAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOrderAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.order.all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiOrderChangeshippingdetailsMutationKey() {
  return ['api', '/api/order/changeshippingdetails', 'POST'] as const
}

export function getPostApiOrderChangeshippingdetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.order.changeshippingdetails.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.order.changeshippingdetails.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiOrderChangeshippingdetailsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.order.changeshippingdetails.$post>) {
      return parseResponse(client.api.order.changeshippingdetails.$post(args, options))
    },
  })
}

export function usePostApiOrderChangeshippingdetails<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.order.changeshippingdetails.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.order.changeshippingdetails.$post>,
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
  const mutationDefaults = getPostApiOrderChangeshippingdetailsMutationOptions<
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

export function getPostApiOrderChangestatusMutationKey() {
  return ['api', '/api/order/changestatus', 'POST'] as const
}

export function getPostApiOrderChangestatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.order.changestatus.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.order.changestatus.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiOrderChangestatusMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.order.changestatus.$post>) {
      return parseResponse(client.api.order.changestatus.$post(args, options))
    },
  })
}

export function usePostApiOrderChangestatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.order.changestatus.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.order.changestatus.$post>,
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
  const mutationDefaults = getPostApiOrderChangestatusMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiOrderDeleteMutationKey() {
  return ['api', '/api/order/delete', 'POST'] as const
}

export function getPostApiOrderDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.order.delete.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.order.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiOrderDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.order.delete.$post>) {
      return parseResponse(client.api.order.delete.$post(args, options))
    },
  })
}

export function usePostApiOrderDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.order.delete.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.order.delete.$post>,
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
  const mutationDefaults = getPostApiOrderDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getApiOrderDetailsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.order.details.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/order/details', keyArgs] as const
}

export function getApiOrderDetailsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.order.details.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOrderDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.order.details.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOrderDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.order.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.order.details.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.order.details.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.order.details.$get>>>
            >
          >,
          ReturnType<typeof getApiOrderDetailsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.order.details.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrderDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOrderDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.order.details.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiOrderNewMutationKey() {
  return ['api', '/api/order/new', 'POST'] as const
}

export function getPostApiOrderNewMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.order.new.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.order.new.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiOrderNewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.order.new.$post>) {
      return parseResponse(client.api.order.new.$post(args, options))
    },
  })
}

export function usePostApiOrderNew<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.order.new.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.order.new.$post>,
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
  const mutationDefaults = getPostApiOrderNewMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiPaymentSupportedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.payment.supported.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/payment/supported', keyArgs] as const
}

export function getApiPaymentSupportedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.payment.supported.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPaymentSupportedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.payment.supported.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPaymentSupported<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payment.supported.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.payment.supported.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.payment.supported.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.payment.supported.$get>>>
            >
          >,
          ReturnType<typeof getApiPaymentSupportedQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.payment.supported.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPaymentSupportedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPaymentSupportedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.payment.supported.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPaymentlinkAllQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.paymentlink.all.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/paymentlink/all', keyArgs] as const
}

export function getApiPaymentlinkAllQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.paymentlink.all.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPaymentlinkAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.paymentlink.all.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPaymentlinkAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.paymentlink.all.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.all.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.all.$get>>>
            >
          >,
          ReturnType<typeof getApiPaymentlinkAllQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPaymentlinkAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPaymentlinkAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.paymentlink.all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiPaymentlinkDeleteMutationKey() {
  return ['api', '/api/paymentlink/delete', 'POST'] as const
}

export function getPostApiPaymentlinkDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.delete.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.paymentlink.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPaymentlinkDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.paymentlink.delete.$post>) {
      return parseResponse(client.api.paymentlink.delete.$post(args, options))
    },
  })
}

export function usePostApiPaymentlinkDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.delete.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.paymentlink.delete.$post>,
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
  const mutationDefaults = getPostApiPaymentlinkDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiPaymentlinkNewMutationKey() {
  return ['api', '/api/paymentlink/new', 'POST'] as const
}

export function getPostApiPaymentlinkNewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.new.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.paymentlink.new.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPaymentlinkNewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.paymentlink.new.$post>) {
      return parseResponse(client.api.paymentlink.new.$post(args, options))
    },
  })
}

export function usePostApiPaymentlinkNew<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.new.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.paymentlink.new.$post>,
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
  const mutationDefaults = getPostApiPaymentlinkNewMutationOptions<TError, TOnMutateResult>(
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

export function getApiPaymentlinkUriQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.paymentlink.uri.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/paymentlink/uri', keyArgs] as const
}

export function getApiPaymentlinkUriQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.paymentlink.uri.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPaymentlinkUriQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.paymentlink.uri.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPaymentlinkUri<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.uri.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.paymentlink.uri.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.uri.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.uri.$get>>>
            >
          >,
          ReturnType<typeof getApiPaymentlinkUriQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.uri.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPaymentlinkUriQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPaymentlinkUriQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.paymentlink.uri.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiProductAllQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.product.all.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/product/all', keyArgs] as const
}

export function getApiProductAllQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.product.all.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiProductAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.product.all.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiProductAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.product.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.product.all.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.product.all.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.product.all.$get>>>
            >
          >,
          ReturnType<typeof getApiProductAllQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.product.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiProductAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiProductAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.product.all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiProductDeleteMutationKey() {
  return ['api', '/api/product/delete', 'POST'] as const
}

export function getPostApiProductDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.product.delete.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.product.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiProductDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.product.delete.$post>) {
      return parseResponse(client.api.product.delete.$post(args, options))
    },
  })
}

export function usePostApiProductDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.product.delete.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.product.delete.$post>,
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
  const mutationDefaults = getPostApiProductDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getApiProductDetailsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.product.details.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/product/details', keyArgs] as const
}

export function getApiProductDetailsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.product.details.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiProductDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.product.details.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiProductDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.product.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.product.details.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.product.details.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.product.details.$get>>>
            >
          >,
          ReturnType<typeof getApiProductDetailsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.product.details.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiProductDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiProductDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.product.details.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiProductNewMutationKey() {
  return ['api', '/api/product/new', 'POST'] as const
}

export function getPostApiProductNewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.product.new.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.product.new.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiProductNewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.product.new.$post>) {
      return parseResponse(client.api.product.new.$post(args, options))
    },
  })
}

export function usePostApiProductNew<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.product.new.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.product.new.$post>,
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
  const mutationDefaults = getPostApiProductNewMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiProductUpdateMutationKey() {
  return ['api', '/api/product/update', 'POST'] as const
}

export function getPostApiProductUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.product.update.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.product.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiProductUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.product.update.$post>) {
      return parseResponse(client.api.product.update.$post(args, options))
    },
  })
}

export function usePostApiProductUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.api.product.update.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.product.update.$post>,
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
  const mutationDefaults = getPostApiProductUpdateMutationOptions<TError, TOnMutateResult>(
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

export function getApiTaxAllQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.tax.all.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/tax/all', keyArgs] as const
}

export function getApiTaxAllQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.tax.all.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTaxAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.tax.all.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiTaxAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tax.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.tax.all.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tax.all.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tax.all.$get>>>>
          >,
          ReturnType<typeof getApiTaxAllQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tax.all.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiTaxAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTaxAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.tax.all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTaxDeleteMutationKey() {
  return ['api', '/api/tax/delete', 'POST'] as const
}

export function getPostApiTaxDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tax.delete.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.tax.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTaxDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.tax.delete.$post>) {
      return parseResponse(client.api.tax.delete.$post(args, options))
    },
  })
}

export function usePostApiTaxDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.tax.delete.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.tax.delete.$post>,
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
  const mutationDefaults = getPostApiTaxDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiTaxNewMutationKey() {
  return ['api', '/api/tax/new', 'POST'] as const
}

export function getPostApiTaxNewMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tax.new.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.tax.new.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTaxNewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.tax.new.$post>) {
      return parseResponse(client.api.tax.new.$post(args, options))
    },
  })
}

export function usePostApiTaxNew<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tax.new.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.tax.new.$post>,
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
  const mutationDefaults = getPostApiTaxNewMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiTaxUpdateMutationKey() {
  return ['api', '/api/tax/update', 'POST'] as const
}

export function getPostApiTaxUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tax.update.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.tax.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTaxUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.tax.update.$post>) {
      return parseResponse(client.api.tax.update.$post(args, options))
    },
  })
}

export function usePostApiTaxUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.api.tax.update.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.tax.update.$post>,
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
  const mutationDefaults = getPostApiTaxUpdateMutationOptions<TError, TOnMutateResult>(
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

export function getApiWorktypeAllQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.worktype.all.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/worktype/all', keyArgs] as const
}

export function getApiWorktypeAllQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.worktype.all.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiWorktypeAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.worktype.all.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiWorktypeAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.worktype.all.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.all.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.all.$get>>>
            >
          >,
          ReturnType<typeof getApiWorktypeAllQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiWorktypeAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiWorktypeAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.worktype.all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiWorktypeDeleteMutationKey() {
  return ['api', '/api/worktype/delete', 'POST'] as const
}

export function getPostApiWorktypeDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.delete.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.worktype.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiWorktypeDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.worktype.delete.$post>) {
      return parseResponse(client.api.worktype.delete.$post(args, options))
    },
  })
}

export function usePostApiWorktypeDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.delete.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.worktype.delete.$post>,
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
  const mutationDefaults = getPostApiWorktypeDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getApiWorktypeDetailsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.worktype.details.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/worktype/details', keyArgs] as const
}

export function getApiWorktypeDetailsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.worktype.details.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiWorktypeDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.worktype.details.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiWorktypeDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.worktype.details.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.details.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.details.$get>>>
            >
          >,
          ReturnType<typeof getApiWorktypeDetailsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.details.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiWorktypeDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiWorktypeDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.worktype.details.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiWorktypeNewMutationKey() {
  return ['api', '/api/worktype/new', 'POST'] as const
}

export function getPostApiWorktypeNewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.new.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.worktype.new.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiWorktypeNewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.worktype.new.$post>) {
      return parseResponse(client.api.worktype.new.$post(args, options))
    },
  })
}

export function usePostApiWorktypeNew<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.new.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.worktype.new.$post>,
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
  const mutationDefaults = getPostApiWorktypeNewMutationOptions<TError, TOnMutateResult>(
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

export function getApiWorktypeSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.worktype.search.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/worktype/search', keyArgs] as const
}

export function getApiWorktypeSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.worktype.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiWorktypeSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.worktype.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiWorktypeSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.worktype.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.search.$get>>>
            >
          >,
          ReturnType<typeof getApiWorktypeSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiWorktypeSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiWorktypeSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.worktype.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiWorktypeUpdateMutationKey() {
  return ['api', '/api/worktype/update', 'POST'] as const
}

export function getPostApiWorktypeUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.update.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.worktype.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiWorktypeUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.worktype.update.$post>) {
      return parseResponse(client.api.worktype.update.$post(args, options))
    },
  })
}

export function usePostApiWorktypeUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.update.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.worktype.update.$post>,
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
  const mutationDefaults = getPostApiWorktypeUpdateMutationOptions<TError, TOnMutateResult>(
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
