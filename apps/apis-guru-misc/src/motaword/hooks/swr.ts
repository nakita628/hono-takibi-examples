import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAsyncKey() {
  return ['async'] as const
}

export function getBlogsKey() {
  return ['blogs'] as const
}

export function getCacheKey() {
  return ['cache'] as const
}

export function getCommissionsKey() {
  return ['commissions'] as const
}

export function getContinuousProjectsKey() {
  return ['continuous_projects'] as const
}

export function getCorporateKey() {
  return ['corporate'] as const
}

export function getCorporatesKey() {
  return ['corporates'] as const
}

export function getDeleteAccountKey() {
  return ['delete-account'] as const
}

export function getDocumentsKey() {
  return ['documents'] as const
}

export function getDowngradeProofreaderKey() {
  return ['downgrade-proofreader'] as const
}

export function getEarningsKey() {
  return ['earnings'] as const
}

export function getFormatsKey() {
  return ['formats'] as const
}

export function getFreezeAccountKey() {
  return ['freeze-account'] as const
}

export function getGlossaryKey() {
  return ['glossary'] as const
}

export function getIntegrationsKey() {
  return ['integrations'] as const
}

export function getInvitationKey() {
  return ['invitation'] as const
}

export function getLanguagesKey() {
  return ['languages'] as const
}

export function getLocationKey() {
  return ['location'] as const
}

export function getMakeProofreaderKey() {
  return ['make-proofreader'] as const
}

export function getMeKey() {
  return ['me'] as const
}

export function getMlKey() {
  return ['ml'] as const
}

export function getNotificationsKey() {
  return ['notifications'] as const
}

export function getPamKey() {
  return ['pam'] as const
}

export function getPasswordKey() {
  return ['password'] as const
}

export function getPaymentKey() {
  return ['payment'] as const
}

export function getPermissionsKey() {
  return ['permissions'] as const
}

export function getProfilePictureKey() {
  return ['profile-picture'] as const
}

export function getProjectsKey() {
  return ['projects'] as const
}

export function getReportsKey() {
  return ['reports'] as const
}

export function getResendEmailConfirmationKey() {
  return ['resend-email-confirmation'] as const
}

export function getResponsivityKey() {
  return ['responsivity'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getStatsKey() {
  return ['stats'] as const
}

export function getStringsKey() {
  return ['strings'] as const
}

export function getStyleguideKey() {
  return ['styleguide'] as const
}

export function getSurveysKey() {
  return ['surveys'] as const
}

export function getSwaggerKey() {
  return ['swagger'] as const
}

export function getTokenKey() {
  return ['token'] as const
}

export function getUnfreezeAccountKey() {
  return ['unfreeze-account'] as const
}

export function getUserGroupsKey() {
  return ['user-groups'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getUserIdKey() {
  return ['{userId}'] as const
}

export function getGetKey() {
  return ['', '/'] as const
}

export function useGet<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAsyncDownloadKey(args: InferRequestType<typeof client.async.download.$get>) {
  return ['async', '/async/download', args] as const
}

export function useGetAsyncDownload<TError = unknown>(
  args: InferRequestType<typeof client.async.download.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.async.download.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAsyncDownloadKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.async.download.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.async.download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAsyncDownload<TError = unknown>(
  args: InferRequestType<typeof client.async.download.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.async.download.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAsyncDownloadKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.async.download.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.async.download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBlogsKey(args: InferRequestType<typeof client.blogs.$get>) {
  return ['blogs', '/blogs', args] as const
}

export function useGetBlogs<TError = unknown>(
  args: InferRequestType<typeof client.blogs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blogs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBlogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blogs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.blogs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetBlogs<TError = unknown>(
  args: InferRequestType<typeof client.blogs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blogs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBlogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blogs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.blogs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getDeleteCacheKeyKey() {
  return ['cache', '/cache/:key', 'DELETE'] as const
}

export function useDeleteCacheKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':key']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cache)[':key']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCacheKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cache)[':key']['$delete']> },
      ) => parseResponse(client.cache[':key'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCommissionsKey() {
  return ['commissions', '/commissions'] as const
}

export function useGetCommissions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commissions.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCommissionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commissions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.commissions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommissions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commissions.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCommissionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commissions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.commissions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCommissionsKey() {
  return ['commissions', '/commissions', 'POST'] as const
}

export function usePostCommissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commissions.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.commissions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCommissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.commissions.$post> }) =>
        parseResponse(client.commissions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContinuousProjectsKey(
  args: InferRequestType<typeof client.continuous_projects.$get>,
) {
  return ['continuous_projects', '/continuous_projects', args] as const
}

export function useGetContinuousProjects<TError = unknown>(
  args: InferRequestType<typeof client.continuous_projects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.continuous_projects.$get>>>
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
        ? getGetContinuousProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.continuous_projects.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.continuous_projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContinuousProjects<TError = unknown>(
  args: InferRequestType<typeof client.continuous_projects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.continuous_projects.$get>>>
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
        ? getGetContinuousProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.continuous_projects.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.continuous_projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostContinuousProjectsKey() {
  return ['continuous_projects', '/continuous_projects', 'POST'] as const
}

export function usePostContinuousProjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.continuous_projects.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.continuous_projects.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContinuousProjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.continuous_projects.$post> }) =>
        parseResponse(client.continuous_projects.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContinuousProjectsIdKey(
  args: InferRequestType<(typeof client.continuous_projects)[':id']['$get']>,
) {
  return ['continuous_projects', '/continuous_projects/:id', args] as const
}

export function useGetContinuousProjectsId<TError = unknown>(
  args: InferRequestType<(typeof client.continuous_projects)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.continuous_projects)[':id']['$get']>>
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
        ? getGetContinuousProjectsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.continuous_projects)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.continuous_projects[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContinuousProjectsId<TError = unknown>(
  args: InferRequestType<(typeof client.continuous_projects)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.continuous_projects)[':id']['$get']>>
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
        ? getGetContinuousProjectsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.continuous_projects)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.continuous_projects[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostContinuousProjectsIdKey() {
  return ['continuous_projects', '/continuous_projects/:id', 'POST'] as const
}

export function usePostContinuousProjectsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.continuous_projects)[':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.continuous_projects)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContinuousProjectsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.continuous_projects)[':id']['$post']> },
      ) => parseResponse(client.continuous_projects[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteContinuousProjectsIdKey() {
  return ['continuous_projects', '/continuous_projects/:id', 'DELETE'] as const
}

export function useDeleteContinuousProjectsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.continuous_projects)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.continuous_projects)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteContinuousProjectsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.continuous_projects)[':id']['$delete']> },
      ) => parseResponse(client.continuous_projects[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContinuousProjectsIdAnalyticsTokenKey(
  args: InferRequestType<(typeof client.continuous_projects)[':id']['analytics-token']['$get']>,
) {
  return ['continuous_projects', '/continuous_projects/:id/analytics-token', args] as const
}

export function useGetContinuousProjectsIdAnalyticsToken<TError = unknown>(
  args: InferRequestType<(typeof client.continuous_projects)[':id']['analytics-token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.continuous_projects)[':id']['analytics-token']['$get']>
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
        ? getGetContinuousProjectsIdAnalyticsTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.continuous_projects)[':id']['analytics-token']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.continuous_projects[':id']['analytics-token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContinuousProjectsIdAnalyticsToken<TError = unknown>(
  args: InferRequestType<(typeof client.continuous_projects)[':id']['analytics-token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.continuous_projects)[':id']['analytics-token']['$get']>
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
        ? getGetContinuousProjectsIdAnalyticsTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.continuous_projects)[':id']['analytics-token']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.continuous_projects[':id']['analytics-token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostContinuousProjectsIdCollectAnalyticsKey() {
  return ['continuous_projects', '/continuous_projects/:id/collect-analytics', 'POST'] as const
}

export function usePostContinuousProjectsIdCollectAnalytics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.continuous_projects)[':id']['collect-analytics']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.continuous_projects)[':id']['collect-analytics']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContinuousProjectsIdCollectAnalyticsKey()
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
            (typeof client.continuous_projects)[':id']['collect-analytics']['$post']
          >
        },
      ) =>
        parseResponse(
          client.continuous_projects[':id']['collect-analytics'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostContinuousProjectsIdCompleteKey() {
  return ['continuous_projects', '/continuous_projects/:id/complete', 'POST'] as const
}

export function usePostContinuousProjectsIdComplete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.continuous_projects)[':id']['complete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.continuous_projects)[':id']['complete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContinuousProjectsIdCompleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.continuous_projects)[':id']['complete']['$post']>
        },
      ) => parseResponse(client.continuous_projects[':id'].complete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostContinuousProjectsIdDocumentsQuoteKey() {
  return ['continuous_projects', '/continuous_projects/:id/documents/quote', 'POST'] as const
}

export function usePostContinuousProjectsIdDocumentsQuote<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.continuous_projects)[':id']['documents']['quote']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.continuous_projects)[':id']['documents']['quote']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContinuousProjectsIdDocumentsQuoteKey()
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
            (typeof client.continuous_projects)[':id']['documents']['quote']['$post']
          >
        },
      ) =>
        parseResponse(client.continuous_projects[':id'].documents.quote.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostContinuousProjectsIdDocumentsDocumentIdCompleteKey() {
  return [
    'continuous_projects',
    '/continuous_projects/:id/documents/:documentId/complete',
    'POST',
  ] as const
}

export function usePostContinuousProjectsIdDocumentsDocumentIdComplete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.continuous_projects)[':id']['documents'][':documentId']['complete']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.continuous_projects)[':id']['documents'][':documentId']['complete']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContinuousProjectsIdDocumentsDocumentIdCompleteKey()
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
            (typeof client.continuous_projects)[':id']['documents'][':documentId']['complete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.continuous_projects[':id'].documents[':documentId'].complete.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostContinuousProjectsIdDocumentsDocumentIdQuoteKey() {
  return [
    'continuous_projects',
    '/continuous_projects/:id/documents/:documentId/quote',
    'POST',
  ] as const
}

export function usePostContinuousProjectsIdDocumentsDocumentIdQuote<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.continuous_projects)[':id']['documents'][':documentId']['quote']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.continuous_projects)[':id']['documents'][':documentId']['quote']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContinuousProjectsIdDocumentsDocumentIdQuoteKey()
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
            (typeof client.continuous_projects)[':id']['documents'][':documentId']['quote']['$post']
          >
        },
      ) =>
        parseResponse(
          client.continuous_projects[':id'].documents[':documentId'].quote.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostContinuousProjectsIdLanguagesQuoteKey() {
  return ['continuous_projects', '/continuous_projects/:id/languages/quote', 'POST'] as const
}

export function usePostContinuousProjectsIdLanguagesQuote<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.continuous_projects)[':id']['languages']['quote']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.continuous_projects)[':id']['languages']['quote']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContinuousProjectsIdLanguagesQuoteKey()
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
            (typeof client.continuous_projects)[':id']['languages']['quote']['$post']
          >
        },
      ) =>
        parseResponse(client.continuous_projects[':id'].languages.quote.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostContinuousProjectsIdLanguagesTargetLanguageCompleteKey() {
  return [
    'continuous_projects',
    '/continuous_projects/:id/languages/:targetLanguage/complete',
    'POST',
  ] as const
}

export function usePostContinuousProjectsIdLanguagesTargetLanguageComplete<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.continuous_projects)[':id']['languages'][':targetLanguage']['complete']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.continuous_projects)[':id']['languages'][':targetLanguage']['complete']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContinuousProjectsIdLanguagesTargetLanguageCompleteKey()
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
            (typeof client.continuous_projects)[':id']['languages'][':targetLanguage']['complete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.continuous_projects[':id'].languages[':targetLanguage'].complete.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostContinuousProjectsIdLanguagesTargetLanguageQuoteKey() {
  return [
    'continuous_projects',
    '/continuous_projects/:id/languages/:targetLanguage/quote',
    'POST',
  ] as const
}

export function usePostContinuousProjectsIdLanguagesTargetLanguageQuote<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.continuous_projects)[':id']['languages'][':targetLanguage']['quote']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.continuous_projects)[':id']['languages'][':targetLanguage']['quote']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContinuousProjectsIdLanguagesTargetLanguageQuoteKey()
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
            (typeof client.continuous_projects)[':id']['languages'][':targetLanguage']['quote']['$post']
          >
        },
      ) =>
        parseResponse(
          client.continuous_projects[':id'].languages[':targetLanguage'].quote.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetContinuousProjectsIdSubscriptionKey(
  args: InferRequestType<(typeof client.continuous_projects)[':id']['subscription']['$get']>,
) {
  return ['continuous_projects', '/continuous_projects/:id/subscription', args] as const
}

export function useGetContinuousProjectsIdSubscription<TError = unknown>(
  args: InferRequestType<(typeof client.continuous_projects)[':id']['subscription']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.continuous_projects)[':id']['subscription']['$get']>>
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
        ? getGetContinuousProjectsIdSubscriptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.continuous_projects)[':id']['subscription']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.continuous_projects[':id'].subscription.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContinuousProjectsIdSubscription<TError = unknown>(
  args: InferRequestType<(typeof client.continuous_projects)[':id']['subscription']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.continuous_projects)[':id']['subscription']['$get']>>
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
        ? getGetContinuousProjectsIdSubscriptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.continuous_projects)[':id']['subscription']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.continuous_projects[':id'].subscription.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutContinuousProjectsIdSubscriptionKey() {
  return ['continuous_projects', '/continuous_projects/:id/subscription', 'PUT'] as const
}

