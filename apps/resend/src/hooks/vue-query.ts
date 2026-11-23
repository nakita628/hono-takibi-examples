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

export function getEmailsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.emails.$get>>,
) {
  return ['emails', '/emails', toValue(args)] as const
}

export function getEmailsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.emails.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.emails.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEmails<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.emails.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$get>>>>>,
          ReturnType<typeof getEmailsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEmailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.emails.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.emails.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.emails)[':email_id']['$get']>>,
) {
  return ['emails', '/emails/:email_id', toValue(args)] as const
}

export function getEmailsEmailIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.emails)[':email_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmailsEmailIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.emails[':email_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEmailsEmailId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':email_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.emails)[':email_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':email_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':email_id']['$get']>>>
            >
          >,
          ReturnType<typeof getEmailsEmailIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':email_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmailsEmailIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmailsEmailIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.emails[':email_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.emails)[':email_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.emails)[':email_id']['$patch']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.batch.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.emails.batch.$post>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.emails)[':email_id']['attachments']['$get']>
  >,
) {
  return ['emails', '/emails/:email_id/attachments', toValue(args)] as const
}

export function getEmailsEmailIdAttachmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.emails)[':email_id']['attachments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmailsEmailIdAttachmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.emails[':email_id'].attachments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.emails)[':email_id']['attachments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.emails)[':email_id']['attachments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEmailsEmailIdAttachmentsQueryKey>
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
          Awaited<ReturnType<(typeof client.emails)[':email_id']['attachments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmailsEmailIdAttachmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmailsEmailIdAttachmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.emails[':email_id'].attachments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEmailsEmailIdAttachmentsAttachmentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.emails)[':email_id']['attachments'][':attachment_id']['$get']>
  >,
) {
  return ['emails', '/emails/:email_id/attachments/:attachment_id', toValue(args)] as const
}

export function getEmailsEmailIdAttachmentsAttachmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.emails)[':email_id']['attachments'][':attachment_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmailsEmailIdAttachmentsAttachmentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.emails[':email_id'].attachments[':attachment_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.emails)[':email_id']['attachments'][':attachment_id']['$get']>
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
                    (typeof client.emails)[':email_id']['attachments'][':attachment_id']['$get']
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
                    (typeof client.emails)[':email_id']['attachments'][':attachment_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEmailsEmailIdAttachmentsAttachmentIdQueryKey>
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
            ReturnType<(typeof client.emails)[':email_id']['attachments'][':attachment_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmailsEmailIdAttachmentsAttachmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmailsEmailIdAttachmentsAttachmentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.emails[':email_id'].attachments[':attachment_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEmailsReceivingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.emails.receiving.$get>>,
) {
  return ['emails', '/emails/receiving', toValue(args)] as const
}

export function getEmailsReceivingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.emails.receiving.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmailsReceivingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.emails.receiving.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEmailsReceiving<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.receiving.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.emails.receiving.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.emails.receiving.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.emails.receiving.$get>>>
            >
          >,
          ReturnType<typeof getEmailsReceivingQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.receiving.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEmailsReceivingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmailsReceivingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.emails.receiving.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEmailsReceivingEmailIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.emails.receiving)[':email_id']['$get']>>,
) {
  return ['emails', '/emails/receiving/:email_id', toValue(args)] as const
}

export function getEmailsReceivingEmailIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.emails.receiving)[':email_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmailsReceivingEmailIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.emails.receiving[':email_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.emails.receiving)[':email_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.emails.receiving)[':email_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEmailsReceivingEmailIdQueryKey>
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
          Awaited<ReturnType<(typeof client.emails.receiving)[':email_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmailsReceivingEmailIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmailsReceivingEmailIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.emails.receiving[':email_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEmailsReceivingEmailIdAttachmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.emails.receiving)[':email_id']['attachments']['$get']>
  >,
) {
  return ['emails', '/emails/receiving/:email_id/attachments', toValue(args)] as const
}

export function getEmailsReceivingEmailIdAttachmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.emails.receiving)[':email_id']['attachments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmailsReceivingEmailIdAttachmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.emails.receiving[':email_id'].attachments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.emails.receiving)[':email_id']['attachments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.emails.receiving)[':email_id']['attachments']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEmailsReceivingEmailIdAttachmentsQueryKey>
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
          Awaited<ReturnType<(typeof client.emails.receiving)[':email_id']['attachments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmailsReceivingEmailIdAttachmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmailsReceivingEmailIdAttachmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.emails.receiving[':email_id'].attachments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEmailsReceivingEmailIdAttachmentsAttachmentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.emails.receiving)[':email_id']['attachments'][':attachment_id']['$get']
    >
  >,
) {
  return [
    'emails',
    '/emails/receiving/:email_id/attachments/:attachment_id',
    toValue(args),
  ] as const
}

export function getEmailsReceivingEmailIdAttachmentsAttachmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.emails.receiving)[':email_id']['attachments'][':attachment_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmailsReceivingEmailIdAttachmentsAttachmentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.emails.receiving[':email_id'].attachments[':attachment_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.emails.receiving)[':email_id']['attachments'][':attachment_id']['$get']
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
                    (typeof client.emails.receiving)[':email_id']['attachments'][':attachment_id']['$get']
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
                    (typeof client.emails.receiving)[':email_id']['attachments'][':attachment_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEmailsReceivingEmailIdAttachmentsAttachmentIdQueryKey>
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
              (typeof client.emails.receiving)[':email_id']['attachments'][':attachment_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmailsReceivingEmailIdAttachmentsAttachmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmailsReceivingEmailIdAttachmentsAttachmentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.emails.receiving[':email_id'].attachments[':attachment_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEmailsMetricsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.emails.metrics.$get>>,
) {
  return ['emails', '/emails/metrics', toValue(args)] as const
}

export function getEmailsMetricsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.emails.metrics.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmailsMetricsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.emails.metrics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEmailsMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.emails.metrics.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.metrics.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.metrics.$get>>>>
          >,
          ReturnType<typeof getEmailsMetricsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.metrics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEmailsMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmailsMetricsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.emails.metrics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDomainsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.domains.$get>>,
) {
  return ['domains', '/domains', toValue(args)] as const
}

export function getDomainsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.domains.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domains.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDomains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.domains.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>
          >,
          ReturnType<typeof getDomainsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDomainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domains.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.domains.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domains)[':domain_id']['$get']>>,
) {
  return ['domains', '/domains/:domain_id', toValue(args)] as const
}

export function getDomainsDomainIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domains)[':domain_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainsDomainIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domains[':domain_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDomainsDomainId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domain_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domains)[':domain_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':domain_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':domain_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDomainsDomainIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domain_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsDomainIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainsDomainIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domains[':domain_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.claim.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.domains.claim.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domains)[':domain_id']['claim']['$get']>>,
) {
  return ['domains', '/domains/:domain_id/claim', toValue(args)] as const
}

export function getDomainsDomainIdClaimQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domains)[':domain_id']['claim']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainsDomainIdClaimQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domains[':domain_id'].claim.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domains)[':domain_id']['claim']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':domain_id']['claim']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDomainsDomainIdClaimQueryKey>
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
          Awaited<ReturnType<(typeof client.domains)[':domain_id']['claim']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsDomainIdClaimQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainsDomainIdClaimQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domains[':domain_id'].claim.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.domains)[':domain_id']['claim']['verify']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.domains)[':domain_id']['claim']['verify']['$post']>,
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

export function getApiKeysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['api-keys']['$get']>>,
) {
  return ['api-keys', '/api-keys', toValue(args)] as const
}

