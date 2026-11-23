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

export function getApi1PartnersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['partners']['$get']>>,
) {
  return ['api', '/api/1/partners', toValue(args)] as const
}

export function getApi1PartnersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['partners']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1PartnersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].partners.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1Partners<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['partners']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['partners']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['partners']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['partners']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1PartnersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['partners']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1PartnersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1PartnersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].partners.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi1PartnersMutationKey() {
  return ['api', '/api/1/partners', 'POST'] as const
}

export function getPostApi1PartnersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['partners']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['partners']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1PartnersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['partners']['$post']>) {
      return parseResponse(client.api['1'].partners.$post(args, options))
    },
  })
}

export function usePostApi1Partners<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['partners']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['partners']['$post']>,
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
  const mutationDefaults = getPostApi1PartnersMutationOptions<TError, TOnMutateResult>(
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

export function getApi1PartnersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['partners'][':id']['$get']>>,
) {
  return ['api', '/api/1/partners/:id', toValue(args)] as const
}

export function getApi1PartnersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['partners'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1PartnersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].partners[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1PartnersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['partners'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['partners'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['partners'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['partners'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1PartnersIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['partners'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1PartnersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1PartnersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].partners[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApi1PartnersIdMutationKey() {
  return ['api', '/api/1/partners/:id', 'PUT'] as const
}

export function getPutApi1PartnersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['partners'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['partners'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1PartnersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['partners'][':id']['$put']>) {
      return parseResponse(client.api['1'].partners[':id'].$put(args, options))
    },
  })
}

export function usePutApi1PartnersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['partners'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['partners'][':id']['$put']>,
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
  const mutationDefaults = getPutApi1PartnersIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApi1PartnersIdMutationKey() {
  return ['api', '/api/1/partners/:id', 'DELETE'] as const
}

export function getDeleteApi1PartnersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['1']['partners'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['1']['partners'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApi1PartnersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['partners'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['1'].partners[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApi1PartnersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['1']['partners'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['1']['partners'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteApi1PartnersIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutApi1PartnersCodeCodeMutationKey() {
  return ['api', '/api/1/partners/code/:code', 'PUT'] as const
}

export function getPutApi1PartnersCodeCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['partners']['code'][':code']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['partners']['code'][':code']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1PartnersCodeCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['partners']['code'][':code']['$put']>,
    ) {
      return parseResponse(client.api['1'].partners.code[':code'].$put(args, options))
    },
  })
}

export function usePutApi1PartnersCodeCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['partners']['code'][':code']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['partners']['code'][':code']['$put']>,
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
  const mutationDefaults = getPutApi1PartnersCodeCodeMutationOptions<TError, TOnMutateResult>(
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

export function getPutApi1PartnersUpsertByCodeMutationKey() {
  return ['api', '/api/1/partners/upsert_by_code', 'PUT'] as const
}

export function getPutApi1PartnersUpsertByCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['partners']['upsert_by_code']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['partners']['upsert_by_code']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1PartnersUpsertByCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['partners']['upsert_by_code']['$put']>,
    ) {
      return parseResponse(client.api['1'].partners.upsert_by_code.$put(args, options))
    },
  })
}

export function usePutApi1PartnersUpsertByCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['partners']['upsert_by_code']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['partners']['upsert_by_code']['$put']>,
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
  const mutationDefaults = getPutApi1PartnersUpsertByCodeMutationOptions<TError, TOnMutateResult>(
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

export function getApi1FormsSelectablesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['forms']['selectables']['$get']>
  >,
) {
  return ['api', '/api/1/forms/selectables', toValue(args)] as const
}

export function getApi1FormsSelectablesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['forms']['selectables']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1FormsSelectablesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].forms.selectables.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1FormsSelectables<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['forms']['selectables']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['forms']['selectables']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['forms']['selectables']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['forms']['selectables']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1FormsSelectablesQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['forms']['selectables']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1FormsSelectablesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1FormsSelectablesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].forms.selectables.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi1AccountItemsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['account_items'][':id']['$get']>
  >,
) {
  return ['api', '/api/1/account_items/:id', toValue(args)] as const
}

export function getApi1AccountItemsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['account_items'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1AccountItemsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].account_items[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1AccountItemsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['account_items'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['account_items'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['account_items'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['account_items'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1AccountItemsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['account_items'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1AccountItemsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1AccountItemsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].account_items[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApi1AccountItemsIdMutationKey() {
  return ['api', '/api/1/account_items/:id', 'PUT'] as const
}

export function getPutApi1AccountItemsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['account_items'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['account_items'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1AccountItemsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['account_items'][':id']['$put']>,
    ) {
      return parseResponse(client.api['1'].account_items[':id'].$put(args, options))
    },
  })
}

export function usePutApi1AccountItemsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['account_items'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['account_items'][':id']['$put']>,
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
  const mutationDefaults = getPutApi1AccountItemsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApi1AccountItemsIdMutationKey() {
  return ['api', '/api/1/account_items/:id', 'DELETE'] as const
}

export function getDeleteApi1AccountItemsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['1']['account_items'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['1']['account_items'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApi1AccountItemsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['account_items'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['1'].account_items[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApi1AccountItemsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['1']['account_items'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['1']['account_items'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteApi1AccountItemsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApi1AccountItemsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['account_items']['$get']>>,
) {
  return ['api', '/api/1/account_items', toValue(args)] as const
}

export function getApi1AccountItemsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['account_items']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1AccountItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].account_items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1AccountItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['account_items']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['account_items']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['account_items']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['account_items']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1AccountItemsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['account_items']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1AccountItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1AccountItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].account_items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi1AccountItemsMutationKey() {
  return ['api', '/api/1/account_items', 'POST'] as const
}

export function getPostApi1AccountItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['account_items']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['account_items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1AccountItemsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['account_items']['$post']>) {
      return parseResponse(client.api['1'].account_items.$post(args, options))
    },
  })
}

export function usePostApi1AccountItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['account_items']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['account_items']['$post']>,
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
  const mutationDefaults = getPostApi1AccountItemsMutationOptions<TError, TOnMutateResult>(
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

export function getPutApi1AccountItemsCodeUpsertMutationKey() {
  return ['api', '/api/1/account_items/code/upsert', 'PUT'] as const
}

export function getPutApi1AccountItemsCodeUpsertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['account_items']['code']['upsert']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['account_items']['code']['upsert']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1AccountItemsCodeUpsertMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['account_items']['code']['upsert']['$put']>,
    ) {
      return parseResponse(client.api['1'].account_items.code.upsert.$put(args, options))
    },
  })
}

export function usePutApi1AccountItemsCodeUpsert<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['1']['account_items']['code']['upsert']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['account_items']['code']['upsert']['$put']>,
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
  const mutationDefaults = getPutApi1AccountItemsCodeUpsertMutationOptions<TError, TOnMutateResult>(
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

export function getApi1TagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['tags']['$get']>>,
) {
  return ['api', '/api/1/tags', toValue(args)] as const
}

export function getApi1TagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['tags']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1TagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].tags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1Tags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['tags']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['tags']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['tags']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['tags']['$get']>>>
            >
          >,
          ReturnType<typeof getApi1TagsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['tags']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1TagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1TagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi1TagsMutationKey() {
  return ['api', '/api/1/tags', 'POST'] as const
}

export function getPostApi1TagsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['tags']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['tags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1TagsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['tags']['$post']>) {
      return parseResponse(client.api['1'].tags.$post(args, options))
    },
  })
}

export function usePostApi1Tags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['tags']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['tags']['$post']>,
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
  const mutationDefaults = getPostApi1TagsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApi1TagsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['tags'][':id']['$get']>>,
) {
  return ['api', '/api/1/tags/:id', toValue(args)] as const
}

