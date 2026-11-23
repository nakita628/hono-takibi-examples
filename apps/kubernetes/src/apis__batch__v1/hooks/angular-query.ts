import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApisKey() {
  return ['apis'] as const
}

export function getApisBatchV1IndexQueryKey() {
  return ['apis', '/apis/batch/v1/'] as const
}

export function getApisBatchV1IndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApisBatchV1IndexQueryKey>
  >({
    queryKey: getApisBatchV1IndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.batch.v1.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisBatchV1Index<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisBatchV1IndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApisBatchV1IndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getApisBatchV1CronjobsQueryKey(
  args: InferRequestType<typeof client.apis.batch.v1.cronjobs.$get>,
) {
  return ['apis', '/apis/batch/v1/cronjobs', args] as const
}

export function getApisBatchV1CronjobsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.cronjobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.apis.batch.v1.cronjobs.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.cronjobs.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisBatchV1CronjobsQueryKey>
  >({
    queryKey: getApisBatchV1CronjobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.batch.v1.cronjobs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisBatchV1Cronjobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.cronjobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.apis.batch.v1.cronjobs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.cronjobs.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisBatchV1CronjobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApisBatchV1CronjobsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApisBatchV1JobsQueryKey(
  args: InferRequestType<typeof client.apis.batch.v1.jobs.$get>,
) {
  return ['apis', '/apis/batch/v1/jobs', args] as const
}

export function getApisBatchV1JobsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.jobs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.apis.batch.v1.jobs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.jobs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApisBatchV1JobsQueryKey>
  >({
    queryKey: getApisBatchV1JobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.batch.v1.jobs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApisBatchV1Jobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.jobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.apis.batch.v1.jobs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.jobs.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisBatchV1JobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApisBatchV1JobsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApisBatchV1NamespacesNamespaceCronjobsQueryKey(
  args: InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs']['$get']
  >,
) {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/cronjobs', args] as const
}

export function getApisBatchV1NamespacesNamespaceCronjobsQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisBatchV1NamespacesNamespaceCronjobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.batch.v1.namespaces[':namespace'].cronjobs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisBatchV1NamespacesNamespaceCronjobs<
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
  args: () => InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getApisBatchV1NamespacesNamespaceCronjobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisBatchV1NamespacesNamespaceCronjobsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostApisBatchV1NamespacesNamespaceCronjobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApisBatchV1NamespacesNamespaceCronjobsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteApisBatchV1NamespacesNamespaceCronjobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApisBatchV1NamespacesNamespaceCronjobsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApisBatchV1NamespacesNamespaceCronjobsNameQueryKey(
  args: InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$get']
  >,
) {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/cronjobs/:name', args] as const
}

export function getApisBatchV1NamespacesNamespaceCronjobsNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisBatchV1NamespacesNamespaceCronjobsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.batch.v1.namespaces[':namespace'].cronjobs[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisBatchV1NamespacesNamespaceCronjobsName<
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
  args: () => InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisBatchV1NamespacesNamespaceCronjobsNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutApisBatchV1NamespacesNamespaceCronjobsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApisBatchV1NamespacesNamespaceCronjobsNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteApisBatchV1NamespacesNamespaceCronjobsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApisBatchV1NamespacesNamespaceCronjobsNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchApisBatchV1NamespacesNamespaceCronjobsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApisBatchV1NamespacesNamespaceCronjobsNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApisBatchV1NamespacesNamespaceCronjobsNameStatusQueryKey(
  args: InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['status']['$get']
  >,
) {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/cronjobs/:name/status', args] as const
}

export function getApisBatchV1NamespacesNamespaceCronjobsNameStatusQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisBatchV1NamespacesNamespaceCronjobsNameStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.batch.v1.namespaces[':namespace'].cronjobs[':name'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisBatchV1NamespacesNamespaceCronjobsNameStatus<
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
  args: () => InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['cronjobs'][':name']['status']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisBatchV1NamespacesNamespaceCronjobsNameStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutApisBatchV1NamespacesNamespaceCronjobsNameStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApisBatchV1NamespacesNamespaceCronjobsNameStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchApisBatchV1NamespacesNamespaceCronjobsNameStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchApisBatchV1NamespacesNamespaceCronjobsNameStatusMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApisBatchV1NamespacesNamespaceJobsQueryKey(
  args: InferRequestType<(typeof client.apis.batch.v1.namespaces)[':namespace']['jobs']['$get']>,
) {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/jobs', args] as const
}

export function getApisBatchV1NamespacesNamespaceJobsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis.batch.v1.namespaces)[':namespace']['jobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apis.batch.v1.namespaces)[':namespace']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisBatchV1NamespacesNamespaceJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.batch.v1.namespaces[':namespace'].jobs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisBatchV1NamespacesNamespaceJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis.batch.v1.namespaces)[':namespace']['jobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisBatchV1NamespacesNamespaceJobsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostApisBatchV1NamespacesNamespaceJobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApisBatchV1NamespacesNamespaceJobsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteApisBatchV1NamespacesNamespaceJobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.apis.batch.v1.namespaces)[':namespace']['jobs']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApisBatchV1NamespacesNamespaceJobsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApisBatchV1NamespacesNamespaceJobsNameQueryKey(
  args: InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$get']
  >,
) {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/jobs/:name', args] as const
}

export function getApisBatchV1NamespacesNamespaceJobsNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisBatchV1NamespacesNamespaceJobsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.batch.v1.namespaces[':namespace'].jobs[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisBatchV1NamespacesNamespaceJobsName<
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
  args: () => InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisBatchV1NamespacesNamespaceJobsNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutApisBatchV1NamespacesNamespaceJobsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApisBatchV1NamespacesNamespaceJobsNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteApisBatchV1NamespacesNamespaceJobsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApisBatchV1NamespacesNamespaceJobsNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchApisBatchV1NamespacesNamespaceJobsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApisBatchV1NamespacesNamespaceJobsNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApisBatchV1NamespacesNamespaceJobsNameStatusQueryKey(
  args: InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['status']['$get']
  >,
) {
  return ['apis', '/apis/batch/v1/namespaces/:namespace/jobs/:name/status', args] as const
}

export function getApisBatchV1NamespacesNamespaceJobsNameStatusQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisBatchV1NamespacesNamespaceJobsNameStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.batch.v1.namespaces[':namespace'].jobs[':name'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisBatchV1NamespacesNamespaceJobsNameStatus<
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
  args: () => InferRequestType<
    (typeof client.apis.batch.v1.namespaces)[':namespace']['jobs'][':name']['status']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisBatchV1NamespacesNamespaceJobsNameStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutApisBatchV1NamespacesNamespaceJobsNameStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApisBatchV1NamespacesNamespaceJobsNameStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchApisBatchV1NamespacesNamespaceJobsNameStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApisBatchV1NamespacesNamespaceJobsNameStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApisBatchV1WatchCronjobsQueryKey(
  args: InferRequestType<typeof client.apis.batch.v1.watch.cronjobs.$get>,
) {
  return ['apis', '/apis/batch/v1/watch/cronjobs', args] as const
}

export function getApisBatchV1WatchCronjobsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.watch.cronjobs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.apis.batch.v1.watch.cronjobs.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.watch.cronjobs.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisBatchV1WatchCronjobsQueryKey>
  >({
    queryKey: getApisBatchV1WatchCronjobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.batch.v1.watch.cronjobs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisBatchV1WatchCronjobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.watch.cronjobs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.apis.batch.v1.watch.cronjobs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.apis.batch.v1.watch.cronjobs.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisBatchV1WatchCronjobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisBatchV1WatchCronjobsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApisBatchV1WatchJobsQueryKey(
  args: InferRequestType<typeof client.apis.batch.v1.watch.jobs.$get>,
) {
  return ['apis', '/apis/batch/v1/watch/jobs', args] as const
}

export function getApisBatchV1WatchJobsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.watch.jobs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.apis.batch.v1.watch.jobs.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.watch.jobs.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisBatchV1WatchJobsQueryKey>
  >({
    queryKey: getApisBatchV1WatchJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.batch.v1.watch.jobs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisBatchV1WatchJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.watch.jobs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.apis.batch.v1.watch.jobs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.apis.batch.v1.watch.jobs.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisBatchV1WatchJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisBatchV1WatchJobsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApisBatchV1WatchNamespacesNamespaceCronjobsQueryKey(
  args: InferRequestType<
    (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['cronjobs']['$get']
  >,
) {
  return ['apis', '/apis/batch/v1/watch/namespaces/:namespace/cronjobs', args] as const
}

export function getApisBatchV1WatchNamespacesNamespaceCronjobsQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['cronjobs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisBatchV1WatchNamespacesNamespaceCronjobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.batch.v1.watch.namespaces[':namespace'].cronjobs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisBatchV1WatchNamespacesNamespaceCronjobs<
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
  args: () => InferRequestType<
    (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['cronjobs']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisBatchV1WatchNamespacesNamespaceCronjobsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApisBatchV1WatchNamespacesNamespaceCronjobsNameQueryKey(
  args: InferRequestType<
    (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['cronjobs'][':name']['$get']
  >,
) {
  return ['apis', '/apis/batch/v1/watch/namespaces/:namespace/cronjobs/:name', args] as const
}

export function getApisBatchV1WatchNamespacesNamespaceCronjobsNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['cronjobs'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisBatchV1WatchNamespacesNamespaceCronjobsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.batch.v1.watch.namespaces[':namespace'].cronjobs[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisBatchV1WatchNamespacesNamespaceCronjobsName<
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
  args: () => InferRequestType<
    (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['cronjobs'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisBatchV1WatchNamespacesNamespaceCronjobsNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApisBatchV1WatchNamespacesNamespaceJobsQueryKey(
  args: InferRequestType<
    (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['jobs']['$get']
  >,
) {
  return ['apis', '/apis/batch/v1/watch/namespaces/:namespace/jobs', args] as const
}

export function getApisBatchV1WatchNamespacesNamespaceJobsQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['jobs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisBatchV1WatchNamespacesNamespaceJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.batch.v1.watch.namespaces[':namespace'].jobs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisBatchV1WatchNamespacesNamespaceJobs<
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
  args: () => InferRequestType<
    (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['jobs']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getApisBatchV1WatchNamespacesNamespaceJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisBatchV1WatchNamespacesNamespaceJobsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApisBatchV1WatchNamespacesNamespaceJobsNameQueryKey(
  args: InferRequestType<
    (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['jobs'][':name']['$get']
  >,
) {
  return ['apis', '/apis/batch/v1/watch/namespaces/:namespace/jobs/:name', args] as const
}

export function getApisBatchV1WatchNamespacesNamespaceJobsNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['jobs'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisBatchV1WatchNamespacesNamespaceJobsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.batch.v1.watch.namespaces[':namespace'].jobs[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisBatchV1WatchNamespacesNamespaceJobsName<
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
  args: () => InferRequestType<
    (typeof client.apis.batch.v1.watch.namespaces)[':namespace']['jobs'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisBatchV1WatchNamespacesNamespaceJobsNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}
