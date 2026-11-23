import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geomarks.copy.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.geomarks.copy.$post>,
        TOnMutateResult
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geomarks.new.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.geomarks.new.$post>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.geomarks)[':geomarkId.:fileFormatExtension']['$get']>,
) {
  return ['geomarks', '/geomarks/:geomarkId.:fileFormatExtension', args] as const
}

export function getGeomarksGeomarkIdFileFormatExtensionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.geomarks)[':geomarkId.:fileFormatExtension']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.geomarks)[':geomarkId.:fileFormatExtension']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.geomarks)[':geomarkId.:fileFormatExtension']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGeomarksGeomarkIdFileFormatExtensionQueryKey>
  >({
    queryKey: getGeomarksGeomarkIdFileFormatExtensionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.geomarks[':geomarkId.:fileFormatExtension'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGeomarksGeomarkIdFileFormatExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.geomarks)[':geomarkId.:fileFormatExtension']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.geomarks)[':geomarkId.:fileFormatExtension']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.geomarks)[':geomarkId.:fileFormatExtension']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGeomarksGeomarkIdFileFormatExtensionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGeomarksGeomarkIdFileFormatExtensionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGeomarksGeomarkIdFileFormatExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.geomarks)[':geomarkId.:fileFormatExtension']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.geomarks)[':geomarkId.:fileFormatExtension']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.geomarks)[':geomarkId.:fileFormatExtension']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGeomarksGeomarkIdFileFormatExtensionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGeomarksGeomarkIdFileFormatExtensionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGeomarksGeomarkIdBoundingBoxFileFormatExtensionQueryKey(
  args: InferRequestType<
    (typeof client.geomarks)[':geomarkId']['boundingBox.:fileFormatExtension']['$get']
  >,
) {
  return ['geomarks', '/geomarks/:geomarkId/boundingBox.:fileFormatExtension', args] as const
}

export function getGeomarksGeomarkIdBoundingBoxFileFormatExtensionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.geomarks)[':geomarkId']['boundingBox.:fileFormatExtension']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.geomarks)[':geomarkId']['boundingBox.:fileFormatExtension']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.geomarks)[':geomarkId']['boundingBox.:fileFormatExtension']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGeomarksGeomarkIdBoundingBoxFileFormatExtensionQueryKey>
  >({
    queryKey: getGeomarksGeomarkIdBoundingBoxFileFormatExtensionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.geomarks[':geomarkId']['boundingBox.:fileFormatExtension'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGeomarksGeomarkIdBoundingBoxFileFormatExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.geomarks)[':geomarkId']['boundingBox.:fileFormatExtension']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.geomarks)[':geomarkId']['boundingBox.:fileFormatExtension']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.geomarks)[':geomarkId']['boundingBox.:fileFormatExtension']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGeomarksGeomarkIdBoundingBoxFileFormatExtensionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGeomarksGeomarkIdBoundingBoxFileFormatExtensionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGeomarksGeomarkIdBoundingBoxFileFormatExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.geomarks)[':geomarkId']['boundingBox.:fileFormatExtension']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.geomarks)[':geomarkId']['boundingBox.:fileFormatExtension']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.geomarks)[':geomarkId']['boundingBox.:fileFormatExtension']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGeomarksGeomarkIdBoundingBoxFileFormatExtensionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGeomarksGeomarkIdBoundingBoxFileFormatExtensionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGeomarksGeomarkIdFeatureFileFormatExtensionQueryKey(
  args: InferRequestType<
    (typeof client.geomarks)[':geomarkId']['feature.:fileFormatExtension']['$get']
  >,
) {
  return ['geomarks', '/geomarks/:geomarkId/feature.:fileFormatExtension', args] as const
}

