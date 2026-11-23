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

export function getAgentStatusKey() {
  return ['agent-status'] as const
}

export function getContactKey() {
  return ['contact'] as const
}

export function getContactFlowModulesKey() {
  return ['contact-flow-modules'] as const
}

export function getContactFlowModulesSummaryKey() {
  return ['contact-flow-modules-summary'] as const
}

export function getContactFlowsKey() {
  return ['contact-flows'] as const
}

export function getContactFlowsSummaryKey() {
  return ['contact-flows-summary'] as const
}

export function getContactsKey() {
  return ['contacts'] as const
}

export function getDefaultVocabularyKey() {
  return ['default-vocabulary'] as const
}

export function getDefaultVocabularySummaryKey() {
  return ['default-vocabulary-summary'] as const
}

export function getHoursOfOperationsKey() {
  return ['hours-of-operations'] as const
}

export function getHoursOfOperationsSummaryKey() {
  return ['hours-of-operations-summary'] as const
}

export function getInstanceKey() {
  return ['instance'] as const
}

export function getMetricsKey() {
  return ['metrics'] as const
}

export function getPhoneNumberKey() {
  return ['phone-number'] as const
}

export function getPhoneNumbersSummaryKey() {
  return ['phone-numbers-summary'] as const
}

export function getPromptsSummaryKey() {
  return ['prompts-summary'] as const
}

export function getQueuesKey() {
  return ['queues'] as const
}

export function getQueuesSummaryKey() {
  return ['queues-summary'] as const
}

export function getQuickConnectsKey() {
  return ['quick-connects'] as const
}

export function getRoutingProfilesKey() {
  return ['routing-profiles'] as const
}

export function getRoutingProfilesSummaryKey() {
  return ['routing-profiles-summary'] as const
}

export function getRulesKey() {
  return ['rules'] as const
}

export function getSearchQueuesKey() {
  return ['search-queues'] as const
}

export function getSearchRoutingProfilesKey() {
  return ['search-routing-profiles'] as const
}

export function getSearchSecurityProfilesKey() {
  return ['search-security-profiles'] as const
}

export function getSearchUsersKey() {
  return ['search-users'] as const
}

export function getSecurityProfilesKey() {
  return ['security-profiles'] as const
}

export function getSecurityProfilesPermissionsKey() {
  return ['security-profiles-permissions'] as const
}

export function getSecurityProfilesSummaryKey() {
  return ['security-profiles-summary'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getTrafficDistributionKey() {
  return ['traffic-distribution'] as const
}

export function getTrafficDistributionGroupKey() {
  return ['traffic-distribution-group'] as const
}

export function getTrafficDistributionGroupsKey() {
  return ['traffic-distribution-groups'] as const
}

export function getUserKey() {
  return ['user'] as const
}

export function getUserHierarchyGroupsKey() {
  return ['user-hierarchy-groups'] as const
}

export function getUserHierarchyGroupsSummaryKey() {
  return ['user-hierarchy-groups-summary'] as const
}

export function getUserHierarchyStructureKey() {
  return ['user-hierarchy-structure'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getUsersSummaryKey() {
  return ['users-summary'] as const
}

export function getVocabularyKey() {
  return ['vocabulary'] as const
}

export function getVocabularyRemoveKey() {
  return ['vocabulary-remove'] as const
}

export function getVocabularySummaryKey() {
  return ['vocabulary-summary'] as const
}

export function getPutInstanceInstanceIdApprovedOriginMutationKey() {
  return ['instance', '/instance/:InstanceId/approved-origin', 'PUT'] as const
}

export function getPutInstanceInstanceIdApprovedOriginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instance)[':InstanceId']['approved-origin']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.instance)[':InstanceId']['approved-origin']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutInstanceInstanceIdApprovedOriginMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.instance)[':InstanceId']['approved-origin']['$put']>,
    ) {
      return parseResponse(client.instance[':InstanceId']['approved-origin'].$put(args, options))
    },
  })
}

export function usePutInstanceInstanceIdApprovedOrigin<
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
                ReturnType<(typeof client.instance)[':InstanceId']['approved-origin']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.instance)[':InstanceId']['approved-origin']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutInstanceInstanceIdApprovedOriginMutationOptions<
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

export function getPutInstanceInstanceIdBotMutationKey() {
  return ['instance', '/instance/:InstanceId/bot', 'PUT'] as const
}

export function getPutInstanceInstanceIdBotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instance)[':InstanceId']['bot']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.instance)[':InstanceId']['bot']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutInstanceInstanceIdBotMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.instance)[':InstanceId']['bot']['$put']>,
    ) {
      return parseResponse(client.instance[':InstanceId'].bot.$put(args, options))
    },
  })
}

export function usePutInstanceInstanceIdBot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instance)[':InstanceId']['bot']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.instance)[':InstanceId']['bot']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutInstanceInstanceIdBotMutationOptions<TError, TOnMutateResult>(
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

export function getPostInstanceInstanceIdBotMutationKey() {
  return ['instance', '/instance/:InstanceId/bot', 'POST'] as const
}

export function getPostInstanceInstanceIdBotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instance)[':InstanceId']['bot']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.instance)[':InstanceId']['bot']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInstanceInstanceIdBotMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.instance)[':InstanceId']['bot']['$post']>,
    ) {
      return parseResponse(client.instance[':InstanceId'].bot.$post(args, options))
    },
  })
}

export function usePostInstanceInstanceIdBot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instance)[':InstanceId']['bot']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.instance)[':InstanceId']['bot']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInstanceInstanceIdBotMutationOptions<TError, TOnMutateResult>(
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

export function getPutDefaultVocabularyInstanceIdLanguageCodeMutationKey() {
  return ['default-vocabulary', '/default-vocabulary/:InstanceId/:LanguageCode', 'PUT'] as const
}

export function getPutDefaultVocabularyInstanceIdLanguageCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['default-vocabulary'][':InstanceId'][':LanguageCode']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['default-vocabulary'][':InstanceId'][':LanguageCode']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDefaultVocabularyInstanceIdLanguageCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['default-vocabulary'][':InstanceId'][':LanguageCode']['$put']
      >,
    ) {
      return parseResponse(
        client['default-vocabulary'][':InstanceId'][':LanguageCode'].$put(args, options),
      )
    },
  })
}

export function usePutDefaultVocabularyInstanceIdLanguageCode<
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
                  (typeof client)['default-vocabulary'][':InstanceId'][':LanguageCode']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['default-vocabulary'][':InstanceId'][':LanguageCode']['$put']
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
  const mutationDefaults = getPutDefaultVocabularyInstanceIdLanguageCodeMutationOptions<
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

export function getPutInstanceInstanceIdStorageConfigMutationKey() {
  return ['instance', '/instance/:InstanceId/storage-config', 'PUT'] as const
}

export function getPutInstanceInstanceIdStorageConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instance)[':InstanceId']['storage-config']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.instance)[':InstanceId']['storage-config']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutInstanceInstanceIdStorageConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.instance)[':InstanceId']['storage-config']['$put']>,
    ) {
      return parseResponse(client.instance[':InstanceId']['storage-config'].$put(args, options))
    },
  })
}

export function usePutInstanceInstanceIdStorageConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instance)[':InstanceId']['storage-config']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.instance)[':InstanceId']['storage-config']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutInstanceInstanceIdStorageConfigMutationOptions<
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

export function getPutInstanceInstanceIdLambdaFunctionMutationKey() {
  return ['instance', '/instance/:InstanceId/lambda-function', 'PUT'] as const
}

export function getPutInstanceInstanceIdLambdaFunctionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instance)[':InstanceId']['lambda-function']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.instance)[':InstanceId']['lambda-function']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutInstanceInstanceIdLambdaFunctionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.instance)[':InstanceId']['lambda-function']['$put']>,
    ) {
      return parseResponse(client.instance[':InstanceId']['lambda-function'].$put(args, options))
    },
  })
}

export function usePutInstanceInstanceIdLambdaFunction<
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
                ReturnType<(typeof client.instance)[':InstanceId']['lambda-function']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.instance)[':InstanceId']['lambda-function']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutInstanceInstanceIdLambdaFunctionMutationOptions<
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

export function getPutInstanceInstanceIdLexBotMutationKey() {
  return ['instance', '/instance/:InstanceId/lex-bot', 'PUT'] as const
}

export function getPutInstanceInstanceIdLexBotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instance)[':InstanceId']['lex-bot']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.instance)[':InstanceId']['lex-bot']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutInstanceInstanceIdLexBotMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.instance)[':InstanceId']['lex-bot']['$put']>,
    ) {
      return parseResponse(client.instance[':InstanceId']['lex-bot'].$put(args, options))
    },
  })
}

export function usePutInstanceInstanceIdLexBot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instance)[':InstanceId']['lex-bot']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.instance)[':InstanceId']['lex-bot']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutInstanceInstanceIdLexBotMutationOptions<TError, TOnMutateResult>(
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

export function getPutPhoneNumberPhoneNumberIdContactFlowMutationKey() {
  return ['phone-number', '/phone-number/:PhoneNumberId/contact-flow', 'PUT'] as const
}

export function getPutPhoneNumberPhoneNumberIdContactFlowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['phone-number'][':PhoneNumberId']['contact-flow']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['phone-number'][':PhoneNumberId']['contact-flow']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPhoneNumberPhoneNumberIdContactFlowMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['phone-number'][':PhoneNumberId']['contact-flow']['$put']
      >,
    ) {
      return parseResponse(
        client['phone-number'][':PhoneNumberId']['contact-flow'].$put(args, options),
      )
    },
  })
}

export function usePutPhoneNumberPhoneNumberIdContactFlow<
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
                  (typeof client)['phone-number'][':PhoneNumberId']['contact-flow']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['phone-number'][':PhoneNumberId']['contact-flow']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPhoneNumberPhoneNumberIdContactFlowMutationOptions<
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

export function getPostQueuesInstanceIdQueueIdAssociateQuickConnectsMutationKey() {
  return ['queues', '/queues/:InstanceId/:QueueId/associate-quick-connects', 'POST'] as const
}

export function getPostQueuesInstanceIdQueueIdAssociateQuickConnectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.queues)[':InstanceId'][':QueueId']['associate-quick-connects']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.queues)[':InstanceId'][':QueueId']['associate-quick-connects']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostQueuesInstanceIdQueueIdAssociateQuickConnectsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.queues)[':InstanceId'][':QueueId']['associate-quick-connects']['$post']
      >,
    ) {
      return parseResponse(
        client.queues[':InstanceId'][':QueueId']['associate-quick-connects'].$post(args, options),
      )
    },
  })
}

export function usePostQueuesInstanceIdQueueIdAssociateQuickConnects<
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
                  (typeof client.queues)[':InstanceId'][':QueueId']['associate-quick-connects']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.queues)[':InstanceId'][':QueueId']['associate-quick-connects']['$post']
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
  const mutationDefaults = getPostQueuesInstanceIdQueueIdAssociateQuickConnectsMutationOptions<
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

export function getPostRoutingProfilesInstanceIdRoutingProfileIdAssociateQueuesMutationKey() {
  return [
    'routing-profiles',
    '/routing-profiles/:InstanceId/:RoutingProfileId/associate-queues',
    'POST',
  ] as const
}

export function getPostRoutingProfilesInstanceIdRoutingProfileIdAssociateQueuesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['associate-queues']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['associate-queues']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRoutingProfilesInstanceIdRoutingProfileIdAssociateQueuesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['associate-queues']['$post']
      >,
    ) {
      return parseResponse(
        client['routing-profiles'][':InstanceId'][':RoutingProfileId']['associate-queues'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostRoutingProfilesInstanceIdRoutingProfileIdAssociateQueues<
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
                  (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['associate-queues']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['associate-queues']['$post']
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
    getPostRoutingProfilesInstanceIdRoutingProfileIdAssociateQueuesMutationOptions<
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

export function getPutInstanceInstanceIdSecurityKeyMutationKey() {
  return ['instance', '/instance/:InstanceId/security-key', 'PUT'] as const
}

export function getPutInstanceInstanceIdSecurityKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instance)[':InstanceId']['security-key']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.instance)[':InstanceId']['security-key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutInstanceInstanceIdSecurityKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.instance)[':InstanceId']['security-key']['$put']>,
    ) {
      return parseResponse(client.instance[':InstanceId']['security-key'].$put(args, options))
    },
  })
}

export function usePutInstanceInstanceIdSecurityKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instance)[':InstanceId']['security-key']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.instance)[':InstanceId']['security-key']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutInstanceInstanceIdSecurityKeyMutationOptions<
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

export function getPostPhoneNumberClaimMutationKey() {
  return ['phone-number', '/phone-number/claim', 'POST'] as const
}

export function getPostPhoneNumberClaimMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number']['claim']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['phone-number']['claim']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPhoneNumberClaimMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['phone-number']['claim']['$post']>) {
      return parseResponse(client['phone-number'].claim.$post(args, options))
    },
  })
}

export function usePostPhoneNumberClaim<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['phone-number']['claim']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['phone-number']['claim']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPhoneNumberClaimMutationOptions<TError, TOnMutateResult>(
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

export function getAgentStatusInstanceIdQueryKey(
  args: InferRequestType<(typeof client)['agent-status'][':InstanceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['agent-status', '/agent-status/:InstanceId', keyArgs] as const
}

export function getAgentStatusInstanceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['agent-status'][':InstanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['agent-status'][':InstanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['agent-status'][':InstanceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentStatusInstanceIdQueryKey>
  >({
    queryKey: getAgentStatusInstanceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['agent-status'][':InstanceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAgentStatusInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['agent-status'][':InstanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['agent-status'][':InstanceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['agent-status'][':InstanceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgentStatusInstanceIdQueryKey>
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
      ...getAgentStatusInstanceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAgentStatusInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['agent-status'][':InstanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['agent-status'][':InstanceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['agent-status'][':InstanceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgentStatusInstanceIdQueryKey>
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
      ...getAgentStatusInstanceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutAgentStatusInstanceIdMutationKey() {
  return ['agent-status', '/agent-status/:InstanceId', 'PUT'] as const
}

export function getPutAgentStatusInstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['agent-status'][':InstanceId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['agent-status'][':InstanceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAgentStatusInstanceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['agent-status'][':InstanceId']['$put']>,
    ) {
      return parseResponse(client['agent-status'][':InstanceId'].$put(args, options))
    },
  })
}

export function usePutAgentStatusInstanceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['agent-status'][':InstanceId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['agent-status'][':InstanceId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAgentStatusInstanceIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutContactFlowsInstanceIdMutationKey() {
  return ['contact-flows', '/contact-flows/:InstanceId', 'PUT'] as const
}

export function getPutContactFlowsInstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['contact-flows'][':InstanceId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['contact-flows'][':InstanceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutContactFlowsInstanceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['contact-flows'][':InstanceId']['$put']>,
    ) {
      return parseResponse(client['contact-flows'][':InstanceId'].$put(args, options))
    },
  })
}

export function usePutContactFlowsInstanceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['contact-flows'][':InstanceId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['contact-flows'][':InstanceId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutContactFlowsInstanceIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutContactFlowModulesInstanceIdMutationKey() {
  return ['contact-flow-modules', '/contact-flow-modules/:InstanceId', 'PUT'] as const
}

export function getPutContactFlowModulesInstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['contact-flow-modules'][':InstanceId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['contact-flow-modules'][':InstanceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutContactFlowModulesInstanceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['contact-flow-modules'][':InstanceId']['$put']>,
    ) {
      return parseResponse(client['contact-flow-modules'][':InstanceId'].$put(args, options))
    },
  })
}

export function usePutContactFlowModulesInstanceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['contact-flow-modules'][':InstanceId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['contact-flow-modules'][':InstanceId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutContactFlowModulesInstanceIdMutationOptions<
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

export function getPutHoursOfOperationsInstanceIdMutationKey() {
  return ['hours-of-operations', '/hours-of-operations/:InstanceId', 'PUT'] as const
}

export function getPutHoursOfOperationsInstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['hours-of-operations'][':InstanceId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['hours-of-operations'][':InstanceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutHoursOfOperationsInstanceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['hours-of-operations'][':InstanceId']['$put']>,
    ) {
      return parseResponse(client['hours-of-operations'][':InstanceId'].$put(args, options))
    },
  })
}

export function usePutHoursOfOperationsInstanceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['hours-of-operations'][':InstanceId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['hours-of-operations'][':InstanceId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutHoursOfOperationsInstanceIdMutationOptions<
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

export function getInstanceQueryKey(args: InferRequestType<typeof client.instance.$get>) {
  const { header: _, ...keyArgs } = args
  return ['instance', '/instance', keyArgs] as const
}

export function getInstanceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.instance.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInstanceQueryKey>
  >({
    queryKey: getInstanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instance.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useInstance<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.instance.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getInstanceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInstanceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInstance<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.instance.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getInstanceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInstanceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutInstanceMutationKey() {
  return ['instance', '/instance', 'PUT'] as const
}

export function getPutInstanceMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.$put>>>>>,
    TError,
    InferRequestType<typeof client.instance.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutInstanceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.instance.$put>) {
      return parseResponse(client.instance.$put(args, options))
    },
  })
}

export function usePutInstance<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.$put>>>>>,
        TError,
        InferRequestType<typeof client.instance.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutInstanceMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getInstanceInstanceIdIntegrationAssociationsQueryKey(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['integration-associations']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['instance', '/instance/:InstanceId/integration-associations', keyArgs] as const
}

export function getInstanceInstanceIdIntegrationAssociationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.instance)[':InstanceId']['integration-associations']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['integration-associations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.instance)[':InstanceId']['integration-associations']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstanceInstanceIdIntegrationAssociationsQueryKey>
  >({
    queryKey: getInstanceInstanceIdIntegrationAssociationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instance[':InstanceId']['integration-associations'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstanceInstanceIdIntegrationAssociations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.instance)[':InstanceId']['integration-associations']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['integration-associations']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.instance)[':InstanceId']['integration-associations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstanceInstanceIdIntegrationAssociationsQueryKey>
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
      ...getInstanceInstanceIdIntegrationAssociationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstanceInstanceIdIntegrationAssociations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.instance)[':InstanceId']['integration-associations']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['integration-associations']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.instance)[':InstanceId']['integration-associations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstanceInstanceIdIntegrationAssociationsQueryKey>
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
      ...getInstanceInstanceIdIntegrationAssociationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutInstanceInstanceIdIntegrationAssociationsMutationKey() {
  return ['instance', '/instance/:InstanceId/integration-associations', 'PUT'] as const
}

export function getPutInstanceInstanceIdIntegrationAssociationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.instance)[':InstanceId']['integration-associations']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.instance)[':InstanceId']['integration-associations']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutInstanceInstanceIdIntegrationAssociationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.instance)[':InstanceId']['integration-associations']['$put']
      >,
    ) {
      return parseResponse(
        client.instance[':InstanceId']['integration-associations'].$put(args, options),
      )
    },
  })
}

export function usePutInstanceInstanceIdIntegrationAssociations<
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
                  (typeof client.instance)[':InstanceId']['integration-associations']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.instance)[':InstanceId']['integration-associations']['$put']
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
  const mutationDefaults = getPutInstanceInstanceIdIntegrationAssociationsMutationOptions<
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

