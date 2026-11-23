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

export function get_2012_09_25Key() {
  return ['2012-09-25'] as const
}

export function get20120925JobsIdQueryKey(
  args: InferRequestType<(typeof client)['2012-09-25']['jobs'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2012-09-25', '/2012-09-25/jobs/:Id', keyArgs] as const
}

export function get20120925JobsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2012-09-25']['jobs'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2012-09-25']['jobs'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2012-09-25']['jobs'][':Id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20120925JobsIdQueryKey>
  >({
    queryKey: get20120925JobsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2012-09-25'].jobs[':Id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20120925JobsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2012-09-25']['jobs'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2012-09-25']['jobs'][':Id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2012-09-25']['jobs'][':Id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20120925JobsIdQueryKey>
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
    return { ...get20120925JobsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDelete20120925JobsIdMutationKey() {
  return ['2012-09-25', '/2012-09-25/jobs/:Id', 'DELETE'] as const
}

export function getDelete20120925JobsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2012-09-25']['jobs'][':Id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2012-09-25']['jobs'][':Id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete20120925JobsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2012-09-25']['jobs'][':Id']['$delete']>,
    ) {
      return parseResponse(client['2012-09-25'].jobs[':Id'].$delete(args, options))
    },
  })
}

export function createDelete20120925JobsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2012-09-25']['jobs'][':Id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2012-09-25']['jobs'][':Id']['$delete']>,
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
    const mutationDefaults = getDelete20120925JobsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPost20120925JobsMutationKey() {
  return ['2012-09-25', '/2012-09-25/jobs', 'POST'] as const
}

export function getPost20120925JobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2012-09-25']['jobs']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['2012-09-25']['jobs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20120925JobsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2012-09-25']['jobs']['$post']>) {
      return parseResponse(client['2012-09-25'].jobs.$post(args, options))
    },
  })
}

export function createPost20120925Jobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2012-09-25']['jobs']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2012-09-25']['jobs']['$post']>,
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
    const mutationDefaults = getPost20120925JobsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20120925PipelinesQueryKey(
  args: InferRequestType<(typeof client)['2012-09-25']['pipelines']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2012-09-25', '/2012-09-25/pipelines', keyArgs] as const
}

export function get20120925PipelinesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2012-09-25']['pipelines']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2012-09-25']['pipelines']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2012-09-25']['pipelines']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20120925PipelinesQueryKey>
  >({
    queryKey: get20120925PipelinesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2012-09-25'].pipelines.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20120925Pipelines<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2012-09-25']['pipelines']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2012-09-25']['pipelines']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2012-09-25']['pipelines']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20120925PipelinesQueryKey>
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
    return { ...get20120925PipelinesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPost20120925PipelinesMutationKey() {
  return ['2012-09-25', '/2012-09-25/pipelines', 'POST'] as const
}

export function getPost20120925PipelinesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2012-09-25']['pipelines']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2012-09-25']['pipelines']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20120925PipelinesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2012-09-25']['pipelines']['$post']>) {
      return parseResponse(client['2012-09-25'].pipelines.$post(args, options))
    },
  })
}

export function createPost20120925Pipelines<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2012-09-25']['pipelines']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2012-09-25']['pipelines']['$post']>,
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
    const mutationDefaults = getPost20120925PipelinesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20120925PresetsQueryKey(
  args: InferRequestType<(typeof client)['2012-09-25']['presets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2012-09-25', '/2012-09-25/presets', keyArgs] as const
}

export function get20120925PresetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2012-09-25']['presets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2012-09-25']['presets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2012-09-25']['presets']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20120925PresetsQueryKey>
  >({
    queryKey: get20120925PresetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2012-09-25'].presets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function create20120925Presets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2012-09-25']['presets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2012-09-25']['presets']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2012-09-25']['presets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20120925PresetsQueryKey>
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
    return { ...get20120925PresetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPost20120925PresetsMutationKey() {
  return ['2012-09-25', '/2012-09-25/presets', 'POST'] as const
}

export function getPost20120925PresetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2012-09-25']['presets']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['2012-09-25']['presets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20120925PresetsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2012-09-25']['presets']['$post']>) {
      return parseResponse(client['2012-09-25'].presets.$post(args, options))
    },
  })
}

