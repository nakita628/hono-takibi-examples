import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getPostV2EmailMetricsBatchMutationKey() {
  return ['v2', '/v2/email/metrics/batch', 'POST'] as const
}

export function getPostV2EmailMetricsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.metrics.batch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.email.metrics.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EmailMetricsBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.email.metrics.batch.$post>) {
      return parseResponse(client.v2.email.metrics.batch.$post(args, options))
    },
  })
}

export function usePostV2EmailMetricsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.metrics.batch.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.email.metrics.batch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2EmailMetricsBatchMutationOptions<TError, TOnMutateResult>(
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

export function getV2EmailConfigurationSetsQueryKey(
  args: InferRequestType<(typeof client.v2.email)['configuration-sets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/configuration-sets', keyArgs] as const
}

export function getV2EmailConfigurationSetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.email)['configuration-sets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email)['configuration-sets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.email)['configuration-sets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EmailConfigurationSetsQueryKey>
  >({
    queryKey: getV2EmailConfigurationSetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.email['configuration-sets'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2EmailConfigurationSets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.email)['configuration-sets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email)['configuration-sets']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.email)['configuration-sets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailConfigurationSetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2EmailConfigurationSetsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2EmailConfigurationSets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.email)['configuration-sets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email)['configuration-sets']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.email)['configuration-sets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailConfigurationSetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2EmailConfigurationSetsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2EmailConfigurationSetsMutationKey() {
  return ['v2', '/v2/email/configuration-sets', 'POST'] as const
}

export function getPostV2EmailConfigurationSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.email)['configuration-sets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.email)['configuration-sets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EmailConfigurationSetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.email)['configuration-sets']['$post']>,
    ) {
      return parseResponse(client.v2.email['configuration-sets'].$post(args, options))
    },
  })
}

export function usePostV2EmailConfigurationSets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.email)['configuration-sets']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.email)['configuration-sets']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2EmailConfigurationSetsMutationOptions<TError, TOnMutateResult>(
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

export function getV2EmailConfigurationSetsConfigurationSetNameEventDestinationsQueryKey(
  args: InferRequestType<
    (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v2',
    '/v2/email/configuration-sets/:ConfigurationSetName/event-destinations',
    keyArgs,
  ] as const
}

export function getV2EmailConfigurationSetsConfigurationSetNameEventDestinationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EmailConfigurationSetsConfigurationSetNameEventDestinationsQueryKey>
  >({
    queryKey: getV2EmailConfigurationSetsConfigurationSetNameEventDestinationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.email['configuration-sets'][':ConfigurationSetName']['event-destinations'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useV2EmailConfigurationSetsConfigurationSetNameEventDestinations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailConfigurationSetsConfigurationSetNameEventDestinationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2EmailConfigurationSetsConfigurationSetNameEventDestinationsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2EmailConfigurationSetsConfigurationSetNameEventDestinations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailConfigurationSetsConfigurationSetNameEventDestinationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2EmailConfigurationSetsConfigurationSetNameEventDestinationsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2EmailConfigurationSetsConfigurationSetNameEventDestinationsMutationKey() {
  return [
    'v2',
    '/v2/email/configuration-sets/:ConfigurationSetName/event-destinations',
    'POST',
  ] as const
}

export function getPostV2EmailConfigurationSetsConfigurationSetNameEventDestinationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2EmailConfigurationSetsConfigurationSetNameEventDestinationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.email['configuration-sets'][':ConfigurationSetName']['event-destinations'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV2EmailConfigurationSetsConfigurationSetNameEventDestinations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostV2EmailConfigurationSetsConfigurationSetNameEventDestinationsMutationOptions<
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

export function getV2EmailContactListsContactListNameContactsQueryKey(
  args: InferRequestType<
    (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/contact-lists/:ContactListName/contacts', keyArgs] as const
}

export function getV2EmailContactListsContactListNameContactsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EmailContactListsContactListNameContactsQueryKey>
  >({
    queryKey: getV2EmailContactListsContactListNameContactsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.email['contact-lists'][':ContactListName'].contacts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2EmailContactListsContactListNameContacts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailContactListsContactListNameContactsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2EmailContactListsContactListNameContactsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2EmailContactListsContactListNameContacts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailContactListsContactListNameContactsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2EmailContactListsContactListNameContactsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2EmailContactListsContactListNameContactsMutationKey() {
  return ['v2', '/v2/email/contact-lists/:ContactListName/contacts', 'POST'] as const
}

export function getPostV2EmailContactListsContactListNameContactsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2EmailContactListsContactListNameContactsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.email['contact-lists'][':ContactListName'].contacts.$post(args, options),
      )
    },
  })
}

export function usePostV2EmailContactListsContactListNameContacts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2EmailContactListsContactListNameContactsMutationOptions<
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

export function getV2EmailContactListsQueryKey(
  args: InferRequestType<(typeof client.v2.email)['contact-lists']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/contact-lists', keyArgs] as const
}

export function getV2EmailContactListsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.email)['contact-lists']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email)['contact-lists']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.email)['contact-lists']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EmailContactListsQueryKey>
  >({
    queryKey: getV2EmailContactListsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.email['contact-lists'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2EmailContactLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.email)['contact-lists']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email)['contact-lists']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.email)['contact-lists']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailContactListsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2EmailContactListsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2EmailContactLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.email)['contact-lists']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email)['contact-lists']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.email)['contact-lists']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailContactListsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2EmailContactListsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2EmailContactListsMutationKey() {
  return ['v2', '/v2/email/contact-lists', 'POST'] as const
}

export function getPostV2EmailContactListsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.email)['contact-lists']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.email)['contact-lists']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EmailContactListsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.email)['contact-lists']['$post']>) {
      return parseResponse(client.v2.email['contact-lists'].$post(args, options))
    },
  })
}

export function usePostV2EmailContactLists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.email)['contact-lists']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.email)['contact-lists']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2EmailContactListsMutationOptions<TError, TOnMutateResult>(
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

export function getV2EmailCustomVerificationEmailTemplatesQueryKey(
  args: InferRequestType<(typeof client.v2.email)['custom-verification-email-templates']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/custom-verification-email-templates', keyArgs] as const
}

export function getV2EmailCustomVerificationEmailTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.email)['custom-verification-email-templates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email)['custom-verification-email-templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.email)['custom-verification-email-templates']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EmailCustomVerificationEmailTemplatesQueryKey>
  >({
    queryKey: getV2EmailCustomVerificationEmailTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.email['custom-verification-email-templates'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2EmailCustomVerificationEmailTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.email)['custom-verification-email-templates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email)['custom-verification-email-templates']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.email)['custom-verification-email-templates']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailCustomVerificationEmailTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2EmailCustomVerificationEmailTemplatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2EmailCustomVerificationEmailTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.email)['custom-verification-email-templates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email)['custom-verification-email-templates']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.email)['custom-verification-email-templates']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailCustomVerificationEmailTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2EmailCustomVerificationEmailTemplatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2EmailCustomVerificationEmailTemplatesMutationKey() {
  return ['v2', '/v2/email/custom-verification-email-templates', 'POST'] as const
}

export function getPostV2EmailCustomVerificationEmailTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.email)['custom-verification-email-templates']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.email)['custom-verification-email-templates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EmailCustomVerificationEmailTemplatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.email)['custom-verification-email-templates']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.email['custom-verification-email-templates'].$post(args, options),
      )
    },
  })
}

export function usePostV2EmailCustomVerificationEmailTemplates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.email)['custom-verification-email-templates']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.email)['custom-verification-email-templates']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2EmailCustomVerificationEmailTemplatesMutationOptions<
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

export function getV2EmailDedicatedIpPoolsQueryKey(
  args: InferRequestType<(typeof client.v2.email)['dedicated-ip-pools']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/dedicated-ip-pools', keyArgs] as const
}

export function getV2EmailDedicatedIpPoolsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.email)['dedicated-ip-pools']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email)['dedicated-ip-pools']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.email)['dedicated-ip-pools']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EmailDedicatedIpPoolsQueryKey>
  >({
    queryKey: getV2EmailDedicatedIpPoolsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.email['dedicated-ip-pools'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2EmailDedicatedIpPools<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.email)['dedicated-ip-pools']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email)['dedicated-ip-pools']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.email)['dedicated-ip-pools']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailDedicatedIpPoolsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2EmailDedicatedIpPoolsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2EmailDedicatedIpPools<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.email)['dedicated-ip-pools']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email)['dedicated-ip-pools']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.email)['dedicated-ip-pools']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailDedicatedIpPoolsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2EmailDedicatedIpPoolsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2EmailDedicatedIpPoolsMutationKey() {
  return ['v2', '/v2/email/dedicated-ip-pools', 'POST'] as const
}

export function getPostV2EmailDedicatedIpPoolsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.email)['dedicated-ip-pools']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.email)['dedicated-ip-pools']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EmailDedicatedIpPoolsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.email)['dedicated-ip-pools']['$post']>,
    ) {
      return parseResponse(client.v2.email['dedicated-ip-pools'].$post(args, options))
    },
  })
}

export function usePostV2EmailDedicatedIpPools<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.email)['dedicated-ip-pools']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.email)['dedicated-ip-pools']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2EmailDedicatedIpPoolsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2EmailDeliverabilityDashboardTestMutationKey() {
  return ['v2', '/v2/email/deliverability-dashboard/test', 'POST'] as const
}

export function getPostV2EmailDeliverabilityDashboardTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.email)['deliverability-dashboard']['test']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.email)['deliverability-dashboard']['test']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EmailDeliverabilityDashboardTestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.email)['deliverability-dashboard']['test']['$post']>,
    ) {
      return parseResponse(client.v2.email['deliverability-dashboard'].test.$post(args, options))
    },
  })
}

export function usePostV2EmailDeliverabilityDashboardTest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.email)['deliverability-dashboard']['test']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.email)['deliverability-dashboard']['test']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2EmailDeliverabilityDashboardTestMutationOptions<
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

export function getV2EmailIdentitiesQueryKey(
  args: InferRequestType<typeof client.v2.email.identities.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/identities', keyArgs] as const
}

export function getV2EmailIdentitiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.identities.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.email.identities.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.identities.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2EmailIdentitiesQueryKey>
  >({
    queryKey: getV2EmailIdentitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.email.identities.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2EmailIdentities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.identities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.email.identities.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.identities.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailIdentitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2EmailIdentitiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2EmailIdentities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.identities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.email.identities.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.identities.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailIdentitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2EmailIdentitiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2EmailIdentitiesMutationKey() {
  return ['v2', '/v2/email/identities', 'POST'] as const
}

export function getPostV2EmailIdentitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.identities.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.email.identities.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EmailIdentitiesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.email.identities.$post>) {
      return parseResponse(client.v2.email.identities.$post(args, options))
    },
  })
}

export function usePostV2EmailIdentities<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.identities.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.email.identities.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2EmailIdentitiesMutationOptions<TError, TOnMutateResult>(
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

export function getPutV2EmailIdentitiesEmailIdentityPoliciesPolicyNameMutationKey() {
  return ['v2', '/v2/email/identities/:EmailIdentity/policies/:PolicyName', 'PUT'] as const
}

export function getPutV2EmailIdentitiesEmailIdentityPoliciesPolicyNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.email.identities)[':EmailIdentity']['policies'][':PolicyName']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.email.identities)[':EmailIdentity']['policies'][':PolicyName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2EmailIdentitiesEmailIdentityPoliciesPolicyNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.email.identities)[':EmailIdentity']['policies'][':PolicyName']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.email.identities[':EmailIdentity'].policies[':PolicyName'].$put(args, options),
      )
    },
  })
}

export function usePutV2EmailIdentitiesEmailIdentityPoliciesPolicyName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email.identities)[':EmailIdentity']['policies'][':PolicyName']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.email.identities)[':EmailIdentity']['policies'][':PolicyName']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2EmailIdentitiesEmailIdentityPoliciesPolicyNameMutationOptions<
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

export function getPostV2EmailIdentitiesEmailIdentityPoliciesPolicyNameMutationKey() {
  return ['v2', '/v2/email/identities/:EmailIdentity/policies/:PolicyName', 'POST'] as const
}

export function getPostV2EmailIdentitiesEmailIdentityPoliciesPolicyNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.email.identities)[':EmailIdentity']['policies'][':PolicyName']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.email.identities)[':EmailIdentity']['policies'][':PolicyName']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2EmailIdentitiesEmailIdentityPoliciesPolicyNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.email.identities)[':EmailIdentity']['policies'][':PolicyName']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.email.identities[':EmailIdentity'].policies[':PolicyName'].$post(args, options),
      )
    },
  })
}

export function usePostV2EmailIdentitiesEmailIdentityPoliciesPolicyName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email.identities)[':EmailIdentity']['policies'][':PolicyName']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.email.identities)[':EmailIdentity']['policies'][':PolicyName']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2EmailIdentitiesEmailIdentityPoliciesPolicyNameMutationOptions<
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

export function getDeleteV2EmailIdentitiesEmailIdentityPoliciesPolicyNameMutationKey() {
  return ['v2', '/v2/email/identities/:EmailIdentity/policies/:PolicyName', 'DELETE'] as const
}

export function getDeleteV2EmailIdentitiesEmailIdentityPoliciesPolicyNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.email.identities)[':EmailIdentity']['policies'][':PolicyName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.email.identities)[':EmailIdentity']['policies'][':PolicyName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2EmailIdentitiesEmailIdentityPoliciesPolicyNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.email.identities)[':EmailIdentity']['policies'][':PolicyName']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.email.identities[':EmailIdentity'].policies[':PolicyName'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2EmailIdentitiesEmailIdentityPoliciesPolicyName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email.identities)[':EmailIdentity']['policies'][':PolicyName']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.email.identities)[':EmailIdentity']['policies'][':PolicyName']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2EmailIdentitiesEmailIdentityPoliciesPolicyNameMutationOptions<
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

export function getV2EmailTemplatesQueryKey(
  args: InferRequestType<typeof client.v2.email.templates.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/templates', keyArgs] as const
}

export function getV2EmailTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.templates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.email.templates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.templates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2EmailTemplatesQueryKey>
  >({
    queryKey: getV2EmailTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.email.templates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2EmailTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.email.templates.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.templates.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2EmailTemplatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2EmailTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.email.templates.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.templates.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2EmailTemplatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2EmailTemplatesMutationKey() {
  return ['v2', '/v2/email/templates', 'POST'] as const
}

export function getPostV2EmailTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.templates.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.email.templates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EmailTemplatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.email.templates.$post>) {
      return parseResponse(client.v2.email.templates.$post(args, options))
    },
  })
}

export function usePostV2EmailTemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.templates.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.email.templates.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2EmailTemplatesMutationOptions<TError, TOnMutateResult>(
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

export function getV2EmailImportJobsQueryKey(
  args: InferRequestType<(typeof client.v2.email)['import-jobs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/import-jobs', keyArgs] as const
}

export function getV2EmailImportJobsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.email)['import-jobs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email)['import-jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.email)['import-jobs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EmailImportJobsQueryKey>
  >({
    queryKey: getV2EmailImportJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.email['import-jobs'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2EmailImportJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.email)['import-jobs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email)['import-jobs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.email)['import-jobs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailImportJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2EmailImportJobsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2EmailImportJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.email)['import-jobs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email)['import-jobs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.email)['import-jobs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailImportJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2EmailImportJobsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2EmailImportJobsMutationKey() {
  return ['v2', '/v2/email/import-jobs', 'POST'] as const
}

export function getPostV2EmailImportJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.email)['import-jobs']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.email)['import-jobs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EmailImportJobsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.email)['import-jobs']['$post']>) {
      return parseResponse(client.v2.email['import-jobs'].$post(args, options))
    },
  })
}

export function usePostV2EmailImportJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.email)['import-jobs']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.email)['import-jobs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2EmailImportJobsMutationOptions<TError, TOnMutateResult>(
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

export function getV2EmailConfigurationSetsConfigurationSetNameQueryKey(
  args: InferRequestType<
    (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/configuration-sets/:ConfigurationSetName', keyArgs] as const
}

export function getV2EmailConfigurationSetsConfigurationSetNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EmailConfigurationSetsConfigurationSetNameQueryKey>
  >({
    queryKey: getV2EmailConfigurationSetsConfigurationSetNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.email['configuration-sets'][':ConfigurationSetName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2EmailConfigurationSetsConfigurationSetName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailConfigurationSetsConfigurationSetNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2EmailConfigurationSetsConfigurationSetNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2EmailConfigurationSetsConfigurationSetName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailConfigurationSetsConfigurationSetNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2EmailConfigurationSetsConfigurationSetNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV2EmailConfigurationSetsConfigurationSetNameMutationKey() {
  return ['v2', '/v2/email/configuration-sets/:ConfigurationSetName', 'DELETE'] as const
}

export function getDeleteV2EmailConfigurationSetsConfigurationSetNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2EmailConfigurationSetsConfigurationSetNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.email['configuration-sets'][':ConfigurationSetName'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2EmailConfigurationSetsConfigurationSetName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2EmailConfigurationSetsConfigurationSetNameMutationOptions<
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

export function getPutV2EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameMutationKey() {
  return [
    'v2',
    '/v2/email/configuration-sets/:ConfigurationSetName/event-destinations/:EventDestinationName',
    'PUT',
  ] as const
}

export function getPutV2EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutV2EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.email['configuration-sets'][':ConfigurationSetName']['event-destinations'][
          ':EventDestinationName'
        ].$put(args, options),
      )
    },
  })
}

