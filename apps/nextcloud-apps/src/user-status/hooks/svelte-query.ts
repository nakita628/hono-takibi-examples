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

export function getOcsKey() {
  return ['ocs'] as const
}

export function getPutOcsV2PhpAppsUserStatusApiV1HeartbeatMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/user_status/api/v1/heartbeat', 'PUT'] as const
}

export function getPutOcsV2PhpAppsUserStatusApiV1HeartbeatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['heartbeat']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['heartbeat']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsUserStatusApiV1HeartbeatMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['heartbeat']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.user_status.api.v1.heartbeat.$put(args, options),
      )
    },
  })
}

export function createPutOcsV2PhpAppsUserStatusApiV1Heartbeat<
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
                    (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['heartbeat']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['heartbeat']['$put']
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
    const mutationDefaults = getPutOcsV2PhpAppsUserStatusApiV1HeartbeatMutationOptions<
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

export function getOcsV2PhpAppsUserStatusApiV1PredefinedStatusesQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['predefined_statuses']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/user_status/api/v1/predefined_statuses', keyArgs] as const
}

export function getOcsV2PhpAppsUserStatusApiV1PredefinedStatusesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['predefined_statuses']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['predefined_statuses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['predefined_statuses']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsUserStatusApiV1PredefinedStatusesQueryKey>
  >({
    queryKey: getOcsV2PhpAppsUserStatusApiV1PredefinedStatusesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.user_status.api.v1.predefined_statuses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsUserStatusApiV1PredefinedStatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['predefined_statuses']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['predefined_statuses']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['predefined_statuses']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsUserStatusApiV1PredefinedStatusesQueryKey>
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
      ...getOcsV2PhpAppsUserStatusApiV1PredefinedStatusesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsUserStatusApiV1StatusesQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['statuses']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/user_status/api/v1/statuses', keyArgs] as const
}

export function getOcsV2PhpAppsUserStatusApiV1StatusesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['statuses']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['statuses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['statuses']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsUserStatusApiV1StatusesQueryKey>
  >({
    queryKey: getOcsV2PhpAppsUserStatusApiV1StatusesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.user_status.api.v1.statuses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsUserStatusApiV1Statuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['statuses']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['statuses']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['statuses']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsUserStatusApiV1StatusesQueryKey>
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
      ...getOcsV2PhpAppsUserStatusApiV1StatusesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsUserStatusApiV1StatusesUserIdQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['statuses'][':userId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/user_status/api/v1/statuses/:userId', keyArgs] as const
}

export function getOcsV2PhpAppsUserStatusApiV1StatusesUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['statuses'][':userId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['statuses'][':userId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['statuses'][':userId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsUserStatusApiV1StatusesUserIdQueryKey>
  >({
    queryKey: getOcsV2PhpAppsUserStatusApiV1StatusesUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.user_status.api.v1.statuses[':userId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsUserStatusApiV1StatusesUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['statuses'][':userId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['statuses'][':userId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['statuses'][':userId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsUserStatusApiV1StatusesUserIdQueryKey>
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
      ...getOcsV2PhpAppsUserStatusApiV1StatusesUserIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsUserStatusApiV1UserStatusQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/user_status/api/v1/user_status', keyArgs] as const
}

export function getOcsV2PhpAppsUserStatusApiV1UserStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsUserStatusApiV1UserStatusQueryKey>
  >({
    queryKey: getOcsV2PhpAppsUserStatusApiV1UserStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.user_status.api.v1.user_status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsUserStatusApiV1UserStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsUserStatusApiV1UserStatusQueryKey>
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
      ...getOcsV2PhpAppsUserStatusApiV1UserStatusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutOcsV2PhpAppsUserStatusApiV1UserStatusStatusMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/user_status/api/v1/user_status/status', 'PUT'] as const
}

export function getPutOcsV2PhpAppsUserStatusApiV1UserStatusStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['status']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsUserStatusApiV1UserStatusStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['status']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.user_status.api.v1.user_status.status.$put(args, options),
      )
    },
  })
}

export function createPutOcsV2PhpAppsUserStatusApiV1UserStatusStatus<
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
                  (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['status']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['status']['$put']
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
    const mutationDefaults = getPutOcsV2PhpAppsUserStatusApiV1UserStatusStatusMutationOptions<
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

export function getPutOcsV2PhpAppsUserStatusApiV1UserStatusMessagePredefinedMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/user_status/api/v1/user_status/message/predefined',
    'PUT',
  ] as const
}

export function getPutOcsV2PhpAppsUserStatusApiV1UserStatusMessagePredefinedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['message']['predefined']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['message']['predefined']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsUserStatusApiV1UserStatusMessagePredefinedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['message']['predefined']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.user_status.api.v1.user_status.message.predefined.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutOcsV2PhpAppsUserStatusApiV1UserStatusMessagePredefined<
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
                  (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['message']['predefined']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['message']['predefined']['$put']
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
      getPutOcsV2PhpAppsUserStatusApiV1UserStatusMessagePredefinedMutationOptions<
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

export function getPutOcsV2PhpAppsUserStatusApiV1UserStatusMessageCustomMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/user_status/api/v1/user_status/message/custom', 'PUT'] as const
}

export function getPutOcsV2PhpAppsUserStatusApiV1UserStatusMessageCustomMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['message']['custom']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['message']['custom']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsUserStatusApiV1UserStatusMessageCustomMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['message']['custom']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.user_status.api.v1.user_status.message.custom.$put(args, options),
      )
    },
  })
}

export function createPutOcsV2PhpAppsUserStatusApiV1UserStatusMessageCustom<
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
                  (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['message']['custom']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['message']['custom']['$put']
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
      getPutOcsV2PhpAppsUserStatusApiV1UserStatusMessageCustomMutationOptions<
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

export function getDeleteOcsV2PhpAppsUserStatusApiV1UserStatusMessageMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/user_status/api/v1/user_status/message', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsUserStatusApiV1UserStatusMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['message']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['message']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsUserStatusApiV1UserStatusMessageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['message']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.user_status.api.v1.user_status.message.$delete(args, options),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsUserStatusApiV1UserStatusMessage<
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
                  (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['message']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['message']['$delete']
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
    const mutationDefaults = getDeleteOcsV2PhpAppsUserStatusApiV1UserStatusMessageMutationOptions<
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

export function getDeleteOcsV2PhpAppsUserStatusApiV1UserStatusRevertMessageIdMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/user_status/api/v1/user_status/revert/:messageId',
    'DELETE',
  ] as const
}

export function getDeleteOcsV2PhpAppsUserStatusApiV1UserStatusRevertMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['revert'][':messageId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['revert'][':messageId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsUserStatusApiV1UserStatusRevertMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['revert'][':messageId']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.user_status.api.v1.user_status.revert[':messageId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsUserStatusApiV1UserStatusRevertMessageId<
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
                  (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['revert'][':messageId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['revert'][':messageId']['$delete']
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
      getDeleteOcsV2PhpAppsUserStatusApiV1UserStatusRevertMessageIdMutationOptions<
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
