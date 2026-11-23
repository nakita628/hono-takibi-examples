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

export function getAppKey() {
  return ['App'] as const
}

export function getCommunityContentKey() {
  return ['CommunityContent'] as const
}

export function getContentKey() {
  return ['Content'] as const
}

export function getDestiny2Key() {
  return ['Destiny2'] as const
}

export function getFireteamKey() {
  return ['Fireteam'] as const
}

export function getForumKey() {
  return ['Forum'] as const
}

export function getGetAvailableLocalesKey() {
  return ['GetAvailableLocales'] as const
}

export function getGlobalAlertsKey() {
  return ['GlobalAlerts'] as const
}

export function getGroupV2Key() {
  return ['GroupV2'] as const
}

export function getSettingsKey() {
  return ['Settings'] as const
}

export function getSocialKey() {
  return ['Social'] as const
}

export function getTokensKey() {
  return ['Tokens'] as const
}

export function getTrendingKey() {
  return ['Trending'] as const
}

export function getUserKey() {
  return ['User'] as const
}

export function getUserSystemOverridesKey() {
  return ['UserSystemOverrides'] as const
}

export function getAppApiUsageApplicationIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.App.ApiUsage)[':applicationId']['index']['$get']>
  >,
) {
  return ['App', '/App/ApiUsage/:applicationId/', toValue(args)] as const
}

export function getAppApiUsageApplicationIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.App.ApiUsage)[':applicationId']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppApiUsageApplicationIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.App.ApiUsage[':applicationId'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppApiUsageApplicationIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.App.ApiUsage)[':applicationId']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.App.ApiUsage)[':applicationId']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.App.ApiUsage)[':applicationId']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.App.ApiUsage)[':applicationId']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppApiUsageApplicationIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.App.ApiUsage)[':applicationId']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppApiUsageApplicationIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppApiUsageApplicationIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.App.ApiUsage[':applicationId'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppFirstPartyIndexQueryKey() {
  return ['App', '/App/FirstParty/'] as const
}

export function getAppFirstPartyIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAppFirstPartyIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.App.FirstParty.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppFirstPartyIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.App.FirstParty.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.App.FirstParty.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.App.FirstParty.index.$get>>>
            >
          >,
          ReturnType<typeof getAppFirstPartyIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.App.FirstParty.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAppFirstPartyIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAppFirstPartyIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.App.FirstParty.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserGetBungieNetUserByIdIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.User.GetBungieNetUserById)[':id']['index']['$get']>
  >,
) {
  return ['User', '/User/GetBungieNetUserById/:id/', toValue(args)] as const
}

export function getUserGetBungieNetUserByIdIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.User.GetBungieNetUserById)[':id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserGetBungieNetUserByIdIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.User.GetBungieNetUserById[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserGetBungieNetUserByIdIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.User.GetBungieNetUserById)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.User.GetBungieNetUserById)[':id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.User.GetBungieNetUserById)[':id']['index']['$get']>
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
                  ReturnType<(typeof client.User.GetBungieNetUserById)[':id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUserGetBungieNetUserByIdIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.User.GetBungieNetUserById)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserGetBungieNetUserByIdIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserGetBungieNetUserByIdIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.User.GetBungieNetUserById[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserGetSanitizedPlatformDisplayNamesMembershipIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.User.GetSanitizedPlatformDisplayNames)[':membershipId']['index']['$get']
    >
  >,
) {
  return ['User', '/User/GetSanitizedPlatformDisplayNames/:membershipId/', toValue(args)] as const
}

export function getUserGetSanitizedPlatformDisplayNamesMembershipIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.User.GetSanitizedPlatformDisplayNames)[':membershipId']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getUserGetSanitizedPlatformDisplayNamesMembershipIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.User.GetSanitizedPlatformDisplayNames[':membershipId'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserGetSanitizedPlatformDisplayNamesMembershipIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.User.GetSanitizedPlatformDisplayNames)[':membershipId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.User.GetSanitizedPlatformDisplayNames)[':membershipId']['index']['$get']
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
                    (typeof client.User.GetSanitizedPlatformDisplayNames)[':membershipId']['index']['$get']
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
                    (typeof client.User.GetSanitizedPlatformDisplayNames)[':membershipId']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUserGetSanitizedPlatformDisplayNamesMembershipIdIndexQueryKey>
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
              (typeof client.User.GetSanitizedPlatformDisplayNames)[':membershipId']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserGetSanitizedPlatformDisplayNamesMembershipIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getUserGetSanitizedPlatformDisplayNamesMembershipIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.User.GetSanitizedPlatformDisplayNames[':membershipId'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserGetCredentialTypesForTargetAccountMembershipIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.User.GetCredentialTypesForTargetAccount)[':membershipId']['index']['$get']
    >
  >,
) {
  return ['User', '/User/GetCredentialTypesForTargetAccount/:membershipId/', toValue(args)] as const
}

export function getUserGetCredentialTypesForTargetAccountMembershipIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.User.GetCredentialTypesForTargetAccount)[':membershipId']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getUserGetCredentialTypesForTargetAccountMembershipIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.User.GetCredentialTypesForTargetAccount[':membershipId'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserGetCredentialTypesForTargetAccountMembershipIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.User.GetCredentialTypesForTargetAccount)[':membershipId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.User.GetCredentialTypesForTargetAccount)[':membershipId']['index']['$get']
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
                    (typeof client.User.GetCredentialTypesForTargetAccount)[':membershipId']['index']['$get']
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
                    (typeof client.User.GetCredentialTypesForTargetAccount)[':membershipId']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUserGetCredentialTypesForTargetAccountMembershipIdIndexQueryKey>
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
              (typeof client.User.GetCredentialTypesForTargetAccount)[':membershipId']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserGetCredentialTypesForTargetAccountMembershipIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getUserGetCredentialTypesForTargetAccountMembershipIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.User.GetCredentialTypesForTargetAccount[':membershipId'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getUserGetAvailableThemesIndexQueryKey() {
  return ['User', '/User/GetAvailableThemes/'] as const
}

export function getUserGetAvailableThemesIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUserGetAvailableThemesIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.User.GetAvailableThemes.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserGetAvailableThemesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.User.GetAvailableThemes.index.$get>>>
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
                Awaited<ReturnType<typeof client.User.GetAvailableThemes.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.User.GetAvailableThemes.index.$get>>
              >
            >
          >,
          ReturnType<typeof getUserGetAvailableThemesIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.User.GetAvailableThemes.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserGetAvailableThemesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUserGetAvailableThemesIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.User.GetAvailableThemes.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserGetMembershipsByIdMembershipIdMembershipTypeIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.User.GetMembershipsById)[':membershipId'][':membershipType']['index']['$get']
    >
  >,
) {
  return ['User', '/User/GetMembershipsById/:membershipId/:membershipType/', toValue(args)] as const
}

export function getUserGetMembershipsByIdMembershipIdMembershipTypeIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.User.GetMembershipsById)[':membershipId'][':membershipType']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getUserGetMembershipsByIdMembershipIdMembershipTypeIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.User.GetMembershipsById[':membershipId'][':membershipType'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useUserGetMembershipsByIdMembershipIdMembershipTypeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.User.GetMembershipsById)[':membershipId'][':membershipType']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.User.GetMembershipsById)[':membershipId'][':membershipType']['index']['$get']
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
                    (typeof client.User.GetMembershipsById)[':membershipId'][':membershipType']['index']['$get']
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
                    (typeof client.User.GetMembershipsById)[':membershipId'][':membershipType']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUserGetMembershipsByIdMembershipIdMembershipTypeIndexQueryKey>
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
              (typeof client.User.GetMembershipsById)[':membershipId'][':membershipType']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserGetMembershipsByIdMembershipIdMembershipTypeIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getUserGetMembershipsByIdMembershipIdMembershipTypeIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.User.GetMembershipsById[':membershipId'][':membershipType'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getUserGetMembershipsForCurrentUserIndexQueryKey() {
  return ['User', '/User/GetMembershipsForCurrentUser/'] as const
}

export function getUserGetMembershipsForCurrentUserIndexQueryOptions(
  options?: ClientRequestOptions,
) {
  return {
    queryKey: getUserGetMembershipsForCurrentUserIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.User.GetMembershipsForCurrentUser.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserGetMembershipsForCurrentUserIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.User.GetMembershipsForCurrentUser.index.$get>>
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
                Awaited<ReturnType<typeof client.User.GetMembershipsForCurrentUser.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.User.GetMembershipsForCurrentUser.index.$get>>
              >
            >
          >,
          ReturnType<typeof getUserGetMembershipsForCurrentUserIndexQueryKey>
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
          Awaited<ReturnType<typeof client.User.GetMembershipsForCurrentUser.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserGetMembershipsForCurrentUserIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUserGetMembershipsForCurrentUserIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.User.GetMembershipsForCurrentUser.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserGetMembershipFromHardLinkedCredentialCrTypeCredentialIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.User.GetMembershipFromHardLinkedCredential)[':crType'][':credential']['index']['$get']
    >
  >,
) {
  return [
    'User',
    '/User/GetMembershipFromHardLinkedCredential/:crType/:credential/',
    toValue(args),
  ] as const
}

export function getUserGetMembershipFromHardLinkedCredentialCrTypeCredentialIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.User.GetMembershipFromHardLinkedCredential)[':crType'][':credential']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getUserGetMembershipFromHardLinkedCredentialCrTypeCredentialIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.User.GetMembershipFromHardLinkedCredential[':crType'][':credential'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useUserGetMembershipFromHardLinkedCredentialCrTypeCredentialIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.User.GetMembershipFromHardLinkedCredential)[':crType'][':credential']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.User.GetMembershipFromHardLinkedCredential)[':crType'][':credential']['index']['$get']
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
                    (typeof client.User.GetMembershipFromHardLinkedCredential)[':crType'][':credential']['index']['$get']
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
                    (typeof client.User.GetMembershipFromHardLinkedCredential)[':crType'][':credential']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getUserGetMembershipFromHardLinkedCredentialCrTypeCredentialIndexQueryKey
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
              (typeof client.User.GetMembershipFromHardLinkedCredential)[':crType'][':credential']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserGetMembershipFromHardLinkedCredentialCrTypeCredentialIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getUserGetMembershipFromHardLinkedCredentialCrTypeCredentialIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.User.GetMembershipFromHardLinkedCredential[':crType'][':credential'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getUserSearchPrefixDisplayNamePrefixPageIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.User.Search.Prefix)[':displayNamePrefix'][':page']['index']['$get']
    >
  >,
) {
  return ['User', '/User/Search/Prefix/:displayNamePrefix/:page/', toValue(args)] as const
}

export function getUserSearchPrefixDisplayNamePrefixPageIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.User.Search.Prefix)[':displayNamePrefix'][':page']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserSearchPrefixDisplayNamePrefixPageIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.User.Search.Prefix[':displayNamePrefix'][':page'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserSearchPrefixDisplayNamePrefixPageIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.User.Search.Prefix)[':displayNamePrefix'][':page']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.User.Search.Prefix)[':displayNamePrefix'][':page']['index']['$get']
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
                    (typeof client.User.Search.Prefix)[':displayNamePrefix'][':page']['index']['$get']
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
                    (typeof client.User.Search.Prefix)[':displayNamePrefix'][':page']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUserSearchPrefixDisplayNamePrefixPageIndexQueryKey>
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
              (typeof client.User.Search.Prefix)[':displayNamePrefix'][':page']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserSearchPrefixDisplayNamePrefixPageIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserSearchPrefixDisplayNamePrefixPageIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.User.Search.Prefix[':displayNamePrefix'][':page'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUserSearchGlobalNamePageIndexMutationKey() {
  return ['User', '/User/Search/GlobalName/:page/', 'POST'] as const
}

export function getPostUserSearchGlobalNamePageIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.User.Search.GlobalName)[':page']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.User.Search.GlobalName)[':page']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserSearchGlobalNamePageIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.User.Search.GlobalName)[':page']['index']['$post']>,
    ) {
      return parseResponse(client.User.Search.GlobalName[':page'].index.$post(args, options))
    },
  })
}

export function usePostUserSearchGlobalNamePageIndex<
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
                  ReturnType<(typeof client.User.Search.GlobalName)[':page']['index']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.User.Search.GlobalName)[':page']['index']['$post']>,
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
  const mutationDefaults = getPostUserSearchGlobalNamePageIndexMutationOptions<
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

export function getContentGetContentTypeTypeIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Content.GetContentType)[':type']['index']['$get']>
  >,
) {
  return ['Content', '/Content/GetContentType/:type/', toValue(args)] as const
}

export function getContentGetContentTypeTypeIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Content.GetContentType)[':type']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContentGetContentTypeTypeIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Content.GetContentType[':type'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContentGetContentTypeTypeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Content.GetContentType)[':type']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Content.GetContentType)[':type']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.Content.GetContentType)[':type']['index']['$get']>
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
                  ReturnType<(typeof client.Content.GetContentType)[':type']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getContentGetContentTypeTypeIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.Content.GetContentType)[':type']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContentGetContentTypeTypeIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContentGetContentTypeTypeIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Content.GetContentType[':type'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getContentGetContentByIdIdLocaleIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Content.GetContentById)[':id'][':locale']['index']['$get']>
  >,
) {
  return ['Content', '/Content/GetContentById/:id/:locale/', toValue(args)] as const
}

export function getContentGetContentByIdIdLocaleIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Content.GetContentById)[':id'][':locale']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContentGetContentByIdIdLocaleIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Content.GetContentById[':id'][':locale'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContentGetContentByIdIdLocaleIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Content.GetContentById)[':id'][':locale']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Content.GetContentById)[':id'][':locale']['index']['$get']>
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
                    (typeof client.Content.GetContentById)[':id'][':locale']['index']['$get']
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
                    (typeof client.Content.GetContentById)[':id'][':locale']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getContentGetContentByIdIdLocaleIndexQueryKey>
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
            ReturnType<(typeof client.Content.GetContentById)[':id'][':locale']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContentGetContentByIdIdLocaleIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContentGetContentByIdIdLocaleIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Content.GetContentById[':id'][':locale'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getContentGetContentByTagAndTypeTagTypeLocaleIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Content.GetContentByTagAndType)[':tag'][':type'][':locale']['index']['$get']
    >
  >,
) {
  return ['Content', '/Content/GetContentByTagAndType/:tag/:type/:locale/', toValue(args)] as const
}

export function getContentGetContentByTagAndTypeTagTypeLocaleIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Content.GetContentByTagAndType)[':tag'][':type'][':locale']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContentGetContentByTagAndTypeTagTypeLocaleIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Content.GetContentByTagAndType[':tag'][':type'][':locale'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useContentGetContentByTagAndTypeTagTypeLocaleIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Content.GetContentByTagAndType)[':tag'][':type'][':locale']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Content.GetContentByTagAndType)[':tag'][':type'][':locale']['index']['$get']
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
                    (typeof client.Content.GetContentByTagAndType)[':tag'][':type'][':locale']['index']['$get']
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
                    (typeof client.Content.GetContentByTagAndType)[':tag'][':type'][':locale']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getContentGetContentByTagAndTypeTagTypeLocaleIndexQueryKey>
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
              (typeof client.Content.GetContentByTagAndType)[':tag'][':type'][':locale']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContentGetContentByTagAndTypeTagTypeLocaleIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContentGetContentByTagAndTypeTagTypeLocaleIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Content.GetContentByTagAndType[':tag'][':type'][':locale'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getContentSearchLocaleIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Content.Search)[':locale']['index']['$get']>
  >,
) {
  return ['Content', '/Content/Search/:locale/', toValue(args)] as const
}

export function getContentSearchLocaleIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Content.Search)[':locale']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContentSearchLocaleIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Content.Search[':locale'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContentSearchLocaleIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Content.Search)[':locale']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Content.Search)[':locale']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Content.Search)[':locale']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Content.Search)[':locale']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContentSearchLocaleIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.Content.Search)[':locale']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContentSearchLocaleIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContentSearchLocaleIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Content.Search[':locale'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getContentSearchContentByTagAndTypeTagTypeLocaleIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Content.SearchContentByTagAndType)[':tag'][':type'][':locale']['index']['$get']
    >
  >,
) {
  return [
    'Content',
    '/Content/SearchContentByTagAndType/:tag/:type/:locale/',
    toValue(args),
  ] as const
}

export function getContentSearchContentByTagAndTypeTagTypeLocaleIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Content.SearchContentByTagAndType)[':tag'][':type'][':locale']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContentSearchContentByTagAndTypeTagTypeLocaleIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Content.SearchContentByTagAndType[':tag'][':type'][':locale'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useContentSearchContentByTagAndTypeTagTypeLocaleIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Content.SearchContentByTagAndType)[':tag'][':type'][':locale']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Content.SearchContentByTagAndType)[':tag'][':type'][':locale']['index']['$get']
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
                    (typeof client.Content.SearchContentByTagAndType)[':tag'][':type'][':locale']['index']['$get']
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
                    (typeof client.Content.SearchContentByTagAndType)[':tag'][':type'][':locale']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getContentSearchContentByTagAndTypeTagTypeLocaleIndexQueryKey>
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
              (typeof client.Content.SearchContentByTagAndType)[':tag'][':type'][':locale']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContentSearchContentByTagAndTypeTagTypeLocaleIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContentSearchContentByTagAndTypeTagTypeLocaleIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Content.SearchContentByTagAndType[':tag'][':type'][':locale'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getContentSearchHelpArticlesSearchtextSizeIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Content.SearchHelpArticles)[':searchtext'][':size']['index']['$get']
    >
  >,
) {
  return ['Content', '/Content/SearchHelpArticles/:searchtext/:size/', toValue(args)] as const
}

export function getContentSearchHelpArticlesSearchtextSizeIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Content.SearchHelpArticles)[':searchtext'][':size']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContentSearchHelpArticlesSearchtextSizeIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Content.SearchHelpArticles[':searchtext'][':size'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContentSearchHelpArticlesSearchtextSizeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Content.SearchHelpArticles)[':searchtext'][':size']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Content.SearchHelpArticles)[':searchtext'][':size']['index']['$get']
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
                    (typeof client.Content.SearchHelpArticles)[':searchtext'][':size']['index']['$get']
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
                    (typeof client.Content.SearchHelpArticles)[':searchtext'][':size']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getContentSearchHelpArticlesSearchtextSizeIndexQueryKey>
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
              (typeof client.Content.SearchHelpArticles)[':searchtext'][':size']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContentSearchHelpArticlesSearchtextSizeIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContentSearchHelpArticlesSearchtextSizeIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Content.SearchHelpArticles[':searchtext'][':size'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getContentRssNewsArticlesPageTokenIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Content.Rss.NewsArticles)[':pageToken']['index']['$get']>
  >,
) {
  return ['Content', '/Content/Rss/NewsArticles/:pageToken/', toValue(args)] as const
}

export function getContentRssNewsArticlesPageTokenIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Content.Rss.NewsArticles)[':pageToken']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContentRssNewsArticlesPageTokenIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Content.Rss.NewsArticles[':pageToken'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContentRssNewsArticlesPageTokenIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Content.Rss.NewsArticles)[':pageToken']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Content.Rss.NewsArticles)[':pageToken']['index']['$get']>
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
                    (typeof client.Content.Rss.NewsArticles)[':pageToken']['index']['$get']
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
                    (typeof client.Content.Rss.NewsArticles)[':pageToken']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getContentRssNewsArticlesPageTokenIndexQueryKey>
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
            ReturnType<(typeof client.Content.Rss.NewsArticles)[':pageToken']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContentRssNewsArticlesPageTokenIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContentRssNewsArticlesPageTokenIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Content.Rss.NewsArticles[':pageToken'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getForumGetTopicsPagedPagePageSizeGroupSortQuickDateCategoryFilterIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Forum.GetTopicsPaged)[':page'][':pageSize'][':group'][':sort'][':quickDate'][':categoryFilter']['index']['$get']
    >
  >,
) {
  return [
    'Forum',
    '/Forum/GetTopicsPaged/:page/:pageSize/:group/:sort/:quickDate/:categoryFilter/',
    toValue(args),
  ] as const
}

export function getForumGetTopicsPagedPagePageSizeGroupSortQuickDateCategoryFilterIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Forum.GetTopicsPaged)[':page'][':pageSize'][':group'][':sort'][':quickDate'][':categoryFilter']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getForumGetTopicsPagedPagePageSizeGroupSortQuickDateCategoryFilterIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Forum.GetTopicsPaged[':page'][':pageSize'][':group'][':sort'][':quickDate'][
          ':categoryFilter'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useForumGetTopicsPagedPagePageSizeGroupSortQuickDateCategoryFilterIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Forum.GetTopicsPaged)[':page'][':pageSize'][':group'][':sort'][':quickDate'][':categoryFilter']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Forum.GetTopicsPaged)[':page'][':pageSize'][':group'][':sort'][':quickDate'][':categoryFilter']['index']['$get']
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
                    (typeof client.Forum.GetTopicsPaged)[':page'][':pageSize'][':group'][':sort'][':quickDate'][':categoryFilter']['index']['$get']
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
                    (typeof client.Forum.GetTopicsPaged)[':page'][':pageSize'][':group'][':sort'][':quickDate'][':categoryFilter']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getForumGetTopicsPagedPagePageSizeGroupSortQuickDateCategoryFilterIndexQueryKey
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
              (typeof client.Forum.GetTopicsPaged)[':page'][':pageSize'][':group'][':sort'][':quickDate'][':categoryFilter']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getForumGetTopicsPagedPagePageSizeGroupSortQuickDateCategoryFilterIndexQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getForumGetTopicsPagedPagePageSizeGroupSortQuickDateCategoryFilterIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.Forum.GetTopicsPaged[':page'][':pageSize'][':group'][':sort'][':quickDate'][
            ':categoryFilter'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getForumGetCoreTopicsPagedPageSortQuickDateCategoryFilterIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Forum.GetCoreTopicsPaged)[':page'][':sort'][':quickDate'][':categoryFilter']['index']['$get']
    >
  >,
) {
  return [
    'Forum',
    '/Forum/GetCoreTopicsPaged/:page/:sort/:quickDate/:categoryFilter/',
    toValue(args),
  ] as const
}

export function getForumGetCoreTopicsPagedPageSortQuickDateCategoryFilterIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Forum.GetCoreTopicsPaged)[':page'][':sort'][':quickDate'][':categoryFilter']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getForumGetCoreTopicsPagedPageSortQuickDateCategoryFilterIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Forum.GetCoreTopicsPaged[':page'][':sort'][':quickDate'][
          ':categoryFilter'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useForumGetCoreTopicsPagedPageSortQuickDateCategoryFilterIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Forum.GetCoreTopicsPaged)[':page'][':sort'][':quickDate'][':categoryFilter']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Forum.GetCoreTopicsPaged)[':page'][':sort'][':quickDate'][':categoryFilter']['index']['$get']
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
                    (typeof client.Forum.GetCoreTopicsPaged)[':page'][':sort'][':quickDate'][':categoryFilter']['index']['$get']
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
                    (typeof client.Forum.GetCoreTopicsPaged)[':page'][':sort'][':quickDate'][':categoryFilter']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getForumGetCoreTopicsPagedPageSortQuickDateCategoryFilterIndexQueryKey>
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
              (typeof client.Forum.GetCoreTopicsPaged)[':page'][':sort'][':quickDate'][':categoryFilter']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getForumGetCoreTopicsPagedPageSortQuickDateCategoryFilterIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getForumGetCoreTopicsPagedPageSortQuickDateCategoryFilterIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.Forum.GetCoreTopicsPaged[':page'][':sort'][':quickDate'][
            ':categoryFilter'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getForumGetPostsThreadedPagedParentPostIdPagePageSizeReplySizeGetParentPostRootThreadModeSortModeIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Forum.GetPostsThreadedPaged)[':parentPostId'][':page'][':pageSize'][':replySize'][':getParentPost'][':rootThreadMode'][':sortMode']['index']['$get']
    >
  >,
) {
  return [
    'Forum',
    '/Forum/GetPostsThreadedPaged/:parentPostId/:page/:pageSize/:replySize/:getParentPost/:rootThreadMode/:sortMode/',
    toValue(args),
  ] as const
}

export function getForumGetPostsThreadedPagedParentPostIdPagePageSizeReplySizeGetParentPostRootThreadModeSortModeIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Forum.GetPostsThreadedPaged)[':parentPostId'][':page'][':pageSize'][':replySize'][':getParentPost'][':rootThreadMode'][':sortMode']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getForumGetPostsThreadedPagedParentPostIdPagePageSizeReplySizeGetParentPostRootThreadModeSortModeIndexQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Forum.GetPostsThreadedPaged[':parentPostId'][':page'][':pageSize'][':replySize'][
          ':getParentPost'
        ][':rootThreadMode'][':sortMode'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useForumGetPostsThreadedPagedParentPostIdPagePageSizeReplySizeGetParentPostRootThreadModeSortModeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Forum.GetPostsThreadedPaged)[':parentPostId'][':page'][':pageSize'][':replySize'][':getParentPost'][':rootThreadMode'][':sortMode']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Forum.GetPostsThreadedPaged)[':parentPostId'][':page'][':pageSize'][':replySize'][':getParentPost'][':rootThreadMode'][':sortMode']['index']['$get']
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
                    (typeof client.Forum.GetPostsThreadedPaged)[':parentPostId'][':page'][':pageSize'][':replySize'][':getParentPost'][':rootThreadMode'][':sortMode']['index']['$get']
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
                    (typeof client.Forum.GetPostsThreadedPaged)[':parentPostId'][':page'][':pageSize'][':replySize'][':getParentPost'][':rootThreadMode'][':sortMode']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getForumGetPostsThreadedPagedParentPostIdPagePageSizeReplySizeGetParentPostRootThreadModeSortModeIndexQueryKey
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
              (typeof client.Forum.GetPostsThreadedPaged)[':parentPostId'][':page'][':pageSize'][':replySize'][':getParentPost'][':rootThreadMode'][':sortMode']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getForumGetPostsThreadedPagedParentPostIdPagePageSizeReplySizeGetParentPostRootThreadModeSortModeIndexQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getForumGetPostsThreadedPagedParentPostIdPagePageSizeReplySizeGetParentPostRootThreadModeSortModeIndexQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.Forum.GetPostsThreadedPaged[':parentPostId'][':page'][':pageSize'][':replySize'][
            ':getParentPost'
          ][':rootThreadMode'][':sortMode'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getForumGetPostsThreadedPagedFromChildChildPostIdPagePageSizeReplySizeRootThreadModeSortModeIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Forum.GetPostsThreadedPagedFromChild)[':childPostId'][':page'][':pageSize'][':replySize'][':rootThreadMode'][':sortMode']['index']['$get']
    >
  >,
) {
  return [
    'Forum',
    '/Forum/GetPostsThreadedPagedFromChild/:childPostId/:page/:pageSize/:replySize/:rootThreadMode/:sortMode/',
    toValue(args),
  ] as const
}

export function getForumGetPostsThreadedPagedFromChildChildPostIdPagePageSizeReplySizeRootThreadModeSortModeIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Forum.GetPostsThreadedPagedFromChild)[':childPostId'][':page'][':pageSize'][':replySize'][':rootThreadMode'][':sortMode']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getForumGetPostsThreadedPagedFromChildChildPostIdPagePageSizeReplySizeRootThreadModeSortModeIndexQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Forum.GetPostsThreadedPagedFromChild[':childPostId'][':page'][':pageSize'][
          ':replySize'
        ][':rootThreadMode'][':sortMode'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useForumGetPostsThreadedPagedFromChildChildPostIdPagePageSizeReplySizeRootThreadModeSortModeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Forum.GetPostsThreadedPagedFromChild)[':childPostId'][':page'][':pageSize'][':replySize'][':rootThreadMode'][':sortMode']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Forum.GetPostsThreadedPagedFromChild)[':childPostId'][':page'][':pageSize'][':replySize'][':rootThreadMode'][':sortMode']['index']['$get']
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
                    (typeof client.Forum.GetPostsThreadedPagedFromChild)[':childPostId'][':page'][':pageSize'][':replySize'][':rootThreadMode'][':sortMode']['index']['$get']
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
                    (typeof client.Forum.GetPostsThreadedPagedFromChild)[':childPostId'][':page'][':pageSize'][':replySize'][':rootThreadMode'][':sortMode']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getForumGetPostsThreadedPagedFromChildChildPostIdPagePageSizeReplySizeRootThreadModeSortModeIndexQueryKey
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
              (typeof client.Forum.GetPostsThreadedPagedFromChild)[':childPostId'][':page'][':pageSize'][':replySize'][':rootThreadMode'][':sortMode']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getForumGetPostsThreadedPagedFromChildChildPostIdPagePageSizeReplySizeRootThreadModeSortModeIndexQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getForumGetPostsThreadedPagedFromChildChildPostIdPagePageSizeReplySizeRootThreadModeSortModeIndexQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.Forum.GetPostsThreadedPagedFromChild[':childPostId'][':page'][':pageSize'][
            ':replySize'
          ][':rootThreadMode'][':sortMode'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getForumGetPostAndParentChildPostIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Forum.GetPostAndParent)[':childPostId']['index']['$get']>
  >,
) {
  return ['Forum', '/Forum/GetPostAndParent/:childPostId/', toValue(args)] as const
}

export function getForumGetPostAndParentChildPostIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Forum.GetPostAndParent)[':childPostId']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getForumGetPostAndParentChildPostIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Forum.GetPostAndParent[':childPostId'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useForumGetPostAndParentChildPostIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Forum.GetPostAndParent)[':childPostId']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Forum.GetPostAndParent)[':childPostId']['index']['$get']>
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
                    (typeof client.Forum.GetPostAndParent)[':childPostId']['index']['$get']
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
                    (typeof client.Forum.GetPostAndParent)[':childPostId']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getForumGetPostAndParentChildPostIdIndexQueryKey>
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
            ReturnType<(typeof client.Forum.GetPostAndParent)[':childPostId']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getForumGetPostAndParentChildPostIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getForumGetPostAndParentChildPostIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Forum.GetPostAndParent[':childPostId'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getForumGetPostAndParentAwaitingApprovalChildPostIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Forum.GetPostAndParentAwaitingApproval)[':childPostId']['index']['$get']
    >
  >,
) {
  return ['Forum', '/Forum/GetPostAndParentAwaitingApproval/:childPostId/', toValue(args)] as const
}

export function getForumGetPostAndParentAwaitingApprovalChildPostIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Forum.GetPostAndParentAwaitingApproval)[':childPostId']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getForumGetPostAndParentAwaitingApprovalChildPostIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Forum.GetPostAndParentAwaitingApproval[':childPostId'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useForumGetPostAndParentAwaitingApprovalChildPostIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Forum.GetPostAndParentAwaitingApproval)[':childPostId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Forum.GetPostAndParentAwaitingApproval)[':childPostId']['index']['$get']
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
                    (typeof client.Forum.GetPostAndParentAwaitingApproval)[':childPostId']['index']['$get']
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
                    (typeof client.Forum.GetPostAndParentAwaitingApproval)[':childPostId']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getForumGetPostAndParentAwaitingApprovalChildPostIdIndexQueryKey>
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
              (typeof client.Forum.GetPostAndParentAwaitingApproval)[':childPostId']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getForumGetPostAndParentAwaitingApprovalChildPostIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getForumGetPostAndParentAwaitingApprovalChildPostIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.Forum.GetPostAndParentAwaitingApproval[':childPostId'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getForumGetTopicForContentContentIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Forum.GetTopicForContent)[':contentId']['index']['$get']>
  >,
) {
  return ['Forum', '/Forum/GetTopicForContent/:contentId/', toValue(args)] as const
}

export function getForumGetTopicForContentContentIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Forum.GetTopicForContent)[':contentId']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getForumGetTopicForContentContentIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Forum.GetTopicForContent[':contentId'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useForumGetTopicForContentContentIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Forum.GetTopicForContent)[':contentId']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Forum.GetTopicForContent)[':contentId']['index']['$get']>
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
                    (typeof client.Forum.GetTopicForContent)[':contentId']['index']['$get']
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
                    (typeof client.Forum.GetTopicForContent)[':contentId']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getForumGetTopicForContentContentIdIndexQueryKey>
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
            ReturnType<(typeof client.Forum.GetTopicForContent)[':contentId']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getForumGetTopicForContentContentIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getForumGetTopicForContentContentIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Forum.GetTopicForContent[':contentId'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getForumGetForumTagSuggestionsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Forum.GetForumTagSuggestions.index.$get>>,
) {
  return ['Forum', '/Forum/GetForumTagSuggestions/', toValue(args)] as const
}

export function getForumGetForumTagSuggestionsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Forum.GetForumTagSuggestions.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getForumGetForumTagSuggestionsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Forum.GetForumTagSuggestions.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useForumGetForumTagSuggestionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.Forum.GetForumTagSuggestions.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Forum.GetForumTagSuggestions.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.Forum.GetForumTagSuggestions.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.Forum.GetForumTagSuggestions.index.$get>>
              >
            >
          >,
          ReturnType<typeof getForumGetForumTagSuggestionsIndexQueryKey>
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
          Awaited<ReturnType<typeof client.Forum.GetForumTagSuggestions.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getForumGetForumTagSuggestionsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getForumGetForumTagSuggestionsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Forum.GetForumTagSuggestions.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getForumPollTopicIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Forum.Poll)[':topicId']['index']['$get']>>,
) {
  return ['Forum', '/Forum/Poll/:topicId/', toValue(args)] as const
}

export function getForumPollTopicIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Forum.Poll)[':topicId']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getForumPollTopicIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Forum.Poll[':topicId'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useForumPollTopicIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Forum.Poll)[':topicId']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Forum.Poll)[':topicId']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Forum.Poll)[':topicId']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Forum.Poll)[':topicId']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getForumPollTopicIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.Forum.Poll)[':topicId']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getForumPollTopicIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getForumPollTopicIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Forum.Poll[':topicId'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostForumRecruitSummariesIndexMutationKey() {
  return ['Forum', '/Forum/Recruit/Summaries/', 'POST'] as const
}

export function getPostForumRecruitSummariesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Forum.Recruit.Summaries.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.Forum.Recruit.Summaries.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostForumRecruitSummariesIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Forum.Recruit.Summaries.index.$post>) {
      return parseResponse(client.Forum.Recruit.Summaries.index.$post(args, options))
    },
  })
}

export function usePostForumRecruitSummariesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.Forum.Recruit.Summaries.index.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.Forum.Recruit.Summaries.index.$post>,
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
  const mutationDefaults = getPostForumRecruitSummariesIndexMutationOptions<
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

export function getGroupV2GetAvailableAvatarsIndexQueryKey() {
  return ['GroupV2', '/GroupV2/GetAvailableAvatars/'] as const
}

export function getGroupV2GetAvailableAvatarsIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getGroupV2GetAvailableAvatarsIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.GroupV2.GetAvailableAvatars.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupV2GetAvailableAvatarsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.GroupV2.GetAvailableAvatars.index.$get>>
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
                Awaited<ReturnType<typeof client.GroupV2.GetAvailableAvatars.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.GroupV2.GetAvailableAvatars.index.$get>>
              >
            >
          >,
          ReturnType<typeof getGroupV2GetAvailableAvatarsIndexQueryKey>
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
          Awaited<ReturnType<typeof client.GroupV2.GetAvailableAvatars.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupV2GetAvailableAvatarsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getGroupV2GetAvailableAvatarsIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.GroupV2.GetAvailableAvatars.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGroupV2GetAvailableThemesIndexQueryKey() {
  return ['GroupV2', '/GroupV2/GetAvailableThemes/'] as const
}

export function getGroupV2GetAvailableThemesIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getGroupV2GetAvailableThemesIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.GroupV2.GetAvailableThemes.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupV2GetAvailableThemesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.GroupV2.GetAvailableThemes.index.$get>>>
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
                Awaited<ReturnType<typeof client.GroupV2.GetAvailableThemes.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.GroupV2.GetAvailableThemes.index.$get>>
              >
            >
          >,
          ReturnType<typeof getGroupV2GetAvailableThemesIndexQueryKey>
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
          Awaited<ReturnType<typeof client.GroupV2.GetAvailableThemes.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupV2GetAvailableThemesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getGroupV2GetAvailableThemesIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.GroupV2.GetAvailableThemes.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGroupV2GetUserClanInviteSettingMTypeIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.GroupV2.GetUserClanInviteSetting)[':mType']['index']['$get']>
  >,
) {
  return ['GroupV2', '/GroupV2/GetUserClanInviteSetting/:mType/', toValue(args)] as const
}

export function getGroupV2GetUserClanInviteSettingMTypeIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.GroupV2.GetUserClanInviteSetting)[':mType']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupV2GetUserClanInviteSettingMTypeIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.GroupV2.GetUserClanInviteSetting[':mType'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupV2GetUserClanInviteSettingMTypeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.GroupV2.GetUserClanInviteSetting)[':mType']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.GroupV2.GetUserClanInviteSetting)[':mType']['index']['$get']>
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
                    (typeof client.GroupV2.GetUserClanInviteSetting)[':mType']['index']['$get']
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
                    (typeof client.GroupV2.GetUserClanInviteSetting)[':mType']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGroupV2GetUserClanInviteSettingMTypeIndexQueryKey>
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
            ReturnType<(typeof client.GroupV2.GetUserClanInviteSetting)[':mType']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupV2GetUserClanInviteSettingMTypeIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupV2GetUserClanInviteSettingMTypeIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.GroupV2.GetUserClanInviteSetting[':mType'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGroupV2RecommendedGroupTypeCreateDateRangeIndexMutationKey() {
  return ['GroupV2', '/GroupV2/Recommended/:groupType/:createDateRange/', 'POST'] as const
}

export function getPostGroupV2RecommendedGroupTypeCreateDateRangeIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.GroupV2.Recommended)[':groupType'][':createDateRange']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.GroupV2.Recommended)[':groupType'][':createDateRange']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGroupV2RecommendedGroupTypeCreateDateRangeIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.GroupV2.Recommended)[':groupType'][':createDateRange']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.GroupV2.Recommended[':groupType'][':createDateRange'].index.$post(args, options),
      )
    },
  })
}

