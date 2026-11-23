import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPublishKey() {
  return ['publish'] as const
}

export function getPostPublishV2AttractionsMutationKey() {
  return ['publish', '/publish/v2/attractions', 'POST'] as const
}

export function getPostPublishV2AttractionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.publish.v2.attractions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.publish.v2.attractions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPublishV2AttractionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.publish.v2.attractions.$post>) {
      return parseResponse(client.publish.v2.attractions.$post(args, options))
    },
  })
}

export function usePostPublishV2Attractions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.publish.v2.attractions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.publish.v2.attractions.$post>,
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
  const mutationDefaults = getPostPublishV2AttractionsMutationOptions<TError, TOnMutateResult>(
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

export function getPatchPublishV2AttractionsIdMutationKey() {
  return ['publish', '/publish/v2/attractions/:id', 'PATCH'] as const
}

export function getPatchPublishV2AttractionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.publish.v2.attractions)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.publish.v2.attractions)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPublishV2AttractionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.publish.v2.attractions)[':id']['$patch']>,
    ) {
      return parseResponse(client.publish.v2.attractions[':id'].$patch(args, options))
    },
  })
}

export function usePatchPublishV2AttractionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.publish.v2.attractions)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.publish.v2.attractions)[':id']['$patch']>,
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
  const mutationDefaults = getPatchPublishV2AttractionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostPublishV2AttractionsIdVideosMutationKey() {
  return ['publish', '/publish/v2/attractions/:id/videos', 'POST'] as const
}

export function getPostPublishV2AttractionsIdVideosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.publish.v2.attractions)[':id']['videos']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.publish.v2.attractions)[':id']['videos']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPublishV2AttractionsIdVideosMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.publish.v2.attractions)[':id']['videos']['$post']>,
    ) {
      return parseResponse(client.publish.v2.attractions[':id'].videos.$post(args, options))
    },
  })
}

export function usePostPublishV2AttractionsIdVideos<
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
                  ReturnType<(typeof client.publish.v2.attractions)[':id']['videos']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.publish.v2.attractions)[':id']['videos']['$post']>,
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
  const mutationDefaults = getPostPublishV2AttractionsIdVideosMutationOptions<
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

export function getPostPublishV2EntitlementsMutationKey() {
  return ['publish', '/publish/v2/entitlements', 'POST'] as const
}

export function getPostPublishV2EntitlementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.publish.v2.entitlements.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.publish.v2.entitlements.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPublishV2EntitlementsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.publish.v2.entitlements.$post>) {
      return parseResponse(client.publish.v2.entitlements.$post(args, options))
    },
  })
}

export function usePostPublishV2Entitlements<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.publish.v2.entitlements.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.publish.v2.entitlements.$post>,
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
  const mutationDefaults = getPostPublishV2EntitlementsMutationOptions<TError, TOnMutateResult>(
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

export function getPostPublishV2EventsMutationKey() {
  return ['publish', '/publish/v2/events', 'POST'] as const
}

export function getPostPublishV2EventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publish.v2.events.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.publish.v2.events.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPublishV2EventsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.publish.v2.events.$post>) {
      return parseResponse(client.publish.v2.events.$post(args, options))
    },
  })
}

export function usePostPublishV2Events<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.publish.v2.events.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.publish.v2.events.$post>,
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
  const mutationDefaults = getPostPublishV2EventsMutationOptions<TError, TOnMutateResult>(
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

export function getPatchPublishV2EventsIdMutationKey() {
  return ['publish', '/publish/v2/events/:id', 'PATCH'] as const
}

export function getPatchPublishV2EventsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.publish.v2.events)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.publish.v2.events)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPublishV2EventsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.publish.v2.events)[':id']['$patch']>) {
      return parseResponse(client.publish.v2.events[':id'].$patch(args, options))
    },
  })
}

export function usePatchPublishV2EventsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.publish.v2.events)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.publish.v2.events)[':id']['$patch']>,
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
  const mutationDefaults = getPatchPublishV2EventsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostPublishV2EventsIdVideosMutationKey() {
  return ['publish', '/publish/v2/events/:id/videos', 'POST'] as const
}

export function getPostPublishV2EventsIdVideosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.publish.v2.events)[':id']['videos']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.publish.v2.events)[':id']['videos']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPublishV2EventsIdVideosMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.publish.v2.events)[':id']['videos']['$post']>,
    ) {
      return parseResponse(client.publish.v2.events[':id'].videos.$post(args, options))
    },
  })
}

export function usePostPublishV2EventsIdVideos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.publish.v2.events)[':id']['videos']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.publish.v2.events)[':id']['videos']['$post']>,
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
  const mutationDefaults = getPostPublishV2EventsIdVideosMutationOptions<TError, TOnMutateResult>(
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

export function getPostPublishV2ExtensionsMutationKey() {
  return ['publish', '/publish/v2/extensions', 'POST'] as const
}

export function getPostPublishV2ExtensionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.publish.v2.extensions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.publish.v2.extensions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPublishV2ExtensionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.publish.v2.extensions.$post>) {
      return parseResponse(client.publish.v2.extensions.$post(args, options))
    },
  })
}

export function usePostPublishV2Extensions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.publish.v2.extensions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.publish.v2.extensions.$post>,
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
  const mutationDefaults = getPostPublishV2ExtensionsMutationOptions<TError, TOnMutateResult>(
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

export function getPostPublishV2VenuesMutationKey() {
  return ['publish', '/publish/v2/venues', 'POST'] as const
}

export function getPostPublishV2VenuesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publish.v2.venues.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.publish.v2.venues.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPublishV2VenuesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.publish.v2.venues.$post>) {
      return parseResponse(client.publish.v2.venues.$post(args, options))
    },
  })
}

export function usePostPublishV2Venues<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.publish.v2.venues.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.publish.v2.venues.$post>,
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
  const mutationDefaults = getPostPublishV2VenuesMutationOptions<TError, TOnMutateResult>(
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

export function getPatchPublishV2VenuesIdMutationKey() {
  return ['publish', '/publish/v2/venues/:id', 'PATCH'] as const
}

export function getPatchPublishV2VenuesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.publish.v2.venues)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.publish.v2.venues)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPublishV2VenuesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.publish.v2.venues)[':id']['$patch']>) {
      return parseResponse(client.publish.v2.venues[':id'].$patch(args, options))
    },
  })
}

export function usePatchPublishV2VenuesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.publish.v2.venues)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.publish.v2.venues)[':id']['$patch']>,
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
  const mutationDefaults = getPatchPublishV2VenuesIdMutationOptions<TError, TOnMutateResult>(
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
