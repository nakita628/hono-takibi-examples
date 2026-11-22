import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1ObjectsCollectionIdQueryKey(
  args: InferRequestType<(typeof client.v1.objects)[':collection'][':id']['$get']>,
) {
  return ['v1', '/v1/objects/:collection/:id', args] as const
}

export function getV1ObjectsCollectionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.objects)[':collection'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.objects)[':collection'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObjectsCollectionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.objects[':collection'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectsCollectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.objects)[':collection'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.objects)[':collection'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1ObjectsCollectionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1ObjectsCollectionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ObjectsCollectionIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV1ObjectsCollectionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ObjectsCollectionIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutV1UsersUserIdGuidesMessagesInteracted<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1UsersUserIdGuidesMessagesInteractedMutationOptions<
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

export function createPostV1IntegrationsCensusCustomDestination<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1IntegrationsCensusCustomDestinationMutationOptions<
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

export function getV1UsersUserIdSubscriptionsQueryKey(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['subscriptions']['$get']>,
) {
  return ['v1', '/v1/users/:user_id/subscriptions', args] as const
}

export function getV1UsersUserIdSubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.users)[':user_id']['subscriptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['subscriptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1UsersUserIdSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.users[':user_id'].subscriptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1UsersUserIdSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.users)[':user_id']['subscriptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.users)[':user_id']['subscriptions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1UsersUserIdSubscriptionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1WorkflowsKeyCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1WorkflowsKeyCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutV1UsersUserIdGuidesMessagesArchived<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1UsersUserIdGuidesMessagesArchivedMutationOptions<
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

export function createDeleteV1UsersUserIdGuidesMessagesArchived<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1UsersUserIdGuidesMessagesArchivedMutationOptions<
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
    void,
    TOnMutateResult
  >({
    mutationKey: getPutV1UsersUserIdPreferencesIdChannelTypesMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.v1.users[':user_id'].preferences[':id'].channel_types.$put(undefined, options),
      )
    },
  })
}

export function createPutV1UsersUserIdPreferencesIdChannelTypes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1UsersUserIdPreferencesIdChannelTypesMutationOptions<
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
    void,
    TOnMutateResult
  >({
    mutationKey: getPutV1ObjectsCollectionObjectIdPreferencesIdCategoriesMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.v1.objects[':collection'][':object_id'].preferences[':id'].categories.$put(
          undefined,
          options,
        ),
      )
    },
  })
}

export function createPutV1ObjectsCollectionObjectIdPreferencesIdCategories<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutV1ObjectsCollectionObjectIdPreferencesIdCategoriesMutationOptions<
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

export function getV1MessagesQueryKey(args: InferRequestType<typeof client.v1.messages.$get>) {
  return ['v1', '/v1/messages', args] as const
}

export function getV1MessagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.messages.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1MessagesQueryKey>
  >({
    queryKey: getV1MessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.messages.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Messages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.messages.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1MessagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1MessagesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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
    void,
    TOnMutateResult
  >({
    mutationKey: getPutV1UsersUserIdPreferencesIdChannelTypesTypeMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.v1.users[':user_id'].preferences[':id'].channel_types[':type'].$put(
          undefined,
          options,
        ),
      )
    },
  })
}

export function createPutV1UsersUserIdPreferencesIdChannelTypesType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1UsersUserIdPreferencesIdChannelTypesTypeMutationOptions<
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

export function getV1ProvidersMsTeamsChannelIdChannelsQueryKey(
  args: InferRequestType<
    (typeof client.v1.providers)['ms-teams'][':channel_id']['channels']['$get']
  >,
) {
  return ['v1', '/v1/providers/ms-teams/:channel_id/channels', args] as const
}

export function getV1ProvidersMsTeamsChannelIdChannelsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.providers)['ms-teams'][':channel_id']['channels']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ProvidersMsTeamsChannelIdChannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.providers['ms-teams'][':channel_id'].channels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ProvidersMsTeamsChannelIdChannels<
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
  args: () => InferRequestType<
    (typeof client.v1.providers)['ms-teams'][':channel_id']['channels']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1ProvidersMsTeamsChannelIdChannelsQueryKey>
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
      ...getV1ProvidersMsTeamsChannelIdChannelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1MessagesMessageIdInteracted<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1MessagesMessageIdInteractedMutationOptions<
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

