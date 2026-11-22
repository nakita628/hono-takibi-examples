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

export function getApiKeysKey() {
  return ['api-keys'] as const
}

export function getAudiencesKey() {
  return ['audiences'] as const
}

export function getAutomationsKey() {
  return ['automations'] as const
}

export function getBroadcastsKey() {
  return ['broadcasts'] as const
}

export function getContactPropertiesKey() {
  return ['contact-properties'] as const
}

export function getContactsKey() {
  return ['contacts'] as const
}

export function getDomainsKey() {
  return ['domains'] as const
}

export function getEmailsKey() {
  return ['emails'] as const
}

export function getEventsKey() {
  return ['events'] as const
}

export function getInboxesKey() {
  return ['inboxes'] as const
}

export function getLogsKey() {
  return ['logs'] as const
}

export function getOauthKey() {
  return ['oauth'] as const
}

export function getSegmentsKey() {
  return ['segments'] as const
}

export function getSuppressionsKey() {
  return ['suppressions'] as const
}

export function getTemplatesKey() {
  return ['templates'] as const
}

export function getTopicsKey() {
  return ['topics'] as const
}

export function getUsageKey() {
  return ['usage'] as const
}

export function getWebhooksKey() {
  return ['webhooks'] as const
}

export function getEmailsQueryKey(args: InferRequestType<typeof client.emails.$get>) {
  return ['emails', '/emails', args] as const
}

export function getEmailsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.emails.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEmailsQueryKey>
  >({
    queryKey: getEmailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.emails.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEmails<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.emails.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEmailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEmailsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEmails<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.emails.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEmailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEmailsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostEmailsMutationKey() {
  return ['emails', '/emails', 'POST'] as const
}

export function getPostEmailsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$post>>>>>,
    TError,
    InferRequestType<typeof client.emails.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEmailsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.emails.$post>) {
      return parseResponse(client.emails.$post(args, options))
    },
  })
}

export function usePostEmails<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$post>>>>>,
        TError,
        InferRequestType<typeof client.emails.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEmailsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getEmailsEmailIdQueryKey(
  args: InferRequestType<(typeof client.emails)[':email_id']['$get']>,
) {
  return ['emails', '/emails/:email_id', args] as const
}

export function getEmailsEmailIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':email_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.emails)[':email_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':email_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmailsEmailIdQueryKey>
  >({
    queryKey: getEmailsEmailIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.emails[':email_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEmailsEmailId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':email_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.emails)[':email_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':email_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmailsEmailIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEmailsEmailIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEmailsEmailId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':email_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.emails)[':email_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':email_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmailsEmailIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEmailsEmailIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatchEmailsEmailIdMutationKey() {
  return ['emails', '/emails/:email_id', 'PATCH'] as const
}

export function getPatchEmailsEmailIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':email_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.emails)[':email_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchEmailsEmailIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.emails)[':email_id']['$patch']>) {
      return parseResponse(client.emails[':email_id'].$patch(args, options))
    },
  })
}

export function usePatchEmailsEmailId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':email_id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.emails)[':email_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchEmailsEmailIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostEmailsEmailIdCancelMutationKey() {
  return ['emails', '/emails/:email_id/cancel', 'POST'] as const
}

export function getPostEmailsEmailIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.emails)[':email_id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.emails)[':email_id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEmailsEmailIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.emails)[':email_id']['cancel']['$post']>,
    ) {
      return parseResponse(client.emails[':email_id'].cancel.$post(args, options))
    },
  })
}

export function usePostEmailsEmailIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.emails)[':email_id']['cancel']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.emails)[':email_id']['cancel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEmailsEmailIdCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPostEmailsEmailIdShareMutationKey() {
  return ['emails', '/emails/:email_id/share', 'POST'] as const
}

export function getPostEmailsEmailIdShareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.emails)[':email_id']['share']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.emails)[':email_id']['share']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEmailsEmailIdShareMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.emails)[':email_id']['share']['$post']>,
    ) {
      return parseResponse(client.emails[':email_id'].share.$post(args, options))
    },
  })
}

export function usePostEmailsEmailIdShare<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.emails)[':email_id']['share']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.emails)[':email_id']['share']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEmailsEmailIdShareMutationOptions<TError, TOnMutateResult>(
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

export function getPostEmailsBatchMutationKey() {
  return ['emails', '/emails/batch', 'POST'] as const
}

export function getPostEmailsBatchMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.batch.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.emails.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEmailsBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.emails.batch.$post>) {
      return parseResponse(client.emails.batch.$post(args, options))
    },
  })
}

export function usePostEmailsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.batch.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.emails.batch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEmailsBatchMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getEmailsEmailIdAttachmentsQueryKey(
  args: InferRequestType<(typeof client.emails)[':email_id']['attachments']['$get']>,
) {
  return ['emails', '/emails/:email_id/attachments', args] as const
}

export function getEmailsEmailIdAttachmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.emails)[':email_id']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.emails)[':email_id']['attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.emails)[':email_id']['attachments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmailsEmailIdAttachmentsQueryKey>
  >({
    queryKey: getEmailsEmailIdAttachmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.emails[':email_id'].attachments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEmailsEmailIdAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.emails)[':email_id']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.emails)[':email_id']['attachments']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.emails)[':email_id']['attachments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmailsEmailIdAttachmentsQueryKey>
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
      ...getEmailsEmailIdAttachmentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEmailsEmailIdAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.emails)[':email_id']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.emails)[':email_id']['attachments']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.emails)[':email_id']['attachments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmailsEmailIdAttachmentsQueryKey>
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
      ...getEmailsEmailIdAttachmentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEmailsEmailIdAttachmentsAttachmentIdQueryKey(
  args: InferRequestType<
    (typeof client.emails)[':email_id']['attachments'][':attachment_id']['$get']
  >,
) {
  return ['emails', '/emails/:email_id/attachments/:attachment_id', args] as const
}

export function getEmailsEmailIdAttachmentsAttachmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.emails)[':email_id']['attachments'][':attachment_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.emails)[':email_id']['attachments'][':attachment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.emails)[':email_id']['attachments'][':attachment_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmailsEmailIdAttachmentsAttachmentIdQueryKey>
  >({
    queryKey: getEmailsEmailIdAttachmentsAttachmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.emails[':email_id'].attachments[':attachment_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEmailsEmailIdAttachmentsAttachmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.emails)[':email_id']['attachments'][':attachment_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.emails)[':email_id']['attachments'][':attachment_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.emails)[':email_id']['attachments'][':attachment_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmailsEmailIdAttachmentsAttachmentIdQueryKey>
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
      ...getEmailsEmailIdAttachmentsAttachmentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEmailsEmailIdAttachmentsAttachmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.emails)[':email_id']['attachments'][':attachment_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.emails)[':email_id']['attachments'][':attachment_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.emails)[':email_id']['attachments'][':attachment_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmailsEmailIdAttachmentsAttachmentIdQueryKey>
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
      ...getEmailsEmailIdAttachmentsAttachmentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEmailsReceivingQueryKey(
  args: InferRequestType<typeof client.emails.receiving.$get>,
) {
  return ['emails', '/emails/receiving', args] as const
}

export function getEmailsReceivingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.receiving.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.emails.receiving.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.receiving.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEmailsReceivingQueryKey>
  >({
    queryKey: getEmailsReceivingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.emails.receiving.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEmailsReceiving<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.receiving.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.emails.receiving.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.receiving.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEmailsReceivingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEmailsReceivingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEmailsReceiving<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.receiving.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.emails.receiving.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.receiving.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEmailsReceivingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEmailsReceivingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEmailsReceivingEmailIdQueryKey(
  args: InferRequestType<(typeof client.emails.receiving)[':email_id']['$get']>,
) {
  return ['emails', '/emails/receiving/:email_id', args] as const
}

export function getEmailsReceivingEmailIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.emails.receiving)[':email_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.emails.receiving)[':email_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.emails.receiving)[':email_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmailsReceivingEmailIdQueryKey>
  >({
    queryKey: getEmailsReceivingEmailIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.emails.receiving[':email_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEmailsReceivingEmailId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.emails.receiving)[':email_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.emails.receiving)[':email_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.emails.receiving)[':email_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmailsReceivingEmailIdQueryKey>
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
      ...getEmailsReceivingEmailIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEmailsReceivingEmailId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.emails.receiving)[':email_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.emails.receiving)[':email_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.emails.receiving)[':email_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmailsReceivingEmailIdQueryKey>
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
      ...getEmailsReceivingEmailIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEmailsReceivingEmailIdAttachmentsQueryKey(
  args: InferRequestType<(typeof client.emails.receiving)[':email_id']['attachments']['$get']>,
) {
  return ['emails', '/emails/receiving/:email_id/attachments', args] as const
}

export function getEmailsReceivingEmailIdAttachmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.emails.receiving)[':email_id']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.emails.receiving)[':email_id']['attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.emails.receiving)[':email_id']['attachments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmailsReceivingEmailIdAttachmentsQueryKey>
  >({
    queryKey: getEmailsReceivingEmailIdAttachmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.emails.receiving[':email_id'].attachments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEmailsReceivingEmailIdAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.emails.receiving)[':email_id']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.emails.receiving)[':email_id']['attachments']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.emails.receiving)[':email_id']['attachments']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmailsReceivingEmailIdAttachmentsQueryKey>
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
      ...getEmailsReceivingEmailIdAttachmentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEmailsReceivingEmailIdAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.emails.receiving)[':email_id']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.emails.receiving)[':email_id']['attachments']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.emails.receiving)[':email_id']['attachments']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmailsReceivingEmailIdAttachmentsQueryKey>
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
      ...getEmailsReceivingEmailIdAttachmentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEmailsReceivingEmailIdAttachmentsAttachmentIdQueryKey(
  args: InferRequestType<
    (typeof client.emails.receiving)[':email_id']['attachments'][':attachment_id']['$get']
  >,
) {
  return ['emails', '/emails/receiving/:email_id/attachments/:attachment_id', args] as const
}

export function getEmailsReceivingEmailIdAttachmentsAttachmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.emails.receiving)[':email_id']['attachments'][':attachment_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.emails.receiving)[':email_id']['attachments'][':attachment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.emails.receiving)[':email_id']['attachments'][':attachment_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmailsReceivingEmailIdAttachmentsAttachmentIdQueryKey>
  >({
    queryKey: getEmailsReceivingEmailIdAttachmentsAttachmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.emails.receiving[':email_id'].attachments[':attachment_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEmailsReceivingEmailIdAttachmentsAttachmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.emails.receiving)[':email_id']['attachments'][':attachment_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.emails.receiving)[':email_id']['attachments'][':attachment_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.emails.receiving)[':email_id']['attachments'][':attachment_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmailsReceivingEmailIdAttachmentsAttachmentIdQueryKey>
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
      ...getEmailsReceivingEmailIdAttachmentsAttachmentIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEmailsReceivingEmailIdAttachmentsAttachmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.emails.receiving)[':email_id']['attachments'][':attachment_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.emails.receiving)[':email_id']['attachments'][':attachment_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.emails.receiving)[':email_id']['attachments'][':attachment_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmailsReceivingEmailIdAttachmentsAttachmentIdQueryKey>
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
      ...getEmailsReceivingEmailIdAttachmentsAttachmentIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEmailsMetricsQueryKey(
  args: InferRequestType<typeof client.emails.metrics.$get>,
) {
  return ['emails', '/emails/metrics', args] as const
}

export function getEmailsMetricsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.metrics.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.emails.metrics.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.metrics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEmailsMetricsQueryKey>
  >({
    queryKey: getEmailsMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.emails.metrics.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEmailsMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.emails.metrics.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.metrics.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEmailsMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEmailsMetricsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEmailsMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.emails.metrics.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.metrics.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEmailsMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEmailsMetricsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDomainsQueryKey(args: InferRequestType<typeof client.domains.$get>) {
  return ['domains', '/domains', args] as const
}

export function getDomainsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.domains.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDomainsQueryKey>
  >({
    queryKey: getDomainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDomains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.domains.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getDomainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDomainsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDomains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.domains.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getDomainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDomainsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostDomainsMutationKey() {
  return ['domains', '/domains', 'POST'] as const
}

export function getPostDomainsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$post>>>>>,
    TError,
    InferRequestType<typeof client.domains.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDomainsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.domains.$post>) {
      return parseResponse(client.domains.$post(args, options))
    },
  })
}

export function usePostDomains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$post>>>>>,
        TError,
        InferRequestType<typeof client.domains.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDomainsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDomainsDomainIdQueryKey(
  args: InferRequestType<(typeof client.domains)[':domain_id']['$get']>,
) {
  return ['domains', '/domains/:domain_id', args] as const
}

export function getDomainsDomainIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domain_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains)[':domain_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domain_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsDomainIdQueryKey>
  >({
    queryKey: getDomainsDomainIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains[':domain_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDomainsDomainId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domain_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains)[':domain_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domain_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomainsDomainIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDomainsDomainIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDomainsDomainId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domain_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains)[':domain_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domain_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomainsDomainIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDomainsDomainIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteDomainsDomainIdMutationKey() {
  return ['domains', '/domains/:domain_id', 'DELETE'] as const
}

export function getDeleteDomainsDomainIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domain_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.domains)[':domain_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDomainsDomainIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.domains)[':domain_id']['$delete']>) {
      return parseResponse(client.domains[':domain_id'].$delete(args, options))
    },
  })
}

export function useDeleteDomainsDomainId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.domains)[':domain_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.domains)[':domain_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDomainsDomainIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchDomainsDomainIdMutationKey() {
  return ['domains', '/domains/:domain_id', 'PATCH'] as const
}

export function getPatchDomainsDomainIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domain_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.domains)[':domain_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDomainsDomainIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.domains)[':domain_id']['$patch']>) {
      return parseResponse(client.domains[':domain_id'].$patch(args, options))
    },
  })
}

export function usePatchDomainsDomainId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.domains)[':domain_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.domains)[':domain_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDomainsDomainIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostDomainsDomainIdVerifyMutationKey() {
  return ['domains', '/domains/:domain_id/verify', 'POST'] as const
}

export function getPostDomainsDomainIdVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':domain_id']['verify']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.domains)[':domain_id']['verify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDomainsDomainIdVerifyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.domains)[':domain_id']['verify']['$post']>,
    ) {
      return parseResponse(client.domains[':domain_id'].verify.$post(args, options))
    },
  })
}

export function usePostDomainsDomainIdVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.domains)[':domain_id']['verify']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.domains)[':domain_id']['verify']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDomainsDomainIdVerifyMutationOptions<TError, TOnMutateResult>(
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

export function getPostDomainsDomainIdForgeMutationKey() {
  return ['domains', '/domains/:domain_id/forge', 'POST'] as const
}

export function getPostDomainsDomainIdForgeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':domain_id']['forge']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.domains)[':domain_id']['forge']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDomainsDomainIdForgeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.domains)[':domain_id']['forge']['$post']>,
    ) {
      return parseResponse(client.domains[':domain_id'].forge.$post(args, options))
    },
  })
}

export function usePostDomainsDomainIdForge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.domains)[':domain_id']['forge']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.domains)[':domain_id']['forge']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDomainsDomainIdForgeMutationOptions<TError, TOnMutateResult>(
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

export function getPostDomainsClaimMutationKey() {
  return ['domains', '/domains/claim', 'POST'] as const
}

export function getPostDomainsClaimMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.claim.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.domains.claim.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDomainsClaimMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.domains.claim.$post>) {
      return parseResponse(client.domains.claim.$post(args, options))
    },
  })
}

export function usePostDomainsClaim<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.claim.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.domains.claim.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDomainsClaimMutationOptions<TError, TOnMutateResult>(
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

export function getDomainsDomainIdClaimQueryKey(
  args: InferRequestType<(typeof client.domains)[':domain_id']['claim']['$get']>,
) {
  return ['domains', '/domains/:domain_id/claim', args] as const
}

export function getDomainsDomainIdClaimQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.domains)[':domain_id']['claim']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains)[':domain_id']['claim']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':domain_id']['claim']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsDomainIdClaimQueryKey>
  >({
    queryKey: getDomainsDomainIdClaimQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains[':domain_id'].claim.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDomainsDomainIdClaim<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.domains)[':domain_id']['claim']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains)[':domain_id']['claim']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.domains)[':domain_id']['claim']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomainsDomainIdClaimQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDomainsDomainIdClaimQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDomainsDomainIdClaim<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.domains)[':domain_id']['claim']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains)[':domain_id']['claim']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.domains)[':domain_id']['claim']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomainsDomainIdClaimQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDomainsDomainIdClaimQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostDomainsDomainIdClaimVerifyMutationKey() {
  return ['domains', '/domains/:domain_id/claim/verify', 'POST'] as const
}

export function getPostDomainsDomainIdClaimVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':domain_id']['claim']['verify']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.domains)[':domain_id']['claim']['verify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDomainsDomainIdClaimVerifyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.domains)[':domain_id']['claim']['verify']['$post']>,
    ) {
      return parseResponse(client.domains[':domain_id'].claim.verify.$post(args, options))
    },
  })
}

export function usePostDomainsDomainIdClaimVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.domains)[':domain_id']['claim']['verify']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.domains)[':domain_id']['claim']['verify']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDomainsDomainIdClaimVerifyMutationOptions<
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

export function getApiKeysQueryKey(args: InferRequestType<(typeof client)['api-keys']['$get']>) {
  return ['api-keys', '/api-keys', args] as const
}

export function getApiKeysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['api-keys']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiKeysQueryKey>
  >({
    queryKey: getApiKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['api-keys'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['api-keys']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiKeysQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['api-keys']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiKeysQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiKeysMutationKey() {
  return ['api-keys', '/api-keys', 'POST'] as const
}

export function getPostApiKeysMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['api-keys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiKeysMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['api-keys']['$post']>) {
      return parseResponse(client['api-keys'].$post(args, options))
    },
  })
}

export function usePostApiKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['api-keys']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiKeysMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiKeysApiKeyIdMutationKey() {
  return ['api-keys', '/api-keys/:api_key_id', 'DELETE'] as const
}

export function getDeleteApiKeysApiKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['api-keys'][':api_key_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['api-keys'][':api_key_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiKeysApiKeyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['api-keys'][':api_key_id']['$delete']>,
    ) {
      return parseResponse(client['api-keys'][':api_key_id'].$delete(args, options))
    },
  })
}

export function useDeleteApiKeysApiKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['api-keys'][':api_key_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['api-keys'][':api_key_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiKeysApiKeyIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiKeysApiKeyIdMutationKey() {
  return ['api-keys', '/api-keys/:api_key_id', 'PATCH'] as const
}

export function getPatchApiKeysApiKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['api-keys'][':api_key_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['api-keys'][':api_key_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiKeysApiKeyIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['api-keys'][':api_key_id']['$patch']>) {
      return parseResponse(client['api-keys'][':api_key_id'].$patch(args, options))
    },
  })
}

export function usePatchApiKeysApiKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['api-keys'][':api_key_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['api-keys'][':api_key_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiKeysApiKeyIdMutationOptions<TError, TOnMutateResult>(
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

export function getOauthGrantsQueryKey(args: InferRequestType<typeof client.oauth.grants.$get>) {
  return ['oauth', '/oauth/grants', args] as const
}

export function getOauthGrantsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.grants.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.oauth.grants.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.grants.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOauthGrantsQueryKey>
  >({
    queryKey: getOauthGrantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.oauth.grants.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOauthGrants<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.grants.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.oauth.grants.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.grants.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOauthGrantsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOauthGrantsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOauthGrants<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.grants.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.oauth.grants.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.grants.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOauthGrantsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOauthGrantsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteOauthGrantsOauthGrantIdMutationKey() {
  return ['oauth', '/oauth/grants/:oauth_grant_id', 'DELETE'] as const
}

export function getDeleteOauthGrantsOauthGrantIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.oauth.grants)[':oauth_grant_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.oauth.grants)[':oauth_grant_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOauthGrantsOauthGrantIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.oauth.grants)[':oauth_grant_id']['$delete']>,
    ) {
      return parseResponse(client.oauth.grants[':oauth_grant_id'].$delete(args, options))
    },
  })
}

export function useDeleteOauthGrantsOauthGrantId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.oauth.grants)[':oauth_grant_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.oauth.grants)[':oauth_grant_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOauthGrantsOauthGrantIdMutationOptions<TError, TOnMutateResult>(
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

export function getTemplatesQueryKey(args: InferRequestType<typeof client.templates.$get>) {
  return ['templates', '/templates', args] as const
}

export function getTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.templates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTemplatesQueryKey>
  >({
    queryKey: getTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.templates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.templates.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTemplatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.templates.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTemplatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTemplatesMutationKey() {
  return ['templates', '/templates', 'POST'] as const
}

export function getPostTemplatesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$post>>>>>,
    TError,
    InferRequestType<typeof client.templates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.templates.$post>) {
      return parseResponse(client.templates.$post(args, options))
    },
  })
}

export function usePostTemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.templates.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTemplatesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTemplatesIdQueryKey(
  args: InferRequestType<(typeof client.templates)[':id']['$get']>,
) {
  return ['templates', '/templates/:id', args] as const
}

export function getTemplatesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesIdQueryKey>
  >({
    queryKey: getTemplatesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.templates[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTemplatesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTemplatesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTemplatesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTemplatesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteTemplatesIdMutationKey() {
  return ['templates', '/templates/:id', 'DELETE'] as const
}

export function getDeleteTemplatesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.templates)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTemplatesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.templates)[':id']['$delete']>) {
      return parseResponse(client.templates[':id'].$delete(args, options))
    },
  })
}

export function useDeleteTemplatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.templates)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTemplatesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchTemplatesIdMutationKey() {
  return ['templates', '/templates/:id', 'PATCH'] as const
}

export function getPatchTemplatesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.templates)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTemplatesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.templates)[':id']['$patch']>) {
      return parseResponse(client.templates[':id'].$patch(args, options))
    },
  })
}

