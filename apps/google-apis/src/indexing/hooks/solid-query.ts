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

export function getV3Key() {
  return ['v3'] as const
}

export function getV3UrlNotificationsMetadataQueryKey(
  args: InferRequestType<typeof client.v3.urlNotifications.metadata.$get>,
) {
  return ['v3', '/v3/urlNotifications/metadata', args] as const
}

export function getV3UrlNotificationsMetadataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v3.urlNotifications.metadata.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v3.urlNotifications.metadata.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v3.urlNotifications.metadata.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3UrlNotificationsMetadataQueryKey>
  >({
    queryKey: getV3UrlNotificationsMetadataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.urlNotifications.metadata.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3UrlNotificationsMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v3.urlNotifications.metadata.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.urlNotifications.metadata.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v3.urlNotifications.metadata.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3UrlNotificationsMetadataQueryKey>
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
      ...getV3UrlNotificationsMetadataQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV3UrlNotificationsPublishMutationKey() {
  return ['v3', '/v3/urlNotifications:publish', 'POST'] as const
}

export function getPostV3UrlNotificationsPublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)['urlNotifications:publish']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3)['urlNotifications:publish']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3UrlNotificationsPublishMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3)['urlNotifications:publish']['$post']>,
    ) {
      return parseResponse(client.v3['urlNotifications:publish'].$post(args, options))
    },
  })
}

export function createPostV3UrlNotificationsPublish<
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
                Awaited<ReturnType<(typeof client.v3)['urlNotifications:publish']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3)['urlNotifications:publish']['$post']>,
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
    const mutationDefaults = getPostV3UrlNotificationsPublishMutationOptions<
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
