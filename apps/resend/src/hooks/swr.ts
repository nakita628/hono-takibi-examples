import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetEmailsKey(args: InferRequestType<typeof client.emails.$get>) {
  return ['emails', '/emails', args] as const
}

export function useGetEmails<TError = unknown>(
  args: InferRequestType<typeof client.emails.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEmailsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.emails.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetEmails<TError = unknown>(
  args: InferRequestType<typeof client.emails.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEmailsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.emails.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostEmailsKey() {
  return ['emails', '/emails', 'POST'] as const
}

export function usePostEmails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.emails.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.emails.$post> }) =>
        parseResponse(client.emails.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEmailsEmailIdKey(
  args: InferRequestType<(typeof client.emails)[':email_id']['$get']>,
) {
  return ['emails', '/emails/:email_id', args] as const
}

export function useGetEmailsEmailId<TError = unknown>(
  args: InferRequestType<(typeof client.emails)[':email_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':email_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetEmailsEmailIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':email_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.emails[':email_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmailsEmailId<TError = unknown>(
  args: InferRequestType<(typeof client.emails)[':email_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':email_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetEmailsEmailIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':email_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.emails[':email_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchEmailsEmailIdKey() {
  return ['emails', '/emails/:email_id', 'PATCH'] as const
}

export function usePatchEmailsEmailId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.emails)[':email_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.emails)[':email_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchEmailsEmailIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.emails)[':email_id']['$patch']> },
      ) => parseResponse(client.emails[':email_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEmailsEmailIdCancelKey() {
  return ['emails', '/emails/:email_id/cancel', 'POST'] as const
}

export function usePostEmailsEmailIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.emails)[':email_id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.emails)[':email_id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmailsEmailIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.emails)[':email_id']['cancel']['$post']> },
      ) => parseResponse(client.emails[':email_id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEmailsEmailIdShareKey() {
  return ['emails', '/emails/:email_id/share', 'POST'] as const
}

export function usePostEmailsEmailIdShare<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.emails)[':email_id']['share']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.emails)[':email_id']['share']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmailsEmailIdShareKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.emails)[':email_id']['share']['$post']> },
      ) => parseResponse(client.emails[':email_id'].share.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEmailsBatchKey() {
  return ['emails', '/emails/batch', 'POST'] as const
}

export function usePostEmailsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.batch.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.emails.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmailsBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.emails.batch.$post> }) =>
        parseResponse(client.emails.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEmailsEmailIdAttachmentsKey(
  args: InferRequestType<(typeof client.emails)[':email_id']['attachments']['$get']>,
) {
  return ['emails', '/emails/:email_id/attachments', args] as const
}

export function useGetEmailsEmailIdAttachments<TError = unknown>(
  args: InferRequestType<(typeof client.emails)[':email_id']['attachments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.emails)[':email_id']['attachments']['$get']>>
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
        ? getGetEmailsEmailIdAttachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.emails)[':email_id']['attachments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.emails[':email_id'].attachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmailsEmailIdAttachments<TError = unknown>(
  args: InferRequestType<(typeof client.emails)[':email_id']['attachments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.emails)[':email_id']['attachments']['$get']>>
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
        ? getGetEmailsEmailIdAttachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.emails)[':email_id']['attachments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.emails[':email_id'].attachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEmailsEmailIdAttachmentsAttachmentIdKey(
  args: InferRequestType<
    (typeof client.emails)[':email_id']['attachments'][':attachment_id']['$get']
  >,
) {
  return ['emails', '/emails/:email_id/attachments/:attachment_id', args] as const
}

export function useGetEmailsEmailIdAttachmentsAttachmentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.emails)[':email_id']['attachments'][':attachment_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetEmailsEmailIdAttachmentsAttachmentIdKey(args)
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
                (typeof client.emails)[':email_id']['attachments'][':attachment_id']['$get']
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
          client.emails[':email_id'].attachments[':attachment_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmailsEmailIdAttachmentsAttachmentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.emails)[':email_id']['attachments'][':attachment_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetEmailsEmailIdAttachmentsAttachmentIdKey(args)
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
                (typeof client.emails)[':email_id']['attachments'][':attachment_id']['$get']
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
          client.emails[':email_id'].attachments[':attachment_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmailsReceivingKey(
  args: InferRequestType<typeof client.emails.receiving.$get>,
) {
  return ['emails', '/emails/receiving', args] as const
}

export function useGetEmailsReceiving<TError = unknown>(
  args: InferRequestType<typeof client.emails.receiving.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.receiving.$get>>>>
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
        ? getGetEmailsReceivingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.receiving.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.emails.receiving.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmailsReceiving<TError = unknown>(
  args: InferRequestType<typeof client.emails.receiving.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.receiving.$get>>>>
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
        ? getGetEmailsReceivingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.receiving.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.emails.receiving.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEmailsReceivingEmailIdKey(
  args: InferRequestType<(typeof client.emails.receiving)[':email_id']['$get']>,
) {
  return ['emails', '/emails/receiving/:email_id', args] as const
}

export function useGetEmailsReceivingEmailId<TError = unknown>(
  args: InferRequestType<(typeof client.emails.receiving)[':email_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.emails.receiving)[':email_id']['$get']>>
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
        ? getGetEmailsReceivingEmailIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.emails.receiving)[':email_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.emails.receiving[':email_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmailsReceivingEmailId<TError = unknown>(
  args: InferRequestType<(typeof client.emails.receiving)[':email_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.emails.receiving)[':email_id']['$get']>>
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
        ? getGetEmailsReceivingEmailIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.emails.receiving)[':email_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.emails.receiving[':email_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEmailsReceivingEmailIdAttachmentsKey(
  args: InferRequestType<(typeof client.emails.receiving)[':email_id']['attachments']['$get']>,
) {
  return ['emails', '/emails/receiving/:email_id/attachments', args] as const
}

export function useGetEmailsReceivingEmailIdAttachments<TError = unknown>(
  args: InferRequestType<(typeof client.emails.receiving)[':email_id']['attachments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.emails.receiving)[':email_id']['attachments']['$get']>
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
        ? getGetEmailsReceivingEmailIdAttachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.emails.receiving)[':email_id']['attachments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.emails.receiving[':email_id'].attachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmailsReceivingEmailIdAttachments<TError = unknown>(
  args: InferRequestType<(typeof client.emails.receiving)[':email_id']['attachments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.emails.receiving)[':email_id']['attachments']['$get']>
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
        ? getGetEmailsReceivingEmailIdAttachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.emails.receiving)[':email_id']['attachments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.emails.receiving[':email_id'].attachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEmailsReceivingEmailIdAttachmentsAttachmentIdKey(
  args: InferRequestType<
    (typeof client.emails.receiving)[':email_id']['attachments'][':attachment_id']['$get']
  >,
) {
  return ['emails', '/emails/receiving/:email_id/attachments/:attachment_id', args] as const
}

export function useGetEmailsReceivingEmailIdAttachmentsAttachmentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.emails.receiving)[':email_id']['attachments'][':attachment_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetEmailsReceivingEmailIdAttachmentsAttachmentIdKey(args)
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
                (typeof client.emails.receiving)[':email_id']['attachments'][':attachment_id']['$get']
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
          client.emails.receiving[':email_id'].attachments[':attachment_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmailsReceivingEmailIdAttachmentsAttachmentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.emails.receiving)[':email_id']['attachments'][':attachment_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetEmailsReceivingEmailIdAttachmentsAttachmentIdKey(args)
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
                (typeof client.emails.receiving)[':email_id']['attachments'][':attachment_id']['$get']
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
          client.emails.receiving[':email_id'].attachments[':attachment_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmailsMetricsKey(args: InferRequestType<typeof client.emails.metrics.$get>) {
  return ['emails', '/emails/metrics', args] as const
}

export function useGetEmailsMetrics<TError = unknown>(
  args: InferRequestType<typeof client.emails.metrics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.metrics.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEmailsMetricsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.metrics.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.emails.metrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmailsMetrics<TError = unknown>(
  args: InferRequestType<typeof client.emails.metrics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.metrics.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEmailsMetricsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.metrics.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.emails.metrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDomainsKey(args: InferRequestType<typeof client.domains.$get>) {
  return ['domains', '/domains', args] as const
}

export function useGetDomains<TError = unknown>(
  args: InferRequestType<typeof client.domains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDomainsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.domains.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetDomains<TError = unknown>(
  args: InferRequestType<typeof client.domains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDomainsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.domains.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostDomainsKey() {
  return ['domains', '/domains', 'POST'] as const
}

export function usePostDomains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.domains.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDomainsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.domains.$post> }) =>
        parseResponse(client.domains.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDomainsDomainIdKey(
  args: InferRequestType<(typeof client.domains)[':domain_id']['$get']>,
) {
  return ['domains', '/domains/:domain_id', args] as const
}

export function useGetDomainsDomainId<TError = unknown>(
  args: InferRequestType<(typeof client.domains)[':domain_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domain_id']['$get']>>>
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
        ? getGetDomainsDomainIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domain_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains[':domain_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomainsDomainId<TError = unknown>(
  args: InferRequestType<(typeof client.domains)[':domain_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domain_id']['$get']>>>
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
        ? getGetDomainsDomainIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domain_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains[':domain_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteDomainsDomainIdKey() {
  return ['domains', '/domains/:domain_id', 'DELETE'] as const
}

export function useDeleteDomainsDomainId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domain_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.domains)[':domain_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDomainsDomainIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.domains)[':domain_id']['$delete']> },
      ) => parseResponse(client.domains[':domain_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDomainsDomainIdKey() {
  return ['domains', '/domains/:domain_id', 'PATCH'] as const
}

export function usePatchDomainsDomainId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domain_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.domains)[':domain_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDomainsDomainIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.domains)[':domain_id']['$patch']> },
      ) => parseResponse(client.domains[':domain_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDomainsDomainIdVerifyKey() {
  return ['domains', '/domains/:domain_id/verify', 'POST'] as const
}

export function usePostDomainsDomainIdVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':domain_id']['verify']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.domains)[':domain_id']['verify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDomainsDomainIdVerifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.domains)[':domain_id']['verify']['$post']> },
      ) => parseResponse(client.domains[':domain_id'].verify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDomainsDomainIdForgeKey() {
  return ['domains', '/domains/:domain_id/forge', 'POST'] as const
}

export function usePostDomainsDomainIdForge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':domain_id']['forge']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.domains)[':domain_id']['forge']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDomainsDomainIdForgeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.domains)[':domain_id']['forge']['$post']> },
      ) => parseResponse(client.domains[':domain_id'].forge.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDomainsClaimKey() {
  return ['domains', '/domains/claim', 'POST'] as const
}

export function usePostDomainsClaim<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.claim.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.domains.claim.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDomainsClaimKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.domains.claim.$post> }) =>
        parseResponse(client.domains.claim.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDomainsDomainIdClaimKey(
  args: InferRequestType<(typeof client.domains)[':domain_id']['claim']['$get']>,
) {
  return ['domains', '/domains/:domain_id/claim', args] as const
}

export function useGetDomainsDomainIdClaim<TError = unknown>(
  args: InferRequestType<(typeof client.domains)[':domain_id']['claim']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains)[':domain_id']['claim']['$get']>>
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
        ? getGetDomainsDomainIdClaimKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains)[':domain_id']['claim']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains[':domain_id'].claim.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomainsDomainIdClaim<TError = unknown>(
  args: InferRequestType<(typeof client.domains)[':domain_id']['claim']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains)[':domain_id']['claim']['$get']>>
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
        ? getGetDomainsDomainIdClaimKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains)[':domain_id']['claim']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains[':domain_id'].claim.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDomainsDomainIdClaimVerifyKey() {
  return ['domains', '/domains/:domain_id/claim/verify', 'POST'] as const
}

export function usePostDomainsDomainIdClaimVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':domain_id']['claim']['verify']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.domains)[':domain_id']['claim']['verify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDomainsDomainIdClaimVerifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.domains)[':domain_id']['claim']['verify']['$post']>
        },
      ) => parseResponse(client.domains[':domain_id'].claim.verify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiKeysKey(args: InferRequestType<(typeof client)['api-keys']['$get']>) {
  return ['api-keys', '/api-keys', args] as const
}

export function useGetApiKeys<TError = unknown>(
  args: InferRequestType<(typeof client)['api-keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['api-keys'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiKeys<TError = unknown>(
  args: InferRequestType<(typeof client)['api-keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['api-keys'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiKeysKey() {
  return ['api-keys', '/api-keys', 'POST'] as const
}

export function usePostApiKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['api-keys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['api-keys']['$post']> }) =>
        parseResponse(client['api-keys'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiKeysApiKeyIdKey() {
  return ['api-keys', '/api-keys/:api_key_id', 'DELETE'] as const
}

export function useDeleteApiKeysApiKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['api-keys'][':api_key_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['api-keys'][':api_key_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiKeysApiKeyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['api-keys'][':api_key_id']['$delete']> },
      ) => parseResponse(client['api-keys'][':api_key_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiKeysApiKeyIdKey() {
  return ['api-keys', '/api-keys/:api_key_id', 'PATCH'] as const
}

export function usePatchApiKeysApiKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['api-keys'][':api_key_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['api-keys'][':api_key_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiKeysApiKeyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['api-keys'][':api_key_id']['$patch']> },
      ) => parseResponse(client['api-keys'][':api_key_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOauthGrantsKey(args: InferRequestType<typeof client.oauth.grants.$get>) {
  return ['oauth', '/oauth/grants', args] as const
}

export function useGetOauthGrants<TError = unknown>(
  args: InferRequestType<typeof client.oauth.grants.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.grants.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauthGrantsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.grants.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth.grants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauthGrants<TError = unknown>(
  args: InferRequestType<typeof client.oauth.grants.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.grants.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauthGrantsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.grants.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth.grants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteOauthGrantsOauthGrantIdKey() {
  return ['oauth', '/oauth/grants/:oauth_grant_id', 'DELETE'] as const
}

export function useDeleteOauthGrantsOauthGrantId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.oauth.grants)[':oauth_grant_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.oauth.grants)[':oauth_grant_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOauthGrantsOauthGrantIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.oauth.grants)[':oauth_grant_id']['$delete']> },
      ) => parseResponse(client.oauth.grants[':oauth_grant_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTemplatesKey(args: InferRequestType<typeof client.templates.$get>) {
  return ['templates', '/templates', args] as const
}

export function useGetTemplates<TError = unknown>(
  args: InferRequestType<typeof client.templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTemplatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplates<TError = unknown>(
  args: InferRequestType<typeof client.templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTemplatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTemplatesKey() {
  return ['templates', '/templates', 'POST'] as const
}

export function usePostTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.templates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.templates.$post> }) =>
        parseResponse(client.templates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTemplatesIdKey(
  args: InferRequestType<(typeof client.templates)[':id']['$get']>,
) {
  return ['templates', '/templates/:id', args] as const
}

export function useGetTemplatesId<TError = unknown>(
  args: InferRequestType<(typeof client.templates)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTemplatesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplatesId<TError = unknown>(
  args: InferRequestType<(typeof client.templates)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTemplatesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteTemplatesIdKey() {
  return ['templates', '/templates/:id', 'DELETE'] as const
}

export function useDeleteTemplatesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.templates)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTemplatesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.templates)[':id']['$delete']> },
      ) => parseResponse(client.templates[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchTemplatesIdKey() {
  return ['templates', '/templates/:id', 'PATCH'] as const
}

export function usePatchTemplatesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.templates)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTemplatesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.templates)[':id']['$patch']> },
      ) => parseResponse(client.templates[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTemplatesIdPublishKey() {
  return ['templates', '/templates/:id/publish', 'POST'] as const
}

export function usePostTemplatesIdPublish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.templates)[':id']['publish']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.templates)[':id']['publish']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplatesIdPublishKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.templates)[':id']['publish']['$post']> },
      ) => parseResponse(client.templates[':id'].publish.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTemplatesIdDuplicateKey() {
  return ['templates', '/templates/:id/duplicate', 'POST'] as const
}

export function usePostTemplatesIdDuplicate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.templates)[':id']['duplicate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.templates)[':id']['duplicate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplatesIdDuplicateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.templates)[':id']['duplicate']['$post']> },
      ) => parseResponse(client.templates[':id'].duplicate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAudiencesKey() {
  return ['audiences', '/audiences'] as const
}

export function useGetAudiences<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAudiencesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.audiences.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAudiences<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAudiencesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.audiences.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAudiencesKey() {
  return ['audiences', '/audiences', 'POST'] as const
}

export function usePostAudiences<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.audiences.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAudiencesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.audiences.$post> }) =>
        parseResponse(client.audiences.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAudiencesIdKey(
  args: InferRequestType<(typeof client.audiences)[':id']['$get']>,
) {
  return ['audiences', '/audiences/:id', args] as const
}

export function useGetAudiencesId<TError = unknown>(
  args: InferRequestType<(typeof client.audiences)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAudiencesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.audiences[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAudiencesId<TError = unknown>(
  args: InferRequestType<(typeof client.audiences)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAudiencesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.audiences[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAudiencesIdKey() {
  return ['audiences', '/audiences/:id', 'DELETE'] as const
}

export function useDeleteAudiencesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.audiences)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAudiencesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.audiences)[':id']['$delete']> },
      ) => parseResponse(client.audiences[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContactsKey(args: InferRequestType<typeof client.contacts.$get>) {
  return ['contacts', '/contacts', args] as const
}

export function useGetContacts<TError = unknown>(
  args: InferRequestType<typeof client.contacts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetContactsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.contacts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetContacts<TError = unknown>(
  args: InferRequestType<typeof client.contacts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetContactsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.contacts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostContactsKey() {
  return ['contacts', '/contacts', 'POST'] as const
}

export function usePostContacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.contacts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.contacts.$post> }) =>
        parseResponse(client.contacts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContactsImportsKey(
  args: InferRequestType<typeof client.contacts.imports.$get>,
) {
  return ['contacts', '/contacts/imports', args] as const
}

export function useGetContactsImports<TError = unknown>(
  args: InferRequestType<typeof client.contacts.imports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.imports.$get>>>>
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
        ? getGetContactsImportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.imports.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts.imports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactsImports<TError = unknown>(
  args: InferRequestType<typeof client.contacts.imports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.imports.$get>>>>
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
        ? getGetContactsImportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.imports.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts.imports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostContactsImportsKey() {
  return ['contacts', '/contacts/imports', 'POST'] as const
}

export function usePostContactsImports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.imports.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.contacts.imports.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactsImportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.contacts.imports.$post> }) =>
        parseResponse(client.contacts.imports.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContactsImportsIdKey(
  args: InferRequestType<(typeof client.contacts.imports)[':id']['$get']>,
) {
  return ['contacts', '/contacts/imports/:id', args] as const
}

export function useGetContactsImportsId<TError = unknown>(
  args: InferRequestType<(typeof client.contacts.imports)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.contacts.imports)[':id']['$get']>>>
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
        ? getGetContactsImportsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.contacts.imports)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts.imports[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactsImportsId<TError = unknown>(
  args: InferRequestType<(typeof client.contacts.imports)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.contacts.imports)[':id']['$get']>>>
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
        ? getGetContactsImportsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.contacts.imports)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts.imports[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetContactsIdKey(
  args: InferRequestType<(typeof client.contacts)[':id']['$get']>,
) {
  return ['contacts', '/contacts/:id', args] as const
}

export function useGetContactsId<TError = unknown>(
  args: InferRequestType<(typeof client.contacts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetContactsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactsId<TError = unknown>(
  args: InferRequestType<(typeof client.contacts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetContactsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteContactsIdKey() {
  return ['contacts', '/contacts/:id', 'DELETE'] as const
}

export function useDeleteContactsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.contacts)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteContactsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.contacts)[':id']['$delete']> },
      ) => parseResponse(client.contacts[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchContactsIdKey() {
  return ['contacts', '/contacts/:id', 'PATCH'] as const
}

export function usePatchContactsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.contacts)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchContactsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.contacts)[':id']['$patch']> },
      ) => parseResponse(client.contacts[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBroadcastsKey(args: InferRequestType<typeof client.broadcasts.$get>) {
  return ['broadcasts', '/broadcasts', args] as const
}

export function useGetBroadcasts<TError = unknown>(
  args: InferRequestType<typeof client.broadcasts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.broadcasts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBroadcastsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.broadcasts.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.broadcasts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBroadcasts<TError = unknown>(
  args: InferRequestType<typeof client.broadcasts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.broadcasts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBroadcastsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.broadcasts.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.broadcasts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBroadcastsKey() {
  return ['broadcasts', '/broadcasts', 'POST'] as const
}

export function usePostBroadcasts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.broadcasts.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.broadcasts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBroadcastsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.broadcasts.$post> }) =>
        parseResponse(client.broadcasts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBroadcastsIdKey(
  args: InferRequestType<(typeof client.broadcasts)[':id']['$get']>,
) {
  return ['broadcasts', '/broadcasts/:id', args] as const
}

export function useGetBroadcastsId<TError = unknown>(
  args: InferRequestType<(typeof client.broadcasts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.broadcasts)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetBroadcastsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.broadcasts)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.broadcasts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBroadcastsId<TError = unknown>(
  args: InferRequestType<(typeof client.broadcasts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.broadcasts)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetBroadcastsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.broadcasts)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.broadcasts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteBroadcastsIdKey() {
  return ['broadcasts', '/broadcasts/:id', 'DELETE'] as const
}

export function useDeleteBroadcastsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.broadcasts)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.broadcasts)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBroadcastsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.broadcasts)[':id']['$delete']> },
      ) => parseResponse(client.broadcasts[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchBroadcastsIdKey() {
  return ['broadcasts', '/broadcasts/:id', 'PATCH'] as const
}

export function usePatchBroadcastsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.broadcasts)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.broadcasts)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchBroadcastsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.broadcasts)[':id']['$patch']> },
      ) => parseResponse(client.broadcasts[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBroadcastsIdSendKey() {
  return ['broadcasts', '/broadcasts/:id/send', 'POST'] as const
}

export function usePostBroadcastsIdSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.broadcasts)[':id']['send']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.broadcasts)[':id']['send']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBroadcastsIdSendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.broadcasts)[':id']['send']['$post']> },
      ) => parseResponse(client.broadcasts[':id'].send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBroadcastsIdCancelKey() {
  return ['broadcasts', '/broadcasts/:id/cancel', 'POST'] as const
}

export function usePostBroadcastsIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.broadcasts)[':id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.broadcasts)[':id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBroadcastsIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.broadcasts)[':id']['cancel']['$post']> },
      ) => parseResponse(client.broadcasts[':id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBroadcastsIdDuplicateKey() {
  return ['broadcasts', '/broadcasts/:id/duplicate', 'POST'] as const
}

export function usePostBroadcastsIdDuplicate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.broadcasts)[':id']['duplicate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.broadcasts)[':id']['duplicate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBroadcastsIdDuplicateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.broadcasts)[':id']['duplicate']['$post']> },
      ) => parseResponse(client.broadcasts[':id'].duplicate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBroadcastsIdRecipientsKey(
  args: InferRequestType<(typeof client.broadcasts)[':id']['recipients']['$get']>,
) {
  return ['broadcasts', '/broadcasts/:id/recipients', args] as const
}

export function useGetBroadcastsIdRecipients<TError = unknown>(
  args: InferRequestType<(typeof client.broadcasts)[':id']['recipients']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.broadcasts)[':id']['recipients']['$get']>>
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
        ? getGetBroadcastsIdRecipientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.broadcasts)[':id']['recipients']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.broadcasts[':id'].recipients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBroadcastsIdRecipients<TError = unknown>(
  args: InferRequestType<(typeof client.broadcasts)[':id']['recipients']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.broadcasts)[':id']['recipients']['$get']>>
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
        ? getGetBroadcastsIdRecipientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.broadcasts)[':id']['recipients']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.broadcasts[':id'].recipients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBroadcastsIdClickedLinksKey(
  args: InferRequestType<(typeof client.broadcasts)[':id']['clicked-links']['$get']>,
) {
  return ['broadcasts', '/broadcasts/:id/clicked-links', args] as const
}

