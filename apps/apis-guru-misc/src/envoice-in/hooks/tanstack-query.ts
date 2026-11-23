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

export function getApiKey() {
  return ['api'] as const
}

export function getApiClientAllQueryKey(args: InferRequestType<typeof client.api.client.all.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/client/all', keyArgs] as const
}

export function getApiClientAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.all.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.client.all.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiClientAllQueryKey>
  >({
    queryKey: getApiClientAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.client.all.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiClientAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.client.all.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.all.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiClientAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiClientAllQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiClientAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.client.all.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.all.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiClientAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiClientAllQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiClientCandeleteQueryKey(
  args: InferRequestType<typeof client.api.client.candelete.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/client/candelete', keyArgs] as const
}

export function getApiClientCandeleteQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.candelete.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.client.candelete.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.candelete.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiClientCandeleteQueryKey>
  >({
    queryKey: getApiClientCandeleteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.client.candelete.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiClientCandelete<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.candelete.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.client.candelete.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.client.candelete.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClientCandeleteQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiClientCandeleteQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiClientCandelete<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.candelete.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.client.candelete.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.client.candelete.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClientCandeleteQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiClientCandeleteQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<typeof client.api.client.details.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/client/details', keyArgs] as const
}

export function getApiClientDetailsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.details.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.client.details.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.details.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiClientDetailsQueryKey>
  >({
    queryKey: getApiClientDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.client.details.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiClientDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.client.details.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.client.details.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClientDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiClientDetailsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiClientDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.client.details.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.client.details.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClientDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiClientDetailsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.new.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.client.new.$post>,
        TOnMutateResult
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
  args: InferRequestType<typeof client.api.estimation.all.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/estimation/all', keyArgs] as const
}

export function getApiEstimationAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.all.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.estimation.all.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiEstimationAllQueryKey>
  >({
    queryKey: getApiEstimationAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.estimation.all.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiEstimationAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.estimation.all.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.all.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEstimationAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiEstimationAllQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiEstimationAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.estimation.all.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.all.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEstimationAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiEstimationAllQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<typeof client.api.estimation.details.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/estimation/details', keyArgs] as const
}

export function getApiEstimationDetailsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.estimation.details.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.details.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiEstimationDetailsQueryKey>
  >({
    queryKey: getApiEstimationDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.estimation.details.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiEstimationDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.estimation.details.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.details.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEstimationDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiEstimationDetailsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiEstimationDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.estimation.details.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.details.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEstimationDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiEstimationDetailsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<typeof client.api.estimation.status.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/estimation/status', keyArgs] as const
}

export function getApiEstimationStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.estimation.status.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.status.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiEstimationStatusQueryKey>
  >({
    queryKey: getApiEstimationStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.estimation.status.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiEstimationStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.estimation.status.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.status.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEstimationStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiEstimationStatusQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiEstimationStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.estimation.status.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.status.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEstimationStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiEstimationStatusQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<typeof client.api.estimation.uri.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/estimation/uri', keyArgs] as const
}

export function getApiEstimationUriQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.uri.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.estimation.uri.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.uri.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiEstimationUriQueryKey>
  >({
    queryKey: getApiEstimationUriQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.estimation.uri.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiEstimationUri<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.uri.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.estimation.uri.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.uri.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEstimationUriQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiEstimationUriQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiEstimationUri<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.uri.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.estimation.uri.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.uri.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEstimationUriQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiEstimationUriQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiGeneralCountriesQueryKey(
  args: InferRequestType<typeof client.api.general.countries.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/general/countries', keyArgs] as const
}

export function getApiGeneralCountriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.general.countries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.general.countries.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.general.countries.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiGeneralCountriesQueryKey>
  >({
    queryKey: getApiGeneralCountriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.general.countries.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiGeneralCountries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.general.countries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.general.countries.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.general.countries.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiGeneralCountriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiGeneralCountriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiGeneralCountries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.general.countries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.general.countries.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.general.countries.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiGeneralCountriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiGeneralCountriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiGeneralCurrenciesQueryKey(
  args: InferRequestType<typeof client.api.general.currencies.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/general/currencies', keyArgs] as const
}

export function getApiGeneralCurrenciesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.general.currencies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.general.currencies.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.general.currencies.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiGeneralCurrenciesQueryKey>
  >({
    queryKey: getApiGeneralCurrenciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.general.currencies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiGeneralCurrencies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.general.currencies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.general.currencies.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.general.currencies.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiGeneralCurrenciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiGeneralCurrenciesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiGeneralCurrencies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.general.currencies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.general.currencies.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.general.currencies.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiGeneralCurrenciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiGeneralCurrenciesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiGeneralDateformatsQueryKey(
  args: InferRequestType<typeof client.api.general.dateformats.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/general/dateformats', keyArgs] as const
}

export function getApiGeneralDateformatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.general.dateformats.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.general.dateformats.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.general.dateformats.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiGeneralDateformatsQueryKey>
  >({
    queryKey: getApiGeneralDateformatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.general.dateformats.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiGeneralDateformats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.general.dateformats.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.general.dateformats.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.general.dateformats.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiGeneralDateformatsQueryKey>
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
      ...getApiGeneralDateformatsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiGeneralDateformats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.general.dateformats.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.general.dateformats.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.general.dateformats.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiGeneralDateformatsQueryKey>
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
      ...getApiGeneralDateformatsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiGeneralUilanguagesQueryKey(
  args: InferRequestType<typeof client.api.general.uilanguages.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/general/uilanguages', keyArgs] as const
}

export function getApiGeneralUilanguagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.general.uilanguages.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.general.uilanguages.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.general.uilanguages.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiGeneralUilanguagesQueryKey>
  >({
    queryKey: getApiGeneralUilanguagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.general.uilanguages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiGeneralUilanguages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.general.uilanguages.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.general.uilanguages.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.general.uilanguages.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiGeneralUilanguagesQueryKey>
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
      ...getApiGeneralUilanguagesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiGeneralUilanguages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.general.uilanguages.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.general.uilanguages.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.general.uilanguages.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiGeneralUilanguagesQueryKey>
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
      ...getApiGeneralUilanguagesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiInvoiceAllQueryKey(
  args: InferRequestType<typeof client.api.invoice.all.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/invoice/all', keyArgs] as const
}

export function getApiInvoiceAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.all.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.invoice.all.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiInvoiceAllQueryKey>
  >({
    queryKey: getApiInvoiceAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.invoice.all.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiInvoiceAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.invoice.all.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.all.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiInvoiceAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiInvoiceAllQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiInvoiceAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.invoice.all.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.all.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiInvoiceAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiInvoiceAllQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiInvoiceAllcategoriesQueryKey(
  args: InferRequestType<typeof client.api.invoice.allcategories.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/invoice/allcategories', keyArgs] as const
}

export function getApiInvoiceAllcategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.allcategories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.invoice.allcategories.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.allcategories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiInvoiceAllcategoriesQueryKey>
  >({
    queryKey: getApiInvoiceAllcategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.invoice.allcategories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiInvoiceAllcategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.allcategories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.invoice.allcategories.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.allcategories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiInvoiceAllcategoriesQueryKey>
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
      ...getApiInvoiceAllcategoriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiInvoiceAllcategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.allcategories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.invoice.allcategories.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.allcategories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiInvoiceAllcategoriesQueryKey>
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
      ...getApiInvoiceAllcategoriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.changestatus.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.invoice.changestatus.$post>,
        TOnMutateResult
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
  args: InferRequestType<typeof client.api.invoice.details.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/invoice/details', keyArgs] as const
}

export function getApiInvoiceDetailsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.details.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.invoice.details.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.details.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiInvoiceDetailsQueryKey>
  >({
    queryKey: getApiInvoiceDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.invoice.details.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiInvoiceDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.invoice.details.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.details.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiInvoiceDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiInvoiceDetailsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiInvoiceDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.invoice.details.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.details.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiInvoiceDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiInvoiceDetailsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.new.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.invoice.new.$post>,
        TOnMutateResult
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
  args: InferRequestType<typeof client.api.invoice.pdf.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/invoice/pdf', keyArgs] as const
}

export function getApiInvoicePdfQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.pdf.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.invoice.pdf.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.pdf.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiInvoicePdfQueryKey>
  >({
    queryKey: getApiInvoicePdfQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.invoice.pdf.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiInvoicePdf<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.pdf.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.invoice.pdf.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.pdf.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiInvoicePdfQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiInvoicePdfQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiInvoicePdf<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.pdf.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.invoice.pdf.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.pdf.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiInvoicePdfQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiInvoicePdfQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.sendtoclient.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.invoice.sendtoclient.$post>,
        TOnMutateResult
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
  args: InferRequestType<typeof client.api.invoice.status.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/invoice/status', keyArgs] as const
}

export function getApiInvoiceStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.status.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.invoice.status.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiInvoiceStatusQueryKey>
  >({
    queryKey: getApiInvoiceStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.invoice.status.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiInvoiceStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.invoice.status.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.status.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiInvoiceStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiInvoiceStatusQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiInvoiceStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.invoice.status.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.status.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiInvoiceStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiInvoiceStatusQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<typeof client.api.invoice.uri.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/invoice/uri', keyArgs] as const
}

export function getApiInvoiceUriQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.uri.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.invoice.uri.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.uri.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiInvoiceUriQueryKey>
  >({
    queryKey: getApiInvoiceUriQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.invoice.uri.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiInvoiceUri<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.uri.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.invoice.uri.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.uri.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiInvoiceUriQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiInvoiceUriQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiInvoiceUri<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.uri.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.invoice.uri.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.uri.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiInvoiceUriQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiInvoiceUriQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiOrderAllQueryKey(args: InferRequestType<typeof client.api.order.all.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/order/all', keyArgs] as const
}

export function getApiOrderAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.order.all.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.order.all.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.order.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrderAllQueryKey>
  >({
    queryKey: getApiOrderAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.order.all.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiOrderAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.order.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.order.all.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.order.all.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrderAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiOrderAllQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiOrderAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.order.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.order.all.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.order.all.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrderAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiOrderAllQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.order.changestatus.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.api.order.changestatus.$post>,
        TOnMutateResult
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
  args: InferRequestType<typeof client.api.order.details.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/order/details', keyArgs] as const
}

export function getApiOrderDetailsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.order.details.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.order.details.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.order.details.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrderDetailsQueryKey>
  >({
    queryKey: getApiOrderDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.order.details.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiOrderDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.order.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.order.details.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.order.details.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrderDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiOrderDetailsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiOrderDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.order.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.order.details.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.order.details.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrderDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiOrderDetailsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.order.new.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.order.new.$post>,
        TOnMutateResult
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
  args: InferRequestType<typeof client.api.payment.supported.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/payment/supported', keyArgs] as const
}

export function getApiPaymentSupportedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payment.supported.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.payment.supported.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.payment.supported.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPaymentSupportedQueryKey>
  >({
    queryKey: getApiPaymentSupportedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.payment.supported.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiPaymentSupported<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payment.supported.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.payment.supported.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.payment.supported.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPaymentSupportedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPaymentSupportedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPaymentSupported<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payment.supported.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.payment.supported.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.payment.supported.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPaymentSupportedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPaymentSupportedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPaymentlinkAllQueryKey(
  args: InferRequestType<typeof client.api.paymentlink.all.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/paymentlink/all', keyArgs] as const
}

export function getApiPaymentlinkAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.all.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.paymentlink.all.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPaymentlinkAllQueryKey>
  >({
    queryKey: getApiPaymentlinkAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.paymentlink.all.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiPaymentlinkAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.paymentlink.all.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.all.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPaymentlinkAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPaymentlinkAllQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPaymentlinkAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.paymentlink.all.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.all.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPaymentlinkAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPaymentlinkAllQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<typeof client.api.paymentlink.uri.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/paymentlink/uri', keyArgs] as const
}

export function getApiPaymentlinkUriQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.uri.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.paymentlink.uri.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.uri.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPaymentlinkUriQueryKey>
  >({
    queryKey: getApiPaymentlinkUriQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.paymentlink.uri.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiPaymentlinkUri<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.uri.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.paymentlink.uri.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.uri.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPaymentlinkUriQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPaymentlinkUriQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPaymentlinkUri<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.uri.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.paymentlink.uri.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.uri.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPaymentlinkUriQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPaymentlinkUriQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiProductAllQueryKey(
  args: InferRequestType<typeof client.api.product.all.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/product/all', keyArgs] as const
}

export function getApiProductAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.product.all.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.product.all.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.product.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiProductAllQueryKey>
  >({
    queryKey: getApiProductAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.product.all.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiProductAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.product.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.product.all.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.product.all.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiProductAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiProductAllQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiProductAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.product.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.product.all.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.product.all.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiProductAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiProductAllQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<typeof client.api.product.details.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/product/details', keyArgs] as const
}

export function getApiProductDetailsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.product.details.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.product.details.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.product.details.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiProductDetailsQueryKey>
  >({
    queryKey: getApiProductDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.product.details.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiProductDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.product.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.product.details.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.product.details.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiProductDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiProductDetailsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiProductDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.product.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.product.details.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.product.details.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiProductDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiProductDetailsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.product.new.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.product.new.$post>,
        TOnMutateResult
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

export function getApiTaxAllQueryKey(args: InferRequestType<typeof client.api.tax.all.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/tax/all', keyArgs] as const
}

export function getApiTaxAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tax.all.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.tax.all.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tax.all.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiTaxAllQueryKey>
  >({
    queryKey: getApiTaxAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.tax.all.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiTaxAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tax.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.tax.all.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tax.all.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiTaxAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiTaxAllQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiTaxAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tax.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.tax.all.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tax.all.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiTaxAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiTaxAllQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tax.delete.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.tax.delete.$post>,
        TOnMutateResult
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tax.new.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.tax.new.$post>,
        TOnMutateResult
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
  args: InferRequestType<typeof client.api.worktype.all.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/worktype/all', keyArgs] as const
}

export function getApiWorktypeAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.all.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.worktype.all.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiWorktypeAllQueryKey>
  >({
    queryKey: getApiWorktypeAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.worktype.all.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiWorktypeAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.worktype.all.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.all.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiWorktypeAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiWorktypeAllQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiWorktypeAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.worktype.all.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.all.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiWorktypeAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiWorktypeAllQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<typeof client.api.worktype.details.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/worktype/details', keyArgs] as const
}

export function getApiWorktypeDetailsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.details.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.worktype.details.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.details.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiWorktypeDetailsQueryKey>
  >({
    queryKey: getApiWorktypeDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.worktype.details.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiWorktypeDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.worktype.details.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.details.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiWorktypeDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiWorktypeDetailsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiWorktypeDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.worktype.details.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.details.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiWorktypeDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiWorktypeDetailsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<typeof client.api.worktype.search.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/worktype/search', keyArgs] as const
}

export function getApiWorktypeSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.worktype.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiWorktypeSearchQueryKey>
  >({
    queryKey: getApiWorktypeSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.worktype.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiWorktypeSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.worktype.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiWorktypeSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiWorktypeSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiWorktypeSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.worktype.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiWorktypeSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiWorktypeSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
