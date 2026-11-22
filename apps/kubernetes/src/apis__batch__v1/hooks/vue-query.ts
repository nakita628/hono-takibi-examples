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

export function getApisKey() {
  return ['apis'] as const
}

export function getApisBatchV1IndexQueryKey() {
  return ['apis', '/apis/batch/v1/'] as const
}

export function getApisBatchV1IndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApisBatchV1IndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.batch.v1.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisBatchV1Index<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.index.$get>>>
            >
          >,
          ReturnType<typeof getApisBatchV1IndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApisBatchV1IndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApisBatchV1IndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.batch.v1.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisBatchV1CronjobsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.batch.v1.cronjobs.$get>>,
) {
  return ['apis', '/apis/batch/v1/cronjobs', toValue(args)] as const
}

export function getApisBatchV1CronjobsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.batch.v1.cronjobs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisBatchV1CronjobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.batch.v1.cronjobs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisBatchV1Cronjobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.cronjobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.batch.v1.cronjobs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.cronjobs.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.cronjobs.$get>>>
            >
          >,
          ReturnType<typeof getApisBatchV1CronjobsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.cronjobs.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisBatchV1CronjobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisBatchV1CronjobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.batch.v1.cronjobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisBatchV1JobsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.batch.v1.jobs.$get>>,
) {
  return ['apis', '/apis/batch/v1/jobs', toValue(args)] as const
}

export function getApisBatchV1JobsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.batch.v1.jobs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisBatchV1JobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.batch.v1.jobs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisBatchV1Jobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.jobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.batch.v1.jobs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.jobs.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.jobs.$get>>>
            >
          >,
          ReturnType<typeof getApisBatchV1JobsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.jobs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApisBatchV1JobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisBatchV1JobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.batch.v1.jobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisBatchV1NamespacesNamespaceCronjobsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs']['$get']>
  >,
) {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/cronjobs', toValue(args)] as const
}

export function getApisBatchV1NamespacesNamespaceCronjobsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisBatchV1NamespacesNamespaceCronjobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.batch.v1.namespaces[':namespace'].cronjobs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisBatchV1NamespacesNamespaceCronjobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs']['$get']>
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
                    (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs']['$get']
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
                    (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisBatchV1NamespacesNamespaceCronjobsQueryKey>
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
            ReturnType<(typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisBatchV1NamespacesNamespaceCronjobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisBatchV1NamespacesNamespaceCronjobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.batch.v1.namespaces[':namespace'].cronjobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApisBatchV1NamespacesNamespaceCronjobsMutationKey() {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/cronjobs', 'POST'] as const
}

export function getPostApisBatchV1NamespacesNamespaceCronjobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApisBatchV1NamespacesNamespaceCronjobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs']['$post']
      >,
    ) {
      return parseResponse(
        client.apis.batch.v1.namespaces[':namespace'].cronjobs.$post(args, options),
      )
    },
  })
}

export function usePostApisBatchV1NamespacesNamespaceCronjobs<
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
                    (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs']['$post']
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
  const mutationDefaults = getPostApisBatchV1NamespacesNamespaceCronjobsMutationOptions<
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

export function getDeleteApisBatchV1NamespacesNamespaceCronjobsMutationKey() {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/cronjobs', 'DELETE'] as const
}

export function getDeleteApisBatchV1NamespacesNamespaceCronjobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisBatchV1NamespacesNamespaceCronjobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis.batch.v1.namespaces[':namespace'].cronjobs.$delete(args, options),
      )
    },
  })
}

export function useDeleteApisBatchV1NamespacesNamespaceCronjobs<
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
                    (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs']['$delete']
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
  const mutationDefaults = getDeleteApisBatchV1NamespacesNamespaceCronjobsMutationOptions<
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

export function getApisBatchV1NamespacesNamespaceCronjobsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$get']
    >
  >,
) {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/cronjobs/:name', toValue(args)] as const
}

