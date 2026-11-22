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

export function getCommunicationPreferencesKey() {
  return ['communication-preferences'] as const
}

export function getCommunicationPreferences202609DefinitionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['communication-preferences']['2026-09']['definitions']['$get']>
  >,
) {
  return [
    'communication-preferences',
    '/communication-preferences/2026-09/definitions',
    toValue(args),
  ] as const
}

export function getCommunicationPreferences202609DefinitionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['communication-preferences']['2026-09']['definitions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommunicationPreferences202609DefinitionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['communication-preferences']['2026-09'].definitions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCommunicationPreferences202609Definitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['communication-preferences']['2026-09']['definitions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['communication-preferences']['2026-09']['definitions']['$get']>
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
                    (typeof client)['communication-preferences']['2026-09']['definitions']['$get']
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
                    (typeof client)['communication-preferences']['2026-09']['definitions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCommunicationPreferences202609DefinitionsQueryKey>
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
              (typeof client)['communication-preferences']['2026-09']['definitions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommunicationPreferences202609DefinitionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommunicationPreferences202609DefinitionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['communication-preferences']['2026-09'].definitions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCommunicationPreferences202609LinksGenerateMutationKey() {
  return [
    'communication-preferences',
    '/communication-preferences/2026-09/links/generate',
    'POST',
  ] as const
}

export function getPostCommunicationPreferences202609LinksGenerateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['communication-preferences']['2026-09']['links']['generate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCommunicationPreferences202609LinksGenerateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['communication-preferences']['2026-09']['links']['generate']['$post']
      >,
    ) {
      return parseResponse(
        client['communication-preferences']['2026-09'].links.generate.$post(args, options),
      )
    },
  })
}

export function usePostCommunicationPreferences202609LinksGenerate<
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
                    (typeof client)['communication-preferences']['2026-09']['links']['generate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['communication-preferences']['2026-09']['links']['generate']['$post']
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
  const mutationDefaults = getPostCommunicationPreferences202609LinksGenerateMutationOptions<
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

export function getPostCommunicationPreferences202609StatusesBatchReadMutationKey() {
  return [
    'communication-preferences',
    '/communication-preferences/2026-09/statuses/batch/read',
    'POST',
  ] as const
}

export function getPostCommunicationPreferences202609StatusesBatchReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['communication-preferences']['2026-09']['statuses']['batch']['read']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCommunicationPreferences202609StatusesBatchReadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['communication-preferences']['2026-09']['statuses']['batch']['read']['$post']
      >,
    ) {
      return parseResponse(
        client['communication-preferences']['2026-09'].statuses.batch.read.$post(args, options),
      )
    },
  })
}

export function usePostCommunicationPreferences202609StatusesBatchRead<
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
                    (typeof client)['communication-preferences']['2026-09']['statuses']['batch']['read']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['communication-preferences']['2026-09']['statuses']['batch']['read']['$post']
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
  const mutationDefaults = getPostCommunicationPreferences202609StatusesBatchReadMutationOptions<
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

export function getPostCommunicationPreferences202609StatusesBatchUnsubscribeAllMutationKey() {
  return [
    'communication-preferences',
    '/communication-preferences/2026-09/statuses/batch/unsubscribe-all',
    'POST',
  ] as const
}

export function getPostCommunicationPreferences202609StatusesBatchUnsubscribeAllMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['communication-preferences']['2026-09']['statuses']['batch']['unsubscribe-all']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCommunicationPreferences202609StatusesBatchUnsubscribeAllMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['communication-preferences']['2026-09']['statuses']['batch']['unsubscribe-all']['$post']
      >,
    ) {
      return parseResponse(
        client['communication-preferences']['2026-09'].statuses.batch['unsubscribe-all'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCommunicationPreferences202609StatusesBatchUnsubscribeAll<
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
                    (typeof client)['communication-preferences']['2026-09']['statuses']['batch']['unsubscribe-all']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['communication-preferences']['2026-09']['statuses']['batch']['unsubscribe-all']['$post']
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
    getPostCommunicationPreferences202609StatusesBatchUnsubscribeAllMutationOptions<
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

export function getPostCommunicationPreferences202609StatusesBatchUnsubscribeAllReadMutationKey() {
  return [
    'communication-preferences',
    '/communication-preferences/2026-09/statuses/batch/unsubscribe-all/read',
    'POST',
  ] as const
}

export function getPostCommunicationPreferences202609StatusesBatchUnsubscribeAllReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['communication-preferences']['2026-09']['statuses']['batch']['unsubscribe-all']['read']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCommunicationPreferences202609StatusesBatchUnsubscribeAllReadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['communication-preferences']['2026-09']['statuses']['batch']['unsubscribe-all']['read']['$post']
      >,
    ) {
      return parseResponse(
        client['communication-preferences']['2026-09'].statuses.batch['unsubscribe-all'].read.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCommunicationPreferences202609StatusesBatchUnsubscribeAllRead<
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
                    (typeof client)['communication-preferences']['2026-09']['statuses']['batch']['unsubscribe-all']['read']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['communication-preferences']['2026-09']['statuses']['batch']['unsubscribe-all']['read']['$post']
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
    getPostCommunicationPreferences202609StatusesBatchUnsubscribeAllReadMutationOptions<
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

export function getPostCommunicationPreferences202609StatusesBatchWriteMutationKey() {
  return [
    'communication-preferences',
    '/communication-preferences/2026-09/statuses/batch/write',
    'POST',
  ] as const
}

export function getPostCommunicationPreferences202609StatusesBatchWriteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['communication-preferences']['2026-09']['statuses']['batch']['write']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCommunicationPreferences202609StatusesBatchWriteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['communication-preferences']['2026-09']['statuses']['batch']['write']['$post']
      >,
    ) {
      return parseResponse(
        client['communication-preferences']['2026-09'].statuses.batch.write.$post(args, options),
      )
    },
  })
}

