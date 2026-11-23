import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApisKey() {
  return ['apis'] as const
}

export function getApisAutoscalingV2IndexQueryKey() {
  return ['apis', '/apis/autoscaling/v2/'] as const
}

export function getApisAutoscalingV2IndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apis.autoscaling.v2.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.apis.autoscaling.v2.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAutoscalingV2IndexQueryKey>
  >({
    queryKey: getApisAutoscalingV2IndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.autoscaling.v2.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisAutoscalingV2Index<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apis.autoscaling.v2.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.apis.autoscaling.v2.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAutoscalingV2IndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApisAutoscalingV2IndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApisAutoscalingV2HorizontalpodautoscalersQueryKey(
  args: InferRequestType<typeof client.apis.autoscaling.v2.horizontalpodautoscalers.$get>,
) {
  return ['apis', '/apis/autoscaling/v2/horizontalpodautoscalers', args] as const
}

export function getApisAutoscalingV2HorizontalpodautoscalersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.apis.autoscaling.v2.horizontalpodautoscalers.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.apis.autoscaling.v2.horizontalpodautoscalers.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.apis.autoscaling.v2.horizontalpodautoscalers.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAutoscalingV2HorizontalpodautoscalersQueryKey>
  >({
    queryKey: getApisAutoscalingV2HorizontalpodautoscalersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.autoscaling.v2.horizontalpodautoscalers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisAutoscalingV2Horizontalpodautoscalers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.apis.autoscaling.v2.horizontalpodautoscalers.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.apis.autoscaling.v2.horizontalpodautoscalers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.apis.autoscaling.v2.horizontalpodautoscalers.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAutoscalingV2HorizontalpodautoscalersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisAutoscalingV2HorizontalpodautoscalersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersQueryKey(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
  >,
) {
  return [
    'apis',
    '/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers',
    args,
  ] as const
}

export function getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersQueryKey>
  >({
    queryKey: getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersMutationKey() {
  return [
    'apis',
    '/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers',
    'POST',
  ] as const
}

export function getPostApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers']['$post']
      >,
    ) {
      return parseResponse(
        client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalers<
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
                  (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersMutationKey() {
  return [
    'apis',
    '/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers',
    'DELETE',
  ] as const
}

export function getDeleteApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalers<
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
                  (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameQueryKey(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name',
    args,
  ] as const
}

export function getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameQueryKey>
  >({
    queryKey: getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers[':name'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameMutationKey() {
  return [
    'apis',
    '/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name',
    'PUT',
  ] as const
}

export function getPutApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers[':name'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersName<
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
                  (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameMutationKey() {
  return [
    'apis',
    '/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name',
    'DELETE',
  ] as const
}

export function getDeleteApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers[
          ':name'
        ].$delete(args, options),
      )
    },
  })
}

export function createDeleteApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersName<
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
                  (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameMutationKey() {
  return [
    'apis',
    '/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name',
    'PATCH',
  ] as const
}

export function getPatchApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers[
          ':name'
        ].$patch(args, options),
      )
    },
  })
}

export function createPatchApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersName<
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
                  (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatusQueryKey(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$get']
  >,
) {
  return [
    'apis',
    '/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name/status',
    args,
  ] as const
}

export function getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatusQueryKey
    >
  >({
    queryKey:
      getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers[
          ':name'
        ].status.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatusQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatusQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatusMutationKey() {
  return [
    'apis',
    '/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name/status',
    'PUT',
  ] as const
}

export function getPutApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$put']
      >,
    ) {
      return parseResponse(
        client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers[
          ':name'
        ].status.$put(args, options),
      )
    },
  })
}

export function createPutApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatus<
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
                  (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatusMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatusMutationKey() {
  return [
    'apis',
    '/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name/status',
    'PATCH',
  ] as const
}

export function getPatchApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers[
          ':name'
        ].status.$patch(args, options),
      )
    },
  })
}

export function createPatchApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatus<
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
                  (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatusMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApisAutoscalingV2WatchHorizontalpodautoscalersQueryKey(
  args: InferRequestType<typeof client.apis.autoscaling.v2.watch.horizontalpodautoscalers.$get>,
) {
  return ['apis', '/apis/autoscaling/v2/watch/horizontalpodautoscalers', args] as const
}

export function getApisAutoscalingV2WatchHorizontalpodautoscalersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.apis.autoscaling.v2.watch.horizontalpodautoscalers.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.apis.autoscaling.v2.watch.horizontalpodautoscalers.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.apis.autoscaling.v2.watch.horizontalpodautoscalers.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAutoscalingV2WatchHorizontalpodautoscalersQueryKey>
  >({
    queryKey: getApisAutoscalingV2WatchHorizontalpodautoscalersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.autoscaling.v2.watch.horizontalpodautoscalers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisAutoscalingV2WatchHorizontalpodautoscalers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.apis.autoscaling.v2.watch.horizontalpodautoscalers.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    typeof client.apis.autoscaling.v2.watch.horizontalpodautoscalers.$get
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<typeof client.apis.autoscaling.v2.watch.horizontalpodautoscalers.$get>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAutoscalingV2WatchHorizontalpodautoscalersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisAutoscalingV2WatchHorizontalpodautoscalersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApisAutoscalingV2WatchNamespacesNamespaceHorizontalpodautoscalersQueryKey(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v2.watch.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
  >,
) {
  return [
    'apis',
    '/apis/autoscaling/v2/watch/namespaces/:namespace/horizontalpodautoscalers',
    args,
  ] as const
}

export function getApisAutoscalingV2WatchNamespacesNamespaceHorizontalpodautoscalersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.autoscaling.v2.watch.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v2.watch.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.autoscaling.v2.watch.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAutoscalingV2WatchNamespacesNamespaceHorizontalpodautoscalersQueryKey>
  >({
    queryKey: getApisAutoscalingV2WatchNamespacesNamespaceHorizontalpodautoscalersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.autoscaling.v2.watch.namespaces[':namespace'].horizontalpodautoscalers.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createApisAutoscalingV2WatchNamespacesNamespaceHorizontalpodautoscalers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.autoscaling.v2.watch.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis.autoscaling.v2.watch.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis.autoscaling.v2.watch.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApisAutoscalingV2WatchNamespacesNamespaceHorizontalpodautoscalersQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisAutoscalingV2WatchNamespacesNamespaceHorizontalpodautoscalersQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApisAutoscalingV2WatchNamespacesNamespaceHorizontalpodautoscalersNameQueryKey(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v2.watch.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/autoscaling/v2/watch/namespaces/:namespace/horizontalpodautoscalers/:name',
    args,
  ] as const
}

export function getApisAutoscalingV2WatchNamespacesNamespaceHorizontalpodautoscalersNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.autoscaling.v2.watch.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v2.watch.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.autoscaling.v2.watch.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApisAutoscalingV2WatchNamespacesNamespaceHorizontalpodautoscalersNameQueryKey
    >
  >({
    queryKey:
      getApisAutoscalingV2WatchNamespacesNamespaceHorizontalpodautoscalersNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.autoscaling.v2.watch.namespaces[':namespace'].horizontalpodautoscalers[
          ':name'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApisAutoscalingV2WatchNamespacesNamespaceHorizontalpodautoscalersName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.autoscaling.v2.watch.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis.autoscaling.v2.watch.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis.autoscaling.v2.watch.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApisAutoscalingV2WatchNamespacesNamespaceHorizontalpodautoscalersNameQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisAutoscalingV2WatchNamespacesNamespaceHorizontalpodautoscalersNameQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
