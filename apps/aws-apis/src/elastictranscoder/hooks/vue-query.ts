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

export function get_2012_09_25Key() {
  return ['2012-09-25'] as const
}

export function get20120925JobsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2012-09-25']['jobs'][':Id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2012-09-25', '/2012-09-25/jobs/:Id', keyArgs] as const
}

export function get20120925JobsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2012-09-25']['jobs'][':Id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20120925JobsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2012-09-25'].jobs[':Id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20120925JobsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2012-09-25']['jobs'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2012-09-25']['jobs'][':Id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2012-09-25']['jobs'][':Id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2012-09-25']['jobs'][':Id']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20120925JobsIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['2012-09-25']['jobs'][':Id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20120925JobsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20120925JobsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2012-09-25'].jobs[':Id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDelete20120925JobsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDelete20120925JobsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePost20120925Jobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPost20120925JobsMutationOptions<TError, TOnMutateResult>(
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

export function get20120925PipelinesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2012-09-25']['pipelines']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2012-09-25', '/2012-09-25/pipelines', keyArgs] as const
}

export function get20120925PipelinesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2012-09-25']['pipelines']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20120925PipelinesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2012-09-25'].pipelines.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20120925Pipelines<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2012-09-25']['pipelines']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2012-09-25']['pipelines']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2012-09-25']['pipelines']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2012-09-25']['pipelines']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20120925PipelinesQueryKey>
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
          Awaited<ReturnType<(typeof client)['2012-09-25']['pipelines']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20120925PipelinesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20120925PipelinesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2012-09-25'].pipelines.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost20120925Pipelines<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPost20120925PipelinesMutationOptions<TError, TOnMutateResult>(
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

export function get20120925PresetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2012-09-25']['presets']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2012-09-25', '/2012-09-25/presets', keyArgs] as const
}

export function get20120925PresetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2012-09-25']['presets']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20120925PresetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2012-09-25'].presets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20120925Presets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2012-09-25']['presets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2012-09-25']['presets']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2012-09-25']['presets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2012-09-25']['presets']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20120925PresetsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2012-09-25']['presets']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20120925PresetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20120925PresetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2012-09-25'].presets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost20120925Presets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPost20120925PresetsMutationOptions<TError, TOnMutateResult>(
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

export function get20120925PipelinesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2012-09-25']['pipelines'][':Id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2012-09-25', '/2012-09-25/pipelines/:Id', keyArgs] as const
}

export function get20120925PipelinesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2012-09-25']['pipelines'][':Id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20120925PipelinesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2012-09-25'].pipelines[':Id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20120925PipelinesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2012-09-25']['pipelines'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2012-09-25']['pipelines'][':Id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2012-09-25']['pipelines'][':Id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2012-09-25']['pipelines'][':Id']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20120925PipelinesIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['2012-09-25']['pipelines'][':Id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20120925PipelinesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20120925PipelinesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2012-09-25'].pipelines[':Id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePut20120925PipelinesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPut20120925PipelinesIdMutationOptions<TError, TOnMutateResult>(
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

export function useDelete20120925PipelinesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDelete20120925PipelinesIdMutationOptions<TError, TOnMutateResult>(
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

export function get20120925PresetsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2012-09-25']['presets'][':Id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2012-09-25', '/2012-09-25/presets/:Id', keyArgs] as const
}

export function get20120925PresetsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2012-09-25']['presets'][':Id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20120925PresetsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2012-09-25'].presets[':Id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20120925PresetsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2012-09-25']['presets'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2012-09-25']['presets'][':Id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2012-09-25']['presets'][':Id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2012-09-25']['presets'][':Id']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20120925PresetsIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['2012-09-25']['presets'][':Id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20120925PresetsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20120925PresetsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2012-09-25'].presets[':Id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDelete20120925PresetsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDelete20120925PresetsIdMutationOptions<TError, TOnMutateResult>(
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

export function get20120925JobsByPipelinePipelineIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2012-09-25']['jobsByPipeline'][':PipelineId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2012-09-25', '/2012-09-25/jobsByPipeline/:PipelineId', keyArgs] as const
}

export function get20120925JobsByPipelinePipelineIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2012-09-25']['jobsByPipeline'][':PipelineId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20120925JobsByPipelinePipelineIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2012-09-25'].jobsByPipeline[':PipelineId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20120925JobsByPipelinePipelineId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2012-09-25']['jobsByPipeline'][':PipelineId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2012-09-25']['jobsByPipeline'][':PipelineId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2012-09-25']['jobsByPipeline'][':PipelineId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get20120925JobsByPipelinePipelineIdQueryKey>
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
            ReturnType<(typeof client)['2012-09-25']['jobsByPipeline'][':PipelineId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20120925JobsByPipelinePipelineIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20120925JobsByPipelinePipelineIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2012-09-25'].jobsByPipeline[':PipelineId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20120925JobsByStatusStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2012-09-25']['jobsByStatus'][':Status']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2012-09-25', '/2012-09-25/jobsByStatus/:Status', keyArgs] as const
}

export function get20120925JobsByStatusStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2012-09-25']['jobsByStatus'][':Status']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20120925JobsByStatusStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2012-09-25'].jobsByStatus[':Status'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20120925JobsByStatusStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2012-09-25']['jobsByStatus'][':Status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2012-09-25']['jobsByStatus'][':Status']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2012-09-25']['jobsByStatus'][':Status']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get20120925JobsByStatusStatusQueryKey>
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
          Awaited<ReturnType<(typeof client)['2012-09-25']['jobsByStatus'][':Status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20120925JobsByStatusStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20120925JobsByStatusStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2012-09-25'].jobsByStatus[':Status'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost20120925RoleTests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPost20120925RoleTestsMutationOptions<TError, TOnMutateResult>(
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

export function usePost20120925PipelinesIdNotifications<
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
  const mutationDefaults = getPost20120925PipelinesIdNotificationsMutationOptions<
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

export function usePost20120925PipelinesIdStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPost20120925PipelinesIdStatusMutationOptions<TError, TOnMutateResult>(
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