export function getPostContactCreateParticipantMutationKey() {
  return ['contact', '/contact/create-participant', 'POST'] as const
}

export function getPostContactCreateParticipantMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contact)['create-participant']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.contact)['create-participant']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostContactCreateParticipantMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.contact)['create-participant']['$post']>,
    ) {
      return parseResponse(client.contact['create-participant'].$post(args, options))
    },
  })
}

export function usePostContactCreateParticipant<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contact)['create-participant']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.contact)['create-participant']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContactCreateParticipantMutationOptions<TError, TOnMutateResult>(
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

export function getPutQueuesInstanceIdMutationKey() {
  return ['queues', '/queues/:InstanceId', 'PUT'] as const
}

export function getPutQueuesInstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.queues)[':InstanceId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.queues)[':InstanceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutQueuesInstanceIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.queues)[':InstanceId']['$put']>) {
      return parseResponse(client.queues[':InstanceId'].$put(args, options))
    },
  })
}

export function usePutQueuesInstanceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.queues)[':InstanceId']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.queues)[':InstanceId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutQueuesInstanceIdMutationOptions<TError, TOnMutateResult>(
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

export function getQuickConnectsInstanceIdQueryKey(
  args: InferRequestType<(typeof client)['quick-connects'][':InstanceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['quick-connects', '/quick-connects/:InstanceId', keyArgs] as const
}

export function getQuickConnectsInstanceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['quick-connects'][':InstanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['quick-connects'][':InstanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['quick-connects'][':InstanceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuickConnectsInstanceIdQueryKey>
  >({
    queryKey: getQuickConnectsInstanceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['quick-connects'][':InstanceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useQuickConnectsInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['quick-connects'][':InstanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['quick-connects'][':InstanceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['quick-connects'][':InstanceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuickConnectsInstanceIdQueryKey>
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
      ...getQuickConnectsInstanceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseQuickConnectsInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['quick-connects'][':InstanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['quick-connects'][':InstanceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['quick-connects'][':InstanceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuickConnectsInstanceIdQueryKey>
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
      ...getQuickConnectsInstanceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutQuickConnectsInstanceIdMutationKey() {
  return ['quick-connects', '/quick-connects/:InstanceId', 'PUT'] as const
}

export function getPutQuickConnectsInstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['quick-connects'][':InstanceId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['quick-connects'][':InstanceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutQuickConnectsInstanceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['quick-connects'][':InstanceId']['$put']>,
    ) {
      return parseResponse(client['quick-connects'][':InstanceId'].$put(args, options))
    },
  })
}

export function usePutQuickConnectsInstanceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['quick-connects'][':InstanceId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['quick-connects'][':InstanceId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutQuickConnectsInstanceIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutRoutingProfilesInstanceIdMutationKey() {
  return ['routing-profiles', '/routing-profiles/:InstanceId', 'PUT'] as const
}

export function getPutRoutingProfilesInstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['routing-profiles'][':InstanceId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['routing-profiles'][':InstanceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRoutingProfilesInstanceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['routing-profiles'][':InstanceId']['$put']>,
    ) {
      return parseResponse(client['routing-profiles'][':InstanceId'].$put(args, options))
    },
  })
}

export function usePutRoutingProfilesInstanceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['routing-profiles'][':InstanceId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['routing-profiles'][':InstanceId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRoutingProfilesInstanceIdMutationOptions<TError, TOnMutateResult>(
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

export function getRulesInstanceIdQueryKey(
  args: InferRequestType<(typeof client.rules)[':InstanceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['rules', '/rules/:InstanceId', keyArgs] as const
}

export function getRulesInstanceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':InstanceId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rules)[':InstanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':InstanceId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRulesInstanceIdQueryKey>
  >({
    queryKey: getRulesInstanceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rules[':InstanceId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRulesInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':InstanceId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rules)[':InstanceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':InstanceId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRulesInstanceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRulesInstanceIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRulesInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':InstanceId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rules)[':InstanceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':InstanceId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRulesInstanceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRulesInstanceIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostRulesInstanceIdMutationKey() {
  return ['rules', '/rules/:InstanceId', 'POST'] as const
}

export function getPostRulesInstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':InstanceId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.rules)[':InstanceId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRulesInstanceIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.rules)[':InstanceId']['$post']>) {
      return parseResponse(client.rules[':InstanceId'].$post(args, options))
    },
  })
}

export function usePostRulesInstanceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':InstanceId']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.rules)[':InstanceId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRulesInstanceIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutSecurityProfilesInstanceIdMutationKey() {
  return ['security-profiles', '/security-profiles/:InstanceId', 'PUT'] as const
}

export function getPutSecurityProfilesInstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['security-profiles'][':InstanceId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['security-profiles'][':InstanceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSecurityProfilesInstanceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['security-profiles'][':InstanceId']['$put']>,
    ) {
      return parseResponse(client['security-profiles'][':InstanceId'].$put(args, options))
    },
  })
}

export function usePutSecurityProfilesInstanceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['security-profiles'][':InstanceId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['security-profiles'][':InstanceId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSecurityProfilesInstanceIdMutationOptions<TError, TOnMutateResult>(
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

export function getInstanceInstanceIdTaskTemplateQueryKey(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['task']['template']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['instance', '/instance/:InstanceId/task/template', keyArgs] as const
}

export function getInstanceInstanceIdTaskTemplateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instance)[':InstanceId']['task']['template']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['task']['template']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instance)[':InstanceId']['task']['template']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstanceInstanceIdTaskTemplateQueryKey>
  >({
    queryKey: getInstanceInstanceIdTaskTemplateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instance[':InstanceId'].task.template.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstanceInstanceIdTaskTemplate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instance)[':InstanceId']['task']['template']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['task']['template']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.instance)[':InstanceId']['task']['template']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstanceInstanceIdTaskTemplateQueryKey>
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
      ...getInstanceInstanceIdTaskTemplateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstanceInstanceIdTaskTemplate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instance)[':InstanceId']['task']['template']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['task']['template']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.instance)[':InstanceId']['task']['template']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstanceInstanceIdTaskTemplateQueryKey>
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
      ...getInstanceInstanceIdTaskTemplateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutInstanceInstanceIdTaskTemplateMutationKey() {
  return ['instance', '/instance/:InstanceId/task/template', 'PUT'] as const
}

export function getPutInstanceInstanceIdTaskTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instance)[':InstanceId']['task']['template']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.instance)[':InstanceId']['task']['template']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutInstanceInstanceIdTaskTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.instance)[':InstanceId']['task']['template']['$put']>,
    ) {
      return parseResponse(client.instance[':InstanceId'].task.template.$put(args, options))
    },
  })
}

export function usePutInstanceInstanceIdTaskTemplate<
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
                ReturnType<(typeof client.instance)[':InstanceId']['task']['template']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.instance)[':InstanceId']['task']['template']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutInstanceInstanceIdTaskTemplateMutationOptions<
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

export function getPutTrafficDistributionGroupMutationKey() {
  return ['traffic-distribution-group', '/traffic-distribution-group', 'PUT'] as const
}

export function getPutTrafficDistributionGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['traffic-distribution-group']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['traffic-distribution-group']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTrafficDistributionGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['traffic-distribution-group']['$put']>,
    ) {
      return parseResponse(client['traffic-distribution-group'].$put(args, options))
    },
  })
}

export function usePutTrafficDistributionGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['traffic-distribution-group']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['traffic-distribution-group']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTrafficDistributionGroupMutationOptions<TError, TOnMutateResult>(
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

export function getInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCasesQueryKey(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['integration-associations'][':IntegrationAssociationId']['use-cases']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'instance',
    '/instance/:InstanceId/integration-associations/:IntegrationAssociationId/use-cases',
    keyArgs,
  ] as const
}

export function getInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCasesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.instance)[':InstanceId']['integration-associations'][':IntegrationAssociationId']['use-cases']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['integration-associations'][':IntegrationAssociationId']['use-cases']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.instance)[':InstanceId']['integration-associations'][':IntegrationAssociationId']['use-cases']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCasesQueryKey
    >
  >({
    queryKey:
      getInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instance[':InstanceId']['integration-associations'][':IntegrationAssociationId'][
          'use-cases'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.instance)[':InstanceId']['integration-associations'][':IntegrationAssociationId']['use-cases']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['integration-associations'][':IntegrationAssociationId']['use-cases']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.instance)[':InstanceId']['integration-associations'][':IntegrationAssociationId']['use-cases']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCasesQueryKey
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
      ...getInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCasesQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.instance)[':InstanceId']['integration-associations'][':IntegrationAssociationId']['use-cases']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['integration-associations'][':IntegrationAssociationId']['use-cases']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.instance)[':InstanceId']['integration-associations'][':IntegrationAssociationId']['use-cases']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCasesQueryKey
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
      ...getInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCasesQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCasesMutationKey() {
  return [
    'instance',
    '/instance/:InstanceId/integration-associations/:IntegrationAssociationId/use-cases',
    'PUT',
  ] as const
}

export function getPutInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.instance)[':InstanceId']['integration-associations'][':IntegrationAssociationId']['use-cases']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.instance)[':InstanceId']['integration-associations'][':IntegrationAssociationId']['use-cases']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCasesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.instance)[':InstanceId']['integration-associations'][':IntegrationAssociationId']['use-cases']['$put']
      >,
    ) {
      return parseResponse(
        client.instance[':InstanceId']['integration-associations'][':IntegrationAssociationId'][
          'use-cases'
        ].$put(args, options),
      )
    },
  })
}

export function usePutInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCases<
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
                  (typeof client.instance)[':InstanceId']['integration-associations'][':IntegrationAssociationId']['use-cases']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.instance)[':InstanceId']['integration-associations'][':IntegrationAssociationId']['use-cases']['$put']
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
    getPutInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCasesMutationOptions<
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

export function getPutUsersInstanceIdMutationKey() {
  return ['users', '/users/:InstanceId', 'PUT'] as const
}

export function getPutUsersInstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':InstanceId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':InstanceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersInstanceIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':InstanceId']['$put']>) {
      return parseResponse(client.users[':InstanceId'].$put(args, options))
    },
  })
}

export function usePutUsersInstanceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':InstanceId']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':InstanceId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUsersInstanceIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutUserHierarchyGroupsInstanceIdMutationKey() {
  return ['user-hierarchy-groups', '/user-hierarchy-groups/:InstanceId', 'PUT'] as const
}

export function getPutUserHierarchyGroupsInstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['user-hierarchy-groups'][':InstanceId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['user-hierarchy-groups'][':InstanceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUserHierarchyGroupsInstanceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['user-hierarchy-groups'][':InstanceId']['$put']>,
    ) {
      return parseResponse(client['user-hierarchy-groups'][':InstanceId'].$put(args, options))
    },
  })
}

export function usePutUserHierarchyGroupsInstanceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['user-hierarchy-groups'][':InstanceId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['user-hierarchy-groups'][':InstanceId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUserHierarchyGroupsInstanceIdMutationOptions<
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

export function getPostVocabularyInstanceIdMutationKey() {
  return ['vocabulary', '/vocabulary/:InstanceId', 'POST'] as const
}

export function getPostVocabularyInstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vocabulary)[':InstanceId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.vocabulary)[':InstanceId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVocabularyInstanceIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.vocabulary)[':InstanceId']['$post']>) {
      return parseResponse(client.vocabulary[':InstanceId'].$post(args, options))
    },
  })
}

