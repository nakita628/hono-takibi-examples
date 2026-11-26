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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1FoldersQueryKey(args: InferRequestType<typeof client.v1.folders.$get>) {
  return ['v1', '/v1/folders', args] as const
}

export function getV1FoldersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.folders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.folders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.folders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1FoldersQueryKey>
  >({
    queryKey: getV1FoldersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.folders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Folders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.folders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.folders.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.folders.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1FoldersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1FoldersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1FoldersMutationKey() {
  return ['v1', '/v1/folders', 'POST'] as const
}

export function getPostV1FoldersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.folders.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.folders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1FoldersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.folders.$post>) {
      return parseResponse(client.v1.folders.$post(args, options))
    },
  })
}

export function createPostV1Folders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.folders.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.folders.$post>,
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
    const mutationDefaults = getPostV1FoldersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1FoldersIdQueryKey(
  args: InferRequestType<(typeof client.v1.folders)[':id']['$get']>,
) {
  return ['v1', '/v1/folders/:id', args] as const
}

export function getV1FoldersIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.folders)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.folders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.folders)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FoldersIdQueryKey>
  >({
    queryKey: getV1FoldersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.folders[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1FoldersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.folders)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.folders)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.folders)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1FoldersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1FoldersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1FoldersIdMutationKey() {
  return ['v1', '/v1/folders/:id', 'POST'] as const
}

export function getPostV1FoldersIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.folders)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.folders)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1FoldersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.folders)[':id']['$post']>) {
      return parseResponse(client.v1.folders[':id'].$post(args, options))
    },
  })
}

export function createPostV1FoldersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.folders)[':id']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.folders)[':id']['$post']>,
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
    const mutationDefaults = getPostV1FoldersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1FoldersIdMutationKey() {
  return ['v1', '/v1/folders/:id', 'DELETE'] as const
}

export function getDeleteV1FoldersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.folders)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.folders)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1FoldersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.folders)[':id']['$delete']>) {
      return parseResponse(client.v1.folders[':id'].$delete(args, options))
    },
  })
}

export function createDeleteV1FoldersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.folders)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.folders)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteV1FoldersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1FlowsQueryKey(args: InferRequestType<typeof client.v1.flows.$get>) {
  return ['v1', '/v1/flows', args] as const
}

export function getV1FlowsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.flows.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.flows.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.flows.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1FlowsQueryKey>
  >({
    queryKey: getV1FlowsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.flows.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Flows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.flows.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.flows.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.flows.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV1FlowsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1FlowsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1FlowsMutationKey() {
  return ['v1', '/v1/flows', 'POST'] as const
}

export function getPostV1FlowsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.flows.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.flows.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1FlowsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.flows.$post>) {
      return parseResponse(client.v1.flows.$post(args, options))
    },
  })
}

export function createPostV1Flows<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.flows.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.flows.$post>,
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
    const mutationDefaults = getPostV1FlowsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1FlowsIdQueryKey(
  args: InferRequestType<(typeof client.v1.flows)[':id']['$get']>,
) {
  return ['v1', '/v1/flows/:id', args] as const
}

export function getV1FlowsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.flows)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v1.flows)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.flows)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1FlowsIdQueryKey>
  >({
    queryKey: getV1FlowsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.flows[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1FlowsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.flows)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.flows)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.flows)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1FlowsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1FlowsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1FlowsIdMutationKey() {
  return ['v1', '/v1/flows/:id', 'POST'] as const
}

export function getPostV1FlowsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.flows)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.flows)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1FlowsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.flows)[':id']['$post']>) {
      return parseResponse(client.v1.flows[':id'].$post(args, options))
    },
  })
}

export function createPostV1FlowsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.flows)[':id']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.flows)[':id']['$post']>,
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
    const mutationDefaults = getPostV1FlowsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1FlowsIdMutationKey() {
  return ['v1', '/v1/flows/:id', 'DELETE'] as const
}

export function getDeleteV1FlowsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.flows)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.flows)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1FlowsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.flows)[':id']['$delete']>) {
      return parseResponse(client.v1.flows[':id'].$delete(args, options))
    },
  })
}

export function createDeleteV1FlowsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.flows)[':id']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.flows)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteV1FlowsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1FlowsIdTemplateQueryKey(
  args: InferRequestType<(typeof client.v1.flows)[':id']['template']['$get']>,
) {
  return ['v1', '/v1/flows/:id/template', args] as const
}

export function getV1FlowsIdTemplateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.flows)[':id']['template']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.flows)[':id']['template']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.flows)[':id']['template']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FlowsIdTemplateQueryKey>
  >({
    queryKey: getV1FlowsIdTemplateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.flows[':id'].template.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1FlowsIdTemplate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.flows)[':id']['template']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.flows)[':id']['template']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.flows)[':id']['template']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1FlowsIdTemplateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1FlowsIdTemplateQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1SampleDataTestStepMutationKey() {
  return ['v1', '/v1/sample-data/test-step', 'POST'] as const
}

export function getPostV1SampleDataTestStepMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['sample-data']['test-step']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['sample-data']['test-step']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SampleDataTestStepMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['sample-data']['test-step']['$post']>,
    ) {
      return parseResponse(client.v1['sample-data']['test-step'].$post(args, options))
    },
  })
}

export function createPostV1SampleDataTestStep<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['sample-data']['test-step']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['sample-data']['test-step']['$post']>,
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
    const mutationDefaults = getPostV1SampleDataTestStepMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1SampleDataQueryKey(
  args: InferRequestType<(typeof client.v1)['sample-data']['$get']>,
) {
  return ['v1', '/v1/sample-data', args] as const
}