export function getV1MessagesMessageIdEventsQueryKey(
  args: InferRequestType<(typeof client.v1.messages)[':message_id']['events']['$get']>,
) {
  return ['v1', '/v1/messages/:message_id/events', args] as const
}

export function getV1MessagesMessageIdEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.messages)[':message_id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1MessagesMessageIdEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.messages[':message_id'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1MessagesMessageIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.messages)[':message_id']['events']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1MessagesMessageIdEventsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1UsersUserIdMessagesQueryKey(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['messages']['$get']>,
) {
  return ['v1', '/v1/users/:user_id/messages', args] as const
}

export function getV1UsersUserIdMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.users)[':user_id']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1UsersUserIdMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.users[':user_id'].messages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1UsersUserIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.users)[':user_id']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.users)[':user_id']['messages']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1UsersUserIdMessagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1ProvidersSlackChannelIdRevokeAccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ProvidersSlackChannelIdRevokeAccessMutationOptions<
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

export function createPostV1ObjectsCollectionBulkDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ObjectsCollectionBulkDeleteMutationOptions<
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
    void,
    TOnMutateResult
  >({
    mutationKey: getPutV1UsersUserIdPreferencesIdWorkflowsMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.v1.users[':user_id'].preferences[':id'].workflows.$put(undefined, options),
      )
    },
  })
}

export function createPutV1UsersUserIdPreferencesIdWorkflows<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1UsersUserIdPreferencesIdWorkflowsMutationOptions<
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

export function getV1UsersUserIdGuidesChannelIdQueryKey(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['guides'][':channel_id']['$get']>,
) {
  return ['v1', '/v1/users/:user_id/guides/:channel_id', args] as const
}

export function getV1UsersUserIdGuidesChannelIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.users)[':user_id']['guides'][':channel_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['guides'][':channel_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1UsersUserIdGuidesChannelIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.users[':user_id'].guides[':channel_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1UsersUserIdGuidesChannelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.users)[':user_id']['guides'][':channel_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.users)[':user_id']['guides'][':channel_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1UsersUserIdGuidesChannelIdQueryKey>
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
      ...getV1UsersUserIdGuidesChannelIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1UsersUserIdSchedulesQueryKey(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['schedules']['$get']>,
) {
  return ['v1', '/v1/users/:user_id/schedules', args] as const
}

export function getV1UsersUserIdSchedulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.users)[':user_id']['schedules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['schedules']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1UsersUserIdSchedulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.users[':user_id'].schedules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1UsersUserIdSchedules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.users)[':user_id']['schedules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.users)[':user_id']['schedules']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1UsersUserIdSchedulesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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
    void,
    TOnMutateResult
  >({
    mutationKey: getPutV1ObjectsCollectionObjectIdPreferencesIdCategoriesKeyMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.v1.objects[':collection'][':object_id'].preferences[':id'].categories[':key'].$put(
          undefined,
          options,
        ),
      )
    },
  })
}

export function createPutV1ObjectsCollectionObjectIdPreferencesIdCategoriesKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutV1ObjectsCollectionObjectIdPreferencesIdCategoriesKeyMutationOptions<
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
    void,
    TOnMutateResult
  >({
    mutationKey: getPutV1UsersUserIdPreferencesIdCategoriesKeyMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.v1.users[':user_id'].preferences[':id'].categories[':key'].$put(undefined, options),
      )
    },
  })
}

export function createPutV1UsersUserIdPreferencesIdCategoriesKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1UsersUserIdPreferencesIdCategoriesKeyMutationOptions<
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

export function getV1MessagesMessageIdContentQueryKey(
  args: InferRequestType<(typeof client.v1.messages)[':message_id']['content']['$get']>,
) {
  return ['v1', '/v1/messages/:message_id/content', args] as const
}

export function getV1MessagesMessageIdContentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.messages)[':message_id']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1MessagesMessageIdContentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.messages[':message_id'].content.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1MessagesMessageIdContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.messages)[':message_id']['content']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1MessagesMessageIdContentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1ProvidersMsTeamsChannelIdAuthCheckQueryKey(
  args: InferRequestType<
    (typeof client.v1.providers)['ms-teams'][':channel_id']['auth_check']['$get']
  >,
) {
  return ['v1', '/v1/providers/ms-teams/:channel_id/auth_check', args] as const
}