export function usePatchTemplatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.templates)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchTemplatesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostTemplatesIdPublishMutationKey() {
  return ['templates', '/templates/:id/publish', 'POST'] as const
}

export function getPostTemplatesIdPublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.templates)[':id']['publish']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.templates)[':id']['publish']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesIdPublishMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.templates)[':id']['publish']['$post']>) {
      return parseResponse(client.templates[':id'].publish.$post(args, options))
    },
  })
}

export function usePostTemplatesIdPublish<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.templates)[':id']['publish']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.templates)[':id']['publish']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTemplatesIdPublishMutationOptions<TError, TOnMutateResult>(
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

export function getPostTemplatesIdDuplicateMutationKey() {
  return ['templates', '/templates/:id/duplicate', 'POST'] as const
}

export function getPostTemplatesIdDuplicateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.templates)[':id']['duplicate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.templates)[':id']['duplicate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesIdDuplicateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.templates)[':id']['duplicate']['$post']>,
    ) {
      return parseResponse(client.templates[':id'].duplicate.$post(args, options))
    },
  })
}

export function usePostTemplatesIdDuplicate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.templates)[':id']['duplicate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.templates)[':id']['duplicate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTemplatesIdDuplicateMutationOptions<TError, TOnMutateResult>(
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

export function getAudiencesQueryKey() {
  return ['audiences', '/audiences'] as const
}

export function getAudiencesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAudiencesQueryKey>
  >({
    queryKey: getAudiencesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.audiences.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAudiences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAudiencesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAudiencesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAudiences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAudiencesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAudiencesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAudiencesMutationKey() {
  return ['audiences', '/audiences', 'POST'] as const
}

export function getPostAudiencesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$post>>>>>,
    TError,
    InferRequestType<typeof client.audiences.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAudiencesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.audiences.$post>) {
      return parseResponse(client.audiences.$post(args, options))
    },
  })
}

export function usePostAudiences<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.audiences.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAudiencesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAudiencesIdQueryKey(
  args: InferRequestType<(typeof client.audiences)[':id']['$get']>,
) {
  return ['audiences', '/audiences/:id', args] as const
}

export function getAudiencesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.audiences)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAudiencesIdQueryKey>
  >({
    queryKey: getAudiencesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.audiences[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAudiencesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.audiences)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAudiencesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAudiencesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAudiencesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.audiences)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAudiencesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAudiencesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteAudiencesIdMutationKey() {
  return ['audiences', '/audiences/:id', 'DELETE'] as const
}

export function getDeleteAudiencesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.audiences)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAudiencesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.audiences)[':id']['$delete']>) {
      return parseResponse(client.audiences[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAudiencesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.audiences)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAudiencesIdMutationOptions<TError, TOnMutateResult>(
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

export function getContactsQueryKey(args: InferRequestType<typeof client.contacts.$get>) {
  return ['contacts', '/contacts', args] as const
}

export function getContactsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.contacts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getContactsQueryKey>
  >({
    queryKey: getContactsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contacts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useContacts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.contacts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getContactsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getContactsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseContacts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.contacts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getContactsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getContactsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostContactsMutationKey() {
  return ['contacts', '/contacts', 'POST'] as const
}

export function getPostContactsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$post>>>>>,
    TError,
    InferRequestType<typeof client.contacts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContactsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.contacts.$post>) {
      return parseResponse(client.contacts.$post(args, options))
    },
  })
}

export function usePostContacts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.contacts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContactsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getContactsImportsQueryKey(
  args: InferRequestType<typeof client.contacts.imports.$get>,
) {
  return ['contacts', '/contacts/imports', args] as const
}

export function getContactsImportsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.imports.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.contacts.imports.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.imports.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContactsImportsQueryKey>
  >({
    queryKey: getContactsImportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contacts.imports.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useContactsImports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.imports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.contacts.imports.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.imports.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getContactsImportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getContactsImportsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseContactsImports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.imports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.contacts.imports.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.imports.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getContactsImportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getContactsImportsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostContactsImportsMutationKey() {
  return ['contacts', '/contacts/imports', 'POST'] as const
}

export function getPostContactsImportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.imports.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.contacts.imports.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContactsImportsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.contacts.imports.$post>) {
      return parseResponse(client.contacts.imports.$post(args, options))
    },
  })
}

export function usePostContactsImports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.contacts.imports.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.contacts.imports.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContactsImportsMutationOptions<TError, TOnMutateResult>(
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

export function getContactsImportsIdQueryKey(
  args: InferRequestType<(typeof client.contacts.imports)[':id']['$get']>,
) {
  return ['contacts', '/contacts/imports/:id', args] as const
}

export function getContactsImportsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.contacts.imports)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts.imports)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.contacts.imports)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsImportsIdQueryKey>
  >({
    queryKey: getContactsImportsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contacts.imports[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useContactsImportsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.contacts.imports)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts.imports)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contacts.imports)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsImportsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getContactsImportsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseContactsImportsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.contacts.imports)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts.imports)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contacts.imports)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsImportsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getContactsImportsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getContactsIdQueryKey(
  args: InferRequestType<(typeof client.contacts)[':id']['$get']>,
) {
  return ['contacts', '/contacts/:id', args] as const
}

export function getContactsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.contacts)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContactsIdQueryKey>
  >({
    queryKey: getContactsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contacts[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useContactsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getContactsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseContactsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getContactsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteContactsIdMutationKey() {
  return ['contacts', '/contacts/:id', 'DELETE'] as const
}

export function getDeleteContactsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.contacts)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteContactsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.contacts)[':id']['$delete']>) {
      return parseResponse(client.contacts[':id'].$delete(args, options))
    },
  })
}

export function useDeleteContactsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.contacts)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteContactsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchContactsIdMutationKey() {
  return ['contacts', '/contacts/:id', 'PATCH'] as const
}

export function getPatchContactsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.contacts)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchContactsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.contacts)[':id']['$patch']>) {
      return parseResponse(client.contacts[':id'].$patch(args, options))
    },
  })
}

export function usePatchContactsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.contacts)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchContactsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBroadcastsQueryKey(args: InferRequestType<typeof client.broadcasts.$get>) {
  return ['broadcasts', '/broadcasts', args] as const
}

export function getBroadcastsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.broadcasts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.broadcasts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.broadcasts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBroadcastsQueryKey>
  >({
    queryKey: getBroadcastsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.broadcasts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBroadcasts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.broadcasts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.broadcasts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.broadcasts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBroadcastsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBroadcastsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBroadcasts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.broadcasts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.broadcasts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.broadcasts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBroadcastsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBroadcastsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostBroadcastsMutationKey() {
  return ['broadcasts', '/broadcasts', 'POST'] as const
}

export function getPostBroadcastsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.broadcasts.$post>>>>>,
    TError,
    InferRequestType<typeof client.broadcasts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBroadcastsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.broadcasts.$post>) {
      return parseResponse(client.broadcasts.$post(args, options))
    },
  })
}

export function usePostBroadcasts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.broadcasts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.broadcasts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBroadcastsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBroadcastsIdQueryKey(
  args: InferRequestType<(typeof client.broadcasts)[':id']['$get']>,
) {
  return ['broadcasts', '/broadcasts/:id', args] as const
}

export function getBroadcastsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.broadcasts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.broadcasts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.broadcasts)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBroadcastsIdQueryKey>
  >({
    queryKey: getBroadcastsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.broadcasts[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBroadcastsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.broadcasts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.broadcasts)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.broadcasts)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBroadcastsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBroadcastsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBroadcastsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.broadcasts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.broadcasts)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.broadcasts)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBroadcastsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBroadcastsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteBroadcastsIdMutationKey() {
  return ['broadcasts', '/broadcasts/:id', 'DELETE'] as const
}

export function getDeleteBroadcastsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.broadcasts)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.broadcasts)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBroadcastsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.broadcasts)[':id']['$delete']>) {
      return parseResponse(client.broadcasts[':id'].$delete(args, options))
    },
  })
}

export function useDeleteBroadcastsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.broadcasts)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.broadcasts)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteBroadcastsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchBroadcastsIdMutationKey() {
  return ['broadcasts', '/broadcasts/:id', 'PATCH'] as const
}

export function getPatchBroadcastsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.broadcasts)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.broadcasts)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchBroadcastsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.broadcasts)[':id']['$patch']>) {
      return parseResponse(client.broadcasts[':id'].$patch(args, options))
    },
  })
}

export function usePatchBroadcastsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.broadcasts)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.broadcasts)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchBroadcastsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostBroadcastsIdSendMutationKey() {
  return ['broadcasts', '/broadcasts/:id/send', 'POST'] as const
}

export function getPostBroadcastsIdSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.broadcasts)[':id']['send']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.broadcasts)[':id']['send']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBroadcastsIdSendMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.broadcasts)[':id']['send']['$post']>) {
      return parseResponse(client.broadcasts[':id'].send.$post(args, options))
    },
  })
}

export function usePostBroadcastsIdSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.broadcasts)[':id']['send']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.broadcasts)[':id']['send']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBroadcastsIdSendMutationOptions<TError, TOnMutateResult>(
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

export function getPostBroadcastsIdCancelMutationKey() {
  return ['broadcasts', '/broadcasts/:id/cancel', 'POST'] as const
}

export function getPostBroadcastsIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.broadcasts)[':id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.broadcasts)[':id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBroadcastsIdCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.broadcasts)[':id']['cancel']['$post']>) {
      return parseResponse(client.broadcasts[':id'].cancel.$post(args, options))
    },
  })
}

export function usePostBroadcastsIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.broadcasts)[':id']['cancel']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.broadcasts)[':id']['cancel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBroadcastsIdCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPostBroadcastsIdDuplicateMutationKey() {
  return ['broadcasts', '/broadcasts/:id/duplicate', 'POST'] as const
}

export function getPostBroadcastsIdDuplicateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.broadcasts)[':id']['duplicate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.broadcasts)[':id']['duplicate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBroadcastsIdDuplicateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.broadcasts)[':id']['duplicate']['$post']>,
    ) {
      return parseResponse(client.broadcasts[':id'].duplicate.$post(args, options))
    },
  })
}

export function usePostBroadcastsIdDuplicate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.broadcasts)[':id']['duplicate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.broadcasts)[':id']['duplicate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBroadcastsIdDuplicateMutationOptions<TError, TOnMutateResult>(
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

export function getBroadcastsIdRecipientsQueryKey(
  args: InferRequestType<(typeof client.broadcasts)[':id']['recipients']['$get']>,
) {
  return ['broadcasts', '/broadcasts/:id/recipients', args] as const
}

export function getBroadcastsIdRecipientsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.broadcasts)[':id']['recipients']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.broadcasts)[':id']['recipients']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.broadcasts)[':id']['recipients']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBroadcastsIdRecipientsQueryKey>
  >({
    queryKey: getBroadcastsIdRecipientsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.broadcasts[':id'].recipients.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBroadcastsIdRecipients<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.broadcasts)[':id']['recipients']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.broadcasts)[':id']['recipients']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.broadcasts)[':id']['recipients']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBroadcastsIdRecipientsQueryKey>
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
      ...getBroadcastsIdRecipientsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBroadcastsIdRecipients<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.broadcasts)[':id']['recipients']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.broadcasts)[':id']['recipients']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.broadcasts)[':id']['recipients']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBroadcastsIdRecipientsQueryKey>
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
      ...getBroadcastsIdRecipientsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBroadcastsIdClickedLinksQueryKey(
  args: InferRequestType<(typeof client.broadcasts)[':id']['clicked-links']['$get']>,
) {
  return ['broadcasts', '/broadcasts/:id/clicked-links', args] as const
}

export function getBroadcastsIdClickedLinksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.broadcasts)[':id']['clicked-links']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.broadcasts)[':id']['clicked-links']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.broadcasts)[':id']['clicked-links']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBroadcastsIdClickedLinksQueryKey>
  >({
    queryKey: getBroadcastsIdClickedLinksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.broadcasts[':id']['clicked-links'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBroadcastsIdClickedLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.broadcasts)[':id']['clicked-links']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.broadcasts)[':id']['clicked-links']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.broadcasts)[':id']['clicked-links']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBroadcastsIdClickedLinksQueryKey>
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
      ...getBroadcastsIdClickedLinksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBroadcastsIdClickedLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.broadcasts)[':id']['clicked-links']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.broadcasts)[':id']['clicked-links']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.broadcasts)[':id']['clicked-links']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBroadcastsIdClickedLinksQueryKey>
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
      ...getBroadcastsIdClickedLinksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getWebhooksQueryKey(args: InferRequestType<typeof client.webhooks.$get>) {
  return ['webhooks', '/webhooks', args] as const
}

export function getWebhooksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.webhooks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWebhooksQueryKey>
  >({
    queryKey: getWebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useWebhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.webhooks.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getWebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWebhooksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWebhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.webhooks.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getWebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWebhooksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostWebhooksMutationKey() {
  return ['webhooks', '/webhooks', 'POST'] as const
}

export function getPostWebhooksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>>,
    TError,
    InferRequestType<typeof client.webhooks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webhooks.$post>) {
      return parseResponse(client.webhooks.$post(args, options))
    },
  })
}

export function usePostWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.webhooks.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWebhooksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWebhooksWebhookIdQueryKey(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>,
) {
  return ['webhooks', '/webhooks/:webhook_id', args] as const
}

export function getWebhooksWebhookIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksWebhookIdQueryKey>
  >({
    queryKey: getWebhooksWebhookIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks[':webhook_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksWebhookIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWebhooksWebhookIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksWebhookIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWebhooksWebhookIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteWebhooksWebhookIdMutationKey() {
  return ['webhooks', '/webhooks/:webhook_id', 'DELETE'] as const
}

export function getDeleteWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':webhook_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksWebhookIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$delete']>) {
      return parseResponse(client.webhooks[':webhook_id'].$delete(args, options))
    },
  })
}

export function useDeleteWebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.webhooks)[':webhook_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteWebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchWebhooksWebhookIdMutationKey() {
  return ['webhooks', '/webhooks/:webhook_id', 'PATCH'] as const
}

export function getPatchWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':webhook_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWebhooksWebhookIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$patch']>) {
      return parseResponse(client.webhooks[':webhook_id'].$patch(args, options))
    },
  })
}

export function usePatchWebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.webhooks)[':webhook_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchWebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostWebhooksWebhookIdSigningSecretRotateMutationKey() {
  return ['webhooks', '/webhooks/:webhook_id/signing-secret/rotate', 'POST'] as const
}

export function getPostWebhooksWebhookIdSigningSecretRotateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.webhooks)[':webhook_id']['signing-secret']['rotate']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':webhook_id']['signing-secret']['rotate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksWebhookIdSigningSecretRotateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.webhooks)[':webhook_id']['signing-secret']['rotate']['$post']
      >,
    ) {
      return parseResponse(
        client.webhooks[':webhook_id']['signing-secret'].rotate.$post(args, options),
      )
    },
  })
}

export function usePostWebhooksWebhookIdSigningSecretRotate<
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
                  (typeof client.webhooks)[':webhook_id']['signing-secret']['rotate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.webhooks)[':webhook_id']['signing-secret']['rotate']['$post']
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
  const mutationDefaults = getPostWebhooksWebhookIdSigningSecretRotateMutationOptions<
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

export function getWebhooksWebhookIdEventsQueryKey(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['events']['$get']>,
) {
  return ['webhooks', '/webhooks/:webhook_id/events', args] as const
}

export function getWebhooksWebhookIdEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksWebhookIdEventsQueryKey>
  >({
    queryKey: getWebhooksWebhookIdEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks[':webhook_id'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWebhooksWebhookIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['events']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['events']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksWebhookIdEventsQueryKey>
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
      ...getWebhooksWebhookIdEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWebhooksWebhookIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['events']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['events']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksWebhookIdEventsQueryKey>
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
      ...getWebhooksWebhookIdEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getWebhooksWebhookIdEventsEventIdQueryKey(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['events'][':event_id']['$get']>,
) {
  return ['webhooks', '/webhooks/:webhook_id/events/:event_id', args] as const
}

export function getWebhooksWebhookIdEventsEventIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['events'][':event_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['events'][':event_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.webhooks)[':webhook_id']['events'][':event_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksWebhookIdEventsEventIdQueryKey>
  >({
    queryKey: getWebhooksWebhookIdEventsEventIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks[':webhook_id'].events[':event_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWebhooksWebhookIdEventsEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['events'][':event_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['events'][':event_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.webhooks)[':webhook_id']['events'][':event_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksWebhookIdEventsEventIdQueryKey>
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
      ...getWebhooksWebhookIdEventsEventIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWebhooksWebhookIdEventsEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['events'][':event_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['events'][':event_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.webhooks)[':webhook_id']['events'][':event_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksWebhookIdEventsEventIdQueryKey>
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
      ...getWebhooksWebhookIdEventsEventIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostWebhooksWebhookIdEventsEventIdReplayMutationKey() {
  return ['webhooks', '/webhooks/:webhook_id/events/:event_id/replay', 'POST'] as const
}

export function getPostWebhooksWebhookIdEventsEventIdReplayMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.webhooks)[':webhook_id']['events'][':event_id']['replay']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.webhooks)[':webhook_id']['events'][':event_id']['replay']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksWebhookIdEventsEventIdReplayMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.webhooks)[':webhook_id']['events'][':event_id']['replay']['$post']
      >,
    ) {
      return parseResponse(
        client.webhooks[':webhook_id'].events[':event_id'].replay.$post(args, options),
      )
    },
  })
}

export function usePostWebhooksWebhookIdEventsEventIdReplay<
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
                  (typeof client.webhooks)[':webhook_id']['events'][':event_id']['replay']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.webhooks)[':webhook_id']['events'][':event_id']['replay']['$post']
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
  const mutationDefaults = getPostWebhooksWebhookIdEventsEventIdReplayMutationOptions<
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

export function getWebhooksWebhookIdEventsEventIdAttemptsQueryKey(
  args: InferRequestType<
    (typeof client.webhooks)[':webhook_id']['events'][':event_id']['attempts']['$get']
  >,
) {
  return ['webhooks', '/webhooks/:webhook_id/events/:event_id/attempts', args] as const
}

export function getWebhooksWebhookIdEventsEventIdAttemptsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.webhooks)[':webhook_id']['events'][':event_id']['attempts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.webhooks)[':webhook_id']['events'][':event_id']['attempts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.webhooks)[':webhook_id']['events'][':event_id']['attempts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksWebhookIdEventsEventIdAttemptsQueryKey>
  >({
    queryKey: getWebhooksWebhookIdEventsEventIdAttemptsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks[':webhook_id'].events[':event_id'].attempts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWebhooksWebhookIdEventsEventIdAttempts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.webhooks)[':webhook_id']['events'][':event_id']['attempts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.webhooks)[':webhook_id']['events'][':event_id']['attempts']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.webhooks)[':webhook_id']['events'][':event_id']['attempts']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksWebhookIdEventsEventIdAttemptsQueryKey>
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
      ...getWebhooksWebhookIdEventsEventIdAttemptsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWebhooksWebhookIdEventsEventIdAttempts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.webhooks)[':webhook_id']['events'][':event_id']['attempts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.webhooks)[':webhook_id']['events'][':event_id']['attempts']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.webhooks)[':webhook_id']['events'][':event_id']['attempts']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksWebhookIdEventsEventIdAttemptsQueryKey>
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
      ...getWebhooksWebhookIdEventsEventIdAttemptsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSegmentsQueryKey(args: InferRequestType<typeof client.segments.$get>) {
  return ['segments', '/segments', args] as const
}

export function getSegmentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.segments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSegmentsQueryKey>
  >({
    queryKey: getSegmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.segments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSegments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.segments.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSegmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSegmentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSegments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.segments.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSegmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSegmentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSegmentsMutationKey() {
  return ['segments', '/segments', 'POST'] as const
}

export function getPostSegmentsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.$post>>>>>,
    TError,
    InferRequestType<typeof client.segments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSegmentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.segments.$post>) {
      return parseResponse(client.segments.$post(args, options))
    },
  })
}

export function usePostSegments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.segments.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSegmentsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSegmentsIdQueryKey(
  args: InferRequestType<(typeof client.segments)[':id']['$get']>,
) {
  return ['segments', '/segments/:id', args] as const
}

export function getSegmentsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.segments)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.segments)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.segments)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSegmentsIdQueryKey>
  >({
    queryKey: getSegmentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.segments[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSegmentsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.segments)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.segments)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.segments)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSegmentsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSegmentsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSegmentsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.segments)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.segments)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.segments)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSegmentsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSegmentsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteSegmentsIdMutationKey() {
  return ['segments', '/segments/:id', 'DELETE'] as const
}

export function getDeleteSegmentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.segments)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.segments)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSegmentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.segments)[':id']['$delete']>) {
      return parseResponse(client.segments[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSegmentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.segments)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.segments)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSegmentsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchSegmentsIdMutationKey() {
  return ['segments', '/segments/:id', 'PATCH'] as const
}

export function getPatchSegmentsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.segments)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.segments)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSegmentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.segments)[':id']['$patch']>) {
      return parseResponse(client.segments[':id'].$patch(args, options))
    },
  })
}

export function usePatchSegmentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.segments)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.segments)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSegmentsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSegmentsIdContactsQueryKey(
  args: InferRequestType<(typeof client.segments)[':id']['contacts']['$get']>,
) {
  return ['segments', '/segments/:id/contacts', args] as const
}

