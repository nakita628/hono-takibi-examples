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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1ObjectsCollectionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.objects)[':collection'][':id']['$get']>
  >,
) {
  return ['v1', '/v1/objects/:collection/:id', toValue(args)] as const
}

export function getV1ObjectsCollectionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.objects)[':collection'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectsCollectionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.objects[':collection'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObjectsCollectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.objects)[':collection'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.objects)[':collection'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.objects)[':collection'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.objects)[':collection'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ObjectsCollectionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.objects)[':collection'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectsCollectionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectsCollectionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.objects[':collection'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ObjectsCollectionIdMutationKey() {
  return ['v1', '/v1/objects/:collection/:id', 'PUT'] as const
}

export function getPutV1ObjectsCollectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.objects)[':collection'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.objects)[':collection'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ObjectsCollectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.objects)[':collection'][':id']['$put']>,
    ) {
      return parseResponse(client.v1.objects[':collection'][':id'].$put(args, options))
    },
  })
}

export function usePutV1ObjectsCollectionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.objects)[':collection'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.objects)[':collection'][':id']['$put']>,
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
  const mutationDefaults = getPutV1ObjectsCollectionIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1ObjectsCollectionIdMutationKey() {
  return ['v1', '/v1/objects/:collection/:id', 'DELETE'] as const
}

export function getDeleteV1ObjectsCollectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.objects)[':collection'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.objects)[':collection'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ObjectsCollectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.objects)[':collection'][':id']['$delete']>,
    ) {
      return parseResponse(client.v1.objects[':collection'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1ObjectsCollectionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.objects)[':collection'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.objects)[':collection'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteV1ObjectsCollectionIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutV1UsersUserIdGuidesMessagesInteractedMutationKey() {
  return ['v1', '/v1/users/:user_id/guides/messages/interacted', 'PUT'] as const
}

export function getPutV1UsersUserIdGuidesMessagesInteractedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.users)[':user_id']['guides']['messages']['interacted']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.users)[':user_id']['guides']['messages']['interacted']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1UsersUserIdGuidesMessagesInteractedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.users)[':user_id']['guides']['messages']['interacted']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.users[':user_id'].guides.messages.interacted.$put(args, options),
      )
    },
  })
}

export function usePutV1UsersUserIdGuidesMessagesInteracted<
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
                  ReturnType<
                    (typeof client.v1.users)[':user_id']['guides']['messages']['interacted']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.users)[':user_id']['guides']['messages']['interacted']['$put']
          >,
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
  const mutationDefaults = getPutV1UsersUserIdGuidesMessagesInteractedMutationOptions<
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

export function getPostV1IntegrationsCensusCustomDestinationMutationKey() {
  return ['v1', '/v1/integrations/census/custom-destination', 'POST'] as const
}

export function getPostV1IntegrationsCensusCustomDestinationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.integrations.census)['custom-destination']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.integrations.census)['custom-destination']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1IntegrationsCensusCustomDestinationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.integrations.census)['custom-destination']['$post']>,
    ) {
      return parseResponse(client.v1.integrations.census['custom-destination'].$post(args, options))
    },
  })
}

export function usePostV1IntegrationsCensusCustomDestination<
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
                  ReturnType<(typeof client.v1.integrations.census)['custom-destination']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.integrations.census)['custom-destination']['$post']>,
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
  const mutationDefaults = getPostV1IntegrationsCensusCustomDestinationMutationOptions<
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

export function getV1UsersUserIdSubscriptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.users)[':user_id']['subscriptions']['$get']>
  >,
) {
  return ['v1', '/v1/users/:user_id/subscriptions', toValue(args)] as const
}

export function getV1UsersUserIdSubscriptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.users)[':user_id']['subscriptions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1UsersUserIdSubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.users[':user_id'].subscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1UsersUserIdSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.users)[':user_id']['subscriptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.users)[':user_id']['subscriptions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.users)[':user_id']['subscriptions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.users)[':user_id']['subscriptions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1UsersUserIdSubscriptionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.users)[':user_id']['subscriptions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UsersUserIdSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1UsersUserIdSubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.users[':user_id'].subscriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1WorkflowsKeyCancelMutationKey() {
  return ['v1', '/v1/workflows/:key/cancel', 'POST'] as const
}

export function getPostV1WorkflowsKeyCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workflows)[':key']['cancel']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.workflows)[':key']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkflowsKeyCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.workflows)[':key']['cancel']['$post']>,
    ) {
      return parseResponse(client.v1.workflows[':key'].cancel.$post(args, options))
    },
  })
}

export function usePostV1WorkflowsKeyCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.workflows)[':key']['cancel']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.workflows)[':key']['cancel']['$post']>,
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
  const mutationDefaults = getPostV1WorkflowsKeyCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPutV1UsersUserIdGuidesMessagesArchivedMutationKey() {
  return ['v1', '/v1/users/:user_id/guides/messages/archived', 'PUT'] as const
}

export function getPutV1UsersUserIdGuidesMessagesArchivedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.users)[':user_id']['guides']['messages']['archived']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.users)[':user_id']['guides']['messages']['archived']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1UsersUserIdGuidesMessagesArchivedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.users)[':user_id']['guides']['messages']['archived']['$put']
      >,
    ) {
      return parseResponse(client.v1.users[':user_id'].guides.messages.archived.$put(args, options))
    },
  })
}

export function usePutV1UsersUserIdGuidesMessagesArchived<
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
                  ReturnType<
                    (typeof client.v1.users)[':user_id']['guides']['messages']['archived']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.users)[':user_id']['guides']['messages']['archived']['$put']
          >,
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
  const mutationDefaults = getPutV1UsersUserIdGuidesMessagesArchivedMutationOptions<
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

export function getDeleteV1UsersUserIdGuidesMessagesArchivedMutationKey() {
  return ['v1', '/v1/users/:user_id/guides/messages/archived', 'DELETE'] as const
}

export function getDeleteV1UsersUserIdGuidesMessagesArchivedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.users)[':user_id']['guides']['messages']['archived']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.users)[':user_id']['guides']['messages']['archived']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1UsersUserIdGuidesMessagesArchivedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.users)[':user_id']['guides']['messages']['archived']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.users[':user_id'].guides.messages.archived.$delete(args, options),
      )
    },
  })
}

export function useDeleteV1UsersUserIdGuidesMessagesArchived<
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
                  ReturnType<
                    (typeof client.v1.users)[':user_id']['guides']['messages']['archived']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.users)[':user_id']['guides']['messages']['archived']['$delete']
          >,
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
  const mutationDefaults = getDeleteV1UsersUserIdGuidesMessagesArchivedMutationOptions<
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

export function getPutV1UsersUserIdPreferencesIdChannelTypesMutationKey() {
  return ['v1', '/v1/users/:user_id/preferences/:id/channel_types', 'PUT'] as const
}

export function getPutV1UsersUserIdPreferencesIdChannelTypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.users)[':user_id']['preferences'][':id']['channel_types']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.users)[':user_id']['preferences'][':id']['channel_types']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1UsersUserIdPreferencesIdChannelTypesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.users)[':user_id']['preferences'][':id']['channel_types']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.users[':user_id'].preferences[':id'].channel_types.$put(args, options),
      )
    },
  })
}

export function usePutV1UsersUserIdPreferencesIdChannelTypes<
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
                  ReturnType<
                    (typeof client.v1.users)[':user_id']['preferences'][':id']['channel_types']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.users)[':user_id']['preferences'][':id']['channel_types']['$put']
          >,
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
  const mutationDefaults = getPutV1UsersUserIdPreferencesIdChannelTypesMutationOptions<
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

export function getPutV1ObjectsCollectionObjectIdPreferencesIdCategoriesMutationKey() {
  return ['v1', '/v1/objects/:collection/:object_id/preferences/:id/categories', 'PUT'] as const
}

export function getPutV1ObjectsCollectionObjectIdPreferencesIdCategoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['categories']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['categories']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1ObjectsCollectionObjectIdPreferencesIdCategoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['categories']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.objects[':collection'][':object_id'].preferences[':id'].categories.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV1ObjectsCollectionObjectIdPreferencesIdCategories<
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
                  ReturnType<
                    (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['categories']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['categories']['$put']
          >,
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
  const mutationDefaults = getPutV1ObjectsCollectionObjectIdPreferencesIdCategoriesMutationOptions<
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

export function getV1MessagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.messages.$get>>,
) {
  return ['v1', '/v1/messages', toValue(args)] as const
}

export function getV1MessagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.messages.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1MessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.messages.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Messages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.messages.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.$get>>>>
          >,
          ReturnType<typeof getV1MessagesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1MessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1MessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.messages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1UsersUserIdPreferencesIdChannelTypesTypeMutationKey() {
  return ['v1', '/v1/users/:user_id/preferences/:id/channel_types/:type', 'PUT'] as const
}

export function getPutV1UsersUserIdPreferencesIdChannelTypesTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.users)[':user_id']['preferences'][':id']['channel_types'][':type']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.users)[':user_id']['preferences'][':id']['channel_types'][':type']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1UsersUserIdPreferencesIdChannelTypesTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.users)[':user_id']['preferences'][':id']['channel_types'][':type']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.users[':user_id'].preferences[':id'].channel_types[':type'].$put(args, options),
      )
    },
  })
}

export function usePutV1UsersUserIdPreferencesIdChannelTypesType<
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
                  ReturnType<
                    (typeof client.v1.users)[':user_id']['preferences'][':id']['channel_types'][':type']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.users)[':user_id']['preferences'][':id']['channel_types'][':type']['$put']
          >,
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
  const mutationDefaults = getPutV1UsersUserIdPreferencesIdChannelTypesTypeMutationOptions<
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

export function getV1ProvidersMsTeamsChannelIdChannelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.providers)['ms-teams'][':channel_id']['channels']['$get']>
  >,
) {
  return ['v1', '/v1/providers/ms-teams/:channel_id/channels', toValue(args)] as const
}

export function getV1ProvidersMsTeamsChannelIdChannelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.providers)['ms-teams'][':channel_id']['channels']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProvidersMsTeamsChannelIdChannelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.providers['ms-teams'][':channel_id'].channels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProvidersMsTeamsChannelIdChannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.providers)['ms-teams'][':channel_id']['channels']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.providers)['ms-teams'][':channel_id']['channels']['$get']>
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
                    (typeof client.v1.providers)['ms-teams'][':channel_id']['channels']['$get']
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
                    (typeof client.v1.providers)['ms-teams'][':channel_id']['channels']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProvidersMsTeamsChannelIdChannelsQueryKey>
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
            ReturnType<(typeof client.v1.providers)['ms-teams'][':channel_id']['channels']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProvidersMsTeamsChannelIdChannelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProvidersMsTeamsChannelIdChannelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.providers['ms-teams'][':channel_id'].channels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1MessagesMessageIdInteractedMutationKey() {
  return ['v1', '/v1/messages/:message_id/interacted', 'PUT'] as const
}

export function getPutV1MessagesMessageIdInteractedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['interacted']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.messages)[':message_id']['interacted']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1MessagesMessageIdInteractedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.messages)[':message_id']['interacted']['$put']>,
    ) {
      return parseResponse(client.v1.messages[':message_id'].interacted.$put(args, options))
    },
  })
}

export function usePutV1MessagesMessageIdInteracted<
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
                  ReturnType<(typeof client.v1.messages)[':message_id']['interacted']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.messages)[':message_id']['interacted']['$put']>,
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
  const mutationDefaults = getPutV1MessagesMessageIdInteractedMutationOptions<
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

export function getV1MessagesMessageIdEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.messages)[':message_id']['events']['$get']>
  >,
) {
  return ['v1', '/v1/messages/:message_id/events', toValue(args)] as const
}

export function getV1MessagesMessageIdEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.messages)[':message_id']['events']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1MessagesMessageIdEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.messages[':message_id'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1MessagesMessageIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.messages)[':message_id']['events']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['events']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['events']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1MessagesMessageIdEventsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1MessagesMessageIdEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1MessagesMessageIdEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.messages[':message_id'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1UsersUserIdMessagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.users)[':user_id']['messages']['$get']>
  >,
) {
  return ['v1', '/v1/users/:user_id/messages', toValue(args)] as const
}

export function getV1UsersUserIdMessagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.users)[':user_id']['messages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1UsersUserIdMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.users[':user_id'].messages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1UsersUserIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.users)[':user_id']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.users)[':user_id']['messages']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.users)[':user_id']['messages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.users)[':user_id']['messages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1UsersUserIdMessagesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.users)[':user_id']['messages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UsersUserIdMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1UsersUserIdMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.users[':user_id'].messages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ProvidersSlackChannelIdRevokeAccessMutationKey() {
  return ['v1', '/v1/providers/slack/:channel_id/revoke_access', 'PUT'] as const
}

export function getPutV1ProvidersSlackChannelIdRevokeAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.providers.slack)[':channel_id']['revoke_access']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.providers.slack)[':channel_id']['revoke_access']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProvidersSlackChannelIdRevokeAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.providers.slack)[':channel_id']['revoke_access']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.providers.slack[':channel_id'].revoke_access.$put(args, options),
      )
    },
  })
}

export function usePutV1ProvidersSlackChannelIdRevokeAccess<
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
                  ReturnType<
                    (typeof client.v1.providers.slack)[':channel_id']['revoke_access']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.providers.slack)[':channel_id']['revoke_access']['$put']
          >,
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
  const mutationDefaults = getPutV1ProvidersSlackChannelIdRevokeAccessMutationOptions<
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

export function getPostV1ObjectsCollectionBulkDeleteMutationKey() {
  return ['v1', '/v1/objects/:collection/bulk/delete', 'POST'] as const
}

export function getPostV1ObjectsCollectionBulkDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.objects)[':collection']['bulk']['delete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.objects)[':collection']['bulk']['delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObjectsCollectionBulkDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.objects)[':collection']['bulk']['delete']['$post']>,
    ) {
      return parseResponse(client.v1.objects[':collection'].bulk.delete.$post(args, options))
    },
  })
}

export function usePostV1ObjectsCollectionBulkDelete<
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
                  ReturnType<(typeof client.v1.objects)[':collection']['bulk']['delete']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.objects)[':collection']['bulk']['delete']['$post']>,
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
  const mutationDefaults = getPostV1ObjectsCollectionBulkDeleteMutationOptions<
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

export function getPutV1UsersUserIdPreferencesIdWorkflowsMutationKey() {
  return ['v1', '/v1/users/:user_id/preferences/:id/workflows', 'PUT'] as const
}

export function getPutV1UsersUserIdPreferencesIdWorkflowsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.users)[':user_id']['preferences'][':id']['workflows']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.users)[':user_id']['preferences'][':id']['workflows']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1UsersUserIdPreferencesIdWorkflowsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.users)[':user_id']['preferences'][':id']['workflows']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.users[':user_id'].preferences[':id'].workflows.$put(args, options),
      )
    },
  })
}

export function usePutV1UsersUserIdPreferencesIdWorkflows<
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
                  ReturnType<
                    (typeof client.v1.users)[':user_id']['preferences'][':id']['workflows']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.users)[':user_id']['preferences'][':id']['workflows']['$put']
          >,
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
  const mutationDefaults = getPutV1UsersUserIdPreferencesIdWorkflowsMutationOptions<
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

export function getV1UsersUserIdGuidesChannelIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.users)[':user_id']['guides'][':channel_id']['$get']>
  >,
) {
  return ['v1', '/v1/users/:user_id/guides/:channel_id', toValue(args)] as const
}

export function getV1UsersUserIdGuidesChannelIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.users)[':user_id']['guides'][':channel_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1UsersUserIdGuidesChannelIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.users[':user_id'].guides[':channel_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1UsersUserIdGuidesChannelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.users)[':user_id']['guides'][':channel_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.users)[':user_id']['guides'][':channel_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.users)[':user_id']['guides'][':channel_id']['$get']>
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
                  ReturnType<(typeof client.v1.users)[':user_id']['guides'][':channel_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1UsersUserIdGuidesChannelIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.users)[':user_id']['guides'][':channel_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UsersUserIdGuidesChannelIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1UsersUserIdGuidesChannelIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.users[':user_id'].guides[':channel_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1UsersUserIdSchedulesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.users)[':user_id']['schedules']['$get']>
  >,
) {
  return ['v1', '/v1/users/:user_id/schedules', toValue(args)] as const
}

export function getV1UsersUserIdSchedulesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.users)[':user_id']['schedules']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1UsersUserIdSchedulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.users[':user_id'].schedules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1UsersUserIdSchedules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.users)[':user_id']['schedules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.users)[':user_id']['schedules']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.users)[':user_id']['schedules']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.users)[':user_id']['schedules']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1UsersUserIdSchedulesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.users)[':user_id']['schedules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UsersUserIdSchedulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1UsersUserIdSchedulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.users[':user_id'].schedules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ObjectsCollectionObjectIdPreferencesIdCategoriesKeyMutationKey() {
  return [
    'v1',
    '/v1/objects/:collection/:object_id/preferences/:id/categories/:key',
    'PUT',
  ] as const
}

export function getPutV1ObjectsCollectionObjectIdPreferencesIdCategoriesKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['categories'][':key']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['categories'][':key']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1ObjectsCollectionObjectIdPreferencesIdCategoriesKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['categories'][':key']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.objects[':collection'][':object_id'].preferences[':id'].categories[':key'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV1ObjectsCollectionObjectIdPreferencesIdCategoriesKey<
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
                  ReturnType<
                    (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['categories'][':key']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['categories'][':key']['$put']
          >,
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
  const mutationDefaults =
    getPutV1ObjectsCollectionObjectIdPreferencesIdCategoriesKeyMutationOptions<
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

export function getPutV1UsersUserIdPreferencesIdCategoriesKeyMutationKey() {
  return ['v1', '/v1/users/:user_id/preferences/:id/categories/:key', 'PUT'] as const
}

export function getPutV1UsersUserIdPreferencesIdCategoriesKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.users)[':user_id']['preferences'][':id']['categories'][':key']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.users)[':user_id']['preferences'][':id']['categories'][':key']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1UsersUserIdPreferencesIdCategoriesKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.users)[':user_id']['preferences'][':id']['categories'][':key']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.users[':user_id'].preferences[':id'].categories[':key'].$put(args, options),
      )
    },
  })
}

export function usePutV1UsersUserIdPreferencesIdCategoriesKey<
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
                  ReturnType<
                    (typeof client.v1.users)[':user_id']['preferences'][':id']['categories'][':key']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.users)[':user_id']['preferences'][':id']['categories'][':key']['$put']
          >,
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
  const mutationDefaults = getPutV1UsersUserIdPreferencesIdCategoriesKeyMutationOptions<
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

export function getV1MessagesMessageIdContentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.messages)[':message_id']['content']['$get']>
  >,
) {
  return ['v1', '/v1/messages/:message_id/content', toValue(args)] as const
}

export function getV1MessagesMessageIdContentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.messages)[':message_id']['content']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1MessagesMessageIdContentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.messages[':message_id'].content.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1MessagesMessageIdContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.messages)[':message_id']['content']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['content']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['content']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1MessagesMessageIdContentQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['content']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1MessagesMessageIdContentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1MessagesMessageIdContentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.messages[':message_id'].content.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProvidersMsTeamsChannelIdAuthCheckQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.providers)['ms-teams'][':channel_id']['auth_check']['$get']>
  >,
) {
  return ['v1', '/v1/providers/ms-teams/:channel_id/auth_check', toValue(args)] as const
}

export function getV1ProvidersMsTeamsChannelIdAuthCheckQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.providers)['ms-teams'][':channel_id']['auth_check']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProvidersMsTeamsChannelIdAuthCheckQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.providers['ms-teams'][':channel_id'].auth_check.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProvidersMsTeamsChannelIdAuthCheck<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.providers)['ms-teams'][':channel_id']['auth_check']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.providers)['ms-teams'][':channel_id']['auth_check']['$get']>
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
                    (typeof client.v1.providers)['ms-teams'][':channel_id']['auth_check']['$get']
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
                    (typeof client.v1.providers)['ms-teams'][':channel_id']['auth_check']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProvidersMsTeamsChannelIdAuthCheckQueryKey>
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
              (typeof client.v1.providers)['ms-teams'][':channel_id']['auth_check']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProvidersMsTeamsChannelIdAuthCheckQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProvidersMsTeamsChannelIdAuthCheckQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.providers['ms-teams'][':channel_id'].auth_check.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ProvidersMsTeamsChannelIdRevokeAccessMutationKey() {
  return ['v1', '/v1/providers/ms-teams/:channel_id/revoke_access', 'PUT'] as const
}

export function getPutV1ProvidersMsTeamsChannelIdRevokeAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.providers)['ms-teams'][':channel_id']['revoke_access']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.providers)['ms-teams'][':channel_id']['revoke_access']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProvidersMsTeamsChannelIdRevokeAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.providers)['ms-teams'][':channel_id']['revoke_access']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.providers['ms-teams'][':channel_id'].revoke_access.$put(args, options),
      )
    },
  })
}

export function usePutV1ProvidersMsTeamsChannelIdRevokeAccess<
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
                  ReturnType<
                    (typeof client.v1.providers)['ms-teams'][':channel_id']['revoke_access']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.providers)['ms-teams'][':channel_id']['revoke_access']['$put']
          >,
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
  const mutationDefaults = getPutV1ProvidersMsTeamsChannelIdRevokeAccessMutationOptions<
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

export function getV1UsersUserIdFeedsIdSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.users)[':user_id']['feeds'][':id']['settings']['$get']>
  >,
) {
  return ['v1', '/v1/users/:user_id/feeds/:id/settings', toValue(args)] as const
}

export function getV1UsersUserIdFeedsIdSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.users)[':user_id']['feeds'][':id']['settings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1UsersUserIdFeedsIdSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.users[':user_id'].feeds[':id'].settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1UsersUserIdFeedsIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.users)[':user_id']['feeds'][':id']['settings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.users)[':user_id']['feeds'][':id']['settings']['$get']>
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
                    (typeof client.v1.users)[':user_id']['feeds'][':id']['settings']['$get']
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
                    (typeof client.v1.users)[':user_id']['feeds'][':id']['settings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1UsersUserIdFeedsIdSettingsQueryKey>
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
            ReturnType<(typeof client.v1.users)[':user_id']['feeds'][':id']['settings']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UsersUserIdFeedsIdSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1UsersUserIdFeedsIdSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.users[':user_id'].feeds[':id'].settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1UsersUserIdGuidesEngagementsResetMutationKey() {
  return ['v1', '/v1/users/:user_id/guides/engagements/reset', 'PUT'] as const
}

export function getPutV1UsersUserIdGuidesEngagementsResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.users)[':user_id']['guides']['engagements']['reset']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.users)[':user_id']['guides']['engagements']['reset']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1UsersUserIdGuidesEngagementsResetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.users)[':user_id']['guides']['engagements']['reset']['$put']
      >,
    ) {
      return parseResponse(client.v1.users[':user_id'].guides.engagements.reset.$put(args, options))
    },
  })
}

export function usePutV1UsersUserIdGuidesEngagementsReset<
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
                  ReturnType<
                    (typeof client.v1.users)[':user_id']['guides']['engagements']['reset']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.users)[':user_id']['guides']['engagements']['reset']['$put']
          >,
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
  const mutationDefaults = getPutV1UsersUserIdGuidesEngagementsResetMutationOptions<
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

export function getV1ObjectsCollectionObjectIdPreferencesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.objects)[':collection'][':object_id']['preferences']['$get']>
  >,
) {
  return ['v1', '/v1/objects/:collection/:object_id/preferences', toValue(args)] as const
}

export function getV1ObjectsCollectionObjectIdPreferencesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.objects)[':collection'][':object_id']['preferences']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectsCollectionObjectIdPreferencesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.objects[':collection'][':object_id'].preferences.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObjectsCollectionObjectIdPreferences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.objects)[':collection'][':object_id']['preferences']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.objects)[':collection'][':object_id']['preferences']['$get']>
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
                    (typeof client.v1.objects)[':collection'][':object_id']['preferences']['$get']
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
                    (typeof client.v1.objects)[':collection'][':object_id']['preferences']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ObjectsCollectionObjectIdPreferencesQueryKey>
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
              (typeof client.v1.objects)[':collection'][':object_id']['preferences']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectsCollectionObjectIdPreferencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectsCollectionObjectIdPreferencesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.objects[':collection'][':object_id'].preferences.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1MessagesMessageIdActivitiesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.messages)[':message_id']['activities']['$get']>
  >,
) {
  return ['v1', '/v1/messages/:message_id/activities', toValue(args)] as const
}

export function getV1MessagesMessageIdActivitiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.messages)[':message_id']['activities']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1MessagesMessageIdActivitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.messages[':message_id'].activities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1MessagesMessageIdActivities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['activities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.messages)[':message_id']['activities']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.messages)[':message_id']['activities']['$get']>
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
                  ReturnType<(typeof client.v1.messages)[':message_id']['activities']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1MessagesMessageIdActivitiesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['activities']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1MessagesMessageIdActivitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1MessagesMessageIdActivitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.messages[':message_id'].activities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1TenantsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.tenants.$get>>,
) {
  return ['v1', '/v1/tenants', toValue(args)] as const
}

export function getV1TenantsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.tenants.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TenantsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.tenants.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Tenants<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tenants.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.tenants.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tenants.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tenants.$get>>>>
          >,
          ReturnType<typeof getV1TenantsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tenants.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1TenantsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TenantsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.tenants.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ObjectsCollectionObjectIdPreferencesIdWorkflowsMutationKey() {
  return ['v1', '/v1/objects/:collection/:object_id/preferences/:id/workflows', 'PUT'] as const
}

export function getPutV1ObjectsCollectionObjectIdPreferencesIdWorkflowsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['workflows']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['workflows']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1ObjectsCollectionObjectIdPreferencesIdWorkflowsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['workflows']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.objects[':collection'][':object_id'].preferences[':id'].workflows.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV1ObjectsCollectionObjectIdPreferencesIdWorkflows<
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
                  ReturnType<
                    (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['workflows']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['workflows']['$put']
          >,
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
  const mutationDefaults = getPutV1ObjectsCollectionObjectIdPreferencesIdWorkflowsMutationOptions<
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

export function getV1ObjectsCollectionIdMessagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.objects)[':collection'][':id']['messages']['$get']>
  >,
) {
  return ['v1', '/v1/objects/:collection/:id/messages', toValue(args)] as const
}

export function getV1ObjectsCollectionIdMessagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.objects)[':collection'][':id']['messages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectsCollectionIdMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.objects[':collection'][':id'].messages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObjectsCollectionIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.objects)[':collection'][':id']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.objects)[':collection'][':id']['messages']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.objects)[':collection'][':id']['messages']['$get']>
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
                  ReturnType<(typeof client.v1.objects)[':collection'][':id']['messages']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ObjectsCollectionIdMessagesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.objects)[':collection'][':id']['messages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectsCollectionIdMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectsCollectionIdMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.objects[':collection'][':id'].messages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1NotifyMutationKey() {
  return ['v1', '/v1/notify', 'POST'] as const
}

export function getPostV1NotifyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.notify.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.notify.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NotifyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.notify.$post>) {
      return parseResponse(client.v1.notify.$post(args, options))
    },
  })
}

export function usePostV1Notify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.notify.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.notify.$post>,
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
  const mutationDefaults = getPostV1NotifyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1MessagesBatchArchivedMutationKey() {
  return ['v1', '/v1/messages/batch/archived', 'POST'] as const
}

export function getPostV1MessagesBatchArchivedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.batch.archived.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.messages.batch.archived.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1MessagesBatchArchivedMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.messages.batch.archived.$post>) {
      return parseResponse(client.v1.messages.batch.archived.$post(args, options))
    },
  })
}

export function usePostV1MessagesBatchArchived<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.messages.batch.archived.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.messages.batch.archived.$post>,
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
  const mutationDefaults = getPostV1MessagesBatchArchivedMutationOptions<TError, TOnMutateResult>(
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

export function getV1UsersUserIdFeedsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.users)[':user_id']['feeds'][':id']['$get']>
  >,
) {
  return ['v1', '/v1/users/:user_id/feeds/:id', toValue(args)] as const
}

export function getV1UsersUserIdFeedsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.users)[':user_id']['feeds'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1UsersUserIdFeedsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.users[':user_id'].feeds[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1UsersUserIdFeedsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.users)[':user_id']['feeds'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.users)[':user_id']['feeds'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.users)[':user_id']['feeds'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.users)[':user_id']['feeds'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1UsersUserIdFeedsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.users)[':user_id']['feeds'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UsersUserIdFeedsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1UsersUserIdFeedsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.users[':user_id'].feeds[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1MessagesBatchUnarchivedMutationKey() {
  return ['v1', '/v1/messages/batch/unarchived', 'POST'] as const
}

export function getPostV1MessagesBatchUnarchivedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.batch.unarchived.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.messages.batch.unarchived.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1MessagesBatchUnarchivedMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.messages.batch.unarchived.$post>) {
      return parseResponse(client.v1.messages.batch.unarchived.$post(args, options))
    },
  })
}

export function usePostV1MessagesBatchUnarchived<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.messages.batch.unarchived.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.messages.batch.unarchived.$post>,
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
  const mutationDefaults = getPostV1MessagesBatchUnarchivedMutationOptions<TError, TOnMutateResult>(
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

export function getV1ProvidersMsTeamsChannelIdTeamsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.providers)['ms-teams'][':channel_id']['teams']['$get']>
  >,
) {
  return ['v1', '/v1/providers/ms-teams/:channel_id/teams', toValue(args)] as const
}

export function getV1ProvidersMsTeamsChannelIdTeamsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.providers)['ms-teams'][':channel_id']['teams']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProvidersMsTeamsChannelIdTeamsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.providers['ms-teams'][':channel_id'].teams.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProvidersMsTeamsChannelIdTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.providers)['ms-teams'][':channel_id']['teams']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.providers)['ms-teams'][':channel_id']['teams']['$get']>
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
                    (typeof client.v1.providers)['ms-teams'][':channel_id']['teams']['$get']
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
                    (typeof client.v1.providers)['ms-teams'][':channel_id']['teams']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProvidersMsTeamsChannelIdTeamsQueryKey>
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
            ReturnType<(typeof client.v1.providers)['ms-teams'][':channel_id']['teams']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProvidersMsTeamsChannelIdTeamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProvidersMsTeamsChannelIdTeamsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.providers['ms-teams'][':channel_id'].teams.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1UsersUserIdMergeMutationKey() {
  return ['v1', '/v1/users/:user_id/merge', 'POST'] as const
}

export function getPostV1UsersUserIdMergeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.users)[':user_id']['merge']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.users)[':user_id']['merge']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1UsersUserIdMergeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.users)[':user_id']['merge']['$post']>,
    ) {
      return parseResponse(client.v1.users[':user_id'].merge.$post(args, options))
    },
  })
}

export function usePostV1UsersUserIdMerge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.users)[':user_id']['merge']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.users)[':user_id']['merge']['$post']>,
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
  const mutationDefaults = getPostV1UsersUserIdMergeMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ObjectsCollectionBulkSubscriptionsDeleteMutationKey() {
  return ['v1', '/v1/objects/:collection/bulk/subscriptions/delete', 'POST'] as const
}

export function getPostV1ObjectsCollectionBulkSubscriptionsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.objects)[':collection']['bulk']['subscriptions']['delete']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.objects)[':collection']['bulk']['subscriptions']['delete']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObjectsCollectionBulkSubscriptionsDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.objects)[':collection']['bulk']['subscriptions']['delete']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.objects[':collection'].bulk.subscriptions.delete.$post(args, options),
      )
    },
  })
}

export function usePostV1ObjectsCollectionBulkSubscriptionsDelete<
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
                  ReturnType<
                    (typeof client.v1.objects)[':collection']['bulk']['subscriptions']['delete']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.objects)[':collection']['bulk']['subscriptions']['delete']['$post']
          >,
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
  const mutationDefaults = getPostV1ObjectsCollectionBulkSubscriptionsDeleteMutationOptions<
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

export function getPutV1UsersUserIdPreferencesIdCategoriesMutationKey() {
  return ['v1', '/v1/users/:user_id/preferences/:id/categories', 'PUT'] as const
}

export function getPutV1UsersUserIdPreferencesIdCategoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.users)[':user_id']['preferences'][':id']['categories']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.users)[':user_id']['preferences'][':id']['categories']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1UsersUserIdPreferencesIdCategoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.users)[':user_id']['preferences'][':id']['categories']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.users[':user_id'].preferences[':id'].categories.$put(args, options),
      )
    },
  })
}