export function usePostGroupV2RecommendedGroupTypeCreateDateRangeIndex<
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
                    (typeof client.GroupV2.Recommended)[':groupType'][':createDateRange']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.GroupV2.Recommended)[':groupType'][':createDateRange']['index']['$post']
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
  const mutationDefaults = getPostGroupV2RecommendedGroupTypeCreateDateRangeIndexMutationOptions<
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

export function getPostGroupV2SearchIndexMutationKey() {
  return ['GroupV2', '/GroupV2/Search/', 'POST'] as const
}

export function getPostGroupV2SearchIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.GroupV2.Search.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.GroupV2.Search.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupV2SearchIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.GroupV2.Search.index.$post>) {
      return parseResponse(client.GroupV2.Search.index.$post(args, options))
    },
  })
}

export function usePostGroupV2SearchIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.GroupV2.Search.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.GroupV2.Search.index.$post>,
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
  const mutationDefaults = getPostGroupV2SearchIndexMutationOptions<TError, TOnMutateResult>(
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

export function getGroupV2GroupIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.GroupV2)[':groupId']['index']['$get']>>,
) {
  return ['GroupV2', '/GroupV2/:groupId/', toValue(args)] as const
}

export function getGroupV2GroupIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.GroupV2)[':groupId']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupV2GroupIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.GroupV2[':groupId'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupV2GroupIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.GroupV2)[':groupId']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.GroupV2)[':groupId']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.GroupV2)[':groupId']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.GroupV2)[':groupId']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGroupV2GroupIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.GroupV2)[':groupId']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupV2GroupIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupV2GroupIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.GroupV2[':groupId'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGroupV2NameGroupNameGroupTypeIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.GroupV2.Name)[':groupName'][':groupType']['index']['$get']>
  >,
) {
  return ['GroupV2', '/GroupV2/Name/:groupName/:groupType/', toValue(args)] as const
}

export function getGroupV2NameGroupNameGroupTypeIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.GroupV2.Name)[':groupName'][':groupType']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupV2NameGroupNameGroupTypeIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.GroupV2.Name[':groupName'][':groupType'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupV2NameGroupNameGroupTypeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.GroupV2.Name)[':groupName'][':groupType']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.GroupV2.Name)[':groupName'][':groupType']['index']['$get']>
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
                    (typeof client.GroupV2.Name)[':groupName'][':groupType']['index']['$get']
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
                    (typeof client.GroupV2.Name)[':groupName'][':groupType']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGroupV2NameGroupNameGroupTypeIndexQueryKey>
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
            ReturnType<(typeof client.GroupV2.Name)[':groupName'][':groupType']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupV2NameGroupNameGroupTypeIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupV2NameGroupNameGroupTypeIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.GroupV2.Name[':groupName'][':groupType'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGroupV2NameV2IndexMutationKey() {
  return ['GroupV2', '/GroupV2/NameV2/', 'POST'] as const
}

export function getPostGroupV2NameV2IndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.GroupV2.NameV2.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.GroupV2.NameV2.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupV2NameV2IndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.GroupV2.NameV2.index.$post>) {
      return parseResponse(client.GroupV2.NameV2.index.$post(args, options))
    },
  })
}

export function usePostGroupV2NameV2Index<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.GroupV2.NameV2.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.GroupV2.NameV2.index.$post>,
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
  const mutationDefaults = getPostGroupV2NameV2IndexMutationOptions<TError, TOnMutateResult>(
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

export function getGroupV2GroupIdOptionalConversationsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.GroupV2)[':groupId']['OptionalConversations']['index']['$get']>
  >,
) {
  return ['GroupV2', '/GroupV2/:groupId/OptionalConversations/', toValue(args)] as const
}

export function getGroupV2GroupIdOptionalConversationsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.GroupV2)[':groupId']['OptionalConversations']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupV2GroupIdOptionalConversationsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.GroupV2[':groupId'].OptionalConversations.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupV2GroupIdOptionalConversationsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.GroupV2)[':groupId']['OptionalConversations']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.GroupV2)[':groupId']['OptionalConversations']['index']['$get']>
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
                    (typeof client.GroupV2)[':groupId']['OptionalConversations']['index']['$get']
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
                    (typeof client.GroupV2)[':groupId']['OptionalConversations']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGroupV2GroupIdOptionalConversationsIndexQueryKey>
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
              (typeof client.GroupV2)[':groupId']['OptionalConversations']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupV2GroupIdOptionalConversationsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupV2GroupIdOptionalConversationsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.GroupV2[':groupId'].OptionalConversations.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGroupV2GroupIdEditIndexMutationKey() {
  return ['GroupV2', '/GroupV2/:groupId/Edit/', 'POST'] as const
}

export function getPostGroupV2GroupIdEditIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.GroupV2)[':groupId']['Edit']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.GroupV2)[':groupId']['Edit']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupV2GroupIdEditIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.GroupV2)[':groupId']['Edit']['index']['$post']>,
    ) {
      return parseResponse(client.GroupV2[':groupId'].Edit.index.$post(args, options))
    },
  })
}

export function usePostGroupV2GroupIdEditIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.GroupV2)[':groupId']['Edit']['index']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.GroupV2)[':groupId']['Edit']['index']['$post']>,
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
  const mutationDefaults = getPostGroupV2GroupIdEditIndexMutationOptions<TError, TOnMutateResult>(
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

export function getPostGroupV2GroupIdEditClanBannerIndexMutationKey() {
  return ['GroupV2', '/GroupV2/:groupId/EditClanBanner/', 'POST'] as const
}

export function getPostGroupV2GroupIdEditClanBannerIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.GroupV2)[':groupId']['EditClanBanner']['index']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.GroupV2)[':groupId']['EditClanBanner']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupV2GroupIdEditClanBannerIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.GroupV2)[':groupId']['EditClanBanner']['index']['$post']
      >,
    ) {
      return parseResponse(client.GroupV2[':groupId'].EditClanBanner.index.$post(args, options))
    },
  })
}

export function usePostGroupV2GroupIdEditClanBannerIndex<
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
                    (typeof client.GroupV2)[':groupId']['EditClanBanner']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.GroupV2)[':groupId']['EditClanBanner']['index']['$post']>,
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
  const mutationDefaults = getPostGroupV2GroupIdEditClanBannerIndexMutationOptions<
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

export function getPostGroupV2GroupIdEditFounderOptionsIndexMutationKey() {
  return ['GroupV2', '/GroupV2/:groupId/EditFounderOptions/', 'POST'] as const
}

export function getPostGroupV2GroupIdEditFounderOptionsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.GroupV2)[':groupId']['EditFounderOptions']['index']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.GroupV2)[':groupId']['EditFounderOptions']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupV2GroupIdEditFounderOptionsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.GroupV2)[':groupId']['EditFounderOptions']['index']['$post']
      >,
    ) {
      return parseResponse(client.GroupV2[':groupId'].EditFounderOptions.index.$post(args, options))
    },
  })
}

export function usePostGroupV2GroupIdEditFounderOptionsIndex<
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
                    (typeof client.GroupV2)[':groupId']['EditFounderOptions']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.GroupV2)[':groupId']['EditFounderOptions']['index']['$post']
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
  const mutationDefaults = getPostGroupV2GroupIdEditFounderOptionsIndexMutationOptions<
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

export function getPostGroupV2GroupIdOptionalConversationsAddIndexMutationKey() {
  return ['GroupV2', '/GroupV2/:groupId/OptionalConversations/Add/', 'POST'] as const
}

export function getPostGroupV2GroupIdOptionalConversationsAddIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.GroupV2)[':groupId']['OptionalConversations']['Add']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.GroupV2)[':groupId']['OptionalConversations']['Add']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGroupV2GroupIdOptionalConversationsAddIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.GroupV2)[':groupId']['OptionalConversations']['Add']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.GroupV2[':groupId'].OptionalConversations.Add.index.$post(args, options),
      )
    },
  })
}

export function usePostGroupV2GroupIdOptionalConversationsAddIndex<
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
                    (typeof client.GroupV2)[':groupId']['OptionalConversations']['Add']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.GroupV2)[':groupId']['OptionalConversations']['Add']['index']['$post']
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
  const mutationDefaults = getPostGroupV2GroupIdOptionalConversationsAddIndexMutationOptions<
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

export function getPostGroupV2GroupIdOptionalConversationsEditConversationIdIndexMutationKey() {
  return [
    'GroupV2',
    '/GroupV2/:groupId/OptionalConversations/Edit/:conversationId/',
    'POST',
  ] as const
}

export function getPostGroupV2GroupIdOptionalConversationsEditConversationIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.GroupV2)[':groupId']['OptionalConversations']['Edit'][':conversationId']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.GroupV2)[':groupId']['OptionalConversations']['Edit'][':conversationId']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGroupV2GroupIdOptionalConversationsEditConversationIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.GroupV2)[':groupId']['OptionalConversations']['Edit'][':conversationId']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.GroupV2[':groupId'].OptionalConversations.Edit[':conversationId'].index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostGroupV2GroupIdOptionalConversationsEditConversationIdIndex<
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
                    (typeof client.GroupV2)[':groupId']['OptionalConversations']['Edit'][':conversationId']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.GroupV2)[':groupId']['OptionalConversations']['Edit'][':conversationId']['index']['$post']
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
    getPostGroupV2GroupIdOptionalConversationsEditConversationIdIndexMutationOptions<
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

export function getGroupV2GroupIdMembersIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.GroupV2)[':groupId']['Members']['index']['$get']>
  >,
) {
  return ['GroupV2', '/GroupV2/:groupId/Members/', toValue(args)] as const
}

export function getGroupV2GroupIdMembersIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.GroupV2)[':groupId']['Members']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupV2GroupIdMembersIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.GroupV2[':groupId'].Members.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupV2GroupIdMembersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.GroupV2)[':groupId']['Members']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.GroupV2)[':groupId']['Members']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.GroupV2)[':groupId']['Members']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.GroupV2)[':groupId']['Members']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGroupV2GroupIdMembersIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.GroupV2)[':groupId']['Members']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupV2GroupIdMembersIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupV2GroupIdMembersIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.GroupV2[':groupId'].Members.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGroupV2GroupIdAdminsAndFounderIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.GroupV2)[':groupId']['AdminsAndFounder']['index']['$get']>
  >,
) {
  return ['GroupV2', '/GroupV2/:groupId/AdminsAndFounder/', toValue(args)] as const
}

export function getGroupV2GroupIdAdminsAndFounderIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.GroupV2)[':groupId']['AdminsAndFounder']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupV2GroupIdAdminsAndFounderIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.GroupV2[':groupId'].AdminsAndFounder.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupV2GroupIdAdminsAndFounderIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.GroupV2)[':groupId']['AdminsAndFounder']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.GroupV2)[':groupId']['AdminsAndFounder']['index']['$get']>
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
                    (typeof client.GroupV2)[':groupId']['AdminsAndFounder']['index']['$get']
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
                    (typeof client.GroupV2)[':groupId']['AdminsAndFounder']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGroupV2GroupIdAdminsAndFounderIndexQueryKey>
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
            ReturnType<(typeof client.GroupV2)[':groupId']['AdminsAndFounder']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupV2GroupIdAdminsAndFounderIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupV2GroupIdAdminsAndFounderIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.GroupV2[':groupId'].AdminsAndFounder.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGroupV2GroupIdMembersMembershipTypeMembershipIdSetMembershipTypeMemberTypeIndexMutationKey() {
  return [
    'GroupV2',
    '/GroupV2/:groupId/Members/:membershipType/:membershipId/SetMembershipType/:memberType/',
    'POST',
  ] as const
}

export function getPostGroupV2GroupIdMembersMembershipTypeMembershipIdSetMembershipTypeMemberTypeIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['SetMembershipType'][':memberType']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['SetMembershipType'][':memberType']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostGroupV2GroupIdMembersMembershipTypeMembershipIdSetMembershipTypeMemberTypeIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['SetMembershipType'][':memberType']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.GroupV2[':groupId'].Members[':membershipType'][':membershipId'].SetMembershipType[
          ':memberType'
        ].index.$post(args, options),
      )
    },
  })
}

export function usePostGroupV2GroupIdMembersMembershipTypeMembershipIdSetMembershipTypeMemberTypeIndex<
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
                    (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['SetMembershipType'][':memberType']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['SetMembershipType'][':memberType']['index']['$post']
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
    getPostGroupV2GroupIdMembersMembershipTypeMembershipIdSetMembershipTypeMemberTypeIndexMutationOptions<
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

export function getPostGroupV2GroupIdMembersMembershipTypeMembershipIdKickIndexMutationKey() {
  return [
    'GroupV2',
    '/GroupV2/:groupId/Members/:membershipType/:membershipId/Kick/',
    'POST',
  ] as const
}

export function getPostGroupV2GroupIdMembersMembershipTypeMembershipIdKickIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['Kick']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['Kick']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGroupV2GroupIdMembersMembershipTypeMembershipIdKickIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['Kick']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.GroupV2[':groupId'].Members[':membershipType'][':membershipId'].Kick.index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostGroupV2GroupIdMembersMembershipTypeMembershipIdKickIndex<
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
                    (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['Kick']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['Kick']['index']['$post']
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
    getPostGroupV2GroupIdMembersMembershipTypeMembershipIdKickIndexMutationOptions<
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

export function getPostGroupV2GroupIdMembersMembershipTypeMembershipIdBanIndexMutationKey() {
  return [
    'GroupV2',
    '/GroupV2/:groupId/Members/:membershipType/:membershipId/Ban/',
    'POST',
  ] as const
}

export function getPostGroupV2GroupIdMembersMembershipTypeMembershipIdBanIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['Ban']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['Ban']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGroupV2GroupIdMembersMembershipTypeMembershipIdBanIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['Ban']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.GroupV2[':groupId'].Members[':membershipType'][':membershipId'].Ban.index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostGroupV2GroupIdMembersMembershipTypeMembershipIdBanIndex<
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
                    (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['Ban']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['Ban']['index']['$post']
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
    getPostGroupV2GroupIdMembersMembershipTypeMembershipIdBanIndexMutationOptions<
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

export function getPostGroupV2GroupIdMembersMembershipTypeMembershipIdUnbanIndexMutationKey() {
  return [
    'GroupV2',
    '/GroupV2/:groupId/Members/:membershipType/:membershipId/Unban/',
    'POST',
  ] as const
}

export function getPostGroupV2GroupIdMembersMembershipTypeMembershipIdUnbanIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['Unban']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['Unban']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGroupV2GroupIdMembersMembershipTypeMembershipIdUnbanIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['Unban']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.GroupV2[':groupId'].Members[':membershipType'][':membershipId'].Unban.index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostGroupV2GroupIdMembersMembershipTypeMembershipIdUnbanIndex<
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
                    (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['Unban']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['Unban']['index']['$post']
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
    getPostGroupV2GroupIdMembersMembershipTypeMembershipIdUnbanIndexMutationOptions<
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

export function getGroupV2GroupIdBannedIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.GroupV2)[':groupId']['Banned']['index']['$get']>
  >,
) {
  return ['GroupV2', '/GroupV2/:groupId/Banned/', toValue(args)] as const
}

export function getGroupV2GroupIdBannedIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.GroupV2)[':groupId']['Banned']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupV2GroupIdBannedIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.GroupV2[':groupId'].Banned.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupV2GroupIdBannedIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.GroupV2)[':groupId']['Banned']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.GroupV2)[':groupId']['Banned']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.GroupV2)[':groupId']['Banned']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.GroupV2)[':groupId']['Banned']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGroupV2GroupIdBannedIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.GroupV2)[':groupId']['Banned']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupV2GroupIdBannedIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupV2GroupIdBannedIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.GroupV2[':groupId'].Banned.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGroupV2GroupIdEditHistoryIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.GroupV2)[':groupId']['EditHistory']['index']['$get']>
  >,
) {
  return ['GroupV2', '/GroupV2/:groupId/EditHistory/', toValue(args)] as const
}

export function getGroupV2GroupIdEditHistoryIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.GroupV2)[':groupId']['EditHistory']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupV2GroupIdEditHistoryIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.GroupV2[':groupId'].EditHistory.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupV2GroupIdEditHistoryIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.GroupV2)[':groupId']['EditHistory']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.GroupV2)[':groupId']['EditHistory']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.GroupV2)[':groupId']['EditHistory']['index']['$get']>
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
                  ReturnType<(typeof client.GroupV2)[':groupId']['EditHistory']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGroupV2GroupIdEditHistoryIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.GroupV2)[':groupId']['EditHistory']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupV2GroupIdEditHistoryIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupV2GroupIdEditHistoryIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.GroupV2[':groupId'].EditHistory.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGroupV2GroupIdAdminAbdicateFoundershipMembershipTypeFounderIdNewIndexMutationKey() {
  return [
    'GroupV2',
    '/GroupV2/:groupId/Admin/AbdicateFoundership/:membershipType/:founderIdNew/',
    'POST',
  ] as const
}

export function getPostGroupV2GroupIdAdminAbdicateFoundershipMembershipTypeFounderIdNewIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.GroupV2)[':groupId']['Admin']['AbdicateFoundership'][':membershipType'][':founderIdNew']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.GroupV2)[':groupId']['Admin']['AbdicateFoundership'][':membershipType'][':founderIdNew']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostGroupV2GroupIdAdminAbdicateFoundershipMembershipTypeFounderIdNewIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.GroupV2)[':groupId']['Admin']['AbdicateFoundership'][':membershipType'][':founderIdNew']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.GroupV2[':groupId'].Admin.AbdicateFoundership[':membershipType'][
          ':founderIdNew'
        ].index.$post(args, options),
      )
    },
  })
}

export function usePostGroupV2GroupIdAdminAbdicateFoundershipMembershipTypeFounderIdNewIndex<
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
                    (typeof client.GroupV2)[':groupId']['Admin']['AbdicateFoundership'][':membershipType'][':founderIdNew']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.GroupV2)[':groupId']['Admin']['AbdicateFoundership'][':membershipType'][':founderIdNew']['index']['$post']
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
    getPostGroupV2GroupIdAdminAbdicateFoundershipMembershipTypeFounderIdNewIndexMutationOptions<
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