export function getSegmentsIdContactsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.segments)[':id']['contacts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.segments)[':id']['contacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.segments)[':id']['contacts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSegmentsIdContactsQueryKey>
  >({
    queryKey: getSegmentsIdContactsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.segments[':id'].contacts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSegmentsIdContacts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.segments)[':id']['contacts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.segments)[':id']['contacts']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.segments)[':id']['contacts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSegmentsIdContactsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSegmentsIdContactsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSegmentsIdContacts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.segments)[':id']['contacts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.segments)[':id']['contacts']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.segments)[':id']['contacts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSegmentsIdContactsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSegmentsIdContactsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTopicsQueryKey(args: InferRequestType<typeof client.topics.$get>) {
  return ['topics', '/topics', args] as const
}

export function getTopicsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topics.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.topics.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topics.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTopicsQueryKey>
  >({
    queryKey: getTopicsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.topics.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTopics<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topics.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.topics.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topics.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTopicsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTopicsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTopics<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topics.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.topics.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topics.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTopicsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTopicsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTopicsMutationKey() {
  return ['topics', '/topics', 'POST'] as const
}

export function getPostTopicsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topics.$post>>>>>,
    TError,
    InferRequestType<typeof client.topics.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTopicsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.topics.$post>) {
      return parseResponse(client.topics.$post(args, options))
    },
  })
}

export function usePostTopics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topics.$post>>>>>,
        TError,
        InferRequestType<typeof client.topics.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTopicsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTopicsIdQueryKey(args: InferRequestType<(typeof client.topics)[':id']['$get']>) {
  return ['topics', '/topics/:id', args] as const
}

export function getTopicsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.topics)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.topics)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.topics)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTopicsIdQueryKey>
  >({
    queryKey: getTopicsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.topics[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTopicsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.topics)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.topics)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.topics)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTopicsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTopicsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTopicsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.topics)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.topics)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.topics)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTopicsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTopicsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteTopicsIdMutationKey() {
  return ['topics', '/topics/:id', 'DELETE'] as const
}

export function getDeleteTopicsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.topics)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.topics)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTopicsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.topics)[':id']['$delete']>) {
      return parseResponse(client.topics[':id'].$delete(args, options))
    },
  })
}

export function useDeleteTopicsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.topics)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.topics)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTopicsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchTopicsIdMutationKey() {
  return ['topics', '/topics/:id', 'PATCH'] as const
}

export function getPatchTopicsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.topics)[':id']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.topics)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTopicsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.topics)[':id']['$patch']>) {
      return parseResponse(client.topics[':id'].$patch(args, options))
    },
  })
}

export function usePatchTopicsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.topics)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.topics)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchTopicsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getContactPropertiesQueryKey(
  args: InferRequestType<(typeof client)['contact-properties']['$get']>,
) {
  return ['contact-properties', '/contact-properties', args] as const
}

export function getContactPropertiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['contact-properties']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['contact-properties']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['contact-properties']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactPropertiesQueryKey>
  >({
    queryKey: getContactPropertiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['contact-properties'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useContactProperties<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['contact-properties']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['contact-properties']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['contact-properties']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactPropertiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getContactPropertiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseContactProperties<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['contact-properties']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['contact-properties']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['contact-properties']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactPropertiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getContactPropertiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostContactPropertiesMutationKey() {
  return ['contact-properties', '/contact-properties', 'POST'] as const
}

export function getPostContactPropertiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['contact-properties']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['contact-properties']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostContactPropertiesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['contact-properties']['$post']>) {
      return parseResponse(client['contact-properties'].$post(args, options))
    },
  })
}

export function usePostContactProperties<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['contact-properties']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['contact-properties']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContactPropertiesMutationOptions<TError, TOnMutateResult>(
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

export function getContactPropertiesIdQueryKey(
  args: InferRequestType<(typeof client)['contact-properties'][':id']['$get']>,
) {
  return ['contact-properties', '/contact-properties/:id', args] as const
}

export function getContactPropertiesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['contact-properties'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['contact-properties'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['contact-properties'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactPropertiesIdQueryKey>
  >({
    queryKey: getContactPropertiesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['contact-properties'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useContactPropertiesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['contact-properties'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['contact-properties'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['contact-properties'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactPropertiesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getContactPropertiesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseContactPropertiesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['contact-properties'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['contact-properties'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['contact-properties'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactPropertiesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getContactPropertiesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteContactPropertiesIdMutationKey() {
  return ['contact-properties', '/contact-properties/:id', 'DELETE'] as const
}

export function getDeleteContactPropertiesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['contact-properties'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['contact-properties'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteContactPropertiesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['contact-properties'][':id']['$delete']>,
    ) {
      return parseResponse(client['contact-properties'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteContactPropertiesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['contact-properties'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['contact-properties'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteContactPropertiesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchContactPropertiesIdMutationKey() {
  return ['contact-properties', '/contact-properties/:id', 'PATCH'] as const
}

export function getPatchContactPropertiesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['contact-properties'][':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['contact-properties'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchContactPropertiesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['contact-properties'][':id']['$patch']>,
    ) {
      return parseResponse(client['contact-properties'][':id'].$patch(args, options))
    },
  })
}

export function usePatchContactPropertiesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['contact-properties'][':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['contact-properties'][':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchContactPropertiesIdMutationOptions<TError, TOnMutateResult>(
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

export function getContactsContactIdSegmentsQueryKey(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['segments']['$get']>,
) {
  return ['contacts', '/contacts/:contact_id/segments', args] as const
}

export function getContactsContactIdSegmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts)[':contact_id']['segments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['segments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts)[':contact_id']['segments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsContactIdSegmentsQueryKey>
  >({
    queryKey: getContactsContactIdSegmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contacts[':contact_id'].segments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useContactsContactIdSegments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts)[':contact_id']['segments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['segments']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contacts)[':contact_id']['segments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsContactIdSegmentsQueryKey>
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
      ...getContactsContactIdSegmentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseContactsContactIdSegments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts)[':contact_id']['segments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['segments']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contacts)[':contact_id']['segments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsContactIdSegmentsQueryKey>
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
      ...getContactsContactIdSegmentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostContactsContactIdSegmentsSegmentIdMutationKey() {
  return ['contacts', '/contacts/:contact_id/segments/:segment_id', 'POST'] as const
}

export function getPostContactsContactIdSegmentsSegmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.contacts)[':contact_id']['segments'][':segment_id']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.contacts)[':contact_id']['segments'][':segment_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostContactsContactIdSegmentsSegmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.contacts)[':contact_id']['segments'][':segment_id']['$post']
      >,
    ) {
      return parseResponse(
        client.contacts[':contact_id'].segments[':segment_id'].$post(args, options),
      )
    },
  })
}

export function usePostContactsContactIdSegmentsSegmentId<
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
                  (typeof client.contacts)[':contact_id']['segments'][':segment_id']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.contacts)[':contact_id']['segments'][':segment_id']['$post']
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
  const mutationDefaults = getPostContactsContactIdSegmentsSegmentIdMutationOptions<
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

export function getDeleteContactsContactIdSegmentsSegmentIdMutationKey() {
  return ['contacts', '/contacts/:contact_id/segments/:segment_id', 'DELETE'] as const
}

export function getDeleteContactsContactIdSegmentsSegmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.contacts)[':contact_id']['segments'][':segment_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.contacts)[':contact_id']['segments'][':segment_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteContactsContactIdSegmentsSegmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.contacts)[':contact_id']['segments'][':segment_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.contacts[':contact_id'].segments[':segment_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteContactsContactIdSegmentsSegmentId<
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
                  (typeof client.contacts)[':contact_id']['segments'][':segment_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.contacts)[':contact_id']['segments'][':segment_id']['$delete']
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
  const mutationDefaults = getDeleteContactsContactIdSegmentsSegmentIdMutationOptions<
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

export function getContactsContactIdTopicsQueryKey(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['topics']['$get']>,
) {
  return ['contacts', '/contacts/:contact_id/topics', args] as const
}

export function getContactsContactIdTopicsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts)[':contact_id']['topics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['topics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts)[':contact_id']['topics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsContactIdTopicsQueryKey>
  >({
    queryKey: getContactsContactIdTopicsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contacts[':contact_id'].topics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useContactsContactIdTopics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts)[':contact_id']['topics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['topics']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contacts)[':contact_id']['topics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsContactIdTopicsQueryKey>
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
      ...getContactsContactIdTopicsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseContactsContactIdTopics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts)[':contact_id']['topics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['topics']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contacts)[':contact_id']['topics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsContactIdTopicsQueryKey>
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
      ...getContactsContactIdTopicsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchContactsContactIdTopicsMutationKey() {
  return ['contacts', '/contacts/:contact_id/topics', 'PATCH'] as const
}

export function getPatchContactsContactIdTopicsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts)[':contact_id']['topics']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.contacts)[':contact_id']['topics']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchContactsContactIdTopicsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.contacts)[':contact_id']['topics']['$patch']>,
    ) {
      return parseResponse(client.contacts[':contact_id'].topics.$patch(args, options))
    },
  })
}

export function usePatchContactsContactIdTopics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contacts)[':contact_id']['topics']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.contacts)[':contact_id']['topics']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchContactsContactIdTopicsMutationOptions<TError, TOnMutateResult>(
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

export function getLogsQueryKey(args: InferRequestType<typeof client.logs.$get>) {
  return ['logs', '/logs', args] as const
}

export function getLogsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.logs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLogsQueryKey>
  >({
    queryKey: getLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.logs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLogs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.logs.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLogsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLogs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.logs.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLogsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getLogsLogIdQueryKey(
  args: InferRequestType<(typeof client.logs)[':log_id']['$get']>,
) {
  return ['logs', '/logs/:log_id', args] as const
}

export function getLogsLogIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':log_id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.logs)[':log_id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':log_id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLogsLogIdQueryKey>
  >({
    queryKey: getLogsLogIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.logs[':log_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLogsLogId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':log_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.logs)[':log_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':log_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLogsLogIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLogsLogIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLogsLogId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':log_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.logs)[':log_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':log_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLogsLogIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLogsLogIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAutomationsQueryKey(args: InferRequestType<typeof client.automations.$get>) {
  return ['automations', '/automations', args] as const
}

export function getAutomationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.automations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAutomationsQueryKey>
  >({
    queryKey: getAutomationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.automations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAutomations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.automations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAutomationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAutomationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAutomations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.automations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAutomationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAutomationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAutomationsMutationKey() {
  return ['automations', '/automations', 'POST'] as const
}

export function getPostAutomationsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automations.$post>>>>>,
    TError,
    InferRequestType<typeof client.automations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAutomationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.automations.$post>) {
      return parseResponse(client.automations.$post(args, options))
    },
  })
}

export function usePostAutomations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automations.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.automations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAutomationsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAutomationsAutomationIdQueryKey(
  args: InferRequestType<(typeof client.automations)[':automation_id']['$get']>,
) {
  return ['automations', '/automations/:automation_id', args] as const
}

export function getAutomationsAutomationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.automations)[':automation_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.automations)[':automation_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.automations)[':automation_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutomationsAutomationIdQueryKey>
  >({
    queryKey: getAutomationsAutomationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.automations[':automation_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAutomationsAutomationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.automations)[':automation_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.automations)[':automation_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.automations)[':automation_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAutomationsAutomationIdQueryKey>
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
      ...getAutomationsAutomationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAutomationsAutomationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.automations)[':automation_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.automations)[':automation_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.automations)[':automation_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAutomationsAutomationIdQueryKey>
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
      ...getAutomationsAutomationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteAutomationsAutomationIdMutationKey() {
  return ['automations', '/automations/:automation_id', 'DELETE'] as const
}

export function getDeleteAutomationsAutomationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.automations)[':automation_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.automations)[':automation_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAutomationsAutomationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.automations)[':automation_id']['$delete']>,
    ) {
      return parseResponse(client.automations[':automation_id'].$delete(args, options))
    },
  })
}

export function useDeleteAutomationsAutomationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.automations)[':automation_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.automations)[':automation_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAutomationsAutomationIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchAutomationsAutomationIdMutationKey() {
  return ['automations', '/automations/:automation_id', 'PATCH'] as const
}

export function getPatchAutomationsAutomationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.automations)[':automation_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.automations)[':automation_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAutomationsAutomationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.automations)[':automation_id']['$patch']>,
    ) {
      return parseResponse(client.automations[':automation_id'].$patch(args, options))
    },
  })
}

export function usePatchAutomationsAutomationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.automations)[':automation_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.automations)[':automation_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAutomationsAutomationIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostAutomationsAutomationIdDuplicateMutationKey() {
  return ['automations', '/automations/:automation_id/duplicate', 'POST'] as const
}

export function getPostAutomationsAutomationIdDuplicateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.automations)[':automation_id']['duplicate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.automations)[':automation_id']['duplicate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAutomationsAutomationIdDuplicateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.automations)[':automation_id']['duplicate']['$post']>,
    ) {
      return parseResponse(client.automations[':automation_id'].duplicate.$post(args, options))
    },
  })
}