export function usePutV2EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutV2EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameMutationOptions<
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

export function getDeleteV2EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameMutationKey() {
  return [
    'v2',
    '/v2/email/configuration-sets/:ConfigurationSetName/event-destinations/:EventDestinationName',
    'DELETE',
  ] as const
}

export function getDeleteV2EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV2EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.email['configuration-sets'][':ConfigurationSetName']['event-destinations'][
          ':EventDestinationName'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteV2EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameMutationOptions<
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

export function getV2EmailContactListsContactListNameContactsEmailAddressQueryKey(
  args: InferRequestType<
    (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts'][':EmailAddress']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/contact-lists/:ContactListName/contacts/:EmailAddress', keyArgs] as const
}

export function getV2EmailContactListsContactListNameContactsEmailAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts'][':EmailAddress']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts'][':EmailAddress']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts'][':EmailAddress']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EmailContactListsContactListNameContactsEmailAddressQueryKey>
  >({
    queryKey: getV2EmailContactListsContactListNameContactsEmailAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.email['contact-lists'][':ContactListName'].contacts[':EmailAddress'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2EmailContactListsContactListNameContactsEmailAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts'][':EmailAddress']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts'][':EmailAddress']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts'][':EmailAddress']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailContactListsContactListNameContactsEmailAddressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2EmailContactListsContactListNameContactsEmailAddressQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2EmailContactListsContactListNameContactsEmailAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts'][':EmailAddress']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts'][':EmailAddress']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts'][':EmailAddress']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailContactListsContactListNameContactsEmailAddressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2EmailContactListsContactListNameContactsEmailAddressQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV2EmailContactListsContactListNameContactsEmailAddressMutationKey() {
  return ['v2', '/v2/email/contact-lists/:ContactListName/contacts/:EmailAddress', 'PUT'] as const
}

export function getPutV2EmailContactListsContactListNameContactsEmailAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts'][':EmailAddress']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts'][':EmailAddress']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2EmailContactListsContactListNameContactsEmailAddressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts'][':EmailAddress']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.email['contact-lists'][':ContactListName'].contacts[':EmailAddress'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV2EmailContactListsContactListNameContactsEmailAddress<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts'][':EmailAddress']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts'][':EmailAddress']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutV2EmailContactListsContactListNameContactsEmailAddressMutationOptions<
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

export function getDeleteV2EmailContactListsContactListNameContactsEmailAddressMutationKey() {
  return [
    'v2',
    '/v2/email/contact-lists/:ContactListName/contacts/:EmailAddress',
    'DELETE',
  ] as const
}

export function getDeleteV2EmailContactListsContactListNameContactsEmailAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts'][':EmailAddress']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts'][':EmailAddress']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2EmailContactListsContactListNameContactsEmailAddressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts'][':EmailAddress']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.email['contact-lists'][':ContactListName'].contacts[':EmailAddress'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV2EmailContactListsContactListNameContactsEmailAddress<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts'][':EmailAddress']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts'][':EmailAddress']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteV2EmailContactListsContactListNameContactsEmailAddressMutationOptions<
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

export function getV2EmailContactListsContactListNameQueryKey(
  args: InferRequestType<(typeof client.v2.email)['contact-lists'][':ContactListName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/contact-lists/:ContactListName', keyArgs] as const
}

export function getV2EmailContactListsContactListNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.email)['contact-lists'][':ContactListName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email)['contact-lists'][':ContactListName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.email)['contact-lists'][':ContactListName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EmailContactListsContactListNameQueryKey>
  >({
    queryKey: getV2EmailContactListsContactListNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.email['contact-lists'][':ContactListName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2EmailContactListsContactListName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.email)['contact-lists'][':ContactListName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email)['contact-lists'][':ContactListName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.email)['contact-lists'][':ContactListName']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailContactListsContactListNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2EmailContactListsContactListNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2EmailContactListsContactListName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.email)['contact-lists'][':ContactListName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email)['contact-lists'][':ContactListName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.email)['contact-lists'][':ContactListName']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailContactListsContactListNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2EmailContactListsContactListNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV2EmailContactListsContactListNameMutationKey() {
  return ['v2', '/v2/email/contact-lists/:ContactListName', 'PUT'] as const
}

export function getPutV2EmailContactListsContactListNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.email)['contact-lists'][':ContactListName']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.email)['contact-lists'][':ContactListName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2EmailContactListsContactListNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.email)['contact-lists'][':ContactListName']['$put']>,
    ) {
      return parseResponse(client.v2.email['contact-lists'][':ContactListName'].$put(args, options))
    },
  })
}

export function usePutV2EmailContactListsContactListName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.email)['contact-lists'][':ContactListName']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.email)['contact-lists'][':ContactListName']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2EmailContactListsContactListNameMutationOptions<
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

export function getDeleteV2EmailContactListsContactListNameMutationKey() {
  return ['v2', '/v2/email/contact-lists/:ContactListName', 'DELETE'] as const
}

export function getDeleteV2EmailContactListsContactListNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.email)['contact-lists'][':ContactListName']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.email)['contact-lists'][':ContactListName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2EmailContactListsContactListNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.email)['contact-lists'][':ContactListName']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.email['contact-lists'][':ContactListName'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2EmailContactListsContactListName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.email)['contact-lists'][':ContactListName']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.email)['contact-lists'][':ContactListName']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2EmailContactListsContactListNameMutationOptions<
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

export function getV2EmailCustomVerificationEmailTemplatesTemplateNameQueryKey(
  args: InferRequestType<
    (typeof client.v2.email)['custom-verification-email-templates'][':TemplateName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/custom-verification-email-templates/:TemplateName', keyArgs] as const
}

export function getV2EmailCustomVerificationEmailTemplatesTemplateNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.email)['custom-verification-email-templates'][':TemplateName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.email)['custom-verification-email-templates'][':TemplateName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.email)['custom-verification-email-templates'][':TemplateName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EmailCustomVerificationEmailTemplatesTemplateNameQueryKey>
  >({
    queryKey: getV2EmailCustomVerificationEmailTemplatesTemplateNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.email['custom-verification-email-templates'][':TemplateName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2EmailCustomVerificationEmailTemplatesTemplateName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.email)['custom-verification-email-templates'][':TemplateName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.email)['custom-verification-email-templates'][':TemplateName']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email)['custom-verification-email-templates'][':TemplateName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailCustomVerificationEmailTemplatesTemplateNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2EmailCustomVerificationEmailTemplatesTemplateNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2EmailCustomVerificationEmailTemplatesTemplateName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.email)['custom-verification-email-templates'][':TemplateName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.email)['custom-verification-email-templates'][':TemplateName']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email)['custom-verification-email-templates'][':TemplateName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailCustomVerificationEmailTemplatesTemplateNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2EmailCustomVerificationEmailTemplatesTemplateNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV2EmailCustomVerificationEmailTemplatesTemplateNameMutationKey() {
  return ['v2', '/v2/email/custom-verification-email-templates/:TemplateName', 'PUT'] as const
}

export function getPutV2EmailCustomVerificationEmailTemplatesTemplateNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.email)['custom-verification-email-templates'][':TemplateName']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.email)['custom-verification-email-templates'][':TemplateName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2EmailCustomVerificationEmailTemplatesTemplateNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.email)['custom-verification-email-templates'][':TemplateName']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.email['custom-verification-email-templates'][':TemplateName'].$put(args, options),
      )
    },
  })
}

export function usePutV2EmailCustomVerificationEmailTemplatesTemplateName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email)['custom-verification-email-templates'][':TemplateName']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.email)['custom-verification-email-templates'][':TemplateName']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2EmailCustomVerificationEmailTemplatesTemplateNameMutationOptions<
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

export function getDeleteV2EmailCustomVerificationEmailTemplatesTemplateNameMutationKey() {
  return ['v2', '/v2/email/custom-verification-email-templates/:TemplateName', 'DELETE'] as const
}

export function getDeleteV2EmailCustomVerificationEmailTemplatesTemplateNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.email)['custom-verification-email-templates'][':TemplateName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.email)['custom-verification-email-templates'][':TemplateName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2EmailCustomVerificationEmailTemplatesTemplateNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.email)['custom-verification-email-templates'][':TemplateName']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.email['custom-verification-email-templates'][':TemplateName'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV2EmailCustomVerificationEmailTemplatesTemplateName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email)['custom-verification-email-templates'][':TemplateName']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.email)['custom-verification-email-templates'][':TemplateName']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteV2EmailCustomVerificationEmailTemplatesTemplateNameMutationOptions<
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