export function usePutContinuousProjectsIdSubscription<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.continuous_projects)[':id']['subscription']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.continuous_projects)[':id']['subscription']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutContinuousProjectsIdSubscriptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.continuous_projects)[':id']['subscription']['$put']>
        },
      ) => parseResponse(client.continuous_projects[':id'].subscription.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostContinuousProjectsIdSubscriptionKey() {
  return ['continuous_projects', '/continuous_projects/:id/subscription', 'POST'] as const
}

export function usePostContinuousProjectsIdSubscription<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.continuous_projects)[':id']['subscription']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.continuous_projects)[':id']['subscription']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContinuousProjectsIdSubscriptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.continuous_projects)[':id']['subscription']['$post']>
        },
      ) => parseResponse(client.continuous_projects[':id'].subscription.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteContinuousProjectsIdSubscriptionKey() {
  return ['continuous_projects', '/continuous_projects/:id/subscription', 'DELETE'] as const
}

export function useDeleteContinuousProjectsIdSubscription<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.continuous_projects)[':id']['subscription']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.continuous_projects)[':id']['subscription']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteContinuousProjectsIdSubscriptionKey()
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
            (typeof client.continuous_projects)[':id']['subscription']['$delete']
          >
        },
      ) =>
        parseResponse(client.continuous_projects[':id'].subscription.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutContinuousProjectsIdSubscriptionPaymentKey() {
  return ['continuous_projects', '/continuous_projects/:id/subscription/payment', 'PUT'] as const
}

export function usePutContinuousProjectsIdSubscriptionPayment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.continuous_projects)[':id']['subscription']['payment']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.continuous_projects)[':id']['subscription']['payment']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutContinuousProjectsIdSubscriptionPaymentKey()
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
            (typeof client.continuous_projects)[':id']['subscription']['payment']['$put']
          >
        },
      ) =>
        parseResponse(
          client.continuous_projects[':id'].subscription.payment.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostContinuousProjectsIdTranslateTargetLanguageKey() {
  return [
    'continuous_projects',
    '/continuous_projects/:id/translate/:targetLanguage',
    'POST',
  ] as const
}

export function usePostContinuousProjectsIdTranslateTargetLanguage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.continuous_projects)[':id']['translate'][':targetLanguage']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.continuous_projects)[':id']['translate'][':targetLanguage']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContinuousProjectsIdTranslateTargetLanguageKey()
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
            (typeof client.continuous_projects)[':id']['translate'][':targetLanguage']['$post']
          >
        },
      ) =>
        parseResponse(
          client.continuous_projects[':id'].translate[':targetLanguage'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetContinuousProjectsProjectIdDocumentsKey(
  args: InferRequestType<(typeof client.continuous_projects)[':projectId']['documents']['$get']>,
) {
  return ['continuous_projects', '/continuous_projects/:projectId/documents', args] as const
}

export function useGetContinuousProjectsProjectIdDocuments<TError = unknown>(
  args: InferRequestType<(typeof client.continuous_projects)[':projectId']['documents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.continuous_projects)[':projectId']['documents']['$get']>
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
        ? getGetContinuousProjectsProjectIdDocumentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.continuous_projects)[':projectId']['documents']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.continuous_projects[':projectId'].documents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContinuousProjectsProjectIdDocuments<TError = unknown>(
  args: InferRequestType<(typeof client.continuous_projects)[':projectId']['documents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.continuous_projects)[':projectId']['documents']['$get']>
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
        ? getGetContinuousProjectsProjectIdDocumentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.continuous_projects)[':projectId']['documents']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.continuous_projects[':projectId'].documents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostContinuousProjectsProjectIdDocumentsKey() {
  return ['continuous_projects', '/continuous_projects/:projectId/documents', 'POST'] as const
}

export function usePostContinuousProjectsProjectIdDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.continuous_projects)[':projectId']['documents']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.continuous_projects)[':projectId']['documents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContinuousProjectsProjectIdDocumentsKey()
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
            (typeof client.continuous_projects)[':projectId']['documents']['$post']
          >
        },
      ) =>
        parseResponse(client.continuous_projects[':projectId'].documents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostContinuousProjectsProjectIdDocumentsProgressKey() {
  return [
    'continuous_projects',
    '/continuous_projects/:projectId/documents/progress',
    'POST',
  ] as const
}

export function usePostContinuousProjectsProjectIdDocumentsProgress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.continuous_projects)[':projectId']['documents']['progress']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.continuous_projects)[':projectId']['documents']['progress']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContinuousProjectsProjectIdDocumentsProgressKey()
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
            (typeof client.continuous_projects)[':projectId']['documents']['progress']['$post']
          >
        },
      ) =>
        parseResponse(
          client.continuous_projects[':projectId'].documents.progress.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostContinuousProjectsProjectIdDocumentsStringsKey() {
  return [
    'continuous_projects',
    '/continuous_projects/:projectId/documents/strings',
    'POST',
  ] as const
}

export function usePostContinuousProjectsProjectIdDocumentsStrings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.continuous_projects)[':projectId']['documents']['strings']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.continuous_projects)[':projectId']['documents']['strings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContinuousProjectsProjectIdDocumentsStringsKey()
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
            (typeof client.continuous_projects)[':projectId']['documents']['strings']['$post']
          >
        },
      ) =>
        parseResponse(
          client.continuous_projects[':projectId'].documents.strings.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetContinuousProjectsProjectIdDocumentsDocumentIdKey(
  args: InferRequestType<
    (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['$get']
  >,
) {
  return [
    'continuous_projects',
    '/continuous_projects/:projectId/documents/:documentId',
    args,
  ] as const
}

export function useGetContinuousProjectsProjectIdDocumentsDocumentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['$get']
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
        ? getGetContinuousProjectsProjectIdDocumentsDocumentIdKey(args)
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
                (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['$get']
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
          client.continuous_projects[':projectId'].documents[':documentId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContinuousProjectsProjectIdDocumentsDocumentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['$get']
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
        ? getGetContinuousProjectsProjectIdDocumentsDocumentIdKey(args)
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
                (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['$get']
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
          client.continuous_projects[':projectId'].documents[':documentId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostContinuousProjectsProjectIdDocumentsDocumentIdKey() {
  return [
    'continuous_projects',
    '/continuous_projects/:projectId/documents/:documentId',
    'POST',
  ] as const
}

export function usePostContinuousProjectsProjectIdDocumentsDocumentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContinuousProjectsProjectIdDocumentsDocumentIdKey()
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
            (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.continuous_projects[':projectId'].documents[':documentId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetContinuousProjectsProjectIdDocumentsDocumentIdProgressKey(
  args: InferRequestType<
    (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['progress']['$get']
  >,
) {
  return [
    'continuous_projects',
    '/continuous_projects/:projectId/documents/:documentId/progress',
    args,
  ] as const
}

export function useGetContinuousProjectsProjectIdDocumentsDocumentIdProgress<TError = unknown>(
  args: InferRequestType<
    (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['progress']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['progress']['$get']
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
        ? getGetContinuousProjectsProjectIdDocumentsDocumentIdProgressKey(args)
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
                (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['progress']['$get']
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
          client.continuous_projects[':projectId'].documents[':documentId'].progress.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContinuousProjectsProjectIdDocumentsDocumentIdProgress<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['progress']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['progress']['$get']
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
        ? getGetContinuousProjectsProjectIdDocumentsDocumentIdProgressKey(args)
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
                (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['progress']['$get']
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
          client.continuous_projects[':projectId'].documents[':documentId'].progress.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetContinuousProjectsProjectIdDocumentsDocumentIdStringsKey(
  args: InferRequestType<
    (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['strings']['$get']
  >,
) {
  return [
    'continuous_projects',
    '/continuous_projects/:projectId/documents/:documentId/strings',
    args,
  ] as const
}

export function useGetContinuousProjectsProjectIdDocumentsDocumentIdStrings<TError = unknown>(
  args: InferRequestType<
    (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['strings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['strings']['$get']
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
        ? getGetContinuousProjectsProjectIdDocumentsDocumentIdStringsKey(args)
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
                (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['strings']['$get']
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
          client.continuous_projects[':projectId'].documents[':documentId'].strings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContinuousProjectsProjectIdDocumentsDocumentIdStrings<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['strings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['strings']['$get']
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
        ? getGetContinuousProjectsProjectIdDocumentsDocumentIdStringsKey(args)
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
                (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['strings']['$get']
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
          client.continuous_projects[':projectId'].documents[':documentId'].strings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetContinuousProjectsProjectIdInvoicesKey(
  args: InferRequestType<(typeof client.continuous_projects)[':projectId']['invoices']['$get']>,
) {
  return ['continuous_projects', '/continuous_projects/:projectId/invoices', args] as const
}

export function useGetContinuousProjectsProjectIdInvoices<TError = unknown>(
  args: InferRequestType<(typeof client.continuous_projects)[':projectId']['invoices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.continuous_projects)[':projectId']['invoices']['$get']>
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
        ? getGetContinuousProjectsProjectIdInvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.continuous_projects)[':projectId']['invoices']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.continuous_projects[':projectId'].invoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContinuousProjectsProjectIdInvoices<TError = unknown>(
  args: InferRequestType<(typeof client.continuous_projects)[':projectId']['invoices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.continuous_projects)[':projectId']['invoices']['$get']>
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
        ? getGetContinuousProjectsProjectIdInvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.continuous_projects)[':projectId']['invoices']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.continuous_projects[':projectId'].invoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetContinuousProjectsProjectIdProgressKey(
  args: InferRequestType<(typeof client.continuous_projects)[':projectId']['progress']['$get']>,
) {
  return ['continuous_projects', '/continuous_projects/:projectId/progress', args] as const
}

export function useGetContinuousProjectsProjectIdProgress<TError = unknown>(
  args: InferRequestType<(typeof client.continuous_projects)[':projectId']['progress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.continuous_projects)[':projectId']['progress']['$get']>
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
        ? getGetContinuousProjectsProjectIdProgressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.continuous_projects)[':projectId']['progress']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.continuous_projects[':projectId'].progress.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContinuousProjectsProjectIdProgress<TError = unknown>(
  args: InferRequestType<(typeof client.continuous_projects)[':projectId']['progress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.continuous_projects)[':projectId']['progress']['$get']>
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
        ? getGetContinuousProjectsProjectIdProgressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.continuous_projects)[':projectId']['progress']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.continuous_projects[':projectId'].progress.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetContinuousProjectsProjectIdStringsKey(
  args: InferRequestType<(typeof client.continuous_projects)[':projectId']['strings']['$get']>,
) {
  return ['continuous_projects', '/continuous_projects/:projectId/strings', args] as const
}

export function useGetContinuousProjectsProjectIdStrings<TError = unknown>(
  args: InferRequestType<(typeof client.continuous_projects)[':projectId']['strings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.continuous_projects)[':projectId']['strings']['$get']>
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
        ? getGetContinuousProjectsProjectIdStringsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.continuous_projects)[':projectId']['strings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.continuous_projects[':projectId'].strings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContinuousProjectsProjectIdStrings<TError = unknown>(
  args: InferRequestType<(typeof client.continuous_projects)[':projectId']['strings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.continuous_projects)[':projectId']['strings']['$get']>
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
        ? getGetContinuousProjectsProjectIdStringsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.continuous_projects)[':projectId']['strings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.continuous_projects[':projectId'].strings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetContinuousProjectsProjectIdStringsCachedKey(
  args: InferRequestType<
    (typeof client.continuous_projects)[':projectId']['strings']['cached']['$get']
  >,
) {
  return ['continuous_projects', '/continuous_projects/:projectId/strings/cached', args] as const
}

export function useGetContinuousProjectsProjectIdStringsCached<TError = unknown>(
  args: InferRequestType<
    (typeof client.continuous_projects)[':projectId']['strings']['cached']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.continuous_projects)[':projectId']['strings']['cached']['$get']
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
        ? getGetContinuousProjectsProjectIdStringsCachedKey(args)
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
                (typeof client.continuous_projects)[':projectId']['strings']['cached']['$get']
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
          client.continuous_projects[':projectId'].strings.cached.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContinuousProjectsProjectIdStringsCached<TError = unknown>(
  args: InferRequestType<
    (typeof client.continuous_projects)[':projectId']['strings']['cached']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.continuous_projects)[':projectId']['strings']['cached']['$get']
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
        ? getGetContinuousProjectsProjectIdStringsCachedKey(args)
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
                (typeof client.continuous_projects)[':projectId']['strings']['cached']['$get']
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
          client.continuous_projects[':projectId'].strings.cached.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteContinuousProjectsProjectIdStringsCachedKey() {
  return [
    'continuous_projects',
    '/continuous_projects/:projectId/strings/cached',
    'DELETE',
  ] as const
}

export function useDeleteContinuousProjectsProjectIdStringsCached<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.continuous_projects)[':projectId']['strings']['cached']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.continuous_projects)[':projectId']['strings']['cached']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteContinuousProjectsProjectIdStringsCachedKey()
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
            (typeof client.continuous_projects)[':projectId']['strings']['cached']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.continuous_projects[':projectId'].strings.cached.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostContinuousProjectsProjectIdStringsRecacheTmsKey() {
  return [
    'continuous_projects',
    '/continuous_projects/:projectId/strings/recache-tms',
    'POST',
  ] as const
}

export function usePostContinuousProjectsProjectIdStringsRecacheTms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.continuous_projects)[':projectId']['strings']['recache-tms']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.continuous_projects)[':projectId']['strings']['recache-tms']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContinuousProjectsProjectIdStringsRecacheTmsKey()
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
            (typeof client.continuous_projects)[':projectId']['strings']['recache-tms']['$post']
          >
        },
      ) =>
        parseResponse(
          client.continuous_projects[':projectId'].strings['recache-tms'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetContinuousProjectsProjectIdWidgetsKey(
  args: InferRequestType<(typeof client.continuous_projects)[':projectId']['widgets']['$get']>,
) {
  return ['continuous_projects', '/continuous_projects/:projectId/widgets', args] as const
}

export function useGetContinuousProjectsProjectIdWidgets<TError = unknown>(
  args: InferRequestType<(typeof client.continuous_projects)[':projectId']['widgets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.continuous_projects)[':projectId']['widgets']['$get']>
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
        ? getGetContinuousProjectsProjectIdWidgetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.continuous_projects)[':projectId']['widgets']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.continuous_projects[':projectId'].widgets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContinuousProjectsProjectIdWidgets<TError = unknown>(
  args: InferRequestType<(typeof client.continuous_projects)[':projectId']['widgets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.continuous_projects)[':projectId']['widgets']['$get']>
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
        ? getGetContinuousProjectsProjectIdWidgetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.continuous_projects)[':projectId']['widgets']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.continuous_projects[':projectId'].widgets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostContinuousProjectsProjectIdWidgetsKey() {
  return ['continuous_projects', '/continuous_projects/:projectId/widgets', 'POST'] as const
}

export function usePostContinuousProjectsProjectIdWidgets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.continuous_projects)[':projectId']['widgets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.continuous_projects)[':projectId']['widgets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContinuousProjectsProjectIdWidgetsKey()
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
            (typeof client.continuous_projects)[':projectId']['widgets']['$post']
          >
        },
      ) =>
        parseResponse(client.continuous_projects[':projectId'].widgets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContinuousProjectsProjectIdWidgetsWidgetIdKey(
  args: InferRequestType<
    (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['$get']
  >,
) {
  return ['continuous_projects', '/continuous_projects/:projectId/widgets/:widgetId', args] as const
}

export function useGetContinuousProjectsProjectIdWidgetsWidgetId<TError = unknown>(
  args: InferRequestType<
    (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['$get']
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
        ? getGetContinuousProjectsProjectIdWidgetsWidgetIdKey(args)
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
                (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['$get']
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
          client.continuous_projects[':projectId'].widgets[':widgetId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContinuousProjectsProjectIdWidgetsWidgetId<TError = unknown>(
  args: InferRequestType<
    (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['$get']
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
        ? getGetContinuousProjectsProjectIdWidgetsWidgetIdKey(args)
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
                (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['$get']
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
          client.continuous_projects[':projectId'].widgets[':widgetId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostContinuousProjectsProjectIdWidgetsWidgetIdKey() {
  return [
    'continuous_projects',
    '/continuous_projects/:projectId/widgets/:widgetId',
    'POST',
  ] as const
}

export function usePostContinuousProjectsProjectIdWidgetsWidgetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContinuousProjectsProjectIdWidgetsWidgetIdKey()
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
            (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.continuous_projects[':projectId'].widgets[':widgetId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteContinuousProjectsProjectIdWidgetsWidgetIdKey() {
  return [
    'continuous_projects',
    '/continuous_projects/:projectId/widgets/:widgetId',
    'DELETE',
  ] as const
}

export function useDeleteContinuousProjectsProjectIdWidgetsWidgetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteContinuousProjectsProjectIdWidgetsWidgetIdKey()
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
            (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.continuous_projects[':projectId'].widgets[':widgetId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostContinuousProjectsProjectIdWidgetsWidgetIdResetTokenKey() {
  return [
    'continuous_projects',
    '/continuous_projects/:projectId/widgets/:widgetId/reset-token',
    'POST',
  ] as const
}

export function usePostContinuousProjectsProjectIdWidgetsWidgetIdResetToken<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['reset-token']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['reset-token']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContinuousProjectsProjectIdWidgetsWidgetIdResetTokenKey()
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
            (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['reset-token']['$post']
          >
        },
      ) =>
        parseResponse(
          client.continuous_projects[':projectId'].widgets[':widgetId']['reset-token'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCorporateKey() {
  return ['corporate', '/corporate'] as const
}

export function useGetCorporate<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCorporateKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.corporate.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCorporate<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCorporateKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.corporate.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCorporatePermissionsKey() {
  return ['corporate', '/corporate/permissions'] as const
}

export function useGetCorporatePermissions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.corporate.permissions.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCorporatePermissionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.corporate.permissions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.corporate.permissions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCorporatePermissions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.corporate.permissions.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCorporatePermissionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.corporate.permissions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.corporate.permissions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCorporateUserGroupsKey() {
  return ['corporate', '/corporate/user-groups'] as const
}

export function useGetCorporateUserGroups<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.corporate)['user-groups']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCorporateUserGroupsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.corporate)['user-groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.corporate['user-groups'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCorporateUserGroups<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.corporate)['user-groups']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCorporateUserGroupsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.corporate)['user-groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.corporate['user-groups'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCorporateUserGroupsKey() {
  return ['corporate', '/corporate/user-groups', 'POST'] as const
}

export function usePostCorporateUserGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.corporate)['user-groups']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.corporate)['user-groups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCorporateUserGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.corporate)['user-groups']['$post']> },
      ) => parseResponse(client.corporate['user-groups'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCorporateUsersKey() {
  return ['corporate', '/corporate/users'] as const
}

export function useGetCorporateUsers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.users.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCorporateUsersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.users.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.corporate.users.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCorporateUsers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.users.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCorporateUsersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.users.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.corporate.users.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCorporateUsersKey() {
  return ['corporate', '/corporate/users', 'POST'] as const
}

export function usePostCorporateUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.users.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.corporate.users.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCorporateUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.corporate.users.$post> }) =>
        parseResponse(client.corporate.users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCorporatesAllKey() {
  return ['corporates', '/corporates/all'] as const
}

export function useGetCorporatesAll<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporates.all.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCorporatesAllKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporates.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.corporates.all.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCorporatesAll<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporates.all.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCorporatesAllKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporates.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.corporates.all.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCorporatesCorporateIdKey(
  args: InferRequestType<(typeof client.corporates)[':corporateId']['$get']>,
) {
  return ['corporates', '/corporates/:corporateId', args] as const
}

export function useGetCorporatesCorporateId<TError = unknown>(
  args: InferRequestType<(typeof client.corporates)[':corporateId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.corporates)[':corporateId']['$get']>>
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
        ? getGetCorporatesCorporateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.corporates)[':corporateId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.corporates[':corporateId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCorporatesCorporateId<TError = unknown>(
  args: InferRequestType<(typeof client.corporates)[':corporateId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.corporates)[':corporateId']['$get']>>
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
        ? getGetCorporatesCorporateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.corporates)[':corporateId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.corporates[':corporateId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCorporatesCorporateIdPermissionsKey(
  args: InferRequestType<(typeof client.corporates)[':corporateId']['permissions']['$get']>,
) {
  return ['corporates', '/corporates/:corporateId/permissions', args] as const
}

export function useGetCorporatesCorporateIdPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.corporates)[':corporateId']['permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.corporates)[':corporateId']['permissions']['$get']>>
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
        ? getGetCorporatesCorporateIdPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.corporates)[':corporateId']['permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.corporates[':corporateId'].permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCorporatesCorporateIdPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.corporates)[':corporateId']['permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.corporates)[':corporateId']['permissions']['$get']>>
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
        ? getGetCorporatesCorporateIdPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.corporates)[':corporateId']['permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.corporates[':corporateId'].permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCorporatesCorporateIdUserGroupsKey(
  args: InferRequestType<(typeof client.corporates)[':corporateId']['user-groups']['$get']>,
) {
  return ['corporates', '/corporates/:corporateId/user-groups', args] as const
}

export function useGetCorporatesCorporateIdUserGroups<TError = unknown>(
  args: InferRequestType<(typeof client.corporates)[':corporateId']['user-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.corporates)[':corporateId']['user-groups']['$get']>>
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
        ? getGetCorporatesCorporateIdUserGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.corporates)[':corporateId']['user-groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.corporates[':corporateId']['user-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCorporatesCorporateIdUserGroups<TError = unknown>(
  args: InferRequestType<(typeof client.corporates)[':corporateId']['user-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.corporates)[':corporateId']['user-groups']['$get']>>
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
        ? getGetCorporatesCorporateIdUserGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.corporates)[':corporateId']['user-groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.corporates[':corporateId']['user-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCorporatesCorporateIdUserGroupsKey() {
  return ['corporates', '/corporates/:corporateId/user-groups', 'POST'] as const
}

export function usePostCorporatesCorporateIdUserGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.corporates)[':corporateId']['user-groups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.corporates)[':corporateId']['user-groups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCorporatesCorporateIdUserGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.corporates)[':corporateId']['user-groups']['$post']>
        },
      ) =>
        parseResponse(client.corporates[':corporateId']['user-groups'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCorporatesCorporateIdUsersKey(
  args: InferRequestType<(typeof client.corporates)[':corporateId']['users']['$get']>,
) {
  return ['corporates', '/corporates/:corporateId/users', args] as const
}

export function useGetCorporatesCorporateIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.corporates)[':corporateId']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.corporates)[':corporateId']['users']['$get']>>
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
        ? getGetCorporatesCorporateIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.corporates)[':corporateId']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.corporates[':corporateId'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCorporatesCorporateIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.corporates)[':corporateId']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.corporates)[':corporateId']['users']['$get']>>
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
        ? getGetCorporatesCorporateIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.corporates)[':corporateId']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.corporates[':corporateId'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteDeleteAccountKey() {
  return ['delete-account', '/delete-account', 'DELETE'] as const
}

export function useDeleteDeleteAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['delete-account']['$delete']>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDeleteAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client['delete-account'].$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDocumentsKey(args: InferRequestType<typeof client.documents.$get>) {
  return ['documents', '/documents', args] as const
}

export function useGetDocuments<TError = unknown>(
  args: InferRequestType<typeof client.documents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDocumentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.documents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocuments<TError = unknown>(
  args: InferRequestType<typeof client.documents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDocumentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.documents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDocumentsSubjectsKey() {
  return ['documents', '/documents/subjects'] as const
}

export function useGetDocumentsSubjects<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.subjects.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDocumentsSubjectsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.subjects.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.documents.subjects.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocumentsSubjects<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.subjects.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDocumentsSubjectsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.subjects.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.documents.subjects.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDocumentsDocumentIdKey(
  args: InferRequestType<(typeof client.documents)[':documentId']['$get']>,
) {
  return ['documents', '/documents/:documentId', args] as const
}

export function useGetDocumentsDocumentId<TError = unknown>(
  args: InferRequestType<(typeof client.documents)[':documentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':documentId']['$get']>>
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
        ? getGetDocumentsDocumentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':documentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.documents[':documentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocumentsDocumentId<TError = unknown>(
  args: InferRequestType<(typeof client.documents)[':documentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':documentId']['$get']>>
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
        ? getGetDocumentsDocumentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':documentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.documents[':documentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDocumentsDocumentIdProgressKey(
  args: InferRequestType<(typeof client.documents)[':documentId']['progress']['$get']>,
) {
  return ['documents', '/documents/:documentId/progress', args] as const
}

export function useGetDocumentsDocumentIdProgress<TError = unknown>(
  args: InferRequestType<(typeof client.documents)[':documentId']['progress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':documentId']['progress']['$get']>>
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
        ? getGetDocumentsDocumentIdProgressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':documentId']['progress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.documents[':documentId'].progress.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocumentsDocumentIdProgress<TError = unknown>(
  args: InferRequestType<(typeof client.documents)[':documentId']['progress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':documentId']['progress']['$get']>>
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
        ? getGetDocumentsDocumentIdProgressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':documentId']['progress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.documents[':documentId'].progress.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDocumentsDocumentIdRegeneratePreviewKey() {
  return ['documents', '/documents/:documentId/regenerate_preview', 'POST'] as const
}

export function usePostDocumentsDocumentIdRegeneratePreview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.documents)[':documentId']['regenerate_preview']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.documents)[':documentId']['regenerate_preview']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentsDocumentIdRegeneratePreviewKey()
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
            (typeof client.documents)[':documentId']['regenerate_preview']['$post']
          >
        },
      ) =>
        parseResponse(client.documents[':documentId'].regenerate_preview.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDocumentsDocumentIdSimilarsKey(
  args: InferRequestType<(typeof client.documents)[':documentId']['similars']['$get']>,
) {
  return ['documents', '/documents/:documentId/similars', args] as const
}

export function useGetDocumentsDocumentIdSimilars<TError = unknown>(
  args: InferRequestType<(typeof client.documents)[':documentId']['similars']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':documentId']['similars']['$get']>>
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
        ? getGetDocumentsDocumentIdSimilarsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':documentId']['similars']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.documents[':documentId'].similars.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocumentsDocumentIdSimilars<TError = unknown>(
  args: InferRequestType<(typeof client.documents)[':documentId']['similars']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':documentId']['similars']['$get']>>
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
        ? getGetDocumentsDocumentIdSimilarsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':documentId']['similars']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.documents[':documentId'].similars.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDocumentsDocumentIdUseAsDraftKey() {
  return ['documents', '/documents/:documentId/use_as_draft', 'POST'] as const
}

export function usePostDocumentsDocumentIdUseAsDraft<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.documents)[':documentId']['use_as_draft']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.documents)[':documentId']['use_as_draft']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentsDocumentIdUseAsDraftKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.documents)[':documentId']['use_as_draft']['$post']>
        },
      ) => parseResponse(client.documents[':documentId'].use_as_draft.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDocumentsDocumentIdUseAsRegularKey() {
  return ['documents', '/documents/:documentId/use_as_regular', 'POST'] as const
}

export function usePostDocumentsDocumentIdUseAsRegular<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.documents)[':documentId']['use_as_regular']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.documents)[':documentId']['use_as_regular']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentsDocumentIdUseAsRegularKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.documents)[':documentId']['use_as_regular']['$post']>
        },
      ) => parseResponse(client.documents[':documentId'].use_as_regular.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDowngradeProofreaderKey() {
  return ['downgrade-proofreader', '/downgrade-proofreader', 'POST'] as const
}

export function usePostDowngradeProofreader<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['downgrade-proofreader']['$post']>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDowngradeProofreaderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client['downgrade-proofreader'].$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEarningsKey() {
  return ['earnings', '/earnings'] as const
}

export function useGetEarnings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earnings.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEarningsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earnings.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.earnings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEarnings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earnings.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEarningsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earnings.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.earnings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormatsKey() {
  return ['formats', '/formats'] as const
}

export function useGetFormats<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.formats.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFormatsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.formats.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.formats.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormats<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.formats.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFormatsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.formats.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.formats.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFreezeAccountKey() {
  return ['freeze-account', '/freeze-account', 'POST'] as const
}

export function usePostFreezeAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['freeze-account']['$post']>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFreezeAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client['freeze-account'].$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGlossaryKey() {
  return ['glossary', '/glossary'] as const
}

export function useGetGlossary<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.glossary.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGlossaryKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.glossary.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.glossary.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGlossary<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.glossary.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGlossaryKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.glossary.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.glossary.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGlossaryKey() {
  return ['glossary', '/glossary', 'POST'] as const
}

export function usePostGlossary<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.glossary.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.glossary.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGlossaryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.glossary.$post> }) =>
        parseResponse(client.glossary.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIntegrationsTokenKey() {
  return ['integrations', '/integrations/token'] as const
}

export function useGetIntegrationsToken<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.token.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIntegrationsTokenKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.token.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.integrations.token.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIntegrationsToken<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.token.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIntegrationsTokenKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.token.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.integrations.token.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostInvitationVendorsKey() {
  return ['invitation', '/invitation/vendors', 'POST'] as const
}

export function usePostInvitationVendors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitation.vendors.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.invitation.vendors.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvitationVendorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.invitation.vendors.$post> }) =>
        parseResponse(client.invitation.vendors.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLanguagesKey() {
  return ['languages', '/languages'] as const
}

export function useGetLanguages<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLanguagesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.languages.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLanguages<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLanguagesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.languages.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLocationKey() {
  return ['location', '/location', 'POST'] as const
}

export function usePostLocation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.location.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.location.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLocationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.location.$post> }) =>
        parseResponse(client.location.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMakeProofreaderKey() {
  return ['make-proofreader', '/make-proofreader', 'POST'] as const
}

export function usePostMakeProofreader<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['make-proofreader']['$post']>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMakeProofreaderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client['make-proofreader'].$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMeKey() {
  return ['me', '/me'] as const
}

export function useGetMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.me.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.me.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function getPostMeKey() {
  return ['me', '/me', 'POST'] as const
}

export function usePostMe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.me.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.me.$post> }) =>
        parseResponse(client.me.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMlDeliveryPredictionKey() {
  return ['ml', '/ml/delivery-prediction', 'POST'] as const
}

export function usePostMlDeliveryPrediction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ml)['delivery-prediction']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ml)['delivery-prediction']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMlDeliveryPredictionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ml)['delivery-prediction']['$post']> },
      ) => parseResponse(client.ml['delivery-prediction'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNotificationsSubscribeKey() {
  return ['notifications', '/notifications/subscribe', 'POST'] as const
}

export function usePostNotificationsSubscribe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.notifications.subscribe.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.notifications.subscribe.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNotificationsSubscribeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.notifications.subscribe.$post> },
      ) => parseResponse(client.notifications.subscribe.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNotificationsUnsubscribeKey() {
  return ['notifications', '/notifications/unsubscribe', 'POST'] as const
}

export function usePostNotificationsUnsubscribe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.notifications.unsubscribe.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.notifications.unsubscribe.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNotificationsUnsubscribeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.notifications.unsubscribe.$post> },
      ) => parseResponse(client.notifications.unsubscribe.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPamChatKey() {
  return ['pam', '/pam/chat', 'POST'] as const
}

export function usePostPamChat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pam.chat.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.pam.chat.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPamChatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.pam.chat.$post> }) =>
        parseResponse(client.pam.chat.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPamProfilesClientClientIdKey(
  args: InferRequestType<(typeof client.pam.profiles.client)[':clientId']['$get']>,
) {
  return ['pam', '/pam/profiles/client/:clientId', args] as const
}

export function useGetPamProfilesClientClientId<TError = unknown>(
  args: InferRequestType<(typeof client.pam.profiles.client)[':clientId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pam.profiles.client)[':clientId']['$get']>>
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
        ? getGetPamProfilesClientClientIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pam.profiles.client)[':clientId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pam.profiles.client[':clientId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPamProfilesClientClientId<TError = unknown>(
  args: InferRequestType<(typeof client.pam.profiles.client)[':clientId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pam.profiles.client)[':clientId']['$get']>>
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
        ? getGetPamProfilesClientClientIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pam.profiles.client)[':clientId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pam.profiles.client[':clientId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPamProjectsProjectIdCompletionReportKey(
  args: InferRequestType<(typeof client.pam.projects)[':projectId']['completion-report']['$get']>,
) {
  return ['pam', '/pam/projects/:projectId/completion-report', args] as const
}

export function useGetPamProjectsProjectIdCompletionReport<TError = unknown>(
  args: InferRequestType<(typeof client.pam.projects)[':projectId']['completion-report']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.pam.projects)[':projectId']['completion-report']['$get']>
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
        ? getGetPamProjectsProjectIdCompletionReportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.pam.projects)[':projectId']['completion-report']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.pam.projects[':projectId']['completion-report'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPamProjectsProjectIdCompletionReport<TError = unknown>(
  args: InferRequestType<(typeof client.pam.projects)[':projectId']['completion-report']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.pam.projects)[':projectId']['completion-report']['$get']>
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
        ? getGetPamProjectsProjectIdCompletionReportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.pam.projects)[':projectId']['completion-report']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.pam.projects[':projectId']['completion-report'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostPasswordKey() {
  return ['password', '/password', 'POST'] as const
}

export function usePostPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.password.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.password.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.password.$post> }) =>
        parseResponse(client.password.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentKey() {
  return ['payment', '/payment'] as const
}

export function useGetPayment<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPaymentKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payment.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPayment<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPaymentKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payment.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPaymentKey() {
  return ['payment', '/payment', 'POST'] as const
}

export function usePostPayment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.payment.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.payment.$post> }) =>
        parseResponse(client.payment.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentResetCorporatePaymentCodeKey() {
  return ['payment', '/payment/reset-corporate-payment-code', 'POST'] as const
}

export function usePostPaymentResetCorporatePaymentCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payment)['reset-corporate-payment-code']['$post']>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentResetCorporatePaymentCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.payment['reset-corporate-payment-code'].$post(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentToggleCorporateAutoChargeKey() {
  return ['payment', '/payment/toggle-corporate-auto-charge', 'POST'] as const
}

export function usePostPaymentToggleCorporateAutoCharge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payment)['toggle-corporate-auto-charge']['$post']>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentToggleCorporateAutoChargeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.payment['toggle-corporate-auto-charge'].$post(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentCardIdKey(
  args: InferRequestType<(typeof client.payment)[':cardId']['$get']>,
) {
  return ['payment', '/payment/:cardId', args] as const
}

export function useGetPaymentCardId<TError = unknown>(
  args: InferRequestType<(typeof client.payment)[':cardId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.payment)[':cardId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPaymentCardIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.payment)[':cardId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payment[':cardId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentCardId<TError = unknown>(
  args: InferRequestType<(typeof client.payment)[':cardId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.payment)[':cardId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPaymentCardIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.payment)[':cardId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payment[':cardId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePaymentCardIdDeleteKey() {
  return ['payment', '/payment/:cardId/delete', 'DELETE'] as const
}

export function useDeletePaymentCardIdDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payment)[':cardId']['delete']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.payment)[':cardId']['delete']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePaymentCardIdDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.payment)[':cardId']['delete']['$delete']> },
      ) => parseResponse(client.payment[':cardId'].delete.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentCardIdResetPaymentCodeKey() {
  return ['payment', '/payment/:cardId/reset-payment-code', 'POST'] as const
}

export function usePostPaymentCardIdResetPaymentCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payment)[':cardId']['reset-payment-code']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.payment)[':cardId']['reset-payment-code']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentCardIdResetPaymentCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.payment)[':cardId']['reset-payment-code']['$post']>
        },
      ) => parseResponse(client.payment[':cardId']['reset-payment-code'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPermissionsKey() {
  return ['permissions', '/permissions'] as const
}

export function useGetPermissions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPermissionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.permissions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPermissions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPermissionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.permissions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProfilePictureKey() {
  return ['profile-picture', '/profile-picture', 'POST'] as const
}

export function usePostProfilePicture<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['profile-picture']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['profile-picture']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProfilePictureKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['profile-picture']['$post']> },
      ) => parseResponse(client['profile-picture'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsKey(args: InferRequestType<typeof client.projects.$get>) {
  return ['projects', '/projects', args] as const
}

export function useGetProjects<TError = unknown>(
  args: InferRequestType<typeof client.projects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProjectsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.projects.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetProjects<TError = unknown>(
  args: InferRequestType<typeof client.projects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProjectsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.projects.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostProjectsKey() {
  return ['projects', '/projects', 'POST'] as const
}

export function usePostProjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.projects.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.projects.$post> }) =>
        parseResponse(client.projects.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsFromInternalIdProjectIdKey(
  args: InferRequestType<(typeof client.projects)['from-internal-id'][':projectId']['$get']>,
) {
  return ['projects', '/projects/from-internal-id/:projectId', args] as const
}

export function useGetProjectsFromInternalIdProjectId<TError = unknown>(
  args: InferRequestType<(typeof client.projects)['from-internal-id'][':projectId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)['from-internal-id'][':projectId']['$get']>>
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
        ? getGetProjectsFromInternalIdProjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)['from-internal-id'][':projectId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.projects['from-internal-id'][':projectId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsFromInternalIdProjectId<TError = unknown>(
  args: InferRequestType<(typeof client.projects)['from-internal-id'][':projectId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)['from-internal-id'][':projectId']['$get']>>
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
        ? getGetProjectsFromInternalIdProjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)['from-internal-id'][':projectId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.projects['from-internal-id'][':projectId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsVendorKey(
  args: InferRequestType<typeof client.projects.vendor.$get>,
) {
  return ['projects', '/projects/vendor', args] as const
}

export function useGetProjectsVendor<TError = unknown>(
  args: InferRequestType<typeof client.projects.vendor.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.vendor.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProjectsVendorKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.vendor.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects.vendor.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsVendor<TError = unknown>(
  args: InferRequestType<typeof client.projects.vendor.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.vendor.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProjectsVendorKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.vendor.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects.vendor.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsIdKey(
  args: InferRequestType<(typeof client.projects)[':id']['$get']>,
) {
  return ['projects', '/projects/:id', args] as const
}

export function useGetProjectsId<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetProjectsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsId<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetProjectsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutProjectsIdKey() {
  return ['projects', '/projects/:id', 'PUT'] as const
}

export function usePutProjectsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProjectsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.projects)[':id']['$put']> }) =>
        parseResponse(client.projects[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteProjectsIdKey() {
  return ['projects', '/projects/:id', 'DELETE'] as const
}

export function useDeleteProjectsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProjectsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.projects)[':id']['$delete']> },
      ) => parseResponse(client.projects[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProjectsIdAssignCmKey() {
  return ['projects', '/projects/:id/assign-cm', 'POST'] as const
}

export function usePostProjectsIdAssignCm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':id']['assign-cm']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':id']['assign-cm']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsIdAssignCmKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.projects)[':id']['assign-cm']['$post']> },
      ) => parseResponse(client.projects[':id']['assign-cm'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsIdCallbackActionTypeKey(
  args: InferRequestType<(typeof client.projects)[':id']['callback'][':actionType']['$get']>,
) {
  return ['projects', '/projects/:id/callback/:actionType', args] as const
}

export function useGetProjectsIdCallbackActionType<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':id']['callback'][':actionType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':id']['callback'][':actionType']['$get']>>
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
        ? getGetProjectsIdCallbackActionTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':id']['callback'][':actionType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.projects[':id'].callback[':actionType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsIdCallbackActionType<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':id']['callback'][':actionType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':id']['callback'][':actionType']['$get']>>
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
        ? getGetProjectsIdCallbackActionTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':id']['callback'][':actionType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.projects[':id'].callback[':actionType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsIdCancelKey() {
  return ['projects', '/projects/:id/cancel', 'POST'] as const
}

export function usePostProjectsIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.projects)[':id']['cancel']['$post']> },
      ) => parseResponse(client.projects[':id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProjectsIdDeliverKey() {
  return ['projects', '/projects/:id/deliver', 'POST'] as const
}

export function usePostProjectsIdDeliver<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':id']['deliver']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':id']['deliver']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsIdDeliverKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.projects)[':id']['deliver']['$post']> },
      ) => parseResponse(client.projects[':id'].deliver.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsIdDownloadKey(
  args: InferRequestType<(typeof client.projects)[':id']['download']['$get']>,
) {
  return ['projects', '/projects/:id/download', args] as const
}

export function useGetProjectsIdDownload<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':id']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':id']['download']['$get']>>
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
        ? getGetProjectsIdDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':id']['download']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':id'].download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsIdDownload<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':id']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':id']['download']['$get']>>
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
        ? getGetProjectsIdDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':id']['download']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':id'].download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsIdDownloadLanguageKey(
  args: InferRequestType<(typeof client.projects)[':id']['download'][':language']['$get']>,
) {
  return ['projects', '/projects/:id/download/:language', args] as const
}

export function useGetProjectsIdDownloadLanguage<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':id']['download'][':language']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':id']['download'][':language']['$get']>>
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
        ? getGetProjectsIdDownloadLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':id']['download'][':language']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.projects[':id'].download[':language'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsIdDownloadLanguage<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':id']['download'][':language']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':id']['download'][':language']['$get']>>
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
        ? getGetProjectsIdDownloadLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':id']['download'][':language']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.projects[':id'].download[':language'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsIdEmailQuoteKey() {
  return ['projects', '/projects/:id/email-quote', 'POST'] as const
}

export function usePostProjectsIdEmailQuote<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':id']['email-quote']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':id']['email-quote']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsIdEmailQuoteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.projects)[':id']['email-quote']['$post']> },
      ) => parseResponse(client.projects[':id']['email-quote'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsIdInvoiceKey(
  args: InferRequestType<(typeof client.projects)[':id']['invoice']['$get']>,
) {
  return ['projects', '/projects/:id/invoice', args] as const
}

export function useGetProjectsIdInvoice<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':id']['invoice']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':id']['invoice']['$get']>>
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
        ? getGetProjectsIdInvoiceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':id']['invoice']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':id'].invoice.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsIdInvoice<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':id']['invoice']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':id']['invoice']['$get']>>
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
        ? getGetProjectsIdInvoiceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':id']['invoice']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':id'].invoice.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsIdInvoiceHtmlKey(
  args: InferRequestType<(typeof client.projects)[':id']['invoice.html']['$get']>,
) {
  return ['projects', '/projects/:id/invoice.html', args] as const
}