export function getGeomarksGeomarkIdFeatureFileFormatExtensionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.geomarks)[':geomarkId']['feature.:fileFormatExtension']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.geomarks)[':geomarkId']['feature.:fileFormatExtension']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.geomarks)[':geomarkId']['feature.:fileFormatExtension']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGeomarksGeomarkIdFeatureFileFormatExtensionQueryKey>
  >({
    queryKey: getGeomarksGeomarkIdFeatureFileFormatExtensionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.geomarks[':geomarkId']['feature.:fileFormatExtension'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGeomarksGeomarkIdFeatureFileFormatExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.geomarks)[':geomarkId']['feature.:fileFormatExtension']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.geomarks)[':geomarkId']['feature.:fileFormatExtension']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.geomarks)[':geomarkId']['feature.:fileFormatExtension']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGeomarksGeomarkIdFeatureFileFormatExtensionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGeomarksGeomarkIdFeatureFileFormatExtensionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGeomarksGeomarkIdFeatureFileFormatExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.geomarks)[':geomarkId']['feature.:fileFormatExtension']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.geomarks)[':geomarkId']['feature.:fileFormatExtension']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.geomarks)[':geomarkId']['feature.:fileFormatExtension']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGeomarksGeomarkIdFeatureFileFormatExtensionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGeomarksGeomarkIdFeatureFileFormatExtensionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGeomarksGeomarkIdPartsFileFormatExtensionQueryKey(
  args: InferRequestType<
    (typeof client.geomarks)[':geomarkId']['parts.:fileFormatExtension']['$get']
  >,
) {
  return ['geomarks', '/geomarks/:geomarkId/parts.:fileFormatExtension', args] as const
}

export function getGeomarksGeomarkIdPartsFileFormatExtensionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.geomarks)[':geomarkId']['parts.:fileFormatExtension']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.geomarks)[':geomarkId']['parts.:fileFormatExtension']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.geomarks)[':geomarkId']['parts.:fileFormatExtension']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGeomarksGeomarkIdPartsFileFormatExtensionQueryKey>
  >({
    queryKey: getGeomarksGeomarkIdPartsFileFormatExtensionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.geomarks[':geomarkId']['parts.:fileFormatExtension'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGeomarksGeomarkIdPartsFileFormatExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.geomarks)[':geomarkId']['parts.:fileFormatExtension']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.geomarks)[':geomarkId']['parts.:fileFormatExtension']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.geomarks)[':geomarkId']['parts.:fileFormatExtension']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGeomarksGeomarkIdPartsFileFormatExtensionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGeomarksGeomarkIdPartsFileFormatExtensionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGeomarksGeomarkIdPartsFileFormatExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.geomarks)[':geomarkId']['parts.:fileFormatExtension']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.geomarks)[':geomarkId']['parts.:fileFormatExtension']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.geomarks)[':geomarkId']['parts.:fileFormatExtension']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGeomarksGeomarkIdPartsFileFormatExtensionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGeomarksGeomarkIdPartsFileFormatExtensionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGeomarksGeomarkIdPointFileFormatExtensionQueryKey(
  args: InferRequestType<
    (typeof client.geomarks)[':geomarkId']['point.:fileFormatExtension']['$get']
  >,
) {
  return ['geomarks', '/geomarks/:geomarkId/point.:fileFormatExtension', args] as const
}

export function getGeomarksGeomarkIdPointFileFormatExtensionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.geomarks)[':geomarkId']['point.:fileFormatExtension']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.geomarks)[':geomarkId']['point.:fileFormatExtension']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.geomarks)[':geomarkId']['point.:fileFormatExtension']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGeomarksGeomarkIdPointFileFormatExtensionQueryKey>
  >({
    queryKey: getGeomarksGeomarkIdPointFileFormatExtensionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.geomarks[':geomarkId']['point.:fileFormatExtension'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGeomarksGeomarkIdPointFileFormatExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.geomarks)[':geomarkId']['point.:fileFormatExtension']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.geomarks)[':geomarkId']['point.:fileFormatExtension']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.geomarks)[':geomarkId']['point.:fileFormatExtension']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGeomarksGeomarkIdPointFileFormatExtensionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGeomarksGeomarkIdPointFileFormatExtensionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGeomarksGeomarkIdPointFileFormatExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.geomarks)[':geomarkId']['point.:fileFormatExtension']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.geomarks)[':geomarkId']['point.:fileFormatExtension']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.geomarks)[':geomarkId']['point.:fileFormatExtension']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGeomarksGeomarkIdPointFileFormatExtensionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGeomarksGeomarkIdPointFileFormatExtensionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}