export function usePostVocabularyInstanceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.vocabulary)[':InstanceId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.vocabulary)[':InstanceId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVocabularyInstanceIdMutationOptions<TError, TOnMutateResult>(
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

export function getContactFlowsInstanceIdContactFlowIdQueryKey(
  args: InferRequestType<(typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['contact-flows', '/contact-flows/:InstanceId/:ContactFlowId', keyArgs] as const
}

export function getContactFlowsInstanceIdContactFlowIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactFlowsInstanceIdContactFlowIdQueryKey>
  >({
    queryKey: getContactFlowsInstanceIdContactFlowIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['contact-flows'][':InstanceId'][':ContactFlowId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useContactFlowsInstanceIdContactFlowId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactFlowsInstanceIdContactFlowIdQueryKey>
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
      ...getContactFlowsInstanceIdContactFlowIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseContactFlowsInstanceIdContactFlowId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactFlowsInstanceIdContactFlowIdQueryKey>
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
      ...getContactFlowsInstanceIdContactFlowIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteContactFlowsInstanceIdContactFlowIdMutationKey() {
  return ['contact-flows', '/contact-flows/:InstanceId/:ContactFlowId', 'DELETE'] as const
}

export function getDeleteContactFlowsInstanceIdContactFlowIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteContactFlowsInstanceIdContactFlowIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['$delete']
      >,
    ) {
      return parseResponse(
        client['contact-flows'][':InstanceId'][':ContactFlowId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteContactFlowsInstanceIdContactFlowId<
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
                  (typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['$delete']
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
  const mutationDefaults = getDeleteContactFlowsInstanceIdContactFlowIdMutationOptions<
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

export function getContactFlowModulesInstanceIdContactFlowModuleIdQueryKey(
  args: InferRequestType<
    (typeof client)['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'contact-flow-modules',
    '/contact-flow-modules/:InstanceId/:ContactFlowModuleId',
    keyArgs,
  ] as const
}

export function getContactFlowModulesInstanceIdContactFlowModuleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactFlowModulesInstanceIdContactFlowModuleIdQueryKey>
  >({
    queryKey: getContactFlowModulesInstanceIdContactFlowModuleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useContactFlowModulesInstanceIdContactFlowModuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactFlowModulesInstanceIdContactFlowModuleIdQueryKey>
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
      ...getContactFlowModulesInstanceIdContactFlowModuleIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseContactFlowModulesInstanceIdContactFlowModuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactFlowModulesInstanceIdContactFlowModuleIdQueryKey>
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
      ...getContactFlowModulesInstanceIdContactFlowModuleIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteContactFlowModulesInstanceIdContactFlowModuleIdMutationKey() {
  return [
    'contact-flow-modules',
    '/contact-flow-modules/:InstanceId/:ContactFlowModuleId',
    'DELETE',
  ] as const
}

export function getDeleteContactFlowModulesInstanceIdContactFlowModuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteContactFlowModulesInstanceIdContactFlowModuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId']['$delete']
      >,
    ) {
      return parseResponse(
        client['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteContactFlowModulesInstanceIdContactFlowModuleId<
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
                  (typeof client)['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId']['$delete']
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
  const mutationDefaults = getDeleteContactFlowModulesInstanceIdContactFlowModuleIdMutationOptions<
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

export function getHoursOfOperationsInstanceIdHoursOfOperationIdQueryKey(
  args: InferRequestType<
    (typeof client)['hours-of-operations'][':InstanceId'][':HoursOfOperationId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'hours-of-operations',
    '/hours-of-operations/:InstanceId/:HoursOfOperationId',
    keyArgs,
  ] as const
}

export function getHoursOfOperationsInstanceIdHoursOfOperationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['hours-of-operations'][':InstanceId'][':HoursOfOperationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['hours-of-operations'][':InstanceId'][':HoursOfOperationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['hours-of-operations'][':InstanceId'][':HoursOfOperationId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHoursOfOperationsInstanceIdHoursOfOperationIdQueryKey>
  >({
    queryKey: getHoursOfOperationsInstanceIdHoursOfOperationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['hours-of-operations'][':InstanceId'][':HoursOfOperationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useHoursOfOperationsInstanceIdHoursOfOperationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['hours-of-operations'][':InstanceId'][':HoursOfOperationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['hours-of-operations'][':InstanceId'][':HoursOfOperationId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['hours-of-operations'][':InstanceId'][':HoursOfOperationId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHoursOfOperationsInstanceIdHoursOfOperationIdQueryKey>
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
      ...getHoursOfOperationsInstanceIdHoursOfOperationIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseHoursOfOperationsInstanceIdHoursOfOperationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['hours-of-operations'][':InstanceId'][':HoursOfOperationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['hours-of-operations'][':InstanceId'][':HoursOfOperationId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['hours-of-operations'][':InstanceId'][':HoursOfOperationId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHoursOfOperationsInstanceIdHoursOfOperationIdQueryKey>
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
      ...getHoursOfOperationsInstanceIdHoursOfOperationIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostHoursOfOperationsInstanceIdHoursOfOperationIdMutationKey() {
  return [
    'hours-of-operations',
    '/hours-of-operations/:InstanceId/:HoursOfOperationId',
    'POST',
  ] as const
}

export function getPostHoursOfOperationsInstanceIdHoursOfOperationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['hours-of-operations'][':InstanceId'][':HoursOfOperationId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['hours-of-operations'][':InstanceId'][':HoursOfOperationId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostHoursOfOperationsInstanceIdHoursOfOperationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['hours-of-operations'][':InstanceId'][':HoursOfOperationId']['$post']
      >,
    ) {
      return parseResponse(
        client['hours-of-operations'][':InstanceId'][':HoursOfOperationId'].$post(args, options),
      )
    },
  })
}

export function usePostHoursOfOperationsInstanceIdHoursOfOperationId<
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
                  (typeof client)['hours-of-operations'][':InstanceId'][':HoursOfOperationId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['hours-of-operations'][':InstanceId'][':HoursOfOperationId']['$post']
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
  const mutationDefaults = getPostHoursOfOperationsInstanceIdHoursOfOperationIdMutationOptions<
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

export function getDeleteHoursOfOperationsInstanceIdHoursOfOperationIdMutationKey() {
  return [
    'hours-of-operations',
    '/hours-of-operations/:InstanceId/:HoursOfOperationId',
    'DELETE',
  ] as const
}

export function getDeleteHoursOfOperationsInstanceIdHoursOfOperationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['hours-of-operations'][':InstanceId'][':HoursOfOperationId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['hours-of-operations'][':InstanceId'][':HoursOfOperationId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteHoursOfOperationsInstanceIdHoursOfOperationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['hours-of-operations'][':InstanceId'][':HoursOfOperationId']['$delete']
      >,
    ) {
      return parseResponse(
        client['hours-of-operations'][':InstanceId'][':HoursOfOperationId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteHoursOfOperationsInstanceIdHoursOfOperationId<
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
                  (typeof client)['hours-of-operations'][':InstanceId'][':HoursOfOperationId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['hours-of-operations'][':InstanceId'][':HoursOfOperationId']['$delete']
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
  const mutationDefaults = getDeleteHoursOfOperationsInstanceIdHoursOfOperationIdMutationOptions<
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

export function getInstanceInstanceIdQueryKey(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['instance', '/instance/:InstanceId', keyArgs] as const
}

export function getInstanceInstanceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instance)[':InstanceId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.instance)[':InstanceId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstanceInstanceIdQueryKey>
  >({
    queryKey: getInstanceInstanceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instance[':InstanceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstanceInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instance)[':InstanceId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instance)[':InstanceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstanceInstanceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInstanceInstanceIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInstanceInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instance)[':InstanceId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instance)[':InstanceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstanceInstanceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInstanceInstanceIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteInstanceInstanceIdMutationKey() {
  return ['instance', '/instance/:InstanceId', 'DELETE'] as const
}

export function getDeleteInstanceInstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instance)[':InstanceId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.instance)[':InstanceId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteInstanceInstanceIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.instance)[':InstanceId']['$delete']>) {
      return parseResponse(client.instance[':InstanceId'].$delete(args, options))
    },
  })
}

export function useDeleteInstanceInstanceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instance)[':InstanceId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.instance)[':InstanceId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteInstanceInstanceIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdMutationKey() {
  return [
    'instance',
    '/instance/:InstanceId/integration-associations/:IntegrationAssociationId',
    'DELETE',
  ] as const
}

export function getDeleteInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.instance)[':InstanceId']['integration-associations'][':IntegrationAssociationId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.instance)[':InstanceId']['integration-associations'][':IntegrationAssociationId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.instance)[':InstanceId']['integration-associations'][':IntegrationAssociationId']['$delete']
      >,
    ) {
      return parseResponse(
        client.instance[':InstanceId']['integration-associations'][
          ':IntegrationAssociationId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteInstanceInstanceIdIntegrationAssociationsIntegrationAssociationId<
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
                  (typeof client.instance)[':InstanceId']['integration-associations'][':IntegrationAssociationId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.instance)[':InstanceId']['integration-associations'][':IntegrationAssociationId']['$delete']
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
    getDeleteInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdMutationOptions<
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

export function getQuickConnectsInstanceIdQuickConnectIdQueryKey(
  args: InferRequestType<
    (typeof client)['quick-connects'][':InstanceId'][':QuickConnectId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['quick-connects', '/quick-connects/:InstanceId/:QuickConnectId', keyArgs] as const
}

export function getQuickConnectsInstanceIdQuickConnectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['quick-connects'][':InstanceId'][':QuickConnectId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['quick-connects'][':InstanceId'][':QuickConnectId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['quick-connects'][':InstanceId'][':QuickConnectId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuickConnectsInstanceIdQuickConnectIdQueryKey>
  >({
    queryKey: getQuickConnectsInstanceIdQuickConnectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['quick-connects'][':InstanceId'][':QuickConnectId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useQuickConnectsInstanceIdQuickConnectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['quick-connects'][':InstanceId'][':QuickConnectId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['quick-connects'][':InstanceId'][':QuickConnectId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['quick-connects'][':InstanceId'][':QuickConnectId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuickConnectsInstanceIdQuickConnectIdQueryKey>
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
      ...getQuickConnectsInstanceIdQuickConnectIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseQuickConnectsInstanceIdQuickConnectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['quick-connects'][':InstanceId'][':QuickConnectId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['quick-connects'][':InstanceId'][':QuickConnectId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['quick-connects'][':InstanceId'][':QuickConnectId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuickConnectsInstanceIdQuickConnectIdQueryKey>
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
      ...getQuickConnectsInstanceIdQuickConnectIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteQuickConnectsInstanceIdQuickConnectIdMutationKey() {
  return ['quick-connects', '/quick-connects/:InstanceId/:QuickConnectId', 'DELETE'] as const
}

export function getDeleteQuickConnectsInstanceIdQuickConnectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['quick-connects'][':InstanceId'][':QuickConnectId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['quick-connects'][':InstanceId'][':QuickConnectId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteQuickConnectsInstanceIdQuickConnectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['quick-connects'][':InstanceId'][':QuickConnectId']['$delete']
      >,
    ) {
      return parseResponse(
        client['quick-connects'][':InstanceId'][':QuickConnectId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteQuickConnectsInstanceIdQuickConnectId<
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
                  (typeof client)['quick-connects'][':InstanceId'][':QuickConnectId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['quick-connects'][':InstanceId'][':QuickConnectId']['$delete']
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
  const mutationDefaults = getDeleteQuickConnectsInstanceIdQuickConnectIdMutationOptions<
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

export function getRulesInstanceIdRuleIdQueryKey(
  args: InferRequestType<(typeof client.rules)[':InstanceId'][':RuleId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['rules', '/rules/:InstanceId/:RuleId', keyArgs] as const
}

export function getRulesInstanceIdRuleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.rules)[':InstanceId'][':RuleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rules)[':InstanceId'][':RuleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rules)[':InstanceId'][':RuleId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRulesInstanceIdRuleIdQueryKey>
  >({
    queryKey: getRulesInstanceIdRuleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rules[':InstanceId'][':RuleId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRulesInstanceIdRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.rules)[':InstanceId'][':RuleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rules)[':InstanceId'][':RuleId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.rules)[':InstanceId'][':RuleId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRulesInstanceIdRuleIdQueryKey>
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
      ...getRulesInstanceIdRuleIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRulesInstanceIdRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.rules)[':InstanceId'][':RuleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rules)[':InstanceId'][':RuleId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.rules)[':InstanceId'][':RuleId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRulesInstanceIdRuleIdQueryKey>
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
      ...getRulesInstanceIdRuleIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutRulesInstanceIdRuleIdMutationKey() {
  return ['rules', '/rules/:InstanceId/:RuleId', 'PUT'] as const
}

export function getPutRulesInstanceIdRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rules)[':InstanceId'][':RuleId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.rules)[':InstanceId'][':RuleId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRulesInstanceIdRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.rules)[':InstanceId'][':RuleId']['$put']>,
    ) {
      return parseResponse(client.rules[':InstanceId'][':RuleId'].$put(args, options))
    },
  })
}

export function usePutRulesInstanceIdRuleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.rules)[':InstanceId'][':RuleId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.rules)[':InstanceId'][':RuleId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRulesInstanceIdRuleIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteRulesInstanceIdRuleIdMutationKey() {
  return ['rules', '/rules/:InstanceId/:RuleId', 'DELETE'] as const
}

export function getDeleteRulesInstanceIdRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rules)[':InstanceId'][':RuleId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.rules)[':InstanceId'][':RuleId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRulesInstanceIdRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.rules)[':InstanceId'][':RuleId']['$delete']>,
    ) {
      return parseResponse(client.rules[':InstanceId'][':RuleId'].$delete(args, options))
    },
  })
}

export function useDeleteRulesInstanceIdRuleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.rules)[':InstanceId'][':RuleId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.rules)[':InstanceId'][':RuleId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRulesInstanceIdRuleIdMutationOptions<TError, TOnMutateResult>(
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

export function getSecurityProfilesInstanceIdSecurityProfileIdQueryKey(
  args: InferRequestType<
    (typeof client)['security-profiles'][':InstanceId'][':SecurityProfileId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'security-profiles',
    '/security-profiles/:InstanceId/:SecurityProfileId',
    keyArgs,
  ] as const
}

export function getSecurityProfilesInstanceIdSecurityProfileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['security-profiles'][':InstanceId'][':SecurityProfileId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['security-profiles'][':InstanceId'][':SecurityProfileId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['security-profiles'][':InstanceId'][':SecurityProfileId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSecurityProfilesInstanceIdSecurityProfileIdQueryKey>
  >({
    queryKey: getSecurityProfilesInstanceIdSecurityProfileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['security-profiles'][':InstanceId'][':SecurityProfileId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSecurityProfilesInstanceIdSecurityProfileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['security-profiles'][':InstanceId'][':SecurityProfileId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['security-profiles'][':InstanceId'][':SecurityProfileId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['security-profiles'][':InstanceId'][':SecurityProfileId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSecurityProfilesInstanceIdSecurityProfileIdQueryKey>
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
      ...getSecurityProfilesInstanceIdSecurityProfileIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSecurityProfilesInstanceIdSecurityProfileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['security-profiles'][':InstanceId'][':SecurityProfileId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['security-profiles'][':InstanceId'][':SecurityProfileId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['security-profiles'][':InstanceId'][':SecurityProfileId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSecurityProfilesInstanceIdSecurityProfileIdQueryKey>
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
      ...getSecurityProfilesInstanceIdSecurityProfileIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSecurityProfilesInstanceIdSecurityProfileIdMutationKey() {
  return ['security-profiles', '/security-profiles/:InstanceId/:SecurityProfileId', 'POST'] as const
}

export function getPostSecurityProfilesInstanceIdSecurityProfileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['security-profiles'][':InstanceId'][':SecurityProfileId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['security-profiles'][':InstanceId'][':SecurityProfileId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSecurityProfilesInstanceIdSecurityProfileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['security-profiles'][':InstanceId'][':SecurityProfileId']['$post']
      >,
    ) {
      return parseResponse(
        client['security-profiles'][':InstanceId'][':SecurityProfileId'].$post(args, options),
      )
    },
  })
}

export function usePostSecurityProfilesInstanceIdSecurityProfileId<
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
                  (typeof client)['security-profiles'][':InstanceId'][':SecurityProfileId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['security-profiles'][':InstanceId'][':SecurityProfileId']['$post']
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
  const mutationDefaults = getPostSecurityProfilesInstanceIdSecurityProfileIdMutationOptions<
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

export function getDeleteSecurityProfilesInstanceIdSecurityProfileIdMutationKey() {
  return [
    'security-profiles',
    '/security-profiles/:InstanceId/:SecurityProfileId',
    'DELETE',
  ] as const
}

export function getDeleteSecurityProfilesInstanceIdSecurityProfileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['security-profiles'][':InstanceId'][':SecurityProfileId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['security-profiles'][':InstanceId'][':SecurityProfileId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSecurityProfilesInstanceIdSecurityProfileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['security-profiles'][':InstanceId'][':SecurityProfileId']['$delete']
      >,
    ) {
      return parseResponse(
        client['security-profiles'][':InstanceId'][':SecurityProfileId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteSecurityProfilesInstanceIdSecurityProfileId<
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
                  (typeof client)['security-profiles'][':InstanceId'][':SecurityProfileId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['security-profiles'][':InstanceId'][':SecurityProfileId']['$delete']
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
  const mutationDefaults = getDeleteSecurityProfilesInstanceIdSecurityProfileIdMutationOptions<
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

export function getInstanceInstanceIdTaskTemplateTaskTemplateIdQueryKey(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['task']['template'][':TaskTemplateId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['instance', '/instance/:InstanceId/task/template/:TaskTemplateId', keyArgs] as const
}

export function getInstanceInstanceIdTaskTemplateTaskTemplateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.instance)[':InstanceId']['task']['template'][':TaskTemplateId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['task']['template'][':TaskTemplateId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.instance)[':InstanceId']['task']['template'][':TaskTemplateId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstanceInstanceIdTaskTemplateTaskTemplateIdQueryKey>
  >({
    queryKey: getInstanceInstanceIdTaskTemplateTaskTemplateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instance[':InstanceId'].task.template[':TaskTemplateId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstanceInstanceIdTaskTemplateTaskTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.instance)[':InstanceId']['task']['template'][':TaskTemplateId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['task']['template'][':TaskTemplateId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.instance)[':InstanceId']['task']['template'][':TaskTemplateId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstanceInstanceIdTaskTemplateTaskTemplateIdQueryKey>
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
      ...getInstanceInstanceIdTaskTemplateTaskTemplateIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstanceInstanceIdTaskTemplateTaskTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.instance)[':InstanceId']['task']['template'][':TaskTemplateId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['task']['template'][':TaskTemplateId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.instance)[':InstanceId']['task']['template'][':TaskTemplateId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstanceInstanceIdTaskTemplateTaskTemplateIdQueryKey>
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
      ...getInstanceInstanceIdTaskTemplateTaskTemplateIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostInstanceInstanceIdTaskTemplateTaskTemplateIdMutationKey() {
  return ['instance', '/instance/:InstanceId/task/template/:TaskTemplateId', 'POST'] as const
}

export function getPostInstanceInstanceIdTaskTemplateTaskTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.instance)[':InstanceId']['task']['template'][':TaskTemplateId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.instance)[':InstanceId']['task']['template'][':TaskTemplateId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostInstanceInstanceIdTaskTemplateTaskTemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.instance)[':InstanceId']['task']['template'][':TaskTemplateId']['$post']
      >,
    ) {
      return parseResponse(
        client.instance[':InstanceId'].task.template[':TaskTemplateId'].$post(args, options),
      )
    },
  })
}

export function usePostInstanceInstanceIdTaskTemplateTaskTemplateId<
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
                  (typeof client.instance)[':InstanceId']['task']['template'][':TaskTemplateId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.instance)[':InstanceId']['task']['template'][':TaskTemplateId']['$post']
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
  const mutationDefaults = getPostInstanceInstanceIdTaskTemplateTaskTemplateIdMutationOptions<
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

export function getDeleteInstanceInstanceIdTaskTemplateTaskTemplateIdMutationKey() {
  return ['instance', '/instance/:InstanceId/task/template/:TaskTemplateId', 'DELETE'] as const
}

export function getDeleteInstanceInstanceIdTaskTemplateTaskTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.instance)[':InstanceId']['task']['template'][':TaskTemplateId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.instance)[':InstanceId']['task']['template'][':TaskTemplateId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteInstanceInstanceIdTaskTemplateTaskTemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.instance)[':InstanceId']['task']['template'][':TaskTemplateId']['$delete']
      >,
    ) {
      return parseResponse(
        client.instance[':InstanceId'].task.template[':TaskTemplateId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteInstanceInstanceIdTaskTemplateTaskTemplateId<
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
                  (typeof client.instance)[':InstanceId']['task']['template'][':TaskTemplateId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.instance)[':InstanceId']['task']['template'][':TaskTemplateId']['$delete']
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
  const mutationDefaults = getDeleteInstanceInstanceIdTaskTemplateTaskTemplateIdMutationOptions<
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

export function getTrafficDistributionGroupTrafficDistributionGroupIdQueryKey(
  args: InferRequestType<
    (typeof client)['traffic-distribution-group'][':TrafficDistributionGroupId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'traffic-distribution-group',
    '/traffic-distribution-group/:TrafficDistributionGroupId',
    keyArgs,
  ] as const
}

export function getTrafficDistributionGroupTrafficDistributionGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['traffic-distribution-group'][':TrafficDistributionGroupId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['traffic-distribution-group'][':TrafficDistributionGroupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['traffic-distribution-group'][':TrafficDistributionGroupId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrafficDistributionGroupTrafficDistributionGroupIdQueryKey>
  >({
    queryKey: getTrafficDistributionGroupTrafficDistributionGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['traffic-distribution-group'][':TrafficDistributionGroupId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTrafficDistributionGroupTrafficDistributionGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['traffic-distribution-group'][':TrafficDistributionGroupId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['traffic-distribution-group'][':TrafficDistributionGroupId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['traffic-distribution-group'][':TrafficDistributionGroupId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTrafficDistributionGroupTrafficDistributionGroupIdQueryKey>
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
      ...getTrafficDistributionGroupTrafficDistributionGroupIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTrafficDistributionGroupTrafficDistributionGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['traffic-distribution-group'][':TrafficDistributionGroupId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['traffic-distribution-group'][':TrafficDistributionGroupId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['traffic-distribution-group'][':TrafficDistributionGroupId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTrafficDistributionGroupTrafficDistributionGroupIdQueryKey>
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
      ...getTrafficDistributionGroupTrafficDistributionGroupIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteTrafficDistributionGroupTrafficDistributionGroupIdMutationKey() {
  return [
    'traffic-distribution-group',
    '/traffic-distribution-group/:TrafficDistributionGroupId',
    'DELETE',
  ] as const
}

export function getDeleteTrafficDistributionGroupTrafficDistributionGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['traffic-distribution-group'][':TrafficDistributionGroupId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['traffic-distribution-group'][':TrafficDistributionGroupId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteTrafficDistributionGroupTrafficDistributionGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['traffic-distribution-group'][':TrafficDistributionGroupId']['$delete']
      >,
    ) {
      return parseResponse(
        client['traffic-distribution-group'][':TrafficDistributionGroupId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteTrafficDistributionGroupTrafficDistributionGroupId<
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
                  (typeof client)['traffic-distribution-group'][':TrafficDistributionGroupId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['traffic-distribution-group'][':TrafficDistributionGroupId']['$delete']
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
    getDeleteTrafficDistributionGroupTrafficDistributionGroupIdMutationOptions<
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

export function getDeleteInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCasesUseCaseIdMutationKey() {
  return [
    'instance',
    '/instance/:InstanceId/integration-associations/:IntegrationAssociationId/use-cases/:UseCaseId',
    'DELETE',
  ] as const
}

export function getDeleteInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCasesUseCaseIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.instance)[':InstanceId']['integration-associations'][':IntegrationAssociationId']['use-cases'][':UseCaseId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.instance)[':InstanceId']['integration-associations'][':IntegrationAssociationId']['use-cases'][':UseCaseId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCasesUseCaseIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.instance)[':InstanceId']['integration-associations'][':IntegrationAssociationId']['use-cases'][':UseCaseId']['$delete']
      >,
    ) {
      return parseResponse(
        client.instance[':InstanceId']['integration-associations'][':IntegrationAssociationId'][
          'use-cases'
        ][':UseCaseId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCasesUseCaseId<
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
                  (typeof client.instance)[':InstanceId']['integration-associations'][':IntegrationAssociationId']['use-cases'][':UseCaseId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.instance)[':InstanceId']['integration-associations'][':IntegrationAssociationId']['use-cases'][':UseCaseId']['$delete']
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
    getDeleteInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCasesUseCaseIdMutationOptions<
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

export function getUsersInstanceIdUserIdQueryKey(
  args: InferRequestType<(typeof client.users)[':InstanceId'][':UserId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:InstanceId/:UserId', keyArgs] as const
}

export function getUsersInstanceIdUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':InstanceId'][':UserId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':InstanceId'][':UserId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':InstanceId'][':UserId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersInstanceIdUserIdQueryKey>
  >({
    queryKey: getUsersInstanceIdUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':InstanceId'][':UserId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersInstanceIdUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':InstanceId'][':UserId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':InstanceId'][':UserId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':InstanceId'][':UserId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersInstanceIdUserIdQueryKey>
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
      ...getUsersInstanceIdUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersInstanceIdUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':InstanceId'][':UserId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':InstanceId'][':UserId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':InstanceId'][':UserId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersInstanceIdUserIdQueryKey>
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
      ...getUsersInstanceIdUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteUsersInstanceIdUserIdMutationKey() {
  return ['users', '/users/:InstanceId/:UserId', 'DELETE'] as const
}

export function getDeleteUsersInstanceIdUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':InstanceId'][':UserId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':InstanceId'][':UserId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersInstanceIdUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':InstanceId'][':UserId']['$delete']>,
    ) {
      return parseResponse(client.users[':InstanceId'][':UserId'].$delete(args, options))
    },
  })
}

export function useDeleteUsersInstanceIdUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':InstanceId'][':UserId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':InstanceId'][':UserId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUsersInstanceIdUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getUserHierarchyGroupsInstanceIdHierarchyGroupIdQueryKey(
  args: InferRequestType<
    (typeof client)['user-hierarchy-groups'][':InstanceId'][':HierarchyGroupId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'user-hierarchy-groups',
    '/user-hierarchy-groups/:InstanceId/:HierarchyGroupId',
    keyArgs,
  ] as const
}

export function getUserHierarchyGroupsInstanceIdHierarchyGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['user-hierarchy-groups'][':InstanceId'][':HierarchyGroupId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['user-hierarchy-groups'][':InstanceId'][':HierarchyGroupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['user-hierarchy-groups'][':InstanceId'][':HierarchyGroupId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserHierarchyGroupsInstanceIdHierarchyGroupIdQueryKey>
  >({
    queryKey: getUserHierarchyGroupsInstanceIdHierarchyGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['user-hierarchy-groups'][':InstanceId'][':HierarchyGroupId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUserHierarchyGroupsInstanceIdHierarchyGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['user-hierarchy-groups'][':InstanceId'][':HierarchyGroupId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['user-hierarchy-groups'][':InstanceId'][':HierarchyGroupId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['user-hierarchy-groups'][':InstanceId'][':HierarchyGroupId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserHierarchyGroupsInstanceIdHierarchyGroupIdQueryKey>
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
      ...getUserHierarchyGroupsInstanceIdHierarchyGroupIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserHierarchyGroupsInstanceIdHierarchyGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['user-hierarchy-groups'][':InstanceId'][':HierarchyGroupId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['user-hierarchy-groups'][':InstanceId'][':HierarchyGroupId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['user-hierarchy-groups'][':InstanceId'][':HierarchyGroupId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserHierarchyGroupsInstanceIdHierarchyGroupIdQueryKey>
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
      ...getUserHierarchyGroupsInstanceIdHierarchyGroupIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteUserHierarchyGroupsInstanceIdHierarchyGroupIdMutationKey() {
  return [
    'user-hierarchy-groups',
    '/user-hierarchy-groups/:InstanceId/:HierarchyGroupId',
    'DELETE',
  ] as const
}

export function getDeleteUserHierarchyGroupsInstanceIdHierarchyGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['user-hierarchy-groups'][':InstanceId'][':HierarchyGroupId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['user-hierarchy-groups'][':InstanceId'][':HierarchyGroupId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserHierarchyGroupsInstanceIdHierarchyGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['user-hierarchy-groups'][':InstanceId'][':HierarchyGroupId']['$delete']
      >,
    ) {
      return parseResponse(
        client['user-hierarchy-groups'][':InstanceId'][':HierarchyGroupId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteUserHierarchyGroupsInstanceIdHierarchyGroupId<
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
                  (typeof client)['user-hierarchy-groups'][':InstanceId'][':HierarchyGroupId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['user-hierarchy-groups'][':InstanceId'][':HierarchyGroupId']['$delete']
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
  const mutationDefaults = getDeleteUserHierarchyGroupsInstanceIdHierarchyGroupIdMutationOptions<
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

export function getPostVocabularyRemoveInstanceIdVocabularyIdMutationKey() {
  return ['vocabulary-remove', '/vocabulary-remove/:InstanceId/:VocabularyId', 'POST'] as const
}

export function getPostVocabularyRemoveInstanceIdVocabularyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['vocabulary-remove'][':InstanceId'][':VocabularyId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['vocabulary-remove'][':InstanceId'][':VocabularyId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVocabularyRemoveInstanceIdVocabularyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['vocabulary-remove'][':InstanceId'][':VocabularyId']['$post']
      >,
    ) {
      return parseResponse(
        client['vocabulary-remove'][':InstanceId'][':VocabularyId'].$post(args, options),
      )
    },
  })
}

export function usePostVocabularyRemoveInstanceIdVocabularyId<
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
                  (typeof client)['vocabulary-remove'][':InstanceId'][':VocabularyId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['vocabulary-remove'][':InstanceId'][':VocabularyId']['$post']
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
  const mutationDefaults = getPostVocabularyRemoveInstanceIdVocabularyIdMutationOptions<
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

export function getAgentStatusInstanceIdAgentStatusIdQueryKey(
  args: InferRequestType<(typeof client)['agent-status'][':InstanceId'][':AgentStatusId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['agent-status', '/agent-status/:InstanceId/:AgentStatusId', keyArgs] as const
}

export function getAgentStatusInstanceIdAgentStatusIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['agent-status'][':InstanceId'][':AgentStatusId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['agent-status'][':InstanceId'][':AgentStatusId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['agent-status'][':InstanceId'][':AgentStatusId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentStatusInstanceIdAgentStatusIdQueryKey>
  >({
    queryKey: getAgentStatusInstanceIdAgentStatusIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['agent-status'][':InstanceId'][':AgentStatusId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAgentStatusInstanceIdAgentStatusId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['agent-status'][':InstanceId'][':AgentStatusId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['agent-status'][':InstanceId'][':AgentStatusId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['agent-status'][':InstanceId'][':AgentStatusId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgentStatusInstanceIdAgentStatusIdQueryKey>
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
      ...getAgentStatusInstanceIdAgentStatusIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAgentStatusInstanceIdAgentStatusId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['agent-status'][':InstanceId'][':AgentStatusId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['agent-status'][':InstanceId'][':AgentStatusId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['agent-status'][':InstanceId'][':AgentStatusId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgentStatusInstanceIdAgentStatusIdQueryKey>
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
      ...getAgentStatusInstanceIdAgentStatusIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAgentStatusInstanceIdAgentStatusIdMutationKey() {
  return ['agent-status', '/agent-status/:InstanceId/:AgentStatusId', 'POST'] as const
}

export function getPostAgentStatusInstanceIdAgentStatusIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['agent-status'][':InstanceId'][':AgentStatusId']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['agent-status'][':InstanceId'][':AgentStatusId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAgentStatusInstanceIdAgentStatusIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['agent-status'][':InstanceId'][':AgentStatusId']['$post']
      >,
    ) {
      return parseResponse(
        client['agent-status'][':InstanceId'][':AgentStatusId'].$post(args, options),
      )
    },
  })
}

export function usePostAgentStatusInstanceIdAgentStatusId<
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
                  (typeof client)['agent-status'][':InstanceId'][':AgentStatusId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['agent-status'][':InstanceId'][':AgentStatusId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAgentStatusInstanceIdAgentStatusIdMutationOptions<
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

export function getContactsInstanceIdContactIdQueryKey(
  args: InferRequestType<(typeof client.contacts)[':InstanceId'][':ContactId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['contacts', '/contacts/:InstanceId/:ContactId', keyArgs] as const
}

export function getContactsInstanceIdContactIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts)[':InstanceId'][':ContactId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':InstanceId'][':ContactId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts)[':InstanceId'][':ContactId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsInstanceIdContactIdQueryKey>
  >({
    queryKey: getContactsInstanceIdContactIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contacts[':InstanceId'][':ContactId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useContactsInstanceIdContactId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts)[':InstanceId'][':ContactId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':InstanceId'][':ContactId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contacts)[':InstanceId'][':ContactId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsInstanceIdContactIdQueryKey>
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
      ...getContactsInstanceIdContactIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseContactsInstanceIdContactId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts)[':InstanceId'][':ContactId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contacts)[':InstanceId'][':ContactId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contacts)[':InstanceId'][':ContactId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsInstanceIdContactIdQueryKey>
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
      ...getContactsInstanceIdContactIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostContactsInstanceIdContactIdMutationKey() {
  return ['contacts', '/contacts/:InstanceId/:ContactId', 'POST'] as const
}

export function getPostContactsInstanceIdContactIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts)[':InstanceId'][':ContactId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.contacts)[':InstanceId'][':ContactId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostContactsInstanceIdContactIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.contacts)[':InstanceId'][':ContactId']['$post']>,
    ) {
      return parseResponse(client.contacts[':InstanceId'][':ContactId'].$post(args, options))
    },
  })
}

export function usePostContactsInstanceIdContactId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contacts)[':InstanceId'][':ContactId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.contacts)[':InstanceId'][':ContactId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContactsInstanceIdContactIdMutationOptions<
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

export function getInstanceInstanceIdAttributeAttributeTypeQueryKey(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['attribute'][':AttributeType']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['instance', '/instance/:InstanceId/attribute/:AttributeType', keyArgs] as const
}

export function getInstanceInstanceIdAttributeAttributeTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.instance)[':InstanceId']['attribute'][':AttributeType']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['attribute'][':AttributeType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.instance)[':InstanceId']['attribute'][':AttributeType']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstanceInstanceIdAttributeAttributeTypeQueryKey>
  >({
    queryKey: getInstanceInstanceIdAttributeAttributeTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instance[':InstanceId'].attribute[':AttributeType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstanceInstanceIdAttributeAttributeType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.instance)[':InstanceId']['attribute'][':AttributeType']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['attribute'][':AttributeType']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.instance)[':InstanceId']['attribute'][':AttributeType']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstanceInstanceIdAttributeAttributeTypeQueryKey>
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
      ...getInstanceInstanceIdAttributeAttributeTypeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstanceInstanceIdAttributeAttributeType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.instance)[':InstanceId']['attribute'][':AttributeType']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['attribute'][':AttributeType']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.instance)[':InstanceId']['attribute'][':AttributeType']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstanceInstanceIdAttributeAttributeTypeQueryKey>
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
      ...getInstanceInstanceIdAttributeAttributeTypeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostInstanceInstanceIdAttributeAttributeTypeMutationKey() {
  return ['instance', '/instance/:InstanceId/attribute/:AttributeType', 'POST'] as const
}

export function getPostInstanceInstanceIdAttributeAttributeTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.instance)[':InstanceId']['attribute'][':AttributeType']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.instance)[':InstanceId']['attribute'][':AttributeType']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostInstanceInstanceIdAttributeAttributeTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.instance)[':InstanceId']['attribute'][':AttributeType']['$post']
      >,
    ) {
      return parseResponse(
        client.instance[':InstanceId'].attribute[':AttributeType'].$post(args, options),
      )
    },
  })
}

export function usePostInstanceInstanceIdAttributeAttributeType<
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
                  (typeof client.instance)[':InstanceId']['attribute'][':AttributeType']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.instance)[':InstanceId']['attribute'][':AttributeType']['$post']
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
  const mutationDefaults = getPostInstanceInstanceIdAttributeAttributeTypeMutationOptions<
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

export function getInstanceInstanceIdStorageConfigAssociationIdResourceTypeQueryKey(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['storage-config'][':AssociationId#resourceType']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'instance',
    '/instance/:InstanceId/storage-config/:AssociationId#resourceType',
    keyArgs,
  ] as const
}

export function getInstanceInstanceIdStorageConfigAssociationIdResourceTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.instance)[':InstanceId']['storage-config'][':AssociationId#resourceType']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['storage-config'][':AssociationId#resourceType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.instance)[':InstanceId']['storage-config'][':AssociationId#resourceType']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstanceInstanceIdStorageConfigAssociationIdResourceTypeQueryKey>
  >({
    queryKey: getInstanceInstanceIdStorageConfigAssociationIdResourceTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instance[':InstanceId']['storage-config'][':AssociationId#resourceType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstanceInstanceIdStorageConfigAssociationIdResourceType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.instance)[':InstanceId']['storage-config'][':AssociationId#resourceType']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['storage-config'][':AssociationId#resourceType']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.instance)[':InstanceId']['storage-config'][':AssociationId#resourceType']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstanceInstanceIdStorageConfigAssociationIdResourceTypeQueryKey>
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
      ...getInstanceInstanceIdStorageConfigAssociationIdResourceTypeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstanceInstanceIdStorageConfigAssociationIdResourceType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.instance)[':InstanceId']['storage-config'][':AssociationId#resourceType']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['storage-config'][':AssociationId#resourceType']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.instance)[':InstanceId']['storage-config'][':AssociationId#resourceType']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstanceInstanceIdStorageConfigAssociationIdResourceTypeQueryKey>
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
      ...getInstanceInstanceIdStorageConfigAssociationIdResourceTypeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostInstanceInstanceIdStorageConfigAssociationIdResourceTypeMutationKey() {
  return [
    'instance',
    '/instance/:InstanceId/storage-config/:AssociationId#resourceType',
    'POST',
  ] as const
}

export function getPostInstanceInstanceIdStorageConfigAssociationIdResourceTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.instance)[':InstanceId']['storage-config'][':AssociationId#resourceType']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.instance)[':InstanceId']['storage-config'][':AssociationId#resourceType']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostInstanceInstanceIdStorageConfigAssociationIdResourceTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.instance)[':InstanceId']['storage-config'][':AssociationId#resourceType']['$post']
      >,
    ) {
      return parseResponse(
        client.instance[':InstanceId']['storage-config'][':AssociationId#resourceType'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostInstanceInstanceIdStorageConfigAssociationIdResourceType<
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
                  (typeof client.instance)[':InstanceId']['storage-config'][':AssociationId#resourceType']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.instance)[':InstanceId']['storage-config'][':AssociationId#resourceType']['$post']
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
    getPostInstanceInstanceIdStorageConfigAssociationIdResourceTypeMutationOptions<
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

export function getDeleteInstanceInstanceIdStorageConfigAssociationIdResourceTypeMutationKey() {
  return [
    'instance',
    '/instance/:InstanceId/storage-config/:AssociationId#resourceType',
    'DELETE',
  ] as const
}

export function getDeleteInstanceInstanceIdStorageConfigAssociationIdResourceTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.instance)[':InstanceId']['storage-config'][':AssociationId#resourceType']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.instance)[':InstanceId']['storage-config'][':AssociationId#resourceType']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteInstanceInstanceIdStorageConfigAssociationIdResourceTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.instance)[':InstanceId']['storage-config'][':AssociationId#resourceType']['$delete']
      >,
    ) {
      return parseResponse(
        client.instance[':InstanceId']['storage-config'][':AssociationId#resourceType'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteInstanceInstanceIdStorageConfigAssociationIdResourceType<
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
                  (typeof client.instance)[':InstanceId']['storage-config'][':AssociationId#resourceType']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.instance)[':InstanceId']['storage-config'][':AssociationId#resourceType']['$delete']
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
    getDeleteInstanceInstanceIdStorageConfigAssociationIdResourceTypeMutationOptions<
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

export function getPhoneNumberPhoneNumberIdQueryKey(
  args: InferRequestType<(typeof client)['phone-number'][':PhoneNumberId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['phone-number', '/phone-number/:PhoneNumberId', keyArgs] as const
}

export function getPhoneNumberPhoneNumberIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['phone-number'][':PhoneNumberId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['phone-number'][':PhoneNumberId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['phone-number'][':PhoneNumberId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneNumberPhoneNumberIdQueryKey>
  >({
    queryKey: getPhoneNumberPhoneNumberIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['phone-number'][':PhoneNumberId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePhoneNumberPhoneNumberId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['phone-number'][':PhoneNumberId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['phone-number'][':PhoneNumberId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['phone-number'][':PhoneNumberId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPhoneNumberPhoneNumberIdQueryKey>
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
      ...getPhoneNumberPhoneNumberIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePhoneNumberPhoneNumberId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['phone-number'][':PhoneNumberId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['phone-number'][':PhoneNumberId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['phone-number'][':PhoneNumberId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPhoneNumberPhoneNumberIdQueryKey>
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
      ...getPhoneNumberPhoneNumberIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutPhoneNumberPhoneNumberIdMutationKey() {
  return ['phone-number', '/phone-number/:PhoneNumberId', 'PUT'] as const
}

export function getPutPhoneNumberPhoneNumberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['phone-number'][':PhoneNumberId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['phone-number'][':PhoneNumberId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPhoneNumberPhoneNumberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['phone-number'][':PhoneNumberId']['$put']>,
    ) {
      return parseResponse(client['phone-number'][':PhoneNumberId'].$put(args, options))
    },
  })
}

export function usePutPhoneNumberPhoneNumberId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['phone-number'][':PhoneNumberId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['phone-number'][':PhoneNumberId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPhoneNumberPhoneNumberIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeletePhoneNumberPhoneNumberIdMutationKey() {
  return ['phone-number', '/phone-number/:PhoneNumberId', 'DELETE'] as const
}

export function getDeletePhoneNumberPhoneNumberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['phone-number'][':PhoneNumberId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['phone-number'][':PhoneNumberId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePhoneNumberPhoneNumberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['phone-number'][':PhoneNumberId']['$delete']>,
    ) {
      return parseResponse(client['phone-number'][':PhoneNumberId'].$delete(args, options))
    },
  })
}

export function useDeletePhoneNumberPhoneNumberId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['phone-number'][':PhoneNumberId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['phone-number'][':PhoneNumberId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePhoneNumberPhoneNumberIdMutationOptions<
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

export function getQueuesInstanceIdQueueIdQueryKey(
  args: InferRequestType<(typeof client.queues)[':InstanceId'][':QueueId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['queues', '/queues/:InstanceId/:QueueId', keyArgs] as const
}

export function getQueuesInstanceIdQueueIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.queues)[':InstanceId'][':QueueId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.queues)[':InstanceId'][':QueueId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.queues)[':InstanceId'][':QueueId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueuesInstanceIdQueueIdQueryKey>
  >({
    queryKey: getQueuesInstanceIdQueueIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.queues[':InstanceId'][':QueueId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useQueuesInstanceIdQueueId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.queues)[':InstanceId'][':QueueId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.queues)[':InstanceId'][':QueueId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.queues)[':InstanceId'][':QueueId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQueuesInstanceIdQueueIdQueryKey>
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
      ...getQueuesInstanceIdQueueIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseQueuesInstanceIdQueueId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.queues)[':InstanceId'][':QueueId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.queues)[':InstanceId'][':QueueId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.queues)[':InstanceId'][':QueueId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQueuesInstanceIdQueueIdQueryKey>
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
      ...getQueuesInstanceIdQueueIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRoutingProfilesInstanceIdRoutingProfileIdQueryKey(
  args: InferRequestType<
    (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['routing-profiles', '/routing-profiles/:InstanceId/:RoutingProfileId', keyArgs] as const
}

export function getRoutingProfilesInstanceIdRoutingProfileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoutingProfilesInstanceIdRoutingProfileIdQueryKey>
  >({
    queryKey: getRoutingProfilesInstanceIdRoutingProfileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['routing-profiles'][':InstanceId'][':RoutingProfileId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRoutingProfilesInstanceIdRoutingProfileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRoutingProfilesInstanceIdRoutingProfileIdQueryKey>
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
      ...getRoutingProfilesInstanceIdRoutingProfileIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRoutingProfilesInstanceIdRoutingProfileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRoutingProfilesInstanceIdRoutingProfileIdQueryKey>
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
      ...getRoutingProfilesInstanceIdRoutingProfileIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUserHierarchyStructureInstanceIdQueryKey(
  args: InferRequestType<(typeof client)['user-hierarchy-structure'][':InstanceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['user-hierarchy-structure', '/user-hierarchy-structure/:InstanceId', keyArgs] as const
}

export function getUserHierarchyStructureInstanceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['user-hierarchy-structure'][':InstanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['user-hierarchy-structure'][':InstanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['user-hierarchy-structure'][':InstanceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserHierarchyStructureInstanceIdQueryKey>
  >({
    queryKey: getUserHierarchyStructureInstanceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['user-hierarchy-structure'][':InstanceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUserHierarchyStructureInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['user-hierarchy-structure'][':InstanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['user-hierarchy-structure'][':InstanceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['user-hierarchy-structure'][':InstanceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserHierarchyStructureInstanceIdQueryKey>
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
      ...getUserHierarchyStructureInstanceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserHierarchyStructureInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['user-hierarchy-structure'][':InstanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['user-hierarchy-structure'][':InstanceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['user-hierarchy-structure'][':InstanceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserHierarchyStructureInstanceIdQueryKey>
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
      ...getUserHierarchyStructureInstanceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostUserHierarchyStructureInstanceIdMutationKey() {
  return ['user-hierarchy-structure', '/user-hierarchy-structure/:InstanceId', 'POST'] as const
}

export function getPostUserHierarchyStructureInstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['user-hierarchy-structure'][':InstanceId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['user-hierarchy-structure'][':InstanceId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserHierarchyStructureInstanceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['user-hierarchy-structure'][':InstanceId']['$post']>,
    ) {
      return parseResponse(client['user-hierarchy-structure'][':InstanceId'].$post(args, options))
    },
  })
}

export function usePostUserHierarchyStructureInstanceId<
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
                ReturnType<(typeof client)['user-hierarchy-structure'][':InstanceId']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['user-hierarchy-structure'][':InstanceId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserHierarchyStructureInstanceIdMutationOptions<
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

export function getVocabularyInstanceIdVocabularyIdQueryKey(
  args: InferRequestType<(typeof client.vocabulary)[':InstanceId'][':VocabularyId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['vocabulary', '/vocabulary/:InstanceId/:VocabularyId', keyArgs] as const
}

export function getVocabularyInstanceIdVocabularyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vocabulary)[':InstanceId'][':VocabularyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vocabulary)[':InstanceId'][':VocabularyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vocabulary)[':InstanceId'][':VocabularyId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVocabularyInstanceIdVocabularyIdQueryKey>
  >({
    queryKey: getVocabularyInstanceIdVocabularyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vocabulary[':InstanceId'][':VocabularyId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVocabularyInstanceIdVocabularyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vocabulary)[':InstanceId'][':VocabularyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vocabulary)[':InstanceId'][':VocabularyId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.vocabulary)[':InstanceId'][':VocabularyId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVocabularyInstanceIdVocabularyIdQueryKey>
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
      ...getVocabularyInstanceIdVocabularyIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVocabularyInstanceIdVocabularyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vocabulary)[':InstanceId'][':VocabularyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vocabulary)[':InstanceId'][':VocabularyId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.vocabulary)[':InstanceId'][':VocabularyId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVocabularyInstanceIdVocabularyIdQueryKey>
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
      ...getVocabularyInstanceIdVocabularyIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteInstanceInstanceIdApprovedOriginOriginMutationKey() {
  return ['instance', '/instance/:InstanceId/approved-origin#origin', 'DELETE'] as const
}

export function getDeleteInstanceInstanceIdApprovedOriginOriginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.instance)[':InstanceId']['approved-origin#origin']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.instance)[':InstanceId']['approved-origin#origin']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteInstanceInstanceIdApprovedOriginOriginMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.instance)[':InstanceId']['approved-origin#origin']['$delete']
      >,
    ) {
      return parseResponse(
        client.instance[':InstanceId']['approved-origin#origin'].$delete(args, options),
      )
    },
  })
}

export function useDeleteInstanceInstanceIdApprovedOriginOrigin<
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
                  (typeof client.instance)[':InstanceId']['approved-origin#origin']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.instance)[':InstanceId']['approved-origin#origin']['$delete']
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
  const mutationDefaults = getDeleteInstanceInstanceIdApprovedOriginOriginMutationOptions<
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

export function getDeleteInstanceInstanceIdLambdaFunctionFunctionArnMutationKey() {
  return ['instance', '/instance/:InstanceId/lambda-function#functionArn', 'DELETE'] as const
}

export function getDeleteInstanceInstanceIdLambdaFunctionFunctionArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.instance)[':InstanceId']['lambda-function#functionArn']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.instance)[':InstanceId']['lambda-function#functionArn']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteInstanceInstanceIdLambdaFunctionFunctionArnMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.instance)[':InstanceId']['lambda-function#functionArn']['$delete']
      >,
    ) {
      return parseResponse(
        client.instance[':InstanceId']['lambda-function#functionArn'].$delete(args, options),
      )
    },
  })
}

export function useDeleteInstanceInstanceIdLambdaFunctionFunctionArn<
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
                  (typeof client.instance)[':InstanceId']['lambda-function#functionArn']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.instance)[':InstanceId']['lambda-function#functionArn']['$delete']
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
  const mutationDefaults = getDeleteInstanceInstanceIdLambdaFunctionFunctionArnMutationOptions<
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

export function getDeleteInstanceInstanceIdLexBotBotNameLexRegionMutationKey() {
  return ['instance', '/instance/:InstanceId/lex-bot#botName&lexRegion', 'DELETE'] as const
}

export function getDeleteInstanceInstanceIdLexBotBotNameLexRegionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.instance)[':InstanceId']['lex-bot#botName&lexRegion']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.instance)[':InstanceId']['lex-bot#botName&lexRegion']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteInstanceInstanceIdLexBotBotNameLexRegionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.instance)[':InstanceId']['lex-bot#botName&lexRegion']['$delete']
      >,
    ) {
      return parseResponse(
        client.instance[':InstanceId']['lex-bot#botName&lexRegion'].$delete(args, options),
      )
    },
  })
}

export function useDeleteInstanceInstanceIdLexBotBotNameLexRegion<
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
                  (typeof client.instance)[':InstanceId']['lex-bot#botName&lexRegion']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.instance)[':InstanceId']['lex-bot#botName&lexRegion']['$delete']
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
  const mutationDefaults = getDeleteInstanceInstanceIdLexBotBotNameLexRegionMutationOptions<
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

export function getDeletePhoneNumberPhoneNumberIdContactFlowInstanceIdMutationKey() {
  return ['phone-number', '/phone-number/:PhoneNumberId/contact-flow#instanceId', 'DELETE'] as const
}

export function getDeletePhoneNumberPhoneNumberIdContactFlowInstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['phone-number'][':PhoneNumberId']['contact-flow#instanceId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['phone-number'][':PhoneNumberId']['contact-flow#instanceId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeletePhoneNumberPhoneNumberIdContactFlowInstanceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['phone-number'][':PhoneNumberId']['contact-flow#instanceId']['$delete']
      >,
    ) {
      return parseResponse(
        client['phone-number'][':PhoneNumberId']['contact-flow#instanceId'].$delete(args, options),
      )
    },
  })
}

export function useDeletePhoneNumberPhoneNumberIdContactFlowInstanceId<
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
                  (typeof client)['phone-number'][':PhoneNumberId']['contact-flow#instanceId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['phone-number'][':PhoneNumberId']['contact-flow#instanceId']['$delete']
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
  const mutationDefaults = getDeletePhoneNumberPhoneNumberIdContactFlowInstanceIdMutationOptions<
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

export function getPostQueuesInstanceIdQueueIdDisassociateQuickConnectsMutationKey() {
  return ['queues', '/queues/:InstanceId/:QueueId/disassociate-quick-connects', 'POST'] as const
}

export function getPostQueuesInstanceIdQueueIdDisassociateQuickConnectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.queues)[':InstanceId'][':QueueId']['disassociate-quick-connects']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.queues)[':InstanceId'][':QueueId']['disassociate-quick-connects']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostQueuesInstanceIdQueueIdDisassociateQuickConnectsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.queues)[':InstanceId'][':QueueId']['disassociate-quick-connects']['$post']
      >,
    ) {
      return parseResponse(
        client.queues[':InstanceId'][':QueueId']['disassociate-quick-connects'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostQueuesInstanceIdQueueIdDisassociateQuickConnects<
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
                  (typeof client.queues)[':InstanceId'][':QueueId']['disassociate-quick-connects']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.queues)[':InstanceId'][':QueueId']['disassociate-quick-connects']['$post']
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
  const mutationDefaults = getPostQueuesInstanceIdQueueIdDisassociateQuickConnectsMutationOptions<
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

export function getPostRoutingProfilesInstanceIdRoutingProfileIdDisassociateQueuesMutationKey() {
  return [
    'routing-profiles',
    '/routing-profiles/:InstanceId/:RoutingProfileId/disassociate-queues',
    'POST',
  ] as const
}

export function getPostRoutingProfilesInstanceIdRoutingProfileIdDisassociateQueuesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['disassociate-queues']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['disassociate-queues']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRoutingProfilesInstanceIdRoutingProfileIdDisassociateQueuesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['disassociate-queues']['$post']
      >,
    ) {
      return parseResponse(
        client['routing-profiles'][':InstanceId'][':RoutingProfileId']['disassociate-queues'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostRoutingProfilesInstanceIdRoutingProfileIdDisassociateQueues<
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
                  (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['disassociate-queues']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['disassociate-queues']['$post']
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
    getPostRoutingProfilesInstanceIdRoutingProfileIdDisassociateQueuesMutationOptions<
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

export function getDeleteInstanceInstanceIdSecurityKeyAssociationIdMutationKey() {
  return ['instance', '/instance/:InstanceId/security-key/:AssociationId', 'DELETE'] as const
}

export function getDeleteInstanceInstanceIdSecurityKeyAssociationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.instance)[':InstanceId']['security-key'][':AssociationId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.instance)[':InstanceId']['security-key'][':AssociationId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteInstanceInstanceIdSecurityKeyAssociationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.instance)[':InstanceId']['security-key'][':AssociationId']['$delete']
      >,
    ) {
      return parseResponse(
        client.instance[':InstanceId']['security-key'][':AssociationId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteInstanceInstanceIdSecurityKeyAssociationId<
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
                  (typeof client.instance)[':InstanceId']['security-key'][':AssociationId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.instance)[':InstanceId']['security-key'][':AssociationId']['$delete']
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
  const mutationDefaults = getDeleteInstanceInstanceIdSecurityKeyAssociationIdMutationOptions<
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

export function getPostUsersInstanceIdUserIdContactMutationKey() {
  return ['users', '/users/:InstanceId/:UserId/contact', 'POST'] as const
}

export function getPostUsersInstanceIdUserIdContactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':InstanceId'][':UserId']['contact']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':InstanceId'][':UserId']['contact']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersInstanceIdUserIdContactMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':InstanceId'][':UserId']['contact']['$post']>,
    ) {
      return parseResponse(client.users[':InstanceId'][':UserId'].contact.$post(args, options))
    },
  })
}

export function usePostUsersInstanceIdUserIdContact<
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
                ReturnType<(typeof client.users)[':InstanceId'][':UserId']['contact']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':InstanceId'][':UserId']['contact']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersInstanceIdUserIdContactMutationOptions<
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

export function getContactAttributesInstanceIdInitialContactIdQueryKey(
  args: InferRequestType<
    (typeof client.contact.attributes)[':InstanceId'][':InitialContactId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['contact', '/contact/attributes/:InstanceId/:InitialContactId', keyArgs] as const
}

export function getContactAttributesInstanceIdInitialContactIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.contact.attributes)[':InstanceId'][':InitialContactId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.contact.attributes)[':InstanceId'][':InitialContactId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.contact.attributes)[':InstanceId'][':InitialContactId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactAttributesInstanceIdInitialContactIdQueryKey>
  >({
    queryKey: getContactAttributesInstanceIdInitialContactIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contact.attributes[':InstanceId'][':InitialContactId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useContactAttributesInstanceIdInitialContactId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.contact.attributes)[':InstanceId'][':InitialContactId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.contact.attributes)[':InstanceId'][':InitialContactId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.contact.attributes)[':InstanceId'][':InitialContactId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactAttributesInstanceIdInitialContactIdQueryKey>
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
      ...getContactAttributesInstanceIdInitialContactIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseContactAttributesInstanceIdInitialContactId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.contact.attributes)[':InstanceId'][':InitialContactId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.contact.attributes)[':InstanceId'][':InitialContactId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.contact.attributes)[':InstanceId'][':InitialContactId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactAttributesInstanceIdInitialContactIdQueryKey>
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
      ...getContactAttributesInstanceIdInitialContactIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMetricsCurrentInstanceIdMutationKey() {
  return ['metrics', '/metrics/current/:InstanceId', 'POST'] as const
}

export function getPostMetricsCurrentInstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metrics.current)[':InstanceId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.metrics.current)[':InstanceId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMetricsCurrentInstanceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.metrics.current)[':InstanceId']['$post']>,
    ) {
      return parseResponse(client.metrics.current[':InstanceId'].$post(args, options))
    },
  })
}

export function usePostMetricsCurrentInstanceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.metrics.current)[':InstanceId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.metrics.current)[':InstanceId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMetricsCurrentInstanceIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostMetricsUserdataInstanceIdMutationKey() {
  return ['metrics', '/metrics/userdata/:InstanceId', 'POST'] as const
}

export function getPostMetricsUserdataInstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metrics.userdata)[':InstanceId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.metrics.userdata)[':InstanceId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMetricsUserdataInstanceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.metrics.userdata)[':InstanceId']['$post']>,
    ) {
      return parseResponse(client.metrics.userdata[':InstanceId'].$post(args, options))
    },
  })
}

export function usePostMetricsUserdataInstanceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.metrics.userdata)[':InstanceId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.metrics.userdata)[':InstanceId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMetricsUserdataInstanceIdMutationOptions<TError, TOnMutateResult>(
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

export function getUserFederateInstanceIdQueryKey(
  args: InferRequestType<(typeof client.user.federate)[':InstanceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['user', '/user/federate/:InstanceId', keyArgs] as const
}

export function getUserFederateInstanceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user.federate)[':InstanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user.federate)[':InstanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user.federate)[':InstanceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserFederateInstanceIdQueryKey>
  >({
    queryKey: getUserFederateInstanceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.federate[':InstanceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUserFederateInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user.federate)[':InstanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user.federate)[':InstanceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.user.federate)[':InstanceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserFederateInstanceIdQueryKey>
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
      ...getUserFederateInstanceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserFederateInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user.federate)[':InstanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user.federate)[':InstanceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.user.federate)[':InstanceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserFederateInstanceIdQueryKey>
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
      ...getUserFederateInstanceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMetricsHistoricalInstanceIdMutationKey() {
  return ['metrics', '/metrics/historical/:InstanceId', 'POST'] as const
}

export function getPostMetricsHistoricalInstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metrics.historical)[':InstanceId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.metrics.historical)[':InstanceId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMetricsHistoricalInstanceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.metrics.historical)[':InstanceId']['$post']>,
    ) {
      return parseResponse(client.metrics.historical[':InstanceId'].$post(args, options))
    },
  })
}

export function usePostMetricsHistoricalInstanceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.metrics.historical)[':InstanceId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.metrics.historical)[':InstanceId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMetricsHistoricalInstanceIdMutationOptions<
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

export function getPostMetricsDataMutationKey() {
  return ['metrics', '/metrics/data', 'POST'] as const
}

export function getPostMetricsDataMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.data.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.metrics.data.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMetricsDataMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.metrics.data.$post>) {
      return parseResponse(client.metrics.data.$post(args, options))
    },
  })
}

export function usePostMetricsData<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.data.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.metrics.data.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMetricsDataMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTrafficDistributionIdQueryKey(
  args: InferRequestType<(typeof client)['traffic-distribution'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['traffic-distribution', '/traffic-distribution/:Id', keyArgs] as const
}

export function getTrafficDistributionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['traffic-distribution'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['traffic-distribution'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['traffic-distribution'][':Id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrafficDistributionIdQueryKey>
  >({
    queryKey: getTrafficDistributionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['traffic-distribution'][':Id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTrafficDistributionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['traffic-distribution'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['traffic-distribution'][':Id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['traffic-distribution'][':Id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTrafficDistributionIdQueryKey>
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
      ...getTrafficDistributionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTrafficDistributionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['traffic-distribution'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['traffic-distribution'][':Id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['traffic-distribution'][':Id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTrafficDistributionIdQueryKey>
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
      ...getTrafficDistributionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutTrafficDistributionIdMutationKey() {
  return ['traffic-distribution', '/traffic-distribution/:Id', 'PUT'] as const
}

export function getPutTrafficDistributionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['traffic-distribution'][':Id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['traffic-distribution'][':Id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTrafficDistributionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['traffic-distribution'][':Id']['$put']>,
    ) {
      return parseResponse(client['traffic-distribution'][':Id'].$put(args, options))
    },
  })
}

export function usePutTrafficDistributionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['traffic-distribution'][':Id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['traffic-distribution'][':Id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTrafficDistributionIdMutationOptions<TError, TOnMutateResult>(
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

export function getInstanceInstanceIdApprovedOriginsQueryKey(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['approved-origins']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['instance', '/instance/:InstanceId/approved-origins', keyArgs] as const
}

export function getInstanceInstanceIdApprovedOriginsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instance)[':InstanceId']['approved-origins']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['approved-origins']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instance)[':InstanceId']['approved-origins']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstanceInstanceIdApprovedOriginsQueryKey>
  >({
    queryKey: getInstanceInstanceIdApprovedOriginsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instance[':InstanceId']['approved-origins'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstanceInstanceIdApprovedOrigins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instance)[':InstanceId']['approved-origins']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['approved-origins']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.instance)[':InstanceId']['approved-origins']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstanceInstanceIdApprovedOriginsQueryKey>
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
      ...getInstanceInstanceIdApprovedOriginsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstanceInstanceIdApprovedOrigins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instance)[':InstanceId']['approved-origins']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['approved-origins']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.instance)[':InstanceId']['approved-origins']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstanceInstanceIdApprovedOriginsQueryKey>
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
      ...getInstanceInstanceIdApprovedOriginsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInstanceInstanceIdBotsLexVersionQueryKey(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['bots#lexVersion']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['instance', '/instance/:InstanceId/bots#lexVersion', keyArgs] as const
}

export function getInstanceInstanceIdBotsLexVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instance)[':InstanceId']['bots#lexVersion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['bots#lexVersion']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instance)[':InstanceId']['bots#lexVersion']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstanceInstanceIdBotsLexVersionQueryKey>
  >({
    queryKey: getInstanceInstanceIdBotsLexVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instance[':InstanceId']['bots#lexVersion'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstanceInstanceIdBotsLexVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instance)[':InstanceId']['bots#lexVersion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['bots#lexVersion']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.instance)[':InstanceId']['bots#lexVersion']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstanceInstanceIdBotsLexVersionQueryKey>
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
      ...getInstanceInstanceIdBotsLexVersionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstanceInstanceIdBotsLexVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instance)[':InstanceId']['bots#lexVersion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['bots#lexVersion']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.instance)[':InstanceId']['bots#lexVersion']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstanceInstanceIdBotsLexVersionQueryKey>
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
      ...getInstanceInstanceIdBotsLexVersionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getContactFlowModulesSummaryInstanceIdQueryKey(
  args: InferRequestType<(typeof client)['contact-flow-modules-summary'][':InstanceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'contact-flow-modules-summary',
    '/contact-flow-modules-summary/:InstanceId',
    keyArgs,
  ] as const
}

export function getContactFlowModulesSummaryInstanceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['contact-flow-modules-summary'][':InstanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['contact-flow-modules-summary'][':InstanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['contact-flow-modules-summary'][':InstanceId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactFlowModulesSummaryInstanceIdQueryKey>
  >({
    queryKey: getContactFlowModulesSummaryInstanceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['contact-flow-modules-summary'][':InstanceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useContactFlowModulesSummaryInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['contact-flow-modules-summary'][':InstanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['contact-flow-modules-summary'][':InstanceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['contact-flow-modules-summary'][':InstanceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactFlowModulesSummaryInstanceIdQueryKey>
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
      ...getContactFlowModulesSummaryInstanceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseContactFlowModulesSummaryInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['contact-flow-modules-summary'][':InstanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['contact-flow-modules-summary'][':InstanceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['contact-flow-modules-summary'][':InstanceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactFlowModulesSummaryInstanceIdQueryKey>
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
      ...getContactFlowModulesSummaryInstanceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getContactFlowsSummaryInstanceIdQueryKey(
  args: InferRequestType<(typeof client)['contact-flows-summary'][':InstanceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['contact-flows-summary', '/contact-flows-summary/:InstanceId', keyArgs] as const
}

export function getContactFlowsSummaryInstanceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['contact-flows-summary'][':InstanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['contact-flows-summary'][':InstanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['contact-flows-summary'][':InstanceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactFlowsSummaryInstanceIdQueryKey>
  >({
    queryKey: getContactFlowsSummaryInstanceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['contact-flows-summary'][':InstanceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useContactFlowsSummaryInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['contact-flows-summary'][':InstanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['contact-flows-summary'][':InstanceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['contact-flows-summary'][':InstanceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactFlowsSummaryInstanceIdQueryKey>
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
      ...getContactFlowsSummaryInstanceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseContactFlowsSummaryInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['contact-flows-summary'][':InstanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['contact-flows-summary'][':InstanceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['contact-flows-summary'][':InstanceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactFlowsSummaryInstanceIdQueryKey>
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
      ...getContactFlowsSummaryInstanceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getContactReferencesInstanceIdContactIdReferenceTypesQueryKey(
  args: InferRequestType<
    (typeof client.contact.references)[':InstanceId'][':ContactId#referenceTypes']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['contact', '/contact/references/:InstanceId/:ContactId#referenceTypes', keyArgs] as const
}

export function getContactReferencesInstanceIdContactIdReferenceTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.contact.references)[':InstanceId'][':ContactId#referenceTypes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.contact.references)[':InstanceId'][':ContactId#referenceTypes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.contact.references)[':InstanceId'][':ContactId#referenceTypes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactReferencesInstanceIdContactIdReferenceTypesQueryKey>
  >({
    queryKey: getContactReferencesInstanceIdContactIdReferenceTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contact.references[':InstanceId'][':ContactId#referenceTypes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useContactReferencesInstanceIdContactIdReferenceTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.contact.references)[':InstanceId'][':ContactId#referenceTypes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.contact.references)[':InstanceId'][':ContactId#referenceTypes']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.contact.references)[':InstanceId'][':ContactId#referenceTypes']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactReferencesInstanceIdContactIdReferenceTypesQueryKey>
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
      ...getContactReferencesInstanceIdContactIdReferenceTypesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseContactReferencesInstanceIdContactIdReferenceTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.contact.references)[':InstanceId'][':ContactId#referenceTypes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.contact.references)[':InstanceId'][':ContactId#referenceTypes']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.contact.references)[':InstanceId'][':ContactId#referenceTypes']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactReferencesInstanceIdContactIdReferenceTypesQueryKey>
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
      ...getContactReferencesInstanceIdContactIdReferenceTypesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostDefaultVocabularySummaryInstanceIdMutationKey() {
  return ['default-vocabulary-summary', '/default-vocabulary-summary/:InstanceId', 'POST'] as const
}

export function getPostDefaultVocabularySummaryInstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['default-vocabulary-summary'][':InstanceId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['default-vocabulary-summary'][':InstanceId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDefaultVocabularySummaryInstanceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['default-vocabulary-summary'][':InstanceId']['$post']>,
    ) {
      return parseResponse(client['default-vocabulary-summary'][':InstanceId'].$post(args, options))
    },
  })
}

export function usePostDefaultVocabularySummaryInstanceId<
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
                ReturnType<(typeof client)['default-vocabulary-summary'][':InstanceId']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['default-vocabulary-summary'][':InstanceId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDefaultVocabularySummaryInstanceIdMutationOptions<
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

export function getHoursOfOperationsSummaryInstanceIdQueryKey(
  args: InferRequestType<(typeof client)['hours-of-operations-summary'][':InstanceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'hours-of-operations-summary',
    '/hours-of-operations-summary/:InstanceId',
    keyArgs,
  ] as const
}

export function getHoursOfOperationsSummaryInstanceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['hours-of-operations-summary'][':InstanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['hours-of-operations-summary'][':InstanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['hours-of-operations-summary'][':InstanceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHoursOfOperationsSummaryInstanceIdQueryKey>
  >({
    queryKey: getHoursOfOperationsSummaryInstanceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['hours-of-operations-summary'][':InstanceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useHoursOfOperationsSummaryInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['hours-of-operations-summary'][':InstanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['hours-of-operations-summary'][':InstanceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['hours-of-operations-summary'][':InstanceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHoursOfOperationsSummaryInstanceIdQueryKey>
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
      ...getHoursOfOperationsSummaryInstanceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseHoursOfOperationsSummaryInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['hours-of-operations-summary'][':InstanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['hours-of-operations-summary'][':InstanceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['hours-of-operations-summary'][':InstanceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHoursOfOperationsSummaryInstanceIdQueryKey>
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
      ...getHoursOfOperationsSummaryInstanceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInstanceInstanceIdAttributesQueryKey(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['attributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['instance', '/instance/:InstanceId/attributes', keyArgs] as const
}

export function getInstanceInstanceIdAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instance)[':InstanceId']['attributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['attributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instance)[':InstanceId']['attributes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstanceInstanceIdAttributesQueryKey>
  >({
    queryKey: getInstanceInstanceIdAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instance[':InstanceId'].attributes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstanceInstanceIdAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instance)[':InstanceId']['attributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['attributes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instance)[':InstanceId']['attributes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstanceInstanceIdAttributesQueryKey>
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
      ...getInstanceInstanceIdAttributesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstanceInstanceIdAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instance)[':InstanceId']['attributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['attributes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instance)[':InstanceId']['attributes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstanceInstanceIdAttributesQueryKey>
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
      ...getInstanceInstanceIdAttributesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInstanceInstanceIdStorageConfigsResourceTypeQueryKey(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['storage-configs#resourceType']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['instance', '/instance/:InstanceId/storage-configs#resourceType', keyArgs] as const
}

export function getInstanceInstanceIdStorageConfigsResourceTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.instance)[':InstanceId']['storage-configs#resourceType']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['storage-configs#resourceType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.instance)[':InstanceId']['storage-configs#resourceType']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstanceInstanceIdStorageConfigsResourceTypeQueryKey>
  >({
    queryKey: getInstanceInstanceIdStorageConfigsResourceTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instance[':InstanceId']['storage-configs#resourceType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstanceInstanceIdStorageConfigsResourceType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.instance)[':InstanceId']['storage-configs#resourceType']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['storage-configs#resourceType']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.instance)[':InstanceId']['storage-configs#resourceType']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstanceInstanceIdStorageConfigsResourceTypeQueryKey>
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
      ...getInstanceInstanceIdStorageConfigsResourceTypeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstanceInstanceIdStorageConfigsResourceType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.instance)[':InstanceId']['storage-configs#resourceType']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['storage-configs#resourceType']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.instance)[':InstanceId']['storage-configs#resourceType']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstanceInstanceIdStorageConfigsResourceTypeQueryKey>
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
      ...getInstanceInstanceIdStorageConfigsResourceTypeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInstanceInstanceIdLambdaFunctionsQueryKey(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['lambda-functions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['instance', '/instance/:InstanceId/lambda-functions', keyArgs] as const
}

export function getInstanceInstanceIdLambdaFunctionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instance)[':InstanceId']['lambda-functions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['lambda-functions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instance)[':InstanceId']['lambda-functions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstanceInstanceIdLambdaFunctionsQueryKey>
  >({
    queryKey: getInstanceInstanceIdLambdaFunctionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instance[':InstanceId']['lambda-functions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstanceInstanceIdLambdaFunctions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instance)[':InstanceId']['lambda-functions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['lambda-functions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.instance)[':InstanceId']['lambda-functions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstanceInstanceIdLambdaFunctionsQueryKey>
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
      ...getInstanceInstanceIdLambdaFunctionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstanceInstanceIdLambdaFunctions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instance)[':InstanceId']['lambda-functions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['lambda-functions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.instance)[':InstanceId']['lambda-functions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstanceInstanceIdLambdaFunctionsQueryKey>
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
      ...getInstanceInstanceIdLambdaFunctionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInstanceInstanceIdLexBotsQueryKey(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['lex-bots']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['instance', '/instance/:InstanceId/lex-bots', keyArgs] as const
}

export function getInstanceInstanceIdLexBotsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instance)[':InstanceId']['lex-bots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['lex-bots']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instance)[':InstanceId']['lex-bots']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstanceInstanceIdLexBotsQueryKey>
  >({
    queryKey: getInstanceInstanceIdLexBotsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instance[':InstanceId']['lex-bots'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstanceInstanceIdLexBots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instance)[':InstanceId']['lex-bots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['lex-bots']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instance)[':InstanceId']['lex-bots']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstanceInstanceIdLexBotsQueryKey>
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
      ...getInstanceInstanceIdLexBotsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstanceInstanceIdLexBots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instance)[':InstanceId']['lex-bots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['lex-bots']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instance)[':InstanceId']['lex-bots']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstanceInstanceIdLexBotsQueryKey>
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
      ...getInstanceInstanceIdLexBotsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPhoneNumbersSummaryInstanceIdQueryKey(
  args: InferRequestType<(typeof client)['phone-numbers-summary'][':InstanceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['phone-numbers-summary', '/phone-numbers-summary/:InstanceId', keyArgs] as const
}

export function getPhoneNumbersSummaryInstanceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['phone-numbers-summary'][':InstanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['phone-numbers-summary'][':InstanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['phone-numbers-summary'][':InstanceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneNumbersSummaryInstanceIdQueryKey>
  >({
    queryKey: getPhoneNumbersSummaryInstanceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['phone-numbers-summary'][':InstanceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePhoneNumbersSummaryInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['phone-numbers-summary'][':InstanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['phone-numbers-summary'][':InstanceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['phone-numbers-summary'][':InstanceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPhoneNumbersSummaryInstanceIdQueryKey>
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
      ...getPhoneNumbersSummaryInstanceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePhoneNumbersSummaryInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['phone-numbers-summary'][':InstanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['phone-numbers-summary'][':InstanceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['phone-numbers-summary'][':InstanceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPhoneNumbersSummaryInstanceIdQueryKey>
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
      ...getPhoneNumbersSummaryInstanceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostPhoneNumberListMutationKey() {
  return ['phone-number', '/phone-number/list', 'POST'] as const
}

export function getPostPhoneNumberListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number']['list']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['phone-number']['list']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPhoneNumberListMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['phone-number']['list']['$post']>) {
      return parseResponse(client['phone-number'].list.$post(args, options))
    },
  })
}

export function usePostPhoneNumberList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['phone-number']['list']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['phone-number']['list']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPhoneNumberListMutationOptions<TError, TOnMutateResult>(
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

export function getPromptsSummaryInstanceIdQueryKey(
  args: InferRequestType<(typeof client)['prompts-summary'][':InstanceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['prompts-summary', '/prompts-summary/:InstanceId', keyArgs] as const
}

export function getPromptsSummaryInstanceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['prompts-summary'][':InstanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['prompts-summary'][':InstanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['prompts-summary'][':InstanceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPromptsSummaryInstanceIdQueryKey>
  >({
    queryKey: getPromptsSummaryInstanceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['prompts-summary'][':InstanceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePromptsSummaryInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['prompts-summary'][':InstanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['prompts-summary'][':InstanceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['prompts-summary'][':InstanceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPromptsSummaryInstanceIdQueryKey>
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
      ...getPromptsSummaryInstanceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePromptsSummaryInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['prompts-summary'][':InstanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['prompts-summary'][':InstanceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['prompts-summary'][':InstanceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPromptsSummaryInstanceIdQueryKey>
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
      ...getPromptsSummaryInstanceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getQueuesInstanceIdQueueIdQuickConnectsQueryKey(
  args: InferRequestType<
    (typeof client.queues)[':InstanceId'][':QueueId']['quick-connects']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['queues', '/queues/:InstanceId/:QueueId/quick-connects', keyArgs] as const
}

export function getQueuesInstanceIdQueueIdQuickConnectsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.queues)[':InstanceId'][':QueueId']['quick-connects']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.queues)[':InstanceId'][':QueueId']['quick-connects']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.queues)[':InstanceId'][':QueueId']['quick-connects']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueuesInstanceIdQueueIdQuickConnectsQueryKey>
  >({
    queryKey: getQueuesInstanceIdQueueIdQuickConnectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.queues[':InstanceId'][':QueueId']['quick-connects'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useQueuesInstanceIdQueueIdQuickConnects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.queues)[':InstanceId'][':QueueId']['quick-connects']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.queues)[':InstanceId'][':QueueId']['quick-connects']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.queues)[':InstanceId'][':QueueId']['quick-connects']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQueuesInstanceIdQueueIdQuickConnectsQueryKey>
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
      ...getQueuesInstanceIdQueueIdQuickConnectsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseQueuesInstanceIdQueueIdQuickConnects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.queues)[':InstanceId'][':QueueId']['quick-connects']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.queues)[':InstanceId'][':QueueId']['quick-connects']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.queues)[':InstanceId'][':QueueId']['quick-connects']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQueuesInstanceIdQueueIdQuickConnectsQueryKey>
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
      ...getQueuesInstanceIdQueueIdQuickConnectsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getQueuesSummaryInstanceIdQueryKey(
  args: InferRequestType<(typeof client)['queues-summary'][':InstanceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['queues-summary', '/queues-summary/:InstanceId', keyArgs] as const
}

export function getQueuesSummaryInstanceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['queues-summary'][':InstanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['queues-summary'][':InstanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['queues-summary'][':InstanceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueuesSummaryInstanceIdQueryKey>
  >({
    queryKey: getQueuesSummaryInstanceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['queues-summary'][':InstanceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useQueuesSummaryInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['queues-summary'][':InstanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['queues-summary'][':InstanceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['queues-summary'][':InstanceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQueuesSummaryInstanceIdQueryKey>
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
      ...getQueuesSummaryInstanceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseQueuesSummaryInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['queues-summary'][':InstanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['queues-summary'][':InstanceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['queues-summary'][':InstanceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQueuesSummaryInstanceIdQueryKey>
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
      ...getQueuesSummaryInstanceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRoutingProfilesInstanceIdRoutingProfileIdQueuesQueryKey(
  args: InferRequestType<
    (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['queues']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'routing-profiles',
    '/routing-profiles/:InstanceId/:RoutingProfileId/queues',
    keyArgs,
  ] as const
}

export function getRoutingProfilesInstanceIdRoutingProfileIdQueuesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['queues']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['queues']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['queues']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoutingProfilesInstanceIdRoutingProfileIdQueuesQueryKey>
  >({
    queryKey: getRoutingProfilesInstanceIdRoutingProfileIdQueuesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['routing-profiles'][':InstanceId'][':RoutingProfileId'].queues.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRoutingProfilesInstanceIdRoutingProfileIdQueues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['queues']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['queues']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['queues']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRoutingProfilesInstanceIdRoutingProfileIdQueuesQueryKey>
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
      ...getRoutingProfilesInstanceIdRoutingProfileIdQueuesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRoutingProfilesInstanceIdRoutingProfileIdQueues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['queues']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['queues']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['queues']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRoutingProfilesInstanceIdRoutingProfileIdQueuesQueryKey>
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
      ...getRoutingProfilesInstanceIdRoutingProfileIdQueuesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostRoutingProfilesInstanceIdRoutingProfileIdQueuesMutationKey() {
  return [
    'routing-profiles',
    '/routing-profiles/:InstanceId/:RoutingProfileId/queues',
    'POST',
  ] as const
}

export function getPostRoutingProfilesInstanceIdRoutingProfileIdQueuesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['queues']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['queues']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRoutingProfilesInstanceIdRoutingProfileIdQueuesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['queues']['$post']
      >,
    ) {
      return parseResponse(
        client['routing-profiles'][':InstanceId'][':RoutingProfileId'].queues.$post(args, options),
      )
    },
  })
}

export function usePostRoutingProfilesInstanceIdRoutingProfileIdQueues<
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
                  (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['queues']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['queues']['$post']
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
  const mutationDefaults = getPostRoutingProfilesInstanceIdRoutingProfileIdQueuesMutationOptions<
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

export function getRoutingProfilesSummaryInstanceIdQueryKey(
  args: InferRequestType<(typeof client)['routing-profiles-summary'][':InstanceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['routing-profiles-summary', '/routing-profiles-summary/:InstanceId', keyArgs] as const
}

export function getRoutingProfilesSummaryInstanceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['routing-profiles-summary'][':InstanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['routing-profiles-summary'][':InstanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['routing-profiles-summary'][':InstanceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoutingProfilesSummaryInstanceIdQueryKey>
  >({
    queryKey: getRoutingProfilesSummaryInstanceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['routing-profiles-summary'][':InstanceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRoutingProfilesSummaryInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['routing-profiles-summary'][':InstanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['routing-profiles-summary'][':InstanceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['routing-profiles-summary'][':InstanceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRoutingProfilesSummaryInstanceIdQueryKey>
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
      ...getRoutingProfilesSummaryInstanceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRoutingProfilesSummaryInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['routing-profiles-summary'][':InstanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['routing-profiles-summary'][':InstanceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['routing-profiles-summary'][':InstanceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRoutingProfilesSummaryInstanceIdQueryKey>
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
      ...getRoutingProfilesSummaryInstanceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInstanceInstanceIdSecurityKeysQueryKey(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['security-keys']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['instance', '/instance/:InstanceId/security-keys', keyArgs] as const
}

export function getInstanceInstanceIdSecurityKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instance)[':InstanceId']['security-keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['security-keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instance)[':InstanceId']['security-keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstanceInstanceIdSecurityKeysQueryKey>
  >({
    queryKey: getInstanceInstanceIdSecurityKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instance[':InstanceId']['security-keys'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstanceInstanceIdSecurityKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instance)[':InstanceId']['security-keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['security-keys']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instance)[':InstanceId']['security-keys']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstanceInstanceIdSecurityKeysQueryKey>
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
      ...getInstanceInstanceIdSecurityKeysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstanceInstanceIdSecurityKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instance)[':InstanceId']['security-keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['security-keys']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instance)[':InstanceId']['security-keys']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstanceInstanceIdSecurityKeysQueryKey>
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
      ...getInstanceInstanceIdSecurityKeysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSecurityProfilesPermissionsInstanceIdSecurityProfileIdQueryKey(
  args: InferRequestType<
    (typeof client)['security-profiles-permissions'][':InstanceId'][':SecurityProfileId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'security-profiles-permissions',
    '/security-profiles-permissions/:InstanceId/:SecurityProfileId',
    keyArgs,
  ] as const
}

export function getSecurityProfilesPermissionsInstanceIdSecurityProfileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['security-profiles-permissions'][':InstanceId'][':SecurityProfileId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['security-profiles-permissions'][':InstanceId'][':SecurityProfileId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['security-profiles-permissions'][':InstanceId'][':SecurityProfileId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSecurityProfilesPermissionsInstanceIdSecurityProfileIdQueryKey>
  >({
    queryKey: getSecurityProfilesPermissionsInstanceIdSecurityProfileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['security-profiles-permissions'][':InstanceId'][':SecurityProfileId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSecurityProfilesPermissionsInstanceIdSecurityProfileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['security-profiles-permissions'][':InstanceId'][':SecurityProfileId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['security-profiles-permissions'][':InstanceId'][':SecurityProfileId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['security-profiles-permissions'][':InstanceId'][':SecurityProfileId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSecurityProfilesPermissionsInstanceIdSecurityProfileIdQueryKey>
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
      ...getSecurityProfilesPermissionsInstanceIdSecurityProfileIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSecurityProfilesPermissionsInstanceIdSecurityProfileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['security-profiles-permissions'][':InstanceId'][':SecurityProfileId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['security-profiles-permissions'][':InstanceId'][':SecurityProfileId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['security-profiles-permissions'][':InstanceId'][':SecurityProfileId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSecurityProfilesPermissionsInstanceIdSecurityProfileIdQueryKey>
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
      ...getSecurityProfilesPermissionsInstanceIdSecurityProfileIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSecurityProfilesSummaryInstanceIdQueryKey(
  args: InferRequestType<(typeof client)['security-profiles-summary'][':InstanceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['security-profiles-summary', '/security-profiles-summary/:InstanceId', keyArgs] as const
}

export function getSecurityProfilesSummaryInstanceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['security-profiles-summary'][':InstanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['security-profiles-summary'][':InstanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['security-profiles-summary'][':InstanceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSecurityProfilesSummaryInstanceIdQueryKey>
  >({
    queryKey: getSecurityProfilesSummaryInstanceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['security-profiles-summary'][':InstanceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSecurityProfilesSummaryInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['security-profiles-summary'][':InstanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['security-profiles-summary'][':InstanceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['security-profiles-summary'][':InstanceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSecurityProfilesSummaryInstanceIdQueryKey>
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
      ...getSecurityProfilesSummaryInstanceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSecurityProfilesSummaryInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['security-profiles-summary'][':InstanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['security-profiles-summary'][':InstanceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['security-profiles-summary'][':InstanceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSecurityProfilesSummaryInstanceIdQueryKey>
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
      ...getSecurityProfilesSummaryInstanceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >({
    queryKey: getTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':resourceArn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>) {
      return parseResponse(client.tags[':resourceArn'].$post(args, options))
    },
  })
}

export function usePostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
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

export function getTrafficDistributionGroupsQueryKey(
  args: InferRequestType<(typeof client)['traffic-distribution-groups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['traffic-distribution-groups', '/traffic-distribution-groups', keyArgs] as const
}

export function getTrafficDistributionGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['traffic-distribution-groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['traffic-distribution-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['traffic-distribution-groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrafficDistributionGroupsQueryKey>
  >({
    queryKey: getTrafficDistributionGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['traffic-distribution-groups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTrafficDistributionGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['traffic-distribution-groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['traffic-distribution-groups']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['traffic-distribution-groups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTrafficDistributionGroupsQueryKey>
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
      ...getTrafficDistributionGroupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTrafficDistributionGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['traffic-distribution-groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['traffic-distribution-groups']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['traffic-distribution-groups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTrafficDistributionGroupsQueryKey>
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
      ...getTrafficDistributionGroupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUserHierarchyGroupsSummaryInstanceIdQueryKey(
  args: InferRequestType<(typeof client)['user-hierarchy-groups-summary'][':InstanceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'user-hierarchy-groups-summary',
    '/user-hierarchy-groups-summary/:InstanceId',
    keyArgs,
  ] as const
}

export function getUserHierarchyGroupsSummaryInstanceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['user-hierarchy-groups-summary'][':InstanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['user-hierarchy-groups-summary'][':InstanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['user-hierarchy-groups-summary'][':InstanceId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserHierarchyGroupsSummaryInstanceIdQueryKey>
  >({
    queryKey: getUserHierarchyGroupsSummaryInstanceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['user-hierarchy-groups-summary'][':InstanceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUserHierarchyGroupsSummaryInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['user-hierarchy-groups-summary'][':InstanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['user-hierarchy-groups-summary'][':InstanceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['user-hierarchy-groups-summary'][':InstanceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserHierarchyGroupsSummaryInstanceIdQueryKey>
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
      ...getUserHierarchyGroupsSummaryInstanceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserHierarchyGroupsSummaryInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['user-hierarchy-groups-summary'][':InstanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['user-hierarchy-groups-summary'][':InstanceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['user-hierarchy-groups-summary'][':InstanceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserHierarchyGroupsSummaryInstanceIdQueryKey>
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
      ...getUserHierarchyGroupsSummaryInstanceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUsersSummaryInstanceIdQueryKey(
  args: InferRequestType<(typeof client)['users-summary'][':InstanceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users-summary', '/users-summary/:InstanceId', keyArgs] as const
}

export function getUsersSummaryInstanceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['users-summary'][':InstanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['users-summary'][':InstanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['users-summary'][':InstanceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersSummaryInstanceIdQueryKey>
  >({
    queryKey: getUsersSummaryInstanceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['users-summary'][':InstanceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersSummaryInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['users-summary'][':InstanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['users-summary'][':InstanceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['users-summary'][':InstanceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersSummaryInstanceIdQueryKey>
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
      ...getUsersSummaryInstanceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersSummaryInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['users-summary'][':InstanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['users-summary'][':InstanceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['users-summary'][':InstanceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersSummaryInstanceIdQueryKey>
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
      ...getUsersSummaryInstanceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostContactMonitorMutationKey() {
  return ['contact', '/contact/monitor', 'POST'] as const
}

export function getPostContactMonitorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contact.monitor.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.contact.monitor.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContactMonitorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.contact.monitor.$post>) {
      return parseResponse(client.contact.monitor.$post(args, options))
    },
  })
}

export function usePostContactMonitor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contact.monitor.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.contact.monitor.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContactMonitorMutationOptions<TError, TOnMutateResult>(
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

export function getPutUsersInstanceIdUserIdStatusMutationKey() {
  return ['users', '/users/:InstanceId/:UserId/status', 'PUT'] as const
}

export function getPutUsersInstanceIdUserIdStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':InstanceId'][':UserId']['status']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':InstanceId'][':UserId']['status']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersInstanceIdUserIdStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':InstanceId'][':UserId']['status']['$put']>,
    ) {
      return parseResponse(client.users[':InstanceId'][':UserId'].status.$put(args, options))
    },
  })
}

export function usePutUsersInstanceIdUserIdStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':InstanceId'][':UserId']['status']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':InstanceId'][':UserId']['status']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUsersInstanceIdUserIdStatusMutationOptions<
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

export function getPostInstanceInstanceIdReplicateMutationKey() {
  return ['instance', '/instance/:InstanceId/replicate', 'POST'] as const
}

export function getPostInstanceInstanceIdReplicateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instance)[':InstanceId']['replicate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.instance)[':InstanceId']['replicate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInstanceInstanceIdReplicateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.instance)[':InstanceId']['replicate']['$post']>,
    ) {
      return parseResponse(client.instance[':InstanceId'].replicate.$post(args, options))
    },
  })
}

export function usePostInstanceInstanceIdReplicate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instance)[':InstanceId']['replicate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.instance)[':InstanceId']['replicate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInstanceInstanceIdReplicateMutationOptions<
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

export function getPostContactResumeRecordingMutationKey() {
  return ['contact', '/contact/resume-recording', 'POST'] as const
}

export function getPostContactResumeRecordingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contact)['resume-recording']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.contact)['resume-recording']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostContactResumeRecordingMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.contact)['resume-recording']['$post']>) {
      return parseResponse(client.contact['resume-recording'].$post(args, options))
    },
  })
}

export function usePostContactResumeRecording<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contact)['resume-recording']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.contact)['resume-recording']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContactResumeRecordingMutationOptions<TError, TOnMutateResult>(
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

export function getPostPhoneNumberSearchAvailableMutationKey() {
  return ['phone-number', '/phone-number/search-available', 'POST'] as const
}

export function getPostPhoneNumberSearchAvailableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['phone-number']['search-available']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['phone-number']['search-available']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPhoneNumberSearchAvailableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['phone-number']['search-available']['$post']>,
    ) {
      return parseResponse(client['phone-number']['search-available'].$post(args, options))
    },
  })
}

export function usePostPhoneNumberSearchAvailable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['phone-number']['search-available']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['phone-number']['search-available']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPhoneNumberSearchAvailableMutationOptions<
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

export function getPostSearchQueuesMutationKey() {
  return ['search-queues', '/search-queues', 'POST'] as const
}

export function getPostSearchQueuesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['search-queues']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['search-queues']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSearchQueuesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['search-queues']['$post']>) {
      return parseResponse(client['search-queues'].$post(args, options))
    },
  })
}

export function usePostSearchQueues<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['search-queues']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['search-queues']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSearchQueuesMutationOptions<TError, TOnMutateResult>(
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

export function getPostSearchRoutingProfilesMutationKey() {
  return ['search-routing-profiles', '/search-routing-profiles', 'POST'] as const
}

export function getPostSearchRoutingProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['search-routing-profiles']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['search-routing-profiles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSearchRoutingProfilesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['search-routing-profiles']['$post']>) {
      return parseResponse(client['search-routing-profiles'].$post(args, options))
    },
  })
}

export function usePostSearchRoutingProfiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['search-routing-profiles']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['search-routing-profiles']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSearchRoutingProfilesMutationOptions<TError, TOnMutateResult>(
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

export function getPostSearchSecurityProfilesMutationKey() {
  return ['search-security-profiles', '/search-security-profiles', 'POST'] as const
}

export function getPostSearchSecurityProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['search-security-profiles']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['search-security-profiles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSearchSecurityProfilesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['search-security-profiles']['$post']>) {
      return parseResponse(client['search-security-profiles'].$post(args, options))
    },
  })
}

export function usePostSearchSecurityProfiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['search-security-profiles']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['search-security-profiles']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSearchSecurityProfilesMutationOptions<TError, TOnMutateResult>(
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

export function getPostSearchUsersMutationKey() {
  return ['search-users', '/search-users', 'POST'] as const
}

export function getPostSearchUsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['search-users']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['search-users']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSearchUsersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['search-users']['$post']>) {
      return parseResponse(client['search-users'].$post(args, options))
    },
  })
}

export function usePostSearchUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['search-users']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['search-users']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSearchUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostVocabularySummaryInstanceIdMutationKey() {
  return ['vocabulary-summary', '/vocabulary-summary/:InstanceId', 'POST'] as const
}

export function getPostVocabularySummaryInstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['vocabulary-summary'][':InstanceId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['vocabulary-summary'][':InstanceId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVocabularySummaryInstanceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['vocabulary-summary'][':InstanceId']['$post']>,
    ) {
      return parseResponse(client['vocabulary-summary'][':InstanceId'].$post(args, options))
    },
  })
}

export function usePostVocabularySummaryInstanceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['vocabulary-summary'][':InstanceId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['vocabulary-summary'][':InstanceId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVocabularySummaryInstanceIdMutationOptions<
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

export function getPutContactChatMutationKey() {
  return ['contact', '/contact/chat', 'PUT'] as const
}

export function getPutContactChatMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contact.chat.$put>>>>>,
    TError,
    InferRequestType<typeof client.contact.chat.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutContactChatMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.contact.chat.$put>) {
      return parseResponse(client.contact.chat.$put(args, options))
    },
  })
}

export function usePutContactChat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contact.chat.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.contact.chat.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutContactChatMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostContactStartRecordingMutationKey() {
  return ['contact', '/contact/start-recording', 'POST'] as const
}

export function getPostContactStartRecordingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contact)['start-recording']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.contact)['start-recording']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostContactStartRecordingMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.contact)['start-recording']['$post']>) {
      return parseResponse(client.contact['start-recording'].$post(args, options))
    },
  })
}

export function usePostContactStartRecording<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contact)['start-recording']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.contact)['start-recording']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContactStartRecordingMutationOptions<TError, TOnMutateResult>(
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

export function getPostContactStartStreamingMutationKey() {
  return ['contact', '/contact/start-streaming', 'POST'] as const
}

export function getPostContactStartStreamingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contact)['start-streaming']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.contact)['start-streaming']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostContactStartStreamingMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.contact)['start-streaming']['$post']>) {
      return parseResponse(client.contact['start-streaming'].$post(args, options))
    },
  })
}

export function usePostContactStartStreaming<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contact)['start-streaming']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.contact)['start-streaming']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContactStartStreamingMutationOptions<TError, TOnMutateResult>(
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

export function getPutContactOutboundVoiceMutationKey() {
  return ['contact', '/contact/outbound-voice', 'PUT'] as const
}

export function getPutContactOutboundVoiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.contact)['outbound-voice']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.contact)['outbound-voice']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutContactOutboundVoiceMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.contact)['outbound-voice']['$put']>) {
      return parseResponse(client.contact['outbound-voice'].$put(args, options))
    },
  })
}

export function usePutContactOutboundVoice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contact)['outbound-voice']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.contact)['outbound-voice']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutContactOutboundVoiceMutationOptions<TError, TOnMutateResult>(
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

export function getPutContactTaskMutationKey() {
  return ['contact', '/contact/task', 'PUT'] as const
}

export function getPutContactTaskMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contact.task.$put>>>>>,
    TError,
    InferRequestType<typeof client.contact.task.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutContactTaskMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.contact.task.$put>) {
      return parseResponse(client.contact.task.$put(args, options))
    },
  })
}

export function usePutContactTask<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contact.task.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.contact.task.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutContactTaskMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostContactStopMutationKey() {
  return ['contact', '/contact/stop', 'POST'] as const
}

export function getPostContactStopMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contact.stop.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.contact.stop.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContactStopMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.contact.stop.$post>) {
      return parseResponse(client.contact.stop.$post(args, options))
    },
  })
}

export function usePostContactStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contact.stop.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.contact.stop.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContactStopMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostContactStopRecordingMutationKey() {
  return ['contact', '/contact/stop-recording', 'POST'] as const
}

export function getPostContactStopRecordingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contact)['stop-recording']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.contact)['stop-recording']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostContactStopRecordingMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.contact)['stop-recording']['$post']>) {
      return parseResponse(client.contact['stop-recording'].$post(args, options))
    },
  })
}

export function usePostContactStopRecording<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contact)['stop-recording']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.contact)['stop-recording']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContactStopRecordingMutationOptions<TError, TOnMutateResult>(
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

export function getPostContactStopStreamingMutationKey() {
  return ['contact', '/contact/stop-streaming', 'POST'] as const
}

export function getPostContactStopStreamingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contact)['stop-streaming']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.contact)['stop-streaming']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostContactStopStreamingMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.contact)['stop-streaming']['$post']>) {
      return parseResponse(client.contact['stop-streaming'].$post(args, options))
    },
  })
}

export function usePostContactStopStreaming<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contact)['stop-streaming']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.contact)['stop-streaming']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContactStopStreamingMutationOptions<TError, TOnMutateResult>(
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

export function getPostContactSuspendRecordingMutationKey() {
  return ['contact', '/contact/suspend-recording', 'POST'] as const
}

export function getPostContactSuspendRecordingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contact)['suspend-recording']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.contact)['suspend-recording']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostContactSuspendRecordingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.contact)['suspend-recording']['$post']>,
    ) {
      return parseResponse(client.contact['suspend-recording'].$post(args, options))
    },
  })
}

export function usePostContactSuspendRecording<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contact)['suspend-recording']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.contact)['suspend-recording']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContactSuspendRecordingMutationOptions<TError, TOnMutateResult>(
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

export function getPostContactTransferMutationKey() {
  return ['contact', '/contact/transfer', 'POST'] as const
}

export function getPostContactTransferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contact.transfer.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.contact.transfer.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContactTransferMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.contact.transfer.$post>) {
      return parseResponse(client.contact.transfer.$post(args, options))
    },
  })
}

export function usePostContactTransfer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.contact.transfer.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.contact.transfer.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContactTransferMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
    },
  })
}

export function useDeleteTagsResourceArnTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<TError, TOnMutateResult>(
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

export function getPostContactAttributesMutationKey() {
  return ['contact', '/contact/attributes', 'POST'] as const
}

export function getPostContactAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contact.attributes.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.contact.attributes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContactAttributesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.contact.attributes.$post>) {
      return parseResponse(client.contact.attributes.$post(args, options))
    },
  })
}

export function usePostContactAttributes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.contact.attributes.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.contact.attributes.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContactAttributesMutationOptions<TError, TOnMutateResult>(
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

export function getPostContactFlowsInstanceIdContactFlowIdContentMutationKey() {
  return ['contact-flows', '/contact-flows/:InstanceId/:ContactFlowId/content', 'POST'] as const
}

export function getPostContactFlowsInstanceIdContactFlowIdContentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['content']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['content']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostContactFlowsInstanceIdContactFlowIdContentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['content']['$post']
      >,
    ) {
      return parseResponse(
        client['contact-flows'][':InstanceId'][':ContactFlowId'].content.$post(args, options),
      )
    },
  })
}

export function usePostContactFlowsInstanceIdContactFlowIdContent<
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
                  (typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['content']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['content']['$post']
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
  const mutationDefaults = getPostContactFlowsInstanceIdContactFlowIdContentMutationOptions<
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

export function getPostContactFlowsInstanceIdContactFlowIdMetadataMutationKey() {
  return ['contact-flows', '/contact-flows/:InstanceId/:ContactFlowId/metadata', 'POST'] as const
}

export function getPostContactFlowsInstanceIdContactFlowIdMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['metadata']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['metadata']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostContactFlowsInstanceIdContactFlowIdMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['metadata']['$post']
      >,
    ) {
      return parseResponse(
        client['contact-flows'][':InstanceId'][':ContactFlowId'].metadata.$post(args, options),
      )
    },
  })
}

export function usePostContactFlowsInstanceIdContactFlowIdMetadata<
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
                  (typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['metadata']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['metadata']['$post']
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
  const mutationDefaults = getPostContactFlowsInstanceIdContactFlowIdMetadataMutationOptions<
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

export function getPostContactFlowModulesInstanceIdContactFlowModuleIdContentMutationKey() {
  return [
    'contact-flow-modules',
    '/contact-flow-modules/:InstanceId/:ContactFlowModuleId/content',
    'POST',
  ] as const
}

export function getPostContactFlowModulesInstanceIdContactFlowModuleIdContentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId']['content']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId']['content']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostContactFlowModulesInstanceIdContactFlowModuleIdContentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId']['content']['$post']
      >,
    ) {
      return parseResponse(
        client['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId'].content.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostContactFlowModulesInstanceIdContactFlowModuleIdContent<
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
                  (typeof client)['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId']['content']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId']['content']['$post']
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
    getPostContactFlowModulesInstanceIdContactFlowModuleIdContentMutationOptions<
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

export function getPostContactFlowModulesInstanceIdContactFlowModuleIdMetadataMutationKey() {
  return [
    'contact-flow-modules',
    '/contact-flow-modules/:InstanceId/:ContactFlowModuleId/metadata',
    'POST',
  ] as const
}

export function getPostContactFlowModulesInstanceIdContactFlowModuleIdMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId']['metadata']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId']['metadata']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostContactFlowModulesInstanceIdContactFlowModuleIdMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId']['metadata']['$post']
      >,
    ) {
      return parseResponse(
        client['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId'].metadata.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostContactFlowModulesInstanceIdContactFlowModuleIdMetadata<
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
                  (typeof client)['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId']['metadata']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId']['metadata']['$post']
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
    getPostContactFlowModulesInstanceIdContactFlowModuleIdMetadataMutationOptions<
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

export function getPostContactFlowsInstanceIdContactFlowIdNameMutationKey() {
  return ['contact-flows', '/contact-flows/:InstanceId/:ContactFlowId/name', 'POST'] as const
}

export function getPostContactFlowsInstanceIdContactFlowIdNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['name']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['name']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostContactFlowsInstanceIdContactFlowIdNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['name']['$post']
      >,
    ) {
      return parseResponse(
        client['contact-flows'][':InstanceId'][':ContactFlowId'].name.$post(args, options),
      )
    },
  })
}

export function usePostContactFlowsInstanceIdContactFlowIdName<
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
                  (typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['name']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['name']['$post']
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
  const mutationDefaults = getPostContactFlowsInstanceIdContactFlowIdNameMutationOptions<
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

export function getPostContactScheduleMutationKey() {
  return ['contact', '/contact/schedule', 'POST'] as const
}

export function getPostContactScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contact.schedule.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.contact.schedule.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContactScheduleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.contact.schedule.$post>) {
      return parseResponse(client.contact.schedule.$post(args, options))
    },
  })
}

export function usePostContactSchedule<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.contact.schedule.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.contact.schedule.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContactScheduleMutationOptions<TError, TOnMutateResult>(
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

export function getPutContactParticipantRoleConfigInstanceIdContactIdMutationKey() {
  return ['contact', '/contact/participant-role-config/:InstanceId/:ContactId', 'PUT'] as const
}

export function getPutContactParticipantRoleConfigInstanceIdContactIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.contact)['participant-role-config'][':InstanceId'][':ContactId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.contact)['participant-role-config'][':InstanceId'][':ContactId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutContactParticipantRoleConfigInstanceIdContactIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.contact)['participant-role-config'][':InstanceId'][':ContactId']['$put']
      >,
    ) {
      return parseResponse(
        client.contact['participant-role-config'][':InstanceId'][':ContactId'].$put(args, options),
      )
    },
  })
}

export function usePutContactParticipantRoleConfigInstanceIdContactId<
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
                  (typeof client.contact)['participant-role-config'][':InstanceId'][':ContactId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.contact)['participant-role-config'][':InstanceId'][':ContactId']['$put']
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
  const mutationDefaults = getPutContactParticipantRoleConfigInstanceIdContactIdMutationOptions<
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

export function getPostQueuesInstanceIdQueueIdHoursOfOperationMutationKey() {
  return ['queues', '/queues/:InstanceId/:QueueId/hours-of-operation', 'POST'] as const
}

export function getPostQueuesInstanceIdQueueIdHoursOfOperationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.queues)[':InstanceId'][':QueueId']['hours-of-operation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.queues)[':InstanceId'][':QueueId']['hours-of-operation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostQueuesInstanceIdQueueIdHoursOfOperationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.queues)[':InstanceId'][':QueueId']['hours-of-operation']['$post']
      >,
    ) {
      return parseResponse(
        client.queues[':InstanceId'][':QueueId']['hours-of-operation'].$post(args, options),
      )
    },
  })
}

export function usePostQueuesInstanceIdQueueIdHoursOfOperation<
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
                  (typeof client.queues)[':InstanceId'][':QueueId']['hours-of-operation']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.queues)[':InstanceId'][':QueueId']['hours-of-operation']['$post']
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
  const mutationDefaults = getPostQueuesInstanceIdQueueIdHoursOfOperationMutationOptions<
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

export function getPostQueuesInstanceIdQueueIdMaxContactsMutationKey() {
  return ['queues', '/queues/:InstanceId/:QueueId/max-contacts', 'POST'] as const
}

export function getPostQueuesInstanceIdQueueIdMaxContactsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.queues)[':InstanceId'][':QueueId']['max-contacts']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.queues)[':InstanceId'][':QueueId']['max-contacts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQueuesInstanceIdQueueIdMaxContactsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.queues)[':InstanceId'][':QueueId']['max-contacts']['$post']
      >,
    ) {
      return parseResponse(
        client.queues[':InstanceId'][':QueueId']['max-contacts'].$post(args, options),
      )
    },
  })
}

export function usePostQueuesInstanceIdQueueIdMaxContacts<
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
                  (typeof client.queues)[':InstanceId'][':QueueId']['max-contacts']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.queues)[':InstanceId'][':QueueId']['max-contacts']['$post']
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
  const mutationDefaults = getPostQueuesInstanceIdQueueIdMaxContactsMutationOptions<
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

export function getPostQueuesInstanceIdQueueIdNameMutationKey() {
  return ['queues', '/queues/:InstanceId/:QueueId/name', 'POST'] as const
}

export function getPostQueuesInstanceIdQueueIdNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.queues)[':InstanceId'][':QueueId']['name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.queues)[':InstanceId'][':QueueId']['name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQueuesInstanceIdQueueIdNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.queues)[':InstanceId'][':QueueId']['name']['$post']>,
    ) {
      return parseResponse(client.queues[':InstanceId'][':QueueId'].name.$post(args, options))
    },
  })
}

export function usePostQueuesInstanceIdQueueIdName<
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
                ReturnType<(typeof client.queues)[':InstanceId'][':QueueId']['name']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.queues)[':InstanceId'][':QueueId']['name']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQueuesInstanceIdQueueIdNameMutationOptions<
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

export function getPostQueuesInstanceIdQueueIdOutboundCallerConfigMutationKey() {
  return ['queues', '/queues/:InstanceId/:QueueId/outbound-caller-config', 'POST'] as const
}

export function getPostQueuesInstanceIdQueueIdOutboundCallerConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.queues)[':InstanceId'][':QueueId']['outbound-caller-config']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.queues)[':InstanceId'][':QueueId']['outbound-caller-config']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostQueuesInstanceIdQueueIdOutboundCallerConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.queues)[':InstanceId'][':QueueId']['outbound-caller-config']['$post']
      >,
    ) {
      return parseResponse(
        client.queues[':InstanceId'][':QueueId']['outbound-caller-config'].$post(args, options),
      )
    },
  })
}

export function usePostQueuesInstanceIdQueueIdOutboundCallerConfig<
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
                  (typeof client.queues)[':InstanceId'][':QueueId']['outbound-caller-config']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.queues)[':InstanceId'][':QueueId']['outbound-caller-config']['$post']
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
  const mutationDefaults = getPostQueuesInstanceIdQueueIdOutboundCallerConfigMutationOptions<
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

export function getPostQueuesInstanceIdQueueIdStatusMutationKey() {
  return ['queues', '/queues/:InstanceId/:QueueId/status', 'POST'] as const
}

export function getPostQueuesInstanceIdQueueIdStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.queues)[':InstanceId'][':QueueId']['status']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.queues)[':InstanceId'][':QueueId']['status']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQueuesInstanceIdQueueIdStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.queues)[':InstanceId'][':QueueId']['status']['$post']>,
    ) {
      return parseResponse(client.queues[':InstanceId'][':QueueId'].status.$post(args, options))
    },
  })
}

