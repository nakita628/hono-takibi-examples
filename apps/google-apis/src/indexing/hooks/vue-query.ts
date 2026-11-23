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

export function getV3Key() {
  return ['v3'] as const
}

export function getV3UrlNotificationsMetadataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.urlNotifications.metadata.$get>>,
) {
  return ['v3', '/v3/urlNotifications/metadata', toValue(args)] as const
}

export function getV3UrlNotificationsMetadataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.urlNotifications.metadata.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3UrlNotificationsMetadataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.urlNotifications.metadata.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3UrlNotificationsMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v3.urlNotifications.metadata.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.urlNotifications.metadata.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v3.urlNotifications.metadata.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v3.urlNotifications.metadata.$get>>
              >
            >
          >,
          ReturnType<typeof getV3UrlNotificationsMetadataQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v3.urlNotifications.metadata.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3UrlNotificationsMetadataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3UrlNotificationsMetadataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.urlNotifications.metadata.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV3UrlNotificationsPublish<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV3UrlNotificationsPublishMutationOptions<TError, TOnMutateResult>(
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