export function getV1ProvidersMsTeamsChannelIdAuthCheckQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.providers)['ms-teams'][':channel_id']['auth_check']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ProvidersMsTeamsChannelIdAuthCheckQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.providers['ms-teams'][':channel_id'].auth_check.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ProvidersMsTeamsChannelIdAuthCheck<
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
  args: () => InferRequestType<
    (typeof client.v1.providers)['ms-teams'][':channel_id']['auth_check']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1ProvidersMsTeamsChannelIdAuthCheckQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1ProvidersMsTeamsChannelIdRevokeAccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ProvidersMsTeamsChannelIdRevokeAccessMutationOptions<
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

export function getV1UsersUserIdFeedsIdSettingsQueryKey(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['feeds'][':id']['settings']['$get']>,
) {
  return ['v1', '/v1/users/:user_id/feeds/:id/settings', args] as const
}

export function getV1UsersUserIdFeedsIdSettingsQueryOptions<
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
  args: InferRequestType<(typeof client.v1.users)[':user_id']['feeds'][':id']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1UsersUserIdFeedsIdSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.users[':user_id'].feeds[':id'].settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1UsersUserIdFeedsIdSettings<
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
  args: () => InferRequestType<
    (typeof client.v1.users)[':user_id']['feeds'][':id']['settings']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1UsersUserIdFeedsIdSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1UsersUserIdGuidesEngagementsReset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1UsersUserIdGuidesEngagementsResetMutationOptions<
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

export function getV1ObjectsCollectionObjectIdPreferencesQueryKey(
  args: InferRequestType<
    (typeof client.v1.objects)[':collection'][':object_id']['preferences']['$get']
  >,
) {
  return ['v1', '/v1/objects/:collection/:object_id/preferences', args] as const
}

export function getV1ObjectsCollectionObjectIdPreferencesQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.objects)[':collection'][':object_id']['preferences']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObjectsCollectionObjectIdPreferencesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.objects[':collection'][':object_id'].preferences.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectsCollectionObjectIdPreferences<
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
  args: () => InferRequestType<
    (typeof client.v1.objects)[':collection'][':object_id']['preferences']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1ObjectsCollectionObjectIdPreferencesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1MessagesMessageIdActivitiesQueryKey(
  args: InferRequestType<(typeof client.v1.messages)[':message_id']['activities']['$get']>,
) {
  return ['v1', '/v1/messages/:message_id/activities', args] as const
}

export function getV1MessagesMessageIdActivitiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['activities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.messages)[':message_id']['activities']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1MessagesMessageIdActivitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.messages[':message_id'].activities.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1MessagesMessageIdActivities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['activities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.messages)[':message_id']['activities']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1MessagesMessageIdActivitiesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1TenantsQueryKey(args: InferRequestType<typeof client.v1.tenants.$get>) {
  return ['v1', '/v1/tenants', args] as const
}

export function getV1TenantsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tenants.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.tenants.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tenants.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1TenantsQueryKey>
  >({
    queryKey: getV1TenantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.tenants.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Tenants<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tenants.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.tenants.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tenants.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1TenantsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1TenantsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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
    void,
    TOnMutateResult
  >({
    mutationKey: getPutV1ObjectsCollectionObjectIdPreferencesIdWorkflowsMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.v1.objects[':collection'][':object_id'].preferences[':id'].workflows.$put(
          undefined,
          options,
        ),
      )
    },
  })
}

export function createPutV1ObjectsCollectionObjectIdPreferencesIdWorkflows<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ObjectsCollectionObjectIdPreferencesIdWorkflowsMutationOptions<
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

export function getV1ObjectsCollectionIdMessagesQueryKey(
  args: InferRequestType<(typeof client.v1.objects)[':collection'][':id']['messages']['$get']>,
) {
  return ['v1', '/v1/objects/:collection/:id/messages', args] as const
}

export function getV1ObjectsCollectionIdMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.objects)[':collection'][':id']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.objects)[':collection'][':id']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObjectsCollectionIdMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.objects[':collection'][':id'].messages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectsCollectionIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.objects)[':collection'][':id']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.objects)[':collection'][':id']['messages']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1ObjectsCollectionIdMessagesQueryKey>
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
      ...getV1ObjectsCollectionIdMessagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1Notify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.notify.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.notify.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1NotifyMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1MessagesBatchArchived<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1MessagesBatchArchivedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1UsersUserIdFeedsIdQueryKey(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['feeds'][':id']['$get']>,
) {
  return ['v1', '/v1/users/:user_id/feeds/:id', args] as const
}

