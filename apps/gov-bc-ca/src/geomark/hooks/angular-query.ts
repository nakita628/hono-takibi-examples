import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectPostGeomarksCopy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGeomarksCopyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostGeomarksNew<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGeomarksNewMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGeomarksGeomarkIdFileFormatExtensionQueryKey(
  args: InferRequestType<(typeof client.geomarks)[':geomarkId.{fileFormatExtension}']['$get']>,
) {
  return ['geomarks', '/geomarks/:geomarkId.{fileFormatExtension}', args] as const
}

export function getGeomarksGeomarkIdFileFormatExtensionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.geomarks)[':geomarkId.{fileFormatExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.geomarks)[':geomarkId.{fileFormatExtension}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGeomarksGeomarkIdFileFormatExtensionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.geomarks[':geomarkId.{fileFormatExtension}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGeomarksGeomarkIdFileFormatExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.geomarks)[':geomarkId.{fileFormatExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.geomarks)[':geomarkId.{fileFormatExtension}']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getGeomarksGeomarkIdFileFormatExtensionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGeomarksGeomarkIdFileFormatExtensionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getGeomarksGeomarkIdBoundingBoxFileFormatExtensionQueryKey(
  args: InferRequestType<
    (typeof client.geomarks)[':geomarkId']['boundingBox.{fileFormatExtension}']['$get']
  >,
) {
  return ['geomarks', '/geomarks/:geomarkId/boundingBox.{fileFormatExtension}', args] as const
}

export function getGeomarksGeomarkIdBoundingBoxFileFormatExtensionQueryOptions<
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
  args: InferRequestType<
    (typeof client.geomarks)[':geomarkId']['boundingBox.{fileFormatExtension}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGeomarksGeomarkIdBoundingBoxFileFormatExtensionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.geomarks[':geomarkId']['boundingBox.{fileFormatExtension}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGeomarksGeomarkIdBoundingBoxFileFormatExtension<
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
  args: () => InferRequestType<
    (typeof client.geomarks)[':geomarkId']['boundingBox.{fileFormatExtension}']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGeomarksGeomarkIdBoundingBoxFileFormatExtensionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getGeomarksGeomarkIdFeatureFileFormatExtensionQueryKey(
  args: InferRequestType<
    (typeof client.geomarks)[':geomarkId']['feature.{fileFormatExtension}']['$get']
  >,
) {
  return ['geomarks', '/geomarks/:geomarkId/feature.{fileFormatExtension}', args] as const
}

export function getGeomarksGeomarkIdFeatureFileFormatExtensionQueryOptions<
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
  args: InferRequestType<
    (typeof client.geomarks)[':geomarkId']['feature.{fileFormatExtension}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGeomarksGeomarkIdFeatureFileFormatExtensionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.geomarks[':geomarkId']['feature.{fileFormatExtension}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGeomarksGeomarkIdFeatureFileFormatExtension<
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
  args: () => InferRequestType<
    (typeof client.geomarks)[':geomarkId']['feature.{fileFormatExtension}']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGeomarksGeomarkIdFeatureFileFormatExtensionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getGeomarksGeomarkIdPartsFileFormatExtensionQueryKey(
  args: InferRequestType<
    (typeof client.geomarks)[':geomarkId']['parts.{fileFormatExtension}']['$get']
  >,
) {
  return ['geomarks', '/geomarks/:geomarkId/parts.{fileFormatExtension}', args] as const
}

export function getGeomarksGeomarkIdPartsFileFormatExtensionQueryOptions<
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
  args: InferRequestType<
    (typeof client.geomarks)[':geomarkId']['parts.{fileFormatExtension}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGeomarksGeomarkIdPartsFileFormatExtensionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.geomarks[':geomarkId']['parts.{fileFormatExtension}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGeomarksGeomarkIdPartsFileFormatExtension<
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
  args: () => InferRequestType<
    (typeof client.geomarks)[':geomarkId']['parts.{fileFormatExtension}']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGeomarksGeomarkIdPartsFileFormatExtensionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getGeomarksGeomarkIdPointFileFormatExtensionQueryKey(
  args: InferRequestType<
    (typeof client.geomarks)[':geomarkId']['point.{fileFormatExtension}']['$get']
  >,
) {
  return ['geomarks', '/geomarks/:geomarkId/point.{fileFormatExtension}', args] as const
}

export function getGeomarksGeomarkIdPointFileFormatExtensionQueryOptions<
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
  args: InferRequestType<
    (typeof client.geomarks)[':geomarkId']['point.{fileFormatExtension}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGeomarksGeomarkIdPointFileFormatExtensionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.geomarks[':geomarkId']['point.{fileFormatExtension}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGeomarksGeomarkIdPointFileFormatExtension<
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
  args: () => InferRequestType<
    (typeof client.geomarks)[':geomarkId']['point.{fileFormatExtension}']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGeomarksGeomarkIdPointFileFormatExtensionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}