export function getGroupV2GroupIdMembersPendingIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.GroupV2)[':groupId']['Members']['Pending']['index']['$get']>
  >,
) {
  return ['GroupV2', '/GroupV2/:groupId/Members/Pending/', toValue(args)] as const
}

export function getGroupV2GroupIdMembersPendingIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.GroupV2)[':groupId']['Members']['Pending']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupV2GroupIdMembersPendingIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.GroupV2[':groupId'].Members.Pending.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupV2GroupIdMembersPendingIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.GroupV2)[':groupId']['Members']['Pending']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.GroupV2)[':groupId']['Members']['Pending']['index']['$get']>
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
                    (typeof client.GroupV2)[':groupId']['Members']['Pending']['index']['$get']
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
                    (typeof client.GroupV2)[':groupId']['Members']['Pending']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGroupV2GroupIdMembersPendingIndexQueryKey>
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
            ReturnType<(typeof client.GroupV2)[':groupId']['Members']['Pending']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupV2GroupIdMembersPendingIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupV2GroupIdMembersPendingIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.GroupV2[':groupId'].Members.Pending.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGroupV2GroupIdMembersInvitedIndividualsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.GroupV2)[':groupId']['Members']['InvitedIndividuals']['index']['$get']
    >
  >,
) {
  return ['GroupV2', '/GroupV2/:groupId/Members/InvitedIndividuals/', toValue(args)] as const
}

export function getGroupV2GroupIdMembersInvitedIndividualsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.GroupV2)[':groupId']['Members']['InvitedIndividuals']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupV2GroupIdMembersInvitedIndividualsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.GroupV2[':groupId'].Members.InvitedIndividuals.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupV2GroupIdMembersInvitedIndividualsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.GroupV2)[':groupId']['Members']['InvitedIndividuals']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.GroupV2)[':groupId']['Members']['InvitedIndividuals']['index']['$get']
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
                    (typeof client.GroupV2)[':groupId']['Members']['InvitedIndividuals']['index']['$get']
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
                    (typeof client.GroupV2)[':groupId']['Members']['InvitedIndividuals']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGroupV2GroupIdMembersInvitedIndividualsIndexQueryKey>
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
              (typeof client.GroupV2)[':groupId']['Members']['InvitedIndividuals']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupV2GroupIdMembersInvitedIndividualsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupV2GroupIdMembersInvitedIndividualsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.GroupV2[':groupId'].Members.InvitedIndividuals.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGroupV2GroupIdMembersApproveAllIndexMutationKey() {
  return ['GroupV2', '/GroupV2/:groupId/Members/ApproveAll/', 'POST'] as const
}

export function getPostGroupV2GroupIdMembersApproveAllIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.GroupV2)[':groupId']['Members']['ApproveAll']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.GroupV2)[':groupId']['Members']['ApproveAll']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGroupV2GroupIdMembersApproveAllIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.GroupV2)[':groupId']['Members']['ApproveAll']['index']['$post']
      >,
    ) {
      return parseResponse(client.GroupV2[':groupId'].Members.ApproveAll.index.$post(args, options))
    },
  })
}

export function usePostGroupV2GroupIdMembersApproveAllIndex<
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
                    (typeof client.GroupV2)[':groupId']['Members']['ApproveAll']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.GroupV2)[':groupId']['Members']['ApproveAll']['index']['$post']
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
  const mutationDefaults = getPostGroupV2GroupIdMembersApproveAllIndexMutationOptions<
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

export function getPostGroupV2GroupIdMembersDenyAllIndexMutationKey() {
  return ['GroupV2', '/GroupV2/:groupId/Members/DenyAll/', 'POST'] as const
}

export function getPostGroupV2GroupIdMembersDenyAllIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.GroupV2)[':groupId']['Members']['DenyAll']['index']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.GroupV2)[':groupId']['Members']['DenyAll']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupV2GroupIdMembersDenyAllIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.GroupV2)[':groupId']['Members']['DenyAll']['index']['$post']
      >,
    ) {
      return parseResponse(client.GroupV2[':groupId'].Members.DenyAll.index.$post(args, options))
    },
  })
}

export function usePostGroupV2GroupIdMembersDenyAllIndex<
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
                    (typeof client.GroupV2)[':groupId']['Members']['DenyAll']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.GroupV2)[':groupId']['Members']['DenyAll']['index']['$post']
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
  const mutationDefaults = getPostGroupV2GroupIdMembersDenyAllIndexMutationOptions<
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

export function getPostGroupV2GroupIdMembersApproveListIndexMutationKey() {
  return ['GroupV2', '/GroupV2/:groupId/Members/ApproveList/', 'POST'] as const
}

export function getPostGroupV2GroupIdMembersApproveListIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.GroupV2)[':groupId']['Members']['ApproveList']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.GroupV2)[':groupId']['Members']['ApproveList']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGroupV2GroupIdMembersApproveListIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.GroupV2)[':groupId']['Members']['ApproveList']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.GroupV2[':groupId'].Members.ApproveList.index.$post(args, options),
      )
    },
  })
}

export function usePostGroupV2GroupIdMembersApproveListIndex<
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
                    (typeof client.GroupV2)[':groupId']['Members']['ApproveList']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.GroupV2)[':groupId']['Members']['ApproveList']['index']['$post']
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
  const mutationDefaults = getPostGroupV2GroupIdMembersApproveListIndexMutationOptions<
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

export function getPostGroupV2GroupIdMembersApproveMembershipTypeMembershipIdIndexMutationKey() {
  return [
    'GroupV2',
    '/GroupV2/:groupId/Members/Approve/:membershipType/:membershipId/',
    'POST',
  ] as const
}

export function getPostGroupV2GroupIdMembersApproveMembershipTypeMembershipIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.GroupV2)[':groupId']['Members']['Approve'][':membershipType'][':membershipId']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.GroupV2)[':groupId']['Members']['Approve'][':membershipType'][':membershipId']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGroupV2GroupIdMembersApproveMembershipTypeMembershipIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.GroupV2)[':groupId']['Members']['Approve'][':membershipType'][':membershipId']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.GroupV2[':groupId'].Members.Approve[':membershipType'][':membershipId'].index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostGroupV2GroupIdMembersApproveMembershipTypeMembershipIdIndex<
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
                    (typeof client.GroupV2)[':groupId']['Members']['Approve'][':membershipType'][':membershipId']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.GroupV2)[':groupId']['Members']['Approve'][':membershipType'][':membershipId']['index']['$post']
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
    getPostGroupV2GroupIdMembersApproveMembershipTypeMembershipIdIndexMutationOptions<
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

export function getPostGroupV2GroupIdMembersDenyListIndexMutationKey() {
  return ['GroupV2', '/GroupV2/:groupId/Members/DenyList/', 'POST'] as const
}

export function getPostGroupV2GroupIdMembersDenyListIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.GroupV2)[':groupId']['Members']['DenyList']['index']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.GroupV2)[':groupId']['Members']['DenyList']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupV2GroupIdMembersDenyListIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.GroupV2)[':groupId']['Members']['DenyList']['index']['$post']
      >,
    ) {
      return parseResponse(client.GroupV2[':groupId'].Members.DenyList.index.$post(args, options))
    },
  })
}

export function usePostGroupV2GroupIdMembersDenyListIndex<
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
                    (typeof client.GroupV2)[':groupId']['Members']['DenyList']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.GroupV2)[':groupId']['Members']['DenyList']['index']['$post']
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
  const mutationDefaults = getPostGroupV2GroupIdMembersDenyListIndexMutationOptions<
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

export function getGroupV2UserMembershipTypeMembershipIdFilterGroupTypeIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.GroupV2.User)[':membershipType'][':membershipId'][':filter'][':groupType']['index']['$get']
    >
  >,
) {
  return [
    'GroupV2',
    '/GroupV2/User/:membershipType/:membershipId/:filter/:groupType/',
    toValue(args),
  ] as const
}

export function getGroupV2UserMembershipTypeMembershipIdFilterGroupTypeIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.GroupV2.User)[':membershipType'][':membershipId'][':filter'][':groupType']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getGroupV2UserMembershipTypeMembershipIdFilterGroupTypeIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.GroupV2.User[':membershipType'][':membershipId'][':filter'][':groupType'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useGroupV2UserMembershipTypeMembershipIdFilterGroupTypeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.GroupV2.User)[':membershipType'][':membershipId'][':filter'][':groupType']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.GroupV2.User)[':membershipType'][':membershipId'][':filter'][':groupType']['index']['$get']
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
                    (typeof client.GroupV2.User)[':membershipType'][':membershipId'][':filter'][':groupType']['index']['$get']
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
                    (typeof client.GroupV2.User)[':membershipType'][':membershipId'][':filter'][':groupType']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGroupV2UserMembershipTypeMembershipIdFilterGroupTypeIndexQueryKey>
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
              (typeof client.GroupV2.User)[':membershipType'][':membershipId'][':filter'][':groupType']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupV2UserMembershipTypeMembershipIdFilterGroupTypeIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getGroupV2UserMembershipTypeMembershipIdFilterGroupTypeIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.GroupV2.User[':membershipType'][':membershipId'][':filter'][
            ':groupType'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGroupV2RecoverMembershipTypeMembershipIdGroupTypeIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.GroupV2.Recover)[':membershipType'][':membershipId'][':groupType']['index']['$get']
    >
  >,
) {
  return [
    'GroupV2',
    '/GroupV2/Recover/:membershipType/:membershipId/:groupType/',
    toValue(args),
  ] as const
}

export function getGroupV2RecoverMembershipTypeMembershipIdGroupTypeIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.GroupV2.Recover)[':membershipType'][':membershipId'][':groupType']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getGroupV2RecoverMembershipTypeMembershipIdGroupTypeIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.GroupV2.Recover[':membershipType'][':membershipId'][':groupType'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useGroupV2RecoverMembershipTypeMembershipIdGroupTypeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.GroupV2.Recover)[':membershipType'][':membershipId'][':groupType']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.GroupV2.Recover)[':membershipType'][':membershipId'][':groupType']['index']['$get']
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
                    (typeof client.GroupV2.Recover)[':membershipType'][':membershipId'][':groupType']['index']['$get']
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
                    (typeof client.GroupV2.Recover)[':membershipType'][':membershipId'][':groupType']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGroupV2RecoverMembershipTypeMembershipIdGroupTypeIndexQueryKey>
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
              (typeof client.GroupV2.Recover)[':membershipType'][':membershipId'][':groupType']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupV2RecoverMembershipTypeMembershipIdGroupTypeIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getGroupV2RecoverMembershipTypeMembershipIdGroupTypeIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.GroupV2.Recover[':membershipType'][':membershipId'][':groupType'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getGroupV2UserPotentialMembershipTypeMembershipIdFilterGroupTypeIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.GroupV2.User.Potential)[':membershipType'][':membershipId'][':filter'][':groupType']['index']['$get']
    >
  >,
) {
  return [
    'GroupV2',
    '/GroupV2/User/Potential/:membershipType/:membershipId/:filter/:groupType/',
    toValue(args),
  ] as const
}

export function getGroupV2UserPotentialMembershipTypeMembershipIdFilterGroupTypeIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.GroupV2.User.Potential)[':membershipType'][':membershipId'][':filter'][':groupType']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getGroupV2UserPotentialMembershipTypeMembershipIdFilterGroupTypeIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.GroupV2.User.Potential[':membershipType'][':membershipId'][':filter'][
          ':groupType'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGroupV2UserPotentialMembershipTypeMembershipIdFilterGroupTypeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.GroupV2.User.Potential)[':membershipType'][':membershipId'][':filter'][':groupType']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.GroupV2.User.Potential)[':membershipType'][':membershipId'][':filter'][':groupType']['index']['$get']
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
                    (typeof client.GroupV2.User.Potential)[':membershipType'][':membershipId'][':filter'][':groupType']['index']['$get']
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
                    (typeof client.GroupV2.User.Potential)[':membershipType'][':membershipId'][':filter'][':groupType']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getGroupV2UserPotentialMembershipTypeMembershipIdFilterGroupTypeIndexQueryKey
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
              (typeof client.GroupV2.User.Potential)[':membershipType'][':membershipId'][':filter'][':groupType']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupV2UserPotentialMembershipTypeMembershipIdFilterGroupTypeIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getGroupV2UserPotentialMembershipTypeMembershipIdFilterGroupTypeIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.GroupV2.User.Potential[':membershipType'][':membershipId'][':filter'][
            ':groupType'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGroupV2GroupIdMembersIndividualInviteMembershipTypeMembershipIdIndexMutationKey() {
  return [
    'GroupV2',
    '/GroupV2/:groupId/Members/IndividualInvite/:membershipType/:membershipId/',
    'POST',
  ] as const
}

export function getPostGroupV2GroupIdMembersIndividualInviteMembershipTypeMembershipIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.GroupV2)[':groupId']['Members']['IndividualInvite'][':membershipType'][':membershipId']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.GroupV2)[':groupId']['Members']['IndividualInvite'][':membershipType'][':membershipId']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostGroupV2GroupIdMembersIndividualInviteMembershipTypeMembershipIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.GroupV2)[':groupId']['Members']['IndividualInvite'][':membershipType'][':membershipId']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.GroupV2[':groupId'].Members.IndividualInvite[':membershipType'][
          ':membershipId'
        ].index.$post(args, options),
      )
    },
  })
}

export function usePostGroupV2GroupIdMembersIndividualInviteMembershipTypeMembershipIdIndex<
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
                    (typeof client.GroupV2)[':groupId']['Members']['IndividualInvite'][':membershipType'][':membershipId']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.GroupV2)[':groupId']['Members']['IndividualInvite'][':membershipType'][':membershipId']['index']['$post']
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
    getPostGroupV2GroupIdMembersIndividualInviteMembershipTypeMembershipIdIndexMutationOptions<
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

export function getPostGroupV2GroupIdMembersIndividualInviteCancelMembershipTypeMembershipIdIndexMutationKey() {
  return [
    'GroupV2',
    '/GroupV2/:groupId/Members/IndividualInviteCancel/:membershipType/:membershipId/',
    'POST',
  ] as const
}

export function getPostGroupV2GroupIdMembersIndividualInviteCancelMembershipTypeMembershipIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.GroupV2)[':groupId']['Members']['IndividualInviteCancel'][':membershipType'][':membershipId']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.GroupV2)[':groupId']['Members']['IndividualInviteCancel'][':membershipType'][':membershipId']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostGroupV2GroupIdMembersIndividualInviteCancelMembershipTypeMembershipIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.GroupV2)[':groupId']['Members']['IndividualInviteCancel'][':membershipType'][':membershipId']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.GroupV2[':groupId'].Members.IndividualInviteCancel[':membershipType'][
          ':membershipId'
        ].index.$post(args, options),
      )
    },
  })
}

export function usePostGroupV2GroupIdMembersIndividualInviteCancelMembershipTypeMembershipIdIndex<
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
                    (typeof client.GroupV2)[':groupId']['Members']['IndividualInviteCancel'][':membershipType'][':membershipId']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.GroupV2)[':groupId']['Members']['IndividualInviteCancel'][':membershipType'][':membershipId']['index']['$post']
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
    getPostGroupV2GroupIdMembersIndividualInviteCancelMembershipTypeMembershipIdIndexMutationOptions<
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

export function getPostTokensPartnerForceDropsRepairIndexMutationKey() {
  return ['Tokens', '/Tokens/Partner/ForceDropsRepair/', 'POST'] as const
}

export function getPostTokensPartnerForceDropsRepairIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Tokens.Partner.ForceDropsRepair.index.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostTokensPartnerForceDropsRepairIndexMutationKey(),
    async mutationFn() {
      return parseResponse(client.Tokens.Partner.ForceDropsRepair.index.$post(undefined, options))
    },
  })
}

export function usePostTokensPartnerForceDropsRepairIndex<
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
                Awaited<ReturnType<typeof client.Tokens.Partner.ForceDropsRepair.index.$post>>
              >
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostTokensPartnerForceDropsRepairIndexMutationOptions<
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

export function getPostTokensPartnerClaimOfferIndexMutationKey() {
  return ['Tokens', '/Tokens/Partner/ClaimOffer/', 'POST'] as const
}

export function getPostTokensPartnerClaimOfferIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Tokens.Partner.ClaimOffer.index.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.Tokens.Partner.ClaimOffer.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTokensPartnerClaimOfferIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Tokens.Partner.ClaimOffer.index.$post>) {
      return parseResponse(client.Tokens.Partner.ClaimOffer.index.$post(args, options))
    },
  })
}

export function usePostTokensPartnerClaimOfferIndex<
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
                Awaited<ReturnType<typeof client.Tokens.Partner.ClaimOffer.index.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.Tokens.Partner.ClaimOffer.index.$post>,
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
  const mutationDefaults = getPostTokensPartnerClaimOfferIndexMutationOptions<
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

export function getPostTokensPartnerApplyMissingOffersPartnerApplicationIdTargetBnetMembershipIdIndexMutationKey() {
  return [
    'Tokens',
    '/Tokens/Partner/ApplyMissingOffers/:partnerApplicationId/:targetBnetMembershipId/',
    'POST',
  ] as const
}

export function getPostTokensPartnerApplyMissingOffersPartnerApplicationIdTargetBnetMembershipIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Tokens.Partner.ApplyMissingOffers)[':partnerApplicationId'][':targetBnetMembershipId']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Tokens.Partner.ApplyMissingOffers)[':partnerApplicationId'][':targetBnetMembershipId']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostTokensPartnerApplyMissingOffersPartnerApplicationIdTargetBnetMembershipIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Tokens.Partner.ApplyMissingOffers)[':partnerApplicationId'][':targetBnetMembershipId']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.Tokens.Partner.ApplyMissingOffers[':partnerApplicationId'][
          ':targetBnetMembershipId'
        ].index.$post(args, options),
      )
    },
  })
}

export function usePostTokensPartnerApplyMissingOffersPartnerApplicationIdTargetBnetMembershipIdIndex<
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
                    (typeof client.Tokens.Partner.ApplyMissingOffers)[':partnerApplicationId'][':targetBnetMembershipId']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.Tokens.Partner.ApplyMissingOffers)[':partnerApplicationId'][':targetBnetMembershipId']['index']['$post']
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
    getPostTokensPartnerApplyMissingOffersPartnerApplicationIdTargetBnetMembershipIdIndexMutationOptions<
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

export function getTokensPartnerHistoryPartnerApplicationIdTargetBnetMembershipIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Tokens.Partner.History)[':partnerApplicationId'][':targetBnetMembershipId']['index']['$get']
    >
  >,
) {
  return [
    'Tokens',
    '/Tokens/Partner/History/:partnerApplicationId/:targetBnetMembershipId/',
    toValue(args),
  ] as const
}