export function usePutV1UsersUserIdPreferencesIdCategories<
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
                  ReturnType<
                    (typeof client.v1.users)[':user_id']['preferences'][':id']['categories']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.users)[':user_id']['preferences'][':id']['categories']['$put']
          >,
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
  const mutationDefaults = getPutV1UsersUserIdPreferencesIdCategoriesMutationOptions<
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

export function getV1ObjectsCollectionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.objects)[':collection']['$get']>>,
) {
  return ['v1', '/v1/objects/:collection', toValue(args)] as const
}

export function getV1ObjectsCollectionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.objects)[':collection']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectsCollectionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.objects[':collection'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObjectsCollection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.objects)[':collection']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.objects)[':collection']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.objects)[':collection']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.objects)[':collection']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ObjectsCollectionQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.objects)[':collection']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectsCollectionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectsCollectionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.objects[':collection'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1UsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.users.$get>>,
) {
  return ['v1', '/v1/users', toValue(args)] as const
}

export function getV1UsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1UsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Users<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>
          >,
          ReturnType<typeof getV1UsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1UsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1UsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkflowRecipientRunsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workflow_recipient_runs)[':id']['$get']>
  >,
) {
  return ['v1', '/v1/workflow_recipient_runs/:id', toValue(args)] as const
}

export function getV1WorkflowRecipientRunsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workflow_recipient_runs)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkflowRecipientRunsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workflow_recipient_runs[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkflowRecipientRunsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workflow_recipient_runs)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workflow_recipient_runs)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.workflow_recipient_runs)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.workflow_recipient_runs)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1WorkflowRecipientRunsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.workflow_recipient_runs)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkflowRecipientRunsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkflowRecipientRunsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workflow_recipient_runs[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1MessagesMessageIdSeenMutationKey() {
  return ['v1', '/v1/messages/:message_id/seen', 'PUT'] as const
}

export function getPutV1MessagesMessageIdSeenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['seen']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.messages)[':message_id']['seen']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1MessagesMessageIdSeenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.messages)[':message_id']['seen']['$put']>,
    ) {
      return parseResponse(client.v1.messages[':message_id'].seen.$put(args, options))
    },
  })
}

export function usePutV1MessagesMessageIdSeen<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['seen']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.messages)[':message_id']['seen']['$put']>,
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
  const mutationDefaults = getPutV1MessagesMessageIdSeenMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1MessagesMessageIdSeenMutationKey() {
  return ['v1', '/v1/messages/:message_id/seen', 'DELETE'] as const
}

export function getDeleteV1MessagesMessageIdSeenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['seen']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.messages)[':message_id']['seen']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1MessagesMessageIdSeenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.messages)[':message_id']['seen']['$delete']>,
    ) {
      return parseResponse(client.v1.messages[':message_id'].seen.$delete(args, options))
    },
  })
}

export function useDeleteV1MessagesMessageIdSeen<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['seen']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.messages)[':message_id']['seen']['$delete']>,
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
  const mutationDefaults = getDeleteV1MessagesMessageIdSeenMutationOptions<TError, TOnMutateResult>(
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

export function getV1ProvidersSlackChannelIdAuthCheckQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.providers.slack)[':channel_id']['auth_check']['$get']>
  >,
) {
  return ['v1', '/v1/providers/slack/:channel_id/auth_check', toValue(args)] as const
}

export function getV1ProvidersSlackChannelIdAuthCheckQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.providers.slack)[':channel_id']['auth_check']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProvidersSlackChannelIdAuthCheckQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.providers.slack[':channel_id'].auth_check.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProvidersSlackChannelIdAuthCheck<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.providers.slack)[':channel_id']['auth_check']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.providers.slack)[':channel_id']['auth_check']['$get']>
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
                    (typeof client.v1.providers.slack)[':channel_id']['auth_check']['$get']
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
                    (typeof client.v1.providers.slack)[':channel_id']['auth_check']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProvidersSlackChannelIdAuthCheckQueryKey>
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
            ReturnType<(typeof client.v1.providers.slack)[':channel_id']['auth_check']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProvidersSlackChannelIdAuthCheckQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProvidersSlackChannelIdAuthCheckQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.providers.slack[':channel_id'].auth_check.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1UsersBulkDeleteMutationKey() {
  return ['v1', '/v1/users/bulk/delete', 'POST'] as const
}

export function getPostV1UsersBulkDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.bulk.delete.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.users.bulk.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1UsersBulkDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.users.bulk.delete.$post>) {
      return parseResponse(client.v1.users.bulk.delete.$post(args, options))
    },
  })
}

export function usePostV1UsersBulkDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.bulk.delete.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.users.bulk.delete.$post>,
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
  const mutationDefaults = getPostV1UsersBulkDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1NotifyCancelMutationKey() {
  return ['v1', '/v1/notify/cancel', 'POST'] as const
}

export function getPostV1NotifyCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.notify.cancel.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.notify.cancel.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NotifyCancelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.notify.cancel.$post>) {
      return parseResponse(client.v1.notify.cancel.$post(args, options))
    },
  })
}

export function usePostV1NotifyCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.v1.notify.cancel.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v1.notify.cancel.$post>,
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
  const mutationDefaults = getPostV1NotifyCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPutV1ObjectsCollectionObjectIdPreferencesIdChannelTypesTypeMutationKey() {
  return [
    'v1',
    '/v1/objects/:collection/:object_id/preferences/:id/channel_types/:type',
    'PUT',
  ] as const
}

export function getPutV1ObjectsCollectionObjectIdPreferencesIdChannelTypesTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['channel_types'][':type']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['channel_types'][':type']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1ObjectsCollectionObjectIdPreferencesIdChannelTypesTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['channel_types'][':type']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.objects[':collection'][':object_id'].preferences[':id'].channel_types[
          ':type'
        ].$put(args, options),
      )
    },
  })
}

export function usePutV1ObjectsCollectionObjectIdPreferencesIdChannelTypesType<
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
                  ReturnType<
                    (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['channel_types'][':type']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['channel_types'][':type']['$put']
          >,
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
  const mutationDefaults =
    getPutV1ObjectsCollectionObjectIdPreferencesIdChannelTypesTypeMutationOptions<
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

export function getPutV1ObjectsCollectionObjectIdPreferencesIdChannelTypesMutationKey() {
  return ['v1', '/v1/objects/:collection/:object_id/preferences/:id/channel_types', 'PUT'] as const
}

export function getPutV1ObjectsCollectionObjectIdPreferencesIdChannelTypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['channel_types']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['channel_types']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1ObjectsCollectionObjectIdPreferencesIdChannelTypesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['channel_types']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.objects[':collection'][':object_id'].preferences[':id'].channel_types.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV1ObjectsCollectionObjectIdPreferencesIdChannelTypes<
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
                  ReturnType<
                    (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['channel_types']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['channel_types']['$put']
          >,
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
  const mutationDefaults =
    getPutV1ObjectsCollectionObjectIdPreferencesIdChannelTypesMutationOptions<
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

export function getPostV1UsersBulkIdentifyMutationKey() {
  return ['v1', '/v1/users/bulk/identify', 'POST'] as const
}

export function getPostV1UsersBulkIdentifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.bulk.identify.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.users.bulk.identify.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1UsersBulkIdentifyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.users.bulk.identify.$post>) {
      return parseResponse(client.v1.users.bulk.identify.$post(args, options))
    },
  })
}

export function usePostV1UsersBulkIdentify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.bulk.identify.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.users.bulk.identify.$post>,
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
  const mutationDefaults = getPostV1UsersBulkIdentifyMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1TenantsBulkSetMutationKey() {
  return ['v1', '/v1/tenants/bulk/set', 'POST'] as const
}

export function getPostV1TenantsBulkSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tenants.bulk.set.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.tenants.bulk.set.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TenantsBulkSetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.tenants.bulk.set.$post>) {
      return parseResponse(client.v1.tenants.bulk.set.$post(args, options))
    },
  })
}

export function usePostV1TenantsBulkSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.tenants.bulk.set.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.tenants.bulk.set.$post>,
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
  const mutationDefaults = getPostV1TenantsBulkSetMutationOptions<TError, TOnMutateResult>(
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

export function getV1AudiencesKeyMembersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.audiences)[':key']['members']['$get']>>,
) {
  return ['v1', '/v1/audiences/:key/members', toValue(args)] as const
}

export function getV1AudiencesKeyMembersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.audiences)[':key']['members']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AudiencesKeyMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.audiences[':key'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AudiencesKeyMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.audiences)[':key']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.audiences)[':key']['members']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.audiences)[':key']['members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.audiences)[':key']['members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AudiencesKeyMembersQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.audiences)[':key']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AudiencesKeyMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AudiencesKeyMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.audiences[':key'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AudiencesKeyMembersMutationKey() {
  return ['v1', '/v1/audiences/:key/members', 'POST'] as const
}

export function getPostV1AudiencesKeyMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.audiences)[':key']['members']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.audiences)[':key']['members']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AudiencesKeyMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.audiences)[':key']['members']['$post']>,
    ) {
      return parseResponse(client.v1.audiences[':key'].members.$post(args, options))
    },
  })
}

export function usePostV1AudiencesKeyMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.audiences)[':key']['members']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.audiences)[':key']['members']['$post']>,
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
  const mutationDefaults = getPostV1AudiencesKeyMembersMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1AudiencesKeyMembersMutationKey() {
  return ['v1', '/v1/audiences/:key/members', 'DELETE'] as const
}

export function getDeleteV1AudiencesKeyMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.audiences)[':key']['members']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.audiences)[':key']['members']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AudiencesKeyMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.audiences)[':key']['members']['$delete']>,
    ) {
      return parseResponse(client.v1.audiences[':key'].members.$delete(args, options))
    },
  })
}

export function useDeleteV1AudiencesKeyMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.audiences)[':key']['members']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.audiences)[':key']['members']['$delete']>,
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
  const mutationDefaults = getDeleteV1AudiencesKeyMembersMutationOptions<TError, TOnMutateResult>(
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

export function getPutV1MessagesMessageIdArchivedMutationKey() {
  return ['v1', '/v1/messages/:message_id/archived', 'PUT'] as const
}

export function getPutV1MessagesMessageIdArchivedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['archived']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.messages)[':message_id']['archived']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1MessagesMessageIdArchivedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.messages)[':message_id']['archived']['$put']>,
    ) {
      return parseResponse(client.v1.messages[':message_id'].archived.$put(args, options))
    },
  })
}

export function usePutV1MessagesMessageIdArchived<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['archived']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.messages)[':message_id']['archived']['$put']>,
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
  const mutationDefaults = getPutV1MessagesMessageIdArchivedMutationOptions<
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

export function getDeleteV1MessagesMessageIdArchivedMutationKey() {
  return ['v1', '/v1/messages/:message_id/archived', 'DELETE'] as const
}

