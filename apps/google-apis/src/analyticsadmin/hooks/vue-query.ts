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

export function getV1betaKey() {
  return ['v1beta'] as const
}

export function getV1betaAccountSummariesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta.accountSummaries.$get>>,
) {
  return ['v1beta', '/v1beta/accountSummaries', toValue(args)] as const
}

export function getV1betaAccountSummariesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta.accountSummaries.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1betaAccountSummariesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta.accountSummaries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1betaAccountSummaries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1beta.accountSummaries.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta.accountSummaries.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1beta.accountSummaries.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1beta.accountSummaries.$get>>>
            >
          >,
          ReturnType<typeof getV1betaAccountSummariesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1beta.accountSummaries.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaAccountSummariesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1betaAccountSummariesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta.accountSummaries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1betaAccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta.accounts.$get>>,
) {
  return ['v1beta', '/v1beta/accounts', toValue(args)] as const
}

export function getV1betaAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta.accounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1betaAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta.accounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1betaAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta.accounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1beta.accounts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1beta.accounts.$get>>>
            >
          >,
          ReturnType<typeof getV1betaAccountsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta.accounts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1betaAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta.accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1betaAccountsProvisionAccountTicketMutationKey() {
  return ['v1beta', '/v1beta/accounts:provisionAccountTicket', 'POST'] as const
}

export function getPostV1betaAccountsProvisionAccountTicketMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)['accounts:provisionAccountTicket']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)['accounts:provisionAccountTicket']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaAccountsProvisionAccountTicketMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta)['accounts:provisionAccountTicket']['$post']>,
    ) {
      return parseResponse(client.v1beta['accounts:provisionAccountTicket'].$post(args, options))
    },
  })
}

export function usePostV1betaAccountsProvisionAccountTicket<
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
                  ReturnType<(typeof client.v1beta)['accounts:provisionAccountTicket']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta)['accounts:provisionAccountTicket']['$post']>,
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
  const mutationDefaults = getPostV1betaAccountsProvisionAccountTicketMutationOptions<
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

export function getV1betaPropertiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta.properties.$get>>,
) {
  return ['v1beta', '/v1beta/properties', toValue(args)] as const
}

export function getV1betaPropertiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta.properties.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1betaPropertiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta.properties.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1betaProperties<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta.properties.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta.properties.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1beta.properties.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1beta.properties.$get>>>
            >
          >,
          ReturnType<typeof getV1betaPropertiesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta.properties.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaPropertiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1betaPropertiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta.properties.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1betaPropertiesMutationKey() {
  return ['v1beta', '/v1beta/properties', 'POST'] as const
}

export function getPostV1betaPropertiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta.properties.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1beta.properties.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaPropertiesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1beta.properties.$post>) {
      return parseResponse(client.v1beta.properties.$post(args, options))
    },
  })
}

export function usePostV1betaProperties<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1beta.properties.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1beta.properties.$post>,
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
  const mutationDefaults = getPostV1betaPropertiesMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1betaAccountSearchChangeHistoryEventsMutationKey() {
  return ['v1beta', '/v1beta/:account:searchChangeHistoryEvents', 'POST'] as const
}

export function getPostV1betaAccountSearchChangeHistoryEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':account:searchChangeHistoryEvents']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':account:searchChangeHistoryEvents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaAccountSearchChangeHistoryEventsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta)[':account:searchChangeHistoryEvents']['$post']>,
    ) {
      return parseResponse(client.v1beta[':account:searchChangeHistoryEvents'].$post(args, options))
    },
  })
}

export function usePostV1betaAccountSearchChangeHistoryEvents<
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
                  ReturnType<(typeof client.v1beta)[':account:searchChangeHistoryEvents']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta)[':account:searchChangeHistoryEvents']['$post']>,
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
  const mutationDefaults = getPostV1betaAccountSearchChangeHistoryEventsMutationOptions<
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

export function getPostV1betaEntityRunAccessReportMutationKey() {
  return ['v1beta', '/v1beta/:entity:runAccessReport', 'POST'] as const
}

export function getPostV1betaEntityRunAccessReportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':entity:runAccessReport']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':entity:runAccessReport']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaEntityRunAccessReportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta)[':entity:runAccessReport']['$post']>,
    ) {
      return parseResponse(client.v1beta[':entity:runAccessReport'].$post(args, options))
    },
  })
}