export function getTokensPartnerHistoryPartnerApplicationIdTargetBnetMembershipIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Tokens.Partner.History)[':partnerApplicationId'][':targetBnetMembershipId']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getTokensPartnerHistoryPartnerApplicationIdTargetBnetMembershipIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Tokens.Partner.History[':partnerApplicationId'][
          ':targetBnetMembershipId'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTokensPartnerHistoryPartnerApplicationIdTargetBnetMembershipIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Tokens.Partner.History)[':partnerApplicationId'][':targetBnetMembershipId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Tokens.Partner.History)[':partnerApplicationId'][':targetBnetMembershipId']['index']['$get']
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
                    (typeof client.Tokens.Partner.History)[':partnerApplicationId'][':targetBnetMembershipId']['index']['$get']
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
                    (typeof client.Tokens.Partner.History)[':partnerApplicationId'][':targetBnetMembershipId']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getTokensPartnerHistoryPartnerApplicationIdTargetBnetMembershipIdIndexQueryKey
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
              (typeof client.Tokens.Partner.History)[':partnerApplicationId'][':targetBnetMembershipId']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getTokensPartnerHistoryPartnerApplicationIdTargetBnetMembershipIdIndexQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getTokensPartnerHistoryPartnerApplicationIdTargetBnetMembershipIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.Tokens.Partner.History[':partnerApplicationId'][
            ':targetBnetMembershipId'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTokensPartnerHistoryTargetBnetMembershipIdApplicationPartnerApplicationIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Tokens.Partner.History)[':targetBnetMembershipId']['Application'][':partnerApplicationId']['index']['$get']
    >
  >,
) {
  return [
    'Tokens',
    '/Tokens/Partner/History/:targetBnetMembershipId/Application/:partnerApplicationId/',
    toValue(args),
  ] as const
}

export function getTokensPartnerHistoryTargetBnetMembershipIdApplicationPartnerApplicationIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Tokens.Partner.History)[':targetBnetMembershipId']['Application'][':partnerApplicationId']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getTokensPartnerHistoryTargetBnetMembershipIdApplicationPartnerApplicationIdIndexQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Tokens.Partner.History[':targetBnetMembershipId'].Application[
          ':partnerApplicationId'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTokensPartnerHistoryTargetBnetMembershipIdApplicationPartnerApplicationIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Tokens.Partner.History)[':targetBnetMembershipId']['Application'][':partnerApplicationId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Tokens.Partner.History)[':targetBnetMembershipId']['Application'][':partnerApplicationId']['index']['$get']
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
                    (typeof client.Tokens.Partner.History)[':targetBnetMembershipId']['Application'][':partnerApplicationId']['index']['$get']
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
                    (typeof client.Tokens.Partner.History)[':targetBnetMembershipId']['Application'][':partnerApplicationId']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getTokensPartnerHistoryTargetBnetMembershipIdApplicationPartnerApplicationIdIndexQueryKey
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
              (typeof client.Tokens.Partner.History)[':targetBnetMembershipId']['Application'][':partnerApplicationId']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getTokensPartnerHistoryTargetBnetMembershipIdApplicationPartnerApplicationIdIndexQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getTokensPartnerHistoryTargetBnetMembershipIdApplicationPartnerApplicationIdIndexQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.Tokens.Partner.History[':targetBnetMembershipId'].Application[
            ':partnerApplicationId'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTokensRewardsGetRewardsForUserMembershipIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Tokens.Rewards.GetRewardsForUser)[':membershipId']['index']['$get']
    >
  >,
) {
  return ['Tokens', '/Tokens/Rewards/GetRewardsForUser/:membershipId/', toValue(args)] as const
}

export function getTokensRewardsGetRewardsForUserMembershipIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Tokens.Rewards.GetRewardsForUser)[':membershipId']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTokensRewardsGetRewardsForUserMembershipIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Tokens.Rewards.GetRewardsForUser[':membershipId'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTokensRewardsGetRewardsForUserMembershipIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Tokens.Rewards.GetRewardsForUser)[':membershipId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Tokens.Rewards.GetRewardsForUser)[':membershipId']['index']['$get']
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
                    (typeof client.Tokens.Rewards.GetRewardsForUser)[':membershipId']['index']['$get']
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
                    (typeof client.Tokens.Rewards.GetRewardsForUser)[':membershipId']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTokensRewardsGetRewardsForUserMembershipIdIndexQueryKey>
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
              (typeof client.Tokens.Rewards.GetRewardsForUser)[':membershipId']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTokensRewardsGetRewardsForUserMembershipIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTokensRewardsGetRewardsForUserMembershipIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Tokens.Rewards.GetRewardsForUser[':membershipId'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTokensRewardsGetRewardsForPlatformUserMembershipIdMembershipTypeIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Tokens.Rewards.GetRewardsForPlatformUser)[':membershipId'][':membershipType']['index']['$get']
    >
  >,
) {
  return [
    'Tokens',
    '/Tokens/Rewards/GetRewardsForPlatformUser/:membershipId/:membershipType/',
    toValue(args),
  ] as const
}

export function getTokensRewardsGetRewardsForPlatformUserMembershipIdMembershipTypeIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Tokens.Rewards.GetRewardsForPlatformUser)[':membershipId'][':membershipType']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getTokensRewardsGetRewardsForPlatformUserMembershipIdMembershipTypeIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Tokens.Rewards.GetRewardsForPlatformUser[':membershipId'][
          ':membershipType'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTokensRewardsGetRewardsForPlatformUserMembershipIdMembershipTypeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Tokens.Rewards.GetRewardsForPlatformUser)[':membershipId'][':membershipType']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Tokens.Rewards.GetRewardsForPlatformUser)[':membershipId'][':membershipType']['index']['$get']
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
                    (typeof client.Tokens.Rewards.GetRewardsForPlatformUser)[':membershipId'][':membershipType']['index']['$get']
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
                    (typeof client.Tokens.Rewards.GetRewardsForPlatformUser)[':membershipId'][':membershipType']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getTokensRewardsGetRewardsForPlatformUserMembershipIdMembershipTypeIndexQueryKey
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
              (typeof client.Tokens.Rewards.GetRewardsForPlatformUser)[':membershipId'][':membershipType']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getTokensRewardsGetRewardsForPlatformUserMembershipIdMembershipTypeIndexQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getTokensRewardsGetRewardsForPlatformUserMembershipIdMembershipTypeIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.Tokens.Rewards.GetRewardsForPlatformUser[':membershipId'][
            ':membershipType'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTokensRewardsBungieRewardsIndexQueryKey() {
  return ['Tokens', '/Tokens/Rewards/BungieRewards/'] as const
}

export function getTokensRewardsBungieRewardsIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTokensRewardsBungieRewardsIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Tokens.Rewards.BungieRewards.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTokensRewardsBungieRewardsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.Tokens.Rewards.BungieRewards.index.$get>>
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
                Awaited<ReturnType<typeof client.Tokens.Rewards.BungieRewards.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.Tokens.Rewards.BungieRewards.index.$get>>
              >
            >
          >,
          ReturnType<typeof getTokensRewardsBungieRewardsIndexQueryKey>
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
          Awaited<ReturnType<typeof client.Tokens.Rewards.BungieRewards.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTokensRewardsBungieRewardsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTokensRewardsBungieRewardsIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Tokens.Rewards.BungieRewards.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDestiny2ManifestIndexQueryKey() {
  return ['Destiny2', '/Destiny2/Manifest/'] as const
}

export function getDestiny2ManifestIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDestiny2ManifestIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Destiny2.Manifest.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDestiny2ManifestIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Destiny2.Manifest.index.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.Destiny2.Manifest.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Destiny2.Manifest.index.$get>>>
            >
          >,
          ReturnType<typeof getDestiny2ManifestIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.Destiny2.Manifest.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDestiny2ManifestIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDestiny2ManifestIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Destiny2.Manifest.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDestiny2ManifestEntityTypeHashIdentifierIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2.Manifest)[':entityType'][':hashIdentifier']['index']['$get']
    >
  >,
) {
  return ['Destiny2', '/Destiny2/Manifest/:entityType/:hashIdentifier/', toValue(args)] as const
}

export function getDestiny2ManifestEntityTypeHashIdentifierIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2.Manifest)[':entityType'][':hashIdentifier']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDestiny2ManifestEntityTypeHashIdentifierIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Destiny2.Manifest[':entityType'][':hashIdentifier'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDestiny2ManifestEntityTypeHashIdentifierIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2.Manifest)[':entityType'][':hashIdentifier']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2.Manifest)[':entityType'][':hashIdentifier']['index']['$get']
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
                    (typeof client.Destiny2.Manifest)[':entityType'][':hashIdentifier']['index']['$get']
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
                    (typeof client.Destiny2.Manifest)[':entityType'][':hashIdentifier']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDestiny2ManifestEntityTypeHashIdentifierIndexQueryKey>
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
              (typeof client.Destiny2.Manifest)[':entityType'][':hashIdentifier']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDestiny2ManifestEntityTypeHashIdentifierIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDestiny2ManifestEntityTypeHashIdentifierIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Destiny2.Manifest[':entityType'][':hashIdentifier'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDestiny2SearchDestinyPlayerByBungieNameMembershipTypeIndexMutationKey() {
  return ['Destiny2', '/Destiny2/SearchDestinyPlayerByBungieName/:membershipType/', 'POST'] as const
}

export function getPostDestiny2SearchDestinyPlayerByBungieNameMembershipTypeIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Destiny2.SearchDestinyPlayerByBungieName)[':membershipType']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Destiny2.SearchDestinyPlayerByBungieName)[':membershipType']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDestiny2SearchDestinyPlayerByBungieNameMembershipTypeIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Destiny2.SearchDestinyPlayerByBungieName)[':membershipType']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.Destiny2.SearchDestinyPlayerByBungieName[':membershipType'].index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostDestiny2SearchDestinyPlayerByBungieNameMembershipTypeIndex<
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
                    (typeof client.Destiny2.SearchDestinyPlayerByBungieName)[':membershipType']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.Destiny2.SearchDestinyPlayerByBungieName)[':membershipType']['index']['$post']
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
    getPostDestiny2SearchDestinyPlayerByBungieNameMembershipTypeIndexMutationOptions<
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

export function getDestiny2MembershipTypeProfileMembershipIdLinkedProfilesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2)[':membershipType']['Profile'][':membershipId']['LinkedProfiles']['index']['$get']
    >
  >,
) {
  return [
    'Destiny2',
    '/Destiny2/:membershipType/Profile/:membershipId/LinkedProfiles/',
    toValue(args),
  ] as const
}

export function getDestiny2MembershipTypeProfileMembershipIdLinkedProfilesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2)[':membershipType']['Profile'][':membershipId']['LinkedProfiles']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDestiny2MembershipTypeProfileMembershipIdLinkedProfilesIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Destiny2[':membershipType'].Profile[':membershipId'].LinkedProfiles.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useDestiny2MembershipTypeProfileMembershipIdLinkedProfilesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2)[':membershipType']['Profile'][':membershipId']['LinkedProfiles']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2)[':membershipType']['Profile'][':membershipId']['LinkedProfiles']['index']['$get']
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
                    (typeof client.Destiny2)[':membershipType']['Profile'][':membershipId']['LinkedProfiles']['index']['$get']
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
                    (typeof client.Destiny2)[':membershipType']['Profile'][':membershipId']['LinkedProfiles']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDestiny2MembershipTypeProfileMembershipIdLinkedProfilesIndexQueryKey>
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
              (typeof client.Destiny2)[':membershipType']['Profile'][':membershipId']['LinkedProfiles']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDestiny2MembershipTypeProfileMembershipIdLinkedProfilesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDestiny2MembershipTypeProfileMembershipIdLinkedProfilesIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.Destiny2[':membershipType'].Profile[':membershipId'].LinkedProfiles.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDestiny2MembershipTypeProfileDestinyMembershipIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['index']['$get']
    >
  >,
) {
  return [
    'Destiny2',
    '/Destiny2/:membershipType/Profile/:destinyMembershipId/',
    toValue(args),
  ] as const
}

export function getDestiny2MembershipTypeProfileDestinyMembershipIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDestiny2MembershipTypeProfileDestinyMembershipIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Destiny2[':membershipType'].Profile[':destinyMembershipId'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useDestiny2MembershipTypeProfileDestinyMembershipIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['index']['$get']
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
                    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['index']['$get']
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
                    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDestiny2MembershipTypeProfileDestinyMembershipIdIndexQueryKey>
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
              (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDestiny2MembershipTypeProfileDestinyMembershipIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDestiny2MembershipTypeProfileDestinyMembershipIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.Destiny2[':membershipType'].Profile[':destinyMembershipId'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['index']['$get']
    >
  >,
) {
  return [
    'Destiny2',
    '/Destiny2/:membershipType/Profile/:destinyMembershipId/Character/:characterId/',
    toValue(args),
  ] as const
}

export function getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Destiny2[':membershipType'].Profile[':destinyMembershipId'].Character[
          ':characterId'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['index']['$get']
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
                    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['index']['$get']
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
                    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdIndexQueryKey
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
              (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdIndexQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.Destiny2[':membershipType'].Profile[':destinyMembershipId'].Character[
            ':characterId'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDestiny2ClanGroupIdWeeklyRewardStateIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2.Clan)[':groupId']['WeeklyRewardState']['index']['$get']
    >
  >,
) {
  return ['Destiny2', '/Destiny2/Clan/:groupId/WeeklyRewardState/', toValue(args)] as const
}

export function getDestiny2ClanGroupIdWeeklyRewardStateIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2.Clan)[':groupId']['WeeklyRewardState']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDestiny2ClanGroupIdWeeklyRewardStateIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Destiny2.Clan[':groupId'].WeeklyRewardState.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDestiny2ClanGroupIdWeeklyRewardStateIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2.Clan)[':groupId']['WeeklyRewardState']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2.Clan)[':groupId']['WeeklyRewardState']['index']['$get']
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
                    (typeof client.Destiny2.Clan)[':groupId']['WeeklyRewardState']['index']['$get']
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
                    (typeof client.Destiny2.Clan)[':groupId']['WeeklyRewardState']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDestiny2ClanGroupIdWeeklyRewardStateIndexQueryKey>
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
              (typeof client.Destiny2.Clan)[':groupId']['WeeklyRewardState']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDestiny2ClanGroupIdWeeklyRewardStateIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDestiny2ClanGroupIdWeeklyRewardStateIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Destiny2.Clan[':groupId'].WeeklyRewardState.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDestiny2ClanClanBannerDictionaryIndexQueryKey() {
  return ['Destiny2', '/Destiny2/Clan/ClanBannerDictionary/'] as const
}

export function getDestiny2ClanClanBannerDictionaryIndexQueryOptions(
  options?: ClientRequestOptions,
) {
  return {
    queryKey: getDestiny2ClanClanBannerDictionaryIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Destiny2.Clan.ClanBannerDictionary.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDestiny2ClanClanBannerDictionaryIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.Destiny2.Clan.ClanBannerDictionary.index.$get>>
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
                Awaited<ReturnType<typeof client.Destiny2.Clan.ClanBannerDictionary.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.Destiny2.Clan.ClanBannerDictionary.index.$get>>
              >
            >
          >,
          ReturnType<typeof getDestiny2ClanClanBannerDictionaryIndexQueryKey>
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
          Awaited<ReturnType<typeof client.Destiny2.Clan.ClanBannerDictionary.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDestiny2ClanClanBannerDictionaryIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDestiny2ClanClanBannerDictionaryIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Destiny2.Clan.ClanBannerDictionary.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDestiny2MembershipTypeProfileDestinyMembershipIdItemItemInstanceIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Item'][':itemInstanceId']['index']['$get']
    >
  >,
) {
  return [
    'Destiny2',
    '/Destiny2/:membershipType/Profile/:destinyMembershipId/Item/:itemInstanceId/',
    toValue(args),
  ] as const
}

export function getDestiny2MembershipTypeProfileDestinyMembershipIdItemItemInstanceIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Item'][':itemInstanceId']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDestiny2MembershipTypeProfileDestinyMembershipIdItemItemInstanceIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Destiny2[':membershipType'].Profile[':destinyMembershipId'].Item[
          ':itemInstanceId'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDestiny2MembershipTypeProfileDestinyMembershipIdItemItemInstanceIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Item'][':itemInstanceId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Item'][':itemInstanceId']['index']['$get']
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
                    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Item'][':itemInstanceId']['index']['$get']
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
                    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Item'][':itemInstanceId']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDestiny2MembershipTypeProfileDestinyMembershipIdItemItemInstanceIdIndexQueryKey
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
              (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Item'][':itemInstanceId']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDestiny2MembershipTypeProfileDestinyMembershipIdItemItemInstanceIdIndexQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDestiny2MembershipTypeProfileDestinyMembershipIdItemItemInstanceIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.Destiny2[':membershipType'].Profile[':destinyMembershipId'].Item[
            ':itemInstanceId'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdVendorsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Vendors']['index']['$get']
    >
  >,
) {
  return [
    'Destiny2',
    '/Destiny2/:membershipType/Profile/:destinyMembershipId/Character/:characterId/Vendors/',
    toValue(args),
  ] as const
}

export function getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdVendorsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Vendors']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdVendorsIndexQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Destiny2[':membershipType'].Profile[':destinyMembershipId'].Character[
          ':characterId'
        ].Vendors.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdVendorsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Vendors']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Vendors']['index']['$get']
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
                    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Vendors']['index']['$get']
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
                    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Vendors']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdVendorsIndexQueryKey
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
              (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Vendors']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdVendorsIndexQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdVendorsIndexQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.Destiny2[':membershipType'].Profile[':destinyMembershipId'].Character[
            ':characterId'
          ].Vendors.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdVendorsVendorHashIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Vendors'][':vendorHash']['index']['$get']
    >
  >,
) {
  return [
    'Destiny2',
    '/Destiny2/:membershipType/Profile/:destinyMembershipId/Character/:characterId/Vendors/:vendorHash/',
    toValue(args),
  ] as const
}

export function getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdVendorsVendorHashIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Vendors'][':vendorHash']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdVendorsVendorHashIndexQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Destiny2[':membershipType'].Profile[':destinyMembershipId'].Character[
          ':characterId'
        ].Vendors[':vendorHash'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdVendorsVendorHashIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Vendors'][':vendorHash']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Vendors'][':vendorHash']['index']['$get']
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
                    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Vendors'][':vendorHash']['index']['$get']
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
                    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Vendors'][':vendorHash']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdVendorsVendorHashIndexQueryKey
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
              (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Vendors'][':vendorHash']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdVendorsVendorHashIndexQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdVendorsVendorHashIndexQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.Destiny2[':membershipType'].Profile[':destinyMembershipId'].Character[
            ':characterId'
          ].Vendors[':vendorHash'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDestiny2VendorsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Destiny2.Vendors.index.$get>>,
) {
  return ['Destiny2', '/Destiny2/Vendors/', toValue(args)] as const
}