export function getV1SampleDataQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sample-data']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['sample-data']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sample-data']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SampleDataQueryKey>
  >({
    queryKey: getV1SampleDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['sample-data'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1SampleData<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sample-data']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['sample-data']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sample-data']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SampleDataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1SampleDataQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1FlowRunsQueryKey(
  args: InferRequestType<(typeof client.v1)['flow-runs']['$get']>,
) {
  return ['v1', '/v1/flow-runs', args] as const
}

export function getV1FlowRunsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['flow-runs']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v1)['flow-runs']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['flow-runs']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1FlowRunsQueryKey>
  >({
    queryKey: getV1FlowRunsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['flow-runs'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1FlowRuns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['flow-runs']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['flow-runs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['flow-runs']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1FlowRunsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1FlowRunsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1FlowRunsCountByStatusQueryKey(
  args: InferRequestType<(typeof client.v1)['flow-runs']['count-by-status']['$get']>,
) {
  return ['v1', '/v1/flow-runs/count-by-status', args] as const
}

export function getV1FlowRunsCountByStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['flow-runs']['count-by-status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['flow-runs']['count-by-status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['flow-runs']['count-by-status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FlowRunsCountByStatusQueryKey>
  >({
    queryKey: getV1FlowRunsCountByStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['flow-runs']['count-by-status'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1FlowRunsCountByStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['flow-runs']['count-by-status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['flow-runs']['count-by-status']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['flow-runs']['count-by-status']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1FlowRunsCountByStatusQueryKey>
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
      ...getV1FlowRunsCountByStatusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1FlowRunsIdQueryKey(
  args: InferRequestType<(typeof client.v1)['flow-runs'][':id']['$get']>,
) {
  return ['v1', '/v1/flow-runs/:id', args] as const
}

export function getV1FlowRunsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['flow-runs'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['flow-runs'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['flow-runs'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FlowRunsIdQueryKey>
  >({
    queryKey: getV1FlowRunsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['flow-runs'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1FlowRunsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['flow-runs'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['flow-runs'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['flow-runs'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1FlowRunsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1FlowRunsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1FlowRunsCancelMutationKey() {
  return ['v1', '/v1/flow-runs/cancel', 'POST'] as const
}

export function getPostV1FlowRunsCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['flow-runs']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['flow-runs']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1FlowRunsCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['flow-runs']['cancel']['$post']>) {
      return parseResponse(client.v1['flow-runs'].cancel.$post(args, options))
    },
  })
}

export function createPostV1FlowRunsCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['flow-runs']['cancel']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['flow-runs']['cancel']['$post']>,
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
    const mutationDefaults = getPostV1FlowRunsCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1AppConnectionsQueryKey(
  args: InferRequestType<(typeof client.v1)['app-connections']['$get']>,
) {
  return ['v1', '/v1/app-connections', args] as const
}

export function getV1AppConnectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['app-connections']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['app-connections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['app-connections']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppConnectionsQueryKey>
  >({
    queryKey: getV1AppConnectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['app-connections'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1AppConnections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['app-connections']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['app-connections']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['app-connections']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppConnectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AppConnectionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1AppConnectionsMutationKey() {
  return ['v1', '/v1/app-connections', 'POST'] as const
}

export function getPostV1AppConnectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['app-connections']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['app-connections']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppConnectionsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['app-connections']['$post']>) {
      return parseResponse(client.v1['app-connections'].$post(args, options))
    },
  })
}

export function createPostV1AppConnections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['app-connections']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['app-connections']['$post']>,
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
    const mutationDefaults = getPostV1AppConnectionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1AppConnectionsIdQueryKey(
  args: InferRequestType<(typeof client.v1)['app-connections'][':id']['$get']>,
) {
  return ['v1', '/v1/app-connections/:id', args] as const
}

export function getV1AppConnectionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['app-connections'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['app-connections'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['app-connections'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppConnectionsIdQueryKey>
  >({
    queryKey: getV1AppConnectionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['app-connections'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AppConnectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['app-connections'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['app-connections'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['app-connections'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppConnectionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AppConnectionsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1AppConnectionsIdMutationKey() {
  return ['v1', '/v1/app-connections/:id', 'POST'] as const
}

export function getPostV1AppConnectionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['app-connections'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['app-connections'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppConnectionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['app-connections'][':id']['$post']>,
    ) {
      return parseResponse(client.v1['app-connections'][':id'].$post(args, options))
    },
  })
}

export function createPostV1AppConnectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['app-connections'][':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['app-connections'][':id']['$post']>,
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
    const mutationDefaults = getPostV1AppConnectionsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1AppConnectionsIdMutationKey() {
  return ['v1', '/v1/app-connections/:id', 'DELETE'] as const
}

export function getDeleteV1AppConnectionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['app-connections'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1)['app-connections'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AppConnectionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['app-connections'][':id']['$delete']>,
    ) {
      return parseResponse(client.v1['app-connections'][':id'].$delete(args, options))
    },
  })
}

export function createDeleteV1AppConnectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['app-connections'][':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1)['app-connections'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteV1AppConnectionsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1AppConnectionsOwnersQueryKey(
  args: InferRequestType<(typeof client.v1)['app-connections']['owners']['$get']>,
) {
  return ['v1', '/v1/app-connections/owners', args] as const
}

export function getV1AppConnectionsOwnersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['app-connections']['owners']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['app-connections']['owners']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['app-connections']['owners']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppConnectionsOwnersQueryKey>
  >({
    queryKey: getV1AppConnectionsOwnersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['app-connections'].owners.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AppConnectionsOwners<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['app-connections']['owners']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['app-connections']['owners']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['app-connections']['owners']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppConnectionsOwnersQueryKey>
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
      ...getV1AppConnectionsOwnersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1AppConnectionsReplaceMutationKey() {
  return ['v1', '/v1/app-connections/replace', 'POST'] as const
}

export function getPostV1AppConnectionsReplaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['app-connections']['replace']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1)['app-connections']['replace']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppConnectionsReplaceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['app-connections']['replace']['$post']>,
    ) {
      return parseResponse(client.v1['app-connections'].replace.$post(args, options))
    },
  })
}

export function createPostV1AppConnectionsReplace<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['app-connections']['replace']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1)['app-connections']['replace']['$post']>,
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
    const mutationDefaults = getPostV1AppConnectionsReplaceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1AppConnectionsOauth2AuthorizationUrlMutationKey() {
  return ['v1', '/v1/app-connections/oauth2/authorization-url', 'POST'] as const
}

export function getPostV1AppConnectionsOauth2AuthorizationUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['app-connections']['oauth2']['authorization-url']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['app-connections']['oauth2']['authorization-url']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppConnectionsOauth2AuthorizationUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['app-connections']['oauth2']['authorization-url']['$post']
      >,
    ) {
      return parseResponse(
        client.v1['app-connections'].oauth2['authorization-url'].$post(args, options),
      )
    },
  })
}

export function createPostV1AppConnectionsOauth2AuthorizationUrl<
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
                  (typeof client.v1)['app-connections']['oauth2']['authorization-url']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1)['app-connections']['oauth2']['authorization-url']['$post']
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
    const mutationDefaults = getPostV1AppConnectionsOauth2AuthorizationUrlMutationOptions<
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

export function getV1VariablesQueryKey(args: InferRequestType<typeof client.v1.variables.$get>) {
  return ['v1', '/v1/variables', args] as const
}

export function getV1VariablesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.variables.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.variables.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.variables.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1VariablesQueryKey>
  >({
    queryKey: getV1VariablesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.variables.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Variables<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.variables.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.variables.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.variables.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1VariablesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1VariablesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1VariablesMutationKey() {
  return ['v1', '/v1/variables', 'POST'] as const
}

export function getPostV1VariablesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.variables.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.variables.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1VariablesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.variables.$post>) {
      return parseResponse(client.v1.variables.$post(args, options))
    },
  })
}

export function createPostV1Variables<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.variables.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.variables.$post>,
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
    const mutationDefaults = getPostV1VariablesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1VariablesIdMutationKey() {
  return ['v1', '/v1/variables/:id', 'POST'] as const
}

export function getPostV1VariablesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.variables)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.variables)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1VariablesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.variables)[':id']['$post']>) {
      return parseResponse(client.v1.variables[':id'].$post(args, options))
    },
  })
}

export function createPostV1VariablesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.variables)[':id']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.variables)[':id']['$post']>,
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
    const mutationDefaults = getPostV1VariablesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1VariablesIdMutationKey() {
  return ['v1', '/v1/variables/:id', 'DELETE'] as const
}

export function getDeleteV1VariablesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.variables)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.variables)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1VariablesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.variables)[':id']['$delete']>) {
      return parseResponse(client.v1.variables[':id'].$delete(args, options))
    },
  })
}

export function createDeleteV1VariablesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.variables)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.variables)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteV1VariablesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1PlatformsIdQueryKey(
  args: InferRequestType<(typeof client.v1.platforms)[':id']['$get']>,
) {
  return ['v1', '/v1/platforms/:id', args] as const
}

export function getV1PlatformsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.platforms)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.platforms)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.platforms)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PlatformsIdQueryKey>
  >({
    queryKey: getV1PlatformsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.platforms[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1PlatformsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.platforms)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.platforms)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.platforms)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PlatformsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1PlatformsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1ProjectsProjectIdMcpServerQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':projectId']['mcp-server']['$get']>,
) {
  return ['v1', '/v1/projects/:projectId/mcp-server', args] as const
}

export function getV1ProjectsProjectIdMcpServerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':projectId']['mcp-server']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':projectId']['mcp-server']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':projectId']['mcp-server']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectIdMcpServerQueryKey>
  >({
    queryKey: getV1ProjectsProjectIdMcpServerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':projectId']['mcp-server'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ProjectsProjectIdMcpServer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':projectId']['mcp-server']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.projects)[':projectId']['mcp-server']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':projectId']['mcp-server']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectIdMcpServerQueryKey>
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
      ...getV1ProjectsProjectIdMcpServerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1ProjectsProjectIdMcpServerMutationKey() {
  return ['v1', '/v1/projects/:projectId/mcp-server', 'POST'] as const
}

export function getPostV1ProjectsProjectIdMcpServerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':projectId']['mcp-server']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':projectId']['mcp-server']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectIdMcpServerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':projectId']['mcp-server']['$post']>,
    ) {
      return parseResponse(client.v1.projects[':projectId']['mcp-server'].$post(args, options))
    },
  })
}

export function createPostV1ProjectsProjectIdMcpServer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':projectId']['mcp-server']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':projectId']['mcp-server']['$post']>,
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
    const mutationDefaults = getPostV1ProjectsProjectIdMcpServerMutationOptions<
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

export function getPostV1ProjectsProjectIdMcpServerRotateMutationKey() {
  return ['v1', '/v1/projects/:projectId/mcp-server/rotate', 'POST'] as const
}