export function usePostQueuesInstanceIdQueueIdStatus<
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
                ReturnType<(typeof client.queues)[':InstanceId'][':QueueId']['status']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.queues)[':InstanceId'][':QueueId']['status']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQueuesInstanceIdQueueIdStatusMutationOptions<
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

export function getPostQuickConnectsInstanceIdQuickConnectIdConfigMutationKey() {
  return ['quick-connects', '/quick-connects/:InstanceId/:QuickConnectId/config', 'POST'] as const
}

export function getPostQuickConnectsInstanceIdQuickConnectIdConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['quick-connects'][':InstanceId'][':QuickConnectId']['config']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['quick-connects'][':InstanceId'][':QuickConnectId']['config']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostQuickConnectsInstanceIdQuickConnectIdConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['quick-connects'][':InstanceId'][':QuickConnectId']['config']['$post']
      >,
    ) {
      return parseResponse(
        client['quick-connects'][':InstanceId'][':QuickConnectId'].config.$post(args, options),
      )
    },
  })
}

export function usePostQuickConnectsInstanceIdQuickConnectIdConfig<
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
                  (typeof client)['quick-connects'][':InstanceId'][':QuickConnectId']['config']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['quick-connects'][':InstanceId'][':QuickConnectId']['config']['$post']
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
  const mutationDefaults = getPostQuickConnectsInstanceIdQuickConnectIdConfigMutationOptions<
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

