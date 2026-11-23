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

export function getApplicationsKey() {
  return ['applications'] as const
}

export function getChannelsKey() {
  return ['channels'] as const
}

export function getGatewayKey() {
  return ['gateway'] as const
}

export function getGuildsKey() {
  return ['guilds'] as const
}

export function getInteractionsKey() {
  return ['interactions'] as const
}

export function getInvitesKey() {
  return ['invites'] as const
}

export function getLobbiesKey() {
  return ['lobbies'] as const
}

export function getOauth2Key() {
  return ['oauth2'] as const
}

export function getPartnerSdkKey() {
  return ['partner-sdk'] as const
}

export function getSkusKey() {
  return ['skus'] as const
}

export function getSoundboardDefaultSoundsKey() {
  return ['soundboard-default-sounds'] as const
}

export function getStageInstancesKey() {
  return ['stage-instances'] as const
}

export function getStickerPacksKey() {
  return ['sticker-packs'] as const
}

export function getStickersKey() {
  return ['stickers'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getVoiceKey() {
  return ['voice'] as const
}

export function getWebhooksKey() {
  return ['webhooks'] as const
}

export function getApplicationsMeQueryKey() {
  return ['applications', '/applications/@me'] as const
}

export function getApplicationsMeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApplicationsMeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.applications['@me'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApplicationsMe<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.applications)['@me']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.applications)['@me']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.applications)['@me']['$get']>>>
            >
          >,
          ReturnType<typeof getApplicationsMeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.applications)['@me']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationsMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApplicationsMeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.applications['@me'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchApplicationsMeMutationKey() {
  return ['applications', '/applications/@me', 'PATCH'] as const
}

export function getPatchApplicationsMeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.applications)['@me']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.applications)['@me']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApplicationsMeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.applications)['@me']['$patch']>) {
      return parseResponse(client.applications['@me'].$patch(args, options))
    },
  })
}

export function usePatchApplicationsMe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.applications)['@me']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.applications)['@me']['$patch']>,
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
  const mutationDefaults = getPatchApplicationsMeMutationOptions<TError, TOnMutateResult>(
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

export function getApplicationsApplicationIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.applications)[':application_id']['$get']>>,
) {
  return ['applications', '/applications/:application_id', toValue(args)] as const
}

export function getApplicationsApplicationIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.applications)[':application_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApplicationsApplicationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.applications[':application_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApplicationsApplicationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.applications)[':application_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.applications)[':application_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.applications)[':application_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.applications)[':application_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApplicationsApplicationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.applications)[':application_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationsApplicationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApplicationsApplicationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.applications[':application_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchApplicationsApplicationIdMutationKey() {
  return ['applications', '/applications/:application_id', 'PATCH'] as const
}

export function getPatchApplicationsApplicationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.applications)[':application_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.applications)[':application_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApplicationsApplicationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.applications)[':application_id']['$patch']>,
    ) {
      return parseResponse(client.applications[':application_id'].$patch(args, options))
    },
  })
}

export function usePatchApplicationsApplicationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.applications)[':application_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.applications)[':application_id']['$patch']>,
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
  const mutationDefaults = getPatchApplicationsApplicationIdMutationOptions<
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

export function getApplicationsApplicationIdActivityInstancesInstanceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':application_id']['activity-instances'][':instance_id']['$get']
    >
  >,
) {
  return [
    'applications',
    '/applications/:application_id/activity-instances/:instance_id',
    toValue(args),
  ] as const
}

export function getApplicationsApplicationIdActivityInstancesInstanceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':application_id']['activity-instances'][':instance_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApplicationsApplicationIdActivityInstancesInstanceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.applications[':application_id']['activity-instances'][':instance_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApplicationsApplicationIdActivityInstancesInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.applications)[':application_id']['activity-instances'][':instance_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':application_id']['activity-instances'][':instance_id']['$get']
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
                    (typeof client.applications)[':application_id']['activity-instances'][':instance_id']['$get']
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
                    (typeof client.applications)[':application_id']['activity-instances'][':instance_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApplicationsApplicationIdActivityInstancesInstanceIdQueryKey>
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
              (typeof client.applications)[':application_id']['activity-instances'][':instance_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationsApplicationIdActivityInstancesInstanceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApplicationsApplicationIdActivityInstancesInstanceIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.applications[':application_id']['activity-instances'][':instance_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostApplicationsApplicationIdAttachmentMutationKey() {
  return ['applications', '/applications/:application_id/attachment', 'POST'] as const
}

export function getPostApplicationsApplicationIdAttachmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.applications)[':application_id']['attachment']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.applications)[':application_id']['attachment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApplicationsApplicationIdAttachmentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.applications)[':application_id']['attachment']['$post']
      >,
    ) {
      return parseResponse(client.applications[':application_id'].attachment.$post(args, options))
    },
  })
}

export function usePostApplicationsApplicationIdAttachment<
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
                  ReturnType<(typeof client.applications)[':application_id']['attachment']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.applications)[':application_id']['attachment']['$post']>,
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
  const mutationDefaults = getPostApplicationsApplicationIdAttachmentMutationOptions<
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

export function getApplicationsApplicationIdCommandsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.applications)[':application_id']['commands']['$get']>
  >,
) {
  return ['applications', '/applications/:application_id/commands', toValue(args)] as const
}

export function getApplicationsApplicationIdCommandsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.applications)[':application_id']['commands']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApplicationsApplicationIdCommandsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.applications[':application_id'].commands.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApplicationsApplicationIdCommands<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.applications)[':application_id']['commands']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.applications)[':application_id']['commands']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.applications)[':application_id']['commands']['$get']>
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
                  ReturnType<(typeof client.applications)[':application_id']['commands']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApplicationsApplicationIdCommandsQueryKey>
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
          Awaited<ReturnType<(typeof client.applications)[':application_id']['commands']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationsApplicationIdCommandsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApplicationsApplicationIdCommandsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.applications[':application_id'].commands.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApplicationsApplicationIdCommandsMutationKey() {
  return ['applications', '/applications/:application_id/commands', 'PUT'] as const
}

export function getPutApplicationsApplicationIdCommandsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.applications)[':application_id']['commands']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.applications)[':application_id']['commands']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApplicationsApplicationIdCommandsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.applications)[':application_id']['commands']['$put']>,
    ) {
      return parseResponse(client.applications[':application_id'].commands.$put(args, options))
    },
  })
}

export function usePutApplicationsApplicationIdCommands<
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
                  ReturnType<(typeof client.applications)[':application_id']['commands']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.applications)[':application_id']['commands']['$put']>,
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
  const mutationDefaults = getPutApplicationsApplicationIdCommandsMutationOptions<
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

export function getPostApplicationsApplicationIdCommandsMutationKey() {
  return ['applications', '/applications/:application_id/commands', 'POST'] as const
}

export function getPostApplicationsApplicationIdCommandsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.applications)[':application_id']['commands']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.applications)[':application_id']['commands']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApplicationsApplicationIdCommandsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.applications)[':application_id']['commands']['$post']>,
    ) {
      return parseResponse(client.applications[':application_id'].commands.$post(args, options))
    },
  })
}

export function usePostApplicationsApplicationIdCommands<
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
                  ReturnType<(typeof client.applications)[':application_id']['commands']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.applications)[':application_id']['commands']['$post']>,
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
  const mutationDefaults = getPostApplicationsApplicationIdCommandsMutationOptions<
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

export function getApplicationsApplicationIdCommandsCommandIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':application_id']['commands'][':command_id']['$get']
    >
  >,
) {
  return [
    'applications',
    '/applications/:application_id/commands/:command_id',
    toValue(args),
  ] as const
}

export function getApplicationsApplicationIdCommandsCommandIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':application_id']['commands'][':command_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApplicationsApplicationIdCommandsCommandIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.applications[':application_id'].commands[':command_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApplicationsApplicationIdCommandsCommandId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.applications)[':application_id']['commands'][':command_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':application_id']['commands'][':command_id']['$get']
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
                    (typeof client.applications)[':application_id']['commands'][':command_id']['$get']
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
                    (typeof client.applications)[':application_id']['commands'][':command_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApplicationsApplicationIdCommandsCommandIdQueryKey>
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
              (typeof client.applications)[':application_id']['commands'][':command_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationsApplicationIdCommandsCommandIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApplicationsApplicationIdCommandsCommandIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.applications[':application_id'].commands[':command_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApplicationsApplicationIdCommandsCommandIdMutationKey() {
  return ['applications', '/applications/:application_id/commands/:command_id', 'DELETE'] as const
}

export function getDeleteApplicationsApplicationIdCommandsCommandIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':application_id']['commands'][':command_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.applications)[':application_id']['commands'][':command_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApplicationsApplicationIdCommandsCommandIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.applications)[':application_id']['commands'][':command_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.applications[':application_id'].commands[':command_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApplicationsApplicationIdCommandsCommandId<
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
                      (typeof client.applications)[':application_id']['commands'][':command_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.applications)[':application_id']['commands'][':command_id']['$delete']
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
  const mutationDefaults = getDeleteApplicationsApplicationIdCommandsCommandIdMutationOptions<
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

export function getPatchApplicationsApplicationIdCommandsCommandIdMutationKey() {
  return ['applications', '/applications/:application_id/commands/:command_id', 'PATCH'] as const
}

export function getPatchApplicationsApplicationIdCommandsCommandIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.applications)[':application_id']['commands'][':command_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.applications)[':application_id']['commands'][':command_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApplicationsApplicationIdCommandsCommandIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.applications)[':application_id']['commands'][':command_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.applications[':application_id'].commands[':command_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchApplicationsApplicationIdCommandsCommandId<
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
                    (typeof client.applications)[':application_id']['commands'][':command_id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.applications)[':application_id']['commands'][':command_id']['$patch']
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
  const mutationDefaults = getPatchApplicationsApplicationIdCommandsCommandIdMutationOptions<
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

export function getApplicationsApplicationIdEmojisQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.applications)[':application_id']['emojis']['$get']>
  >,
) {
  return ['applications', '/applications/:application_id/emojis', toValue(args)] as const
}

export function getApplicationsApplicationIdEmojisQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.applications)[':application_id']['emojis']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApplicationsApplicationIdEmojisQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.applications[':application_id'].emojis.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApplicationsApplicationIdEmojis<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.applications)[':application_id']['emojis']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.applications)[':application_id']['emojis']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.applications)[':application_id']['emojis']['$get']>
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
                  ReturnType<(typeof client.applications)[':application_id']['emojis']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApplicationsApplicationIdEmojisQueryKey>
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
          Awaited<ReturnType<(typeof client.applications)[':application_id']['emojis']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationsApplicationIdEmojisQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApplicationsApplicationIdEmojisQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.applications[':application_id'].emojis.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApplicationsApplicationIdEmojisMutationKey() {
  return ['applications', '/applications/:application_id/emojis', 'POST'] as const
}

export function getPostApplicationsApplicationIdEmojisMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.applications)[':application_id']['emojis']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.applications)[':application_id']['emojis']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApplicationsApplicationIdEmojisMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.applications)[':application_id']['emojis']['$post']>,
    ) {
      return parseResponse(client.applications[':application_id'].emojis.$post(args, options))
    },
  })
}

export function usePostApplicationsApplicationIdEmojis<
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
                  ReturnType<(typeof client.applications)[':application_id']['emojis']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.applications)[':application_id']['emojis']['$post']>,
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
  const mutationDefaults = getPostApplicationsApplicationIdEmojisMutationOptions<
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

export function getApplicationsApplicationIdEmojisEmojiIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.applications)[':application_id']['emojis'][':emoji_id']['$get']>
  >,
) {
  return ['applications', '/applications/:application_id/emojis/:emoji_id', toValue(args)] as const
}

export function getApplicationsApplicationIdEmojisEmojiIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.applications)[':application_id']['emojis'][':emoji_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApplicationsApplicationIdEmojisEmojiIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.applications[':application_id'].emojis[':emoji_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApplicationsApplicationIdEmojisEmojiId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.applications)[':application_id']['emojis'][':emoji_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.applications)[':application_id']['emojis'][':emoji_id']['$get']>
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
                    (typeof client.applications)[':application_id']['emojis'][':emoji_id']['$get']
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
                    (typeof client.applications)[':application_id']['emojis'][':emoji_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApplicationsApplicationIdEmojisEmojiIdQueryKey>
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
              (typeof client.applications)[':application_id']['emojis'][':emoji_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationsApplicationIdEmojisEmojiIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApplicationsApplicationIdEmojisEmojiIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.applications[':application_id'].emojis[':emoji_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApplicationsApplicationIdEmojisEmojiIdMutationKey() {
  return ['applications', '/applications/:application_id/emojis/:emoji_id', 'DELETE'] as const
}

export function getDeleteApplicationsApplicationIdEmojisEmojiIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':application_id']['emojis'][':emoji_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.applications)[':application_id']['emojis'][':emoji_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApplicationsApplicationIdEmojisEmojiIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.applications)[':application_id']['emojis'][':emoji_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.applications[':application_id'].emojis[':emoji_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApplicationsApplicationIdEmojisEmojiId<
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
                      (typeof client.applications)[':application_id']['emojis'][':emoji_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.applications)[':application_id']['emojis'][':emoji_id']['$delete']
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
  const mutationDefaults = getDeleteApplicationsApplicationIdEmojisEmojiIdMutationOptions<
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

export function getPatchApplicationsApplicationIdEmojisEmojiIdMutationKey() {
  return ['applications', '/applications/:application_id/emojis/:emoji_id', 'PATCH'] as const
}

export function getPatchApplicationsApplicationIdEmojisEmojiIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.applications)[':application_id']['emojis'][':emoji_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.applications)[':application_id']['emojis'][':emoji_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApplicationsApplicationIdEmojisEmojiIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.applications)[':application_id']['emojis'][':emoji_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.applications[':application_id'].emojis[':emoji_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchApplicationsApplicationIdEmojisEmojiId<
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
                    (typeof client.applications)[':application_id']['emojis'][':emoji_id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.applications)[':application_id']['emojis'][':emoji_id']['$patch']
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
  const mutationDefaults = getPatchApplicationsApplicationIdEmojisEmojiIdMutationOptions<
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

export function getApplicationsApplicationIdEntitlementsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.applications)[':application_id']['entitlements']['$get']>
  >,
) {
  return ['applications', '/applications/:application_id/entitlements', toValue(args)] as const
}

export function getApplicationsApplicationIdEntitlementsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.applications)[':application_id']['entitlements']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApplicationsApplicationIdEntitlementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.applications[':application_id'].entitlements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApplicationsApplicationIdEntitlements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.applications)[':application_id']['entitlements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.applications)[':application_id']['entitlements']['$get']>
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
                    (typeof client.applications)[':application_id']['entitlements']['$get']
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
                    (typeof client.applications)[':application_id']['entitlements']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApplicationsApplicationIdEntitlementsQueryKey>
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
            ReturnType<(typeof client.applications)[':application_id']['entitlements']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationsApplicationIdEntitlementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApplicationsApplicationIdEntitlementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.applications[':application_id'].entitlements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApplicationsApplicationIdEntitlementsMutationKey() {
  return ['applications', '/applications/:application_id/entitlements', 'POST'] as const
}

export function getPostApplicationsApplicationIdEntitlementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.applications)[':application_id']['entitlements']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.applications)[':application_id']['entitlements']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApplicationsApplicationIdEntitlementsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.applications)[':application_id']['entitlements']['$post']
      >,
    ) {
      return parseResponse(client.applications[':application_id'].entitlements.$post(args, options))
    },
  })
}

export function usePostApplicationsApplicationIdEntitlements<
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
                    (typeof client.applications)[':application_id']['entitlements']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.applications)[':application_id']['entitlements']['$post']
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
  const mutationDefaults = getPostApplicationsApplicationIdEntitlementsMutationOptions<
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

export function getApplicationsApplicationIdEntitlementsEntitlementIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':application_id']['entitlements'][':entitlement_id']['$get']
    >
  >,
) {
  return [
    'applications',
    '/applications/:application_id/entitlements/:entitlement_id',
    toValue(args),
  ] as const
}

export function getApplicationsApplicationIdEntitlementsEntitlementIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':application_id']['entitlements'][':entitlement_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApplicationsApplicationIdEntitlementsEntitlementIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.applications[':application_id'].entitlements[':entitlement_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApplicationsApplicationIdEntitlementsEntitlementId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.applications)[':application_id']['entitlements'][':entitlement_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':application_id']['entitlements'][':entitlement_id']['$get']
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
                    (typeof client.applications)[':application_id']['entitlements'][':entitlement_id']['$get']
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
                    (typeof client.applications)[':application_id']['entitlements'][':entitlement_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApplicationsApplicationIdEntitlementsEntitlementIdQueryKey>
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
              (typeof client.applications)[':application_id']['entitlements'][':entitlement_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationsApplicationIdEntitlementsEntitlementIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApplicationsApplicationIdEntitlementsEntitlementIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.applications[':application_id'].entitlements[':entitlement_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApplicationsApplicationIdEntitlementsEntitlementIdMutationKey() {
  return [
    'applications',
    '/applications/:application_id/entitlements/:entitlement_id',
    'DELETE',
  ] as const
}

export function getDeleteApplicationsApplicationIdEntitlementsEntitlementIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':application_id']['entitlements'][':entitlement_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.applications)[':application_id']['entitlements'][':entitlement_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApplicationsApplicationIdEntitlementsEntitlementIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.applications)[':application_id']['entitlements'][':entitlement_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.applications[':application_id'].entitlements[':entitlement_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApplicationsApplicationIdEntitlementsEntitlementId<
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
                      (typeof client.applications)[':application_id']['entitlements'][':entitlement_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.applications)[':application_id']['entitlements'][':entitlement_id']['$delete']
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
    getDeleteApplicationsApplicationIdEntitlementsEntitlementIdMutationOptions<
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

export function getPostApplicationsApplicationIdEntitlementsEntitlementIdConsumeMutationKey() {
  return [
    'applications',
    '/applications/:application_id/entitlements/:entitlement_id/consume',
    'POST',
  ] as const
}

export function getPostApplicationsApplicationIdEntitlementsEntitlementIdConsumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':application_id']['entitlements'][':entitlement_id']['consume']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.applications)[':application_id']['entitlements'][':entitlement_id']['consume']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApplicationsApplicationIdEntitlementsEntitlementIdConsumeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.applications)[':application_id']['entitlements'][':entitlement_id']['consume']['$post']
      >,
    ) {
      return parseResponse(
        client.applications[':application_id'].entitlements[':entitlement_id'].consume.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApplicationsApplicationIdEntitlementsEntitlementIdConsume<
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
                      (typeof client.applications)[':application_id']['entitlements'][':entitlement_id']['consume']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.applications)[':application_id']['entitlements'][':entitlement_id']['consume']['$post']
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
    getPostApplicationsApplicationIdEntitlementsEntitlementIdConsumeMutationOptions<
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

export function getApplicationsApplicationIdGuildsGuildIdCommandsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['$get']
    >
  >,
) {
  return [
    'applications',
    '/applications/:application_id/guilds/:guild_id/commands',
    toValue(args),
  ] as const
}

export function getApplicationsApplicationIdGuildsGuildIdCommandsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApplicationsApplicationIdGuildsGuildIdCommandsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.applications[':application_id'].guilds[':guild_id'].commands.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApplicationsApplicationIdGuildsGuildIdCommands<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['$get']
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
                    (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['$get']
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
                    (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApplicationsApplicationIdGuildsGuildIdCommandsQueryKey>
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
              (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationsApplicationIdGuildsGuildIdCommandsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApplicationsApplicationIdGuildsGuildIdCommandsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.applications[':application_id'].guilds[':guild_id'].commands.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApplicationsApplicationIdGuildsGuildIdCommandsMutationKey() {
  return ['applications', '/applications/:application_id/guilds/:guild_id/commands', 'PUT'] as const
}

export function getPutApplicationsApplicationIdGuildsGuildIdCommandsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApplicationsApplicationIdGuildsGuildIdCommandsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['$put']
      >,
    ) {
      return parseResponse(
        client.applications[':application_id'].guilds[':guild_id'].commands.$put(args, options),
      )
    },
  })
}

export function usePutApplicationsApplicationIdGuildsGuildIdCommands<
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
                    (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['$put']
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
  const mutationDefaults = getPutApplicationsApplicationIdGuildsGuildIdCommandsMutationOptions<
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

export function getPostApplicationsApplicationIdGuildsGuildIdCommandsMutationKey() {
  return [
    'applications',
    '/applications/:application_id/guilds/:guild_id/commands',
    'POST',
  ] as const
}

export function getPostApplicationsApplicationIdGuildsGuildIdCommandsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApplicationsApplicationIdGuildsGuildIdCommandsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['$post']
      >,
    ) {
      return parseResponse(
        client.applications[':application_id'].guilds[':guild_id'].commands.$post(args, options),
      )
    },
  })
}

export function usePostApplicationsApplicationIdGuildsGuildIdCommands<
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
                    (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['$post']
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
  const mutationDefaults = getPostApplicationsApplicationIdGuildsGuildIdCommandsMutationOptions<
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

export function getApplicationsApplicationIdGuildsGuildIdCommandsPermissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['permissions']['$get']
    >
  >,
) {
  return [
    'applications',
    '/applications/:application_id/guilds/:guild_id/commands/permissions',
    toValue(args),
  ] as const
}