export function getDestiny2VendorsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Destiny2.Vendors.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDestiny2VendorsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Destiny2.Vendors.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDestiny2VendorsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Destiny2.Vendors.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Destiny2.Vendors.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Destiny2.Vendors.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Destiny2.Vendors.index.$get>>>
            >
          >,
          ReturnType<typeof getDestiny2VendorsIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.Destiny2.Vendors.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDestiny2VendorsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDestiny2VendorsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Destiny2.Vendors.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdCollectiblesCollectiblePresentationNodeHashIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Collectibles'][':collectiblePresentationNodeHash']['index']['$get']
    >
  >,
) {
  return [
    'Destiny2',
    '/Destiny2/:membershipType/Profile/:destinyMembershipId/Character/:characterId/Collectibles/:collectiblePresentationNodeHash/',
    toValue(args),
  ] as const
}

export function getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdCollectiblesCollectiblePresentationNodeHashIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Collectibles'][':collectiblePresentationNodeHash']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdCollectiblesCollectiblePresentationNodeHashIndexQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Destiny2[':membershipType'].Profile[':destinyMembershipId'].Character[
          ':characterId'
        ].Collectibles[':collectiblePresentationNodeHash'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdCollectiblesCollectiblePresentationNodeHashIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Collectibles'][':collectiblePresentationNodeHash']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Collectibles'][':collectiblePresentationNodeHash']['index']['$get']
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
                    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Collectibles'][':collectiblePresentationNodeHash']['index']['$get']
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
                    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Collectibles'][':collectiblePresentationNodeHash']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdCollectiblesCollectiblePresentationNodeHashIndexQueryKey
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
              (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Collectibles'][':collectiblePresentationNodeHash']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdCollectiblesCollectiblePresentationNodeHashIndexQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdCollectiblesCollectiblePresentationNodeHashIndexQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.Destiny2[':membershipType'].Profile[':destinyMembershipId'].Character[
            ':characterId'
          ].Collectibles[':collectiblePresentationNodeHash'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDestiny2ActionsItemsTransferItemIndexMutationKey() {
  return ['Destiny2', '/Destiny2/Actions/Items/TransferItem/', 'POST'] as const
}

export function getPostDestiny2ActionsItemsTransferItemIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Destiny2.Actions.Items.TransferItem.index.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.Destiny2.Actions.Items.TransferItem.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDestiny2ActionsItemsTransferItemIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.Destiny2.Actions.Items.TransferItem.index.$post>,
    ) {
      return parseResponse(client.Destiny2.Actions.Items.TransferItem.index.$post(args, options))
    },
  })
}

export function usePostDestiny2ActionsItemsTransferItemIndex<
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
                Awaited<ReturnType<typeof client.Destiny2.Actions.Items.TransferItem.index.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.Destiny2.Actions.Items.TransferItem.index.$post>,
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
  const mutationDefaults = getPostDestiny2ActionsItemsTransferItemIndexMutationOptions<
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

export function getPostDestiny2ActionsItemsPullFromPostmasterIndexMutationKey() {
  return ['Destiny2', '/Destiny2/Actions/Items/PullFromPostmaster/', 'POST'] as const
}

export function getPostDestiny2ActionsItemsPullFromPostmasterIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Destiny2.Actions.Items.PullFromPostmaster.index.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.Destiny2.Actions.Items.PullFromPostmaster.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDestiny2ActionsItemsPullFromPostmasterIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.Destiny2.Actions.Items.PullFromPostmaster.index.$post>,
    ) {
      return parseResponse(
        client.Destiny2.Actions.Items.PullFromPostmaster.index.$post(args, options),
      )
    },
  })
}

export function usePostDestiny2ActionsItemsPullFromPostmasterIndex<
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
                  ReturnType<typeof client.Destiny2.Actions.Items.PullFromPostmaster.index.$post>
                >
              >
            >
          >,
          TError,
          InferRequestType<typeof client.Destiny2.Actions.Items.PullFromPostmaster.index.$post>,
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
  const mutationDefaults = getPostDestiny2ActionsItemsPullFromPostmasterIndexMutationOptions<
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

export function getPostDestiny2ActionsItemsEquipItemIndexMutationKey() {
  return ['Destiny2', '/Destiny2/Actions/Items/EquipItem/', 'POST'] as const
}

export function getPostDestiny2ActionsItemsEquipItemIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Destiny2.Actions.Items.EquipItem.index.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.Destiny2.Actions.Items.EquipItem.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDestiny2ActionsItemsEquipItemIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.Destiny2.Actions.Items.EquipItem.index.$post>,
    ) {
      return parseResponse(client.Destiny2.Actions.Items.EquipItem.index.$post(args, options))
    },
  })
}

export function usePostDestiny2ActionsItemsEquipItemIndex<
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
                Awaited<ReturnType<typeof client.Destiny2.Actions.Items.EquipItem.index.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.Destiny2.Actions.Items.EquipItem.index.$post>,
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
  const mutationDefaults = getPostDestiny2ActionsItemsEquipItemIndexMutationOptions<
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

export function getPostDestiny2ActionsItemsEquipItemsIndexMutationKey() {
  return ['Destiny2', '/Destiny2/Actions/Items/EquipItems/', 'POST'] as const
}

export function getPostDestiny2ActionsItemsEquipItemsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Destiny2.Actions.Items.EquipItems.index.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.Destiny2.Actions.Items.EquipItems.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDestiny2ActionsItemsEquipItemsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.Destiny2.Actions.Items.EquipItems.index.$post>,
    ) {
      return parseResponse(client.Destiny2.Actions.Items.EquipItems.index.$post(args, options))
    },
  })
}

export function usePostDestiny2ActionsItemsEquipItemsIndex<
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
                Awaited<ReturnType<typeof client.Destiny2.Actions.Items.EquipItems.index.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.Destiny2.Actions.Items.EquipItems.index.$post>,
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
  const mutationDefaults = getPostDestiny2ActionsItemsEquipItemsIndexMutationOptions<
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

export function getPostDestiny2ActionsLoadoutsEquipLoadoutIndexMutationKey() {
  return ['Destiny2', '/Destiny2/Actions/Loadouts/EquipLoadout/', 'POST'] as const
}

export function getPostDestiny2ActionsLoadoutsEquipLoadoutIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Destiny2.Actions.Loadouts.EquipLoadout.index.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.Destiny2.Actions.Loadouts.EquipLoadout.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDestiny2ActionsLoadoutsEquipLoadoutIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.Destiny2.Actions.Loadouts.EquipLoadout.index.$post>,
    ) {
      return parseResponse(client.Destiny2.Actions.Loadouts.EquipLoadout.index.$post(args, options))
    },
  })
}

export function usePostDestiny2ActionsLoadoutsEquipLoadoutIndex<
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
                  ReturnType<typeof client.Destiny2.Actions.Loadouts.EquipLoadout.index.$post>
                >
              >
            >
          >,
          TError,
          InferRequestType<typeof client.Destiny2.Actions.Loadouts.EquipLoadout.index.$post>,
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
  const mutationDefaults = getPostDestiny2ActionsLoadoutsEquipLoadoutIndexMutationOptions<
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

export function getPostDestiny2ActionsLoadoutsSnapshotLoadoutIndexMutationKey() {
  return ['Destiny2', '/Destiny2/Actions/Loadouts/SnapshotLoadout/', 'POST'] as const
}

export function getPostDestiny2ActionsLoadoutsSnapshotLoadoutIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Destiny2.Actions.Loadouts.SnapshotLoadout.index.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.Destiny2.Actions.Loadouts.SnapshotLoadout.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDestiny2ActionsLoadoutsSnapshotLoadoutIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.Destiny2.Actions.Loadouts.SnapshotLoadout.index.$post>,
    ) {
      return parseResponse(
        client.Destiny2.Actions.Loadouts.SnapshotLoadout.index.$post(args, options),
      )
    },
  })
}

export function usePostDestiny2ActionsLoadoutsSnapshotLoadoutIndex<
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
                  ReturnType<typeof client.Destiny2.Actions.Loadouts.SnapshotLoadout.index.$post>
                >
              >
            >
          >,
          TError,
          InferRequestType<typeof client.Destiny2.Actions.Loadouts.SnapshotLoadout.index.$post>,
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
  const mutationDefaults = getPostDestiny2ActionsLoadoutsSnapshotLoadoutIndexMutationOptions<
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

export function getPostDestiny2ActionsLoadoutsUpdateLoadoutIdentifiersIndexMutationKey() {
  return ['Destiny2', '/Destiny2/Actions/Loadouts/UpdateLoadoutIdentifiers/', 'POST'] as const
}

export function getPostDestiny2ActionsLoadoutsUpdateLoadoutIdentifiersIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<typeof client.Destiny2.Actions.Loadouts.UpdateLoadoutIdentifiers.index.$post>
          >
        >
      >
    >,
    TError,
    InferRequestType<typeof client.Destiny2.Actions.Loadouts.UpdateLoadoutIdentifiers.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDestiny2ActionsLoadoutsUpdateLoadoutIdentifiersIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        typeof client.Destiny2.Actions.Loadouts.UpdateLoadoutIdentifiers.index.$post
      >,
    ) {
      return parseResponse(
        client.Destiny2.Actions.Loadouts.UpdateLoadoutIdentifiers.index.$post(args, options),
      )
    },
  })
}

export function usePostDestiny2ActionsLoadoutsUpdateLoadoutIdentifiersIndex<
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
                    typeof client.Destiny2.Actions.Loadouts.UpdateLoadoutIdentifiers.index.$post
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            typeof client.Destiny2.Actions.Loadouts.UpdateLoadoutIdentifiers.index.$post
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
    getPostDestiny2ActionsLoadoutsUpdateLoadoutIdentifiersIndexMutationOptions<
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

export function getPostDestiny2ActionsLoadoutsClearLoadoutIndexMutationKey() {
  return ['Destiny2', '/Destiny2/Actions/Loadouts/ClearLoadout/', 'POST'] as const
}

export function getPostDestiny2ActionsLoadoutsClearLoadoutIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Destiny2.Actions.Loadouts.ClearLoadout.index.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.Destiny2.Actions.Loadouts.ClearLoadout.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDestiny2ActionsLoadoutsClearLoadoutIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.Destiny2.Actions.Loadouts.ClearLoadout.index.$post>,
    ) {
      return parseResponse(client.Destiny2.Actions.Loadouts.ClearLoadout.index.$post(args, options))
    },
  })
}

export function usePostDestiny2ActionsLoadoutsClearLoadoutIndex<
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
                  ReturnType<typeof client.Destiny2.Actions.Loadouts.ClearLoadout.index.$post>
                >
              >
            >
          >,
          TError,
          InferRequestType<typeof client.Destiny2.Actions.Loadouts.ClearLoadout.index.$post>,
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
  const mutationDefaults = getPostDestiny2ActionsLoadoutsClearLoadoutIndexMutationOptions<
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

export function getPostDestiny2ActionsItemsSetLockStateIndexMutationKey() {
  return ['Destiny2', '/Destiny2/Actions/Items/SetLockState/', 'POST'] as const
}

export function getPostDestiny2ActionsItemsSetLockStateIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Destiny2.Actions.Items.SetLockState.index.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.Destiny2.Actions.Items.SetLockState.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDestiny2ActionsItemsSetLockStateIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.Destiny2.Actions.Items.SetLockState.index.$post>,
    ) {
      return parseResponse(client.Destiny2.Actions.Items.SetLockState.index.$post(args, options))
    },
  })
}

export function usePostDestiny2ActionsItemsSetLockStateIndex<
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
                Awaited<ReturnType<typeof client.Destiny2.Actions.Items.SetLockState.index.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.Destiny2.Actions.Items.SetLockState.index.$post>,
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
  const mutationDefaults = getPostDestiny2ActionsItemsSetLockStateIndexMutationOptions<
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

export function getPostDestiny2ActionsItemsSetTrackedStateIndexMutationKey() {
  return ['Destiny2', '/Destiny2/Actions/Items/SetTrackedState/', 'POST'] as const
}

export function getPostDestiny2ActionsItemsSetTrackedStateIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Destiny2.Actions.Items.SetTrackedState.index.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.Destiny2.Actions.Items.SetTrackedState.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDestiny2ActionsItemsSetTrackedStateIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.Destiny2.Actions.Items.SetTrackedState.index.$post>,
    ) {
      return parseResponse(client.Destiny2.Actions.Items.SetTrackedState.index.$post(args, options))
    },
  })
}

export function usePostDestiny2ActionsItemsSetTrackedStateIndex<
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
                  ReturnType<typeof client.Destiny2.Actions.Items.SetTrackedState.index.$post>
                >
              >
            >
          >,
          TError,
          InferRequestType<typeof client.Destiny2.Actions.Items.SetTrackedState.index.$post>,
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
  const mutationDefaults = getPostDestiny2ActionsItemsSetTrackedStateIndexMutationOptions<
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

export function getPostDestiny2ActionsItemsInsertSocketPlugIndexMutationKey() {
  return ['Destiny2', '/Destiny2/Actions/Items/InsertSocketPlug/', 'POST'] as const
}

export function getPostDestiny2ActionsItemsInsertSocketPlugIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Destiny2.Actions.Items.InsertSocketPlug.index.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.Destiny2.Actions.Items.InsertSocketPlug.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDestiny2ActionsItemsInsertSocketPlugIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.Destiny2.Actions.Items.InsertSocketPlug.index.$post>,
    ) {
      return parseResponse(
        client.Destiny2.Actions.Items.InsertSocketPlug.index.$post(args, options),
      )
    },
  })
}

export function usePostDestiny2ActionsItemsInsertSocketPlugIndex<
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
                  ReturnType<typeof client.Destiny2.Actions.Items.InsertSocketPlug.index.$post>
                >
              >
            >
          >,
          TError,
          InferRequestType<typeof client.Destiny2.Actions.Items.InsertSocketPlug.index.$post>,
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
  const mutationDefaults = getPostDestiny2ActionsItemsInsertSocketPlugIndexMutationOptions<
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

export function getPostDestiny2ActionsItemsInsertSocketPlugFreeIndexMutationKey() {
  return ['Destiny2', '/Destiny2/Actions/Items/InsertSocketPlugFree/', 'POST'] as const
}

export function getPostDestiny2ActionsItemsInsertSocketPlugFreeIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Destiny2.Actions.Items.InsertSocketPlugFree.index.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.Destiny2.Actions.Items.InsertSocketPlugFree.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDestiny2ActionsItemsInsertSocketPlugFreeIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.Destiny2.Actions.Items.InsertSocketPlugFree.index.$post>,
    ) {
      return parseResponse(
        client.Destiny2.Actions.Items.InsertSocketPlugFree.index.$post(args, options),
      )
    },
  })
}

export function usePostDestiny2ActionsItemsInsertSocketPlugFreeIndex<
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
                  ReturnType<typeof client.Destiny2.Actions.Items.InsertSocketPlugFree.index.$post>
                >
              >
            >
          >,
          TError,
          InferRequestType<typeof client.Destiny2.Actions.Items.InsertSocketPlugFree.index.$post>,
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
  const mutationDefaults = getPostDestiny2ActionsItemsInsertSocketPlugFreeIndexMutationOptions<
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

export function getDestiny2StatsPostGameCarnageReportActivityIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2.Stats.PostGameCarnageReport)[':activityId']['index']['$get']
    >
  >,
) {
  return ['Destiny2', '/Destiny2/Stats/PostGameCarnageReport/:activityId/', toValue(args)] as const
}

export function getDestiny2StatsPostGameCarnageReportActivityIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2.Stats.PostGameCarnageReport)[':activityId']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDestiny2StatsPostGameCarnageReportActivityIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Destiny2.Stats.PostGameCarnageReport[':activityId'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDestiny2StatsPostGameCarnageReportActivityIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2.Stats.PostGameCarnageReport)[':activityId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2.Stats.PostGameCarnageReport)[':activityId']['index']['$get']
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
                    (typeof client.Destiny2.Stats.PostGameCarnageReport)[':activityId']['index']['$get']
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
                    (typeof client.Destiny2.Stats.PostGameCarnageReport)[':activityId']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDestiny2StatsPostGameCarnageReportActivityIdIndexQueryKey>
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
              (typeof client.Destiny2.Stats.PostGameCarnageReport)[':activityId']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDestiny2StatsPostGameCarnageReportActivityIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDestiny2StatsPostGameCarnageReportActivityIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Destiny2.Stats.PostGameCarnageReport[':activityId'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDestiny2StatsPostGameCarnageReportActivityIdReportIndexMutationKey() {
  return ['Destiny2', '/Destiny2/Stats/PostGameCarnageReport/:activityId/Report/', 'POST'] as const
}

export function getPostDestiny2StatsPostGameCarnageReportActivityIdReportIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Destiny2.Stats.PostGameCarnageReport)[':activityId']['Report']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Destiny2.Stats.PostGameCarnageReport)[':activityId']['Report']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDestiny2StatsPostGameCarnageReportActivityIdReportIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Destiny2.Stats.PostGameCarnageReport)[':activityId']['Report']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.Destiny2.Stats.PostGameCarnageReport[':activityId'].Report.index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostDestiny2StatsPostGameCarnageReportActivityIdReportIndex<
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
                    (typeof client.Destiny2.Stats.PostGameCarnageReport)[':activityId']['Report']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.Destiny2.Stats.PostGameCarnageReport)[':activityId']['Report']['index']['$post']
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
    getPostDestiny2StatsPostGameCarnageReportActivityIdReportIndexMutationOptions<
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

export function getDestiny2StatsDefinitionIndexQueryKey() {
  return ['Destiny2', '/Destiny2/Stats/Definition/'] as const
}

export function getDestiny2StatsDefinitionIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDestiny2StatsDefinitionIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Destiny2.Stats.Definition.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDestiny2StatsDefinitionIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Destiny2.Stats.Definition.index.$get>>>
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
                Awaited<ReturnType<typeof client.Destiny2.Stats.Definition.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.Destiny2.Stats.Definition.index.$get>>
              >
            >
          >,
          ReturnType<typeof getDestiny2StatsDefinitionIndexQueryKey>
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
          Awaited<ReturnType<typeof client.Destiny2.Stats.Definition.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDestiny2StatsDefinitionIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDestiny2StatsDefinitionIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Destiny2.Stats.Definition.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDestiny2StatsLeaderboardsClansGroupIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Destiny2.Stats.Leaderboards.Clans)[':groupId']['index']['$get']>
  >,
) {
  return ['Destiny2', '/Destiny2/Stats/Leaderboards/Clans/:groupId/', toValue(args)] as const
}