export function getPostV1ProjectsProjectIdMcpServerRotateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':projectId']['mcp-server']['rotate']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':projectId']['mcp-server']['rotate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectIdMcpServerRotateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':projectId']['mcp-server']['rotate']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':projectId']['mcp-server'].rotate.$post(args, options),
      )
    },
  })
}

export function createPostV1ProjectsProjectIdMcpServerRotate<
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
                  (typeof client.v1.projects)[':projectId']['mcp-server']['rotate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':projectId']['mcp-server']['rotate']['$post']
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
    const mutationDefaults = getPostV1ProjectsProjectIdMcpServerRotateMutationOptions<
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

export function getV1McpServerQueryKey() {
  return ['v1', '/v1/mcp-server'] as const
}

export function getV1McpServerQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['mcp-server']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['mcp-server']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1McpServerQueryKey>
  >({
    queryKey: getV1McpServerQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['mcp-server'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1McpServer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['mcp-server']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['mcp-server']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1McpServerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1McpServerQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostV1McpServerMutationKey() {
  return ['v1', '/v1/mcp-server', 'POST'] as const
}

export function getPostV1McpServerMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['mcp-server']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['mcp-server']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1McpServerMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['mcp-server']['$post']>) {
      return parseResponse(client.v1['mcp-server'].$post(args, options))
    },
  })
}

export function createPostV1McpServer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['mcp-server']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['mcp-server']['$post']>,
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
    const mutationDefaults = getPostV1McpServerMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1McpServerRotateMutationKey() {
  return ['v1', '/v1/mcp-server/rotate', 'POST'] as const
}

export function getPostV1McpServerRotateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['mcp-server']['rotate']['$post']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV1McpServerRotateMutationKey(),
    async mutationFn() {
      return parseResponse(client.v1['mcp-server'].rotate.$post(undefined, options))
    },
  })
}

export function createPostV1McpServerRotate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['mcp-server']['rotate']['$post']>>
            >
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPostV1McpServerRotateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1McpOauthApproveMutationKey() {
  return ['v1', '/v1/mcp-oauth/approve', 'POST'] as const
}

export function getPostV1McpOauthApproveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['mcp-oauth']['approve']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['mcp-oauth']['approve']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1McpOauthApproveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['mcp-oauth']['approve']['$post']>) {
      return parseResponse(client.v1['mcp-oauth'].approve.$post(args, options))
    },
  })
}

export function createPostV1McpOauthApprove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['mcp-oauth']['approve']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['mcp-oauth']['approve']['$post']>,
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
    const mutationDefaults = getPostV1McpOauthApproveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ProjectsProjectIdAgentToolsMcpValidateMutationKey() {
  return ['v1', '/v1/projects/:projectId/agent-tools/mcp/validate', 'POST'] as const
}

export function getPostV1ProjectsProjectIdAgentToolsMcpValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':projectId']['agent-tools']['mcp']['validate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':projectId']['agent-tools']['mcp']['validate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectIdAgentToolsMcpValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':projectId']['agent-tools']['mcp']['validate']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':projectId']['agent-tools'].mcp.validate.$post(args, options),
      )
    },
  })
}

export function createPostV1ProjectsProjectIdAgentToolsMcpValidate<
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
                  (typeof client.v1.projects)[':projectId']['agent-tools']['mcp']['validate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':projectId']['agent-tools']['mcp']['validate']['$post']
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
    const mutationDefaults = getPostV1ProjectsProjectIdAgentToolsMcpValidateMutationOptions<
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

export function getV1UsersQueryKey(args: InferRequestType<typeof client.v1.users.$get>) {
  return ['v1', '/v1/users', args] as const
}

export function getV1UsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1UsersQueryKey>
  >({
    queryKey: getV1UsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Users<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.users.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV1UsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1UsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1UsersIdQueryKey(
  args: InferRequestType<(typeof client.v1.users)[':id']['$get']>,
) {
  return ['v1', '/v1/users/:id', args] as const
}

export function getV1UsersIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v1.users)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1UsersIdQueryKey>
  >({
    queryKey: getV1UsersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.users[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1UsersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.users)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1UsersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1UsersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1UsersIdMutationKey() {
  return ['v1', '/v1/users/:id', 'POST'] as const
}

export function getPostV1UsersIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.users)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1UsersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.users)[':id']['$post']>) {
      return parseResponse(client.v1.users[':id'].$post(args, options))
    },
  })
}

export function createPostV1UsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':id']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.users)[':id']['$post']>,
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
    const mutationDefaults = getPostV1UsersIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1UsersIdMutationKey() {
  return ['v1', '/v1/users/:id', 'DELETE'] as const
}

export function getDeleteV1UsersIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.users)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1UsersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.users)[':id']['$delete']>) {
      return parseResponse(client.v1.users[':id'].$delete(args, options))
    },
  })
}

export function createDeleteV1UsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':id']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.users)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteV1UsersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1UserInvitationsQueryKey(
  args: InferRequestType<(typeof client.v1)['user-invitations']['$get']>,
) {
  return ['v1', '/v1/user-invitations', args] as const
}

export function getV1UserInvitationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['user-invitations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['user-invitations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['user-invitations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UserInvitationsQueryKey>
  >({
    queryKey: getV1UserInvitationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['user-invitations'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1UserInvitations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['user-invitations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['user-invitations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['user-invitations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1UserInvitationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1UserInvitationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1UserInvitationsMutationKey() {
  return ['v1', '/v1/user-invitations', 'POST'] as const
}

export function getPostV1UserInvitationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['user-invitations']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['user-invitations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1UserInvitationsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['user-invitations']['$post']>) {
      return parseResponse(client.v1['user-invitations'].$post(args, options))
    },
  })
}

export function createPostV1UserInvitations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['user-invitations']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['user-invitations']['$post']>,
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
    const mutationDefaults = getPostV1UserInvitationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1UserInvitationsIdMutationKey() {
  return ['v1', '/v1/user-invitations/:id', 'DELETE'] as const
}

export function getDeleteV1UserInvitationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['user-invitations'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1)['user-invitations'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1UserInvitationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['user-invitations'][':id']['$delete']>,
    ) {
      return parseResponse(client.v1['user-invitations'][':id'].$delete(args, options))
    },
  })
}

export function createDeleteV1UserInvitationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['user-invitations'][':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1)['user-invitations'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteV1UserInvitationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1WorkerMachinesQueueMetricsQueryKey() {
  return ['v1', '/v1/worker-machines/queue-metrics'] as const
}

export function getV1WorkerMachinesQueueMetricsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['worker-machines']['queue-metrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['worker-machines']['queue-metrics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkerMachinesQueueMetricsQueryKey>
  >({
    queryKey: getV1WorkerMachinesQueueMetricsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['worker-machines']['queue-metrics'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkerMachinesQueueMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['worker-machines']['queue-metrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['worker-machines']['queue-metrics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1WorkerMachinesQueueMetricsQueryKey>
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
      ...getV1WorkerMachinesQueueMetricsQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1TablesIdQueryKey(
  args: InferRequestType<(typeof client.v1.tables)[':id']['$get']>,
) {
  return ['v1', '/v1/tables/:id', args] as const
}

export function getV1TablesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tables)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.tables)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tables)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TablesIdQueryKey>
  >({
    queryKey: getV1TablesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.tables[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1TablesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tables)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.tables)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tables)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TablesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1TablesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1TablesIdMutationKey() {
  return ['v1', '/v1/tables/:id', 'POST'] as const
}

export function getPostV1TablesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tables)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.tables)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TablesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.tables)[':id']['$post']>) {
      return parseResponse(client.v1.tables[':id'].$post(args, options))
    },
  })
}

export function createPostV1TablesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tables)[':id']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.tables)[':id']['$post']>,
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
    const mutationDefaults = getPostV1TablesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1TablesIdMutationKey() {
  return ['v1', '/v1/tables/:id', 'DELETE'] as const
}

export function getDeleteV1TablesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tables)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.tables)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TablesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.tables)[':id']['$delete']>) {
      return parseResponse(client.v1.tables[':id'].$delete(args, options))
    },
  })
}

export function createDeleteV1TablesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tables)[':id']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.tables)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteV1TablesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1TablesQueryKey(args: InferRequestType<typeof client.v1.tables.$get>) {
  return ['v1', '/v1/tables', args] as const
}