export function getV1UsersUserIdFeedsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.users)[':user_id']['feeds'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['feeds'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1UsersUserIdFeedsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.users[':user_id'].feeds[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1UsersUserIdFeedsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.users)[':user_id']['feeds'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.users)[':user_id']['feeds'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1UsersUserIdFeedsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1MessagesBatchUnarchived<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1MessagesBatchUnarchivedMutationOptions<
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

export function getV1ProvidersMsTeamsChannelIdTeamsQueryKey(
  args: InferRequestType<(typeof client.v1.providers)['ms-teams'][':channel_id']['teams']['$get']>,
) {
  return ['v1', '/v1/providers/ms-teams/:channel_id/teams', args] as const
}

export function getV1ProvidersMsTeamsChannelIdTeamsQueryOptions<
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
  args: InferRequestType<(typeof client.v1.providers)['ms-teams'][':channel_id']['teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ProvidersMsTeamsChannelIdTeamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.providers['ms-teams'][':channel_id'].teams.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ProvidersMsTeamsChannelIdTeams<
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
  args: () => InferRequestType<
    (typeof client.v1.providers)['ms-teams'][':channel_id']['teams']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1ProvidersMsTeamsChannelIdTeamsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1UsersUserIdMerge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1UsersUserIdMergeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1ObjectsCollectionBulkSubscriptionsDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ObjectsCollectionBulkSubscriptionsDeleteMutationOptions<
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
    void,
    TOnMutateResult
  >({
    mutationKey: getPutV1UsersUserIdPreferencesIdCategoriesMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.v1.users[':user_id'].preferences[':id'].categories.$put(undefined, options),
      )
    },
  })
}

export function createPutV1UsersUserIdPreferencesIdCategories<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1UsersUserIdPreferencesIdCategoriesMutationOptions<
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

export function getV1ObjectsCollectionQueryKey(
  args: InferRequestType<(typeof client.v1.objects)[':collection']['$get']>,
) {
  return ['v1', '/v1/objects/:collection', args] as const
}

export function getV1ObjectsCollectionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.objects)[':collection']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.objects)[':collection']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.objects)[':collection']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObjectsCollectionQueryKey>
  >({
    queryKey: getV1ObjectsCollectionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.objects[':collection'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectsCollection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.objects)[':collection']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.objects)[':collection']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.objects)[':collection']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ObjectsCollectionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ObjectsCollectionQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1UsersQueryKey(args: InferRequestType<typeof client.v1.users.$get>) {
  return ['v1', '/v1/users', args] as const
}

export function getV1UsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1UsersQueryKey>
  >({
    queryKey: getV1UsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Users<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.users.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV1UsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1UsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1WorkflowRecipientRunsIdQueryKey(
  args: InferRequestType<(typeof client.v1.workflow_recipient_runs)[':id']['$get']>,
) {
  return ['v1', '/v1/workflow_recipient_runs/:id', args] as const
}

export function getV1WorkflowRecipientRunsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workflow_recipient_runs)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.workflow_recipient_runs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkflowRecipientRunsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workflow_recipient_runs[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkflowRecipientRunsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workflow_recipient_runs)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.workflow_recipient_runs)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1WorkflowRecipientRunsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1MessagesMessageIdSeen<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1MessagesMessageIdSeenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV1MessagesMessageIdSeen<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1MessagesMessageIdSeenMutationOptions<
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

export function getV1ProvidersSlackChannelIdAuthCheckQueryKey(
  args: InferRequestType<(typeof client.v1.providers.slack)[':channel_id']['auth_check']['$get']>,
) {
  return ['v1', '/v1/providers/slack/:channel_id/auth_check', args] as const
}

export function getV1ProvidersSlackChannelIdAuthCheckQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.providers.slack)[':channel_id']['auth_check']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.providers.slack)[':channel_id']['auth_check']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ProvidersSlackChannelIdAuthCheckQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.providers.slack[':channel_id'].auth_check.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ProvidersSlackChannelIdAuthCheck<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.providers.slack)[':channel_id']['auth_check']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.providers.slack)[':channel_id']['auth_check']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1ProvidersSlackChannelIdAuthCheckQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1UsersBulkDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.bulk.delete.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.users.bulk.delete.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1UsersBulkDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1NotifyCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1NotifyCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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
    void,
    TOnMutateResult
  >({
    mutationKey: getPutV1ObjectsCollectionObjectIdPreferencesIdChannelTypesTypeMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.v1.objects[':collection'][':object_id'].preferences[':id'].channel_types[
          ':type'
        ].$put(undefined, options),
      )
    },
  })
}

