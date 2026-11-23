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

export function getCrmKey() {
  return ['crm'] as const
}

export function getCrmImports202609QueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.imports)['2026-09']['$get']>>,
) {
  return ['crm', '/crm/imports/2026-09', toValue(args)] as const
}

export function getCrmImports202609QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.imports)['2026-09']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmImports202609QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.imports['2026-09'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrmImports202609<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.crm.imports)['2026-09']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.imports)['2026-09']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm.imports)['2026-09']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm.imports)['2026-09']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCrmImports202609QueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.crm.imports)['2026-09']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmImports202609QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrmImports202609QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.imports['2026-09'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCrmImports202609MutationKey() {
  return ['crm', '/crm/imports/2026-09', 'POST'] as const
}

export function getPostCrmImports202609MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.crm.imports)['2026-09']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.imports)['2026-09']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmImports202609MutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.crm.imports)['2026-09']['$post']>) {
      return parseResponse(client.crm.imports['2026-09'].$post(args, options))
    },
  })
}

export function usePostCrmImports202609<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm.imports)['2026-09']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.crm.imports)['2026-09']['$post']>,
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
  const mutationDefaults = getPostCrmImports202609MutationOptions<TError, TOnMutateResult>(
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

export function getCrmImports202609ImportIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.crm.imports)['2026-09'][':importId']['$get']>
  >,
) {
  return ['crm', '/crm/imports/2026-09/:importId', toValue(args)] as const
}

export function getCrmImports202609ImportIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.crm.imports)['2026-09'][':importId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmImports202609ImportIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.imports['2026-09'][':importId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrmImports202609ImportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.imports)['2026-09'][':importId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.crm.imports)['2026-09'][':importId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm.imports)['2026-09'][':importId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm.imports)['2026-09'][':importId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCrmImports202609ImportIdQueryKey>
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
          Awaited<ReturnType<(typeof client.crm.imports)['2026-09'][':importId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmImports202609ImportIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrmImports202609ImportIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.imports['2026-09'][':importId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCrmImports202609ImportIdCancelMutationKey() {
  return ['crm', '/crm/imports/2026-09/:importId/cancel', 'POST'] as const
}

export function getPostCrmImports202609ImportIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm.imports)['2026-09'][':importId']['cancel']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.imports)['2026-09'][':importId']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmImports202609ImportIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.imports)['2026-09'][':importId']['cancel']['$post']
      >,
    ) {
      return parseResponse(client.crm.imports['2026-09'][':importId'].cancel.$post(args, options))
    },
  })
}

export function usePostCrmImports202609ImportIdCancel<
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
                  ReturnType<(typeof client.crm.imports)['2026-09'][':importId']['cancel']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.crm.imports)['2026-09'][':importId']['cancel']['$post']>,
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
  const mutationDefaults = getPostCrmImports202609ImportIdCancelMutationOptions<
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

export function getCrmImports202609ImportIdErrorsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.crm.imports)['2026-09'][':importId']['errors']['$get']>
  >,
) {
  return ['crm', '/crm/imports/2026-09/:importId/errors', toValue(args)] as const
}

export function getCrmImports202609ImportIdErrorsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.crm.imports)['2026-09'][':importId']['errors']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmImports202609ImportIdErrorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.imports['2026-09'][':importId'].errors.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrmImports202609ImportIdErrors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.imports)['2026-09'][':importId']['errors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.crm.imports)['2026-09'][':importId']['errors']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.crm.imports)['2026-09'][':importId']['errors']['$get']>
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
                  ReturnType<(typeof client.crm.imports)['2026-09'][':importId']['errors']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCrmImports202609ImportIdErrorsQueryKey>
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
          Awaited<ReturnType<(typeof client.crm.imports)['2026-09'][':importId']['errors']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmImports202609ImportIdErrorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrmImports202609ImportIdErrorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.imports['2026-09'][':importId'].errors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
