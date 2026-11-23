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

export function getGeomarksKey() {
  return ['geomarks'] as const
}

export function getPostGeomarksCopyMutationKey() {
  return ['geomarks', '/geomarks/copy', 'POST'] as const
}

export function getPostGeomarksCopyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geomarks.copy.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.geomarks.copy.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGeomarksCopyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.geomarks.copy.$post>) {
      return parseResponse(client.geomarks.copy.$post(args, options))
    },
  })
}

export function usePostGeomarksCopy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geomarks.copy.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.geomarks.copy.$post>,
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
  const mutationDefaults = getPostGeomarksCopyMutationOptions<TError, TOnMutateResult>(
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

export function getPostGeomarksNewMutationKey() {
  return ['geomarks', '/geomarks/new', 'POST'] as const
}

export function getPostGeomarksNewMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geomarks.new.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.geomarks.new.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGeomarksNewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.geomarks.new.$post>) {
      return parseResponse(client.geomarks.new.$post(args, options))
    },
  })
}

export function usePostGeomarksNew<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geomarks.new.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.geomarks.new.$post>,
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
  const mutationDefaults = getPostGeomarksNewMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGeomarksGeomarkIdFileFormatExtensionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.geomarks)[':geomarkId.{fileFormatExtension}']['$get']>
  >,
) {
  return ['geomarks', '/geomarks/:geomarkId.{fileFormatExtension}', toValue(args)] as const
}

export function getGeomarksGeomarkIdFileFormatExtensionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.geomarks)[':geomarkId.{fileFormatExtension}']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGeomarksGeomarkIdFileFormatExtensionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.geomarks[':geomarkId.{fileFormatExtension}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGeomarksGeomarkIdFileFormatExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.geomarks)[':geomarkId.{fileFormatExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.geomarks)[':geomarkId.{fileFormatExtension}']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.geomarks)[':geomarkId.{fileFormatExtension}']['$get']>
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
                  ReturnType<(typeof client.geomarks)[':geomarkId.{fileFormatExtension}']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGeomarksGeomarkIdFileFormatExtensionQueryKey>
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
          Awaited<ReturnType<(typeof client.geomarks)[':geomarkId.{fileFormatExtension}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGeomarksGeomarkIdFileFormatExtensionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGeomarksGeomarkIdFileFormatExtensionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.geomarks[':geomarkId.{fileFormatExtension}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGeomarksGeomarkIdBoundingBoxFileFormatExtensionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.geomarks)[':geomarkId']['boundingBox.{fileFormatExtension}']['$get']
    >
  >,
) {
  return [
    'geomarks',
    '/geomarks/:geomarkId/boundingBox.{fileFormatExtension}',
    toValue(args),
  ] as const
}

export function getGeomarksGeomarkIdBoundingBoxFileFormatExtensionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.geomarks)[':geomarkId']['boundingBox.{fileFormatExtension}']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGeomarksGeomarkIdBoundingBoxFileFormatExtensionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.geomarks[':geomarkId']['boundingBox.{fileFormatExtension}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGeomarksGeomarkIdBoundingBoxFileFormatExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.geomarks)[':geomarkId']['boundingBox.{fileFormatExtension}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.geomarks)[':geomarkId']['boundingBox.{fileFormatExtension}']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.geomarks)[':geomarkId']['boundingBox.{fileFormatExtension}']['$get']
                  >
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
                  ReturnType<
                    (typeof client.geomarks)[':geomarkId']['boundingBox.{fileFormatExtension}']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGeomarksGeomarkIdBoundingBoxFileFormatExtensionQueryKey>
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
            ReturnType<
              (typeof client.geomarks)[':geomarkId']['boundingBox.{fileFormatExtension}']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGeomarksGeomarkIdBoundingBoxFileFormatExtensionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGeomarksGeomarkIdBoundingBoxFileFormatExtensionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.geomarks[':geomarkId']['boundingBox.{fileFormatExtension}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGeomarksGeomarkIdFeatureFileFormatExtensionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.geomarks)[':geomarkId']['feature.{fileFormatExtension}']['$get']
    >
  >,
) {
  return ['geomarks', '/geomarks/:geomarkId/feature.{fileFormatExtension}', toValue(args)] as const
}