export function getV2EmailDedicatedIpPoolsPoolNameQueryKey(
  args: InferRequestType<(typeof client.v2.email)['dedicated-ip-pools'][':PoolName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/dedicated-ip-pools/:PoolName', keyArgs] as const
}

export function getV2EmailDedicatedIpPoolsPoolNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.email)['dedicated-ip-pools'][':PoolName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email)['dedicated-ip-pools'][':PoolName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.email)['dedicated-ip-pools'][':PoolName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EmailDedicatedIpPoolsPoolNameQueryKey>
  >({
    queryKey: getV2EmailDedicatedIpPoolsPoolNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.email['dedicated-ip-pools'][':PoolName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2EmailDedicatedIpPoolsPoolName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.email)['dedicated-ip-pools'][':PoolName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email)['dedicated-ip-pools'][':PoolName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.email)['dedicated-ip-pools'][':PoolName']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailDedicatedIpPoolsPoolNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2EmailDedicatedIpPoolsPoolNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2EmailDedicatedIpPoolsPoolName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.email)['dedicated-ip-pools'][':PoolName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email)['dedicated-ip-pools'][':PoolName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.email)['dedicated-ip-pools'][':PoolName']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailDedicatedIpPoolsPoolNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2EmailDedicatedIpPoolsPoolNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV2EmailDedicatedIpPoolsPoolNameMutationKey() {
  return ['v2', '/v2/email/dedicated-ip-pools/:PoolName', 'DELETE'] as const
}

export function getDeleteV2EmailDedicatedIpPoolsPoolNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.email)['dedicated-ip-pools'][':PoolName']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.email)['dedicated-ip-pools'][':PoolName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2EmailDedicatedIpPoolsPoolNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.email)['dedicated-ip-pools'][':PoolName']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.email['dedicated-ip-pools'][':PoolName'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2EmailDedicatedIpPoolsPoolName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.email)['dedicated-ip-pools'][':PoolName']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.email)['dedicated-ip-pools'][':PoolName']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2EmailDedicatedIpPoolsPoolNameMutationOptions<
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

export function getV2EmailIdentitiesEmailIdentityQueryKey(
  args: InferRequestType<(typeof client.v2.email.identities)[':EmailIdentity']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/identities/:EmailIdentity', keyArgs] as const
}

export function getV2EmailIdentitiesEmailIdentityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.email.identities)[':EmailIdentity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email.identities)[':EmailIdentity']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.email.identities)[':EmailIdentity']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EmailIdentitiesEmailIdentityQueryKey>
  >({
    queryKey: getV2EmailIdentitiesEmailIdentityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.email.identities[':EmailIdentity'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2EmailIdentitiesEmailIdentity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.email.identities)[':EmailIdentity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email.identities)[':EmailIdentity']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.email.identities)[':EmailIdentity']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailIdentitiesEmailIdentityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2EmailIdentitiesEmailIdentityQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2EmailIdentitiesEmailIdentity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.email.identities)[':EmailIdentity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email.identities)[':EmailIdentity']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.email.identities)[':EmailIdentity']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailIdentitiesEmailIdentityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2EmailIdentitiesEmailIdentityQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV2EmailIdentitiesEmailIdentityMutationKey() {
  return ['v2', '/v2/email/identities/:EmailIdentity', 'DELETE'] as const
}

export function getDeleteV2EmailIdentitiesEmailIdentityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.email.identities)[':EmailIdentity']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.email.identities)[':EmailIdentity']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2EmailIdentitiesEmailIdentityMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.email.identities)[':EmailIdentity']['$delete']>,
    ) {
      return parseResponse(client.v2.email.identities[':EmailIdentity'].$delete(args, options))
    },
  })
}

export function useDeleteV2EmailIdentitiesEmailIdentity<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.email.identities)[':EmailIdentity']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.email.identities)[':EmailIdentity']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2EmailIdentitiesEmailIdentityMutationOptions<
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

export function getV2EmailTemplatesTemplateNameQueryKey(
  args: InferRequestType<(typeof client.v2.email.templates)[':TemplateName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/templates/:TemplateName', keyArgs] as const
}

export function getV2EmailTemplatesTemplateNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.email.templates)[':TemplateName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email.templates)[':TemplateName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.email.templates)[':TemplateName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EmailTemplatesTemplateNameQueryKey>
  >({
    queryKey: getV2EmailTemplatesTemplateNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.email.templates[':TemplateName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2EmailTemplatesTemplateName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.email.templates)[':TemplateName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email.templates)[':TemplateName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.email.templates)[':TemplateName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailTemplatesTemplateNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2EmailTemplatesTemplateNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2EmailTemplatesTemplateName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.email.templates)[':TemplateName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email.templates)[':TemplateName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.email.templates)[':TemplateName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailTemplatesTemplateNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2EmailTemplatesTemplateNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV2EmailTemplatesTemplateNameMutationKey() {
  return ['v2', '/v2/email/templates/:TemplateName', 'PUT'] as const
}

export function getPutV2EmailTemplatesTemplateNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.email.templates)[':TemplateName']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.email.templates)[':TemplateName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2EmailTemplatesTemplateNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.email.templates)[':TemplateName']['$put']>,
    ) {
      return parseResponse(client.v2.email.templates[':TemplateName'].$put(args, options))
    },
  })
}

export function usePutV2EmailTemplatesTemplateName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.email.templates)[':TemplateName']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.email.templates)[':TemplateName']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2EmailTemplatesTemplateNameMutationOptions<
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

export function getDeleteV2EmailTemplatesTemplateNameMutationKey() {
  return ['v2', '/v2/email/templates/:TemplateName', 'DELETE'] as const
}

export function getDeleteV2EmailTemplatesTemplateNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.email.templates)[':TemplateName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.email.templates)[':TemplateName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2EmailTemplatesTemplateNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.email.templates)[':TemplateName']['$delete']>,
    ) {
      return parseResponse(client.v2.email.templates[':TemplateName'].$delete(args, options))
    },
  })
}

export function useDeleteV2EmailTemplatesTemplateName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.email.templates)[':TemplateName']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.email.templates)[':TemplateName']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2EmailTemplatesTemplateNameMutationOptions<
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

export function getV2EmailSuppressionAddressesEmailAddressQueryKey(
  args: InferRequestType<(typeof client.v2.email.suppression.addresses)[':EmailAddress']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/suppression/addresses/:EmailAddress', keyArgs] as const
}

export function getV2EmailSuppressionAddressesEmailAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.email.suppression.addresses)[':EmailAddress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email.suppression.addresses)[':EmailAddress']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.email.suppression.addresses)[':EmailAddress']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EmailSuppressionAddressesEmailAddressQueryKey>
  >({
    queryKey: getV2EmailSuppressionAddressesEmailAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.email.suppression.addresses[':EmailAddress'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2EmailSuppressionAddressesEmailAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.email.suppression.addresses)[':EmailAddress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email.suppression.addresses)[':EmailAddress']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.email.suppression.addresses)[':EmailAddress']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailSuppressionAddressesEmailAddressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2EmailSuppressionAddressesEmailAddressQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2EmailSuppressionAddressesEmailAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.email.suppression.addresses)[':EmailAddress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email.suppression.addresses)[':EmailAddress']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.email.suppression.addresses)[':EmailAddress']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailSuppressionAddressesEmailAddressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2EmailSuppressionAddressesEmailAddressQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV2EmailSuppressionAddressesEmailAddressMutationKey() {
  return ['v2', '/v2/email/suppression/addresses/:EmailAddress', 'DELETE'] as const
}

export function getDeleteV2EmailSuppressionAddressesEmailAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.email.suppression.addresses)[':EmailAddress']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.email.suppression.addresses)[':EmailAddress']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2EmailSuppressionAddressesEmailAddressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.email.suppression.addresses)[':EmailAddress']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.email.suppression.addresses[':EmailAddress'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2EmailSuppressionAddressesEmailAddress<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email.suppression.addresses)[':EmailAddress']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.email.suppression.addresses)[':EmailAddress']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2EmailSuppressionAddressesEmailAddressMutationOptions<
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

export function getV2EmailAccountQueryKey(
  args: InferRequestType<typeof client.v2.email.account.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/account', keyArgs] as const
}