export function getApisBatchV1NamespacesNamespaceCronjobsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisBatchV1NamespacesNamespaceCronjobsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.batch.v1.namespaces[':namespace'].cronjobs[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisBatchV1NamespacesNamespaceCronjobsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$get']
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
                    (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$get']
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
                    (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisBatchV1NamespacesNamespaceCronjobsNameQueryKey>
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
              (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisBatchV1NamespacesNamespaceCronjobsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisBatchV1NamespacesNamespaceCronjobsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.batch.v1.namespaces[':namespace'].cronjobs[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisBatchV1NamespacesNamespaceCronjobsNameMutationKey() {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/cronjobs/:name', 'PUT'] as const
}

export function getPutApisBatchV1NamespacesNamespaceCronjobsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisBatchV1NamespacesNamespaceCronjobsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis.batch.v1.namespaces[':namespace'].cronjobs[':name'].$put(args, options),
      )
    },
  })
}

export function usePutApisBatchV1NamespacesNamespaceCronjobsName<
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
                    (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$put']
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
  const mutationDefaults = getPutApisBatchV1NamespacesNamespaceCronjobsNameMutationOptions<
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

export function getDeleteApisBatchV1NamespacesNamespaceCronjobsNameMutationKey() {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/cronjobs/:name', 'DELETE'] as const
}

export function getDeleteApisBatchV1NamespacesNamespaceCronjobsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisBatchV1NamespacesNamespaceCronjobsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis.batch.v1.namespaces[':namespace'].cronjobs[':name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApisBatchV1NamespacesNamespaceCronjobsName<
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
                    (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$delete']
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
  const mutationDefaults = getDeleteApisBatchV1NamespacesNamespaceCronjobsNameMutationOptions<
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

export function getPatchApisBatchV1NamespacesNamespaceCronjobsNameMutationKey() {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/cronjobs/:name', 'PATCH'] as const
}

export function getPatchApisBatchV1NamespacesNamespaceCronjobsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisBatchV1NamespacesNamespaceCronjobsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis.batch.v1.namespaces[':namespace'].cronjobs[':name'].$patch(args, options),
      )
    },
  })
}

export function usePatchApisBatchV1NamespacesNamespaceCronjobsName<
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
                    (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$patch']
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
  const mutationDefaults = getPatchApisBatchV1NamespacesNamespaceCronjobsNameMutationOptions<
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

export function getApisBatchV1NamespacesNamespaceCronjobsNameStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['status']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/batch/v1/namespaces/:namespace/cronjobs/:name/status',
    toValue(args),
  ] as const
}

export function getApisBatchV1NamespacesNamespaceCronjobsNameStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisBatchV1NamespacesNamespaceCronjobsNameStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.batch.v1.namespaces[':namespace'].cronjobs[':name'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisBatchV1NamespacesNamespaceCronjobsNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['status']['$get']
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
                    (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['status']['$get']
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
                    (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisBatchV1NamespacesNamespaceCronjobsNameStatusQueryKey>
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
              (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisBatchV1NamespacesNamespaceCronjobsNameStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisBatchV1NamespacesNamespaceCronjobsNameStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.batch.v1.namespaces[':namespace'].cronjobs[':name'].status.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisBatchV1NamespacesNamespaceCronjobsNameStatusMutationKey() {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/cronjobs/:name/status', 'PUT'] as const
}

export function getPutApisBatchV1NamespacesNamespaceCronjobsNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['status']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisBatchV1NamespacesNamespaceCronjobsNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['status']['$put']
      >,
    ) {
      return parseResponse(
        client.apis.batch.v1.namespaces[':namespace'].cronjobs[':name'].status.$put(args, options),
      )
    },
  })
}

export function usePutApisBatchV1NamespacesNamespaceCronjobsNameStatus<
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
                    (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['status']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['status']['$put']
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
  const mutationDefaults = getPutApisBatchV1NamespacesNamespaceCronjobsNameStatusMutationOptions<
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

export function getPatchApisBatchV1NamespacesNamespaceCronjobsNameStatusMutationKey() {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/cronjobs/:name/status', 'PATCH'] as const
}

export function getPatchApisBatchV1NamespacesNamespaceCronjobsNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['status']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisBatchV1NamespacesNamespaceCronjobsNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['status']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis.batch.v1.namespaces[':namespace'].cronjobs[':name'].status.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchApisBatchV1NamespacesNamespaceCronjobsNameStatus<
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
                    (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['status']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['status']['$patch']
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
  const mutationDefaults = getPatchApisBatchV1NamespacesNamespaceCronjobsNameStatusMutationOptions<
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

export function getApisBatchV1NamespacesNamespaceJobsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis.batch.v1.namespaces)[':namespace']['jobs']['$get']>
  >,
) {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/jobs', toValue(args)] as const
}