export function getGeomarksGeomarkIdFeatureFileFormatExtensionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.geomarks)[':geomarkId']['feature.{fileFormatExtension}']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGeomarksGeomarkIdFeatureFileFormatExtensionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.geomarks[':geomarkId']['feature.{fileFormatExtension}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGeomarksGeomarkIdFeatureFileFormatExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.geomarks)[':geomarkId']['feature.{fileFormatExtension}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.geomarks)[':geomarkId']['feature.{fileFormatExtension}']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.geomarks)[':geomarkId']['feature.{fileFormatExtension}']['$get']
                  >
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
                  ReturnType<
                    (typeof client.geomarks)[':geomarkId']['feature.{fileFormatExtension}']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGeomarksGeomarkIdFeatureFileFormatExtensionQueryKey>
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
            ReturnType<
              (typeof client.geomarks)[':geomarkId']['feature.{fileFormatExtension}']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGeomarksGeomarkIdFeatureFileFormatExtensionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGeomarksGeomarkIdFeatureFileFormatExtensionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.geomarks[':geomarkId']['feature.{fileFormatExtension}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGeomarksGeomarkIdPartsFileFormatExtensionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.geomarks)[':geomarkId']['parts.{fileFormatExtension}']['$get']>
  >,
) {
  return ['geomarks', '/geomarks/:geomarkId/parts.{fileFormatExtension}', toValue(args)] as const
}

export function getGeomarksGeomarkIdPartsFileFormatExtensionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.geomarks)[':geomarkId']['parts.{fileFormatExtension}']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGeomarksGeomarkIdPartsFileFormatExtensionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.geomarks[':geomarkId']['parts.{fileFormatExtension}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGeomarksGeomarkIdPartsFileFormatExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.geomarks)[':geomarkId']['parts.{fileFormatExtension}']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.geomarks)[':geomarkId']['parts.{fileFormatExtension}']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.geomarks)[':geomarkId']['parts.{fileFormatExtension}']['$get']
                  >
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
                  ReturnType<
                    (typeof client.geomarks)[':geomarkId']['parts.{fileFormatExtension}']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGeomarksGeomarkIdPartsFileFormatExtensionQueryKey>
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
            ReturnType<
              (typeof client.geomarks)[':geomarkId']['parts.{fileFormatExtension}']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGeomarksGeomarkIdPartsFileFormatExtensionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGeomarksGeomarkIdPartsFileFormatExtensionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.geomarks[':geomarkId']['parts.{fileFormatExtension}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGeomarksGeomarkIdPointFileFormatExtensionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.geomarks)[':geomarkId']['point.{fileFormatExtension}']['$get']>
  >,
) {
  return ['geomarks', '/geomarks/:geomarkId/point.{fileFormatExtension}', toValue(args)] as const
}

export function getGeomarksGeomarkIdPointFileFormatExtensionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.geomarks)[':geomarkId']['point.{fileFormatExtension}']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGeomarksGeomarkIdPointFileFormatExtensionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.geomarks[':geomarkId']['point.{fileFormatExtension}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGeomarksGeomarkIdPointFileFormatExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.geomarks)[':geomarkId']['point.{fileFormatExtension}']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.geomarks)[':geomarkId']['point.{fileFormatExtension}']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.geomarks)[':geomarkId']['point.{fileFormatExtension}']['$get']
                  >
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
                  ReturnType<
                    (typeof client.geomarks)[':geomarkId']['point.{fileFormatExtension}']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGeomarksGeomarkIdPointFileFormatExtensionQueryKey>
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
            ReturnType<
              (typeof client.geomarks)[':geomarkId']['point.{fileFormatExtension}']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGeomarksGeomarkIdPointFileFormatExtensionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGeomarksGeomarkIdPointFileFormatExtensionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.geomarks[':geomarkId']['point.{fileFormatExtension}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