export function getApplicationsApplicationIdGuildsGuildIdCommandsPermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['permissions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApplicationsApplicationIdGuildsGuildIdCommandsPermissionsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.applications[':application_id'].guilds[':guild_id'].commands.permissions.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApplicationsApplicationIdGuildsGuildIdCommandsPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['permissions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['permissions']['$get']
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
                    (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['permissions']['$get']
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
                    (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['permissions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApplicationsApplicationIdGuildsGuildIdCommandsPermissionsQueryKey>
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
              (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['permissions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationsApplicationIdGuildsGuildIdCommandsPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApplicationsApplicationIdGuildsGuildIdCommandsPermissionsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.applications[':application_id'].guilds[':guild_id'].commands.permissions.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApplicationsApplicationIdGuildsGuildIdCommandsCommandIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['$get']
    >
  >,
) {
  return [
    'applications',
    '/applications/:application_id/guilds/:guild_id/commands/:command_id',
    toValue(args),
  ] as const
}

export function getApplicationsApplicationIdGuildsGuildIdCommandsCommandIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApplicationsApplicationIdGuildsGuildIdCommandsCommandIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.applications[':application_id'].guilds[':guild_id'].commands[':command_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApplicationsApplicationIdGuildsGuildIdCommandsCommandId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['$get']
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
                    (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['$get']
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
                    (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApplicationsApplicationIdGuildsGuildIdCommandsCommandIdQueryKey>
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
              (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationsApplicationIdGuildsGuildIdCommandsCommandIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApplicationsApplicationIdGuildsGuildIdCommandsCommandIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.applications[':application_id'].guilds[':guild_id'].commands[':command_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApplicationsApplicationIdGuildsGuildIdCommandsCommandIdMutationKey() {
  return [
    'applications',
    '/applications/:application_id/guilds/:guild_id/commands/:command_id',
    'DELETE',
  ] as const
}

export function getDeleteApplicationsApplicationIdGuildsGuildIdCommandsCommandIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApplicationsApplicationIdGuildsGuildIdCommandsCommandIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.applications[':application_id'].guilds[':guild_id'].commands[':command_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApplicationsApplicationIdGuildsGuildIdCommandsCommandId<
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
                      (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['$delete']
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
    getDeleteApplicationsApplicationIdGuildsGuildIdCommandsCommandIdMutationOptions<
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

export function getPatchApplicationsApplicationIdGuildsGuildIdCommandsCommandIdMutationKey() {
  return [
    'applications',
    '/applications/:application_id/guilds/:guild_id/commands/:command_id',
    'PATCH',
  ] as const
}

export function getPatchApplicationsApplicationIdGuildsGuildIdCommandsCommandIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApplicationsApplicationIdGuildsGuildIdCommandsCommandIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.applications[':application_id'].guilds[':guild_id'].commands[':command_id'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchApplicationsApplicationIdGuildsGuildIdCommandsCommandId<
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
                    (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['$patch']
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
    getPatchApplicationsApplicationIdGuildsGuildIdCommandsCommandIdMutationOptions<
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

export function getApplicationsApplicationIdGuildsGuildIdCommandsCommandIdPermissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['permissions']['$get']
    >
  >,
) {
  return [
    'applications',
    '/applications/:application_id/guilds/:guild_id/commands/:command_id/permissions',
    toValue(args),
  ] as const
}

export function getApplicationsApplicationIdGuildsGuildIdCommandsCommandIdPermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['permissions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApplicationsApplicationIdGuildsGuildIdCommandsCommandIdPermissionsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.applications[':application_id'].guilds[':guild_id'].commands[
          ':command_id'
        ].permissions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApplicationsApplicationIdGuildsGuildIdCommandsCommandIdPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['permissions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['permissions']['$get']
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
                    (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['permissions']['$get']
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
                    (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['permissions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApplicationsApplicationIdGuildsGuildIdCommandsCommandIdPermissionsQueryKey
          >
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
              (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['permissions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationsApplicationIdGuildsGuildIdCommandsCommandIdPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApplicationsApplicationIdGuildsGuildIdCommandsCommandIdPermissionsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.applications[':application_id'].guilds[':guild_id'].commands[
            ':command_id'
          ].permissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApplicationsApplicationIdGuildsGuildIdCommandsCommandIdPermissionsMutationKey() {
  return [
    'applications',
    '/applications/:application_id/guilds/:guild_id/commands/:command_id/permissions',
    'PUT',
  ] as const
}

export function getPutApplicationsApplicationIdGuildsGuildIdCommandsCommandIdPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['permissions']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['permissions']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutApplicationsApplicationIdGuildsGuildIdCommandsCommandIdPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['permissions']['$put']
      >,
    ) {
      return parseResponse(
        client.applications[':application_id'].guilds[':guild_id'].commands[
          ':command_id'
        ].permissions.$put(args, options),
      )
    },
  })
}

export function usePutApplicationsApplicationIdGuildsGuildIdCommandsCommandIdPermissions<
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
                    (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['permissions']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['permissions']['$put']
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
    getPutApplicationsApplicationIdGuildsGuildIdCommandsCommandIdPermissionsMutationOptions<
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

export function getApplicationsApplicationIdRoleConnectionsMetadataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':application_id']['role-connections']['metadata']['$get']
    >
  >,
) {
  return [
    'applications',
    '/applications/:application_id/role-connections/metadata',
    toValue(args),
  ] as const
}

export function getApplicationsApplicationIdRoleConnectionsMetadataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':application_id']['role-connections']['metadata']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApplicationsApplicationIdRoleConnectionsMetadataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.applications[':application_id']['role-connections'].metadata.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApplicationsApplicationIdRoleConnectionsMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.applications)[':application_id']['role-connections']['metadata']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':application_id']['role-connections']['metadata']['$get']
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
                    (typeof client.applications)[':application_id']['role-connections']['metadata']['$get']
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
                    (typeof client.applications)[':application_id']['role-connections']['metadata']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApplicationsApplicationIdRoleConnectionsMetadataQueryKey>
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
              (typeof client.applications)[':application_id']['role-connections']['metadata']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationsApplicationIdRoleConnectionsMetadataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApplicationsApplicationIdRoleConnectionsMetadataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.applications[':application_id']['role-connections'].metadata.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApplicationsApplicationIdRoleConnectionsMetadataMutationKey() {
  return ['applications', '/applications/:application_id/role-connections/metadata', 'PUT'] as const
}

export function getPutApplicationsApplicationIdRoleConnectionsMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.applications)[':application_id']['role-connections']['metadata']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.applications)[':application_id']['role-connections']['metadata']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApplicationsApplicationIdRoleConnectionsMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.applications)[':application_id']['role-connections']['metadata']['$put']
      >,
    ) {
      return parseResponse(
        client.applications[':application_id']['role-connections'].metadata.$put(args, options),
      )
    },
  })
}

export function usePutApplicationsApplicationIdRoleConnectionsMetadata<
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
                    (typeof client.applications)[':application_id']['role-connections']['metadata']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.applications)[':application_id']['role-connections']['metadata']['$put']
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
  const mutationDefaults = getPutApplicationsApplicationIdRoleConnectionsMetadataMutationOptions<
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

export function getChannelsChannelIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.channels)[':channel_id']['$get']>>,
) {
  return ['channels', '/channels/:channel_id', toValue(args)] as const
}

export function getChannelsChannelIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.channels)[':channel_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channel_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsChannelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channel_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.channels)[':channel_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channel_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channel_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChannelsChannelIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channel_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channel_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteChannelsChannelIdMutationKey() {
  return ['channels', '/channels/:channel_id', 'DELETE'] as const
}

export function getDeleteChannelsChannelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':channel_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChannelsChannelIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.channels)[':channel_id']['$delete']>) {
      return parseResponse(client.channels[':channel_id'].$delete(args, options))
    },
  })
}

export function useDeleteChannelsChannelId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channel_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channels)[':channel_id']['$delete']>,
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
  const mutationDefaults = getDeleteChannelsChannelIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchChannelsChannelIdMutationKey() {
  return ['channels', '/channels/:channel_id', 'PATCH'] as const
}

export function getPatchChannelsChannelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channel_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':channel_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchChannelsChannelIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.channels)[':channel_id']['$patch']>) {
      return parseResponse(client.channels[':channel_id'].$patch(args, options))
    },
  })
}

export function usePatchChannelsChannelId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channel_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channels)[':channel_id']['$patch']>,
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
  const mutationDefaults = getPatchChannelsChannelIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostChannelsChannelIdFollowersMutationKey() {
  return ['channels', '/channels/:channel_id/followers', 'POST'] as const
}

export function getPostChannelsChannelIdFollowersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['followers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':channel_id']['followers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsChannelIdFollowersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':channel_id']['followers']['$post']>,
    ) {
      return parseResponse(client.channels[':channel_id'].followers.$post(args, options))
    },
  })
}

export function usePostChannelsChannelIdFollowers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channel_id']['followers']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channels)[':channel_id']['followers']['$post']>,
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
  const mutationDefaults = getPostChannelsChannelIdFollowersMutationOptions<
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

export function getChannelsChannelIdInvitesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['invites']['$get']>
  >,
) {
  return ['channels', '/channels/:channel_id/invites', toValue(args)] as const
}

export function getChannelsChannelIdInvitesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['invites']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelIdInvitesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channel_id'].invites.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsChannelIdInvites<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel_id']['invites']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['invites']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channel_id']['invites']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channel_id']['invites']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChannelsChannelIdInvitesQueryKey>
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
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['invites']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdInvitesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelIdInvitesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channel_id'].invites.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostChannelsChannelIdInvitesMutationKey() {
  return ['channels', '/channels/:channel_id/invites', 'POST'] as const
}

export function getPostChannelsChannelIdInvitesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['invites']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.channels)[':channel_id']['invites']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsChannelIdInvitesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':channel_id']['invites']['$post']>,
    ) {
      return parseResponse(client.channels[':channel_id'].invites.$post(args, options))
    },
  })
}

export function usePostChannelsChannelIdInvites<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.channels)[':channel_id']['invites']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.channels)[':channel_id']['invites']['$post']>,
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
  const mutationDefaults = getPostChannelsChannelIdInvitesMutationOptions<TError, TOnMutateResult>(
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

export function getChannelsChannelIdMessagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['messages']['$get']>
  >,
) {
  return ['channels', '/channels/:channel_id/messages', toValue(args)] as const
}

export function getChannelsChannelIdMessagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['messages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelIdMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channel_id'].messages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsChannelIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel_id']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['messages']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channel_id']['messages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channel_id']['messages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChannelsChannelIdMessagesQueryKey>
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
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['messages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelIdMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channel_id'].messages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostChannelsChannelIdMessagesMutationKey() {
  return ['channels', '/channels/:channel_id/messages', 'POST'] as const
}

export function getPostChannelsChannelIdMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['messages']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':channel_id']['messages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsChannelIdMessagesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':channel_id']['messages']['$post']>,
    ) {
      return parseResponse(client.channels[':channel_id'].messages.$post(args, options))
    },
  })
}

export function usePostChannelsChannelIdMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channel_id']['messages']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channels)[':channel_id']['messages']['$post']>,
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
  const mutationDefaults = getPostChannelsChannelIdMessagesMutationOptions<TError, TOnMutateResult>(
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

export function getPostChannelsChannelIdMessagesBulkDeleteMutationKey() {
  return ['channels', '/channels/:channel_id/messages/bulk-delete', 'POST'] as const
}

export function getPostChannelsChannelIdMessagesBulkDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['messages']['bulk-delete']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.channels)[':channel_id']['messages']['bulk-delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsChannelIdMessagesBulkDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':channel_id']['messages']['bulk-delete']['$post']
      >,
    ) {
      return parseResponse(
        client.channels[':channel_id'].messages['bulk-delete'].$post(args, options),
      )
    },
  })
}

export function usePostChannelsChannelIdMessagesBulkDelete<
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
                      (typeof client.channels)[':channel_id']['messages']['bulk-delete']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.channels)[':channel_id']['messages']['bulk-delete']['$post']
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
  const mutationDefaults = getPostChannelsChannelIdMessagesBulkDeleteMutationOptions<
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

export function getChannelsChannelIdMessagesPinsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['messages']['pins']['$get']>
  >,
) {
  return ['channels', '/channels/:channel_id/messages/pins', toValue(args)] as const
}

export function getChannelsChannelIdMessagesPinsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['messages']['pins']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelIdMessagesPinsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channel_id'].messages.pins.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsChannelIdMessagesPins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel_id']['messages']['pins']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['messages']['pins']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.channels)[':channel_id']['messages']['pins']['$get']>
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
                  ReturnType<(typeof client.channels)[':channel_id']['messages']['pins']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getChannelsChannelIdMessagesPinsQueryKey>
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
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['messages']['pins']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdMessagesPinsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelIdMessagesPinsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channel_id'].messages.pins.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutChannelsChannelIdMessagesPinsMessageIdMutationKey() {
  return ['channels', '/channels/:channel_id/messages/pins/:message_id', 'PUT'] as const
}

export function getPutChannelsChannelIdMessagesPinsMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['messages']['pins'][':message_id']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.channels)[':channel_id']['messages']['pins'][':message_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutChannelsChannelIdMessagesPinsMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':channel_id']['messages']['pins'][':message_id']['$put']
      >,
    ) {
      return parseResponse(
        client.channels[':channel_id'].messages.pins[':message_id'].$put(args, options),
      )
    },
  })
}

export function usePutChannelsChannelIdMessagesPinsMessageId<
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
                      (typeof client.channels)[':channel_id']['messages']['pins'][':message_id']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.channels)[':channel_id']['messages']['pins'][':message_id']['$put']
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
  const mutationDefaults = getPutChannelsChannelIdMessagesPinsMessageIdMutationOptions<
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

export function getDeleteChannelsChannelIdMessagesPinsMessageIdMutationKey() {
  return ['channels', '/channels/:channel_id/messages/pins/:message_id', 'DELETE'] as const
}

export function getDeleteChannelsChannelIdMessagesPinsMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['messages']['pins'][':message_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.channels)[':channel_id']['messages']['pins'][':message_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteChannelsChannelIdMessagesPinsMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':channel_id']['messages']['pins'][':message_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.channels[':channel_id'].messages.pins[':message_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteChannelsChannelIdMessagesPinsMessageId<
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
                      (typeof client.channels)[':channel_id']['messages']['pins'][':message_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.channels)[':channel_id']['messages']['pins'][':message_id']['$delete']
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
  const mutationDefaults = getDeleteChannelsChannelIdMessagesPinsMessageIdMutationOptions<
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

export function getChannelsChannelIdMessagesMessageIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['messages'][':message_id']['$get']>
  >,
) {
  return ['channels', '/channels/:channel_id/messages/:message_id', toValue(args)] as const
}

export function getChannelsChannelIdMessagesMessageIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['messages'][':message_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelIdMessagesMessageIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channel_id'].messages[':message_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsChannelIdMessagesMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.channels)[':channel_id']['messages'][':message_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['messages'][':message_id']['$get']>
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
                    (typeof client.channels)[':channel_id']['messages'][':message_id']['$get']
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
                    (typeof client.channels)[':channel_id']['messages'][':message_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getChannelsChannelIdMessagesMessageIdQueryKey>
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
            ReturnType<(typeof client.channels)[':channel_id']['messages'][':message_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdMessagesMessageIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelIdMessagesMessageIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channel_id'].messages[':message_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteChannelsChannelIdMessagesMessageIdMutationKey() {
  return ['channels', '/channels/:channel_id/messages/:message_id', 'DELETE'] as const
}

export function getDeleteChannelsChannelIdMessagesMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['messages'][':message_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.channels)[':channel_id']['messages'][':message_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChannelsChannelIdMessagesMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':channel_id']['messages'][':message_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.channels[':channel_id'].messages[':message_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteChannelsChannelIdMessagesMessageId<
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
                      (typeof client.channels)[':channel_id']['messages'][':message_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.channels)[':channel_id']['messages'][':message_id']['$delete']
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
  const mutationDefaults = getDeleteChannelsChannelIdMessagesMessageIdMutationOptions<
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

export function getPatchChannelsChannelIdMessagesMessageIdMutationKey() {
  return ['channels', '/channels/:channel_id/messages/:message_id', 'PATCH'] as const
}

export function getPatchChannelsChannelIdMessagesMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.channels)[':channel_id']['messages'][':message_id']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':channel_id']['messages'][':message_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchChannelsChannelIdMessagesMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':channel_id']['messages'][':message_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.channels[':channel_id'].messages[':message_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchChannelsChannelIdMessagesMessageId<
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
                    (typeof client.channels)[':channel_id']['messages'][':message_id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.channels)[':channel_id']['messages'][':message_id']['$patch']
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
  const mutationDefaults = getPatchChannelsChannelIdMessagesMessageIdMutationOptions<
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

export function getPostChannelsChannelIdMessagesMessageIdCrosspostMutationKey() {
  return ['channels', '/channels/:channel_id/messages/:message_id/crosspost', 'POST'] as const
}

export function getPostChannelsChannelIdMessagesMessageIdCrosspostMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.channels)[':channel_id']['messages'][':message_id']['crosspost']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.channels)[':channel_id']['messages'][':message_id']['crosspost']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsChannelIdMessagesMessageIdCrosspostMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':channel_id']['messages'][':message_id']['crosspost']['$post']
      >,
    ) {
      return parseResponse(
        client.channels[':channel_id'].messages[':message_id'].crosspost.$post(args, options),
      )
    },
  })
}

export function usePostChannelsChannelIdMessagesMessageIdCrosspost<
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
                    (typeof client.channels)[':channel_id']['messages'][':message_id']['crosspost']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.channels)[':channel_id']['messages'][':message_id']['crosspost']['$post']
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
  const mutationDefaults = getPostChannelsChannelIdMessagesMessageIdCrosspostMutationOptions<
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

export function getDeleteChannelsChannelIdMessagesMessageIdReactionsMutationKey() {
  return ['channels', '/channels/:channel_id/messages/:message_id/reactions', 'DELETE'] as const
}

export function getDeleteChannelsChannelIdMessagesMessageIdReactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteChannelsChannelIdMessagesMessageIdReactionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions']['$delete']
      >,
    ) {
      return parseResponse(
        client.channels[':channel_id'].messages[':message_id'].reactions.$delete(args, options),
      )
    },
  })
}

export function useDeleteChannelsChannelIdMessagesMessageIdReactions<
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
                      (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions']['$delete']
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
  const mutationDefaults = getDeleteChannelsChannelIdMessagesMessageIdReactionsMutationOptions<
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

export function getChannelsChannelIdMessagesMessageIdReactionsEmojiNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name']['$get']
    >
  >,
) {
  return [
    'channels',
    '/channels/:channel_id/messages/:message_id/reactions/:emoji_name',
    toValue(args),
  ] as const
}

export function getChannelsChannelIdMessagesMessageIdReactionsEmojiNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelIdMessagesMessageIdReactionsEmojiNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channel_id'].messages[':message_id'].reactions[':emoji_name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useChannelsChannelIdMessagesMessageIdReactionsEmojiName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name']['$get']
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
                    (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name']['$get']
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
                    (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getChannelsChannelIdMessagesMessageIdReactionsEmojiNameQueryKey>
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
              (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdMessagesMessageIdReactionsEmojiNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getChannelsChannelIdMessagesMessageIdReactionsEmojiNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channel_id'].messages[':message_id'].reactions[':emoji_name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameMutationKey() {
  return [
    'channels',
    '/channels/:channel_id/messages/:message_id/reactions/:emoji_name',
    'DELETE',
  ] as const
}

export function getDeleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name']['$delete']
      >,
    ) {
      return parseResponse(
        client.channels[':channel_id'].messages[':message_id'].reactions[':emoji_name'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteChannelsChannelIdMessagesMessageIdReactionsEmojiName<
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
                      (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name']['$delete']
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
    getDeleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameMutationOptions<
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

export function getPutChannelsChannelIdMessagesMessageIdReactionsEmojiNameMeMutationKey() {
  return [
    'channels',
    '/channels/:channel_id/messages/:message_id/reactions/:emoji_name/@me',
    'PUT',
  ] as const
}

export function getPutChannelsChannelIdMessagesMessageIdReactionsEmojiNameMeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name']['@me']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name']['@me']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutChannelsChannelIdMessagesMessageIdReactionsEmojiNameMeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name']['@me']['$put']
      >,
    ) {
      return parseResponse(
        client.channels[':channel_id'].messages[':message_id'].reactions[':emoji_name']['@me'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutChannelsChannelIdMessagesMessageIdReactionsEmojiNameMe<
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
                      (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name']['@me']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name']['@me']['$put']
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
    getPutChannelsChannelIdMessagesMessageIdReactionsEmojiNameMeMutationOptions<
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

export function getDeleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameMeMutationKey() {
  return [
    'channels',
    '/channels/:channel_id/messages/:message_id/reactions/:emoji_name/@me',
    'DELETE',
  ] as const
}

export function getDeleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameMeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name']['@me']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name']['@me']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameMeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name']['@me']['$delete']
      >,
    ) {
      return parseResponse(
        client.channels[':channel_id'].messages[':message_id'].reactions[':emoji_name'][
          '@me'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameMe<
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
                      (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name']['@me']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name']['@me']['$delete']
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
    getDeleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameMeMutationOptions<
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

export function getDeleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameUserIdMutationKey() {
  return [
    'channels',
    '/channels/:channel_id/messages/:message_id/reactions/:emoji_name/:user_id',
    'DELETE',
  ] as const
}

export function getDeleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name'][':user_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name'][':user_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name'][':user_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.channels[':channel_id'].messages[':message_id'].reactions[':emoji_name'][
          ':user_id'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameUserId<
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
                      (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name'][':user_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name'][':user_id']['$delete']
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
    getDeleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameUserIdMutationOptions<
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

export function getPostChannelsChannelIdMessagesMessageIdThreadsMutationKey() {
  return ['channels', '/channels/:channel_id/messages/:message_id/threads', 'POST'] as const
}

export function getPostChannelsChannelIdMessagesMessageIdThreadsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.channels)[':channel_id']['messages'][':message_id']['threads']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.channels)[':channel_id']['messages'][':message_id']['threads']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsChannelIdMessagesMessageIdThreadsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':channel_id']['messages'][':message_id']['threads']['$post']
      >,
    ) {
      return parseResponse(
        client.channels[':channel_id'].messages[':message_id'].threads.$post(args, options),
      )
    },
  })
}

export function usePostChannelsChannelIdMessagesMessageIdThreads<
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
                    (typeof client.channels)[':channel_id']['messages'][':message_id']['threads']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.channels)[':channel_id']['messages'][':message_id']['threads']['$post']
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
  const mutationDefaults = getPostChannelsChannelIdMessagesMessageIdThreadsMutationOptions<
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

export function getChannelsChannelIdPermissionsMemberUserIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channel_id']['permissions']['member'][':user_id']['$get']
    >
  >,
) {
  return ['channels', '/channels/:channel_id/permissions/member/:user_id', toValue(args)] as const
}

export function getChannelsChannelIdPermissionsMemberUserIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channel_id']['permissions']['member'][':user_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelIdPermissionsMemberUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channel_id'].permissions.member[':user_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsChannelIdPermissionsMemberUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.channels)[':channel_id']['permissions']['member'][':user_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channel_id']['permissions']['member'][':user_id']['$get']
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
                    (typeof client.channels)[':channel_id']['permissions']['member'][':user_id']['$get']
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
                    (typeof client.channels)[':channel_id']['permissions']['member'][':user_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getChannelsChannelIdPermissionsMemberUserIdQueryKey>
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
              (typeof client.channels)[':channel_id']['permissions']['member'][':user_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdPermissionsMemberUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelIdPermissionsMemberUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channel_id'].permissions.member[':user_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChannelsChannelIdPermissionsRoleRoleIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channel_id']['permissions']['role'][':role_id']['$get']
    >
  >,
) {
  return ['channels', '/channels/:channel_id/permissions/role/:role_id', toValue(args)] as const
}

export function getChannelsChannelIdPermissionsRoleRoleIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channel_id']['permissions']['role'][':role_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelIdPermissionsRoleRoleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channel_id'].permissions.role[':role_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsChannelIdPermissionsRoleRoleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.channels)[':channel_id']['permissions']['role'][':role_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channel_id']['permissions']['role'][':role_id']['$get']
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
                    (typeof client.channels)[':channel_id']['permissions']['role'][':role_id']['$get']
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
                    (typeof client.channels)[':channel_id']['permissions']['role'][':role_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getChannelsChannelIdPermissionsRoleRoleIdQueryKey>
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
              (typeof client.channels)[':channel_id']['permissions']['role'][':role_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdPermissionsRoleRoleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelIdPermissionsRoleRoleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channel_id'].permissions.role[':role_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutChannelsChannelIdPermissionsOverwriteIdMutationKey() {
  return ['channels', '/channels/:channel_id/permissions/:overwrite_id', 'PUT'] as const
}

export function getPutChannelsChannelIdPermissionsOverwriteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['permissions'][':overwrite_id']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.channels)[':channel_id']['permissions'][':overwrite_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutChannelsChannelIdPermissionsOverwriteIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':channel_id']['permissions'][':overwrite_id']['$put']
      >,
    ) {
      return parseResponse(
        client.channels[':channel_id'].permissions[':overwrite_id'].$put(args, options),
      )
    },
  })
}

export function usePutChannelsChannelIdPermissionsOverwriteId<
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
                      (typeof client.channels)[':channel_id']['permissions'][':overwrite_id']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.channels)[':channel_id']['permissions'][':overwrite_id']['$put']
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
  const mutationDefaults = getPutChannelsChannelIdPermissionsOverwriteIdMutationOptions<
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

export function getDeleteChannelsChannelIdPermissionsOverwriteIdMutationKey() {
  return ['channels', '/channels/:channel_id/permissions/:overwrite_id', 'DELETE'] as const
}

export function getDeleteChannelsChannelIdPermissionsOverwriteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['permissions'][':overwrite_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.channels)[':channel_id']['permissions'][':overwrite_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteChannelsChannelIdPermissionsOverwriteIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':channel_id']['permissions'][':overwrite_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.channels[':channel_id'].permissions[':overwrite_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteChannelsChannelIdPermissionsOverwriteId<
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
                      (typeof client.channels)[':channel_id']['permissions'][':overwrite_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.channels)[':channel_id']['permissions'][':overwrite_id']['$delete']
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
  const mutationDefaults = getDeleteChannelsChannelIdPermissionsOverwriteIdMutationOptions<
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

export function getChannelsChannelIdPinsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.channels)[':channel_id']['pins']['$get']>>,
) {
  return ['channels', '/channels/:channel_id/pins', toValue(args)] as const
}

export function getChannelsChannelIdPinsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.channels)[':channel_id']['pins']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelIdPinsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channel_id'].pins.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsChannelIdPins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel_id']['pins']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.channels)[':channel_id']['pins']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channel_id']['pins']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channel_id']['pins']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChannelsChannelIdPinsQueryKey>
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
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['pins']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdPinsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelIdPinsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channel_id'].pins.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutChannelsChannelIdPinsMessageIdMutationKey() {
  return ['channels', '/channels/:channel_id/pins/:message_id', 'PUT'] as const
}

export function getPutChannelsChannelIdPinsMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':channel_id']['pins'][':message_id']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.channels)[':channel_id']['pins'][':message_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChannelsChannelIdPinsMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':channel_id']['pins'][':message_id']['$put']
      >,
    ) {
      return parseResponse(client.channels[':channel_id'].pins[':message_id'].$put(args, options))
    },
  })
}

export function usePutChannelsChannelIdPinsMessageId<
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
                      (typeof client.channels)[':channel_id']['pins'][':message_id']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.channels)[':channel_id']['pins'][':message_id']['$put']>,
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
  const mutationDefaults = getPutChannelsChannelIdPinsMessageIdMutationOptions<
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

export function getDeleteChannelsChannelIdPinsMessageIdMutationKey() {
  return ['channels', '/channels/:channel_id/pins/:message_id', 'DELETE'] as const
}

export function getDeleteChannelsChannelIdPinsMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':channel_id']['pins'][':message_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.channels)[':channel_id']['pins'][':message_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChannelsChannelIdPinsMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':channel_id']['pins'][':message_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.channels[':channel_id'].pins[':message_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteChannelsChannelIdPinsMessageId<
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
                      (typeof client.channels)[':channel_id']['pins'][':message_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.channels)[':channel_id']['pins'][':message_id']['$delete']
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
  const mutationDefaults = getDeleteChannelsChannelIdPinsMessageIdMutationOptions<
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

export function getChannelsChannelIdPollsMessageIdAnswersAnswerIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channel_id']['polls'][':message_id']['answers'][':answer_id']['$get']
    >
  >,
) {
  return [
    'channels',
    '/channels/:channel_id/polls/:message_id/answers/:answer_id',
    toValue(args),
  ] as const
}

export function getChannelsChannelIdPollsMessageIdAnswersAnswerIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channel_id']['polls'][':message_id']['answers'][':answer_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelIdPollsMessageIdAnswersAnswerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channel_id'].polls[':message_id'].answers[':answer_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useChannelsChannelIdPollsMessageIdAnswersAnswerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.channels)[':channel_id']['polls'][':message_id']['answers'][':answer_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channel_id']['polls'][':message_id']['answers'][':answer_id']['$get']
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
                    (typeof client.channels)[':channel_id']['polls'][':message_id']['answers'][':answer_id']['$get']
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
                    (typeof client.channels)[':channel_id']['polls'][':message_id']['answers'][':answer_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getChannelsChannelIdPollsMessageIdAnswersAnswerIdQueryKey>
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
              (typeof client.channels)[':channel_id']['polls'][':message_id']['answers'][':answer_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdPollsMessageIdAnswersAnswerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelIdPollsMessageIdAnswersAnswerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channel_id'].polls[':message_id'].answers[':answer_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostChannelsChannelIdPollsMessageIdExpireMutationKey() {
  return ['channels', '/channels/:channel_id/polls/:message_id/expire', 'POST'] as const
}

export function getPostChannelsChannelIdPollsMessageIdExpireMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.channels)[':channel_id']['polls'][':message_id']['expire']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.channels)[':channel_id']['polls'][':message_id']['expire']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsChannelIdPollsMessageIdExpireMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':channel_id']['polls'][':message_id']['expire']['$post']
      >,
    ) {
      return parseResponse(
        client.channels[':channel_id'].polls[':message_id'].expire.$post(args, options),
      )
    },
  })
}

export function usePostChannelsChannelIdPollsMessageIdExpire<
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
                    (typeof client.channels)[':channel_id']['polls'][':message_id']['expire']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.channels)[':channel_id']['polls'][':message_id']['expire']['$post']
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
  const mutationDefaults = getPostChannelsChannelIdPollsMessageIdExpireMutationOptions<
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

export function getPutChannelsChannelIdRecipientsUserIdMutationKey() {
  return ['channels', '/channels/:channel_id/recipients/:user_id', 'PUT'] as const
}

export function getPutChannelsChannelIdRecipientsUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':channel_id']['recipients'][':user_id']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.channels)[':channel_id']['recipients'][':user_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChannelsChannelIdRecipientsUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':channel_id']['recipients'][':user_id']['$put']
      >,
    ) {
      return parseResponse(
        client.channels[':channel_id'].recipients[':user_id'].$put(args, options),
      )
    },
  })
}

export function usePutChannelsChannelIdRecipientsUserId<
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
                      (typeof client.channels)[':channel_id']['recipients'][':user_id']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.channels)[':channel_id']['recipients'][':user_id']['$put']
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
  const mutationDefaults = getPutChannelsChannelIdRecipientsUserIdMutationOptions<
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

export function getDeleteChannelsChannelIdRecipientsUserIdMutationKey() {
  return ['channels', '/channels/:channel_id/recipients/:user_id', 'DELETE'] as const
}

export function getDeleteChannelsChannelIdRecipientsUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['recipients'][':user_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.channels)[':channel_id']['recipients'][':user_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChannelsChannelIdRecipientsUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':channel_id']['recipients'][':user_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.channels[':channel_id'].recipients[':user_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteChannelsChannelIdRecipientsUserId<
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
                      (typeof client.channels)[':channel_id']['recipients'][':user_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.channels)[':channel_id']['recipients'][':user_id']['$delete']
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
  const mutationDefaults = getDeleteChannelsChannelIdRecipientsUserIdMutationOptions<
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

export function getPostChannelsChannelIdSendSoundboardSoundMutationKey() {
  return ['channels', '/channels/:channel_id/send-soundboard-sound', 'POST'] as const
}

export function getPostChannelsChannelIdSendSoundboardSoundMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':channel_id']['send-soundboard-sound']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.channels)[':channel_id']['send-soundboard-sound']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsChannelIdSendSoundboardSoundMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':channel_id']['send-soundboard-sound']['$post']
      >,
    ) {
      return parseResponse(
        client.channels[':channel_id']['send-soundboard-sound'].$post(args, options),
      )
    },
  })
}

export function usePostChannelsChannelIdSendSoundboardSound<
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
                      (typeof client.channels)[':channel_id']['send-soundboard-sound']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.channels)[':channel_id']['send-soundboard-sound']['$post']
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
  const mutationDefaults = getPostChannelsChannelIdSendSoundboardSoundMutationOptions<
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

export function getChannelsChannelIdThreadMembersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['thread-members']['$get']>
  >,
) {
  return ['channels', '/channels/:channel_id/thread-members', toValue(args)] as const
}

export function getChannelsChannelIdThreadMembersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['thread-members']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelIdThreadMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channel_id']['thread-members'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsChannelIdThreadMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel_id']['thread-members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['thread-members']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.channels)[':channel_id']['thread-members']['$get']>
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
                  ReturnType<(typeof client.channels)[':channel_id']['thread-members']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getChannelsChannelIdThreadMembersQueryKey>
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
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['thread-members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdThreadMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelIdThreadMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channel_id']['thread-members'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutChannelsChannelIdThreadMembersMeMutationKey() {
  return ['channels', '/channels/:channel_id/thread-members/@me', 'PUT'] as const
}

export function getPutChannelsChannelIdThreadMembersMeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':channel_id']['thread-members']['@me']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.channels)[':channel_id']['thread-members']['@me']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChannelsChannelIdThreadMembersMeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':channel_id']['thread-members']['@me']['$put']
      >,
    ) {
      return parseResponse(
        client.channels[':channel_id']['thread-members']['@me'].$put(args, options),
      )
    },
  })
}

export function usePutChannelsChannelIdThreadMembersMe<
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
                      (typeof client.channels)[':channel_id']['thread-members']['@me']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.channels)[':channel_id']['thread-members']['@me']['$put']
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
  const mutationDefaults = getPutChannelsChannelIdThreadMembersMeMutationOptions<
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

export function getDeleteChannelsChannelIdThreadMembersMeMutationKey() {
  return ['channels', '/channels/:channel_id/thread-members/@me', 'DELETE'] as const
}

export function getDeleteChannelsChannelIdThreadMembersMeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['thread-members']['@me']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.channels)[':channel_id']['thread-members']['@me']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChannelsChannelIdThreadMembersMeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':channel_id']['thread-members']['@me']['$delete']
      >,
    ) {
      return parseResponse(
        client.channels[':channel_id']['thread-members']['@me'].$delete(args, options),
      )
    },
  })
}

export function useDeleteChannelsChannelIdThreadMembersMe<
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
                      (typeof client.channels)[':channel_id']['thread-members']['@me']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.channels)[':channel_id']['thread-members']['@me']['$delete']
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
  const mutationDefaults = getDeleteChannelsChannelIdThreadMembersMeMutationOptions<
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

export function getChannelsChannelIdThreadMembersUserIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['thread-members'][':user_id']['$get']>
  >,
) {
  return ['channels', '/channels/:channel_id/thread-members/:user_id', toValue(args)] as const
}

export function getChannelsChannelIdThreadMembersUserIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['thread-members'][':user_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelIdThreadMembersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channel_id']['thread-members'][':user_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsChannelIdThreadMembersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.channels)[':channel_id']['thread-members'][':user_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['thread-members'][':user_id']['$get']>
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
                    (typeof client.channels)[':channel_id']['thread-members'][':user_id']['$get']
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
                    (typeof client.channels)[':channel_id']['thread-members'][':user_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getChannelsChannelIdThreadMembersUserIdQueryKey>
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
              (typeof client.channels)[':channel_id']['thread-members'][':user_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdThreadMembersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelIdThreadMembersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channel_id']['thread-members'][':user_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutChannelsChannelIdThreadMembersUserIdMutationKey() {
  return ['channels', '/channels/:channel_id/thread-members/:user_id', 'PUT'] as const
}

export function getPutChannelsChannelIdThreadMembersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['thread-members'][':user_id']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.channels)[':channel_id']['thread-members'][':user_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChannelsChannelIdThreadMembersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':channel_id']['thread-members'][':user_id']['$put']
      >,
    ) {
      return parseResponse(
        client.channels[':channel_id']['thread-members'][':user_id'].$put(args, options),
      )
    },
  })
}

export function usePutChannelsChannelIdThreadMembersUserId<
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
                      (typeof client.channels)[':channel_id']['thread-members'][':user_id']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.channels)[':channel_id']['thread-members'][':user_id']['$put']
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
  const mutationDefaults = getPutChannelsChannelIdThreadMembersUserIdMutationOptions<
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

export function getDeleteChannelsChannelIdThreadMembersUserIdMutationKey() {
  return ['channels', '/channels/:channel_id/thread-members/:user_id', 'DELETE'] as const
}

export function getDeleteChannelsChannelIdThreadMembersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['thread-members'][':user_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.channels)[':channel_id']['thread-members'][':user_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteChannelsChannelIdThreadMembersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':channel_id']['thread-members'][':user_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.channels[':channel_id']['thread-members'][':user_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteChannelsChannelIdThreadMembersUserId<
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
                      (typeof client.channels)[':channel_id']['thread-members'][':user_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.channels)[':channel_id']['thread-members'][':user_id']['$delete']
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
  const mutationDefaults = getDeleteChannelsChannelIdThreadMembersUserIdMutationOptions<
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

export function getPostChannelsChannelIdThreadsMutationKey() {
  return ['channels', '/channels/:channel_id/threads', 'POST'] as const
}

export function getPostChannelsChannelIdThreadsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['threads']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':channel_id']['threads']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsChannelIdThreadsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':channel_id']['threads']['$post']>,
    ) {
      return parseResponse(client.channels[':channel_id'].threads.$post(args, options))
    },
  })
}

export function usePostChannelsChannelIdThreads<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channel_id']['threads']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channels)[':channel_id']['threads']['$post']>,
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
  const mutationDefaults = getPostChannelsChannelIdThreadsMutationOptions<TError, TOnMutateResult>(
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

export function getChannelsChannelIdThreadsArchivedPrivateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channel_id']['threads']['archived']['private']['$get']
    >
  >,
) {
  return ['channels', '/channels/:channel_id/threads/archived/private', toValue(args)] as const
}

export function getChannelsChannelIdThreadsArchivedPrivateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channel_id']['threads']['archived']['private']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelIdThreadsArchivedPrivateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channel_id'].threads.archived.private.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsChannelIdThreadsArchivedPrivate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.channels)[':channel_id']['threads']['archived']['private']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channel_id']['threads']['archived']['private']['$get']
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
                    (typeof client.channels)[':channel_id']['threads']['archived']['private']['$get']
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
                    (typeof client.channels)[':channel_id']['threads']['archived']['private']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getChannelsChannelIdThreadsArchivedPrivateQueryKey>
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
              (typeof client.channels)[':channel_id']['threads']['archived']['private']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdThreadsArchivedPrivateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelIdThreadsArchivedPrivateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channel_id'].threads.archived.private.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChannelsChannelIdThreadsArchivedPublicQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channel_id']['threads']['archived']['public']['$get']
    >
  >,
) {
  return ['channels', '/channels/:channel_id/threads/archived/public', toValue(args)] as const
}

export function getChannelsChannelIdThreadsArchivedPublicQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channel_id']['threads']['archived']['public']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelIdThreadsArchivedPublicQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channel_id'].threads.archived.public.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsChannelIdThreadsArchivedPublic<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.channels)[':channel_id']['threads']['archived']['public']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channel_id']['threads']['archived']['public']['$get']
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
                    (typeof client.channels)[':channel_id']['threads']['archived']['public']['$get']
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
                    (typeof client.channels)[':channel_id']['threads']['archived']['public']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getChannelsChannelIdThreadsArchivedPublicQueryKey>
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
              (typeof client.channels)[':channel_id']['threads']['archived']['public']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdThreadsArchivedPublicQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelIdThreadsArchivedPublicQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channel_id'].threads.archived.public.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChannelsChannelIdThreadsSearchQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['threads']['search']['$get']>
  >,
) {
  return ['channels', '/channels/:channel_id/threads/search', toValue(args)] as const
}

export function getChannelsChannelIdThreadsSearchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['threads']['search']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelIdThreadsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channel_id'].threads.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsChannelIdThreadsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel_id']['threads']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['threads']['search']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.channels)[':channel_id']['threads']['search']['$get']>
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
                  ReturnType<(typeof client.channels)[':channel_id']['threads']['search']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getChannelsChannelIdThreadsSearchQueryKey>
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
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['threads']['search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdThreadsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelIdThreadsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channel_id'].threads.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostChannelsChannelIdTypingMutationKey() {
  return ['channels', '/channels/:channel_id/typing', 'POST'] as const
}

export function getPostChannelsChannelIdTypingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['typing']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.channels)[':channel_id']['typing']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsChannelIdTypingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':channel_id']['typing']['$post']>,
    ) {
      return parseResponse(client.channels[':channel_id'].typing.$post(args, options))
    },
  })
}

export function usePostChannelsChannelIdTyping<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.channels)[':channel_id']['typing']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.channels)[':channel_id']['typing']['$post']>,
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
  const mutationDefaults = getPostChannelsChannelIdTypingMutationOptions<TError, TOnMutateResult>(
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

export function getChannelsChannelIdUsersMeThreadsArchivedPrivateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channel_id']['users']['@me']['threads']['archived']['private']['$get']
    >
  >,
) {
  return [
    'channels',
    '/channels/:channel_id/users/@me/threads/archived/private',
    toValue(args),
  ] as const
}

export function getChannelsChannelIdUsersMeThreadsArchivedPrivateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channel_id']['users']['@me']['threads']['archived']['private']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelIdUsersMeThreadsArchivedPrivateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channel_id'].users['@me'].threads.archived.private.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsChannelIdUsersMeThreadsArchivedPrivate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.channels)[':channel_id']['users']['@me']['threads']['archived']['private']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.channels)[':channel_id']['users']['@me']['threads']['archived']['private']['$get']
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
                    (typeof client.channels)[':channel_id']['users']['@me']['threads']['archived']['private']['$get']
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
                    (typeof client.channels)[':channel_id']['users']['@me']['threads']['archived']['private']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getChannelsChannelIdUsersMeThreadsArchivedPrivateQueryKey>
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
              (typeof client.channels)[':channel_id']['users']['@me']['threads']['archived']['private']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdUsersMeThreadsArchivedPrivateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelIdUsersMeThreadsArchivedPrivateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channel_id'].users['@me'].threads.archived.private.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutChannelsChannelIdVoiceStatusMutationKey() {
  return ['channels', '/channels/:channel_id/voice-status', 'PUT'] as const
}

export function getPutChannelsChannelIdVoiceStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['voice-status']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.channels)[':channel_id']['voice-status']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChannelsChannelIdVoiceStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':channel_id']['voice-status']['$put']>,
    ) {
      return parseResponse(client.channels[':channel_id']['voice-status'].$put(args, options))
    },
  })
}

export function usePutChannelsChannelIdVoiceStatus<
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
                    ReturnType<(typeof client.channels)[':channel_id']['voice-status']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.channels)[':channel_id']['voice-status']['$put']>,
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
  const mutationDefaults = getPutChannelsChannelIdVoiceStatusMutationOptions<
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

export function getChannelsChannelIdWebhooksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['webhooks']['$get']>
  >,
) {
  return ['channels', '/channels/:channel_id/webhooks', toValue(args)] as const
}

export function getChannelsChannelIdWebhooksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['webhooks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelIdWebhooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channel_id'].webhooks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsChannelIdWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel_id']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['webhooks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channel_id']['webhooks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channel_id']['webhooks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChannelsChannelIdWebhooksQueryKey>
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
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['webhooks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdWebhooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelIdWebhooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channel_id'].webhooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostChannelsChannelIdWebhooksMutationKey() {
  return ['channels', '/channels/:channel_id/webhooks', 'POST'] as const
}

export function getPostChannelsChannelIdWebhooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['webhooks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':channel_id']['webhooks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsChannelIdWebhooksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':channel_id']['webhooks']['$post']>,
    ) {
      return parseResponse(client.channels[':channel_id'].webhooks.$post(args, options))
    },
  })
}

export function usePostChannelsChannelIdWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channel_id']['webhooks']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channels)[':channel_id']['webhooks']['$post']>,
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
  const mutationDefaults = getPostChannelsChannelIdWebhooksMutationOptions<TError, TOnMutateResult>(
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

export function getGatewayQueryKey() {
  return ['gateway', '/gateway'] as const
}

export function getGatewayQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getGatewayQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gateway.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGateway<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gateway.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gateway.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gateway.$get>>>>
          >,
          ReturnType<typeof getGatewayQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gateway.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGatewayQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getGatewayQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.gateway.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGatewayBotQueryKey() {
  return ['gateway', '/gateway/bot'] as const
}

export function getGatewayBotQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getGatewayBotQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gateway.bot.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGatewayBot<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gateway.bot.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gateway.bot.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gateway.bot.$get>>>>
          >,
          ReturnType<typeof getGatewayBotQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gateway.bot.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGatewayBotQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getGatewayBotQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.gateway.bot.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGuildsTemplatesCodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds.templates)[':code']['$get']>>,
) {
  return ['guilds', '/guilds/templates/:code', toValue(args)] as const
}

export function getGuildsTemplatesCodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds.templates)[':code']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuildsTemplatesCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds.templates[':code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuildsTemplatesCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.guilds.templates)[':code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds.templates)[':code']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds.templates)[':code']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds.templates)[':code']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGuildsTemplatesCodeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.guilds.templates)[':code']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsTemplatesCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuildsTemplatesCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds.templates[':code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGuildsGuildIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds)[':guild_id']['$get']>>,
) {
  return ['guilds', '/guilds/:guild_id', toValue(args)] as const
}

export function getGuildsGuildIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds)[':guild_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuildsGuildIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuildsGuildId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.guilds)[':guild_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds)[':guild_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.guilds)[':guild_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.guilds)[':guild_id']['$get']>>>
            >
          >,
          ReturnType<typeof getGuildsGuildIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.guilds)[':guild_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsGuildIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuildsGuildIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchGuildsGuildIdMutationKey() {
  return ['guilds', '/guilds/:guild_id', 'PATCH'] as const
}

export function getPatchGuildsGuildIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.guilds)[':guild_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.guilds)[':guild_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchGuildsGuildIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.guilds)[':guild_id']['$patch']>) {
      return parseResponse(client.guilds[':guild_id'].$patch(args, options))
    },
  })
}

export function usePatchGuildsGuildId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.guilds)[':guild_id']['$patch']>,
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
  const mutationDefaults = getPatchGuildsGuildIdMutationOptions<TError, TOnMutateResult>(
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

export function getGuildsGuildIdAuditLogsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['audit-logs']['$get']>
  >,
) {
  return ['guilds', '/guilds/:guild_id/audit-logs', toValue(args)] as const
}

export function getGuildsGuildIdAuditLogsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['audit-logs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuildsGuildIdAuditLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id']['audit-logs'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuildsGuildIdAuditLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.guilds)[':guild_id']['audit-logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['audit-logs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['audit-logs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['audit-logs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGuildsGuildIdAuditLogsQueryKey>
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
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['audit-logs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsGuildIdAuditLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuildsGuildIdAuditLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id']['audit-logs'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGuildsGuildIdAutoModerationRulesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['auto-moderation']['rules']['$get']>
  >,
) {
  return ['guilds', '/guilds/:guild_id/auto-moderation/rules', toValue(args)] as const
}

export function getGuildsGuildIdAutoModerationRulesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['auto-moderation']['rules']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuildsGuildIdAutoModerationRulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id']['auto-moderation'].rules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuildsGuildIdAutoModerationRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.guilds)[':guild_id']['auto-moderation']['rules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['auto-moderation']['rules']['$get']>
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
                    (typeof client.guilds)[':guild_id']['auto-moderation']['rules']['$get']
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
                    (typeof client.guilds)[':guild_id']['auto-moderation']['rules']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGuildsGuildIdAutoModerationRulesQueryKey>
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
            ReturnType<(typeof client.guilds)[':guild_id']['auto-moderation']['rules']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsGuildIdAutoModerationRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuildsGuildIdAutoModerationRulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id']['auto-moderation'].rules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGuildsGuildIdAutoModerationRulesMutationKey() {
  return ['guilds', '/guilds/:guild_id/auto-moderation/rules', 'POST'] as const
}

export function getPostGuildsGuildIdAutoModerationRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.guilds)[':guild_id']['auto-moderation']['rules']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.guilds)[':guild_id']['auto-moderation']['rules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGuildsGuildIdAutoModerationRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.guilds)[':guild_id']['auto-moderation']['rules']['$post']
      >,
    ) {
      return parseResponse(client.guilds[':guild_id']['auto-moderation'].rules.$post(args, options))
    },
  })
}

export function usePostGuildsGuildIdAutoModerationRules<
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
                    (typeof client.guilds)[':guild_id']['auto-moderation']['rules']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.guilds)[':guild_id']['auto-moderation']['rules']['$post']
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
  const mutationDefaults = getPostGuildsGuildIdAutoModerationRulesMutationOptions<
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

export function getGuildsGuildIdAutoModerationRulesRuleIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.guilds)[':guild_id']['auto-moderation']['rules'][':rule_id']['$get']
    >
  >,
) {
  return ['guilds', '/guilds/:guild_id/auto-moderation/rules/:rule_id', toValue(args)] as const
}

