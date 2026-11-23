import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPublishKey() {
  return ['publish'] as const
}

export function getPostPublishV2AttractionsKey() {
  return ['publish', '/publish/v2/attractions', 'POST'] as const
}

export function usePostPublishV2Attractions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.publish.v2.attractions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.publish.v2.attractions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPublishV2AttractionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.publish.v2.attractions.$post> },
      ) => parseResponse(client.publish.v2.attractions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPublishV2AttractionsIdKey() {
  return ['publish', '/publish/v2/attractions/:id', 'PATCH'] as const
}

export function usePatchPublishV2AttractionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.publish.v2.attractions)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.publish.v2.attractions)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPublishV2AttractionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.publish.v2.attractions)[':id']['$patch']> },
      ) => parseResponse(client.publish.v2.attractions[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPublishV2AttractionsIdVideosKey() {
  return ['publish', '/publish/v2/attractions/:id/videos', 'POST'] as const
}

export function usePostPublishV2AttractionsIdVideos<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.publish.v2.attractions)[':id']['videos']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.publish.v2.attractions)[':id']['videos']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPublishV2AttractionsIdVideosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.publish.v2.attractions)[':id']['videos']['$post']>
        },
      ) => parseResponse(client.publish.v2.attractions[':id'].videos.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPublishV2EntitlementsKey() {
  return ['publish', '/publish/v2/entitlements', 'POST'] as const
}

export function usePostPublishV2Entitlements<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.publish.v2.entitlements.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.publish.v2.entitlements.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPublishV2EntitlementsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.publish.v2.entitlements.$post> },
      ) => parseResponse(client.publish.v2.entitlements.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPublishV2EventsKey() {
  return ['publish', '/publish/v2/events', 'POST'] as const
}

export function usePostPublishV2Events<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publish.v2.events.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.publish.v2.events.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPublishV2EventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.publish.v2.events.$post> }) =>
        parseResponse(client.publish.v2.events.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPublishV2EventsIdKey() {
  return ['publish', '/publish/v2/events/:id', 'PATCH'] as const
}

export function usePatchPublishV2EventsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.publish.v2.events)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.publish.v2.events)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPublishV2EventsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.publish.v2.events)[':id']['$patch']> },
      ) => parseResponse(client.publish.v2.events[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPublishV2EventsIdVideosKey() {
  return ['publish', '/publish/v2/events/:id/videos', 'POST'] as const
}

export function usePostPublishV2EventsIdVideos<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.publish.v2.events)[':id']['videos']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.publish.v2.events)[':id']['videos']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPublishV2EventsIdVideosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.publish.v2.events)[':id']['videos']['$post']> },
      ) => parseResponse(client.publish.v2.events[':id'].videos.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPublishV2ExtensionsKey() {
  return ['publish', '/publish/v2/extensions', 'POST'] as const
}

export function usePostPublishV2Extensions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.publish.v2.extensions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.publish.v2.extensions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPublishV2ExtensionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.publish.v2.extensions.$post> },
      ) => parseResponse(client.publish.v2.extensions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPublishV2VenuesKey() {
  return ['publish', '/publish/v2/venues', 'POST'] as const
}

export function usePostPublishV2Venues<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publish.v2.venues.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.publish.v2.venues.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPublishV2VenuesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.publish.v2.venues.$post> }) =>
        parseResponse(client.publish.v2.venues.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPublishV2VenuesIdKey() {
  return ['publish', '/publish/v2/venues/:id', 'PATCH'] as const
}

export function usePatchPublishV2VenuesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.publish.v2.venues)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.publish.v2.venues)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPublishV2VenuesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.publish.v2.venues)[':id']['$patch']> },
      ) => parseResponse(client.publish.v2.venues[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