export function getDeleteV1MessagesMessageIdArchivedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['archived']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.messages)[':message_id']['archived']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1MessagesMessageIdArchivedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.messages)[':message_id']['archived']['$delete']>,
    ) {
      return parseResponse(client.v1.messages[':message_id'].archived.$delete(args, options))
    },
  })
}

export function useDeleteV1MessagesMessageIdArchived<
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
                  ReturnType<(typeof client.v1.messages)[':message_id']['archived']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.messages)[':message_id']['archived']['$delete']>,
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
  const mutationDefaults = getDeleteV1MessagesMessageIdArchivedMutationOptions<
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

export function getPostV1WorkflowsKeyTriggerMutationKey() {
  return ['v1', '/v1/workflows/:key/trigger', 'POST'] as const
}

export function getPostV1WorkflowsKeyTriggerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workflows)[':key']['trigger']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.workflows)[':key']['trigger']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkflowsKeyTriggerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.workflows)[':key']['trigger']['$post']>,
    ) {
      return parseResponse(client.v1.workflows[':key'].trigger.$post(args, options))
    },
  })
}

export function usePostV1WorkflowsKeyTrigger<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.workflows)[':key']['trigger']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.workflows)[':key']['trigger']['$post']>,
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
  const mutationDefaults = getPostV1WorkflowsKeyTriggerMutationOptions<TError, TOnMutateResult>(
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

export function getPutV1UsersUserIdGuidesMessagesMessageIdArchivedMutationKey() {
  return ['v1', '/v1/users/:user_id/guides/messages/:message_id/archived', 'PUT'] as const
}

export function getPutV1UsersUserIdGuidesMessagesMessageIdArchivedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.users)[':user_id']['guides']['messages'][':message_id']['archived']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.users)[':user_id']['guides']['messages'][':message_id']['archived']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1UsersUserIdGuidesMessagesMessageIdArchivedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.users)[':user_id']['guides']['messages'][':message_id']['archived']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.users[':user_id'].guides.messages[':message_id'].archived.$put(args, options),
      )
    },
  })
}

export function usePutV1UsersUserIdGuidesMessagesMessageIdArchived<
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
                  ReturnType<
                    (typeof client.v1.users)[':user_id']['guides']['messages'][':message_id']['archived']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.users)[':user_id']['guides']['messages'][':message_id']['archived']['$put']
          >,
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
  const mutationDefaults = getPutV1UsersUserIdGuidesMessagesMessageIdArchivedMutationOptions<
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

export function getPostV1TenantsBulkDeleteMutationKey() {
  return ['v1', '/v1/tenants/bulk/delete', 'POST'] as const
}

export function getPostV1TenantsBulkDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.tenants.bulk.delete.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.tenants.bulk.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TenantsBulkDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.tenants.bulk.delete.$post>) {
      return parseResponse(client.v1.tenants.bulk.delete.$post(args, options))
    },
  })
}

export function usePostV1TenantsBulkDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.tenants.bulk.delete.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.tenants.bulk.delete.$post>,
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
  const mutationDefaults = getPostV1TenantsBulkDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1MessagesMessageIdUnreadMutationKey() {
  return ['v1', '/v1/messages/:message_id/unread', 'DELETE'] as const
}

export function getDeleteV1MessagesMessageIdUnreadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['unread']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.messages)[':message_id']['unread']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1MessagesMessageIdUnreadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.messages)[':message_id']['unread']['$delete']>,
    ) {
      return parseResponse(client.v1.messages[':message_id'].unread.$delete(args, options))
    },
  })
}

export function useDeleteV1MessagesMessageIdUnread<
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
                Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['unread']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.messages)[':message_id']['unread']['$delete']>,
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
  const mutationDefaults = getDeleteV1MessagesMessageIdUnreadMutationOptions<
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

export function getV1UsersUserIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.users)[':user_id']['$get']>>,
) {
  return ['v1', '/v1/users/:user_id', toValue(args)] as const
}

export function getV1UsersUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.users)[':user_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1UsersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.users[':user_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1UsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':user_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.users)[':user_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.users)[':user_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.users)[':user_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1UsersUserIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':user_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UsersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1UsersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.users[':user_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1UsersUserIdMutationKey() {
  return ['v1', '/v1/users/:user_id', 'PUT'] as const
}

export function getPutV1UsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':user_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.users)[':user_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1UsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.users)[':user_id']['$put']>) {
      return parseResponse(client.v1.users[':user_id'].$put(args, options))
    },
  })
}

export function usePutV1UsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.users)[':user_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.users)[':user_id']['$put']>,
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
  const mutationDefaults = getPutV1UsersUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1UsersUserIdMutationKey() {
  return ['v1', '/v1/users/:user_id', 'DELETE'] as const
}

export function getDeleteV1UsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':user_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.users)[':user_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1UsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.users)[':user_id']['$delete']>) {
      return parseResponse(client.v1.users[':user_id'].$delete(args, options))
    },
  })
}

export function useDeleteV1UsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.users)[':user_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.users)[':user_id']['$delete']>,
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
  const mutationDefaults = getDeleteV1UsersUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1MessagesBatchInteractedMutationKey() {
  return ['v1', '/v1/messages/batch/interacted', 'POST'] as const
}

export function getPostV1MessagesBatchInteractedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.batch.interacted.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.messages.batch.interacted.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1MessagesBatchInteractedMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.messages.batch.interacted.$post>) {
      return parseResponse(client.v1.messages.batch.interacted.$post(args, options))
    },
  })
}

export function usePostV1MessagesBatchInteracted<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.messages.batch.interacted.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.messages.batch.interacted.$post>,
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
  const mutationDefaults = getPostV1MessagesBatchInteractedMutationOptions<TError, TOnMutateResult>(
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

export function getV1TenantsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.tenants)[':id']['$get']>>,
) {
  return ['v1', '/v1/tenants/:id', toValue(args)] as const
}

export function getV1TenantsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.tenants)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TenantsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.tenants[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TenantsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tenants)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.tenants)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tenants)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tenants)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV1TenantsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tenants)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TenantsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TenantsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.tenants[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1TenantsIdMutationKey() {
  return ['v1', '/v1/tenants/:id', 'PUT'] as const
}

export function getPutV1TenantsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tenants)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.tenants)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1TenantsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.tenants)[':id']['$put']>) {
      return parseResponse(client.v1.tenants[':id'].$put(args, options))
    },
  })
}

export function usePutV1TenantsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tenants)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.tenants)[':id']['$put']>,
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
  const mutationDefaults = getPutV1TenantsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1TenantsIdMutationKey() {
  return ['v1', '/v1/tenants/:id', 'DELETE'] as const
}

export function getDeleteV1TenantsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tenants)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.tenants)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TenantsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.tenants)[':id']['$delete']>) {
      return parseResponse(client.v1.tenants[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1TenantsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.tenants)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.tenants)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteV1TenantsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutV1UsersUserIdGuidesMessagesSeenMutationKey() {
  return ['v1', '/v1/users/:user_id/guides/messages/seen', 'PUT'] as const
}

export function getPutV1UsersUserIdGuidesMessagesSeenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.users)[':user_id']['guides']['messages']['seen']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.users)[':user_id']['guides']['messages']['seen']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1UsersUserIdGuidesMessagesSeenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.users)[':user_id']['guides']['messages']['seen']['$put']
      >,
    ) {
      return parseResponse(client.v1.users[':user_id'].guides.messages.seen.$put(args, options))
    },
  })
}

export function usePutV1UsersUserIdGuidesMessagesSeen<
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
                  ReturnType<
                    (typeof client.v1.users)[':user_id']['guides']['messages']['seen']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.users)[':user_id']['guides']['messages']['seen']['$put']
          >,
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
  const mutationDefaults = getPutV1UsersUserIdGuidesMessagesSeenMutationOptions<
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

export function getDeleteV1MessagesMessageIdUnseenMutationKey() {
  return ['v1', '/v1/messages/:message_id/unseen', 'DELETE'] as const
}

export function getDeleteV1MessagesMessageIdUnseenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['unseen']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.messages)[':message_id']['unseen']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1MessagesMessageIdUnseenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.messages)[':message_id']['unseen']['$delete']>,
    ) {
      return parseResponse(client.v1.messages[':message_id'].unseen.$delete(args, options))
    },
  })
}

export function useDeleteV1MessagesMessageIdUnseen<
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
                Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['unseen']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.messages)[':message_id']['unseen']['$delete']>,
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
  const mutationDefaults = getDeleteV1MessagesMessageIdUnseenMutationOptions<
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

export function getV1ObjectsCollectionObjectIdSubscriptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.objects)[':collection'][':object_id']['subscriptions']['$get']
    >
  >,
) {
  return ['v1', '/v1/objects/:collection/:object_id/subscriptions', toValue(args)] as const
}

export function getV1ObjectsCollectionObjectIdSubscriptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.objects)[':collection'][':object_id']['subscriptions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectsCollectionObjectIdSubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.objects[':collection'][':object_id'].subscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObjectsCollectionObjectIdSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.objects)[':collection'][':object_id']['subscriptions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.objects)[':collection'][':object_id']['subscriptions']['$get']
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
                    (typeof client.v1.objects)[':collection'][':object_id']['subscriptions']['$get']
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
                    (typeof client.v1.objects)[':collection'][':object_id']['subscriptions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ObjectsCollectionObjectIdSubscriptionsQueryKey>
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
              (typeof client.v1.objects)[':collection'][':object_id']['subscriptions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectsCollectionObjectIdSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectsCollectionObjectIdSubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.objects[':collection'][':object_id'].subscriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ObjectsCollectionObjectIdSubscriptionsMutationKey() {
  return ['v1', '/v1/objects/:collection/:object_id/subscriptions', 'POST'] as const
}

export function getPostV1ObjectsCollectionObjectIdSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.objects)[':collection'][':object_id']['subscriptions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.objects)[':collection'][':object_id']['subscriptions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObjectsCollectionObjectIdSubscriptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.objects)[':collection'][':object_id']['subscriptions']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.objects[':collection'][':object_id'].subscriptions.$post(args, options),
      )
    },
  })
}

export function usePostV1ObjectsCollectionObjectIdSubscriptions<
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
                  ReturnType<
                    (typeof client.v1.objects)[':collection'][':object_id']['subscriptions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.objects)[':collection'][':object_id']['subscriptions']['$post']
          >,
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
  const mutationDefaults = getPostV1ObjectsCollectionObjectIdSubscriptionsMutationOptions<
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

export function getDeleteV1ObjectsCollectionObjectIdSubscriptionsMutationKey() {
  return ['v1', '/v1/objects/:collection/:object_id/subscriptions', 'DELETE'] as const
}

export function getDeleteV1ObjectsCollectionObjectIdSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.objects)[':collection'][':object_id']['subscriptions']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.objects)[':collection'][':object_id']['subscriptions']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ObjectsCollectionObjectIdSubscriptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.objects)[':collection'][':object_id']['subscriptions']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.objects[':collection'][':object_id'].subscriptions.$delete(args, options),
      )
    },
  })
}