export function useGetBroadcastsIdClickedLinks<TError = unknown>(
  args: InferRequestType<(typeof client.broadcasts)[':id']['clicked-links']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.broadcasts)[':id']['clicked-links']['$get']>>
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
        ? getGetBroadcastsIdClickedLinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.broadcasts)[':id']['clicked-links']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.broadcasts[':id']['clicked-links'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBroadcastsIdClickedLinks<TError = unknown>(
  args: InferRequestType<(typeof client.broadcasts)[':id']['clicked-links']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.broadcasts)[':id']['clicked-links']['$get']>>
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
        ? getGetBroadcastsIdClickedLinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.broadcasts)[':id']['clicked-links']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.broadcasts[':id']['clicked-links'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWebhooksKey(args: InferRequestType<typeof client.webhooks.$get>) {
  return ['webhooks', '/webhooks', args] as const
}

export function useGetWebhooks<TError = unknown>(
  args: InferRequestType<typeof client.webhooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWebhooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.webhooks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetWebhooks<TError = unknown>(
  args: InferRequestType<typeof client.webhooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWebhooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.webhooks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostWebhooksKey() {
  return ['webhooks', '/webhooks', 'POST'] as const
}

export function usePostWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.webhooks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.webhooks.$post> }) =>
        parseResponse(client.webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebhooksWebhookIdKey(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>,
) {
  return ['webhooks', '/webhooks/:webhook_id', args] as const
}

export function useGetWebhooksWebhookId<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>>
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
        ? getGetWebhooksWebhookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks[':webhook_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksWebhookId<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>>
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
        ? getGetWebhooksWebhookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks[':webhook_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteWebhooksWebhookIdKey() {
  return ['webhooks', '/webhooks/:webhook_id', 'DELETE'] as const
}

export function useDeleteWebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':webhook_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebhooksWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.webhooks)[':webhook_id']['$delete']> },
      ) => parseResponse(client.webhooks[':webhook_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchWebhooksWebhookIdKey() {
  return ['webhooks', '/webhooks/:webhook_id', 'PATCH'] as const
}

export function usePatchWebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':webhook_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWebhooksWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.webhooks)[':webhook_id']['$patch']> },
      ) => parseResponse(client.webhooks[':webhook_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWebhooksWebhookIdSigningSecretRotateKey() {
  return ['webhooks', '/webhooks/:webhook_id/signing-secret/rotate', 'POST'] as const
}

export function usePostWebhooksWebhookIdSigningSecretRotate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.webhooks)[':webhook_id']['signing-secret']['rotate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksWebhookIdSigningSecretRotateKey()
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
            (typeof client.webhooks)[':webhook_id']['signing-secret']['rotate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.webhooks[':webhook_id']['signing-secret'].rotate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWebhooksWebhookIdEventsKey(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['events']['$get']>,
) {
  return ['webhooks', '/webhooks/:webhook_id/events', args] as const
}

export function useGetWebhooksWebhookIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['events']['$get']>>
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
        ? getGetWebhooksWebhookIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks[':webhook_id'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksWebhookIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['events']['$get']>>
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
        ? getGetWebhooksWebhookIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks[':webhook_id'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWebhooksWebhookIdEventsEventIdKey(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['events'][':event_id']['$get']>,
) {
  return ['webhooks', '/webhooks/:webhook_id/events/:event_id', args] as const
}

export function useGetWebhooksWebhookIdEventsEventId<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['events'][':event_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.webhooks)[':webhook_id']['events'][':event_id']['$get']>
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
        ? getGetWebhooksWebhookIdEventsEventIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.webhooks)[':webhook_id']['events'][':event_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.webhooks[':webhook_id'].events[':event_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksWebhookIdEventsEventId<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['events'][':event_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.webhooks)[':webhook_id']['events'][':event_id']['$get']>
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
        ? getGetWebhooksWebhookIdEventsEventIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.webhooks)[':webhook_id']['events'][':event_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.webhooks[':webhook_id'].events[':event_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWebhooksWebhookIdEventsEventIdReplayKey() {
  return ['webhooks', '/webhooks/:webhook_id/events/:event_id/replay', 'POST'] as const
}

export function usePostWebhooksWebhookIdEventsEventIdReplay<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.webhooks)[':webhook_id']['events'][':event_id']['replay']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksWebhookIdEventsEventIdReplayKey()
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
            (typeof client.webhooks)[':webhook_id']['events'][':event_id']['replay']['$post']
          >
        },
      ) =>
        parseResponse(
          client.webhooks[':webhook_id'].events[':event_id'].replay.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWebhooksWebhookIdEventsEventIdAttemptsKey(
  args: InferRequestType<
    (typeof client.webhooks)[':webhook_id']['events'][':event_id']['attempts']['$get']
  >,
) {
  return ['webhooks', '/webhooks/:webhook_id/events/:event_id/attempts', args] as const
}

export function useGetWebhooksWebhookIdEventsEventIdAttempts<TError = unknown>(
  args: InferRequestType<
    (typeof client.webhooks)[':webhook_id']['events'][':event_id']['attempts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWebhooksWebhookIdEventsEventIdAttemptsKey(args)
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
                (typeof client.webhooks)[':webhook_id']['events'][':event_id']['attempts']['$get']
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
          client.webhooks[':webhook_id'].events[':event_id'].attempts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksWebhookIdEventsEventIdAttempts<TError = unknown>(
  args: InferRequestType<
    (typeof client.webhooks)[':webhook_id']['events'][':event_id']['attempts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWebhooksWebhookIdEventsEventIdAttemptsKey(args)
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
                (typeof client.webhooks)[':webhook_id']['events'][':event_id']['attempts']['$get']
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
          client.webhooks[':webhook_id'].events[':event_id'].attempts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSegmentsKey(args: InferRequestType<typeof client.segments.$get>) {
  return ['segments', '/segments', args] as const
}

export function useGetSegments<TError = unknown>(
  args: InferRequestType<typeof client.segments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSegmentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.segments.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSegments<TError = unknown>(
  args: InferRequestType<typeof client.segments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSegmentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.segments.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostSegmentsKey() {
  return ['segments', '/segments', 'POST'] as const
}

export function usePostSegments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.segments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSegmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.segments.$post> }) =>
        parseResponse(client.segments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSegmentsIdKey(
  args: InferRequestType<(typeof client.segments)[':id']['$get']>,
) {
  return ['segments', '/segments/:id', args] as const
}

export function useGetSegmentsId<TError = unknown>(
  args: InferRequestType<(typeof client.segments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.segments)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSegmentsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.segments)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.segments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSegmentsId<TError = unknown>(
  args: InferRequestType<(typeof client.segments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.segments)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSegmentsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.segments)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.segments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSegmentsIdKey() {
  return ['segments', '/segments/:id', 'DELETE'] as const
}

export function useDeleteSegmentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.segments)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.segments)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSegmentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.segments)[':id']['$delete']> },
      ) => parseResponse(client.segments[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchSegmentsIdKey() {
  return ['segments', '/segments/:id', 'PATCH'] as const
}

export function usePatchSegmentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.segments)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.segments)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSegmentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.segments)[':id']['$patch']> },
      ) => parseResponse(client.segments[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSegmentsIdContactsKey(
  args: InferRequestType<(typeof client.segments)[':id']['contacts']['$get']>,
) {
  return ['segments', '/segments/:id/contacts', args] as const
}

export function useGetSegmentsIdContacts<TError = unknown>(
  args: InferRequestType<(typeof client.segments)[':id']['contacts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.segments)[':id']['contacts']['$get']>>
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
        ? getGetSegmentsIdContactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.segments)[':id']['contacts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.segments[':id'].contacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSegmentsIdContacts<TError = unknown>(
  args: InferRequestType<(typeof client.segments)[':id']['contacts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.segments)[':id']['contacts']['$get']>>
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
        ? getGetSegmentsIdContactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.segments)[':id']['contacts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.segments[':id'].contacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTopicsKey(args: InferRequestType<typeof client.topics.$get>) {
  return ['topics', '/topics', args] as const
}

export function useGetTopics<TError = unknown>(
  args: InferRequestType<typeof client.topics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topics.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTopicsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topics.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.topics.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetTopics<TError = unknown>(
  args: InferRequestType<typeof client.topics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topics.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTopicsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topics.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.topics.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostTopicsKey() {
  return ['topics', '/topics', 'POST'] as const
}

export function usePostTopics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topics.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.topics.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTopicsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.topics.$post> }) =>
        parseResponse(client.topics.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTopicsIdKey(args: InferRequestType<(typeof client.topics)[':id']['$get']>) {
  return ['topics', '/topics/:id', args] as const
}

export function useGetTopicsId<TError = unknown>(
  args: InferRequestType<(typeof client.topics)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.topics)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTopicsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.topics)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.topics[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTopicsId<TError = unknown>(
  args: InferRequestType<(typeof client.topics)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.topics)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTopicsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.topics)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.topics[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteTopicsIdKey() {
  return ['topics', '/topics/:id', 'DELETE'] as const
}

export function useDeleteTopicsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.topics)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.topics)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTopicsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.topics)[':id']['$delete']> },
      ) => parseResponse(client.topics[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchTopicsIdKey() {
  return ['topics', '/topics/:id', 'PATCH'] as const
}

export function usePatchTopicsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.topics)[':id']['$patch']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.topics)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTopicsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.topics)[':id']['$patch']> }) =>
        parseResponse(client.topics[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContactPropertiesKey(
  args: InferRequestType<(typeof client)['contact-properties']['$get']>,
) {
  return ['contact-properties', '/contact-properties', args] as const
}

export function useGetContactProperties<TError = unknown>(
  args: InferRequestType<(typeof client)['contact-properties']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['contact-properties']['$get']>>>
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
        ? getGetContactPropertiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['contact-properties']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['contact-properties'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactProperties<TError = unknown>(
  args: InferRequestType<(typeof client)['contact-properties']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['contact-properties']['$get']>>>
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
        ? getGetContactPropertiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['contact-properties']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['contact-properties'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostContactPropertiesKey() {
  return ['contact-properties', '/contact-properties', 'POST'] as const
}

export function usePostContactProperties<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['contact-properties']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['contact-properties']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactPropertiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['contact-properties']['$post']> },
      ) => parseResponse(client['contact-properties'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContactPropertiesIdKey(
  args: InferRequestType<(typeof client)['contact-properties'][':id']['$get']>,
) {
  return ['contact-properties', '/contact-properties/:id', args] as const
}

export function useGetContactPropertiesId<TError = unknown>(
  args: InferRequestType<(typeof client)['contact-properties'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['contact-properties'][':id']['$get']>>
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
        ? getGetContactPropertiesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['contact-properties'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['contact-properties'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactPropertiesId<TError = unknown>(
  args: InferRequestType<(typeof client)['contact-properties'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['contact-properties'][':id']['$get']>>
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
        ? getGetContactPropertiesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['contact-properties'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['contact-properties'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteContactPropertiesIdKey() {
  return ['contact-properties', '/contact-properties/:id', 'DELETE'] as const
}

export function useDeleteContactPropertiesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['contact-properties'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['contact-properties'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteContactPropertiesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['contact-properties'][':id']['$delete']> },
      ) => parseResponse(client['contact-properties'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchContactPropertiesIdKey() {
  return ['contact-properties', '/contact-properties/:id', 'PATCH'] as const
}

export function usePatchContactPropertiesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['contact-properties'][':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['contact-properties'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchContactPropertiesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['contact-properties'][':id']['$patch']> },
      ) => parseResponse(client['contact-properties'][':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContactsContactIdSegmentsKey(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['segments']['$get']>,
) {
  return ['contacts', '/contacts/:contact_id/segments', args] as const
}

export function useGetContactsContactIdSegments<TError = unknown>(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['segments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':contact_id']['segments']['$get']>>
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
        ? getGetContactsContactIdSegmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':contact_id']['segments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts[':contact_id'].segments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactsContactIdSegments<TError = unknown>(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['segments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':contact_id']['segments']['$get']>>
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
        ? getGetContactsContactIdSegmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':contact_id']['segments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts[':contact_id'].segments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostContactsContactIdSegmentsSegmentIdKey() {
  return ['contacts', '/contacts/:contact_id/segments/:segment_id', 'POST'] as const
}

export function usePostContactsContactIdSegmentsSegmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.contacts)[':contact_id']['segments'][':segment_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactsContactIdSegmentsSegmentIdKey()
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
            (typeof client.contacts)[':contact_id']['segments'][':segment_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.contacts[':contact_id'].segments[':segment_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteContactsContactIdSegmentsSegmentIdKey() {
  return ['contacts', '/contacts/:contact_id/segments/:segment_id', 'DELETE'] as const
}

export function useDeleteContactsContactIdSegmentsSegmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.contacts)[':contact_id']['segments'][':segment_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteContactsContactIdSegmentsSegmentIdKey()
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
            (typeof client.contacts)[':contact_id']['segments'][':segment_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.contacts[':contact_id'].segments[':segment_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetContactsContactIdTopicsKey(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['topics']['$get']>,
) {
  return ['contacts', '/contacts/:contact_id/topics', args] as const
}

export function useGetContactsContactIdTopics<TError = unknown>(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['topics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':contact_id']['topics']['$get']>>
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
        ? getGetContactsContactIdTopicsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':contact_id']['topics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts[':contact_id'].topics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactsContactIdTopics<TError = unknown>(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['topics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':contact_id']['topics']['$get']>>
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
        ? getGetContactsContactIdTopicsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':contact_id']['topics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts[':contact_id'].topics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchContactsContactIdTopicsKey() {
  return ['contacts', '/contacts/:contact_id/topics', 'PATCH'] as const
}

export function usePatchContactsContactIdTopics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts)[':contact_id']['topics']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.contacts)[':contact_id']['topics']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchContactsContactIdTopicsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.contacts)[':contact_id']['topics']['$patch']> },
      ) => parseResponse(client.contacts[':contact_id'].topics.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLogsKey(args: InferRequestType<typeof client.logs.$get>) {
  return ['logs', '/logs', args] as const
}

export function useGetLogs<TError = unknown>(
  args: InferRequestType<typeof client.logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.logs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetLogs<TError = unknown>(
  args: InferRequestType<typeof client.logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.logs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetLogsLogIdKey(
  args: InferRequestType<(typeof client.logs)[':log_id']['$get']>,
) {
  return ['logs', '/logs/:log_id', args] as const
}

export function useGetLogsLogId<TError = unknown>(
  args: InferRequestType<(typeof client.logs)[':log_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':log_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetLogsLogIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':log_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logs[':log_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLogsLogId<TError = unknown>(
  args: InferRequestType<(typeof client.logs)[':log_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':log_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetLogsLogIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':log_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logs[':log_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAutomationsKey(args: InferRequestType<typeof client.automations.$get>) {
  return ['automations', '/automations', args] as const
}

export function useGetAutomations<TError = unknown>(
  args: InferRequestType<typeof client.automations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAutomationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.automations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomations<TError = unknown>(
  args: InferRequestType<typeof client.automations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAutomationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.automations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAutomationsKey() {
  return ['automations', '/automations', 'POST'] as const
}

export function usePostAutomations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.automations.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.automations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAutomationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.automations.$post> }) =>
        parseResponse(client.automations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAutomationsAutomationIdKey(
  args: InferRequestType<(typeof client.automations)[':automation_id']['$get']>,
) {
  return ['automations', '/automations/:automation_id', args] as const
}

export function useGetAutomationsAutomationId<TError = unknown>(
  args: InferRequestType<(typeof client.automations)[':automation_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automations)[':automation_id']['$get']>>
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
        ? getGetAutomationsAutomationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automations)[':automation_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.automations[':automation_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomationsAutomationId<TError = unknown>(
  args: InferRequestType<(typeof client.automations)[':automation_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automations)[':automation_id']['$get']>>
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
        ? getGetAutomationsAutomationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automations)[':automation_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.automations[':automation_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAutomationsAutomationIdKey() {
  return ['automations', '/automations/:automation_id', 'DELETE'] as const
}

export function useDeleteAutomationsAutomationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.automations)[':automation_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.automations)[':automation_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAutomationsAutomationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.automations)[':automation_id']['$delete']> },
      ) => parseResponse(client.automations[':automation_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAutomationsAutomationIdKey() {
  return ['automations', '/automations/:automation_id', 'PATCH'] as const
}

export function usePatchAutomationsAutomationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.automations)[':automation_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.automations)[':automation_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAutomationsAutomationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.automations)[':automation_id']['$patch']> },
      ) => parseResponse(client.automations[':automation_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAutomationsAutomationIdDuplicateKey() {
  return ['automations', '/automations/:automation_id/duplicate', 'POST'] as const
}

export function usePostAutomationsAutomationIdDuplicate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.automations)[':automation_id']['duplicate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.automations)[':automation_id']['duplicate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAutomationsAutomationIdDuplicateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.automations)[':automation_id']['duplicate']['$post']>
        },
      ) => parseResponse(client.automations[':automation_id'].duplicate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAutomationsAutomationIdStopKey() {
  return ['automations', '/automations/:automation_id/stop', 'POST'] as const
}

export function usePostAutomationsAutomationIdStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.automations)[':automation_id']['stop']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.automations)[':automation_id']['stop']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAutomationsAutomationIdStopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.automations)[':automation_id']['stop']['$post']>
        },
      ) => parseResponse(client.automations[':automation_id'].stop.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAutomationsAutomationIdRunsKey(
  args: InferRequestType<(typeof client.automations)[':automation_id']['runs']['$get']>,
) {
  return ['automations', '/automations/:automation_id/runs', args] as const
}

export function useGetAutomationsAutomationIdRuns<TError = unknown>(
  args: InferRequestType<(typeof client.automations)[':automation_id']['runs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automations)[':automation_id']['runs']['$get']>>
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
        ? getGetAutomationsAutomationIdRunsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automations)[':automation_id']['runs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.automations[':automation_id'].runs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomationsAutomationIdRuns<TError = unknown>(
  args: InferRequestType<(typeof client.automations)[':automation_id']['runs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automations)[':automation_id']['runs']['$get']>>
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
        ? getGetAutomationsAutomationIdRunsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automations)[':automation_id']['runs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.automations[':automation_id'].runs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAutomationsAutomationIdRunsRunIdKey(
  args: InferRequestType<(typeof client.automations)[':automation_id']['runs'][':run_id']['$get']>,
) {
  return ['automations', '/automations/:automation_id/runs/:run_id', args] as const
}

export function useGetAutomationsAutomationIdRunsRunId<TError = unknown>(
  args: InferRequestType<(typeof client.automations)[':automation_id']['runs'][':run_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.automations)[':automation_id']['runs'][':run_id']['$get']>
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
        ? getGetAutomationsAutomationIdRunsRunIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.automations)[':automation_id']['runs'][':run_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.automations[':automation_id'].runs[':run_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomationsAutomationIdRunsRunId<TError = unknown>(
  args: InferRequestType<(typeof client.automations)[':automation_id']['runs'][':run_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.automations)[':automation_id']['runs'][':run_id']['$get']>
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
        ? getGetAutomationsAutomationIdRunsRunIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.automations)[':automation_id']['runs'][':run_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.automations[':automation_id'].runs[':run_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAutomationsAutomationIdRunsRunIdCancelKey() {
  return ['automations', '/automations/:automation_id/runs/:run_id/cancel', 'POST'] as const
}

export function usePostAutomationsAutomationIdRunsRunIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.automations)[':automation_id']['runs'][':run_id']['cancel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAutomationsAutomationIdRunsRunIdCancelKey()
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
            (typeof client.automations)[':automation_id']['runs'][':run_id']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.automations[':automation_id'].runs[':run_id'].cancel.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEventsKey(args: InferRequestType<typeof client.events.$get>) {
  return ['events', '/events', args] as const
}

export function useGetEvents<TError = unknown>(
  args: InferRequestType<typeof client.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.events.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetEvents<TError = unknown>(
  args: InferRequestType<typeof client.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.events.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostEventsKey() {
  return ['events', '/events', 'POST'] as const
}

export function usePostEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.events.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.events.$post> }) =>
        parseResponse(client.events.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEventsSendKey() {
  return ['events', '/events/send', 'POST'] as const
}

export function usePostEventsSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.send.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.events.send.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventsSendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.events.send.$post> }) =>
        parseResponse(client.events.send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEventsIdentifierKey(
  args: InferRequestType<(typeof client.events)[':identifier']['$get']>,
) {
  return ['events', '/events/:identifier', args] as const
}

export function useGetEventsIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.events)[':identifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':identifier']['$get']>>>
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
        ? getGetEventsIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':identifier']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events[':identifier'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.events)[':identifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':identifier']['$get']>>>
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
        ? getGetEventsIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':identifier']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events[':identifier'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteEventsIdentifierKey() {
  return ['events', '/events/:identifier', 'DELETE'] as const
}

export function useDeleteEventsIdentifier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':identifier']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.events)[':identifier']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEventsIdentifierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.events)[':identifier']['$delete']> },
      ) => parseResponse(client.events[':identifier'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchEventsIdentifierKey() {
  return ['events', '/events/:identifier', 'PATCH'] as const
}

export function usePatchEventsIdentifier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':identifier']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.events)[':identifier']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchEventsIdentifierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.events)[':identifier']['$patch']> },
      ) => parseResponse(client.events[':identifier'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSuppressionsKey(args: InferRequestType<typeof client.suppressions.$get>) {
  return ['suppressions', '/suppressions', args] as const
}

export function useGetSuppressions<TError = unknown>(
  args: InferRequestType<typeof client.suppressions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suppressions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSuppressionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suppressions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.suppressions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSuppressions<TError = unknown>(
  args: InferRequestType<typeof client.suppressions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suppressions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSuppressionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suppressions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.suppressions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSuppressionsKey() {
  return ['suppressions', '/suppressions', 'POST'] as const
}

export function usePostSuppressions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suppressions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.suppressions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSuppressionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.suppressions.$post> }) =>
        parseResponse(client.suppressions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSuppressionsBatchAddKey() {
  return ['suppressions', '/suppressions/batch/add', 'POST'] as const
}

export function usePostSuppressionsBatchAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.suppressions.batch.add.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.suppressions.batch.add.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSuppressionsBatchAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.suppressions.batch.add.$post> },
      ) => parseResponse(client.suppressions.batch.add.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSuppressionsBatchRemoveKey() {
  return ['suppressions', '/suppressions/batch/remove', 'POST'] as const
}

export function usePostSuppressionsBatchRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.suppressions.batch.remove.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.suppressions.batch.remove.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSuppressionsBatchRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.suppressions.batch.remove.$post> },
      ) => parseResponse(client.suppressions.batch.remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSuppressionsSuppressionKey(
  args: InferRequestType<(typeof client.suppressions)[':suppression']['$get']>,
) {
  return ['suppressions', '/suppressions/:suppression', args] as const
}

export function useGetSuppressionsSuppression<TError = unknown>(
  args: InferRequestType<(typeof client.suppressions)[':suppression']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.suppressions)[':suppression']['$get']>>
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
        ? getGetSuppressionsSuppressionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.suppressions)[':suppression']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.suppressions[':suppression'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSuppressionsSuppression<TError = unknown>(
  args: InferRequestType<(typeof client.suppressions)[':suppression']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.suppressions)[':suppression']['$get']>>
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
        ? getGetSuppressionsSuppressionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.suppressions)[':suppression']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.suppressions[':suppression'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSuppressionsSuppressionKey() {
  return ['suppressions', '/suppressions/:suppression', 'DELETE'] as const
}

export function useDeleteSuppressionsSuppression<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.suppressions)[':suppression']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.suppressions)[':suppression']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSuppressionsSuppressionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.suppressions)[':suppression']['$delete']> },
      ) => parseResponse(client.suppressions[':suppression'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsageKey() {
  return ['usage', '/usage'] as const
}

export function useGetUsage<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usage.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetUsageKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usage.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.usage.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsage<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usage.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetUsageKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usage.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.usage.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInboxesKey(args: InferRequestType<typeof client.inboxes.$get>) {
  return ['inboxes', '/inboxes', args] as const
}

export function useGetInboxes<TError = unknown>(
  args: InferRequestType<typeof client.inboxes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inboxes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInboxesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inboxes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.inboxes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetInboxes<TError = unknown>(
  args: InferRequestType<typeof client.inboxes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inboxes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInboxesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inboxes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.inboxes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostInboxesKey() {
  return ['inboxes', '/inboxes', 'POST'] as const
}

export function usePostInboxes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inboxes.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.inboxes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInboxesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.inboxes.$post> }) =>
        parseResponse(client.inboxes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInboxesInboxIdKey(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['$get']>,
) {
  return ['inboxes', '/inboxes/:inbox_id', args] as const
}

export function useGetInboxesInboxId<TError = unknown>(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetInboxesInboxIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.inboxes[':inbox_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInboxesInboxId<TError = unknown>(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetInboxesInboxIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.inboxes[':inbox_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteInboxesInboxIdKey() {
  return ['inboxes', '/inboxes/:inbox_id', 'DELETE'] as const
}

export function useDeleteInboxesInboxId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.inboxes)[':inbox_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteInboxesInboxIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.inboxes)[':inbox_id']['$delete']> },
      ) => parseResponse(client.inboxes[':inbox_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchInboxesInboxIdKey() {
  return ['inboxes', '/inboxes/:inbox_id', 'PATCH'] as const
}

export function usePatchInboxesInboxId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.inboxes)[':inbox_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchInboxesInboxIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.inboxes)[':inbox_id']['$patch']> },
      ) => parseResponse(client.inboxes[':inbox_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInboxesInboxIdAgentKey(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['agent']['$get']>,
) {
  return ['inboxes', '/inboxes/:inbox_id/agent', args] as const
}

export function useGetInboxesInboxIdAgent<TError = unknown>(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['agent']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['agent']['$get']>>
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
        ? getGetInboxesInboxIdAgentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['agent']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.inboxes[':inbox_id'].agent.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInboxesInboxIdAgent<TError = unknown>(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['agent']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['agent']['$get']>>
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
        ? getGetInboxesInboxIdAgentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['agent']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.inboxes[':inbox_id'].agent.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchInboxesInboxIdAgentKey() {
  return ['inboxes', '/inboxes/:inbox_id/agent', 'PATCH'] as const
}

export function usePatchInboxesInboxIdAgent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['agent']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.inboxes)[':inbox_id']['agent']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchInboxesInboxIdAgentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.inboxes)[':inbox_id']['agent']['$patch']> },
      ) => parseResponse(client.inboxes[':inbox_id'].agent.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInboxesInboxIdLabelsKey(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['labels']['$get']>,
) {
  return ['inboxes', '/inboxes/:inbox_id/labels', args] as const
}

export function useGetInboxesInboxIdLabels<TError = unknown>(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['labels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['labels']['$get']>>
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
        ? getGetInboxesInboxIdLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['labels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.inboxes[':inbox_id'].labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInboxesInboxIdLabels<TError = unknown>(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['labels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['labels']['$get']>>
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
        ? getGetInboxesInboxIdLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['labels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.inboxes[':inbox_id'].labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostInboxesInboxIdLabelsKey() {
  return ['inboxes', '/inboxes/:inbox_id/labels', 'POST'] as const
}

export function usePostInboxesInboxIdLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['labels']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.inboxes)[':inbox_id']['labels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInboxesInboxIdLabelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.inboxes)[':inbox_id']['labels']['$post']> },
      ) => parseResponse(client.inboxes[':inbox_id'].labels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteInboxesInboxIdLabelsLabelIdKey() {
  return ['inboxes', '/inboxes/:inbox_id/labels/:label_id', 'DELETE'] as const
}

export function useDeleteInboxesInboxIdLabelsLabelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.inboxes)[':inbox_id']['labels'][':label_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteInboxesInboxIdLabelsLabelIdKey()
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
            (typeof client.inboxes)[':inbox_id']['labels'][':label_id']['$delete']
          >
        },
      ) =>
        parseResponse(client.inboxes[':inbox_id'].labels[':label_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchInboxesInboxIdLabelsLabelIdKey() {
  return ['inboxes', '/inboxes/:inbox_id/labels/:label_id', 'PATCH'] as const
}

export function usePatchInboxesInboxIdLabelsLabelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['labels'][':label_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.inboxes)[':inbox_id']['labels'][':label_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchInboxesInboxIdLabelsLabelIdKey()
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
            (typeof client.inboxes)[':inbox_id']['labels'][':label_id']['$patch']
          >
        },
      ) =>
        parseResponse(client.inboxes[':inbox_id'].labels[':label_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInboxesInboxIdThreadsKey(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['threads']['$get']>,
) {
  return ['inboxes', '/inboxes/:inbox_id/threads', args] as const
}

export function useGetInboxesInboxIdThreads<TError = unknown>(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['threads']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['threads']['$get']>>
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
        ? getGetInboxesInboxIdThreadsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['threads']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.inboxes[':inbox_id'].threads.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInboxesInboxIdThreads<TError = unknown>(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['threads']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['threads']['$get']>>
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
        ? getGetInboxesInboxIdThreadsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['threads']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.inboxes[':inbox_id'].threads.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInboxesInboxIdThreadsSearchKey(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['threads']['search']['$get']>,
) {
  return ['inboxes', '/inboxes/:inbox_id/threads/search', args] as const
}

export function useGetInboxesInboxIdThreadsSearch<TError = unknown>(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['threads']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['threads']['search']['$get']>>
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
        ? getGetInboxesInboxIdThreadsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['threads']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.inboxes[':inbox_id'].threads.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInboxesInboxIdThreadsSearch<TError = unknown>(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['threads']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['threads']['search']['$get']>>
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
        ? getGetInboxesInboxIdThreadsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['threads']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.inboxes[':inbox_id'].threads.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInboxesInboxIdThreadsThreadIdKey(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['$get']>,
) {
  return ['inboxes', '/inboxes/:inbox_id/threads/:thread_id', args] as const
}

export function useGetInboxesInboxIdThreadsThreadId<TError = unknown>(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['$get']>
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
        ? getGetInboxesInboxIdThreadsThreadIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.inboxes[':inbox_id'].threads[':thread_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInboxesInboxIdThreadsThreadId<TError = unknown>(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['$get']>
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
        ? getGetInboxesInboxIdThreadsThreadIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.inboxes[':inbox_id'].threads[':thread_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteInboxesInboxIdThreadsThreadIdKey() {
  return ['inboxes', '/inboxes/:inbox_id/threads/:thread_id', 'DELETE'] as const
}

export function useDeleteInboxesInboxIdThreadsThreadId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteInboxesInboxIdThreadsThreadIdKey()
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
            (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.inboxes[':inbox_id'].threads[':thread_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchInboxesInboxIdThreadsThreadIdKey() {
  return ['inboxes', '/inboxes/:inbox_id/threads/:thread_id', 'PATCH'] as const
}

export function usePatchInboxesInboxIdThreadsThreadId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchInboxesInboxIdThreadsThreadIdKey()
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
            (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['$patch']
          >
        },
      ) =>
        parseResponse(client.inboxes[':inbox_id'].threads[':thread_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutInboxesInboxIdThreadsThreadIdLabelsKey() {
  return ['inboxes', '/inboxes/:inbox_id/threads/:thread_id/labels', 'PUT'] as const
}

export function usePutInboxesInboxIdThreadsThreadIdLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['labels']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutInboxesInboxIdThreadsThreadIdLabelsKey()
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
            (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['labels']['$put']
          >
        },
      ) =>
        parseResponse(
          client.inboxes[':inbox_id'].threads[':thread_id'].labels.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostInboxesInboxIdThreadsThreadIdLabelsKey() {
  return ['inboxes', '/inboxes/:inbox_id/threads/:thread_id/labels', 'POST'] as const
}

export function usePostInboxesInboxIdThreadsThreadIdLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['labels']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInboxesInboxIdThreadsThreadIdLabelsKey()
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
            (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['labels']['$post']
          >
        },
      ) =>
        parseResponse(
          client.inboxes[':inbox_id'].threads[':thread_id'].labels.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteInboxesInboxIdThreadsThreadIdLabelsLabelIdKey() {
  return ['inboxes', '/inboxes/:inbox_id/threads/:thread_id/labels/:label_id', 'DELETE'] as const
}

export function useDeleteInboxesInboxIdThreadsThreadIdLabelsLabelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['labels'][':label_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteInboxesInboxIdThreadsThreadIdLabelsLabelIdKey()
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
            (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['labels'][':label_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.inboxes[':inbox_id'].threads[':thread_id'].labels[':label_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetInboxesInboxIdThreadsThreadIdEmailsKey(
  args: InferRequestType<
    (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails']['$get']
  >,
) {
  return ['inboxes', '/inboxes/:inbox_id/threads/:thread_id/emails', args] as const
}

export function useGetInboxesInboxIdThreadsThreadIdEmails<TError = unknown>(
  args: InferRequestType<
    (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInboxesInboxIdThreadsThreadIdEmailsKey(args)
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
                (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails']['$get']
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
          client.inboxes[':inbox_id'].threads[':thread_id'].emails.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInboxesInboxIdThreadsThreadIdEmails<TError = unknown>(
  args: InferRequestType<
    (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInboxesInboxIdThreadsThreadIdEmailsKey(args)
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
                (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails']['$get']
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
          client.inboxes[':inbox_id'].threads[':thread_id'].emails.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetInboxesInboxIdThreadsThreadIdEmailsEmailIdKey(
  args: InferRequestType<
    (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails'][':email_id']['$get']
  >,
) {
  return ['inboxes', '/inboxes/:inbox_id/threads/:thread_id/emails/:email_id', args] as const
}

export function useGetInboxesInboxIdThreadsThreadIdEmailsEmailId<TError = unknown>(
  args: InferRequestType<
    (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails'][':email_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInboxesInboxIdThreadsThreadIdEmailsEmailIdKey(args)
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
                (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails'][':email_id']['$get']
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
          client.inboxes[':inbox_id'].threads[':thread_id'].emails[':email_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInboxesInboxIdThreadsThreadIdEmailsEmailId<TError = unknown>(
  args: InferRequestType<
    (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails'][':email_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInboxesInboxIdThreadsThreadIdEmailsEmailIdKey(args)
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
                (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails'][':email_id']['$get']
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
          client.inboxes[':inbox_id'].threads[':thread_id'].emails[':email_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostInboxesInboxIdThreadsThreadIdEmailsEmailIdReplyKey() {
  return [
    'inboxes',
    '/inboxes/:inbox_id/threads/:thread_id/emails/:email_id/reply',
    'POST',
  ] as const
}

export function usePostInboxesInboxIdThreadsThreadIdEmailsEmailIdReply<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails'][':email_id']['reply']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInboxesInboxIdThreadsThreadIdEmailsEmailIdReplyKey()
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
            (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails'][':email_id']['reply']['$post']
          >
        },
      ) =>
        parseResponse(
          client.inboxes[':inbox_id'].threads[':thread_id'].emails[':email_id'].reply.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostInboxesInboxIdThreadsThreadIdEmailsEmailIdForwardKey() {
  return [
    'inboxes',
    '/inboxes/:inbox_id/threads/:thread_id/emails/:email_id/forward',
    'POST',
  ] as const
}

export function usePostInboxesInboxIdThreadsThreadIdEmailsEmailIdForward<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails'][':email_id']['forward']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInboxesInboxIdThreadsThreadIdEmailsEmailIdForwardKey()
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
            (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails'][':email_id']['forward']['$post']
          >
        },
      ) =>
        parseResponse(
          client.inboxes[':inbox_id'].threads[':thread_id'].emails[':email_id'].forward.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetInboxesInboxIdDraftsKey(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['drafts']['$get']>,
) {
  return ['inboxes', '/inboxes/:inbox_id/drafts', args] as const
}

export function useGetInboxesInboxIdDrafts<TError = unknown>(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['drafts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['drafts']['$get']>>
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
        ? getGetInboxesInboxIdDraftsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['drafts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.inboxes[':inbox_id'].drafts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInboxesInboxIdDrafts<TError = unknown>(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['drafts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['drafts']['$get']>>
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
        ? getGetInboxesInboxIdDraftsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['drafts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.inboxes[':inbox_id'].drafts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostInboxesInboxIdDraftsKey() {
  return ['inboxes', '/inboxes/:inbox_id/drafts', 'POST'] as const
}

export function usePostInboxesInboxIdDrafts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['drafts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.inboxes)[':inbox_id']['drafts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInboxesInboxIdDraftsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.inboxes)[':inbox_id']['drafts']['$post']> },
      ) => parseResponse(client.inboxes[':inbox_id'].drafts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInboxesInboxIdDraftsDraftIdKey(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['$get']>,
) {
  return ['inboxes', '/inboxes/:inbox_id/drafts/:draft_id', args] as const
}

export function useGetInboxesInboxIdDraftsDraftId<TError = unknown>(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['$get']>>
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
        ? getGetInboxesInboxIdDraftsDraftIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.inboxes[':inbox_id'].drafts[':draft_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInboxesInboxIdDraftsDraftId<TError = unknown>(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['$get']>>
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
        ? getGetInboxesInboxIdDraftsDraftIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.inboxes[':inbox_id'].drafts[':draft_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteInboxesInboxIdDraftsDraftIdKey() {
  return ['inboxes', '/inboxes/:inbox_id/drafts/:draft_id', 'DELETE'] as const
}

export function useDeleteInboxesInboxIdDraftsDraftId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteInboxesInboxIdDraftsDraftIdKey()
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
            (typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['$delete']
          >
        },
      ) =>
        parseResponse(client.inboxes[':inbox_id'].drafts[':draft_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchInboxesInboxIdDraftsDraftIdKey() {
  return ['inboxes', '/inboxes/:inbox_id/drafts/:draft_id', 'PATCH'] as const
}

export function usePatchInboxesInboxIdDraftsDraftId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchInboxesInboxIdDraftsDraftIdKey()
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
            (typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['$patch']
          >
        },
      ) =>
        parseResponse(client.inboxes[':inbox_id'].drafts[':draft_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInboxesInboxIdDraftsDraftIdSendKey() {
  return ['inboxes', '/inboxes/:inbox_id/drafts/:draft_id/send', 'POST'] as const
}

export function usePostInboxesInboxIdDraftsDraftIdSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['send']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInboxesInboxIdDraftsDraftIdSendKey()
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
            (typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['send']['$post']
          >
        },
      ) =>
        parseResponse(
          client.inboxes[':inbox_id'].drafts[':draft_id'].send.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
