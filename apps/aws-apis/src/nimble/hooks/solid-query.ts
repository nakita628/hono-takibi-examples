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

export function get_2020_08_01Key() {
  return ['2020-08-01'] as const
}

export function get20200801StudiosStudioIdEulaAcceptancesQueryKey(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['eula-acceptances']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-08-01', '/2020-08-01/studios/:studioId/eula-acceptances', keyArgs] as const
}

export function get20200801StudiosStudioIdEulaAcceptancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2020-08-01']['studios'][':studioId']['eula-acceptances']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['eula-acceptances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-08-01']['studios'][':studioId']['eula-acceptances']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200801StudiosStudioIdEulaAcceptancesQueryKey>
  >({
    queryKey: get20200801StudiosStudioIdEulaAcceptancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-08-01'].studios[':studioId']['eula-acceptances'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200801StudiosStudioIdEulaAcceptances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2020-08-01']['studios'][':studioId']['eula-acceptances']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['eula-acceptances']['$get']
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
                    (typeof client)['2020-08-01']['studios'][':studioId']['eula-acceptances']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20200801StudiosStudioIdEulaAcceptancesQueryKey>
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
      ...get20200801StudiosStudioIdEulaAcceptancesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPost20200801StudiosStudioIdEulaAcceptancesMutationKey() {
  return ['2020-08-01', '/2020-08-01/studios/:studioId/eula-acceptances', 'POST'] as const
}

export function getPost20200801StudiosStudioIdEulaAcceptancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-08-01']['studios'][':studioId']['eula-acceptances']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2020-08-01']['studios'][':studioId']['eula-acceptances']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20200801StudiosStudioIdEulaAcceptancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-08-01']['studios'][':studioId']['eula-acceptances']['$post']
      >,
    ) {
      return parseResponse(
        client['2020-08-01'].studios[':studioId']['eula-acceptances'].$post(args, options),
      )
    },
  })
}

export function createPost20200801StudiosStudioIdEulaAcceptances<
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
                    (typeof client)['2020-08-01']['studios'][':studioId']['eula-acceptances']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2020-08-01']['studios'][':studioId']['eula-acceptances']['$post']
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
    const mutationDefaults = getPost20200801StudiosStudioIdEulaAcceptancesMutationOptions<
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

export function get20200801StudiosStudioIdLaunchProfilesQueryKey(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-08-01', '/2020-08-01/studios/:studioId/launch-profiles', keyArgs] as const
}

export function get20200801StudiosStudioIdLaunchProfilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200801StudiosStudioIdLaunchProfilesQueryKey>
  >({
    queryKey: get20200801StudiosStudioIdLaunchProfilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-08-01'].studios[':studioId']['launch-profiles'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200801StudiosStudioIdLaunchProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles']['$get']
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
                    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20200801StudiosStudioIdLaunchProfilesQueryKey>
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
      ...get20200801StudiosStudioIdLaunchProfilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPost20200801StudiosStudioIdLaunchProfilesMutationKey() {
  return ['2020-08-01', '/2020-08-01/studios/:studioId/launch-profiles', 'POST'] as const
}

export function getPost20200801StudiosStudioIdLaunchProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20200801StudiosStudioIdLaunchProfilesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles']['$post']
      >,
    ) {
      return parseResponse(
        client['2020-08-01'].studios[':studioId']['launch-profiles'].$post(args, options),
      )
    },
  })
}

export function createPost20200801StudiosStudioIdLaunchProfiles<
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
                    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles']['$post']
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
    const mutationDefaults = getPost20200801StudiosStudioIdLaunchProfilesMutationOptions<
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

export function get20200801StudiosStudioIdStreamingImagesQueryKey(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-08-01', '/2020-08-01/studios/:studioId/streaming-images', keyArgs] as const
}

export function get20200801StudiosStudioIdStreamingImagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200801StudiosStudioIdStreamingImagesQueryKey>
  >({
    queryKey: get20200801StudiosStudioIdStreamingImagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-08-01'].studios[':studioId']['streaming-images'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200801StudiosStudioIdStreamingImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images']['$get']
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
                    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20200801StudiosStudioIdStreamingImagesQueryKey>
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
      ...get20200801StudiosStudioIdStreamingImagesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPost20200801StudiosStudioIdStreamingImagesMutationKey() {
  return ['2020-08-01', '/2020-08-01/studios/:studioId/streaming-images', 'POST'] as const
}

export function getPost20200801StudiosStudioIdStreamingImagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20200801StudiosStudioIdStreamingImagesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images']['$post']
      >,
    ) {
      return parseResponse(
        client['2020-08-01'].studios[':studioId']['streaming-images'].$post(args, options),
      )
    },
  })
}

export function createPost20200801StudiosStudioIdStreamingImages<
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
                    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images']['$post']
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
    const mutationDefaults = getPost20200801StudiosStudioIdStreamingImagesMutationOptions<
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

export function get20200801StudiosStudioIdStreamingSessionsQueryKey(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-08-01', '/2020-08-01/studios/:studioId/streaming-sessions', keyArgs] as const
}

export function get20200801StudiosStudioIdStreamingSessionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200801StudiosStudioIdStreamingSessionsQueryKey>
  >({
    queryKey: get20200801StudiosStudioIdStreamingSessionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-08-01'].studios[':studioId']['streaming-sessions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200801StudiosStudioIdStreamingSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions']['$get']
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
                    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20200801StudiosStudioIdStreamingSessionsQueryKey>
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
      ...get20200801StudiosStudioIdStreamingSessionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPost20200801StudiosStudioIdStreamingSessionsMutationKey() {
  return ['2020-08-01', '/2020-08-01/studios/:studioId/streaming-sessions', 'POST'] as const
}

export function getPost20200801StudiosStudioIdStreamingSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20200801StudiosStudioIdStreamingSessionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions']['$post']
      >,
    ) {
      return parseResponse(
        client['2020-08-01'].studios[':studioId']['streaming-sessions'].$post(args, options),
      )
    },
  })
}

export function createPost20200801StudiosStudioIdStreamingSessions<
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
                    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions']['$post']
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
    const mutationDefaults = getPost20200801StudiosStudioIdStreamingSessionsMutationOptions<
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

export function getPost20200801StudiosStudioIdStreamingSessionsSessionIdStreamsMutationKey() {
  return [
    '2020-08-01',
    '/2020-08-01/studios/:studioId/streaming-sessions/:sessionId/streams',
    'POST',
  ] as const
}

export function getPost20200801StudiosStudioIdStreamingSessionsSessionIdStreamsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['streams']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['streams']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20200801StudiosStudioIdStreamingSessionsSessionIdStreamsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['streams']['$post']
      >,
    ) {
      return parseResponse(
        client['2020-08-01'].studios[':studioId']['streaming-sessions'][':sessionId'].streams.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPost20200801StudiosStudioIdStreamingSessionsSessionIdStreams<
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
                    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['streams']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['streams']['$post']
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
    const mutationDefaults =
      getPost20200801StudiosStudioIdStreamingSessionsSessionIdStreamsMutationOptions<
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

export function get20200801StudiosQueryKey(
  args: InferRequestType<(typeof client)['2020-08-01']['studios']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-08-01', '/2020-08-01/studios', keyArgs] as const
}

export function get20200801StudiosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2020-08-01']['studios']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2020-08-01']['studios']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2020-08-01']['studios']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200801StudiosQueryKey>
  >({
    queryKey: get20200801StudiosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-08-01'].studios.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function create20200801Studios<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2020-08-01']['studios']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2020-08-01']['studios']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-08-01']['studios']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20200801StudiosQueryKey>
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
    return { ...get20200801StudiosQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPost20200801StudiosMutationKey() {
  return ['2020-08-01', '/2020-08-01/studios', 'POST'] as const
}

export function getPost20200801StudiosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2020-08-01']['studios']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['2020-08-01']['studios']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20200801StudiosMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2020-08-01']['studios']['$post']>) {
      return parseResponse(client['2020-08-01'].studios.$post(args, options))
    },
  })
}

export function createPost20200801Studios<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-08-01']['studios']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2020-08-01']['studios']['$post']>,
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
    const mutationDefaults = getPost20200801StudiosMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20200801StudiosStudioIdStudioComponentsQueryKey(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['studio-components']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-08-01', '/2020-08-01/studios/:studioId/studio-components', keyArgs] as const
}

export function get20200801StudiosStudioIdStudioComponentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2020-08-01']['studios'][':studioId']['studio-components']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['studio-components']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-08-01']['studios'][':studioId']['studio-components']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200801StudiosStudioIdStudioComponentsQueryKey>
  >({
    queryKey: get20200801StudiosStudioIdStudioComponentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-08-01'].studios[':studioId']['studio-components'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200801StudiosStudioIdStudioComponents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2020-08-01']['studios'][':studioId']['studio-components']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['studio-components']['$get']
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
                    (typeof client)['2020-08-01']['studios'][':studioId']['studio-components']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20200801StudiosStudioIdStudioComponentsQueryKey>
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
      ...get20200801StudiosStudioIdStudioComponentsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPost20200801StudiosStudioIdStudioComponentsMutationKey() {
  return ['2020-08-01', '/2020-08-01/studios/:studioId/studio-components', 'POST'] as const
}

export function getPost20200801StudiosStudioIdStudioComponentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-08-01']['studios'][':studioId']['studio-components']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2020-08-01']['studios'][':studioId']['studio-components']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20200801StudiosStudioIdStudioComponentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-08-01']['studios'][':studioId']['studio-components']['$post']
      >,
    ) {
      return parseResponse(
        client['2020-08-01'].studios[':studioId']['studio-components'].$post(args, options),
      )
    },
  })
}

export function createPost20200801StudiosStudioIdStudioComponents<
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
                    (typeof client)['2020-08-01']['studios'][':studioId']['studio-components']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2020-08-01']['studios'][':studioId']['studio-components']['$post']
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
    const mutationDefaults = getPost20200801StudiosStudioIdStudioComponentsMutationOptions<
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

export function get20200801StudiosStudioIdLaunchProfilesLaunchProfileIdQueryKey(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '2020-08-01',
    '/2020-08-01/studios/:studioId/launch-profiles/:launchProfileId',
    keyArgs,
  ] as const
}