export function usePostAutomationsAutomationIdDuplicate<
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
                ReturnType<(typeof client.automations)[':automation_id']['duplicate']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.automations)[':automation_id']['duplicate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAutomationsAutomationIdDuplicateMutationOptions<
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

export function getPostAutomationsAutomationIdStopMutationKey() {
  return ['automations', '/automations/:automation_id/stop', 'POST'] as const
}

export function getPostAutomationsAutomationIdStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.automations)[':automation_id']['stop']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.automations)[':automation_id']['stop']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAutomationsAutomationIdStopMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.automations)[':automation_id']['stop']['$post']>,
    ) {
      return parseResponse(client.automations[':automation_id'].stop.$post(args, options))
    },
  })
}

export function usePostAutomationsAutomationIdStop<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.automations)[':automation_id']['stop']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.automations)[':automation_id']['stop']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAutomationsAutomationIdStopMutationOptions<
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

export function getAutomationsAutomationIdRunsQueryKey(
  args: InferRequestType<(typeof client.automations)[':automation_id']['runs']['$get']>,
) {
  return ['automations', '/automations/:automation_id/runs', args] as const
}

export function getAutomationsAutomationIdRunsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.automations)[':automation_id']['runs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.automations)[':automation_id']['runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.automations)[':automation_id']['runs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutomationsAutomationIdRunsQueryKey>
  >({
    queryKey: getAutomationsAutomationIdRunsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.automations[':automation_id'].runs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAutomationsAutomationIdRuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.automations)[':automation_id']['runs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.automations)[':automation_id']['runs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.automations)[':automation_id']['runs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAutomationsAutomationIdRunsQueryKey>
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
      ...getAutomationsAutomationIdRunsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAutomationsAutomationIdRuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.automations)[':automation_id']['runs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.automations)[':automation_id']['runs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.automations)[':automation_id']['runs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAutomationsAutomationIdRunsQueryKey>
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
      ...getAutomationsAutomationIdRunsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAutomationsAutomationIdRunsRunIdQueryKey(
  args: InferRequestType<(typeof client.automations)[':automation_id']['runs'][':run_id']['$get']>,
) {
  return ['automations', '/automations/:automation_id/runs/:run_id', args] as const
}

export function getAutomationsAutomationIdRunsRunIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.automations)[':automation_id']['runs'][':run_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.automations)[':automation_id']['runs'][':run_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.automations)[':automation_id']['runs'][':run_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutomationsAutomationIdRunsRunIdQueryKey>
  >({
    queryKey: getAutomationsAutomationIdRunsRunIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.automations[':automation_id'].runs[':run_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAutomationsAutomationIdRunsRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.automations)[':automation_id']['runs'][':run_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.automations)[':automation_id']['runs'][':run_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.automations)[':automation_id']['runs'][':run_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAutomationsAutomationIdRunsRunIdQueryKey>
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
      ...getAutomationsAutomationIdRunsRunIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAutomationsAutomationIdRunsRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.automations)[':automation_id']['runs'][':run_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.automations)[':automation_id']['runs'][':run_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.automations)[':automation_id']['runs'][':run_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAutomationsAutomationIdRunsRunIdQueryKey>
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
      ...getAutomationsAutomationIdRunsRunIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAutomationsAutomationIdRunsRunIdCancelMutationKey() {
  return ['automations', '/automations/:automation_id/runs/:run_id/cancel', 'POST'] as const
}

export function getPostAutomationsAutomationIdRunsRunIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.automations)[':automation_id']['runs'][':run_id']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.automations)[':automation_id']['runs'][':run_id']['cancel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAutomationsAutomationIdRunsRunIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.automations)[':automation_id']['runs'][':run_id']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.automations[':automation_id'].runs[':run_id'].cancel.$post(args, options),
      )
    },
  })
}

export function usePostAutomationsAutomationIdRunsRunIdCancel<
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
                  (typeof client.automations)[':automation_id']['runs'][':run_id']['cancel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.automations)[':automation_id']['runs'][':run_id']['cancel']['$post']
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
  const mutationDefaults = getPostAutomationsAutomationIdRunsRunIdCancelMutationOptions<
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

export function getEventsQueryKey(args: InferRequestType<typeof client.events.$get>) {
  return ['events', '/events', args] as const
}

export function getEventsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.events.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventsQueryKey>
  >({
    queryKey: getEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEvents<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.events.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEvents<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.events.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostEventsMutationKey() {
  return ['events', '/events', 'POST'] as const
}

export function getPostEventsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$post>>>>>,
    TError,
    InferRequestType<typeof client.events.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEventsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.events.$post>) {
      return parseResponse(client.events.$post(args, options))
    },
  })
}

export function usePostEvents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$post>>>>>,
        TError,
        InferRequestType<typeof client.events.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEventsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostEventsSendMutationKey() {
  return ['events', '/events/send', 'POST'] as const
}

export function getPostEventsSendMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.send.$post>>>>>,
    TError,
    InferRequestType<typeof client.events.send.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEventsSendMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.events.send.$post>) {
      return parseResponse(client.events.send.$post(args, options))
    },
  })
}

export function usePostEventsSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.send.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.events.send.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEventsSendMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getEventsIdentifierQueryKey(
  args: InferRequestType<(typeof client.events)[':identifier']['$get']>,
) {
  return ['events', '/events/:identifier', args] as const
}

export function getEventsIdentifierQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':identifier']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events)[':identifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':identifier']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsIdentifierQueryKey>
  >({
    queryKey: getEventsIdentifierQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events[':identifier'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEventsIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':identifier']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events)[':identifier']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':identifier']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventsIdentifierQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEventsIdentifierQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEventsIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':identifier']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events)[':identifier']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':identifier']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventsIdentifierQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEventsIdentifierQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteEventsIdentifierMutationKey() {
  return ['events', '/events/:identifier', 'DELETE'] as const
}

export function getDeleteEventsIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':identifier']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.events)[':identifier']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEventsIdentifierMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.events)[':identifier']['$delete']>) {
      return parseResponse(client.events[':identifier'].$delete(args, options))
    },
  })
}

export function useDeleteEventsIdentifier<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.events)[':identifier']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.events)[':identifier']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteEventsIdentifierMutationOptions<TError, TOnMutateResult>(
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

export function getPatchEventsIdentifierMutationKey() {
  return ['events', '/events/:identifier', 'PATCH'] as const
}

export function getPatchEventsIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':identifier']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.events)[':identifier']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchEventsIdentifierMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.events)[':identifier']['$patch']>) {
      return parseResponse(client.events[':identifier'].$patch(args, options))
    },
  })
}

export function usePatchEventsIdentifier<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.events)[':identifier']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.events)[':identifier']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchEventsIdentifierMutationOptions<TError, TOnMutateResult>(
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

export function getSuppressionsQueryKey(args: InferRequestType<typeof client.suppressions.$get>) {
  return ['suppressions', '/suppressions', args] as const
}

export function getSuppressionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suppressions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.suppressions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suppressions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSuppressionsQueryKey>
  >({
    queryKey: getSuppressionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.suppressions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSuppressions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suppressions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.suppressions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suppressions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSuppressionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSuppressionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSuppressions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suppressions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.suppressions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suppressions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSuppressionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSuppressionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSuppressionsMutationKey() {
  return ['suppressions', '/suppressions', 'POST'] as const
}

export function getPostSuppressionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suppressions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.suppressions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSuppressionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.suppressions.$post>) {
      return parseResponse(client.suppressions.$post(args, options))
    },
  })
}

export function usePostSuppressions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suppressions.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.suppressions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSuppressionsMutationOptions<TError, TOnMutateResult>(
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

export function getPostSuppressionsBatchAddMutationKey() {
  return ['suppressions', '/suppressions/batch/add', 'POST'] as const
}

export function getPostSuppressionsBatchAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.suppressions.batch.add.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.suppressions.batch.add.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSuppressionsBatchAddMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.suppressions.batch.add.$post>) {
      return parseResponse(client.suppressions.batch.add.$post(args, options))
    },
  })
}

export function usePostSuppressionsBatchAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.suppressions.batch.add.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.suppressions.batch.add.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSuppressionsBatchAddMutationOptions<TError, TOnMutateResult>(
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

export function getPostSuppressionsBatchRemoveMutationKey() {
  return ['suppressions', '/suppressions/batch/remove', 'POST'] as const
}

export function getPostSuppressionsBatchRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.suppressions.batch.remove.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.suppressions.batch.remove.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSuppressionsBatchRemoveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.suppressions.batch.remove.$post>) {
      return parseResponse(client.suppressions.batch.remove.$post(args, options))
    },
  })
}

export function usePostSuppressionsBatchRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.suppressions.batch.remove.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.suppressions.batch.remove.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSuppressionsBatchRemoveMutationOptions<TError, TOnMutateResult>(
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

export function getSuppressionsSuppressionQueryKey(
  args: InferRequestType<(typeof client.suppressions)[':suppression']['$get']>,
) {
  return ['suppressions', '/suppressions/:suppression', args] as const
}

export function getSuppressionsSuppressionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.suppressions)[':suppression']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.suppressions)[':suppression']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.suppressions)[':suppression']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSuppressionsSuppressionQueryKey>
  >({
    queryKey: getSuppressionsSuppressionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.suppressions[':suppression'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSuppressionsSuppression<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.suppressions)[':suppression']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.suppressions)[':suppression']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.suppressions)[':suppression']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSuppressionsSuppressionQueryKey>
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
      ...getSuppressionsSuppressionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSuppressionsSuppression<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.suppressions)[':suppression']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.suppressions)[':suppression']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.suppressions)[':suppression']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSuppressionsSuppressionQueryKey>
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
      ...getSuppressionsSuppressionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteSuppressionsSuppressionMutationKey() {
  return ['suppressions', '/suppressions/:suppression', 'DELETE'] as const
}

export function getDeleteSuppressionsSuppressionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.suppressions)[':suppression']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.suppressions)[':suppression']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSuppressionsSuppressionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.suppressions)[':suppression']['$delete']>,
    ) {
      return parseResponse(client.suppressions[':suppression'].$delete(args, options))
    },
  })
}

export function useDeleteSuppressionsSuppression<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.suppressions)[':suppression']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.suppressions)[':suppression']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSuppressionsSuppressionMutationOptions<TError, TOnMutateResult>(
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

export function getUsageQueryKey() {
  return ['usage', '/usage'] as const
}

export function getUsageQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usage.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usage.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsageQueryKey>
  >({
    queryKey: getUsageQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.usage.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUsage<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usage.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usage.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUsageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsageQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsage<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usage.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usage.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUsageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsageQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getInboxesQueryKey(args: InferRequestType<typeof client.inboxes.$get>) {
  return ['inboxes', '/inboxes', args] as const
}

export function getInboxesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inboxes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.inboxes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inboxes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInboxesQueryKey>
  >({
    queryKey: getInboxesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.inboxes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useInboxes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inboxes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.inboxes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inboxes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getInboxesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInboxesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInboxes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inboxes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.inboxes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inboxes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getInboxesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInboxesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostInboxesMutationKey() {
  return ['inboxes', '/inboxes', 'POST'] as const
}

export function getPostInboxesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inboxes.$post>>>>>,
    TError,
    InferRequestType<typeof client.inboxes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInboxesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.inboxes.$post>) {
      return parseResponse(client.inboxes.$post(args, options))
    },
  })
}

export function usePostInboxes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inboxes.$post>>>>>,
        TError,
        InferRequestType<typeof client.inboxes.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInboxesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getInboxesInboxIdQueryKey(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['$get']>,
) {
  return ['inboxes', '/inboxes/:inbox_id', args] as const
}

export function getInboxesInboxIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInboxesInboxIdQueryKey>
  >({
    queryKey: getInboxesInboxIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.inboxes[':inbox_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useInboxesInboxId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInboxesInboxIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInboxesInboxIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInboxesInboxId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInboxesInboxIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInboxesInboxIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteInboxesInboxIdMutationKey() {
  return ['inboxes', '/inboxes/:inbox_id', 'DELETE'] as const
}

export function getDeleteInboxesInboxIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.inboxes)[':inbox_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteInboxesInboxIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.inboxes)[':inbox_id']['$delete']>) {
      return parseResponse(client.inboxes[':inbox_id'].$delete(args, options))
    },
  })
}

export function useDeleteInboxesInboxId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.inboxes)[':inbox_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteInboxesInboxIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchInboxesInboxIdMutationKey() {
  return ['inboxes', '/inboxes/:inbox_id', 'PATCH'] as const
}

export function getPatchInboxesInboxIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.inboxes)[':inbox_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchInboxesInboxIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.inboxes)[':inbox_id']['$patch']>) {
      return parseResponse(client.inboxes[':inbox_id'].$patch(args, options))
    },
  })
}

export function usePatchInboxesInboxId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.inboxes)[':inbox_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchInboxesInboxIdMutationOptions<TError, TOnMutateResult>(
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

export function getInboxesInboxIdAgentQueryKey(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['agent']['$get']>,
) {
  return ['inboxes', '/inboxes/:inbox_id/agent', args] as const
}

export function getInboxesInboxIdAgentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['agent']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['agent']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['agent']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInboxesInboxIdAgentQueryKey>
  >({
    queryKey: getInboxesInboxIdAgentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.inboxes[':inbox_id'].agent.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInboxesInboxIdAgent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['agent']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['agent']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['agent']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInboxesInboxIdAgentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInboxesInboxIdAgentQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInboxesInboxIdAgent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['agent']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['agent']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['agent']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInboxesInboxIdAgentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInboxesInboxIdAgentQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatchInboxesInboxIdAgentMutationKey() {
  return ['inboxes', '/inboxes/:inbox_id/agent', 'PATCH'] as const
}

export function getPatchInboxesInboxIdAgentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['agent']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.inboxes)[':inbox_id']['agent']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchInboxesInboxIdAgentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.inboxes)[':inbox_id']['agent']['$patch']>,
    ) {
      return parseResponse(client.inboxes[':inbox_id'].agent.$patch(args, options))
    },
  })
}

export function usePatchInboxesInboxIdAgent<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['agent']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.inboxes)[':inbox_id']['agent']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchInboxesInboxIdAgentMutationOptions<TError, TOnMutateResult>(
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

export function getInboxesInboxIdLabelsQueryKey(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['labels']['$get']>,
) {
  return ['inboxes', '/inboxes/:inbox_id/labels', args] as const
}

export function getInboxesInboxIdLabelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['labels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInboxesInboxIdLabelsQueryKey>
  >({
    queryKey: getInboxesInboxIdLabelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.inboxes[':inbox_id'].labels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInboxesInboxIdLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['labels']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['labels']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInboxesInboxIdLabelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInboxesInboxIdLabelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInboxesInboxIdLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['labels']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['labels']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInboxesInboxIdLabelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInboxesInboxIdLabelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostInboxesInboxIdLabelsMutationKey() {
  return ['inboxes', '/inboxes/:inbox_id/labels', 'POST'] as const
}

export function getPostInboxesInboxIdLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['labels']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.inboxes)[':inbox_id']['labels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInboxesInboxIdLabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.inboxes)[':inbox_id']['labels']['$post']>,
    ) {
      return parseResponse(client.inboxes[':inbox_id'].labels.$post(args, options))
    },
  })
}

export function usePostInboxesInboxIdLabels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['labels']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.inboxes)[':inbox_id']['labels']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInboxesInboxIdLabelsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteInboxesInboxIdLabelsLabelIdMutationKey() {
  return ['inboxes', '/inboxes/:inbox_id/labels/:label_id', 'DELETE'] as const
}

export function getDeleteInboxesInboxIdLabelsLabelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.inboxes)[':inbox_id']['labels'][':label_id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.inboxes)[':inbox_id']['labels'][':label_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteInboxesInboxIdLabelsLabelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.inboxes)[':inbox_id']['labels'][':label_id']['$delete']
      >,
    ) {
      return parseResponse(client.inboxes[':inbox_id'].labels[':label_id'].$delete(args, options))
    },
  })
}

export function useDeleteInboxesInboxIdLabelsLabelId<
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
                ReturnType<(typeof client.inboxes)[':inbox_id']['labels'][':label_id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.inboxes)[':inbox_id']['labels'][':label_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteInboxesInboxIdLabelsLabelIdMutationOptions<
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

export function getPatchInboxesInboxIdLabelsLabelIdMutationKey() {
  return ['inboxes', '/inboxes/:inbox_id/labels/:label_id', 'PATCH'] as const
}

export function getPatchInboxesInboxIdLabelsLabelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['labels'][':label_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.inboxes)[':inbox_id']['labels'][':label_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchInboxesInboxIdLabelsLabelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.inboxes)[':inbox_id']['labels'][':label_id']['$patch']>,
    ) {
      return parseResponse(client.inboxes[':inbox_id'].labels[':label_id'].$patch(args, options))
    },
  })
}

export function usePatchInboxesInboxIdLabelsLabelId<
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
                ReturnType<(typeof client.inboxes)[':inbox_id']['labels'][':label_id']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.inboxes)[':inbox_id']['labels'][':label_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchInboxesInboxIdLabelsLabelIdMutationOptions<
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

export function getInboxesInboxIdThreadsQueryKey(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['threads']['$get']>,
) {
  return ['inboxes', '/inboxes/:inbox_id/threads', args] as const
}

export function getInboxesInboxIdThreadsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['threads']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['threads']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['threads']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInboxesInboxIdThreadsQueryKey>
  >({
    queryKey: getInboxesInboxIdThreadsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.inboxes[':inbox_id'].threads.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInboxesInboxIdThreads<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['threads']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['threads']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['threads']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInboxesInboxIdThreadsQueryKey>
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
      ...getInboxesInboxIdThreadsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInboxesInboxIdThreads<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['threads']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['threads']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['threads']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInboxesInboxIdThreadsQueryKey>
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
      ...getInboxesInboxIdThreadsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInboxesInboxIdThreadsSearchQueryKey(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['threads']['search']['$get']>,
) {
  return ['inboxes', '/inboxes/:inbox_id/threads/search', args] as const
}

export function getInboxesInboxIdThreadsSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['threads']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['threads']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['threads']['search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInboxesInboxIdThreadsSearchQueryKey>
  >({
    queryKey: getInboxesInboxIdThreadsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.inboxes[':inbox_id'].threads.search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInboxesInboxIdThreadsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['threads']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['threads']['search']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['threads']['search']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInboxesInboxIdThreadsSearchQueryKey>
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
      ...getInboxesInboxIdThreadsSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInboxesInboxIdThreadsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['threads']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['threads']['search']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['threads']['search']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInboxesInboxIdThreadsSearchQueryKey>
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
      ...getInboxesInboxIdThreadsSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInboxesInboxIdThreadsThreadIdQueryKey(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['$get']>,
) {
  return ['inboxes', '/inboxes/:inbox_id/threads/:thread_id', args] as const
}

export function getInboxesInboxIdThreadsThreadIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInboxesInboxIdThreadsThreadIdQueryKey>
  >({
    queryKey: getInboxesInboxIdThreadsThreadIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.inboxes[':inbox_id'].threads[':thread_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInboxesInboxIdThreadsThreadId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInboxesInboxIdThreadsThreadIdQueryKey>
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
      ...getInboxesInboxIdThreadsThreadIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInboxesInboxIdThreadsThreadId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInboxesInboxIdThreadsThreadIdQueryKey>
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
      ...getInboxesInboxIdThreadsThreadIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteInboxesInboxIdThreadsThreadIdMutationKey() {
  return ['inboxes', '/inboxes/:inbox_id/threads/:thread_id', 'DELETE'] as const
}

export function getDeleteInboxesInboxIdThreadsThreadIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteInboxesInboxIdThreadsThreadIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['$delete']
      >,
    ) {
      return parseResponse(client.inboxes[':inbox_id'].threads[':thread_id'].$delete(args, options))
    },
  })
}

export function useDeleteInboxesInboxIdThreadsThreadId<
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
                ReturnType<(typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteInboxesInboxIdThreadsThreadIdMutationOptions<
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

export function getPatchInboxesInboxIdThreadsThreadIdMutationKey() {
  return ['inboxes', '/inboxes/:inbox_id/threads/:thread_id', 'PATCH'] as const
}

export function getPatchInboxesInboxIdThreadsThreadIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchInboxesInboxIdThreadsThreadIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['$patch']
      >,
    ) {
      return parseResponse(client.inboxes[':inbox_id'].threads[':thread_id'].$patch(args, options))
    },
  })
}

export function usePatchInboxesInboxIdThreadsThreadId<
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
                ReturnType<(typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchInboxesInboxIdThreadsThreadIdMutationOptions<
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

export function getPutInboxesInboxIdThreadsThreadIdLabelsMutationKey() {
  return ['inboxes', '/inboxes/:inbox_id/threads/:thread_id/labels', 'PUT'] as const
}

export function getPutInboxesInboxIdThreadsThreadIdLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['labels']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['labels']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutInboxesInboxIdThreadsThreadIdLabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['labels']['$put']
      >,
    ) {
      return parseResponse(
        client.inboxes[':inbox_id'].threads[':thread_id'].labels.$put(args, options),
      )
    },
  })
}