export function getApi1TagsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['tags'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1TagsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].tags[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1TagsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['tags'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['tags'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['tags'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['tags'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1TagsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['tags'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1TagsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1TagsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].tags[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApi1TagsIdMutationKey() {
  return ['api', '/api/1/tags/:id', 'PUT'] as const
}

export function getPutApi1TagsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['tags'][':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['tags'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1TagsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['tags'][':id']['$put']>) {
      return parseResponse(client.api['1'].tags[':id'].$put(args, options))
    },
  })
}

export function usePutApi1TagsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['tags'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['tags'][':id']['$put']>,
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
  const mutationDefaults = getPutApi1TagsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApi1TagsIdMutationKey() {
  return ['api', '/api/1/tags/:id', 'DELETE'] as const
}

export function getDeleteApi1TagsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['1']['tags'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['1']['tags'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApi1TagsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['tags'][':id']['$delete']>) {
      return parseResponse(client.api['1'].tags[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApi1TagsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['1']['tags'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['1']['tags'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteApi1TagsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApi1SectionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['sections']['$get']>>,
) {
  return ['api', '/api/1/sections', toValue(args)] as const
}

export function getApi1SectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['sections']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1SectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].sections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1Sections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['sections']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['sections']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['sections']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['sections']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1SectionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['sections']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1SectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1SectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].sections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi1SectionsMutationKey() {
  return ['api', '/api/1/sections', 'POST'] as const
}

export function getPostApi1SectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['sections']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['sections']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1SectionsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['sections']['$post']>) {
      return parseResponse(client.api['1'].sections.$post(args, options))
    },
  })
}

export function usePostApi1Sections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['sections']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['sections']['$post']>,
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
  const mutationDefaults = getPostApi1SectionsMutationOptions<TError, TOnMutateResult>(
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

export function getApi1SectionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['sections'][':id']['$get']>>,
) {
  return ['api', '/api/1/sections/:id', toValue(args)] as const
}

export function getApi1SectionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['sections'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1SectionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].sections[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1SectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['sections'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['sections'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['sections'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['sections'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1SectionsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['sections'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1SectionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1SectionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].sections[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApi1SectionsIdMutationKey() {
  return ['api', '/api/1/sections/:id', 'PUT'] as const
}

export function getPutApi1SectionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['sections'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['sections'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1SectionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['sections'][':id']['$put']>) {
      return parseResponse(client.api['1'].sections[':id'].$put(args, options))
    },
  })
}

export function usePutApi1SectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['sections'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['sections'][':id']['$put']>,
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
  const mutationDefaults = getPutApi1SectionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApi1SectionsIdMutationKey() {
  return ['api', '/api/1/sections/:id', 'DELETE'] as const
}

export function getDeleteApi1SectionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['1']['sections'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['1']['sections'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApi1SectionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['sections'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['1'].sections[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApi1SectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['1']['sections'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['1']['sections'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteApi1SectionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutApi1SectionsCodeUpsertMutationKey() {
  return ['api', '/api/1/sections/code/upsert', 'PUT'] as const
}

export function getPutApi1SectionsCodeUpsertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['sections']['code']['upsert']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['sections']['code']['upsert']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1SectionsCodeUpsertMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['sections']['code']['upsert']['$put']>,
    ) {
      return parseResponse(client.api['1'].sections.code.upsert.$put(args, options))
    },
  })
}

export function usePutApi1SectionsCodeUpsert<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['sections']['code']['upsert']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['sections']['code']['upsert']['$put']>,
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
  const mutationDefaults = getPutApi1SectionsCodeUpsertMutationOptions<TError, TOnMutateResult>(
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

export function getApi1InvoicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['invoices']['$get']>>,
) {
  return ['api', '/api/1/invoices', toValue(args)] as const
}

export function getApi1InvoicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['invoices']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1InvoicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].invoices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1Invoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['invoices']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['invoices']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['invoices']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['invoices']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1InvoicesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['invoices']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1InvoicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1InvoicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].invoices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi1InvoicesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['invoices'][':id']['$get']>>,
) {
  return ['api', '/api/1/invoices/:id', toValue(args)] as const
}

export function getApi1InvoicesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['invoices'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1InvoicesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].invoices[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1InvoicesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['invoices'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['invoices'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['invoices'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['invoices'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1InvoicesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['invoices'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1InvoicesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1InvoicesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].invoices[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi1QuotationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['quotations']['$get']>>,
) {
  return ['api', '/api/1/quotations', toValue(args)] as const
}

export function getApi1QuotationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['quotations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1QuotationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].quotations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1Quotations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['quotations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['quotations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['quotations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['quotations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1QuotationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['quotations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1QuotationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1QuotationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].quotations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi1QuotationsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['quotations'][':id']['$get']>>,
) {
  return ['api', '/api/1/quotations/:id', toValue(args)] as const
}

export function getApi1QuotationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['quotations'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1QuotationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].quotations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1QuotationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['quotations'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['quotations'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['quotations'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['quotations'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1QuotationsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['quotations'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1QuotationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1QuotationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].quotations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi1DealsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['deals']['$get']>>,
) {
  return ['api', '/api/1/deals', toValue(args)] as const
}

export function getApi1DealsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['deals']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1DealsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].deals.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1Deals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['deals']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['deals']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['deals']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['deals']['$get']>>>
            >
          >,
          ReturnType<typeof getApi1DealsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['deals']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1DealsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1DealsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].deals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi1DealsMutationKey() {
  return ['api', '/api/1/deals', 'POST'] as const
}

export function getPostApi1DealsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['deals']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['deals']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1DealsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['deals']['$post']>) {
      return parseResponse(client.api['1'].deals.$post(args, options))
    },
  })
}

export function usePostApi1Deals<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['deals']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['deals']['$post']>,
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
  const mutationDefaults = getPostApi1DealsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApi1DealsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['deals'][':id']['$get']>>,
) {
  return ['api', '/api/1/deals/:id', toValue(args)] as const
}

export function getApi1DealsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['deals'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1DealsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].deals[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1DealsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['deals'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['deals'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['deals'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['deals'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1DealsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['deals'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1DealsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1DealsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].deals[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApi1DealsIdMutationKey() {
  return ['api', '/api/1/deals/:id', 'PUT'] as const
}

export function getPutApi1DealsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['deals'][':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['deals'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1DealsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['deals'][':id']['$put']>) {
      return parseResponse(client.api['1'].deals[':id'].$put(args, options))
    },
  })
}

export function usePutApi1DealsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['deals'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['deals'][':id']['$put']>,
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
  const mutationDefaults = getPutApi1DealsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApi1DealsIdMutationKey() {
  return ['api', '/api/1/deals/:id', 'DELETE'] as const
}

export function getDeleteApi1DealsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['1']['deals'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['1']['deals'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApi1DealsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['deals'][':id']['$delete']>) {
      return parseResponse(client.api['1'].deals[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApi1DealsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['1']['deals'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['1']['deals'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteApi1DealsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostApi1DealsIdRenewsMutationKey() {
  return ['api', '/api/1/deals/:id/renews', 'POST'] as const
}

export function getPostApi1DealsIdRenewsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['deals'][':id']['renews']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['deals'][':id']['renews']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1DealsIdRenewsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['deals'][':id']['renews']['$post']>,
    ) {
      return parseResponse(client.api['1'].deals[':id'].renews.$post(args, options))
    },
  })
}

export function usePostApi1DealsIdRenews<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['deals'][':id']['renews']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['deals'][':id']['renews']['$post']>,
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
  const mutationDefaults = getPostApi1DealsIdRenewsMutationOptions<TError, TOnMutateResult>(
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

export function getPutApi1DealsIdRenewsRenewIdMutationKey() {
  return ['api', '/api/1/deals/:id/renews/:renew_id', 'PUT'] as const
}

export function getPutApi1DealsIdRenewsRenewIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['1']['deals'][':id']['renews'][':renew_id']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['deals'][':id']['renews'][':renew_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1DealsIdRenewsRenewIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['1']['deals'][':id']['renews'][':renew_id']['$put']
      >,
    ) {
      return parseResponse(client.api['1'].deals[':id'].renews[':renew_id'].$put(args, options))
    },
  })
}

export function usePutApi1DealsIdRenewsRenewId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api)['1']['deals'][':id']['renews'][':renew_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['deals'][':id']['renews'][':renew_id']['$put']>,
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
  const mutationDefaults = getPutApi1DealsIdRenewsRenewIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApi1DealsIdRenewsRenewIdMutationKey() {
  return ['api', '/api/1/deals/:id/renews/:renew_id', 'DELETE'] as const
}

export function getDeleteApi1DealsIdRenewsRenewIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['1']['deals'][':id']['renews'][':renew_id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['deals'][':id']['renews'][':renew_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApi1DealsIdRenewsRenewIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['1']['deals'][':id']['renews'][':renew_id']['$delete']
      >,
    ) {
      return parseResponse(client.api['1'].deals[':id'].renews[':renew_id'].$delete(args, options))
    },
  })
}

export function useDeleteApi1DealsIdRenewsRenewId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api)['1']['deals'][':id']['renews'][':renew_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api)['1']['deals'][':id']['renews'][':renew_id']['$delete']
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
  const mutationDefaults = getDeleteApi1DealsIdRenewsRenewIdMutationOptions<
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

export function getPostApi1DealsIdPaymentsMutationKey() {
  return ['api', '/api/1/deals/:id/payments', 'POST'] as const
}

export function getPostApi1DealsIdPaymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['deals'][':id']['payments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['deals'][':id']['payments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1DealsIdPaymentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['deals'][':id']['payments']['$post']>,
    ) {
      return parseResponse(client.api['1'].deals[':id'].payments.$post(args, options))
    },
  })
}

export function usePostApi1DealsIdPayments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['deals'][':id']['payments']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['deals'][':id']['payments']['$post']>,
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
  const mutationDefaults = getPostApi1DealsIdPaymentsMutationOptions<TError, TOnMutateResult>(
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

export function getPutApi1DealsIdPaymentsPaymentIdMutationKey() {
  return ['api', '/api/1/deals/:id/payments/:payment_id', 'PUT'] as const
}

export function getPutApi1DealsIdPaymentsPaymentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['1']['deals'][':id']['payments'][':payment_id']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['deals'][':id']['payments'][':payment_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1DealsIdPaymentsPaymentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['1']['deals'][':id']['payments'][':payment_id']['$put']
      >,
    ) {
      return parseResponse(client.api['1'].deals[':id'].payments[':payment_id'].$put(args, options))
    },
  })
}

export function usePutApi1DealsIdPaymentsPaymentId<
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
                    (typeof client.api)['1']['deals'][':id']['payments'][':payment_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api)['1']['deals'][':id']['payments'][':payment_id']['$put']
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
  const mutationDefaults = getPutApi1DealsIdPaymentsPaymentIdMutationOptions<
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

export function getDeleteApi1DealsIdPaymentsPaymentIdMutationKey() {
  return ['api', '/api/1/deals/:id/payments/:payment_id', 'DELETE'] as const
}

export function getDeleteApi1DealsIdPaymentsPaymentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)['1']['deals'][':id']['payments'][':payment_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api)['1']['deals'][':id']['payments'][':payment_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApi1DealsIdPaymentsPaymentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['1']['deals'][':id']['payments'][':payment_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api['1'].deals[':id'].payments[':payment_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApi1DealsIdPaymentsPaymentId<
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
                  Awaited<
                    ReturnType<
                      (typeof client.api)['1']['deals'][':id']['payments'][':payment_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api)['1']['deals'][':id']['payments'][':payment_id']['$delete']
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
  const mutationDefaults = getDeleteApi1DealsIdPaymentsPaymentIdMutationOptions<
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

export function getApi1ManualJournalsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['manual_journals']['$get']>>,
) {
  return ['api', '/api/1/manual_journals', toValue(args)] as const
}

export function getApi1ManualJournalsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['manual_journals']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1ManualJournalsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].manual_journals.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1ManualJournals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['manual_journals']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['manual_journals']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['manual_journals']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['manual_journals']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1ManualJournalsQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['manual_journals']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ManualJournalsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1ManualJournalsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].manual_journals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi1ManualJournalsMutationKey() {
  return ['api', '/api/1/manual_journals', 'POST'] as const
}

export function getPostApi1ManualJournalsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['manual_journals']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['manual_journals']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1ManualJournalsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['manual_journals']['$post']>) {
      return parseResponse(client.api['1'].manual_journals.$post(args, options))
    },
  })
}

export function usePostApi1ManualJournals<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['manual_journals']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['manual_journals']['$post']>,
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
  const mutationDefaults = getPostApi1ManualJournalsMutationOptions<TError, TOnMutateResult>(
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

export function getApi1ManualJournalsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['manual_journals'][':id']['$get']>
  >,
) {
  return ['api', '/api/1/manual_journals/:id', toValue(args)] as const
}

export function getApi1ManualJournalsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['manual_journals'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1ManualJournalsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].manual_journals[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1ManualJournalsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['manual_journals'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['manual_journals'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['manual_journals'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['manual_journals'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1ManualJournalsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['manual_journals'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ManualJournalsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1ManualJournalsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].manual_journals[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApi1ManualJournalsIdMutationKey() {
  return ['api', '/api/1/manual_journals/:id', 'PUT'] as const
}

export function getPutApi1ManualJournalsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['manual_journals'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['manual_journals'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1ManualJournalsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['manual_journals'][':id']['$put']>,
    ) {
      return parseResponse(client.api['1'].manual_journals[':id'].$put(args, options))
    },
  })
}

export function usePutApi1ManualJournalsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['manual_journals'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['manual_journals'][':id']['$put']>,
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
  const mutationDefaults = getPutApi1ManualJournalsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApi1ManualJournalsIdMutationKey() {
  return ['api', '/api/1/manual_journals/:id', 'DELETE'] as const
}

export function getDeleteApi1ManualJournalsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['1']['manual_journals'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['1']['manual_journals'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApi1ManualJournalsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['manual_journals'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['1'].manual_journals[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApi1ManualJournalsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['1']['manual_journals'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['1']['manual_journals'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteApi1ManualJournalsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApi1UsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['users']['$get']>>,
) {
  return ['api', '/api/1/users', toValue(args)] as const
}

export function getApi1UsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['users']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1UsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1Users<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['users']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['users']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['users']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['users']['$get']>>>
            >
          >,
          ReturnType<typeof getApi1UsersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['users']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1UsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1UsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi1UsersMeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['users']['me']['$get']>>,
) {
  return ['api', '/api/1/users/me', toValue(args)] as const
}

export function getApi1UsersMeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['users']['me']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1UsersMeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].users.me.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1UsersMe<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['users']['me']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['users']['me']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['users']['me']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['users']['me']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1UsersMeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['users']['me']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1UsersMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1UsersMeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].users.me.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApi1UsersMeMutationKey() {
  return ['api', '/api/1/users/me', 'PUT'] as const
}

export function getPutApi1UsersMeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['users']['me']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['users']['me']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1UsersMeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['users']['me']['$put']>) {
      return parseResponse(client.api['1'].users.me.$put(args, options))
    },
  })
}

export function usePutApi1UsersMe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['users']['me']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['users']['me']['$put']>,
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
  const mutationDefaults = getPutApi1UsersMeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApi1UsersCapabilitiesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['users']['capabilities']['$get']>
  >,
) {
  return ['api', '/api/1/users/capabilities', toValue(args)] as const
}

export function getApi1UsersCapabilitiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['users']['capabilities']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1UsersCapabilitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].users.capabilities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1UsersCapabilities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['users']['capabilities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['users']['capabilities']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['users']['capabilities']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['users']['capabilities']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1UsersCapabilitiesQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['users']['capabilities']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1UsersCapabilitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1UsersCapabilitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].users.capabilities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi1CompaniesQueryKey() {
  return ['api', '/api/1/companies'] as const
}

export function getApi1CompaniesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApi1CompaniesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].companies.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1Companies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['companies']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['companies']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['companies']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1CompaniesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['companies']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1CompaniesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApi1CompaniesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].companies.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi1CompaniesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['companies'][':id']['$get']>>,
) {
  return ['api', '/api/1/companies/:id', toValue(args)] as const
}

export function getApi1CompaniesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['companies'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1CompaniesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].companies[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1CompaniesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['companies'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['companies'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['companies'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['companies'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1CompaniesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['companies'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1CompaniesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1CompaniesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].companies[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi1ItemsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['items']['$get']>>,
) {
  return ['api', '/api/1/items', toValue(args)] as const
}

export function getApi1ItemsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['items']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1ItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1Items<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['items']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['items']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['items']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['items']['$get']>>>
            >
          >,
          ReturnType<typeof getApi1ItemsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['items']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1ItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi1ItemsMutationKey() {
  return ['api', '/api/1/items', 'POST'] as const
}

export function getPostApi1ItemsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['items']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1ItemsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['items']['$post']>) {
      return parseResponse(client.api['1'].items.$post(args, options))
    },
  })
}

export function usePostApi1Items<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['items']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['items']['$post']>,
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
  const mutationDefaults = getPostApi1ItemsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApi1ItemsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['items'][':id']['$get']>>,
) {
  return ['api', '/api/1/items/:id', toValue(args)] as const
}