export function useGetProjectsIdInvoiceHtml<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':id']['invoice.html']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':id']['invoice.html']['$get']>>
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
        ? getGetProjectsIdInvoiceHtmlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':id']['invoice.html']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':id']['invoice.html'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsIdInvoiceHtml<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':id']['invoice.html']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':id']['invoice.html']['$get']>>
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
        ? getGetProjectsIdInvoiceHtmlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':id']['invoice.html']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':id']['invoice.html'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsIdInvoicePdfKey(
  args: InferRequestType<(typeof client.projects)[':id']['invoice.pdf']['$get']>,
) {
  return ['projects', '/projects/:id/invoice.pdf', args] as const
}

export function useGetProjectsIdInvoicePdf<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':id']['invoice.pdf']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':id']['invoice.pdf']['$get']>>
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
        ? getGetProjectsIdInvoicePdfKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':id']['invoice.pdf']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':id']['invoice.pdf'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsIdInvoicePdf<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':id']['invoice.pdf']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':id']['invoice.pdf']['$get']>>
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
        ? getGetProjectsIdInvoicePdfKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':id']['invoice.pdf']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':id']['invoice.pdf'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsIdLaunchKey() {
  return ['projects', '/projects/:id/launch', 'POST'] as const
}

export function usePostProjectsIdLaunch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':id']['launch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':id']['launch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsIdLaunchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.projects)[':id']['launch']['$post']> },
      ) => parseResponse(client.projects[':id'].launch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProjectsIdPackageKey() {
  return ['projects', '/projects/:id/package', 'POST'] as const
}

export function usePostProjectsIdPackage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':id']['package']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':id']['package']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsIdPackageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.projects)[':id']['package']['$post']> },
      ) => parseResponse(client.projects[':id'].package.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsIdPackageCheckKey(
  args: InferRequestType<(typeof client.projects)[':id']['package']['check']['$get']>,
) {
  return ['projects', '/projects/:id/package/check', args] as const
}

export function useGetProjectsIdPackageCheck<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':id']['package']['check']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':id']['package']['check']['$get']>>
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
        ? getGetProjectsIdPackageCheckKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':id']['package']['check']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':id'].package.check.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsIdPackageCheck<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':id']['package']['check']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':id']['package']['check']['$get']>>
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
        ? getGetProjectsIdPackageCheckKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':id']['package']['check']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':id'].package.check.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsIdPackageLanguageKey() {
  return ['projects', '/projects/:id/package/:language', 'POST'] as const
}

