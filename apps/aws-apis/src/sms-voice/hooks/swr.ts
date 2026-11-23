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

export function getGetV1SmsVoiceConfigurationSetsKey(
  args: InferRequestType<(typeof client.v1)['sms-voice']['configuration-sets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/sms-voice/configuration-sets', keyArgs] as const
}

export function useGetV1SmsVoiceConfigurationSets<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['sms-voice']['configuration-sets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['sms-voice']['configuration-sets']['$get']>>
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
        ? getGetV1SmsVoiceConfigurationSetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['sms-voice']['configuration-sets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['sms-voice']['configuration-sets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SmsVoiceConfigurationSets<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['sms-voice']['configuration-sets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['sms-voice']['configuration-sets']['$get']>>
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
        ? getGetV1SmsVoiceConfigurationSetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['sms-voice']['configuration-sets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['sms-voice']['configuration-sets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1SmsVoiceConfigurationSetsKey() {
  return ['v1', '/v1/sms-voice/configuration-sets', 'POST'] as const
}

export function usePostV1SmsVoiceConfigurationSets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['sms-voice']['configuration-sets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['sms-voice']['configuration-sets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SmsVoiceConfigurationSetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)['sms-voice']['configuration-sets']['$post']>
        },
      ) => parseResponse(client.v1['sms-voice']['configuration-sets'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsKey(
  args: InferRequestType<
    (typeof client.v1)['sms-voice']['configuration-sets'][':ConfigurationSetName']['event-destinations']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v1',
    '/v1/sms-voice/configuration-sets/:ConfigurationSetName/event-destinations',
    keyArgs,
  ] as const
}

export function useGetV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1)['sms-voice']['configuration-sets'][':ConfigurationSetName']['event-destinations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['sms-voice']['configuration-sets'][':ConfigurationSetName']['event-destinations']['$get']
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
        ? getGetV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsKey(args)
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
                (typeof client.v1)['sms-voice']['configuration-sets'][':ConfigurationSetName']['event-destinations']['$get']
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
          client.v1['sms-voice']['configuration-sets'][':ConfigurationSetName'][
            'event-destinations'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1)['sms-voice']['configuration-sets'][':ConfigurationSetName']['event-destinations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['sms-voice']['configuration-sets'][':ConfigurationSetName']['event-destinations']['$get']
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
        ? getGetV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsKey(args)
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
                (typeof client.v1)['sms-voice']['configuration-sets'][':ConfigurationSetName']['event-destinations']['$get']
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
          client.v1['sms-voice']['configuration-sets'][':ConfigurationSetName'][
            'event-destinations'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsKey() {
  return [
    'v1',
    '/v1/sms-voice/configuration-sets/:ConfigurationSetName/event-destinations',
    'POST',
  ] as const
}

export function usePostV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['sms-voice']['configuration-sets'][':ConfigurationSetName']['event-destinations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['sms-voice']['configuration-sets'][':ConfigurationSetName']['event-destinations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsKey()
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
            (typeof client.v1)['sms-voice']['configuration-sets'][':ConfigurationSetName']['event-destinations']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['sms-voice']['configuration-sets'][':ConfigurationSetName'][
            'event-destinations'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1SmsVoiceConfigurationSetsConfigurationSetNameKey() {
  return ['v1', '/v1/sms-voice/configuration-sets/:ConfigurationSetName', 'DELETE'] as const
}

export function useDeleteV1SmsVoiceConfigurationSetsConfigurationSetName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['sms-voice']['configuration-sets'][':ConfigurationSetName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['sms-voice']['configuration-sets'][':ConfigurationSetName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1SmsVoiceConfigurationSetsConfigurationSetNameKey()
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
            (typeof client.v1)['sms-voice']['configuration-sets'][':ConfigurationSetName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1['sms-voice']['configuration-sets'][':ConfigurationSetName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameKey() {
  return [
    'v1',
    '/v1/sms-voice/configuration-sets/:ConfigurationSetName/event-destinations/:EventDestinationName',
    'PUT',
  ] as const
}

export function usePutV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['sms-voice']['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['sms-voice']['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameKey()
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
            (typeof client.v1)['sms-voice']['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1['sms-voice']['configuration-sets'][':ConfigurationSetName'][
            'event-destinations'
          ][':EventDestinationName'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameKey() {
  return [
    'v1',
    '/v1/sms-voice/configuration-sets/:ConfigurationSetName/event-destinations/:EventDestinationName',
    'DELETE',
  ] as const
}

export function useDeleteV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['sms-voice']['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['sms-voice']['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameKey()
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
            (typeof client.v1)['sms-voice']['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1['sms-voice']['configuration-sets'][':ConfigurationSetName'][
            'event-destinations'
          ][':EventDestinationName'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1SmsVoiceVoiceMessageKey() {
  return ['v1', '/v1/sms-voice/voice/message', 'POST'] as const
}

export function usePostV1SmsVoiceVoiceMessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['sms-voice']['voice']['message']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['sms-voice']['voice']['message']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SmsVoiceVoiceMessageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['sms-voice']['voice']['message']['$post']> },
      ) => parseResponse(client.v1['sms-voice'].voice.message.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