export function getApi1ItemsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['items'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1ItemsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].items[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1ItemsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['items'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['items'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['items'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['items'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1ItemsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['items'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ItemsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1ItemsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].items[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApi1ItemsIdMutationKey() {
  return ['api', '/api/1/items/:id', 'PUT'] as const
}

export function getPutApi1ItemsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['items'][':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['items'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1ItemsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['items'][':id']['$put']>) {
      return parseResponse(client.api['1'].items[':id'].$put(args, options))
    },
  })
}

export function usePutApi1ItemsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['items'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['items'][':id']['$put']>,
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
  const mutationDefaults = getPutApi1ItemsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApi1ItemsIdMutationKey() {
  return ['api', '/api/1/items/:id', 'DELETE'] as const
}

export function getDeleteApi1ItemsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['1']['items'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['1']['items'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApi1ItemsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['items'][':id']['$delete']>) {
      return parseResponse(client.api['1'].items[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApi1ItemsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['1']['items'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['1']['items'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteApi1ItemsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutApi1ItemsCodeUpsertMutationKey() {
  return ['api', '/api/1/items/code/upsert', 'PUT'] as const
}

export function getPutApi1ItemsCodeUpsertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['items']['code']['upsert']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['items']['code']['upsert']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1ItemsCodeUpsertMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['items']['code']['upsert']['$put']>,
    ) {
      return parseResponse(client.api['1'].items.code.upsert.$put(args, options))
    },
  })
}

export function usePutApi1ItemsCodeUpsert<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['items']['code']['upsert']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['items']['code']['upsert']['$put']>,
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
  const mutationDefaults = getPutApi1ItemsCodeUpsertMutationOptions<TError, TOnMutateResult>(
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

export function getApi1TaxesCodesQueryKey() {
  return ['api', '/api/1/taxes/codes'] as const
}

export function getApi1TaxesCodesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApi1TaxesCodesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].taxes.codes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1TaxesCodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['taxes']['codes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['taxes']['codes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['taxes']['codes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1TaxesCodesQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['taxes']['codes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1TaxesCodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApi1TaxesCodesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].taxes.codes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi1TaxesCodesCodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['taxes']['codes'][':code']['$get']>
  >,
) {
  return ['api', '/api/1/taxes/codes/:code', toValue(args)] as const
}

export function getApi1TaxesCodesCodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['taxes']['codes'][':code']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1TaxesCodesCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].taxes.codes[':code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1TaxesCodesCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['taxes']['codes'][':code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['taxes']['codes'][':code']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['taxes']['codes'][':code']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['taxes']['codes'][':code']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1TaxesCodesCodeQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['taxes']['codes'][':code']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1TaxesCodesCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1TaxesCodesCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].taxes.codes[':code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi1TaxesCompaniesCompanyIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['taxes']['companies'][':company_id']['$get']>
  >,
) {
  return ['api', '/api/1/taxes/companies/:company_id', toValue(args)] as const
}

export function getApi1TaxesCompaniesCompanyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['taxes']['companies'][':company_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1TaxesCompaniesCompanyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].taxes.companies[':company_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1TaxesCompaniesCompanyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['taxes']['companies'][':company_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['taxes']['companies'][':company_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['1']['taxes']['companies'][':company_id']['$get']>
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
                  ReturnType<(typeof client.api)['1']['taxes']['companies'][':company_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApi1TaxesCompaniesCompanyIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['taxes']['companies'][':company_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1TaxesCompaniesCompanyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1TaxesCompaniesCompanyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].taxes.companies[':company_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi1WalletablesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['walletables']['$get']>>,
) {
  return ['api', '/api/1/walletables', toValue(args)] as const
}

export function getApi1WalletablesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['walletables']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1WalletablesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].walletables.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1Walletables<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['walletables']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['walletables']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['walletables']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['walletables']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1WalletablesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['walletables']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1WalletablesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1WalletablesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].walletables.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi1WalletablesMutationKey() {
  return ['api', '/api/1/walletables', 'POST'] as const
}

export function getPostApi1WalletablesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['walletables']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['walletables']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1WalletablesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['walletables']['$post']>) {
      return parseResponse(client.api['1'].walletables.$post(args, options))
    },
  })
}

export function usePostApi1Walletables<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['walletables']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['walletables']['$post']>,
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
  const mutationDefaults = getPostApi1WalletablesMutationOptions<TError, TOnMutateResult>(
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

export function getApi1WalletablesTypeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['walletables'][':type'][':id']['$get']>
  >,
) {
  return ['api', '/api/1/walletables/:type/:id', toValue(args)] as const
}

export function getApi1WalletablesTypeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['walletables'][':type'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1WalletablesTypeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].walletables[':type'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1WalletablesTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['walletables'][':type'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['walletables'][':type'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['walletables'][':type'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['walletables'][':type'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1WalletablesTypeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['walletables'][':type'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1WalletablesTypeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1WalletablesTypeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].walletables[':type'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApi1WalletablesTypeIdMutationKey() {
  return ['api', '/api/1/walletables/:type/:id', 'PUT'] as const
}

export function getPutApi1WalletablesTypeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['walletables'][':type'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['walletables'][':type'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1WalletablesTypeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['walletables'][':type'][':id']['$put']>,
    ) {
      return parseResponse(client.api['1'].walletables[':type'][':id'].$put(args, options))
    },
  })
}

export function usePutApi1WalletablesTypeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['walletables'][':type'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['walletables'][':type'][':id']['$put']>,
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
  const mutationDefaults = getPutApi1WalletablesTypeIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApi1WalletablesTypeIdMutationKey() {
  return ['api', '/api/1/walletables/:type/:id', 'DELETE'] as const
}

export function getDeleteApi1WalletablesTypeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['1']['walletables'][':type'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['1']['walletables'][':type'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApi1WalletablesTypeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['walletables'][':type'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['1'].walletables[':type'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApi1WalletablesTypeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api)['1']['walletables'][':type'][':id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['1']['walletables'][':type'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteApi1WalletablesTypeIdMutationOptions<TError, TOnMutateResult>(
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

export function getApi1BanksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['banks']['$get']>>,
) {
  return ['api', '/api/1/banks', toValue(args)] as const
}

export function getApi1BanksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['banks']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1BanksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].banks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1Banks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['banks']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['banks']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['banks']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['banks']['$get']>>>
            >
          >,
          ReturnType<typeof getApi1BanksQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['banks']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1BanksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1BanksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].banks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi1BanksIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['banks'][':id']['$get']>>,
) {
  return ['api', '/api/1/banks/:id', toValue(args)] as const
}

export function getApi1BanksIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['banks'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1BanksIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].banks[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1BanksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['banks'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['banks'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['banks'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['banks'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1BanksIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['banks'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1BanksIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1BanksIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].banks[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi1TransfersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['transfers']['$get']>>,
) {
  return ['api', '/api/1/transfers', toValue(args)] as const
}

export function getApi1TransfersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['transfers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1TransfersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].transfers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1Transfers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['transfers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['transfers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['transfers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['transfers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1TransfersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['transfers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1TransfersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1TransfersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].transfers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi1TransfersMutationKey() {
  return ['api', '/api/1/transfers', 'POST'] as const
}

export function getPostApi1TransfersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['transfers']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['transfers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1TransfersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['transfers']['$post']>) {
      return parseResponse(client.api['1'].transfers.$post(args, options))
    },
  })
}

export function usePostApi1Transfers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['transfers']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['transfers']['$post']>,
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
  const mutationDefaults = getPostApi1TransfersMutationOptions<TError, TOnMutateResult>(
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

export function getApi1TransfersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['transfers'][':id']['$get']>>,
) {
  return ['api', '/api/1/transfers/:id', toValue(args)] as const
}

export function getApi1TransfersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['transfers'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1TransfersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].transfers[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1TransfersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['transfers'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['transfers'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['transfers'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['transfers'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1TransfersIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['transfers'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1TransfersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1TransfersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].transfers[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApi1TransfersIdMutationKey() {
  return ['api', '/api/1/transfers/:id', 'PUT'] as const
}

export function getPutApi1TransfersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['transfers'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['transfers'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1TransfersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['transfers'][':id']['$put']>) {
      return parseResponse(client.api['1'].transfers[':id'].$put(args, options))
    },
  })
}

export function usePutApi1TransfersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['transfers'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['transfers'][':id']['$put']>,
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
  const mutationDefaults = getPutApi1TransfersIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApi1TransfersIdMutationKey() {
  return ['api', '/api/1/transfers/:id', 'DELETE'] as const
}

export function getDeleteApi1TransfersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['1']['transfers'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['1']['transfers'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApi1TransfersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['transfers'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['1'].transfers[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApi1TransfersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['1']['transfers'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['1']['transfers'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteApi1TransfersIdMutationOptions<TError, TOnMutateResult>(
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

export function getApi1WalletTxnsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['wallet_txns']['$get']>>,
) {
  return ['api', '/api/1/wallet_txns', toValue(args)] as const
}

export function getApi1WalletTxnsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['wallet_txns']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1WalletTxnsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].wallet_txns.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1WalletTxns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['wallet_txns']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['wallet_txns']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['wallet_txns']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['wallet_txns']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1WalletTxnsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['wallet_txns']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1WalletTxnsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1WalletTxnsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].wallet_txns.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi1WalletTxnsMutationKey() {
  return ['api', '/api/1/wallet_txns', 'POST'] as const
}

export function getPostApi1WalletTxnsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['wallet_txns']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['wallet_txns']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1WalletTxnsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['wallet_txns']['$post']>) {
      return parseResponse(client.api['1'].wallet_txns.$post(args, options))
    },
  })
}

export function usePostApi1WalletTxns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['wallet_txns']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['wallet_txns']['$post']>,
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
  const mutationDefaults = getPostApi1WalletTxnsMutationOptions<TError, TOnMutateResult>(
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

export function getApi1WalletTxnsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['wallet_txns'][':id']['$get']>>,
) {
  return ['api', '/api/1/wallet_txns/:id', toValue(args)] as const
}

export function getApi1WalletTxnsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['wallet_txns'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1WalletTxnsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].wallet_txns[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1WalletTxnsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['wallet_txns'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['wallet_txns'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['wallet_txns'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['wallet_txns'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1WalletTxnsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['wallet_txns'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1WalletTxnsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1WalletTxnsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].wallet_txns[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApi1WalletTxnsIdMutationKey() {
  return ['api', '/api/1/wallet_txns/:id', 'DELETE'] as const
}

export function getDeleteApi1WalletTxnsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['1']['wallet_txns'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['1']['wallet_txns'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApi1WalletTxnsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['wallet_txns'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['1'].wallet_txns[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApi1WalletTxnsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['1']['wallet_txns'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['1']['wallet_txns'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteApi1WalletTxnsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostApi1WalletTxnsIdReconcileMutationKey() {
  return ['api', '/api/1/wallet_txns/:id/reconcile', 'POST'] as const
}

export function getPostApi1WalletTxnsIdReconcileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['wallet_txns'][':id']['reconcile']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['wallet_txns'][':id']['reconcile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1WalletTxnsIdReconcileMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['wallet_txns'][':id']['reconcile']['$post']>,
    ) {
      return parseResponse(client.api['1'].wallet_txns[':id'].reconcile.$post(args, options))
    },
  })
}

export function usePostApi1WalletTxnsIdReconcile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['1']['wallet_txns'][':id']['reconcile']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['wallet_txns'][':id']['reconcile']['$post']>,
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
  const mutationDefaults = getPostApi1WalletTxnsIdReconcileMutationOptions<TError, TOnMutateResult>(
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

export function getPostApi1WalletTxnsIdCreateDealMutationKey() {
  return ['api', '/api/1/wallet_txns/:id/create_deal', 'POST'] as const
}

export function getPostApi1WalletTxnsIdCreateDealMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['1']['wallet_txns'][':id']['create_deal']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['wallet_txns'][':id']['create_deal']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1WalletTxnsIdCreateDealMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['1']['wallet_txns'][':id']['create_deal']['$post']
      >,
    ) {
      return parseResponse(client.api['1'].wallet_txns[':id'].create_deal.$post(args, options))
    },
  })
}

export function usePostApi1WalletTxnsIdCreateDeal<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['1']['wallet_txns'][':id']['create_deal']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['wallet_txns'][':id']['create_deal']['$post']>,
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
  const mutationDefaults = getPostApi1WalletTxnsIdCreateDealMutationOptions<
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

export function getPostApi1WalletTxnsIdCreateTransferMutationKey() {
  return ['api', '/api/1/wallet_txns/:id/create_transfer', 'POST'] as const
}

export function getPostApi1WalletTxnsIdCreateTransferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['1']['wallet_txns'][':id']['create_transfer']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['wallet_txns'][':id']['create_transfer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1WalletTxnsIdCreateTransferMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['1']['wallet_txns'][':id']['create_transfer']['$post']
      >,
    ) {
      return parseResponse(client.api['1'].wallet_txns[':id'].create_transfer.$post(args, options))
    },
  })
}

export function usePostApi1WalletTxnsIdCreateTransfer<
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
                    (typeof client.api)['1']['wallet_txns'][':id']['create_transfer']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api)['1']['wallet_txns'][':id']['create_transfer']['$post']
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
  const mutationDefaults = getPostApi1WalletTxnsIdCreateTransferMutationOptions<
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

export function getPostApi1WalletTxnsIdCreatePrivateDealMutationKey() {
  return ['api', '/api/1/wallet_txns/:id/create_private_deal', 'POST'] as const
}

export function getPostApi1WalletTxnsIdCreatePrivateDealMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)['1']['wallet_txns'][':id']['create_private_deal']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api)['1']['wallet_txns'][':id']['create_private_deal']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApi1WalletTxnsIdCreatePrivateDealMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['1']['wallet_txns'][':id']['create_private_deal']['$post']
      >,
    ) {
      return parseResponse(
        client.api['1'].wallet_txns[':id'].create_private_deal.$post(args, options),
      )
    },
  })
}

export function usePostApi1WalletTxnsIdCreatePrivateDeal<
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
                    (typeof client.api)['1']['wallet_txns'][':id']['create_private_deal']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api)['1']['wallet_txns'][':id']['create_private_deal']['$post']
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
  const mutationDefaults = getPostApi1WalletTxnsIdCreatePrivateDealMutationOptions<
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

export function getPostApi1WalletTxnsIdIgnoreMutationKey() {
  return ['api', '/api/1/wallet_txns/:id/ignore', 'POST'] as const
}

export function getPostApi1WalletTxnsIdIgnoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['wallet_txns'][':id']['ignore']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['wallet_txns'][':id']['ignore']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1WalletTxnsIdIgnoreMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['wallet_txns'][':id']['ignore']['$post']>,
    ) {
      return parseResponse(client.api['1'].wallet_txns[':id'].ignore.$post(args, options))
    },
  })
}

export function usePostApi1WalletTxnsIdIgnore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['1']['wallet_txns'][':id']['ignore']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['wallet_txns'][':id']['ignore']['$post']>,
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
  const mutationDefaults = getPostApi1WalletTxnsIdIgnoreMutationOptions<TError, TOnMutateResult>(
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

export function getPostApi1WalletTxnsIdResetMutationKey() {
  return ['api', '/api/1/wallet_txns/:id/reset', 'POST'] as const
}

export function getPostApi1WalletTxnsIdResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['wallet_txns'][':id']['reset']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['wallet_txns'][':id']['reset']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1WalletTxnsIdResetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['wallet_txns'][':id']['reset']['$post']>,
    ) {
      return parseResponse(client.api['1'].wallet_txns[':id'].reset.$post(args, options))
    },
  })
}

export function usePostApi1WalletTxnsIdReset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['1']['wallet_txns'][':id']['reset']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['wallet_txns'][':id']['reset']['$post']>,
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
  const mutationDefaults = getPostApi1WalletTxnsIdResetMutationOptions<TError, TOnMutateResult>(
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

export function getApi1JournalsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['journals']['$get']>>,
) {
  return ['api', '/api/1/journals', toValue(args)] as const
}

export function getApi1JournalsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['journals']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1JournalsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].journals.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1Journals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['journals']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['journals']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['journals']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['journals']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1JournalsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['journals']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1JournalsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1JournalsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].journals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi1JournalsReportsIdStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['journals']['reports'][':id']['status']['$get']>
  >,
) {
  return ['api', '/api/1/journals/reports/:id/status', toValue(args)] as const
}