export function createPost20120925Presets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2012-09-25']['presets']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2012-09-25']['presets']['$post']>,
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
    const mutationDefaults = getPost20120925PresetsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20120925PipelinesIdQueryKey(
  args: InferRequestType<(typeof client)['2012-09-25']['pipelines'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2012-09-25', '/2012-09-25/pipelines/:Id', keyArgs] as const
}

export function get20120925PipelinesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2012-09-25']['pipelines'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2012-09-25']['pipelines'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2012-09-25']['pipelines'][':Id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20120925PipelinesIdQueryKey>
  >({
    queryKey: get20120925PipelinesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2012-09-25'].pipelines[':Id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20120925PipelinesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2012-09-25']['pipelines'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2012-09-25']['pipelines'][':Id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2012-09-25']['pipelines'][':Id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20120925PipelinesIdQueryKey>
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
    return { ...get20120925PipelinesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPut20120925PipelinesIdMutationKey() {
  return ['2012-09-25', '/2012-09-25/pipelines/:Id', 'PUT'] as const
}

export function getPut20120925PipelinesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2012-09-25']['pipelines'][':Id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2012-09-25']['pipelines'][':Id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut20120925PipelinesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2012-09-25']['pipelines'][':Id']['$put']>,
    ) {
      return parseResponse(client['2012-09-25'].pipelines[':Id'].$put(args, options))
    },
  })
}

export function createPut20120925PipelinesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2012-09-25']['pipelines'][':Id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2012-09-25']['pipelines'][':Id']['$put']>,
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
    const mutationDefaults = getPut20120925PipelinesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDelete20120925PipelinesIdMutationKey() {
  return ['2012-09-25', '/2012-09-25/pipelines/:Id', 'DELETE'] as const
}

export function getDelete20120925PipelinesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2012-09-25']['pipelines'][':Id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2012-09-25']['pipelines'][':Id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete20120925PipelinesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2012-09-25']['pipelines'][':Id']['$delete']>,
    ) {
      return parseResponse(client['2012-09-25'].pipelines[':Id'].$delete(args, options))
    },
  })
}

export function createDelete20120925PipelinesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2012-09-25']['pipelines'][':Id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2012-09-25']['pipelines'][':Id']['$delete']>,
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
    const mutationDefaults = getDelete20120925PipelinesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20120925PresetsIdQueryKey(
  args: InferRequestType<(typeof client)['2012-09-25']['presets'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2012-09-25', '/2012-09-25/presets/:Id', keyArgs] as const
}

export function get20120925PresetsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2012-09-25']['presets'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2012-09-25']['presets'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2012-09-25']['presets'][':Id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20120925PresetsIdQueryKey>
  >({
    queryKey: get20120925PresetsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2012-09-25'].presets[':Id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20120925PresetsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2012-09-25']['presets'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2012-09-25']['presets'][':Id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2012-09-25']['presets'][':Id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20120925PresetsIdQueryKey>
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
    return { ...get20120925PresetsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDelete20120925PresetsIdMutationKey() {
  return ['2012-09-25', '/2012-09-25/presets/:Id', 'DELETE'] as const
}

export function getDelete20120925PresetsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2012-09-25']['presets'][':Id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2012-09-25']['presets'][':Id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete20120925PresetsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2012-09-25']['presets'][':Id']['$delete']>,
    ) {
      return parseResponse(client['2012-09-25'].presets[':Id'].$delete(args, options))
    },
  })
}

export function createDelete20120925PresetsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2012-09-25']['presets'][':Id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2012-09-25']['presets'][':Id']['$delete']>,
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
    const mutationDefaults = getDelete20120925PresetsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20120925JobsByPipelinePipelineIdQueryKey(
  args: InferRequestType<(typeof client)['2012-09-25']['jobsByPipeline'][':PipelineId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2012-09-25', '/2012-09-25/jobsByPipeline/:PipelineId', keyArgs] as const
}

export function get20120925JobsByPipelinePipelineIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2012-09-25']['jobsByPipeline'][':PipelineId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2012-09-25']['jobsByPipeline'][':PipelineId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2012-09-25']['jobsByPipeline'][':PipelineId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20120925JobsByPipelinePipelineIdQueryKey>
  >({
    queryKey: get20120925JobsByPipelinePipelineIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2012-09-25'].jobsByPipeline[':PipelineId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20120925JobsByPipelinePipelineId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2012-09-25']['jobsByPipeline'][':PipelineId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2012-09-25']['jobsByPipeline'][':PipelineId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2012-09-25']['jobsByPipeline'][':PipelineId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20120925JobsByPipelinePipelineIdQueryKey>
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
      ...get20120925JobsByPipelinePipelineIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function get20120925JobsByStatusStatusQueryKey(
  args: InferRequestType<(typeof client)['2012-09-25']['jobsByStatus'][':Status']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2012-09-25', '/2012-09-25/jobsByStatus/:Status', keyArgs] as const
}

export function get20120925JobsByStatusStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2012-09-25']['jobsByStatus'][':Status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2012-09-25']['jobsByStatus'][':Status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2012-09-25']['jobsByStatus'][':Status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20120925JobsByStatusStatusQueryKey>
  >({
    queryKey: get20120925JobsByStatusStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2012-09-25'].jobsByStatus[':Status'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20120925JobsByStatusStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2012-09-25']['jobsByStatus'][':Status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2012-09-25']['jobsByStatus'][':Status']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2012-09-25']['jobsByStatus'][':Status']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20120925JobsByStatusStatusQueryKey>
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
      ...get20120925JobsByStatusStatusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPost20120925RoleTestsMutationKey() {
  return ['2012-09-25', '/2012-09-25/roleTests', 'POST'] as const
}

export function getPost20120925RoleTestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2012-09-25']['roleTests']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2012-09-25']['roleTests']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20120925RoleTestsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2012-09-25']['roleTests']['$post']>) {
      return parseResponse(client['2012-09-25'].roleTests.$post(args, options))
    },
  })
}

export function createPost20120925RoleTests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2012-09-25']['roleTests']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2012-09-25']['roleTests']['$post']>,
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
    const mutationDefaults = getPost20120925RoleTestsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPost20120925PipelinesIdNotificationsMutationKey() {
  return ['2012-09-25', '/2012-09-25/pipelines/:Id/notifications', 'POST'] as const
}

export function getPost20120925PipelinesIdNotificationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2012-09-25']['pipelines'][':Id']['notifications']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2012-09-25']['pipelines'][':Id']['notifications']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20120925PipelinesIdNotificationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2012-09-25']['pipelines'][':Id']['notifications']['$post']
      >,
    ) {
      return parseResponse(client['2012-09-25'].pipelines[':Id'].notifications.$post(args, options))
    },
  })
}

export function createPost20120925PipelinesIdNotifications<
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
                    (typeof client)['2012-09-25']['pipelines'][':Id']['notifications']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2012-09-25']['pipelines'][':Id']['notifications']['$post']
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
    const mutationDefaults = getPost20120925PipelinesIdNotificationsMutationOptions<
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

export function getPost20120925PipelinesIdStatusMutationKey() {
  return ['2012-09-25', '/2012-09-25/pipelines/:Id/status', 'POST'] as const
}

export function getPost20120925PipelinesIdStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2012-09-25']['pipelines'][':Id']['status']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2012-09-25']['pipelines'][':Id']['status']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20120925PipelinesIdStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2012-09-25']['pipelines'][':Id']['status']['$post']>,
    ) {
      return parseResponse(client['2012-09-25'].pipelines[':Id'].status.$post(args, options))
    },
  })
}

export function createPost20120925PipelinesIdStatus<
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
                  ReturnType<(typeof client)['2012-09-25']['pipelines'][':Id']['status']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2012-09-25']['pipelines'][':Id']['status']['$post']>,
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
    const mutationDefaults = getPost20120925PipelinesIdStatusMutationOptions<
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