export function getApiKeysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['api-keys']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['api-keys'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['api-keys']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$get']>>>
            >
          >,
          ReturnType<typeof getApiKeysQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['api-keys'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getOauthGrantsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.oauth.grants.$get>>,
) {
  return ['oauth', '/oauth/grants', toValue(args)] as const
}

export function getOauthGrantsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.oauth.grants.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOauthGrantsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.oauth.grants.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOauthGrants<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.grants.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.oauth.grants.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.grants.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.grants.$get>>>>
          >,
          ReturnType<typeof getOauthGrantsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.grants.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOauthGrantsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOauthGrantsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.oauth.grants.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getTemplatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.templates.$get>>,
) {
  return ['templates', '/templates', toValue(args)] as const
}

export function getTemplatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.templates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.templates.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.templates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
          >,
          ReturnType<typeof getTemplatesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.templates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.templates.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.templates)[':id']['$get']>>,
) {
  return ['templates', '/templates/:id', toValue(args)] as const
}

export function getTemplatesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.templates)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTemplatesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.templates[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTemplatesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.templates)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getTemplatesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTemplatesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.templates[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getAudiencesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAudiencesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.audiences.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAudiences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$get>>>>
          >,
          ReturnType<typeof getAudiencesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAudiencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAudiencesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.audiences.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.audiences.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.audiences)[':id']['$get']>>,
) {
  return ['audiences', '/audiences/:id', toValue(args)] as const
}

export function getAudiencesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.audiences)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAudiencesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.audiences[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAudiencesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.audiences)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getAudiencesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAudiencesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAudiencesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.audiences[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getContactsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contacts.$get>>,
) {
  return ['contacts', '/contacts', toValue(args)] as const
}

export function getContactsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contacts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contacts.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useContacts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contacts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>
          >,
          ReturnType<typeof getContactsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getContactsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contacts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.contacts.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.contacts.imports.$get>>,
) {
  return ['contacts', '/contacts/imports', toValue(args)] as const
}

export function getContactsImportsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contacts.imports.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsImportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contacts.imports.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactsImports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.imports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contacts.imports.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.contacts.imports.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.contacts.imports.$get>>>
            >
          >,
          ReturnType<typeof getContactsImportsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.imports.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContactsImportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsImportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contacts.imports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contacts.imports)[':id']['$get']>>,
) {
  return ['contacts', '/contacts/imports/:id', toValue(args)] as const
}

export function getContactsImportsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contacts.imports)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsImportsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contacts.imports[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactsImportsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.contacts.imports)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contacts.imports)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contacts.imports)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContactsImportsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.contacts.imports)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsImportsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsImportsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contacts.imports[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getContactsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contacts)[':id']['$get']>>,
) {
  return ['contacts', '/contacts/:id', toValue(args)] as const
}

export function getContactsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contacts)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contacts[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contacts)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getContactsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContactsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contacts[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getBroadcastsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.broadcasts.$get>>,
) {
  return ['broadcasts', '/broadcasts', toValue(args)] as const
}

export function getBroadcastsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.broadcasts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBroadcastsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.broadcasts.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBroadcasts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.broadcasts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.broadcasts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.broadcasts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.broadcasts.$get>>>>
          >,
          ReturnType<typeof getBroadcastsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.broadcasts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBroadcastsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBroadcastsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.broadcasts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.broadcasts.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.broadcasts.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.broadcasts)[':id']['$get']>>,
) {
  return ['broadcasts', '/broadcasts/:id', toValue(args)] as const
}

export function getBroadcastsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.broadcasts)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBroadcastsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.broadcasts[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBroadcastsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.broadcasts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.broadcasts)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.broadcasts)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.broadcasts)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getBroadcastsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.broadcasts)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBroadcastsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBroadcastsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.broadcasts[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.broadcasts)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.broadcasts)[':id']['$delete']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.broadcasts)[':id']['recipients']['$get']>>,
) {
  return ['broadcasts', '/broadcasts/:id/recipients', toValue(args)] as const
}

export function getBroadcastsIdRecipientsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.broadcasts)[':id']['recipients']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBroadcastsIdRecipientsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.broadcasts[':id'].recipients.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.broadcasts)[':id']['recipients']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.broadcasts)[':id']['recipients']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBroadcastsIdRecipientsQueryKey>
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
          Awaited<ReturnType<(typeof client.broadcasts)[':id']['recipients']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBroadcastsIdRecipientsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBroadcastsIdRecipientsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.broadcasts[':id'].recipients.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBroadcastsIdClickedLinksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.broadcasts)[':id']['clicked-links']['$get']>
  >,
) {
  return ['broadcasts', '/broadcasts/:id/clicked-links', toValue(args)] as const
}

export function getBroadcastsIdClickedLinksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.broadcasts)[':id']['clicked-links']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBroadcastsIdClickedLinksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.broadcasts[':id']['clicked-links'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.broadcasts)[':id']['clicked-links']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.broadcasts)[':id']['clicked-links']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBroadcastsIdClickedLinksQueryKey>
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
          Awaited<ReturnType<(typeof client.broadcasts)[':id']['clicked-links']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBroadcastsIdClickedLinksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBroadcastsIdClickedLinksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.broadcasts[':id']['clicked-links'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWebhooksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhooks.$get>>,
) {
  return ['webhooks', '/webhooks', toValue(args)] as const
}

export function getWebhooksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhooks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWebhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhooks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
          >,
          ReturnType<typeof getWebhooksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWebhooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.webhooks.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>>,
) {
  return ['webhooks', '/webhooks/:webhook_id', toValue(args)] as const
}

export function getWebhooksWebhookIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksWebhookIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks[':webhook_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWebhooksWebhookIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksWebhookIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksWebhookIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks[':webhook_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webhooks)[':webhook_id']['events']['$get']>
  >,
) {
  return ['webhooks', '/webhooks/:webhook_id/events', toValue(args)] as const
}

export function getWebhooksWebhookIdEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webhooks)[':webhook_id']['events']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksWebhookIdEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks[':webhook_id'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webhooks)[':webhook_id']['events']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['events']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWebhooksWebhookIdEventsQueryKey>
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
          Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksWebhookIdEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksWebhookIdEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks[':webhook_id'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWebhooksWebhookIdEventsEventIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webhooks)[':webhook_id']['events'][':event_id']['$get']>
  >,
) {
  return ['webhooks', '/webhooks/:webhook_id/events/:event_id', toValue(args)] as const
}

export function getWebhooksWebhookIdEventsEventIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webhooks)[':webhook_id']['events'][':event_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksWebhookIdEventsEventIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks[':webhook_id'].events[':event_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webhooks)[':webhook_id']['events'][':event_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.webhooks)[':webhook_id']['events'][':event_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getWebhooksWebhookIdEventsEventIdQueryKey>
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
            ReturnType<(typeof client.webhooks)[':webhook_id']['events'][':event_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksWebhookIdEventsEventIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksWebhookIdEventsEventIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks[':webhook_id'].events[':event_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.webhooks)[':webhook_id']['events'][':event_id']['attempts']['$get']
    >
  >,
) {
  return ['webhooks', '/webhooks/:webhook_id/events/:event_id/attempts', toValue(args)] as const
}