export function getV1TablesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tables.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.tables.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tables.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1TablesQueryKey>
  >({
    queryKey: getV1TablesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.tables.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Tables<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tables.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.tables.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tables.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1TablesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1TablesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1TablesIdTemplateQueryKey(
  args: InferRequestType<(typeof client.v1.tables)[':id']['template']['$get']>,
) {
  return ['v1', '/v1/tables/:id/template', args] as const
}

export function getV1TablesIdTemplateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.tables)[':id']['template']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.tables)[':id']['template']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.tables)[':id']['template']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TablesIdTemplateQueryKey>
  >({
    queryKey: getV1TablesIdTemplateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.tables[':id'].template.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1TablesIdTemplate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.tables)[':id']['template']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.tables)[':id']['template']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.tables)[':id']['template']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TablesIdTemplateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1TablesIdTemplateQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1TablesCountQueryKey(
  args: InferRequestType<typeof client.v1.tables.count.$get>,
) {
  return ['v1', '/v1/tables/count', args] as const
}

export function getV1TablesCountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tables.count.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.tables.count.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tables.count.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1TablesCountQueryKey>
  >({
    queryKey: getV1TablesCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.tables.count.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1TablesCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tables.count.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.tables.count.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tables.count.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1TablesCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1TablesCountQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1TablesIdExportQueryKey(
  args: InferRequestType<(typeof client.v1.tables)[':id']['export']['$get']>,
) {
  return ['v1', '/v1/tables/:id/export', args] as const
}

export function getV1TablesIdExportQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tables)[':id']['export']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.tables)[':id']['export']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.tables)[':id']['export']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TablesIdExportQueryKey>
  >({
    queryKey: getV1TablesIdExportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.tables[':id'].export.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1TablesIdExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tables)[':id']['export']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.tables)[':id']['export']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.tables)[':id']['export']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TablesIdExportQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1TablesIdExportQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1TablesIdWebhooksMutationKey() {
  return ['v1', '/v1/tables/:id/webhooks', 'POST'] as const
}

export function getPostV1TablesIdWebhooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.tables)[':id']['webhooks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.tables)[':id']['webhooks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TablesIdWebhooksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.tables)[':id']['webhooks']['$post']>,
    ) {
      return parseResponse(client.v1.tables[':id'].webhooks.$post(args, options))
    },
  })
}

export function createPostV1TablesIdWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.tables)[':id']['webhooks']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.tables)[':id']['webhooks']['$post']>,
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
    const mutationDefaults = getPostV1TablesIdWebhooksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1TablesIdWebhooksWebhookIdMutationKey() {
  return ['v1', '/v1/tables/:id/webhooks/:webhookId', 'DELETE'] as const
}

export function getDeleteV1TablesIdWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.tables)[':id']['webhooks'][':webhookId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.tables)[':id']['webhooks'][':webhookId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TablesIdWebhooksWebhookIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.tables)[':id']['webhooks'][':webhookId']['$delete']>,
    ) {
      return parseResponse(client.v1.tables[':id'].webhooks[':webhookId'].$delete(args, options))
    },
  })
}

export function createDeleteV1TablesIdWebhooksWebhookId<
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
                ReturnType<(typeof client.v1.tables)[':id']['webhooks'][':webhookId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.tables)[':id']['webhooks'][':webhookId']['$delete']>,
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
    const mutationDefaults = getDeleteV1TablesIdWebhooksWebhookIdMutationOptions<
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

export function getPostV1TablesIdClearMutationKey() {
  return ['v1', '/v1/tables/:id/clear', 'POST'] as const
}

export function getPostV1TablesIdClearMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.tables)[':id']['clear']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.tables)[':id']['clear']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TablesIdClearMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.tables)[':id']['clear']['$post']>) {
      return parseResponse(client.v1.tables[':id'].clear.$post(args, options))
    },
  })
}

export function createPostV1TablesIdClear<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.tables)[':id']['clear']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.tables)[':id']['clear']['$post']>,
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
    const mutationDefaults = getPostV1TablesIdClearMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1RecordsIdMutationKey() {
  return ['v1', '/v1/records/:id', 'POST'] as const
}

export function getPostV1RecordsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.records)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.records)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1RecordsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.records)[':id']['$post']>) {
      return parseResponse(client.v1.records[':id'].$post(args, options))
    },
  })
}

export function createPostV1RecordsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.records)[':id']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.records)[':id']['$post']>,
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
    const mutationDefaults = getPostV1RecordsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1RecordsQueryKey(args: InferRequestType<typeof client.v1.records.$get>) {
  return ['v1', '/v1/records', args] as const
}

export function getV1RecordsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.records.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.records.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.records.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1RecordsQueryKey>
  >({
    queryKey: getV1RecordsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.records.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Records<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.records.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.records.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.records.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1RecordsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1RecordsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteV1RecordsMutationKey() {
  return ['v1', '/v1/records', 'DELETE'] as const
}

export function getDeleteV1RecordsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.records.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.records.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1RecordsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.records.$delete>) {
      return parseResponse(client.v1.records.$delete(args, options))
    },
  })
}

export function createDeleteV1Records<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.records.$delete>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.records.$delete>,
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
    const mutationDefaults = getDeleteV1RecordsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1KnowledgeBaseFilesQueryKey(
  args: InferRequestType<(typeof client.v1)['knowledge-base']['files']['$get']>,
) {
  return ['v1', '/v1/knowledge-base/files', args] as const
}

export function getV1KnowledgeBaseFilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['knowledge-base']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['knowledge-base']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['knowledge-base']['files']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1KnowledgeBaseFilesQueryKey>
  >({
    queryKey: getV1KnowledgeBaseFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['knowledge-base'].files.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1KnowledgeBaseFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['knowledge-base']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['knowledge-base']['files']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['knowledge-base']['files']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1KnowledgeBaseFilesQueryKey>
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
      ...getV1KnowledgeBaseFilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1KnowledgeBaseFilesMutationKey() {
  return ['v1', '/v1/knowledge-base/files', 'POST'] as const
}

export function getPostV1KnowledgeBaseFilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['knowledge-base']['files']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['knowledge-base']['files']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1KnowledgeBaseFilesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['knowledge-base']['files']['$post']>,
    ) {
      return parseResponse(client.v1['knowledge-base'].files.$post(args, options))
    },
  })
}

export function createPostV1KnowledgeBaseFiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['knowledge-base']['files']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['knowledge-base']['files']['$post']>,
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
    const mutationDefaults = getPostV1KnowledgeBaseFilesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1KnowledgeBaseFilesUploadMutationKey() {
  return ['v1', '/v1/knowledge-base/files/upload', 'POST'] as const
}

export function getPostV1KnowledgeBaseFilesUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['knowledge-base']['files']['upload']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['knowledge-base']['files']['upload']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1KnowledgeBaseFilesUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['knowledge-base']['files']['upload']['$post']>,
    ) {
      return parseResponse(client.v1['knowledge-base'].files.upload.$post(args, options))
    },
  })
}

export function createPostV1KnowledgeBaseFilesUpload<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['knowledge-base']['files']['upload']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['knowledge-base']['files']['upload']['$post']>,
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
    const mutationDefaults = getPostV1KnowledgeBaseFilesUploadMutationOptions<
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

export function getDeleteV1KnowledgeBaseFilesIdMutationKey() {
  return ['v1', '/v1/knowledge-base/files/:id', 'DELETE'] as const
}

export function getDeleteV1KnowledgeBaseFilesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['knowledge-base']['files'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['knowledge-base']['files'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1KnowledgeBaseFilesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['knowledge-base']['files'][':id']['$delete']>,
    ) {
      return parseResponse(client.v1['knowledge-base'].files[':id'].$delete(args, options))
    },
  })
}

