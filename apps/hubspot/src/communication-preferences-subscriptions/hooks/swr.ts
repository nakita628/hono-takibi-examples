import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCommunicationPreferencesKey() {
  return ['communication-preferences'] as const
}

export function getGetCommunicationPreferences202609DefinitionsKey(
  args: InferRequestType<
    (typeof client)['communication-preferences']['2026-09']['definitions']['$get']
  >,
) {
  return [
    'communication-preferences',
    '/communication-preferences/2026-09/definitions',
    args,
  ] as const
}

export function useGetCommunicationPreferences202609Definitions<TError = unknown>(
  args: InferRequestType<
    (typeof client)['communication-preferences']['2026-09']['definitions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['communication-preferences']['2026-09']['definitions']['$get']
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
        ? getGetCommunicationPreferences202609DefinitionsKey(args)
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
                (typeof client)['communication-preferences']['2026-09']['definitions']['$get']
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
          client['communication-preferences']['2026-09'].definitions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommunicationPreferences202609Definitions<TError = unknown>(
  args: InferRequestType<
    (typeof client)['communication-preferences']['2026-09']['definitions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['communication-preferences']['2026-09']['definitions']['$get']
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
        ? getGetCommunicationPreferences202609DefinitionsKey(args)
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
                (typeof client)['communication-preferences']['2026-09']['definitions']['$get']
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
          client['communication-preferences']['2026-09'].definitions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCommunicationPreferences202609LinksGenerateKey() {
  return [
    'communication-preferences',
    '/communication-preferences/2026-09/links/generate',
    'POST',
  ] as const
}

export function usePostCommunicationPreferences202609LinksGenerate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['communication-preferences']['2026-09']['links']['generate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['communication-preferences']['2026-09']['links']['generate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCommunicationPreferences202609LinksGenerateKey()
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
            (typeof client)['communication-preferences']['2026-09']['links']['generate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['communication-preferences']['2026-09'].links.generate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCommunicationPreferences202609StatusesBatchReadKey() {
  return [
    'communication-preferences',
    '/communication-preferences/2026-09/statuses/batch/read',
    'POST',
  ] as const
}

export function usePostCommunicationPreferences202609StatusesBatchRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['communication-preferences']['2026-09']['statuses']['batch']['read']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['communication-preferences']['2026-09']['statuses']['batch']['read']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCommunicationPreferences202609StatusesBatchReadKey()
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
            (typeof client)['communication-preferences']['2026-09']['statuses']['batch']['read']['$post']
          >
        },
      ) =>
        parseResponse(
          client['communication-preferences']['2026-09'].statuses.batch.read.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCommunicationPreferences202609StatusesBatchUnsubscribeAllKey() {
  return [
    'communication-preferences',
    '/communication-preferences/2026-09/statuses/batch/unsubscribe-all',
    'POST',
  ] as const
}

export function usePostCommunicationPreferences202609StatusesBatchUnsubscribeAll<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['communication-preferences']['2026-09']['statuses']['batch']['unsubscribe-all']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['communication-preferences']['2026-09']['statuses']['batch']['unsubscribe-all']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCommunicationPreferences202609StatusesBatchUnsubscribeAllKey()
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
            (typeof client)['communication-preferences']['2026-09']['statuses']['batch']['unsubscribe-all']['$post']
          >
        },
      ) =>
        parseResponse(
          client['communication-preferences']['2026-09'].statuses.batch['unsubscribe-all'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCommunicationPreferences202609StatusesBatchUnsubscribeAllReadKey() {
  return [
    'communication-preferences',
    '/communication-preferences/2026-09/statuses/batch/unsubscribe-all/read',
    'POST',
  ] as const
}

export function usePostCommunicationPreferences202609StatusesBatchUnsubscribeAllRead<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['communication-preferences']['2026-09']['statuses']['batch']['unsubscribe-all']['read']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['communication-preferences']['2026-09']['statuses']['batch']['unsubscribe-all']['read']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostCommunicationPreferences202609StatusesBatchUnsubscribeAllReadKey()
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
            (typeof client)['communication-preferences']['2026-09']['statuses']['batch']['unsubscribe-all']['read']['$post']
          >
        },
      ) =>
        parseResponse(
          client['communication-preferences']['2026-09'].statuses.batch[
            'unsubscribe-all'
          ].read.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCommunicationPreferences202609StatusesBatchWriteKey() {
  return [
    'communication-preferences',
    '/communication-preferences/2026-09/statuses/batch/write',
    'POST',
  ] as const
}

export function usePostCommunicationPreferences202609StatusesBatchWrite<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['communication-preferences']['2026-09']['statuses']['batch']['write']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['communication-preferences']['2026-09']['statuses']['batch']['write']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCommunicationPreferences202609StatusesBatchWriteKey()
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
            (typeof client)['communication-preferences']['2026-09']['statuses']['batch']['write']['$post']
          >
        },
      ) =>
        parseResponse(
          client['communication-preferences']['2026-09'].statuses.batch.write.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCommunicationPreferences202609StatusesSubscriberIdStringKey(
  args: InferRequestType<
    (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['$get']
  >,
) {
  return [
    'communication-preferences',
    '/communication-preferences/2026-09/statuses/:subscriberIdString',
    args,
  ] as const
}

export function useGetCommunicationPreferences202609StatusesSubscriberIdString<TError = unknown>(
  args: InferRequestType<
    (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['$get']
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
        ? getGetCommunicationPreferences202609StatusesSubscriberIdStringKey(args)
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
                (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['$get']
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
          client['communication-preferences']['2026-09'].statuses[':subscriberIdString'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommunicationPreferences202609StatusesSubscriberIdString<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['$get']
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
        ? getGetCommunicationPreferences202609StatusesSubscriberIdStringKey(args)
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
                (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['$get']
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
          client['communication-preferences']['2026-09'].statuses[':subscriberIdString'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCommunicationPreferences202609StatusesSubscriberIdStringKey() {
  return [
    'communication-preferences',
    '/communication-preferences/2026-09/statuses/:subscriberIdString',
    'POST',
  ] as const
}

export function usePostCommunicationPreferences202609StatusesSubscriberIdString<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCommunicationPreferences202609StatusesSubscriberIdStringKey()
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
            (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['$post']
          >
        },
      ) =>
        parseResponse(
          client['communication-preferences']['2026-09'].statuses[':subscriberIdString'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCommunicationPreferences202609StatusesSubscriberIdStringUnsubscribeAllKey(
  args: InferRequestType<
    (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['unsubscribe-all']['$get']
  >,
) {
  return [
    'communication-preferences',
    '/communication-preferences/2026-09/statuses/:subscriberIdString/unsubscribe-all',
    args,
  ] as const
}

export function useGetCommunicationPreferences202609StatusesSubscriberIdStringUnsubscribeAll<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['unsubscribe-all']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['unsubscribe-all']['$get']
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
        ? getGetCommunicationPreferences202609StatusesSubscriberIdStringUnsubscribeAllKey(args)
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
                (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['unsubscribe-all']['$get']
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
          client['communication-preferences']['2026-09'].statuses[':subscriberIdString'][
            'unsubscribe-all'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommunicationPreferences202609StatusesSubscriberIdStringUnsubscribeAll<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['unsubscribe-all']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['unsubscribe-all']['$get']
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
        ? getGetCommunicationPreferences202609StatusesSubscriberIdStringUnsubscribeAllKey(args)
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
                (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['unsubscribe-all']['$get']
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
          client['communication-preferences']['2026-09'].statuses[':subscriberIdString'][
            'unsubscribe-all'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCommunicationPreferences202609StatusesSubscriberIdStringUnsubscribeAllKey() {
  return [
    'communication-preferences',
    '/communication-preferences/2026-09/statuses/:subscriberIdString/unsubscribe-all',
    'POST',
  ] as const
}

export function usePostCommunicationPreferences202609StatusesSubscriberIdStringUnsubscribeAll<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['unsubscribe-all']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['unsubscribe-all']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostCommunicationPreferences202609StatusesSubscriberIdStringUnsubscribeAllKey()
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
            (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['unsubscribe-all']['$post']
          >
        },
      ) =>
        parseResponse(
          client['communication-preferences']['2026-09'].statuses[':subscriberIdString'][
            'unsubscribe-all'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
