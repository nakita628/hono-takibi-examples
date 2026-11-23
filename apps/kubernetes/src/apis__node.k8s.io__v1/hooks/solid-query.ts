import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApisKey() {
  return ['apis'] as const
}

export function getApisNodeK8sIoV1IndexQueryKey() {
  return ['apis', '/apis/node.k8s.io/v1/'] as const
}

export function getApisNodeK8sIoV1IndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['node.k8s.io']['v1']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['node.k8s.io']['v1']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNodeK8sIoV1IndexQueryKey>
  >({
    queryKey: getApisNodeK8sIoV1IndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['node.k8s.io'].v1.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisNodeK8sIoV1Index<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['node.k8s.io']['v1']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apis)['node.k8s.io']['v1']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisNodeK8sIoV1IndexQueryKey>
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
    return { ...getApisNodeK8sIoV1IndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApisNodeK8sIoV1RuntimeclassesQueryKey(
  args: InferRequestType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$get']>,
) {
  return ['apis', '/apis/node.k8s.io/v1/runtimeclasses', args] as const
}

export function getApisNodeK8sIoV1RuntimeclassesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNodeK8sIoV1RuntimeclassesQueryKey>
  >({
    queryKey: getApisNodeK8sIoV1RuntimeclassesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['node.k8s.io'].v1.runtimeclasses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisNodeK8sIoV1Runtimeclasses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisNodeK8sIoV1RuntimeclassesQueryKey>
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
      ...getApisNodeK8sIoV1RuntimeclassesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApisNodeK8sIoV1RuntimeclassesMutationKey() {
  return ['apis', '/apis/node.k8s.io/v1/runtimeclasses', 'POST'] as const
}

export function getPostApisNodeK8sIoV1RuntimeclassesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApisNodeK8sIoV1RuntimeclassesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$post']>,
    ) {
      return parseResponse(client.apis['node.k8s.io'].v1.runtimeclasses.$post(args, options))
    },
  })
}

export function createPostApisNodeK8sIoV1Runtimeclasses<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApisNodeK8sIoV1RuntimeclassesMutationOptions<
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

export function getDeleteApisNodeK8sIoV1RuntimeclassesMutationKey() {
  return ['apis', '/apis/node.k8s.io/v1/runtimeclasses', 'DELETE'] as const
}

export function getDeleteApisNodeK8sIoV1RuntimeclassesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisNodeK8sIoV1RuntimeclassesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$delete']
      >,
    ) {
      return parseResponse(client.apis['node.k8s.io'].v1.runtimeclasses.$delete(args, options))
    },
  })
}

export function createDeleteApisNodeK8sIoV1Runtimeclasses<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApisNodeK8sIoV1RuntimeclassesMutationOptions<
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

export function getApisNodeK8sIoV1RuntimeclassesNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$get']
  >,
) {
  return ['apis', '/apis/node.k8s.io/v1/runtimeclasses/:name', args] as const
}

export function getApisNodeK8sIoV1RuntimeclassesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNodeK8sIoV1RuntimeclassesNameQueryKey>
  >({
    queryKey: getApisNodeK8sIoV1RuntimeclassesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['node.k8s.io'].v1.runtimeclasses[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisNodeK8sIoV1RuntimeclassesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisNodeK8sIoV1RuntimeclassesNameQueryKey>
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
      ...getApisNodeK8sIoV1RuntimeclassesNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApisNodeK8sIoV1RuntimeclassesNameMutationKey() {
  return ['apis', '/apis/node.k8s.io/v1/runtimeclasses/:name', 'PUT'] as const
}

export function getPutApisNodeK8sIoV1RuntimeclassesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApisNodeK8sIoV1RuntimeclassesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['node.k8s.io'].v1.runtimeclasses[':name'].$put(args, options),
      )
    },
  })
}

export function createPutApisNodeK8sIoV1RuntimeclassesName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApisNodeK8sIoV1RuntimeclassesNameMutationOptions<
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

export function getDeleteApisNodeK8sIoV1RuntimeclassesNameMutationKey() {
  return ['apis', '/apis/node.k8s.io/v1/runtimeclasses/:name', 'DELETE'] as const
}

export function getDeleteApisNodeK8sIoV1RuntimeclassesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisNodeK8sIoV1RuntimeclassesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['node.k8s.io'].v1.runtimeclasses[':name'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApisNodeK8sIoV1RuntimeclassesName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApisNodeK8sIoV1RuntimeclassesNameMutationOptions<
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

export function getPatchApisNodeK8sIoV1RuntimeclassesNameMutationKey() {
  return ['apis', '/apis/node.k8s.io/v1/runtimeclasses/:name', 'PATCH'] as const
}

export function getPatchApisNodeK8sIoV1RuntimeclassesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisNodeK8sIoV1RuntimeclassesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['node.k8s.io'].v1.runtimeclasses[':name'].$patch(args, options),
      )
    },
  })
}

export function createPatchApisNodeK8sIoV1RuntimeclassesName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$patch']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApisNodeK8sIoV1RuntimeclassesNameMutationOptions<
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

export function getApisNodeK8sIoV1WatchRuntimeclassesQueryKey(
  args: InferRequestType<
    (typeof client.apis)['node.k8s.io']['v1']['watch']['runtimeclasses']['$get']
  >,
) {
  return ['apis', '/apis/node.k8s.io/v1/watch/runtimeclasses', args] as const
}

export function getApisNodeK8sIoV1WatchRuntimeclassesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis)['node.k8s.io']['v1']['watch']['runtimeclasses']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['node.k8s.io']['v1']['watch']['runtimeclasses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['node.k8s.io']['v1']['watch']['runtimeclasses']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNodeK8sIoV1WatchRuntimeclassesQueryKey>
  >({
    queryKey: getApisNodeK8sIoV1WatchRuntimeclassesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['node.k8s.io'].v1.watch.runtimeclasses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisNodeK8sIoV1WatchRuntimeclasses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis)['node.k8s.io']['v1']['watch']['runtimeclasses']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['node.k8s.io']['v1']['watch']['runtimeclasses']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['node.k8s.io']['v1']['watch']['runtimeclasses']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisNodeK8sIoV1WatchRuntimeclassesQueryKey>
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
      ...getApisNodeK8sIoV1WatchRuntimeclassesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApisNodeK8sIoV1WatchRuntimeclassesNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['node.k8s.io']['v1']['watch']['runtimeclasses'][':name']['$get']
  >,
) {
  return ['apis', '/apis/node.k8s.io/v1/watch/runtimeclasses/:name', args] as const
}

export function getApisNodeK8sIoV1WatchRuntimeclassesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['node.k8s.io']['v1']['watch']['runtimeclasses'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['node.k8s.io']['v1']['watch']['runtimeclasses'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['node.k8s.io']['v1']['watch']['runtimeclasses'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNodeK8sIoV1WatchRuntimeclassesNameQueryKey>
  >({
    queryKey: getApisNodeK8sIoV1WatchRuntimeclassesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['node.k8s.io'].v1.watch.runtimeclasses[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisNodeK8sIoV1WatchRuntimeclassesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['node.k8s.io']['v1']['watch']['runtimeclasses'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['node.k8s.io']['v1']['watch']['runtimeclasses'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['node.k8s.io']['v1']['watch']['runtimeclasses'][':name']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisNodeK8sIoV1WatchRuntimeclassesNameQueryKey>
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
      ...getApisNodeK8sIoV1WatchRuntimeclassesNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}