export function getV2EmailAccountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.account.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.email.account.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.account.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2EmailAccountQueryKey>
  >({
    queryKey: getV2EmailAccountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.email.account.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2EmailAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.account.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.email.account.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.account.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailAccountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2EmailAccountQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2EmailAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.account.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.email.account.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.account.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailAccountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2EmailAccountQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2EmailDeliverabilityDashboardBlacklistReportBlacklistItemNamesQueryKey(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['blacklist-report#BlacklistItemNames']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v2',
    '/v2/email/deliverability-dashboard/blacklist-report#BlacklistItemNames',
    keyArgs,
  ] as const
}

export function getV2EmailDeliverabilityDashboardBlacklistReportBlacklistItemNamesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.email)['deliverability-dashboard']['blacklist-report#BlacklistItemNames']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['blacklist-report#BlacklistItemNames']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.email)['deliverability-dashboard']['blacklist-report#BlacklistItemNames']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EmailDeliverabilityDashboardBlacklistReportBlacklistItemNamesQueryKey>
  >({
    queryKey: getV2EmailDeliverabilityDashboardBlacklistReportBlacklistItemNamesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.email['deliverability-dashboard']['blacklist-report#BlacklistItemNames'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useV2EmailDeliverabilityDashboardBlacklistReportBlacklistItemNames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.email)['deliverability-dashboard']['blacklist-report#BlacklistItemNames']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['blacklist-report#BlacklistItemNames']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email)['deliverability-dashboard']['blacklist-report#BlacklistItemNames']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV2EmailDeliverabilityDashboardBlacklistReportBlacklistItemNamesQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2EmailDeliverabilityDashboardBlacklistReportBlacklistItemNamesQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2EmailDeliverabilityDashboardBlacklistReportBlacklistItemNames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.email)['deliverability-dashboard']['blacklist-report#BlacklistItemNames']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['blacklist-report#BlacklistItemNames']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email)['deliverability-dashboard']['blacklist-report#BlacklistItemNames']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV2EmailDeliverabilityDashboardBlacklistReportBlacklistItemNamesQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2EmailDeliverabilityDashboardBlacklistReportBlacklistItemNamesQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2EmailDedicatedIpsIPQueryKey(
  args: InferRequestType<(typeof client.v2.email)['dedicated-ips'][':IP']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/dedicated-ips/:IP', keyArgs] as const
}

export function getV2EmailDedicatedIpsIPQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.email)['dedicated-ips'][':IP']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email)['dedicated-ips'][':IP']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.email)['dedicated-ips'][':IP']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EmailDedicatedIpsIPQueryKey>
  >({
    queryKey: getV2EmailDedicatedIpsIPQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.email['dedicated-ips'][':IP'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2EmailDedicatedIpsIP<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.email)['dedicated-ips'][':IP']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email)['dedicated-ips'][':IP']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.email)['dedicated-ips'][':IP']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailDedicatedIpsIPQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2EmailDedicatedIpsIPQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2EmailDedicatedIpsIP<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.email)['dedicated-ips'][':IP']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email)['dedicated-ips'][':IP']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.email)['dedicated-ips'][':IP']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailDedicatedIpsIPQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2EmailDedicatedIpsIPQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2EmailDedicatedIpsQueryKey(
  args: InferRequestType<(typeof client.v2.email)['dedicated-ips']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/dedicated-ips', keyArgs] as const
}

export function getV2EmailDedicatedIpsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.email)['dedicated-ips']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email)['dedicated-ips']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.email)['dedicated-ips']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EmailDedicatedIpsQueryKey>
  >({
    queryKey: getV2EmailDedicatedIpsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.email['dedicated-ips'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2EmailDedicatedIps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.email)['dedicated-ips']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email)['dedicated-ips']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.email)['dedicated-ips']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailDedicatedIpsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2EmailDedicatedIpsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2EmailDedicatedIps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.email)['dedicated-ips']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email)['dedicated-ips']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.email)['dedicated-ips']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailDedicatedIpsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2EmailDedicatedIpsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2EmailDeliverabilityDashboardQueryKey(
  args: InferRequestType<(typeof client.v2.email)['deliverability-dashboard']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/deliverability-dashboard', keyArgs] as const
}

export function getV2EmailDeliverabilityDashboardQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.email)['deliverability-dashboard']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email)['deliverability-dashboard']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.email)['deliverability-dashboard']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EmailDeliverabilityDashboardQueryKey>
  >({
    queryKey: getV2EmailDeliverabilityDashboardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.email['deliverability-dashboard'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2EmailDeliverabilityDashboard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.email)['deliverability-dashboard']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email)['deliverability-dashboard']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.email)['deliverability-dashboard']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailDeliverabilityDashboardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2EmailDeliverabilityDashboardQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2EmailDeliverabilityDashboard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.email)['deliverability-dashboard']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email)['deliverability-dashboard']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.email)['deliverability-dashboard']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailDeliverabilityDashboardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2EmailDeliverabilityDashboardQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV2EmailDeliverabilityDashboardMutationKey() {
  return ['v2', '/v2/email/deliverability-dashboard', 'PUT'] as const
}

export function getPutV2EmailDeliverabilityDashboardMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.email)['deliverability-dashboard']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.email)['deliverability-dashboard']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2EmailDeliverabilityDashboardMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.email)['deliverability-dashboard']['$put']>,
    ) {
      return parseResponse(client.v2.email['deliverability-dashboard'].$put(args, options))
    },
  })
}

export function usePutV2EmailDeliverabilityDashboard<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.email)['deliverability-dashboard']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.email)['deliverability-dashboard']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2EmailDeliverabilityDashboardMutationOptions<
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

export function getV2EmailDeliverabilityDashboardTestReportsReportIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['test-reports'][':ReportId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/deliverability-dashboard/test-reports/:ReportId', keyArgs] as const
}