export function getDestiny2StatsLeaderboardsClansGroupIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Destiny2.Stats.Leaderboards.Clans)[':groupId']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDestiny2StatsLeaderboardsClansGroupIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Destiny2.Stats.Leaderboards.Clans[':groupId'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDestiny2StatsLeaderboardsClansGroupIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Destiny2.Stats.Leaderboards.Clans)[':groupId']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Destiny2.Stats.Leaderboards.Clans)[':groupId']['index']['$get']>
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
                    (typeof client.Destiny2.Stats.Leaderboards.Clans)[':groupId']['index']['$get']
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
                    (typeof client.Destiny2.Stats.Leaderboards.Clans)[':groupId']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDestiny2StatsLeaderboardsClansGroupIdIndexQueryKey>
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
              (typeof client.Destiny2.Stats.Leaderboards.Clans)[':groupId']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDestiny2StatsLeaderboardsClansGroupIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDestiny2StatsLeaderboardsClansGroupIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Destiny2.Stats.Leaderboards.Clans[':groupId'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDestiny2StatsAggregateClanStatsGroupIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Destiny2.Stats.AggregateClanStats)[':groupId']['index']['$get']>
  >,
) {
  return ['Destiny2', '/Destiny2/Stats/AggregateClanStats/:groupId/', toValue(args)] as const
}

export function getDestiny2StatsAggregateClanStatsGroupIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Destiny2.Stats.AggregateClanStats)[':groupId']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDestiny2StatsAggregateClanStatsGroupIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Destiny2.Stats.AggregateClanStats[':groupId'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDestiny2StatsAggregateClanStatsGroupIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Destiny2.Stats.AggregateClanStats)[':groupId']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Destiny2.Stats.AggregateClanStats)[':groupId']['index']['$get']>
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
                    (typeof client.Destiny2.Stats.AggregateClanStats)[':groupId']['index']['$get']
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
                    (typeof client.Destiny2.Stats.AggregateClanStats)[':groupId']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDestiny2StatsAggregateClanStatsGroupIdIndexQueryKey>
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
              (typeof client.Destiny2.Stats.AggregateClanStats)[':groupId']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDestiny2StatsAggregateClanStatsGroupIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDestiny2StatsAggregateClanStatsGroupIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Destiny2.Stats.AggregateClanStats[':groupId'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDestiny2MembershipTypeAccountDestinyMembershipIdStatsLeaderboardsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Stats']['Leaderboards']['index']['$get']
    >
  >,
) {
  return [
    'Destiny2',
    '/Destiny2/:membershipType/Account/:destinyMembershipId/Stats/Leaderboards/',
    toValue(args),
  ] as const
}

export function getDestiny2MembershipTypeAccountDestinyMembershipIdStatsLeaderboardsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Stats']['Leaderboards']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDestiny2MembershipTypeAccountDestinyMembershipIdStatsLeaderboardsIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Destiny2[':membershipType'].Account[
          ':destinyMembershipId'
        ].Stats.Leaderboards.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDestiny2MembershipTypeAccountDestinyMembershipIdStatsLeaderboardsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Stats']['Leaderboards']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Stats']['Leaderboards']['index']['$get']
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
                    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Stats']['Leaderboards']['index']['$get']
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
                    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Stats']['Leaderboards']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDestiny2MembershipTypeAccountDestinyMembershipIdStatsLeaderboardsIndexQueryKey
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
              (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Stats']['Leaderboards']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDestiny2MembershipTypeAccountDestinyMembershipIdStatsLeaderboardsIndexQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDestiny2MembershipTypeAccountDestinyMembershipIdStatsLeaderboardsIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.Destiny2[':membershipType'].Account[
            ':destinyMembershipId'
          ].Stats.Leaderboards.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDestiny2StatsLeaderboardsMembershipTypeDestinyMembershipIdCharacterIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2.Stats.Leaderboards)[':membershipType'][':destinyMembershipId'][':characterId']['index']['$get']
    >
  >,
) {
  return [
    'Destiny2',
    '/Destiny2/Stats/Leaderboards/:membershipType/:destinyMembershipId/:characterId/',
    toValue(args),
  ] as const
}

export function getDestiny2StatsLeaderboardsMembershipTypeDestinyMembershipIdCharacterIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2.Stats.Leaderboards)[':membershipType'][':destinyMembershipId'][':characterId']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDestiny2StatsLeaderboardsMembershipTypeDestinyMembershipIdCharacterIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Destiny2.Stats.Leaderboards[':membershipType'][':destinyMembershipId'][
          ':characterId'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDestiny2StatsLeaderboardsMembershipTypeDestinyMembershipIdCharacterIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2.Stats.Leaderboards)[':membershipType'][':destinyMembershipId'][':characterId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2.Stats.Leaderboards)[':membershipType'][':destinyMembershipId'][':characterId']['index']['$get']
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
                    (typeof client.Destiny2.Stats.Leaderboards)[':membershipType'][':destinyMembershipId'][':characterId']['index']['$get']
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
                    (typeof client.Destiny2.Stats.Leaderboards)[':membershipType'][':destinyMembershipId'][':characterId']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDestiny2StatsLeaderboardsMembershipTypeDestinyMembershipIdCharacterIdIndexQueryKey
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
              (typeof client.Destiny2.Stats.Leaderboards)[':membershipType'][':destinyMembershipId'][':characterId']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDestiny2StatsLeaderboardsMembershipTypeDestinyMembershipIdCharacterIdIndexQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDestiny2StatsLeaderboardsMembershipTypeDestinyMembershipIdCharacterIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.Destiny2.Stats.Leaderboards[':membershipType'][':destinyMembershipId'][
            ':characterId'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDestiny2ArmorySearchTypeSearchTermIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2.Armory.Search)[':type'][':searchTerm']['index']['$get']
    >
  >,
) {
  return ['Destiny2', '/Destiny2/Armory/Search/:type/:searchTerm/', toValue(args)] as const
}

export function getDestiny2ArmorySearchTypeSearchTermIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2.Armory.Search)[':type'][':searchTerm']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDestiny2ArmorySearchTypeSearchTermIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Destiny2.Armory.Search[':type'][':searchTerm'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDestiny2ArmorySearchTypeSearchTermIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2.Armory.Search)[':type'][':searchTerm']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2.Armory.Search)[':type'][':searchTerm']['index']['$get']
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
                    (typeof client.Destiny2.Armory.Search)[':type'][':searchTerm']['index']['$get']
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
                    (typeof client.Destiny2.Armory.Search)[':type'][':searchTerm']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDestiny2ArmorySearchTypeSearchTermIndexQueryKey>
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
              (typeof client.Destiny2.Armory.Search)[':type'][':searchTerm']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDestiny2ArmorySearchTypeSearchTermIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDestiny2ArmorySearchTypeSearchTermIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Destiny2.Armory.Search[':type'][':searchTerm'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['index']['$get']
    >
  >,
) {
  return [
    'Destiny2',
    '/Destiny2/:membershipType/Account/:destinyMembershipId/Character/:characterId/Stats/',
    toValue(args),
  ] as const
}

export function getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsIndexQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Destiny2[':membershipType'].Account[':destinyMembershipId'].Character[
          ':characterId'
        ].Stats.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['index']['$get']
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
                    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['index']['$get']
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
                    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsIndexQueryKey
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
              (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsIndexQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsIndexQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.Destiny2[':membershipType'].Account[':destinyMembershipId'].Character[
            ':characterId'
          ].Stats.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDestiny2MembershipTypeAccountDestinyMembershipIdStatsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Stats']['index']['$get']
    >
  >,
) {
  return [
    'Destiny2',
    '/Destiny2/:membershipType/Account/:destinyMembershipId/Stats/',
    toValue(args),
  ] as const
}

export function getDestiny2MembershipTypeAccountDestinyMembershipIdStatsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Stats']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDestiny2MembershipTypeAccountDestinyMembershipIdStatsIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Destiny2[':membershipType'].Account[':destinyMembershipId'].Stats.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useDestiny2MembershipTypeAccountDestinyMembershipIdStatsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Stats']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Stats']['index']['$get']
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
                    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Stats']['index']['$get']
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
                    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Stats']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDestiny2MembershipTypeAccountDestinyMembershipIdStatsIndexQueryKey>
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
              (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Stats']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDestiny2MembershipTypeAccountDestinyMembershipIdStatsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDestiny2MembershipTypeAccountDestinyMembershipIdStatsIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.Destiny2[':membershipType'].Account[':destinyMembershipId'].Stats.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsActivitiesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['Activities']['index']['$get']
    >
  >,
) {
  return [
    'Destiny2',
    '/Destiny2/:membershipType/Account/:destinyMembershipId/Character/:characterId/Stats/Activities/',
    toValue(args),
  ] as const
}

export function getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsActivitiesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['Activities']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsActivitiesIndexQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Destiny2[':membershipType'].Account[':destinyMembershipId'].Character[
          ':characterId'
        ].Stats.Activities.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsActivitiesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['Activities']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['Activities']['index']['$get']
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
                    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['Activities']['index']['$get']
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
                    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['Activities']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsActivitiesIndexQueryKey
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
              (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['Activities']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsActivitiesIndexQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsActivitiesIndexQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.Destiny2[':membershipType'].Account[':destinyMembershipId'].Character[
            ':characterId'
          ].Stats.Activities.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsUniqueWeaponsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['UniqueWeapons']['index']['$get']
    >
  >,
) {
  return [
    'Destiny2',
    '/Destiny2/:membershipType/Account/:destinyMembershipId/Character/:characterId/Stats/UniqueWeapons/',
    toValue(args),
  ] as const
}

export function getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsUniqueWeaponsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['UniqueWeapons']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsUniqueWeaponsIndexQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Destiny2[':membershipType'].Account[':destinyMembershipId'].Character[
          ':characterId'
        ].Stats.UniqueWeapons.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsUniqueWeaponsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['UniqueWeapons']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['UniqueWeapons']['index']['$get']
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
                    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['UniqueWeapons']['index']['$get']
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
                    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['UniqueWeapons']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsUniqueWeaponsIndexQueryKey
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
              (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['UniqueWeapons']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsUniqueWeaponsIndexQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsUniqueWeaponsIndexQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.Destiny2[':membershipType'].Account[':destinyMembershipId'].Character[
            ':characterId'
          ].Stats.UniqueWeapons.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsAggregateActivityStatsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['AggregateActivityStats']['index']['$get']
    >
  >,
) {
  return [
    'Destiny2',
    '/Destiny2/:membershipType/Account/:destinyMembershipId/Character/:characterId/Stats/AggregateActivityStats/',
    toValue(args),
  ] as const
}

export function getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsAggregateActivityStatsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['AggregateActivityStats']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsAggregateActivityStatsIndexQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Destiny2[':membershipType'].Account[':destinyMembershipId'].Character[
          ':characterId'
        ].Stats.AggregateActivityStats.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsAggregateActivityStatsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['AggregateActivityStats']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['AggregateActivityStats']['index']['$get']
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
                    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['AggregateActivityStats']['index']['$get']
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
                    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['AggregateActivityStats']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsAggregateActivityStatsIndexQueryKey
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
              (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['AggregateActivityStats']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsAggregateActivityStatsIndexQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsAggregateActivityStatsIndexQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.Destiny2[':membershipType'].Account[':destinyMembershipId'].Character[
            ':characterId'
          ].Stats.AggregateActivityStats.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDestiny2MilestonesMilestoneHashContentIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2.Milestones)[':milestoneHash']['Content']['index']['$get']
    >
  >,
) {
  return ['Destiny2', '/Destiny2/Milestones/:milestoneHash/Content/', toValue(args)] as const
}

export function getDestiny2MilestonesMilestoneHashContentIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2.Milestones)[':milestoneHash']['Content']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDestiny2MilestonesMilestoneHashContentIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Destiny2.Milestones[':milestoneHash'].Content.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDestiny2MilestonesMilestoneHashContentIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2.Milestones)[':milestoneHash']['Content']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Destiny2.Milestones)[':milestoneHash']['Content']['index']['$get']
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
                    (typeof client.Destiny2.Milestones)[':milestoneHash']['Content']['index']['$get']
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
                    (typeof client.Destiny2.Milestones)[':milestoneHash']['Content']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDestiny2MilestonesMilestoneHashContentIndexQueryKey>
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
              (typeof client.Destiny2.Milestones)[':milestoneHash']['Content']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDestiny2MilestonesMilestoneHashContentIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDestiny2MilestonesMilestoneHashContentIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Destiny2.Milestones[':milestoneHash'].Content.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDestiny2MilestonesIndexQueryKey() {
  return ['Destiny2', '/Destiny2/Milestones/'] as const
}

export function getDestiny2MilestonesIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDestiny2MilestonesIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Destiny2.Milestones.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDestiny2MilestonesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Destiny2.Milestones.index.$get>>>
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
                Awaited<ReturnType<typeof client.Destiny2.Milestones.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.Destiny2.Milestones.index.$get>>
              >
            >
          >,
          ReturnType<typeof getDestiny2MilestonesIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.Destiny2.Milestones.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDestiny2MilestonesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDestiny2MilestonesIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Destiny2.Milestones.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDestiny2AwaInitializeIndexMutationKey() {
  return ['Destiny2', '/Destiny2/Awa/Initialize/', 'POST'] as const
}

export function getPostDestiny2AwaInitializeIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Destiny2.Awa.Initialize.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.Destiny2.Awa.Initialize.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDestiny2AwaInitializeIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Destiny2.Awa.Initialize.index.$post>) {
      return parseResponse(client.Destiny2.Awa.Initialize.index.$post(args, options))
    },
  })
}

export function usePostDestiny2AwaInitializeIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.Destiny2.Awa.Initialize.index.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.Destiny2.Awa.Initialize.index.$post>,
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
  const mutationDefaults = getPostDestiny2AwaInitializeIndexMutationOptions<
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

export function getPostDestiny2AwaAwaProvideAuthorizationResultIndexMutationKey() {
  return ['Destiny2', '/Destiny2/Awa/AwaProvideAuthorizationResult/', 'POST'] as const
}

export function getPostDestiny2AwaAwaProvideAuthorizationResultIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Destiny2.Awa.AwaProvideAuthorizationResult.index.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.Destiny2.Awa.AwaProvideAuthorizationResult.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDestiny2AwaAwaProvideAuthorizationResultIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.Destiny2.Awa.AwaProvideAuthorizationResult.index.$post>,
    ) {
      return parseResponse(
        client.Destiny2.Awa.AwaProvideAuthorizationResult.index.$post(args, options),
      )
    },
  })
}

export function usePostDestiny2AwaAwaProvideAuthorizationResultIndex<
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
                  ReturnType<typeof client.Destiny2.Awa.AwaProvideAuthorizationResult.index.$post>
                >
              >
            >
          >,
          TError,
          InferRequestType<typeof client.Destiny2.Awa.AwaProvideAuthorizationResult.index.$post>,
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
  const mutationDefaults = getPostDestiny2AwaAwaProvideAuthorizationResultIndexMutationOptions<
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

export function getDestiny2AwaGetActionTokenCorrelationIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Destiny2.Awa.GetActionToken)[':correlationId']['index']['$get']>
  >,
) {
  return ['Destiny2', '/Destiny2/Awa/GetActionToken/:correlationId/', toValue(args)] as const
}

export function getDestiny2AwaGetActionTokenCorrelationIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Destiny2.Awa.GetActionToken)[':correlationId']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDestiny2AwaGetActionTokenCorrelationIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Destiny2.Awa.GetActionToken[':correlationId'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDestiny2AwaGetActionTokenCorrelationIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Destiny2.Awa.GetActionToken)[':correlationId']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Destiny2.Awa.GetActionToken)[':correlationId']['index']['$get']>
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
                    (typeof client.Destiny2.Awa.GetActionToken)[':correlationId']['index']['$get']
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
                    (typeof client.Destiny2.Awa.GetActionToken)[':correlationId']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDestiny2AwaGetActionTokenCorrelationIdIndexQueryKey>
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
              (typeof client.Destiny2.Awa.GetActionToken)[':correlationId']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDestiny2AwaGetActionTokenCorrelationIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDestiny2AwaGetActionTokenCorrelationIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Destiny2.Awa.GetActionToken[':correlationId'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommunityContentGetSortMediaFilterPageIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.CommunityContent.Get)[':sort'][':mediaFilter'][':page']['index']['$get']
    >
  >,
) {
  return [
    'CommunityContent',
    '/CommunityContent/Get/:sort/:mediaFilter/:page/',
    toValue(args),
  ] as const
}

export function getCommunityContentGetSortMediaFilterPageIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.CommunityContent.Get)[':sort'][':mediaFilter'][':page']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommunityContentGetSortMediaFilterPageIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.CommunityContent.Get[':sort'][':mediaFilter'][':page'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCommunityContentGetSortMediaFilterPageIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.CommunityContent.Get)[':sort'][':mediaFilter'][':page']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.CommunityContent.Get)[':sort'][':mediaFilter'][':page']['index']['$get']
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
                    (typeof client.CommunityContent.Get)[':sort'][':mediaFilter'][':page']['index']['$get']
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
                    (typeof client.CommunityContent.Get)[':sort'][':mediaFilter'][':page']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCommunityContentGetSortMediaFilterPageIndexQueryKey>
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
              (typeof client.CommunityContent.Get)[':sort'][':mediaFilter'][':page']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommunityContentGetSortMediaFilterPageIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommunityContentGetSortMediaFilterPageIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.CommunityContent.Get[':sort'][':mediaFilter'][':page'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTrendingCategoriesIndexQueryKey() {
  return ['Trending', '/Trending/Categories/'] as const
}

export function getTrendingCategoriesIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTrendingCategoriesIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Trending.Categories.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTrendingCategoriesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Trending.Categories.index.$get>>>
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
                Awaited<ReturnType<typeof client.Trending.Categories.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.Trending.Categories.index.$get>>
              >
            >
          >,
          ReturnType<typeof getTrendingCategoriesIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.Trending.Categories.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrendingCategoriesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTrendingCategoriesIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Trending.Categories.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTrendingCategoriesCategoryIdPageNumberIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Trending.Categories)[':categoryId'][':pageNumber']['index']['$get']
    >
  >,
) {
  return ['Trending', '/Trending/Categories/:categoryId/:pageNumber/', toValue(args)] as const
}

export function getTrendingCategoriesCategoryIdPageNumberIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Trending.Categories)[':categoryId'][':pageNumber']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTrendingCategoriesCategoryIdPageNumberIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Trending.Categories[':categoryId'][':pageNumber'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTrendingCategoriesCategoryIdPageNumberIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Trending.Categories)[':categoryId'][':pageNumber']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Trending.Categories)[':categoryId'][':pageNumber']['index']['$get']
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
                    (typeof client.Trending.Categories)[':categoryId'][':pageNumber']['index']['$get']
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
                    (typeof client.Trending.Categories)[':categoryId'][':pageNumber']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTrendingCategoriesCategoryIdPageNumberIndexQueryKey>
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
              (typeof client.Trending.Categories)[':categoryId'][':pageNumber']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrendingCategoriesCategoryIdPageNumberIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTrendingCategoriesCategoryIdPageNumberIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Trending.Categories[':categoryId'][':pageNumber'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTrendingDetailsTrendingEntryTypeIdentifierIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Trending.Details)[':trendingEntryType'][':identifier']['index']['$get']
    >
  >,
) {
  return ['Trending', '/Trending/Details/:trendingEntryType/:identifier/', toValue(args)] as const
}

