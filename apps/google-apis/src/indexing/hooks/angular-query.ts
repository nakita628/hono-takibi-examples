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

export function injectV3UrlNotificationsMetadata<
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
      CreateQueryOptions<
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
      ...getV3UrlNotificationsMetadataQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostV3UrlNotificationsPublish<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
}