export function getWebhooksWebhookIdEventsEventIdAttemptsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.webhooks)[':webhook_id']['events'][':event_id']['attempts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksWebhookIdEventsEventIdAttemptsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks[':webhook_id'].events[':event_id'].attempts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.webhooks)[':webhook_id']['events'][':event_id']['attempts']['$get']
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
                    (typeof client.webhooks)[':webhook_id']['events'][':event_id']['attempts']['$get']
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
                    (typeof client.webhooks)[':webhook_id']['events'][':event_id']['attempts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWebhooksWebhookIdEventsEventIdAttemptsQueryKey>
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
              (typeof client.webhooks)[':webhook_id']['events'][':event_id']['attempts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksWebhookIdEventsEventIdAttemptsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksWebhookIdEventsEventIdAttemptsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks[':webhook_id'].events[':event_id'].attempts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSegmentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.segments.$get>>,
) {
  return ['segments', '/segments', toValue(args)] as const
}

export function getSegmentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.segments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSegmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.segments.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSegments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.segments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.$get>>>>
          >,
          ReturnType<typeof getSegmentsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSegmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSegmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.segments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.segments.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.segments)[':id']['$get']>>,
) {
  return ['segments', '/segments/:id', toValue(args)] as const
}

export function getSegmentsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.segments)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSegmentsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.segments[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSegmentsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.segments)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.segments)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.segments)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.segments)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getSegmentsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.segments)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSegmentsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSegmentsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.segments[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.segments)[':id']['contacts']['$get']>>,
) {
  return ['segments', '/segments/:id/contacts', toValue(args)] as const
}

export function getSegmentsIdContactsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.segments)[':id']['contacts']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSegmentsIdContactsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.segments[':id'].contacts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSegmentsIdContacts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.segments)[':id']['contacts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.segments)[':id']['contacts']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.segments)[':id']['contacts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSegmentsIdContactsQueryKey>
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
          Awaited<ReturnType<(typeof client.segments)[':id']['contacts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSegmentsIdContactsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSegmentsIdContactsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.segments[':id'].contacts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTopicsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.topics.$get>>,
) {
  return ['topics', '/topics', toValue(args)] as const
}

export function getTopicsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.topics.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTopicsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.topics.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTopics<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topics.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.topics.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topics.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topics.$get>>>>>,
          ReturnType<typeof getTopicsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topics.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTopicsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTopicsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.topics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topics.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.topics.$post>,
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

export function getTopicsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.topics)[':id']['$get']>>,
) {
  return ['topics', '/topics/:id', toValue(args)] as const
}

export function getTopicsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.topics)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTopicsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.topics[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTopicsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.topics)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.topics)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.topics)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.topics)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getTopicsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.topics)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTopicsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTopicsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.topics[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['contact-properties']['$get']>>,
) {
  return ['contact-properties', '/contact-properties', toValue(args)] as const
}

export function getContactPropertiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['contact-properties']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactPropertiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['contact-properties'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactProperties<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['contact-properties']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['contact-properties']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['contact-properties']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['contact-properties']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContactPropertiesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['contact-properties']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactPropertiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactPropertiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['contact-properties'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['contact-properties'][':id']['$get']>>,
) {
  return ['contact-properties', '/contact-properties/:id', toValue(args)] as const
}

export function getContactPropertiesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['contact-properties'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactPropertiesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['contact-properties'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['contact-properties'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['contact-properties'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContactPropertiesIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['contact-properties'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactPropertiesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactPropertiesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['contact-properties'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contacts)[':contact_id']['segments']['$get']>
  >,
) {
  return ['contacts', '/contacts/:contact_id/segments', toValue(args)] as const
}

export function getContactsContactIdSegmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contacts)[':contact_id']['segments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsContactIdSegmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contacts[':contact_id'].segments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contacts)[':contact_id']['segments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contacts)[':contact_id']['segments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContactsContactIdSegmentsQueryKey>
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
          Awaited<ReturnType<(typeof client.contacts)[':contact_id']['segments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsContactIdSegmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsContactIdSegmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contacts[':contact_id'].segments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contacts)[':contact_id']['topics']['$get']>
  >,
) {
  return ['contacts', '/contacts/:contact_id/topics', toValue(args)] as const
}

export function getContactsContactIdTopicsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contacts)[':contact_id']['topics']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsContactIdTopicsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contacts[':contact_id'].topics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contacts)[':contact_id']['topics']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contacts)[':contact_id']['topics']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContactsContactIdTopicsQueryKey>
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
          Awaited<ReturnType<(typeof client.contacts)[':contact_id']['topics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsContactIdTopicsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsContactIdTopicsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contacts[':contact_id'].topics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getLogsQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.logs.$get>>) {
  return ['logs', '/logs', toValue(args)] as const
}

export function getLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.logs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLogs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
          ReturnType<typeof getLogsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLogsLogIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.logs)[':log_id']['$get']>>,
) {
  return ['logs', '/logs/:log_id', toValue(args)] as const
}