export function getApi1JournalsReportsIdStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['journals']['reports'][':id']['status']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1JournalsReportsIdStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].journals.reports[':id'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1JournalsReportsIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api)['1']['journals']['reports'][':id']['status']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['journals']['reports'][':id']['status']['$get']>
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
                    (typeof client.api)['1']['journals']['reports'][':id']['status']['$get']
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
                    (typeof client.api)['1']['journals']['reports'][':id']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApi1JournalsReportsIdStatusQueryKey>
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
            ReturnType<(typeof client.api)['1']['journals']['reports'][':id']['status']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1JournalsReportsIdStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1JournalsReportsIdStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].journals.reports[':id'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi1JournalsReportsIdDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['journals']['reports'][':id']['download']['$get']>
  >,
) {
  return ['api', '/api/1/journals/reports/:id/download', toValue(args)] as const
}

export function getApi1JournalsReportsIdDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['journals']['reports'][':id']['download']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1JournalsReportsIdDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].journals.reports[':id'].download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1JournalsReportsIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api)['1']['journals']['reports'][':id']['download']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['journals']['reports'][':id']['download']['$get']>
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
                    (typeof client.api)['1']['journals']['reports'][':id']['download']['$get']
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
                    (typeof client.api)['1']['journals']['reports'][':id']['download']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApi1JournalsReportsIdDownloadQueryKey>
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
            ReturnType<(typeof client.api)['1']['journals']['reports'][':id']['download']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1JournalsReportsIdDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1JournalsReportsIdDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].journals.reports[':id'].download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi1JournalsSearchMutationKey() {
  return ['api', '/api/1/journals/search', 'POST'] as const
}

export function getPostApi1JournalsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['journals']['search']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['journals']['search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1JournalsSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['journals']['search']['$post']>,
    ) {
      return parseResponse(client.api['1'].journals.search.$post(args, options))
    },
  })
}

export function usePostApi1JournalsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['journals']['search']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['journals']['search']['$post']>,
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
  const mutationDefaults = getPostApi1JournalsSearchMutationOptions<TError, TOnMutateResult>(
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

export function getApi1ReportsTrialBsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['reports']['trial_bs']['$get']>>,
) {
  return ['api', '/api/1/reports/trial_bs', toValue(args)] as const
}

export function getApi1ReportsTrialBsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['reports']['trial_bs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1ReportsTrialBsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].reports.trial_bs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1ReportsTrialBs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_bs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['reports']['trial_bs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_bs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_bs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1ReportsTrialBsQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_bs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ReportsTrialBsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1ReportsTrialBsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].reports.trial_bs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi1ReportsTrialBsTwoYearsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['trial_bs_two_years']['$get']>
  >,
) {
  return ['api', '/api/1/reports/trial_bs_two_years', toValue(args)] as const
}

export function getApi1ReportsTrialBsTwoYearsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['trial_bs_two_years']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1ReportsTrialBsTwoYearsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].reports.trial_bs_two_years.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1ReportsTrialBsTwoYears<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_bs_two_years']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['trial_bs_two_years']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['1']['reports']['trial_bs_two_years']['$get']>
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
                  ReturnType<(typeof client.api)['1']['reports']['trial_bs_two_years']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApi1ReportsTrialBsTwoYearsQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_bs_two_years']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ReportsTrialBsTwoYearsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1ReportsTrialBsTwoYearsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].reports.trial_bs_two_years.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi1ReportsTrialBsThreeYearsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['trial_bs_three_years']['$get']>
  >,
) {
  return ['api', '/api/1/reports/trial_bs_three_years', toValue(args)] as const
}

export function getApi1ReportsTrialBsThreeYearsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['trial_bs_three_years']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1ReportsTrialBsThreeYearsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].reports.trial_bs_three_years.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1ReportsTrialBsThreeYears<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_bs_three_years']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['trial_bs_three_years']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['1']['reports']['trial_bs_three_years']['$get']>
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
                  ReturnType<(typeof client.api)['1']['reports']['trial_bs_three_years']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApi1ReportsTrialBsThreeYearsQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_bs_three_years']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ReportsTrialBsThreeYearsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1ReportsTrialBsThreeYearsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].reports.trial_bs_three_years.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi1ReportsTrialPlQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['reports']['trial_pl']['$get']>>,
) {
  return ['api', '/api/1/reports/trial_pl', toValue(args)] as const
}

export function getApi1ReportsTrialPlQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['reports']['trial_pl']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1ReportsTrialPlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].reports.trial_pl.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1ReportsTrialPl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_pl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['reports']['trial_pl']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_pl']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_pl']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1ReportsTrialPlQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_pl']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ReportsTrialPlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1ReportsTrialPlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].reports.trial_pl.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi1ReportsTrialPlTwoYearsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['trial_pl_two_years']['$get']>
  >,
) {
  return ['api', '/api/1/reports/trial_pl_two_years', toValue(args)] as const
}

export function getApi1ReportsTrialPlTwoYearsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['trial_pl_two_years']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1ReportsTrialPlTwoYearsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].reports.trial_pl_two_years.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1ReportsTrialPlTwoYears<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_pl_two_years']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['trial_pl_two_years']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['1']['reports']['trial_pl_two_years']['$get']>
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
                  ReturnType<(typeof client.api)['1']['reports']['trial_pl_two_years']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApi1ReportsTrialPlTwoYearsQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_pl_two_years']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ReportsTrialPlTwoYearsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1ReportsTrialPlTwoYearsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].reports.trial_pl_two_years.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi1ReportsTrialPlThreeYearsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['trial_pl_three_years']['$get']>
  >,
) {
  return ['api', '/api/1/reports/trial_pl_three_years', toValue(args)] as const
}

export function getApi1ReportsTrialPlThreeYearsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['trial_pl_three_years']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1ReportsTrialPlThreeYearsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].reports.trial_pl_three_years.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1ReportsTrialPlThreeYears<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_pl_three_years']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['trial_pl_three_years']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['1']['reports']['trial_pl_three_years']['$get']>
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
                  ReturnType<(typeof client.api)['1']['reports']['trial_pl_three_years']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApi1ReportsTrialPlThreeYearsQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_pl_three_years']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ReportsTrialPlThreeYearsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1ReportsTrialPlThreeYearsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].reports.trial_pl_three_years.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi1ReportsTrialPlSectionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['trial_pl_sections']['$get']>
  >,
) {
  return ['api', '/api/1/reports/trial_pl_sections', toValue(args)] as const
}

export function getApi1ReportsTrialPlSectionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['trial_pl_sections']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1ReportsTrialPlSectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].reports.trial_pl_sections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1ReportsTrialPlSections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_pl_sections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['trial_pl_sections']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['1']['reports']['trial_pl_sections']['$get']>
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
                  ReturnType<(typeof client.api)['1']['reports']['trial_pl_sections']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApi1ReportsTrialPlSectionsQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_pl_sections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ReportsTrialPlSectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1ReportsTrialPlSectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].reports.trial_pl_sections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi1ReportsTrialPlSegment1TagsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['trial_pl_segment_1_tags']['$get']>
  >,
) {
  return ['api', '/api/1/reports/trial_pl_segment_1_tags', toValue(args)] as const
}

export function getApi1ReportsTrialPlSegment1TagsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['trial_pl_segment_1_tags']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1ReportsTrialPlSegment1TagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].reports.trial_pl_segment_1_tags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1ReportsTrialPlSegment1Tags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_pl_segment_1_tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['trial_pl_segment_1_tags']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['1']['reports']['trial_pl_segment_1_tags']['$get']>
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
                  ReturnType<(typeof client.api)['1']['reports']['trial_pl_segment_1_tags']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApi1ReportsTrialPlSegment1TagsQueryKey>
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
            ReturnType<(typeof client.api)['1']['reports']['trial_pl_segment_1_tags']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ReportsTrialPlSegment1TagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1ReportsTrialPlSegment1TagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].reports.trial_pl_segment_1_tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi1ReportsTrialPlSegment2TagsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['trial_pl_segment_2_tags']['$get']>
  >,
) {
  return ['api', '/api/1/reports/trial_pl_segment_2_tags', toValue(args)] as const
}

