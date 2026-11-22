import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPutInstanceInstanceIdApprovedOriginKey() {
  return ['instance', '/instance/:InstanceId/approved-origin', 'PUT'] as const
}

export function usePutInstanceInstanceIdApprovedOrigin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instance)[':InstanceId']['approved-origin']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.instance)[':InstanceId']['approved-origin']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutInstanceInstanceIdApprovedOriginKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.instance)[':InstanceId']['approved-origin']['$put']>
        },
      ) =>
        parseResponse(client.instance[':InstanceId']['approved-origin'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutInstanceInstanceIdBotKey() {
  return ['instance', '/instance/:InstanceId/bot', 'PUT'] as const
}

export function usePutInstanceInstanceIdBot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instance)[':InstanceId']['bot']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.instance)[':InstanceId']['bot']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutInstanceInstanceIdBotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.instance)[':InstanceId']['bot']['$put']> },
      ) => parseResponse(client.instance[':InstanceId'].bot.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInstanceInstanceIdBotKey() {
  return ['instance', '/instance/:InstanceId/bot', 'POST'] as const
}

export function usePostInstanceInstanceIdBot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instance)[':InstanceId']['bot']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.instance)[':InstanceId']['bot']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInstanceInstanceIdBotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.instance)[':InstanceId']['bot']['$post']> },
      ) => parseResponse(client.instance[':InstanceId'].bot.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutDefaultVocabularyInstanceIdLanguageCodeKey() {
  return ['default-vocabulary', '/default-vocabulary/:InstanceId/:LanguageCode', 'PUT'] as const
}

export function usePutDefaultVocabularyInstanceIdLanguageCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['default-vocabulary'][':InstanceId'][':LanguageCode']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDefaultVocabularyInstanceIdLanguageCodeKey()
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
            (typeof client)['default-vocabulary'][':InstanceId'][':LanguageCode']['$put']
          >
        },
      ) =>
        parseResponse(
          client['default-vocabulary'][':InstanceId'][':LanguageCode'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutInstanceInstanceIdStorageConfigKey() {
  return ['instance', '/instance/:InstanceId/storage-config', 'PUT'] as const
}

export function usePutInstanceInstanceIdStorageConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instance)[':InstanceId']['storage-config']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.instance)[':InstanceId']['storage-config']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutInstanceInstanceIdStorageConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.instance)[':InstanceId']['storage-config']['$put']>
        },
      ) => parseResponse(client.instance[':InstanceId']['storage-config'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutInstanceInstanceIdLambdaFunctionKey() {
  return ['instance', '/instance/:InstanceId/lambda-function', 'PUT'] as const
}

export function usePutInstanceInstanceIdLambdaFunction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instance)[':InstanceId']['lambda-function']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.instance)[':InstanceId']['lambda-function']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutInstanceInstanceIdLambdaFunctionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.instance)[':InstanceId']['lambda-function']['$put']>
        },
      ) =>
        parseResponse(client.instance[':InstanceId']['lambda-function'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutInstanceInstanceIdLexBotKey() {
  return ['instance', '/instance/:InstanceId/lex-bot', 'PUT'] as const
}

export function usePutInstanceInstanceIdLexBot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instance)[':InstanceId']['lex-bot']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.instance)[':InstanceId']['lex-bot']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutInstanceInstanceIdLexBotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.instance)[':InstanceId']['lex-bot']['$put']> },
      ) => parseResponse(client.instance[':InstanceId']['lex-bot'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutPhoneNumberPhoneNumberIdContactFlowKey() {
  return ['phone-number', '/phone-number/:PhoneNumberId/contact-flow', 'PUT'] as const
}

export function usePutPhoneNumberPhoneNumberIdContactFlow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['phone-number'][':PhoneNumberId']['contact-flow']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPhoneNumberPhoneNumberIdContactFlowKey()
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
            (typeof client)['phone-number'][':PhoneNumberId']['contact-flow']['$put']
          >
        },
      ) =>
        parseResponse(
          client['phone-number'][':PhoneNumberId']['contact-flow'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostQueuesInstanceIdQueueIdAssociateQuickConnectsKey() {
  return ['queues', '/queues/:InstanceId/:QueueId/associate-quick-connects', 'POST'] as const
}

export function usePostQueuesInstanceIdQueueIdAssociateQuickConnects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.queues)[':InstanceId'][':QueueId']['associate-quick-connects']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQueuesInstanceIdQueueIdAssociateQuickConnectsKey()
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
            (typeof client.queues)[':InstanceId'][':QueueId']['associate-quick-connects']['$post']
          >
        },
      ) =>
        parseResponse(
          client.queues[':InstanceId'][':QueueId']['associate-quick-connects'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRoutingProfilesInstanceIdRoutingProfileIdAssociateQueuesKey() {
  return [
    'routing-profiles',
    '/routing-profiles/:InstanceId/:RoutingProfileId/associate-queues',
    'POST',
  ] as const
}

export function usePostRoutingProfilesInstanceIdRoutingProfileIdAssociateQueues<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['associate-queues']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRoutingProfilesInstanceIdRoutingProfileIdAssociateQueuesKey()
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
            (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['associate-queues']['$post']
          >
        },
      ) =>
        parseResponse(
          client['routing-profiles'][':InstanceId'][':RoutingProfileId']['associate-queues'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutInstanceInstanceIdSecurityKeyKey() {
  return ['instance', '/instance/:InstanceId/security-key', 'PUT'] as const
}

export function usePutInstanceInstanceIdSecurityKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instance)[':InstanceId']['security-key']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.instance)[':InstanceId']['security-key']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutInstanceInstanceIdSecurityKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.instance)[':InstanceId']['security-key']['$put']>
        },
      ) => parseResponse(client.instance[':InstanceId']['security-key'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPhoneNumberClaimKey() {
  return ['phone-number', '/phone-number/claim', 'POST'] as const
}

export function usePostPhoneNumberClaim<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number']['claim']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['phone-number']['claim']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPhoneNumberClaimKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['phone-number']['claim']['$post']> },
      ) => parseResponse(client['phone-number'].claim.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAgentStatusInstanceIdKey(
  args: InferRequestType<(typeof client)['agent-status'][':InstanceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['agent-status', '/agent-status/:InstanceId', keyArgs] as const
}

export function useGetAgentStatusInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client)['agent-status'][':InstanceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['agent-status'][':InstanceId']['$get']>>
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
        ? getGetAgentStatusInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['agent-status'][':InstanceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['agent-status'][':InstanceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentStatusInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client)['agent-status'][':InstanceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['agent-status'][':InstanceId']['$get']>>
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
        ? getGetAgentStatusInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['agent-status'][':InstanceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['agent-status'][':InstanceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAgentStatusInstanceIdKey() {
  return ['agent-status', '/agent-status/:InstanceId', 'PUT'] as const
}

export function usePutAgentStatusInstanceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['agent-status'][':InstanceId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['agent-status'][':InstanceId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAgentStatusInstanceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['agent-status'][':InstanceId']['$put']> },
      ) => parseResponse(client['agent-status'][':InstanceId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutContactFlowsInstanceIdKey() {
  return ['contact-flows', '/contact-flows/:InstanceId', 'PUT'] as const
}

export function usePutContactFlowsInstanceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['contact-flows'][':InstanceId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['contact-flows'][':InstanceId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutContactFlowsInstanceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['contact-flows'][':InstanceId']['$put']> },
      ) => parseResponse(client['contact-flows'][':InstanceId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutContactFlowModulesInstanceIdKey() {
  return ['contact-flow-modules', '/contact-flow-modules/:InstanceId', 'PUT'] as const
}

export function usePutContactFlowModulesInstanceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['contact-flow-modules'][':InstanceId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['contact-flow-modules'][':InstanceId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutContactFlowModulesInstanceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['contact-flow-modules'][':InstanceId']['$put']>
        },
      ) => parseResponse(client['contact-flow-modules'][':InstanceId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutHoursOfOperationsInstanceIdKey() {
  return ['hours-of-operations', '/hours-of-operations/:InstanceId', 'PUT'] as const
}

export function usePutHoursOfOperationsInstanceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['hours-of-operations'][':InstanceId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['hours-of-operations'][':InstanceId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutHoursOfOperationsInstanceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['hours-of-operations'][':InstanceId']['$put']> },
      ) => parseResponse(client['hours-of-operations'][':InstanceId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInstanceKey(args: InferRequestType<typeof client.instance.$get>) {
  const { header: _, ...keyArgs } = args
  return ['instance', '/instance', keyArgs] as const
}

export function useGetInstance<TError = unknown>(
  args: InferRequestType<typeof client.instance.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInstanceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.instance.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetInstance<TError = unknown>(
  args: InferRequestType<typeof client.instance.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInstanceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.instance.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPutInstanceKey() {
  return ['instance', '/instance', 'PUT'] as const
}

export function usePutInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.instance.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutInstanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.instance.$put> }) =>
        parseResponse(client.instance.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInstanceInstanceIdIntegrationAssociationsKey(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['integration-associations']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['instance', '/instance/:InstanceId/integration-associations', keyArgs] as const
}

export function useGetInstanceInstanceIdIntegrationAssociations<TError = unknown>(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['integration-associations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInstanceInstanceIdIntegrationAssociationsKey(args)
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
                (typeof client.instance)[':InstanceId']['integration-associations']['$get']
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
          client.instance[':InstanceId']['integration-associations'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstanceInstanceIdIntegrationAssociations<TError = unknown>(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['integration-associations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInstanceInstanceIdIntegrationAssociationsKey(args)
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
                (typeof client.instance)[':InstanceId']['integration-associations']['$get']
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
          client.instance[':InstanceId']['integration-associations'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutInstanceInstanceIdIntegrationAssociationsKey() {
  return ['instance', '/instance/:InstanceId/integration-associations', 'PUT'] as const
}

export function usePutInstanceInstanceIdIntegrationAssociations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.instance)[':InstanceId']['integration-associations']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutInstanceInstanceIdIntegrationAssociationsKey()
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
            (typeof client.instance)[':InstanceId']['integration-associations']['$put']
          >
        },
      ) =>
        parseResponse(
          client.instance[':InstanceId']['integration-associations'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostContactCreateParticipantKey() {
  return ['contact', '/contact/create-participant', 'POST'] as const
}

export function usePostContactCreateParticipant<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contact)['create-participant']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.contact)['create-participant']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactCreateParticipantKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.contact)['create-participant']['$post']> },
      ) => parseResponse(client.contact['create-participant'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutQueuesInstanceIdKey() {
  return ['queues', '/queues/:InstanceId', 'PUT'] as const
}

export function usePutQueuesInstanceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.queues)[':InstanceId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.queues)[':InstanceId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutQueuesInstanceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.queues)[':InstanceId']['$put']> },
      ) => parseResponse(client.queues[':InstanceId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetQuickConnectsInstanceIdKey(
  args: InferRequestType<(typeof client)['quick-connects'][':InstanceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['quick-connects', '/quick-connects/:InstanceId', keyArgs] as const
}

export function useGetQuickConnectsInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client)['quick-connects'][':InstanceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['quick-connects'][':InstanceId']['$get']>>
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
        ? getGetQuickConnectsInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['quick-connects'][':InstanceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['quick-connects'][':InstanceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuickConnectsInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client)['quick-connects'][':InstanceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['quick-connects'][':InstanceId']['$get']>>
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
        ? getGetQuickConnectsInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['quick-connects'][':InstanceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['quick-connects'][':InstanceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutQuickConnectsInstanceIdKey() {
  return ['quick-connects', '/quick-connects/:InstanceId', 'PUT'] as const
}

export function usePutQuickConnectsInstanceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['quick-connects'][':InstanceId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['quick-connects'][':InstanceId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutQuickConnectsInstanceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['quick-connects'][':InstanceId']['$put']> },
      ) => parseResponse(client['quick-connects'][':InstanceId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutRoutingProfilesInstanceIdKey() {
  return ['routing-profiles', '/routing-profiles/:InstanceId', 'PUT'] as const
}

export function usePutRoutingProfilesInstanceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['routing-profiles'][':InstanceId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['routing-profiles'][':InstanceId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRoutingProfilesInstanceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['routing-profiles'][':InstanceId']['$put']> },
      ) => parseResponse(client['routing-profiles'][':InstanceId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRulesInstanceIdKey(
  args: InferRequestType<(typeof client.rules)[':InstanceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['rules', '/rules/:InstanceId', keyArgs] as const
}

export function useGetRulesInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client.rules)[':InstanceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':InstanceId']['$get']>>>
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
        ? getGetRulesInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':InstanceId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rules[':InstanceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRulesInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client.rules)[':InstanceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':InstanceId']['$get']>>>
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
        ? getGetRulesInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':InstanceId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rules[':InstanceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRulesInstanceIdKey() {
  return ['rules', '/rules/:InstanceId', 'POST'] as const
}

export function usePostRulesInstanceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':InstanceId']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rules)[':InstanceId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRulesInstanceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rules)[':InstanceId']['$post']> },
      ) => parseResponse(client.rules[':InstanceId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSecurityProfilesInstanceIdKey() {
  return ['security-profiles', '/security-profiles/:InstanceId', 'PUT'] as const
}

export function usePutSecurityProfilesInstanceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['security-profiles'][':InstanceId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['security-profiles'][':InstanceId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSecurityProfilesInstanceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['security-profiles'][':InstanceId']['$put']> },
      ) => parseResponse(client['security-profiles'][':InstanceId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInstanceInstanceIdTaskTemplateKey(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['task']['template']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['instance', '/instance/:InstanceId/task/template', keyArgs] as const
}

export function useGetInstanceInstanceIdTaskTemplate<TError = unknown>(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['task']['template']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instance)[':InstanceId']['task']['template']['$get']>>
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
        ? getGetInstanceInstanceIdTaskTemplateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instance)[':InstanceId']['task']['template']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instance[':InstanceId'].task.template.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstanceInstanceIdTaskTemplate<TError = unknown>(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['task']['template']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instance)[':InstanceId']['task']['template']['$get']>>
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
        ? getGetInstanceInstanceIdTaskTemplateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instance)[':InstanceId']['task']['template']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instance[':InstanceId'].task.template.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutInstanceInstanceIdTaskTemplateKey() {
  return ['instance', '/instance/:InstanceId/task/template', 'PUT'] as const
}

export function usePutInstanceInstanceIdTaskTemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instance)[':InstanceId']['task']['template']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.instance)[':InstanceId']['task']['template']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutInstanceInstanceIdTaskTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.instance)[':InstanceId']['task']['template']['$put']>
        },
      ) => parseResponse(client.instance[':InstanceId'].task.template.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutTrafficDistributionGroupKey() {
  return ['traffic-distribution-group', '/traffic-distribution-group', 'PUT'] as const
}

export function usePutTrafficDistributionGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['traffic-distribution-group']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['traffic-distribution-group']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTrafficDistributionGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['traffic-distribution-group']['$put']> },
      ) => parseResponse(client['traffic-distribution-group'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCasesKey(
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

export function useGetInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCases<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['integration-associations'][':IntegrationAssociationId']['use-cases']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCasesKey(args)
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
                (typeof client.instance)[':InstanceId']['integration-associations'][':IntegrationAssociationId']['use-cases']['$get']
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
          client.instance[':InstanceId']['integration-associations'][':IntegrationAssociationId'][
            'use-cases'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCases<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['integration-associations'][':IntegrationAssociationId']['use-cases']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCasesKey(args)
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
                (typeof client.instance)[':InstanceId']['integration-associations'][':IntegrationAssociationId']['use-cases']['$get']
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
          client.instance[':InstanceId']['integration-associations'][':IntegrationAssociationId'][
            'use-cases'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCasesKey() {
  return [
    'instance',
    '/instance/:InstanceId/integration-associations/:IntegrationAssociationId/use-cases',
    'PUT',
  ] as const
}

export function usePutInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCases<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.instance)[':InstanceId']['integration-associations'][':IntegrationAssociationId']['use-cases']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCasesKey()
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
            (typeof client.instance)[':InstanceId']['integration-associations'][':IntegrationAssociationId']['use-cases']['$put']
          >
        },
      ) =>
        parseResponse(
          client.instance[':InstanceId']['integration-associations'][':IntegrationAssociationId'][
            'use-cases'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutUsersInstanceIdKey() {
  return ['users', '/users/:InstanceId', 'PUT'] as const
}

export function usePutUsersInstanceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':InstanceId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':InstanceId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersInstanceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':InstanceId']['$put']> },
      ) => parseResponse(client.users[':InstanceId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutUserHierarchyGroupsInstanceIdKey() {
  return ['user-hierarchy-groups', '/user-hierarchy-groups/:InstanceId', 'PUT'] as const
}

export function usePutUserHierarchyGroupsInstanceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['user-hierarchy-groups'][':InstanceId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['user-hierarchy-groups'][':InstanceId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserHierarchyGroupsInstanceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['user-hierarchy-groups'][':InstanceId']['$put']>
        },
      ) => parseResponse(client['user-hierarchy-groups'][':InstanceId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVocabularyInstanceIdKey() {
  return ['vocabulary', '/vocabulary/:InstanceId', 'POST'] as const
}

export function usePostVocabularyInstanceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vocabulary)[':InstanceId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.vocabulary)[':InstanceId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVocabularyInstanceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.vocabulary)[':InstanceId']['$post']> },
      ) => parseResponse(client.vocabulary[':InstanceId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContactFlowsInstanceIdContactFlowIdKey(
  args: InferRequestType<(typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['contact-flows', '/contact-flows/:InstanceId/:ContactFlowId', keyArgs] as const
}

export function useGetContactFlowsInstanceIdContactFlowId<TError = unknown>(
  args: InferRequestType<(typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['$get']>
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
        ? getGetContactFlowsInstanceIdContactFlowIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['contact-flows'][':InstanceId'][':ContactFlowId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactFlowsInstanceIdContactFlowId<TError = unknown>(
  args: InferRequestType<(typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['$get']>
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
        ? getGetContactFlowsInstanceIdContactFlowIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['contact-flows'][':InstanceId'][':ContactFlowId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteContactFlowsInstanceIdContactFlowIdKey() {
  return ['contact-flows', '/contact-flows/:InstanceId/:ContactFlowId', 'DELETE'] as const
}

export function useDeleteContactFlowsInstanceIdContactFlowId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteContactFlowsInstanceIdContactFlowIdKey()
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
            (typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['contact-flows'][':InstanceId'][':ContactFlowId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetContactFlowModulesInstanceIdContactFlowModuleIdKey(
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

export function useGetContactFlowModulesInstanceIdContactFlowModuleId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetContactFlowModulesInstanceIdContactFlowModuleIdKey(args)
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
                (typeof client)['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId']['$get']
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
          client['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactFlowModulesInstanceIdContactFlowModuleId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetContactFlowModulesInstanceIdContactFlowModuleIdKey(args)
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
                (typeof client)['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId']['$get']
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
          client['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteContactFlowModulesInstanceIdContactFlowModuleIdKey() {
  return [
    'contact-flow-modules',
    '/contact-flow-modules/:InstanceId/:ContactFlowModuleId',
    'DELETE',
  ] as const
}

export function useDeleteContactFlowModulesInstanceIdContactFlowModuleId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteContactFlowModulesInstanceIdContactFlowModuleIdKey()
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
            (typeof client)['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetHoursOfOperationsInstanceIdHoursOfOperationIdKey(
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

export function useGetHoursOfOperationsInstanceIdHoursOfOperationId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['hours-of-operations'][':InstanceId'][':HoursOfOperationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetHoursOfOperationsInstanceIdHoursOfOperationIdKey(args)
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
                (typeof client)['hours-of-operations'][':InstanceId'][':HoursOfOperationId']['$get']
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
          client['hours-of-operations'][':InstanceId'][':HoursOfOperationId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHoursOfOperationsInstanceIdHoursOfOperationId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['hours-of-operations'][':InstanceId'][':HoursOfOperationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetHoursOfOperationsInstanceIdHoursOfOperationIdKey(args)
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
                (typeof client)['hours-of-operations'][':InstanceId'][':HoursOfOperationId']['$get']
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
          client['hours-of-operations'][':InstanceId'][':HoursOfOperationId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostHoursOfOperationsInstanceIdHoursOfOperationIdKey() {
  return [
    'hours-of-operations',
    '/hours-of-operations/:InstanceId/:HoursOfOperationId',
    'POST',
  ] as const
}

export function usePostHoursOfOperationsInstanceIdHoursOfOperationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['hours-of-operations'][':InstanceId'][':HoursOfOperationId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHoursOfOperationsInstanceIdHoursOfOperationIdKey()
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
            (typeof client)['hours-of-operations'][':InstanceId'][':HoursOfOperationId']['$post']
          >
        },
      ) =>
        parseResponse(
          client['hours-of-operations'][':InstanceId'][':HoursOfOperationId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteHoursOfOperationsInstanceIdHoursOfOperationIdKey() {
  return [
    'hours-of-operations',
    '/hours-of-operations/:InstanceId/:HoursOfOperationId',
    'DELETE',
  ] as const
}

export function useDeleteHoursOfOperationsInstanceIdHoursOfOperationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['hours-of-operations'][':InstanceId'][':HoursOfOperationId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteHoursOfOperationsInstanceIdHoursOfOperationIdKey()
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
            (typeof client)['hours-of-operations'][':InstanceId'][':HoursOfOperationId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['hours-of-operations'][':InstanceId'][':HoursOfOperationId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetInstanceInstanceIdKey(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['instance', '/instance/:InstanceId', keyArgs] as const
}

export function useGetInstanceInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.instance)[':InstanceId']['$get']>>>
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
        ? getGetInstanceInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.instance)[':InstanceId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instance[':InstanceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstanceInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.instance)[':InstanceId']['$get']>>>
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
        ? getGetInstanceInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.instance)[':InstanceId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instance[':InstanceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteInstanceInstanceIdKey() {
  return ['instance', '/instance/:InstanceId', 'DELETE'] as const
}

export function useDeleteInstanceInstanceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instance)[':InstanceId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.instance)[':InstanceId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteInstanceInstanceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.instance)[':InstanceId']['$delete']> },
      ) => parseResponse(client.instance[':InstanceId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdKey() {
  return [
    'instance',
    '/instance/:InstanceId/integration-associations/:IntegrationAssociationId',
    'DELETE',
  ] as const
}

export function useDeleteInstanceInstanceIdIntegrationAssociationsIntegrationAssociationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.instance)[':InstanceId']['integration-associations'][':IntegrationAssociationId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdKey()
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
            (typeof client.instance)[':InstanceId']['integration-associations'][':IntegrationAssociationId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.instance[':InstanceId']['integration-associations'][
            ':IntegrationAssociationId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetQuickConnectsInstanceIdQuickConnectIdKey(
  args: InferRequestType<
    (typeof client)['quick-connects'][':InstanceId'][':QuickConnectId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['quick-connects', '/quick-connects/:InstanceId/:QuickConnectId', keyArgs] as const
}

export function useGetQuickConnectsInstanceIdQuickConnectId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['quick-connects'][':InstanceId'][':QuickConnectId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetQuickConnectsInstanceIdQuickConnectIdKey(args)
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
                (typeof client)['quick-connects'][':InstanceId'][':QuickConnectId']['$get']
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
          client['quick-connects'][':InstanceId'][':QuickConnectId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuickConnectsInstanceIdQuickConnectId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['quick-connects'][':InstanceId'][':QuickConnectId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetQuickConnectsInstanceIdQuickConnectIdKey(args)
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
                (typeof client)['quick-connects'][':InstanceId'][':QuickConnectId']['$get']
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
          client['quick-connects'][':InstanceId'][':QuickConnectId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteQuickConnectsInstanceIdQuickConnectIdKey() {
  return ['quick-connects', '/quick-connects/:InstanceId/:QuickConnectId', 'DELETE'] as const
}

export function useDeleteQuickConnectsInstanceIdQuickConnectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['quick-connects'][':InstanceId'][':QuickConnectId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteQuickConnectsInstanceIdQuickConnectIdKey()
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
            (typeof client)['quick-connects'][':InstanceId'][':QuickConnectId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['quick-connects'][':InstanceId'][':QuickConnectId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRulesInstanceIdRuleIdKey(
  args: InferRequestType<(typeof client.rules)[':InstanceId'][':RuleId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['rules', '/rules/:InstanceId/:RuleId', keyArgs] as const
}

export function useGetRulesInstanceIdRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.rules)[':InstanceId'][':RuleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rules)[':InstanceId'][':RuleId']['$get']>>
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
        ? getGetRulesInstanceIdRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rules)[':InstanceId'][':RuleId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rules[':InstanceId'][':RuleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRulesInstanceIdRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.rules)[':InstanceId'][':RuleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rules)[':InstanceId'][':RuleId']['$get']>>
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
        ? getGetRulesInstanceIdRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rules)[':InstanceId'][':RuleId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rules[':InstanceId'][':RuleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRulesInstanceIdRuleIdKey() {
  return ['rules', '/rules/:InstanceId/:RuleId', 'PUT'] as const
}

export function usePutRulesInstanceIdRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rules)[':InstanceId'][':RuleId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rules)[':InstanceId'][':RuleId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRulesInstanceIdRuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rules)[':InstanceId'][':RuleId']['$put']> },
      ) => parseResponse(client.rules[':InstanceId'][':RuleId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRulesInstanceIdRuleIdKey() {
  return ['rules', '/rules/:InstanceId/:RuleId', 'DELETE'] as const
}

export function useDeleteRulesInstanceIdRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rules)[':InstanceId'][':RuleId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rules)[':InstanceId'][':RuleId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRulesInstanceIdRuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.rules)[':InstanceId'][':RuleId']['$delete']> },
      ) => parseResponse(client.rules[':InstanceId'][':RuleId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSecurityProfilesInstanceIdSecurityProfileIdKey(
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

export function useGetSecurityProfilesInstanceIdSecurityProfileId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['security-profiles'][':InstanceId'][':SecurityProfileId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSecurityProfilesInstanceIdSecurityProfileIdKey(args)
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
                (typeof client)['security-profiles'][':InstanceId'][':SecurityProfileId']['$get']
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
          client['security-profiles'][':InstanceId'][':SecurityProfileId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSecurityProfilesInstanceIdSecurityProfileId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['security-profiles'][':InstanceId'][':SecurityProfileId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSecurityProfilesInstanceIdSecurityProfileIdKey(args)
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
                (typeof client)['security-profiles'][':InstanceId'][':SecurityProfileId']['$get']
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
          client['security-profiles'][':InstanceId'][':SecurityProfileId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSecurityProfilesInstanceIdSecurityProfileIdKey() {
  return ['security-profiles', '/security-profiles/:InstanceId/:SecurityProfileId', 'POST'] as const
}

export function usePostSecurityProfilesInstanceIdSecurityProfileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['security-profiles'][':InstanceId'][':SecurityProfileId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSecurityProfilesInstanceIdSecurityProfileIdKey()
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
            (typeof client)['security-profiles'][':InstanceId'][':SecurityProfileId']['$post']
          >
        },
      ) =>
        parseResponse(
          client['security-profiles'][':InstanceId'][':SecurityProfileId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSecurityProfilesInstanceIdSecurityProfileIdKey() {
  return [
    'security-profiles',
    '/security-profiles/:InstanceId/:SecurityProfileId',
    'DELETE',
  ] as const
}

export function useDeleteSecurityProfilesInstanceIdSecurityProfileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['security-profiles'][':InstanceId'][':SecurityProfileId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSecurityProfilesInstanceIdSecurityProfileIdKey()
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
            (typeof client)['security-profiles'][':InstanceId'][':SecurityProfileId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['security-profiles'][':InstanceId'][':SecurityProfileId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetInstanceInstanceIdTaskTemplateTaskTemplateIdKey(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['task']['template'][':TaskTemplateId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['instance', '/instance/:InstanceId/task/template/:TaskTemplateId', keyArgs] as const
}

export function useGetInstanceInstanceIdTaskTemplateTaskTemplateId<TError = unknown>(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['task']['template'][':TaskTemplateId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInstanceInstanceIdTaskTemplateTaskTemplateIdKey(args)
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
                (typeof client.instance)[':InstanceId']['task']['template'][':TaskTemplateId']['$get']
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
          client.instance[':InstanceId'].task.template[':TaskTemplateId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstanceInstanceIdTaskTemplateTaskTemplateId<TError = unknown>(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['task']['template'][':TaskTemplateId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInstanceInstanceIdTaskTemplateTaskTemplateIdKey(args)
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
                (typeof client.instance)[':InstanceId']['task']['template'][':TaskTemplateId']['$get']
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
          client.instance[':InstanceId'].task.template[':TaskTemplateId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostInstanceInstanceIdTaskTemplateTaskTemplateIdKey() {
  return ['instance', '/instance/:InstanceId/task/template/:TaskTemplateId', 'POST'] as const
}

export function usePostInstanceInstanceIdTaskTemplateTaskTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.instance)[':InstanceId']['task']['template'][':TaskTemplateId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInstanceInstanceIdTaskTemplateTaskTemplateIdKey()
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
            (typeof client.instance)[':InstanceId']['task']['template'][':TaskTemplateId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.instance[':InstanceId'].task.template[':TaskTemplateId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteInstanceInstanceIdTaskTemplateTaskTemplateIdKey() {
  return ['instance', '/instance/:InstanceId/task/template/:TaskTemplateId', 'DELETE'] as const
}

export function useDeleteInstanceInstanceIdTaskTemplateTaskTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.instance)[':InstanceId']['task']['template'][':TaskTemplateId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteInstanceInstanceIdTaskTemplateTaskTemplateIdKey()
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
            (typeof client.instance)[':InstanceId']['task']['template'][':TaskTemplateId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.instance[':InstanceId'].task.template[':TaskTemplateId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTrafficDistributionGroupTrafficDistributionGroupIdKey(
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

export function useGetTrafficDistributionGroupTrafficDistributionGroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['traffic-distribution-group'][':TrafficDistributionGroupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetTrafficDistributionGroupTrafficDistributionGroupIdKey(args)
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
                (typeof client)['traffic-distribution-group'][':TrafficDistributionGroupId']['$get']
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
          client['traffic-distribution-group'][':TrafficDistributionGroupId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTrafficDistributionGroupTrafficDistributionGroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['traffic-distribution-group'][':TrafficDistributionGroupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetTrafficDistributionGroupTrafficDistributionGroupIdKey(args)
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
                (typeof client)['traffic-distribution-group'][':TrafficDistributionGroupId']['$get']
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
          client['traffic-distribution-group'][':TrafficDistributionGroupId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteTrafficDistributionGroupTrafficDistributionGroupIdKey() {
  return [
    'traffic-distribution-group',
    '/traffic-distribution-group/:TrafficDistributionGroupId',
    'DELETE',
  ] as const
}

export function useDeleteTrafficDistributionGroupTrafficDistributionGroupId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['traffic-distribution-group'][':TrafficDistributionGroupId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTrafficDistributionGroupTrafficDistributionGroupIdKey()
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
            (typeof client)['traffic-distribution-group'][':TrafficDistributionGroupId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['traffic-distribution-group'][':TrafficDistributionGroupId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCasesUseCaseIdKey() {
  return [
    'instance',
    '/instance/:InstanceId/integration-associations/:IntegrationAssociationId/use-cases/:UseCaseId',
    'DELETE',
  ] as const
}

export function useDeleteInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCasesUseCaseId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.instance)[':InstanceId']['integration-associations'][':IntegrationAssociationId']['use-cases'][':UseCaseId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteInstanceInstanceIdIntegrationAssociationsIntegrationAssociationIdUseCasesUseCaseIdKey()
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
            (typeof client.instance)[':InstanceId']['integration-associations'][':IntegrationAssociationId']['use-cases'][':UseCaseId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.instance[':InstanceId']['integration-associations'][':IntegrationAssociationId'][
            'use-cases'
          ][':UseCaseId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUsersInstanceIdUserIdKey(
  args: InferRequestType<(typeof client.users)[':InstanceId'][':UserId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:InstanceId/:UserId', keyArgs] as const
}

export function useGetUsersInstanceIdUserId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':InstanceId'][':UserId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':InstanceId'][':UserId']['$get']>>
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
        ? getGetUsersInstanceIdUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':InstanceId'][':UserId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':InstanceId'][':UserId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersInstanceIdUserId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':InstanceId'][':UserId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':InstanceId'][':UserId']['$get']>>
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
        ? getGetUsersInstanceIdUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':InstanceId'][':UserId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':InstanceId'][':UserId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteUsersInstanceIdUserIdKey() {
  return ['users', '/users/:InstanceId/:UserId', 'DELETE'] as const
}

export function useDeleteUsersInstanceIdUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':InstanceId'][':UserId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':InstanceId'][':UserId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersInstanceIdUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.users)[':InstanceId'][':UserId']['$delete']> },
      ) => parseResponse(client.users[':InstanceId'][':UserId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserHierarchyGroupsInstanceIdHierarchyGroupIdKey(
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

export function useGetUserHierarchyGroupsInstanceIdHierarchyGroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['user-hierarchy-groups'][':InstanceId'][':HierarchyGroupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetUserHierarchyGroupsInstanceIdHierarchyGroupIdKey(args)
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
                (typeof client)['user-hierarchy-groups'][':InstanceId'][':HierarchyGroupId']['$get']
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
          client['user-hierarchy-groups'][':InstanceId'][':HierarchyGroupId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserHierarchyGroupsInstanceIdHierarchyGroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['user-hierarchy-groups'][':InstanceId'][':HierarchyGroupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetUserHierarchyGroupsInstanceIdHierarchyGroupIdKey(args)
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
                (typeof client)['user-hierarchy-groups'][':InstanceId'][':HierarchyGroupId']['$get']
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
          client['user-hierarchy-groups'][':InstanceId'][':HierarchyGroupId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteUserHierarchyGroupsInstanceIdHierarchyGroupIdKey() {
  return [
    'user-hierarchy-groups',
    '/user-hierarchy-groups/:InstanceId/:HierarchyGroupId',
    'DELETE',
  ] as const
}

export function useDeleteUserHierarchyGroupsInstanceIdHierarchyGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['user-hierarchy-groups'][':InstanceId'][':HierarchyGroupId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserHierarchyGroupsInstanceIdHierarchyGroupIdKey()
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
            (typeof client)['user-hierarchy-groups'][':InstanceId'][':HierarchyGroupId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['user-hierarchy-groups'][':InstanceId'][':HierarchyGroupId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostVocabularyRemoveInstanceIdVocabularyIdKey() {
  return ['vocabulary-remove', '/vocabulary-remove/:InstanceId/:VocabularyId', 'POST'] as const
}

export function usePostVocabularyRemoveInstanceIdVocabularyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['vocabulary-remove'][':InstanceId'][':VocabularyId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVocabularyRemoveInstanceIdVocabularyIdKey()
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
            (typeof client)['vocabulary-remove'][':InstanceId'][':VocabularyId']['$post']
          >
        },
      ) =>
        parseResponse(
          client['vocabulary-remove'][':InstanceId'][':VocabularyId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAgentStatusInstanceIdAgentStatusIdKey(
  args: InferRequestType<(typeof client)['agent-status'][':InstanceId'][':AgentStatusId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['agent-status', '/agent-status/:InstanceId/:AgentStatusId', keyArgs] as const
}

export function useGetAgentStatusInstanceIdAgentStatusId<TError = unknown>(
  args: InferRequestType<(typeof client)['agent-status'][':InstanceId'][':AgentStatusId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['agent-status'][':InstanceId'][':AgentStatusId']['$get']>
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
        ? getGetAgentStatusInstanceIdAgentStatusIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['agent-status'][':InstanceId'][':AgentStatusId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['agent-status'][':InstanceId'][':AgentStatusId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentStatusInstanceIdAgentStatusId<TError = unknown>(
  args: InferRequestType<(typeof client)['agent-status'][':InstanceId'][':AgentStatusId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['agent-status'][':InstanceId'][':AgentStatusId']['$get']>
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
        ? getGetAgentStatusInstanceIdAgentStatusIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['agent-status'][':InstanceId'][':AgentStatusId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['agent-status'][':InstanceId'][':AgentStatusId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAgentStatusInstanceIdAgentStatusIdKey() {
  return ['agent-status', '/agent-status/:InstanceId/:AgentStatusId', 'POST'] as const
}

export function usePostAgentStatusInstanceIdAgentStatusId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['agent-status'][':InstanceId'][':AgentStatusId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAgentStatusInstanceIdAgentStatusIdKey()
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
            (typeof client)['agent-status'][':InstanceId'][':AgentStatusId']['$post']
          >
        },
      ) =>
        parseResponse(
          client['agent-status'][':InstanceId'][':AgentStatusId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetContactsInstanceIdContactIdKey(
  args: InferRequestType<(typeof client.contacts)[':InstanceId'][':ContactId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['contacts', '/contacts/:InstanceId/:ContactId', keyArgs] as const
}

export function useGetContactsInstanceIdContactId<TError = unknown>(
  args: InferRequestType<(typeof client.contacts)[':InstanceId'][':ContactId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':InstanceId'][':ContactId']['$get']>>
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
        ? getGetContactsInstanceIdContactIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':InstanceId'][':ContactId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.contacts[':InstanceId'][':ContactId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactsInstanceIdContactId<TError = unknown>(
  args: InferRequestType<(typeof client.contacts)[':InstanceId'][':ContactId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':InstanceId'][':ContactId']['$get']>>
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
        ? getGetContactsInstanceIdContactIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':InstanceId'][':ContactId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.contacts[':InstanceId'][':ContactId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostContactsInstanceIdContactIdKey() {
  return ['contacts', '/contacts/:InstanceId/:ContactId', 'POST'] as const
}

export function usePostContactsInstanceIdContactId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts)[':InstanceId'][':ContactId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.contacts)[':InstanceId'][':ContactId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactsInstanceIdContactIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.contacts)[':InstanceId'][':ContactId']['$post']>
        },
      ) => parseResponse(client.contacts[':InstanceId'][':ContactId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInstanceInstanceIdAttributeAttributeTypeKey(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['attribute'][':AttributeType']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['instance', '/instance/:InstanceId/attribute/:AttributeType', keyArgs] as const
}

export function useGetInstanceInstanceIdAttributeAttributeType<TError = unknown>(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['attribute'][':AttributeType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInstanceInstanceIdAttributeAttributeTypeKey(args)
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
                (typeof client.instance)[':InstanceId']['attribute'][':AttributeType']['$get']
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
          client.instance[':InstanceId'].attribute[':AttributeType'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstanceInstanceIdAttributeAttributeType<TError = unknown>(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['attribute'][':AttributeType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInstanceInstanceIdAttributeAttributeTypeKey(args)
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
                (typeof client.instance)[':InstanceId']['attribute'][':AttributeType']['$get']
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
          client.instance[':InstanceId'].attribute[':AttributeType'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostInstanceInstanceIdAttributeAttributeTypeKey() {
  return ['instance', '/instance/:InstanceId/attribute/:AttributeType', 'POST'] as const
}

export function usePostInstanceInstanceIdAttributeAttributeType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.instance)[':InstanceId']['attribute'][':AttributeType']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInstanceInstanceIdAttributeAttributeTypeKey()
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
            (typeof client.instance)[':InstanceId']['attribute'][':AttributeType']['$post']
          >
        },
      ) =>
        parseResponse(
          client.instance[':InstanceId'].attribute[':AttributeType'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetInstanceInstanceIdStorageConfigAssociationIdResourceTypeKey(
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

export function useGetInstanceInstanceIdStorageConfigAssociationIdResourceType<TError = unknown>(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['storage-config'][':AssociationId#resourceType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInstanceInstanceIdStorageConfigAssociationIdResourceTypeKey(args)
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
                (typeof client.instance)[':InstanceId']['storage-config'][':AssociationId#resourceType']['$get']
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
          client.instance[':InstanceId']['storage-config'][':AssociationId#resourceType'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstanceInstanceIdStorageConfigAssociationIdResourceType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['storage-config'][':AssociationId#resourceType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInstanceInstanceIdStorageConfigAssociationIdResourceTypeKey(args)
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
                (typeof client.instance)[':InstanceId']['storage-config'][':AssociationId#resourceType']['$get']
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
          client.instance[':InstanceId']['storage-config'][':AssociationId#resourceType'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostInstanceInstanceIdStorageConfigAssociationIdResourceTypeKey() {
  return [
    'instance',
    '/instance/:InstanceId/storage-config/:AssociationId#resourceType',
    'POST',
  ] as const
}

export function usePostInstanceInstanceIdStorageConfigAssociationIdResourceType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.instance)[':InstanceId']['storage-config'][':AssociationId#resourceType']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInstanceInstanceIdStorageConfigAssociationIdResourceTypeKey()
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
            (typeof client.instance)[':InstanceId']['storage-config'][':AssociationId#resourceType']['$post']
          >
        },
      ) =>
        parseResponse(
          client.instance[':InstanceId']['storage-config'][':AssociationId#resourceType'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteInstanceInstanceIdStorageConfigAssociationIdResourceTypeKey() {
  return [
    'instance',
    '/instance/:InstanceId/storage-config/:AssociationId#resourceType',
    'DELETE',
  ] as const
}

export function useDeleteInstanceInstanceIdStorageConfigAssociationIdResourceType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.instance)[':InstanceId']['storage-config'][':AssociationId#resourceType']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteInstanceInstanceIdStorageConfigAssociationIdResourceTypeKey()
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
            (typeof client.instance)[':InstanceId']['storage-config'][':AssociationId#resourceType']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.instance[':InstanceId']['storage-config'][':AssociationId#resourceType'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPhoneNumberPhoneNumberIdKey(
  args: InferRequestType<(typeof client)['phone-number'][':PhoneNumberId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['phone-number', '/phone-number/:PhoneNumberId', keyArgs] as const
}

export function useGetPhoneNumberPhoneNumberId<TError = unknown>(
  args: InferRequestType<(typeof client)['phone-number'][':PhoneNumberId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['phone-number'][':PhoneNumberId']['$get']>>
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
        ? getGetPhoneNumberPhoneNumberIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['phone-number'][':PhoneNumberId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['phone-number'][':PhoneNumberId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneNumberPhoneNumberId<TError = unknown>(
  args: InferRequestType<(typeof client)['phone-number'][':PhoneNumberId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['phone-number'][':PhoneNumberId']['$get']>>
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
        ? getGetPhoneNumberPhoneNumberIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['phone-number'][':PhoneNumberId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['phone-number'][':PhoneNumberId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPhoneNumberPhoneNumberIdKey() {
  return ['phone-number', '/phone-number/:PhoneNumberId', 'PUT'] as const
}

export function usePutPhoneNumberPhoneNumberId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['phone-number'][':PhoneNumberId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['phone-number'][':PhoneNumberId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPhoneNumberPhoneNumberIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['phone-number'][':PhoneNumberId']['$put']> },
      ) => parseResponse(client['phone-number'][':PhoneNumberId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePhoneNumberPhoneNumberIdKey() {
  return ['phone-number', '/phone-number/:PhoneNumberId', 'DELETE'] as const
}

export function useDeletePhoneNumberPhoneNumberId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['phone-number'][':PhoneNumberId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['phone-number'][':PhoneNumberId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePhoneNumberPhoneNumberIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['phone-number'][':PhoneNumberId']['$delete']> },
      ) => parseResponse(client['phone-number'][':PhoneNumberId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetQueuesInstanceIdQueueIdKey(
  args: InferRequestType<(typeof client.queues)[':InstanceId'][':QueueId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['queues', '/queues/:InstanceId/:QueueId', keyArgs] as const
}

export function useGetQueuesInstanceIdQueueId<TError = unknown>(
  args: InferRequestType<(typeof client.queues)[':InstanceId'][':QueueId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.queues)[':InstanceId'][':QueueId']['$get']>>
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
        ? getGetQueuesInstanceIdQueueIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.queues)[':InstanceId'][':QueueId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.queues[':InstanceId'][':QueueId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQueuesInstanceIdQueueId<TError = unknown>(
  args: InferRequestType<(typeof client.queues)[':InstanceId'][':QueueId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.queues)[':InstanceId'][':QueueId']['$get']>>
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
        ? getGetQueuesInstanceIdQueueIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.queues)[':InstanceId'][':QueueId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.queues[':InstanceId'][':QueueId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRoutingProfilesInstanceIdRoutingProfileIdKey(
  args: InferRequestType<
    (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['routing-profiles', '/routing-profiles/:InstanceId/:RoutingProfileId', keyArgs] as const
}

export function useGetRoutingProfilesInstanceIdRoutingProfileId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRoutingProfilesInstanceIdRoutingProfileIdKey(args)
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
                (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['$get']
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
          client['routing-profiles'][':InstanceId'][':RoutingProfileId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoutingProfilesInstanceIdRoutingProfileId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRoutingProfilesInstanceIdRoutingProfileIdKey(args)
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
                (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['$get']
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
          client['routing-profiles'][':InstanceId'][':RoutingProfileId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserHierarchyStructureInstanceIdKey(
  args: InferRequestType<(typeof client)['user-hierarchy-structure'][':InstanceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['user-hierarchy-structure', '/user-hierarchy-structure/:InstanceId', keyArgs] as const
}

export function useGetUserHierarchyStructureInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client)['user-hierarchy-structure'][':InstanceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['user-hierarchy-structure'][':InstanceId']['$get']>>
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
        ? getGetUserHierarchyStructureInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['user-hierarchy-structure'][':InstanceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['user-hierarchy-structure'][':InstanceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserHierarchyStructureInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client)['user-hierarchy-structure'][':InstanceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['user-hierarchy-structure'][':InstanceId']['$get']>>
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
        ? getGetUserHierarchyStructureInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['user-hierarchy-structure'][':InstanceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['user-hierarchy-structure'][':InstanceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserHierarchyStructureInstanceIdKey() {
  return ['user-hierarchy-structure', '/user-hierarchy-structure/:InstanceId', 'POST'] as const
}

export function usePostUserHierarchyStructureInstanceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['user-hierarchy-structure'][':InstanceId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['user-hierarchy-structure'][':InstanceId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserHierarchyStructureInstanceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['user-hierarchy-structure'][':InstanceId']['$post']>
        },
      ) =>
        parseResponse(client['user-hierarchy-structure'][':InstanceId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVocabularyInstanceIdVocabularyIdKey(
  args: InferRequestType<(typeof client.vocabulary)[':InstanceId'][':VocabularyId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['vocabulary', '/vocabulary/:InstanceId/:VocabularyId', keyArgs] as const
}

export function useGetVocabularyInstanceIdVocabularyId<TError = unknown>(
  args: InferRequestType<(typeof client.vocabulary)[':InstanceId'][':VocabularyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vocabulary)[':InstanceId'][':VocabularyId']['$get']>>
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
        ? getGetVocabularyInstanceIdVocabularyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vocabulary)[':InstanceId'][':VocabularyId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.vocabulary[':InstanceId'][':VocabularyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVocabularyInstanceIdVocabularyId<TError = unknown>(
  args: InferRequestType<(typeof client.vocabulary)[':InstanceId'][':VocabularyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vocabulary)[':InstanceId'][':VocabularyId']['$get']>>
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
        ? getGetVocabularyInstanceIdVocabularyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vocabulary)[':InstanceId'][':VocabularyId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.vocabulary[':InstanceId'][':VocabularyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteInstanceInstanceIdApprovedOriginOriginKey() {
  return ['instance', '/instance/:InstanceId/approved-origin#origin', 'DELETE'] as const
}

export function useDeleteInstanceInstanceIdApprovedOriginOrigin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.instance)[':InstanceId']['approved-origin#origin']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteInstanceInstanceIdApprovedOriginOriginKey()
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
            (typeof client.instance)[':InstanceId']['approved-origin#origin']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.instance[':InstanceId']['approved-origin#origin'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteInstanceInstanceIdLambdaFunctionFunctionArnKey() {
  return ['instance', '/instance/:InstanceId/lambda-function#functionArn', 'DELETE'] as const
}

export function useDeleteInstanceInstanceIdLambdaFunctionFunctionArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.instance)[':InstanceId']['lambda-function#functionArn']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteInstanceInstanceIdLambdaFunctionFunctionArnKey()
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
            (typeof client.instance)[':InstanceId']['lambda-function#functionArn']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.instance[':InstanceId']['lambda-function#functionArn'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteInstanceInstanceIdLexBotBotNameLexRegionKey() {
  return ['instance', '/instance/:InstanceId/lex-bot#botName&lexRegion', 'DELETE'] as const
}

export function useDeleteInstanceInstanceIdLexBotBotNameLexRegion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.instance)[':InstanceId']['lex-bot#botName&lexRegion']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteInstanceInstanceIdLexBotBotNameLexRegionKey()
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
            (typeof client.instance)[':InstanceId']['lex-bot#botName&lexRegion']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.instance[':InstanceId']['lex-bot#botName&lexRegion'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeletePhoneNumberPhoneNumberIdContactFlowInstanceIdKey() {
  return ['phone-number', '/phone-number/:PhoneNumberId/contact-flow#instanceId', 'DELETE'] as const
}

export function useDeletePhoneNumberPhoneNumberIdContactFlowInstanceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['phone-number'][':PhoneNumberId']['contact-flow#instanceId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePhoneNumberPhoneNumberIdContactFlowInstanceIdKey()
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
            (typeof client)['phone-number'][':PhoneNumberId']['contact-flow#instanceId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['phone-number'][':PhoneNumberId']['contact-flow#instanceId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostQueuesInstanceIdQueueIdDisassociateQuickConnectsKey() {
  return ['queues', '/queues/:InstanceId/:QueueId/disassociate-quick-connects', 'POST'] as const
}

export function usePostQueuesInstanceIdQueueIdDisassociateQuickConnects<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.queues)[':InstanceId'][':QueueId']['disassociate-quick-connects']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQueuesInstanceIdQueueIdDisassociateQuickConnectsKey()
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
            (typeof client.queues)[':InstanceId'][':QueueId']['disassociate-quick-connects']['$post']
          >
        },
      ) =>
        parseResponse(
          client.queues[':InstanceId'][':QueueId']['disassociate-quick-connects'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRoutingProfilesInstanceIdRoutingProfileIdDisassociateQueuesKey() {
  return [
    'routing-profiles',
    '/routing-profiles/:InstanceId/:RoutingProfileId/disassociate-queues',
    'POST',
  ] as const
}

export function usePostRoutingProfilesInstanceIdRoutingProfileIdDisassociateQueues<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['disassociate-queues']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostRoutingProfilesInstanceIdRoutingProfileIdDisassociateQueuesKey()
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
            (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['disassociate-queues']['$post']
          >
        },
      ) =>
        parseResponse(
          client['routing-profiles'][':InstanceId'][':RoutingProfileId'][
            'disassociate-queues'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteInstanceInstanceIdSecurityKeyAssociationIdKey() {
  return ['instance', '/instance/:InstanceId/security-key/:AssociationId', 'DELETE'] as const
}

export function useDeleteInstanceInstanceIdSecurityKeyAssociationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.instance)[':InstanceId']['security-key'][':AssociationId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteInstanceInstanceIdSecurityKeyAssociationIdKey()
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
            (typeof client.instance)[':InstanceId']['security-key'][':AssociationId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.instance[':InstanceId']['security-key'][':AssociationId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostUsersInstanceIdUserIdContactKey() {
  return ['users', '/users/:InstanceId/:UserId/contact', 'POST'] as const
}

export function usePostUsersInstanceIdUserIdContact<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':InstanceId'][':UserId']['contact']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':InstanceId'][':UserId']['contact']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersInstanceIdUserIdContactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.users)[':InstanceId'][':UserId']['contact']['$post']>
        },
      ) => parseResponse(client.users[':InstanceId'][':UserId'].contact.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContactAttributesInstanceIdInitialContactIdKey(
  args: InferRequestType<
    (typeof client.contact.attributes)[':InstanceId'][':InitialContactId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['contact', '/contact/attributes/:InstanceId/:InitialContactId', keyArgs] as const
}

export function useGetContactAttributesInstanceIdInitialContactId<TError = unknown>(
  args: InferRequestType<
    (typeof client.contact.attributes)[':InstanceId'][':InitialContactId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetContactAttributesInstanceIdInitialContactIdKey(args)
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
                (typeof client.contact.attributes)[':InstanceId'][':InitialContactId']['$get']
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
          client.contact.attributes[':InstanceId'][':InitialContactId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactAttributesInstanceIdInitialContactId<TError = unknown>(
  args: InferRequestType<
    (typeof client.contact.attributes)[':InstanceId'][':InitialContactId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetContactAttributesInstanceIdInitialContactIdKey(args)
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
                (typeof client.contact.attributes)[':InstanceId'][':InitialContactId']['$get']
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
          client.contact.attributes[':InstanceId'][':InitialContactId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostMetricsCurrentInstanceIdKey() {
  return ['metrics', '/metrics/current/:InstanceId', 'POST'] as const
}

export function usePostMetricsCurrentInstanceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metrics.current)[':InstanceId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.metrics.current)[':InstanceId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMetricsCurrentInstanceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.metrics.current)[':InstanceId']['$post']> },
      ) => parseResponse(client.metrics.current[':InstanceId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMetricsUserdataInstanceIdKey() {
  return ['metrics', '/metrics/userdata/:InstanceId', 'POST'] as const
}

export function usePostMetricsUserdataInstanceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metrics.userdata)[':InstanceId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.metrics.userdata)[':InstanceId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMetricsUserdataInstanceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.metrics.userdata)[':InstanceId']['$post']> },
      ) => parseResponse(client.metrics.userdata[':InstanceId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserFederateInstanceIdKey(
  args: InferRequestType<(typeof client.user.federate)[':InstanceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['user', '/user/federate/:InstanceId', keyArgs] as const
}

export function useGetUserFederateInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client.user.federate)[':InstanceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.federate)[':InstanceId']['$get']>>
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
        ? getGetUserFederateInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.federate)[':InstanceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.federate[':InstanceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserFederateInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client.user.federate)[':InstanceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.federate)[':InstanceId']['$get']>>
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
        ? getGetUserFederateInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user.federate)[':InstanceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.federate[':InstanceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMetricsHistoricalInstanceIdKey() {
  return ['metrics', '/metrics/historical/:InstanceId', 'POST'] as const
}

export function usePostMetricsHistoricalInstanceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metrics.historical)[':InstanceId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.metrics.historical)[':InstanceId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMetricsHistoricalInstanceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.metrics.historical)[':InstanceId']['$post']> },
      ) => parseResponse(client.metrics.historical[':InstanceId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMetricsDataKey() {
  return ['metrics', '/metrics/data', 'POST'] as const
}

export function usePostMetricsData<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.data.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.metrics.data.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMetricsDataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.metrics.data.$post> }) =>
        parseResponse(client.metrics.data.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTrafficDistributionIdKey(
  args: InferRequestType<(typeof client)['traffic-distribution'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['traffic-distribution', '/traffic-distribution/:Id', keyArgs] as const
}

export function useGetTrafficDistributionId<TError = unknown>(
  args: InferRequestType<(typeof client)['traffic-distribution'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['traffic-distribution'][':Id']['$get']>>
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
        ? getGetTrafficDistributionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['traffic-distribution'][':Id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['traffic-distribution'][':Id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTrafficDistributionId<TError = unknown>(
  args: InferRequestType<(typeof client)['traffic-distribution'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['traffic-distribution'][':Id']['$get']>>
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
        ? getGetTrafficDistributionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['traffic-distribution'][':Id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['traffic-distribution'][':Id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTrafficDistributionIdKey() {
  return ['traffic-distribution', '/traffic-distribution/:Id', 'PUT'] as const
}

export function usePutTrafficDistributionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['traffic-distribution'][':Id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['traffic-distribution'][':Id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTrafficDistributionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['traffic-distribution'][':Id']['$put']> },
      ) => parseResponse(client['traffic-distribution'][':Id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInstanceInstanceIdApprovedOriginsKey(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['approved-origins']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['instance', '/instance/:InstanceId/approved-origins', keyArgs] as const
}

export function useGetInstanceInstanceIdApprovedOrigins<TError = unknown>(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['approved-origins']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instance)[':InstanceId']['approved-origins']['$get']>>
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
        ? getGetInstanceInstanceIdApprovedOriginsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instance)[':InstanceId']['approved-origins']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instance[':InstanceId']['approved-origins'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstanceInstanceIdApprovedOrigins<TError = unknown>(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['approved-origins']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instance)[':InstanceId']['approved-origins']['$get']>>
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
        ? getGetInstanceInstanceIdApprovedOriginsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instance)[':InstanceId']['approved-origins']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instance[':InstanceId']['approved-origins'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInstanceInstanceIdBotsLexVersionKey(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['bots#lexVersion']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['instance', '/instance/:InstanceId/bots#lexVersion', keyArgs] as const
}

export function useGetInstanceInstanceIdBotsLexVersion<TError = unknown>(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['bots#lexVersion']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instance)[':InstanceId']['bots#lexVersion']['$get']>>
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
        ? getGetInstanceInstanceIdBotsLexVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instance)[':InstanceId']['bots#lexVersion']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instance[':InstanceId']['bots#lexVersion'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstanceInstanceIdBotsLexVersion<TError = unknown>(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['bots#lexVersion']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instance)[':InstanceId']['bots#lexVersion']['$get']>>
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
        ? getGetInstanceInstanceIdBotsLexVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instance)[':InstanceId']['bots#lexVersion']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instance[':InstanceId']['bots#lexVersion'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetContactFlowModulesSummaryInstanceIdKey(
  args: InferRequestType<(typeof client)['contact-flow-modules-summary'][':InstanceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'contact-flow-modules-summary',
    '/contact-flow-modules-summary/:InstanceId',
    keyArgs,
  ] as const
}

export function useGetContactFlowModulesSummaryInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client)['contact-flow-modules-summary'][':InstanceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['contact-flow-modules-summary'][':InstanceId']['$get']>
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
        ? getGetContactFlowModulesSummaryInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['contact-flow-modules-summary'][':InstanceId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['contact-flow-modules-summary'][':InstanceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactFlowModulesSummaryInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client)['contact-flow-modules-summary'][':InstanceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['contact-flow-modules-summary'][':InstanceId']['$get']>
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
        ? getGetContactFlowModulesSummaryInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['contact-flow-modules-summary'][':InstanceId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['contact-flow-modules-summary'][':InstanceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetContactFlowsSummaryInstanceIdKey(
  args: InferRequestType<(typeof client)['contact-flows-summary'][':InstanceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['contact-flows-summary', '/contact-flows-summary/:InstanceId', keyArgs] as const
}

export function useGetContactFlowsSummaryInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client)['contact-flows-summary'][':InstanceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['contact-flows-summary'][':InstanceId']['$get']>>
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
        ? getGetContactFlowsSummaryInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['contact-flows-summary'][':InstanceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['contact-flows-summary'][':InstanceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactFlowsSummaryInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client)['contact-flows-summary'][':InstanceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['contact-flows-summary'][':InstanceId']['$get']>>
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
        ? getGetContactFlowsSummaryInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['contact-flows-summary'][':InstanceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['contact-flows-summary'][':InstanceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetContactReferencesInstanceIdContactIdReferenceTypesKey(
  args: InferRequestType<
    (typeof client.contact.references)[':InstanceId'][':ContactId#referenceTypes']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['contact', '/contact/references/:InstanceId/:ContactId#referenceTypes', keyArgs] as const
}

export function useGetContactReferencesInstanceIdContactIdReferenceTypes<TError = unknown>(
  args: InferRequestType<
    (typeof client.contact.references)[':InstanceId'][':ContactId#referenceTypes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetContactReferencesInstanceIdContactIdReferenceTypesKey(args)
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
                (typeof client.contact.references)[':InstanceId'][':ContactId#referenceTypes']['$get']
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
          client.contact.references[':InstanceId'][':ContactId#referenceTypes'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactReferencesInstanceIdContactIdReferenceTypes<TError = unknown>(
  args: InferRequestType<
    (typeof client.contact.references)[':InstanceId'][':ContactId#referenceTypes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetContactReferencesInstanceIdContactIdReferenceTypesKey(args)
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
                (typeof client.contact.references)[':InstanceId'][':ContactId#referenceTypes']['$get']
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
          client.contact.references[':InstanceId'][':ContactId#referenceTypes'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDefaultVocabularySummaryInstanceIdKey() {
  return ['default-vocabulary-summary', '/default-vocabulary-summary/:InstanceId', 'POST'] as const
}

export function usePostDefaultVocabularySummaryInstanceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['default-vocabulary-summary'][':InstanceId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['default-vocabulary-summary'][':InstanceId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDefaultVocabularySummaryInstanceIdKey()
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
            (typeof client)['default-vocabulary-summary'][':InstanceId']['$post']
          >
        },
      ) =>
        parseResponse(
          client['default-vocabulary-summary'][':InstanceId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetHoursOfOperationsSummaryInstanceIdKey(
  args: InferRequestType<(typeof client)['hours-of-operations-summary'][':InstanceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'hours-of-operations-summary',
    '/hours-of-operations-summary/:InstanceId',
    keyArgs,
  ] as const
}

export function useGetHoursOfOperationsSummaryInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client)['hours-of-operations-summary'][':InstanceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['hours-of-operations-summary'][':InstanceId']['$get']>
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
        ? getGetHoursOfOperationsSummaryInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['hours-of-operations-summary'][':InstanceId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['hours-of-operations-summary'][':InstanceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHoursOfOperationsSummaryInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client)['hours-of-operations-summary'][':InstanceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['hours-of-operations-summary'][':InstanceId']['$get']>
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
        ? getGetHoursOfOperationsSummaryInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['hours-of-operations-summary'][':InstanceId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['hours-of-operations-summary'][':InstanceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetInstanceInstanceIdAttributesKey(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['attributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['instance', '/instance/:InstanceId/attributes', keyArgs] as const
}

export function useGetInstanceInstanceIdAttributes<TError = unknown>(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['attributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instance)[':InstanceId']['attributes']['$get']>>
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
        ? getGetInstanceInstanceIdAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instance)[':InstanceId']['attributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instance[':InstanceId'].attributes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstanceInstanceIdAttributes<TError = unknown>(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['attributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instance)[':InstanceId']['attributes']['$get']>>
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
        ? getGetInstanceInstanceIdAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instance)[':InstanceId']['attributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instance[':InstanceId'].attributes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInstanceInstanceIdStorageConfigsResourceTypeKey(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['storage-configs#resourceType']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['instance', '/instance/:InstanceId/storage-configs#resourceType', keyArgs] as const
}

export function useGetInstanceInstanceIdStorageConfigsResourceType<TError = unknown>(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['storage-configs#resourceType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInstanceInstanceIdStorageConfigsResourceTypeKey(args)
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
                (typeof client.instance)[':InstanceId']['storage-configs#resourceType']['$get']
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
          client.instance[':InstanceId']['storage-configs#resourceType'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstanceInstanceIdStorageConfigsResourceType<TError = unknown>(
  args: InferRequestType<
    (typeof client.instance)[':InstanceId']['storage-configs#resourceType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInstanceInstanceIdStorageConfigsResourceTypeKey(args)
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
                (typeof client.instance)[':InstanceId']['storage-configs#resourceType']['$get']
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
          client.instance[':InstanceId']['storage-configs#resourceType'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetInstanceInstanceIdLambdaFunctionsKey(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['lambda-functions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['instance', '/instance/:InstanceId/lambda-functions', keyArgs] as const
}

export function useGetInstanceInstanceIdLambdaFunctions<TError = unknown>(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['lambda-functions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instance)[':InstanceId']['lambda-functions']['$get']>>
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
        ? getGetInstanceInstanceIdLambdaFunctionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instance)[':InstanceId']['lambda-functions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instance[':InstanceId']['lambda-functions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstanceInstanceIdLambdaFunctions<TError = unknown>(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['lambda-functions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instance)[':InstanceId']['lambda-functions']['$get']>>
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
        ? getGetInstanceInstanceIdLambdaFunctionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instance)[':InstanceId']['lambda-functions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instance[':InstanceId']['lambda-functions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInstanceInstanceIdLexBotsKey(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['lex-bots']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['instance', '/instance/:InstanceId/lex-bots', keyArgs] as const
}

export function useGetInstanceInstanceIdLexBots<TError = unknown>(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['lex-bots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instance)[':InstanceId']['lex-bots']['$get']>>
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
        ? getGetInstanceInstanceIdLexBotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instance)[':InstanceId']['lex-bots']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instance[':InstanceId']['lex-bots'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstanceInstanceIdLexBots<TError = unknown>(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['lex-bots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instance)[':InstanceId']['lex-bots']['$get']>>
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
        ? getGetInstanceInstanceIdLexBotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instance)[':InstanceId']['lex-bots']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instance[':InstanceId']['lex-bots'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPhoneNumbersSummaryInstanceIdKey(
  args: InferRequestType<(typeof client)['phone-numbers-summary'][':InstanceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['phone-numbers-summary', '/phone-numbers-summary/:InstanceId', keyArgs] as const
}

export function useGetPhoneNumbersSummaryInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client)['phone-numbers-summary'][':InstanceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['phone-numbers-summary'][':InstanceId']['$get']>>
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
        ? getGetPhoneNumbersSummaryInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['phone-numbers-summary'][':InstanceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['phone-numbers-summary'][':InstanceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneNumbersSummaryInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client)['phone-numbers-summary'][':InstanceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['phone-numbers-summary'][':InstanceId']['$get']>>
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
        ? getGetPhoneNumbersSummaryInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['phone-numbers-summary'][':InstanceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['phone-numbers-summary'][':InstanceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPhoneNumberListKey() {
  return ['phone-number', '/phone-number/list', 'POST'] as const
}

export function usePostPhoneNumberList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number']['list']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['phone-number']['list']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPhoneNumberListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['phone-number']['list']['$post']> },
      ) => parseResponse(client['phone-number'].list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPromptsSummaryInstanceIdKey(
  args: InferRequestType<(typeof client)['prompts-summary'][':InstanceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['prompts-summary', '/prompts-summary/:InstanceId', keyArgs] as const
}

export function useGetPromptsSummaryInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client)['prompts-summary'][':InstanceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['prompts-summary'][':InstanceId']['$get']>>
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
        ? getGetPromptsSummaryInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['prompts-summary'][':InstanceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['prompts-summary'][':InstanceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPromptsSummaryInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client)['prompts-summary'][':InstanceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['prompts-summary'][':InstanceId']['$get']>>
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
        ? getGetPromptsSummaryInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['prompts-summary'][':InstanceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['prompts-summary'][':InstanceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQueuesInstanceIdQueueIdQuickConnectsKey(
  args: InferRequestType<
    (typeof client.queues)[':InstanceId'][':QueueId']['quick-connects']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['queues', '/queues/:InstanceId/:QueueId/quick-connects', keyArgs] as const
}

export function useGetQueuesInstanceIdQueueIdQuickConnects<TError = unknown>(
  args: InferRequestType<
    (typeof client.queues)[':InstanceId'][':QueueId']['quick-connects']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetQueuesInstanceIdQueueIdQuickConnectsKey(args)
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
                (typeof client.queues)[':InstanceId'][':QueueId']['quick-connects']['$get']
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
          client.queues[':InstanceId'][':QueueId']['quick-connects'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQueuesInstanceIdQueueIdQuickConnects<TError = unknown>(
  args: InferRequestType<
    (typeof client.queues)[':InstanceId'][':QueueId']['quick-connects']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetQueuesInstanceIdQueueIdQuickConnectsKey(args)
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
                (typeof client.queues)[':InstanceId'][':QueueId']['quick-connects']['$get']
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
          client.queues[':InstanceId'][':QueueId']['quick-connects'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetQueuesSummaryInstanceIdKey(
  args: InferRequestType<(typeof client)['queues-summary'][':InstanceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['queues-summary', '/queues-summary/:InstanceId', keyArgs] as const
}

export function useGetQueuesSummaryInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client)['queues-summary'][':InstanceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['queues-summary'][':InstanceId']['$get']>>
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
        ? getGetQueuesSummaryInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['queues-summary'][':InstanceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['queues-summary'][':InstanceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQueuesSummaryInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client)['queues-summary'][':InstanceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['queues-summary'][':InstanceId']['$get']>>
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
        ? getGetQueuesSummaryInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['queues-summary'][':InstanceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['queues-summary'][':InstanceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRoutingProfilesInstanceIdRoutingProfileIdQueuesKey(
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

export function useGetRoutingProfilesInstanceIdRoutingProfileIdQueues<TError = unknown>(
  args: InferRequestType<
    (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['queues']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRoutingProfilesInstanceIdRoutingProfileIdQueuesKey(args)
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
                (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['queues']['$get']
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
          client['routing-profiles'][':InstanceId'][':RoutingProfileId'].queues.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoutingProfilesInstanceIdRoutingProfileIdQueues<TError = unknown>(
  args: InferRequestType<
    (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['queues']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRoutingProfilesInstanceIdRoutingProfileIdQueuesKey(args)
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
                (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['queues']['$get']
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
          client['routing-profiles'][':InstanceId'][':RoutingProfileId'].queues.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRoutingProfilesInstanceIdRoutingProfileIdQueuesKey() {
  return [
    'routing-profiles',
    '/routing-profiles/:InstanceId/:RoutingProfileId/queues',
    'POST',
  ] as const
}

export function usePostRoutingProfilesInstanceIdRoutingProfileIdQueues<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['queues']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRoutingProfilesInstanceIdRoutingProfileIdQueuesKey()
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
            (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['queues']['$post']
          >
        },
      ) =>
        parseResponse(
          client['routing-profiles'][':InstanceId'][':RoutingProfileId'].queues.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRoutingProfilesSummaryInstanceIdKey(
  args: InferRequestType<(typeof client)['routing-profiles-summary'][':InstanceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['routing-profiles-summary', '/routing-profiles-summary/:InstanceId', keyArgs] as const
}

export function useGetRoutingProfilesSummaryInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client)['routing-profiles-summary'][':InstanceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['routing-profiles-summary'][':InstanceId']['$get']>>
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
        ? getGetRoutingProfilesSummaryInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['routing-profiles-summary'][':InstanceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['routing-profiles-summary'][':InstanceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoutingProfilesSummaryInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client)['routing-profiles-summary'][':InstanceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['routing-profiles-summary'][':InstanceId']['$get']>>
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
        ? getGetRoutingProfilesSummaryInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['routing-profiles-summary'][':InstanceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['routing-profiles-summary'][':InstanceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInstanceInstanceIdSecurityKeysKey(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['security-keys']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['instance', '/instance/:InstanceId/security-keys', keyArgs] as const
}

export function useGetInstanceInstanceIdSecurityKeys<TError = unknown>(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['security-keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instance)[':InstanceId']['security-keys']['$get']>>
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
        ? getGetInstanceInstanceIdSecurityKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instance)[':InstanceId']['security-keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instance[':InstanceId']['security-keys'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstanceInstanceIdSecurityKeys<TError = unknown>(
  args: InferRequestType<(typeof client.instance)[':InstanceId']['security-keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instance)[':InstanceId']['security-keys']['$get']>>
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
        ? getGetInstanceInstanceIdSecurityKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instance)[':InstanceId']['security-keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instance[':InstanceId']['security-keys'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSecurityProfilesPermissionsInstanceIdSecurityProfileIdKey(
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

export function useGetSecurityProfilesPermissionsInstanceIdSecurityProfileId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['security-profiles-permissions'][':InstanceId'][':SecurityProfileId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSecurityProfilesPermissionsInstanceIdSecurityProfileIdKey(args)
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
                (typeof client)['security-profiles-permissions'][':InstanceId'][':SecurityProfileId']['$get']
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
          client['security-profiles-permissions'][':InstanceId'][':SecurityProfileId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSecurityProfilesPermissionsInstanceIdSecurityProfileId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['security-profiles-permissions'][':InstanceId'][':SecurityProfileId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSecurityProfilesPermissionsInstanceIdSecurityProfileIdKey(args)
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
                (typeof client)['security-profiles-permissions'][':InstanceId'][':SecurityProfileId']['$get']
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
          client['security-profiles-permissions'][':InstanceId'][':SecurityProfileId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSecurityProfilesSummaryInstanceIdKey(
  args: InferRequestType<(typeof client)['security-profiles-summary'][':InstanceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['security-profiles-summary', '/security-profiles-summary/:InstanceId', keyArgs] as const
}

export function useGetSecurityProfilesSummaryInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client)['security-profiles-summary'][':InstanceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['security-profiles-summary'][':InstanceId']['$get']>>
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
        ? getGetSecurityProfilesSummaryInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['security-profiles-summary'][':InstanceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['security-profiles-summary'][':InstanceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSecurityProfilesSummaryInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client)['security-profiles-summary'][':InstanceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['security-profiles-summary'][':InstanceId']['$get']>>
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
        ? getGetSecurityProfilesSummaryInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['security-profiles-summary'][':InstanceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['security-profiles-summary'][':InstanceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTagsResourceArnKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function useGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
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
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
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
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagsResourceArnKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function usePostTagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn']['$post']> },
      ) => parseResponse(client.tags[':resourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTrafficDistributionGroupsKey(
  args: InferRequestType<(typeof client)['traffic-distribution-groups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['traffic-distribution-groups', '/traffic-distribution-groups', keyArgs] as const
}

export function useGetTrafficDistributionGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['traffic-distribution-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['traffic-distribution-groups']['$get']>>
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
        ? getGetTrafficDistributionGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['traffic-distribution-groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['traffic-distribution-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTrafficDistributionGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['traffic-distribution-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['traffic-distribution-groups']['$get']>>
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
        ? getGetTrafficDistributionGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['traffic-distribution-groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['traffic-distribution-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserHierarchyGroupsSummaryInstanceIdKey(
  args: InferRequestType<(typeof client)['user-hierarchy-groups-summary'][':InstanceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'user-hierarchy-groups-summary',
    '/user-hierarchy-groups-summary/:InstanceId',
    keyArgs,
  ] as const
}

export function useGetUserHierarchyGroupsSummaryInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client)['user-hierarchy-groups-summary'][':InstanceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['user-hierarchy-groups-summary'][':InstanceId']['$get']>
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
        ? getGetUserHierarchyGroupsSummaryInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['user-hierarchy-groups-summary'][':InstanceId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['user-hierarchy-groups-summary'][':InstanceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserHierarchyGroupsSummaryInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client)['user-hierarchy-groups-summary'][':InstanceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['user-hierarchy-groups-summary'][':InstanceId']['$get']>
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
        ? getGetUserHierarchyGroupsSummaryInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['user-hierarchy-groups-summary'][':InstanceId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['user-hierarchy-groups-summary'][':InstanceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUsersSummaryInstanceIdKey(
  args: InferRequestType<(typeof client)['users-summary'][':InstanceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users-summary', '/users-summary/:InstanceId', keyArgs] as const
}

export function useGetUsersSummaryInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client)['users-summary'][':InstanceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['users-summary'][':InstanceId']['$get']>>
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
        ? getGetUsersSummaryInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['users-summary'][':InstanceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['users-summary'][':InstanceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersSummaryInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client)['users-summary'][':InstanceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['users-summary'][':InstanceId']['$get']>>
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
        ? getGetUsersSummaryInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['users-summary'][':InstanceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['users-summary'][':InstanceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostContactMonitorKey() {
  return ['contact', '/contact/monitor', 'POST'] as const
}

export function usePostContactMonitor<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contact.monitor.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.contact.monitor.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactMonitorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.contact.monitor.$post> }) =>
        parseResponse(client.contact.monitor.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutUsersInstanceIdUserIdStatusKey() {
  return ['users', '/users/:InstanceId/:UserId/status', 'PUT'] as const
}

export function usePutUsersInstanceIdUserIdStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':InstanceId'][':UserId']['status']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':InstanceId'][':UserId']['status']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersInstanceIdUserIdStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.users)[':InstanceId'][':UserId']['status']['$put']>
        },
      ) => parseResponse(client.users[':InstanceId'][':UserId'].status.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInstanceInstanceIdReplicateKey() {
  return ['instance', '/instance/:InstanceId/replicate', 'POST'] as const
}

export function usePostInstanceInstanceIdReplicate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instance)[':InstanceId']['replicate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.instance)[':InstanceId']['replicate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInstanceInstanceIdReplicateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.instance)[':InstanceId']['replicate']['$post']> },
      ) => parseResponse(client.instance[':InstanceId'].replicate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostContactResumeRecordingKey() {
  return ['contact', '/contact/resume-recording', 'POST'] as const
}

export function usePostContactResumeRecording<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contact)['resume-recording']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.contact)['resume-recording']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactResumeRecordingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.contact)['resume-recording']['$post']> },
      ) => parseResponse(client.contact['resume-recording'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPhoneNumberSearchAvailableKey() {
  return ['phone-number', '/phone-number/search-available', 'POST'] as const
}

export function usePostPhoneNumberSearchAvailable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['phone-number']['search-available']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['phone-number']['search-available']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPhoneNumberSearchAvailableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['phone-number']['search-available']['$post']> },
      ) => parseResponse(client['phone-number']['search-available'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSearchQueuesKey() {
  return ['search-queues', '/search-queues', 'POST'] as const
}

export function usePostSearchQueues<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['search-queues']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['search-queues']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSearchQueuesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['search-queues']['$post']> },
      ) => parseResponse(client['search-queues'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSearchRoutingProfilesKey() {
  return ['search-routing-profiles', '/search-routing-profiles', 'POST'] as const
}

export function usePostSearchRoutingProfiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['search-routing-profiles']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['search-routing-profiles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSearchRoutingProfilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['search-routing-profiles']['$post']> },
      ) => parseResponse(client['search-routing-profiles'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSearchSecurityProfilesKey() {
  return ['search-security-profiles', '/search-security-profiles', 'POST'] as const
}

export function usePostSearchSecurityProfiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['search-security-profiles']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['search-security-profiles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSearchSecurityProfilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['search-security-profiles']['$post']> },
      ) => parseResponse(client['search-security-profiles'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSearchUsersKey() {
  return ['search-users', '/search-users', 'POST'] as const
}

export function usePostSearchUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['search-users']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['search-users']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSearchUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['search-users']['$post']> },
      ) => parseResponse(client['search-users'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVocabularySummaryInstanceIdKey() {
  return ['vocabulary-summary', '/vocabulary-summary/:InstanceId', 'POST'] as const
}

export function usePostVocabularySummaryInstanceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['vocabulary-summary'][':InstanceId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['vocabulary-summary'][':InstanceId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVocabularySummaryInstanceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['vocabulary-summary'][':InstanceId']['$post']> },
      ) => parseResponse(client['vocabulary-summary'][':InstanceId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutContactChatKey() {
  return ['contact', '/contact/chat', 'PUT'] as const
}

export function usePutContactChat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contact.chat.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.contact.chat.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutContactChatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.contact.chat.$put> }) =>
        parseResponse(client.contact.chat.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostContactStartRecordingKey() {
  return ['contact', '/contact/start-recording', 'POST'] as const
}

export function usePostContactStartRecording<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contact)['start-recording']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.contact)['start-recording']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactStartRecordingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.contact)['start-recording']['$post']> },
      ) => parseResponse(client.contact['start-recording'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostContactStartStreamingKey() {
  return ['contact', '/contact/start-streaming', 'POST'] as const
}

export function usePostContactStartStreaming<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contact)['start-streaming']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.contact)['start-streaming']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactStartStreamingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.contact)['start-streaming']['$post']> },
      ) => parseResponse(client.contact['start-streaming'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutContactOutboundVoiceKey() {
  return ['contact', '/contact/outbound-voice', 'PUT'] as const
}

export function usePutContactOutboundVoice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.contact)['outbound-voice']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.contact)['outbound-voice']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutContactOutboundVoiceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.contact)['outbound-voice']['$put']> },
      ) => parseResponse(client.contact['outbound-voice'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutContactTaskKey() {
  return ['contact', '/contact/task', 'PUT'] as const
}

export function usePutContactTask<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contact.task.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.contact.task.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutContactTaskKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.contact.task.$put> }) =>
        parseResponse(client.contact.task.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostContactStopKey() {
  return ['contact', '/contact/stop', 'POST'] as const
}

export function usePostContactStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contact.stop.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.contact.stop.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactStopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.contact.stop.$post> }) =>
        parseResponse(client.contact.stop.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostContactStopRecordingKey() {
  return ['contact', '/contact/stop-recording', 'POST'] as const
}

export function usePostContactStopRecording<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contact)['stop-recording']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.contact)['stop-recording']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactStopRecordingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.contact)['stop-recording']['$post']> },
      ) => parseResponse(client.contact['stop-recording'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostContactStopStreamingKey() {
  return ['contact', '/contact/stop-streaming', 'POST'] as const
}

export function usePostContactStopStreaming<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contact)['stop-streaming']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.contact)['stop-streaming']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactStopStreamingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.contact)['stop-streaming']['$post']> },
      ) => parseResponse(client.contact['stop-streaming'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostContactSuspendRecordingKey() {
  return ['contact', '/contact/suspend-recording', 'POST'] as const
}

export function usePostContactSuspendRecording<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contact)['suspend-recording']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.contact)['suspend-recording']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactSuspendRecordingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.contact)['suspend-recording']['$post']> },
      ) => parseResponse(client.contact['suspend-recording'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostContactTransferKey() {
  return ['contact', '/contact/transfer', 'POST'] as const
}

export function usePostContactTransfer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contact.transfer.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.contact.transfer.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactTransferKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.contact.transfer.$post> }) =>
        parseResponse(client.contact.transfer.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTagsResourceArnTagKeysKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function useDeleteTagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsResourceArnTagKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']> },
      ) => parseResponse(client.tags[':resourceArn#tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostContactAttributesKey() {
  return ['contact', '/contact/attributes', 'POST'] as const
}

export function usePostContactAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contact.attributes.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.contact.attributes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.contact.attributes.$post> }) =>
        parseResponse(client.contact.attributes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostContactFlowsInstanceIdContactFlowIdContentKey() {
  return ['contact-flows', '/contact-flows/:InstanceId/:ContactFlowId/content', 'POST'] as const
}

export function usePostContactFlowsInstanceIdContactFlowIdContent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['content']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactFlowsInstanceIdContactFlowIdContentKey()
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
            (typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['content']['$post']
          >
        },
      ) =>
        parseResponse(
          client['contact-flows'][':InstanceId'][':ContactFlowId'].content.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostContactFlowsInstanceIdContactFlowIdMetadataKey() {
  return ['contact-flows', '/contact-flows/:InstanceId/:ContactFlowId/metadata', 'POST'] as const
}

export function usePostContactFlowsInstanceIdContactFlowIdMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['metadata']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactFlowsInstanceIdContactFlowIdMetadataKey()
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
            (typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['metadata']['$post']
          >
        },
      ) =>
        parseResponse(
          client['contact-flows'][':InstanceId'][':ContactFlowId'].metadata.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostContactFlowModulesInstanceIdContactFlowModuleIdContentKey() {
  return [
    'contact-flow-modules',
    '/contact-flow-modules/:InstanceId/:ContactFlowModuleId/content',
    'POST',
  ] as const
}

export function usePostContactFlowModulesInstanceIdContactFlowModuleIdContent<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId']['content']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactFlowModulesInstanceIdContactFlowModuleIdContentKey()
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
            (typeof client)['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId']['content']['$post']
          >
        },
      ) =>
        parseResponse(
          client['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId'].content.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostContactFlowModulesInstanceIdContactFlowModuleIdMetadataKey() {
  return [
    'contact-flow-modules',
    '/contact-flow-modules/:InstanceId/:ContactFlowModuleId/metadata',
    'POST',
  ] as const
}

export function usePostContactFlowModulesInstanceIdContactFlowModuleIdMetadata<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId']['metadata']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactFlowModulesInstanceIdContactFlowModuleIdMetadataKey()
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
            (typeof client)['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId']['metadata']['$post']
          >
        },
      ) =>
        parseResponse(
          client['contact-flow-modules'][':InstanceId'][':ContactFlowModuleId'].metadata.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostContactFlowsInstanceIdContactFlowIdNameKey() {
  return ['contact-flows', '/contact-flows/:InstanceId/:ContactFlowId/name', 'POST'] as const
}

export function usePostContactFlowsInstanceIdContactFlowIdName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['name']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactFlowsInstanceIdContactFlowIdNameKey()
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
            (typeof client)['contact-flows'][':InstanceId'][':ContactFlowId']['name']['$post']
          >
        },
      ) =>
        parseResponse(
          client['contact-flows'][':InstanceId'][':ContactFlowId'].name.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostContactScheduleKey() {
  return ['contact', '/contact/schedule', 'POST'] as const
}

export function usePostContactSchedule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contact.schedule.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.contact.schedule.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactScheduleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.contact.schedule.$post> }) =>
        parseResponse(client.contact.schedule.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutContactParticipantRoleConfigInstanceIdContactIdKey() {
  return ['contact', '/contact/participant-role-config/:InstanceId/:ContactId', 'PUT'] as const
}

export function usePutContactParticipantRoleConfigInstanceIdContactId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.contact)['participant-role-config'][':InstanceId'][':ContactId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutContactParticipantRoleConfigInstanceIdContactIdKey()
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
            (typeof client.contact)['participant-role-config'][':InstanceId'][':ContactId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.contact['participant-role-config'][':InstanceId'][':ContactId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostQueuesInstanceIdQueueIdHoursOfOperationKey() {
  return ['queues', '/queues/:InstanceId/:QueueId/hours-of-operation', 'POST'] as const
}

export function usePostQueuesInstanceIdQueueIdHoursOfOperation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.queues)[':InstanceId'][':QueueId']['hours-of-operation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQueuesInstanceIdQueueIdHoursOfOperationKey()
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
            (typeof client.queues)[':InstanceId'][':QueueId']['hours-of-operation']['$post']
          >
        },
      ) =>
        parseResponse(
          client.queues[':InstanceId'][':QueueId']['hours-of-operation'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostQueuesInstanceIdQueueIdMaxContactsKey() {
  return ['queues', '/queues/:InstanceId/:QueueId/max-contacts', 'POST'] as const
}

export function usePostQueuesInstanceIdQueueIdMaxContacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.queues)[':InstanceId'][':QueueId']['max-contacts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQueuesInstanceIdQueueIdMaxContactsKey()
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
            (typeof client.queues)[':InstanceId'][':QueueId']['max-contacts']['$post']
          >
        },
      ) =>
        parseResponse(
          client.queues[':InstanceId'][':QueueId']['max-contacts'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostQueuesInstanceIdQueueIdNameKey() {
  return ['queues', '/queues/:InstanceId/:QueueId/name', 'POST'] as const
}

export function usePostQueuesInstanceIdQueueIdName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.queues)[':InstanceId'][':QueueId']['name']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.queues)[':InstanceId'][':QueueId']['name']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQueuesInstanceIdQueueIdNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.queues)[':InstanceId'][':QueueId']['name']['$post']>
        },
      ) => parseResponse(client.queues[':InstanceId'][':QueueId'].name.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQueuesInstanceIdQueueIdOutboundCallerConfigKey() {
  return ['queues', '/queues/:InstanceId/:QueueId/outbound-caller-config', 'POST'] as const
}

export function usePostQueuesInstanceIdQueueIdOutboundCallerConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.queues)[':InstanceId'][':QueueId']['outbound-caller-config']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQueuesInstanceIdQueueIdOutboundCallerConfigKey()
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
            (typeof client.queues)[':InstanceId'][':QueueId']['outbound-caller-config']['$post']
          >
        },
      ) =>
        parseResponse(
          client.queues[':InstanceId'][':QueueId']['outbound-caller-config'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostQueuesInstanceIdQueueIdStatusKey() {
  return ['queues', '/queues/:InstanceId/:QueueId/status', 'POST'] as const
}

export function usePostQueuesInstanceIdQueueIdStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.queues)[':InstanceId'][':QueueId']['status']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.queues)[':InstanceId'][':QueueId']['status']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQueuesInstanceIdQueueIdStatusKey()
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
            (typeof client.queues)[':InstanceId'][':QueueId']['status']['$post']
          >
        },
      ) => parseResponse(client.queues[':InstanceId'][':QueueId'].status.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQuickConnectsInstanceIdQuickConnectIdConfigKey() {
  return ['quick-connects', '/quick-connects/:InstanceId/:QuickConnectId/config', 'POST'] as const
}

export function usePostQuickConnectsInstanceIdQuickConnectIdConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['quick-connects'][':InstanceId'][':QuickConnectId']['config']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuickConnectsInstanceIdQuickConnectIdConfigKey()
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
            (typeof client)['quick-connects'][':InstanceId'][':QuickConnectId']['config']['$post']
          >
        },
      ) =>
        parseResponse(
          client['quick-connects'][':InstanceId'][':QuickConnectId'].config.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostQuickConnectsInstanceIdQuickConnectIdNameKey() {
  return ['quick-connects', '/quick-connects/:InstanceId/:QuickConnectId/name', 'POST'] as const
}

export function usePostQuickConnectsInstanceIdQuickConnectIdName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['quick-connects'][':InstanceId'][':QuickConnectId']['name']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuickConnectsInstanceIdQuickConnectIdNameKey()
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
            (typeof client)['quick-connects'][':InstanceId'][':QuickConnectId']['name']['$post']
          >
        },
      ) =>
        parseResponse(
          client['quick-connects'][':InstanceId'][':QuickConnectId'].name.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRoutingProfilesInstanceIdRoutingProfileIdConcurrencyKey() {
  return [
    'routing-profiles',
    '/routing-profiles/:InstanceId/:RoutingProfileId/concurrency',
    'POST',
  ] as const
}

export function usePostRoutingProfilesInstanceIdRoutingProfileIdConcurrency<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['concurrency']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRoutingProfilesInstanceIdRoutingProfileIdConcurrencyKey()
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
            (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['concurrency']['$post']
          >
        },
      ) =>
        parseResponse(
          client['routing-profiles'][':InstanceId'][':RoutingProfileId'].concurrency.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRoutingProfilesInstanceIdRoutingProfileIdDefaultOutboundQueueKey() {
  return [
    'routing-profiles',
    '/routing-profiles/:InstanceId/:RoutingProfileId/default-outbound-queue',
    'POST',
  ] as const
}

export function usePostRoutingProfilesInstanceIdRoutingProfileIdDefaultOutboundQueue<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['default-outbound-queue']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostRoutingProfilesInstanceIdRoutingProfileIdDefaultOutboundQueueKey()
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
            (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['default-outbound-queue']['$post']
          >
        },
      ) =>
        parseResponse(
          client['routing-profiles'][':InstanceId'][':RoutingProfileId'][
            'default-outbound-queue'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRoutingProfilesInstanceIdRoutingProfileIdNameKey() {
  return [
    'routing-profiles',
    '/routing-profiles/:InstanceId/:RoutingProfileId/name',
    'POST',
  ] as const
}

export function usePostRoutingProfilesInstanceIdRoutingProfileIdName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['name']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRoutingProfilesInstanceIdRoutingProfileIdNameKey()
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
            (typeof client)['routing-profiles'][':InstanceId'][':RoutingProfileId']['name']['$post']
          >
        },
      ) =>
        parseResponse(
          client['routing-profiles'][':InstanceId'][':RoutingProfileId'].name.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostUsersInstanceIdUserIdHierarchyKey() {
  return ['users', '/users/:InstanceId/:UserId/hierarchy', 'POST'] as const
}

export function usePostUsersInstanceIdUserIdHierarchy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':InstanceId'][':UserId']['hierarchy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':InstanceId'][':UserId']['hierarchy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersInstanceIdUserIdHierarchyKey()
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
            (typeof client.users)[':InstanceId'][':UserId']['hierarchy']['$post']
          >
        },
      ) =>
        parseResponse(client.users[':InstanceId'][':UserId'].hierarchy.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserHierarchyGroupsInstanceIdHierarchyGroupIdNameKey() {
  return [
    'user-hierarchy-groups',
    '/user-hierarchy-groups/:InstanceId/:HierarchyGroupId/name',
    'POST',
  ] as const
}

export function usePostUserHierarchyGroupsInstanceIdHierarchyGroupIdName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['user-hierarchy-groups'][':InstanceId'][':HierarchyGroupId']['name']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserHierarchyGroupsInstanceIdHierarchyGroupIdNameKey()
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
            (typeof client)['user-hierarchy-groups'][':InstanceId'][':HierarchyGroupId']['name']['$post']
          >
        },
      ) =>
        parseResponse(
          client['user-hierarchy-groups'][':InstanceId'][':HierarchyGroupId'].name.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostUsersInstanceIdUserIdIdentityInfoKey() {
  return ['users', '/users/:InstanceId/:UserId/identity-info', 'POST'] as const
}

export function usePostUsersInstanceIdUserIdIdentityInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.users)[':InstanceId'][':UserId']['identity-info']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersInstanceIdUserIdIdentityInfoKey()
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
            (typeof client.users)[':InstanceId'][':UserId']['identity-info']['$post']
          >
        },
      ) =>
        parseResponse(
          client.users[':InstanceId'][':UserId']['identity-info'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostUsersInstanceIdUserIdPhoneConfigKey() {
  return ['users', '/users/:InstanceId/:UserId/phone-config', 'POST'] as const
}

export function usePostUsersInstanceIdUserIdPhoneConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.users)[':InstanceId'][':UserId']['phone-config']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersInstanceIdUserIdPhoneConfigKey()
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
            (typeof client.users)[':InstanceId'][':UserId']['phone-config']['$post']
          >
        },
      ) =>
        parseResponse(
          client.users[':InstanceId'][':UserId']['phone-config'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostUsersInstanceIdUserIdRoutingProfileKey() {
  return ['users', '/users/:InstanceId/:UserId/routing-profile', 'POST'] as const
}

export function usePostUsersInstanceIdUserIdRoutingProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.users)[':InstanceId'][':UserId']['routing-profile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersInstanceIdUserIdRoutingProfileKey()
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
            (typeof client.users)[':InstanceId'][':UserId']['routing-profile']['$post']
          >
        },
      ) =>
        parseResponse(
          client.users[':InstanceId'][':UserId']['routing-profile'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostUsersInstanceIdUserIdSecurityProfilesKey() {
  return ['users', '/users/:InstanceId/:UserId/security-profiles', 'POST'] as const
}

export function usePostUsersInstanceIdUserIdSecurityProfiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.users)[':InstanceId'][':UserId']['security-profiles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersInstanceIdUserIdSecurityProfilesKey()
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
            (typeof client.users)[':InstanceId'][':UserId']['security-profiles']['$post']
          >
        },
      ) =>
        parseResponse(
          client.users[':InstanceId'][':UserId']['security-profiles'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
