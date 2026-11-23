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

export function get_2017_08_29Key() {
  return ['2017-08-29'] as const
}

export function getPost20170829CertificatesMutationKey() {
  return ['2017-08-29', '/2017-08-29/certificates', 'POST'] as const
}

export function getPost20170829CertificatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2017-08-29']['certificates']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2017-08-29']['certificates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20170829CertificatesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2017-08-29']['certificates']['$post']>,
    ) {
      return parseResponse(client['2017-08-29'].certificates.$post(args, options))
    },
  })
}

export function createPost20170829Certificates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2017-08-29']['certificates']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2017-08-29']['certificates']['$post']>,
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
    const mutationDefaults = getPost20170829CertificatesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20170829JobsIdQueryKey(
  args: InferRequestType<(typeof client)['2017-08-29']['jobs'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2017-08-29', '/2017-08-29/jobs/:id', keyArgs] as const
}

export function get20170829JobsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2017-08-29']['jobs'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2017-08-29']['jobs'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2017-08-29']['jobs'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20170829JobsIdQueryKey>
  >({
    queryKey: get20170829JobsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2017-08-29'].jobs[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20170829JobsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2017-08-29']['jobs'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2017-08-29']['jobs'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2017-08-29']['jobs'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20170829JobsIdQueryKey>
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
    return { ...get20170829JobsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDelete20170829JobsIdMutationKey() {
  return ['2017-08-29', '/2017-08-29/jobs/:id', 'DELETE'] as const
}

export function getDelete20170829JobsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2017-08-29']['jobs'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2017-08-29']['jobs'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete20170829JobsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2017-08-29']['jobs'][':id']['$delete']>,
    ) {
      return parseResponse(client['2017-08-29'].jobs[':id'].$delete(args, options))
    },
  })
}

export function createDelete20170829JobsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2017-08-29']['jobs'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2017-08-29']['jobs'][':id']['$delete']>,
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
    const mutationDefaults = getDelete20170829JobsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20170829JobsQueryKey(
  args: InferRequestType<(typeof client)['2017-08-29']['jobs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2017-08-29', '/2017-08-29/jobs', keyArgs] as const
}

export function get20170829JobsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2017-08-29']['jobs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2017-08-29']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2017-08-29']['jobs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20170829JobsQueryKey>
  >({
    queryKey: get20170829JobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2017-08-29'].jobs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function create20170829Jobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2017-08-29']['jobs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2017-08-29']['jobs']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2017-08-29']['jobs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20170829JobsQueryKey>
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
    return { ...get20170829JobsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPost20170829JobsMutationKey() {
  return ['2017-08-29', '/2017-08-29/jobs', 'POST'] as const
}

export function getPost20170829JobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2017-08-29']['jobs']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['2017-08-29']['jobs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20170829JobsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2017-08-29']['jobs']['$post']>) {
      return parseResponse(client['2017-08-29'].jobs.$post(args, options))
    },
  })
}

export function createPost20170829Jobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2017-08-29']['jobs']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2017-08-29']['jobs']['$post']>,
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
    const mutationDefaults = getPost20170829JobsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20170829JobTemplatesQueryKey(
  args: InferRequestType<(typeof client)['2017-08-29']['jobTemplates']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2017-08-29', '/2017-08-29/jobTemplates', keyArgs] as const
}

export function get20170829JobTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2017-08-29']['jobTemplates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2017-08-29']['jobTemplates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2017-08-29']['jobTemplates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20170829JobTemplatesQueryKey>
  >({
    queryKey: get20170829JobTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2017-08-29'].jobTemplates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20170829JobTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2017-08-29']['jobTemplates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2017-08-29']['jobTemplates']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2017-08-29']['jobTemplates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20170829JobTemplatesQueryKey>
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
      ...get20170829JobTemplatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPost20170829JobTemplatesMutationKey() {
  return ['2017-08-29', '/2017-08-29/jobTemplates', 'POST'] as const
}

export function getPost20170829JobTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2017-08-29']['jobTemplates']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2017-08-29']['jobTemplates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20170829JobTemplatesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2017-08-29']['jobTemplates']['$post']>,
    ) {
      return parseResponse(client['2017-08-29'].jobTemplates.$post(args, options))
    },
  })
}

export function createPost20170829JobTemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2017-08-29']['jobTemplates']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2017-08-29']['jobTemplates']['$post']>,
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
    const mutationDefaults = getPost20170829JobTemplatesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20170829PresetsQueryKey(
  args: InferRequestType<(typeof client)['2017-08-29']['presets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2017-08-29', '/2017-08-29/presets', keyArgs] as const
}