export function getLogsLogIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.logs)[':log_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLogsLogIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.logs[':log_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLogsLogId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':log_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.logs)[':log_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':log_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':log_id']['$get']>>>
            >
          >,
          ReturnType<typeof getLogsLogIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':log_id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLogsLogIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLogsLogIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.logs[':log_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAutomationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.automations.$get>>,
) {
  return ['automations', '/automations', toValue(args)] as const
}

export function getAutomationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.automations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAutomationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.automations.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAutomations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.automations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automations.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automations.$get>>>>
          >,
          ReturnType<typeof getAutomationsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAutomationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAutomationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.automations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automations.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.automations.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.automations)[':automation_id']['$get']>>,
) {
  return ['automations', '/automations/:automation_id', toValue(args)] as const
}

export function getAutomationsAutomationIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.automations)[':automation_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAutomationsAutomationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.automations[':automation_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.automations)[':automation_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.automations)[':automation_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAutomationsAutomationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.automations)[':automation_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutomationsAutomationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAutomationsAutomationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.automations[':automation_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.automations)[':automation_id']['runs']['$get']>
  >,
) {
  return ['automations', '/automations/:automation_id/runs', toValue(args)] as const
}

export function getAutomationsAutomationIdRunsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.automations)[':automation_id']['runs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAutomationsAutomationIdRunsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.automations[':automation_id'].runs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.automations)[':automation_id']['runs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.automations)[':automation_id']['runs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAutomationsAutomationIdRunsQueryKey>
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
          Awaited<ReturnType<(typeof client.automations)[':automation_id']['runs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutomationsAutomationIdRunsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAutomationsAutomationIdRunsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.automations[':automation_id'].runs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAutomationsAutomationIdRunsRunIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.automations)[':automation_id']['runs'][':run_id']['$get']>
  >,
) {
  return ['automations', '/automations/:automation_id/runs/:run_id', toValue(args)] as const
}

export function getAutomationsAutomationIdRunsRunIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.automations)[':automation_id']['runs'][':run_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAutomationsAutomationIdRunsRunIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.automations[':automation_id'].runs[':run_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.automations)[':automation_id']['runs'][':run_id']['$get']>
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
                    (typeof client.automations)[':automation_id']['runs'][':run_id']['$get']
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
                    (typeof client.automations)[':automation_id']['runs'][':run_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAutomationsAutomationIdRunsRunIdQueryKey>
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
            ReturnType<(typeof client.automations)[':automation_id']['runs'][':run_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutomationsAutomationIdRunsRunIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAutomationsAutomationIdRunsRunIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.automations[':automation_id'].runs[':run_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
) {
  return ['events', '/events', toValue(args)] as const
}

export function getEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEvents<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
          ReturnType<typeof getEventsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.events.$post>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.send.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.events.send.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':identifier']['$get']>>,
) {
  return ['events', '/events/:identifier', toValue(args)] as const
}

export function getEventsIdentifierQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':identifier']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsIdentifierQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events[':identifier'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventsIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':identifier']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':identifier']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)[':identifier']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)[':identifier']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEventsIdentifierQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':identifier']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsIdentifierQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsIdentifierQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events[':identifier'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getSuppressionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.suppressions.$get>>,
) {
  return ['suppressions', '/suppressions', toValue(args)] as const
}