export function getPostQuickConnectsInstanceIdQuickConnectIdNameMutationKey() {
  return ['quick-connects', '/quick-connects/:InstanceId/:QuickConnectId/name', 'POST'] as const
}

export function getPostQuickConnectsInstanceIdQuickConnectIdNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['quick-connects'][':InstanceId'][':QuickConnectId']['name']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['quick-connects'][':InstanceId'][':QuickConnectId']['name']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostQuickConnectsInstanceIdQuickConnectIdNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['quick-connects'][':InstanceId'][':QuickConnectId']['name']['$post']
      >,
    ) {
      return parseResponse(
        client['quick-connects'][':InstanceId'][':QuickConnectId'].name.$post(args, options),
      )
    },
  })
}

export function usePostQuickConnectsInstanceIdQuickConnectIdName<
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
                  (typeof client)['quick-connects'][':InstanceId'][':QuickConnectId']['name']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['quick-connects'][':InstanceId'][':QuickConnectId']['name']['$post']
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
  const mutationDefaults = getPostQuickConnectsInstanceIdQuickConnectIdNameMutationOptions<
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

export function getPostRoutingProfilesInstanceIdRoutingProfileIdConcurrencyMutationKey() {
  return [
    'routing-profiles',
    '/routing-profiles/:InstanceId/:RoutingProfileId/concurrency',
    'POST',
  ] as const
}

