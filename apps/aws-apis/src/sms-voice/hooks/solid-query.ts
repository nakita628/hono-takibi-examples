import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1SmsVoiceConfigurationSetsQueryKey(
  args: InferRequestType<(typeof client.v1)['sms-voice']['configuration-sets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/sms-voice/configuration-sets', keyArgs] as const
}

export function getV1SmsVoiceConfigurationSetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['sms-voice']['configuration-sets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['sms-voice']['configuration-sets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['sms-voice']['configuration-sets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SmsVoiceConfigurationSetsQueryKey>
  >({
    queryKey: getV1SmsVoiceConfigurationSetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['sms-voice']['configuration-sets'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1SmsVoiceConfigurationSets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['sms-voice']['configuration-sets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['sms-voice']['configuration-sets']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['sms-voice']['configuration-sets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1SmsVoiceConfigurationSetsQueryKey>
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
      ...getV1SmsVoiceConfigurationSetsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1SmsVoiceConfigurationSetsMutationKey() {
  return ['v1', '/v1/sms-voice/configuration-sets', 'POST'] as const
}

export function getPostV1SmsVoiceConfigurationSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['sms-voice']['configuration-sets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['sms-voice']['configuration-sets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SmsVoiceConfigurationSetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['sms-voice']['configuration-sets']['$post']>,
    ) {
      return parseResponse(client.v1['sms-voice']['configuration-sets'].$post(args, options))
    },
  })
}

export function createPostV1SmsVoiceConfigurationSets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['sms-voice']['configuration-sets']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['sms-voice']['configuration-sets']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1SmsVoiceConfigurationSetsMutationOptions<
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

export function getV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsQueryKey(
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

export function getV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1)['sms-voice']['configuration-sets'][':ConfigurationSetName']['event-destinations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsQueryKey>
  >({
    queryKey: getV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['sms-voice']['configuration-sets'][':ConfigurationSetName'][
          'event-destinations'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinations<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1)['sms-voice']['configuration-sets'][':ConfigurationSetName']['event-destinations']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsQueryKey
          >
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
      ...getV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsMutationKey() {
  return [
    'v1',
    '/v1/sms-voice/configuration-sets/:ConfigurationSetName/event-destinations',
    'POST',
  ] as const
}

export function getPostV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1)['sms-voice']['configuration-sets'][':ConfigurationSetName']['event-destinations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['sms-voice']['configuration-sets'][':ConfigurationSetName']['event-destinations']['$post']
      >,
    ) {
      return parseResponse(
        client.v1['sms-voice']['configuration-sets'][':ConfigurationSetName'][
          'event-destinations'
        ].$post(args, options),
      )
    },
  })
}

export function createPostV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.v1)['sms-voice']['configuration-sets'][':ConfigurationSetName']['event-destinations']['$post']
          >,
          TOnMutateResult
        >
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
      getPostV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsMutationOptions<
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

export function getDeleteV1SmsVoiceConfigurationSetsConfigurationSetNameMutationKey() {
  return ['v1', '/v1/sms-voice/configuration-sets/:ConfigurationSetName', 'DELETE'] as const
}

export function getDeleteV1SmsVoiceConfigurationSetsConfigurationSetNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1)['sms-voice']['configuration-sets'][':ConfigurationSetName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1SmsVoiceConfigurationSetsConfigurationSetNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['sms-voice']['configuration-sets'][':ConfigurationSetName']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1['sms-voice']['configuration-sets'][':ConfigurationSetName'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteV1SmsVoiceConfigurationSetsConfigurationSetName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.v1)['sms-voice']['configuration-sets'][':ConfigurationSetName']['$delete']
          >,
          TOnMutateResult
        >
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
      getDeleteV1SmsVoiceConfigurationSetsConfigurationSetNameMutationOptions<
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

export function getPutV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameMutationKey() {
  return [
    'v1',
    '/v1/sms-voice/configuration-sets/:ConfigurationSetName/event-destinations/:EventDestinationName',
    'PUT',
  ] as const
}

export function getPutV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1)['sms-voice']['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['sms-voice']['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$put']
      >,
    ) {
      return parseResponse(
        client.v1['sms-voice']['configuration-sets'][':ConfigurationSetName']['event-destinations'][
          ':EventDestinationName'
        ].$put(args, options),
      )
    },
  })
}

export function createPutV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.v1)['sms-voice']['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$put']
          >,
          TOnMutateResult
        >
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
      getPutV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameMutationOptions<
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

export function getDeleteV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameMutationKey() {
  return [
    'v1',
    '/v1/sms-voice/configuration-sets/:ConfigurationSetName/event-destinations/:EventDestinationName',
    'DELETE',
  ] as const
}

export function getDeleteV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1)['sms-voice']['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['sms-voice']['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1['sms-voice']['configuration-sets'][':ConfigurationSetName']['event-destinations'][
          ':EventDestinationName'
        ].$delete(args, options),
      )
    },
  })
}

export function createDeleteV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.v1)['sms-voice']['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$delete']
          >,
          TOnMutateResult
        >
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
      getDeleteV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameMutationOptions<
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

export function getPostV1SmsVoiceVoiceMessageMutationKey() {
  return ['v1', '/v1/sms-voice/voice/message', 'POST'] as const
}

export function getPostV1SmsVoiceVoiceMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['sms-voice']['voice']['message']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['sms-voice']['voice']['message']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SmsVoiceVoiceMessageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['sms-voice']['voice']['message']['$post']>,
    ) {
      return parseResponse(client.v1['sms-voice'].voice.message.$post(args, options))
    },
  })
}

export function createPostV1SmsVoiceVoiceMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['sms-voice']['voice']['message']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['sms-voice']['voice']['message']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1SmsVoiceVoiceMessageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
