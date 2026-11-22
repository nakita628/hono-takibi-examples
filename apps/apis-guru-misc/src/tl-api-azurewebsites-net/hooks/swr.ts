import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getPutApiArticleKey() {
  return ['api', '/api/Article', 'PUT'] as const
}

export function usePutApiArticle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.Article.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiArticleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.Article.$put> }) =>
        parseResponse(client.api.Article.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiArticleKey() {
  return ['api', '/api/Article', 'POST'] as const
}

export function usePostApiArticle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.Article.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiArticleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.Article.$post> }) =>
        parseResponse(client.api.Article.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiArticleKey() {
  return ['api', '/api/Article', 'DELETE'] as const
}

export function useDeleteApiArticle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.Article.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiArticleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.Article.$delete> }) =>
        parseResponse(client.api.Article.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiArticleArticleGymDetailsKey() {
  return ['api', '/api/Article/ArticleGymDetails', 'PUT'] as const
}

export function usePutApiArticleArticleGymDetails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.ArticleGymDetails.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.Article.ArticleGymDetails.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiArticleArticleGymDetailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.Article.ArticleGymDetails.$put> },
      ) => parseResponse(client.api.Article.ArticleGymDetails.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiArticleGetAddonsKey(
  args: InferRequestType<typeof client.api.Article.GetAddons.$get>,
) {
  return ['api', '/api/Article/GetAddons', args] as const
}

export function useGetApiArticleGetAddons<TError = unknown>(
  args: InferRequestType<typeof client.api.Article.GetAddons.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.GetAddons.$get>>>
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
        ? getGetApiArticleGetAddonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.GetAddons.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Article.GetAddons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiArticleGetAddons<TError = unknown>(
  args: InferRequestType<typeof client.api.Article.GetAddons.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.GetAddons.$get>>>
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
        ? getGetApiArticleGetAddonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.GetAddons.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Article.GetAddons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiArticleGymArticleArticleIdGymIdKey(
  args: InferRequestType<(typeof client.api.Article.GymArticle)[':articleId'][':gymId']['$get']>,
) {
  return ['api', '/api/Article/GymArticle/:articleId/:gymId', args] as const
}

export function useGetApiArticleGymArticleArticleIdGymId<TError = unknown>(
  args: InferRequestType<(typeof client.api.Article.GymArticle)[':articleId'][':gymId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.Article.GymArticle)[':articleId'][':gymId']['$get']>
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
        ? getGetApiArticleGymArticleArticleIdGymIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.Article.GymArticle)[':articleId'][':gymId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.Article.GymArticle[':articleId'][':gymId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiArticleGymArticleArticleIdGymId<TError = unknown>(
  args: InferRequestType<(typeof client.api.Article.GymArticle)[':articleId'][':gymId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.Article.GymArticle)[':articleId'][':gymId']['$get']>
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
        ? getGetApiArticleGymArticleArticleIdGymIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.Article.GymArticle)[':articleId'][':gymId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.Article.GymArticle[':articleId'][':gymId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiArticleMeasureUnitKey() {
  return ['api', '/api/Article/MeasureUnit', 'POST'] as const
}

export function usePostApiArticleMeasureUnit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.MeasureUnit.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.Article.MeasureUnit.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiArticleMeasureUnitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.Article.MeasureUnit.$post> },
      ) => parseResponse(client.api.Article.MeasureUnit.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiArticleMeasureUnitsKey(
  args: InferRequestType<typeof client.api.Article.MeasureUnits.$get>,
) {
  return ['api', '/api/Article/MeasureUnits', args] as const
}

export function useGetApiArticleMeasureUnits<TError = unknown>(
  args: InferRequestType<typeof client.api.Article.MeasureUnits.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.MeasureUnits.$get>>>
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
        ? getGetApiArticleMeasureUnitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.MeasureUnits.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Article.MeasureUnits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiArticleMeasureUnits<TError = unknown>(
  args: InferRequestType<typeof client.api.Article.MeasureUnits.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.MeasureUnits.$get>>>
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
        ? getGetApiArticleMeasureUnitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.MeasureUnits.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Article.MeasureUnits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiArticleRevenueAccountsKey() {
  return ['api', '/api/Article/RevenueAccounts'] as const
}

export function useGetApiArticleRevenueAccounts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.RevenueAccounts.$get>>>
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
        ? getGetApiArticleRevenueAccountsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.RevenueAccounts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Article.RevenueAccounts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiArticleRevenueAccounts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.RevenueAccounts.$get>>>
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
        ? getGetApiArticleRevenueAccountsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.RevenueAccounts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Article.RevenueAccounts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiArticleSearchKey(
  args: InferRequestType<typeof client.api.Article.Search.$get>,
) {
  return ['api', '/api/Article/Search', args] as const
}

export function useGetApiArticleSearch<TError = unknown>(
  args: InferRequestType<typeof client.api.Article.Search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.Search.$get>>>>
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
        ? getGetApiArticleSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.Search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Article.Search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiArticleSearch<TError = unknown>(
  args: InferRequestType<typeof client.api.Article.Search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.Search.$get>>>>
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
        ? getGetApiArticleSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.Search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Article.Search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiArticleUpdateStatusKey() {
  return ['api', '/api/Article/UpdateStatus', 'PUT'] as const
}

export function usePutApiArticleUpdateStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.Article.UpdateStatus.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.Article.UpdateStatus.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiArticleUpdateStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.Article.UpdateStatus.$put> },
      ) => parseResponse(client.api.Article.UpdateStatus.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiArticleArticleIDKey(
  args: InferRequestType<(typeof client.api.Article)[':articleID']['$get']>,
) {
  return ['api', '/api/Article/:articleID', args] as const
}

export function useGetApiArticleArticleID<TError = unknown>(
  args: InferRequestType<(typeof client.api.Article)[':articleID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Article)[':articleID']['$get']>>
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
        ? getGetApiArticleArticleIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Article)[':articleID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Article[':articleID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiArticleArticleID<TError = unknown>(
  args: InferRequestType<(typeof client.api.Article)[':articleID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Article)[':articleID']['$get']>>
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
        ? getGetApiArticleArticleIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Article)[':articleID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Article[':articleID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiAuthLoginKey() {
  return ['api', '/api/Auth/login', 'POST'] as const
}

export function usePostApiAuthLogin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Auth.login.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.Auth.login.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAuthLoginKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.Auth.login.$post> }) =>
        parseResponse(client.api.Auth.login.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiGymGymIDKey(
  args: InferRequestType<(typeof client.api.Gym)[':gymID']['$get']>,
) {
  return ['api', '/api/Gym/:gymID', args] as const
}

export function useGetApiGymGymID<TError = unknown>(
  args: InferRequestType<(typeof client.api.Gym)[':gymID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Gym)[':gymID']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiGymGymIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Gym)[':gymID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Gym[':gymID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiGymGymID<TError = unknown>(
  args: InferRequestType<(typeof client.api.Gym)[':gymID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Gym)[':gymID']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiGymGymIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Gym)[':gymID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Gym[':gymID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiMembershipKey() {
  return ['api', '/api/Membership'] as const
}

export function useGetApiMembership<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Membership.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiMembershipKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Membership.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Membership.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiMembership<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Membership.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiMembershipKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Membership.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Membership.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiMembershipKey() {
  return ['api', '/api/Membership', 'POST'] as const
}

export function usePostApiMembership<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Membership.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.Membership.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiMembershipKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.Membership.$post> }) =>
        parseResponse(client.api.Membership.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPackageKey(args: InferRequestType<typeof client.api.Package.$get>) {
  return ['api', '/api/Package', args] as const
}

export function useGetApiPackage<TError = unknown>(
  args: InferRequestType<typeof client.api.Package.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Package.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiPackageKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Package.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Package.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPackage<TError = unknown>(
  args: InferRequestType<typeof client.api.Package.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Package.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiPackageKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Package.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Package.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiPackageKey() {
  return ['api', '/api/Package', 'PUT'] as const
}

export function usePutApiPackage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Package.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.Package.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiPackageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.Package.$put> }) =>
        parseResponse(client.api.Package.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiPackageKey() {
  return ['api', '/api/Package', 'POST'] as const
}

export function usePostApiPackage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Package.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.Package.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPackageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.Package.$post> }) =>
        parseResponse(client.api.Package.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiPackageKey() {
  return ['api', '/api/Package', 'DELETE'] as const
}

export function useDeleteApiPackage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Package.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.Package.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiPackageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.Package.$delete> }) =>
        parseResponse(client.api.Package.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPackageSearchKey(
  args: InferRequestType<typeof client.api.Package.Search.$get>,
) {
  return ['api', '/api/Package/Search', args] as const
}

export function useGetApiPackageSearch<TError = unknown>(
  args: InferRequestType<typeof client.api.Package.Search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Package.Search.$get>>>>
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
        ? getGetApiPackageSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Package.Search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Package.Search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPackageSearch<TError = unknown>(
  args: InferRequestType<typeof client.api.Package.Search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Package.Search.$get>>>>
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
        ? getGetApiPackageSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Package.Search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Package.Search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiPackageUpdateStatusKey() {
  return ['api', '/api/Package/UpdateStatus', 'PUT'] as const
}

export function usePutApiPackageUpdateStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.Package.UpdateStatus.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.Package.UpdateStatus.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiPackageUpdateStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.Package.UpdateStatus.$put> },
      ) => parseResponse(client.api.Package.UpdateStatus.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiStatusKey(args: InferRequestType<typeof client.api.Status.$get>) {
  return ['api', '/api/Status', args] as const
}

export function useGetApiStatus<TError = unknown>(
  args: InferRequestType<typeof client.api.Status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Status.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiStatusKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Status.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiStatus<TError = unknown>(
  args: InferRequestType<typeof client.api.Status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Status.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiStatusKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Status.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiTestKey() {
  return ['api', '/api/Test'] as const
}

export function useGetApiTest<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Test.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiTestKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Test.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Test.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiTest<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Test.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiTestKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Test.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Test.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiUserKey() {
  return ['api', '/api/User'] as const
}

export function useGetApiUser<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.User.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiUserKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.User.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.User.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUser<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.User.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiUserKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.User.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.User.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiUserRegisterUserKey() {
  return ['api', '/api/User/registerUser', 'POST'] as const
}

export function usePostApiUserRegisterUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.User.registerUser.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.User.registerUser.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiUserRegisterUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.User.registerUser.$post> },
      ) => parseResponse(client.api.User.registerUser.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiUserUpdateuserKey() {
  return ['api', '/api/User/updateuser', 'PUT'] as const
}

export function usePutApiUserUpdateuser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.User.updateuser.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.User.updateuser.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiUserUpdateuserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.User.updateuser.$put> }) =>
        parseResponse(client.api.User.updateuser.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