export function getSuppressionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.suppressions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSuppressionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.suppressions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSuppressions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suppressions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.suppressions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suppressions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suppressions.$get>>>>
          >,
          ReturnType<typeof getSuppressionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suppressions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSuppressionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSuppressionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.suppressions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suppressions.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.suppressions.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.suppressions.batch.remove.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.suppressions.batch.remove.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.suppressions)[':suppression']['$get']>>,
) {
  return ['suppressions', '/suppressions/:suppression', toValue(args)] as const
}

export function getSuppressionsSuppressionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.suppressions)[':suppression']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSuppressionsSuppressionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.suppressions[':suppression'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.suppressions)[':suppression']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.suppressions)[':suppression']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSuppressionsSuppressionQueryKey>
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
          Awaited<ReturnType<(typeof client.suppressions)[':suppression']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSuppressionsSuppressionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSuppressionsSuppressionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.suppressions[':suppression'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getUsageQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsageQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.usage.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsage<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usage.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usage.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usage.$get>>>>>,
          ReturnType<typeof getUsageQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usage.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsageQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.usage.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInboxesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.inboxes.$get>>,
) {
  return ['inboxes', '/inboxes', toValue(args)] as const
}

export function getInboxesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.inboxes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInboxesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.inboxes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInboxes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inboxes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.inboxes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inboxes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inboxes.$get>>>>
          >,
          ReturnType<typeof getInboxesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inboxes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInboxesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInboxesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.inboxes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inboxes.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.inboxes.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.inboxes)[':inbox_id']['$get']>>,
) {
  return ['inboxes', '/inboxes/:inbox_id', toValue(args)] as const
}

export function getInboxesInboxIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.inboxes)[':inbox_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInboxesInboxIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.inboxes[':inbox_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInboxesInboxId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.inboxes)[':inbox_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInboxesInboxIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInboxesInboxIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInboxesInboxIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.inboxes[':inbox_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.inboxes)[':inbox_id']['agent']['$get']>>,
) {
  return ['inboxes', '/inboxes/:inbox_id/agent', toValue(args)] as const
}

export function getInboxesInboxIdAgentQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.inboxes)[':inbox_id']['agent']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInboxesInboxIdAgentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.inboxes[':inbox_id'].agent.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.inboxes)[':inbox_id']['agent']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['agent']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInboxesInboxIdAgentQueryKey>
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
          Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['agent']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInboxesInboxIdAgentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInboxesInboxIdAgentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.inboxes[':inbox_id'].agent.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.inboxes)[':inbox_id']['labels']['$get']>>,
) {
  return ['inboxes', '/inboxes/:inbox_id/labels', toValue(args)] as const
}

export function getInboxesInboxIdLabelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.inboxes)[':inbox_id']['labels']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInboxesInboxIdLabelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.inboxes[':inbox_id'].labels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.inboxes)[':inbox_id']['labels']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['labels']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInboxesInboxIdLabelsQueryKey>
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
          Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['labels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInboxesInboxIdLabelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInboxesInboxIdLabelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.inboxes[':inbox_id'].labels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.inboxes)[':inbox_id']['threads']['$get']>>,
) {
  return ['inboxes', '/inboxes/:inbox_id/threads', toValue(args)] as const
}

export function getInboxesInboxIdThreadsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.inboxes)[':inbox_id']['threads']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInboxesInboxIdThreadsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.inboxes[':inbox_id'].threads.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.inboxes)[':inbox_id']['threads']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['threads']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInboxesInboxIdThreadsQueryKey>
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
          Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['threads']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInboxesInboxIdThreadsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInboxesInboxIdThreadsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.inboxes[':inbox_id'].threads.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInboxesInboxIdThreadsSearchQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.inboxes)[':inbox_id']['threads']['search']['$get']>
  >,
) {
  return ['inboxes', '/inboxes/:inbox_id/threads/search', toValue(args)] as const
}

export function getInboxesInboxIdThreadsSearchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.inboxes)[':inbox_id']['threads']['search']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInboxesInboxIdThreadsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.inboxes[':inbox_id'].threads.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.inboxes)[':inbox_id']['threads']['search']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.inboxes)[':inbox_id']['threads']['search']['$get']>
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
                  ReturnType<(typeof client.inboxes)[':inbox_id']['threads']['search']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getInboxesInboxIdThreadsSearchQueryKey>
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
          Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['threads']['search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInboxesInboxIdThreadsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInboxesInboxIdThreadsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.inboxes[':inbox_id'].threads.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInboxesInboxIdThreadsThreadIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['$get']>
  >,
) {
  return ['inboxes', '/inboxes/:inbox_id/threads/:thread_id', toValue(args)] as const
}

export function getInboxesInboxIdThreadsThreadIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInboxesInboxIdThreadsThreadIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.inboxes[':inbox_id'].threads[':thread_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getInboxesInboxIdThreadsThreadIdQueryKey>
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
          Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInboxesInboxIdThreadsThreadIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInboxesInboxIdThreadsThreadIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.inboxes[':inbox_id'].threads[':thread_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['$delete']
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['$patch']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails']['$get']
    >
  >,
) {
  return ['inboxes', '/inboxes/:inbox_id/threads/:thread_id/emails', toValue(args)] as const
}

export function getInboxesInboxIdThreadsThreadIdEmailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInboxesInboxIdThreadsThreadIdEmailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.inboxes[':inbox_id'].threads[':thread_id'].emails.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails']['$get']
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
                    (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails']['$get']
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
                    (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getInboxesInboxIdThreadsThreadIdEmailsQueryKey>
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
              (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInboxesInboxIdThreadsThreadIdEmailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInboxesInboxIdThreadsThreadIdEmailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.inboxes[':inbox_id'].threads[':thread_id'].emails.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInboxesInboxIdThreadsThreadIdEmailsEmailIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails'][':email_id']['$get']
    >
  >,
) {
  return [
    'inboxes',
    '/inboxes/:inbox_id/threads/:thread_id/emails/:email_id',
    toValue(args),
  ] as const
}

export function getInboxesInboxIdThreadsThreadIdEmailsEmailIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails'][':email_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInboxesInboxIdThreadsThreadIdEmailsEmailIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.inboxes[':inbox_id'].threads[':thread_id'].emails[':email_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails'][':email_id']['$get']
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
                    (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails'][':email_id']['$get']
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
                    (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails'][':email_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getInboxesInboxIdThreadsThreadIdEmailsEmailIdQueryKey>
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
              (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails'][':email_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInboxesInboxIdThreadsThreadIdEmailsEmailIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInboxesInboxIdThreadsThreadIdEmailsEmailIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.inboxes[':inbox_id'].threads[':thread_id'].emails[':email_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.inboxes)[':inbox_id']['drafts']['$get']>>,
) {
  return ['inboxes', '/inboxes/:inbox_id/drafts', toValue(args)] as const
}

export function getInboxesInboxIdDraftsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.inboxes)[':inbox_id']['drafts']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInboxesInboxIdDraftsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.inboxes[':inbox_id'].drafts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.inboxes)[':inbox_id']['drafts']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['drafts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInboxesInboxIdDraftsQueryKey>
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
          Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['drafts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInboxesInboxIdDraftsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInboxesInboxIdDraftsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.inboxes[':inbox_id'].drafts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['$get']>
  >,
) {
  return ['inboxes', '/inboxes/:inbox_id/drafts/:draft_id', toValue(args)] as const
}

export function getInboxesInboxIdDraftsDraftIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInboxesInboxIdDraftsDraftIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.inboxes[':inbox_id'].drafts[':draft_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getInboxesInboxIdDraftsDraftIdQueryKey>
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
          Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInboxesInboxIdDraftsDraftIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInboxesInboxIdDraftsDraftIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.inboxes[':inbox_id'].drafts[':draft_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