export function getApi1ReportsTrialPlSegment2TagsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['trial_pl_segment_2_tags']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1ReportsTrialPlSegment2TagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].reports.trial_pl_segment_2_tags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1ReportsTrialPlSegment2Tags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_pl_segment_2_tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['trial_pl_segment_2_tags']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['1']['reports']['trial_pl_segment_2_tags']['$get']>
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
                  ReturnType<(typeof client.api)['1']['reports']['trial_pl_segment_2_tags']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApi1ReportsTrialPlSegment2TagsQueryKey>
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
            ReturnType<(typeof client.api)['1']['reports']['trial_pl_segment_2_tags']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ReportsTrialPlSegment2TagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1ReportsTrialPlSegment2TagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].reports.trial_pl_segment_2_tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi1ReportsTrialPlSegment3TagsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['trial_pl_segment_3_tags']['$get']>
  >,
) {
  return ['api', '/api/1/reports/trial_pl_segment_3_tags', toValue(args)] as const
}

export function getApi1ReportsTrialPlSegment3TagsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['trial_pl_segment_3_tags']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1ReportsTrialPlSegment3TagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].reports.trial_pl_segment_3_tags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1ReportsTrialPlSegment3Tags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_pl_segment_3_tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['trial_pl_segment_3_tags']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['1']['reports']['trial_pl_segment_3_tags']['$get']>
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
                  ReturnType<(typeof client.api)['1']['reports']['trial_pl_segment_3_tags']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApi1ReportsTrialPlSegment3TagsQueryKey>
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
            ReturnType<(typeof client.api)['1']['reports']['trial_pl_segment_3_tags']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ReportsTrialPlSegment3TagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1ReportsTrialPlSegment3TagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].reports.trial_pl_segment_3_tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi1ReportsTrialCrQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['reports']['trial_cr']['$get']>>,
) {
  return ['api', '/api/1/reports/trial_cr', toValue(args)] as const
}

export function getApi1ReportsTrialCrQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['reports']['trial_cr']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1ReportsTrialCrQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].reports.trial_cr.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1ReportsTrialCr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_cr']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['reports']['trial_cr']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_cr']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_cr']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1ReportsTrialCrQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_cr']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ReportsTrialCrQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1ReportsTrialCrQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].reports.trial_cr.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi1ReportsTrialCrTwoYearsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['trial_cr_two_years']['$get']>
  >,
) {
  return ['api', '/api/1/reports/trial_cr_two_years', toValue(args)] as const
}

export function getApi1ReportsTrialCrTwoYearsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['trial_cr_two_years']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1ReportsTrialCrTwoYearsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].reports.trial_cr_two_years.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1ReportsTrialCrTwoYears<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_cr_two_years']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['trial_cr_two_years']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['1']['reports']['trial_cr_two_years']['$get']>
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
                  ReturnType<(typeof client.api)['1']['reports']['trial_cr_two_years']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApi1ReportsTrialCrTwoYearsQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_cr_two_years']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ReportsTrialCrTwoYearsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1ReportsTrialCrTwoYearsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].reports.trial_cr_two_years.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi1ReportsTrialCrThreeYearsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['trial_cr_three_years']['$get']>
  >,
) {
  return ['api', '/api/1/reports/trial_cr_three_years', toValue(args)] as const
}

export function getApi1ReportsTrialCrThreeYearsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['trial_cr_three_years']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1ReportsTrialCrThreeYearsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].reports.trial_cr_three_years.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1ReportsTrialCrThreeYears<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_cr_three_years']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['trial_cr_three_years']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['1']['reports']['trial_cr_three_years']['$get']>
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
                  ReturnType<(typeof client.api)['1']['reports']['trial_cr_three_years']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApi1ReportsTrialCrThreeYearsQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_cr_three_years']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ReportsTrialCrThreeYearsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1ReportsTrialCrThreeYearsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].reports.trial_cr_three_years.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi1ReportsTrialCrSectionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['trial_cr_sections']['$get']>
  >,
) {
  return ['api', '/api/1/reports/trial_cr_sections', toValue(args)] as const
}

export function getApi1ReportsTrialCrSectionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['trial_cr_sections']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1ReportsTrialCrSectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].reports.trial_cr_sections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1ReportsTrialCrSections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_cr_sections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['trial_cr_sections']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['1']['reports']['trial_cr_sections']['$get']>
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
                  ReturnType<(typeof client.api)['1']['reports']['trial_cr_sections']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApi1ReportsTrialCrSectionsQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_cr_sections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ReportsTrialCrSectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1ReportsTrialCrSectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].reports.trial_cr_sections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi1ReportsTrialCrSegment1TagsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['trial_cr_segment_1_tags']['$get']>
  >,
) {
  return ['api', '/api/1/reports/trial_cr_segment_1_tags', toValue(args)] as const
}

export function getApi1ReportsTrialCrSegment1TagsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['trial_cr_segment_1_tags']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1ReportsTrialCrSegment1TagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].reports.trial_cr_segment_1_tags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1ReportsTrialCrSegment1Tags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_cr_segment_1_tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['trial_cr_segment_1_tags']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['1']['reports']['trial_cr_segment_1_tags']['$get']>
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
                  ReturnType<(typeof client.api)['1']['reports']['trial_cr_segment_1_tags']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApi1ReportsTrialCrSegment1TagsQueryKey>
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
            ReturnType<(typeof client.api)['1']['reports']['trial_cr_segment_1_tags']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ReportsTrialCrSegment1TagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1ReportsTrialCrSegment1TagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].reports.trial_cr_segment_1_tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi1ReportsTrialCrSegment2TagsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['trial_cr_segment_2_tags']['$get']>
  >,
) {
  return ['api', '/api/1/reports/trial_cr_segment_2_tags', toValue(args)] as const
}

export function getApi1ReportsTrialCrSegment2TagsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['trial_cr_segment_2_tags']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1ReportsTrialCrSegment2TagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].reports.trial_cr_segment_2_tags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1ReportsTrialCrSegment2Tags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_cr_segment_2_tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['trial_cr_segment_2_tags']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['1']['reports']['trial_cr_segment_2_tags']['$get']>
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
                  ReturnType<(typeof client.api)['1']['reports']['trial_cr_segment_2_tags']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApi1ReportsTrialCrSegment2TagsQueryKey>
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
            ReturnType<(typeof client.api)['1']['reports']['trial_cr_segment_2_tags']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ReportsTrialCrSegment2TagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1ReportsTrialCrSegment2TagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].reports.trial_cr_segment_2_tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi1ReportsTrialCrSegment3TagsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['trial_cr_segment_3_tags']['$get']>
  >,
) {
  return ['api', '/api/1/reports/trial_cr_segment_3_tags', toValue(args)] as const
}

export function getApi1ReportsTrialCrSegment3TagsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['trial_cr_segment_3_tags']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1ReportsTrialCrSegment3TagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].reports.trial_cr_segment_3_tags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1ReportsTrialCrSegment3Tags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_cr_segment_3_tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['trial_cr_segment_3_tags']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['1']['reports']['trial_cr_segment_3_tags']['$get']>
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
                  ReturnType<(typeof client.api)['1']['reports']['trial_cr_segment_3_tags']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApi1ReportsTrialCrSegment3TagsQueryKey>
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
            ReturnType<(typeof client.api)['1']['reports']['trial_cr_segment_3_tags']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ReportsTrialCrSegment3TagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1ReportsTrialCrSegment3TagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].reports.trial_cr_segment_3_tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi1ReportsGeneralLedgersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['general_ledgers']['$get']>
  >,
) {
  return ['api', '/api/1/reports/general_ledgers', toValue(args)] as const
}

export function getApi1ReportsGeneralLedgersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['general_ledgers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1ReportsGeneralLedgersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].reports.general_ledgers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1ReportsGeneralLedgers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['general_ledgers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['reports']['general_ledgers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['reports']['general_ledgers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['reports']['general_ledgers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1ReportsGeneralLedgersQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['reports']['general_ledgers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ReportsGeneralLedgersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1ReportsGeneralLedgersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].reports.general_ledgers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi1ReceiptsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['receipts']['$get']>>,
) {
  return ['api', '/api/1/receipts', toValue(args)] as const
}

export function getApi1ReceiptsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['receipts']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1ReceiptsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].receipts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1Receipts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['receipts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['receipts']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['receipts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['receipts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1ReceiptsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['receipts']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ReceiptsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1ReceiptsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].receipts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi1ReceiptsMutationKey() {
  return ['api', '/api/1/receipts', 'POST'] as const
}

export function getPostApi1ReceiptsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['receipts']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['receipts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1ReceiptsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['receipts']['$post']>) {
      return parseResponse(client.api['1'].receipts.$post(args, options))
    },
  })
}

export function usePostApi1Receipts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['receipts']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['receipts']['$post']>,
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
  const mutationDefaults = getPostApi1ReceiptsMutationOptions<TError, TOnMutateResult>(
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

export function getApi1ReceiptsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['receipts'][':id']['$get']>>,
) {
  return ['api', '/api/1/receipts/:id', toValue(args)] as const
}