export function createDeleteV1KnowledgeBaseFilesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['knowledge-base']['files'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['knowledge-base']['files'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteV1KnowledgeBaseFilesIdMutationOptions<
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

export function getV1KnowledgeBaseFilesIdChunksCountQueryKey(
  args: InferRequestType<
    (typeof client.v1)['knowledge-base']['files'][':id']['chunks']['count']['$get']
  >,
) {
  return ['v1', '/v1/knowledge-base/files/:id/chunks/count', args] as const
}

export function getV1KnowledgeBaseFilesIdChunksCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)['knowledge-base']['files'][':id']['chunks']['count']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1)['knowledge-base']['files'][':id']['chunks']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['knowledge-base']['files'][':id']['chunks']['count']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1KnowledgeBaseFilesIdChunksCountQueryKey>
  >({
    queryKey: getV1KnowledgeBaseFilesIdChunksCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['knowledge-base'].files[':id'].chunks.count.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1KnowledgeBaseFilesIdChunksCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)['knowledge-base']['files'][':id']['chunks']['count']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1)['knowledge-base']['files'][':id']['chunks']['count']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1)['knowledge-base']['files'][':id']['chunks']['count']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1KnowledgeBaseFilesIdChunksCountQueryKey>
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
      ...getV1KnowledgeBaseFilesIdChunksCountQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1KnowledgeBaseFilesIdExtractChunksMutationKey() {
  return ['v1', '/v1/knowledge-base/files/:id/extract-chunks', 'POST'] as const
}

export function getPostV1KnowledgeBaseFilesIdExtractChunksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['knowledge-base']['files'][':id']['extract-chunks']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)['knowledge-base']['files'][':id']['extract-chunks']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1KnowledgeBaseFilesIdExtractChunksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['knowledge-base']['files'][':id']['extract-chunks']['$post']
      >,
    ) {
      return parseResponse(
        client.v1['knowledge-base'].files[':id']['extract-chunks'].$post(args, options),
      )
    },
  })
}

export function createPostV1KnowledgeBaseFilesIdExtractChunks<
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
                  (typeof client.v1)['knowledge-base']['files'][':id']['extract-chunks']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1)['knowledge-base']['files'][':id']['extract-chunks']['$post']
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
    const mutationDefaults = getPostV1KnowledgeBaseFilesIdExtractChunksMutationOptions<
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

export function getPostV1KnowledgeBaseFilesIdStoreChunksMutationKey() {
  return ['v1', '/v1/knowledge-base/files/:id/store-chunks', 'POST'] as const
}

export function getPostV1KnowledgeBaseFilesIdStoreChunksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['knowledge-base']['files'][':id']['store-chunks']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['knowledge-base']['files'][':id']['store-chunks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1KnowledgeBaseFilesIdStoreChunksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['knowledge-base']['files'][':id']['store-chunks']['$post']
      >,
    ) {
      return parseResponse(
        client.v1['knowledge-base'].files[':id']['store-chunks'].$post(args, options),
      )
    },
  })
}

export function createPostV1KnowledgeBaseFilesIdStoreChunks<
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
                  (typeof client.v1)['knowledge-base']['files'][':id']['store-chunks']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1)['knowledge-base']['files'][':id']['store-chunks']['$post']
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
    const mutationDefaults = getPostV1KnowledgeBaseFilesIdStoreChunksMutationOptions<
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

export function getV1KnowledgeBaseFilesIdChunksQueryKey(
  args: InferRequestType<(typeof client.v1)['knowledge-base']['files'][':id']['chunks']['$get']>,
) {
  return ['v1', '/v1/knowledge-base/files/:id/chunks', args] as const
}

export function getV1KnowledgeBaseFilesIdChunksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['knowledge-base']['files'][':id']['chunks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['knowledge-base']['files'][':id']['chunks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['knowledge-base']['files'][':id']['chunks']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1KnowledgeBaseFilesIdChunksQueryKey>
  >({
    queryKey: getV1KnowledgeBaseFilesIdChunksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['knowledge-base'].files[':id'].chunks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1KnowledgeBaseFilesIdChunks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['knowledge-base']['files'][':id']['chunks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1)['knowledge-base']['files'][':id']['chunks']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1)['knowledge-base']['files'][':id']['chunks']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1KnowledgeBaseFilesIdChunksQueryKey>
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
      ...getV1KnowledgeBaseFilesIdChunksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1KnowledgeBaseFilesSearchMutationKey() {
  return ['v1', '/v1/knowledge-base/files/search', 'POST'] as const
}

export function getPostV1KnowledgeBaseFilesSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['knowledge-base']['files']['search']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['knowledge-base']['files']['search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1KnowledgeBaseFilesSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['knowledge-base']['files']['search']['$post']>,
    ) {
      return parseResponse(client.v1['knowledge-base'].files.search.$post(args, options))
    },
  })
}

export function createPostV1KnowledgeBaseFilesSearch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['knowledge-base']['files']['search']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['knowledge-base']['files']['search']['$post']>,
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
    const mutationDefaults = getPostV1KnowledgeBaseFilesSearchMutationOptions<
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

export function getV1TemplatesIdQueryKey(
  args: InferRequestType<(typeof client.v1.templates)[':id']['$get']>,
) {
  return ['v1', '/v1/templates/:id', args] as const
}

export function getV1TemplatesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.templates)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.templates)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.templates)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TemplatesIdQueryKey>
  >({
    queryKey: getV1TemplatesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.templates[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1TemplatesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.templates)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.templates)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.templates)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TemplatesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1TemplatesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1TemplatesIdMutationKey() {
  return ['v1', '/v1/templates/:id', 'POST'] as const
}

export function getPostV1TemplatesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.templates)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.templates)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TemplatesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.templates)[':id']['$post']>) {
      return parseResponse(client.v1.templates[':id'].$post(args, options))
    },
  })
}

export function createPostV1TemplatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.templates)[':id']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.templates)[':id']['$post']>,
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
    const mutationDefaults = getPostV1TemplatesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1TemplatesIdMutationKey() {
  return ['v1', '/v1/templates/:id', 'DELETE'] as const
}

export function getDeleteV1TemplatesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.templates)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.templates)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TemplatesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.templates)[':id']['$delete']>) {
      return parseResponse(client.v1.templates[':id'].$delete(args, options))
    },
  })
}

export function createDeleteV1TemplatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.templates)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.templates)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteV1TemplatesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1TemplatesCategoriesQueryKey() {
  return ['v1', '/v1/templates/categories'] as const
}

export function getV1TemplatesCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.templates.categories.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.templates.categories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TemplatesCategoriesQueryKey>
  >({
    queryKey: getV1TemplatesCategoriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.templates.categories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1TemplatesCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.templates.categories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.templates.categories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TemplatesCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1TemplatesCategoriesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV1TemplatesQueryKey(args: InferRequestType<typeof client.v1.templates.$get>) {
  return ['v1', '/v1/templates', args] as const
}

export function getV1TemplatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.templates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.templates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.templates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1TemplatesQueryKey>
  >({
    queryKey: getV1TemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.templates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Templates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.templates.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.templates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1TemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1TemplatesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1TemplatesMutationKey() {
  return ['v1', '/v1/templates', 'POST'] as const
}

export function getPostV1TemplatesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.templates.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.templates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TemplatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.templates.$post>) {
      return parseResponse(client.v1.templates.$post(args, options))
    },
  })
}

export function createPostV1Templates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.templates.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.templates.$post>,
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
    const mutationDefaults = getPostV1TemplatesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ProjectsQueryKey(args: InferRequestType<typeof client.v1.projects.$get>) {
  return ['v1', '/v1/projects', args] as const
}

export function getV1ProjectsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.projects.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsQueryKey>
  >({
    queryKey: getV1ProjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Projects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.projects.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ProjectsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1ProjectsMutationKey() {
  return ['v1', '/v1/projects', 'POST'] as const
}

export function getPostV1ProjectsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.projects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.projects.$post>) {
      return parseResponse(client.v1.projects.$post(args, options))
    },
  })
}

export function createPostV1Projects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.projects.$post>,
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
    const mutationDefaults = getPostV1ProjectsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ProjectsIdMutationKey() {
  return ['v1', '/v1/projects/:id', 'POST'] as const
}

export function getPostV1ProjectsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.projects)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.projects)[':id']['$post']>) {
      return parseResponse(client.v1.projects[':id'].$post(args, options))
    },
  })
}

export function createPostV1ProjectsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.projects)[':id']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':id']['$post']>,
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
    const mutationDefaults = getPostV1ProjectsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1ProjectsIdMutationKey() {
  return ['v1', '/v1/projects/:id', 'DELETE'] as const
}

export function getDeleteV1ProjectsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.projects)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.projects)[':id']['$delete']>) {
      return parseResponse(client.v1.projects[':id'].$delete(args, options))
    },
  })
}

export function createDeleteV1ProjectsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.projects)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteV1ProjectsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ProjectMembersQueryKey(
  args: InferRequestType<(typeof client.v1)['project-members']['$get']>,
) {
  return ['v1', '/v1/project-members', args] as const
}