export function usePostV1betaEntityRunAccessReport<
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
                Awaited<ReturnType<(typeof client.v1beta)[':entity:runAccessReport']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta)[':entity:runAccessReport']['$post']>,
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
  const mutationDefaults = getPostV1betaEntityRunAccessReportMutationOptions<
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

export function getV1betaNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta)[':name']['$get']>>,
) {
  return ['v1beta', '/v1beta/:name', toValue(args)] as const
}

export function getV1betaNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1betaNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1betaName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getV1betaNameQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1betaNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1betaNameMutationKey() {
  return ['v1beta', '/v1beta/:name', 'DELETE'] as const
}

export function getDeleteV1betaNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1betaNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta)[':name']['$delete']>) {
      return parseResponse(client.v1beta[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV1betaName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteV1betaNameMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1betaNameMutationKey() {
  return ['v1beta', '/v1beta/:name', 'PATCH'] as const
}

export function getPatchV1betaNameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1betaNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta)[':name']['$patch']>) {
      return parseResponse(client.v1beta[':name'].$patch(args, options))
    },
  })
}

export function usePatchV1betaName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta)[':name']['$patch']>,
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
  const mutationDefaults = getPatchV1betaNameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1betaNameArchiveMutationKey() {
  return ['v1beta', '/v1beta/:name:archive', 'POST'] as const
}

export function getPostV1betaNameArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name:archive']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':name:archive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaNameArchiveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta)[':name:archive']['$post']>) {
      return parseResponse(client.v1beta[':name:archive'].$post(args, options))
    },
  })
}

export function usePostV1betaNameArchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta)[':name:archive']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta)[':name:archive']['$post']>,
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
  const mutationDefaults = getPostV1betaNameArchiveMutationOptions<TError, TOnMutateResult>(
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

export function getV1betaParentConversionEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta)[':parent']['conversionEvents']['$get']>
  >,
) {
  return ['v1beta', '/v1beta/:parent/conversionEvents', toValue(args)] as const
}

export function getV1betaParentConversionEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta)[':parent']['conversionEvents']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1betaParentConversionEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta[':parent'].conversionEvents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1betaParentConversionEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta)[':parent']['conversionEvents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta)[':parent']['conversionEvents']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta)[':parent']['conversionEvents']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta)[':parent']['conversionEvents']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1betaParentConversionEventsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['conversionEvents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaParentConversionEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1betaParentConversionEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta[':parent'].conversionEvents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1betaParentConversionEventsMutationKey() {
  return ['v1beta', '/v1beta/:parent/conversionEvents', 'POST'] as const
}

export function getPostV1betaParentConversionEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['conversionEvents']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':parent']['conversionEvents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaParentConversionEventsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta)[':parent']['conversionEvents']['$post']>,
    ) {
      return parseResponse(client.v1beta[':parent'].conversionEvents.$post(args, options))
    },
  })
}

export function usePostV1betaParentConversionEvents<
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
                Awaited<ReturnType<(typeof client.v1beta)[':parent']['conversionEvents']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta)[':parent']['conversionEvents']['$post']>,
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
  const mutationDefaults = getPostV1betaParentConversionEventsMutationOptions<
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

export function getV1betaParentCustomDimensionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta)[':parent']['customDimensions']['$get']>
  >,
) {
  return ['v1beta', '/v1beta/:parent/customDimensions', toValue(args)] as const
}

export function getV1betaParentCustomDimensionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta)[':parent']['customDimensions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1betaParentCustomDimensionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta[':parent'].customDimensions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1betaParentCustomDimensions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta)[':parent']['customDimensions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta)[':parent']['customDimensions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta)[':parent']['customDimensions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta)[':parent']['customDimensions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1betaParentCustomDimensionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['customDimensions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaParentCustomDimensionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1betaParentCustomDimensionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta[':parent'].customDimensions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1betaParentCustomDimensionsMutationKey() {
  return ['v1beta', '/v1beta/:parent/customDimensions', 'POST'] as const
}

export function getPostV1betaParentCustomDimensionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['customDimensions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':parent']['customDimensions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaParentCustomDimensionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta)[':parent']['customDimensions']['$post']>,
    ) {
      return parseResponse(client.v1beta[':parent'].customDimensions.$post(args, options))
    },
  })
}

