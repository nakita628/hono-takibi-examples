import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function get_2020_08_01Key() {
  return ['2020-08-01'] as const
}

export function getGet20200801StudiosStudioIdEulaAcceptancesKey(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['eula-acceptances']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-08-01', '/2020-08-01/studios/:studioId/eula-acceptances', keyArgs] as const
}

export function useGet20200801StudiosStudioIdEulaAcceptances<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['eula-acceptances']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200801StudiosStudioIdEulaAcceptancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['eula-acceptances'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200801StudiosStudioIdEulaAcceptances<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['eula-acceptances']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200801StudiosStudioIdEulaAcceptancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['eula-acceptances'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20200801StudiosStudioIdEulaAcceptancesKey() {
  return ['2020-08-01', '/2020-08-01/studios/:studioId/eula-acceptances', 'POST'] as const
}

export function usePost20200801StudiosStudioIdEulaAcceptances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['2020-08-01']['studios'][':studioId']['eula-acceptances']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20200801StudiosStudioIdEulaAcceptancesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['2020-08-01']['studios'][':studioId']['eula-acceptances']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['eula-acceptances'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20200801StudiosStudioIdLaunchProfilesKey(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-08-01', '/2020-08-01/studios/:studioId/launch-profiles', keyArgs] as const
}

export function useGet20200801StudiosStudioIdLaunchProfiles<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200801StudiosStudioIdLaunchProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['launch-profiles'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200801StudiosStudioIdLaunchProfiles<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200801StudiosStudioIdLaunchProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['launch-profiles'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20200801StudiosStudioIdLaunchProfilesKey() {
  return ['2020-08-01', '/2020-08-01/studios/:studioId/launch-profiles', 'POST'] as const
}

export function usePost20200801StudiosStudioIdLaunchProfiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20200801StudiosStudioIdLaunchProfilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['launch-profiles'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20200801StudiosStudioIdStreamingImagesKey(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-08-01', '/2020-08-01/studios/:studioId/streaming-images', keyArgs] as const
}

export function useGet20200801StudiosStudioIdStreamingImages<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200801StudiosStudioIdStreamingImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['streaming-images'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200801StudiosStudioIdStreamingImages<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200801StudiosStudioIdStreamingImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['streaming-images'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20200801StudiosStudioIdStreamingImagesKey() {
  return ['2020-08-01', '/2020-08-01/studios/:studioId/streaming-images', 'POST'] as const
}

export function usePost20200801StudiosStudioIdStreamingImages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20200801StudiosStudioIdStreamingImagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['streaming-images'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20200801StudiosStudioIdStreamingSessionsKey(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-08-01', '/2020-08-01/studios/:studioId/streaming-sessions', keyArgs] as const
}

export function useGet20200801StudiosStudioIdStreamingSessions<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200801StudiosStudioIdStreamingSessionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['streaming-sessions'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200801StudiosStudioIdStreamingSessions<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200801StudiosStudioIdStreamingSessionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['streaming-sessions'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20200801StudiosStudioIdStreamingSessionsKey() {
  return ['2020-08-01', '/2020-08-01/studios/:studioId/streaming-sessions', 'POST'] as const
}

export function usePost20200801StudiosStudioIdStreamingSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20200801StudiosStudioIdStreamingSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['streaming-sessions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost20200801StudiosStudioIdStreamingSessionsSessionIdStreamsKey() {
  return [
    '2020-08-01',
    '/2020-08-01/studios/:studioId/streaming-sessions/:sessionId/streams',
    'POST',
  ] as const
}

export function usePost20200801StudiosStudioIdStreamingSessionsSessionIdStreams<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['streams']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20200801StudiosStudioIdStreamingSessionsSessionIdStreamsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['streams']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['streaming-sessions'][
            ':sessionId'
          ].streams.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20200801StudiosKey(
  args: InferRequestType<(typeof client)['2020-08-01']['studios']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-08-01', '/2020-08-01/studios', keyArgs] as const
}

export function useGet20200801Studios<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-08-01']['studios']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-08-01']['studios']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200801StudiosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-08-01']['studios']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2020-08-01'].studios.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200801Studios<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-08-01']['studios']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-08-01']['studios']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200801StudiosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-08-01']['studios']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2020-08-01'].studios.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost20200801StudiosKey() {
  return ['2020-08-01', '/2020-08-01/studios', 'POST'] as const
}

export function usePost20200801Studios<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2020-08-01']['studios']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-08-01']['studios']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20200801StudiosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2020-08-01']['studios']['$post']> },
      ) => parseResponse(client['2020-08-01'].studios.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20200801StudiosStudioIdStudioComponentsKey(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['studio-components']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-08-01', '/2020-08-01/studios/:studioId/studio-components', keyArgs] as const
}

export function useGet20200801StudiosStudioIdStudioComponents<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['studio-components']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200801StudiosStudioIdStudioComponentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['studio-components'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200801StudiosStudioIdStudioComponents<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['studio-components']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200801StudiosStudioIdStudioComponentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['studio-components'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20200801StudiosStudioIdStudioComponentsKey() {
  return ['2020-08-01', '/2020-08-01/studios/:studioId/studio-components', 'POST'] as const
}

export function usePost20200801StudiosStudioIdStudioComponents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['2020-08-01']['studios'][':studioId']['studio-components']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20200801StudiosStudioIdStudioComponentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['2020-08-01']['studios'][':studioId']['studio-components']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['studio-components'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20200801StudiosStudioIdLaunchProfilesLaunchProfileIdKey(
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

export function useGet20200801StudiosStudioIdLaunchProfilesLaunchProfileId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200801StudiosStudioIdLaunchProfilesLaunchProfileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['launch-profiles'][':launchProfileId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200801StudiosStudioIdLaunchProfilesLaunchProfileId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200801StudiosStudioIdLaunchProfilesLaunchProfileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['launch-profiles'][':launchProfileId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDelete20200801StudiosStudioIdLaunchProfilesLaunchProfileIdKey() {
  return [
    '2020-08-01',
    '/2020-08-01/studios/:studioId/launch-profiles/:launchProfileId',
    'DELETE',
  ] as const
}

export function useDelete20200801StudiosStudioIdLaunchProfilesLaunchProfileId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20200801StudiosStudioIdLaunchProfilesLaunchProfileIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['launch-profiles'][':launchProfileId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatch20200801StudiosStudioIdLaunchProfilesLaunchProfileIdKey() {
  return [
    '2020-08-01',
    '/2020-08-01/studios/:studioId/launch-profiles/:launchProfileId',
    'PATCH',
  ] as const
}

export function usePatch20200801StudiosStudioIdLaunchProfilesLaunchProfileId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatch20200801StudiosStudioIdLaunchProfilesLaunchProfileIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['launch-profiles'][':launchProfileId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipPrincipalIdKey(
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

export function useGet20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipPrincipalId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['membership'][':principalId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipPrincipalIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['launch-profiles'][
            ':launchProfileId'
          ].membership[':principalId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipPrincipalId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['membership'][':principalId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipPrincipalIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['launch-profiles'][
            ':launchProfileId'
          ].membership[':principalId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDelete20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipPrincipalIdKey() {
  return [
    '2020-08-01',
    '/2020-08-01/studios/:studioId/launch-profiles/:launchProfileId/membership/:principalId',
    'DELETE',
  ] as const
}

export function useDelete20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipPrincipalId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['membership'][':principalId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDelete20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipPrincipalIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['membership'][':principalId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['launch-profiles'][
            ':launchProfileId'
          ].membership[':principalId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatch20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipPrincipalIdKey() {
  return [
    '2020-08-01',
    '/2020-08-01/studios/:studioId/launch-profiles/:launchProfileId/membership/:principalId',
    'PATCH',
  ] as const
}

export function usePatch20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipPrincipalId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['membership'][':principalId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatch20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipPrincipalIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['membership'][':principalId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['launch-profiles'][
            ':launchProfileId'
          ].membership[':principalId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20200801StudiosStudioIdStreamingImagesStreamingImageIdKey(
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

export function useGet20200801StudiosStudioIdStreamingImagesStreamingImageId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images'][':streamingImageId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200801StudiosStudioIdStreamingImagesStreamingImageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['streaming-images'][':streamingImageId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200801StudiosStudioIdStreamingImagesStreamingImageId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images'][':streamingImageId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200801StudiosStudioIdStreamingImagesStreamingImageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['streaming-images'][':streamingImageId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDelete20200801StudiosStudioIdStreamingImagesStreamingImageIdKey() {
  return [
    '2020-08-01',
    '/2020-08-01/studios/:studioId/streaming-images/:streamingImageId',
    'DELETE',
  ] as const
}

export function useDelete20200801StudiosStudioIdStreamingImagesStreamingImageId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images'][':streamingImageId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20200801StudiosStudioIdStreamingImagesStreamingImageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images'][':streamingImageId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['streaming-images'][
            ':streamingImageId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatch20200801StudiosStudioIdStreamingImagesStreamingImageIdKey() {
  return [
    '2020-08-01',
    '/2020-08-01/studios/:studioId/streaming-images/:streamingImageId',
    'PATCH',
  ] as const
}

export function usePatch20200801StudiosStudioIdStreamingImagesStreamingImageId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images'][':streamingImageId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatch20200801StudiosStudioIdStreamingImagesStreamingImageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['2020-08-01']['studios'][':studioId']['streaming-images'][':streamingImageId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['streaming-images'][':streamingImageId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20200801StudiosStudioIdStreamingSessionsSessionIdKey(
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

export function useGet20200801StudiosStudioIdStreamingSessionsSessionId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200801StudiosStudioIdStreamingSessionsSessionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['streaming-sessions'][':sessionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200801StudiosStudioIdStreamingSessionsSessionId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200801StudiosStudioIdStreamingSessionsSessionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['streaming-sessions'][':sessionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDelete20200801StudiosStudioIdStreamingSessionsSessionIdKey() {
  return [
    '2020-08-01',
    '/2020-08-01/studios/:studioId/streaming-sessions/:sessionId',
    'DELETE',
  ] as const
}

export function useDelete20200801StudiosStudioIdStreamingSessionsSessionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20200801StudiosStudioIdStreamingSessionsSessionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['streaming-sessions'][':sessionId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20200801StudiosStudioIdKey(
  args: InferRequestType<(typeof client)['2020-08-01']['studios'][':studioId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-08-01', '/2020-08-01/studios/:studioId', keyArgs] as const
}

export function useGet20200801StudiosStudioId<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-08-01']['studios'][':studioId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-08-01']['studios'][':studioId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200801StudiosStudioIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-08-01']['studios'][':studioId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2020-08-01'].studios[':studioId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200801StudiosStudioId<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-08-01']['studios'][':studioId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-08-01']['studios'][':studioId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200801StudiosStudioIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-08-01']['studios'][':studioId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2020-08-01'].studios[':studioId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDelete20200801StudiosStudioIdKey() {
  return ['2020-08-01', '/2020-08-01/studios/:studioId', 'DELETE'] as const
}

export function useDelete20200801StudiosStudioId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-08-01']['studios'][':studioId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-08-01']['studios'][':studioId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20200801StudiosStudioIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['2020-08-01']['studios'][':studioId']['$delete']>
        },
      ) => parseResponse(client['2020-08-01'].studios[':studioId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatch20200801StudiosStudioIdKey() {
  return ['2020-08-01', '/2020-08-01/studios/:studioId', 'PATCH'] as const
}

export function usePatch20200801StudiosStudioId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-08-01']['studios'][':studioId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-08-01']['studios'][':studioId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatch20200801StudiosStudioIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['2020-08-01']['studios'][':studioId']['$patch']>
        },
      ) => parseResponse(client['2020-08-01'].studios[':studioId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20200801StudiosStudioIdStudioComponentsStudioComponentIdKey(
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

export function useGet20200801StudiosStudioIdStudioComponentsStudioComponentId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['studio-components'][':studioComponentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200801StudiosStudioIdStudioComponentsStudioComponentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['studio-components'][':studioComponentId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200801StudiosStudioIdStudioComponentsStudioComponentId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['studio-components'][':studioComponentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200801StudiosStudioIdStudioComponentsStudioComponentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['studio-components'][':studioComponentId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDelete20200801StudiosStudioIdStudioComponentsStudioComponentIdKey() {
  return [
    '2020-08-01',
    '/2020-08-01/studios/:studioId/studio-components/:studioComponentId',
    'DELETE',
  ] as const
}

export function useDelete20200801StudiosStudioIdStudioComponentsStudioComponentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['2020-08-01']['studios'][':studioId']['studio-components'][':studioComponentId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20200801StudiosStudioIdStudioComponentsStudioComponentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['2020-08-01']['studios'][':studioId']['studio-components'][':studioComponentId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['studio-components'][
            ':studioComponentId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatch20200801StudiosStudioIdStudioComponentsStudioComponentIdKey() {
  return [
    '2020-08-01',
    '/2020-08-01/studios/:studioId/studio-components/:studioComponentId',
    'PATCH',
  ] as const
}

export function usePatch20200801StudiosStudioIdStudioComponentsStudioComponentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['2020-08-01']['studios'][':studioId']['studio-components'][':studioComponentId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatch20200801StudiosStudioIdStudioComponentsStudioComponentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['2020-08-01']['studios'][':studioId']['studio-components'][':studioComponentId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['studio-components'][
            ':studioComponentId'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20200801StudiosStudioIdMembershipPrincipalIdKey(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['membership'][':principalId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-08-01', '/2020-08-01/studios/:studioId/membership/:principalId', keyArgs] as const
}

export function useGet20200801StudiosStudioIdMembershipPrincipalId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['membership'][':principalId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200801StudiosStudioIdMembershipPrincipalIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-08-01'].studios[':studioId'].membership[':principalId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200801StudiosStudioIdMembershipPrincipalId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['membership'][':principalId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200801StudiosStudioIdMembershipPrincipalIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-08-01'].studios[':studioId'].membership[':principalId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDelete20200801StudiosStudioIdMembershipPrincipalIdKey() {
  return ['2020-08-01', '/2020-08-01/studios/:studioId/membership/:principalId', 'DELETE'] as const
}

export function useDelete20200801StudiosStudioIdMembershipPrincipalId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['2020-08-01']['studios'][':studioId']['membership'][':principalId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20200801StudiosStudioIdMembershipPrincipalIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['2020-08-01']['studios'][':studioId']['membership'][':principalId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2020-08-01'].studios[':studioId'].membership[':principalId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20200801EulasEulaIdKey(
  args: InferRequestType<(typeof client)['2020-08-01']['eulas'][':eulaId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-08-01', '/2020-08-01/eulas/:eulaId', keyArgs] as const
}

export function useGet20200801EulasEulaId<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-08-01']['eulas'][':eulaId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-08-01']['eulas'][':eulaId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200801EulasEulaIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-08-01']['eulas'][':eulaId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2020-08-01'].eulas[':eulaId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200801EulasEulaId<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-08-01']['eulas'][':eulaId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-08-01']['eulas'][':eulaId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200801EulasEulaIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-08-01']['eulas'][':eulaId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2020-08-01'].eulas[':eulaId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet20200801StudiosStudioIdLaunchProfilesLaunchProfileIdDetailsKey(
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

export function useGet20200801StudiosStudioIdLaunchProfilesLaunchProfileIdDetails<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['details']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200801StudiosStudioIdLaunchProfilesLaunchProfileIdDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['launch-profiles'][
            ':launchProfileId'
          ].details.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200801StudiosStudioIdLaunchProfilesLaunchProfileIdDetails<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['details']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200801StudiosStudioIdLaunchProfilesLaunchProfileIdDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['launch-profiles'][
            ':launchProfileId'
          ].details.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20200801StudiosStudioIdLaunchProfilesLaunchProfileIdInitLaunchProfileProtocolVersionsLaunchPurposePlatformKey(
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

export function useGet20200801StudiosStudioIdLaunchProfilesLaunchProfileIdInitLaunchProfileProtocolVersionsLaunchPurposePlatform<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['init#launchProfileProtocolVersions&launchPurpose&platform']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200801StudiosStudioIdLaunchProfilesLaunchProfileIdInitLaunchProfileProtocolVersionsLaunchPurposePlatformKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['launch-profiles'][':launchProfileId'][
            'init#launchProfileProtocolVersions&launchPurpose&platform'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200801StudiosStudioIdLaunchProfilesLaunchProfileIdInitLaunchProfileProtocolVersionsLaunchPurposePlatform<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['init#launchProfileProtocolVersions&launchPurpose&platform']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200801StudiosStudioIdLaunchProfilesLaunchProfileIdInitLaunchProfileProtocolVersionsLaunchPurposePlatformKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['launch-profiles'][':launchProfileId'][
            'init#launchProfileProtocolVersions&launchPurpose&platform'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20200801StudiosStudioIdStreamingSessionBackupsBackupIdKey(
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

export function useGet20200801StudiosStudioIdStreamingSessionBackupsBackupId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-session-backups'][':backupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200801StudiosStudioIdStreamingSessionBackupsBackupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['streaming-session-backups'][':backupId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200801StudiosStudioIdStreamingSessionBackupsBackupId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-session-backups'][':backupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200801StudiosStudioIdStreamingSessionBackupsBackupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['streaming-session-backups'][':backupId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20200801StudiosStudioIdStreamingSessionsSessionIdStreamsStreamIdKey(
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

export function useGet20200801StudiosStudioIdStreamingSessionsSessionIdStreamsStreamId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['streams'][':streamId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200801StudiosStudioIdStreamingSessionsSessionIdStreamsStreamIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['streaming-sessions'][':sessionId'].streams[
            ':streamId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200801StudiosStudioIdStreamingSessionsSessionIdStreamsStreamId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['streams'][':streamId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200801StudiosStudioIdStreamingSessionsSessionIdStreamsStreamIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['streaming-sessions'][':sessionId'].streams[
            ':streamId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20200801EulasKey(
  args: InferRequestType<(typeof client)['2020-08-01']['eulas']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-08-01', '/2020-08-01/eulas', keyArgs] as const
}

export function useGet20200801Eulas<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-08-01']['eulas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2020-08-01']['eulas']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGet20200801EulasKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2020-08-01']['eulas']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2020-08-01'].eulas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200801Eulas<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-08-01']['eulas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2020-08-01']['eulas']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGet20200801EulasKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2020-08-01']['eulas']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2020-08-01'].eulas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipKey(
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

export function useGet20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembership<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['membership']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['launch-profiles'][
            ':launchProfileId'
          ].membership.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembership<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['membership']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['launch-profiles'][
            ':launchProfileId'
          ].membership.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipKey() {
  return [
    '2020-08-01',
    '/2020-08-01/studios/:studioId/launch-profiles/:launchProfileId/membership',
    'POST',
  ] as const
}

export function usePost20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembership<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['membership']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPost20200801StudiosStudioIdLaunchProfilesLaunchProfileIdMembershipKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['2020-08-01']['studios'][':studioId']['launch-profiles'][':launchProfileId']['membership']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['launch-profiles'][
            ':launchProfileId'
          ].membership.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20200801StudiosStudioIdStreamingSessionBackupsKey(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-session-backups']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-08-01', '/2020-08-01/studios/:studioId/streaming-session-backups', keyArgs] as const
}

export function useGet20200801StudiosStudioIdStreamingSessionBackups<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-session-backups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200801StudiosStudioIdStreamingSessionBackupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['streaming-session-backups'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200801StudiosStudioIdStreamingSessionBackups<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['streaming-session-backups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200801StudiosStudioIdStreamingSessionBackupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['streaming-session-backups'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20200801StudiosStudioIdMembershipKey(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['membership']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-08-01', '/2020-08-01/studios/:studioId/membership', keyArgs] as const
}

export function useGet20200801StudiosStudioIdMembership<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['membership']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200801StudiosStudioIdMembershipKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-08-01'].studios[':studioId'].membership.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200801StudiosStudioIdMembership<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-08-01']['studios'][':studioId']['membership']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200801StudiosStudioIdMembershipKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-08-01'].studios[':studioId'].membership.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20200801StudiosStudioIdMembershipKey() {
  return ['2020-08-01', '/2020-08-01/studios/:studioId/membership', 'POST'] as const
}

export function usePost20200801StudiosStudioIdMembership<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['2020-08-01']['studios'][':studioId']['membership']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20200801StudiosStudioIdMembershipKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['2020-08-01']['studios'][':studioId']['membership']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2020-08-01'].studios[':studioId'].membership.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20200801TagsResourceArnKey(
  args: InferRequestType<(typeof client)['2020-08-01']['tags'][':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-08-01', '/2020-08-01/tags/:resourceArn', keyArgs] as const
}

export function useGet20200801TagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-08-01']['tags'][':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-08-01']['tags'][':resourceArn']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200801TagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-08-01']['tags'][':resourceArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2020-08-01'].tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200801TagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-08-01']['tags'][':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-08-01']['tags'][':resourceArn']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200801TagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-08-01']['tags'][':resourceArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2020-08-01'].tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost20200801TagsResourceArnKey() {
  return ['2020-08-01', '/2020-08-01/tags/:resourceArn', 'POST'] as const
}

export function usePost20200801TagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-08-01']['tags'][':resourceArn']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-08-01']['tags'][':resourceArn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20200801TagsResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['2020-08-01']['tags'][':resourceArn']['$post']>
        },
      ) => parseResponse(client['2020-08-01'].tags[':resourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost20200801StudiosStudioIdStreamingSessionsSessionIdStartKey() {
  return [
    '2020-08-01',
    '/2020-08-01/studios/:studioId/streaming-sessions/:sessionId/start',
    'POST',
  ] as const
}

export function usePost20200801StudiosStudioIdStreamingSessionsSessionIdStart<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['start']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20200801StudiosStudioIdStreamingSessionsSessionIdStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['start']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['streaming-sessions'][':sessionId'].start.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPut20200801StudiosStudioIdSsoConfigurationKey() {
  return ['2020-08-01', '/2020-08-01/studios/:studioId/sso-configuration', 'PUT'] as const
}

export function usePut20200801StudiosStudioIdSsoConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['2020-08-01']['studios'][':studioId']['sso-configuration']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut20200801StudiosStudioIdSsoConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['2020-08-01']['studios'][':studioId']['sso-configuration']['$put']
          >
        },
      ) =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['sso-configuration'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost20200801StudiosStudioIdStreamingSessionsSessionIdStopKey() {
  return [
    '2020-08-01',
    '/2020-08-01/studios/:studioId/streaming-sessions/:sessionId/stop',
    'POST',
  ] as const
}

export function usePost20200801StudiosStudioIdStreamingSessionsSessionIdStop<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['stop']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20200801StudiosStudioIdStreamingSessionsSessionIdStopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['2020-08-01']['studios'][':studioId']['streaming-sessions'][':sessionId']['stop']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2020-08-01'].studios[':studioId']['streaming-sessions'][':sessionId'].stop.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20200801TagsResourceArnTagKeysKey() {
  return ['2020-08-01', '/2020-08-01/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function useDelete20200801TagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['2020-08-01']['tags'][':resourceArn#tagKeys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20200801TagsResourceArnTagKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['2020-08-01']['tags'][':resourceArn#tagKeys']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2020-08-01'].tags[':resourceArn#tagKeys'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