export function getV1ProjectMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['project-members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['project-members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['project-members']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectMembersQueryKey>
  >({
    queryKey: getV1ProjectMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['project-members'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1ProjectMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['project-members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['project-members']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['project-members']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ProjectMembersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteV1ProjectMembersIdMutationKey() {
  return ['v1', '/v1/project-members/:id', 'DELETE'] as const
}

export function getDeleteV1ProjectMembersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['project-members'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1)['project-members'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectMembersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['project-members'][':id']['$delete']>,
    ) {
      return parseResponse(client.v1['project-members'][':id'].$delete(args, options))
    },
  })
}

export function createDeleteV1ProjectMembersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['project-members'][':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1)['project-members'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteV1ProjectMembersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1PiecesMutationKey() {
  return ['v1', '/v1/pieces', 'POST'] as const
}

export function getPostV1PiecesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.pieces.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.pieces.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PiecesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.pieces.$post>) {
      return parseResponse(client.v1.pieces.$post(args, options))
    },
  })
}

export function createPostV1Pieces<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.pieces.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.pieces.$post>,
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
    const mutationDefaults = getPostV1PiecesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1GitReposMutationKey() {
  return ['v1', '/v1/git-repos', 'POST'] as const
}

export function getPostV1GitReposMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['git-repos']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['git-repos']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1GitReposMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['git-repos']['$post']>) {
      return parseResponse(client.v1['git-repos'].$post(args, options))
    },
  })
}

export function createPostV1GitRepos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['git-repos']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['git-repos']['$post']>,
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
    const mutationDefaults = getPostV1GitReposMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1EventDestinationsQueryKey(
  args: InferRequestType<(typeof client.v1)['event-destinations']['$get']>,
) {
  return ['v1', '/v1/event-destinations', args] as const
}

export function getV1EventDestinationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['event-destinations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['event-destinations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['event-destinations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EventDestinationsQueryKey>
  >({
    queryKey: getV1EventDestinationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['event-destinations'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1EventDestinations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['event-destinations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['event-destinations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['event-destinations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EventDestinationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1EventDestinationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1ProjectRolesIdProjectMembersQueryKey(
  args: InferRequestType<(typeof client.v1)['project-roles'][':id']['project-members']['$get']>,
) {
  return ['v1', '/v1/project-roles/:id/project-members', args] as const
}

export function getV1ProjectRolesIdProjectMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['project-roles'][':id']['project-members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['project-roles'][':id']['project-members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['project-roles'][':id']['project-members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectRolesIdProjectMembersQueryKey>
  >({
    queryKey: getV1ProjectRolesIdProjectMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['project-roles'][':id']['project-members'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ProjectRolesIdProjectMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['project-roles'][':id']['project-members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1)['project-roles'][':id']['project-members']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1)['project-roles'][':id']['project-members']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectRolesIdProjectMembersQueryKey>
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
      ...getV1ProjectRolesIdProjectMembersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1ProjectReleasesMutationKey() {
  return ['v1', '/v1/project-releases', 'POST'] as const
}

export function getPostV1ProjectReleasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['project-releases']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['project-releases']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectReleasesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['project-releases']['$post']>) {
      return parseResponse(client.v1['project-releases'].$post(args, options))
    },
  })
}

export function createPostV1ProjectReleases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['project-releases']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['project-releases']['$post']>,
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
    const mutationDefaults = getPostV1ProjectReleasesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1GlobalConnectionsQueryKey(
  args: InferRequestType<(typeof client.v1)['global-connections']['$get']>,
) {
  return ['v1', '/v1/global-connections', args] as const
}

export function getV1GlobalConnectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['global-connections']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['global-connections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['global-connections']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1GlobalConnectionsQueryKey>
  >({
    queryKey: getV1GlobalConnectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['global-connections'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1GlobalConnections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['global-connections']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['global-connections']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['global-connections']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1GlobalConnectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1GlobalConnectionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1GlobalConnectionsMutationKey() {
  return ['v1', '/v1/global-connections', 'POST'] as const
}

export function getPostV1GlobalConnectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['global-connections']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['global-connections']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1GlobalConnectionsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['global-connections']['$post']>) {
      return parseResponse(client.v1['global-connections'].$post(args, options))
    },
  })
}

export function createPostV1GlobalConnections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['global-connections']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['global-connections']['$post']>,
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
    const mutationDefaults = getPostV1GlobalConnectionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1GlobalConnectionsIdMutationKey() {
  return ['v1', '/v1/global-connections/:id', 'POST'] as const
}

export function getPostV1GlobalConnectionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['global-connections'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['global-connections'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1GlobalConnectionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['global-connections'][':id']['$post']>,
    ) {
      return parseResponse(client.v1['global-connections'][':id'].$post(args, options))
    },
  })
}

export function createPostV1GlobalConnectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['global-connections'][':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['global-connections'][':id']['$post']>,
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
    const mutationDefaults = getPostV1GlobalConnectionsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1GlobalConnectionsIdMutationKey() {
  return ['v1', '/v1/global-connections/:id', 'DELETE'] as const
}

export function getDeleteV1GlobalConnectionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['global-connections'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1)['global-connections'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1GlobalConnectionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['global-connections'][':id']['$delete']>,
    ) {
      return parseResponse(client.v1['global-connections'][':id'].$delete(args, options))
    },
  })
}

export function createDeleteV1GlobalConnectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['global-connections'][':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1)['global-connections'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteV1GlobalConnectionsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1EmbedSubdomainAllowedEmbedOriginsMutationKey() {
  return ['v1', '/v1/embed-subdomain/allowed-embed-origins', 'POST'] as const
}

export function getPostV1EmbedSubdomainAllowedEmbedOriginsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['embed-subdomain']['allowed-embed-origins']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['embed-subdomain']['allowed-embed-origins']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1EmbedSubdomainAllowedEmbedOriginsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['embed-subdomain']['allowed-embed-origins']['$post']
      >,
    ) {
      return parseResponse(
        client.v1['embed-subdomain']['allowed-embed-origins'].$post(args, options),
      )
    },
  })
}

export function createPostV1EmbedSubdomainAllowedEmbedOrigins<
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
                ReturnType<(typeof client.v1)['embed-subdomain']['allowed-embed-origins']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['embed-subdomain']['allowed-embed-origins']['$post']>,
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
    const mutationDefaults = getPostV1EmbedSubdomainAllowedEmbedOriginsMutationOptions<
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

export function getV1AgentsConversationsQueryKey(
  args: InferRequestType<typeof client.v1.agents.conversations.$get>,
) {
  return ['v1', '/v1/agents/conversations', args] as const
}

export function getV1AgentsConversationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.conversations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.agents.conversations.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.conversations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AgentsConversationsQueryKey>
  >({
    queryKey: getV1AgentsConversationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.agents.conversations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AgentsConversations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.conversations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.agents.conversations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.conversations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AgentsConversationsQueryKey>
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
      ...getV1AgentsConversationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1AgentsConversationsMutationKey() {
  return ['v1', '/v1/agents/conversations', 'POST'] as const
}

export function getPostV1AgentsConversationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.conversations.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.agents.conversations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AgentsConversationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.agents.conversations.$post>) {
      return parseResponse(client.v1.agents.conversations.$post(args, options))
    },
  })
}

export function createPostV1AgentsConversations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.conversations.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.agents.conversations.$post>,
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
    const mutationDefaults = getPostV1AgentsConversationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1AgentsConversationsIdQueryKey(
  args: InferRequestType<(typeof client.v1.agents.conversations)[':id']['$get']>,
) {
  return ['v1', '/v1/agents/conversations/:id', args] as const
}

export function getV1AgentsConversationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.agents.conversations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.agents.conversations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.agents.conversations)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AgentsConversationsIdQueryKey>
  >({
    queryKey: getV1AgentsConversationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.agents.conversations[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AgentsConversationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.agents.conversations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.agents.conversations)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.agents.conversations)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AgentsConversationsIdQueryKey>
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
      ...getV1AgentsConversationsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1AgentsConversationsIdMutationKey() {
  return ['v1', '/v1/agents/conversations/:id', 'POST'] as const
}

export function getPostV1AgentsConversationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.agents.conversations)[':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.agents.conversations)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AgentsConversationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.agents.conversations)[':id']['$post']>,
    ) {
      return parseResponse(client.v1.agents.conversations[':id'].$post(args, options))
    },
  })
}