export function useDeleteV1ObjectsCollectionObjectIdSubscriptions<
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
                  ReturnType<
                    (typeof client.v1.objects)[':collection'][':object_id']['subscriptions']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.objects)[':collection'][':object_id']['subscriptions']['$delete']
          >,
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
  const mutationDefaults = getDeleteV1ObjectsCollectionObjectIdSubscriptionsMutationOptions<
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

export function getPutV1ObjectsCollectionObjectIdPreferencesIdWorkflowsKeyMutationKey() {
  return ['v1', '/v1/objects/:collection/:object_id/preferences/:id/workflows/:key', 'PUT'] as const
}

export function getPutV1ObjectsCollectionObjectIdPreferencesIdWorkflowsKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['workflows'][':key']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['workflows'][':key']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1ObjectsCollectionObjectIdPreferencesIdWorkflowsKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['workflows'][':key']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.objects[':collection'][':object_id'].preferences[':id'].workflows[':key'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV1ObjectsCollectionObjectIdPreferencesIdWorkflowsKey<
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
                  ReturnType<
                    (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['workflows'][':key']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['workflows'][':key']['$put']
          >,
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
  const mutationDefaults =
    getPutV1ObjectsCollectionObjectIdPreferencesIdWorkflowsKeyMutationOptions<
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

export function getPutV1MessagesMessageIdReadMutationKey() {
  return ['v1', '/v1/messages/:message_id/read', 'PUT'] as const
}

export function getPutV1MessagesMessageIdReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['read']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.messages)[':message_id']['read']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1MessagesMessageIdReadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.messages)[':message_id']['read']['$put']>,
    ) {
      return parseResponse(client.v1.messages[':message_id'].read.$put(args, options))
    },
  })
}

export function usePutV1MessagesMessageIdRead<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['read']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.messages)[':message_id']['read']['$put']>,
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
  const mutationDefaults = getPutV1MessagesMessageIdReadMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1MessagesMessageIdReadMutationKey() {
  return ['v1', '/v1/messages/:message_id/read', 'DELETE'] as const
}

export function getDeleteV1MessagesMessageIdReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['read']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.messages)[':message_id']['read']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1MessagesMessageIdReadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.messages)[':message_id']['read']['$delete']>,
    ) {
      return parseResponse(client.v1.messages[':message_id'].read.$delete(args, options))
    },
  })
}

export function useDeleteV1MessagesMessageIdRead<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['read']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.messages)[':message_id']['read']['$delete']>,
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
  const mutationDefaults = getDeleteV1MessagesMessageIdReadMutationOptions<TError, TOnMutateResult>(
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

export function getV1UsersUserIdPreferenceCenterConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.users)[':user_id']['preference_center']['config']['$get']>
  >,
) {
  return ['v1', '/v1/users/:user_id/preference_center/config', toValue(args)] as const
}

export function getV1UsersUserIdPreferenceCenterConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.users)[':user_id']['preference_center']['config']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1UsersUserIdPreferenceCenterConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.users[':user_id'].preference_center.config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1UsersUserIdPreferenceCenterConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.users)[':user_id']['preference_center']['config']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.users)[':user_id']['preference_center']['config']['$get']>
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
                    (typeof client.v1.users)[':user_id']['preference_center']['config']['$get']
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
                    (typeof client.v1.users)[':user_id']['preference_center']['config']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1UsersUserIdPreferenceCenterConfigQueryKey>
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
            ReturnType<(typeof client.v1.users)[':user_id']['preference_center']['config']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UsersUserIdPreferenceCenterConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1UsersUserIdPreferenceCenterConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.users[':user_id'].preference_center.config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1UsersUserIdChannelDataChannelIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.users)[':user_id']['channel_data'][':channel_id']['$get']>
  >,
) {
  return ['v1', '/v1/users/:user_id/channel_data/:channel_id', toValue(args)] as const
}

export function getV1UsersUserIdChannelDataChannelIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.users)[':user_id']['channel_data'][':channel_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1UsersUserIdChannelDataChannelIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.users[':user_id'].channel_data[':channel_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1UsersUserIdChannelDataChannelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.users)[':user_id']['channel_data'][':channel_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.users)[':user_id']['channel_data'][':channel_id']['$get']>
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
                    (typeof client.v1.users)[':user_id']['channel_data'][':channel_id']['$get']
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
                    (typeof client.v1.users)[':user_id']['channel_data'][':channel_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1UsersUserIdChannelDataChannelIdQueryKey>
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
            ReturnType<(typeof client.v1.users)[':user_id']['channel_data'][':channel_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UsersUserIdChannelDataChannelIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1UsersUserIdChannelDataChannelIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.users[':user_id'].channel_data[':channel_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1UsersUserIdChannelDataChannelIdMutationKey() {
  return ['v1', '/v1/users/:user_id/channel_data/:channel_id', 'PUT'] as const
}

export function getPutV1UsersUserIdChannelDataChannelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.users)[':user_id']['channel_data'][':channel_id']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.users)[':user_id']['channel_data'][':channel_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1UsersUserIdChannelDataChannelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.users)[':user_id']['channel_data'][':channel_id']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.users[':user_id'].channel_data[':channel_id'].$put(args, options),
      )
    },
  })
}

export function usePutV1UsersUserIdChannelDataChannelId<
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
                  ReturnType<
                    (typeof client.v1.users)[':user_id']['channel_data'][':channel_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.users)[':user_id']['channel_data'][':channel_id']['$put']
          >,
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
  const mutationDefaults = getPutV1UsersUserIdChannelDataChannelIdMutationOptions<
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

export function getDeleteV1UsersUserIdChannelDataChannelIdMutationKey() {
  return ['v1', '/v1/users/:user_id/channel_data/:channel_id', 'DELETE'] as const
}

export function getDeleteV1UsersUserIdChannelDataChannelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.users)[':user_id']['channel_data'][':channel_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.users)[':user_id']['channel_data'][':channel_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1UsersUserIdChannelDataChannelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.users)[':user_id']['channel_data'][':channel_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.users[':user_id'].channel_data[':channel_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1UsersUserIdChannelDataChannelId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.v1.users)[':user_id']['channel_data'][':channel_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.users)[':user_id']['channel_data'][':channel_id']['$delete']
          >,
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
  const mutationDefaults = getDeleteV1UsersUserIdChannelDataChannelIdMutationOptions<
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

export function getPutV1UsersUserIdPreferencesIdWorkflowsKeyMutationKey() {
  return ['v1', '/v1/users/:user_id/preferences/:id/workflows/:key', 'PUT'] as const
}

export function getPutV1UsersUserIdPreferencesIdWorkflowsKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.users)[':user_id']['preferences'][':id']['workflows'][':key']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.users)[':user_id']['preferences'][':id']['workflows'][':key']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1UsersUserIdPreferencesIdWorkflowsKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.users)[':user_id']['preferences'][':id']['workflows'][':key']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.users[':user_id'].preferences[':id'].workflows[':key'].$put(args, options),
      )
    },
  })
}

export function usePutV1UsersUserIdPreferencesIdWorkflowsKey<
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
                  ReturnType<
                    (typeof client.v1.users)[':user_id']['preferences'][':id']['workflows'][':key']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.users)[':user_id']['preferences'][':id']['workflows'][':key']['$put']
          >,
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
  const mutationDefaults = getPutV1UsersUserIdPreferencesIdWorkflowsKeyMutationOptions<
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

export function getV1SchedulesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.schedules.$get>>,
) {
  return ['v1', '/v1/schedules', toValue(args)] as const
}

export function getV1SchedulesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.schedules.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SchedulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.schedules.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Schedules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.schedules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.schedules.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.schedules.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.schedules.$get>>>>
          >,
          ReturnType<typeof getV1SchedulesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.schedules.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1SchedulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SchedulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.schedules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1SchedulesMutationKey() {
  return ['v1', '/v1/schedules', 'PUT'] as const
}

export function getPutV1SchedulesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.schedules.$put>>>>>,
    TError,
    InferRequestType<typeof client.v1.schedules.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1SchedulesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.schedules.$put>) {
      return parseResponse(client.v1.schedules.$put(args, options))
    },
  })
}

export function usePutV1Schedules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.schedules.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.schedules.$put>,
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
  const mutationDefaults = getPutV1SchedulesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1SchedulesMutationKey() {
  return ['v1', '/v1/schedules', 'POST'] as const
}

export function getPostV1SchedulesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.schedules.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.schedules.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SchedulesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.schedules.$post>) {
      return parseResponse(client.v1.schedules.$post(args, options))
    },
  })
}

export function usePostV1Schedules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.schedules.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.schedules.$post>,
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
  const mutationDefaults = getPostV1SchedulesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1SchedulesMutationKey() {
  return ['v1', '/v1/schedules', 'DELETE'] as const
}

export function getDeleteV1SchedulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.schedules.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.schedules.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1SchedulesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.schedules.$delete>) {
      return parseResponse(client.v1.schedules.$delete(args, options))
    },
  })
}

export function useDeleteV1Schedules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.schedules.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.schedules.$delete>,
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
  const mutationDefaults = getDeleteV1SchedulesMutationOptions<TError, TOnMutateResult>(
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

export function getV1ObjectsCollectionObjectIdPreferencesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['$get']
    >
  >,
) {
  return ['v1', '/v1/objects/:collection/:object_id/preferences/:id', toValue(args)] as const
}

export function getV1ObjectsCollectionObjectIdPreferencesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectsCollectionObjectIdPreferencesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.objects[':collection'][':object_id'].preferences[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObjectsCollectionObjectIdPreferencesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['$get']
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
                    (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['$get']
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
                    (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ObjectsCollectionObjectIdPreferencesIdQueryKey>
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
              (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectsCollectionObjectIdPreferencesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectsCollectionObjectIdPreferencesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.objects[':collection'][':object_id'].preferences[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ObjectsCollectionObjectIdPreferencesIdMutationKey() {
  return ['v1', '/v1/objects/:collection/:object_id/preferences/:id', 'PUT'] as const
}

export function getPutV1ObjectsCollectionObjectIdPreferencesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1ObjectsCollectionObjectIdPreferencesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.objects[':collection'][':object_id'].preferences[':id'].$put(args, options),
      )
    },
  })
}

export function usePutV1ObjectsCollectionObjectIdPreferencesId<
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
                  ReturnType<
                    (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['$put']
          >,
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
  const mutationDefaults = getPutV1ObjectsCollectionObjectIdPreferencesIdMutationOptions<
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

export function getDeleteV1ObjectsCollectionObjectIdPreferencesIdMutationKey() {
  return ['v1', '/v1/objects/:collection/:object_id/preferences/:id', 'DELETE'] as const
}

export function getDeleteV1ObjectsCollectionObjectIdPreferencesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ObjectsCollectionObjectIdPreferencesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.objects[':collection'][':object_id'].preferences[':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1ObjectsCollectionObjectIdPreferencesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['$delete']
          >,
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
  const mutationDefaults = getDeleteV1ObjectsCollectionObjectIdPreferencesIdMutationOptions<
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

export function getPutV1UsersUserIdGuidesMessagesMessageIdSeenMutationKey() {
  return ['v1', '/v1/users/:user_id/guides/messages/:message_id/seen', 'PUT'] as const
}

export function getPutV1UsersUserIdGuidesMessagesMessageIdSeenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.users)[':user_id']['guides']['messages'][':message_id']['seen']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.users)[':user_id']['guides']['messages'][':message_id']['seen']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1UsersUserIdGuidesMessagesMessageIdSeenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.users)[':user_id']['guides']['messages'][':message_id']['seen']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.users[':user_id'].guides.messages[':message_id'].seen.$put(args, options),
      )
    },
  })
}