export function usePostProjectsIdPackageLanguage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':id']['package'][':language']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':id']['package'][':language']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsIdPackageLanguageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.projects)[':id']['package'][':language']['$post']>
        },
      ) => parseResponse(client.projects[':id'].package[':language'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsIdProgressKey(
  args: InferRequestType<(typeof client.projects)[':id']['progress']['$get']>,
) {
  return ['projects', '/projects/:id/progress', args] as const
}

export function useGetProjectsIdProgress<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':id']['progress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':id']['progress']['$get']>>
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
        ? getGetProjectsIdProgressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':id']['progress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':id'].progress.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsIdProgress<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':id']['progress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':id']['progress']['$get']>>
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
        ? getGetProjectsIdProgressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':id']['progress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':id'].progress.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsIdRecreateKey() {
  return ['projects', '/projects/:id/recreate', 'POST'] as const
}

export function usePostProjectsIdRecreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':id']['recreate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':id']['recreate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsIdRecreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.projects)[':id']['recreate']['$post']> },
      ) => parseResponse(client.projects[':id'].recreate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProjectsIdReportsKey() {
  return ['projects', '/projects/:id/reports', 'POST'] as const
}

export function usePostProjectsIdReports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':id']['reports']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':id']['reports']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsIdReportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.projects)[':id']['reports']['$post']> },
      ) => parseResponse(client.projects[':id'].reports.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsIdSalesActivitiesKey(
  args: InferRequestType<(typeof client.projects)[':id']['sales']['activities']['$get']>,
) {
  return ['projects', '/projects/:id/sales/activities', args] as const
}

export function useGetProjectsIdSalesActivities<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':id']['sales']['activities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':id']['sales']['activities']['$get']>>
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
        ? getGetProjectsIdSalesActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':id']['sales']['activities']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':id'].sales.activities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsIdSalesActivities<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':id']['sales']['activities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':id']['sales']['activities']['$get']>>
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
        ? getGetProjectsIdSalesActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':id']['sales']['activities']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':id'].sales.activities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsIdSalesActivitiesKey() {
  return ['projects', '/projects/:id/sales/activities', 'POST'] as const
}