export function createPostV1AgentsConversationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.agents.conversations)[':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.agents.conversations)[':id']['$post']>,
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
    const mutationDefaults = getPostV1AgentsConversationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1AgentsConversationsIdMutationKey() {
  return ['v1', '/v1/agents/conversations/:id', 'DELETE'] as const
}

export function getDeleteV1AgentsConversationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.agents.conversations)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.agents.conversations)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AgentsConversationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.agents.conversations)[':id']['$delete']>,
    ) {
      return parseResponse(client.v1.agents.conversations[':id'].$delete(args, options))
    },
  })
}

export function createDeleteV1AgentsConversationsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.agents.conversations)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.agents.conversations)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteV1AgentsConversationsIdMutationOptions<
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

export function getV1AgentsConversationsIdMessagesQueryKey(
  args: InferRequestType<(typeof client.v1.agents.conversations)[':id']['messages']['$get']>,
) {
  return ['v1', '/v1/agents/conversations/:id/messages', args] as const
}

export function getV1AgentsConversationsIdMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.agents.conversations)[':id']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.agents.conversations)[':id']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.agents.conversations)[':id']['messages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AgentsConversationsIdMessagesQueryKey>
  >({
    queryKey: getV1AgentsConversationsIdMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.agents.conversations[':id'].messages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AgentsConversationsIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.agents.conversations)[':id']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.agents.conversations)[':id']['messages']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.agents.conversations)[':id']['messages']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AgentsConversationsIdMessagesQueryKey>
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
      ...getV1AgentsConversationsIdMessagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1AgentsConversationsIdMessagesMutationKey() {
  return ['v1', '/v1/agents/conversations/:id/messages', 'POST'] as const
}

export function getPostV1AgentsConversationsIdMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.agents.conversations)[':id']['messages']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.agents.conversations)[':id']['messages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AgentsConversationsIdMessagesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.agents.conversations)[':id']['messages']['$post']>,
    ) {
      return parseResponse(client.v1.agents.conversations[':id'].messages.$post(args, options))
    },
  })
}

export function createPostV1AgentsConversationsIdMessages<
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
                ReturnType<(typeof client.v1.agents.conversations)[':id']['messages']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.agents.conversations)[':id']['messages']['$post']>,
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
    const mutationDefaults = getPostV1AgentsConversationsIdMessagesMutationOptions<
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

export function getPostV1AgentsToolApprovalsGateIdMutationKey() {
  return ['v1', '/v1/agents/tool-approvals/:gateId', 'POST'] as const
}

export function getPostV1AgentsToolApprovalsGateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.agents)['tool-approvals'][':gateId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.agents)['tool-approvals'][':gateId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AgentsToolApprovalsGateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.agents)['tool-approvals'][':gateId']['$post']>,
    ) {
      return parseResponse(client.v1.agents['tool-approvals'][':gateId'].$post(args, options))
    },
  })
}

export function createPostV1AgentsToolApprovalsGateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.agents)['tool-approvals'][':gateId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.agents)['tool-approvals'][':gateId']['$post']>,
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
    const mutationDefaults = getPostV1AgentsToolApprovalsGateIdMutationOptions<
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

export function getPostV1PlatformConfigurationsMutationKey() {
  return ['v1', '/v1/platform-configurations', 'POST'] as const
}

export function getPostV1PlatformConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['platform-configurations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['platform-configurations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PlatformConfigurationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['platform-configurations']['$post']>,
    ) {
      return parseResponse(client.v1['platform-configurations'].$post(args, options))
    },
  })
}

export function createPostV1PlatformConfigurations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['platform-configurations']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['platform-configurations']['$post']>,
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
    const mutationDefaults = getPostV1PlatformConfigurationsMutationOptions<
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

export function getV1AiProvidersConfigsQueryKey() {
  return ['v1', '/v1/ai-providers/configs'] as const
}

export function getV1AiProvidersConfigsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['ai-providers']['configs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['ai-providers']['configs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AiProvidersConfigsQueryKey>
  >({
    queryKey: getV1AiProvidersConfigsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['ai-providers'].configs.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AiProvidersConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['ai-providers']['configs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['ai-providers']['configs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AiProvidersConfigsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AiProvidersConfigsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV1AiProvidersConfigsIdModelsQueryKey(
  args: InferRequestType<(typeof client.v1)['ai-providers']['configs'][':id']['models']['$get']>,
) {
  return ['v1', '/v1/ai-providers/configs/:id/models', args] as const
}

export function getV1AiProvidersConfigsIdModelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['ai-providers']['configs'][':id']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['ai-providers']['configs'][':id']['models']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['ai-providers']['configs'][':id']['models']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AiProvidersConfigsIdModelsQueryKey>
  >({
    queryKey: getV1AiProvidersConfigsIdModelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['ai-providers'].configs[':id'].models.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AiProvidersConfigsIdModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['ai-providers']['configs'][':id']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1)['ai-providers']['configs'][':id']['models']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1)['ai-providers']['configs'][':id']['models']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AiProvidersConfigsIdModelsQueryKey>
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
      ...getV1AiProvidersConfigsIdModelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1AiProvidersConfigsIdSuggestedModelsQueryKey(
  args: InferRequestType<
    (typeof client.v1)['ai-providers']['configs'][':id']['suggested-models']['$get']
  >,
) {
  return ['v1', '/v1/ai-providers/configs/:id/suggested-models', args] as const
}

export function getV1AiProvidersConfigsIdSuggestedModelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)['ai-providers']['configs'][':id']['suggested-models']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1)['ai-providers']['configs'][':id']['suggested-models']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['ai-providers']['configs'][':id']['suggested-models']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AiProvidersConfigsIdSuggestedModelsQueryKey>
  >({
    queryKey: getV1AiProvidersConfigsIdSuggestedModelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['ai-providers'].configs[':id']['suggested-models'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AiProvidersConfigsIdSuggestedModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)['ai-providers']['configs'][':id']['suggested-models']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1)['ai-providers']['configs'][':id']['suggested-models']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1)['ai-providers']['configs'][':id']['suggested-models']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AiProvidersConfigsIdSuggestedModelsQueryKey>
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
      ...getV1AiProvidersConfigsIdSuggestedModelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1AiProvidersModelOptionsPlatformQueryKey(
  args: InferRequestType<(typeof client.v1)['ai-providers']['model-options']['platform']['$get']>,
) {
  return ['v1', '/v1/ai-providers/model-options/platform', args] as const
}

export function getV1AiProvidersModelOptionsPlatformQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['ai-providers']['model-options']['platform']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['ai-providers']['model-options']['platform']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['ai-providers']['model-options']['platform']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AiProvidersModelOptionsPlatformQueryKey>
  >({
    queryKey: getV1AiProvidersModelOptionsPlatformQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['ai-providers']['model-options'].platform.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AiProvidersModelOptionsPlatform<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['ai-providers']['model-options']['platform']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1)['ai-providers']['model-options']['platform']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1)['ai-providers']['model-options']['platform']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AiProvidersModelOptionsPlatformQueryKey>
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
      ...getV1AiProvidersModelOptionsPlatformQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1AiProvidersMutationKey() {
  return ['v1', '/v1/ai-providers', 'POST'] as const
}

export function getPostV1AiProvidersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['ai-providers']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['ai-providers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AiProvidersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['ai-providers']['$post']>) {
      return parseResponse(client.v1['ai-providers'].$post(args, options))
    },
  })
}

export function createPostV1AiProviders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['ai-providers']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['ai-providers']['$post']>,
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
    const mutationDefaults = getPostV1AiProvidersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1AiProvidersIdRecheckMutationKey() {
  return ['v1', '/v1/ai-providers/:id/recheck', 'POST'] as const
}

export function getPostV1AiProvidersIdRecheckMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['ai-providers'][':id']['recheck']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['ai-providers'][':id']['recheck']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AiProvidersIdRecheckMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['ai-providers'][':id']['recheck']['$post']>,
    ) {
      return parseResponse(client.v1['ai-providers'][':id'].recheck.$post(args, options))
    },
  })
}

