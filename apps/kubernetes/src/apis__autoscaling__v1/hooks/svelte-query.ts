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

export function getApisAutoscalingV1IndexQueryKey() {
  return ['apis', '/apis/autoscaling/v1/'] as const
}

export function getApisAutoscalingV1IndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apis.autoscaling.v1.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.apis.autoscaling.v1.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAutoscalingV1IndexQueryKey>
  >({
    queryKey: getApisAutoscalingV1IndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.autoscaling.v1.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisAutoscalingV1Index<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apis.autoscaling.v1.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.apis.autoscaling.v1.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAutoscalingV1IndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApisAutoscalingV1IndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApisAutoscalingV1HorizontalpodautoscalersQueryKey(
  args: InferRequestType<typeof client.apis.autoscaling.v1.horizontalpodautoscalers.$get>,
) {
  return ['apis', '/apis/autoscaling/v1/horizontalpodautoscalers', args] as const
}

export function getApisAutoscalingV1HorizontalpodautoscalersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.apis.autoscaling.v1.horizontalpodautoscalers.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.apis.autoscaling.v1.horizontalpodautoscalers.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.apis.autoscaling.v1.horizontalpodautoscalers.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAutoscalingV1HorizontalpodautoscalersQueryKey>
  >({
    queryKey: getApisAutoscalingV1HorizontalpodautoscalersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.autoscaling.v1.horizontalpodautoscalers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisAutoscalingV1Horizontalpodautoscalers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.apis.autoscaling.v1.horizontalpodautoscalers.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.apis.autoscaling.v1.horizontalpodautoscalers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.apis.autoscaling.v1.horizontalpodautoscalers.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAutoscalingV1HorizontalpodautoscalersQueryKey>
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
      ...getApisAutoscalingV1HorizontalpodautoscalersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersQueryKey(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
  >,
) {
  return [
    'apis',
    '/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers',
    args,
  ] as const
}

export function getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersQueryKey>
  >({
    queryKey: getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersQueryKey>
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
      ...getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersMutationKey() {
  return [
    'apis',
    '/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers',
    'POST',
  ] as const
}

export function getPostApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$post']
      >,
    ) {
      return parseResponse(
        client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalers<
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
                  (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$post']
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
      getPostApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersMutationOptions<
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

export function getDeleteApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersMutationKey() {
  return [
    'apis',
    '/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers',
    'DELETE',
  ] as const
}

export function getDeleteApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalers<
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
                  (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$delete']
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
      getDeleteApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersMutationOptions<
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

export function getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameQueryKey(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name',
    args,
  ] as const
}

export function getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameQueryKey>
  >({
    queryKey: getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers[':name'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameQueryKey
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
      ...getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameMutationKey() {
  return [
    'apis',
    '/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name',
    'PUT',
  ] as const
}

export function getPutApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers[':name'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersName<
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
                  (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$put']
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
      getPutApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameMutationOptions<
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

export function getDeleteApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameMutationKey() {
  return [
    'apis',
    '/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name',
    'DELETE',
  ] as const
}

export function getDeleteApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers[
          ':name'
        ].$delete(args, options),
      )
    },
  })
}

export function createDeleteApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersName<
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
                  (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$delete']
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
      getDeleteApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameMutationOptions<
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

export function getPatchApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameMutationKey() {
  return [
    'apis',
    '/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name',
    'PATCH',
  ] as const
}

export function getPatchApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers[
          ':name'
        ].$patch(args, options),
      )
    },
  })
}

export function createPatchApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersName<
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
                  (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$patch']
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
      getPatchApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameMutationOptions<
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

export function getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatusQueryKey(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$get']
  >,
) {
  return [
    'apis',
    '/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name/status',
    args,
  ] as const
}

export function getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatusQueryKey
    >
  >({
    queryKey:
      getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers[
          ':name'
        ].status.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatusQueryKey
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
      ...getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatusQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatusMutationKey() {
  return [
    'apis',
    '/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name/status',
    'PUT',
  ] as const
}

export function getPutApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$put']
      >,
    ) {
      return parseResponse(
        client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers[
          ':name'
        ].status.$put(args, options),
      )
    },
  })
}

export function createPutApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatus<
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
                  (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$put']
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
      getPutApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatusMutationOptions<
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

export function getPatchApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatusMutationKey() {
  return [
    'apis',
    '/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name/status',
    'PATCH',
  ] as const
}

export function getPatchApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers[
          ':name'
        ].status.$patch(args, options),
      )
    },
  })
}