export function usePutV1UsersUserIdGuidesMessagesMessageIdSeen<
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
                  ReturnType<
                    (typeof client.v1.users)[':user_id']['guides']['messages'][':message_id']['seen']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.users)[':user_id']['guides']['messages'][':message_id']['seen']['$put']
          >,
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
  const mutationDefaults = getPutV1UsersUserIdGuidesMessagesMessageIdSeenMutationOptions<
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

export function getPostV1ObjectsCollectionBulkSetMutationKey() {
  return ['v1', '/v1/objects/:collection/bulk/set', 'POST'] as const
}

export function getPostV1ObjectsCollectionBulkSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.objects)[':collection']['bulk']['set']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.objects)[':collection']['bulk']['set']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObjectsCollectionBulkSetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.objects)[':collection']['bulk']['set']['$post']>,
    ) {
      return parseResponse(client.v1.objects[':collection'].bulk.set.$post(args, options))
    },
  })
}

export function usePostV1ObjectsCollectionBulkSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.objects)[':collection']['bulk']['set']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.objects)[':collection']['bulk']['set']['$post']>,
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
  const mutationDefaults = getPostV1ObjectsCollectionBulkSetMutationOptions<
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

export function getPostV1IntegrationsHightouchEmbeddedDestinationMutationKey() {
  return ['v1', '/v1/integrations/hightouch/embedded-destination', 'POST'] as const
}

export function getPostV1IntegrationsHightouchEmbeddedDestinationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.integrations.hightouch)['embedded-destination']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.integrations.hightouch)['embedded-destination']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1IntegrationsHightouchEmbeddedDestinationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.integrations.hightouch)['embedded-destination']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.integrations.hightouch['embedded-destination'].$post(args, options),
      )
    },
  })
}

export function usePostV1IntegrationsHightouchEmbeddedDestination<
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
                  ReturnType<
                    (typeof client.v1.integrations.hightouch)['embedded-destination']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.integrations.hightouch)['embedded-destination']['$post']
          >,
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
  const mutationDefaults = getPostV1IntegrationsHightouchEmbeddedDestinationMutationOptions<
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

export function getPostV1MessagesBatchUnseenMutationKey() {
  return ['v1', '/v1/messages/batch/unseen', 'POST'] as const
}

export function getPostV1MessagesBatchUnseenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.batch.unseen.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.messages.batch.unseen.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1MessagesBatchUnseenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.messages.batch.unseen.$post>) {
      return parseResponse(client.v1.messages.batch.unseen.$post(args, options))
    },
  })
}

export function usePostV1MessagesBatchUnseen<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.messages.batch.unseen.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.messages.batch.unseen.$post>,
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
  const mutationDefaults = getPostV1MessagesBatchUnseenMutationOptions<TError, TOnMutateResult>(
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

export function getV1ObjectsCollectionIdSchedulesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.objects)[':collection'][':id']['schedules']['$get']>
  >,
) {
  return ['v1', '/v1/objects/:collection/:id/schedules', toValue(args)] as const
}

export function getV1ObjectsCollectionIdSchedulesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.objects)[':collection'][':id']['schedules']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectsCollectionIdSchedulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.objects[':collection'][':id'].schedules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObjectsCollectionIdSchedules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.objects)[':collection'][':id']['schedules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.objects)[':collection'][':id']['schedules']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.objects)[':collection'][':id']['schedules']['$get']>
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
                  ReturnType<(typeof client.v1.objects)[':collection'][':id']['schedules']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ObjectsCollectionIdSchedulesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.objects)[':collection'][':id']['schedules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectsCollectionIdSchedulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectsCollectionIdSchedulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.objects[':collection'][':id'].schedules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1SchedulesBulkCreateMutationKey() {
  return ['v1', '/v1/schedules/bulk/create', 'POST'] as const
}

export function getPostV1SchedulesBulkCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.schedules.bulk.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.schedules.bulk.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SchedulesBulkCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.schedules.bulk.create.$post>) {
      return parseResponse(client.v1.schedules.bulk.create.$post(args, options))
    },
  })
}

export function usePostV1SchedulesBulkCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.schedules.bulk.create.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.schedules.bulk.create.$post>,
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
  const mutationDefaults = getPostV1SchedulesBulkCreateMutationOptions<TError, TOnMutateResult>(
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

export function getV1ObjectsCollectionObjectIdChannelDataChannelIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.objects)[':collection'][':object_id']['channel_data'][':channel_id']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/objects/:collection/:object_id/channel_data/:channel_id',
    toValue(args),
  ] as const
}

export function getV1ObjectsCollectionObjectIdChannelDataChannelIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.objects)[':collection'][':object_id']['channel_data'][':channel_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObjectsCollectionObjectIdChannelDataChannelIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.objects[':collection'][':object_id'].channel_data[':channel_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1ObjectsCollectionObjectIdChannelDataChannelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.objects)[':collection'][':object_id']['channel_data'][':channel_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.objects)[':collection'][':object_id']['channel_data'][':channel_id']['$get']
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
                    (typeof client.v1.objects)[':collection'][':object_id']['channel_data'][':channel_id']['$get']
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
                    (typeof client.v1.objects)[':collection'][':object_id']['channel_data'][':channel_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ObjectsCollectionObjectIdChannelDataChannelIdQueryKey>
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
              (typeof client.v1.objects)[':collection'][':object_id']['channel_data'][':channel_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectsCollectionObjectIdChannelDataChannelIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObjectsCollectionObjectIdChannelDataChannelIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.objects[':collection'][':object_id'].channel_data[':channel_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ObjectsCollectionObjectIdChannelDataChannelIdMutationKey() {
  return ['v1', '/v1/objects/:collection/:object_id/channel_data/:channel_id', 'PUT'] as const
}

export function getPutV1ObjectsCollectionObjectIdChannelDataChannelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.objects)[':collection'][':object_id']['channel_data'][':channel_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.objects)[':collection'][':object_id']['channel_data'][':channel_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1ObjectsCollectionObjectIdChannelDataChannelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.objects)[':collection'][':object_id']['channel_data'][':channel_id']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.objects[':collection'][':object_id'].channel_data[':channel_id'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV1ObjectsCollectionObjectIdChannelDataChannelId<
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
                  ReturnType<
                    (typeof client.v1.objects)[':collection'][':object_id']['channel_data'][':channel_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.objects)[':collection'][':object_id']['channel_data'][':channel_id']['$put']
          >,
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
  const mutationDefaults = getPutV1ObjectsCollectionObjectIdChannelDataChannelIdMutationOptions<
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

export function getDeleteV1ObjectsCollectionObjectIdChannelDataChannelIdMutationKey() {
  return ['v1', '/v1/objects/:collection/:object_id/channel_data/:channel_id', 'DELETE'] as const
}

export function getDeleteV1ObjectsCollectionObjectIdChannelDataChannelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.objects)[':collection'][':object_id']['channel_data'][':channel_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.objects)[':collection'][':object_id']['channel_data'][':channel_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ObjectsCollectionObjectIdChannelDataChannelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.objects)[':collection'][':object_id']['channel_data'][':channel_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.objects[':collection'][':object_id'].channel_data[':channel_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV1ObjectsCollectionObjectIdChannelDataChannelId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.v1.objects)[':collection'][':object_id']['channel_data'][':channel_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.objects)[':collection'][':object_id']['channel_data'][':channel_id']['$delete']
          >,
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
  const mutationDefaults = getDeleteV1ObjectsCollectionObjectIdChannelDataChannelIdMutationOptions<
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

export function getPostV1MessagesBatchUnreadMutationKey() {
  return ['v1', '/v1/messages/batch/unread', 'POST'] as const
}

export function getPostV1MessagesBatchUnreadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.batch.unread.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.messages.batch.unread.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1MessagesBatchUnreadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.messages.batch.unread.$post>) {
      return parseResponse(client.v1.messages.batch.unread.$post(args, options))
    },
  })
}

export function usePostV1MessagesBatchUnread<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.messages.batch.unread.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.messages.batch.unread.$post>,
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
  const mutationDefaults = getPostV1MessagesBatchUnreadMutationOptions<TError, TOnMutateResult>(
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

export function getV1ProvidersSlackChannelIdChannelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.providers.slack)[':channel_id']['channels']['$get']>
  >,
) {
  return ['v1', '/v1/providers/slack/:channel_id/channels', toValue(args)] as const
}

export function getV1ProvidersSlackChannelIdChannelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.providers.slack)[':channel_id']['channels']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProvidersSlackChannelIdChannelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.providers.slack[':channel_id'].channels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProvidersSlackChannelIdChannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.providers.slack)[':channel_id']['channels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.providers.slack)[':channel_id']['channels']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.providers.slack)[':channel_id']['channels']['$get']>
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
                  ReturnType<(typeof client.v1.providers.slack)[':channel_id']['channels']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ProvidersSlackChannelIdChannelsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.providers.slack)[':channel_id']['channels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProvidersSlackChannelIdChannelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProvidersSlackChannelIdChannelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.providers.slack[':channel_id'].channels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkflowRecipientRunsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.workflow_recipient_runs.$get>>,
) {
  return ['v1', '/v1/workflow_recipient_runs', toValue(args)] as const
}

export function getV1WorkflowRecipientRunsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.workflow_recipient_runs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkflowRecipientRunsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workflow_recipient_runs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkflowRecipientRuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflow_recipient_runs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.workflow_recipient_runs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.workflow_recipient_runs.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.workflow_recipient_runs.$get>>
              >
            >
          >,
          ReturnType<typeof getV1WorkflowRecipientRunsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflow_recipient_runs.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkflowRecipientRunsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkflowRecipientRunsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workflow_recipient_runs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1MessagesBatchSeenMutationKey() {
  return ['v1', '/v1/messages/batch/seen', 'POST'] as const
}

export function getPostV1MessagesBatchSeenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.batch.seen.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.messages.batch.seen.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1MessagesBatchSeenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.messages.batch.seen.$post>) {
      return parseResponse(client.v1.messages.batch.seen.$post(args, options))
    },
  })
}

export function usePostV1MessagesBatchSeen<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.batch.seen.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.messages.batch.seen.$post>,
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
  const mutationDefaults = getPostV1MessagesBatchSeenMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1UsersBulkPreferencesMutationKey() {
  return ['v1', '/v1/users/bulk/preferences', 'POST'] as const
}