export function createPostV1AiProvidersIdRecheck<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['ai-providers'][':id']['recheck']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['ai-providers'][':id']['recheck']['$post']>,
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
    const mutationDefaults = getPostV1AiProvidersIdRecheckMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1AiProvidersIdMutationKey() {
  return ['v1', '/v1/ai-providers/:id', 'POST'] as const
}

export function getPostV1AiProvidersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['ai-providers'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['ai-providers'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AiProvidersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['ai-providers'][':id']['$post']>) {
      return parseResponse(client.v1['ai-providers'][':id'].$post(args, options))
    },
  })
}

export function createPostV1AiProvidersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['ai-providers'][':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['ai-providers'][':id']['$post']>,
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
    const mutationDefaults = getPostV1AiProvidersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1AiProvidersIdMutationKey() {
  return ['v1', '/v1/ai-providers/:id', 'DELETE'] as const
}

export function getDeleteV1AiProvidersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['ai-providers'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1)['ai-providers'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AiProvidersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['ai-providers'][':id']['$delete']>) {
      return parseResponse(client.v1['ai-providers'][':id'].$delete(args, options))
    },
  })
}

export function createDeleteV1AiProvidersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['ai-providers'][':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1)['ai-providers'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteV1AiProvidersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1PlatformModelTiersAdminQueryKey() {
  return ['v1', '/v1/platform-model-tiers/admin'] as const
}

export function getV1PlatformModelTiersAdminQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['platform-model-tiers']['admin']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['platform-model-tiers']['admin']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PlatformModelTiersAdminQueryKey>
  >({
    queryKey: getV1PlatformModelTiersAdminQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['platform-model-tiers'].admin.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1PlatformModelTiersAdmin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['platform-model-tiers']['admin']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['platform-model-tiers']['admin']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PlatformModelTiersAdminQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1PlatformModelTiersAdminQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostV1PlatformModelTiersMutationKey() {
  return ['v1', '/v1/platform-model-tiers', 'POST'] as const
}

export function getPostV1PlatformModelTiersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['platform-model-tiers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['platform-model-tiers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PlatformModelTiersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['platform-model-tiers']['$post']>) {
      return parseResponse(client.v1['platform-model-tiers'].$post(args, options))
    },
  })
}

export function createPostV1PlatformModelTiers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['platform-model-tiers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['platform-model-tiers']['$post']>,
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
    const mutationDefaults = getPostV1PlatformModelTiersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1PlatformModelTiersReorderMutationKey() {
  return ['v1', '/v1/platform-model-tiers/reorder', 'POST'] as const
}

export function getPostV1PlatformModelTiersReorderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['platform-model-tiers']['reorder']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['platform-model-tiers']['reorder']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PlatformModelTiersReorderMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['platform-model-tiers']['reorder']['$post']>,
    ) {
      return parseResponse(client.v1['platform-model-tiers'].reorder.$post(args, options))
    },
  })
}

export function createPostV1PlatformModelTiersReorder<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['platform-model-tiers']['reorder']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['platform-model-tiers']['reorder']['$post']>,
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
    const mutationDefaults = getPostV1PlatformModelTiersReorderMutationOptions<
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

export function getPostV1PlatformModelTiersIdMutationKey() {
  return ['v1', '/v1/platform-model-tiers/:id', 'POST'] as const
}

export function getPostV1PlatformModelTiersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['platform-model-tiers'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['platform-model-tiers'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PlatformModelTiersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['platform-model-tiers'][':id']['$post']>,
    ) {
      return parseResponse(client.v1['platform-model-tiers'][':id'].$post(args, options))
    },
  })
}

export function createPostV1PlatformModelTiersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['platform-model-tiers'][':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['platform-model-tiers'][':id']['$post']>,
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
    const mutationDefaults = getPostV1PlatformModelTiersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1PlatformModelTiersIdMutationKey() {
  return ['v1', '/v1/platform-model-tiers/:id', 'DELETE'] as const
}

export function getDeleteV1PlatformModelTiersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['platform-model-tiers'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1)['platform-model-tiers'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1PlatformModelTiersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['platform-model-tiers'][':id']['$delete']>,
    ) {
      return parseResponse(client.v1['platform-model-tiers'][':id'].$delete(args, options))
    },
  })
}

export function createDeleteV1PlatformModelTiersId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['platform-model-tiers'][':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1)['platform-model-tiers'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteV1PlatformModelTiersIdMutationOptions<
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

export function getV1AiToolsQueryKey() {
  return ['v1', '/v1/ai-tools'] as const
}

export function getV1AiToolsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['ai-tools']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['ai-tools']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AiToolsQueryKey>
  >({
    queryKey: getV1AiToolsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['ai-tools'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1AiTools<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['ai-tools']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['ai-tools']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AiToolsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AiToolsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostV1AiToolsMutationKey() {
  return ['v1', '/v1/ai-tools', 'POST'] as const
}

export function getPostV1AiToolsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['ai-tools']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v1)['ai-tools']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AiToolsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['ai-tools']['$post']>) {
      return parseResponse(client.v1['ai-tools'].$post(args, options))
    },
  })
}

export function createPostV1AiTools<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['ai-tools']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['ai-tools']['$post']>,
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
    const mutationDefaults = getPostV1AiToolsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1AiToolsIdMutationKey() {
  return ['v1', '/v1/ai-tools/:id', 'POST'] as const
}

export function getPostV1AiToolsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['ai-tools'][':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['ai-tools'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AiToolsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['ai-tools'][':id']['$post']>) {
      return parseResponse(client.v1['ai-tools'][':id'].$post(args, options))
    },
  })
}

export function createPostV1AiToolsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['ai-tools'][':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['ai-tools'][':id']['$post']>,
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
    const mutationDefaults = getPostV1AiToolsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1AiToolsIdMutationKey() {
  return ['v1', '/v1/ai-tools/:id', 'DELETE'] as const
}

export function getDeleteV1AiToolsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['ai-tools'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1)['ai-tools'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AiToolsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['ai-tools'][':id']['$delete']>) {
      return parseResponse(client.v1['ai-tools'][':id'].$delete(args, options))
    },
  })
}

export function createDeleteV1AiToolsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['ai-tools'][':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1)['ai-tools'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteV1AiToolsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1AiUsageOverviewQueryKey(
  args: InferRequestType<(typeof client.v1)['ai-usage']['overview']['$get']>,
) {
  return ['v1', '/v1/ai-usage/overview', args] as const
}

export function getV1AiUsageOverviewQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['ai-usage']['overview']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['ai-usage']['overview']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['ai-usage']['overview']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AiUsageOverviewQueryKey>
  >({
    queryKey: getV1AiUsageOverviewQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['ai-usage'].overview.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AiUsageOverview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['ai-usage']['overview']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['ai-usage']['overview']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['ai-usage']['overview']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AiUsageOverviewQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AiUsageOverviewQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1AiUsageItemsQueryKey(
  args: InferRequestType<(typeof client.v1)['ai-usage']['items']['$get']>,
) {
  return ['v1', '/v1/ai-usage/items', args] as const
}

export function getV1AiUsageItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['ai-usage']['items']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['ai-usage']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['ai-usage']['items']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AiUsageItemsQueryKey>
  >({
    queryKey: getV1AiUsageItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['ai-usage'].items.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1AiUsageItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['ai-usage']['items']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['ai-usage']['items']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['ai-usage']['items']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AiUsageItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AiUsageItemsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1AiUsageItemsDimensionIdQueryKey(
  args: InferRequestType<(typeof client.v1)['ai-usage']['items'][':dimension'][':id']['$get']>,
) {
  return ['v1', '/v1/ai-usage/items/:dimension/:id', args] as const
}

export function getV1AiUsageItemsDimensionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['ai-usage']['items'][':dimension'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['ai-usage']['items'][':dimension'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['ai-usage']['items'][':dimension'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AiUsageItemsDimensionIdQueryKey>
  >({
    queryKey: getV1AiUsageItemsDimensionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['ai-usage'].items[':dimension'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AiUsageItemsDimensionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['ai-usage']['items'][':dimension'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1)['ai-usage']['items'][':dimension'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1)['ai-usage']['items'][':dimension'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AiUsageItemsDimensionIdQueryKey>
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
      ...getV1AiUsageItemsDimensionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