export function getV2EmailDeliverabilityDashboardTestReportsReportIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.email)['deliverability-dashboard']['test-reports'][':ReportId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['test-reports'][':ReportId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.email)['deliverability-dashboard']['test-reports'][':ReportId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EmailDeliverabilityDashboardTestReportsReportIdQueryKey>
  >({
    queryKey: getV2EmailDeliverabilityDashboardTestReportsReportIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.email['deliverability-dashboard']['test-reports'][':ReportId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2EmailDeliverabilityDashboardTestReportsReportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.email)['deliverability-dashboard']['test-reports'][':ReportId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['test-reports'][':ReportId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email)['deliverability-dashboard']['test-reports'][':ReportId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailDeliverabilityDashboardTestReportsReportIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2EmailDeliverabilityDashboardTestReportsReportIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2EmailDeliverabilityDashboardTestReportsReportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.email)['deliverability-dashboard']['test-reports'][':ReportId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['test-reports'][':ReportId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email)['deliverability-dashboard']['test-reports'][':ReportId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailDeliverabilityDashboardTestReportsReportIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2EmailDeliverabilityDashboardTestReportsReportIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2EmailDeliverabilityDashboardCampaignsCampaignIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['campaigns'][':CampaignId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/deliverability-dashboard/campaigns/:CampaignId', keyArgs] as const
}

export function getV2EmailDeliverabilityDashboardCampaignsCampaignIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.email)['deliverability-dashboard']['campaigns'][':CampaignId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['campaigns'][':CampaignId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.email)['deliverability-dashboard']['campaigns'][':CampaignId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EmailDeliverabilityDashboardCampaignsCampaignIdQueryKey>
  >({
    queryKey: getV2EmailDeliverabilityDashboardCampaignsCampaignIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.email['deliverability-dashboard'].campaigns[':CampaignId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2EmailDeliverabilityDashboardCampaignsCampaignId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.email)['deliverability-dashboard']['campaigns'][':CampaignId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['campaigns'][':CampaignId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email)['deliverability-dashboard']['campaigns'][':CampaignId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailDeliverabilityDashboardCampaignsCampaignIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2EmailDeliverabilityDashboardCampaignsCampaignIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2EmailDeliverabilityDashboardCampaignsCampaignId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.email)['deliverability-dashboard']['campaigns'][':CampaignId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['campaigns'][':CampaignId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email)['deliverability-dashboard']['campaigns'][':CampaignId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailDeliverabilityDashboardCampaignsCampaignIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2EmailDeliverabilityDashboardCampaignsCampaignIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDateQueryKey(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['statistics-report'][':Domain#StartDate&EndDate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v2',
    '/v2/email/deliverability-dashboard/statistics-report/:Domain#StartDate&EndDate',
    keyArgs,
  ] as const
}

export function getV2EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.email)['deliverability-dashboard']['statistics-report'][':Domain#StartDate&EndDate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['statistics-report'][':Domain#StartDate&EndDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.email)['deliverability-dashboard']['statistics-report'][':Domain#StartDate&EndDate']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV2EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDateQueryKey
    >
  >({
    queryKey: getV2EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.email['deliverability-dashboard']['statistics-report'][
          ':Domain#StartDate&EndDate'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.email)['deliverability-dashboard']['statistics-report'][':Domain#StartDate&EndDate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['statistics-report'][':Domain#StartDate&EndDate']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email)['deliverability-dashboard']['statistics-report'][':Domain#StartDate&EndDate']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV2EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDateQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDateQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.email)['deliverability-dashboard']['statistics-report'][':Domain#StartDate&EndDate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['statistics-report'][':Domain#StartDate&EndDate']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email)['deliverability-dashboard']['statistics-report'][':Domain#StartDate&EndDate']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV2EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDateQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDateQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2EmailIdentitiesEmailIdentityPoliciesQueryKey(
  args: InferRequestType<(typeof client.v2.email.identities)[':EmailIdentity']['policies']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/identities/:EmailIdentity/policies', keyArgs] as const
}

export function getV2EmailIdentitiesEmailIdentityPoliciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.email.identities)[':EmailIdentity']['policies']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email.identities)[':EmailIdentity']['policies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.email.identities)[':EmailIdentity']['policies']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EmailIdentitiesEmailIdentityPoliciesQueryKey>
  >({
    queryKey: getV2EmailIdentitiesEmailIdentityPoliciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.email.identities[':EmailIdentity'].policies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2EmailIdentitiesEmailIdentityPolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.email.identities)[':EmailIdentity']['policies']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email.identities)[':EmailIdentity']['policies']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email.identities)[':EmailIdentity']['policies']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailIdentitiesEmailIdentityPoliciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2EmailIdentitiesEmailIdentityPoliciesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2EmailIdentitiesEmailIdentityPolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.email.identities)[':EmailIdentity']['policies']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email.identities)[':EmailIdentity']['policies']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email.identities)[':EmailIdentity']['policies']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailIdentitiesEmailIdentityPoliciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2EmailIdentitiesEmailIdentityPoliciesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2EmailImportJobsJobIdQueryKey(
  args: InferRequestType<(typeof client.v2.email)['import-jobs'][':JobId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/import-jobs/:JobId', keyArgs] as const
}

export function getV2EmailImportJobsJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.email)['import-jobs'][':JobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email)['import-jobs'][':JobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.email)['import-jobs'][':JobId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EmailImportJobsJobIdQueryKey>
  >({
    queryKey: getV2EmailImportJobsJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.email['import-jobs'][':JobId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2EmailImportJobsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.email)['import-jobs'][':JobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email)['import-jobs'][':JobId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.email)['import-jobs'][':JobId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailImportJobsJobIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2EmailImportJobsJobIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2EmailImportJobsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.email)['import-jobs'][':JobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email)['import-jobs'][':JobId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.email)['import-jobs'][':JobId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailImportJobsJobIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2EmailImportJobsJobIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2EmailDeliverabilityDashboardTestReportsQueryKey(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['test-reports']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/deliverability-dashboard/test-reports', keyArgs] as const
}

export function getV2EmailDeliverabilityDashboardTestReportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.email)['deliverability-dashboard']['test-reports']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['test-reports']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.email)['deliverability-dashboard']['test-reports']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EmailDeliverabilityDashboardTestReportsQueryKey>
  >({
    queryKey: getV2EmailDeliverabilityDashboardTestReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.email['deliverability-dashboard']['test-reports'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2EmailDeliverabilityDashboardTestReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.email)['deliverability-dashboard']['test-reports']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['test-reports']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email)['deliverability-dashboard']['test-reports']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailDeliverabilityDashboardTestReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2EmailDeliverabilityDashboardTestReportsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2EmailDeliverabilityDashboardTestReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.email)['deliverability-dashboard']['test-reports']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['test-reports']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email)['deliverability-dashboard']['test-reports']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailDeliverabilityDashboardTestReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2EmailDeliverabilityDashboardTestReportsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDateQueryKey(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['domains'][':SubscribedDomain']['campaigns#StartDate&EndDate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v2',
    '/v2/email/deliverability-dashboard/domains/:SubscribedDomain/campaigns#StartDate&EndDate',
    keyArgs,
  ] as const
}

export function getV2EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.email)['deliverability-dashboard']['domains'][':SubscribedDomain']['campaigns#StartDate&EndDate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['domains'][':SubscribedDomain']['campaigns#StartDate&EndDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.email)['deliverability-dashboard']['domains'][':SubscribedDomain']['campaigns#StartDate&EndDate']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV2EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDateQueryKey
    >
  >({
    queryKey:
      getV2EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDateQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.email['deliverability-dashboard'].domains[':SubscribedDomain'][
          'campaigns#StartDate&EndDate'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.email)['deliverability-dashboard']['domains'][':SubscribedDomain']['campaigns#StartDate&EndDate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['domains'][':SubscribedDomain']['campaigns#StartDate&EndDate']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email)['deliverability-dashboard']['domains'][':SubscribedDomain']['campaigns#StartDate&EndDate']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV2EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDateQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDateQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.email)['deliverability-dashboard']['domains'][':SubscribedDomain']['campaigns#StartDate&EndDate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['domains'][':SubscribedDomain']['campaigns#StartDate&EndDate']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email)['deliverability-dashboard']['domains'][':SubscribedDomain']['campaigns#StartDate&EndDate']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV2EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDateQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDateQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2EmailVdmRecommendationsMutationKey() {
  return ['v2', '/v2/email/vdm/recommendations', 'POST'] as const
}

export function getPostV2EmailVdmRecommendationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.vdm.recommendations.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.email.vdm.recommendations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EmailVdmRecommendationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.email.vdm.recommendations.$post>) {
      return parseResponse(client.v2.email.vdm.recommendations.$post(args, options))
    },
  })
}

export function usePostV2EmailVdmRecommendations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.email.vdm.recommendations.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v2.email.vdm.recommendations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2EmailVdmRecommendationsMutationOptions<TError, TOnMutateResult>(
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

export function getV2EmailSuppressionAddressesQueryKey(
  args: InferRequestType<typeof client.v2.email.suppression.addresses.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/suppression/addresses', keyArgs] as const
}

export function getV2EmailSuppressionAddressesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.suppression.addresses.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.email.suppression.addresses.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.suppression.addresses.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EmailSuppressionAddressesQueryKey>
  >({
    queryKey: getV2EmailSuppressionAddressesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.email.suppression.addresses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2EmailSuppressionAddresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.suppression.addresses.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.email.suppression.addresses.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.email.suppression.addresses.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailSuppressionAddressesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2EmailSuppressionAddressesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2EmailSuppressionAddresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.suppression.addresses.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.email.suppression.addresses.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.email.suppression.addresses.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailSuppressionAddressesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2EmailSuppressionAddressesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV2EmailSuppressionAddressesMutationKey() {
  return ['v2', '/v2/email/suppression/addresses', 'PUT'] as const
}

export function getPutV2EmailSuppressionAddressesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.suppression.addresses.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.email.suppression.addresses.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV2EmailSuppressionAddressesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.email.suppression.addresses.$put>) {
      return parseResponse(client.v2.email.suppression.addresses.$put(args, options))
    },
  })
}

export function usePutV2EmailSuppressionAddresses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.email.suppression.addresses.$put>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v2.email.suppression.addresses.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2EmailSuppressionAddressesMutationOptions<
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

export function getV2EmailTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.v2.email)['tags#ResourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/tags#ResourceArn', keyArgs] as const
}

export function getV2EmailTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.email)['tags#ResourceArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email)['tags#ResourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.email)['tags#ResourceArn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EmailTagsResourceArnQueryKey>
  >({
    queryKey: getV2EmailTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.email['tags#ResourceArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2EmailTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.email)['tags#ResourceArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email)['tags#ResourceArn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.email)['tags#ResourceArn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2EmailTagsResourceArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2EmailTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.email)['tags#ResourceArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.email)['tags#ResourceArn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.email)['tags#ResourceArn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EmailTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2EmailTagsResourceArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV2EmailAccountDedicatedIpsWarmupMutationKey() {
  return ['v2', '/v2/email/account/dedicated-ips/warmup', 'PUT'] as const
}

export function getPutV2EmailAccountDedicatedIpsWarmupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.email.account)['dedicated-ips']['warmup']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.email.account)['dedicated-ips']['warmup']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2EmailAccountDedicatedIpsWarmupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.email.account)['dedicated-ips']['warmup']['$put']>,
    ) {
      return parseResponse(client.v2.email.account['dedicated-ips'].warmup.$put(args, options))
    },
  })
}

export function usePutV2EmailAccountDedicatedIpsWarmup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.email.account)['dedicated-ips']['warmup']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.email.account)['dedicated-ips']['warmup']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2EmailAccountDedicatedIpsWarmupMutationOptions<
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