export function getPostRoutingProfilesInstanceIdRoutingProfileIdConcurrencyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['concurrency']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['concurrency']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRoutingProfilesInstanceIdRoutingProfileIdConcurrencyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['concurrency']['$post']
      >,
    ) {
      return parseResponse(
        client['routing-profiles'][':InstanceId'][':RoutingProfileId'].concurrency.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostRoutingProfilesInstanceIdRoutingProfileIdConcurrency<
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
                  (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['concurrency']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['concurrency']['$post']
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
    getPostRoutingProfilesInstanceIdRoutingProfileIdConcurrencyMutationOptions<
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

export function getPostRoutingProfilesInstanceIdRoutingProfileIdDefaultOutboundQueueMutationKey() {
  return [
    'routing-profiles',
    '/routing-profiles/:InstanceId/:RoutingProfileId/default-outbound-queue',
    'POST',
  ] as const
}

export function getPostRoutingProfilesInstanceIdRoutingProfileIdDefaultOutboundQueueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['default-outbound-queue']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['default-outbound-queue']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRoutingProfilesInstanceIdRoutingProfileIdDefaultOutboundQueueMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['default-outbound-queue']['$post']
      >,
    ) {
      return parseResponse(
        client['routing-profiles'][':InstanceId'][':RoutingProfileId'][
          'default-outbound-queue'
        ].$post(args, options),
      )
    },
  })
}