export function usePutInboxesInboxIdThreadsThreadIdLabels<
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
                  (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['labels']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['labels']['$put']
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
  const mutationDefaults = getPutInboxesInboxIdThreadsThreadIdLabelsMutationOptions<
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

export function getPostInboxesInboxIdThreadsThreadIdLabelsMutationKey() {
  return ['inboxes', '/inboxes/:inbox_id/threads/:thread_id/labels', 'POST'] as const
}

export function getPostInboxesInboxIdThreadsThreadIdLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['labels']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['labels']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostInboxesInboxIdThreadsThreadIdLabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['labels']['$post']
      >,
    ) {
      return parseResponse(
        client.inboxes[':inbox_id'].threads[':thread_id'].labels.$post(args, options),
      )
    },
  })
}

export function usePostInboxesInboxIdThreadsThreadIdLabels<
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
                  (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['labels']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['labels']['$post']
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
  const mutationDefaults = getPostInboxesInboxIdThreadsThreadIdLabelsMutationOptions<
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

export function getDeleteInboxesInboxIdThreadsThreadIdLabelsLabelIdMutationKey() {
  return ['inboxes', '/inboxes/:inbox_id/threads/:thread_id/labels/:label_id', 'DELETE'] as const
}

export function getDeleteInboxesInboxIdThreadsThreadIdLabelsLabelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['labels'][':label_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['labels'][':label_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteInboxesInboxIdThreadsThreadIdLabelsLabelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['labels'][':label_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.inboxes[':inbox_id'].threads[':thread_id'].labels[':label_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteInboxesInboxIdThreadsThreadIdLabelsLabelId<
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
                  (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['labels'][':label_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['labels'][':label_id']['$delete']
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
  const mutationDefaults = getDeleteInboxesInboxIdThreadsThreadIdLabelsLabelIdMutationOptions<
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

export function getInboxesInboxIdThreadsThreadIdEmailsQueryKey(
  args: InferRequestType<
    (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails']['$get']
  >,
) {
  return ['inboxes', '/inboxes/:inbox_id/threads/:thread_id/emails', args] as const
}

export function getInboxesInboxIdThreadsThreadIdEmailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInboxesInboxIdThreadsThreadIdEmailsQueryKey>
  >({
    queryKey: getInboxesInboxIdThreadsThreadIdEmailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.inboxes[':inbox_id'].threads[':thread_id'].emails.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInboxesInboxIdThreadsThreadIdEmails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInboxesInboxIdThreadsThreadIdEmailsQueryKey>
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
      ...getInboxesInboxIdThreadsThreadIdEmailsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInboxesInboxIdThreadsThreadIdEmails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInboxesInboxIdThreadsThreadIdEmailsQueryKey>
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
      ...getInboxesInboxIdThreadsThreadIdEmailsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInboxesInboxIdThreadsThreadIdEmailsEmailIdQueryKey(
  args: InferRequestType<
    (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails'][':email_id']['$get']
  >,
) {
  return ['inboxes', '/inboxes/:inbox_id/threads/:thread_id/emails/:email_id', args] as const
}

export function getInboxesInboxIdThreadsThreadIdEmailsEmailIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails'][':email_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails'][':email_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails'][':email_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInboxesInboxIdThreadsThreadIdEmailsEmailIdQueryKey>
  >({
    queryKey: getInboxesInboxIdThreadsThreadIdEmailsEmailIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.inboxes[':inbox_id'].threads[':thread_id'].emails[':email_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInboxesInboxIdThreadsThreadIdEmailsEmailId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails'][':email_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails'][':email_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails'][':email_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInboxesInboxIdThreadsThreadIdEmailsEmailIdQueryKey>
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
      ...getInboxesInboxIdThreadsThreadIdEmailsEmailIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInboxesInboxIdThreadsThreadIdEmailsEmailId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails'][':email_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails'][':email_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails'][':email_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInboxesInboxIdThreadsThreadIdEmailsEmailIdQueryKey>
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
      ...getInboxesInboxIdThreadsThreadIdEmailsEmailIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostInboxesInboxIdThreadsThreadIdEmailsEmailIdReplyMutationKey() {
  return [
    'inboxes',
    '/inboxes/:inbox_id/threads/:thread_id/emails/:email_id/reply',
    'POST',
  ] as const
}

export function getPostInboxesInboxIdThreadsThreadIdEmailsEmailIdReplyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails'][':email_id']['reply']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails'][':email_id']['reply']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostInboxesInboxIdThreadsThreadIdEmailsEmailIdReplyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails'][':email_id']['reply']['$post']
      >,
    ) {
      return parseResponse(
        client.inboxes[':inbox_id'].threads[':thread_id'].emails[':email_id'].reply.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostInboxesInboxIdThreadsThreadIdEmailsEmailIdReply<
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
                  (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails'][':email_id']['reply']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails'][':email_id']['reply']['$post']
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
  const mutationDefaults = getPostInboxesInboxIdThreadsThreadIdEmailsEmailIdReplyMutationOptions<
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

export function getPostInboxesInboxIdThreadsThreadIdEmailsEmailIdForwardMutationKey() {
  return [
    'inboxes',
    '/inboxes/:inbox_id/threads/:thread_id/emails/:email_id/forward',
    'POST',
  ] as const
}

export function getPostInboxesInboxIdThreadsThreadIdEmailsEmailIdForwardMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails'][':email_id']['forward']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails'][':email_id']['forward']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostInboxesInboxIdThreadsThreadIdEmailsEmailIdForwardMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails'][':email_id']['forward']['$post']
      >,
    ) {
      return parseResponse(
        client.inboxes[':inbox_id'].threads[':thread_id'].emails[':email_id'].forward.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostInboxesInboxIdThreadsThreadIdEmailsEmailIdForward<
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
                  (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails'][':email_id']['forward']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails'][':email_id']['forward']['$post']
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
  const mutationDefaults = getPostInboxesInboxIdThreadsThreadIdEmailsEmailIdForwardMutationOptions<
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

export function getInboxesInboxIdDraftsQueryKey(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['drafts']['$get']>,
) {
  return ['inboxes', '/inboxes/:inbox_id/drafts', args] as const
}

export function getInboxesInboxIdDraftsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['drafts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['drafts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['drafts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInboxesInboxIdDraftsQueryKey>
  >({
    queryKey: getInboxesInboxIdDraftsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.inboxes[':inbox_id'].drafts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInboxesInboxIdDrafts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['drafts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['drafts']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['drafts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInboxesInboxIdDraftsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInboxesInboxIdDraftsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInboxesInboxIdDrafts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['drafts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['drafts']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['drafts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInboxesInboxIdDraftsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInboxesInboxIdDraftsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostInboxesInboxIdDraftsMutationKey() {
  return ['inboxes', '/inboxes/:inbox_id/drafts', 'POST'] as const
}

export function getPostInboxesInboxIdDraftsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['drafts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.inboxes)[':inbox_id']['drafts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInboxesInboxIdDraftsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.inboxes)[':inbox_id']['drafts']['$post']>,
    ) {
      return parseResponse(client.inboxes[':inbox_id'].drafts.$post(args, options))
    },
  })
}

export function usePostInboxesInboxIdDrafts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['drafts']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.inboxes)[':inbox_id']['drafts']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInboxesInboxIdDraftsMutationOptions<TError, TOnMutateResult>(
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

export function getInboxesInboxIdDraftsDraftIdQueryKey(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['$get']>,
) {
  return ['inboxes', '/inboxes/:inbox_id/drafts/:draft_id', args] as const
}

export function getInboxesInboxIdDraftsDraftIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInboxesInboxIdDraftsDraftIdQueryKey>
  >({
    queryKey: getInboxesInboxIdDraftsDraftIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.inboxes[':inbox_id'].drafts[':draft_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInboxesInboxIdDraftsDraftId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInboxesInboxIdDraftsDraftIdQueryKey>
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
      ...getInboxesInboxIdDraftsDraftIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInboxesInboxIdDraftsDraftId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInboxesInboxIdDraftsDraftIdQueryKey>
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
      ...getInboxesInboxIdDraftsDraftIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteInboxesInboxIdDraftsDraftIdMutationKey() {
  return ['inboxes', '/inboxes/:inbox_id/drafts/:draft_id', 'DELETE'] as const
}

export function getDeleteInboxesInboxIdDraftsDraftIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteInboxesInboxIdDraftsDraftIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['$delete']
      >,
    ) {
      return parseResponse(client.inboxes[':inbox_id'].drafts[':draft_id'].$delete(args, options))
    },
  })
}

export function useDeleteInboxesInboxIdDraftsDraftId<
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
                ReturnType<(typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteInboxesInboxIdDraftsDraftIdMutationOptions<
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

export function getPatchInboxesInboxIdDraftsDraftIdMutationKey() {
  return ['inboxes', '/inboxes/:inbox_id/drafts/:draft_id', 'PATCH'] as const
}

export function getPatchInboxesInboxIdDraftsDraftIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchInboxesInboxIdDraftsDraftIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['$patch']>,
    ) {
      return parseResponse(client.inboxes[':inbox_id'].drafts[':draft_id'].$patch(args, options))
    },
  })
}

export function usePatchInboxesInboxIdDraftsDraftId<
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
                ReturnType<(typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchInboxesInboxIdDraftsDraftIdMutationOptions<
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

export function getPostInboxesInboxIdDraftsDraftIdSendMutationKey() {
  return ['inboxes', '/inboxes/:inbox_id/drafts/:draft_id/send', 'POST'] as const
}

export function getPostInboxesInboxIdDraftsDraftIdSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['send']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['send']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInboxesInboxIdDraftsDraftIdSendMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['send']['$post']
      >,
    ) {
      return parseResponse(
        client.inboxes[':inbox_id'].drafts[':draft_id'].send.$post(args, options),
      )
    },
  })
}

export function usePostInboxesInboxIdDraftsDraftIdSend<
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
                  (typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['send']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['send']['$post']
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
  const mutationDefaults = getPostInboxesInboxIdDraftsDraftIdSendMutationOptions<
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
