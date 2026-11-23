import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBackendKey() {
  return ['backend'] as const
}

export function getS3BucketsKey() {
  return ['s3Buckets'] as const
}

export function getPostBackendAppIdEnvironmentsBackendEnvironmentNameCloneKey() {
  return ['backend', '/backend/:appId/environments/:backendEnvironmentName/clone', 'POST'] as const
}

export function usePostBackendAppIdEnvironmentsBackendEnvironmentNameClone<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.backend)[':appId']['environments'][':backendEnvironmentName']['clone']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.backend)[':appId']['environments'][':backendEnvironmentName']['clone']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBackendAppIdEnvironmentsBackendEnvironmentNameCloneKey()
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
            (typeof client.backend)[':appId']['environments'][':backendEnvironmentName']['clone']['$post']
          >
        },
      ) =>
        parseResponse(
          client.backend[':appId'].environments[':backendEnvironmentName'].clone.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBackendKey() {
  return ['backend', '/backend', 'POST'] as const
}

export function usePostBackend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backend.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.backend.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBackendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.backend.$post> }) =>
        parseResponse(client.backend.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBackendAppIdApiKey() {
  return ['backend', '/backend/:appId/api', 'POST'] as const
}

export function usePostBackendAppIdApi<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.backend)[':appId']['api']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.backend)[':appId']['api']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBackendAppIdApiKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.backend)[':appId']['api']['$post']> },
      ) => parseResponse(client.backend[':appId'].api.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBackendAppIdAuthKey() {
  return ['backend', '/backend/:appId/auth', 'POST'] as const
}

export function usePostBackendAppIdAuth<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.backend)[':appId']['auth']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.backend)[':appId']['auth']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBackendAppIdAuthKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.backend)[':appId']['auth']['$post']> },
      ) => parseResponse(client.backend[':appId'].auth.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBackendAppIdConfigKey() {
  return ['backend', '/backend/:appId/config', 'POST'] as const
}

export function usePostBackendAppIdConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.backend)[':appId']['config']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.backend)[':appId']['config']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBackendAppIdConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.backend)[':appId']['config']['$post']> },
      ) => parseResponse(client.backend[':appId'].config.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBackendAppIdStorageKey() {
  return ['backend', '/backend/:appId/storage', 'POST'] as const
}

export function usePostBackendAppIdStorage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.backend)[':appId']['storage']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.backend)[':appId']['storage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBackendAppIdStorageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.backend)[':appId']['storage']['$post']> },
      ) => parseResponse(client.backend[':appId'].storage.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBackendAppIdChallengeKey() {
  return ['backend', '/backend/:appId/challenge', 'POST'] as const
}

export function usePostBackendAppIdChallenge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.backend)[':appId']['challenge']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.backend)[':appId']['challenge']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBackendAppIdChallengeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.backend)[':appId']['challenge']['$post']> },
      ) => parseResponse(client.backend[':appId'].challenge.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBackendAppIdEnvironmentsBackendEnvironmentNameRemoveKey() {
  return ['backend', '/backend/:appId/environments/:backendEnvironmentName/remove', 'POST'] as const
}

export function usePostBackendAppIdEnvironmentsBackendEnvironmentNameRemove<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.backend)[':appId']['environments'][':backendEnvironmentName']['remove']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.backend)[':appId']['environments'][':backendEnvironmentName']['remove']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBackendAppIdEnvironmentsBackendEnvironmentNameRemoveKey()
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
            (typeof client.backend)[':appId']['environments'][':backendEnvironmentName']['remove']['$post']
          >
        },
      ) =>
        parseResponse(
          client.backend[':appId'].environments[':backendEnvironmentName'].remove.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBackendAppIdApiBackendEnvironmentNameRemoveKey() {
  return ['backend', '/backend/:appId/api/:backendEnvironmentName/remove', 'POST'] as const
}

export function usePostBackendAppIdApiBackendEnvironmentNameRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.backend)[':appId']['api'][':backendEnvironmentName']['remove']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.backend)[':appId']['api'][':backendEnvironmentName']['remove']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBackendAppIdApiBackendEnvironmentNameRemoveKey()
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
            (typeof client.backend)[':appId']['api'][':backendEnvironmentName']['remove']['$post']
          >
        },
      ) =>
        parseResponse(
          client.backend[':appId'].api[':backendEnvironmentName'].remove.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBackendAppIdAuthBackendEnvironmentNameRemoveKey() {
  return ['backend', '/backend/:appId/auth/:backendEnvironmentName/remove', 'POST'] as const
}

export function usePostBackendAppIdAuthBackendEnvironmentNameRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.backend)[':appId']['auth'][':backendEnvironmentName']['remove']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.backend)[':appId']['auth'][':backendEnvironmentName']['remove']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBackendAppIdAuthBackendEnvironmentNameRemoveKey()
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
            (typeof client.backend)[':appId']['auth'][':backendEnvironmentName']['remove']['$post']
          >
        },
      ) =>
        parseResponse(
          client.backend[':appId'].auth[':backendEnvironmentName'].remove.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBackendAppIdStorageBackendEnvironmentNameRemoveKey() {
  return ['backend', '/backend/:appId/storage/:backendEnvironmentName/remove', 'POST'] as const
}

export function usePostBackendAppIdStorageBackendEnvironmentNameRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.backend)[':appId']['storage'][':backendEnvironmentName']['remove']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.backend)[':appId']['storage'][':backendEnvironmentName']['remove']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBackendAppIdStorageBackendEnvironmentNameRemoveKey()
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
            (typeof client.backend)[':appId']['storage'][':backendEnvironmentName']['remove']['$post']
          >
        },
      ) =>
        parseResponse(
          client.backend[':appId'].storage[':backendEnvironmentName'].remove.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBackendAppIdChallengeSessionIdRemoveKey() {
  return ['backend', '/backend/:appId/challenge/:sessionId/remove', 'POST'] as const
}

export function usePostBackendAppIdChallengeSessionIdRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.backend)[':appId']['challenge'][':sessionId']['remove']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.backend)[':appId']['challenge'][':sessionId']['remove']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBackendAppIdChallengeSessionIdRemoveKey()
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
            (typeof client.backend)[':appId']['challenge'][':sessionId']['remove']['$post']
          >
        },
      ) =>
        parseResponse(
          client.backend[':appId'].challenge[':sessionId'].remove.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBackendAppIdApiBackendEnvironmentNameGenerateModelsKey() {
  return ['backend', '/backend/:appId/api/:backendEnvironmentName/generateModels', 'POST'] as const
}

export function usePostBackendAppIdApiBackendEnvironmentNameGenerateModels<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.backend)[':appId']['api'][':backendEnvironmentName']['generateModels']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.backend)[':appId']['api'][':backendEnvironmentName']['generateModels']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBackendAppIdApiBackendEnvironmentNameGenerateModelsKey()
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
            (typeof client.backend)[':appId']['api'][':backendEnvironmentName']['generateModels']['$post']
          >
        },
      ) =>
        parseResponse(
          client.backend[':appId'].api[':backendEnvironmentName'].generateModels.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBackendAppIdDetailsKey() {
  return ['backend', '/backend/:appId/details', 'POST'] as const
}

export function usePostBackendAppIdDetails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.backend)[':appId']['details']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.backend)[':appId']['details']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBackendAppIdDetailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.backend)[':appId']['details']['$post']> },
      ) => parseResponse(client.backend[':appId'].details.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBackendAppIdApiBackendEnvironmentNameDetailsKey() {
  return ['backend', '/backend/:appId/api/:backendEnvironmentName/details', 'POST'] as const
}

export function usePostBackendAppIdApiBackendEnvironmentNameDetails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.backend)[':appId']['api'][':backendEnvironmentName']['details']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.backend)[':appId']['api'][':backendEnvironmentName']['details']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBackendAppIdApiBackendEnvironmentNameDetailsKey()
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
            (typeof client.backend)[':appId']['api'][':backendEnvironmentName']['details']['$post']
          >
        },
      ) =>
        parseResponse(
          client.backend[':appId'].api[':backendEnvironmentName'].details.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBackendAppIdApiBackendEnvironmentNameGetModelsKey() {
  return ['backend', '/backend/:appId/api/:backendEnvironmentName/getModels', 'POST'] as const
}

export function usePostBackendAppIdApiBackendEnvironmentNameGetModels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.backend)[':appId']['api'][':backendEnvironmentName']['getModels']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.backend)[':appId']['api'][':backendEnvironmentName']['getModels']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBackendAppIdApiBackendEnvironmentNameGetModelsKey()
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
            (typeof client.backend)[':appId']['api'][':backendEnvironmentName']['getModels']['$post']
          >
        },
      ) =>
        parseResponse(
          client.backend[':appId'].api[':backendEnvironmentName'].getModels.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBackendAppIdAuthBackendEnvironmentNameDetailsKey() {
  return ['backend', '/backend/:appId/auth/:backendEnvironmentName/details', 'POST'] as const
}

export function usePostBackendAppIdAuthBackendEnvironmentNameDetails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.backend)[':appId']['auth'][':backendEnvironmentName']['details']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.backend)[':appId']['auth'][':backendEnvironmentName']['details']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBackendAppIdAuthBackendEnvironmentNameDetailsKey()
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
            (typeof client.backend)[':appId']['auth'][':backendEnvironmentName']['details']['$post']
          >
        },
      ) =>
        parseResponse(
          client.backend[':appId'].auth[':backendEnvironmentName'].details.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBackendAppIdJobBackendEnvironmentNameJobIdKey(
  args: InferRequestType<
    (typeof client.backend)[':appId']['job'][':backendEnvironmentName'][':jobId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['backend', '/backend/:appId/job/:backendEnvironmentName/:jobId', keyArgs] as const
}

export function useGetBackendAppIdJobBackendEnvironmentNameJobId<TError = unknown>(
  args: InferRequestType<
    (typeof client.backend)[':appId']['job'][':backendEnvironmentName'][':jobId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.backend)[':appId']['job'][':backendEnvironmentName'][':jobId']['$get']
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
        ? getGetBackendAppIdJobBackendEnvironmentNameJobIdKey(args)
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
                (typeof client.backend)[':appId']['job'][':backendEnvironmentName'][':jobId']['$get']
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
          client.backend[':appId'].job[':backendEnvironmentName'][':jobId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBackendAppIdJobBackendEnvironmentNameJobId<TError = unknown>(
  args: InferRequestType<
    (typeof client.backend)[':appId']['job'][':backendEnvironmentName'][':jobId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.backend)[':appId']['job'][':backendEnvironmentName'][':jobId']['$get']
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
        ? getGetBackendAppIdJobBackendEnvironmentNameJobIdKey(args)
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
                (typeof client.backend)[':appId']['job'][':backendEnvironmentName'][':jobId']['$get']
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
          client.backend[':appId'].job[':backendEnvironmentName'][':jobId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostBackendAppIdJobBackendEnvironmentNameJobIdKey() {
  return ['backend', '/backend/:appId/job/:backendEnvironmentName/:jobId', 'POST'] as const
}

export function usePostBackendAppIdJobBackendEnvironmentNameJobId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.backend)[':appId']['job'][':backendEnvironmentName'][':jobId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.backend)[':appId']['job'][':backendEnvironmentName'][':jobId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBackendAppIdJobBackendEnvironmentNameJobIdKey()
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
            (typeof client.backend)[':appId']['job'][':backendEnvironmentName'][':jobId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.backend[':appId'].job[':backendEnvironmentName'][':jobId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBackendAppIdStorageBackendEnvironmentNameDetailsKey() {
  return ['backend', '/backend/:appId/storage/:backendEnvironmentName/details', 'POST'] as const
}

export function usePostBackendAppIdStorageBackendEnvironmentNameDetails<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.backend)[':appId']['storage'][':backendEnvironmentName']['details']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.backend)[':appId']['storage'][':backendEnvironmentName']['details']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBackendAppIdStorageBackendEnvironmentNameDetailsKey()
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
            (typeof client.backend)[':appId']['storage'][':backendEnvironmentName']['details']['$post']
          >
        },
      ) =>
        parseResponse(
          client.backend[':appId'].storage[':backendEnvironmentName'].details.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBackendAppIdChallengeSessionIdKey(
  args: InferRequestType<(typeof client.backend)[':appId']['challenge'][':sessionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['backend', '/backend/:appId/challenge/:sessionId', keyArgs] as const
}

export function useGetBackendAppIdChallengeSessionId<TError = unknown>(
  args: InferRequestType<(typeof client.backend)[':appId']['challenge'][':sessionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.backend)[':appId']['challenge'][':sessionId']['$get']>
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
        ? getGetBackendAppIdChallengeSessionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.backend)[':appId']['challenge'][':sessionId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.backend[':appId'].challenge[':sessionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBackendAppIdChallengeSessionId<TError = unknown>(
  args: InferRequestType<(typeof client.backend)[':appId']['challenge'][':sessionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.backend)[':appId']['challenge'][':sessionId']['$get']>
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
        ? getGetBackendAppIdChallengeSessionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.backend)[':appId']['challenge'][':sessionId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.backend[':appId'].challenge[':sessionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBackendAppIdAuthBackendEnvironmentNameImportKey() {
  return ['backend', '/backend/:appId/auth/:backendEnvironmentName/import', 'POST'] as const
}

export function usePostBackendAppIdAuthBackendEnvironmentNameImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.backend)[':appId']['auth'][':backendEnvironmentName']['import']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.backend)[':appId']['auth'][':backendEnvironmentName']['import']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBackendAppIdAuthBackendEnvironmentNameImportKey()
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
            (typeof client.backend)[':appId']['auth'][':backendEnvironmentName']['import']['$post']
          >
        },
      ) =>
        parseResponse(
          client.backend[':appId'].auth[':backendEnvironmentName'].import.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBackendAppIdStorageBackendEnvironmentNameImportKey() {
  return ['backend', '/backend/:appId/storage/:backendEnvironmentName/import', 'POST'] as const
}

export function usePostBackendAppIdStorageBackendEnvironmentNameImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.backend)[':appId']['storage'][':backendEnvironmentName']['import']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.backend)[':appId']['storage'][':backendEnvironmentName']['import']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBackendAppIdStorageBackendEnvironmentNameImportKey()
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
            (typeof client.backend)[':appId']['storage'][':backendEnvironmentName']['import']['$post']
          >
        },
      ) =>
        parseResponse(
          client.backend[':appId'].storage[':backendEnvironmentName'].import.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBackendAppIdJobBackendEnvironmentNameKey() {
  return ['backend', '/backend/:appId/job/:backendEnvironmentName', 'POST'] as const
}

export function usePostBackendAppIdJobBackendEnvironmentName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.backend)[':appId']['job'][':backendEnvironmentName']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.backend)[':appId']['job'][':backendEnvironmentName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBackendAppIdJobBackendEnvironmentNameKey()
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
            (typeof client.backend)[':appId']['job'][':backendEnvironmentName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.backend[':appId'].job[':backendEnvironmentName'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostS3BucketsKey() {
  return ['s3Buckets', '/s3Buckets', 'POST'] as const
}

export function usePostS3Buckets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.s3Buckets.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.s3Buckets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostS3BucketsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.s3Buckets.$post> }) =>
        parseResponse(client.s3Buckets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBackendAppIdRemoveKey() {
  return ['backend', '/backend/:appId/remove', 'POST'] as const
}

export function usePostBackendAppIdRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.backend)[':appId']['remove']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.backend)[':appId']['remove']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBackendAppIdRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.backend)[':appId']['remove']['$post']> },
      ) => parseResponse(client.backend[':appId'].remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBackendAppIdConfigRemoveKey() {
  return ['backend', '/backend/:appId/config/remove', 'POST'] as const
}

export function usePostBackendAppIdConfigRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.backend)[':appId']['config']['remove']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.backend)[':appId']['config']['remove']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBackendAppIdConfigRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.backend)[':appId']['config']['remove']['$post']>
        },
      ) => parseResponse(client.backend[':appId'].config.remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBackendAppIdApiBackendEnvironmentNameKey() {
  return ['backend', '/backend/:appId/api/:backendEnvironmentName', 'POST'] as const
}

export function usePostBackendAppIdApiBackendEnvironmentName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.backend)[':appId']['api'][':backendEnvironmentName']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.backend)[':appId']['api'][':backendEnvironmentName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBackendAppIdApiBackendEnvironmentNameKey()
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
            (typeof client.backend)[':appId']['api'][':backendEnvironmentName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.backend[':appId'].api[':backendEnvironmentName'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBackendAppIdAuthBackendEnvironmentNameKey() {
  return ['backend', '/backend/:appId/auth/:backendEnvironmentName', 'POST'] as const
}

export function usePostBackendAppIdAuthBackendEnvironmentName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.backend)[':appId']['auth'][':backendEnvironmentName']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.backend)[':appId']['auth'][':backendEnvironmentName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBackendAppIdAuthBackendEnvironmentNameKey()
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
            (typeof client.backend)[':appId']['auth'][':backendEnvironmentName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.backend[':appId'].auth[':backendEnvironmentName'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBackendAppIdConfigUpdateKey() {
  return ['backend', '/backend/:appId/config/update', 'POST'] as const
}

export function usePostBackendAppIdConfigUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.backend)[':appId']['config']['update']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.backend)[':appId']['config']['update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBackendAppIdConfigUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.backend)[':appId']['config']['update']['$post']>
        },
      ) => parseResponse(client.backend[':appId'].config.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBackendAppIdStorageBackendEnvironmentNameKey() {
  return ['backend', '/backend/:appId/storage/:backendEnvironmentName', 'POST'] as const
}

export function usePostBackendAppIdStorageBackendEnvironmentName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.backend)[':appId']['storage'][':backendEnvironmentName']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.backend)[':appId']['storage'][':backendEnvironmentName']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBackendAppIdStorageBackendEnvironmentNameKey()
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
            (typeof client.backend)[':appId']['storage'][':backendEnvironmentName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.backend[':appId'].storage[':backendEnvironmentName'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
