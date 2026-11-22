import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getPostV2EmailMetricsBatchKey() {
  return ['v2', '/v2/email/metrics/batch', 'POST'] as const
}

export function usePostV2EmailMetricsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.metrics.batch.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.email.metrics.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EmailMetricsBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.email.metrics.batch.$post> },
      ) => parseResponse(client.v2.email.metrics.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2EmailConfigurationSetsKey(
  args: InferRequestType<(typeof client.v2.email)['configuration-sets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/configuration-sets', keyArgs] as const
}

export function useGetV2EmailConfigurationSets<TError = unknown>(
  args: InferRequestType<(typeof client.v2.email)['configuration-sets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.email)['configuration-sets']['$get']>>
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
        ? getGetV2EmailConfigurationSetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.email)['configuration-sets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.email['configuration-sets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EmailConfigurationSets<TError = unknown>(
  args: InferRequestType<(typeof client.v2.email)['configuration-sets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.email)['configuration-sets']['$get']>>
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
        ? getGetV2EmailConfigurationSetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.email)['configuration-sets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.email['configuration-sets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2EmailConfigurationSetsKey() {
  return ['v2', '/v2/email/configuration-sets', 'POST'] as const
}

export function usePostV2EmailConfigurationSets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.email)['configuration-sets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.email)['configuration-sets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EmailConfigurationSetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.email)['configuration-sets']['$post']> },
      ) => parseResponse(client.v2.email['configuration-sets'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2EmailConfigurationSetsConfigurationSetNameEventDestinationsKey(
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

export function useGetV2EmailConfigurationSetsConfigurationSetNameEventDestinations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2EmailConfigurationSetsConfigurationSetNameEventDestinationsKey(args)
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
                (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$get']
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
          client.v2.email['configuration-sets'][':ConfigurationSetName']['event-destinations'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EmailConfigurationSetsConfigurationSetNameEventDestinations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2EmailConfigurationSetsConfigurationSetNameEventDestinationsKey(args)
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
                (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$get']
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
          client.v2.email['configuration-sets'][':ConfigurationSetName']['event-destinations'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2EmailConfigurationSetsConfigurationSetNameEventDestinationsKey() {
  return [
    'v2',
    '/v2/email/configuration-sets/:ConfigurationSetName/event-destinations',
    'POST',
  ] as const
}

export function usePostV2EmailConfigurationSetsConfigurationSetNameEventDestinations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV2EmailConfigurationSetsConfigurationSetNameEventDestinationsKey()
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
            (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.email['configuration-sets'][':ConfigurationSetName'][
            'event-destinations'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2EmailContactListsContactListNameContactsKey(
  args: InferRequestType<
    (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/contact-lists/:ContactListName/contacts', keyArgs] as const
}

export function useGetV2EmailContactListsContactListNameContacts<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2EmailContactListsContactListNameContactsKey(args)
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
                (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts']['$get']
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
          client.v2.email['contact-lists'][':ContactListName'].contacts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EmailContactListsContactListNameContacts<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2EmailContactListsContactListNameContactsKey(args)
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
                (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts']['$get']
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
          client.v2.email['contact-lists'][':ContactListName'].contacts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2EmailContactListsContactListNameContactsKey() {
  return ['v2', '/v2/email/contact-lists/:ContactListName/contacts', 'POST'] as const
}

export function usePostV2EmailContactListsContactListNameContacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EmailContactListsContactListNameContactsKey()
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
            (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.email['contact-lists'][':ContactListName'].contacts.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2EmailContactListsKey(
  args: InferRequestType<(typeof client.v2.email)['contact-lists']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/contact-lists', keyArgs] as const
}

export function useGetV2EmailContactLists<TError = unknown>(
  args: InferRequestType<(typeof client.v2.email)['contact-lists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.email)['contact-lists']['$get']>>
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
        ? getGetV2EmailContactListsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.email)['contact-lists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.email['contact-lists'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EmailContactLists<TError = unknown>(
  args: InferRequestType<(typeof client.v2.email)['contact-lists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.email)['contact-lists']['$get']>>
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
        ? getGetV2EmailContactListsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.email)['contact-lists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.email['contact-lists'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2EmailContactListsKey() {
  return ['v2', '/v2/email/contact-lists', 'POST'] as const
}

export function usePostV2EmailContactLists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.email)['contact-lists']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.email)['contact-lists']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EmailContactListsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.email)['contact-lists']['$post']> },
      ) => parseResponse(client.v2.email['contact-lists'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2EmailCustomVerificationEmailTemplatesKey(
  args: InferRequestType<(typeof client.v2.email)['custom-verification-email-templates']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/custom-verification-email-templates', keyArgs] as const
}

export function useGetV2EmailCustomVerificationEmailTemplates<TError = unknown>(
  args: InferRequestType<(typeof client.v2.email)['custom-verification-email-templates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.email)['custom-verification-email-templates']['$get']>
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
        ? getGetV2EmailCustomVerificationEmailTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.email)['custom-verification-email-templates']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.email['custom-verification-email-templates'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EmailCustomVerificationEmailTemplates<TError = unknown>(
  args: InferRequestType<(typeof client.v2.email)['custom-verification-email-templates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.email)['custom-verification-email-templates']['$get']>
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
        ? getGetV2EmailCustomVerificationEmailTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.email)['custom-verification-email-templates']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.email['custom-verification-email-templates'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2EmailCustomVerificationEmailTemplatesKey() {
  return ['v2', '/v2/email/custom-verification-email-templates', 'POST'] as const
}

export function usePostV2EmailCustomVerificationEmailTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.email)['custom-verification-email-templates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EmailCustomVerificationEmailTemplatesKey()
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
            (typeof client.v2.email)['custom-verification-email-templates']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.email['custom-verification-email-templates'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2EmailDedicatedIpPoolsKey(
  args: InferRequestType<(typeof client.v2.email)['dedicated-ip-pools']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/dedicated-ip-pools', keyArgs] as const
}

export function useGetV2EmailDedicatedIpPools<TError = unknown>(
  args: InferRequestType<(typeof client.v2.email)['dedicated-ip-pools']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.email)['dedicated-ip-pools']['$get']>>
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
        ? getGetV2EmailDedicatedIpPoolsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.email)['dedicated-ip-pools']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.email['dedicated-ip-pools'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EmailDedicatedIpPools<TError = unknown>(
  args: InferRequestType<(typeof client.v2.email)['dedicated-ip-pools']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.email)['dedicated-ip-pools']['$get']>>
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
        ? getGetV2EmailDedicatedIpPoolsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.email)['dedicated-ip-pools']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.email['dedicated-ip-pools'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2EmailDedicatedIpPoolsKey() {
  return ['v2', '/v2/email/dedicated-ip-pools', 'POST'] as const
}

export function usePostV2EmailDedicatedIpPools<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.email)['dedicated-ip-pools']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.email)['dedicated-ip-pools']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EmailDedicatedIpPoolsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.email)['dedicated-ip-pools']['$post']> },
      ) => parseResponse(client.v2.email['dedicated-ip-pools'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2EmailDeliverabilityDashboardTestKey() {
  return ['v2', '/v2/email/deliverability-dashboard/test', 'POST'] as const
}

export function usePostV2EmailDeliverabilityDashboardTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.email)['deliverability-dashboard']['test']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.email)['deliverability-dashboard']['test']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EmailDeliverabilityDashboardTestKey()
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
            (typeof client.v2.email)['deliverability-dashboard']['test']['$post']
          >
        },
      ) =>
        parseResponse(client.v2.email['deliverability-dashboard'].test.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2EmailIdentitiesKey(
  args: InferRequestType<typeof client.v2.email.identities.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/identities', keyArgs] as const
}

export function useGetV2EmailIdentities<TError = unknown>(
  args: InferRequestType<typeof client.v2.email.identities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.identities.$get>>>
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
        ? getGetV2EmailIdentitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.identities.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.email.identities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EmailIdentities<TError = unknown>(
  args: InferRequestType<typeof client.v2.email.identities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.identities.$get>>>
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
        ? getGetV2EmailIdentitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.identities.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.email.identities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2EmailIdentitiesKey() {
  return ['v2', '/v2/email/identities', 'POST'] as const
}

export function usePostV2EmailIdentities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.identities.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.email.identities.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EmailIdentitiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.email.identities.$post> }) =>
        parseResponse(client.v2.email.identities.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV2EmailIdentitiesEmailIdentityPoliciesPolicyNameKey() {
  return ['v2', '/v2/email/identities/:EmailIdentity/policies/:PolicyName', 'PUT'] as const
}

export function usePutV2EmailIdentitiesEmailIdentityPoliciesPolicyName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.email.identities)[':EmailIdentity']['policies'][':PolicyName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2EmailIdentitiesEmailIdentityPoliciesPolicyNameKey()
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
            (typeof client.v2.email.identities)[':EmailIdentity']['policies'][':PolicyName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.email.identities[':EmailIdentity'].policies[':PolicyName'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2EmailIdentitiesEmailIdentityPoliciesPolicyNameKey() {
  return ['v2', '/v2/email/identities/:EmailIdentity/policies/:PolicyName', 'POST'] as const
}

export function usePostV2EmailIdentitiesEmailIdentityPoliciesPolicyName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.email.identities)[':EmailIdentity']['policies'][':PolicyName']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EmailIdentitiesEmailIdentityPoliciesPolicyNameKey()
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
            (typeof client.v2.email.identities)[':EmailIdentity']['policies'][':PolicyName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.email.identities[':EmailIdentity'].policies[':PolicyName'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2EmailIdentitiesEmailIdentityPoliciesPolicyNameKey() {
  return ['v2', '/v2/email/identities/:EmailIdentity/policies/:PolicyName', 'DELETE'] as const
}

export function useDeleteV2EmailIdentitiesEmailIdentityPoliciesPolicyName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.email.identities)[':EmailIdentity']['policies'][':PolicyName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2EmailIdentitiesEmailIdentityPoliciesPolicyNameKey()
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
            (typeof client.v2.email.identities)[':EmailIdentity']['policies'][':PolicyName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.email.identities[':EmailIdentity'].policies[':PolicyName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2EmailTemplatesKey(
  args: InferRequestType<typeof client.v2.email.templates.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/templates', keyArgs] as const
}

export function useGetV2EmailTemplates<TError = unknown>(
  args: InferRequestType<typeof client.v2.email.templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.templates.$get>>>>
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
        ? getGetV2EmailTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.templates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.email.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EmailTemplates<TError = unknown>(
  args: InferRequestType<typeof client.v2.email.templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.templates.$get>>>>
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
        ? getGetV2EmailTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.templates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.email.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2EmailTemplatesKey() {
  return ['v2', '/v2/email/templates', 'POST'] as const
}

export function usePostV2EmailTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.templates.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.email.templates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EmailTemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.email.templates.$post> }) =>
        parseResponse(client.v2.email.templates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2EmailImportJobsKey(
  args: InferRequestType<(typeof client.v2.email)['import-jobs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/import-jobs', keyArgs] as const
}

export function useGetV2EmailImportJobs<TError = unknown>(
  args: InferRequestType<(typeof client.v2.email)['import-jobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.email)['import-jobs']['$get']>>>
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
        ? getGetV2EmailImportJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.email)['import-jobs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.email['import-jobs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EmailImportJobs<TError = unknown>(
  args: InferRequestType<(typeof client.v2.email)['import-jobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.email)['import-jobs']['$get']>>>
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
        ? getGetV2EmailImportJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.email)['import-jobs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.email['import-jobs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2EmailImportJobsKey() {
  return ['v2', '/v2/email/import-jobs', 'POST'] as const
}

export function usePostV2EmailImportJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.email)['import-jobs']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.email)['import-jobs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EmailImportJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.email)['import-jobs']['$post']> },
      ) => parseResponse(client.v2.email['import-jobs'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2EmailConfigurationSetsConfigurationSetNameKey(
  args: InferRequestType<
    (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/configuration-sets/:ConfigurationSetName', keyArgs] as const
}

export function useGetV2EmailConfigurationSetsConfigurationSetName<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2EmailConfigurationSetsConfigurationSetNameKey(args)
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
                (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['$get']
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
          client.v2.email['configuration-sets'][':ConfigurationSetName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EmailConfigurationSetsConfigurationSetName<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2EmailConfigurationSetsConfigurationSetNameKey(args)
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
                (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['$get']
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
          client.v2.email['configuration-sets'][':ConfigurationSetName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2EmailConfigurationSetsConfigurationSetNameKey() {
  return ['v2', '/v2/email/configuration-sets/:ConfigurationSetName', 'DELETE'] as const
}

export function useDeleteV2EmailConfigurationSetsConfigurationSetName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2EmailConfigurationSetsConfigurationSetNameKey()
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
            (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.email['configuration-sets'][':ConfigurationSetName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV2EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameKey() {
  return [
    'v2',
    '/v2/email/configuration-sets/:ConfigurationSetName/event-destinations/:EventDestinationName',
    'PUT',
  ] as const
}

export function usePutV2EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutV2EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameKey()
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
            (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.email['configuration-sets'][':ConfigurationSetName']['event-destinations'][
            ':EventDestinationName'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameKey() {
  return [
    'v2',
    '/v2/email/configuration-sets/:ConfigurationSetName/event-destinations/:EventDestinationName',
    'DELETE',
  ] as const
}

export function useDeleteV2EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteV2EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameKey()
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
            (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.email['configuration-sets'][':ConfigurationSetName']['event-destinations'][
            ':EventDestinationName'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2EmailContactListsContactListNameContactsEmailAddressKey(
  args: InferRequestType<
    (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts'][':EmailAddress']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/contact-lists/:ContactListName/contacts/:EmailAddress', keyArgs] as const
}

export function useGetV2EmailContactListsContactListNameContactsEmailAddress<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts'][':EmailAddress']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2EmailContactListsContactListNameContactsEmailAddressKey(args)
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
                (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts'][':EmailAddress']['$get']
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
          client.v2.email['contact-lists'][':ContactListName'].contacts[':EmailAddress'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EmailContactListsContactListNameContactsEmailAddress<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts'][':EmailAddress']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2EmailContactListsContactListNameContactsEmailAddressKey(args)
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
                (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts'][':EmailAddress']['$get']
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
          client.v2.email['contact-lists'][':ContactListName'].contacts[':EmailAddress'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV2EmailContactListsContactListNameContactsEmailAddressKey() {
  return ['v2', '/v2/email/contact-lists/:ContactListName/contacts/:EmailAddress', 'PUT'] as const
}

export function usePutV2EmailContactListsContactListNameContactsEmailAddress<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts'][':EmailAddress']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2EmailContactListsContactListNameContactsEmailAddressKey()
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
            (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts'][':EmailAddress']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.email['contact-lists'][':ContactListName'].contacts[':EmailAddress'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2EmailContactListsContactListNameContactsEmailAddressKey() {
  return [
    'v2',
    '/v2/email/contact-lists/:ContactListName/contacts/:EmailAddress',
    'DELETE',
  ] as const
}

export function useDeleteV2EmailContactListsContactListNameContactsEmailAddress<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts'][':EmailAddress']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2EmailContactListsContactListNameContactsEmailAddressKey()
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
            (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts'][':EmailAddress']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.email['contact-lists'][':ContactListName'].contacts[':EmailAddress'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2EmailContactListsContactListNameKey(
  args: InferRequestType<(typeof client.v2.email)['contact-lists'][':ContactListName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/contact-lists/:ContactListName', keyArgs] as const
}

export function useGetV2EmailContactListsContactListName<TError = unknown>(
  args: InferRequestType<(typeof client.v2.email)['contact-lists'][':ContactListName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.email)['contact-lists'][':ContactListName']['$get']>
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
        ? getGetV2EmailContactListsContactListNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.email)['contact-lists'][':ContactListName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.email['contact-lists'][':ContactListName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EmailContactListsContactListName<TError = unknown>(
  args: InferRequestType<(typeof client.v2.email)['contact-lists'][':ContactListName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.email)['contact-lists'][':ContactListName']['$get']>
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
        ? getGetV2EmailContactListsContactListNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.email)['contact-lists'][':ContactListName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.email['contact-lists'][':ContactListName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV2EmailContactListsContactListNameKey() {
  return ['v2', '/v2/email/contact-lists/:ContactListName', 'PUT'] as const
}

export function usePutV2EmailContactListsContactListName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.email)['contact-lists'][':ContactListName']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.email)['contact-lists'][':ContactListName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2EmailContactListsContactListNameKey()
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
            (typeof client.v2.email)['contact-lists'][':ContactListName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.email['contact-lists'][':ContactListName'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2EmailContactListsContactListNameKey() {
  return ['v2', '/v2/email/contact-lists/:ContactListName', 'DELETE'] as const
}

export function useDeleteV2EmailContactListsContactListName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.email)['contact-lists'][':ContactListName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2EmailContactListsContactListNameKey()
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
            (typeof client.v2.email)['contact-lists'][':ContactListName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.email['contact-lists'][':ContactListName'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2EmailCustomVerificationEmailTemplatesTemplateNameKey(
  args: InferRequestType<
    (typeof client.v2.email)['custom-verification-email-templates'][':TemplateName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/custom-verification-email-templates/:TemplateName', keyArgs] as const
}

export function useGetV2EmailCustomVerificationEmailTemplatesTemplateName<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.email)['custom-verification-email-templates'][':TemplateName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2EmailCustomVerificationEmailTemplatesTemplateNameKey(args)
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
                (typeof client.v2.email)['custom-verification-email-templates'][':TemplateName']['$get']
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
          client.v2.email['custom-verification-email-templates'][':TemplateName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EmailCustomVerificationEmailTemplatesTemplateName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.email)['custom-verification-email-templates'][':TemplateName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2EmailCustomVerificationEmailTemplatesTemplateNameKey(args)
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
                (typeof client.v2.email)['custom-verification-email-templates'][':TemplateName']['$get']
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
          client.v2.email['custom-verification-email-templates'][':TemplateName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV2EmailCustomVerificationEmailTemplatesTemplateNameKey() {
  return ['v2', '/v2/email/custom-verification-email-templates/:TemplateName', 'PUT'] as const
}

export function usePutV2EmailCustomVerificationEmailTemplatesTemplateName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.email)['custom-verification-email-templates'][':TemplateName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2EmailCustomVerificationEmailTemplatesTemplateNameKey()
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
            (typeof client.v2.email)['custom-verification-email-templates'][':TemplateName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.email['custom-verification-email-templates'][':TemplateName'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2EmailCustomVerificationEmailTemplatesTemplateNameKey() {
  return ['v2', '/v2/email/custom-verification-email-templates/:TemplateName', 'DELETE'] as const
}

export function useDeleteV2EmailCustomVerificationEmailTemplatesTemplateName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.email)['custom-verification-email-templates'][':TemplateName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2EmailCustomVerificationEmailTemplatesTemplateNameKey()
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
            (typeof client.v2.email)['custom-verification-email-templates'][':TemplateName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.email['custom-verification-email-templates'][':TemplateName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2EmailDedicatedIpPoolsPoolNameKey(
  args: InferRequestType<(typeof client.v2.email)['dedicated-ip-pools'][':PoolName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/dedicated-ip-pools/:PoolName', keyArgs] as const
}

export function useGetV2EmailDedicatedIpPoolsPoolName<TError = unknown>(
  args: InferRequestType<(typeof client.v2.email)['dedicated-ip-pools'][':PoolName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.email)['dedicated-ip-pools'][':PoolName']['$get']>>
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
        ? getGetV2EmailDedicatedIpPoolsPoolNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.email)['dedicated-ip-pools'][':PoolName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.email['dedicated-ip-pools'][':PoolName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EmailDedicatedIpPoolsPoolName<TError = unknown>(
  args: InferRequestType<(typeof client.v2.email)['dedicated-ip-pools'][':PoolName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.email)['dedicated-ip-pools'][':PoolName']['$get']>>
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
        ? getGetV2EmailDedicatedIpPoolsPoolNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.email)['dedicated-ip-pools'][':PoolName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.email['dedicated-ip-pools'][':PoolName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2EmailDedicatedIpPoolsPoolNameKey() {
  return ['v2', '/v2/email/dedicated-ip-pools/:PoolName', 'DELETE'] as const
}

export function useDeleteV2EmailDedicatedIpPoolsPoolName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.email)['dedicated-ip-pools'][':PoolName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2EmailDedicatedIpPoolsPoolNameKey()
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
            (typeof client.v2.email)['dedicated-ip-pools'][':PoolName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.email['dedicated-ip-pools'][':PoolName'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2EmailIdentitiesEmailIdentityKey(
  args: InferRequestType<(typeof client.v2.email.identities)[':EmailIdentity']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/identities/:EmailIdentity', keyArgs] as const
}

export function useGetV2EmailIdentitiesEmailIdentity<TError = unknown>(
  args: InferRequestType<(typeof client.v2.email.identities)[':EmailIdentity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.email.identities)[':EmailIdentity']['$get']>>
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
        ? getGetV2EmailIdentitiesEmailIdentityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.email.identities)[':EmailIdentity']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.email.identities[':EmailIdentity'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EmailIdentitiesEmailIdentity<TError = unknown>(
  args: InferRequestType<(typeof client.v2.email.identities)[':EmailIdentity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.email.identities)[':EmailIdentity']['$get']>>
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
        ? getGetV2EmailIdentitiesEmailIdentityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.email.identities)[':EmailIdentity']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.email.identities[':EmailIdentity'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2EmailIdentitiesEmailIdentityKey() {
  return ['v2', '/v2/email/identities/:EmailIdentity', 'DELETE'] as const
}

export function useDeleteV2EmailIdentitiesEmailIdentity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.email.identities)[':EmailIdentity']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.email.identities)[':EmailIdentity']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2EmailIdentitiesEmailIdentityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.email.identities)[':EmailIdentity']['$delete']>
        },
      ) => parseResponse(client.v2.email.identities[':EmailIdentity'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2EmailTemplatesTemplateNameKey(
  args: InferRequestType<(typeof client.v2.email.templates)[':TemplateName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/templates/:TemplateName', keyArgs] as const
}

export function useGetV2EmailTemplatesTemplateName<TError = unknown>(
  args: InferRequestType<(typeof client.v2.email.templates)[':TemplateName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.email.templates)[':TemplateName']['$get']>>
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
        ? getGetV2EmailTemplatesTemplateNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.email.templates)[':TemplateName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.email.templates[':TemplateName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EmailTemplatesTemplateName<TError = unknown>(
  args: InferRequestType<(typeof client.v2.email.templates)[':TemplateName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.email.templates)[':TemplateName']['$get']>>
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
        ? getGetV2EmailTemplatesTemplateNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.email.templates)[':TemplateName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.email.templates[':TemplateName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2EmailTemplatesTemplateNameKey() {
  return ['v2', '/v2/email/templates/:TemplateName', 'PUT'] as const
}

export function usePutV2EmailTemplatesTemplateName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.email.templates)[':TemplateName']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.email.templates)[':TemplateName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2EmailTemplatesTemplateNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.email.templates)[':TemplateName']['$put']> },
      ) => parseResponse(client.v2.email.templates[':TemplateName'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2EmailTemplatesTemplateNameKey() {
  return ['v2', '/v2/email/templates/:TemplateName', 'DELETE'] as const
}

export function useDeleteV2EmailTemplatesTemplateName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.email.templates)[':TemplateName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.email.templates)[':TemplateName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2EmailTemplatesTemplateNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.email.templates)[':TemplateName']['$delete']>
        },
      ) => parseResponse(client.v2.email.templates[':TemplateName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2EmailSuppressionAddressesEmailAddressKey(
  args: InferRequestType<(typeof client.v2.email.suppression.addresses)[':EmailAddress']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/suppression/addresses/:EmailAddress', keyArgs] as const
}

export function useGetV2EmailSuppressionAddressesEmailAddress<TError = unknown>(
  args: InferRequestType<(typeof client.v2.email.suppression.addresses)[':EmailAddress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.email.suppression.addresses)[':EmailAddress']['$get']>
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
        ? getGetV2EmailSuppressionAddressesEmailAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.email.suppression.addresses)[':EmailAddress']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.email.suppression.addresses[':EmailAddress'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EmailSuppressionAddressesEmailAddress<TError = unknown>(
  args: InferRequestType<(typeof client.v2.email.suppression.addresses)[':EmailAddress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.email.suppression.addresses)[':EmailAddress']['$get']>
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
        ? getGetV2EmailSuppressionAddressesEmailAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.email.suppression.addresses)[':EmailAddress']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.email.suppression.addresses[':EmailAddress'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2EmailSuppressionAddressesEmailAddressKey() {
  return ['v2', '/v2/email/suppression/addresses/:EmailAddress', 'DELETE'] as const
}

export function useDeleteV2EmailSuppressionAddressesEmailAddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.email.suppression.addresses)[':EmailAddress']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2EmailSuppressionAddressesEmailAddressKey()
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
            (typeof client.v2.email.suppression.addresses)[':EmailAddress']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.email.suppression.addresses[':EmailAddress'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2EmailAccountKey(
  args: InferRequestType<typeof client.v2.email.account.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/account', keyArgs] as const
}

export function useGetV2EmailAccount<TError = unknown>(
  args: InferRequestType<typeof client.v2.email.account.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.account.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2EmailAccountKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.account.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.email.account.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EmailAccount<TError = unknown>(
  args: InferRequestType<typeof client.v2.email.account.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.account.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2EmailAccountKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.account.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.email.account.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2EmailDeliverabilityDashboardBlacklistReportBlacklistItemNamesKey(
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

export function useGetV2EmailDeliverabilityDashboardBlacklistReportBlacklistItemNames<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['blacklist-report#BlacklistItemNames']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2EmailDeliverabilityDashboardBlacklistReportBlacklistItemNamesKey(args)
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
                (typeof client.v2.email)['deliverability-dashboard']['blacklist-report#BlacklistItemNames']['$get']
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
          client.v2.email['deliverability-dashboard']['blacklist-report#BlacklistItemNames'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EmailDeliverabilityDashboardBlacklistReportBlacklistItemNames<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['blacklist-report#BlacklistItemNames']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2EmailDeliverabilityDashboardBlacklistReportBlacklistItemNamesKey(args)
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
                (typeof client.v2.email)['deliverability-dashboard']['blacklist-report#BlacklistItemNames']['$get']
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
          client.v2.email['deliverability-dashboard']['blacklist-report#BlacklistItemNames'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2EmailDedicatedIpsIPKey(
  args: InferRequestType<(typeof client.v2.email)['dedicated-ips'][':IP']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/dedicated-ips/:IP', keyArgs] as const
}

export function useGetV2EmailDedicatedIpsIP<TError = unknown>(
  args: InferRequestType<(typeof client.v2.email)['dedicated-ips'][':IP']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.email)['dedicated-ips'][':IP']['$get']>>
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
        ? getGetV2EmailDedicatedIpsIPKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.email)['dedicated-ips'][':IP']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.email['dedicated-ips'][':IP'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EmailDedicatedIpsIP<TError = unknown>(
  args: InferRequestType<(typeof client.v2.email)['dedicated-ips'][':IP']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.email)['dedicated-ips'][':IP']['$get']>>
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
        ? getGetV2EmailDedicatedIpsIPKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.email)['dedicated-ips'][':IP']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.email['dedicated-ips'][':IP'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2EmailDedicatedIpsKey(
  args: InferRequestType<(typeof client.v2.email)['dedicated-ips']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/dedicated-ips', keyArgs] as const
}

export function useGetV2EmailDedicatedIps<TError = unknown>(
  args: InferRequestType<(typeof client.v2.email)['dedicated-ips']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.email)['dedicated-ips']['$get']>>
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
        ? getGetV2EmailDedicatedIpsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.email)['dedicated-ips']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.email['dedicated-ips'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EmailDedicatedIps<TError = unknown>(
  args: InferRequestType<(typeof client.v2.email)['dedicated-ips']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.email)['dedicated-ips']['$get']>>
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
        ? getGetV2EmailDedicatedIpsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.email)['dedicated-ips']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.email['dedicated-ips'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2EmailDeliverabilityDashboardKey(
  args: InferRequestType<(typeof client.v2.email)['deliverability-dashboard']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/deliverability-dashboard', keyArgs] as const
}

export function useGetV2EmailDeliverabilityDashboard<TError = unknown>(
  args: InferRequestType<(typeof client.v2.email)['deliverability-dashboard']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.email)['deliverability-dashboard']['$get']>>
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
        ? getGetV2EmailDeliverabilityDashboardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.email)['deliverability-dashboard']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.email['deliverability-dashboard'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EmailDeliverabilityDashboard<TError = unknown>(
  args: InferRequestType<(typeof client.v2.email)['deliverability-dashboard']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.email)['deliverability-dashboard']['$get']>>
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
        ? getGetV2EmailDeliverabilityDashboardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.email)['deliverability-dashboard']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.email['deliverability-dashboard'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2EmailDeliverabilityDashboardKey() {
  return ['v2', '/v2/email/deliverability-dashboard', 'PUT'] as const
}

export function usePutV2EmailDeliverabilityDashboard<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.email)['deliverability-dashboard']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.email)['deliverability-dashboard']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2EmailDeliverabilityDashboardKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.email)['deliverability-dashboard']['$put']> },
      ) => parseResponse(client.v2.email['deliverability-dashboard'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2EmailDeliverabilityDashboardTestReportsReportIdKey(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['test-reports'][':ReportId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/deliverability-dashboard/test-reports/:ReportId', keyArgs] as const
}

export function useGetV2EmailDeliverabilityDashboardTestReportsReportId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['test-reports'][':ReportId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2EmailDeliverabilityDashboardTestReportsReportIdKey(args)
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
                (typeof client.v2.email)['deliverability-dashboard']['test-reports'][':ReportId']['$get']
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
          client.v2.email['deliverability-dashboard']['test-reports'][':ReportId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EmailDeliverabilityDashboardTestReportsReportId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['test-reports'][':ReportId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2EmailDeliverabilityDashboardTestReportsReportIdKey(args)
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
                (typeof client.v2.email)['deliverability-dashboard']['test-reports'][':ReportId']['$get']
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
          client.v2.email['deliverability-dashboard']['test-reports'][':ReportId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2EmailDeliverabilityDashboardCampaignsCampaignIdKey(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['campaigns'][':CampaignId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/deliverability-dashboard/campaigns/:CampaignId', keyArgs] as const
}

export function useGetV2EmailDeliverabilityDashboardCampaignsCampaignId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['campaigns'][':CampaignId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2EmailDeliverabilityDashboardCampaignsCampaignIdKey(args)
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
                (typeof client.v2.email)['deliverability-dashboard']['campaigns'][':CampaignId']['$get']
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
          client.v2.email['deliverability-dashboard'].campaigns[':CampaignId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EmailDeliverabilityDashboardCampaignsCampaignId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['campaigns'][':CampaignId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2EmailDeliverabilityDashboardCampaignsCampaignIdKey(args)
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
                (typeof client.v2.email)['deliverability-dashboard']['campaigns'][':CampaignId']['$get']
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
          client.v2.email['deliverability-dashboard'].campaigns[':CampaignId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDateKey(
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

export function useGetV2EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDate<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['statistics-report'][':Domain#StartDate&EndDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDateKey(args)
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
                (typeof client.v2.email)['deliverability-dashboard']['statistics-report'][':Domain#StartDate&EndDate']['$get']
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
          client.v2.email['deliverability-dashboard']['statistics-report'][
            ':Domain#StartDate&EndDate'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDate<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['statistics-report'][':Domain#StartDate&EndDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDateKey(args)
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
                (typeof client.v2.email)['deliverability-dashboard']['statistics-report'][':Domain#StartDate&EndDate']['$get']
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
          client.v2.email['deliverability-dashboard']['statistics-report'][
            ':Domain#StartDate&EndDate'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2EmailIdentitiesEmailIdentityPoliciesKey(
  args: InferRequestType<(typeof client.v2.email.identities)[':EmailIdentity']['policies']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/identities/:EmailIdentity/policies', keyArgs] as const
}

export function useGetV2EmailIdentitiesEmailIdentityPolicies<TError = unknown>(
  args: InferRequestType<(typeof client.v2.email.identities)[':EmailIdentity']['policies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.email.identities)[':EmailIdentity']['policies']['$get']>
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
        ? getGetV2EmailIdentitiesEmailIdentityPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.email.identities)[':EmailIdentity']['policies']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.email.identities[':EmailIdentity'].policies.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EmailIdentitiesEmailIdentityPolicies<TError = unknown>(
  args: InferRequestType<(typeof client.v2.email.identities)[':EmailIdentity']['policies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.email.identities)[':EmailIdentity']['policies']['$get']>
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
        ? getGetV2EmailIdentitiesEmailIdentityPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.email.identities)[':EmailIdentity']['policies']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.email.identities[':EmailIdentity'].policies.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2EmailImportJobsJobIdKey(
  args: InferRequestType<(typeof client.v2.email)['import-jobs'][':JobId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/import-jobs/:JobId', keyArgs] as const
}

export function useGetV2EmailImportJobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.email)['import-jobs'][':JobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.email)['import-jobs'][':JobId']['$get']>>
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
        ? getGetV2EmailImportJobsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.email)['import-jobs'][':JobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.email['import-jobs'][':JobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EmailImportJobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.email)['import-jobs'][':JobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.email)['import-jobs'][':JobId']['$get']>>
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
        ? getGetV2EmailImportJobsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.email)['import-jobs'][':JobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.email['import-jobs'][':JobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2EmailDeliverabilityDashboardTestReportsKey(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['test-reports']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/deliverability-dashboard/test-reports', keyArgs] as const
}

export function useGetV2EmailDeliverabilityDashboardTestReports<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['test-reports']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2EmailDeliverabilityDashboardTestReportsKey(args)
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
                (typeof client.v2.email)['deliverability-dashboard']['test-reports']['$get']
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
          client.v2.email['deliverability-dashboard']['test-reports'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EmailDeliverabilityDashboardTestReports<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['test-reports']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2EmailDeliverabilityDashboardTestReportsKey(args)
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
                (typeof client.v2.email)['deliverability-dashboard']['test-reports']['$get']
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
          client.v2.email['deliverability-dashboard']['test-reports'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDateKey(
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

export function useGetV2EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDate<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['domains'][':SubscribedDomain']['campaigns#StartDate&EndDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDateKey(
            args,
          )
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
                (typeof client.v2.email)['deliverability-dashboard']['domains'][':SubscribedDomain']['campaigns#StartDate&EndDate']['$get']
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
          client.v2.email['deliverability-dashboard'].domains[':SubscribedDomain'][
            'campaigns#StartDate&EndDate'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDate<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['domains'][':SubscribedDomain']['campaigns#StartDate&EndDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDateKey(
            args,
          )
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
                (typeof client.v2.email)['deliverability-dashboard']['domains'][':SubscribedDomain']['campaigns#StartDate&EndDate']['$get']
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
          client.v2.email['deliverability-dashboard'].domains[':SubscribedDomain'][
            'campaigns#StartDate&EndDate'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2EmailVdmRecommendationsKey() {
  return ['v2', '/v2/email/vdm/recommendations', 'POST'] as const
}

export function usePostV2EmailVdmRecommendations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.vdm.recommendations.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.email.vdm.recommendations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EmailVdmRecommendationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.email.vdm.recommendations.$post> },
      ) => parseResponse(client.v2.email.vdm.recommendations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2EmailSuppressionAddressesKey(
  args: InferRequestType<typeof client.v2.email.suppression.addresses.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/suppression/addresses', keyArgs] as const
}

export function useGetV2EmailSuppressionAddresses<TError = unknown>(
  args: InferRequestType<typeof client.v2.email.suppression.addresses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.email.suppression.addresses.$get>>
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
        ? getGetV2EmailSuppressionAddressesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.email.suppression.addresses.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.email.suppression.addresses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EmailSuppressionAddresses<TError = unknown>(
  args: InferRequestType<typeof client.v2.email.suppression.addresses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.email.suppression.addresses.$get>>
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
        ? getGetV2EmailSuppressionAddressesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.email.suppression.addresses.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.email.suppression.addresses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2EmailSuppressionAddressesKey() {
  return ['v2', '/v2/email/suppression/addresses', 'PUT'] as const
}

export function usePutV2EmailSuppressionAddresses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.suppression.addresses.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.email.suppression.addresses.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2EmailSuppressionAddressesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.email.suppression.addresses.$put> },
      ) => parseResponse(client.v2.email.suppression.addresses.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2EmailTagsResourceArnKey(
  args: InferRequestType<(typeof client.v2.email)['tags#ResourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/email/tags#ResourceArn', keyArgs] as const
}

export function useGetV2EmailTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.v2.email)['tags#ResourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.email)['tags#ResourceArn']['$get']>>
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
        ? getGetV2EmailTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.email)['tags#ResourceArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.email['tags#ResourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EmailTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.v2.email)['tags#ResourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.email)['tags#ResourceArn']['$get']>>
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
        ? getGetV2EmailTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.email)['tags#ResourceArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.email['tags#ResourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2EmailAccountDedicatedIpsWarmupKey() {
  return ['v2', '/v2/email/account/dedicated-ips/warmup', 'PUT'] as const
}

export function usePutV2EmailAccountDedicatedIpsWarmup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.email.account)['dedicated-ips']['warmup']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.email.account)['dedicated-ips']['warmup']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2EmailAccountDedicatedIpsWarmupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.email.account)['dedicated-ips']['warmup']['$put']>
        },
      ) => parseResponse(client.v2.email.account['dedicated-ips'].warmup.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2EmailAccountDetailsKey() {
  return ['v2', '/v2/email/account/details', 'POST'] as const
}

export function usePostV2EmailAccountDetails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.account.details.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.email.account.details.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EmailAccountDetailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.email.account.details.$post> },
      ) => parseResponse(client.v2.email.account.details.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV2EmailAccountSendingKey() {
  return ['v2', '/v2/email/account/sending', 'PUT'] as const
}

export function usePutV2EmailAccountSending<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.account.sending.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.email.account.sending.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2EmailAccountSendingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.email.account.sending.$put> },
      ) => parseResponse(client.v2.email.account.sending.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV2EmailAccountSuppressionKey() {
  return ['v2', '/v2/email/account/suppression', 'PUT'] as const
}

export function usePutV2EmailAccountSuppression<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.account.suppression.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.email.account.suppression.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2EmailAccountSuppressionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.email.account.suppression.$put> },
      ) => parseResponse(client.v2.email.account.suppression.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV2EmailAccountVdmKey() {
  return ['v2', '/v2/email/account/vdm', 'PUT'] as const
}

export function usePutV2EmailAccountVdm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.account.vdm.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.email.account.vdm.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2EmailAccountVdmKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.email.account.vdm.$put> }) =>
        parseResponse(client.v2.email.account.vdm.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV2EmailConfigurationSetsConfigurationSetNameDeliveryOptionsKey() {
  return [
    'v2',
    '/v2/email/configuration-sets/:ConfigurationSetName/delivery-options',
    'PUT',
  ] as const
}

export function usePutV2EmailConfigurationSetsConfigurationSetNameDeliveryOptions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['delivery-options']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2EmailConfigurationSetsConfigurationSetNameDeliveryOptionsKey()
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
            (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['delivery-options']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.email['configuration-sets'][':ConfigurationSetName']['delivery-options'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV2EmailConfigurationSetsConfigurationSetNameReputationOptionsKey() {
  return [
    'v2',
    '/v2/email/configuration-sets/:ConfigurationSetName/reputation-options',
    'PUT',
  ] as const
}

export function usePutV2EmailConfigurationSetsConfigurationSetNameReputationOptions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['reputation-options']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutV2EmailConfigurationSetsConfigurationSetNameReputationOptionsKey()
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
            (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['reputation-options']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.email['configuration-sets'][':ConfigurationSetName']['reputation-options'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV2EmailConfigurationSetsConfigurationSetNameSendingKey() {
  return ['v2', '/v2/email/configuration-sets/:ConfigurationSetName/sending', 'PUT'] as const
}

export function usePutV2EmailConfigurationSetsConfigurationSetNameSending<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['sending']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2EmailConfigurationSetsConfigurationSetNameSendingKey()
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
            (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['sending']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.email['configuration-sets'][':ConfigurationSetName'].sending.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV2EmailConfigurationSetsConfigurationSetNameSuppressionOptionsKey() {
  return [
    'v2',
    '/v2/email/configuration-sets/:ConfigurationSetName/suppression-options',
    'PUT',
  ] as const
}

export function usePutV2EmailConfigurationSetsConfigurationSetNameSuppressionOptions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['suppression-options']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutV2EmailConfigurationSetsConfigurationSetNameSuppressionOptionsKey()
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
            (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['suppression-options']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.email['configuration-sets'][':ConfigurationSetName'][
            'suppression-options'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV2EmailConfigurationSetsConfigurationSetNameTrackingOptionsKey() {
  return [
    'v2',
    '/v2/email/configuration-sets/:ConfigurationSetName/tracking-options',
    'PUT',
  ] as const
}

export function usePutV2EmailConfigurationSetsConfigurationSetNameTrackingOptions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['tracking-options']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2EmailConfigurationSetsConfigurationSetNameTrackingOptionsKey()
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
            (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['tracking-options']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.email['configuration-sets'][':ConfigurationSetName']['tracking-options'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV2EmailConfigurationSetsConfigurationSetNameVdmOptionsKey() {
  return ['v2', '/v2/email/configuration-sets/:ConfigurationSetName/vdm-options', 'PUT'] as const
}

export function usePutV2EmailConfigurationSetsConfigurationSetNameVdmOptions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['vdm-options']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2EmailConfigurationSetsConfigurationSetNameVdmOptionsKey()
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
            (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['vdm-options']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.email['configuration-sets'][':ConfigurationSetName']['vdm-options'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV2EmailDedicatedIpsIPPoolKey() {
  return ['v2', '/v2/email/dedicated-ips/:IP/pool', 'PUT'] as const
}

export function usePutV2EmailDedicatedIpsIPPool<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.email)['dedicated-ips'][':IP']['pool']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.email)['dedicated-ips'][':IP']['pool']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2EmailDedicatedIpsIPPoolKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.email)['dedicated-ips'][':IP']['pool']['$put']>
        },
      ) => parseResponse(client.v2.email['dedicated-ips'][':IP'].pool.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV2EmailDedicatedIpPoolsPoolNameScalingKey() {
  return ['v2', '/v2/email/dedicated-ip-pools/:PoolName/scaling', 'PUT'] as const
}

export function usePutV2EmailDedicatedIpPoolsPoolNameScaling<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.email)['dedicated-ip-pools'][':PoolName']['scaling']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2EmailDedicatedIpPoolsPoolNameScalingKey()
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
            (typeof client.v2.email)['dedicated-ip-pools'][':PoolName']['scaling']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.email['dedicated-ip-pools'][':PoolName'].scaling.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV2EmailDedicatedIpsIPWarmupKey() {
  return ['v2', '/v2/email/dedicated-ips/:IP/warmup', 'PUT'] as const
}

export function usePutV2EmailDedicatedIpsIPWarmup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.email)['dedicated-ips'][':IP']['warmup']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.email)['dedicated-ips'][':IP']['warmup']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2EmailDedicatedIpsIPWarmupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.email)['dedicated-ips'][':IP']['warmup']['$put']>
        },
      ) => parseResponse(client.v2.email['dedicated-ips'][':IP'].warmup.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV2EmailIdentitiesEmailIdentityConfigurationSetKey() {
  return ['v2', '/v2/email/identities/:EmailIdentity/configuration-set', 'PUT'] as const
}

export function usePutV2EmailIdentitiesEmailIdentityConfigurationSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.email.identities)[':EmailIdentity']['configuration-set']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2EmailIdentitiesEmailIdentityConfigurationSetKey()
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
            (typeof client.v2.email.identities)[':EmailIdentity']['configuration-set']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.email.identities[':EmailIdentity']['configuration-set'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV2EmailIdentitiesEmailIdentityDkimKey() {
  return ['v2', '/v2/email/identities/:EmailIdentity/dkim', 'PUT'] as const
}

export function usePutV2EmailIdentitiesEmailIdentityDkim<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.email.identities)[':EmailIdentity']['dkim']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.email.identities)[':EmailIdentity']['dkim']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2EmailIdentitiesEmailIdentityDkimKey()
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
            (typeof client.v2.email.identities)[':EmailIdentity']['dkim']['$put']
          >
        },
      ) =>
        parseResponse(client.v2.email.identities[':EmailIdentity'].dkim.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1EmailIdentitiesEmailIdentityDkimSigningKey() {
  return ['v1', '/v1/email/identities/:EmailIdentity/dkim/signing', 'PUT'] as const
}

export function usePutV1EmailIdentitiesEmailIdentityDkimSigning<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.email.identities)[':EmailIdentity']['dkim']['signing']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1EmailIdentitiesEmailIdentityDkimSigningKey()
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
            (typeof client.v1.email.identities)[':EmailIdentity']['dkim']['signing']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.email.identities[':EmailIdentity'].dkim.signing.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV2EmailIdentitiesEmailIdentityFeedbackKey() {
  return ['v2', '/v2/email/identities/:EmailIdentity/feedback', 'PUT'] as const
}

export function usePutV2EmailIdentitiesEmailIdentityFeedback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.email.identities)[':EmailIdentity']['feedback']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2EmailIdentitiesEmailIdentityFeedbackKey()
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
            (typeof client.v2.email.identities)[':EmailIdentity']['feedback']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.email.identities[':EmailIdentity'].feedback.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV2EmailIdentitiesEmailIdentityMailFromKey() {
  return ['v2', '/v2/email/identities/:EmailIdentity/mail-from', 'PUT'] as const
}

export function usePutV2EmailIdentitiesEmailIdentityMailFrom<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.email.identities)[':EmailIdentity']['mail-from']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2EmailIdentitiesEmailIdentityMailFromKey()
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
            (typeof client.v2.email.identities)[':EmailIdentity']['mail-from']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.email.identities[':EmailIdentity']['mail-from'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2EmailOutboundBulkEmailsKey() {
  return ['v2', '/v2/email/outbound-bulk-emails', 'POST'] as const
}

export function usePostV2EmailOutboundBulkEmails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.email)['outbound-bulk-emails']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.email)['outbound-bulk-emails']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EmailOutboundBulkEmailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.email)['outbound-bulk-emails']['$post']> },
      ) => parseResponse(client.v2.email['outbound-bulk-emails'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2EmailOutboundCustomVerificationEmailsKey() {
  return ['v2', '/v2/email/outbound-custom-verification-emails', 'POST'] as const
}

export function usePostV2EmailOutboundCustomVerificationEmails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.email)['outbound-custom-verification-emails']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EmailOutboundCustomVerificationEmailsKey()
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
            (typeof client.v2.email)['outbound-custom-verification-emails']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.email['outbound-custom-verification-emails'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2EmailOutboundEmailsKey() {
  return ['v2', '/v2/email/outbound-emails', 'POST'] as const
}

export function usePostV2EmailOutboundEmails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.email)['outbound-emails']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.email)['outbound-emails']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EmailOutboundEmailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.email)['outbound-emails']['$post']> },
      ) => parseResponse(client.v2.email['outbound-emails'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2EmailTagsKey() {
  return ['v2', '/v2/email/tags', 'POST'] as const
}

export function usePostV2EmailTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.email.tags.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.email.tags.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EmailTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.email.tags.$post> }) =>
        parseResponse(client.v2.email.tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2EmailTemplatesTemplateNameRenderKey() {
  return ['v2', '/v2/email/templates/:TemplateName/render', 'POST'] as const
}

export function usePostV2EmailTemplatesTemplateNameRender<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.email.templates)[':TemplateName']['render']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EmailTemplatesTemplateNameRenderKey()
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
            (typeof client.v2.email.templates)[':TemplateName']['render']['$post']
          >
        },
      ) =>
        parseResponse(client.v2.email.templates[':TemplateName'].render.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2EmailTagsResourceArnTagKeysKey() {
  return ['v2', '/v2/email/tags#ResourceArn&TagKeys', 'DELETE'] as const
}

export function useDeleteV2EmailTagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.email)['tags#ResourceArn&TagKeys']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.email)['tags#ResourceArn&TagKeys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2EmailTagsResourceArnTagKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.email)['tags#ResourceArn&TagKeys']['$delete']>
        },
      ) => parseResponse(client.v2.email['tags#ResourceArn&TagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