export function usePostRoutingProfilesInstanceIdRoutingProfileIdDefaultOutboundQueue<
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
                  (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['default-outbound-queue']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['default-outbound-queue']['$post']
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
    getPostRoutingProfilesInstanceIdRoutingProfileIdDefaultOutboundQueueMutationOptions<
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

export function getPostRoutingProfilesInstanceIdRoutingProfileIdNameMutationKey() {
  return [
    'routing-profiles',
    '/routing-profiles/:InstanceId/:RoutingProfileId/name',
    'POST',
  ] as const
}

export function getPostRoutingProfilesInstanceIdRoutingProfileIdNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['name']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['name']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRoutingProfilesInstanceIdRoutingProfileIdNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['name']['$post']
      >,
    ) {
      return parseResponse(
        client['routing-profiles'][':InstanceId'][':RoutingProfileId'].name.$post(args, options),
      )
    },
  })
}

export function usePostRoutingProfilesInstanceIdRoutingProfileIdName<
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
                  (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['name']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['name']['$post']
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
  const mutationDefaults = getPostRoutingProfilesInstanceIdRoutingProfileIdNameMutationOptions<
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

export function getPostUsersInstanceIdUserIdHierarchyMutationKey() {
  return ['users', '/users/:InstanceId/:UserId/hierarchy', 'POST'] as const
}

export function getPostUsersInstanceIdUserIdHierarchyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':InstanceId'][':UserId']['hierarchy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':InstanceId'][':UserId']['hierarchy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersInstanceIdUserIdHierarchyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':InstanceId'][':UserId']['hierarchy']['$post']>,
    ) {
      return parseResponse(client.users[':InstanceId'][':UserId'].hierarchy.$post(args, options))
    },
  })
}