export function getApisBatchV1NamespacesNamespaceJobsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis.batch.v1.namespaces)[':namespace']['jobs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisBatchV1NamespacesNamespaceJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.batch.v1.namespaces[':namespace'].jobs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisBatchV1NamespacesNamespaceJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis.batch.v1.namespaces)[':namespace']['jobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis.batch.v1.namespaces)[':namespace']['jobs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apis.batch.v1.namespaces)[':namespace']['jobs']['$get']>
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
                  ReturnType<(typeof client.apis.batch.v1.namespaces)[':namespace']['jobs']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApisBatchV1NamespacesNamespaceJobsQueryKey>
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
            ReturnType<(typeof client.apis.batch.v1.namespaces)[':namespace']['jobs']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisBatchV1NamespacesNamespaceJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisBatchV1NamespacesNamespaceJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.batch.v1.namespaces[':namespace'].jobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApisBatchV1NamespacesNamespaceJobsMutationKey() {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/jobs', 'POST'] as const
}

export function getPostApisBatchV1NamespacesNamespaceJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis.batch.v1.namespaces)[':namespace']['jobs']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis.batch.v1.namespaces)[':namespace']['jobs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApisBatchV1NamespacesNamespaceJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs']['$post']
      >,
    ) {
      return parseResponse(client.apis.batch.v1.namespaces[':namespace'].jobs.$post(args, options))
    },
  })
}

export function usePostApisBatchV1NamespacesNamespaceJobs<
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
                    (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apis.batch.v1.namespaces)[':namespace']['jobs']['$post']>,
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
  const mutationDefaults = getPostApisBatchV1NamespacesNamespaceJobsMutationOptions<
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

export function getDeleteApisBatchV1NamespacesNamespaceJobsMutationKey() {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/jobs', 'DELETE'] as const
}

export function getDeleteApisBatchV1NamespacesNamespaceJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis.batch.v1.namespaces)[':namespace']['jobs']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis.batch.v1.namespaces)[':namespace']['jobs']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisBatchV1NamespacesNamespaceJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis.batch.v1.namespaces[':namespace'].jobs.$delete(args, options),
      )
    },
  })
}

export function useDeleteApisBatchV1NamespacesNamespaceJobs<
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
                    (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs']['$delete']
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
  const mutationDefaults = getDeleteApisBatchV1NamespacesNamespaceJobsMutationOptions<
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

export function getApisBatchV1NamespacesNamespaceJobsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$get']
    >
  >,
) {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/jobs/:name', toValue(args)] as const
}

export function getApisBatchV1NamespacesNamespaceJobsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisBatchV1NamespacesNamespaceJobsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.batch.v1.namespaces[':namespace'].jobs[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisBatchV1NamespacesNamespaceJobsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$get']
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
                    (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$get']
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
                    (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisBatchV1NamespacesNamespaceJobsNameQueryKey>
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
              (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisBatchV1NamespacesNamespaceJobsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisBatchV1NamespacesNamespaceJobsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.batch.v1.namespaces[':namespace'].jobs[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisBatchV1NamespacesNamespaceJobsNameMutationKey() {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/jobs/:name', 'PUT'] as const
}

export function getPutApisBatchV1NamespacesNamespaceJobsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisBatchV1NamespacesNamespaceJobsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis.batch.v1.namespaces[':namespace'].jobs[':name'].$put(args, options),
      )
    },
  })
}

