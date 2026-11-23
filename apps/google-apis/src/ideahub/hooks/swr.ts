import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1alphaKey() {
  return ['v1alpha'] as const
}

export function getGetV1alphaIdeasKey(args: InferRequestType<typeof client.v1alpha.ideas.$get>) {
  return ['v1alpha', '/v1alpha/ideas', args] as const
}

export function useGetV1alphaIdeas<TError = unknown>(
  args: InferRequestType<typeof client.v1alpha.ideas.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1alpha.ideas.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1alphaIdeasKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1alpha.ideas.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1alpha.ideas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1alphaIdeas<TError = unknown>(
  args: InferRequestType<typeof client.v1alpha.ideas.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1alpha.ideas.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1alphaIdeasKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1alpha.ideas.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1alpha.ideas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1alphaNameKey() {
  return ['v1alpha', '/v1alpha/:name', 'PATCH'] as const
}

export function usePatchV1alphaName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha)[':name']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha)[':name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1alphaNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1alpha)[':name']['$patch']> },
      ) => parseResponse(client.v1alpha[':name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1alphaParentIdeaActivitiesKey() {
  return ['v1alpha', '/v1alpha/:parent/ideaActivities', 'POST'] as const
}

export function usePostV1alphaParentIdeaActivities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha)[':parent']['ideaActivities']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha)[':parent']['ideaActivities']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1alphaParentIdeaActivitiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1alpha)[':parent']['ideaActivities']['$post']> },
      ) => parseResponse(client.v1alpha[':parent'].ideaActivities.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1alphaParentIdeasKey(
  args: InferRequestType<(typeof client.v1alpha)[':parent']['ideas']['$get']>,
) {
  return ['v1alpha', '/v1alpha/:parent/ideas', args] as const
}

export function useGetV1alphaParentIdeas<TError = unknown>(
  args: InferRequestType<(typeof client.v1alpha)[':parent']['ideas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha)[':parent']['ideas']['$get']>>
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
        ? getGetV1alphaParentIdeasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha)[':parent']['ideas']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1alpha[':parent'].ideas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1alphaParentIdeas<TError = unknown>(
  args: InferRequestType<(typeof client.v1alpha)[':parent']['ideas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha)[':parent']['ideas']['$get']>>
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
        ? getGetV1alphaParentIdeasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha)[':parent']['ideas']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1alpha[':parent'].ideas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1alphaParentLocalesKey(
  args: InferRequestType<(typeof client.v1alpha)[':parent']['locales']['$get']>,
) {
  return ['v1alpha', '/v1alpha/:parent/locales', args] as const
}

export function useGetV1alphaParentLocales<TError = unknown>(
  args: InferRequestType<(typeof client.v1alpha)[':parent']['locales']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha)[':parent']['locales']['$get']>>
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
        ? getGetV1alphaParentLocalesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha)[':parent']['locales']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1alpha[':parent'].locales.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1alphaParentLocales<TError = unknown>(
  args: InferRequestType<(typeof client.v1alpha)[':parent']['locales']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha)[':parent']['locales']['$get']>>
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
        ? getGetV1alphaParentLocalesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha)[':parent']['locales']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1alpha[':parent'].locales.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