export function get20200801StudiosStudioIdLaunchProfilesLaunchProfileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200801StudiosStudioIdLaunchProfilesLaunchProfileIdQueryKey>
  >({
    queryKey: get20200801StudiosStudioIdLaunchProfilesLaunchProfileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-08-01'].studios[':studioId']['launch-profiles'][':launchProfileId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function create20200801StudiosStudioIdLaunchProfilesLaunchProfileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['$get']
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
                    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20200801StudiosStudioIdLaunchProfilesLaunchProfileIdQueryKey>
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
      ...get20200801StudiosStudioIdLaunchProfilesLaunchProfileIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDelete20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMutationKey() {
  return [
    '2020-08-01',
    '/2020-08-01/studios/:studioId/launch-profiles/:launchProfileId',
    'DELETE',
  ] as const
}

export function getDelete20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['$delete']
      >,
    ) {
      return parseResponse(
        client['2020-08-01'].studios[':studioId']['launch-profiles'][':launchProfileId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDelete20200801StudiosStudioIdLaunchProfilesLaunchProfileId<
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
                    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['$delete']
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
    const mutationDefaults =
      getDelete20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMutationOptions<
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

export function getPatch20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMutationKey() {
  return [
    '2020-08-01',
    '/2020-08-01/studios/:studioId/launch-profiles/:launchProfileId',
    'PATCH',
  ] as const
}

export function getPatch20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatch20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['$patch']
      >,
    ) {
      return parseResponse(
        client['2020-08-01'].studios[':studioId']['launch-profiles'][':launchProfileId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function createPatch20200801StudiosStudioIdLaunchProfilesLaunchProfileId<
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
                    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['$patch']
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
    const mutationDefaults =
      getPatch20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMutationOptions<
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

export function get20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipPrincipalIdQueryKey(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['membership'][':principalId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '2020-08-01',
    '/2020-08-01/studios/:studioId/launch-profiles/:launchProfileId/membership/:principalId',
    keyArgs,
  ] as const
}

export function get20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipPrincipalIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['membership'][':principalId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['membership'][':principalId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['membership'][':principalId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof get20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipPrincipalIdQueryKey
    >
  >({
    queryKey:
      get20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipPrincipalIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-08-01'].studios[':studioId']['launch-profiles'][':launchProfileId'].membership[
          ':principalId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function create20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipPrincipalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['membership'][':principalId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['membership'][':principalId']['$get']
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
                    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['membership'][':principalId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof get20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipPrincipalIdQueryKey
          >
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
      ...get20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipPrincipalIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDelete20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipPrincipalIdMutationKey() {
  return [
    '2020-08-01',
    '/2020-08-01/studios/:studioId/launch-profiles/:launchProfileId/membership/:principalId',
    'DELETE',
  ] as const
}

export function getDelete20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipPrincipalIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['membership'][':principalId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['membership'][':principalId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDelete20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipPrincipalIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['membership'][':principalId']['$delete']
      >,
    ) {
      return parseResponse(
        client['2020-08-01'].studios[':studioId']['launch-profiles'][':launchProfileId'].membership[
          ':principalId'
        ].$delete(args, options),
      )
    },
  })
}

export function createDelete20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipPrincipalId<
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
                    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['membership'][':principalId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['membership'][':principalId']['$delete']
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
    const mutationDefaults =
      getDelete20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipPrincipalIdMutationOptions<
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

export function getPatch20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipPrincipalIdMutationKey() {
  return [
    '2020-08-01',
    '/2020-08-01/studios/:studioId/launch-profiles/:launchProfileId/membership/:principalId',
    'PATCH',
  ] as const
}

export function getPatch20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipPrincipalIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['membership'][':principalId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['membership'][':principalId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatch20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipPrincipalIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['membership'][':principalId']['$patch']
      >,
    ) {
      return parseResponse(
        client['2020-08-01'].studios[':studioId']['launch-profiles'][':launchProfileId'].membership[
          ':principalId'
        ].$patch(args, options),
      )
    },
  })
}

export function createPatch20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipPrincipalId<
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
                    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['membership'][':principalId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['membership'][':principalId']['$patch']
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
    const mutationDefaults =
      getPatch20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipPrincipalIdMutationOptions<
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

export function get20200801StudiosStudioIdStreamingImagesStreamingImageIdQueryKey(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images'][':streamingImageId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '2020-08-01',
    '/2020-08-01/studios/:studioId/streaming-images/:streamingImageId',
    keyArgs,
  ] as const
}

export function get20200801StudiosStudioIdStreamingImagesStreamingImageIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images'][':streamingImageId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images'][':streamingImageId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images'][':streamingImageId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200801StudiosStudioIdStreamingImagesStreamingImageIdQueryKey>
  >({
    queryKey: get20200801StudiosStudioIdStreamingImagesStreamingImageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-08-01'].studios[':studioId']['streaming-images'][':streamingImageId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function create20200801StudiosStudioIdStreamingImagesStreamingImageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images'][':streamingImageId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images'][':streamingImageId']['$get']
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
                    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images'][':streamingImageId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20200801StudiosStudioIdStreamingImagesStreamingImageIdQueryKey>
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
      ...get20200801StudiosStudioIdStreamingImagesStreamingImageIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDelete20200801StudiosStudioIdStreamingImagesStreamingImageIdMutationKey() {
  return [
    '2020-08-01',
    '/2020-08-01/studios/:studioId/streaming-images/:streamingImageId',
    'DELETE',
  ] as const
}

export function getDelete20200801StudiosStudioIdStreamingImagesStreamingImageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images'][':streamingImageId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images'][':streamingImageId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete20200801StudiosStudioIdStreamingImagesStreamingImageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images'][':streamingImageId']['$delete']
      >,
    ) {
      return parseResponse(
        client['2020-08-01'].studios[':studioId']['streaming-images'][':streamingImageId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDelete20200801StudiosStudioIdStreamingImagesStreamingImageId<
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
                    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images'][':streamingImageId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images'][':streamingImageId']['$delete']
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
    const mutationDefaults =
      getDelete20200801StudiosStudioIdStreamingImagesStreamingImageIdMutationOptions<
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

export function getPatch20200801StudiosStudioIdStreamingImagesStreamingImageIdMutationKey() {
  return [
    '2020-08-01',
    '/2020-08-01/studios/:studioId/streaming-images/:streamingImageId',
    'PATCH',
  ] as const
}

export function getPatch20200801StudiosStudioIdStreamingImagesStreamingImageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images'][':streamingImageId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images'][':streamingImageId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatch20200801StudiosStudioIdStreamingImagesStreamingImageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images'][':streamingImageId']['$patch']
      >,
    ) {
      return parseResponse(
        client['2020-08-01'].studios[':studioId']['streaming-images'][':streamingImageId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function createPatch20200801StudiosStudioIdStreamingImagesStreamingImageId<
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
                    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images'][':streamingImageId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images'][':streamingImageId']['$patch']
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
    const mutationDefaults =
      getPatch20200801StudiosStudioIdStreamingImagesStreamingImageIdMutationOptions<
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

export function get20200801StudiosStudioIdStreamingSessionsSessionIdQueryKey(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '2020-08-01',
    '/2020-08-01/studios/:studioId/streaming-sessions/:sessionId',
    keyArgs,
  ] as const
}

export function get20200801StudiosStudioIdStreamingSessionsSessionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200801StudiosStudioIdStreamingSessionsSessionIdQueryKey>
  >({
    queryKey: get20200801StudiosStudioIdStreamingSessionsSessionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-08-01'].studios[':studioId']['streaming-sessions'][':sessionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200801StudiosStudioIdStreamingSessionsSessionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['$get']
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
                    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20200801StudiosStudioIdStreamingSessionsSessionIdQueryKey>
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
      ...get20200801StudiosStudioIdStreamingSessionsSessionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDelete20200801StudiosStudioIdStreamingSessionsSessionIdMutationKey() {
  return [
    '2020-08-01',
    '/2020-08-01/studios/:studioId/streaming-sessions/:sessionId',
    'DELETE',
  ] as const
}

export function getDelete20200801StudiosStudioIdStreamingSessionsSessionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete20200801StudiosStudioIdStreamingSessionsSessionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['$delete']
      >,
    ) {
      return parseResponse(
        client['2020-08-01'].studios[':studioId']['streaming-sessions'][':sessionId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDelete20200801StudiosStudioIdStreamingSessionsSessionId<
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
                    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['$delete']
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
    const mutationDefaults =
      getDelete20200801StudiosStudioIdStreamingSessionsSessionIdMutationOptions<
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

export function get20200801StudiosStudioIdQueryKey(
  args: InferRequestType<(typeof client)['2020-08-01']['studios'][':studioId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-08-01', '/2020-08-01/studios/:studioId', keyArgs] as const
}

export function get20200801StudiosStudioIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-08-01']['studios'][':studioId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2020-08-01']['studios'][':studioId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-08-01']['studios'][':studioId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200801StudiosStudioIdQueryKey>
  >({
    queryKey: get20200801StudiosStudioIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-08-01'].studios[':studioId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200801StudiosStudioId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-08-01']['studios'][':studioId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2020-08-01']['studios'][':studioId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-08-01']['studios'][':studioId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20200801StudiosStudioIdQueryKey>
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
      ...get20200801StudiosStudioIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDelete20200801StudiosStudioIdMutationKey() {
  return ['2020-08-01', '/2020-08-01/studios/:studioId', 'DELETE'] as const
}

export function getDelete20200801StudiosStudioIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-08-01']['studios'][':studioId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2020-08-01']['studios'][':studioId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete20200801StudiosStudioIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2020-08-01']['studios'][':studioId']['$delete']>,
    ) {
      return parseResponse(client['2020-08-01'].studios[':studioId'].$delete(args, options))
    },
  })
}

export function createDelete20200801StudiosStudioId<
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
                  ReturnType<(typeof client)['2020-08-01']['studios'][':studioId']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2020-08-01']['studios'][':studioId']['$delete']>,
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
    const mutationDefaults = getDelete20200801StudiosStudioIdMutationOptions<
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

export function getPatch20200801StudiosStudioIdMutationKey() {
  return ['2020-08-01', '/2020-08-01/studios/:studioId', 'PATCH'] as const
}

export function getPatch20200801StudiosStudioIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-08-01']['studios'][':studioId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2020-08-01']['studios'][':studioId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatch20200801StudiosStudioIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2020-08-01']['studios'][':studioId']['$patch']>,
    ) {
      return parseResponse(client['2020-08-01'].studios[':studioId'].$patch(args, options))
    },
  })
}

export function createPatch20200801StudiosStudioId<
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
                Awaited<ReturnType<(typeof client)['2020-08-01']['studios'][':studioId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2020-08-01']['studios'][':studioId']['$patch']>,
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
    const mutationDefaults = getPatch20200801StudiosStudioIdMutationOptions<
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

export function get20200801StudiosStudioIdStudioComponentsStudioComponentIdQueryKey(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['studio-components'][':studioComponentId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '2020-08-01',
    '/2020-08-01/studios/:studioId/studio-components/:studioComponentId',
    keyArgs,
  ] as const
}

export function get20200801StudiosStudioIdStudioComponentsStudioComponentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2020-08-01']['studios'][':studioId']['studio-components'][':studioComponentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['studio-components'][':studioComponentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-08-01']['studios'][':studioId']['studio-components'][':studioComponentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200801StudiosStudioIdStudioComponentsStudioComponentIdQueryKey>
  >({
    queryKey: get20200801StudiosStudioIdStudioComponentsStudioComponentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-08-01'].studios[':studioId']['studio-components'][':studioComponentId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function create20200801StudiosStudioIdStudioComponentsStudioComponentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2020-08-01']['studios'][':studioId']['studio-components'][':studioComponentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['studio-components'][':studioComponentId']['$get']
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
                    (typeof client)['2020-08-01']['studios'][':studioId']['studio-components'][':studioComponentId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20200801StudiosStudioIdStudioComponentsStudioComponentIdQueryKey>
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
      ...get20200801StudiosStudioIdStudioComponentsStudioComponentIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDelete20200801StudiosStudioIdStudioComponentsStudioComponentIdMutationKey() {
  return [
    '2020-08-01',
    '/2020-08-01/studios/:studioId/studio-components/:studioComponentId',
    'DELETE',
  ] as const
}

export function getDelete20200801StudiosStudioIdStudioComponentsStudioComponentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-08-01']['studios'][':studioId']['studio-components'][':studioComponentId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2020-08-01']['studios'][':studioId']['studio-components'][':studioComponentId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete20200801StudiosStudioIdStudioComponentsStudioComponentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-08-01']['studios'][':studioId']['studio-components'][':studioComponentId']['$delete']
      >,
    ) {
      return parseResponse(
        client['2020-08-01'].studios[':studioId']['studio-components'][
          ':studioComponentId'
        ].$delete(args, options),
      )
    },
  })
}

export function createDelete20200801StudiosStudioIdStudioComponentsStudioComponentId<
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
                    (typeof client)['2020-08-01']['studios'][':studioId']['studio-components'][':studioComponentId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2020-08-01']['studios'][':studioId']['studio-components'][':studioComponentId']['$delete']
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
    const mutationDefaults =
      getDelete20200801StudiosStudioIdStudioComponentsStudioComponentIdMutationOptions<
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

export function getPatch20200801StudiosStudioIdStudioComponentsStudioComponentIdMutationKey() {
  return [
    '2020-08-01',
    '/2020-08-01/studios/:studioId/studio-components/:studioComponentId',
    'PATCH',
  ] as const
}

export function getPatch20200801StudiosStudioIdStudioComponentsStudioComponentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-08-01']['studios'][':studioId']['studio-components'][':studioComponentId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2020-08-01']['studios'][':studioId']['studio-components'][':studioComponentId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatch20200801StudiosStudioIdStudioComponentsStudioComponentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-08-01']['studios'][':studioId']['studio-components'][':studioComponentId']['$patch']
      >,
    ) {
      return parseResponse(
        client['2020-08-01'].studios[':studioId']['studio-components'][':studioComponentId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function createPatch20200801StudiosStudioIdStudioComponentsStudioComponentId<
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
                    (typeof client)['2020-08-01']['studios'][':studioId']['studio-components'][':studioComponentId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2020-08-01']['studios'][':studioId']['studio-components'][':studioComponentId']['$patch']
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
    const mutationDefaults =
      getPatch20200801StudiosStudioIdStudioComponentsStudioComponentIdMutationOptions<
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

export function get20200801StudiosStudioIdMembershipPrincipalIdQueryKey(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['membership'][':principalId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-08-01', '/2020-08-01/studios/:studioId/membership/:principalId', keyArgs] as const
}

export function get20200801StudiosStudioIdMembershipPrincipalIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2020-08-01']['studios'][':studioId']['membership'][':principalId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['membership'][':principalId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-08-01']['studios'][':studioId']['membership'][':principalId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200801StudiosStudioIdMembershipPrincipalIdQueryKey>
  >({
    queryKey: get20200801StudiosStudioIdMembershipPrincipalIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-08-01'].studios[':studioId'].membership[':principalId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200801StudiosStudioIdMembershipPrincipalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2020-08-01']['studios'][':studioId']['membership'][':principalId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['membership'][':principalId']['$get']
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
                    (typeof client)['2020-08-01']['studios'][':studioId']['membership'][':principalId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20200801StudiosStudioIdMembershipPrincipalIdQueryKey>
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
      ...get20200801StudiosStudioIdMembershipPrincipalIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDelete20200801StudiosStudioIdMembershipPrincipalIdMutationKey() {
  return ['2020-08-01', '/2020-08-01/studios/:studioId/membership/:principalId', 'DELETE'] as const
}

export function getDelete20200801StudiosStudioIdMembershipPrincipalIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-08-01']['studios'][':studioId']['membership'][':principalId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2020-08-01']['studios'][':studioId']['membership'][':principalId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete20200801StudiosStudioIdMembershipPrincipalIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-08-01']['studios'][':studioId']['membership'][':principalId']['$delete']
      >,
    ) {
      return parseResponse(
        client['2020-08-01'].studios[':studioId'].membership[':principalId'].$delete(args, options),
      )
    },
  })
}

export function createDelete20200801StudiosStudioIdMembershipPrincipalId<
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
                    (typeof client)['2020-08-01']['studios'][':studioId']['membership'][':principalId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2020-08-01']['studios'][':studioId']['membership'][':principalId']['$delete']
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
    const mutationDefaults = getDelete20200801StudiosStudioIdMembershipPrincipalIdMutationOptions<
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

export function get20200801EulasEulaIdQueryKey(
  args: InferRequestType<(typeof client)['2020-08-01']['eulas'][':eulaId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-08-01', '/2020-08-01/eulas/:eulaId', keyArgs] as const
}

export function get20200801EulasEulaIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-08-01']['eulas'][':eulaId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2020-08-01']['eulas'][':eulaId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-08-01']['eulas'][':eulaId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200801EulasEulaIdQueryKey>
  >({
    queryKey: get20200801EulasEulaIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-08-01'].eulas[':eulaId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200801EulasEulaId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-08-01']['eulas'][':eulaId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2020-08-01']['eulas'][':eulaId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-08-01']['eulas'][':eulaId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20200801EulasEulaIdQueryKey>
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
    return { ...get20200801EulasEulaIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function get20200801StudiosStudioIdLaunchProfilesLaunchProfileIdDetailsQueryKey(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['details']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '2020-08-01',
    '/2020-08-01/studios/:studioId/launch-profiles/:launchProfileId/details',
    keyArgs,
  ] as const
}

export function get20200801StudiosStudioIdLaunchProfilesLaunchProfileIdDetailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['details']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['details']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['details']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200801StudiosStudioIdLaunchProfilesLaunchProfileIdDetailsQueryKey>
  >({
    queryKey: get20200801StudiosStudioIdLaunchProfilesLaunchProfileIdDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-08-01'].studios[':studioId']['launch-profiles'][
          ':launchProfileId'
        ].details.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function create20200801StudiosStudioIdLaunchProfilesLaunchProfileIdDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['details']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['details']['$get']
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
                    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['details']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20200801StudiosStudioIdLaunchProfilesLaunchProfileIdDetailsQueryKey>
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
      ...get20200801StudiosStudioIdLaunchProfilesLaunchProfileIdDetailsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function get20200801StudiosStudioIdLaunchProfilesLaunchProfileIdInitLaunchProfileProtocolVersionsLaunchPurposePlatformQueryKey(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['init#launchProfileProtocolVersions&launchPurpose&platform']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '2020-08-01',
    '/2020-08-01/studios/:studioId/launch-profiles/:launchProfileId/init#launchProfileProtocolVersions&launchPurpose&platform',
    keyArgs,
  ] as const
}

export function get20200801StudiosStudioIdLaunchProfilesLaunchProfileIdInitLaunchProfileProtocolVersionsLaunchPurposePlatformQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['init#launchProfileProtocolVersions&launchPurpose&platform']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['init#launchProfileProtocolVersions&launchPurpose&platform']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['init#launchProfileProtocolVersions&launchPurpose&platform']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof get20200801StudiosStudioIdLaunchProfilesLaunchProfileIdInitLaunchProfileProtocolVersionsLaunchPurposePlatformQueryKey
    >
  >({
    queryKey:
      get20200801StudiosStudioIdLaunchProfilesLaunchProfileIdInitLaunchProfileProtocolVersionsLaunchPurposePlatformQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-08-01'].studios[':studioId']['launch-profiles'][':launchProfileId'][
          'init#launchProfileProtocolVersions&launchPurpose&platform'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function create20200801StudiosStudioIdLaunchProfilesLaunchProfileIdInitLaunchProfileProtocolVersionsLaunchPurposePlatform<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['init#launchProfileProtocolVersions&launchPurpose&platform']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['init#launchProfileProtocolVersions&launchPurpose&platform']['$get']
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
                    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['init#launchProfileProtocolVersions&launchPurpose&platform']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof get20200801StudiosStudioIdLaunchProfilesLaunchProfileIdInitLaunchProfileProtocolVersionsLaunchPurposePlatformQueryKey
          >
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
      ...get20200801StudiosStudioIdLaunchProfilesLaunchProfileIdInitLaunchProfileProtocolVersionsLaunchPurposePlatformQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function get20200801StudiosStudioIdStreamingSessionBackupsBackupIdQueryKey(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-session-backups'][':backupId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '2020-08-01',
    '/2020-08-01/studios/:studioId/streaming-session-backups/:backupId',
    keyArgs,
  ] as const
}

export function get20200801StudiosStudioIdStreamingSessionBackupsBackupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2020-08-01']['studios'][':studioId']['streaming-session-backups'][':backupId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-session-backups'][':backupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-08-01']['studios'][':studioId']['streaming-session-backups'][':backupId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200801StudiosStudioIdStreamingSessionBackupsBackupIdQueryKey>
  >({
    queryKey: get20200801StudiosStudioIdStreamingSessionBackupsBackupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-08-01'].studios[':studioId']['streaming-session-backups'][':backupId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function create20200801StudiosStudioIdStreamingSessionBackupsBackupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2020-08-01']['studios'][':studioId']['streaming-session-backups'][':backupId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-session-backups'][':backupId']['$get']
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
                    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-session-backups'][':backupId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20200801StudiosStudioIdStreamingSessionBackupsBackupIdQueryKey>
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
      ...get20200801StudiosStudioIdStreamingSessionBackupsBackupIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function get20200801StudiosStudioIdStreamingSessionsSessionIdStreamsStreamIdQueryKey(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['streams'][':streamId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '2020-08-01',
    '/2020-08-01/studios/:studioId/streaming-sessions/:sessionId/streams/:streamId',
    keyArgs,
  ] as const
}

export function get20200801StudiosStudioIdStreamingSessionsSessionIdStreamsStreamIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['streams'][':streamId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['streams'][':streamId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['streams'][':streamId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200801StudiosStudioIdStreamingSessionsSessionIdStreamsStreamIdQueryKey>
  >({
    queryKey: get20200801StudiosStudioIdStreamingSessionsSessionIdStreamsStreamIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-08-01'].studios[':studioId']['streaming-sessions'][':sessionId'].streams[
          ':streamId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function create20200801StudiosStudioIdStreamingSessionsSessionIdStreamsStreamId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['streams'][':streamId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['streams'][':streamId']['$get']
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
                    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['streams'][':streamId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof get20200801StudiosStudioIdStreamingSessionsSessionIdStreamsStreamIdQueryKey
          >
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
      ...get20200801StudiosStudioIdStreamingSessionsSessionIdStreamsStreamIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function get20200801EulasQueryKey(
  args: InferRequestType<(typeof client)['2020-08-01']['eulas']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-08-01', '/2020-08-01/eulas', keyArgs] as const
}

export function get20200801EulasQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2020-08-01']['eulas']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2020-08-01']['eulas']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2020-08-01']['eulas']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200801EulasQueryKey>
  >({
    queryKey: get20200801EulasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-08-01'].eulas.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function create20200801Eulas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2020-08-01']['eulas']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2020-08-01']['eulas']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-08-01']['eulas']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20200801EulasQueryKey>
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
    return { ...get20200801EulasQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function get20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipQueryKey(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['membership']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '2020-08-01',
    '/2020-08-01/studios/:studioId/launch-profiles/:launchProfileId/membership',
    keyArgs,
  ] as const
}

export function get20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['membership']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['membership']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['membership']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipQueryKey>
  >({
    queryKey: get20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-08-01'].studios[':studioId']['launch-profiles'][
          ':launchProfileId'
        ].membership.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function create20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembership<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['membership']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['membership']['$get']
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
                    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['membership']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof get20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipQueryKey
          >
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
      ...get20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPost20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipMutationKey() {
  return [
    '2020-08-01',
    '/2020-08-01/studios/:studioId/launch-profiles/:launchProfileId/membership',
    'POST',
  ] as const
}

export function getPost20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['membership']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['membership']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['membership']['$post']
      >,
    ) {
      return parseResponse(
        client['2020-08-01'].studios[':studioId']['launch-profiles'][
          ':launchProfileId'
        ].membership.$post(args, options),
      )
    },
  })
}

export function createPost20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembership<
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
                    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['membership']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['membership']['$post']
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
    const mutationDefaults =
      getPost20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipMutationOptions<
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

export function get20200801StudiosStudioIdStreamingSessionBackupsQueryKey(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-session-backups']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-08-01', '/2020-08-01/studios/:studioId/streaming-session-backups', keyArgs] as const
}

export function get20200801StudiosStudioIdStreamingSessionBackupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2020-08-01']['studios'][':studioId']['streaming-session-backups']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-session-backups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-08-01']['studios'][':studioId']['streaming-session-backups']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200801StudiosStudioIdStreamingSessionBackupsQueryKey>
  >({
    queryKey: get20200801StudiosStudioIdStreamingSessionBackupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-08-01'].studios[':studioId']['streaming-session-backups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200801StudiosStudioIdStreamingSessionBackups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2020-08-01']['studios'][':studioId']['streaming-session-backups']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-session-backups']['$get']
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
                    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-session-backups']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20200801StudiosStudioIdStreamingSessionBackupsQueryKey>
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
      ...get20200801StudiosStudioIdStreamingSessionBackupsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function get20200801StudiosStudioIdMembershipQueryKey(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['membership']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-08-01', '/2020-08-01/studios/:studioId/membership', keyArgs] as const
}

export function get20200801StudiosStudioIdMembershipQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2020-08-01']['studios'][':studioId']['membership']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['membership']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2020-08-01']['studios'][':studioId']['membership']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200801StudiosStudioIdMembershipQueryKey>
  >({
    queryKey: get20200801StudiosStudioIdMembershipQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-08-01'].studios[':studioId'].membership.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200801StudiosStudioIdMembership<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2020-08-01']['studios'][':studioId']['membership']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['membership']['$get']
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
                    (typeof client)['2020-08-01']['studios'][':studioId']['membership']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20200801StudiosStudioIdMembershipQueryKey>
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
      ...get20200801StudiosStudioIdMembershipQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPost20200801StudiosStudioIdMembershipMutationKey() {
  return ['2020-08-01', '/2020-08-01/studios/:studioId/membership', 'POST'] as const
}

export function getPost20200801StudiosStudioIdMembershipMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2020-08-01']['studios'][':studioId']['membership']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2020-08-01']['studios'][':studioId']['membership']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20200801StudiosStudioIdMembershipMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-08-01']['studios'][':studioId']['membership']['$post']
      >,
    ) {
      return parseResponse(
        client['2020-08-01'].studios[':studioId'].membership.$post(args, options),
      )
    },
  })
}

export function createPost20200801StudiosStudioIdMembership<
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
                    (typeof client)['2020-08-01']['studios'][':studioId']['membership']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2020-08-01']['studios'][':studioId']['membership']['$post']
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
    const mutationDefaults = getPost20200801StudiosStudioIdMembershipMutationOptions<
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

export function get20200801TagsResourceArnQueryKey(
  args: InferRequestType<(typeof client)['2020-08-01']['tags'][':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-08-01', '/2020-08-01/tags/:resourceArn', keyArgs] as const
}

export function get20200801TagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-08-01']['tags'][':resourceArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2020-08-01']['tags'][':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-08-01']['tags'][':resourceArn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200801TagsResourceArnQueryKey>
  >({
    queryKey: get20200801TagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-08-01'].tags[':resourceArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200801TagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-08-01']['tags'][':resourceArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2020-08-01']['tags'][':resourceArn']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-08-01']['tags'][':resourceArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20200801TagsResourceArnQueryKey>
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
      ...get20200801TagsResourceArnQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPost20200801TagsResourceArnMutationKey() {
  return ['2020-08-01', '/2020-08-01/tags/:resourceArn', 'POST'] as const
}

export function getPost20200801TagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-08-01']['tags'][':resourceArn']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['2020-08-01']['tags'][':resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20200801TagsResourceArnMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2020-08-01']['tags'][':resourceArn']['$post']>,
    ) {
      return parseResponse(client['2020-08-01'].tags[':resourceArn'].$post(args, options))
    },
  })
}

export function createPost20200801TagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client)['2020-08-01']['tags'][':resourceArn']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['2020-08-01']['tags'][':resourceArn']['$post']>,
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
    const mutationDefaults = getPost20200801TagsResourceArnMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPost20200801StudiosStudioIdStreamingSessionsSessionIdStartMutationKey() {
  return [
    '2020-08-01',
    '/2020-08-01/studios/:studioId/streaming-sessions/:sessionId/start',
    'POST',
  ] as const
}

export function getPost20200801StudiosStudioIdStreamingSessionsSessionIdStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['start']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['start']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20200801StudiosStudioIdStreamingSessionsSessionIdStartMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['start']['$post']
      >,
    ) {
      return parseResponse(
        client['2020-08-01'].studios[':studioId']['streaming-sessions'][':sessionId'].start.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPost20200801StudiosStudioIdStreamingSessionsSessionIdStart<
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
                    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['start']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['start']['$post']
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
    const mutationDefaults =
      getPost20200801StudiosStudioIdStreamingSessionsSessionIdStartMutationOptions<
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

export function getPut20200801StudiosStudioIdSsoConfigurationMutationKey() {
  return ['2020-08-01', '/2020-08-01/studios/:studioId/sso-configuration', 'PUT'] as const
}

export function getPut20200801StudiosStudioIdSsoConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-08-01']['studios'][':studioId']['sso-configuration']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2020-08-01']['studios'][':studioId']['sso-configuration']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPut20200801StudiosStudioIdSsoConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-08-01']['studios'][':studioId']['sso-configuration']['$put']
      >,
    ) {
      return parseResponse(
        client['2020-08-01'].studios[':studioId']['sso-configuration'].$put(args, options),
      )
    },
  })
}

export function createPut20200801StudiosStudioIdSsoConfiguration<
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
                    (typeof client)['2020-08-01']['studios'][':studioId']['sso-configuration']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2020-08-01']['studios'][':studioId']['sso-configuration']['$put']
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
    const mutationDefaults = getPut20200801StudiosStudioIdSsoConfigurationMutationOptions<
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

export function getPost20200801StudiosStudioIdStreamingSessionsSessionIdStopMutationKey() {
  return [
    '2020-08-01',
    '/2020-08-01/studios/:studioId/streaming-sessions/:sessionId/stop',
    'POST',
  ] as const
}

export function getPost20200801StudiosStudioIdStreamingSessionsSessionIdStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['stop']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['stop']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20200801StudiosStudioIdStreamingSessionsSessionIdStopMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['stop']['$post']
      >,
    ) {
      return parseResponse(
        client['2020-08-01'].studios[':studioId']['streaming-sessions'][':sessionId'].stop.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPost20200801StudiosStudioIdStreamingSessionsSessionIdStop<
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
                    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['stop']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['stop']['$post']
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
    const mutationDefaults =
      getPost20200801StudiosStudioIdStreamingSessionsSessionIdStopMutationOptions<
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

export function getDelete20200801TagsResourceArnTagKeysMutationKey() {
  return ['2020-08-01', '/2020-08-01/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function getDelete20200801TagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-08-01']['tags'][':resourceArn#tagKeys']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['2020-08-01']['tags'][':resourceArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete20200801TagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-08-01']['tags'][':resourceArn#tagKeys']['$delete']
      >,
    ) {
      return parseResponse(client['2020-08-01'].tags[':resourceArn#tagKeys'].$delete(args, options))
    },
  })
}

export function createDelete20200801TagsResourceArnTagKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client)['2020-08-01']['tags'][':resourceArn#tagKeys']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)['2020-08-01']['tags'][':resourceArn#tagKeys']['$delete']
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
    const mutationDefaults = getDelete20200801TagsResourceArnTagKeysMutationOptions<
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