export function getGuildsGuildIdAutoModerationRulesRuleIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.guilds)[':guild_id']['auto-moderation']['rules'][':rule_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuildsGuildIdAutoModerationRulesRuleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id']['auto-moderation'].rules[':rule_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuildsGuildIdAutoModerationRulesRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.guilds)[':guild_id']['auto-moderation']['rules'][':rule_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.guilds)[':guild_id']['auto-moderation']['rules'][':rule_id']['$get']
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
                    (typeof client.guilds)[':guild_id']['auto-moderation']['rules'][':rule_id']['$get']
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
                    (typeof client.guilds)[':guild_id']['auto-moderation']['rules'][':rule_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGuildsGuildIdAutoModerationRulesRuleIdQueryKey>
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
              (typeof client.guilds)[':guild_id']['auto-moderation']['rules'][':rule_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsGuildIdAutoModerationRulesRuleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuildsGuildIdAutoModerationRulesRuleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id']['auto-moderation'].rules[':rule_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteGuildsGuildIdAutoModerationRulesRuleIdMutationKey() {
  return ['guilds', '/guilds/:guild_id/auto-moderation/rules/:rule_id', 'DELETE'] as const
}

export function getDeleteGuildsGuildIdAutoModerationRulesRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.guilds)[':guild_id']['auto-moderation']['rules'][':rule_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.guilds)[':guild_id']['auto-moderation']['rules'][':rule_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteGuildsGuildIdAutoModerationRulesRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.guilds)[':guild_id']['auto-moderation']['rules'][':rule_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.guilds[':guild_id']['auto-moderation'].rules[':rule_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteGuildsGuildIdAutoModerationRulesRuleId<
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
                      (typeof client.guilds)[':guild_id']['auto-moderation']['rules'][':rule_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.guilds)[':guild_id']['auto-moderation']['rules'][':rule_id']['$delete']
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
  const mutationDefaults = getDeleteGuildsGuildIdAutoModerationRulesRuleIdMutationOptions<
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

export function getPatchGuildsGuildIdAutoModerationRulesRuleIdMutationKey() {
  return ['guilds', '/guilds/:guild_id/auto-moderation/rules/:rule_id', 'PATCH'] as const
}

export function getPatchGuildsGuildIdAutoModerationRulesRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.guilds)[':guild_id']['auto-moderation']['rules'][':rule_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.guilds)[':guild_id']['auto-moderation']['rules'][':rule_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchGuildsGuildIdAutoModerationRulesRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.guilds)[':guild_id']['auto-moderation']['rules'][':rule_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.guilds[':guild_id']['auto-moderation'].rules[':rule_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchGuildsGuildIdAutoModerationRulesRuleId<
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
                    (typeof client.guilds)[':guild_id']['auto-moderation']['rules'][':rule_id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.guilds)[':guild_id']['auto-moderation']['rules'][':rule_id']['$patch']
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
  const mutationDefaults = getPatchGuildsGuildIdAutoModerationRulesRuleIdMutationOptions<
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

export function getGuildsGuildIdBansQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds)[':guild_id']['bans']['$get']>>,
) {
  return ['guilds', '/guilds/:guild_id/bans', toValue(args)] as const
}

export function getGuildsGuildIdBansQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds)[':guild_id']['bans']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuildsGuildIdBansQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id'].bans.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuildsGuildIdBans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.guilds)[':guild_id']['bans']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds)[':guild_id']['bans']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['bans']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['bans']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGuildsGuildIdBansQueryKey>
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
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['bans']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsGuildIdBansQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuildsGuildIdBansQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id'].bans.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGuildsGuildIdBansUserIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['bans'][':user_id']['$get']>
  >,
) {
  return ['guilds', '/guilds/:guild_id/bans/:user_id', toValue(args)] as const
}

export function getGuildsGuildIdBansUserIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['bans'][':user_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuildsGuildIdBansUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id'].bans[':user_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuildsGuildIdBansUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.guilds)[':guild_id']['bans'][':user_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['bans'][':user_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['bans'][':user_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['bans'][':user_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGuildsGuildIdBansUserIdQueryKey>
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
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['bans'][':user_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsGuildIdBansUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuildsGuildIdBansUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id'].bans[':user_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutGuildsGuildIdBansUserIdMutationKey() {
  return ['guilds', '/guilds/:guild_id/bans/:user_id', 'PUT'] as const
}

export function getPutGuildsGuildIdBansUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['bans'][':user_id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.guilds)[':guild_id']['bans'][':user_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGuildsGuildIdBansUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.guilds)[':guild_id']['bans'][':user_id']['$put']>,
    ) {
      return parseResponse(client.guilds[':guild_id'].bans[':user_id'].$put(args, options))
    },
  })
}

export function usePutGuildsGuildIdBansUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.guilds)[':guild_id']['bans'][':user_id']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.guilds)[':guild_id']['bans'][':user_id']['$put']>,
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
  const mutationDefaults = getPutGuildsGuildIdBansUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteGuildsGuildIdBansUserIdMutationKey() {
  return ['guilds', '/guilds/:guild_id/bans/:user_id', 'DELETE'] as const
}

export function getDeleteGuildsGuildIdBansUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['bans'][':user_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.guilds)[':guild_id']['bans'][':user_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGuildsGuildIdBansUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.guilds)[':guild_id']['bans'][':user_id']['$delete']>,
    ) {
      return parseResponse(client.guilds[':guild_id'].bans[':user_id'].$delete(args, options))
    },
  })
}

export function useDeleteGuildsGuildIdBansUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.guilds)[':guild_id']['bans'][':user_id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.guilds)[':guild_id']['bans'][':user_id']['$delete']>,
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
  const mutationDefaults = getDeleteGuildsGuildIdBansUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostGuildsGuildIdBulkBanMutationKey() {
  return ['guilds', '/guilds/:guild_id/bulk-ban', 'POST'] as const
}

export function getPostGuildsGuildIdBulkBanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['bulk-ban']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.guilds)[':guild_id']['bulk-ban']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGuildsGuildIdBulkBanMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.guilds)[':guild_id']['bulk-ban']['$post']>,
    ) {
      return parseResponse(client.guilds[':guild_id']['bulk-ban'].$post(args, options))
    },
  })
}

export function usePostGuildsGuildIdBulkBan<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['bulk-ban']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.guilds)[':guild_id']['bulk-ban']['$post']>,
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
  const mutationDefaults = getPostGuildsGuildIdBulkBanMutationOptions<TError, TOnMutateResult>(
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

export function getGuildsGuildIdChannelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds)[':guild_id']['channels']['$get']>>,
) {
  return ['guilds', '/guilds/:guild_id/channels', toValue(args)] as const
}

export function getGuildsGuildIdChannelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds)[':guild_id']['channels']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuildsGuildIdChannelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id'].channels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuildsGuildIdChannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.guilds)[':guild_id']['channels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds)[':guild_id']['channels']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['channels']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['channels']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGuildsGuildIdChannelsQueryKey>
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
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['channels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsGuildIdChannelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuildsGuildIdChannelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id'].channels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGuildsGuildIdChannelsMutationKey() {
  return ['guilds', '/guilds/:guild_id/channels', 'POST'] as const
}

export function getPostGuildsGuildIdChannelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['channels']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.guilds)[':guild_id']['channels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGuildsGuildIdChannelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.guilds)[':guild_id']['channels']['$post']>,
    ) {
      return parseResponse(client.guilds[':guild_id'].channels.$post(args, options))
    },
  })
}

export function usePostGuildsGuildIdChannels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['channels']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.guilds)[':guild_id']['channels']['$post']>,
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
  const mutationDefaults = getPostGuildsGuildIdChannelsMutationOptions<TError, TOnMutateResult>(
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

export function getPatchGuildsGuildIdChannelsMutationKey() {
  return ['guilds', '/guilds/:guild_id/channels', 'PATCH'] as const
}

export function getPatchGuildsGuildIdChannelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['channels']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.guilds)[':guild_id']['channels']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchGuildsGuildIdChannelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.guilds)[':guild_id']['channels']['$patch']>,
    ) {
      return parseResponse(client.guilds[':guild_id'].channels.$patch(args, options))
    },
  })
}

export function usePatchGuildsGuildIdChannels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.guilds)[':guild_id']['channels']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.guilds)[':guild_id']['channels']['$patch']>,
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
  const mutationDefaults = getPatchGuildsGuildIdChannelsMutationOptions<TError, TOnMutateResult>(
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

export function getGuildsGuildIdEmojisQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds)[':guild_id']['emojis']['$get']>>,
) {
  return ['guilds', '/guilds/:guild_id/emojis', toValue(args)] as const
}

export function getGuildsGuildIdEmojisQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds)[':guild_id']['emojis']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuildsGuildIdEmojisQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id'].emojis.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuildsGuildIdEmojis<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.guilds)[':guild_id']['emojis']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds)[':guild_id']['emojis']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['emojis']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['emojis']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGuildsGuildIdEmojisQueryKey>
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
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['emojis']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsGuildIdEmojisQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuildsGuildIdEmojisQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id'].emojis.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGuildsGuildIdEmojisMutationKey() {
  return ['guilds', '/guilds/:guild_id/emojis', 'POST'] as const
}

export function getPostGuildsGuildIdEmojisMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['emojis']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.guilds)[':guild_id']['emojis']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGuildsGuildIdEmojisMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.guilds)[':guild_id']['emojis']['$post']>,
    ) {
      return parseResponse(client.guilds[':guild_id'].emojis.$post(args, options))
    },
  })
}

export function usePostGuildsGuildIdEmojis<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['emojis']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.guilds)[':guild_id']['emojis']['$post']>,
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
  const mutationDefaults = getPostGuildsGuildIdEmojisMutationOptions<TError, TOnMutateResult>(
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

export function getGuildsGuildIdEmojisEmojiIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['emojis'][':emoji_id']['$get']>
  >,
) {
  return ['guilds', '/guilds/:guild_id/emojis/:emoji_id', toValue(args)] as const
}

export function getGuildsGuildIdEmojisEmojiIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['emojis'][':emoji_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuildsGuildIdEmojisEmojiIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id'].emojis[':emoji_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuildsGuildIdEmojisEmojiId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.guilds)[':guild_id']['emojis'][':emoji_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['emojis'][':emoji_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.guilds)[':guild_id']['emojis'][':emoji_id']['$get']>
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
                  ReturnType<(typeof client.guilds)[':guild_id']['emojis'][':emoji_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGuildsGuildIdEmojisEmojiIdQueryKey>
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
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['emojis'][':emoji_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsGuildIdEmojisEmojiIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuildsGuildIdEmojisEmojiIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id'].emojis[':emoji_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteGuildsGuildIdEmojisEmojiIdMutationKey() {
  return ['guilds', '/guilds/:guild_id/emojis/:emoji_id', 'DELETE'] as const
}

export function getDeleteGuildsGuildIdEmojisEmojiIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.guilds)[':guild_id']['emojis'][':emoji_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.guilds)[':guild_id']['emojis'][':emoji_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGuildsGuildIdEmojisEmojiIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.guilds)[':guild_id']['emojis'][':emoji_id']['$delete']>,
    ) {
      return parseResponse(client.guilds[':guild_id'].emojis[':emoji_id'].$delete(args, options))
    },
  })
}

export function useDeleteGuildsGuildIdEmojisEmojiId<
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
                      (typeof client.guilds)[':guild_id']['emojis'][':emoji_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.guilds)[':guild_id']['emojis'][':emoji_id']['$delete']>,
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
  const mutationDefaults = getDeleteGuildsGuildIdEmojisEmojiIdMutationOptions<
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

export function getPatchGuildsGuildIdEmojisEmojiIdMutationKey() {
  return ['guilds', '/guilds/:guild_id/emojis/:emoji_id', 'PATCH'] as const
}

export function getPatchGuildsGuildIdEmojisEmojiIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['emojis'][':emoji_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.guilds)[':guild_id']['emojis'][':emoji_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchGuildsGuildIdEmojisEmojiIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.guilds)[':guild_id']['emojis'][':emoji_id']['$patch']>,
    ) {
      return parseResponse(client.guilds[':guild_id'].emojis[':emoji_id'].$patch(args, options))
    },
  })
}

export function usePatchGuildsGuildIdEmojisEmojiId<
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
                  ReturnType<(typeof client.guilds)[':guild_id']['emojis'][':emoji_id']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.guilds)[':guild_id']['emojis'][':emoji_id']['$patch']>,
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
  const mutationDefaults = getPatchGuildsGuildIdEmojisEmojiIdMutationOptions<
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

export function getPutGuildsGuildIdIncidentActionsMutationKey() {
  return ['guilds', '/guilds/:guild_id/incident-actions', 'PUT'] as const
}

export function getPutGuildsGuildIdIncidentActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['incident-actions']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.guilds)[':guild_id']['incident-actions']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGuildsGuildIdIncidentActionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.guilds)[':guild_id']['incident-actions']['$put']>,
    ) {
      return parseResponse(client.guilds[':guild_id']['incident-actions'].$put(args, options))
    },
  })
}

export function usePutGuildsGuildIdIncidentActions<
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
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['incident-actions']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.guilds)[':guild_id']['incident-actions']['$put']>,
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
  const mutationDefaults = getPutGuildsGuildIdIncidentActionsMutationOptions<
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

export function getGuildsGuildIdIntegrationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['integrations']['$get']>
  >,
) {
  return ['guilds', '/guilds/:guild_id/integrations', toValue(args)] as const
}

export function getGuildsGuildIdIntegrationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['integrations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuildsGuildIdIntegrationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id'].integrations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuildsGuildIdIntegrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.guilds)[':guild_id']['integrations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['integrations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['integrations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['integrations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGuildsGuildIdIntegrationsQueryKey>
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
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['integrations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsGuildIdIntegrationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuildsGuildIdIntegrationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id'].integrations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteGuildsGuildIdIntegrationsIntegrationIdMutationKey() {
  return ['guilds', '/guilds/:guild_id/integrations/:integration_id', 'DELETE'] as const
}

export function getDeleteGuildsGuildIdIntegrationsIntegrationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.guilds)[':guild_id']['integrations'][':integration_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.guilds)[':guild_id']['integrations'][':integration_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteGuildsGuildIdIntegrationsIntegrationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.guilds)[':guild_id']['integrations'][':integration_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.guilds[':guild_id'].integrations[':integration_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteGuildsGuildIdIntegrationsIntegrationId<
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
                      (typeof client.guilds)[':guild_id']['integrations'][':integration_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.guilds)[':guild_id']['integrations'][':integration_id']['$delete']
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
  const mutationDefaults = getDeleteGuildsGuildIdIntegrationsIntegrationIdMutationOptions<
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

export function getGuildsGuildIdInvitesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds)[':guild_id']['invites']['$get']>>,
) {
  return ['guilds', '/guilds/:guild_id/invites', toValue(args)] as const
}

export function getGuildsGuildIdInvitesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds)[':guild_id']['invites']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuildsGuildIdInvitesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id'].invites.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuildsGuildIdInvites<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.guilds)[':guild_id']['invites']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds)[':guild_id']['invites']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['invites']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['invites']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGuildsGuildIdInvitesQueryKey>
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
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['invites']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsGuildIdInvitesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuildsGuildIdInvitesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id'].invites.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGuildsGuildIdMembersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds)[':guild_id']['members']['$get']>>,
) {
  return ['guilds', '/guilds/:guild_id/members', toValue(args)] as const
}

export function getGuildsGuildIdMembersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds)[':guild_id']['members']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuildsGuildIdMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuildsGuildIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.guilds)[':guild_id']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds)[':guild_id']['members']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGuildsGuildIdMembersQueryKey>
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
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsGuildIdMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuildsGuildIdMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchGuildsGuildIdMembersMeMutationKey() {
  return ['guilds', '/guilds/:guild_id/members/@me', 'PATCH'] as const
}

export function getPatchGuildsGuildIdMembersMeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['members']['@me']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.guilds)[':guild_id']['members']['@me']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchGuildsGuildIdMembersMeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.guilds)[':guild_id']['members']['@me']['$patch']>,
    ) {
      return parseResponse(client.guilds[':guild_id'].members['@me'].$patch(args, options))
    },
  })
}

export function usePatchGuildsGuildIdMembersMe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['members']['@me']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.guilds)[':guild_id']['members']['@me']['$patch']>,
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
  const mutationDefaults = getPatchGuildsGuildIdMembersMeMutationOptions<TError, TOnMutateResult>(
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

export function getGuildsGuildIdMembersSearchQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['members']['search']['$get']>
  >,
) {
  return ['guilds', '/guilds/:guild_id/members/search', toValue(args)] as const
}

export function getGuildsGuildIdMembersSearchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['members']['search']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuildsGuildIdMembersSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id'].members.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuildsGuildIdMembersSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.guilds)[':guild_id']['members']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['members']['search']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.guilds)[':guild_id']['members']['search']['$get']>
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
                  ReturnType<(typeof client.guilds)[':guild_id']['members']['search']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGuildsGuildIdMembersSearchQueryKey>
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
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['members']['search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsGuildIdMembersSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuildsGuildIdMembersSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id'].members.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGuildsGuildIdMembersUserIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['members'][':user_id']['$get']>
  >,
) {
  return ['guilds', '/guilds/:guild_id/members/:user_id', toValue(args)] as const
}

export function getGuildsGuildIdMembersUserIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['members'][':user_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuildsGuildIdMembersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id'].members[':user_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuildsGuildIdMembersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.guilds)[':guild_id']['members'][':user_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['members'][':user_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.guilds)[':guild_id']['members'][':user_id']['$get']>
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
                  ReturnType<(typeof client.guilds)[':guild_id']['members'][':user_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGuildsGuildIdMembersUserIdQueryKey>
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
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['members'][':user_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsGuildIdMembersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuildsGuildIdMembersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id'].members[':user_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutGuildsGuildIdMembersUserIdMutationKey() {
  return ['guilds', '/guilds/:guild_id/members/:user_id', 'PUT'] as const
}

export function getPutGuildsGuildIdMembersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['members'][':user_id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.guilds)[':guild_id']['members'][':user_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGuildsGuildIdMembersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.guilds)[':guild_id']['members'][':user_id']['$put']>,
    ) {
      return parseResponse(client.guilds[':guild_id'].members[':user_id'].$put(args, options))
    },
  })
}

export function usePutGuildsGuildIdMembersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.guilds)[':guild_id']['members'][':user_id']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.guilds)[':guild_id']['members'][':user_id']['$put']>,
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
  const mutationDefaults = getPutGuildsGuildIdMembersUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteGuildsGuildIdMembersUserIdMutationKey() {
  return ['guilds', '/guilds/:guild_id/members/:user_id', 'DELETE'] as const
}

export function getDeleteGuildsGuildIdMembersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.guilds)[':guild_id']['members'][':user_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.guilds)[':guild_id']['members'][':user_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGuildsGuildIdMembersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.guilds)[':guild_id']['members'][':user_id']['$delete']>,
    ) {
      return parseResponse(client.guilds[':guild_id'].members[':user_id'].$delete(args, options))
    },
  })
}

export function useDeleteGuildsGuildIdMembersUserId<
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
                      (typeof client.guilds)[':guild_id']['members'][':user_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.guilds)[':guild_id']['members'][':user_id']['$delete']>,
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
  const mutationDefaults = getDeleteGuildsGuildIdMembersUserIdMutationOptions<
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

export function getPatchGuildsGuildIdMembersUserIdMutationKey() {
  return ['guilds', '/guilds/:guild_id/members/:user_id', 'PATCH'] as const
}

export function getPatchGuildsGuildIdMembersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.guilds)[':guild_id']['members'][':user_id']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.guilds)[':guild_id']['members'][':user_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchGuildsGuildIdMembersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.guilds)[':guild_id']['members'][':user_id']['$patch']>,
    ) {
      return parseResponse(client.guilds[':guild_id'].members[':user_id'].$patch(args, options))
    },
  })
}

export function usePatchGuildsGuildIdMembersUserId<
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
                    ReturnType<(typeof client.guilds)[':guild_id']['members'][':user_id']['$patch']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.guilds)[':guild_id']['members'][':user_id']['$patch']>,
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
  const mutationDefaults = getPatchGuildsGuildIdMembersUserIdMutationOptions<
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

export function getPutGuildsGuildIdMembersUserIdRolesRoleIdMutationKey() {
  return ['guilds', '/guilds/:guild_id/members/:user_id/roles/:role_id', 'PUT'] as const
}

export function getPutGuildsGuildIdMembersUserIdRolesRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.guilds)[':guild_id']['members'][':user_id']['roles'][':role_id']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.guilds)[':guild_id']['members'][':user_id']['roles'][':role_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutGuildsGuildIdMembersUserIdRolesRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.guilds)[':guild_id']['members'][':user_id']['roles'][':role_id']['$put']
      >,
    ) {
      return parseResponse(
        client.guilds[':guild_id'].members[':user_id'].roles[':role_id'].$put(args, options),
      )
    },
  })
}

export function usePutGuildsGuildIdMembersUserIdRolesRoleId<
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
                      (typeof client.guilds)[':guild_id']['members'][':user_id']['roles'][':role_id']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.guilds)[':guild_id']['members'][':user_id']['roles'][':role_id']['$put']
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
  const mutationDefaults = getPutGuildsGuildIdMembersUserIdRolesRoleIdMutationOptions<
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

export function getDeleteGuildsGuildIdMembersUserIdRolesRoleIdMutationKey() {
  return ['guilds', '/guilds/:guild_id/members/:user_id/roles/:role_id', 'DELETE'] as const
}

export function getDeleteGuildsGuildIdMembersUserIdRolesRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.guilds)[':guild_id']['members'][':user_id']['roles'][':role_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.guilds)[':guild_id']['members'][':user_id']['roles'][':role_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteGuildsGuildIdMembersUserIdRolesRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.guilds)[':guild_id']['members'][':user_id']['roles'][':role_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.guilds[':guild_id'].members[':user_id'].roles[':role_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteGuildsGuildIdMembersUserIdRolesRoleId<
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
                      (typeof client.guilds)[':guild_id']['members'][':user_id']['roles'][':role_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.guilds)[':guild_id']['members'][':user_id']['roles'][':role_id']['$delete']
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
  const mutationDefaults = getDeleteGuildsGuildIdMembersUserIdRolesRoleIdMutationOptions<
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

export function getGuildsGuildIdMessagesSearchQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['messages']['search']['$get']>
  >,
) {
  return ['guilds', '/guilds/:guild_id/messages/search', toValue(args)] as const
}

export function getGuildsGuildIdMessagesSearchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['messages']['search']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuildsGuildIdMessagesSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id'].messages.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuildsGuildIdMessagesSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.guilds)[':guild_id']['messages']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['messages']['search']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.guilds)[':guild_id']['messages']['search']['$get']>
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
                  ReturnType<(typeof client.guilds)[':guild_id']['messages']['search']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGuildsGuildIdMessagesSearchQueryKey>
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
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['messages']['search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsGuildIdMessagesSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuildsGuildIdMessagesSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id'].messages.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGuildsGuildIdNewMemberWelcomeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['new-member-welcome']['$get']>
  >,
) {
  return ['guilds', '/guilds/:guild_id/new-member-welcome', toValue(args)] as const
}

export function getGuildsGuildIdNewMemberWelcomeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['new-member-welcome']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuildsGuildIdNewMemberWelcomeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id']['new-member-welcome'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuildsGuildIdNewMemberWelcome<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.guilds)[':guild_id']['new-member-welcome']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['new-member-welcome']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.guilds)[':guild_id']['new-member-welcome']['$get']>
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
                  ReturnType<(typeof client.guilds)[':guild_id']['new-member-welcome']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGuildsGuildIdNewMemberWelcomeQueryKey>
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
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['new-member-welcome']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsGuildIdNewMemberWelcomeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuildsGuildIdNewMemberWelcomeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id']['new-member-welcome'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGuildsGuildIdOnboardingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['onboarding']['$get']>
  >,
) {
  return ['guilds', '/guilds/:guild_id/onboarding', toValue(args)] as const
}

export function getGuildsGuildIdOnboardingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['onboarding']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuildsGuildIdOnboardingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id'].onboarding.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuildsGuildIdOnboarding<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.guilds)[':guild_id']['onboarding']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['onboarding']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['onboarding']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['onboarding']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGuildsGuildIdOnboardingQueryKey>
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
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['onboarding']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsGuildIdOnboardingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuildsGuildIdOnboardingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id'].onboarding.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutGuildsGuildIdOnboardingMutationKey() {
  return ['guilds', '/guilds/:guild_id/onboarding', 'PUT'] as const
}

export function getPutGuildsGuildIdOnboardingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['onboarding']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.guilds)[':guild_id']['onboarding']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGuildsGuildIdOnboardingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.guilds)[':guild_id']['onboarding']['$put']>,
    ) {
      return parseResponse(client.guilds[':guild_id'].onboarding.$put(args, options))
    },
  })
}

export function usePutGuildsGuildIdOnboarding<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['onboarding']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.guilds)[':guild_id']['onboarding']['$put']>,
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
  const mutationDefaults = getPutGuildsGuildIdOnboardingMutationOptions<TError, TOnMutateResult>(
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

export function getGuildsGuildIdPermissionsMemberUserIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.guilds)[':guild_id']['permissions']['member'][':user_id']['$get']
    >
  >,
) {
  return ['guilds', '/guilds/:guild_id/permissions/member/:user_id', toValue(args)] as const
}

export function getGuildsGuildIdPermissionsMemberUserIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.guilds)[':guild_id']['permissions']['member'][':user_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuildsGuildIdPermissionsMemberUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id'].permissions.member[':user_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuildsGuildIdPermissionsMemberUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.guilds)[':guild_id']['permissions']['member'][':user_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.guilds)[':guild_id']['permissions']['member'][':user_id']['$get']
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
                    (typeof client.guilds)[':guild_id']['permissions']['member'][':user_id']['$get']
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
                    (typeof client.guilds)[':guild_id']['permissions']['member'][':user_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGuildsGuildIdPermissionsMemberUserIdQueryKey>
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
              (typeof client.guilds)[':guild_id']['permissions']['member'][':user_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsGuildIdPermissionsMemberUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuildsGuildIdPermissionsMemberUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id'].permissions.member[':user_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGuildsGuildIdPermissionsRoleRoleIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['permissions']['role'][':role_id']['$get']>
  >,
) {
  return ['guilds', '/guilds/:guild_id/permissions/role/:role_id', toValue(args)] as const
}

export function getGuildsGuildIdPermissionsRoleRoleIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['permissions']['role'][':role_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuildsGuildIdPermissionsRoleRoleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id'].permissions.role[':role_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuildsGuildIdPermissionsRoleRoleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.guilds)[':guild_id']['permissions']['role'][':role_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['permissions']['role'][':role_id']['$get']>
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
                    (typeof client.guilds)[':guild_id']['permissions']['role'][':role_id']['$get']
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
                    (typeof client.guilds)[':guild_id']['permissions']['role'][':role_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGuildsGuildIdPermissionsRoleRoleIdQueryKey>
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
              (typeof client.guilds)[':guild_id']['permissions']['role'][':role_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsGuildIdPermissionsRoleRoleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuildsGuildIdPermissionsRoleRoleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id'].permissions.role[':role_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGuildsGuildIdPreviewQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds)[':guild_id']['preview']['$get']>>,
) {
  return ['guilds', '/guilds/:guild_id/preview', toValue(args)] as const
}

export function getGuildsGuildIdPreviewQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds)[':guild_id']['preview']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuildsGuildIdPreviewQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id'].preview.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuildsGuildIdPreview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.guilds)[':guild_id']['preview']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds)[':guild_id']['preview']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['preview']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['preview']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGuildsGuildIdPreviewQueryKey>
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
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['preview']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsGuildIdPreviewQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuildsGuildIdPreviewQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id'].preview.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGuildsGuildIdPruneQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds)[':guild_id']['prune']['$get']>>,
) {
  return ['guilds', '/guilds/:guild_id/prune', toValue(args)] as const
}

export function getGuildsGuildIdPruneQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds)[':guild_id']['prune']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuildsGuildIdPruneQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id'].prune.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuildsGuildIdPrune<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.guilds)[':guild_id']['prune']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds)[':guild_id']['prune']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['prune']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['prune']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGuildsGuildIdPruneQueryKey>
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
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['prune']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsGuildIdPruneQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuildsGuildIdPruneQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id'].prune.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGuildsGuildIdPruneMutationKey() {
  return ['guilds', '/guilds/:guild_id/prune', 'POST'] as const
}

export function getPostGuildsGuildIdPruneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['prune']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.guilds)[':guild_id']['prune']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGuildsGuildIdPruneMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.guilds)[':guild_id']['prune']['$post']>,
    ) {
      return parseResponse(client.guilds[':guild_id'].prune.$post(args, options))
    },
  })
}

export function usePostGuildsGuildIdPrune<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['prune']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.guilds)[':guild_id']['prune']['$post']>,
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
  const mutationDefaults = getPostGuildsGuildIdPruneMutationOptions<TError, TOnMutateResult>(
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

export function getGuildsGuildIdRegionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds)[':guild_id']['regions']['$get']>>,
) {
  return ['guilds', '/guilds/:guild_id/regions', toValue(args)] as const
}

export function getGuildsGuildIdRegionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds)[':guild_id']['regions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuildsGuildIdRegionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id'].regions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuildsGuildIdRegions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.guilds)[':guild_id']['regions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds)[':guild_id']['regions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['regions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['regions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGuildsGuildIdRegionsQueryKey>
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
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['regions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsGuildIdRegionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuildsGuildIdRegionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id'].regions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGuildsGuildIdRequestsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds)[':guild_id']['requests']['$get']>>,
) {
  return ['guilds', '/guilds/:guild_id/requests', toValue(args)] as const
}

export function getGuildsGuildIdRequestsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds)[':guild_id']['requests']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuildsGuildIdRequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id'].requests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuildsGuildIdRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.guilds)[':guild_id']['requests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds)[':guild_id']['requests']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['requests']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['requests']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGuildsGuildIdRequestsQueryKey>
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
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['requests']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsGuildIdRequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuildsGuildIdRequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id'].requests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchGuildsGuildIdRequestsRequestIdMutationKey() {
  return ['guilds', '/guilds/:guild_id/requests/:request_id', 'PATCH'] as const
}

export function getPatchGuildsGuildIdRequestsRequestIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.guilds)[':guild_id']['requests'][':request_id']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.guilds)[':guild_id']['requests'][':request_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchGuildsGuildIdRequestsRequestIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.guilds)[':guild_id']['requests'][':request_id']['$patch']
      >,
    ) {
      return parseResponse(client.guilds[':guild_id'].requests[':request_id'].$patch(args, options))
    },
  })
}

export function usePatchGuildsGuildIdRequestsRequestId<
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
                    (typeof client.guilds)[':guild_id']['requests'][':request_id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.guilds)[':guild_id']['requests'][':request_id']['$patch']
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
  const mutationDefaults = getPatchGuildsGuildIdRequestsRequestIdMutationOptions<
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

export function getGuildsGuildIdRolesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds)[':guild_id']['roles']['$get']>>,
) {
  return ['guilds', '/guilds/:guild_id/roles', toValue(args)] as const
}

export function getGuildsGuildIdRolesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds)[':guild_id']['roles']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuildsGuildIdRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id'].roles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuildsGuildIdRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.guilds)[':guild_id']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds)[':guild_id']['roles']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['roles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['roles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGuildsGuildIdRolesQueryKey>
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
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['roles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsGuildIdRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuildsGuildIdRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id'].roles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGuildsGuildIdRolesMutationKey() {
  return ['guilds', '/guilds/:guild_id/roles', 'POST'] as const
}

export function getPostGuildsGuildIdRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['roles']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.guilds)[':guild_id']['roles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGuildsGuildIdRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.guilds)[':guild_id']['roles']['$post']>,
    ) {
      return parseResponse(client.guilds[':guild_id'].roles.$post(args, options))
    },
  })
}

export function usePostGuildsGuildIdRoles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['roles']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.guilds)[':guild_id']['roles']['$post']>,
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
  const mutationDefaults = getPostGuildsGuildIdRolesMutationOptions<TError, TOnMutateResult>(
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

export function getPatchGuildsGuildIdRolesMutationKey() {
  return ['guilds', '/guilds/:guild_id/roles', 'PATCH'] as const
}

export function getPatchGuildsGuildIdRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['roles']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.guilds)[':guild_id']['roles']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchGuildsGuildIdRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.guilds)[':guild_id']['roles']['$patch']>,
    ) {
      return parseResponse(client.guilds[':guild_id'].roles.$patch(args, options))
    },
  })
}

export function usePatchGuildsGuildIdRoles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['roles']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.guilds)[':guild_id']['roles']['$patch']>,
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
  const mutationDefaults = getPatchGuildsGuildIdRolesMutationOptions<TError, TOnMutateResult>(
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

export function getGuildsGuildIdRolesMemberCountsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['roles']['member-counts']['$get']>
  >,
) {
  return ['guilds', '/guilds/:guild_id/roles/member-counts', toValue(args)] as const
}

export function getGuildsGuildIdRolesMemberCountsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['roles']['member-counts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuildsGuildIdRolesMemberCountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id'].roles['member-counts'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuildsGuildIdRolesMemberCounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.guilds)[':guild_id']['roles']['member-counts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['roles']['member-counts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.guilds)[':guild_id']['roles']['member-counts']['$get']>
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
                  ReturnType<(typeof client.guilds)[':guild_id']['roles']['member-counts']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGuildsGuildIdRolesMemberCountsQueryKey>
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
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['roles']['member-counts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsGuildIdRolesMemberCountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuildsGuildIdRolesMemberCountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id'].roles['member-counts'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGuildsGuildIdRolesRoleIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['roles'][':role_id']['$get']>
  >,
) {
  return ['guilds', '/guilds/:guild_id/roles/:role_id', toValue(args)] as const
}

export function getGuildsGuildIdRolesRoleIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['roles'][':role_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuildsGuildIdRolesRoleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id'].roles[':role_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuildsGuildIdRolesRoleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.guilds)[':guild_id']['roles'][':role_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['roles'][':role_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.guilds)[':guild_id']['roles'][':role_id']['$get']>
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
                  ReturnType<(typeof client.guilds)[':guild_id']['roles'][':role_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGuildsGuildIdRolesRoleIdQueryKey>
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
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['roles'][':role_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsGuildIdRolesRoleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuildsGuildIdRolesRoleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id'].roles[':role_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteGuildsGuildIdRolesRoleIdMutationKey() {
  return ['guilds', '/guilds/:guild_id/roles/:role_id', 'DELETE'] as const
}

export function getDeleteGuildsGuildIdRolesRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['roles'][':role_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.guilds)[':guild_id']['roles'][':role_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGuildsGuildIdRolesRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.guilds)[':guild_id']['roles'][':role_id']['$delete']>,
    ) {
      return parseResponse(client.guilds[':guild_id'].roles[':role_id'].$delete(args, options))
    },
  })
}

export function useDeleteGuildsGuildIdRolesRoleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.guilds)[':guild_id']['roles'][':role_id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.guilds)[':guild_id']['roles'][':role_id']['$delete']>,
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
  const mutationDefaults = getDeleteGuildsGuildIdRolesRoleIdMutationOptions<
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

export function getPatchGuildsGuildIdRolesRoleIdMutationKey() {
  return ['guilds', '/guilds/:guild_id/roles/:role_id', 'PATCH'] as const
}

export function getPatchGuildsGuildIdRolesRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['roles'][':role_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.guilds)[':guild_id']['roles'][':role_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchGuildsGuildIdRolesRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.guilds)[':guild_id']['roles'][':role_id']['$patch']>,
    ) {
      return parseResponse(client.guilds[':guild_id'].roles[':role_id'].$patch(args, options))
    },
  })
}

export function usePatchGuildsGuildIdRolesRoleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.guilds)[':guild_id']['roles'][':role_id']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.guilds)[':guild_id']['roles'][':role_id']['$patch']>,
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
  const mutationDefaults = getPatchGuildsGuildIdRolesRoleIdMutationOptions<TError, TOnMutateResult>(
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

export function getGuildsGuildIdScheduledEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['scheduled-events']['$get']>
  >,
) {
  return ['guilds', '/guilds/:guild_id/scheduled-events', toValue(args)] as const
}

export function getGuildsGuildIdScheduledEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['scheduled-events']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuildsGuildIdScheduledEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id']['scheduled-events'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuildsGuildIdScheduledEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.guilds)[':guild_id']['scheduled-events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['scheduled-events']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['scheduled-events']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['scheduled-events']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGuildsGuildIdScheduledEventsQueryKey>
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
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['scheduled-events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsGuildIdScheduledEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuildsGuildIdScheduledEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id']['scheduled-events'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGuildsGuildIdScheduledEventsMutationKey() {
  return ['guilds', '/guilds/:guild_id/scheduled-events', 'POST'] as const
}

export function getPostGuildsGuildIdScheduledEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['scheduled-events']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.guilds)[':guild_id']['scheduled-events']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGuildsGuildIdScheduledEventsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.guilds)[':guild_id']['scheduled-events']['$post']>,
    ) {
      return parseResponse(client.guilds[':guild_id']['scheduled-events'].$post(args, options))
    },
  })
}

export function usePostGuildsGuildIdScheduledEvents<
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
                  ReturnType<(typeof client.guilds)[':guild_id']['scheduled-events']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.guilds)[':guild_id']['scheduled-events']['$post']>,
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
  const mutationDefaults = getPostGuildsGuildIdScheduledEventsMutationOptions<
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

export function getGuildsGuildIdScheduledEventsGuildScheduledEventIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['$get']
    >
  >,
) {
  return [
    'guilds',
    '/guilds/:guild_id/scheduled-events/:guild_scheduled_event_id',
    toValue(args),
  ] as const
}

export function getGuildsGuildIdScheduledEventsGuildScheduledEventIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuildsGuildIdScheduledEventsGuildScheduledEventIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id']['scheduled-events'][':guild_scheduled_event_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useGuildsGuildIdScheduledEventsGuildScheduledEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['$get']
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
                    (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['$get']
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
                    (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGuildsGuildIdScheduledEventsGuildScheduledEventIdQueryKey>
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
              (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsGuildIdScheduledEventsGuildScheduledEventIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuildsGuildIdScheduledEventsGuildScheduledEventIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id']['scheduled-events'][':guild_scheduled_event_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteGuildsGuildIdScheduledEventsGuildScheduledEventIdMutationKey() {
  return [
    'guilds',
    '/guilds/:guild_id/scheduled-events/:guild_scheduled_event_id',
    'DELETE',
  ] as const
}

export function getDeleteGuildsGuildIdScheduledEventsGuildScheduledEventIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteGuildsGuildIdScheduledEventsGuildScheduledEventIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.guilds[':guild_id']['scheduled-events'][':guild_scheduled_event_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteGuildsGuildIdScheduledEventsGuildScheduledEventId<
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
                      (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['$delete']
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
    getDeleteGuildsGuildIdScheduledEventsGuildScheduledEventIdMutationOptions<
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

export function getPatchGuildsGuildIdScheduledEventsGuildScheduledEventIdMutationKey() {
  return [
    'guilds',
    '/guilds/:guild_id/scheduled-events/:guild_scheduled_event_id',
    'PATCH',
  ] as const
}

export function getPatchGuildsGuildIdScheduledEventsGuildScheduledEventIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchGuildsGuildIdScheduledEventsGuildScheduledEventIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.guilds[':guild_id']['scheduled-events'][':guild_scheduled_event_id'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchGuildsGuildIdScheduledEventsGuildScheduledEventId<
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
                    (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['$patch']
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
  const mutationDefaults = getPatchGuildsGuildIdScheduledEventsGuildScheduledEventIdMutationOptions<
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

export function getPostGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsMutationKey() {
  return [
    'guilds',
    '/guilds/:guild_id/scheduled-events/:guild_scheduled_event_id/exceptions',
    'POST',
  ] as const
}

export function getPostGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['exceptions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['exceptions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['exceptions']['$post']
      >,
    ) {
      return parseResponse(
        client.guilds[':guild_id']['scheduled-events'][
          ':guild_scheduled_event_id'
        ].exceptions.$post(args, options),
      )
    },
  })
}

export function usePostGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptions<
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
                    (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['exceptions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['exceptions']['$post']
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
    getPostGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsMutationOptions<
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

export function getDeleteGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsExceptionIdMutationKey() {
  return [
    'guilds',
    '/guilds/:guild_id/scheduled-events/:guild_scheduled_event_id/exceptions/:exception_id',
    'DELETE',
  ] as const
}

export function getDeleteGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsExceptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['exceptions'][':exception_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['exceptions'][':exception_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsExceptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['exceptions'][':exception_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.guilds[':guild_id']['scheduled-events'][':guild_scheduled_event_id'].exceptions[
          ':exception_id'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsExceptionId<
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
                      (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['exceptions'][':exception_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['exceptions'][':exception_id']['$delete']
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
    getDeleteGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsExceptionIdMutationOptions<
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

export function getPatchGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsExceptionIdMutationKey() {
  return [
    'guilds',
    '/guilds/:guild_id/scheduled-events/:guild_scheduled_event_id/exceptions/:exception_id',
    'PATCH',
  ] as const
}

export function getPatchGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsExceptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['exceptions'][':exception_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['exceptions'][':exception_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsExceptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['exceptions'][':exception_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.guilds[':guild_id']['scheduled-events'][':guild_scheduled_event_id'].exceptions[
          ':exception_id'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsExceptionId<
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
                    (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['exceptions'][':exception_id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['exceptions'][':exception_id']['$patch']
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
    getPatchGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsExceptionIdMutationOptions<
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

export function getGuildsGuildIdScheduledEventsGuildScheduledEventIdUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['users']['$get']
    >
  >,
) {
  return [
    'guilds',
    '/guilds/:guild_id/scheduled-events/:guild_scheduled_event_id/users',
    toValue(args),
  ] as const
}

export function getGuildsGuildIdScheduledEventsGuildScheduledEventIdUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['users']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getGuildsGuildIdScheduledEventsGuildScheduledEventIdUsersQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id']['scheduled-events'][':guild_scheduled_event_id'].users.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useGuildsGuildIdScheduledEventsGuildScheduledEventIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['users']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['users']['$get']
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
                    (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['users']['$get']
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
                    (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['users']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGuildsGuildIdScheduledEventsGuildScheduledEventIdUsersQueryKey>
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
              (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['users']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsGuildIdScheduledEventsGuildScheduledEventIdUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getGuildsGuildIdScheduledEventsGuildScheduledEventIdUsersQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id']['scheduled-events'][':guild_scheduled_event_id'].users.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getGuildsGuildIdScheduledEventsGuildScheduledEventIdUsersCountsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['users']['counts']['$get']
    >
  >,
) {
  return [
    'guilds',
    '/guilds/:guild_id/scheduled-events/:guild_scheduled_event_id/users/counts',
    toValue(args),
  ] as const
}

export function getGuildsGuildIdScheduledEventsGuildScheduledEventIdUsersCountsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['users']['counts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getGuildsGuildIdScheduledEventsGuildScheduledEventIdUsersCountsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id']['scheduled-events'][
          ':guild_scheduled_event_id'
        ].users.counts.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGuildsGuildIdScheduledEventsGuildScheduledEventIdUsersCounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['users']['counts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['users']['counts']['$get']
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
                    (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['users']['counts']['$get']
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
                    (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['users']['counts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGuildsGuildIdScheduledEventsGuildScheduledEventIdUsersCountsQueryKey>
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
              (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['users']['counts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsGuildIdScheduledEventsGuildScheduledEventIdUsersCountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getGuildsGuildIdScheduledEventsGuildScheduledEventIdUsersCountsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id']['scheduled-events'][
            ':guild_scheduled_event_id'
          ].users.counts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGuildsGuildIdScheduledEventsGuildScheduledEventIdGuildScheduledEventExceptionIdUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id'][':guild_scheduled_event_exception_id']['users']['$get']
    >
  >,
) {
  return [
    'guilds',
    '/guilds/:guild_id/scheduled-events/:guild_scheduled_event_id/:guild_scheduled_event_exception_id/users',
    toValue(args),
  ] as const
}

export function getGuildsGuildIdScheduledEventsGuildScheduledEventIdGuildScheduledEventExceptionIdUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id'][':guild_scheduled_event_exception_id']['users']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getGuildsGuildIdScheduledEventsGuildScheduledEventIdGuildScheduledEventExceptionIdUsersQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id']['scheduled-events'][':guild_scheduled_event_id'][
          ':guild_scheduled_event_exception_id'
        ].users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGuildsGuildIdScheduledEventsGuildScheduledEventIdGuildScheduledEventExceptionIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id'][':guild_scheduled_event_exception_id']['users']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id'][':guild_scheduled_event_exception_id']['users']['$get']
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
                    (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id'][':guild_scheduled_event_exception_id']['users']['$get']
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
                    (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id'][':guild_scheduled_event_exception_id']['users']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getGuildsGuildIdScheduledEventsGuildScheduledEventIdGuildScheduledEventExceptionIdUsersQueryKey
          >
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
              (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id'][':guild_scheduled_event_exception_id']['users']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getGuildsGuildIdScheduledEventsGuildScheduledEventIdGuildScheduledEventExceptionIdUsersQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getGuildsGuildIdScheduledEventsGuildScheduledEventIdGuildScheduledEventExceptionIdUsersQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id']['scheduled-events'][':guild_scheduled_event_id'][
            ':guild_scheduled_event_exception_id'
          ].users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGuildsGuildIdSoundboardSoundsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['soundboard-sounds']['$get']>
  >,
) {
  return ['guilds', '/guilds/:guild_id/soundboard-sounds', toValue(args)] as const
}

export function getGuildsGuildIdSoundboardSoundsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['soundboard-sounds']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuildsGuildIdSoundboardSoundsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id']['soundboard-sounds'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuildsGuildIdSoundboardSounds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.guilds)[':guild_id']['soundboard-sounds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['soundboard-sounds']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.guilds)[':guild_id']['soundboard-sounds']['$get']>
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
                  ReturnType<(typeof client.guilds)[':guild_id']['soundboard-sounds']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGuildsGuildIdSoundboardSoundsQueryKey>
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
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['soundboard-sounds']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsGuildIdSoundboardSoundsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuildsGuildIdSoundboardSoundsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id']['soundboard-sounds'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGuildsGuildIdSoundboardSoundsMutationKey() {
  return ['guilds', '/guilds/:guild_id/soundboard-sounds', 'POST'] as const
}

export function getPostGuildsGuildIdSoundboardSoundsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['soundboard-sounds']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.guilds)[':guild_id']['soundboard-sounds']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGuildsGuildIdSoundboardSoundsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.guilds)[':guild_id']['soundboard-sounds']['$post']>,
    ) {
      return parseResponse(client.guilds[':guild_id']['soundboard-sounds'].$post(args, options))
    },
  })
}

export function usePostGuildsGuildIdSoundboardSounds<
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
                  ReturnType<(typeof client.guilds)[':guild_id']['soundboard-sounds']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.guilds)[':guild_id']['soundboard-sounds']['$post']>,
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
  const mutationDefaults = getPostGuildsGuildIdSoundboardSoundsMutationOptions<
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

export function getGuildsGuildIdSoundboardSoundsSoundIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['soundboard-sounds'][':sound_id']['$get']>
  >,
) {
  return ['guilds', '/guilds/:guild_id/soundboard-sounds/:sound_id', toValue(args)] as const
}

export function getGuildsGuildIdSoundboardSoundsSoundIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['soundboard-sounds'][':sound_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuildsGuildIdSoundboardSoundsSoundIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id']['soundboard-sounds'][':sound_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuildsGuildIdSoundboardSoundsSoundId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.guilds)[':guild_id']['soundboard-sounds'][':sound_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['soundboard-sounds'][':sound_id']['$get']>
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
                    (typeof client.guilds)[':guild_id']['soundboard-sounds'][':sound_id']['$get']
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
                    (typeof client.guilds)[':guild_id']['soundboard-sounds'][':sound_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGuildsGuildIdSoundboardSoundsSoundIdQueryKey>
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
              (typeof client.guilds)[':guild_id']['soundboard-sounds'][':sound_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsGuildIdSoundboardSoundsSoundIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuildsGuildIdSoundboardSoundsSoundIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id']['soundboard-sounds'][':sound_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteGuildsGuildIdSoundboardSoundsSoundIdMutationKey() {
  return ['guilds', '/guilds/:guild_id/soundboard-sounds/:sound_id', 'DELETE'] as const
}

export function getDeleteGuildsGuildIdSoundboardSoundsSoundIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.guilds)[':guild_id']['soundboard-sounds'][':sound_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.guilds)[':guild_id']['soundboard-sounds'][':sound_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteGuildsGuildIdSoundboardSoundsSoundIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.guilds)[':guild_id']['soundboard-sounds'][':sound_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.guilds[':guild_id']['soundboard-sounds'][':sound_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteGuildsGuildIdSoundboardSoundsSoundId<
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
                      (typeof client.guilds)[':guild_id']['soundboard-sounds'][':sound_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.guilds)[':guild_id']['soundboard-sounds'][':sound_id']['$delete']
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
  const mutationDefaults = getDeleteGuildsGuildIdSoundboardSoundsSoundIdMutationOptions<
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

export function getPatchGuildsGuildIdSoundboardSoundsSoundIdMutationKey() {
  return ['guilds', '/guilds/:guild_id/soundboard-sounds/:sound_id', 'PATCH'] as const
}

export function getPatchGuildsGuildIdSoundboardSoundsSoundIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.guilds)[':guild_id']['soundboard-sounds'][':sound_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.guilds)[':guild_id']['soundboard-sounds'][':sound_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchGuildsGuildIdSoundboardSoundsSoundIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.guilds)[':guild_id']['soundboard-sounds'][':sound_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.guilds[':guild_id']['soundboard-sounds'][':sound_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchGuildsGuildIdSoundboardSoundsSoundId<
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
                    (typeof client.guilds)[':guild_id']['soundboard-sounds'][':sound_id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.guilds)[':guild_id']['soundboard-sounds'][':sound_id']['$patch']
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
  const mutationDefaults = getPatchGuildsGuildIdSoundboardSoundsSoundIdMutationOptions<
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

export function getGuildsGuildIdStickersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds)[':guild_id']['stickers']['$get']>>,
) {
  return ['guilds', '/guilds/:guild_id/stickers', toValue(args)] as const
}

export function getGuildsGuildIdStickersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds)[':guild_id']['stickers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuildsGuildIdStickersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id'].stickers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuildsGuildIdStickers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.guilds)[':guild_id']['stickers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds)[':guild_id']['stickers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['stickers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['stickers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGuildsGuildIdStickersQueryKey>
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
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['stickers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsGuildIdStickersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuildsGuildIdStickersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id'].stickers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGuildsGuildIdStickersMutationKey() {
  return ['guilds', '/guilds/:guild_id/stickers', 'POST'] as const
}

export function getPostGuildsGuildIdStickersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['stickers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.guilds)[':guild_id']['stickers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGuildsGuildIdStickersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.guilds)[':guild_id']['stickers']['$post']>,
    ) {
      return parseResponse(client.guilds[':guild_id'].stickers.$post(args, options))
    },
  })
}

export function usePostGuildsGuildIdStickers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['stickers']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.guilds)[':guild_id']['stickers']['$post']>,
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
  const mutationDefaults = getPostGuildsGuildIdStickersMutationOptions<TError, TOnMutateResult>(
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

export function getGuildsGuildIdStickersStickerIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['stickers'][':sticker_id']['$get']>
  >,
) {
  return ['guilds', '/guilds/:guild_id/stickers/:sticker_id', toValue(args)] as const
}

export function getGuildsGuildIdStickersStickerIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['stickers'][':sticker_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuildsGuildIdStickersStickerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id'].stickers[':sticker_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuildsGuildIdStickersStickerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.guilds)[':guild_id']['stickers'][':sticker_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['stickers'][':sticker_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.guilds)[':guild_id']['stickers'][':sticker_id']['$get']>
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
                  ReturnType<(typeof client.guilds)[':guild_id']['stickers'][':sticker_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGuildsGuildIdStickersStickerIdQueryKey>
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
            ReturnType<(typeof client.guilds)[':guild_id']['stickers'][':sticker_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsGuildIdStickersStickerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuildsGuildIdStickersStickerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id'].stickers[':sticker_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteGuildsGuildIdStickersStickerIdMutationKey() {
  return ['guilds', '/guilds/:guild_id/stickers/:sticker_id', 'DELETE'] as const
}

export function getDeleteGuildsGuildIdStickersStickerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.guilds)[':guild_id']['stickers'][':sticker_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.guilds)[':guild_id']['stickers'][':sticker_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGuildsGuildIdStickersStickerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.guilds)[':guild_id']['stickers'][':sticker_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.guilds[':guild_id'].stickers[':sticker_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteGuildsGuildIdStickersStickerId<
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
                      (typeof client.guilds)[':guild_id']['stickers'][':sticker_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.guilds)[':guild_id']['stickers'][':sticker_id']['$delete']
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
  const mutationDefaults = getDeleteGuildsGuildIdStickersStickerIdMutationOptions<
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

export function getPatchGuildsGuildIdStickersStickerIdMutationKey() {
  return ['guilds', '/guilds/:guild_id/stickers/:sticker_id', 'PATCH'] as const
}

export function getPatchGuildsGuildIdStickersStickerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.guilds)[':guild_id']['stickers'][':sticker_id']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.guilds)[':guild_id']['stickers'][':sticker_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchGuildsGuildIdStickersStickerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.guilds)[':guild_id']['stickers'][':sticker_id']['$patch']
      >,
    ) {
      return parseResponse(client.guilds[':guild_id'].stickers[':sticker_id'].$patch(args, options))
    },
  })
}

export function usePatchGuildsGuildIdStickersStickerId<
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
                    (typeof client.guilds)[':guild_id']['stickers'][':sticker_id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.guilds)[':guild_id']['stickers'][':sticker_id']['$patch']
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
  const mutationDefaults = getPatchGuildsGuildIdStickersStickerIdMutationOptions<
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

export function getGuildsGuildIdTemplatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['templates']['$get']>
  >,
) {
  return ['guilds', '/guilds/:guild_id/templates', toValue(args)] as const
}

export function getGuildsGuildIdTemplatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['templates']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuildsGuildIdTemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id'].templates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuildsGuildIdTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.guilds)[':guild_id']['templates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['templates']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['templates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['templates']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGuildsGuildIdTemplatesQueryKey>
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
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['templates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsGuildIdTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuildsGuildIdTemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id'].templates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGuildsGuildIdTemplatesMutationKey() {
  return ['guilds', '/guilds/:guild_id/templates', 'POST'] as const
}

export function getPostGuildsGuildIdTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['templates']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.guilds)[':guild_id']['templates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGuildsGuildIdTemplatesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.guilds)[':guild_id']['templates']['$post']>,
    ) {
      return parseResponse(client.guilds[':guild_id'].templates.$post(args, options))
    },
  })
}

export function usePostGuildsGuildIdTemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['templates']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.guilds)[':guild_id']['templates']['$post']>,
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
  const mutationDefaults = getPostGuildsGuildIdTemplatesMutationOptions<TError, TOnMutateResult>(
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

export function getPutGuildsGuildIdTemplatesCodeMutationKey() {
  return ['guilds', '/guilds/:guild_id/templates/:code', 'PUT'] as const
}

export function getPutGuildsGuildIdTemplatesCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['templates'][':code']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.guilds)[':guild_id']['templates'][':code']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGuildsGuildIdTemplatesCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.guilds)[':guild_id']['templates'][':code']['$put']>,
    ) {
      return parseResponse(client.guilds[':guild_id'].templates[':code'].$put(args, options))
    },
  })
}

export function usePutGuildsGuildIdTemplatesCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.guilds)[':guild_id']['templates'][':code']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.guilds)[':guild_id']['templates'][':code']['$put']>,
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
  const mutationDefaults = getPutGuildsGuildIdTemplatesCodeMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteGuildsGuildIdTemplatesCodeMutationKey() {
  return ['guilds', '/guilds/:guild_id/templates/:code', 'DELETE'] as const
}

export function getDeleteGuildsGuildIdTemplatesCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['templates'][':code']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.guilds)[':guild_id']['templates'][':code']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGuildsGuildIdTemplatesCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.guilds)[':guild_id']['templates'][':code']['$delete']>,
    ) {
      return parseResponse(client.guilds[':guild_id'].templates[':code'].$delete(args, options))
    },
  })
}

export function useDeleteGuildsGuildIdTemplatesCode<
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
                  ReturnType<(typeof client.guilds)[':guild_id']['templates'][':code']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.guilds)[':guild_id']['templates'][':code']['$delete']>,
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
  const mutationDefaults = getDeleteGuildsGuildIdTemplatesCodeMutationOptions<
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

export function getPatchGuildsGuildIdTemplatesCodeMutationKey() {
  return ['guilds', '/guilds/:guild_id/templates/:code', 'PATCH'] as const
}

export function getPatchGuildsGuildIdTemplatesCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['templates'][':code']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.guilds)[':guild_id']['templates'][':code']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchGuildsGuildIdTemplatesCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.guilds)[':guild_id']['templates'][':code']['$patch']>,
    ) {
      return parseResponse(client.guilds[':guild_id'].templates[':code'].$patch(args, options))
    },
  })
}

export function usePatchGuildsGuildIdTemplatesCode<
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
                  ReturnType<(typeof client.guilds)[':guild_id']['templates'][':code']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.guilds)[':guild_id']['templates'][':code']['$patch']>,
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
  const mutationDefaults = getPatchGuildsGuildIdTemplatesCodeMutationOptions<
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

export function getGuildsGuildIdThreadsActiveQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['threads']['active']['$get']>
  >,
) {
  return ['guilds', '/guilds/:guild_id/threads/active', toValue(args)] as const
}

export function getGuildsGuildIdThreadsActiveQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['threads']['active']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuildsGuildIdThreadsActiveQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id'].threads.active.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuildsGuildIdThreadsActive<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.guilds)[':guild_id']['threads']['active']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['threads']['active']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.guilds)[':guild_id']['threads']['active']['$get']>
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
                  ReturnType<(typeof client.guilds)[':guild_id']['threads']['active']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGuildsGuildIdThreadsActiveQueryKey>
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
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['threads']['active']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsGuildIdThreadsActiveQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuildsGuildIdThreadsActiveQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id'].threads.active.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGuildsGuildIdVanityUrlQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['vanity-url']['$get']>
  >,
) {
  return ['guilds', '/guilds/:guild_id/vanity-url', toValue(args)] as const
}

export function getGuildsGuildIdVanityUrlQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['vanity-url']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuildsGuildIdVanityUrlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id']['vanity-url'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuildsGuildIdVanityUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.guilds)[':guild_id']['vanity-url']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['vanity-url']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['vanity-url']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['vanity-url']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGuildsGuildIdVanityUrlQueryKey>
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
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['vanity-url']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsGuildIdVanityUrlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuildsGuildIdVanityUrlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id']['vanity-url'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGuildsGuildIdVoiceStatesMeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['voice-states']['@me']['$get']>
  >,
) {
  return ['guilds', '/guilds/:guild_id/voice-states/@me', toValue(args)] as const
}

export function getGuildsGuildIdVoiceStatesMeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['voice-states']['@me']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuildsGuildIdVoiceStatesMeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id']['voice-states']['@me'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuildsGuildIdVoiceStatesMe<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.guilds)[':guild_id']['voice-states']['@me']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['voice-states']['@me']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.guilds)[':guild_id']['voice-states']['@me']['$get']>
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
                  ReturnType<(typeof client.guilds)[':guild_id']['voice-states']['@me']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGuildsGuildIdVoiceStatesMeQueryKey>
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
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['voice-states']['@me']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsGuildIdVoiceStatesMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuildsGuildIdVoiceStatesMeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id']['voice-states']['@me'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchGuildsGuildIdVoiceStatesMeMutationKey() {
  return ['guilds', '/guilds/:guild_id/voice-states/@me', 'PATCH'] as const
}

export function getPatchGuildsGuildIdVoiceStatesMeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.guilds)[':guild_id']['voice-states']['@me']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.guilds)[':guild_id']['voice-states']['@me']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchGuildsGuildIdVoiceStatesMeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.guilds)[':guild_id']['voice-states']['@me']['$patch']>,
    ) {
      return parseResponse(client.guilds[':guild_id']['voice-states']['@me'].$patch(args, options))
    },
  })
}

export function usePatchGuildsGuildIdVoiceStatesMe<
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
                    ReturnType<(typeof client.guilds)[':guild_id']['voice-states']['@me']['$patch']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.guilds)[':guild_id']['voice-states']['@me']['$patch']>,
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
  const mutationDefaults = getPatchGuildsGuildIdVoiceStatesMeMutationOptions<
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

export function getGuildsGuildIdVoiceStatesUserIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['voice-states'][':user_id']['$get']>
  >,
) {
  return ['guilds', '/guilds/:guild_id/voice-states/:user_id', toValue(args)] as const
}

export function getGuildsGuildIdVoiceStatesUserIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['voice-states'][':user_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuildsGuildIdVoiceStatesUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id']['voice-states'][':user_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuildsGuildIdVoiceStatesUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.guilds)[':guild_id']['voice-states'][':user_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['voice-states'][':user_id']['$get']>
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
                    (typeof client.guilds)[':guild_id']['voice-states'][':user_id']['$get']
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
                    (typeof client.guilds)[':guild_id']['voice-states'][':user_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGuildsGuildIdVoiceStatesUserIdQueryKey>
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
            ReturnType<(typeof client.guilds)[':guild_id']['voice-states'][':user_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsGuildIdVoiceStatesUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuildsGuildIdVoiceStatesUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id']['voice-states'][':user_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchGuildsGuildIdVoiceStatesUserIdMutationKey() {
  return ['guilds', '/guilds/:guild_id/voice-states/:user_id', 'PATCH'] as const
}

export function getPatchGuildsGuildIdVoiceStatesUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.guilds)[':guild_id']['voice-states'][':user_id']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.guilds)[':guild_id']['voice-states'][':user_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchGuildsGuildIdVoiceStatesUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.guilds)[':guild_id']['voice-states'][':user_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.guilds[':guild_id']['voice-states'][':user_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchGuildsGuildIdVoiceStatesUserId<
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
                      (typeof client.guilds)[':guild_id']['voice-states'][':user_id']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.guilds)[':guild_id']['voice-states'][':user_id']['$patch']
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
  const mutationDefaults = getPatchGuildsGuildIdVoiceStatesUserIdMutationOptions<
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

export function getGuildsGuildIdWebhooksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds)[':guild_id']['webhooks']['$get']>>,
) {
  return ['guilds', '/guilds/:guild_id/webhooks', toValue(args)] as const
}

export function getGuildsGuildIdWebhooksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds)[':guild_id']['webhooks']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuildsGuildIdWebhooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id'].webhooks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuildsGuildIdWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.guilds)[':guild_id']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds)[':guild_id']['webhooks']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['webhooks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['webhooks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGuildsGuildIdWebhooksQueryKey>
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
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['webhooks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsGuildIdWebhooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuildsGuildIdWebhooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id'].webhooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGuildsGuildIdWelcomeScreenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['welcome-screen']['$get']>
  >,
) {
  return ['guilds', '/guilds/:guild_id/welcome-screen', toValue(args)] as const
}

export function getGuildsGuildIdWelcomeScreenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['welcome-screen']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuildsGuildIdWelcomeScreenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id']['welcome-screen'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuildsGuildIdWelcomeScreen<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.guilds)[':guild_id']['welcome-screen']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['welcome-screen']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['welcome-screen']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['welcome-screen']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGuildsGuildIdWelcomeScreenQueryKey>
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
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['welcome-screen']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsGuildIdWelcomeScreenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuildsGuildIdWelcomeScreenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id']['welcome-screen'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchGuildsGuildIdWelcomeScreenMutationKey() {
  return ['guilds', '/guilds/:guild_id/welcome-screen', 'PATCH'] as const
}

export function getPatchGuildsGuildIdWelcomeScreenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['welcome-screen']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.guilds)[':guild_id']['welcome-screen']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchGuildsGuildIdWelcomeScreenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.guilds)[':guild_id']['welcome-screen']['$patch']>,
    ) {
      return parseResponse(client.guilds[':guild_id']['welcome-screen'].$patch(args, options))
    },
  })
}

export function usePatchGuildsGuildIdWelcomeScreen<
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
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['welcome-screen']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.guilds)[':guild_id']['welcome-screen']['$patch']>,
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
  const mutationDefaults = getPatchGuildsGuildIdWelcomeScreenMutationOptions<
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

export function getGuildsGuildIdWidgetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds)[':guild_id']['widget']['$get']>>,
) {
  return ['guilds', '/guilds/:guild_id/widget', toValue(args)] as const
}

export function getGuildsGuildIdWidgetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds)[':guild_id']['widget']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuildsGuildIdWidgetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id'].widget.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuildsGuildIdWidget<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.guilds)[':guild_id']['widget']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.guilds)[':guild_id']['widget']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['widget']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['widget']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGuildsGuildIdWidgetQueryKey>
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
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['widget']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsGuildIdWidgetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuildsGuildIdWidgetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id'].widget.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchGuildsGuildIdWidgetMutationKey() {
  return ['guilds', '/guilds/:guild_id/widget', 'PATCH'] as const
}

export function getPatchGuildsGuildIdWidgetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['widget']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.guilds)[':guild_id']['widget']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchGuildsGuildIdWidgetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.guilds)[':guild_id']['widget']['$patch']>,
    ) {
      return parseResponse(client.guilds[':guild_id'].widget.$patch(args, options))
    },
  })
}

export function usePatchGuildsGuildIdWidget<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['widget']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.guilds)[':guild_id']['widget']['$patch']>,
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
  const mutationDefaults = getPatchGuildsGuildIdWidgetMutationOptions<TError, TOnMutateResult>(
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

export function getGuildsGuildIdWidgetJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['widget.json']['$get']>
  >,
) {
  return ['guilds', '/guilds/:guild_id/widget.json', toValue(args)] as const
}

export function getGuildsGuildIdWidgetJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['widget.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuildsGuildIdWidgetJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id']['widget.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuildsGuildIdWidgetJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.guilds)[':guild_id']['widget.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['widget.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['widget.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['widget.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGuildsGuildIdWidgetJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['widget.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsGuildIdWidgetJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuildsGuildIdWidgetJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id']['widget.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGuildsGuildIdWidgetPngQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['widget.png']['$get']>
  >,
) {
  return ['guilds', '/guilds/:guild_id/widget.png', toValue(args)] as const
}

export function getGuildsGuildIdWidgetPngQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['widget.png']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGuildsGuildIdWidgetPngQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.guilds[':guild_id']['widget.png'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGuildsGuildIdWidgetPng<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.guilds)[':guild_id']['widget.png']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.guilds)[':guild_id']['widget.png']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['widget.png']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.guilds)[':guild_id']['widget.png']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGuildsGuildIdWidgetPngQueryKey>
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
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['widget.png']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGuildsGuildIdWidgetPngQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGuildsGuildIdWidgetPngQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.guilds[':guild_id']['widget.png'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostInteractionsInteractionIdInteractionTokenCallbackMutationKey() {
  return [
    'interactions',
    '/interactions/:interaction_id/:interaction_token/callback',
    'POST',
  ] as const
}

export function getPostInteractionsInteractionIdInteractionTokenCallbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.interactions)[':interaction_id'][':interaction_token']['callback']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.interactions)[':interaction_id'][':interaction_token']['callback']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostInteractionsInteractionIdInteractionTokenCallbackMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.interactions)[':interaction_id'][':interaction_token']['callback']['$post']
      >,
    ) {
      return parseResponse(
        client.interactions[':interaction_id'][':interaction_token'].callback.$post(args, options),
      )
    },
  })
}

export function usePostInteractionsInteractionIdInteractionTokenCallback<
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
                      (typeof client.interactions)[':interaction_id'][':interaction_token']['callback']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.interactions)[':interaction_id'][':interaction_token']['callback']['$post']
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
  const mutationDefaults = getPostInteractionsInteractionIdInteractionTokenCallbackMutationOptions<
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

export function getInvitesCodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.invites)[':code']['$get']>>,
) {
  return ['invites', '/invites/:code', toValue(args)] as const
}

export function getInvitesCodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.invites)[':code']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInvitesCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.invites[':code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInvitesCode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.invites)[':code']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.invites)[':code']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.invites)[':code']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.invites)[':code']['$get']>>>
            >
          >,
          ReturnType<typeof getInvitesCodeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.invites)[':code']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInvitesCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInvitesCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.invites[':code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteInvitesCodeMutationKey() {
  return ['invites', '/invites/:code', 'DELETE'] as const
}

export function getDeleteInvitesCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.invites)[':code']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.invites)[':code']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteInvitesCodeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.invites)[':code']['$delete']>) {
      return parseResponse(client.invites[':code'].$delete(args, options))
    },
  })
}

export function useDeleteInvitesCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.invites)[':code']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.invites)[':code']['$delete']>,
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
  const mutationDefaults = getDeleteInvitesCodeMutationOptions<TError, TOnMutateResult>(
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

export function getInvitesCodeTargetUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.invites)[':code']['target-users']['$get']>
  >,
) {
  return ['invites', '/invites/:code/target-users', toValue(args)] as const
}

export function getInvitesCodeTargetUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.invites)[':code']['target-users']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInvitesCodeTargetUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.invites[':code']['target-users'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInvitesCodeTargetUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.invites)[':code']['target-users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.invites)[':code']['target-users']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.invites)[':code']['target-users']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.invites)[':code']['target-users']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInvitesCodeTargetUsersQueryKey>
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
          Awaited<ReturnType<(typeof client.invites)[':code']['target-users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInvitesCodeTargetUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInvitesCodeTargetUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.invites[':code']['target-users'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutInvitesCodeTargetUsersMutationKey() {
  return ['invites', '/invites/:code/target-users', 'PUT'] as const
}

export function getPutInvitesCodeTargetUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.invites)[':code']['target-users']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.invites)[':code']['target-users']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutInvitesCodeTargetUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.invites)[':code']['target-users']['$put']>,
    ) {
      return parseResponse(client.invites[':code']['target-users'].$put(args, options))
    },
  })
}

export function usePutInvitesCodeTargetUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.invites)[':code']['target-users']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.invites)[':code']['target-users']['$put']>,
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
  const mutationDefaults = getPutInvitesCodeTargetUsersMutationOptions<TError, TOnMutateResult>(
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

export function getPostInvitesCodeTargetUsersBulkAddMutationKey() {
  return ['invites', '/invites/:code/target-users/bulk-add', 'POST'] as const
}

export function getPostInvitesCodeTargetUsersBulkAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.invites)[':code']['target-users']['bulk-add']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.invites)[':code']['target-users']['bulk-add']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInvitesCodeTargetUsersBulkAddMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.invites)[':code']['target-users']['bulk-add']['$post']>,
    ) {
      return parseResponse(client.invites[':code']['target-users']['bulk-add'].$post(args, options))
    },
  })
}