export function createPutV1ObjectsCollectionObjectIdPreferencesIdChannelTypesType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutV1ObjectsCollectionObjectIdPreferencesIdChannelTypesTypeMutationOptions<
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
    void,
    TOnMutateResult
  >({
    mutationKey: getPutV1ObjectsCollectionObjectIdPreferencesIdChannelTypesMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.v1.objects[':collection'][':object_id'].preferences[':id'].channel_types.$put(
          undefined,
          options,
        ),
      )
    },
  })
}

export function createPutV1ObjectsCollectionObjectIdPreferencesIdChannelTypes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutV1ObjectsCollectionObjectIdPreferencesIdChannelTypesMutationOptions<
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

export function createPostV1UsersBulkIdentify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.bulk.identify.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.users.bulk.identify.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1UsersBulkIdentifyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1TenantsBulkSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.tenants.bulk.set.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.tenants.bulk.set.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1TenantsBulkSetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1AudiencesKeyMembersQueryKey(
  args: InferRequestType<(typeof client.v1.audiences)[':key']['members']['$get']>,
) {
  return ['v1', '/v1/audiences/:key/members', args] as const
}

export function getV1AudiencesKeyMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.audiences)[':key']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.audiences)[':key']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AudiencesKeyMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.audiences[':key'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AudiencesKeyMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.audiences)[':key']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.audiences)[':key']['members']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1AudiencesKeyMembersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1AudiencesKeyMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AudiencesKeyMembersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV1AudiencesKeyMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1AudiencesKeyMembersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutV1MessagesMessageIdArchived<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1MessagesMessageIdArchivedMutationOptions<
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

export function createDeleteV1MessagesMessageIdArchived<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1MessagesMessageIdArchivedMutationOptions<
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

export function createPostV1WorkflowsKeyTrigger<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1WorkflowsKeyTriggerMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutV1UsersUserIdGuidesMessagesMessageIdArchived<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1UsersUserIdGuidesMessagesMessageIdArchivedMutationOptions<
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

export function createPostV1TenantsBulkDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.tenants.bulk.delete.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.tenants.bulk.delete.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1TenantsBulkDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV1MessagesMessageIdUnread<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1MessagesMessageIdUnreadMutationOptions<
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

export function getV1UsersUserIdQueryKey(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['$get']>,
) {
  return ['v1', '/v1/users/:user_id', args] as const
}

export function getV1UsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':user_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':user_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UsersUserIdQueryKey>
  >({
    queryKey: getV1UsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.users[':user_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1UsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':user_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.users)[':user_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':user_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1UsersUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1UsersUserIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutV1UsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':user_id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.users)[':user_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1UsersUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV1UsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1UsersUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1MessagesBatchInteracted<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1MessagesBatchInteractedMutationOptions<
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

export function getV1TenantsIdQueryKey(
  args: InferRequestType<(typeof client.v1.tenants)[':id']['$get']>,
) {
  return ['v1', '/v1/tenants/:id', args] as const
}

export function getV1TenantsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tenants)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.tenants)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tenants)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TenantsIdQueryKey>
  >({
    queryKey: getV1TenantsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.tenants[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1TenantsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tenants)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.tenants)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tenants)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TenantsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1TenantsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutV1TenantsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tenants)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.tenants)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1TenantsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV1TenantsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1TenantsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutV1UsersUserIdGuidesMessagesSeen<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1UsersUserIdGuidesMessagesSeenMutationOptions<
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

export function createDeleteV1MessagesMessageIdUnseen<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1MessagesMessageIdUnseenMutationOptions<
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

export function getV1ObjectsCollectionObjectIdSubscriptionsQueryKey(
  args: InferRequestType<
    (typeof client.v1.objects)[':collection'][':object_id']['subscriptions']['$get']
  >,
) {
  return ['v1', '/v1/objects/:collection/:object_id/subscriptions', args] as const
}