export function usePutApisBatchV1NamespacesNamespaceJobsName<
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
                    (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$put']
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
  const mutationDefaults = getPutApisBatchV1NamespacesNamespaceJobsNameMutationOptions<
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

export function getDeleteApisBatchV1NamespacesNamespaceJobsNameMutationKey() {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/jobs/:name', 'DELETE'] as const
}

export function getDeleteApisBatchV1NamespacesNamespaceJobsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisBatchV1NamespacesNamespaceJobsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis.batch.v1.namespaces[':namespace'].jobs[':name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApisBatchV1NamespacesNamespaceJobsName<
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
                    (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$delete']
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
  const mutationDefaults = getDeleteApisBatchV1NamespacesNamespaceJobsNameMutationOptions<
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

export function getPatchApisBatchV1NamespacesNamespaceJobsNameMutationKey() {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/jobs/:name', 'PATCH'] as const
}

export function getPatchApisBatchV1NamespacesNamespaceJobsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisBatchV1NamespacesNamespaceJobsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis.batch.v1.namespaces[':namespace'].jobs[':name'].$patch(args, options),
      )
    },
  })
}

export function usePatchApisBatchV1NamespacesNamespaceJobsName<
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
                    (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$patch']
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
  const mutationDefaults = getPatchApisBatchV1NamespacesNamespaceJobsNameMutationOptions<
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

export function getApisBatchV1NamespacesNamespaceJobsNameStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['status']['$get']
    >
  >,
) {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/jobs/:name/status', toValue(args)] as const
}

export function getApisBatchV1NamespacesNamespaceJobsNameStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisBatchV1NamespacesNamespaceJobsNameStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.batch.v1.namespaces[':namespace'].jobs[':name'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisBatchV1NamespacesNamespaceJobsNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['status']['$get']
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
                    (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['status']['$get']
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
                    (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisBatchV1NamespacesNamespaceJobsNameStatusQueryKey>
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
              (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisBatchV1NamespacesNamespaceJobsNameStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisBatchV1NamespacesNamespaceJobsNameStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.batch.v1.namespaces[':namespace'].jobs[':name'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisBatchV1NamespacesNamespaceJobsNameStatusMutationKey() {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/jobs/:name/status', 'PUT'] as const
}

export function getPutApisBatchV1NamespacesNamespaceJobsNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['status']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisBatchV1NamespacesNamespaceJobsNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['status']['$put']
      >,
    ) {
      return parseResponse(
        client.apis.batch.v1.namespaces[':namespace'].jobs[':name'].status.$put(args, options),
      )
    },
  })
}

export function usePutApisBatchV1NamespacesNamespaceJobsNameStatus<
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
                    (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['status']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['status']['$put']
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
  const mutationDefaults = getPutApisBatchV1NamespacesNamespaceJobsNameStatusMutationOptions<
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

export function getPatchApisBatchV1NamespacesNamespaceJobsNameStatusMutationKey() {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/jobs/:name/status', 'PATCH'] as const
}

export function getPatchApisBatchV1NamespacesNamespaceJobsNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['status']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisBatchV1NamespacesNamespaceJobsNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['status']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis.batch.v1.namespaces[':namespace'].jobs[':name'].status.$patch(args, options),
      )
    },
  })
}

export function usePatchApisBatchV1NamespacesNamespaceJobsNameStatus<
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
                    (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['status']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['status']['$patch']
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
  const mutationDefaults = getPatchApisBatchV1NamespacesNamespaceJobsNameStatusMutationOptions<
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

export function getApisBatchV1WatchCronjobsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.batch.v1.watch.cronjobs.$get>>,
) {
  return ['apis', '/apis/batch/v1/watch/cronjobs', toValue(args)] as const
}

export function getApisBatchV1WatchCronjobsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.batch.v1.watch.cronjobs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisBatchV1WatchCronjobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.batch.v1.watch.cronjobs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisBatchV1WatchCronjobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.watch.cronjobs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.batch.v1.watch.cronjobs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.apis.batch.v1.watch.cronjobs.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.apis.batch.v1.watch.cronjobs.$get>>
              >
            >
          >,
          ReturnType<typeof getApisBatchV1WatchCronjobsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.watch.cronjobs.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisBatchV1WatchCronjobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisBatchV1WatchCronjobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.batch.v1.watch.cronjobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisBatchV1WatchJobsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.batch.v1.watch.jobs.$get>>,
) {
  return ['apis', '/apis/batch/v1/watch/jobs', toValue(args)] as const
}