export function getApi1ReceiptsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['receipts'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1ReceiptsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].receipts[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1ReceiptsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['receipts'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['receipts'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['receipts'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['receipts'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1ReceiptsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['receipts'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ReceiptsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1ReceiptsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].receipts[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApi1ReceiptsIdMutationKey() {
  return ['api', '/api/1/receipts/:id', 'PUT'] as const
}

export function getPutApi1ReceiptsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['receipts'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['receipts'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1ReceiptsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['receipts'][':id']['$put']>) {
      return parseResponse(client.api['1'].receipts[':id'].$put(args, options))
    },
  })
}

export function usePutApi1ReceiptsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['receipts'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['receipts'][':id']['$put']>,
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
  const mutationDefaults = getPutApi1ReceiptsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApi1ReceiptsIdMutationKey() {
  return ['api', '/api/1/receipts/:id', 'DELETE'] as const
}

export function getDeleteApi1ReceiptsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['1']['receipts'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['1']['receipts'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApi1ReceiptsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['receipts'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['1'].receipts[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApi1ReceiptsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['1']['receipts'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['1']['receipts'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteApi1ReceiptsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApi1ReceiptsIdDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['receipts'][':id']['download']['$get']>
  >,
) {
  return ['api', '/api/1/receipts/:id/download', toValue(args)] as const
}

export function getApi1ReceiptsIdDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['receipts'][':id']['download']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1ReceiptsIdDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].receipts[':id'].download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1ReceiptsIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['receipts'][':id']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['receipts'][':id']['download']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['receipts'][':id']['download']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['receipts'][':id']['download']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1ReceiptsIdDownloadQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['receipts'][':id']['download']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ReceiptsIdDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1ReceiptsIdDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].receipts[':id'].download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi1ExpenseApplicationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['expense_applications']['$get']>
  >,
) {
  return ['api', '/api/1/expense_applications', toValue(args)] as const
}

export function getApi1ExpenseApplicationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['expense_applications']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1ExpenseApplicationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].expense_applications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1ExpenseApplications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['expense_applications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['expense_applications']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['expense_applications']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['expense_applications']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1ExpenseApplicationsQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['expense_applications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ExpenseApplicationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1ExpenseApplicationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].expense_applications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi1ExpenseApplicationsMutationKey() {
  return ['api', '/api/1/expense_applications', 'POST'] as const
}

export function getPostApi1ExpenseApplicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['expense_applications']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['expense_applications']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1ExpenseApplicationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['expense_applications']['$post']>,
    ) {
      return parseResponse(client.api['1'].expense_applications.$post(args, options))
    },
  })
}

export function usePostApi1ExpenseApplications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['expense_applications']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['expense_applications']['$post']>,
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
  const mutationDefaults = getPostApi1ExpenseApplicationsMutationOptions<TError, TOnMutateResult>(
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

export function getApi1ExpenseApplicationsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['expense_applications'][':id']['$get']>
  >,
) {
  return ['api', '/api/1/expense_applications/:id', toValue(args)] as const
}

export function getApi1ExpenseApplicationsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['expense_applications'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1ExpenseApplicationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].expense_applications[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1ExpenseApplicationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['expense_applications'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['expense_applications'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['expense_applications'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['expense_applications'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1ExpenseApplicationsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['expense_applications'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ExpenseApplicationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1ExpenseApplicationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].expense_applications[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApi1ExpenseApplicationsIdMutationKey() {
  return ['api', '/api/1/expense_applications/:id', 'PUT'] as const
}

export function getPutApi1ExpenseApplicationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['expense_applications'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['expense_applications'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1ExpenseApplicationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['expense_applications'][':id']['$put']>,
    ) {
      return parseResponse(client.api['1'].expense_applications[':id'].$put(args, options))
    },
  })
}

export function usePutApi1ExpenseApplicationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['expense_applications'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['expense_applications'][':id']['$put']>,
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
  const mutationDefaults = getPutApi1ExpenseApplicationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApi1ExpenseApplicationsIdMutationKey() {
  return ['api', '/api/1/expense_applications/:id', 'DELETE'] as const
}

export function getDeleteApi1ExpenseApplicationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['1']['expense_applications'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['1']['expense_applications'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApi1ExpenseApplicationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['expense_applications'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['1'].expense_applications[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApi1ExpenseApplicationsId<
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
                  Awaited<
                    ReturnType<(typeof client.api)['1']['expense_applications'][':id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['1']['expense_applications'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteApi1ExpenseApplicationsIdMutationOptions<
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

export function getPostApi1ExpenseApplicationsIdActionsMutationKey() {
  return ['api', '/api/1/expense_applications/:id/actions', 'POST'] as const
}

export function getPostApi1ExpenseApplicationsIdActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['1']['expense_applications'][':id']['actions']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['expense_applications'][':id']['actions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1ExpenseApplicationsIdActionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['1']['expense_applications'][':id']['actions']['$post']
      >,
    ) {
      return parseResponse(client.api['1'].expense_applications[':id'].actions.$post(args, options))
    },
  })
}

export function usePostApi1ExpenseApplicationsIdActions<
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
                    (typeof client.api)['1']['expense_applications'][':id']['actions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api)['1']['expense_applications'][':id']['actions']['$post']
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
  const mutationDefaults = getPostApi1ExpenseApplicationsIdActionsMutationOptions<
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

export function getPutApi1ExpenseApplicationsIdParentApprovableRequestsMutationKey() {
  return ['api', '/api/1/expense_applications/:id/parent_approvable_requests', 'PUT'] as const
}

export function getPutApi1ExpenseApplicationsIdParentApprovableRequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)['1']['expense_applications'][':id']['parent_approvable_requests']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api)['1']['expense_applications'][':id']['parent_approvable_requests']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApi1ExpenseApplicationsIdParentApprovableRequestsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['1']['expense_applications'][':id']['parent_approvable_requests']['$put']
      >,
    ) {
      return parseResponse(
        client.api['1'].expense_applications[':id'].parent_approvable_requests.$put(args, options),
      )
    },
  })
}

export function usePutApi1ExpenseApplicationsIdParentApprovableRequests<
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
                    (typeof client.api)['1']['expense_applications'][':id']['parent_approvable_requests']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api)['1']['expense_applications'][':id']['parent_approvable_requests']['$put']
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
  const mutationDefaults = getPutApi1ExpenseApplicationsIdParentApprovableRequestsMutationOptions<
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

export function getApi1ExpenseApplicationsCurrenciesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['expense_applications']['currencies']['$get']>
  >,
) {
  return ['api', '/api/1/expense_applications/currencies', toValue(args)] as const
}

export function getApi1ExpenseApplicationsCurrenciesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['expense_applications']['currencies']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1ExpenseApplicationsCurrenciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].expense_applications.currencies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1ExpenseApplicationsCurrencies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['expense_applications']['currencies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['expense_applications']['currencies']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['1']['expense_applications']['currencies']['$get']>
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
                  ReturnType<(typeof client.api)['1']['expense_applications']['currencies']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApi1ExpenseApplicationsCurrenciesQueryKey>
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
            ReturnType<(typeof client.api)['1']['expense_applications']['currencies']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ExpenseApplicationsCurrenciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1ExpenseApplicationsCurrenciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].expense_applications.currencies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi1ExpenseApplicationsCurrenciesMutationKey() {
  return ['api', '/api/1/expense_applications/currencies', 'POST'] as const
}

export function getPostApi1ExpenseApplicationsCurrenciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['1']['expense_applications']['currencies']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['expense_applications']['currencies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1ExpenseApplicationsCurrenciesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['1']['expense_applications']['currencies']['$post']
      >,
    ) {
      return parseResponse(client.api['1'].expense_applications.currencies.$post(args, options))
    },
  })
}

export function usePostApi1ExpenseApplicationsCurrencies<
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
                    (typeof client.api)['1']['expense_applications']['currencies']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['expense_applications']['currencies']['$post']>,
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
  const mutationDefaults = getPostApi1ExpenseApplicationsCurrenciesMutationOptions<
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

export function getApi1ExpenseApplicationsCurrenciesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['expense_applications']['currencies'][':id']['$get']>
  >,
) {
  return ['api', '/api/1/expense_applications/currencies/:id', toValue(args)] as const
}

export function getApi1ExpenseApplicationsCurrenciesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['expense_applications']['currencies'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1ExpenseApplicationsCurrenciesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].expense_applications.currencies[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1ExpenseApplicationsCurrenciesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api)['1']['expense_applications']['currencies'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['expense_applications']['currencies'][':id']['$get']>
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
                    (typeof client.api)['1']['expense_applications']['currencies'][':id']['$get']
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
                    (typeof client.api)['1']['expense_applications']['currencies'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApi1ExpenseApplicationsCurrenciesIdQueryKey>
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
            ReturnType<
              (typeof client.api)['1']['expense_applications']['currencies'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ExpenseApplicationsCurrenciesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1ExpenseApplicationsCurrenciesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].expense_applications.currencies[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApi1ExpenseApplicationsCurrenciesIdMutationKey() {
  return ['api', '/api/1/expense_applications/currencies/:id', 'PUT'] as const
}

export function getPutApi1ExpenseApplicationsCurrenciesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)['1']['expense_applications']['currencies'][':id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['expense_applications']['currencies'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1ExpenseApplicationsCurrenciesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['1']['expense_applications']['currencies'][':id']['$put']
      >,
    ) {
      return parseResponse(
        client.api['1'].expense_applications.currencies[':id'].$put(args, options),
      )
    },
  })
}

export function usePutApi1ExpenseApplicationsCurrenciesId<
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
                    (typeof client.api)['1']['expense_applications']['currencies'][':id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api)['1']['expense_applications']['currencies'][':id']['$put']
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
  const mutationDefaults = getPutApi1ExpenseApplicationsCurrenciesIdMutationOptions<
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

export function getDeleteApi1ExpenseApplicationsCurrenciesIdMutationKey() {
  return ['api', '/api/1/expense_applications/currencies/:id', 'DELETE'] as const
}

export function getDeleteApi1ExpenseApplicationsCurrenciesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)['1']['expense_applications']['currencies'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api)['1']['expense_applications']['currencies'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApi1ExpenseApplicationsCurrenciesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['1']['expense_applications']['currencies'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api['1'].expense_applications.currencies[':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApi1ExpenseApplicationsCurrenciesId<
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
                  Awaited<
                    ReturnType<
                      (typeof client.api)['1']['expense_applications']['currencies'][':id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api)['1']['expense_applications']['currencies'][':id']['$delete']
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
  const mutationDefaults = getDeleteApi1ExpenseApplicationsCurrenciesIdMutationOptions<
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

export function getApi1ExpenseApplicationsFormQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['expense_applications']['form']['$get']>
  >,
) {
  return ['api', '/api/1/expense_applications/form', toValue(args)] as const
}

export function getApi1ExpenseApplicationsFormQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['expense_applications']['form']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1ExpenseApplicationsFormQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].expense_applications.form.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1ExpenseApplicationsForm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['expense_applications']['form']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['expense_applications']['form']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['1']['expense_applications']['form']['$get']>
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
                  ReturnType<(typeof client.api)['1']['expense_applications']['form']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApi1ExpenseApplicationsFormQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['expense_applications']['form']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ExpenseApplicationsFormQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1ExpenseApplicationsFormQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].expense_applications.form.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApi1ExpenseApplicationsFormMutationKey() {
  return ['api', '/api/1/expense_applications/form', 'PUT'] as const
}

export function getPutApi1ExpenseApplicationsFormMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['expense_applications']['form']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['expense_applications']['form']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1ExpenseApplicationsFormMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['expense_applications']['form']['$put']>,
    ) {
      return parseResponse(client.api['1'].expense_applications.form.$put(args, options))
    },
  })
}

export function usePutApi1ExpenseApplicationsForm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['1']['expense_applications']['form']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['expense_applications']['form']['$put']>,
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
  const mutationDefaults = getPutApi1ExpenseApplicationsFormMutationOptions<
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

export function getPostApi1ExpenseApplicationsAmountCalculationsMutationKey() {
  return ['api', '/api/1/expense_applications/amount_calculations', 'POST'] as const
}

export function getPostApi1ExpenseApplicationsAmountCalculationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)['1']['expense_applications']['amount_calculations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api)['1']['expense_applications']['amount_calculations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApi1ExpenseApplicationsAmountCalculationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['1']['expense_applications']['amount_calculations']['$post']
      >,
    ) {
      return parseResponse(
        client.api['1'].expense_applications.amount_calculations.$post(args, options),
      )
    },
  })
}

export function usePostApi1ExpenseApplicationsAmountCalculations<
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
                    (typeof client.api)['1']['expense_applications']['amount_calculations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api)['1']['expense_applications']['amount_calculations']['$post']
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
  const mutationDefaults = getPostApi1ExpenseApplicationsAmountCalculationsMutationOptions<
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

export function getApi1ExpenseApplicationLineTemplatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['expense_application_line_templates']['$get']>
  >,
) {
  return ['api', '/api/1/expense_application_line_templates', toValue(args)] as const
}

export function getApi1ExpenseApplicationLineTemplatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['expense_application_line_templates']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1ExpenseApplicationLineTemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].expense_application_line_templates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1ExpenseApplicationLineTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['expense_application_line_templates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['expense_application_line_templates']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['1']['expense_application_line_templates']['$get']>
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
                  ReturnType<(typeof client.api)['1']['expense_application_line_templates']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApi1ExpenseApplicationLineTemplatesQueryKey>
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
            ReturnType<(typeof client.api)['1']['expense_application_line_templates']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ExpenseApplicationLineTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1ExpenseApplicationLineTemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].expense_application_line_templates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi1ExpenseApplicationLineTemplatesMutationKey() {
  return ['api', '/api/1/expense_application_line_templates', 'POST'] as const
}

export function getPostApi1ExpenseApplicationLineTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['1']['expense_application_line_templates']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['expense_application_line_templates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1ExpenseApplicationLineTemplatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['1']['expense_application_line_templates']['$post']
      >,
    ) {
      return parseResponse(client.api['1'].expense_application_line_templates.$post(args, options))
    },
  })
}

export function usePostApi1ExpenseApplicationLineTemplates<
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
                    (typeof client.api)['1']['expense_application_line_templates']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['expense_application_line_templates']['$post']>,
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
  const mutationDefaults = getPostApi1ExpenseApplicationLineTemplatesMutationOptions<
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

export function getApi1ExpenseApplicationLineTemplatesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['expense_application_line_templates'][':id']['$get']>
  >,
) {
  return ['api', '/api/1/expense_application_line_templates/:id', toValue(args)] as const
}

export function getApi1ExpenseApplicationLineTemplatesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['expense_application_line_templates'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1ExpenseApplicationLineTemplatesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].expense_application_line_templates[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1ExpenseApplicationLineTemplatesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api)['1']['expense_application_line_templates'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['expense_application_line_templates'][':id']['$get']>
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
                    (typeof client.api)['1']['expense_application_line_templates'][':id']['$get']
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
                    (typeof client.api)['1']['expense_application_line_templates'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApi1ExpenseApplicationLineTemplatesIdQueryKey>
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
            ReturnType<
              (typeof client.api)['1']['expense_application_line_templates'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ExpenseApplicationLineTemplatesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1ExpenseApplicationLineTemplatesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].expense_application_line_templates[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApi1ExpenseApplicationLineTemplatesIdMutationKey() {
  return ['api', '/api/1/expense_application_line_templates/:id', 'PUT'] as const
}

export function getPutApi1ExpenseApplicationLineTemplatesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)['1']['expense_application_line_templates'][':id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['expense_application_line_templates'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1ExpenseApplicationLineTemplatesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['1']['expense_application_line_templates'][':id']['$put']
      >,
    ) {
      return parseResponse(
        client.api['1'].expense_application_line_templates[':id'].$put(args, options),
      )
    },
  })
}