export function getPostV2EmailAccountDetailsMutationKey() {
  return ['v2', '/v2/email/account/details', 'POST'] as const
}

export function getPostV2EmailAccountDetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.account.details.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.email.account.details.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EmailAccountDetailsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.email.account.details.$post>) {
      return parseResponse(client.v2.email.account.details.$post(args, options))
    },
  })
}

export function usePostV2EmailAccountDetails<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.account.details.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.email.account.details.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2EmailAccountDetailsMutationOptions<TError, TOnMutateResult>(
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

export function getPutV2EmailAccountSendingMutationKey() {
  return ['v2', '/v2/email/account/sending', 'PUT'] as const
}

export function getPutV2EmailAccountSendingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.account.sending.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.email.account.sending.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV2EmailAccountSendingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.email.account.sending.$put>) {
      return parseResponse(client.v2.email.account.sending.$put(args, options))
    },
  })
}

export function usePutV2EmailAccountSending<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.account.sending.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.email.account.sending.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2EmailAccountSendingMutationOptions<TError, TOnMutateResult>(
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

export function getPutV2EmailAccountSuppressionMutationKey() {
  return ['v2', '/v2/email/account/suppression', 'PUT'] as const
}

export function getPutV2EmailAccountSuppressionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.account.suppression.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.email.account.suppression.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV2EmailAccountSuppressionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.email.account.suppression.$put>) {
      return parseResponse(client.v2.email.account.suppression.$put(args, options))
    },
  })
}

export function usePutV2EmailAccountSuppression<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.email.account.suppression.$put>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v2.email.account.suppression.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2EmailAccountSuppressionMutationOptions<TError, TOnMutateResult>(
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

export function getPutV2EmailAccountVdmMutationKey() {
  return ['v2', '/v2/email/account/vdm', 'PUT'] as const
}

export function getPutV2EmailAccountVdmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.account.vdm.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.email.account.vdm.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV2EmailAccountVdmMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.email.account.vdm.$put>) {
      return parseResponse(client.v2.email.account.vdm.$put(args, options))
    },
  })
}

export function usePutV2EmailAccountVdm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.account.vdm.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.email.account.vdm.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2EmailAccountVdmMutationOptions<TError, TOnMutateResult>(
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

export function getPutV2EmailConfigurationSetsConfigurationSetNameDeliveryOptionsMutationKey() {
  return [
    'v2',
    '/v2/email/configuration-sets/:ConfigurationSetName/delivery-options',
    'PUT',
  ] as const
}

export function getPutV2EmailConfigurationSetsConfigurationSetNameDeliveryOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['delivery-options']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['delivery-options']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2EmailConfigurationSetsConfigurationSetNameDeliveryOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['delivery-options']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.email['configuration-sets'][':ConfigurationSetName']['delivery-options'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV2EmailConfigurationSetsConfigurationSetNameDeliveryOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['delivery-options']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['delivery-options']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutV2EmailConfigurationSetsConfigurationSetNameDeliveryOptionsMutationOptions<
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

export function getPutV2EmailConfigurationSetsConfigurationSetNameReputationOptionsMutationKey() {
  return [
    'v2',
    '/v2/email/configuration-sets/:ConfigurationSetName/reputation-options',
    'PUT',
  ] as const
}

export function getPutV2EmailConfigurationSetsConfigurationSetNameReputationOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['reputation-options']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['reputation-options']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2EmailConfigurationSetsConfigurationSetNameReputationOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['reputation-options']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.email['configuration-sets'][':ConfigurationSetName']['reputation-options'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV2EmailConfigurationSetsConfigurationSetNameReputationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['reputation-options']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['reputation-options']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutV2EmailConfigurationSetsConfigurationSetNameReputationOptionsMutationOptions<
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

export function getPutV2EmailConfigurationSetsConfigurationSetNameSendingMutationKey() {
  return ['v2', '/v2/email/configuration-sets/:ConfigurationSetName/sending', 'PUT'] as const
}

export function getPutV2EmailConfigurationSetsConfigurationSetNameSendingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['sending']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['sending']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2EmailConfigurationSetsConfigurationSetNameSendingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['sending']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.email['configuration-sets'][':ConfigurationSetName'].sending.$put(args, options),
      )
    },
  })
}

export function usePutV2EmailConfigurationSetsConfigurationSetNameSending<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['sending']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['sending']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2EmailConfigurationSetsConfigurationSetNameSendingMutationOptions<
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

export function getPutV2EmailConfigurationSetsConfigurationSetNameSuppressionOptionsMutationKey() {
  return [
    'v2',
    '/v2/email/configuration-sets/:ConfigurationSetName/suppression-options',
    'PUT',
  ] as const
}

export function getPutV2EmailConfigurationSetsConfigurationSetNameSuppressionOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['suppression-options']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['suppression-options']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2EmailConfigurationSetsConfigurationSetNameSuppressionOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['suppression-options']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.email['configuration-sets'][':ConfigurationSetName']['suppression-options'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV2EmailConfigurationSetsConfigurationSetNameSuppressionOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['suppression-options']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['suppression-options']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutV2EmailConfigurationSetsConfigurationSetNameSuppressionOptionsMutationOptions<
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

export function getPutV2EmailConfigurationSetsConfigurationSetNameTrackingOptionsMutationKey() {
  return [
    'v2',
    '/v2/email/configuration-sets/:ConfigurationSetName/tracking-options',
    'PUT',
  ] as const
}

export function getPutV2EmailConfigurationSetsConfigurationSetNameTrackingOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['tracking-options']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['tracking-options']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2EmailConfigurationSetsConfigurationSetNameTrackingOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['tracking-options']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.email['configuration-sets'][':ConfigurationSetName']['tracking-options'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV2EmailConfigurationSetsConfigurationSetNameTrackingOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['tracking-options']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['tracking-options']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutV2EmailConfigurationSetsConfigurationSetNameTrackingOptionsMutationOptions<
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

export function getPutV2EmailConfigurationSetsConfigurationSetNameVdmOptionsMutationKey() {
  return ['v2', '/v2/email/configuration-sets/:ConfigurationSetName/vdm-options', 'PUT'] as const
}

export function getPutV2EmailConfigurationSetsConfigurationSetNameVdmOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['vdm-options']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['vdm-options']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2EmailConfigurationSetsConfigurationSetNameVdmOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['vdm-options']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.email['configuration-sets'][':ConfigurationSetName']['vdm-options'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV2EmailConfigurationSetsConfigurationSetNameVdmOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['vdm-options']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['vdm-options']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutV2EmailConfigurationSetsConfigurationSetNameVdmOptionsMutationOptions<
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

export function getPutV2EmailDedicatedIpsIPPoolMutationKey() {
  return ['v2', '/v2/email/dedicated-ips/:IP/pool', 'PUT'] as const
}

export function getPutV2EmailDedicatedIpsIPPoolMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.email)['dedicated-ips'][':IP']['pool']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.email)['dedicated-ips'][':IP']['pool']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2EmailDedicatedIpsIPPoolMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.email)['dedicated-ips'][':IP']['pool']['$put']>,
    ) {
      return parseResponse(client.v2.email['dedicated-ips'][':IP'].pool.$put(args, options))
    },
  })
}

export function usePutV2EmailDedicatedIpsIPPool<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.email)['dedicated-ips'][':IP']['pool']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.email)['dedicated-ips'][':IP']['pool']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2EmailDedicatedIpsIPPoolMutationOptions<TError, TOnMutateResult>(
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

export function getPutV2EmailDedicatedIpPoolsPoolNameScalingMutationKey() {
  return ['v2', '/v2/email/dedicated-ip-pools/:PoolName/scaling', 'PUT'] as const
}

export function getPutV2EmailDedicatedIpPoolsPoolNameScalingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.email)['dedicated-ip-pools'][':PoolName']['scaling']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.email)['dedicated-ip-pools'][':PoolName']['scaling']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2EmailDedicatedIpPoolsPoolNameScalingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.email)['dedicated-ip-pools'][':PoolName']['scaling']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.email['dedicated-ip-pools'][':PoolName'].scaling.$put(args, options),
      )
    },
  })
}

export function usePutV2EmailDedicatedIpPoolsPoolNameScaling<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email)['dedicated-ip-pools'][':PoolName']['scaling']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.email)['dedicated-ip-pools'][':PoolName']['scaling']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2EmailDedicatedIpPoolsPoolNameScalingMutationOptions<
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

export function getPutV2EmailDedicatedIpsIPWarmupMutationKey() {
  return ['v2', '/v2/email/dedicated-ips/:IP/warmup', 'PUT'] as const
}

