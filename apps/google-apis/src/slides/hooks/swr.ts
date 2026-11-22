import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1PresentationsKey() {
  return ['v1', '/v1/presentations', 'POST'] as const
}

export function usePostV1Presentations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.presentations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.presentations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PresentationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.presentations.$post> }) =>
        parseResponse(client.v1.presentations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PresentationsPresentationIdKey(
  args: InferRequestType<(typeof client.v1.presentations)[':presentationId']['$get']>,
) {
  return ['v1', '/v1/presentations/:presentationId', args] as const
}

export function useGetV1PresentationsPresentationId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.presentations)[':presentationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.presentations)[':presentationId']['$get']>>
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
        ? getGetV1PresentationsPresentationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.presentations)[':presentationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.presentations[':presentationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PresentationsPresentationId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.presentations)[':presentationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.presentations)[':presentationId']['$get']>>
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
        ? getGetV1PresentationsPresentationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.presentations)[':presentationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.presentations[':presentationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1PresentationsPresentationIdPagesPageObjectIdKey(
  args: InferRequestType<
    (typeof client.v1.presentations)[':presentationId']['pages'][':pageObjectId']['$get']
  >,
) {
  return ['v1', '/v1/presentations/:presentationId/pages/:pageObjectId', args] as const
}

export function useGetV1PresentationsPresentationIdPagesPageObjectId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.presentations)[':presentationId']['pages'][':pageObjectId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.presentations)[':presentationId']['pages'][':pageObjectId']['$get']
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
        ? getGetV1PresentationsPresentationIdPagesPageObjectIdKey(args)
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
                (typeof client.v1.presentations)[':presentationId']['pages'][':pageObjectId']['$get']
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
          client.v1.presentations[':presentationId'].pages[':pageObjectId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PresentationsPresentationIdPagesPageObjectId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.presentations)[':presentationId']['pages'][':pageObjectId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.presentations)[':presentationId']['pages'][':pageObjectId']['$get']
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
        ? getGetV1PresentationsPresentationIdPagesPageObjectIdKey(args)
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
                (typeof client.v1.presentations)[':presentationId']['pages'][':pageObjectId']['$get']
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
          client.v1.presentations[':presentationId'].pages[':pageObjectId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1PresentationsPresentationIdPagesPageObjectIdThumbnailKey(
  args: InferRequestType<
    (typeof client.v1.presentations)[':presentationId']['pages'][':pageObjectId']['thumbnail']['$get']
  >,
) {
  return ['v1', '/v1/presentations/:presentationId/pages/:pageObjectId/thumbnail', args] as const
}

export function useGetV1PresentationsPresentationIdPagesPageObjectIdThumbnail<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.presentations)[':presentationId']['pages'][':pageObjectId']['thumbnail']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.presentations)[':presentationId']['pages'][':pageObjectId']['thumbnail']['$get']
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
        ? getGetV1PresentationsPresentationIdPagesPageObjectIdThumbnailKey(args)
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
                (typeof client.v1.presentations)[':presentationId']['pages'][':pageObjectId']['thumbnail']['$get']
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
          client.v1.presentations[':presentationId'].pages[':pageObjectId'].thumbnail.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PresentationsPresentationIdPagesPageObjectIdThumbnail<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.presentations)[':presentationId']['pages'][':pageObjectId']['thumbnail']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.presentations)[':presentationId']['pages'][':pageObjectId']['thumbnail']['$get']
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
        ? getGetV1PresentationsPresentationIdPagesPageObjectIdThumbnailKey(args)
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
                (typeof client.v1.presentations)[':presentationId']['pages'][':pageObjectId']['thumbnail']['$get']
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
          client.v1.presentations[':presentationId'].pages[':pageObjectId'].thumbnail.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1PresentationsPresentationIdBatchUpdateKey() {
  return ['v1', '/v1/presentations/:presentationId:batchUpdate', 'POST'] as const
}

export function usePostV1PresentationsPresentationIdBatchUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.presentations)[':presentationId:batchUpdate']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.presentations)[':presentationId:batchUpdate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PresentationsPresentationIdBatchUpdateKey()
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
            (typeof client.v1.presentations)[':presentationId:batchUpdate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.presentations[':presentationId:batchUpdate'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