export function getTrendingDetailsTrendingEntryTypeIdentifierIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Trending.Details)[':trendingEntryType'][':identifier']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTrendingDetailsTrendingEntryTypeIdentifierIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Trending.Details[':trendingEntryType'][':identifier'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTrendingDetailsTrendingEntryTypeIdentifierIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Trending.Details)[':trendingEntryType'][':identifier']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Trending.Details)[':trendingEntryType'][':identifier']['index']['$get']
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
                    (typeof client.Trending.Details)[':trendingEntryType'][':identifier']['index']['$get']
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
                    (typeof client.Trending.Details)[':trendingEntryType'][':identifier']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTrendingDetailsTrendingEntryTypeIdentifierIndexQueryKey>
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
              (typeof client.Trending.Details)[':trendingEntryType'][':identifier']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrendingDetailsTrendingEntryTypeIdentifierIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTrendingDetailsTrendingEntryTypeIdentifierIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Trending.Details[':trendingEntryType'][':identifier'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFireteamClanGroupIdActiveCountIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Fireteam.Clan)[':groupId']['ActiveCount']['index']['$get']>
  >,
) {
  return ['Fireteam', '/Fireteam/Clan/:groupId/ActiveCount/', toValue(args)] as const
}

export function getFireteamClanGroupIdActiveCountIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Fireteam.Clan)[':groupId']['ActiveCount']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFireteamClanGroupIdActiveCountIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Fireteam.Clan[':groupId'].ActiveCount.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFireteamClanGroupIdActiveCountIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Fireteam.Clan)[':groupId']['ActiveCount']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Fireteam.Clan)[':groupId']['ActiveCount']['index']['$get']>
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
                    (typeof client.Fireteam.Clan)[':groupId']['ActiveCount']['index']['$get']
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
                    (typeof client.Fireteam.Clan)[':groupId']['ActiveCount']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFireteamClanGroupIdActiveCountIndexQueryKey>
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
            ReturnType<(typeof client.Fireteam.Clan)[':groupId']['ActiveCount']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFireteamClanGroupIdActiveCountIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFireteamClanGroupIdActiveCountIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Fireteam.Clan[':groupId'].ActiveCount.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFireteamClanGroupIdAvailablePlatformActivityTypeDateRangeSlotFilterPublicOnlyPageIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Fireteam.Clan)[':groupId']['Available'][':platform'][':activityType'][':dateRange'][':slotFilter'][':publicOnly'][':page']['index']['$get']
    >
  >,
) {
  return [
    'Fireteam',
    '/Fireteam/Clan/:groupId/Available/:platform/:activityType/:dateRange/:slotFilter/:publicOnly/:page/',
    toValue(args),
  ] as const
}

export function getFireteamClanGroupIdAvailablePlatformActivityTypeDateRangeSlotFilterPublicOnlyPageIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Fireteam.Clan)[':groupId']['Available'][':platform'][':activityType'][':dateRange'][':slotFilter'][':publicOnly'][':page']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getFireteamClanGroupIdAvailablePlatformActivityTypeDateRangeSlotFilterPublicOnlyPageIndexQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Fireteam.Clan[':groupId'].Available[':platform'][':activityType'][':dateRange'][
          ':slotFilter'
        ][':publicOnly'][':page'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFireteamClanGroupIdAvailablePlatformActivityTypeDateRangeSlotFilterPublicOnlyPageIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Fireteam.Clan)[':groupId']['Available'][':platform'][':activityType'][':dateRange'][':slotFilter'][':publicOnly'][':page']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Fireteam.Clan)[':groupId']['Available'][':platform'][':activityType'][':dateRange'][':slotFilter'][':publicOnly'][':page']['index']['$get']
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
                    (typeof client.Fireteam.Clan)[':groupId']['Available'][':platform'][':activityType'][':dateRange'][':slotFilter'][':publicOnly'][':page']['index']['$get']
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
                    (typeof client.Fireteam.Clan)[':groupId']['Available'][':platform'][':activityType'][':dateRange'][':slotFilter'][':publicOnly'][':page']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getFireteamClanGroupIdAvailablePlatformActivityTypeDateRangeSlotFilterPublicOnlyPageIndexQueryKey
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
              (typeof client.Fireteam.Clan)[':groupId']['Available'][':platform'][':activityType'][':dateRange'][':slotFilter'][':publicOnly'][':page']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getFireteamClanGroupIdAvailablePlatformActivityTypeDateRangeSlotFilterPublicOnlyPageIndexQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getFireteamClanGroupIdAvailablePlatformActivityTypeDateRangeSlotFilterPublicOnlyPageIndexQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.Fireteam.Clan[':groupId'].Available[':platform'][':activityType'][':dateRange'][
            ':slotFilter'
          ][':publicOnly'][':page'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFireteamSearchAvailablePlatformActivityTypeDateRangeSlotFilterPageIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Fireteam.Search.Available)[':platform'][':activityType'][':dateRange'][':slotFilter'][':page']['index']['$get']
    >
  >,
) {
  return [
    'Fireteam',
    '/Fireteam/Search/Available/:platform/:activityType/:dateRange/:slotFilter/:page/',
    toValue(args),
  ] as const
}

export function getFireteamSearchAvailablePlatformActivityTypeDateRangeSlotFilterPageIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Fireteam.Search.Available)[':platform'][':activityType'][':dateRange'][':slotFilter'][':page']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getFireteamSearchAvailablePlatformActivityTypeDateRangeSlotFilterPageIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Fireteam.Search.Available[':platform'][':activityType'][':dateRange'][':slotFilter'][
          ':page'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFireteamSearchAvailablePlatformActivityTypeDateRangeSlotFilterPageIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Fireteam.Search.Available)[':platform'][':activityType'][':dateRange'][':slotFilter'][':page']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Fireteam.Search.Available)[':platform'][':activityType'][':dateRange'][':slotFilter'][':page']['index']['$get']
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
                    (typeof client.Fireteam.Search.Available)[':platform'][':activityType'][':dateRange'][':slotFilter'][':page']['index']['$get']
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
                    (typeof client.Fireteam.Search.Available)[':platform'][':activityType'][':dateRange'][':slotFilter'][':page']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getFireteamSearchAvailablePlatformActivityTypeDateRangeSlotFilterPageIndexQueryKey
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
              (typeof client.Fireteam.Search.Available)[':platform'][':activityType'][':dateRange'][':slotFilter'][':page']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getFireteamSearchAvailablePlatformActivityTypeDateRangeSlotFilterPageIndexQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getFireteamSearchAvailablePlatformActivityTypeDateRangeSlotFilterPageIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.Fireteam.Search.Available[':platform'][':activityType'][':dateRange'][
            ':slotFilter'
          ][':page'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFireteamClanGroupIdMyPlatformIncludeClosedPageIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Fireteam.Clan)[':groupId']['My'][':platform'][':includeClosed'][':page']['index']['$get']
    >
  >,
) {
  return [
    'Fireteam',
    '/Fireteam/Clan/:groupId/My/:platform/:includeClosed/:page/',
    toValue(args),
  ] as const
}

export function getFireteamClanGroupIdMyPlatformIncludeClosedPageIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Fireteam.Clan)[':groupId']['My'][':platform'][':includeClosed'][':page']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFireteamClanGroupIdMyPlatformIncludeClosedPageIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Fireteam.Clan[':groupId'].My[':platform'][':includeClosed'][':page'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useFireteamClanGroupIdMyPlatformIncludeClosedPageIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Fireteam.Clan)[':groupId']['My'][':platform'][':includeClosed'][':page']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Fireteam.Clan)[':groupId']['My'][':platform'][':includeClosed'][':page']['index']['$get']
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
                    (typeof client.Fireteam.Clan)[':groupId']['My'][':platform'][':includeClosed'][':page']['index']['$get']
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
                    (typeof client.Fireteam.Clan)[':groupId']['My'][':platform'][':includeClosed'][':page']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFireteamClanGroupIdMyPlatformIncludeClosedPageIndexQueryKey>
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
              (typeof client.Fireteam.Clan)[':groupId']['My'][':platform'][':includeClosed'][':page']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFireteamClanGroupIdMyPlatformIncludeClosedPageIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getFireteamClanGroupIdMyPlatformIncludeClosedPageIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.Fireteam.Clan[':groupId'].My[':platform'][':includeClosed'][':page'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getFireteamClanGroupIdSummaryFireteamIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Fireteam.Clan)[':groupId']['Summary'][':fireteamId']['index']['$get']
    >
  >,
) {
  return ['Fireteam', '/Fireteam/Clan/:groupId/Summary/:fireteamId/', toValue(args)] as const
}

export function getFireteamClanGroupIdSummaryFireteamIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Fireteam.Clan)[':groupId']['Summary'][':fireteamId']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFireteamClanGroupIdSummaryFireteamIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Fireteam.Clan[':groupId'].Summary[':fireteamId'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFireteamClanGroupIdSummaryFireteamIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Fireteam.Clan)[':groupId']['Summary'][':fireteamId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Fireteam.Clan)[':groupId']['Summary'][':fireteamId']['index']['$get']
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
                    (typeof client.Fireteam.Clan)[':groupId']['Summary'][':fireteamId']['index']['$get']
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
                    (typeof client.Fireteam.Clan)[':groupId']['Summary'][':fireteamId']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFireteamClanGroupIdSummaryFireteamIdIndexQueryKey>
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
              (typeof client.Fireteam.Clan)[':groupId']['Summary'][':fireteamId']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFireteamClanGroupIdSummaryFireteamIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFireteamClanGroupIdSummaryFireteamIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Fireteam.Clan[':groupId'].Summary[':fireteamId'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSocialFriendsIndexQueryKey() {
  return ['Social', '/Social/Friends/'] as const
}

export function getSocialFriendsIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSocialFriendsIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Social.Friends.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSocialFriendsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Social.Friends.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Social.Friends.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Social.Friends.index.$get>>>
            >
          >,
          ReturnType<typeof getSocialFriendsIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Social.Friends.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSocialFriendsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSocialFriendsIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Social.Friends.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSocialFriendsRequestsIndexQueryKey() {
  return ['Social', '/Social/Friends/Requests/'] as const
}

export function getSocialFriendsRequestsIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSocialFriendsRequestsIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Social.Friends.Requests.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSocialFriendsRequestsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Social.Friends.Requests.index.$get>>>
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
                Awaited<ReturnType<typeof client.Social.Friends.Requests.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.Social.Friends.Requests.index.$get>>
              >
            >
          >,
          ReturnType<typeof getSocialFriendsRequestsIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.Social.Friends.Requests.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSocialFriendsRequestsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSocialFriendsRequestsIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Social.Friends.Requests.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSocialFriendsAddMembershipIdIndexMutationKey() {
  return ['Social', '/Social/Friends/Add/:membershipId/', 'POST'] as const
}

export function getPostSocialFriendsAddMembershipIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Social.Friends.Add)[':membershipId']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Social.Friends.Add)[':membershipId']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSocialFriendsAddMembershipIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Social.Friends.Add)[':membershipId']['index']['$post']>,
    ) {
      return parseResponse(client.Social.Friends.Add[':membershipId'].index.$post(args, options))
    },
  })
}

export function usePostSocialFriendsAddMembershipIdIndex<
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
                  ReturnType<(typeof client.Social.Friends.Add)[':membershipId']['index']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.Social.Friends.Add)[':membershipId']['index']['$post']>,
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
  const mutationDefaults = getPostSocialFriendsAddMembershipIdIndexMutationOptions<
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

export function getPostSocialFriendsRequestsAcceptMembershipIdIndexMutationKey() {
  return ['Social', '/Social/Friends/Requests/Accept/:membershipId/', 'POST'] as const
}

export function getPostSocialFriendsRequestsAcceptMembershipIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Social.Friends.Requests.Accept)[':membershipId']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Social.Friends.Requests.Accept)[':membershipId']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSocialFriendsRequestsAcceptMembershipIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Social.Friends.Requests.Accept)[':membershipId']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.Social.Friends.Requests.Accept[':membershipId'].index.$post(args, options),
      )
    },
  })
}

export function usePostSocialFriendsRequestsAcceptMembershipIdIndex<
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
                    (typeof client.Social.Friends.Requests.Accept)[':membershipId']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.Social.Friends.Requests.Accept)[':membershipId']['index']['$post']
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
  const mutationDefaults = getPostSocialFriendsRequestsAcceptMembershipIdIndexMutationOptions<
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

export function getPostSocialFriendsRequestsDeclineMembershipIdIndexMutationKey() {
  return ['Social', '/Social/Friends/Requests/Decline/:membershipId/', 'POST'] as const
}

export function getPostSocialFriendsRequestsDeclineMembershipIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Social.Friends.Requests.Decline)[':membershipId']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Social.Friends.Requests.Decline)[':membershipId']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSocialFriendsRequestsDeclineMembershipIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Social.Friends.Requests.Decline)[':membershipId']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.Social.Friends.Requests.Decline[':membershipId'].index.$post(args, options),
      )
    },
  })
}

export function usePostSocialFriendsRequestsDeclineMembershipIdIndex<
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
                    (typeof client.Social.Friends.Requests.Decline)[':membershipId']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.Social.Friends.Requests.Decline)[':membershipId']['index']['$post']
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
  const mutationDefaults = getPostSocialFriendsRequestsDeclineMembershipIdIndexMutationOptions<
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

export function getPostSocialFriendsRemoveMembershipIdIndexMutationKey() {
  return ['Social', '/Social/Friends/Remove/:membershipId/', 'POST'] as const
}

export function getPostSocialFriendsRemoveMembershipIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Social.Friends.Remove)[':membershipId']['index']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Social.Friends.Remove)[':membershipId']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSocialFriendsRemoveMembershipIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Social.Friends.Remove)[':membershipId']['index']['$post']
      >,
    ) {
      return parseResponse(client.Social.Friends.Remove[':membershipId'].index.$post(args, options))
    },
  })
}

export function usePostSocialFriendsRemoveMembershipIdIndex<
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
                    (typeof client.Social.Friends.Remove)[':membershipId']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.Social.Friends.Remove)[':membershipId']['index']['$post']
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
  const mutationDefaults = getPostSocialFriendsRemoveMembershipIdIndexMutationOptions<
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

export function getPostSocialFriendsRequestsRemoveMembershipIdIndexMutationKey() {
  return ['Social', '/Social/Friends/Requests/Remove/:membershipId/', 'POST'] as const
}

export function getPostSocialFriendsRequestsRemoveMembershipIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Social.Friends.Requests.Remove)[':membershipId']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Social.Friends.Requests.Remove)[':membershipId']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSocialFriendsRequestsRemoveMembershipIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Social.Friends.Requests.Remove)[':membershipId']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.Social.Friends.Requests.Remove[':membershipId'].index.$post(args, options),
      )
    },
  })
}

export function usePostSocialFriendsRequestsRemoveMembershipIdIndex<
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
                    (typeof client.Social.Friends.Requests.Remove)[':membershipId']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.Social.Friends.Requests.Remove)[':membershipId']['index']['$post']
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
  const mutationDefaults = getPostSocialFriendsRequestsRemoveMembershipIdIndexMutationOptions<
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

export function getSocialPlatformFriendsFriendPlatformPageIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Social.PlatformFriends)[':friendPlatform'][':page']['index']['$get']
    >
  >,
) {
  return ['Social', '/Social/PlatformFriends/:friendPlatform/:page/', toValue(args)] as const
}

export function getSocialPlatformFriendsFriendPlatformPageIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Social.PlatformFriends)[':friendPlatform'][':page']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSocialPlatformFriendsFriendPlatformPageIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Social.PlatformFriends[':friendPlatform'][':page'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSocialPlatformFriendsFriendPlatformPageIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Social.PlatformFriends)[':friendPlatform'][':page']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Social.PlatformFriends)[':friendPlatform'][':page']['index']['$get']
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
                    (typeof client.Social.PlatformFriends)[':friendPlatform'][':page']['index']['$get']
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
                    (typeof client.Social.PlatformFriends)[':friendPlatform'][':page']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSocialPlatformFriendsFriendPlatformPageIndexQueryKey>
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
              (typeof client.Social.PlatformFriends)[':friendPlatform'][':page']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSocialPlatformFriendsFriendPlatformPageIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSocialPlatformFriendsFriendPlatformPageIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Social.PlatformFriends[':friendPlatform'][':page'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGetAvailableLocalesIndexQueryKey() {
  return ['GetAvailableLocales', '/GetAvailableLocales/'] as const
}

export function getGetAvailableLocalesIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getGetAvailableLocalesIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.GetAvailableLocales.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetAvailableLocalesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.GetAvailableLocales.index.$get>>>
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
                Awaited<ReturnType<typeof client.GetAvailableLocales.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.GetAvailableLocales.index.$get>>
              >
            >
          >,
          ReturnType<typeof getGetAvailableLocalesIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.GetAvailableLocales.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetAvailableLocalesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getGetAvailableLocalesIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.GetAvailableLocales.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSettingsIndexQueryKey() {
  return ['Settings', '/Settings/'] as const
}

export function getSettingsIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSettingsIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Settings.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSettingsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Settings.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Settings.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Settings.index.$get>>>>
          >,
          ReturnType<typeof getSettingsIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Settings.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSettingsIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Settings.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserSystemOverridesIndexQueryKey() {
  return ['UserSystemOverrides', '/UserSystemOverrides/'] as const
}

export function getUserSystemOverridesIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUserSystemOverridesIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.UserSystemOverrides.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserSystemOverridesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.UserSystemOverrides.index.$get>>>
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
                Awaited<ReturnType<typeof client.UserSystemOverrides.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.UserSystemOverrides.index.$get>>
              >
            >
          >,
          ReturnType<typeof getUserSystemOverridesIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.UserSystemOverrides.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserSystemOverridesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUserSystemOverridesIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.UserSystemOverrides.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGlobalAlertsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.GlobalAlerts.index.$get>>,
) {
  return ['GlobalAlerts', '/GlobalAlerts/', toValue(args)] as const
}

export function getGlobalAlertsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.GlobalAlerts.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGlobalAlertsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.GlobalAlerts.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGlobalAlertsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GlobalAlerts.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.GlobalAlerts.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.GlobalAlerts.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.GlobalAlerts.index.$get>>>
            >
          >,
          ReturnType<typeof getGlobalAlertsIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GlobalAlerts.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGlobalAlertsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGlobalAlertsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.GlobalAlerts.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
