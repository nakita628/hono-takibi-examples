import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDirectoriesKey() {
  return ['directories'] as const
}

export function getDistributionsKey() {
  return ['distributions'] as const
}

export function getEventsubscriptionsKey() {
  return ['eventsubscriptions'] as const
}

export function getSurveyDefinitionsKey() {
  return ['survey-definitions'] as const
}

export function getPostDirectoriesDirectoryIdMailinglistsMailingListIdContactsKey() {
  return [
    'directories',
    '/directories/:DirectoryId/mailinglists/:MailingListId/contacts',
    'POST',
  ] as const
}

export function usePostDirectoriesDirectoryIdMailinglistsMailingListIdContacts<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.directories)[':DirectoryId']['mailinglists'][':MailingListId']['contacts']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.directories)[':DirectoryId']['mailinglists'][':MailingListId']['contacts']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDirectoriesDirectoryIdMailinglistsMailingListIdContactsKey()
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
            (typeof client.directories)[':DirectoryId']['mailinglists'][':MailingListId']['contacts']['$post']
          >
        },
      ) =>
        parseResponse(
          client.directories[':DirectoryId'].mailinglists[':MailingListId'].contacts.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDistributionsKey(args: InferRequestType<typeof client.distributions.$get>) {
  return ['distributions', '/distributions', args] as const
}

export function useGetDistributions<TError = unknown>(
  args: InferRequestType<typeof client.distributions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDistributionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.distributions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDistributions<TError = unknown>(
  args: InferRequestType<typeof client.distributions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDistributionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.distributions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDistributionsKey() {
  return ['distributions', '/distributions', 'POST'] as const
}

export function usePostDistributions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.distributions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDistributionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.distributions.$post> }) =>
        parseResponse(client.distributions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDistributionsDistributionIdLinksKey(
  args: InferRequestType<(typeof client.distributions)[':DistributionId']['links']['$get']>,
) {
  return ['distributions', '/distributions/:DistributionId/links', args] as const
}

export function useGetDistributionsDistributionIdLinks<TError = unknown>(
  args: InferRequestType<(typeof client.distributions)[':DistributionId']['links']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.distributions)[':DistributionId']['links']['$get']>>
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
        ? getGetDistributionsDistributionIdLinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.distributions)[':DistributionId']['links']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.distributions[':DistributionId'].links.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDistributionsDistributionIdLinks<TError = unknown>(
  args: InferRequestType<(typeof client.distributions)[':DistributionId']['links']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.distributions)[':DistributionId']['links']['$get']>>
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
        ? getGetDistributionsDistributionIdLinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.distributions)[':DistributionId']['links']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.distributions[':DistributionId'].links.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEventsubscriptionsIndexKey() {
  return ['eventsubscriptions', '/eventsubscriptions/', 'POST'] as const
}

export function usePostEventsubscriptionsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eventsubscriptions.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.eventsubscriptions.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventsubscriptionsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.eventsubscriptions.index.$post> },
      ) => parseResponse(client.eventsubscriptions.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteEventsubscriptionsIndexKey() {
  return ['eventsubscriptions', '/eventsubscriptions/', 'DELETE'] as const
}

export function useDeleteEventsubscriptionsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eventsubscriptions.index.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.eventsubscriptions.index.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEventsubscriptionsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.eventsubscriptions.index.$delete> },
      ) => parseResponse(client.eventsubscriptions.index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEventsubscriptionsSubscriptionIdKey(
  args: InferRequestType<(typeof client.eventsubscriptions)[':SubscriptionId']['$get']>,
) {
  return ['eventsubscriptions', '/eventsubscriptions/:SubscriptionId', args] as const
}

export function useGetEventsubscriptionsSubscriptionId<TError = unknown>(
  args: InferRequestType<(typeof client.eventsubscriptions)[':SubscriptionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eventsubscriptions)[':SubscriptionId']['$get']>>
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
        ? getGetEventsubscriptionsSubscriptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eventsubscriptions)[':SubscriptionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eventsubscriptions[':SubscriptionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsubscriptionsSubscriptionId<TError = unknown>(
  args: InferRequestType<(typeof client.eventsubscriptions)[':SubscriptionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eventsubscriptions)[':SubscriptionId']['$get']>>
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
        ? getGetEventsubscriptionsSubscriptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eventsubscriptions)[':SubscriptionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eventsubscriptions[':SubscriptionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSurveyDefinitionsSurveyIdKey(
  args: InferRequestType<(typeof client)['survey-definitions'][':SurveyId']['$get']>,
) {
  return ['survey-definitions', '/survey-definitions/:SurveyId', args] as const
}

export function useGetSurveyDefinitionsSurveyId<TError = unknown>(
  args: InferRequestType<(typeof client)['survey-definitions'][':SurveyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['survey-definitions'][':SurveyId']['$get']>>
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
        ? getGetSurveyDefinitionsSurveyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['survey-definitions'][':SurveyId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['survey-definitions'][':SurveyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSurveyDefinitionsSurveyId<TError = unknown>(
  args: InferRequestType<(typeof client)['survey-definitions'][':SurveyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['survey-definitions'][':SurveyId']['$get']>>
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
        ? getGetSurveyDefinitionsSurveyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['survey-definitions'][':SurveyId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['survey-definitions'][':SurveyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