export function get20170829PresetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2017-08-29']['presets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2017-08-29']['presets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2017-08-29']['presets']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20170829PresetsQueryKey>
  >({
    queryKey: get20170829PresetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2017-08-29'].presets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function create20170829Presets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2017-08-29']['presets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2017-08-29']['presets']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2017-08-29']['presets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20170829PresetsQueryKey>
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
    return { ...get20170829PresetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPost20170829PresetsMutationKey() {
  return ['2017-08-29', '/2017-08-29/presets', 'POST'] as const
}

export function getPost20170829PresetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2017-08-29']['presets']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['2017-08-29']['presets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20170829PresetsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2017-08-29']['presets']['$post']>) {
      return parseResponse(client['2017-08-29'].presets.$post(args, options))
    },
  })
}

export function createPost20170829Presets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2017-08-29']['presets']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2017-08-29']['presets']['$post']>,
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
    const mutationDefaults = getPost20170829PresetsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20170829QueuesQueryKey(
  args: InferRequestType<(typeof client)['2017-08-29']['queues']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2017-08-29', '/2017-08-29/queues', keyArgs] as const
}

export function get20170829QueuesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2017-08-29']['queues']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2017-08-29']['queues']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2017-08-29']['queues']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20170829QueuesQueryKey>
  >({
    queryKey: get20170829QueuesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2017-08-29'].queues.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function create20170829Queues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2017-08-29']['queues']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2017-08-29']['queues']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2017-08-29']['queues']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20170829QueuesQueryKey>
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
    return { ...get20170829QueuesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPost20170829QueuesMutationKey() {
  return ['2017-08-29', '/2017-08-29/queues', 'POST'] as const
}

export function getPost20170829QueuesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2017-08-29']['queues']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['2017-08-29']['queues']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20170829QueuesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2017-08-29']['queues']['$post']>) {
      return parseResponse(client['2017-08-29'].queues.$post(args, options))
    },
  })
}

export function createPost20170829Queues<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2017-08-29']['queues']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2017-08-29']['queues']['$post']>,
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
    const mutationDefaults = getPost20170829QueuesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20170829JobTemplatesNameQueryKey(
  args: InferRequestType<(typeof client)['2017-08-29']['jobTemplates'][':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2017-08-29', '/2017-08-29/jobTemplates/:name', keyArgs] as const
}

export function get20170829JobTemplatesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2017-08-29']['jobTemplates'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2017-08-29']['jobTemplates'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2017-08-29']['jobTemplates'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20170829JobTemplatesNameQueryKey>
  >({
    queryKey: get20170829JobTemplatesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2017-08-29'].jobTemplates[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20170829JobTemplatesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2017-08-29']['jobTemplates'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2017-08-29']['jobTemplates'][':name']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2017-08-29']['jobTemplates'][':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20170829JobTemplatesNameQueryKey>
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
      ...get20170829JobTemplatesNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPut20170829JobTemplatesNameMutationKey() {
  return ['2017-08-29', '/2017-08-29/jobTemplates/:name', 'PUT'] as const
}

export function getPut20170829JobTemplatesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2017-08-29']['jobTemplates'][':name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2017-08-29']['jobTemplates'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut20170829JobTemplatesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2017-08-29']['jobTemplates'][':name']['$put']>,
    ) {
      return parseResponse(client['2017-08-29'].jobTemplates[':name'].$put(args, options))
    },
  })
}

export function createPut20170829JobTemplatesName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2017-08-29']['jobTemplates'][':name']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2017-08-29']['jobTemplates'][':name']['$put']>,
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
    const mutationDefaults = getPut20170829JobTemplatesNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDelete20170829JobTemplatesNameMutationKey() {
  return ['2017-08-29', '/2017-08-29/jobTemplates/:name', 'DELETE'] as const
}

export function getDelete20170829JobTemplatesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2017-08-29']['jobTemplates'][':name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2017-08-29']['jobTemplates'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete20170829JobTemplatesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2017-08-29']['jobTemplates'][':name']['$delete']>,
    ) {
      return parseResponse(client['2017-08-29'].jobTemplates[':name'].$delete(args, options))
    },
  })
}

export function createDelete20170829JobTemplatesName<
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
                  ReturnType<(typeof client)['2017-08-29']['jobTemplates'][':name']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2017-08-29']['jobTemplates'][':name']['$delete']>,
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
    const mutationDefaults = getDelete20170829JobTemplatesNameMutationOptions<
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