export function getV1ObjectsCollectionObjectIdSubscriptionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.objects)[':collection'][':object_id']['subscriptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObjectsCollectionObjectIdSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.objects[':collection'][':object_id'].subscriptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectsCollectionObjectIdSubscriptions<
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
  args: () => InferRequestType<
    (typeof client.v1.objects)[':collection'][':object_id']['subscriptions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1ObjectsCollectionObjectIdSubscriptionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV1ObjectsCollectionObjectIdSubscriptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ObjectsCollectionObjectIdSubscriptionsMutationOptions<
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

export function createDeleteV1ObjectsCollectionObjectIdSubscriptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ObjectsCollectionObjectIdSubscriptionsMutationOptions<
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
    void,
    TOnMutateResult
  >({
    mutationKey: getPutV1ObjectsCollectionObjectIdPreferencesIdWorkflowsKeyMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.v1.objects[':collection'][':object_id'].preferences[':id'].workflows[':key'].$put(
          undefined,
          options,
        ),
      )
    },
  })
}

export function createPutV1ObjectsCollectionObjectIdPreferencesIdWorkflowsKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutV1ObjectsCollectionObjectIdPreferencesIdWorkflowsKeyMutationOptions<
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

export function createPutV1MessagesMessageIdRead<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1MessagesMessageIdReadMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV1MessagesMessageIdRead<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1MessagesMessageIdReadMutationOptions<
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

export function getV1UsersUserIdPreferenceCenterConfigQueryKey(
  args: InferRequestType<
    (typeof client.v1.users)[':user_id']['preference_center']['config']['$get']
  >,
) {
  return ['v1', '/v1/users/:user_id/preference_center/config', args] as const
}

export function getV1UsersUserIdPreferenceCenterConfigQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.users)[':user_id']['preference_center']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1UsersUserIdPreferenceCenterConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.users[':user_id'].preference_center.config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1UsersUserIdPreferenceCenterConfig<
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
  args: () => InferRequestType<
    (typeof client.v1.users)[':user_id']['preference_center']['config']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1UsersUserIdPreferenceCenterConfigQueryKey>
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
      ...getV1UsersUserIdPreferenceCenterConfigQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1UsersUserIdChannelDataChannelIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.users)[':user_id']['channel_data'][':channel_id']['$get']
  >,
) {
  return ['v1', '/v1/users/:user_id/channel_data/:channel_id', args] as const
}

export function getV1UsersUserIdChannelDataChannelIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.users)[':user_id']['channel_data'][':channel_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1UsersUserIdChannelDataChannelIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.users[':user_id'].channel_data[':channel_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1UsersUserIdChannelDataChannelId<
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
  args: () => InferRequestType<
    (typeof client.v1.users)[':user_id']['channel_data'][':channel_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1UsersUserIdChannelDataChannelIdQueryKey>
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
      ...getV1UsersUserIdChannelDataChannelIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1UsersUserIdChannelDataChannelId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1UsersUserIdChannelDataChannelIdMutationOptions<
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

export function createDeleteV1UsersUserIdChannelDataChannelId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1UsersUserIdChannelDataChannelIdMutationOptions<
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
    void,
    TOnMutateResult
  >({
    mutationKey: getPutV1UsersUserIdPreferencesIdWorkflowsKeyMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.v1.users[':user_id'].preferences[':id'].workflows[':key'].$put(undefined, options),
      )
    },
  })
}

export function createPutV1UsersUserIdPreferencesIdWorkflowsKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1UsersUserIdPreferencesIdWorkflowsKeyMutationOptions<
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

export function getV1SchedulesQueryKey(args: InferRequestType<typeof client.v1.schedules.$get>) {
  return ['v1', '/v1/schedules', args] as const
}