export function createPatchApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatus<
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
                  (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$patch']
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
      getPatchApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatusMutationOptions<
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

export function getApisAutoscalingV1WatchHorizontalpodautoscalersQueryKey(
  args: InferRequestType<typeof client.apis.autoscaling.v1.watch.horizontalpodautoscalers.$get>,
) {
  return ['apis', '/apis/autoscaling/v1/watch/horizontalpodautoscalers', args] as const
}

export function getApisAutoscalingV1WatchHorizontalpodautoscalersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.apis.autoscaling.v1.watch.horizontalpodautoscalers.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.apis.autoscaling.v1.watch.horizontalpodautoscalers.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.apis.autoscaling.v1.watch.horizontalpodautoscalers.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAutoscalingV1WatchHorizontalpodautoscalersQueryKey>
  >({
    queryKey: getApisAutoscalingV1WatchHorizontalpodautoscalersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.autoscaling.v1.watch.horizontalpodautoscalers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisAutoscalingV1WatchHorizontalpodautoscalers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.apis.autoscaling.v1.watch.horizontalpodautoscalers.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    typeof client.apis.autoscaling.v1.watch.horizontalpodautoscalers.$get
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<typeof client.apis.autoscaling.v1.watch.horizontalpodautoscalers.$get>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAutoscalingV1WatchHorizontalpodautoscalersQueryKey>
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
      ...getApisAutoscalingV1WatchHorizontalpodautoscalersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApisAutoscalingV1WatchNamespacesNamespaceHorizontalpodautoscalersQueryKey(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v1.watch.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
  >,
) {
  return [
    'apis',
    '/apis/autoscaling/v1/watch/namespaces/:namespace/horizontalpodautoscalers',
    args,
  ] as const
}

export function getApisAutoscalingV1WatchNamespacesNamespaceHorizontalpodautoscalersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.autoscaling.v1.watch.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v1.watch.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.autoscaling.v1.watch.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAutoscalingV1WatchNamespacesNamespaceHorizontalpodautoscalersQueryKey>
  >({
    queryKey: getApisAutoscalingV1WatchNamespacesNamespaceHorizontalpodautoscalersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.autoscaling.v1.watch.namespaces[':namespace'].horizontalpodautoscalers.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createApisAutoscalingV1WatchNamespacesNamespaceHorizontalpodautoscalers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.autoscaling.v1.watch.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis.autoscaling.v1.watch.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis.autoscaling.v1.watch.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApisAutoscalingV1WatchNamespacesNamespaceHorizontalpodautoscalersQueryKey
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
      ...getApisAutoscalingV1WatchNamespacesNamespaceHorizontalpodautoscalersQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApisAutoscalingV1WatchNamespacesNamespaceHorizontalpodautoscalersNameQueryKey(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v1.watch.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/autoscaling/v1/watch/namespaces/:namespace/horizontalpodautoscalers/:name',
    args,
  ] as const
}

export function getApisAutoscalingV1WatchNamespacesNamespaceHorizontalpodautoscalersNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.autoscaling.v1.watch.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v1.watch.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.autoscaling.v1.watch.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApisAutoscalingV1WatchNamespacesNamespaceHorizontalpodautoscalersNameQueryKey
    >
  >({
    queryKey:
      getApisAutoscalingV1WatchNamespacesNamespaceHorizontalpodautoscalersNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.autoscaling.v1.watch.namespaces[':namespace'].horizontalpodautoscalers[
          ':name'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApisAutoscalingV1WatchNamespacesNamespaceHorizontalpodautoscalersName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis.autoscaling.v1.watch.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis.autoscaling.v1.watch.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis.autoscaling.v1.watch.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApisAutoscalingV1WatchNamespacesNamespaceHorizontalpodautoscalersNameQueryKey
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
      ...getApisAutoscalingV1WatchNamespacesNamespaceHorizontalpodautoscalersNameQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