export function getPostV1UsersBulkPreferencesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.bulk.preferences.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.users.bulk.preferences.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1UsersBulkPreferencesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.users.bulk.preferences.$post>) {
      return parseResponse(client.v1.users.bulk.preferences.$post(args, options))
    },
  })
}

export function usePostV1UsersBulkPreferences<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.users.bulk.preferences.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.users.bulk.preferences.$post>,
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
  const mutationDefaults = getPostV1UsersBulkPreferencesMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1MessagesBatchReadMutationKey() {
  return ['v1', '/v1/messages/batch/read', 'POST'] as const
}

export function getPostV1MessagesBatchReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.batch.read.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.messages.batch.read.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1MessagesBatchReadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.messages.batch.read.$post>) {
      return parseResponse(client.v1.messages.batch.read.$post(args, options))
    },
  })
}

export function usePostV1MessagesBatchRead<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.batch.read.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.messages.batch.read.$post>,
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
  const mutationDefaults = getPostV1MessagesBatchReadMutationOptions<TError, TOnMutateResult>(
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

export function getV1MessagesBatchContentQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.messages.batch.content.$get>>,
) {
  return ['v1', '/v1/messages/batch/content', toValue(args)] as const
}

export function getV1MessagesBatchContentQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.messages.batch.content.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1MessagesBatchContentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.messages.batch.content.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1MessagesBatchContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.batch.content.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.messages.batch.content.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.messages.batch.content.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.messages.batch.content.$get>>
              >
            >
          >,
          ReturnType<typeof getV1MessagesBatchContentQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.batch.content.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1MessagesBatchContentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1MessagesBatchContentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.messages.batch.content.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1MessagesMessageIdDeliveryLogsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.messages)[':message_id']['delivery_logs']['$get']>
  >,
) {
  return ['v1', '/v1/messages/:message_id/delivery_logs', toValue(args)] as const
}

export function getV1MessagesMessageIdDeliveryLogsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.messages)[':message_id']['delivery_logs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1MessagesMessageIdDeliveryLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.messages[':message_id'].delivery_logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1MessagesMessageIdDeliveryLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['delivery_logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.messages)[':message_id']['delivery_logs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.messages)[':message_id']['delivery_logs']['$get']>
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
                  ReturnType<(typeof client.v1.messages)[':message_id']['delivery_logs']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1MessagesMessageIdDeliveryLogsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['delivery_logs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1MessagesMessageIdDeliveryLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1MessagesMessageIdDeliveryLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.messages[':message_id'].delivery_logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1UsersUserIdGuidesMessagesMessageIdInteractedMutationKey() {
  return ['v1', '/v1/users/:user_id/guides/messages/:message_id/interacted', 'PUT'] as const
}

export function getPutV1UsersUserIdGuidesMessagesMessageIdInteractedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.users)[':user_id']['guides']['messages'][':message_id']['interacted']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.users)[':user_id']['guides']['messages'][':message_id']['interacted']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1UsersUserIdGuidesMessagesMessageIdInteractedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.users)[':user_id']['guides']['messages'][':message_id']['interacted']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.users[':user_id'].guides.messages[':message_id'].interacted.$put(args, options),
      )
    },
  })
}

export function usePutV1UsersUserIdGuidesMessagesMessageIdInteracted<
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
                  ReturnType<
                    (typeof client.v1.users)[':user_id']['guides']['messages'][':message_id']['interacted']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.users)[':user_id']['guides']['messages'][':message_id']['interacted']['$put']
          >,
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
  const mutationDefaults = getPutV1UsersUserIdGuidesMessagesMessageIdInteractedMutationOptions<
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

export function getV1MessagesMessageIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.messages)[':message_id']['$get']>>,
) {
  return ['v1', '/v1/messages/:message_id', toValue(args)] as const
}

export function getV1MessagesMessageIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.messages)[':message_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1MessagesMessageIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.messages[':message_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1MessagesMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.messages)[':message_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1MessagesMessageIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1MessagesMessageIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1MessagesMessageIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.messages[':message_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ChannelsChannelIdMessagesBulkActionMutationKey() {
  return ['v1', '/v1/channels/:channel_id/messages/bulk/:action', 'POST'] as const
}

export function getPostV1ChannelsChannelIdMessagesBulkActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.channels)[':channel_id']['messages']['bulk'][':action']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.channels)[':channel_id']['messages']['bulk'][':action']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ChannelsChannelIdMessagesBulkActionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.channels)[':channel_id']['messages']['bulk'][':action']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.channels[':channel_id'].messages.bulk[':action'].$post(args, options),
      )
    },
  })
}

export function usePostV1ChannelsChannelIdMessagesBulkAction<
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
                  ReturnType<
                    (typeof client.v1.channels)[':channel_id']['messages']['bulk'][':action']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.channels)[':channel_id']['messages']['bulk'][':action']['$post']
          >,
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
  const mutationDefaults = getPostV1ChannelsChannelIdMessagesBulkActionMutationOptions<
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

export function getDeleteV1MessagesMessageIdUnarchivedMutationKey() {
  return ['v1', '/v1/messages/:message_id/unarchived', 'DELETE'] as const
}

export function getDeleteV1MessagesMessageIdUnarchivedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['unarchived']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.messages)[':message_id']['unarchived']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1MessagesMessageIdUnarchivedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.messages)[':message_id']['unarchived']['$delete']>,
    ) {
      return parseResponse(client.v1.messages[':message_id'].unarchived.$delete(args, options))
    },
  })
}

export function useDeleteV1MessagesMessageIdUnarchived<
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
                  ReturnType<(typeof client.v1.messages)[':message_id']['unarchived']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.messages)[':message_id']['unarchived']['$delete']>,
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
  const mutationDefaults = getDeleteV1MessagesMessageIdUnarchivedMutationOptions<
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

export function getV1BulkOperationsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.bulk_operations)[':id']['$get']>>,
) {
  return ['v1', '/v1/bulk_operations/:id', toValue(args)] as const
}

export function getV1BulkOperationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.bulk_operations)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BulkOperationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.bulk_operations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BulkOperationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bulk_operations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.bulk_operations)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.bulk_operations)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.bulk_operations)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1BulkOperationsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bulk_operations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BulkOperationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BulkOperationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.bulk_operations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1UsersUserIdPreferencesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.users)[':user_id']['preferences']['$get']>
  >,
) {
  return ['v1', '/v1/users/:user_id/preferences', toValue(args)] as const
}

export function getV1UsersUserIdPreferencesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.users)[':user_id']['preferences']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1UsersUserIdPreferencesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.users[':user_id'].preferences.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1UsersUserIdPreferences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.users)[':user_id']['preferences']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.users)[':user_id']['preferences']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.users)[':user_id']['preferences']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.users)[':user_id']['preferences']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1UsersUserIdPreferencesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.users)[':user_id']['preferences']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UsersUserIdPreferencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1UsersUserIdPreferencesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.users[':user_id'].preferences.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1UsersUserIdPreferencesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.users)[':user_id']['preferences'][':id']['$get']>
  >,
) {
  return ['v1', '/v1/users/:user_id/preferences/:id', toValue(args)] as const
}

export function getV1UsersUserIdPreferencesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.users)[':user_id']['preferences'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1UsersUserIdPreferencesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.users[':user_id'].preferences[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1UsersUserIdPreferencesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.users)[':user_id']['preferences'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.users)[':user_id']['preferences'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.users)[':user_id']['preferences'][':id']['$get']>
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
                  ReturnType<(typeof client.v1.users)[':user_id']['preferences'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1UsersUserIdPreferencesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.users)[':user_id']['preferences'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UsersUserIdPreferencesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1UsersUserIdPreferencesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.users[':user_id'].preferences[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1UsersUserIdPreferencesIdMutationKey() {
  return ['v1', '/v1/users/:user_id/preferences/:id', 'PUT'] as const
}

export function getPutV1UsersUserIdPreferencesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.users)[':user_id']['preferences'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.users)[':user_id']['preferences'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1UsersUserIdPreferencesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.users)[':user_id']['preferences'][':id']['$put']>,
    ) {
      return parseResponse(client.v1.users[':user_id'].preferences[':id'].$put(args, options))
    },
  })
}

export function usePutV1UsersUserIdPreferencesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.users)[':user_id']['preferences'][':id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.users)[':user_id']['preferences'][':id']['$put']>,
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
  const mutationDefaults = getPutV1UsersUserIdPreferencesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1UsersUserIdPreferencesIdMutationKey() {
  return ['v1', '/v1/users/:user_id/preferences/:id', 'DELETE'] as const
}

export function getDeleteV1UsersUserIdPreferencesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.users)[':user_id']['preferences'][':id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.users)[':user_id']['preferences'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1UsersUserIdPreferencesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.users)[':user_id']['preferences'][':id']['$delete']>,
    ) {
      return parseResponse(client.v1.users[':user_id'].preferences[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1UsersUserIdPreferencesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.v1.users)[':user_id']['preferences'][':id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.users)[':user_id']['preferences'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteV1UsersUserIdPreferencesIdMutationOptions<
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

export function getPostV1ObjectsCollectionBulkSubscriptionsAddMutationKey() {
  return ['v1', '/v1/objects/:collection/bulk/subscriptions/add', 'POST'] as const
}

export function getPostV1ObjectsCollectionBulkSubscriptionsAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.objects)[':collection']['bulk']['subscriptions']['add']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.objects)[':collection']['bulk']['subscriptions']['add']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObjectsCollectionBulkSubscriptionsAddMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.objects)[':collection']['bulk']['subscriptions']['add']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.objects[':collection'].bulk.subscriptions.add.$post(args, options),
      )
    },
  })
}

export function usePostV1ObjectsCollectionBulkSubscriptionsAdd<
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
                  ReturnType<
                    (typeof client.v1.objects)[':collection']['bulk']['subscriptions']['add']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.objects)[':collection']['bulk']['subscriptions']['add']['$post']
          >,
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
  const mutationDefaults = getPostV1ObjectsCollectionBulkSubscriptionsAddMutationOptions<
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

export function getPostV1UsersUserIdPreferenceCenterSignedUrlMutationKey() {
  return ['v1', '/v1/users/:user_id/preference_center/signed_url', 'POST'] as const
}

export function getPostV1UsersUserIdPreferenceCenterSignedUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.users)[':user_id']['preference_center']['signed_url']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.users)[':user_id']['preference_center']['signed_url']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1UsersUserIdPreferenceCenterSignedUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.users)[':user_id']['preference_center']['signed_url']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.users[':user_id'].preference_center.signed_url.$post(args, options),
      )
    },
  })
}

export function usePostV1UsersUserIdPreferenceCenterSignedUrl<
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
                  ReturnType<
                    (typeof client.v1.users)[':user_id']['preference_center']['signed_url']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.users)[':user_id']['preference_center']['signed_url']['$post']
          >,
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
  const mutationDefaults = getPostV1UsersUserIdPreferenceCenterSignedUrlMutationOptions<
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