export function usePostProjectsIdSalesActivities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':id']['sales']['activities']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':id']['sales']['activities']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsIdSalesActivitiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.projects)[':id']['sales']['activities']['$post']>
        },
      ) => parseResponse(client.projects[':id'].sales.activities.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsIdWebhooksKey(
  args: InferRequestType<(typeof client.projects)[':id']['webhooks']['$get']>,
) {
  return ['projects', '/projects/:id/webhooks', args] as const
}

export function useGetProjectsIdWebhooks<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':id']['webhooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':id']['webhooks']['$get']>>
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
        ? getGetProjectsIdWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':id']['webhooks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':id'].webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsIdWebhooks<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':id']['webhooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':id']['webhooks']['$get']>>
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
        ? getGetProjectsIdWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':id']['webhooks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':id'].webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutProjectsIdWebhooksKey() {
  return ['projects', '/projects/:id/webhooks', 'PUT'] as const
}

export function usePutProjectsIdWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':id']['webhooks']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':id']['webhooks']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProjectsIdWebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.projects)[':id']['webhooks']['$put']> },
      ) => parseResponse(client.projects[':id'].webhooks.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProjectsIdWebhooksKey() {
  return ['projects', '/projects/:id/webhooks', 'POST'] as const
}

export function usePostProjectsIdWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':id']['webhooks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':id']['webhooks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsIdWebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.projects)[':id']['webhooks']['$post']> },
      ) => parseResponse(client.projects[':id'].webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteProjectsIdWebhooksKey() {
  return ['projects', '/projects/:id/webhooks', 'DELETE'] as const
}

export function useDeleteProjectsIdWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':id']['webhooks']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':id']['webhooks']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProjectsIdWebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.projects)[':id']['webhooks']['$delete']> },
      ) => parseResponse(client.projects[':id'].webhooks.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectIdActivitiesKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['activities']['$get']>,
) {
  return ['projects', '/projects/:projectId/activities', args] as const
}

export function useGetProjectsProjectIdActivities<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['activities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['activities']['$get']>>
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
        ? getGetProjectsProjectIdActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['activities']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':projectId'].activities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdActivities<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['activities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['activities']['$get']>>
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
        ? getGetProjectsProjectIdActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['activities']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':projectId'].activities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsProjectIdActivitiesActivityIdKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['activities'][':activityId']['$get']
  >,
) {
  return ['projects', '/projects/:projectId/activities/:activityId', args] as const
}