export function getV1SchedulesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.schedules.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.schedules.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.schedules.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1SchedulesQueryKey>
  >({
    queryKey: getV1SchedulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.schedules.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Schedules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.schedules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.schedules.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.schedules.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1SchedulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1SchedulesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutV1Schedules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.schedules.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.schedules.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1SchedulesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1Schedules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.schedules.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.schedules.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1SchedulesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV1Schedules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.schedules.$delete>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.schedules.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1SchedulesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ObjectsCollectionObjectIdPreferencesIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['$get']
  >,
) {
  return ['v1', '/v1/objects/:collection/:object_id/preferences/:id', args] as const
}

export function getV1ObjectsCollectionObjectIdPreferencesIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObjectsCollectionObjectIdPreferencesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.objects[':collection'][':object_id'].preferences[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectsCollectionObjectIdPreferencesId<
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
  args: () => InferRequestType<
    (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1ObjectsCollectionObjectIdPreferencesIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutV1ObjectsCollectionObjectIdPreferencesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ObjectsCollectionObjectIdPreferencesIdMutationOptions<
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

export function createDeleteV1ObjectsCollectionObjectIdPreferencesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ObjectsCollectionObjectIdPreferencesIdMutationOptions<
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

export function createPutV1UsersUserIdGuidesMessagesMessageIdSeen<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1UsersUserIdGuidesMessagesMessageIdSeenMutationOptions<
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

export function createPostV1ObjectsCollectionBulkSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ObjectsCollectionBulkSetMutationOptions<
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

export function createPostV1IntegrationsHightouchEmbeddedDestination<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1IntegrationsHightouchEmbeddedDestinationMutationOptions<
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

export function createPostV1MessagesBatchUnseen<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.batch.unseen.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.messages.batch.unseen.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1MessagesBatchUnseenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ObjectsCollectionIdSchedulesQueryKey(
  args: InferRequestType<(typeof client.v1.objects)[':collection'][':id']['schedules']['$get']>,
) {
  return ['v1', '/v1/objects/:collection/:id/schedules', args] as const
}

export function getV1ObjectsCollectionIdSchedulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.objects)[':collection'][':id']['schedules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.objects)[':collection'][':id']['schedules']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObjectsCollectionIdSchedulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.objects[':collection'][':id'].schedules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectsCollectionIdSchedules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.objects)[':collection'][':id']['schedules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.objects)[':collection'][':id']['schedules']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1ObjectsCollectionIdSchedulesQueryKey>
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
      ...getV1ObjectsCollectionIdSchedulesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1SchedulesBulkCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.schedules.bulk.create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.schedules.bulk.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1SchedulesBulkCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ObjectsCollectionObjectIdChannelDataChannelIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.objects)[':collection'][':object_id']['channel_data'][':channel_id']['$get']
  >,
) {
  return ['v1', '/v1/objects/:collection/:object_id/channel_data/:channel_id', args] as const
}