export function usePostV1betaParentCustomDimensions<
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
                Awaited<ReturnType<(typeof client.v1beta)[':parent']['customDimensions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta)[':parent']['customDimensions']['$post']>,
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
  const mutationDefaults = getPostV1betaParentCustomDimensionsMutationOptions<
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

export function getV1betaParentCustomMetricsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta)[':parent']['customMetrics']['$get']>
  >,
) {
  return ['v1beta', '/v1beta/:parent/customMetrics', toValue(args)] as const
}

export function getV1betaParentCustomMetricsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta)[':parent']['customMetrics']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1betaParentCustomMetricsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta[':parent'].customMetrics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1betaParentCustomMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta)[':parent']['customMetrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta)[':parent']['customMetrics']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta)[':parent']['customMetrics']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta)[':parent']['customMetrics']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1betaParentCustomMetricsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['customMetrics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaParentCustomMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1betaParentCustomMetricsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta[':parent'].customMetrics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1betaParentCustomMetricsMutationKey() {
  return ['v1beta', '/v1beta/:parent/customMetrics', 'POST'] as const
}

export function getPostV1betaParentCustomMetricsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['customMetrics']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':parent']['customMetrics']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaParentCustomMetricsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta)[':parent']['customMetrics']['$post']>,
    ) {
      return parseResponse(client.v1beta[':parent'].customMetrics.$post(args, options))
    },
  })
}

export function usePostV1betaParentCustomMetrics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta)[':parent']['customMetrics']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta)[':parent']['customMetrics']['$post']>,
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
  const mutationDefaults = getPostV1betaParentCustomMetricsMutationOptions<TError, TOnMutateResult>(
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

export function getV1betaParentDataStreamsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta)[':parent']['dataStreams']['$get']>
  >,
) {
  return ['v1beta', '/v1beta/:parent/dataStreams', toValue(args)] as const
}

export function getV1betaParentDataStreamsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta)[':parent']['dataStreams']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1betaParentDataStreamsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta[':parent'].dataStreams.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1betaParentDataStreams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta)[':parent']['dataStreams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta)[':parent']['dataStreams']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta)[':parent']['dataStreams']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta)[':parent']['dataStreams']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1betaParentDataStreamsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['dataStreams']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaParentDataStreamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1betaParentDataStreamsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta[':parent'].dataStreams.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1betaParentDataStreamsMutationKey() {
  return ['v1beta', '/v1beta/:parent/dataStreams', 'POST'] as const
}

export function getPostV1betaParentDataStreamsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['dataStreams']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':parent']['dataStreams']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaParentDataStreamsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta)[':parent']['dataStreams']['$post']>,
    ) {
      return parseResponse(client.v1beta[':parent'].dataStreams.$post(args, options))
    },
  })
}

export function usePostV1betaParentDataStreams<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta)[':parent']['dataStreams']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta)[':parent']['dataStreams']['$post']>,
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
  const mutationDefaults = getPostV1betaParentDataStreamsMutationOptions<TError, TOnMutateResult>(
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

export function getV1betaParentFirebaseLinksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta)[':parent']['firebaseLinks']['$get']>
  >,
) {
  return ['v1beta', '/v1beta/:parent/firebaseLinks', toValue(args)] as const
}

export function getV1betaParentFirebaseLinksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta)[':parent']['firebaseLinks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1betaParentFirebaseLinksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta[':parent'].firebaseLinks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1betaParentFirebaseLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta)[':parent']['firebaseLinks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta)[':parent']['firebaseLinks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta)[':parent']['firebaseLinks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta)[':parent']['firebaseLinks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1betaParentFirebaseLinksQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['firebaseLinks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaParentFirebaseLinksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1betaParentFirebaseLinksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta[':parent'].firebaseLinks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1betaParentFirebaseLinksMutationKey() {
  return ['v1beta', '/v1beta/:parent/firebaseLinks', 'POST'] as const
}

export function getPostV1betaParentFirebaseLinksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['firebaseLinks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':parent']['firebaseLinks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaParentFirebaseLinksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta)[':parent']['firebaseLinks']['$post']>,
    ) {
      return parseResponse(client.v1beta[':parent'].firebaseLinks.$post(args, options))
    },
  })
}

export function usePostV1betaParentFirebaseLinks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta)[':parent']['firebaseLinks']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta)[':parent']['firebaseLinks']['$post']>,
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
  const mutationDefaults = getPostV1betaParentFirebaseLinksMutationOptions<TError, TOnMutateResult>(
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

export function getV1betaParentGoogleAdsLinksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta)[':parent']['googleAdsLinks']['$get']>
  >,
) {
  return ['v1beta', '/v1beta/:parent/googleAdsLinks', toValue(args)] as const
}

export function getV1betaParentGoogleAdsLinksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta)[':parent']['googleAdsLinks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1betaParentGoogleAdsLinksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta[':parent'].googleAdsLinks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1betaParentGoogleAdsLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta)[':parent']['googleAdsLinks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta)[':parent']['googleAdsLinks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta)[':parent']['googleAdsLinks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta)[':parent']['googleAdsLinks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1betaParentGoogleAdsLinksQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['googleAdsLinks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaParentGoogleAdsLinksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1betaParentGoogleAdsLinksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta[':parent'].googleAdsLinks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1betaParentGoogleAdsLinksMutationKey() {
  return ['v1beta', '/v1beta/:parent/googleAdsLinks', 'POST'] as const
}

export function getPostV1betaParentGoogleAdsLinksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['googleAdsLinks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':parent']['googleAdsLinks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaParentGoogleAdsLinksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta)[':parent']['googleAdsLinks']['$post']>,
    ) {
      return parseResponse(client.v1beta[':parent'].googleAdsLinks.$post(args, options))
    },
  })
}

export function usePostV1betaParentGoogleAdsLinks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta)[':parent']['googleAdsLinks']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta)[':parent']['googleAdsLinks']['$post']>,
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
  const mutationDefaults = getPostV1betaParentGoogleAdsLinksMutationOptions<
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

export function getV1betaParentMeasurementProtocolSecretsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta)[':parent']['measurementProtocolSecrets']['$get']>
  >,
) {
  return ['v1beta', '/v1beta/:parent/measurementProtocolSecrets', toValue(args)] as const
}

export function getV1betaParentMeasurementProtocolSecretsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta)[':parent']['measurementProtocolSecrets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1betaParentMeasurementProtocolSecretsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta[':parent'].measurementProtocolSecrets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1betaParentMeasurementProtocolSecrets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta)[':parent']['measurementProtocolSecrets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta)[':parent']['measurementProtocolSecrets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1beta)[':parent']['measurementProtocolSecrets']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1beta)[':parent']['measurementProtocolSecrets']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1betaParentMeasurementProtocolSecretsQueryKey>
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
          Awaited<
            ReturnType<(typeof client.v1beta)[':parent']['measurementProtocolSecrets']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaParentMeasurementProtocolSecretsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1betaParentMeasurementProtocolSecretsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta[':parent'].measurementProtocolSecrets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1betaParentMeasurementProtocolSecretsMutationKey() {
  return ['v1beta', '/v1beta/:parent/measurementProtocolSecrets', 'POST'] as const
}

export function getPostV1betaParentMeasurementProtocolSecretsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1beta)[':parent']['measurementProtocolSecrets']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':parent']['measurementProtocolSecrets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaParentMeasurementProtocolSecretsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta)[':parent']['measurementProtocolSecrets']['$post']
      >,
    ) {
      return parseResponse(client.v1beta[':parent'].measurementProtocolSecrets.$post(args, options))
    },
  })
}

export function usePostV1betaParentMeasurementProtocolSecrets<
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
                  ReturnType<
                    (typeof client.v1beta)[':parent']['measurementProtocolSecrets']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1beta)[':parent']['measurementProtocolSecrets']['$post']
          >,
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
  const mutationDefaults = getPostV1betaParentMeasurementProtocolSecretsMutationOptions<
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

export function getPostV1betaPropertyAcknowledgeUserDataCollectionMutationKey() {
  return ['v1beta', '/v1beta/:property:acknowledgeUserDataCollection', 'POST'] as const
}

export function getPostV1betaPropertyAcknowledgeUserDataCollectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1beta)[':property:acknowledgeUserDataCollection']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':property:acknowledgeUserDataCollection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaPropertyAcknowledgeUserDataCollectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta)[':property:acknowledgeUserDataCollection']['$post']
      >,
    ) {
      return parseResponse(
        client.v1beta[':property:acknowledgeUserDataCollection'].$post(args, options),
      )
    },
  })
}

export function usePostV1betaPropertyAcknowledgeUserDataCollection<
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
                  ReturnType<
                    (typeof client.v1beta)[':property:acknowledgeUserDataCollection']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1beta)[':property:acknowledgeUserDataCollection']['$post']
          >,
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
  const mutationDefaults = getPostV1betaPropertyAcknowledgeUserDataCollectionMutationOptions<
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
