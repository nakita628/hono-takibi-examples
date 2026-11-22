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

export function getSettingsKey() {
  return ['settings'] as const
}

export function getSettingsTeams202609QueryKey(
  args: InferRequestType<(typeof client.settings.teams)['2026-09']['$get']>,
) {
  return ['settings', '/settings/teams/2026-09', args] as const
}

export function getSettingsTeams202609QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.settings.teams)['2026-09']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.settings.teams)['2026-09']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.settings.teams)['2026-09']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsTeams202609QueryKey>
  >({
    queryKey: getSettingsTeams202609QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.teams['2026-09'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSettingsTeams202609<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.settings.teams)['2026-09']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.settings.teams)['2026-09']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings.teams)['2026-09']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsTeams202609QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSettingsTeams202609QueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostSettingsTeams202609MutationKey() {
  return ['settings', '/settings/teams/2026-09', 'POST'] as const
}

export function getPostSettingsTeams202609MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings.teams)['2026-09']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.settings.teams)['2026-09']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsTeams202609MutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.settings.teams)['2026-09']['$post']>) {
      return parseResponse(client.settings.teams['2026-09'].$post(args, options))
    },
  })
}

export function createPostSettingsTeams202609<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings.teams)['2026-09']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.settings.teams)['2026-09']['$post']>,
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
    const mutationDefaults = getPostSettingsTeams202609MutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSettingsTeams202609TeamIdQueryKey(
  args: InferRequestType<(typeof client.settings.teams)['2026-09'][':teamId']['$get']>,
) {
  return ['settings', '/settings/teams/2026-09/:teamId', args] as const
}

export function getSettingsTeams202609TeamIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings.teams)['2026-09'][':teamId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.settings.teams)['2026-09'][':teamId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings.teams)['2026-09'][':teamId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsTeams202609TeamIdQueryKey>
  >({
    queryKey: getSettingsTeams202609TeamIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.teams['2026-09'][':teamId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSettingsTeams202609TeamId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings.teams)['2026-09'][':teamId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.settings.teams)['2026-09'][':teamId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings.teams)['2026-09'][':teamId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsTeams202609TeamIdQueryKey>
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
      ...getSettingsTeams202609TeamIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteSettingsTeams202609TeamIdMutationKey() {
  return ['settings', '/settings/teams/2026-09/:teamId', 'DELETE'] as const
}

export function getDeleteSettingsTeams202609TeamIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.settings.teams)['2026-09'][':teamId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.settings.teams)['2026-09'][':teamId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSettingsTeams202609TeamIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.settings.teams)['2026-09'][':teamId']['$delete']>,
    ) {
      return parseResponse(client.settings.teams['2026-09'][':teamId'].$delete(args, options))
    },
  })
}

export function createDeleteSettingsTeams202609TeamId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.settings.teams)['2026-09'][':teamId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.settings.teams)['2026-09'][':teamId']['$delete']>,
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
    const mutationDefaults = getDeleteSettingsTeams202609TeamIdMutationOptions<
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

export function getPatchSettingsTeams202609TeamIdMutationKey() {
  return ['settings', '/settings/teams/2026-09/:teamId', 'PATCH'] as const
}

export function getPatchSettingsTeams202609TeamIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings.teams)['2026-09'][':teamId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.settings.teams)['2026-09'][':teamId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSettingsTeams202609TeamIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.settings.teams)['2026-09'][':teamId']['$patch']>,
    ) {
      return parseResponse(client.settings.teams['2026-09'][':teamId'].$patch(args, options))
    },
  })
}

export function createPatchSettingsTeams202609TeamId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings.teams)['2026-09'][':teamId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.settings.teams)['2026-09'][':teamId']['$patch']>,
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
    const mutationDefaults = getPatchSettingsTeams202609TeamIdMutationOptions<
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

export function getSettingsTeams202609TeamIdMembersQueryKey(
  args: InferRequestType<(typeof client.settings.teams)['2026-09'][':teamId']['members']['$get']>,
) {
  return ['settings', '/settings/teams/2026-09/:teamId/members', args] as const
}

export function getSettingsTeams202609TeamIdMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings.teams)['2026-09'][':teamId']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.settings.teams)['2026-09'][':teamId']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.settings.teams)['2026-09'][':teamId']['members']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsTeams202609TeamIdMembersQueryKey>
  >({
    queryKey: getSettingsTeams202609TeamIdMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.teams['2026-09'][':teamId'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSettingsTeams202609TeamIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings.teams)['2026-09'][':teamId']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.settings.teams)['2026-09'][':teamId']['members']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.settings.teams)['2026-09'][':teamId']['members']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsTeams202609TeamIdMembersQueryKey>
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
      ...getSettingsTeams202609TeamIdMembersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostSettingsTeams202609TeamIdMembersMutationKey() {
  return ['settings', '/settings/teams/2026-09/:teamId/members', 'POST'] as const
}

export function getPostSettingsTeams202609TeamIdMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.settings.teams)['2026-09'][':teamId']['members']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.settings.teams)['2026-09'][':teamId']['members']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsTeams202609TeamIdMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.settings.teams)['2026-09'][':teamId']['members']['$post']
      >,
    ) {
      return parseResponse(client.settings.teams['2026-09'][':teamId'].members.$post(args, options))
    },
  })
}

export function createPostSettingsTeams202609TeamIdMembers<
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
                ReturnType<(typeof client.settings.teams)['2026-09'][':teamId']['members']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.settings.teams)['2026-09'][':teamId']['members']['$post']>,
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
    const mutationDefaults = getPostSettingsTeams202609TeamIdMembersMutationOptions<
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

export function getPostSettingsTeams202609TeamIdMembersBatchMutationKey() {
  return ['settings', '/settings/teams/2026-09/:teamId/members/batch', 'POST'] as const
}

export function getPostSettingsTeams202609TeamIdMembersBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.settings.teams)['2026-09'][':teamId']['members']['batch']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.settings.teams)['2026-09'][':teamId']['members']['batch']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsTeams202609TeamIdMembersBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.settings.teams)['2026-09'][':teamId']['members']['batch']['$post']
      >,
    ) {
      return parseResponse(
        client.settings.teams['2026-09'][':teamId'].members.batch.$post(args, options),
      )
    },
  })
}

export function createPostSettingsTeams202609TeamIdMembersBatch<
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
                  (typeof client.settings.teams)['2026-09'][':teamId']['members']['batch']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.settings.teams)['2026-09'][':teamId']['members']['batch']['$post']
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
    const mutationDefaults = getPostSettingsTeams202609TeamIdMembersBatchMutationOptions<
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

export function getDeleteSettingsTeams202609TeamIdMembersUserIdMutationKey() {
  return ['settings', '/settings/teams/2026-09/:teamId/members/:userId', 'DELETE'] as const
}

export function getDeleteSettingsTeams202609TeamIdMembersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.settings.teams)['2026-09'][':teamId']['members'][':userId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.settings.teams)['2026-09'][':teamId']['members'][':userId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSettingsTeams202609TeamIdMembersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.settings.teams)['2026-09'][':teamId']['members'][':userId']['$delete']
      >,
    ) {
      return parseResponse(
        client.settings.teams['2026-09'][':teamId'].members[':userId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteSettingsTeams202609TeamIdMembersUserId<
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
                    (typeof client.settings.teams)['2026-09'][':teamId']['members'][':userId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.settings.teams)['2026-09'][':teamId']['members'][':userId']['$delete']
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
    const mutationDefaults = getDeleteSettingsTeams202609TeamIdMembersUserIdMutationOptions<
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