export function getApisBatchV1WatchJobsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.batch.v1.watch.jobs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisBatchV1WatchJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.batch.v1.watch.jobs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisBatchV1WatchJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.watch.jobs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.batch.v1.watch.jobs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.watch.jobs.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.watch.jobs.$get>>>
            >
          >,
          ReturnType<typeof getApisBatchV1WatchJobsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.watch.jobs.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisBatchV1WatchJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisBatchV1WatchJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.batch.v1.watch.jobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisBatchV1WatchNamespacesNamespaceCronjobsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['cronjobs']['$get']
    >
  >,
) {
  return ['apis', '/apis/batch/v1/watch/namespaces/:namespace/cronjobs', toValue(args)] as const
}

export function getApisBatchV1WatchNamespacesNamespaceCronjobsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['cronjobs']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisBatchV1WatchNamespacesNamespaceCronjobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.batch.v1.watch.namespaces[':namespace'].cronjobs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisBatchV1WatchNamespacesNamespaceCronjobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['cronjobs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['cronjobs']['$get']
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
                    (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['cronjobs']['$get']
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
                    (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['cronjobs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisBatchV1WatchNamespacesNamespaceCronjobsQueryKey>
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
              (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['cronjobs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisBatchV1WatchNamespacesNamespaceCronjobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisBatchV1WatchNamespacesNamespaceCronjobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.batch.v1.watch.namespaces[':namespace'].cronjobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisBatchV1WatchNamespacesNamespaceCronjobsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['cronjobs'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/batch/v1/watch/namespaces/:namespace/cronjobs/:name',
    toValue(args),
  ] as const
}

export function getApisBatchV1WatchNamespacesNamespaceCronjobsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['cronjobs'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisBatchV1WatchNamespacesNamespaceCronjobsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.batch.v1.watch.namespaces[':namespace'].cronjobs[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisBatchV1WatchNamespacesNamespaceCronjobsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['cronjobs'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['cronjobs'][':name']['$get']
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
                    (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['cronjobs'][':name']['$get']
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
                    (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['cronjobs'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisBatchV1WatchNamespacesNamespaceCronjobsNameQueryKey>
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
              (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['cronjobs'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisBatchV1WatchNamespacesNamespaceCronjobsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisBatchV1WatchNamespacesNamespaceCronjobsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.batch.v1.watch.namespaces[':namespace'].cronjobs[':name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApisBatchV1WatchNamespacesNamespaceJobsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis.batch.v1.watch.namespaces)[':namespace']['jobs']['$get']>
  >,
) {
  return ['apis', '/apis/batch/v1/watch/namespaces/:namespace/jobs', toValue(args)] as const
}

export function getApisBatchV1WatchNamespacesNamespaceJobsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis.batch.v1.watch.namespaces)[':namespace']['jobs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisBatchV1WatchNamespacesNamespaceJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.batch.v1.watch.namespaces[':namespace'].jobs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisBatchV1WatchNamespacesNamespaceJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis.batch.v1.watch.namespaces)[':namespace']['jobs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis.batch.v1.watch.namespaces)[':namespace']['jobs']['$get']>
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
                    (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['jobs']['$get']
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
                    (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['jobs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisBatchV1WatchNamespacesNamespaceJobsQueryKey>
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
            ReturnType<(typeof client.apis.batch.v1.watch.namespaces)[':namespace']['jobs']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisBatchV1WatchNamespacesNamespaceJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisBatchV1WatchNamespacesNamespaceJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.batch.v1.watch.namespaces[':namespace'].jobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisBatchV1WatchNamespacesNamespaceJobsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['jobs'][':name']['$get']
    >
  >,
) {
  return ['apis', '/apis/batch/v1/watch/namespaces/:namespace/jobs/:name', toValue(args)] as const
}

export function getApisBatchV1WatchNamespacesNamespaceJobsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['jobs'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisBatchV1WatchNamespacesNamespaceJobsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.batch.v1.watch.namespaces[':namespace'].jobs[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisBatchV1WatchNamespacesNamespaceJobsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['jobs'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['jobs'][':name']['$get']
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
                    (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['jobs'][':name']['$get']
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
                    (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['jobs'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisBatchV1WatchNamespacesNamespaceJobsNameQueryKey>
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
              (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['jobs'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisBatchV1WatchNamespacesNamespaceJobsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisBatchV1WatchNamespacesNamespaceJobsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.batch.v1.watch.namespaces[':namespace'].jobs[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