export function usePutApi1ExpenseApplicationLineTemplatesId<
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
                    (typeof client.api)['1']['expense_application_line_templates'][':id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api)['1']['expense_application_line_templates'][':id']['$put']
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
  const mutationDefaults = getPutApi1ExpenseApplicationLineTemplatesIdMutationOptions<
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

export function getDeleteApi1ExpenseApplicationLineTemplatesIdMutationKey() {
  return ['api', '/api/1/expense_application_line_templates/:id', 'DELETE'] as const
}

export function getDeleteApi1ExpenseApplicationLineTemplatesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)['1']['expense_application_line_templates'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api)['1']['expense_application_line_templates'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApi1ExpenseApplicationLineTemplatesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['1']['expense_application_line_templates'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api['1'].expense_application_line_templates[':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApi1ExpenseApplicationLineTemplatesId<
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
                  Awaited<
                    ReturnType<
                      (typeof client.api)['1']['expense_application_line_templates'][':id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api)['1']['expense_application_line_templates'][':id']['$delete']
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
  const mutationDefaults = getDeleteApi1ExpenseApplicationLineTemplatesIdMutationOptions<
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

export function getApi1PaymentRequestsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['payment_requests']['$get']>>,
) {
  return ['api', '/api/1/payment_requests', toValue(args)] as const
}

export function getApi1PaymentRequestsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['payment_requests']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1PaymentRequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].payment_requests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1PaymentRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['payment_requests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['payment_requests']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['payment_requests']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['payment_requests']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1PaymentRequestsQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['payment_requests']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1PaymentRequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1PaymentRequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].payment_requests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi1PaymentRequestsMutationKey() {
  return ['api', '/api/1/payment_requests', 'POST'] as const
}

export function getPostApi1PaymentRequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['payment_requests']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['payment_requests']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1PaymentRequestsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['payment_requests']['$post']>,
    ) {
      return parseResponse(client.api['1'].payment_requests.$post(args, options))
    },
  })
}

export function usePostApi1PaymentRequests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['payment_requests']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['payment_requests']['$post']>,
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
  const mutationDefaults = getPostApi1PaymentRequestsMutationOptions<TError, TOnMutateResult>(
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

export function getApi1PaymentRequestsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['payment_requests'][':id']['$get']>
  >,
) {
  return ['api', '/api/1/payment_requests/:id', toValue(args)] as const
}

export function getApi1PaymentRequestsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['payment_requests'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1PaymentRequestsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].payment_requests[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1PaymentRequestsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['payment_requests'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['payment_requests'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['payment_requests'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['payment_requests'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1PaymentRequestsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['payment_requests'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1PaymentRequestsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1PaymentRequestsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].payment_requests[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApi1PaymentRequestsIdMutationKey() {
  return ['api', '/api/1/payment_requests/:id', 'PUT'] as const
}

export function getPutApi1PaymentRequestsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['payment_requests'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['payment_requests'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1PaymentRequestsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['payment_requests'][':id']['$put']>,
    ) {
      return parseResponse(client.api['1'].payment_requests[':id'].$put(args, options))
    },
  })
}

export function usePutApi1PaymentRequestsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['payment_requests'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['payment_requests'][':id']['$put']>,
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
  const mutationDefaults = getPutApi1PaymentRequestsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApi1PaymentRequestsIdMutationKey() {
  return ['api', '/api/1/payment_requests/:id', 'DELETE'] as const
}

export function getDeleteApi1PaymentRequestsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['1']['payment_requests'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['1']['payment_requests'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApi1PaymentRequestsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['payment_requests'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['1'].payment_requests[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApi1PaymentRequestsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api)['1']['payment_requests'][':id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['1']['payment_requests'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteApi1PaymentRequestsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostApi1PaymentRequestsIdActionsMutationKey() {
  return ['api', '/api/1/payment_requests/:id/actions', 'POST'] as const
}

export function getPostApi1PaymentRequestsIdActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['1']['payment_requests'][':id']['actions']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['payment_requests'][':id']['actions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1PaymentRequestsIdActionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['1']['payment_requests'][':id']['actions']['$post']
      >,
    ) {
      return parseResponse(client.api['1'].payment_requests[':id'].actions.$post(args, options))
    },
  })
}

export function usePostApi1PaymentRequestsIdActions<
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
                    (typeof client.api)['1']['payment_requests'][':id']['actions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['payment_requests'][':id']['actions']['$post']>,
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
  const mutationDefaults = getPostApi1PaymentRequestsIdActionsMutationOptions<
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

export function getApi1ApprovalRequestsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['approval_requests']['$get']>>,
) {
  return ['api', '/api/1/approval_requests', toValue(args)] as const
}

export function getApi1ApprovalRequestsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['approval_requests']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1ApprovalRequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].approval_requests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1ApprovalRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['approval_requests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['approval_requests']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['approval_requests']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['approval_requests']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1ApprovalRequestsQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['approval_requests']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ApprovalRequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1ApprovalRequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].approval_requests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi1ApprovalRequestsMutationKey() {
  return ['api', '/api/1/approval_requests', 'POST'] as const
}

export function getPostApi1ApprovalRequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['approval_requests']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['approval_requests']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1ApprovalRequestsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['approval_requests']['$post']>,
    ) {
      return parseResponse(client.api['1'].approval_requests.$post(args, options))
    },
  })
}

export function usePostApi1ApprovalRequests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['approval_requests']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['approval_requests']['$post']>,
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
  const mutationDefaults = getPostApi1ApprovalRequestsMutationOptions<TError, TOnMutateResult>(
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

export function getApi1ApprovalRequestsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['approval_requests'][':id']['$get']>
  >,
) {
  return ['api', '/api/1/approval_requests/:id', toValue(args)] as const
}

export function getApi1ApprovalRequestsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['approval_requests'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1ApprovalRequestsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].approval_requests[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1ApprovalRequestsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['approval_requests'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['approval_requests'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['approval_requests'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['approval_requests'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1ApprovalRequestsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['approval_requests'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ApprovalRequestsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1ApprovalRequestsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].approval_requests[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApi1ApprovalRequestsIdMutationKey() {
  return ['api', '/api/1/approval_requests/:id', 'PUT'] as const
}

export function getPutApi1ApprovalRequestsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['approval_requests'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['approval_requests'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1ApprovalRequestsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['approval_requests'][':id']['$put']>,
    ) {
      return parseResponse(client.api['1'].approval_requests[':id'].$put(args, options))
    },
  })
}

export function usePutApi1ApprovalRequestsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['approval_requests'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['approval_requests'][':id']['$put']>,
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
  const mutationDefaults = getPutApi1ApprovalRequestsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApi1ApprovalRequestsIdMutationKey() {
  return ['api', '/api/1/approval_requests/:id', 'DELETE'] as const
}

export function getDeleteApi1ApprovalRequestsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['1']['approval_requests'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['1']['approval_requests'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApi1ApprovalRequestsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['approval_requests'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['1'].approval_requests[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApi1ApprovalRequestsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api)['1']['approval_requests'][':id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['1']['approval_requests'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteApi1ApprovalRequestsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostApi1ApprovalRequestsIdActionsMutationKey() {
  return ['api', '/api/1/approval_requests/:id/actions', 'POST'] as const
}

export function getPostApi1ApprovalRequestsIdActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['1']['approval_requests'][':id']['actions']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['approval_requests'][':id']['actions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1ApprovalRequestsIdActionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['1']['approval_requests'][':id']['actions']['$post']
      >,
    ) {
      return parseResponse(client.api['1'].approval_requests[':id'].actions.$post(args, options))
    },
  })
}

export function usePostApi1ApprovalRequestsIdActions<
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
                    (typeof client.api)['1']['approval_requests'][':id']['actions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api)['1']['approval_requests'][':id']['actions']['$post']
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
  const mutationDefaults = getPostApi1ApprovalRequestsIdActionsMutationOptions<
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

export function getApi1ApprovalRequestsFormsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['approval_requests']['forms']['$get']>
  >,
) {
  return ['api', '/api/1/approval_requests/forms', toValue(args)] as const
}

export function getApi1ApprovalRequestsFormsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['approval_requests']['forms']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1ApprovalRequestsFormsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].approval_requests.forms.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1ApprovalRequestsForms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['approval_requests']['forms']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['approval_requests']['forms']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['approval_requests']['forms']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['approval_requests']['forms']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1ApprovalRequestsFormsQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['approval_requests']['forms']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ApprovalRequestsFormsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1ApprovalRequestsFormsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].approval_requests.forms.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi1ApprovalRequestsFormsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['approval_requests']['forms'][':id']['$get']>
  >,
) {
  return ['api', '/api/1/approval_requests/forms/:id', toValue(args)] as const
}

export function getApi1ApprovalRequestsFormsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['approval_requests']['forms'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1ApprovalRequestsFormsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].approval_requests.forms[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1ApprovalRequestsFormsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['approval_requests']['forms'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['approval_requests']['forms'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['1']['approval_requests']['forms'][':id']['$get']>
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
                  ReturnType<(typeof client.api)['1']['approval_requests']['forms'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApi1ApprovalRequestsFormsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['approval_requests']['forms'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ApprovalRequestsFormsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1ApprovalRequestsFormsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].approval_requests.forms[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi1PurchaseRequestsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['purchase_requests']['$get']>>,
) {
  return ['api', '/api/1/purchase_requests', toValue(args)] as const
}

export function getApi1PurchaseRequestsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['purchase_requests']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1PurchaseRequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].purchase_requests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1PurchaseRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['purchase_requests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['purchase_requests']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['purchase_requests']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['purchase_requests']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1PurchaseRequestsQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['purchase_requests']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1PurchaseRequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1PurchaseRequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].purchase_requests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi1PurchaseRequestsMutationKey() {
  return ['api', '/api/1/purchase_requests', 'POST'] as const
}

export function getPostApi1PurchaseRequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['purchase_requests']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['purchase_requests']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1PurchaseRequestsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['purchase_requests']['$post']>,
    ) {
      return parseResponse(client.api['1'].purchase_requests.$post(args, options))
    },
  })
}

export function usePostApi1PurchaseRequests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['purchase_requests']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['purchase_requests']['$post']>,
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
  const mutationDefaults = getPostApi1PurchaseRequestsMutationOptions<TError, TOnMutateResult>(
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

export function getApi1PurchaseRequestsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['purchase_requests'][':id']['$get']>
  >,
) {
  return ['api', '/api/1/purchase_requests/:id', toValue(args)] as const
}

export function getApi1PurchaseRequestsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['purchase_requests'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1PurchaseRequestsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].purchase_requests[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1PurchaseRequestsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['purchase_requests'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['purchase_requests'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['purchase_requests'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['purchase_requests'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1PurchaseRequestsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['purchase_requests'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1PurchaseRequestsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1PurchaseRequestsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].purchase_requests[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApi1PurchaseRequestsIdMutationKey() {
  return ['api', '/api/1/purchase_requests/:id', 'PUT'] as const
}

export function getPutApi1PurchaseRequestsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['purchase_requests'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['purchase_requests'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1PurchaseRequestsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['purchase_requests'][':id']['$put']>,
    ) {
      return parseResponse(client.api['1'].purchase_requests[':id'].$put(args, options))
    },
  })
}

export function usePutApi1PurchaseRequestsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['purchase_requests'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['purchase_requests'][':id']['$put']>,
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
  const mutationDefaults = getPutApi1PurchaseRequestsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApi1PurchaseRequestsIdMutationKey() {
  return ['api', '/api/1/purchase_requests/:id', 'DELETE'] as const
}

export function getDeleteApi1PurchaseRequestsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['1']['purchase_requests'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['1']['purchase_requests'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApi1PurchaseRequestsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['purchase_requests'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['1'].purchase_requests[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApi1PurchaseRequestsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api)['1']['purchase_requests'][':id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['1']['purchase_requests'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteApi1PurchaseRequestsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApi1PurchaseRequestsFormsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['purchase_requests']['forms']['$get']>
  >,
) {
  return ['api', '/api/1/purchase_requests/forms', toValue(args)] as const
}

export function getApi1PurchaseRequestsFormsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['purchase_requests']['forms']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1PurchaseRequestsFormsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].purchase_requests.forms.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1PurchaseRequestsForms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['purchase_requests']['forms']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['purchase_requests']['forms']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['purchase_requests']['forms']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['purchase_requests']['forms']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1PurchaseRequestsFormsQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['purchase_requests']['forms']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1PurchaseRequestsFormsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1PurchaseRequestsFormsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].purchase_requests.forms.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi1PurchaseRequestsFormsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['purchase_requests']['forms'][':id']['$get']>
  >,
) {
  return ['api', '/api/1/purchase_requests/forms/:id', toValue(args)] as const
}

export function getApi1PurchaseRequestsFormsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['purchase_requests']['forms'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1PurchaseRequestsFormsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].purchase_requests.forms[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1PurchaseRequestsFormsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['purchase_requests']['forms'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['purchase_requests']['forms'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['1']['purchase_requests']['forms'][':id']['$get']>
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
                  ReturnType<(typeof client.api)['1']['purchase_requests']['forms'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApi1PurchaseRequestsFormsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['purchase_requests']['forms'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1PurchaseRequestsFormsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1PurchaseRequestsFormsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].purchase_requests.forms[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi1PurchaseRequestsIdActionsMutationKey() {
  return ['api', '/api/1/purchase_requests/:id/actions', 'POST'] as const
}

export function getPostApi1PurchaseRequestsIdActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['1']['purchase_requests'][':id']['actions']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['purchase_requests'][':id']['actions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1PurchaseRequestsIdActionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['1']['purchase_requests'][':id']['actions']['$post']
      >,
    ) {
      return parseResponse(client.api['1'].purchase_requests[':id'].actions.$post(args, options))
    },
  })
}

export function usePostApi1PurchaseRequestsIdActions<
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
                    (typeof client.api)['1']['purchase_requests'][':id']['actions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api)['1']['purchase_requests'][':id']['actions']['$post']
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
  const mutationDefaults = getPostApi1PurchaseRequestsIdActionsMutationOptions<
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

export function getApi1PurchaseRequestsPurchaseRequestIdPurchaseBudgetQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)['1']['purchase_requests'][':purchase_request_id']['purchase_budget']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/1/purchase_requests/:purchase_request_id/purchase_budget',
    toValue(args),
  ] as const
}

export function getApi1PurchaseRequestsPurchaseRequestIdPurchaseBudgetQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)['1']['purchase_requests'][':purchase_request_id']['purchase_budget']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1PurchaseRequestsPurchaseRequestIdPurchaseBudgetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].purchase_requests[':purchase_request_id'].purchase_budget.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApi1PurchaseRequestsPurchaseRequestIdPurchaseBudget<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api)['1']['purchase_requests'][':purchase_request_id']['purchase_budget']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)['1']['purchase_requests'][':purchase_request_id']['purchase_budget']['$get']
    >
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
                    (typeof client.api)['1']['purchase_requests'][':purchase_request_id']['purchase_budget']['$get']
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
                    (typeof client.api)['1']['purchase_requests'][':purchase_request_id']['purchase_budget']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApi1PurchaseRequestsPurchaseRequestIdPurchaseBudgetQueryKey>
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
            ReturnType<
              (typeof client.api)['1']['purchase_requests'][':purchase_request_id']['purchase_budget']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1PurchaseRequestsPurchaseRequestIdPurchaseBudgetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApi1PurchaseRequestsPurchaseRequestIdPurchaseBudgetQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].purchase_requests[':purchase_request_id'].purchase_budget.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApi1ApprovalFlowRoutesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['approval_flow_routes']['$get']>
  >,
) {
  return ['api', '/api/1/approval_flow_routes', toValue(args)] as const
}