export function usePostCommunicationPreferences202609StatusesBatchWrite<
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
                    (typeof client)['communication-preferences']['2026-09']['statuses']['batch']['write']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['communication-preferences']['2026-09']['statuses']['batch']['write']['$post']
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
  const mutationDefaults = getPostCommunicationPreferences202609StatusesBatchWriteMutationOptions<
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

export function getCommunicationPreferences202609StatusesSubscriberIdStringQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['$get']
    >
  >,
) {
  return [
    'communication-preferences',
    '/communication-preferences/2026-09/statuses/:subscriberIdString',
    toValue(args),
  ] as const
}

export function getCommunicationPreferences202609StatusesSubscriberIdStringQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCommunicationPreferences202609StatusesSubscriberIdStringQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['communication-preferences']['2026-09'].statuses[':subscriberIdString'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCommunicationPreferences202609StatusesSubscriberIdString<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['$get']
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
                    (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['$get']
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
                    (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCommunicationPreferences202609StatusesSubscriberIdStringQueryKey>
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
              (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommunicationPreferences202609StatusesSubscriberIdStringQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCommunicationPreferences202609StatusesSubscriberIdStringQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['communication-preferences']['2026-09'].statuses[':subscriberIdString'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostCommunicationPreferences202609StatusesSubscriberIdStringMutationKey() {
  return [
    'communication-preferences',
    '/communication-preferences/2026-09/statuses/:subscriberIdString',
    'POST',
  ] as const
}

export function getPostCommunicationPreferences202609StatusesSubscriberIdStringMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCommunicationPreferences202609StatusesSubscriberIdStringMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['$post']
      >,
    ) {
      return parseResponse(
        client['communication-preferences']['2026-09'].statuses[':subscriberIdString'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCommunicationPreferences202609StatusesSubscriberIdString<
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
                    (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['$post']
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
    getPostCommunicationPreferences202609StatusesSubscriberIdStringMutationOptions<
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

export function getCommunicationPreferences202609StatusesSubscriberIdStringUnsubscribeAllQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['unsubscribe-all']['$get']
    >
  >,
) {
  return [
    'communication-preferences',
    '/communication-preferences/2026-09/statuses/:subscriberIdString/unsubscribe-all',
    toValue(args),
  ] as const
}

export function getCommunicationPreferences202609StatusesSubscriberIdStringUnsubscribeAllQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['unsubscribe-all']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCommunicationPreferences202609StatusesSubscriberIdStringUnsubscribeAllQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['communication-preferences']['2026-09'].statuses[':subscriberIdString'][
          'unsubscribe-all'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCommunicationPreferences202609StatusesSubscriberIdStringUnsubscribeAll<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['unsubscribe-all']['$get']
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
                    (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['unsubscribe-all']['$get']
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
                    (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['unsubscribe-all']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCommunicationPreferences202609StatusesSubscriberIdStringUnsubscribeAllQueryKey
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
              (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['unsubscribe-all']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getCommunicationPreferences202609StatusesSubscriberIdStringUnsubscribeAllQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCommunicationPreferences202609StatusesSubscriberIdStringUnsubscribeAllQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['communication-preferences']['2026-09'].statuses[':subscriberIdString'][
            'unsubscribe-all'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCommunicationPreferences202609StatusesSubscriberIdStringUnsubscribeAllMutationKey() {
  return [
    'communication-preferences',
    '/communication-preferences/2026-09/statuses/:subscriberIdString/unsubscribe-all',
    'POST',
  ] as const
}

export function getPostCommunicationPreferences202609StatusesSubscriberIdStringUnsubscribeAllMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['unsubscribe-all']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostCommunicationPreferences202609StatusesSubscriberIdStringUnsubscribeAllMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['unsubscribe-all']['$post']
      >,
    ) {
      return parseResponse(
        client['communication-preferences']['2026-09'].statuses[':subscriberIdString'][
          'unsubscribe-all'
        ].$post(args, options),
      )
    },
  })
}

export function usePostCommunicationPreferences202609StatusesSubscriberIdStringUnsubscribeAll<
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
                    (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['unsubscribe-all']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['unsubscribe-all']['$post']
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
    getPostCommunicationPreferences202609StatusesSubscriberIdStringUnsubscribeAllMutationOptions<
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