export function usePostInvitesCodeTargetUsersBulkAdd<
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
                      (typeof client.invites)[':code']['target-users']['bulk-add']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.invites)[':code']['target-users']['bulk-add']['$post']>,
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
  const mutationDefaults = getPostInvitesCodeTargetUsersBulkAddMutationOptions<
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

export function getPostInvitesCodeTargetUsersBulkDeleteMutationKey() {
  return ['invites', '/invites/:code/target-users/bulk-delete', 'POST'] as const
}

export function getPostInvitesCodeTargetUsersBulkDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.invites)[':code']['target-users']['bulk-delete']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.invites)[':code']['target-users']['bulk-delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInvitesCodeTargetUsersBulkDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.invites)[':code']['target-users']['bulk-delete']['$post']
      >,
    ) {
      return parseResponse(
        client.invites[':code']['target-users']['bulk-delete'].$post(args, options),
      )
    },
  })
}

export function usePostInvitesCodeTargetUsersBulkDelete<
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
                      (typeof client.invites)[':code']['target-users']['bulk-delete']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.invites)[':code']['target-users']['bulk-delete']['$post']
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
  const mutationDefaults = getPostInvitesCodeTargetUsersBulkDeleteMutationOptions<
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

export function getInvitesCodeTargetUsersJobStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.invites)[':code']['target-users']['job-status']['$get']>
  >,
) {
  return ['invites', '/invites/:code/target-users/job-status', toValue(args)] as const
}

export function getInvitesCodeTargetUsersJobStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.invites)[':code']['target-users']['job-status']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInvitesCodeTargetUsersJobStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.invites[':code']['target-users']['job-status'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInvitesCodeTargetUsersJobStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.invites)[':code']['target-users']['job-status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.invites)[':code']['target-users']['job-status']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.invites)[':code']['target-users']['job-status']['$get']>
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
                  ReturnType<(typeof client.invites)[':code']['target-users']['job-status']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getInvitesCodeTargetUsersJobStatusQueryKey>
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
            ReturnType<(typeof client.invites)[':code']['target-users']['job-status']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInvitesCodeTargetUsersJobStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInvitesCodeTargetUsersJobStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.invites[':code']['target-users']['job-status'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutInvitesCodeTargetUsersUserIdMutationKey() {
  return ['invites', '/invites/:code/target-users/:user_id', 'PUT'] as const
}

export function getPutInvitesCodeTargetUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.invites)[':code']['target-users'][':user_id']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.invites)[':code']['target-users'][':user_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutInvitesCodeTargetUsersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.invites)[':code']['target-users'][':user_id']['$put']>,
    ) {
      return parseResponse(client.invites[':code']['target-users'][':user_id'].$put(args, options))
    },
  })
}

export function usePutInvitesCodeTargetUsersUserId<
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
                    ReturnType<(typeof client.invites)[':code']['target-users'][':user_id']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.invites)[':code']['target-users'][':user_id']['$put']>,
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
  const mutationDefaults = getPutInvitesCodeTargetUsersUserIdMutationOptions<
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

export function getDeleteInvitesCodeTargetUsersUserIdMutationKey() {
  return ['invites', '/invites/:code/target-users/:user_id', 'DELETE'] as const
}

export function getDeleteInvitesCodeTargetUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.invites)[':code']['target-users'][':user_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.invites)[':code']['target-users'][':user_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteInvitesCodeTargetUsersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.invites)[':code']['target-users'][':user_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.invites[':code']['target-users'][':user_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteInvitesCodeTargetUsersUserId<
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
                      (typeof client.invites)[':code']['target-users'][':user_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.invites)[':code']['target-users'][':user_id']['$delete']>,
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
  const mutationDefaults = getDeleteInvitesCodeTargetUsersUserIdMutationOptions<
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

export function getPutLobbiesMutationKey() {
  return ['lobbies', '/lobbies', 'PUT'] as const
}

export function getPutLobbiesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lobbies.$put>>>>>,
    TError,
    InferRequestType<typeof client.lobbies.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutLobbiesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.lobbies.$put>) {
      return parseResponse(client.lobbies.$put(args, options))
    },
  })
}

export function usePutLobbies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lobbies.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.lobbies.$put>,
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
  const mutationDefaults = getPutLobbiesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostLobbiesMutationKey() {
  return ['lobbies', '/lobbies', 'POST'] as const
}

export function getPostLobbiesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lobbies.$post>>>>>,
    TError,
    InferRequestType<typeof client.lobbies.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLobbiesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.lobbies.$post>) {
      return parseResponse(client.lobbies.$post(args, options))
    },
  })
}

export function usePostLobbies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lobbies.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.lobbies.$post>,
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
  const mutationDefaults = getPostLobbiesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLobbiesLobbyIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lobbies)[':lobby_id']['$get']>>,
) {
  return ['lobbies', '/lobbies/:lobby_id', toValue(args)] as const
}

export function getLobbiesLobbyIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lobbies)[':lobby_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLobbiesLobbyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lobbies[':lobby_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLobbiesLobbyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lobbies)[':lobby_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lobbies)[':lobby_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lobbies)[':lobby_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lobbies)[':lobby_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLobbiesLobbyIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.lobbies)[':lobby_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLobbiesLobbyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLobbiesLobbyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lobbies[':lobby_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteLobbiesLobbyIdMutationKey() {
  return ['lobbies', '/lobbies/:lobby_id', 'DELETE'] as const
}

export function getDeleteLobbiesLobbyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lobbies)[':lobby_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.lobbies)[':lobby_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLobbiesLobbyIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.lobbies)[':lobby_id']['$delete']>) {
      return parseResponse(client.lobbies[':lobby_id'].$delete(args, options))
    },
  })
}

export function useDeleteLobbiesLobbyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.lobbies)[':lobby_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.lobbies)[':lobby_id']['$delete']>,
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
  const mutationDefaults = getDeleteLobbiesLobbyIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchLobbiesLobbyIdMutationKey() {
  return ['lobbies', '/lobbies/:lobby_id', 'PATCH'] as const
}

export function getPatchLobbiesLobbyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lobbies)[':lobby_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.lobbies)[':lobby_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchLobbiesLobbyIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.lobbies)[':lobby_id']['$patch']>) {
      return parseResponse(client.lobbies[':lobby_id'].$patch(args, options))
    },
  })
}

export function usePatchLobbiesLobbyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lobbies)[':lobby_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.lobbies)[':lobby_id']['$patch']>,
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
  const mutationDefaults = getPatchLobbiesLobbyIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchLobbiesLobbyIdChannelLinkingMutationKey() {
  return ['lobbies', '/lobbies/:lobby_id/channel-linking', 'PATCH'] as const
}

export function getPatchLobbiesLobbyIdChannelLinkingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lobbies)[':lobby_id']['channel-linking']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lobbies)[':lobby_id']['channel-linking']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchLobbiesLobbyIdChannelLinkingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.lobbies)[':lobby_id']['channel-linking']['$patch']>,
    ) {
      return parseResponse(client.lobbies[':lobby_id']['channel-linking'].$patch(args, options))
    },
  })
}

export function usePatchLobbiesLobbyIdChannelLinking<
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
                  ReturnType<(typeof client.lobbies)[':lobby_id']['channel-linking']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.lobbies)[':lobby_id']['channel-linking']['$patch']>,
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
  const mutationDefaults = getPatchLobbiesLobbyIdChannelLinkingMutationOptions<
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

export function getDeleteLobbiesLobbyIdMembersMeMutationKey() {
  return ['lobbies', '/lobbies/:lobby_id/members/@me', 'DELETE'] as const
}

export function getDeleteLobbiesLobbyIdMembersMeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lobbies)[':lobby_id']['members']['@me']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.lobbies)[':lobby_id']['members']['@me']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLobbiesLobbyIdMembersMeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.lobbies)[':lobby_id']['members']['@me']['$delete']>,
    ) {
      return parseResponse(client.lobbies[':lobby_id'].members['@me'].$delete(args, options))
    },
  })
}

export function useDeleteLobbiesLobbyIdMembersMe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.lobbies)[':lobby_id']['members']['@me']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.lobbies)[':lobby_id']['members']['@me']['$delete']>,
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
  const mutationDefaults = getDeleteLobbiesLobbyIdMembersMeMutationOptions<TError, TOnMutateResult>(
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

export function getPostLobbiesLobbyIdMembersMeInvitesMutationKey() {
  return ['lobbies', '/lobbies/:lobby_id/members/@me/invites', 'POST'] as const
}

export function getPostLobbiesLobbyIdMembersMeInvitesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.lobbies)[':lobby_id']['members']['@me']['invites']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lobbies)[':lobby_id']['members']['@me']['invites']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLobbiesLobbyIdMembersMeInvitesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.lobbies)[':lobby_id']['members']['@me']['invites']['$post']
      >,
    ) {
      return parseResponse(client.lobbies[':lobby_id'].members['@me'].invites.$post(args, options))
    },
  })
}

export function usePostLobbiesLobbyIdMembersMeInvites<
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
                    (typeof client.lobbies)[':lobby_id']['members']['@me']['invites']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.lobbies)[':lobby_id']['members']['@me']['invites']['$post']
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
  const mutationDefaults = getPostLobbiesLobbyIdMembersMeInvitesMutationOptions<
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

export function getPostLobbiesLobbyIdMembersBulkMutationKey() {
  return ['lobbies', '/lobbies/:lobby_id/members/bulk', 'POST'] as const
}

export function getPostLobbiesLobbyIdMembersBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lobbies)[':lobby_id']['members']['bulk']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lobbies)[':lobby_id']['members']['bulk']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLobbiesLobbyIdMembersBulkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.lobbies)[':lobby_id']['members']['bulk']['$post']>,
    ) {
      return parseResponse(client.lobbies[':lobby_id'].members.bulk.$post(args, options))
    },
  })
}

export function usePostLobbiesLobbyIdMembersBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.lobbies)[':lobby_id']['members']['bulk']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.lobbies)[':lobby_id']['members']['bulk']['$post']>,
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
  const mutationDefaults = getPostLobbiesLobbyIdMembersBulkMutationOptions<TError, TOnMutateResult>(
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

export function getPutLobbiesLobbyIdMembersUserIdMutationKey() {
  return ['lobbies', '/lobbies/:lobby_id/members/:user_id', 'PUT'] as const
}

export function getPutLobbiesLobbyIdMembersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lobbies)[':lobby_id']['members'][':user_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lobbies)[':lobby_id']['members'][':user_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLobbiesLobbyIdMembersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.lobbies)[':lobby_id']['members'][':user_id']['$put']>,
    ) {
      return parseResponse(client.lobbies[':lobby_id'].members[':user_id'].$put(args, options))
    },
  })
}

export function usePutLobbiesLobbyIdMembersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.lobbies)[':lobby_id']['members'][':user_id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.lobbies)[':lobby_id']['members'][':user_id']['$put']>,
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
  const mutationDefaults = getPutLobbiesLobbyIdMembersUserIdMutationOptions<
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

export function getDeleteLobbiesLobbyIdMembersUserIdMutationKey() {
  return ['lobbies', '/lobbies/:lobby_id/members/:user_id', 'DELETE'] as const
}

export function getDeleteLobbiesLobbyIdMembersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.lobbies)[':lobby_id']['members'][':user_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.lobbies)[':lobby_id']['members'][':user_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLobbiesLobbyIdMembersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.lobbies)[':lobby_id']['members'][':user_id']['$delete']
      >,
    ) {
      return parseResponse(client.lobbies[':lobby_id'].members[':user_id'].$delete(args, options))
    },
  })
}

export function useDeleteLobbiesLobbyIdMembersUserId<
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
                      (typeof client.lobbies)[':lobby_id']['members'][':user_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.lobbies)[':lobby_id']['members'][':user_id']['$delete']>,
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
  const mutationDefaults = getDeleteLobbiesLobbyIdMembersUserIdMutationOptions<
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

export function getPostLobbiesLobbyIdMembersUserIdInvitesMutationKey() {
  return ['lobbies', '/lobbies/:lobby_id/members/:user_id/invites', 'POST'] as const
}

export function getPostLobbiesLobbyIdMembersUserIdInvitesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.lobbies)[':lobby_id']['members'][':user_id']['invites']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.lobbies)[':lobby_id']['members'][':user_id']['invites']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostLobbiesLobbyIdMembersUserIdInvitesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.lobbies)[':lobby_id']['members'][':user_id']['invites']['$post']
      >,
    ) {
      return parseResponse(
        client.lobbies[':lobby_id'].members[':user_id'].invites.$post(args, options),
      )
    },
  })
}

export function usePostLobbiesLobbyIdMembersUserIdInvites<
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
                    (typeof client.lobbies)[':lobby_id']['members'][':user_id']['invites']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.lobbies)[':lobby_id']['members'][':user_id']['invites']['$post']
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
  const mutationDefaults = getPostLobbiesLobbyIdMembersUserIdInvitesMutationOptions<
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

export function getLobbiesLobbyIdMessagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lobbies)[':lobby_id']['messages']['$get']>
  >,
) {
  return ['lobbies', '/lobbies/:lobby_id/messages', toValue(args)] as const
}

export function getLobbiesLobbyIdMessagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lobbies)[':lobby_id']['messages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLobbiesLobbyIdMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lobbies[':lobby_id'].messages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLobbiesLobbyIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lobbies)[':lobby_id']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lobbies)[':lobby_id']['messages']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lobbies)[':lobby_id']['messages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lobbies)[':lobby_id']['messages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLobbiesLobbyIdMessagesQueryKey>
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
          Awaited<ReturnType<(typeof client.lobbies)[':lobby_id']['messages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLobbiesLobbyIdMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLobbiesLobbyIdMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lobbies[':lobby_id'].messages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLobbiesLobbyIdMessagesMutationKey() {
  return ['lobbies', '/lobbies/:lobby_id/messages', 'POST'] as const
}

export function getPostLobbiesLobbyIdMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lobbies)[':lobby_id']['messages']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lobbies)[':lobby_id']['messages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLobbiesLobbyIdMessagesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.lobbies)[':lobby_id']['messages']['$post']>,
    ) {
      return parseResponse(client.lobbies[':lobby_id'].messages.$post(args, options))
    },
  })
}

export function usePostLobbiesLobbyIdMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lobbies)[':lobby_id']['messages']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.lobbies)[':lobby_id']['messages']['$post']>,
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
  const mutationDefaults = getPostLobbiesLobbyIdMessagesMutationOptions<TError, TOnMutateResult>(
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

export function getPutLobbiesLobbyIdMessagesMessageIdModerationMetadataMutationKey() {
  return ['lobbies', '/lobbies/:lobby_id/messages/:message_id/moderation-metadata', 'PUT'] as const
}

export function getPutLobbiesLobbyIdMessagesMessageIdModerationMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.lobbies)[':lobby_id']['messages'][':message_id']['moderation-metadata']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.lobbies)[':lobby_id']['messages'][':message_id']['moderation-metadata']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutLobbiesLobbyIdMessagesMessageIdModerationMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.lobbies)[':lobby_id']['messages'][':message_id']['moderation-metadata']['$put']
      >,
    ) {
      return parseResponse(
        client.lobbies[':lobby_id'].messages[':message_id']['moderation-metadata'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutLobbiesLobbyIdMessagesMessageIdModerationMetadata<
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
                      (typeof client.lobbies)[':lobby_id']['messages'][':message_id']['moderation-metadata']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.lobbies)[':lobby_id']['messages'][':message_id']['moderation-metadata']['$put']
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
  const mutationDefaults = getPutLobbiesLobbyIdMessagesMessageIdModerationMetadataMutationOptions<
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

export function getOauth2MeQueryKey() {
  return ['oauth2', '/oauth2/@me'] as const
}

export function getOauth2MeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOauth2MeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.oauth2['@me'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOauth2Me<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2)['@me']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2)['@me']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2)['@me']['$get']>>>
            >
          >,
          ReturnType<typeof getOauth2MeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2)['@me']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOauth2MeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOauth2MeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.oauth2['@me'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOauth2ApplicationsMeQueryKey() {
  return ['oauth2', '/oauth2/applications/@me'] as const
}

export function getOauth2ApplicationsMeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOauth2ApplicationsMeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.oauth2.applications['@me'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOauth2ApplicationsMe<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2.applications)['@me']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oauth2.applications)['@me']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oauth2.applications)['@me']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOauth2ApplicationsMeQueryKey>
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
          Awaited<ReturnType<(typeof client.oauth2.applications)['@me']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOauth2ApplicationsMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOauth2ApplicationsMeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.oauth2.applications['@me'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOauth2KeysQueryKey() {
  return ['oauth2', '/oauth2/keys'] as const
}

export function getOauth2KeysQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOauth2KeysQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.oauth2.keys.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOauth2Keys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.keys.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.keys.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.keys.$get>>>>
          >,
          ReturnType<typeof getOauth2KeysQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.keys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOauth2KeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOauth2KeysQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.oauth2.keys.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOauth2UserinfoQueryKey() {
  return ['oauth2', '/oauth2/userinfo'] as const
}

export function getOauth2UserinfoQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOauth2UserinfoQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.oauth2.userinfo.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOauth2Userinfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.userinfo.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.userinfo.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.userinfo.$get>>>
            >
          >,
          ReturnType<typeof getOauth2UserinfoQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.userinfo.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOauth2UserinfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOauth2UserinfoQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.oauth2.userinfo.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutPartnerSdkDmsUserId1UserId2MessagesMessageIdModerationMetadataMutationKey() {
  return [
    'partner-sdk',
    '/partner-sdk/dms/:user_id_1/:user_id_2/messages/:message_id/moderation-metadata',
    'PUT',
  ] as const
}

export function getPutPartnerSdkDmsUserId1UserId2MessagesMessageIdModerationMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['partner-sdk']['dms'][':user_id_1'][':user_id_2']['messages'][':message_id']['moderation-metadata']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['partner-sdk']['dms'][':user_id_1'][':user_id_2']['messages'][':message_id']['moderation-metadata']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutPartnerSdkDmsUserId1UserId2MessagesMessageIdModerationMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['partner-sdk']['dms'][':user_id_1'][':user_id_2']['messages'][':message_id']['moderation-metadata']['$put']
      >,
    ) {
      return parseResponse(
        client['partner-sdk'].dms[':user_id_1'][':user_id_2'].messages[':message_id'][
          'moderation-metadata'
        ].$put(args, options),
      )
    },
  })
}

export function usePutPartnerSdkDmsUserId1UserId2MessagesMessageIdModerationMetadata<
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
                      (typeof client)['partner-sdk']['dms'][':user_id_1'][':user_id_2']['messages'][':message_id']['moderation-metadata']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)['partner-sdk']['dms'][':user_id_1'][':user_id_2']['messages'][':message_id']['moderation-metadata']['$put']
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
    getPutPartnerSdkDmsUserId1UserId2MessagesMessageIdModerationMetadataMutationOptions<
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

export function getPostPartnerSdkProvisionalAccountsUnmergeMutationKey() {
  return ['partner-sdk', '/partner-sdk/provisional-accounts/unmerge', 'POST'] as const
}

export function getPostPartnerSdkProvisionalAccountsUnmergeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['partner-sdk']['provisional-accounts']['unmerge']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['partner-sdk']['provisional-accounts']['unmerge']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPartnerSdkProvisionalAccountsUnmergeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['partner-sdk']['provisional-accounts']['unmerge']['$post']
      >,
    ) {
      return parseResponse(
        client['partner-sdk']['provisional-accounts'].unmerge.$post(args, options),
      )
    },
  })
}

export function usePostPartnerSdkProvisionalAccountsUnmerge<
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
                      (typeof client)['partner-sdk']['provisional-accounts']['unmerge']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)['partner-sdk']['provisional-accounts']['unmerge']['$post']
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
  const mutationDefaults = getPostPartnerSdkProvisionalAccountsUnmergeMutationOptions<
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

export function getPostPartnerSdkProvisionalAccountsUnmergeBotMutationKey() {
  return ['partner-sdk', '/partner-sdk/provisional-accounts/unmerge/bot', 'POST'] as const
}

export function getPostPartnerSdkProvisionalAccountsUnmergeBotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['partner-sdk']['provisional-accounts']['unmerge']['bot']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['partner-sdk']['provisional-accounts']['unmerge']['bot']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPartnerSdkProvisionalAccountsUnmergeBotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['partner-sdk']['provisional-accounts']['unmerge']['bot']['$post']
      >,
    ) {
      return parseResponse(
        client['partner-sdk']['provisional-accounts'].unmerge.bot.$post(args, options),
      )
    },
  })
}

export function usePostPartnerSdkProvisionalAccountsUnmergeBot<
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
                      (typeof client)['partner-sdk']['provisional-accounts']['unmerge']['bot']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)['partner-sdk']['provisional-accounts']['unmerge']['bot']['$post']
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
  const mutationDefaults = getPostPartnerSdkProvisionalAccountsUnmergeBotMutationOptions<
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

export function getPostPartnerSdkTokenMutationKey() {
  return ['partner-sdk', '/partner-sdk/token', 'POST'] as const
}

export function getPostPartnerSdkTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['partner-sdk']['token']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['partner-sdk']['token']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPartnerSdkTokenMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['partner-sdk']['token']['$post']>) {
      return parseResponse(client['partner-sdk'].token.$post(args, options))
    },
  })
}

export function usePostPartnerSdkToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['partner-sdk']['token']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['partner-sdk']['token']['$post']>,
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
  const mutationDefaults = getPostPartnerSdkTokenMutationOptions<TError, TOnMutateResult>(
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

export function getPostPartnerSdkTokenBotMutationKey() {
  return ['partner-sdk', '/partner-sdk/token/bot', 'POST'] as const
}

export function getPostPartnerSdkTokenBotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['partner-sdk']['token']['bot']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['partner-sdk']['token']['bot']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPartnerSdkTokenBotMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['partner-sdk']['token']['bot']['$post']>,
    ) {
      return parseResponse(client['partner-sdk'].token.bot.$post(args, options))
    },
  })
}

export function usePostPartnerSdkTokenBot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['partner-sdk']['token']['bot']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['partner-sdk']['token']['bot']['$post']>,
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
  const mutationDefaults = getPostPartnerSdkTokenBotMutationOptions<TError, TOnMutateResult>(
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

export function getSkusSkuIdSubscriptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.skus)[':sku_id']['subscriptions']['$get']>
  >,
) {
  return ['skus', '/skus/:sku_id/subscriptions', toValue(args)] as const
}

export function getSkusSkuIdSubscriptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.skus)[':sku_id']['subscriptions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSkusSkuIdSubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.skus[':sku_id'].subscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSkusSkuIdSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.skus)[':sku_id']['subscriptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.skus)[':sku_id']['subscriptions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.skus)[':sku_id']['subscriptions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.skus)[':sku_id']['subscriptions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSkusSkuIdSubscriptionsQueryKey>
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
          Awaited<ReturnType<(typeof client.skus)[':sku_id']['subscriptions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSkusSkuIdSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSkusSkuIdSubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.skus[':sku_id'].subscriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSkusSkuIdSubscriptionsSubscriptionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.skus)[':sku_id']['subscriptions'][':subscription_id']['$get']>
  >,
) {
  return ['skus', '/skus/:sku_id/subscriptions/:subscription_id', toValue(args)] as const
}

export function getSkusSkuIdSubscriptionsSubscriptionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.skus)[':sku_id']['subscriptions'][':subscription_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSkusSkuIdSubscriptionsSubscriptionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.skus[':sku_id'].subscriptions[':subscription_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSkusSkuIdSubscriptionsSubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.skus)[':sku_id']['subscriptions'][':subscription_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.skus)[':sku_id']['subscriptions'][':subscription_id']['$get']>
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
                    (typeof client.skus)[':sku_id']['subscriptions'][':subscription_id']['$get']
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
                    (typeof client.skus)[':sku_id']['subscriptions'][':subscription_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSkusSkuIdSubscriptionsSubscriptionIdQueryKey>
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
            ReturnType<(typeof client.skus)[':sku_id']['subscriptions'][':subscription_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSkusSkuIdSubscriptionsSubscriptionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSkusSkuIdSubscriptionsSubscriptionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.skus[':sku_id'].subscriptions[':subscription_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSoundboardDefaultSoundsQueryKey() {
  return ['soundboard-default-sounds', '/soundboard-default-sounds'] as const
}

export function getSoundboardDefaultSoundsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSoundboardDefaultSoundsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['soundboard-default-sounds'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSoundboardDefaultSounds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['soundboard-default-sounds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['soundboard-default-sounds']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['soundboard-default-sounds']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSoundboardDefaultSoundsQueryKey>
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
          Awaited<ReturnType<(typeof client)['soundboard-default-sounds']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSoundboardDefaultSoundsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSoundboardDefaultSoundsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['soundboard-default-sounds'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostStageInstancesMutationKey() {
  return ['stage-instances', '/stage-instances', 'POST'] as const
}

export function getPostStageInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['stage-instances']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['stage-instances']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStageInstancesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['stage-instances']['$post']>) {
      return parseResponse(client['stage-instances'].$post(args, options))
    },
  })
}

export function usePostStageInstances<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['stage-instances']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['stage-instances']['$post']>,
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
  const mutationDefaults = getPostStageInstancesMutationOptions<TError, TOnMutateResult>(
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

export function getStageInstancesChannelIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['stage-instances'][':channel_id']['$get']>
  >,
) {
  return ['stage-instances', '/stage-instances/:channel_id', toValue(args)] as const
}

export function getStageInstancesChannelIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['stage-instances'][':channel_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStageInstancesChannelIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['stage-instances'][':channel_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStageInstancesChannelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['stage-instances'][':channel_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['stage-instances'][':channel_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['stage-instances'][':channel_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['stage-instances'][':channel_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStageInstancesChannelIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['stage-instances'][':channel_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStageInstancesChannelIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStageInstancesChannelIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['stage-instances'][':channel_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteStageInstancesChannelIdMutationKey() {
  return ['stage-instances', '/stage-instances/:channel_id', 'DELETE'] as const
}

export function getDeleteStageInstancesChannelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['stage-instances'][':channel_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['stage-instances'][':channel_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteStageInstancesChannelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['stage-instances'][':channel_id']['$delete']>,
    ) {
      return parseResponse(client['stage-instances'][':channel_id'].$delete(args, options))
    },
  })
}

export function useDeleteStageInstancesChannelId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['stage-instances'][':channel_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['stage-instances'][':channel_id']['$delete']>,
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
  const mutationDefaults = getDeleteStageInstancesChannelIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchStageInstancesChannelIdMutationKey() {
  return ['stage-instances', '/stage-instances/:channel_id', 'PATCH'] as const
}

export function getPatchStageInstancesChannelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['stage-instances'][':channel_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['stage-instances'][':channel_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchStageInstancesChannelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['stage-instances'][':channel_id']['$patch']>,
    ) {
      return parseResponse(client['stage-instances'][':channel_id'].$patch(args, options))
    },
  })
}

export function usePatchStageInstancesChannelId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['stage-instances'][':channel_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['stage-instances'][':channel_id']['$patch']>,
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
  const mutationDefaults = getPatchStageInstancesChannelIdMutationOptions<TError, TOnMutateResult>(
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

export function getStickerPacksQueryKey() {
  return ['sticker-packs', '/sticker-packs'] as const
}

export function getStickerPacksQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStickerPacksQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['sticker-packs'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStickerPacks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['sticker-packs']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['sticker-packs']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['sticker-packs']['$get']>>>
            >
          >,
          ReturnType<typeof getStickerPacksQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['sticker-packs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStickerPacksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStickerPacksQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['sticker-packs'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStickerPacksPackIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['sticker-packs'][':pack_id']['$get']>>,
) {
  return ['sticker-packs', '/sticker-packs/:pack_id', toValue(args)] as const
}

export function getStickerPacksPackIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['sticker-packs'][':pack_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStickerPacksPackIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['sticker-packs'][':pack_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStickerPacksPackId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['sticker-packs'][':pack_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['sticker-packs'][':pack_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['sticker-packs'][':pack_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['sticker-packs'][':pack_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStickerPacksPackIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['sticker-packs'][':pack_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStickerPacksPackIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStickerPacksPackIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['sticker-packs'][':pack_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStickersStickerIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stickers)[':sticker_id']['$get']>>,
) {
  return ['stickers', '/stickers/:sticker_id', toValue(args)] as const
}

export function getStickersStickerIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stickers)[':sticker_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStickersStickerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stickers[':sticker_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStickersStickerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stickers)[':sticker_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stickers)[':sticker_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stickers)[':sticker_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stickers)[':sticker_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStickersStickerIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.stickers)[':sticker_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStickersStickerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStickersStickerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stickers[':sticker_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersMeQueryKey() {
  return ['users', '/users/@me'] as const
}

export function getUsersMeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsersMeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users['@me'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)['@me']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)['@me']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)['@me']['$get']>>>
            >
          >,
          ReturnType<typeof getUsersMeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)['@me']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsersMeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.users['@me'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchUsersMeMutationKey() {
  return ['users', '/users/@me', 'PATCH'] as const
}

export function getPatchUsersMeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)['@me']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.users)['@me']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersMeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)['@me']['$patch']>) {
      return parseResponse(client.users['@me'].$patch(args, options))
    },
  })
}

export function usePatchUsersMe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)['@me']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.users)['@me']['$patch']>,
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
  const mutationDefaults = getPatchUsersMeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersMeApplicationsApplicationIdEntitlementsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)['@me']['applications'][':application_id']['entitlements']['$get']
    >
  >,
) {
  return ['users', '/users/@me/applications/:application_id/entitlements', toValue(args)] as const
}

export function getUsersMeApplicationsApplicationIdEntitlementsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)['@me']['applications'][':application_id']['entitlements']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersMeApplicationsApplicationIdEntitlementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users['@me'].applications[':application_id'].entitlements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersMeApplicationsApplicationIdEntitlements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)['@me']['applications'][':application_id']['entitlements']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)['@me']['applications'][':application_id']['entitlements']['$get']
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
                    (typeof client.users)['@me']['applications'][':application_id']['entitlements']['$get']
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
                    (typeof client.users)['@me']['applications'][':application_id']['entitlements']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUsersMeApplicationsApplicationIdEntitlementsQueryKey>
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
              (typeof client.users)['@me']['applications'][':application_id']['entitlements']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersMeApplicationsApplicationIdEntitlementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersMeApplicationsApplicationIdEntitlementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users['@me'].applications[':application_id'].entitlements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersMeApplicationsApplicationIdRoleConnectionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)['@me']['applications'][':application_id']['role-connection']['$get']
    >
  >,
) {
  return [
    'users',
    '/users/@me/applications/:application_id/role-connection',
    toValue(args),
  ] as const
}

export function getUsersMeApplicationsApplicationIdRoleConnectionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)['@me']['applications'][':application_id']['role-connection']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersMeApplicationsApplicationIdRoleConnectionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users['@me'].applications[':application_id']['role-connection'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersMeApplicationsApplicationIdRoleConnection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)['@me']['applications'][':application_id']['role-connection']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)['@me']['applications'][':application_id']['role-connection']['$get']
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
                    (typeof client.users)['@me']['applications'][':application_id']['role-connection']['$get']
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
                    (typeof client.users)['@me']['applications'][':application_id']['role-connection']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUsersMeApplicationsApplicationIdRoleConnectionQueryKey>
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
              (typeof client.users)['@me']['applications'][':application_id']['role-connection']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersMeApplicationsApplicationIdRoleConnectionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersMeApplicationsApplicationIdRoleConnectionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users['@me'].applications[':application_id']['role-connection'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutUsersMeApplicationsApplicationIdRoleConnectionMutationKey() {
  return ['users', '/users/@me/applications/:application_id/role-connection', 'PUT'] as const
}

export function getPutUsersMeApplicationsApplicationIdRoleConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)['@me']['applications'][':application_id']['role-connection']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)['@me']['applications'][':application_id']['role-connection']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutUsersMeApplicationsApplicationIdRoleConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)['@me']['applications'][':application_id']['role-connection']['$put']
      >,
    ) {
      return parseResponse(
        client.users['@me'].applications[':application_id']['role-connection'].$put(args, options),
      )
    },
  })
}

export function usePutUsersMeApplicationsApplicationIdRoleConnection<
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
                    (typeof client.users)['@me']['applications'][':application_id']['role-connection']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.users)['@me']['applications'][':application_id']['role-connection']['$put']
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
  const mutationDefaults = getPutUsersMeApplicationsApplicationIdRoleConnectionMutationOptions<
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

export function getDeleteUsersMeApplicationsApplicationIdRoleConnectionMutationKey() {
  return ['users', '/users/@me/applications/:application_id/role-connection', 'DELETE'] as const
}

export function getDeleteUsersMeApplicationsApplicationIdRoleConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)['@me']['applications'][':application_id']['role-connection']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.users)['@me']['applications'][':application_id']['role-connection']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersMeApplicationsApplicationIdRoleConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)['@me']['applications'][':application_id']['role-connection']['$delete']
      >,
    ) {
      return parseResponse(
        client.users['@me'].applications[':application_id']['role-connection'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteUsersMeApplicationsApplicationIdRoleConnection<
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
                      (typeof client.users)['@me']['applications'][':application_id']['role-connection']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.users)['@me']['applications'][':application_id']['role-connection']['$delete']
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
  const mutationDefaults = getDeleteUsersMeApplicationsApplicationIdRoleConnectionMutationOptions<
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

export function getPostUsersMeChannelsMutationKey() {
  return ['users', '/users/@me/channels', 'POST'] as const
}

export function getPostUsersMeChannelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)['@me']['channels']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)['@me']['channels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMeChannelsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)['@me']['channels']['$post']>) {
      return parseResponse(client.users['@me'].channels.$post(args, options))
    },
  })
}

export function usePostUsersMeChannels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)['@me']['channels']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)['@me']['channels']['$post']>,
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
  const mutationDefaults = getPostUsersMeChannelsMutationOptions<TError, TOnMutateResult>(
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

export function getUsersMeConnectionsQueryKey() {
  return ['users', '/users/@me/connections'] as const
}

export function getUsersMeConnectionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsersMeConnectionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users['@me'].connections.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersMeConnections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)['@me']['connections']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)['@me']['connections']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)['@me']['connections']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersMeConnectionsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)['@me']['connections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersMeConnectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsersMeConnectionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.users['@me'].connections.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersMeGuildsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)['@me']['guilds']['$get']>>,
) {
  return ['users', '/users/@me/guilds', toValue(args)] as const
}

export function getUsersMeGuildsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)['@me']['guilds']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersMeGuildsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users['@me'].guilds.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersMeGuilds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)['@me']['guilds']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)['@me']['guilds']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)['@me']['guilds']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)['@me']['guilds']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersMeGuildsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)['@me']['guilds']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersMeGuildsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersMeGuildsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users['@me'].guilds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteUsersMeGuildsGuildIdMutationKey() {
  return ['users', '/users/@me/guilds/:guild_id', 'DELETE'] as const
}

export function getDeleteUsersMeGuildsGuildIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)['@me']['guilds'][':guild_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)['@me']['guilds'][':guild_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersMeGuildsGuildIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)['@me']['guilds'][':guild_id']['$delete']>,
    ) {
      return parseResponse(client.users['@me'].guilds[':guild_id'].$delete(args, options))
    },
  })
}

export function useDeleteUsersMeGuildsGuildId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.users)['@me']['guilds'][':guild_id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.users)['@me']['guilds'][':guild_id']['$delete']>,
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
  const mutationDefaults = getDeleteUsersMeGuildsGuildIdMutationOptions<TError, TOnMutateResult>(
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

export function getUsersMeGuildsGuildIdMemberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)['@me']['guilds'][':guild_id']['member']['$get']>
  >,
) {
  return ['users', '/users/@me/guilds/:guild_id/member', toValue(args)] as const
}

export function getUsersMeGuildsGuildIdMemberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)['@me']['guilds'][':guild_id']['member']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersMeGuildsGuildIdMemberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users['@me'].guilds[':guild_id'].member.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersMeGuildsGuildIdMember<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)['@me']['guilds'][':guild_id']['member']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)['@me']['guilds'][':guild_id']['member']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)['@me']['guilds'][':guild_id']['member']['$get']>
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
                  ReturnType<(typeof client.users)['@me']['guilds'][':guild_id']['member']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUsersMeGuildsGuildIdMemberQueryKey>
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
          Awaited<ReturnType<(typeof client.users)['@me']['guilds'][':guild_id']['member']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersMeGuildsGuildIdMemberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersMeGuildsGuildIdMemberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users['@me'].guilds[':guild_id'].member.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['$get']>>,
) {
  return ['users', '/users/:user_id', toValue(args)] as const
}

export function getUsersUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
            >
          >,
          ReturnType<typeof getUsersUserIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVoiceRegionsQueryKey() {
  return ['voice', '/voice/regions'] as const
}

export function getVoiceRegionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getVoiceRegionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.voice.regions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVoiceRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.regions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.regions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.regions.$get>>>>
          >,
          ReturnType<typeof getVoiceRegionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.regions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getVoiceRegionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getVoiceRegionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.voice.regions.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWebhooksWebhookIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>>,
) {
  return ['webhooks', '/webhooks/:webhook_id', toValue(args)] as const
}

export function getWebhooksWebhookIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksWebhookIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks[':webhook_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWebhooksWebhookIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksWebhookIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksWebhookIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks[':webhook_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteWebhooksWebhookIdMutationKey() {
  return ['webhooks', '/webhooks/:webhook_id', 'DELETE'] as const
}

export function getDeleteWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.webhooks)[':webhook_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksWebhookIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$delete']>) {
      return parseResponse(client.webhooks[':webhook_id'].$delete(args, options))
    },
  })
}

export function useDeleteWebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.webhooks)[':webhook_id']['$delete']>,
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
  const mutationDefaults = getDeleteWebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchWebhooksWebhookIdMutationKey() {
  return ['webhooks', '/webhooks/:webhook_id', 'PATCH'] as const
}

export function getPatchWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':webhook_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWebhooksWebhookIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$patch']>) {
      return parseResponse(client.webhooks[':webhook_id'].$patch(args, options))
    },
  })
}

export function usePatchWebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webhooks)[':webhook_id']['$patch']>,
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
  const mutationDefaults = getPatchWebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
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

export function getWebhooksWebhookIdWebhookTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['$get']>
  >,
) {
  return ['webhooks', '/webhooks/:webhook_id/:webhook_token', toValue(args)] as const
}

export function getWebhooksWebhookIdWebhookTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksWebhookIdWebhookTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks[':webhook_id'][':webhook_token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksWebhookIdWebhookToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['$get']>
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
                  ReturnType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getWebhooksWebhookIdWebhookTokenQueryKey>
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
          Awaited<ReturnType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksWebhookIdWebhookTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksWebhookIdWebhookTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks[':webhook_id'][':webhook_token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWebhooksWebhookIdWebhookTokenMutationKey() {
  return ['webhooks', '/webhooks/:webhook_id/:webhook_token', 'POST'] as const
}

export function getPostWebhooksWebhookIdWebhookTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksWebhookIdWebhookTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['$post']>,
    ) {
      return parseResponse(client.webhooks[':webhook_id'][':webhook_token'].$post(args, options))
    },
  })
}

export function usePostWebhooksWebhookIdWebhookToken<
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
                    ReturnType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['$post']>,
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
  const mutationDefaults = getPostWebhooksWebhookIdWebhookTokenMutationOptions<
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

export function getDeleteWebhooksWebhookIdWebhookTokenMutationKey() {
  return ['webhooks', '/webhooks/:webhook_id/:webhook_token', 'DELETE'] as const
}

export function getDeleteWebhooksWebhookIdWebhookTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksWebhookIdWebhookTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['$delete']>,
    ) {
      return parseResponse(client.webhooks[':webhook_id'][':webhook_token'].$delete(args, options))
    },
  })
}

export function useDeleteWebhooksWebhookIdWebhookToken<
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
                    ReturnType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['$delete']>,
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
  const mutationDefaults = getDeleteWebhooksWebhookIdWebhookTokenMutationOptions<
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

export function getPatchWebhooksWebhookIdWebhookTokenMutationKey() {
  return ['webhooks', '/webhooks/:webhook_id/:webhook_token', 'PATCH'] as const
}

export function getPatchWebhooksWebhookIdWebhookTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWebhooksWebhookIdWebhookTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['$patch']>,
    ) {
      return parseResponse(client.webhooks[':webhook_id'][':webhook_token'].$patch(args, options))
    },
  })
}

export function usePatchWebhooksWebhookIdWebhookToken<
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
                  ReturnType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['$patch']>,
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
  const mutationDefaults = getPatchWebhooksWebhookIdWebhookTokenMutationOptions<
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

export function getPostWebhooksWebhookIdWebhookTokenGithubMutationKey() {
  return ['webhooks', '/webhooks/:webhook_id/:webhook_token/github', 'POST'] as const
}

export function getPostWebhooksWebhookIdWebhookTokenGithubMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.webhooks)[':webhook_id'][':webhook_token']['github']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['github']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksWebhookIdWebhookTokenGithubMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.webhooks)[':webhook_id'][':webhook_token']['github']['$post']
      >,
    ) {
      return parseResponse(
        client.webhooks[':webhook_id'][':webhook_token'].github.$post(args, options),
      )
    },
  })
}

export function usePostWebhooksWebhookIdWebhookTokenGithub<
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
                      (typeof client.webhooks)[':webhook_id'][':webhook_token']['github']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.webhooks)[':webhook_id'][':webhook_token']['github']['$post']
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
  const mutationDefaults = getPostWebhooksWebhookIdWebhookTokenGithubMutationOptions<
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

export function getWebhooksWebhookIdWebhookTokenMessagesOriginalQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages']['@original']['$get']
    >
  >,
) {
  return [
    'webhooks',
    '/webhooks/:webhook_id/:webhook_token/messages/@original',
    toValue(args),
  ] as const
}

export function getWebhooksWebhookIdWebhookTokenMessagesOriginalQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages']['@original']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksWebhookIdWebhookTokenMessagesOriginalQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks[':webhook_id'][':webhook_token'].messages['@original'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksWebhookIdWebhookTokenMessagesOriginal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages']['@original']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages']['@original']['$get']
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
                    (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages']['@original']['$get']
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
                    (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages']['@original']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWebhooksWebhookIdWebhookTokenMessagesOriginalQueryKey>
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
              (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages']['@original']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksWebhookIdWebhookTokenMessagesOriginalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksWebhookIdWebhookTokenMessagesOriginalQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks[':webhook_id'][':webhook_token'].messages['@original'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteWebhooksWebhookIdWebhookTokenMessagesOriginalMutationKey() {
  return ['webhooks', '/webhooks/:webhook_id/:webhook_token/messages/@original', 'DELETE'] as const
}

export function getDeleteWebhooksWebhookIdWebhookTokenMessagesOriginalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages']['@original']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages']['@original']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksWebhookIdWebhookTokenMessagesOriginalMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages']['@original']['$delete']
      >,
    ) {
      return parseResponse(
        client.webhooks[':webhook_id'][':webhook_token'].messages['@original'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteWebhooksWebhookIdWebhookTokenMessagesOriginal<
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
                      (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages']['@original']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages']['@original']['$delete']
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
  const mutationDefaults = getDeleteWebhooksWebhookIdWebhookTokenMessagesOriginalMutationOptions<
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

export function getPatchWebhooksWebhookIdWebhookTokenMessagesOriginalMutationKey() {
  return ['webhooks', '/webhooks/:webhook_id/:webhook_token/messages/@original', 'PATCH'] as const
}

export function getPatchWebhooksWebhookIdWebhookTokenMessagesOriginalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages']['@original']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages']['@original']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchWebhooksWebhookIdWebhookTokenMessagesOriginalMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages']['@original']['$patch']
      >,
    ) {
      return parseResponse(
        client.webhooks[':webhook_id'][':webhook_token'].messages['@original'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchWebhooksWebhookIdWebhookTokenMessagesOriginal<
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
                    (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages']['@original']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages']['@original']['$patch']
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
  const mutationDefaults = getPatchWebhooksWebhookIdWebhookTokenMessagesOriginalMutationOptions<
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

export function getWebhooksWebhookIdWebhookTokenMessagesMessageIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages'][':message_id']['$get']
    >
  >,
) {
  return [
    'webhooks',
    '/webhooks/:webhook_id/:webhook_token/messages/:message_id',
    toValue(args),
  ] as const
}

export function getWebhooksWebhookIdWebhookTokenMessagesMessageIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages'][':message_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksWebhookIdWebhookTokenMessagesMessageIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks[':webhook_id'][':webhook_token'].messages[':message_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useWebhooksWebhookIdWebhookTokenMessagesMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages'][':message_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages'][':message_id']['$get']
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
                    (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages'][':message_id']['$get']
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
                    (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages'][':message_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWebhooksWebhookIdWebhookTokenMessagesMessageIdQueryKey>
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
              (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages'][':message_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksWebhookIdWebhookTokenMessagesMessageIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksWebhookIdWebhookTokenMessagesMessageIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks[':webhook_id'][':webhook_token'].messages[':message_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteWebhooksWebhookIdWebhookTokenMessagesMessageIdMutationKey() {
  return [
    'webhooks',
    '/webhooks/:webhook_id/:webhook_token/messages/:message_id',
    'DELETE',
  ] as const
}

export function getDeleteWebhooksWebhookIdWebhookTokenMessagesMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages'][':message_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages'][':message_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksWebhookIdWebhookTokenMessagesMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages'][':message_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.webhooks[':webhook_id'][':webhook_token'].messages[':message_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteWebhooksWebhookIdWebhookTokenMessagesMessageId<
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
                      (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages'][':message_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages'][':message_id']['$delete']
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
  const mutationDefaults = getDeleteWebhooksWebhookIdWebhookTokenMessagesMessageIdMutationOptions<
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

export function getPatchWebhooksWebhookIdWebhookTokenMessagesMessageIdMutationKey() {
  return ['webhooks', '/webhooks/:webhook_id/:webhook_token/messages/:message_id', 'PATCH'] as const
}

export function getPatchWebhooksWebhookIdWebhookTokenMessagesMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages'][':message_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages'][':message_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchWebhooksWebhookIdWebhookTokenMessagesMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages'][':message_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.webhooks[':webhook_id'][':webhook_token'].messages[':message_id'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchWebhooksWebhookIdWebhookTokenMessagesMessageId<
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
                    (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages'][':message_id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages'][':message_id']['$patch']
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
  const mutationDefaults = getPatchWebhooksWebhookIdWebhookTokenMessagesMessageIdMutationOptions<
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

export function getPostWebhooksWebhookIdWebhookTokenSlackMutationKey() {
  return ['webhooks', '/webhooks/:webhook_id/:webhook_token/slack', 'POST'] as const
}

export function getPostWebhooksWebhookIdWebhookTokenSlackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['slack']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['slack']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksWebhookIdWebhookTokenSlackMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.webhooks)[':webhook_id'][':webhook_token']['slack']['$post']
      >,
    ) {
      return parseResponse(
        client.webhooks[':webhook_id'][':webhook_token'].slack.$post(args, options),
      )
    },
  })
}

export function usePostWebhooksWebhookIdWebhookTokenSlack<
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
                    (typeof client.webhooks)[':webhook_id'][':webhook_token']['slack']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.webhooks)[':webhook_id'][':webhook_token']['slack']['$post']
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
  const mutationDefaults = getPostWebhooksWebhookIdWebhookTokenSlackMutationOptions<
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