export function get20170829PolicyQueryKey(
  args: InferRequestType<(typeof client)['2017-08-29']['policy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2017-08-29', '/2017-08-29/policy', keyArgs] as const
}

export function get20170829PolicyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2017-08-29']['policy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2017-08-29']['policy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2017-08-29']['policy']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20170829PolicyQueryKey>
  >({
    queryKey: get20170829PolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2017-08-29'].policy.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function create20170829Policy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2017-08-29']['policy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2017-08-29']['policy']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2017-08-29']['policy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20170829PolicyQueryKey>
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
    return { ...get20170829PolicyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPut20170829PolicyMutationKey() {
  return ['2017-08-29', '/2017-08-29/policy', 'PUT'] as const
}

export function getPut20170829PolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2017-08-29']['policy']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['2017-08-29']['policy']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut20170829PolicyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2017-08-29']['policy']['$put']>) {
      return parseResponse(client['2017-08-29'].policy.$put(args, options))
    },
  })
}

export function createPut20170829Policy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2017-08-29']['policy']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2017-08-29']['policy']['$put']>,
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
    const mutationDefaults = getPut20170829PolicyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDelete20170829PolicyMutationKey() {
  return ['2017-08-29', '/2017-08-29/policy', 'DELETE'] as const
}

export function getDelete20170829PolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2017-08-29']['policy']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2017-08-29']['policy']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete20170829PolicyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2017-08-29']['policy']['$delete']>) {
      return parseResponse(client['2017-08-29'].policy.$delete(args, options))
    },
  })
}

export function createDelete20170829Policy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2017-08-29']['policy']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2017-08-29']['policy']['$delete']>,
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
    const mutationDefaults = getDelete20170829PolicyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20170829PresetsNameQueryKey(
  args: InferRequestType<(typeof client)['2017-08-29']['presets'][':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2017-08-29', '/2017-08-29/presets/:name', keyArgs] as const
}

export function get20170829PresetsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2017-08-29']['presets'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2017-08-29']['presets'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2017-08-29']['presets'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20170829PresetsNameQueryKey>
  >({
    queryKey: get20170829PresetsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2017-08-29'].presets[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20170829PresetsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2017-08-29']['presets'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2017-08-29']['presets'][':name']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2017-08-29']['presets'][':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20170829PresetsNameQueryKey>
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
    return { ...get20170829PresetsNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPut20170829PresetsNameMutationKey() {
  return ['2017-08-29', '/2017-08-29/presets/:name', 'PUT'] as const
}

export function getPut20170829PresetsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2017-08-29']['presets'][':name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2017-08-29']['presets'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut20170829PresetsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2017-08-29']['presets'][':name']['$put']>,
    ) {
      return parseResponse(client['2017-08-29'].presets[':name'].$put(args, options))
    },
  })
}

export function createPut20170829PresetsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2017-08-29']['presets'][':name']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2017-08-29']['presets'][':name']['$put']>,
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
    const mutationDefaults = getPut20170829PresetsNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDelete20170829PresetsNameMutationKey() {
  return ['2017-08-29', '/2017-08-29/presets/:name', 'DELETE'] as const
}

export function getDelete20170829PresetsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2017-08-29']['presets'][':name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2017-08-29']['presets'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete20170829PresetsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2017-08-29']['presets'][':name']['$delete']>,
    ) {
      return parseResponse(client['2017-08-29'].presets[':name'].$delete(args, options))
    },
  })
}

export function createDelete20170829PresetsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2017-08-29']['presets'][':name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2017-08-29']['presets'][':name']['$delete']>,
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
    const mutationDefaults = getDelete20170829PresetsNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20170829QueuesNameQueryKey(
  args: InferRequestType<(typeof client)['2017-08-29']['queues'][':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2017-08-29', '/2017-08-29/queues/:name', keyArgs] as const
}

export function get20170829QueuesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2017-08-29']['queues'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2017-08-29']['queues'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2017-08-29']['queues'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20170829QueuesNameQueryKey>
  >({
    queryKey: get20170829QueuesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2017-08-29'].queues[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20170829QueuesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2017-08-29']['queues'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2017-08-29']['queues'][':name']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2017-08-29']['queues'][':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20170829QueuesNameQueryKey>
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
    return { ...get20170829QueuesNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPut20170829QueuesNameMutationKey() {
  return ['2017-08-29', '/2017-08-29/queues/:name', 'PUT'] as const
}

export function getPut20170829QueuesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2017-08-29']['queues'][':name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2017-08-29']['queues'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut20170829QueuesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2017-08-29']['queues'][':name']['$put']>,
    ) {
      return parseResponse(client['2017-08-29'].queues[':name'].$put(args, options))
    },
  })
}

