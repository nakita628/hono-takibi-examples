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

export function getCommunicationPreferencesKey() {
  return ['communication-preferences'] as const
}

export function getCommunicationPreferences202609DefinitionsQueryKey(
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

export function getCommunicationPreferences202609DefinitionsQueryOptions<
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
  args: InferRequestType<
    (typeof client)['communication-preferences']['2026-09']['definitions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCommunicationPreferences202609DefinitionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['communication-preferences']['2026-09'].definitions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCommunicationPreferences202609Definitions<
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
  args: () => InferRequestType<
    (typeof client)['communication-preferences']['2026-09']['definitions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getCommunicationPreferences202609DefinitionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostCommunicationPreferences202609LinksGenerate<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCommunicationPreferences202609LinksGenerateMutationOptions<
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

export function createPostCommunicationPreferences202609StatusesBatchRead<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCommunicationPreferences202609StatusesBatchReadMutationOptions<
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

export function createPostCommunicationPreferences202609StatusesBatchUnsubscribeAll<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCommunicationPreferences202609StatusesBatchUnsubscribeAllMutationOptions<
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

export function createPostCommunicationPreferences202609StatusesBatchUnsubscribeAllRead<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCommunicationPreferences202609StatusesBatchUnsubscribeAllReadMutationOptions<
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

export function createPostCommunicationPreferences202609StatusesBatchWrite<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCommunicationPreferences202609StatusesBatchWriteMutationOptions<
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

export function getCommunicationPreferences202609StatusesSubscriberIdStringQueryKey(
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

export function getCommunicationPreferences202609StatusesSubscriberIdStringQueryOptions<
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
  args: InferRequestType<
    (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCommunicationPreferences202609StatusesSubscriberIdStringQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['communication-preferences']['2026-09'].statuses[':subscriberIdString'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCommunicationPreferences202609StatusesSubscriberIdString<
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
  args: () => InferRequestType<
    (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getCommunicationPreferences202609StatusesSubscriberIdStringQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostCommunicationPreferences202609StatusesSubscriberIdString<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCommunicationPreferences202609StatusesSubscriberIdStringMutationOptions<
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

export function getCommunicationPreferences202609StatusesSubscriberIdStringUnsubscribeAllQueryKey(
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

export function getCommunicationPreferences202609StatusesSubscriberIdStringUnsubscribeAllQueryOptions<
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
  args: InferRequestType<
    (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['unsubscribe-all']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getCommunicationPreferences202609StatusesSubscriberIdStringUnsubscribeAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['communication-preferences']['2026-09'].statuses[':subscriberIdString'][
          'unsubscribe-all'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCommunicationPreferences202609StatusesSubscriberIdStringUnsubscribeAll<
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
  args: () => InferRequestType<
    (typeof client)['communication-preferences']['2026-09']['statuses'][':subscriberIdString']['unsubscribe-all']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getCommunicationPreferences202609StatusesSubscriberIdStringUnsubscribeAllQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostCommunicationPreferences202609StatusesSubscriberIdStringUnsubscribeAll<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCommunicationPreferences202609StatusesSubscriberIdStringUnsubscribeAllMutationOptions<
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