export function useGetProjectsProjectIdActivitiesActivityId<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['activities'][':activityId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':projectId']['activities'][':activityId']['$get']
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
        ? getGetProjectsProjectIdActivitiesActivityIdKey(args)
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
                (typeof client.projects)[':projectId']['activities'][':activityId']['$get']
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
          client.projects[':projectId'].activities[':activityId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdActivitiesActivityId<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['activities'][':activityId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':projectId']['activities'][':activityId']['$get']
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
        ? getGetProjectsProjectIdActivitiesActivityIdKey(args)
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
                (typeof client.projects)[':projectId']['activities'][':activityId']['$get']
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
          client.projects[':projectId'].activities[':activityId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsProjectIdActivitiesActivityIdKey() {
  return ['projects', '/projects/:projectId/activities/:activityId', 'POST'] as const
}

export function usePostProjectsProjectIdActivitiesActivityId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.projects)[':projectId']['activities'][':activityId']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':projectId']['activities'][':activityId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsProjectIdActivitiesActivityIdKey()
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
            (typeof client.projects)[':projectId']['activities'][':activityId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.projects[':projectId'].activities[':activityId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectIdActivitiesActivityIdCommentsKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['activities'][':activityId']['comments']['$get']
  >,
) {
  return ['projects', '/projects/:projectId/activities/:activityId/comments', args] as const
}

export function useGetProjectsProjectIdActivitiesActivityIdComments<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['activities'][':activityId']['comments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':projectId']['activities'][':activityId']['comments']['$get']
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
        ? getGetProjectsProjectIdActivitiesActivityIdCommentsKey(args)
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
                (typeof client.projects)[':projectId']['activities'][':activityId']['comments']['$get']
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
          client.projects[':projectId'].activities[':activityId'].comments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdActivitiesActivityIdComments<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['activities'][':activityId']['comments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':projectId']['activities'][':activityId']['comments']['$get']
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
        ? getGetProjectsProjectIdActivitiesActivityIdCommentsKey(args)
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
                (typeof client.projects)[':projectId']['activities'][':activityId']['comments']['$get']
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
          client.projects[':projectId'].activities[':activityId'].comments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsProjectIdCommentsKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['comments']['$get']>,
) {
  return ['projects', '/projects/:projectId/comments', args] as const
}

export function useGetProjectsProjectIdComments<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['comments']['$get']>>
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
        ? getGetProjectsProjectIdCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':projectId'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdComments<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['comments']['$get']>>
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
        ? getGetProjectsProjectIdCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':projectId'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsProjectIdDocumentsKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['documents']['$get']>,
) {
  return ['projects', '/projects/:projectId/documents', args] as const
}

export function useGetProjectsProjectIdDocuments<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['documents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['documents']['$get']>>
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
        ? getGetProjectsProjectIdDocumentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['documents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':projectId'].documents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdDocuments<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['documents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['documents']['$get']>>
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
        ? getGetProjectsProjectIdDocumentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['documents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':projectId'].documents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsProjectIdDocumentsKey() {
  return ['projects', '/projects/:projectId/documents', 'POST'] as const
}

export function usePostProjectsProjectIdDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['documents']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':projectId']['documents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsProjectIdDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.projects)[':projectId']['documents']['$post']> },
      ) => parseResponse(client.projects[':projectId'].documents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectIdDocumentsDocumentIdKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['documents'][':documentId']['$get']
  >,
) {
  return ['projects', '/projects/:projectId/documents/:documentId', args] as const
}

export function useGetProjectsProjectIdDocumentsDocumentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['documents'][':documentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':projectId']['documents'][':documentId']['$get']>
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
        ? getGetProjectsProjectIdDocumentsDocumentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':projectId']['documents'][':documentId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.projects[':projectId'].documents[':documentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdDocumentsDocumentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['documents'][':documentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':projectId']['documents'][':documentId']['$get']>
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
        ? getGetProjectsProjectIdDocumentsDocumentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':projectId']['documents'][':documentId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.projects[':projectId'].documents[':documentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsProjectIdDocumentsDocumentIdKey() {
  return ['projects', '/projects/:projectId/documents/:documentId', 'POST'] as const
}

export function usePostProjectsProjectIdDocumentsDocumentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.projects)[':projectId']['documents'][':documentId']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':projectId']['documents'][':documentId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsProjectIdDocumentsDocumentIdKey()
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
            (typeof client.projects)[':projectId']['documents'][':documentId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.projects[':projectId'].documents[':documentId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteProjectsProjectIdDocumentsDocumentIdKey() {
  return ['projects', '/projects/:projectId/documents/:documentId', 'DELETE'] as const
}

export function useDeleteProjectsProjectIdDocumentsDocumentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['documents'][':documentId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':projectId']['documents'][':documentId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProjectsProjectIdDocumentsDocumentIdKey()
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
            (typeof client.projects)[':projectId']['documents'][':documentId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.projects[':projectId'].documents[':documentId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectIdDocumentsDocumentIdDownloadKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['documents'][':documentId']['download']['$get']
  >,
) {
  return ['projects', '/projects/:projectId/documents/:documentId/download', args] as const
}

export function useGetProjectsProjectIdDocumentsDocumentIdDownload<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['documents'][':documentId']['download']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':projectId']['documents'][':documentId']['download']['$get']
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
        ? getGetProjectsProjectIdDocumentsDocumentIdDownloadKey(args)
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
                (typeof client.projects)[':projectId']['documents'][':documentId']['download']['$get']
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
          client.projects[':projectId'].documents[':documentId'].download.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdDocumentsDocumentIdDownload<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['documents'][':documentId']['download']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':projectId']['documents'][':documentId']['download']['$get']
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
        ? getGetProjectsProjectIdDocumentsDocumentIdDownloadKey(args)
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
                (typeof client.projects)[':projectId']['documents'][':documentId']['download']['$get']
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
          client.projects[':projectId'].documents[':documentId'].download.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsProjectIdDocumentsDocumentIdTranslationsKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['documents'][':documentId']['translations']['$get']
  >,
) {
  return ['projects', '/projects/:projectId/documents/:documentId/translations', args] as const
}

export function useGetProjectsProjectIdDocumentsDocumentIdTranslations<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['documents'][':documentId']['translations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':projectId']['documents'][':documentId']['translations']['$get']
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
        ? getGetProjectsProjectIdDocumentsDocumentIdTranslationsKey(args)
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
                (typeof client.projects)[':projectId']['documents'][':documentId']['translations']['$get']
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
          client.projects[':projectId'].documents[':documentId'].translations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdDocumentsDocumentIdTranslations<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['documents'][':documentId']['translations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':projectId']['documents'][':documentId']['translations']['$get']
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
        ? getGetProjectsProjectIdDocumentsDocumentIdTranslationsKey(args)
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
                (typeof client.projects)[':projectId']['documents'][':documentId']['translations']['$get']
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
          client.projects[':projectId'].documents[':documentId'].translations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsProjectIdDocumentsDocumentIdTranslationsDownloadLanguageKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['documents'][':documentId']['translations']['download'][':language']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:projectId/documents/:documentId/translations/download/:language',
    args,
  ] as const
}

export function useGetProjectsProjectIdDocumentsDocumentIdTranslationsDownloadLanguage<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['documents'][':documentId']['translations']['download'][':language']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':projectId']['documents'][':documentId']['translations']['download'][':language']['$get']
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
        ? getGetProjectsProjectIdDocumentsDocumentIdTranslationsDownloadLanguageKey(args)
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
                (typeof client.projects)[':projectId']['documents'][':documentId']['translations']['download'][':language']['$get']
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
          client.projects[':projectId'].documents[':documentId'].translations.download[
            ':language'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdDocumentsDocumentIdTranslationsDownloadLanguage<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['documents'][':documentId']['translations']['download'][':language']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':projectId']['documents'][':documentId']['translations']['download'][':language']['$get']
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
        ? getGetProjectsProjectIdDocumentsDocumentIdTranslationsDownloadLanguageKey(args)
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
                (typeof client.projects)[':projectId']['documents'][':documentId']['translations']['download'][':language']['$get']
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
          client.projects[':projectId'].documents[':documentId'].translations.download[
            ':language'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsProjectIdDocumentsDocumentIdTranslationsLanguageKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['documents'][':documentId']['translations'][':language']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:projectId/documents/:documentId/translations/:language',
    args,
  ] as const
}

export function useGetProjectsProjectIdDocumentsDocumentIdTranslationsLanguage<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['documents'][':documentId']['translations'][':language']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':projectId']['documents'][':documentId']['translations'][':language']['$get']
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
        ? getGetProjectsProjectIdDocumentsDocumentIdTranslationsLanguageKey(args)
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
                (typeof client.projects)[':projectId']['documents'][':documentId']['translations'][':language']['$get']
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
          client.projects[':projectId'].documents[':documentId'].translations[':language'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdDocumentsDocumentIdTranslationsLanguage<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['documents'][':documentId']['translations'][':language']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':projectId']['documents'][':documentId']['translations'][':language']['$get']
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
        ? getGetProjectsProjectIdDocumentsDocumentIdTranslationsLanguageKey(args)
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
                (typeof client.projects)[':projectId']['documents'][':documentId']['translations'][':language']['$get']
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
          client.projects[':projectId'].documents[':documentId'].translations[':language'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsProjectIdGlossariesKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['glossaries']['$get']>,
) {
  return ['projects', '/projects/:projectId/glossaries', args] as const
}

export function useGetProjectsProjectIdGlossaries<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['glossaries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['glossaries']['$get']>>
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
        ? getGetProjectsProjectIdGlossariesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['glossaries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':projectId'].glossaries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdGlossaries<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['glossaries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['glossaries']['$get']>>
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
        ? getGetProjectsProjectIdGlossariesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['glossaries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':projectId'].glossaries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsProjectIdGlossariesKey() {
  return ['projects', '/projects/:projectId/glossaries', 'POST'] as const
}

export function usePostProjectsProjectIdGlossaries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['glossaries']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':projectId']['glossaries']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsProjectIdGlossariesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.projects)[':projectId']['glossaries']['$post']> },
      ) => parseResponse(client.projects[':projectId'].glossaries.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectIdGlossariesGlossaryIdKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['$get']
  >,
) {
  return ['projects', '/projects/:projectId/glossaries/:glossaryId', args] as const
}

export function useGetProjectsProjectIdGlossariesGlossaryId<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['$get']
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
        ? getGetProjectsProjectIdGlossariesGlossaryIdKey(args)
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
                (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['$get']
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
          client.projects[':projectId'].glossaries[':glossaryId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdGlossariesGlossaryId<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['$get']
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
        ? getGetProjectsProjectIdGlossariesGlossaryIdKey(args)
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
                (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['$get']
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
          client.projects[':projectId'].glossaries[':glossaryId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutProjectsProjectIdGlossariesGlossaryIdKey() {
  return ['projects', '/projects/:projectId/glossaries/:glossaryId', 'PUT'] as const
}

export function usePutProjectsProjectIdGlossariesGlossaryId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.projects)[':projectId']['glossaries'][':glossaryId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':projectId']['glossaries'][':glossaryId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProjectsProjectIdGlossariesGlossaryIdKey()
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
            (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.projects[':projectId'].glossaries[':glossaryId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteProjectsProjectIdGlossariesGlossaryIdKey() {
  return ['projects', '/projects/:projectId/glossaries/:glossaryId', 'DELETE'] as const
}

export function useDeleteProjectsProjectIdGlossariesGlossaryId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':projectId']['glossaries'][':glossaryId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProjectsProjectIdGlossariesGlossaryIdKey()
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
            (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.projects[':projectId'].glossaries[':glossaryId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectIdGlossariesGlossaryIdDownloadKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['download']['$get']
  >,
) {
  return ['projects', '/projects/:projectId/glossaries/:glossaryId/download', args] as const
}

export function useGetProjectsProjectIdGlossariesGlossaryIdDownload<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['download']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['download']['$get']
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
        ? getGetProjectsProjectIdGlossariesGlossaryIdDownloadKey(args)
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
                (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['download']['$get']
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
          client.projects[':projectId'].glossaries[':glossaryId'].download.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdGlossariesGlossaryIdDownload<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['download']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['download']['$get']
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
        ? getGetProjectsProjectIdGlossariesGlossaryIdDownloadKey(args)
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
                (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['download']['$get']
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
          client.projects[':projectId'].glossaries[':glossaryId'].download.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsProjectIdStringsKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['strings']['$get']>,
) {
  return ['projects', '/projects/:projectId/strings', args] as const
}

export function useGetProjectsProjectIdStrings<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['strings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['strings']['$get']>>
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
        ? getGetProjectsProjectIdStringsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['strings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':projectId'].strings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdStrings<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['strings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['strings']['$get']>>
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
        ? getGetProjectsProjectIdStringsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['strings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':projectId'].strings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsProjectIdStringsPackageKey() {
  return ['projects', '/projects/:projectId/strings/package', 'POST'] as const
}

export function usePostProjectsProjectIdStringsPackage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['strings']['package']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':projectId']['strings']['package']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsProjectIdStringsPackageKey()
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
            (typeof client.projects)[':projectId']['strings']['package']['$post']
          >
        },
      ) => parseResponse(client.projects[':projectId'].strings.package.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectIdStringsPackageStatusKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['strings']['package']['status']['$get']
  >,
) {
  return ['projects', '/projects/:projectId/strings/package/status', args] as const
}

export function useGetProjectsProjectIdStringsPackageStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['strings']['package']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':projectId']['strings']['package']['status']['$get']
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
        ? getGetProjectsProjectIdStringsPackageStatusKey(args)
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
                (typeof client.projects)[':projectId']['strings']['package']['status']['$get']
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
          client.projects[':projectId'].strings.package.status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdStringsPackageStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['strings']['package']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':projectId']['strings']['package']['status']['$get']
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
        ? getGetProjectsProjectIdStringsPackageStatusKey(args)
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
                (typeof client.projects)[':projectId']['strings']['package']['status']['$get']
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
          client.projects[':projectId'].strings.package.status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsProjectIdStringsLanguageCodePackageKey() {
  return ['projects', '/projects/:projectId/strings/:languageCode/package', 'POST'] as const
}

export function usePostProjectsProjectIdStringsLanguageCodePackage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['strings'][':languageCode']['package']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':projectId']['strings'][':languageCode']['package']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsProjectIdStringsLanguageCodePackageKey()
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
            (typeof client.projects)[':projectId']['strings'][':languageCode']['package']['$post']
          >
        },
      ) =>
        parseResponse(
          client.projects[':projectId'].strings[':languageCode'].package.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectIdStringsLanguageCodePackageStatusKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['strings'][':languageCode']['package']['status']['$get']
  >,
) {
  return ['projects', '/projects/:projectId/strings/:languageCode/package/status', args] as const
}

export function useGetProjectsProjectIdStringsLanguageCodePackageStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['strings'][':languageCode']['package']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':projectId']['strings'][':languageCode']['package']['status']['$get']
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
        ? getGetProjectsProjectIdStringsLanguageCodePackageStatusKey(args)
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
                (typeof client.projects)[':projectId']['strings'][':languageCode']['package']['status']['$get']
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
          client.projects[':projectId'].strings[':languageCode'].package.status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdStringsLanguageCodePackageStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['strings'][':languageCode']['package']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':projectId']['strings'][':languageCode']['package']['status']['$get']
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
        ? getGetProjectsProjectIdStringsLanguageCodePackageStatusKey(args)
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
                (typeof client.projects)[':projectId']['strings'][':languageCode']['package']['status']['$get']
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
          client.projects[':projectId'].strings[':languageCode'].package.status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsProjectIdStringsLanguageKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['strings'][':language']['$get']>,
) {
  return ['projects', '/projects/:projectId/strings/:language', args] as const
}

export function useGetProjectsProjectIdStringsLanguage<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['strings'][':language']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':projectId']['strings'][':language']['$get']>
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
        ? getGetProjectsProjectIdStringsLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':projectId']['strings'][':language']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.projects[':projectId'].strings[':language'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdStringsLanguage<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['strings'][':language']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':projectId']['strings'][':language']['$get']>
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
        ? getGetProjectsProjectIdStringsLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':projectId']['strings'][':language']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.projects[':projectId'].strings[':language'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsProjectIdStyleguidesKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['styleguides']['$get']>,
) {
  return ['projects', '/projects/:projectId/styleguides', args] as const
}

export function useGetProjectsProjectIdStyleguides<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['styleguides']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['styleguides']['$get']>>
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
        ? getGetProjectsProjectIdStyleguidesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['styleguides']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.projects[':projectId'].styleguides.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdStyleguides<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['styleguides']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['styleguides']['$get']>>
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
        ? getGetProjectsProjectIdStyleguidesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['styleguides']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.projects[':projectId'].styleguides.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsProjectIdStyleguidesKey() {
  return ['projects', '/projects/:projectId/styleguides', 'POST'] as const
}