export function usePostUsersInstanceIdUserIdHierarchy<
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
                ReturnType<(typeof client.users)[':InstanceId'][':UserId']['hierarchy']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':InstanceId'][':UserId']['hierarchy']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersInstanceIdUserIdHierarchyMutationOptions<
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

export function getPostUserHierarchyGroupsInstanceIdHierarchyGroupIdNameMutationKey() {
  return [
    'user-hierarchy-groups',
    '/user-hierarchy-groups/:InstanceId/:HierarchyGroupId/name',
    'POST',
  ] as const
}

export function getPostUserHierarchyGroupsInstanceIdHierarchyGroupIdNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['user-hierarchy-groups'][':InstanceId'][':HierarchyGroupId']['name']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['user-hierarchy-groups'][':InstanceId'][':HierarchyGroupId']['name']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostUserHierarchyGroupsInstanceIdHierarchyGroupIdNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['user-hierarchy-groups'][':InstanceId'][':HierarchyGroupId']['name']['$post']
      >,
    ) {
      return parseResponse(
        client['user-hierarchy-groups'][':InstanceId'][':HierarchyGroupId'].name.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostUserHierarchyGroupsInstanceIdHierarchyGroupIdName<
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
                  (typeof client)['user-hierarchy-groups'][':InstanceId'][':HierarchyGroupId']['name']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['user-hierarchy-groups'][':InstanceId'][':HierarchyGroupId']['name']['$post']
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
  const mutationDefaults = getPostUserHierarchyGroupsInstanceIdHierarchyGroupIdNameMutationOptions<
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

export function getPostUsersInstanceIdUserIdIdentityInfoMutationKey() {
  return ['users', '/users/:InstanceId/:UserId/identity-info', 'POST'] as const
}

export function getPostUsersInstanceIdUserIdIdentityInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.users)[':InstanceId'][':UserId']['identity-info']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':InstanceId'][':UserId']['identity-info']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersInstanceIdUserIdIdentityInfoMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':InstanceId'][':UserId']['identity-info']['$post']
      >,
    ) {
      return parseResponse(
        client.users[':InstanceId'][':UserId']['identity-info'].$post(args, options),
      )
    },
  })
}

export function usePostUsersInstanceIdUserIdIdentityInfo<
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
                  (typeof client.users)[':InstanceId'][':UserId']['identity-info']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':InstanceId'][':UserId']['identity-info']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersInstanceIdUserIdIdentityInfoMutationOptions<
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

export function getPostUsersInstanceIdUserIdPhoneConfigMutationKey() {
  return ['users', '/users/:InstanceId/:UserId/phone-config', 'POST'] as const
}

export function getPostUsersInstanceIdUserIdPhoneConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.users)[':InstanceId'][':UserId']['phone-config']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':InstanceId'][':UserId']['phone-config']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersInstanceIdUserIdPhoneConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':InstanceId'][':UserId']['phone-config']['$post']
      >,
    ) {
      return parseResponse(
        client.users[':InstanceId'][':UserId']['phone-config'].$post(args, options),
      )
    },
  })
}

export function usePostUsersInstanceIdUserIdPhoneConfig<
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
                ReturnType<(typeof client.users)[':InstanceId'][':UserId']['phone-config']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':InstanceId'][':UserId']['phone-config']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersInstanceIdUserIdPhoneConfigMutationOptions<
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

export function getPostUsersInstanceIdUserIdRoutingProfileMutationKey() {
  return ['users', '/users/:InstanceId/:UserId/routing-profile', 'POST'] as const
}

export function getPostUsersInstanceIdUserIdRoutingProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.users)[':InstanceId'][':UserId']['routing-profile']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':InstanceId'][':UserId']['routing-profile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersInstanceIdUserIdRoutingProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':InstanceId'][':UserId']['routing-profile']['$post']
      >,
    ) {
      return parseResponse(
        client.users[':InstanceId'][':UserId']['routing-profile'].$post(args, options),
      )
    },
  })
}

export function usePostUsersInstanceIdUserIdRoutingProfile<
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
                  (typeof client.users)[':InstanceId'][':UserId']['routing-profile']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.users)[':InstanceId'][':UserId']['routing-profile']['$post']
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
  const mutationDefaults = getPostUsersInstanceIdUserIdRoutingProfileMutationOptions<
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

export function getPostUsersInstanceIdUserIdSecurityProfilesMutationKey() {
  return ['users', '/users/:InstanceId/:UserId/security-profiles', 'POST'] as const
}

export function getPostUsersInstanceIdUserIdSecurityProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':InstanceId'][':UserId']['security-profiles']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':InstanceId'][':UserId']['security-profiles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersInstanceIdUserIdSecurityProfilesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':InstanceId'][':UserId']['security-profiles']['$post']
      >,
    ) {
      return parseResponse(
        client.users[':InstanceId'][':UserId']['security-profiles'].$post(args, options),
      )
    },
  })
}

export function usePostUsersInstanceIdUserIdSecurityProfiles<
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
                  (typeof client.users)[':InstanceId'][':UserId']['security-profiles']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.users)[':InstanceId'][':UserId']['security-profiles']['$post']
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
  const mutationDefaults = getPostUsersInstanceIdUserIdSecurityProfilesMutationOptions<
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