export function getApi1ApprovalFlowRoutesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['approval_flow_routes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1ApprovalFlowRoutesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].approval_flow_routes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1ApprovalFlowRoutes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['approval_flow_routes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['approval_flow_routes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['approval_flow_routes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['approval_flow_routes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1ApprovalFlowRoutesQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['approval_flow_routes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ApprovalFlowRoutesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1ApprovalFlowRoutesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].approval_flow_routes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi1ApprovalFlowRoutesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['approval_flow_routes'][':id']['$get']>
  >,
) {
  return ['api', '/api/1/approval_flow_routes/:id', toValue(args)] as const
}

export function getApi1ApprovalFlowRoutesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['approval_flow_routes'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1ApprovalFlowRoutesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].approval_flow_routes[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1ApprovalFlowRoutesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['approval_flow_routes'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['approval_flow_routes'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['approval_flow_routes'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['approval_flow_routes'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1ApprovalFlowRoutesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['approval_flow_routes'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ApprovalFlowRoutesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1ApprovalFlowRoutesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].approval_flow_routes[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi1SegmentsSegmentIdTagsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['segments'][':segment_id']['tags']['$get']>
  >,
) {
  return ['api', '/api/1/segments/:segment_id/tags', toValue(args)] as const
}

export function getApi1SegmentsSegmentIdTagsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['segments'][':segment_id']['tags']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1SegmentsSegmentIdTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].segments[':segment_id'].tags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1SegmentsSegmentIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['segments'][':segment_id']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['segments'][':segment_id']['tags']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['1']['segments'][':segment_id']['tags']['$get']>
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
                  ReturnType<(typeof client.api)['1']['segments'][':segment_id']['tags']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApi1SegmentsSegmentIdTagsQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['segments'][':segment_id']['tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1SegmentsSegmentIdTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1SegmentsSegmentIdTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].segments[':segment_id'].tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi1SegmentsSegmentIdTagsMutationKey() {
  return ['api', '/api/1/segments/:segment_id/tags', 'POST'] as const
}

export function getPostApi1SegmentsSegmentIdTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['segments'][':segment_id']['tags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['segments'][':segment_id']['tags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1SegmentsSegmentIdTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['segments'][':segment_id']['tags']['$post']>,
    ) {
      return parseResponse(client.api['1'].segments[':segment_id'].tags.$post(args, options))
    },
  })
}

export function usePostApi1SegmentsSegmentIdTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['1']['segments'][':segment_id']['tags']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['segments'][':segment_id']['tags']['$post']>,
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
  const mutationDefaults = getPostApi1SegmentsSegmentIdTagsMutationOptions<TError, TOnMutateResult>(
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

export function getPutApi1SegmentsSegmentIdTagsIdMutationKey() {
  return ['api', '/api/1/segments/:segment_id/tags/:id', 'PUT'] as const
}

export function getPutApi1SegmentsSegmentIdTagsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['1']['segments'][':segment_id']['tags'][':id']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['segments'][':segment_id']['tags'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1SegmentsSegmentIdTagsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['1']['segments'][':segment_id']['tags'][':id']['$put']
      >,
    ) {
      return parseResponse(client.api['1'].segments[':segment_id'].tags[':id'].$put(args, options))
    },
  })
}

export function usePutApi1SegmentsSegmentIdTagsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api)['1']['segments'][':segment_id']['tags'][':id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api)['1']['segments'][':segment_id']['tags'][':id']['$put']
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
  const mutationDefaults = getPutApi1SegmentsSegmentIdTagsIdMutationOptions<
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

export function getDeleteApi1SegmentsSegmentIdTagsIdMutationKey() {
  return ['api', '/api/1/segments/:segment_id/tags/:id', 'DELETE'] as const
}

export function getDeleteApi1SegmentsSegmentIdTagsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)['1']['segments'][':segment_id']['tags'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['1']['segments'][':segment_id']['tags'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApi1SegmentsSegmentIdTagsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['1']['segments'][':segment_id']['tags'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api['1'].segments[':segment_id'].tags[':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApi1SegmentsSegmentIdTagsId<
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
                  Awaited<
                    ReturnType<
                      (typeof client.api)['1']['segments'][':segment_id']['tags'][':id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api)['1']['segments'][':segment_id']['tags'][':id']['$delete']
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
  const mutationDefaults = getDeleteApi1SegmentsSegmentIdTagsIdMutationOptions<
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

export function getPutApi1SegmentsSegmentIdTagsCodeUpsertMutationKey() {
  return ['api', '/api/1/segments/:segment_id/tags/code/upsert', 'PUT'] as const
}

export function getPutApi1SegmentsSegmentIdTagsCodeUpsertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)['1']['segments'][':segment_id']['tags']['code']['upsert']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api)['1']['segments'][':segment_id']['tags']['code']['upsert']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApi1SegmentsSegmentIdTagsCodeUpsertMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['1']['segments'][':segment_id']['tags']['code']['upsert']['$put']
      >,
    ) {
      return parseResponse(
        client.api['1'].segments[':segment_id'].tags.code.upsert.$put(args, options),
      )
    },
  })
}

export function usePutApi1SegmentsSegmentIdTagsCodeUpsert<
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
                    (typeof client.api)['1']['segments'][':segment_id']['tags']['code']['upsert']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api)['1']['segments'][':segment_id']['tags']['code']['upsert']['$put']
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
  const mutationDefaults = getPutApi1SegmentsSegmentIdTagsCodeUpsertMutationOptions<
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

export function getApi1FixedAssetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['fixed_assets']['$get']>>,
) {
  return ['api', '/api/1/fixed_assets', toValue(args)] as const
}

export function getApi1FixedAssetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['fixed_assets']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1FixedAssetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].fixed_assets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1FixedAssets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['fixed_assets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['fixed_assets']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['fixed_assets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['fixed_assets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1FixedAssetsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['fixed_assets']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1FixedAssetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1FixedAssetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].fixed_assets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi1AccountGroupsMutationKey() {
  return ['api', '/api/1/account_groups', 'POST'] as const
}

export function getPostApi1AccountGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['account_groups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['account_groups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1AccountGroupsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['account_groups']['$post']>) {
      return parseResponse(client.api['1'].account_groups.$post(args, options))
    },
  })
}

export function usePostApi1AccountGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['account_groups']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['account_groups']['$post']>,
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
  const mutationDefaults = getPostApi1AccountGroupsMutationOptions<TError, TOnMutateResult>(
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

export function getApi1UserMatchersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['user_matchers']['$get']>>,
) {
  return ['api', '/api/1/user_matchers', toValue(args)] as const
}

export function getApi1UserMatchersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['user_matchers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1UserMatchersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].user_matchers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1UserMatchers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['user_matchers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['1']['user_matchers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['user_matchers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['user_matchers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1UserMatchersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['user_matchers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1UserMatchersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1UserMatchersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].user_matchers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi1UserMatchersMutationKey() {
  return ['api', '/api/1/user_matchers', 'POST'] as const
}

export function getPostApi1UserMatchersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['user_matchers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['user_matchers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1UserMatchersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['user_matchers']['$post']>) {
      return parseResponse(client.api['1'].user_matchers.$post(args, options))
    },
  })
}

export function usePostApi1UserMatchers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['user_matchers']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['user_matchers']['$post']>,
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
  const mutationDefaults = getPostApi1UserMatchersMutationOptions<TError, TOnMutateResult>(
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

export function getApi1UserMatchersIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['user_matchers'][':id']['$get']>
  >,
) {
  return ['api', '/api/1/user_matchers/:id', toValue(args)] as const
}

export function getApi1UserMatchersIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['user_matchers'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi1UserMatchersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['1'].user_matchers[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi1UserMatchersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['user_matchers'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['1']['user_matchers'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['user_matchers'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['user_matchers'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi1UserMatchersIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['1']['user_matchers'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1UserMatchersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi1UserMatchersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['1'].user_matchers[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApi1UserMatchersIdMutationKey() {
  return ['api', '/api/1/user_matchers/:id', 'PUT'] as const
}

export function getPutApi1UserMatchersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['user_matchers'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['user_matchers'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1UserMatchersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['user_matchers'][':id']['$put']>,
    ) {
      return parseResponse(client.api['1'].user_matchers[':id'].$put(args, options))
    },
  })
}

export function usePutApi1UserMatchersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['user_matchers'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['user_matchers'][':id']['$put']>,
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
  const mutationDefaults = getPutApi1UserMatchersIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApi1UserMatchersIdMutationKey() {
  return ['api', '/api/1/user_matchers/:id', 'DELETE'] as const
}

export function getDeleteApi1UserMatchersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['1']['user_matchers'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['1']['user_matchers'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApi1UserMatchersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['user_matchers'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['1'].user_matchers[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApi1UserMatchersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api)['1']['user_matchers'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api)['1']['user_matchers'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteApi1UserMatchersIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostApi1UserMatchersApplyMutationKey() {
  return ['api', '/api/1/user_matchers/apply', 'POST'] as const
}

export function getPostApi1UserMatchersApplyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['user_matchers']['apply']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['user_matchers']['apply']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1UserMatchersApplyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['user_matchers']['apply']['$post']>,
    ) {
      return parseResponse(client.api['1'].user_matchers.apply.$post(args, options))
    },
  })
}

export function usePostApi1UserMatchersApply<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['user_matchers']['apply']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['1']['user_matchers']['apply']['$post']>,
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
  const mutationDefaults = getPostApi1UserMatchersApplyMutationOptions<TError, TOnMutateResult>(
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