export function usePostProjectsProjectIdStyleguides<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['styleguides']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':projectId']['styleguides']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsProjectIdStyleguidesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.projects)[':projectId']['styleguides']['$post']>
        },
      ) => parseResponse(client.projects[':projectId'].styleguides.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectIdStyleguidesStyleGuideIdKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['$get']
  >,
) {
  return ['projects', '/projects/:projectId/styleguides/:styleGuideId', args] as const
}

export function useGetProjectsProjectIdStyleguidesStyleGuideId<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['$get']
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
        ? getGetProjectsProjectIdStyleguidesStyleGuideIdKey(args)
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
                (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['$get']
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
          client.projects[':projectId'].styleguides[':styleGuideId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdStyleguidesStyleGuideId<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['$get']
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
        ? getGetProjectsProjectIdStyleguidesStyleGuideIdKey(args)
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
                (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['$get']
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
          client.projects[':projectId'].styleguides[':styleGuideId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutProjectsProjectIdStyleguidesStyleGuideIdKey() {
  return ['projects', '/projects/:projectId/styleguides/:styleGuideId', 'PUT'] as const
}

export function usePutProjectsProjectIdStyleguidesStyleGuideId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProjectsProjectIdStyleguidesStyleGuideIdKey()
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
            (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.projects[':projectId'].styleguides[':styleGuideId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteProjectsProjectIdStyleguidesStyleGuideIdKey() {
  return ['projects', '/projects/:projectId/styleguides/:styleGuideId', 'DELETE'] as const
}

export function useDeleteProjectsProjectIdStyleguidesStyleGuideId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProjectsProjectIdStyleguidesStyleGuideIdKey()
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
            (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.projects[':projectId'].styleguides[':styleGuideId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectIdStyleguidesStyleGuideIdDownloadKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['download']['$get']
  >,
) {
  return ['projects', '/projects/:projectId/styleguides/:styleGuideId/download', args] as const
}

export function useGetProjectsProjectIdStyleguidesStyleGuideIdDownload<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['download']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['download']['$get']
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
        ? getGetProjectsProjectIdStyleguidesStyleGuideIdDownloadKey(args)
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
                (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['download']['$get']
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
          client.projects[':projectId'].styleguides[':styleGuideId'].download.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdStyleguidesStyleGuideIdDownload<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['download']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['download']['$get']
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
        ? getGetProjectsProjectIdStyleguidesStyleGuideIdDownloadKey(args)
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
                (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['download']['$get']
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
          client.projects[':projectId'].styleguides[':styleGuideId'].download.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsProjectIdTranslationsKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['translations']['$get']>,
) {
  return ['projects', '/projects/:projectId/translations', args] as const
}

export function useGetProjectsProjectIdTranslations<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['translations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['translations']['$get']>>
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
        ? getGetProjectsProjectIdTranslationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['translations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.projects[':projectId'].translations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdTranslations<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['translations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['translations']['$get']>>
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
        ? getGetProjectsProjectIdTranslationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['translations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.projects[':projectId'].translations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsProjectIdTranslationsLanguageKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['translations'][':language']['$get']
  >,
) {
  return ['projects', '/projects/:projectId/translations/:language', args] as const
}

export function useGetProjectsProjectIdTranslationsLanguage<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['translations'][':language']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':projectId']['translations'][':language']['$get']
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
        ? getGetProjectsProjectIdTranslationsLanguageKey(args)
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
                (typeof client.projects)[':projectId']['translations'][':language']['$get']
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
          client.projects[':projectId'].translations[':language'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdTranslationsLanguage<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['translations'][':language']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':projectId']['translations'][':language']['$get']
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
        ? getGetProjectsProjectIdTranslationsLanguageKey(args)
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
                (typeof client.projects)[':projectId']['translations'][':language']['$get']
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
          client.projects[':projectId'].translations[':language'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsProjectIdVendorsKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['vendors']['$get']>,
) {
  return ['projects', '/projects/:projectId/vendors', args] as const
}

export function useGetProjectsProjectIdVendors<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['vendors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['vendors']['$get']>>
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
        ? getGetProjectsProjectIdVendorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['vendors']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':projectId'].vendors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdVendors<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['vendors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['vendors']['$get']>>
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
        ? getGetProjectsProjectIdVendorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['vendors']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':projectId'].vendors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostReportsFilterKey() {
  return ['reports', '/reports/filter', 'POST'] as const
}

export function usePostReportsFilter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.filter.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.reports.filter.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReportsFilterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.reports.filter.$post> }) =>
        parseResponse(client.reports.filter.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostReportsLanguagePairsKey() {
  return ['reports', '/reports/language-pairs', 'POST'] as const
}

export function usePostReportsLanguagePairs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reports)['language-pairs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.reports)['language-pairs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReportsLanguagePairsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.reports)['language-pairs']['$post']> },
      ) => parseResponse(client.reports['language-pairs'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostReportsProjectsKey() {
  return ['reports', '/reports/projects', 'POST'] as const
}

export function usePostReportsProjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.projects.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.reports.projects.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReportsProjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.reports.projects.$post> }) =>
        parseResponse(client.reports.projects.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostReportsQaKey() {
  return ['reports', '/reports/qa', 'POST'] as const
}

export function usePostReportsQa<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.qa.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.reports.qa.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReportsQaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.reports.qa.$post> }) =>
        parseResponse(client.reports.qa.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostReportsUsersKey() {
  return ['reports', '/reports/users', 'POST'] as const
}

export function usePostReportsUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.users.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.reports.users.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReportsUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.reports.users.$post> }) =>
        parseResponse(client.reports.users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostResendEmailConfirmationKey() {
  return ['resend-email-confirmation', '/resend-email-confirmation', 'POST'] as const
}

export function usePostResendEmailConfirmation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['resend-email-confirmation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostResendEmailConfirmationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client['resend-email-confirmation'].$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetResponsivityKey(args: InferRequestType<typeof client.responsivity.$get>) {
  return ['responsivity', '/responsivity', args] as const
}

export function useGetResponsivity<TError = unknown>(
  args: InferRequestType<typeof client.responsivity.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.responsivity.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetResponsivityKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.responsivity.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.responsivity.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResponsivity<TError = unknown>(
  args: InferRequestType<typeof client.responsivity.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.responsivity.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetResponsivityKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.responsivity.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.responsivity.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchKey(args: InferRequestType<typeof client.search.$get>) {
  return ['search', '/search', args] as const
}

export function useGetSearch<TError = unknown>(
  args: InferRequestType<typeof client.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.search.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSearch<TError = unknown>(
  args: InferRequestType<typeof client.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.search.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostSearchDocumentsReindexKey() {
  return ['search', '/search/documents/reindex', 'POST'] as const
}

export function usePostSearchDocumentsReindex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.search.documents.reindex.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSearchDocumentsReindexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.search.documents.reindex.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSearchDocumentsReindexStatusKey(
  args: InferRequestType<typeof client.search.documents.reindex.status.$get>,
) {
  return ['search', '/search/documents/reindex/status', args] as const
}

export function useGetSearchDocumentsReindexStatus<TError = unknown>(
  args: InferRequestType<typeof client.search.documents.reindex.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.search.documents.reindex.status.$get>>
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
        ? getGetSearchDocumentsReindexStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.search.documents.reindex.status.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.documents.reindex.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchDocumentsReindexStatus<TError = unknown>(
  args: InferRequestType<typeof client.search.documents.reindex.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.search.documents.reindex.status.$get>>
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
        ? getGetSearchDocumentsReindexStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.search.documents.reindex.status.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.documents.reindex.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatsKey() {
  return ['stats', '/stats'] as const
}

export function useGetStats<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetStatsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStats<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetStatsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatsCommissionsKey() {
  return ['stats', '/stats/commissions'] as const
}

export function useGetStatsCommissions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.commissions.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatsCommissionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.commissions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.commissions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsCommissions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.commissions.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatsCommissionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.commissions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.commissions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostStatsCommissionsKey() {
  return ['stats', '/stats/commissions', 'POST'] as const
}

export function usePostStatsCommissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.commissions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.stats.commissions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStatsCommissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.stats.commissions.$post> }) =>
        parseResponse(client.stats.commissions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStatsPopularPairsKey() {
  return ['stats', '/stats/popular-pairs'] as const
}

export function useGetStatsPopularPairs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.stats)['popular-pairs']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatsPopularPairsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stats)['popular-pairs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats['popular-pairs'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsPopularPairs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.stats)['popular-pairs']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatsPopularPairsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stats)['popular-pairs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats['popular-pairs'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatsProjectsKey() {
  return ['stats', '/stats/projects'] as const
}

export function useGetStatsProjects<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.projects.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatsProjectsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.projects.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.projects.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsProjects<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.projects.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatsProjectsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.projects.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.projects.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatsStringsKey() {
  return ['stats', '/stats/strings'] as const
}

export function useGetStatsStrings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.strings.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatsStringsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.strings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.strings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsStrings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.strings.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatsStringsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.strings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.strings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStringsKey(args: InferRequestType<typeof client.strings.$get>) {
  return ['strings', '/strings', args] as const
}

export function useGetStrings<TError = unknown>(
  args: InferRequestType<typeof client.strings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.strings.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStringsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.strings.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.strings.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetStrings<TError = unknown>(
  args: InferRequestType<typeof client.strings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.strings.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStringsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.strings.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.strings.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPutStringsKey() {
  return ['strings', '/strings', 'PUT'] as const
}

export function usePutStrings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.strings.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.strings.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutStringsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.strings.$put> }) =>
        parseResponse(client.strings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStringsKey() {
  return ['strings', '/strings', 'POST'] as const
}

export function usePostStrings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.strings.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.strings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStringsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.strings.$post> }) =>
        parseResponse(client.strings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStringsLanguageCodePackageKey() {
  return ['strings', '/strings/:languageCode/package', 'POST'] as const
}

export function usePostStringsLanguageCodePackage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.strings)[':languageCode']['package']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.strings)[':languageCode']['package']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStringsLanguageCodePackageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.strings)[':languageCode']['package']['$post']> },
      ) => parseResponse(client.strings[':languageCode'].package.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStringsLanguageCodePackageStatusKey(
  args: InferRequestType<(typeof client.strings)[':languageCode']['package']['status']['$get']>,
) {
  return ['strings', '/strings/:languageCode/package/status', args] as const
}

export function useGetStringsLanguageCodePackageStatus<TError = unknown>(
  args: InferRequestType<(typeof client.strings)[':languageCode']['package']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.strings)[':languageCode']['package']['status']['$get']>
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
        ? getGetStringsLanguageCodePackageStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.strings)[':languageCode']['package']['status']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.strings[':languageCode'].package.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStringsLanguageCodePackageStatus<TError = unknown>(
  args: InferRequestType<(typeof client.strings)[':languageCode']['package']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.strings)[':languageCode']['package']['status']['$get']>
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
        ? getGetStringsLanguageCodePackageStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.strings)[':languageCode']['package']['status']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.strings[':languageCode'].package.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStyleguideKey() {
  return ['styleguide', '/styleguide'] as const
}

export function useGetStyleguide<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.styleguide.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStyleguideKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.styleguide.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.styleguide.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStyleguide<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.styleguide.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStyleguideKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.styleguide.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.styleguide.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostStyleguideKey() {
  return ['styleguide', '/styleguide', 'POST'] as const
}

export function usePostStyleguide<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.styleguide.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.styleguide.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStyleguideKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.styleguide.$post> }) =>
        parseResponse(client.styleguide.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSurveysScopeTypeKey(
  args: InferRequestType<(typeof client.surveys)[':scope'][':type']['$get']>,
) {
  return ['surveys', '/surveys/:scope/:type', args] as const
}

export function useGetSurveysScopeType<TError = unknown>(
  args: InferRequestType<(typeof client.surveys)[':scope'][':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.surveys)[':scope'][':type']['$get']>>
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
        ? getGetSurveysScopeTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.surveys)[':scope'][':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.surveys[':scope'][':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSurveysScopeType<TError = unknown>(
  args: InferRequestType<(typeof client.surveys)[':scope'][':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.surveys)[':scope'][':type']['$get']>>
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
        ? getGetSurveysScopeTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.surveys)[':scope'][':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.surveys[':scope'][':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSurveysScopeTypeKey() {
  return ['surveys', '/surveys/:scope/:type', 'POST'] as const
}

export function usePostSurveysScopeType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.surveys)[':scope'][':type']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.surveys)[':scope'][':type']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSurveysScopeTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.surveys)[':scope'][':type']['$post']> },
      ) => parseResponse(client.surveys[':scope'][':type'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSwaggerKey() {
  return ['swagger', '/swagger'] as const
}

export function useGetSwagger<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.swagger.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSwaggerKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.swagger.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.swagger.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSwagger<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.swagger.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSwaggerKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.swagger.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.swagger.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTokenKey() {
  return ['token', '/token', 'POST'] as const
}

export function usePostToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.token.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.token.$post> }) =>
        parseResponse(client.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUnfreezeAccountKey() {
  return ['unfreeze-account', '/unfreeze-account', 'POST'] as const
}

export function usePostUnfreezeAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['unfreeze-account']['$post']>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUnfreezeAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client['unfreeze-account'].$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserGroupsKey() {
  return ['user-groups', '/user-groups'] as const
}

export function useGetUserGroups<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['user-groups']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserGroupsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['user-groups']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['user-groups'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserGroups<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['user-groups']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserGroupsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['user-groups']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['user-groups'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersKey(args: InferRequestType<typeof client.users.$get>) {
  return ['users', '/users', args] as const
}

export function useGetUsers<TError = unknown>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetUsers<TError = unknown>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostUsersKey() {
  return ['users', '/users', 'POST'] as const
}

export function usePostUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.users.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.$post> }) =>
        parseResponse(client.users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersAvailableVendorsKey() {
  return ['users', '/users/available-vendors', 'POST'] as const
}

export function usePostUsersAvailableVendors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)['available-vendors']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)['available-vendors']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersAvailableVendorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)['available-vendors']['$post']> },
      ) => parseResponse(client.users['available-vendors'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersFilterKey() {
  return ['users', '/users/filter', 'POST'] as const
}

export function usePostUsersFilter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.filter.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.users.filter.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersFilterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.filter.$post> }) =>
        parseResponse(client.users.filter.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersSendPasswordReminderKey() {
  return ['users', '/users/send-password-reminder', 'POST'] as const
}

export function usePostUsersSendPasswordReminder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)['send-password-reminder']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)['send-password-reminder']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersSendPasswordReminderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.users)['send-password-reminder']['$post']> },
      ) => parseResponse(client.users['send-password-reminder'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersTagsKey() {
  return ['users', '/users/tags'] as const
}

export function useGetUsersTags<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.tags.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersTagsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.tags.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.tags.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersTags<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.tags.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersTagsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.tags.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.tags.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserIdKey(args: InferRequestType<(typeof client)[':userId']['$get']>) {
  return [':userId', '/:userId', args] as const
}

export function useGetUserId<TError = unknown>(
  args: InferRequestType<(typeof client)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserId<TError = unknown>(
  args: InferRequestType<(typeof client)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserIdKey() {
  return [':userId', '/:userId', 'POST'] as const
}

export function usePostUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':userId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)[':userId']['$post']> }) =>
        parseResponse(client[':userId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserIdApproveKey() {
  return [':userId', '/:userId/approve', 'POST'] as const
}

export function usePostUserIdApprove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['approve']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':userId']['approve']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserIdApproveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':userId']['approve']['$post']> },
      ) => parseResponse(client[':userId'].approve.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUserIdDeleteAccountKey() {
  return [':userId', '/:userId/delete-account', 'DELETE'] as const
}

export function useDeleteUserIdDeleteAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':userId']['delete-account']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':userId']['delete-account']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserIdDeleteAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':userId']['delete-account']['$delete']> },
      ) => parseResponse(client[':userId']['delete-account'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserIdDocumentsKey(
  args: InferRequestType<(typeof client)[':userId']['documents']['$get']>,
) {
  return [':userId', '/:userId/documents', args] as const
}

export function useGetUserIdDocuments<TError = unknown>(
  args: InferRequestType<(typeof client)[':userId']['documents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['documents']['$get']>>>
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
        ? getGetUserIdDocumentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['documents']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':userId'].documents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserIdDocuments<TError = unknown>(
  args: InferRequestType<(typeof client)[':userId']['documents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['documents']['$get']>>>
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
        ? getGetUserIdDocumentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['documents']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':userId'].documents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserIdDowngradeProofreaderKey() {
  return [':userId', '/:userId/downgrade-proofreader', 'POST'] as const
}

export function usePostUserIdDowngradeProofreader<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':userId']['downgrade-proofreader']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':userId']['downgrade-proofreader']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserIdDowngradeProofreaderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':userId']['downgrade-proofreader']['$post']> },
      ) => parseResponse(client[':userId']['downgrade-proofreader'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserIdEarningsKey(
  args: InferRequestType<(typeof client)[':userId']['earnings']['$get']>,
) {
  return [':userId', '/:userId/earnings', args] as const
}

export function useGetUserIdEarnings<TError = unknown>(
  args: InferRequestType<(typeof client)[':userId']['earnings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['earnings']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUserIdEarningsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['earnings']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':userId'].earnings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserIdEarnings<TError = unknown>(
  args: InferRequestType<(typeof client)[':userId']['earnings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['earnings']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUserIdEarningsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['earnings']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':userId'].earnings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserIdFreezeAccountKey() {
  return [':userId', '/:userId/freeze-account', 'POST'] as const
}

export function usePostUserIdFreezeAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':userId']['freeze-account']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':userId']['freeze-account']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserIdFreezeAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':userId']['freeze-account']['$post']> },
      ) => parseResponse(client[':userId']['freeze-account'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserIdMakeProofreaderKey() {
  return [':userId', '/:userId/make-proofreader', 'POST'] as const
}

export function usePostUserIdMakeProofreader<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':userId']['make-proofreader']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':userId']['make-proofreader']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserIdMakeProofreaderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':userId']['make-proofreader']['$post']> },
      ) => parseResponse(client[':userId']['make-proofreader'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserIdNotificationsSubscribeKey() {
  return [':userId', '/:userId/notifications/subscribe', 'POST'] as const
}

export function usePostUserIdNotificationsSubscribe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':userId']['notifications']['subscribe']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':userId']['notifications']['subscribe']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserIdNotificationsSubscribeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':userId']['notifications']['subscribe']['$post']>
        },
      ) => parseResponse(client[':userId'].notifications.subscribe.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserIdNotificationsUnsubscribeKey() {
  return [':userId', '/:userId/notifications/unsubscribe', 'POST'] as const
}

export function usePostUserIdNotificationsUnsubscribe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':userId']['notifications']['unsubscribe']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':userId']['notifications']['unsubscribe']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserIdNotificationsUnsubscribeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':userId']['notifications']['unsubscribe']['$post']>
        },
      ) => parseResponse(client[':userId'].notifications.unsubscribe.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserIdPaymentKey(
  args: InferRequestType<(typeof client)[':userId']['payment']['$get']>,
) {
  return [':userId', '/:userId/payment', args] as const
}

export function useGetUserIdPayment<TError = unknown>(
  args: InferRequestType<(typeof client)[':userId']['payment']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['payment']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUserIdPaymentKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['payment']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':userId'].payment.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserIdPayment<TError = unknown>(
  args: InferRequestType<(typeof client)[':userId']['payment']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['payment']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUserIdPaymentKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['payment']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':userId'].payment.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserIdPaymentKey() {
  return [':userId', '/:userId/payment', 'POST'] as const
}

export function usePostUserIdPayment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['payment']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':userId']['payment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserIdPaymentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':userId']['payment']['$post']> },
      ) => parseResponse(client[':userId'].payment.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserIdPermissionsKey(
  args: InferRequestType<(typeof client)[':userId']['permissions']['$get']>,
) {
  return [':userId', '/:userId/permissions', args] as const
}

export function useGetUserIdPermissions<TError = unknown>(
  args: InferRequestType<(typeof client)[':userId']['permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':userId']['permissions']['$get']>>
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
        ? getGetUserIdPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':userId']['permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':userId'].permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserIdPermissions<TError = unknown>(
  args: InferRequestType<(typeof client)[':userId']['permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':userId']['permissions']['$get']>>
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
        ? getGetUserIdPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':userId']['permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':userId'].permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserIdProfilePictureKey() {
  return [':userId', '/:userId/profile-picture', 'POST'] as const
}

export function usePostUserIdProfilePicture<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':userId']['profile-picture']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':userId']['profile-picture']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserIdProfilePictureKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':userId']['profile-picture']['$post']> },
      ) => parseResponse(client[':userId']['profile-picture'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserIdProjectsVendorKey(
  args: InferRequestType<(typeof client)[':userId']['projects']['vendor']['$get']>,
) {
  return [':userId', '/:userId/projects/vendor', args] as const
}

export function useGetUserIdProjectsVendor<TError = unknown>(
  args: InferRequestType<(typeof client)[':userId']['projects']['vendor']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':userId']['projects']['vendor']['$get']>>
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
        ? getGetUserIdProjectsVendorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':userId']['projects']['vendor']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':userId'].projects.vendor.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserIdProjectsVendor<TError = unknown>(
  args: InferRequestType<(typeof client)[':userId']['projects']['vendor']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':userId']['projects']['vendor']['$get']>>
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
        ? getGetUserIdProjectsVendorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':userId']['projects']['vendor']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':userId'].projects.vendor.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserIdRejectKey() {
  return [':userId', '/:userId/reject', 'POST'] as const
}