export function getV1ObjectsCollectionObjectIdChannelDataChannelIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.objects)[':collection'][':object_id']['channel_data'][':channel_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObjectsCollectionObjectIdChannelDataChannelIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.objects[':collection'][':object_id'].channel_data[':channel_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ObjectsCollectionObjectIdChannelDataChannelId<
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
  args: () => InferRequestType<
    (typeof client.v1.objects)[':collection'][':object_id']['channel_data'][':channel_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1ObjectsCollectionObjectIdChannelDataChannelIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutV1ObjectsCollectionObjectIdChannelDataChannelId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ObjectsCollectionObjectIdChannelDataChannelIdMutationOptions<
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

export function createDeleteV1ObjectsCollectionObjectIdChannelDataChannelId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV1ObjectsCollectionObjectIdChannelDataChannelIdMutationOptions<
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

export function createPostV1MessagesBatchUnread<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.batch.unread.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.messages.batch.unread.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1MessagesBatchUnreadMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ProvidersSlackChannelIdChannelsQueryKey(
  args: InferRequestType<(typeof client.v1.providers.slack)[':channel_id']['channels']['$get']>,
) {
  return ['v1', '/v1/providers/slack/:channel_id/channels', args] as const
}

export function getV1ProvidersSlackChannelIdChannelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.providers.slack)[':channel_id']['channels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.providers.slack)[':channel_id']['channels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ProvidersSlackChannelIdChannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.providers.slack[':channel_id'].channels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ProvidersSlackChannelIdChannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.providers.slack)[':channel_id']['channels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.providers.slack)[':channel_id']['channels']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1ProvidersSlackChannelIdChannelsQueryKey>
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
      ...getV1ProvidersSlackChannelIdChannelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1WorkflowRecipientRunsQueryKey(
  args: InferRequestType<typeof client.v1.workflow_recipient_runs.$get>,
) {
  return ['v1', '/v1/workflow_recipient_runs', args] as const
}

export function getV1WorkflowRecipientRunsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflow_recipient_runs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.workflow_recipient_runs.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflow_recipient_runs.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkflowRecipientRunsQueryKey>
  >({
    queryKey: getV1WorkflowRecipientRunsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workflow_recipient_runs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WorkflowRecipientRuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflow_recipient_runs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.workflow_recipient_runs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflow_recipient_runs.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1WorkflowRecipientRunsQueryKey>
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
      ...getV1WorkflowRecipientRunsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1MessagesBatchSeen<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.batch.seen.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.messages.batch.seen.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1MessagesBatchSeenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1UsersBulkPreferences<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.bulk.preferences.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.users.bulk.preferences.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1UsersBulkPreferencesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1MessagesBatchRead<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.batch.read.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.messages.batch.read.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1MessagesBatchReadMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1MessagesBatchContentQueryKey(
  args: InferRequestType<typeof client.v1.messages.batch.content.$get>,
) {
  return ['v1', '/v1/messages/batch/content', args] as const
}

export function getV1MessagesBatchContentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.batch.content.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.messages.batch.content.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.batch.content.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1MessagesBatchContentQueryKey>
  >({
    queryKey: getV1MessagesBatchContentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.messages.batch.content.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1MessagesBatchContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.batch.content.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.messages.batch.content.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.batch.content.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1MessagesBatchContentQueryKey>
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
      ...getV1MessagesBatchContentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1MessagesMessageIdDeliveryLogsQueryKey(
  args: InferRequestType<(typeof client.v1.messages)[':message_id']['delivery_logs']['$get']>,
) {
  return ['v1', '/v1/messages/:message_id/delivery_logs', args] as const
}

export function getV1MessagesMessageIdDeliveryLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['delivery_logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.messages)[':message_id']['delivery_logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1MessagesMessageIdDeliveryLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.messages[':message_id'].delivery_logs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1MessagesMessageIdDeliveryLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['delivery_logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.messages)[':message_id']['delivery_logs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1MessagesMessageIdDeliveryLogsQueryKey>
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
      ...getV1MessagesMessageIdDeliveryLogsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1UsersUserIdGuidesMessagesMessageIdInteracted<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1UsersUserIdGuidesMessagesMessageIdInteractedMutationOptions<
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

export function getV1MessagesMessageIdQueryKey(
  args: InferRequestType<(typeof client.v1.messages)[':message_id']['$get']>,
) {
  return ['v1', '/v1/messages/:message_id', args] as const
}

export function getV1MessagesMessageIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.messages)[':message_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1MessagesMessageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.messages[':message_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1MessagesMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.messages)[':message_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1MessagesMessageIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV1ChannelsChannelIdMessagesBulkAction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ChannelsChannelIdMessagesBulkActionMutationOptions<
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

export function createDeleteV1MessagesMessageIdUnarchived<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1MessagesMessageIdUnarchivedMutationOptions<
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

export function getV1BulkOperationsIdQueryKey(
  args: InferRequestType<(typeof client.v1.bulk_operations)[':id']['$get']>,
) {
  return ['v1', '/v1/bulk_operations/:id', args] as const
}

export function getV1BulkOperationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bulk_operations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.bulk_operations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bulk_operations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BulkOperationsIdQueryKey>
  >({
    queryKey: getV1BulkOperationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.bulk_operations[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1BulkOperationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bulk_operations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.bulk_operations)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.bulk_operations)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BulkOperationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1BulkOperationsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1UsersUserIdPreferencesQueryKey(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['preferences']['$get']>,
) {
  return ['v1', '/v1/users/:user_id/preferences', args] as const
}

export function getV1UsersUserIdPreferencesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.users)[':user_id']['preferences']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['preferences']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1UsersUserIdPreferencesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.users[':user_id'].preferences.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1UsersUserIdPreferences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.users)[':user_id']['preferences']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.users)[':user_id']['preferences']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1UsersUserIdPreferencesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1UsersUserIdPreferencesIdQueryKey(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['preferences'][':id']['$get']>,
) {
  return ['v1', '/v1/users/:user_id/preferences/:id', args] as const
}

export function getV1UsersUserIdPreferencesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.users)[':user_id']['preferences'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['preferences'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1UsersUserIdPreferencesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.users[':user_id'].preferences[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1UsersUserIdPreferencesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.users)[':user_id']['preferences'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.users)[':user_id']['preferences'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1UsersUserIdPreferencesIdQueryKey>
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
      ...getV1UsersUserIdPreferencesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1UsersUserIdPreferencesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1UsersUserIdPreferencesIdMutationOptions<
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

export function createDeleteV1UsersUserIdPreferencesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1UsersUserIdPreferencesIdMutationOptions<
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

export function createPostV1ObjectsCollectionBulkSubscriptionsAdd<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ObjectsCollectionBulkSubscriptionsAddMutationOptions<
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

export function createPostV1UsersUserIdPreferenceCenterSignedUrl<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1UsersUserIdPreferenceCenterSignedUrlMutationOptions<
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