export function createPut20170829QueuesName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2017-08-29']['queues'][':name']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2017-08-29']['queues'][':name']['$put']>,
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
    const mutationDefaults = getPut20170829QueuesNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDelete20170829QueuesNameMutationKey() {
  return ['2017-08-29', '/2017-08-29/queues/:name', 'DELETE'] as const
}

export function getDelete20170829QueuesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2017-08-29']['queues'][':name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2017-08-29']['queues'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete20170829QueuesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2017-08-29']['queues'][':name']['$delete']>,
    ) {
      return parseResponse(client['2017-08-29'].queues[':name'].$delete(args, options))
    },
  })
}

export function createDelete20170829QueuesName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2017-08-29']['queues'][':name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2017-08-29']['queues'][':name']['$delete']>,
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
    const mutationDefaults = getDelete20170829QueuesNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPost20170829EndpointsMutationKey() {
  return ['2017-08-29', '/2017-08-29/endpoints', 'POST'] as const
}

export function getPost20170829EndpointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2017-08-29']['endpoints']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2017-08-29']['endpoints']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20170829EndpointsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2017-08-29']['endpoints']['$post']>) {
      return parseResponse(client['2017-08-29'].endpoints.$post(args, options))
    },
  })
}

export function createPost20170829Endpoints<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2017-08-29']['endpoints']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2017-08-29']['endpoints']['$post']>,
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
    const mutationDefaults = getPost20170829EndpointsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDelete20170829CertificatesArnMutationKey() {
  return ['2017-08-29', '/2017-08-29/certificates/:arn', 'DELETE'] as const
}

export function getDelete20170829CertificatesArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2017-08-29']['certificates'][':arn']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2017-08-29']['certificates'][':arn']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete20170829CertificatesArnMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2017-08-29']['certificates'][':arn']['$delete']>,
    ) {
      return parseResponse(client['2017-08-29'].certificates[':arn'].$delete(args, options))
    },
  })
}

export function createDelete20170829CertificatesArn<
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
                  ReturnType<(typeof client)['2017-08-29']['certificates'][':arn']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2017-08-29']['certificates'][':arn']['$delete']>,
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
    const mutationDefaults = getDelete20170829CertificatesArnMutationOptions<
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

export function get20170829TagsArnQueryKey(
  args: InferRequestType<(typeof client)['2017-08-29']['tags'][':arn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2017-08-29', '/2017-08-29/tags/:arn', keyArgs] as const
}

export function get20170829TagsArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2017-08-29']['tags'][':arn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2017-08-29']['tags'][':arn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2017-08-29']['tags'][':arn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20170829TagsArnQueryKey>
  >({
    queryKey: get20170829TagsArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2017-08-29'].tags[':arn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20170829TagsArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2017-08-29']['tags'][':arn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2017-08-29']['tags'][':arn']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2017-08-29']['tags'][':arn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20170829TagsArnQueryKey>
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
    return { ...get20170829TagsArnQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPut20170829TagsArnMutationKey() {
  return ['2017-08-29', '/2017-08-29/tags/:arn', 'PUT'] as const
}

export function getPut20170829TagsArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2017-08-29']['tags'][':arn']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2017-08-29']['tags'][':arn']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut20170829TagsArnMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2017-08-29']['tags'][':arn']['$put']>,
    ) {
      return parseResponse(client['2017-08-29'].tags[':arn'].$put(args, options))
    },
  })
}

export function createPut20170829TagsArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2017-08-29']['tags'][':arn']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2017-08-29']['tags'][':arn']['$put']>,
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
    const mutationDefaults = getPut20170829TagsArnMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPost20170829TagsMutationKey() {
  return ['2017-08-29', '/2017-08-29/tags', 'POST'] as const
}

export function getPost20170829TagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2017-08-29']['tags']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['2017-08-29']['tags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20170829TagsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2017-08-29']['tags']['$post']>) {
      return parseResponse(client['2017-08-29'].tags.$post(args, options))
    },
  })
}

export function createPost20170829Tags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2017-08-29']['tags']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2017-08-29']['tags']['$post']>,
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
    const mutationDefaults = getPost20170829TagsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