export function usePostUserIdReject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['reject']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':userId']['reject']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserIdRejectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':userId']['reject']['$post']> },
      ) => parseResponse(client[':userId'].reject.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserIdResendEmailConfirmationKey() {
  return [':userId', '/:userId/resend-email-confirmation', 'POST'] as const
}

export function usePostUserIdResendEmailConfirmation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':userId']['resend-email-confirmation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':userId']['resend-email-confirmation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserIdResendEmailConfirmationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':userId']['resend-email-confirmation']['$post']>
        },
      ) => parseResponse(client[':userId']['resend-email-confirmation'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserIdResponsivityKey(
  args: InferRequestType<(typeof client)[':userId']['responsivity']['$get']>,
) {
  return [':userId', '/:userId/responsivity', args] as const
}

export function useGetUserIdResponsivity<TError = unknown>(
  args: InferRequestType<(typeof client)[':userId']['responsivity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':userId']['responsivity']['$get']>>
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
        ? getGetUserIdResponsivityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':userId']['responsivity']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':userId'].responsivity.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserIdResponsivity<TError = unknown>(
  args: InferRequestType<(typeof client)[':userId']['responsivity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':userId']['responsivity']['$get']>>
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
        ? getGetUserIdResponsivityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':userId']['responsivity']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':userId'].responsivity.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserIdStatsKey(
  args: InferRequestType<(typeof client)[':userId']['stats']['$get']>,
) {
  return [':userId', '/:userId/stats', args] as const
}

export function useGetUserIdStats<TError = unknown>(
  args: InferRequestType<(typeof client)[':userId']['stats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['stats']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUserIdStatsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['stats']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':userId'].stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserIdStats<TError = unknown>(
  args: InferRequestType<(typeof client)[':userId']['stats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['stats']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUserIdStatsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['stats']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':userId'].stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserIdStatsPopularPairsKey(
  args: InferRequestType<(typeof client)[':userId']['stats']['popular-pairs']['$get']>,
) {
  return [':userId', '/:userId/stats/popular-pairs', args] as const
}

export function useGetUserIdStatsPopularPairs<TError = unknown>(
  args: InferRequestType<(typeof client)[':userId']['stats']['popular-pairs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':userId']['stats']['popular-pairs']['$get']>>
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
        ? getGetUserIdStatsPopularPairsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':userId']['stats']['popular-pairs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':userId'].stats['popular-pairs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserIdStatsPopularPairs<TError = unknown>(
  args: InferRequestType<(typeof client)[':userId']['stats']['popular-pairs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':userId']['stats']['popular-pairs']['$get']>>
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
        ? getGetUserIdStatsPopularPairsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':userId']['stats']['popular-pairs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':userId'].stats['popular-pairs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserIdStatsProjectsKey(
  args: InferRequestType<(typeof client)[':userId']['stats']['projects']['$get']>,
) {
  return [':userId', '/:userId/stats/projects', args] as const
}

export function useGetUserIdStatsProjects<TError = unknown>(
  args: InferRequestType<(typeof client)[':userId']['stats']['projects']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':userId']['stats']['projects']['$get']>>
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
        ? getGetUserIdStatsProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':userId']['stats']['projects']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':userId'].stats.projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserIdStatsProjects<TError = unknown>(
  args: InferRequestType<(typeof client)[':userId']['stats']['projects']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':userId']['stats']['projects']['$get']>>
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
        ? getGetUserIdStatsProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':userId']['stats']['projects']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':userId'].stats.projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserIdSuspendKey() {
  return [':userId', '/:userId/suspend', 'POST'] as const
}

export function usePostUserIdSuspend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['suspend']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':userId']['suspend']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserIdSuspendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':userId']['suspend']['$post']> },
      ) => parseResponse(client[':userId'].suspend.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserIdUnfreezeAccountKey() {
  return [':userId', '/:userId/unfreeze-account', 'POST'] as const
}

export function usePostUserIdUnfreezeAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':userId']['unfreeze-account']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':userId']['unfreeze-account']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserIdUnfreezeAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':userId']['unfreeze-account']['$post']> },
      ) => parseResponse(client[':userId']['unfreeze-account'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserIdUserGroupsKey(
  args: InferRequestType<(typeof client)[':userId']['user-groups']['$get']>,
) {
  return [':userId', '/:userId/user-groups', args] as const
}

export function useGetUserIdUserGroups<TError = unknown>(
  args: InferRequestType<(typeof client)[':userId']['user-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':userId']['user-groups']['$get']>>
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
        ? getGetUserIdUserGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':userId']['user-groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':userId']['user-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserIdUserGroups<TError = unknown>(
  args: InferRequestType<(typeof client)[':userId']['user-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':userId']['user-groups']['$get']>>
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
        ? getGetUserIdUserGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':userId']['user-groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':userId']['user-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserIdUserGroupsKey() {
  return [':userId', '/:userId/user-groups', 'POST'] as const
}

export function usePostUserIdUserGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':userId']['user-groups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':userId']['user-groups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserIdUserGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':userId']['user-groups']['$post']> },
      ) => parseResponse(client[':userId']['user-groups'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