export function getPutV2EmailDedicatedIpsIPWarmupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.email)['dedicated-ips'][':IP']['warmup']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.email)['dedicated-ips'][':IP']['warmup']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2EmailDedicatedIpsIPWarmupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.email)['dedicated-ips'][':IP']['warmup']['$put']>,
    ) {
      return parseResponse(client.v2.email['dedicated-ips'][':IP'].warmup.$put(args, options))
    },
  })
}

export function usePutV2EmailDedicatedIpsIPWarmup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.email)['dedicated-ips'][':IP']['warmup']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.email)['dedicated-ips'][':IP']['warmup']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2EmailDedicatedIpsIPWarmupMutationOptions<
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

export function getPutV2EmailIdentitiesEmailIdentityConfigurationSetMutationKey() {
  return ['v2', '/v2/email/identities/:EmailIdentity/configuration-set', 'PUT'] as const
}

export function getPutV2EmailIdentitiesEmailIdentityConfigurationSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.email.identities)[':EmailIdentity']['configuration-set']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.email.identities)[':EmailIdentity']['configuration-set']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2EmailIdentitiesEmailIdentityConfigurationSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.email.identities)[':EmailIdentity']['configuration-set']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.email.identities[':EmailIdentity']['configuration-set'].$put(args, options),
      )
    },
  })
}

export function usePutV2EmailIdentitiesEmailIdentityConfigurationSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email.identities)[':EmailIdentity']['configuration-set']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.email.identities)[':EmailIdentity']['configuration-set']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2EmailIdentitiesEmailIdentityConfigurationSetMutationOptions<
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

export function getPutV2EmailIdentitiesEmailIdentityDkimMutationKey() {
  return ['v2', '/v2/email/identities/:EmailIdentity/dkim', 'PUT'] as const
}

export function getPutV2EmailIdentitiesEmailIdentityDkimMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.email.identities)[':EmailIdentity']['dkim']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.email.identities)[':EmailIdentity']['dkim']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2EmailIdentitiesEmailIdentityDkimMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.email.identities)[':EmailIdentity']['dkim']['$put']>,
    ) {
      return parseResponse(client.v2.email.identities[':EmailIdentity'].dkim.$put(args, options))
    },
  })
}

export function usePutV2EmailIdentitiesEmailIdentityDkim<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.email.identities)[':EmailIdentity']['dkim']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.email.identities)[':EmailIdentity']['dkim']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2EmailIdentitiesEmailIdentityDkimMutationOptions<
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

export function getPutV1EmailIdentitiesEmailIdentityDkimSigningMutationKey() {
  return ['v1', '/v1/email/identities/:EmailIdentity/dkim/signing', 'PUT'] as const
}

export function getPutV1EmailIdentitiesEmailIdentityDkimSigningMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.email.identities)[':EmailIdentity']['dkim']['signing']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.email.identities)[':EmailIdentity']['dkim']['signing']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1EmailIdentitiesEmailIdentityDkimSigningMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.email.identities)[':EmailIdentity']['dkim']['signing']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.email.identities[':EmailIdentity'].dkim.signing.$put(args, options),
      )
    },
  })
}

export function usePutV1EmailIdentitiesEmailIdentityDkimSigning<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.email.identities)[':EmailIdentity']['dkim']['signing']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.email.identities)[':EmailIdentity']['dkim']['signing']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1EmailIdentitiesEmailIdentityDkimSigningMutationOptions<
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

export function getPutV2EmailIdentitiesEmailIdentityFeedbackMutationKey() {
  return ['v2', '/v2/email/identities/:EmailIdentity/feedback', 'PUT'] as const
}

export function getPutV2EmailIdentitiesEmailIdentityFeedbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.email.identities)[':EmailIdentity']['feedback']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.email.identities)[':EmailIdentity']['feedback']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2EmailIdentitiesEmailIdentityFeedbackMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.email.identities)[':EmailIdentity']['feedback']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.email.identities[':EmailIdentity'].feedback.$put(args, options),
      )
    },
  })
}

export function usePutV2EmailIdentitiesEmailIdentityFeedback<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email.identities)[':EmailIdentity']['feedback']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.email.identities)[':EmailIdentity']['feedback']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2EmailIdentitiesEmailIdentityFeedbackMutationOptions<
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

export function getPutV2EmailIdentitiesEmailIdentityMailFromMutationKey() {
  return ['v2', '/v2/email/identities/:EmailIdentity/mail-from', 'PUT'] as const
}

export function getPutV2EmailIdentitiesEmailIdentityMailFromMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.email.identities)[':EmailIdentity']['mail-from']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.email.identities)[':EmailIdentity']['mail-from']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2EmailIdentitiesEmailIdentityMailFromMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.email.identities)[':EmailIdentity']['mail-from']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.email.identities[':EmailIdentity']['mail-from'].$put(args, options),
      )
    },
  })
}

export function usePutV2EmailIdentitiesEmailIdentityMailFrom<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.email.identities)[':EmailIdentity']['mail-from']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.email.identities)[':EmailIdentity']['mail-from']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2EmailIdentitiesEmailIdentityMailFromMutationOptions<
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

export function getPostV2EmailOutboundBulkEmailsMutationKey() {
  return ['v2', '/v2/email/outbound-bulk-emails', 'POST'] as const
}

export function getPostV2EmailOutboundBulkEmailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.email)['outbound-bulk-emails']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.email)['outbound-bulk-emails']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EmailOutboundBulkEmailsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.email)['outbound-bulk-emails']['$post']>,
    ) {
      return parseResponse(client.v2.email['outbound-bulk-emails'].$post(args, options))
    },
  })
}

export function usePostV2EmailOutboundBulkEmails<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.email)['outbound-bulk-emails']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.email)['outbound-bulk-emails']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2EmailOutboundBulkEmailsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2EmailOutboundCustomVerificationEmailsMutationKey() {
  return ['v2', '/v2/email/outbound-custom-verification-emails', 'POST'] as const
}

export function getPostV2EmailOutboundCustomVerificationEmailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.email)['outbound-custom-verification-emails']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.email)['outbound-custom-verification-emails']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EmailOutboundCustomVerificationEmailsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.email)['outbound-custom-verification-emails']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.email['outbound-custom-verification-emails'].$post(args, options),
      )
    },
  })
}

export function usePostV2EmailOutboundCustomVerificationEmails<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.email)['outbound-custom-verification-emails']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.email)['outbound-custom-verification-emails']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2EmailOutboundCustomVerificationEmailsMutationOptions<
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

export function getPostV2EmailOutboundEmailsMutationKey() {
  return ['v2', '/v2/email/outbound-emails', 'POST'] as const
}

export function getPostV2EmailOutboundEmailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.email)['outbound-emails']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.email)['outbound-emails']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EmailOutboundEmailsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.email)['outbound-emails']['$post']>) {
      return parseResponse(client.v2.email['outbound-emails'].$post(args, options))
    },
  })
}

export function usePostV2EmailOutboundEmails<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.email)['outbound-emails']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.email)['outbound-emails']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2EmailOutboundEmailsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2EmailTagsMutationKey() {
  return ['v2', '/v2/email/tags', 'POST'] as const
}

export function getPostV2EmailTagsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.tags.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.email.tags.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EmailTagsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.email.tags.$post>) {
      return parseResponse(client.v2.email.tags.$post(args, options))
    },
  })
}

export function usePostV2EmailTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.tags.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.email.tags.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2EmailTagsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV2EmailTemplatesTemplateNameRenderMutationKey() {
  return ['v2', '/v2/email/templates/:TemplateName/render', 'POST'] as const
}

export function getPostV2EmailTemplatesTemplateNameRenderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.email.templates)[':TemplateName']['render']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.email.templates)[':TemplateName']['render']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EmailTemplatesTemplateNameRenderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.email.templates)[':TemplateName']['render']['$post']
      >,
    ) {
      return parseResponse(client.v2.email.templates[':TemplateName'].render.$post(args, options))
    },
  })
}

export function usePostV2EmailTemplatesTemplateNameRender<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.email.templates)[':TemplateName']['render']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.email.templates)[':TemplateName']['render']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2EmailTemplatesTemplateNameRenderMutationOptions<
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

export function getDeleteV2EmailTagsResourceArnTagKeysMutationKey() {
  return ['v2', '/v2/email/tags#ResourceArn&TagKeys', 'DELETE'] as const
}

export function getDeleteV2EmailTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.email)['tags#ResourceArn&TagKeys']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.email)['tags#ResourceArn&TagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2EmailTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.email)['tags#ResourceArn&TagKeys']['$delete']>,
    ) {
      return parseResponse(client.v2.email['tags#ResourceArn&TagKeys'].$delete(args, options))
    },
  })
}

export function useDeleteV2EmailTagsResourceArnTagKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.email)['tags#ResourceArn&TagKeys']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.email)['tags#ResourceArn&TagKeys']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2EmailTagsResourceArnTagKeysMutationOptions<
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
