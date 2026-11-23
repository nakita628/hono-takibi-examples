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

export function getAiKey() {
  return ['ai'] as const
}

export function getAntiAffinityGroupKey() {
  return ['anti-affinity-group'] as const
}

export function getApiKeyKey() {
  return ['api-key'] as const
}

export function getBlockStorageKey() {
  return ['block-storage'] as const
}

export function getBlockStorageSnapshotKey() {
  return ['block-storage-snapshot'] as const
}

export function getConsoleKey() {
  return ['console'] as const
}

export function getDbaasCaCertificateKey() {
  return ['dbaas-ca-certificate'] as const
}

export function getDbaasClickhouseKey() {
  return ['dbaas-clickhouse'] as const
}

export function getDbaasExternalEndpointKey() {
  return ['dbaas-external-endpoint'] as const
}

export function getDbaasExternalEndpointDatadogKey() {
  return ['dbaas-external-endpoint-datadog'] as const
}

export function getDbaasExternalEndpointElasticsearchKey() {
  return ['dbaas-external-endpoint-elasticsearch'] as const
}

export function getDbaasExternalEndpointOpensearchKey() {
  return ['dbaas-external-endpoint-opensearch'] as const
}

export function getDbaasExternalEndpointPrometheusKey() {
  return ['dbaas-external-endpoint-prometheus'] as const
}

export function getDbaasExternalEndpointRsyslogKey() {
  return ['dbaas-external-endpoint-rsyslog'] as const
}

export function getDbaasExternalEndpointTypesKey() {
  return ['dbaas-external-endpoint-types'] as const
}

export function getDbaasExternalEndpointsKey() {
  return ['dbaas-external-endpoints'] as const
}

export function getDbaasExternalIntegrationKey() {
  return ['dbaas-external-integration'] as const
}

export function getDbaasExternalIntegrationSettingsDatadogKey() {
  return ['dbaas-external-integration-settings-datadog'] as const
}

export function getDbaasExternalIntegrationsKey() {
  return ['dbaas-external-integrations'] as const
}

export function getDbaasGrafanaKey() {
  return ['dbaas-grafana'] as const
}

export function getDbaasIntegrationKey() {
  return ['dbaas-integration'] as const
}

export function getDbaasIntegrationSettingsKey() {
  return ['dbaas-integration-settings'] as const
}

export function getDbaasIntegrationTypesKey() {
  return ['dbaas-integration-types'] as const
}

export function getDbaasKafkaKey() {
  return ['dbaas-kafka'] as const
}

export function getDbaasMigrationStatusKey() {
  return ['dbaas-migration-status'] as const
}

export function getDbaasMysqlKey() {
  return ['dbaas-mysql'] as const
}

export function getDbaasOpensearchKey() {
  return ['dbaas-opensearch'] as const
}

export function getDbaasPostgresKey() {
  return ['dbaas-postgres'] as const
}

export function getDbaasServiceKey() {
  return ['dbaas-service'] as const
}

export function getDbaasServiceLogsKey() {
  return ['dbaas-service-logs'] as const
}

export function getDbaasServiceMetricsKey() {
  return ['dbaas-service-metrics'] as const
}

export function getDbaasServiceTypeKey() {
  return ['dbaas-service-type'] as const
}

export function getDbaasSettingsClickhouseKey() {
  return ['dbaas-settings-clickhouse'] as const
}

export function getDbaasSettingsGrafanaKey() {
  return ['dbaas-settings-grafana'] as const
}

export function getDbaasSettingsKafkaKey() {
  return ['dbaas-settings-kafka'] as const
}

export function getDbaasSettingsMysqlKey() {
  return ['dbaas-settings-mysql'] as const
}

export function getDbaasSettingsOpensearchKey() {
  return ['dbaas-settings-opensearch'] as const
}

export function getDbaasSettingsPgKey() {
  return ['dbaas-settings-pg'] as const
}

export function getDbaasSettingsThanosKey() {
  return ['dbaas-settings-thanos'] as const
}

export function getDbaasSettingsValkeyKey() {
  return ['dbaas-settings-valkey'] as const
}

export function getDbaasTaskKey() {
  return ['dbaas-task'] as const
}

export function getDbaasTaskMigrationCheckKey() {
  return ['dbaas-task-migration-check'] as const
}

export function getDbaasThanosKey() {
  return ['dbaas-thanos'] as const
}

export function getDbaasValkeyKey() {
  return ['dbaas-valkey'] as const
}

export function getDeployTargetKey() {
  return ['deploy-target'] as const
}

export function getDnsDomainKey() {
  return ['dns-domain'] as const
}

export function getElasticIpKey() {
  return ['elastic-ip'] as const
}

export function getEnvImpactKey() {
  return ['env-impact'] as const
}

export function getEnvironmentalImpactKey() {
  return ['environmental-impact'] as const
}

export function getEventKey() {
  return ['event'] as const
}

export function getIamOrganizationPolicyKey() {
  return ['iam-organization-policy'] as const
}

export function getIamOrganizationPolicyResetKey() {
  return ['iam-organization-policy:reset'] as const
}

export function getIamRoleKey() {
  return ['iam-role'] as const
}

export function getInstanceKey() {
  return ['instance'] as const
}

export function getInstancePoolKey() {
  return ['instance-pool'] as const
}

export function getInstanceTypeKey() {
  return ['instance-type'] as const
}

export function getKmsKeyKey() {
  return ['kms-key'] as const
}

export function getLiveBalanceKey() {
  return ['live-balance'] as const
}

export function getLoadBalancerKey() {
  return ['load-balancer'] as const
}

export function getOperationKey() {
  return ['operation'] as const
}

export function getOrganizationKey() {
  return ['organization'] as const
}

export function getPrivateNetworkKey() {
  return ['private-network'] as const
}

export function getQuotaKey() {
  return ['quota'] as const
}

export function getReverseDnsKey() {
  return ['reverse-dns'] as const
}

export function getSecurityGroupKey() {
  return ['security-group'] as const
}

export function getSksClusterKey() {
  return ['sks-cluster'] as const
}

export function getSksClusterDeprecatedResourcesKey() {
  return ['sks-cluster-deprecated-resources'] as const
}

export function getSksClusterKubeconfigKey() {
  return ['sks-cluster-kubeconfig'] as const
}

export function getSksClusterVersionKey() {
  return ['sks-cluster-version'] as const
}

export function getSksTemplateKey() {
  return ['sks-template'] as const
}

export function getSnapshotKey() {
  return ['snapshot'] as const
}

export function getSosKey() {
  return ['sos'] as const
}

export function getSosBucketsUsageKey() {
  return ['sos-buckets-usage'] as const
}

export function getSshKeyKey() {
  return ['ssh-key'] as const
}

export function getTemplateKey() {
  return ['template'] as const
}

export function getUsageReportKey() {
  return ['usage-report'] as const
}

export function getUserKey() {
  return ['user'] as const
}

export function getVpcKey() {
  return ['vpc'] as const
}

export function getZoneKey() {
  return ['zone'] as const
}

export function getLoadBalancerIdServiceServiceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['load-balancer'][':id']['service'][':service-id']['$get']>
  >,
) {
  return ['load-balancer', '/load-balancer/:id/service/:service-id', toValue(args)] as const
}

export function getLoadBalancerIdServiceServiceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['load-balancer'][':id']['service'][':service-id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLoadBalancerIdServiceServiceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['load-balancer'][':id'].service[':service-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLoadBalancerIdServiceServiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['load-balancer'][':id']['service'][':service-id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['load-balancer'][':id']['service'][':service-id']['$get']>
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
                    (typeof client)['load-balancer'][':id']['service'][':service-id']['$get']
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
                    (typeof client)['load-balancer'][':id']['service'][':service-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLoadBalancerIdServiceServiceIdQueryKey>
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
            ReturnType<(typeof client)['load-balancer'][':id']['service'][':service-id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLoadBalancerIdServiceServiceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLoadBalancerIdServiceServiceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['load-balancer'][':id'].service[':service-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutLoadBalancerIdServiceServiceIdMutationKey() {
  return ['load-balancer', '/load-balancer/:id/service/:service-id', 'PUT'] as const
}

export function getPutLoadBalancerIdServiceServiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['load-balancer'][':id']['service'][':service-id']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['load-balancer'][':id']['service'][':service-id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLoadBalancerIdServiceServiceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['load-balancer'][':id']['service'][':service-id']['$put']
      >,
    ) {
      return parseResponse(
        client['load-balancer'][':id'].service[':service-id'].$put(args, options),
      )
    },
  })
}

export function usePutLoadBalancerIdServiceServiceId<
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
                    (typeof client)['load-balancer'][':id']['service'][':service-id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['load-balancer'][':id']['service'][':service-id']['$put']
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
  const mutationDefaults = getPutLoadBalancerIdServiceServiceIdMutationOptions<
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

export function getDeleteLoadBalancerIdServiceServiceIdMutationKey() {
  return ['load-balancer', '/load-balancer/:id/service/:service-id', 'DELETE'] as const
}

export function getDeleteLoadBalancerIdServiceServiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['load-balancer'][':id']['service'][':service-id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['load-balancer'][':id']['service'][':service-id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLoadBalancerIdServiceServiceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['load-balancer'][':id']['service'][':service-id']['$delete']
      >,
    ) {
      return parseResponse(
        client['load-balancer'][':id'].service[':service-id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteLoadBalancerIdServiceServiceId<
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
                    (typeof client)['load-balancer'][':id']['service'][':service-id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['load-balancer'][':id']['service'][':service-id']['$delete']
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
  const mutationDefaults = getDeleteLoadBalancerIdServiceServiceIdMutationOptions<
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

export function getDbaasExternalEndpointOpensearchEndpointIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-external-endpoint-opensearch'][':endpoint-id']['$get']>
  >,
) {
  return [
    'dbaas-external-endpoint-opensearch',
    '/dbaas-external-endpoint-opensearch/:endpoint-id',
    toValue(args),
  ] as const
}

export function getDbaasExternalEndpointOpensearchEndpointIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-external-endpoint-opensearch'][':endpoint-id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDbaasExternalEndpointOpensearchEndpointIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-external-endpoint-opensearch'][':endpoint-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDbaasExternalEndpointOpensearchEndpointId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['dbaas-external-endpoint-opensearch'][':endpoint-id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-external-endpoint-opensearch'][':endpoint-id']['$get']>
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
                    (typeof client)['dbaas-external-endpoint-opensearch'][':endpoint-id']['$get']
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
                    (typeof client)['dbaas-external-endpoint-opensearch'][':endpoint-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDbaasExternalEndpointOpensearchEndpointIdQueryKey>
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
              (typeof client)['dbaas-external-endpoint-opensearch'][':endpoint-id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasExternalEndpointOpensearchEndpointIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDbaasExternalEndpointOpensearchEndpointIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-external-endpoint-opensearch'][':endpoint-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDbaasExternalEndpointOpensearchEndpointIdMutationKey() {
  return [
    'dbaas-external-endpoint-opensearch',
    '/dbaas-external-endpoint-opensearch/:endpoint-id',
    'PUT',
  ] as const
}

export function getPutDbaasExternalEndpointOpensearchEndpointIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['dbaas-external-endpoint-opensearch'][':endpoint-id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-external-endpoint-opensearch'][':endpoint-id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDbaasExternalEndpointOpensearchEndpointIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-external-endpoint-opensearch'][':endpoint-id']['$put']
      >,
    ) {
      return parseResponse(
        client['dbaas-external-endpoint-opensearch'][':endpoint-id'].$put(args, options),
      )
    },
  })
}

export function usePutDbaasExternalEndpointOpensearchEndpointId<
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
                    (typeof client)['dbaas-external-endpoint-opensearch'][':endpoint-id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-external-endpoint-opensearch'][':endpoint-id']['$put']
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
  const mutationDefaults = getPutDbaasExternalEndpointOpensearchEndpointIdMutationOptions<
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

export function getDeleteDbaasExternalEndpointOpensearchEndpointIdMutationKey() {
  return [
    'dbaas-external-endpoint-opensearch',
    '/dbaas-external-endpoint-opensearch/:endpoint-id',
    'DELETE',
  ] as const
}

export function getDeleteDbaasExternalEndpointOpensearchEndpointIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['dbaas-external-endpoint-opensearch'][':endpoint-id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['dbaas-external-endpoint-opensearch'][':endpoint-id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteDbaasExternalEndpointOpensearchEndpointIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-external-endpoint-opensearch'][':endpoint-id']['$delete']
      >,
    ) {
      return parseResponse(
        client['dbaas-external-endpoint-opensearch'][':endpoint-id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteDbaasExternalEndpointOpensearchEndpointId<
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
                    (typeof client)['dbaas-external-endpoint-opensearch'][':endpoint-id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-external-endpoint-opensearch'][':endpoint-id']['$delete']
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
  const mutationDefaults = getDeleteDbaasExternalEndpointOpensearchEndpointIdMutationOptions<
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

export function getDbaasOpensearchNameAclConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-opensearch'][':name']['acl-config']['$get']>
  >,
) {
  return ['dbaas-opensearch', '/dbaas-opensearch/:name/acl-config', toValue(args)] as const
}

export function getDbaasOpensearchNameAclConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-opensearch'][':name']['acl-config']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDbaasOpensearchNameAclConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-opensearch'][':name']['acl-config'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDbaasOpensearchNameAclConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['dbaas-opensearch'][':name']['acl-config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-opensearch'][':name']['acl-config']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['dbaas-opensearch'][':name']['acl-config']['$get']>
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
                  ReturnType<(typeof client)['dbaas-opensearch'][':name']['acl-config']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDbaasOpensearchNameAclConfigQueryKey>
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
          Awaited<ReturnType<(typeof client)['dbaas-opensearch'][':name']['acl-config']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasOpensearchNameAclConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDbaasOpensearchNameAclConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-opensearch'][':name']['acl-config'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDbaasOpensearchNameAclConfigMutationKey() {
  return ['dbaas-opensearch', '/dbaas-opensearch/:name/acl-config', 'PUT'] as const
}

export function getPutDbaasOpensearchNameAclConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-opensearch'][':name']['acl-config']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-opensearch'][':name']['acl-config']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDbaasOpensearchNameAclConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['dbaas-opensearch'][':name']['acl-config']['$put']>,
    ) {
      return parseResponse(client['dbaas-opensearch'][':name']['acl-config'].$put(args, options))
    },
  })
}

export function usePutDbaasOpensearchNameAclConfig<
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
                  ReturnType<(typeof client)['dbaas-opensearch'][':name']['acl-config']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-opensearch'][':name']['acl-config']['$put']>,
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
  const mutationDefaults = getPutDbaasOpensearchNameAclConfigMutationOptions<
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

export function getPutInstancePoolIdScaleMutationKey() {
  return ['instance-pool', '/instance-pool/:id:scale', 'PUT'] as const
}

export function getPutInstancePoolIdScaleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['instance-pool'][':id:scale']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['instance-pool'][':id:scale']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutInstancePoolIdScaleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['instance-pool'][':id:scale']['$put']>,
    ) {
      return parseResponse(client['instance-pool'][':id:scale'].$put(args, options))
    },
  })
}

export function usePutInstancePoolIdScale<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['instance-pool'][':id:scale']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['instance-pool'][':id:scale']['$put']>,
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
  const mutationDefaults = getPutInstancePoolIdScaleMutationOptions<TError, TOnMutateResult>(
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

export function getPostInstanceIdCreateSnapshotMutationKey() {
  return ['instance', '/instance/:id:create-snapshot', 'POST'] as const
}

export function getPostInstanceIdCreateSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instance)[':id:create-snapshot']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.instance)[':id:create-snapshot']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInstanceIdCreateSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.instance)[':id:create-snapshot']['$post']>,
    ) {
      return parseResponse(client.instance[':id:create-snapshot'].$post(args, options))
    },
  })
}

export function usePostInstanceIdCreateSnapshot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instance)[':id:create-snapshot']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.instance)[':id:create-snapshot']['$post']>,
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
  const mutationDefaults = getPostInstanceIdCreateSnapshotMutationOptions<TError, TOnMutateResult>(
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

export function getPostDbaasValkeyNameMigrationStopMutationKey() {
  return ['dbaas-valkey', '/dbaas-valkey/:name/migration/stop', 'POST'] as const
}

export function getPostDbaasValkeyNameMigrationStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['dbaas-valkey'][':name']['migration']['stop']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-valkey'][':name']['migration']['stop']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDbaasValkeyNameMigrationStopMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-valkey'][':name']['migration']['stop']['$post']
      >,
    ) {
      return parseResponse(client['dbaas-valkey'][':name'].migration.stop.$post(args, options))
    },
  })
}

export function usePostDbaasValkeyNameMigrationStop<
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
                  ReturnType<(typeof client)['dbaas-valkey'][':name']['migration']['stop']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-valkey'][':name']['migration']['stop']['$post']>,
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
  const mutationDefaults = getPostDbaasValkeyNameMigrationStopMutationOptions<
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

export function getReverseDnsElasticIpIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['reverse-dns']['elastic-ip'][':id']['$get']>
  >,
) {
  return ['reverse-dns', '/reverse-dns/elastic-ip/:id', toValue(args)] as const
}

export function getReverseDnsElasticIpIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['reverse-dns']['elastic-ip'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReverseDnsElasticIpIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['reverse-dns']['elastic-ip'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReverseDnsElasticIpId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['reverse-dns']['elastic-ip'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['reverse-dns']['elastic-ip'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['reverse-dns']['elastic-ip'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['reverse-dns']['elastic-ip'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReverseDnsElasticIpIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['reverse-dns']['elastic-ip'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReverseDnsElasticIpIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReverseDnsElasticIpIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['reverse-dns']['elastic-ip'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostReverseDnsElasticIpIdMutationKey() {
  return ['reverse-dns', '/reverse-dns/elastic-ip/:id', 'POST'] as const
}

export function getPostReverseDnsElasticIpIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['reverse-dns']['elastic-ip'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['reverse-dns']['elastic-ip'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostReverseDnsElasticIpIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['reverse-dns']['elastic-ip'][':id']['$post']>,
    ) {
      return parseResponse(client['reverse-dns']['elastic-ip'][':id'].$post(args, options))
    },
  })
}

export function usePostReverseDnsElasticIpId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['reverse-dns']['elastic-ip'][':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['reverse-dns']['elastic-ip'][':id']['$post']>,
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
  const mutationDefaults = getPostReverseDnsElasticIpIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteReverseDnsElasticIpIdMutationKey() {
  return ['reverse-dns', '/reverse-dns/elastic-ip/:id', 'DELETE'] as const
}

export function getDeleteReverseDnsElasticIpIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['reverse-dns']['elastic-ip'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['reverse-dns']['elastic-ip'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteReverseDnsElasticIpIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['reverse-dns']['elastic-ip'][':id']['$delete']>,
    ) {
      return parseResponse(client['reverse-dns']['elastic-ip'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteReverseDnsElasticIpId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['reverse-dns']['elastic-ip'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['reverse-dns']['elastic-ip'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteReverseDnsElasticIpIdMutationOptions<TError, TOnMutateResult>(
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

export function getAntiAffinityGroupQueryKey() {
  return ['anti-affinity-group', '/anti-affinity-group'] as const
}

export function getAntiAffinityGroupQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAntiAffinityGroupQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['anti-affinity-group'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAntiAffinityGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['anti-affinity-group']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['anti-affinity-group']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['anti-affinity-group']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAntiAffinityGroupQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['anti-affinity-group']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAntiAffinityGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAntiAffinityGroupQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['anti-affinity-group'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAntiAffinityGroupMutationKey() {
  return ['anti-affinity-group', '/anti-affinity-group', 'POST'] as const
}

export function getPostAntiAffinityGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['anti-affinity-group']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['anti-affinity-group']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAntiAffinityGroupMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['anti-affinity-group']['$post']>) {
      return parseResponse(client['anti-affinity-group'].$post(args, options))
    },
  })
}

export function usePostAntiAffinityGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['anti-affinity-group']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['anti-affinity-group']['$post']>,
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
  const mutationDefaults = getPostAntiAffinityGroupMutationOptions<TError, TOnMutateResult>(
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

export function getUsageReportQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['usage-report']['$get']>>,
) {
  return ['usage-report', '/usage-report', toValue(args)] as const
}

export function getUsageReportQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['usage-report']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsageReportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['usage-report'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsageReport<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['usage-report']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['usage-report']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['usage-report']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['usage-report']['$get']>>>
            >
          >,
          ReturnType<typeof getUsageReportQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['usage-report']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsageReportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsageReportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['usage-report'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.event.$get>>,
) {
  return ['event', '/event', toValue(args)] as const
}

export function getEventQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.event.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.event.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEvent<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.event.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event.$get>>>>>,
          ReturnType<typeof getEventQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.event.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSecurityGroupIdRulesRuleIdMutationKey() {
  return ['security-group', '/security-group/:id/rules/:rule-id', 'DELETE'] as const
}

export function getDeleteSecurityGroupIdRulesRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['security-group'][':id']['rules'][':rule-id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['security-group'][':id']['rules'][':rule-id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSecurityGroupIdRulesRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['security-group'][':id']['rules'][':rule-id']['$delete']
      >,
    ) {
      return parseResponse(client['security-group'][':id'].rules[':rule-id'].$delete(args, options))
    },
  })
}

export function useDeleteSecurityGroupIdRulesRuleId<
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
                    (typeof client)['security-group'][':id']['rules'][':rule-id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['security-group'][':id']['rules'][':rule-id']['$delete']
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
  const mutationDefaults = getDeleteSecurityGroupIdRulesRuleIdMutationOptions<
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

export function getPutDbaasGrafanaNameMaintenanceStartMutationKey() {
  return ['dbaas-grafana', '/dbaas-grafana/:name/maintenance/start', 'PUT'] as const
}

export function getPutDbaasGrafanaNameMaintenanceStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['dbaas-grafana'][':name']['maintenance']['start']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-grafana'][':name']['maintenance']['start']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDbaasGrafanaNameMaintenanceStartMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-grafana'][':name']['maintenance']['start']['$put']
      >,
    ) {
      return parseResponse(client['dbaas-grafana'][':name'].maintenance.start.$put(args, options))
    },
  })
}

export function usePutDbaasGrafanaNameMaintenanceStart<
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
                    (typeof client)['dbaas-grafana'][':name']['maintenance']['start']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-grafana'][':name']['maintenance']['start']['$put']
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
  const mutationDefaults = getPutDbaasGrafanaNameMaintenanceStartMutationOptions<
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

export function getPostKmsKeyIdDisableKeyRotationMutationKey() {
  return ['kms-key', '/kms-key/:id/disable-key-rotation', 'POST'] as const
}

export function getPostKmsKeyIdDisableKeyRotationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['kms-key'][':id']['disable-key-rotation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['kms-key'][':id']['disable-key-rotation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKmsKeyIdDisableKeyRotationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['kms-key'][':id']['disable-key-rotation']['$post']>,
    ) {
      return parseResponse(client['kms-key'][':id']['disable-key-rotation'].$post(args, options))
    },
  })
}

export function usePostKmsKeyIdDisableKeyRotation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['kms-key'][':id']['disable-key-rotation']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['kms-key'][':id']['disable-key-rotation']['$post']>,
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
  const mutationDefaults = getPostKmsKeyIdDisableKeyRotationMutationOptions<
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

export function getPostDbaasPostgresServiceUpgradeCheckMutationKey() {
  return ['dbaas-postgres', '/dbaas-postgres/:service/upgrade-check', 'POST'] as const
}

export function getPostDbaasPostgresServiceUpgradeCheckMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['dbaas-postgres'][':service']['upgrade-check']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-postgres'][':service']['upgrade-check']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDbaasPostgresServiceUpgradeCheckMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-postgres'][':service']['upgrade-check']['$post']
      >,
    ) {
      return parseResponse(
        client['dbaas-postgres'][':service']['upgrade-check'].$post(args, options),
      )
    },
  })
}

export function usePostDbaasPostgresServiceUpgradeCheck<
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
                    (typeof client)['dbaas-postgres'][':service']['upgrade-check']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-postgres'][':service']['upgrade-check']['$post']>,
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
  const mutationDefaults = getPostDbaasPostgresServiceUpgradeCheckMutationOptions<
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

export function getPutDbaasMysqlServiceNameUserUsernamePasswordResetMutationKey() {
  return ['dbaas-mysql', '/dbaas-mysql/:service-name/user/:username/password/reset', 'PUT'] as const
}

export function getPutDbaasMysqlServiceNameUserUsernamePasswordResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['dbaas-mysql'][':service-name']['user'][':username']['password']['reset']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['dbaas-mysql'][':service-name']['user'][':username']['password']['reset']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutDbaasMysqlServiceNameUserUsernamePasswordResetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-mysql'][':service-name']['user'][':username']['password']['reset']['$put']
      >,
    ) {
      return parseResponse(
        client['dbaas-mysql'][':service-name'].user[':username'].password.reset.$put(args, options),
      )
    },
  })
}

export function usePutDbaasMysqlServiceNameUserUsernamePasswordReset<
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
                    (typeof client)['dbaas-mysql'][':service-name']['user'][':username']['password']['reset']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-mysql'][':service-name']['user'][':username']['password']['reset']['$put']
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
  const mutationDefaults = getPutDbaasMysqlServiceNameUserUsernamePasswordResetMutationOptions<
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

export function getAiHelpInferenceEngineParametersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ai.help)['inference-engine-parameters']['$get']>
  >,
) {
  return ['ai', '/ai/help/inference-engine-parameters', toValue(args)] as const
}

export function getAiHelpInferenceEngineParametersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ai.help)['inference-engine-parameters']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAiHelpInferenceEngineParametersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ai.help['inference-engine-parameters'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAiHelpInferenceEngineParameters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ai.help)['inference-engine-parameters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ai.help)['inference-engine-parameters']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ai.help)['inference-engine-parameters']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ai.help)['inference-engine-parameters']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAiHelpInferenceEngineParametersQueryKey>
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
          Awaited<ReturnType<(typeof client.ai.help)['inference-engine-parameters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAiHelpInferenceEngineParametersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAiHelpInferenceEngineParametersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ai.help['inference-engine-parameters'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLoadBalancerQueryKey() {
  return ['load-balancer', '/load-balancer'] as const
}

export function getLoadBalancerQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLoadBalancerQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['load-balancer'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLoadBalancer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['load-balancer']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['load-balancer']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['load-balancer']['$get']>>>
            >
          >,
          ReturnType<typeof getLoadBalancerQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['load-balancer']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLoadBalancerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLoadBalancerQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['load-balancer'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLoadBalancerMutationKey() {
  return ['load-balancer', '/load-balancer', 'POST'] as const
}

export function getPostLoadBalancerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['load-balancer']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['load-balancer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLoadBalancerMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['load-balancer']['$post']>) {
      return parseResponse(client['load-balancer'].$post(args, options))
    },
  })
}

export function usePostLoadBalancer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['load-balancer']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['load-balancer']['$post']>,
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
  const mutationDefaults = getPostLoadBalancerMutationOptions<TError, TOnMutateResult>(
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

export function getSecurityGroupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['security-group']['$get']>>,
) {
  return ['security-group', '/security-group', toValue(args)] as const
}

export function getSecurityGroupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['security-group']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSecurityGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['security-group'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSecurityGroup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['security-group']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['security-group']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['security-group']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['security-group']['$get']>>>
            >
          >,
          ReturnType<typeof getSecurityGroupQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['security-group']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSecurityGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSecurityGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['security-group'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSecurityGroupMutationKey() {
  return ['security-group', '/security-group', 'POST'] as const
}

export function getPostSecurityGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['security-group']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['security-group']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSecurityGroupMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['security-group']['$post']>) {
      return parseResponse(client['security-group'].$post(args, options))
    },
  })
}

export function usePostSecurityGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['security-group']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['security-group']['$post']>,
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
  const mutationDefaults = getPostSecurityGroupMutationOptions<TError, TOnMutateResult>(
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

export function getPostDbaasPostgresServiceNameConnectionPoolMutationKey() {
  return ['dbaas-postgres', '/dbaas-postgres/:service-name/connection-pool', 'POST'] as const
}

export function getPostDbaasPostgresServiceNameConnectionPoolMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['dbaas-postgres'][':service-name']['connection-pool']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['dbaas-postgres'][':service-name']['connection-pool']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDbaasPostgresServiceNameConnectionPoolMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-postgres'][':service-name']['connection-pool']['$post']
      >,
    ) {
      return parseResponse(
        client['dbaas-postgres'][':service-name']['connection-pool'].$post(args, options),
      )
    },
  })
}

export function usePostDbaasPostgresServiceNameConnectionPool<
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
                    (typeof client)['dbaas-postgres'][':service-name']['connection-pool']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-postgres'][':service-name']['connection-pool']['$post']
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
  const mutationDefaults = getPostDbaasPostgresServiceNameConnectionPoolMutationOptions<
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

export function getDbaasMysqlNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dbaas-mysql'][':name']['$get']>>,
) {
  return ['dbaas-mysql', '/dbaas-mysql/:name', toValue(args)] as const
}

export function getDbaasMysqlNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dbaas-mysql'][':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDbaasMysqlNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-mysql'][':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDbaasMysqlName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-mysql'][':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dbaas-mysql'][':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-mysql'][':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-mysql'][':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDbaasMysqlNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-mysql'][':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasMysqlNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDbaasMysqlNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-mysql'][':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDbaasMysqlNameMutationKey() {
  return ['dbaas-mysql', '/dbaas-mysql/:name', 'PUT'] as const
}

export function getPutDbaasMysqlNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-mysql'][':name']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-mysql'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDbaasMysqlNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['dbaas-mysql'][':name']['$put']>) {
      return parseResponse(client['dbaas-mysql'][':name'].$put(args, options))
    },
  })
}

export function usePutDbaasMysqlName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-mysql'][':name']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-mysql'][':name']['$put']>,
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
  const mutationDefaults = getPutDbaasMysqlNameMutationOptions<TError, TOnMutateResult>(
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

export function getPostDbaasMysqlNameMutationKey() {
  return ['dbaas-mysql', '/dbaas-mysql/:name', 'POST'] as const
}

export function getPostDbaasMysqlNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-mysql'][':name']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-mysql'][':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDbaasMysqlNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['dbaas-mysql'][':name']['$post']>) {
      return parseResponse(client['dbaas-mysql'][':name'].$post(args, options))
    },
  })
}

export function usePostDbaasMysqlName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-mysql'][':name']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-mysql'][':name']['$post']>,
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
  const mutationDefaults = getPostDbaasMysqlNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteDbaasMysqlNameMutationKey() {
  return ['dbaas-mysql', '/dbaas-mysql/:name', 'DELETE'] as const
}

export function getDeleteDbaasMysqlNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-mysql'][':name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-mysql'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDbaasMysqlNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['dbaas-mysql'][':name']['$delete']>) {
      return parseResponse(client['dbaas-mysql'][':name'].$delete(args, options))
    },
  })
}

export function useDeleteDbaasMysqlName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-mysql'][':name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-mysql'][':name']['$delete']>,
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
  const mutationDefaults = getDeleteDbaasMysqlNameMutationOptions<TError, TOnMutateResult>(
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

export function getPutPrivateNetworkIdAttachMutationKey() {
  return ['private-network', '/private-network/:id:attach', 'PUT'] as const
}

export function getPutPrivateNetworkIdAttachMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['private-network'][':id:attach']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['private-network'][':id:attach']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPrivateNetworkIdAttachMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['private-network'][':id:attach']['$put']>,
    ) {
      return parseResponse(client['private-network'][':id:attach'].$put(args, options))
    },
  })
}

export function usePutPrivateNetworkIdAttach<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['private-network'][':id:attach']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['private-network'][':id:attach']['$put']>,
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
  const mutationDefaults = getPutPrivateNetworkIdAttachMutationOptions<TError, TOnMutateResult>(
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

export function getPostIamRoleIdAssumeMutationKey() {
  return ['iam-role', '/iam-role/:id/assume', 'POST'] as const
}

export function getPostIamRoleIdAssumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['iam-role'][':id']['assume']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['iam-role'][':id']['assume']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIamRoleIdAssumeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['iam-role'][':id']['assume']['$post']>,
    ) {
      return parseResponse(client['iam-role'][':id'].assume.$post(args, options))
    },
  })
}

export function usePostIamRoleIdAssume<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['iam-role'][':id']['assume']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['iam-role'][':id']['assume']['$post']>,
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
  const mutationDefaults = getPostIamRoleIdAssumeMutationOptions<TError, TOnMutateResult>(
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

export function getPutVpcVpcIdSubnetSubnetIdAttachMutationKey() {
  return ['vpc', '/vpc/:vpc-id/subnet/:subnet-id/attach', 'PUT'] as const
}

export function getPutVpcVpcIdSubnetSubnetIdAttachMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['attach']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['attach']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVpcVpcIdSubnetSubnetIdAttachMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['attach']['$put']
      >,
    ) {
      return parseResponse(client.vpc[':vpc-id'].subnet[':subnet-id'].attach.$put(args, options))
    },
  })
}

export function usePutVpcVpcIdSubnetSubnetIdAttach<
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
                    (typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['attach']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['attach']['$put']
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
  const mutationDefaults = getPutVpcVpcIdSubnetSubnetIdAttachMutationOptions<
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

export function getKmsKeyIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['kms-key'][':id']['$get']>>,
) {
  return ['kms-key', '/kms-key/:id', toValue(args)] as const
}

export function getKmsKeyIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['kms-key'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKmsKeyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['kms-key'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKmsKeyId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['kms-key'][':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['kms-key'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['kms-key'][':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['kms-key'][':id']['$get']>>>
            >
          >,
          ReturnType<typeof getKmsKeyIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['kms-key'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKmsKeyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKmsKeyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['kms-key'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDbaasThanosNameMaintenanceStartMutationKey() {
  return ['dbaas-thanos', '/dbaas-thanos/:name/maintenance/start', 'PUT'] as const
}

export function getPutDbaasThanosNameMaintenanceStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['dbaas-thanos'][':name']['maintenance']['start']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-thanos'][':name']['maintenance']['start']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDbaasThanosNameMaintenanceStartMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-thanos'][':name']['maintenance']['start']['$put']
      >,
    ) {
      return parseResponse(client['dbaas-thanos'][':name'].maintenance.start.$put(args, options))
    },
  })
}

export function usePutDbaasThanosNameMaintenanceStart<
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
                    (typeof client)['dbaas-thanos'][':name']['maintenance']['start']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-thanos'][':name']['maintenance']['start']['$put']
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
  const mutationDefaults = getPutDbaasThanosNameMaintenanceStartMutationOptions<
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

export function getDbaasExternalEndpointElasticsearchEndpointIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['dbaas-external-endpoint-elasticsearch'][':endpoint-id']['$get']
    >
  >,
) {
  return [
    'dbaas-external-endpoint-elasticsearch',
    '/dbaas-external-endpoint-elasticsearch/:endpoint-id',
    toValue(args),
  ] as const
}

export function getDbaasExternalEndpointElasticsearchEndpointIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['dbaas-external-endpoint-elasticsearch'][':endpoint-id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDbaasExternalEndpointElasticsearchEndpointIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-external-endpoint-elasticsearch'][':endpoint-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDbaasExternalEndpointElasticsearchEndpointId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['dbaas-external-endpoint-elasticsearch'][':endpoint-id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['dbaas-external-endpoint-elasticsearch'][':endpoint-id']['$get']
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
                    (typeof client)['dbaas-external-endpoint-elasticsearch'][':endpoint-id']['$get']
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
                    (typeof client)['dbaas-external-endpoint-elasticsearch'][':endpoint-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDbaasExternalEndpointElasticsearchEndpointIdQueryKey>
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
              (typeof client)['dbaas-external-endpoint-elasticsearch'][':endpoint-id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasExternalEndpointElasticsearchEndpointIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDbaasExternalEndpointElasticsearchEndpointIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-external-endpoint-elasticsearch'][':endpoint-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDbaasExternalEndpointElasticsearchEndpointIdMutationKey() {
  return [
    'dbaas-external-endpoint-elasticsearch',
    '/dbaas-external-endpoint-elasticsearch/:endpoint-id',
    'PUT',
  ] as const
}

export function getPutDbaasExternalEndpointElasticsearchEndpointIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['dbaas-external-endpoint-elasticsearch'][':endpoint-id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['dbaas-external-endpoint-elasticsearch'][':endpoint-id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutDbaasExternalEndpointElasticsearchEndpointIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-external-endpoint-elasticsearch'][':endpoint-id']['$put']
      >,
    ) {
      return parseResponse(
        client['dbaas-external-endpoint-elasticsearch'][':endpoint-id'].$put(args, options),
      )
    },
  })
}

export function usePutDbaasExternalEndpointElasticsearchEndpointId<
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
                    (typeof client)['dbaas-external-endpoint-elasticsearch'][':endpoint-id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-external-endpoint-elasticsearch'][':endpoint-id']['$put']
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
  const mutationDefaults = getPutDbaasExternalEndpointElasticsearchEndpointIdMutationOptions<
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

export function getDeleteDbaasExternalEndpointElasticsearchEndpointIdMutationKey() {
  return [
    'dbaas-external-endpoint-elasticsearch',
    '/dbaas-external-endpoint-elasticsearch/:endpoint-id',
    'DELETE',
  ] as const
}

export function getDeleteDbaasExternalEndpointElasticsearchEndpointIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['dbaas-external-endpoint-elasticsearch'][':endpoint-id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['dbaas-external-endpoint-elasticsearch'][':endpoint-id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteDbaasExternalEndpointElasticsearchEndpointIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-external-endpoint-elasticsearch'][':endpoint-id']['$delete']
      >,
    ) {
      return parseResponse(
        client['dbaas-external-endpoint-elasticsearch'][':endpoint-id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteDbaasExternalEndpointElasticsearchEndpointId<
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
                    (typeof client)['dbaas-external-endpoint-elasticsearch'][':endpoint-id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-external-endpoint-elasticsearch'][':endpoint-id']['$delete']
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
  const mutationDefaults = getDeleteDbaasExternalEndpointElasticsearchEndpointIdMutationOptions<
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

export function getAiModelQueryKey() {
  return ['ai', '/ai/model'] as const
}

export function getAiModelQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAiModelQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ai.model.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAiModel<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.model.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.model.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.model.$get>>>>
          >,
          ReturnType<typeof getAiModelQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.model.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAiModelQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAiModelQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.ai.model.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAiModelMutationKey() {
  return ['ai', '/ai/model', 'POST'] as const
}

export function getPostAiModelMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.model.$post>>>>>,
    TError,
    InferRequestType<typeof client.ai.model.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAiModelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ai.model.$post>) {
      return parseResponse(client.ai.model.$post(args, options))
    },
  })
}

export function usePostAiModel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.model.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.ai.model.$post>,
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
  const mutationDefaults = getPostAiModelMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDbaasMysqlServiceNameUserMutationKey() {
  return ['dbaas-mysql', '/dbaas-mysql/:service-name/user', 'POST'] as const
}

export function getPostDbaasMysqlServiceNameUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-mysql'][':service-name']['user']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-mysql'][':service-name']['user']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDbaasMysqlServiceNameUserMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['dbaas-mysql'][':service-name']['user']['$post']>,
    ) {
      return parseResponse(client['dbaas-mysql'][':service-name'].user.$post(args, options))
    },
  })
}

export function usePostDbaasMysqlServiceNameUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['dbaas-mysql'][':service-name']['user']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-mysql'][':service-name']['user']['$post']>,
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
  const mutationDefaults = getPostDbaasMysqlServiceNameUserMutationOptions<TError, TOnMutateResult>(
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

export function getDbaasServiceTypeQueryKey() {
  return ['dbaas-service-type', '/dbaas-service-type'] as const
}

export function getDbaasServiceTypeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDbaasServiceTypeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-service-type'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDbaasServiceType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-service-type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-service-type']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-service-type']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDbaasServiceTypeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-service-type']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasServiceTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDbaasServiceTypeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-service-type'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAiDeploymentIdScaleMutationKey() {
  return ['ai', '/ai/deployment/:id/scale', 'POST'] as const
}

export function getPostAiDeploymentIdScaleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ai.deployment)[':id']['scale']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ai.deployment)[':id']['scale']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAiDeploymentIdScaleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ai.deployment)[':id']['scale']['$post']>,
    ) {
      return parseResponse(client.ai.deployment[':id'].scale.$post(args, options))
    },
  })
}

export function usePostAiDeploymentIdScale<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ai.deployment)[':id']['scale']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ai.deployment)[':id']['scale']['$post']>,
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
  const mutationDefaults = getPostAiDeploymentIdScaleMutationOptions<TError, TOnMutateResult>(
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

export function getInstanceTypeIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['instance-type'][':id']['$get']>>,
) {
  return ['instance-type', '/instance-type/:id', toValue(args)] as const
}

export function getInstanceTypeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['instance-type'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstanceTypeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['instance-type'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstanceTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['instance-type'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['instance-type'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['instance-type'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['instance-type'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInstanceTypeIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['instance-type'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstanceTypeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstanceTypeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['instance-type'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDbaasClickhouseNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dbaas-clickhouse'][':name']['$get']>>,
) {
  return ['dbaas-clickhouse', '/dbaas-clickhouse/:name', toValue(args)] as const
}

export function getDbaasClickhouseNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dbaas-clickhouse'][':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDbaasClickhouseNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-clickhouse'][':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDbaasClickhouseName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['dbaas-clickhouse'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dbaas-clickhouse'][':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-clickhouse'][':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-clickhouse'][':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDbaasClickhouseNameQueryKey>
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
          Awaited<ReturnType<(typeof client)['dbaas-clickhouse'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasClickhouseNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDbaasClickhouseNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-clickhouse'][':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDbaasClickhouseNameMutationKey() {
  return ['dbaas-clickhouse', '/dbaas-clickhouse/:name', 'PUT'] as const
}

export function getPutDbaasClickhouseNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-clickhouse'][':name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-clickhouse'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDbaasClickhouseNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['dbaas-clickhouse'][':name']['$put']>) {
      return parseResponse(client['dbaas-clickhouse'][':name'].$put(args, options))
    },
  })
}

export function usePutDbaasClickhouseName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-clickhouse'][':name']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-clickhouse'][':name']['$put']>,
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
  const mutationDefaults = getPutDbaasClickhouseNameMutationOptions<TError, TOnMutateResult>(
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

export function getPostDbaasClickhouseNameMutationKey() {
  return ['dbaas-clickhouse', '/dbaas-clickhouse/:name', 'POST'] as const
}

export function getPostDbaasClickhouseNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-clickhouse'][':name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-clickhouse'][':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDbaasClickhouseNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['dbaas-clickhouse'][':name']['$post']>,
    ) {
      return parseResponse(client['dbaas-clickhouse'][':name'].$post(args, options))
    },
  })
}

export function usePostDbaasClickhouseName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-clickhouse'][':name']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-clickhouse'][':name']['$post']>,
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
  const mutationDefaults = getPostDbaasClickhouseNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteDbaasClickhouseNameMutationKey() {
  return ['dbaas-clickhouse', '/dbaas-clickhouse/:name', 'DELETE'] as const
}

export function getDeleteDbaasClickhouseNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-clickhouse'][':name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-clickhouse'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDbaasClickhouseNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['dbaas-clickhouse'][':name']['$delete']>,
    ) {
      return parseResponse(client['dbaas-clickhouse'][':name'].$delete(args, options))
    },
  })
}

export function useDeleteDbaasClickhouseName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-clickhouse'][':name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-clickhouse'][':name']['$delete']>,
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
  const mutationDefaults = getDeleteDbaasClickhouseNameMutationOptions<TError, TOnMutateResult>(
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

export function getInstanceIdPasswordQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instance)[':id:password']['$get']>>,
) {
  return ['instance', '/instance/:id:password', toValue(args)] as const
}

export function getInstanceIdPasswordQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instance)[':id:password']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstanceIdPasswordQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instance[':id:password'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstanceIdPassword<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instance)[':id:password']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instance)[':id:password']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instance)[':id:password']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instance)[':id:password']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInstanceIdPasswordQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.instance)[':id:password']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstanceIdPasswordQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstanceIdPasswordQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instance[':id:password'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSksTemplateKubeVersionVariantQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['sks-template'][':kube-version'][':variant']['$get']>
  >,
) {
  return ['sks-template', '/sks-template/:kube-version/:variant', toValue(args)] as const
}

export function getSksTemplateKubeVersionVariantQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['sks-template'][':kube-version'][':variant']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSksTemplateKubeVersionVariantQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['sks-template'][':kube-version'][':variant'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSksTemplateKubeVersionVariant<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['sks-template'][':kube-version'][':variant']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['sks-template'][':kube-version'][':variant']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['sks-template'][':kube-version'][':variant']['$get']>
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
                  ReturnType<(typeof client)['sks-template'][':kube-version'][':variant']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSksTemplateKubeVersionVariantQueryKey>
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
          Awaited<ReturnType<(typeof client)['sks-template'][':kube-version'][':variant']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSksTemplateKubeVersionVariantQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSksTemplateKubeVersionVariantQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['sks-template'][':kube-version'][':variant'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutInstanceIdResizeDiskMutationKey() {
  return ['instance', '/instance/:id:resize-disk', 'PUT'] as const
}

export function getPutInstanceIdResizeDiskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instance)[':id:resize-disk']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.instance)[':id:resize-disk']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutInstanceIdResizeDiskMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.instance)[':id:resize-disk']['$put']>) {
      return parseResponse(client.instance[':id:resize-disk'].$put(args, options))
    },
  })
}

export function usePutInstanceIdResizeDisk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instance)[':id:resize-disk']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.instance)[':id:resize-disk']['$put']>,
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
  const mutationDefaults = getPutInstanceIdResizeDiskMutationOptions<TError, TOnMutateResult>(
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

export function getDbaasServiceQueryKey() {
  return ['dbaas-service', '/dbaas-service'] as const
}

export function getDbaasServiceQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDbaasServiceQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-service'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDbaasService<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-service']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-service']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-service']['$get']>>>
            >
          >,
          ReturnType<typeof getDbaasServiceQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-service']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasServiceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDbaasServiceQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-service'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getElasticIpQueryKey() {
  return ['elastic-ip', '/elastic-ip'] as const
}

export function getElasticIpQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getElasticIpQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['elastic-ip'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useElasticIp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['elastic-ip']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['elastic-ip']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['elastic-ip']['$get']>>>
            >
          >,
          ReturnType<typeof getElasticIpQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['elastic-ip']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getElasticIpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getElasticIpQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['elastic-ip'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostElasticIpMutationKey() {
  return ['elastic-ip', '/elastic-ip', 'POST'] as const
}

export function getPostElasticIpMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['elastic-ip']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['elastic-ip']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostElasticIpMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['elastic-ip']['$post']>) {
      return parseResponse(client['elastic-ip'].$post(args, options))
    },
  })
}

export function usePostElasticIp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['elastic-ip']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['elastic-ip']['$post']>,
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
  const mutationDefaults = getPostElasticIpMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getZoneQueryKey() {
  return ['zone', '/zone'] as const
}

export function getZoneQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getZoneQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.zone.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useZone<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zone.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zone.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zone.$get>>>>>,
          ReturnType<typeof getZoneQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zone.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getZoneQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getZoneQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.zone.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstancePoolQueryKey() {
  return ['instance-pool', '/instance-pool'] as const
}

export function getInstancePoolQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getInstancePoolQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['instance-pool'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInstancePool<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['instance-pool']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['instance-pool']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['instance-pool']['$get']>>>
            >
          >,
          ReturnType<typeof getInstancePoolQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['instance-pool']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancePoolQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getInstancePoolQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['instance-pool'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostInstancePoolMutationKey() {
  return ['instance-pool', '/instance-pool', 'POST'] as const
}

export function getPostInstancePoolMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['instance-pool']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['instance-pool']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInstancePoolMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['instance-pool']['$post']>) {
      return parseResponse(client['instance-pool'].$post(args, options))
    },
  })
}

export function usePostInstancePool<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['instance-pool']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['instance-pool']['$post']>,
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
  const mutationDefaults = getPostInstancePoolMutationOptions<TError, TOnMutateResult>(
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

export function getPostDbaasExternalEndpointRsyslogNameMutationKey() {
  return [
    'dbaas-external-endpoint-rsyslog',
    '/dbaas-external-endpoint-rsyslog/:name',
    'POST',
  ] as const
}

export function getPostDbaasExternalEndpointRsyslogNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-external-endpoint-rsyslog'][':name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-external-endpoint-rsyslog'][':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDbaasExternalEndpointRsyslogNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['dbaas-external-endpoint-rsyslog'][':name']['$post']>,
    ) {
      return parseResponse(client['dbaas-external-endpoint-rsyslog'][':name'].$post(args, options))
    },
  })
}

export function usePostDbaasExternalEndpointRsyslogName<
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
                  ReturnType<(typeof client)['dbaas-external-endpoint-rsyslog'][':name']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-external-endpoint-rsyslog'][':name']['$post']>,
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
  const mutationDefaults = getPostDbaasExternalEndpointRsyslogNameMutationOptions<
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

export function getPostSksClusterKubeconfigIdMutationKey() {
  return ['sks-cluster-kubeconfig', '/sks-cluster-kubeconfig/:id', 'POST'] as const
}

export function getPostSksClusterKubeconfigIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['sks-cluster-kubeconfig'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['sks-cluster-kubeconfig'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSksClusterKubeconfigIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['sks-cluster-kubeconfig'][':id']['$post']>,
    ) {
      return parseResponse(client['sks-cluster-kubeconfig'][':id'].$post(args, options))
    },
  })
}

export function usePostSksClusterKubeconfigId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['sks-cluster-kubeconfig'][':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['sks-cluster-kubeconfig'][':id']['$post']>,
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
  const mutationDefaults = getPostSksClusterKubeconfigIdMutationOptions<TError, TOnMutateResult>(
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

export function getDnsDomainDomainIdRecordQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dns-domain'][':domain-id']['record']['$get']>
  >,
) {
  return ['dns-domain', '/dns-domain/:domain-id/record', toValue(args)] as const
}

export function getDnsDomainDomainIdRecordQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dns-domain'][':domain-id']['record']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDnsDomainDomainIdRecordQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dns-domain'][':domain-id'].record.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDnsDomainDomainIdRecord<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['dns-domain'][':domain-id']['record']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dns-domain'][':domain-id']['record']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dns-domain'][':domain-id']['record']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dns-domain'][':domain-id']['record']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDnsDomainDomainIdRecordQueryKey>
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
          Awaited<ReturnType<(typeof client)['dns-domain'][':domain-id']['record']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDnsDomainDomainIdRecordQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDnsDomainDomainIdRecordQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['dns-domain'][':domain-id'].record.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDnsDomainDomainIdRecordMutationKey() {
  return ['dns-domain', '/dns-domain/:domain-id/record', 'POST'] as const
}

export function getPostDnsDomainDomainIdRecordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dns-domain'][':domain-id']['record']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dns-domain'][':domain-id']['record']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDnsDomainDomainIdRecordMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['dns-domain'][':domain-id']['record']['$post']>,
    ) {
      return parseResponse(client['dns-domain'][':domain-id'].record.$post(args, options))
    },
  })
}

export function usePostDnsDomainDomainIdRecord<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dns-domain'][':domain-id']['record']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dns-domain'][':domain-id']['record']['$post']>,
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
  const mutationDefaults = getPostDnsDomainDomainIdRecordMutationOptions<TError, TOnMutateResult>(
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

export function getDbaasCaCertificateQueryKey() {
  return ['dbaas-ca-certificate', '/dbaas-ca-certificate'] as const
}

export function getDbaasCaCertificateQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDbaasCaCertificateQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-ca-certificate'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDbaasCaCertificate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-ca-certificate']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-ca-certificate']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-ca-certificate']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDbaasCaCertificateQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-ca-certificate']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasCaCertificateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDbaasCaCertificateQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-ca-certificate'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDbaasSettingsGrafanaQueryKey() {
  return ['dbaas-settings-grafana', '/dbaas-settings-grafana'] as const
}

export function getDbaasSettingsGrafanaQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDbaasSettingsGrafanaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-settings-grafana'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDbaasSettingsGrafana<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-settings-grafana']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-settings-grafana']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-settings-grafana']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDbaasSettingsGrafanaQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-settings-grafana']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasSettingsGrafanaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDbaasSettingsGrafanaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-settings-grafana'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEnvironmentalImpactEstimateMutationKey() {
  return ['environmental-impact', '/environmental-impact/estimate', 'POST'] as const
}

export function getPostEnvironmentalImpactEstimateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['environmental-impact']['estimate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['environmental-impact']['estimate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEnvironmentalImpactEstimateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['environmental-impact']['estimate']['$post']>,
    ) {
      return parseResponse(client['environmental-impact'].estimate.$post(args, options))
    },
  })
}

export function usePostEnvironmentalImpactEstimate<
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
                Awaited<ReturnType<(typeof client)['environmental-impact']['estimate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['environmental-impact']['estimate']['$post']>,
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
  const mutationDefaults = getPostEnvironmentalImpactEstimateMutationOptions<
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

export function getDeployTargetQueryKey() {
  return ['deploy-target', '/deploy-target'] as const
}

export function getDeployTargetQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDeployTargetQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['deploy-target'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDeployTarget<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['deploy-target']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['deploy-target']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['deploy-target']['$get']>>>
            >
          >,
          ReturnType<typeof getDeployTargetQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['deploy-target']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeployTargetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDeployTargetQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['deploy-target'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstanceTypeQueryKey() {
  return ['instance-type', '/instance-type'] as const
}

export function getInstanceTypeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getInstanceTypeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['instance-type'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInstanceType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['instance-type']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['instance-type']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['instance-type']['$get']>>>
            >
          >,
          ReturnType<typeof getInstanceTypeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['instance-type']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstanceTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getInstanceTypeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['instance-type'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAiDeploymentQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ai.deployment.$get>>,
) {
  return ['ai', '/ai/deployment', toValue(args)] as const
}

export function getAiDeploymentQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ai.deployment.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAiDeploymentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ai.deployment.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAiDeployment<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.deployment.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ai.deployment.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.deployment.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.deployment.$get>>>>
          >,
          ReturnType<typeof getAiDeploymentQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.deployment.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAiDeploymentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAiDeploymentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ai.deployment.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAiDeploymentMutationKey() {
  return ['ai', '/ai/deployment', 'POST'] as const
}

export function getPostAiDeploymentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.deployment.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ai.deployment.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAiDeploymentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ai.deployment.$post>) {
      return parseResponse(client.ai.deployment.$post(args, options))
    },
  })
}

export function usePostAiDeployment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.deployment.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.ai.deployment.$post>,
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
  const mutationDefaults = getPostAiDeploymentMutationOptions<TError, TOnMutateResult>(
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

export function getLiveBalanceQueryKey() {
  return ['live-balance', '/live-balance'] as const
}

export function getLiveBalanceQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLiveBalanceQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['live-balance'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLiveBalance<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['live-balance']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['live-balance']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['live-balance']['$get']>>>
            >
          >,
          ReturnType<typeof getLiveBalanceQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['live-balance']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLiveBalanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLiveBalanceQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['live-balance'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteDbaasPostgresServiceNameDatabaseDatabaseNameMutationKey() {
  return [
    'dbaas-postgres',
    '/dbaas-postgres/:service-name/database/:database-name',
    'DELETE',
  ] as const
}

export function getDeleteDbaasPostgresServiceNameDatabaseDatabaseNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['dbaas-postgres'][':service-name']['database'][':database-name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['dbaas-postgres'][':service-name']['database'][':database-name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteDbaasPostgresServiceNameDatabaseDatabaseNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-postgres'][':service-name']['database'][':database-name']['$delete']
      >,
    ) {
      return parseResponse(
        client['dbaas-postgres'][':service-name'].database[':database-name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteDbaasPostgresServiceNameDatabaseDatabaseName<
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
                    (typeof client)['dbaas-postgres'][':service-name']['database'][':database-name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-postgres'][':service-name']['database'][':database-name']['$delete']
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
  const mutationDefaults = getDeleteDbaasPostgresServiceNameDatabaseDatabaseNameMutationOptions<
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

export function getDbaasClickhouseServiceNameRoleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-clickhouse'][':service-name']['role']['$get']>
  >,
) {
  return ['dbaas-clickhouse', '/dbaas-clickhouse/:service-name/role', toValue(args)] as const
}

export function getDbaasClickhouseServiceNameRoleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-clickhouse'][':service-name']['role']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDbaasClickhouseServiceNameRoleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-clickhouse'][':service-name'].role.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDbaasClickhouseServiceNameRole<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['dbaas-clickhouse'][':service-name']['role']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-clickhouse'][':service-name']['role']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['dbaas-clickhouse'][':service-name']['role']['$get']>
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
                  ReturnType<(typeof client)['dbaas-clickhouse'][':service-name']['role']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDbaasClickhouseServiceNameRoleQueryKey>
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
          Awaited<ReturnType<(typeof client)['dbaas-clickhouse'][':service-name']['role']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasClickhouseServiceNameRoleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDbaasClickhouseServiceNameRoleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-clickhouse'][':service-name'].role.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutBlockStorageIdAttachMutationKey() {
  return ['block-storage', '/block-storage/:id:attach', 'PUT'] as const
}

export function getPutBlockStorageIdAttachMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['block-storage'][':id:attach']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['block-storage'][':id:attach']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBlockStorageIdAttachMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['block-storage'][':id:attach']['$put']>,
    ) {
      return parseResponse(client['block-storage'][':id:attach'].$put(args, options))
    },
  })
}

export function usePutBlockStorageIdAttach<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['block-storage'][':id:attach']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['block-storage'][':id:attach']['$put']>,
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
  const mutationDefaults = getPutBlockStorageIdAttachMutationOptions<TError, TOnMutateResult>(
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

export function getPostKmsKeyIdEnableMutationKey() {
  return ['kms-key', '/kms-key/:id/enable', 'POST'] as const
}

export function getPostKmsKeyIdEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['kms-key'][':id']['enable']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['kms-key'][':id']['enable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKmsKeyIdEnableMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['kms-key'][':id']['enable']['$post']>) {
      return parseResponse(client['kms-key'][':id'].enable.$post(args, options))
    },
  })
}

export function usePostKmsKeyIdEnable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['kms-key'][':id']['enable']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['kms-key'][':id']['enable']['$post']>,
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
  const mutationDefaults = getPostKmsKeyIdEnableMutationOptions<TError, TOnMutateResult>(
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

export function getPostDbaasPostgresNameMigrationStopMutationKey() {
  return ['dbaas-postgres', '/dbaas-postgres/:name/migration/stop', 'POST'] as const
}

export function getPostDbaasPostgresNameMigrationStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['dbaas-postgres'][':name']['migration']['stop']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-postgres'][':name']['migration']['stop']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDbaasPostgresNameMigrationStopMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-postgres'][':name']['migration']['stop']['$post']
      >,
    ) {
      return parseResponse(client['dbaas-postgres'][':name'].migration.stop.$post(args, options))
    },
  })
}

export function usePostDbaasPostgresNameMigrationStop<
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
                    (typeof client)['dbaas-postgres'][':name']['migration']['stop']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-postgres'][':name']['migration']['stop']['$post']
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
  const mutationDefaults = getPostDbaasPostgresNameMigrationStopMutationOptions<
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

export function getDbaasKafkaNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dbaas-kafka'][':name']['$get']>>,
) {
  return ['dbaas-kafka', '/dbaas-kafka/:name', toValue(args)] as const
}

export function getDbaasKafkaNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dbaas-kafka'][':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDbaasKafkaNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-kafka'][':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDbaasKafkaName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-kafka'][':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dbaas-kafka'][':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-kafka'][':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-kafka'][':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDbaasKafkaNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-kafka'][':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasKafkaNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDbaasKafkaNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-kafka'][':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDbaasKafkaNameMutationKey() {
  return ['dbaas-kafka', '/dbaas-kafka/:name', 'PUT'] as const
}

export function getPutDbaasKafkaNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-kafka'][':name']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-kafka'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDbaasKafkaNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['dbaas-kafka'][':name']['$put']>) {
      return parseResponse(client['dbaas-kafka'][':name'].$put(args, options))
    },
  })
}

export function usePutDbaasKafkaName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-kafka'][':name']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-kafka'][':name']['$put']>,
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
  const mutationDefaults = getPutDbaasKafkaNameMutationOptions<TError, TOnMutateResult>(
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

export function getPostDbaasKafkaNameMutationKey() {
  return ['dbaas-kafka', '/dbaas-kafka/:name', 'POST'] as const
}

export function getPostDbaasKafkaNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-kafka'][':name']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-kafka'][':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDbaasKafkaNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['dbaas-kafka'][':name']['$post']>) {
      return parseResponse(client['dbaas-kafka'][':name'].$post(args, options))
    },
  })
}

export function usePostDbaasKafkaName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-kafka'][':name']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-kafka'][':name']['$post']>,
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
  const mutationDefaults = getPostDbaasKafkaNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteDbaasKafkaNameMutationKey() {
  return ['dbaas-kafka', '/dbaas-kafka/:name', 'DELETE'] as const
}

export function getDeleteDbaasKafkaNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-kafka'][':name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-kafka'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDbaasKafkaNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['dbaas-kafka'][':name']['$delete']>) {
      return parseResponse(client['dbaas-kafka'][':name'].$delete(args, options))
    },
  })
}

export function useDeleteDbaasKafkaName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-kafka'][':name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-kafka'][':name']['$delete']>,
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
  const mutationDefaults = getDeleteDbaasKafkaNameMutationOptions<TError, TOnMutateResult>(
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

export function getPutInstanceIdResetPasswordMutationKey() {
  return ['instance', '/instance/:id:reset-password', 'PUT'] as const
}

export function getPutInstanceIdResetPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instance)[':id:reset-password']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.instance)[':id:reset-password']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutInstanceIdResetPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.instance)[':id:reset-password']['$put']>,
    ) {
      return parseResponse(client.instance[':id:reset-password'].$put(args, options))
    },
  })
}

export function usePutInstanceIdResetPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instance)[':id:reset-password']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.instance)[':id:reset-password']['$put']>,
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
  const mutationDefaults = getPutInstanceIdResetPasswordMutationOptions<TError, TOnMutateResult>(
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

export function getPostDbaasKafkaNameSchemaRegistryAclConfigMutationKey() {
  return ['dbaas-kafka', '/dbaas-kafka/:name/schema-registry/acl-config', 'POST'] as const
}

export function getPostDbaasKafkaNameSchemaRegistryAclConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['dbaas-kafka'][':name']['schema-registry']['acl-config']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['dbaas-kafka'][':name']['schema-registry']['acl-config']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDbaasKafkaNameSchemaRegistryAclConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-kafka'][':name']['schema-registry']['acl-config']['$post']
      >,
    ) {
      return parseResponse(
        client['dbaas-kafka'][':name']['schema-registry']['acl-config'].$post(args, options),
      )
    },
  })
}

export function usePostDbaasKafkaNameSchemaRegistryAclConfig<
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
                    (typeof client)['dbaas-kafka'][':name']['schema-registry']['acl-config']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-kafka'][':name']['schema-registry']['acl-config']['$post']
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
  const mutationDefaults = getPostDbaasKafkaNameSchemaRegistryAclConfigMutationOptions<
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

export function getPutPrivateNetworkIdUpdateIpMutationKey() {
  return ['private-network', '/private-network/:id:update-ip', 'PUT'] as const
}

export function getPutPrivateNetworkIdUpdateIpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['private-network'][':id:update-ip']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['private-network'][':id:update-ip']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPrivateNetworkIdUpdateIpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['private-network'][':id:update-ip']['$put']>,
    ) {
      return parseResponse(client['private-network'][':id:update-ip'].$put(args, options))
    },
  })
}

export function usePutPrivateNetworkIdUpdateIp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['private-network'][':id:update-ip']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['private-network'][':id:update-ip']['$put']>,
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
  const mutationDefaults = getPutPrivateNetworkIdUpdateIpMutationOptions<TError, TOnMutateResult>(
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

export function getVpcVpcIdRouteQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vpc)[':vpc-id']['route']['$get']>>,
) {
  return ['vpc', '/vpc/:vpc-id/route', toValue(args)] as const
}

export function getVpcVpcIdRouteQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vpc)[':vpc-id']['route']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVpcVpcIdRouteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vpc[':vpc-id'].route.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVpcVpcIdRoute<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.vpc)[':vpc-id']['route']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vpc)[':vpc-id']['route']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vpc)[':vpc-id']['route']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vpc)[':vpc-id']['route']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVpcVpcIdRouteQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.vpc)[':vpc-id']['route']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVpcVpcIdRouteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVpcVpcIdRouteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vpc[':vpc-id'].route.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSksClusterIdNodepoolSksNodepoolIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id']['$get']>
  >,
) {
  return ['sks-cluster', '/sks-cluster/:id/nodepool/:sks-nodepool-id', toValue(args)] as const
}

export function getSksClusterIdNodepoolSksNodepoolIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSksClusterIdNodepoolSksNodepoolIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['sks-cluster'][':id'].nodepool[':sks-nodepool-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSksClusterIdNodepoolSksNodepoolId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id']['$get']>
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
                    (typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id']['$get']
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
                    (typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSksClusterIdNodepoolSksNodepoolIdQueryKey>
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
              (typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSksClusterIdNodepoolSksNodepoolIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSksClusterIdNodepoolSksNodepoolIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['sks-cluster'][':id'].nodepool[':sks-nodepool-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSksClusterIdNodepoolSksNodepoolIdMutationKey() {
  return ['sks-cluster', '/sks-cluster/:id/nodepool/:sks-nodepool-id', 'PUT'] as const
}

export function getPutSksClusterIdNodepoolSksNodepoolIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSksClusterIdNodepoolSksNodepoolIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id']['$put']
      >,
    ) {
      return parseResponse(
        client['sks-cluster'][':id'].nodepool[':sks-nodepool-id'].$put(args, options),
      )
    },
  })
}

export function usePutSksClusterIdNodepoolSksNodepoolId<
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
                    (typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id']['$put']
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
  const mutationDefaults = getPutSksClusterIdNodepoolSksNodepoolIdMutationOptions<
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

export function getDeleteSksClusterIdNodepoolSksNodepoolIdMutationKey() {
  return ['sks-cluster', '/sks-cluster/:id/nodepool/:sks-nodepool-id', 'DELETE'] as const
}

export function getDeleteSksClusterIdNodepoolSksNodepoolIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSksClusterIdNodepoolSksNodepoolIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id']['$delete']
      >,
    ) {
      return parseResponse(
        client['sks-cluster'][':id'].nodepool[':sks-nodepool-id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteSksClusterIdNodepoolSksNodepoolId<
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
                    (typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id']['$delete']
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
  const mutationDefaults = getDeleteSksClusterIdNodepoolSksNodepoolIdMutationOptions<
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

export function getBlockStorageSnapshotIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['block-storage-snapshot'][':id']['$get']>
  >,
) {
  return ['block-storage-snapshot', '/block-storage-snapshot/:id', toValue(args)] as const
}

export function getBlockStorageSnapshotIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['block-storage-snapshot'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBlockStorageSnapshotIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['block-storage-snapshot'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBlockStorageSnapshotId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['block-storage-snapshot'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['block-storage-snapshot'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['block-storage-snapshot'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['block-storage-snapshot'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBlockStorageSnapshotIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['block-storage-snapshot'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBlockStorageSnapshotIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBlockStorageSnapshotIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['block-storage-snapshot'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutBlockStorageSnapshotIdMutationKey() {
  return ['block-storage-snapshot', '/block-storage-snapshot/:id', 'PUT'] as const
}

export function getPutBlockStorageSnapshotIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['block-storage-snapshot'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['block-storage-snapshot'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBlockStorageSnapshotIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['block-storage-snapshot'][':id']['$put']>,
    ) {
      return parseResponse(client['block-storage-snapshot'][':id'].$put(args, options))
    },
  })
}

export function usePutBlockStorageSnapshotId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['block-storage-snapshot'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['block-storage-snapshot'][':id']['$put']>,
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
  const mutationDefaults = getPutBlockStorageSnapshotIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteBlockStorageSnapshotIdMutationKey() {
  return ['block-storage-snapshot', '/block-storage-snapshot/:id', 'DELETE'] as const
}

export function getDeleteBlockStorageSnapshotIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['block-storage-snapshot'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['block-storage-snapshot'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBlockStorageSnapshotIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['block-storage-snapshot'][':id']['$delete']>,
    ) {
      return parseResponse(client['block-storage-snapshot'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteBlockStorageSnapshotId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['block-storage-snapshot'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['block-storage-snapshot'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteBlockStorageSnapshotIdMutationOptions<TError, TOnMutateResult>(
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

export function getKmsKeyIdListKeyRotationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['kms-key'][':id']['list-key-rotations']['$get']>
  >,
) {
  return ['kms-key', '/kms-key/:id/list-key-rotations', toValue(args)] as const
}

export function getKmsKeyIdListKeyRotationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['kms-key'][':id']['list-key-rotations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKmsKeyIdListKeyRotationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['kms-key'][':id']['list-key-rotations'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKmsKeyIdListKeyRotations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['kms-key'][':id']['list-key-rotations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['kms-key'][':id']['list-key-rotations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['kms-key'][':id']['list-key-rotations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['kms-key'][':id']['list-key-rotations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKmsKeyIdListKeyRotationsQueryKey>
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
          Awaited<ReturnType<(typeof client)['kms-key'][':id']['list-key-rotations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKmsKeyIdListKeyRotationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKmsKeyIdListKeyRotationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['kms-key'][':id']['list-key-rotations'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDbaasPostgresServiceNameUserMutationKey() {
  return ['dbaas-postgres', '/dbaas-postgres/:service-name/user', 'POST'] as const
}

export function getPostDbaasPostgresServiceNameUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-postgres'][':service-name']['user']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-postgres'][':service-name']['user']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDbaasPostgresServiceNameUserMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['dbaas-postgres'][':service-name']['user']['$post']>,
    ) {
      return parseResponse(client['dbaas-postgres'][':service-name'].user.$post(args, options))
    },
  })
}

export function usePostDbaasPostgresServiceNameUser<
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
                  ReturnType<(typeof client)['dbaas-postgres'][':service-name']['user']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-postgres'][':service-name']['user']['$post']>,
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
  const mutationDefaults = getPostDbaasPostgresServiceNameUserMutationOptions<
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

export function getDbaasExternalIntegrationsServiceNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-external-integrations'][':service-name']['$get']>
  >,
) {
  return [
    'dbaas-external-integrations',
    '/dbaas-external-integrations/:service-name',
    toValue(args),
  ] as const
}

export function getDbaasExternalIntegrationsServiceNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-external-integrations'][':service-name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDbaasExternalIntegrationsServiceNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-external-integrations'][':service-name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDbaasExternalIntegrationsServiceName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['dbaas-external-integrations'][':service-name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-external-integrations'][':service-name']['$get']>
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
                    (typeof client)['dbaas-external-integrations'][':service-name']['$get']
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
                    (typeof client)['dbaas-external-integrations'][':service-name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDbaasExternalIntegrationsServiceNameQueryKey>
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
            ReturnType<(typeof client)['dbaas-external-integrations'][':service-name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasExternalIntegrationsServiceNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDbaasExternalIntegrationsServiceNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-external-integrations'][':service-name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDbaasExternalIntegrationIntegrationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-external-integration'][':integration-id']['$get']>
  >,
) {
  return [
    'dbaas-external-integration',
    '/dbaas-external-integration/:integration-id',
    toValue(args),
  ] as const
}

export function getDbaasExternalIntegrationIntegrationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-external-integration'][':integration-id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDbaasExternalIntegrationIntegrationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-external-integration'][':integration-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDbaasExternalIntegrationIntegrationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['dbaas-external-integration'][':integration-id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-external-integration'][':integration-id']['$get']>
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
                    (typeof client)['dbaas-external-integration'][':integration-id']['$get']
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
                    (typeof client)['dbaas-external-integration'][':integration-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDbaasExternalIntegrationIntegrationIdQueryKey>
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
            ReturnType<(typeof client)['dbaas-external-integration'][':integration-id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasExternalIntegrationIntegrationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDbaasExternalIntegrationIntegrationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-external-integration'][':integration-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstancePoolIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['instance-pool'][':id']['$get']>>,
) {
  return ['instance-pool', '/instance-pool/:id', toValue(args)] as const
}

export function getInstancePoolIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['instance-pool'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstancePoolIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['instance-pool'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstancePoolId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['instance-pool'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['instance-pool'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['instance-pool'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['instance-pool'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInstancePoolIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['instance-pool'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancePoolIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstancePoolIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['instance-pool'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutInstancePoolIdMutationKey() {
  return ['instance-pool', '/instance-pool/:id', 'PUT'] as const
}

export function getPutInstancePoolIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['instance-pool'][':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['instance-pool'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutInstancePoolIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['instance-pool'][':id']['$put']>) {
      return parseResponse(client['instance-pool'][':id'].$put(args, options))
    },
  })
}

export function usePutInstancePoolId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['instance-pool'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['instance-pool'][':id']['$put']>,
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
  const mutationDefaults = getPutInstancePoolIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteInstancePoolIdMutationKey() {
  return ['instance-pool', '/instance-pool/:id', 'DELETE'] as const
}

export function getDeleteInstancePoolIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['instance-pool'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['instance-pool'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteInstancePoolIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['instance-pool'][':id']['$delete']>) {
      return parseResponse(client['instance-pool'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteInstancePoolId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['instance-pool'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['instance-pool'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteInstancePoolIdMutationOptions<TError, TOnMutateResult>(
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

export function getDbaasExternalEndpointTypesQueryKey() {
  return ['dbaas-external-endpoint-types', '/dbaas-external-endpoint-types'] as const
}

export function getDbaasExternalEndpointTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDbaasExternalEndpointTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-external-endpoint-types'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDbaasExternalEndpointTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['dbaas-external-endpoint-types']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-external-endpoint-types']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-external-endpoint-types']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDbaasExternalEndpointTypesQueryKey>
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
          Awaited<ReturnType<(typeof client)['dbaas-external-endpoint-types']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasExternalEndpointTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDbaasExternalEndpointTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-external-endpoint-types'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAiApiKeyIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ai)['api-key'][':id']['$get']>>,
) {
  return ['ai', '/ai/api-key/:id', toValue(args)] as const
}

export function getAiApiKeyIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ai)['api-key'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAiApiKeyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ai['api-key'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAiApiKeyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ai)['api-key'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ai)['api-key'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ai)['api-key'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ai)['api-key'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAiApiKeyIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.ai)['api-key'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAiApiKeyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAiApiKeyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ai['api-key'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAiApiKeyIdMutationKey() {
  return ['ai', '/ai/api-key/:id', 'DELETE'] as const
}

export function getDeleteAiApiKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ai)['api-key'][':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.ai)['api-key'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAiApiKeyIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ai)['api-key'][':id']['$delete']>) {
      return parseResponse(client.ai['api-key'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteAiApiKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ai)['api-key'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ai)['api-key'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteAiApiKeyIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchAiApiKeyIdMutationKey() {
  return ['ai', '/ai/api-key/:id', 'PATCH'] as const
}

export function getPatchAiApiKeyIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ai)['api-key'][':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.ai)['api-key'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAiApiKeyIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ai)['api-key'][':id']['$patch']>) {
      return parseResponse(client.ai['api-key'][':id'].$patch(args, options))
    },
  })
}

export function usePatchAiApiKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ai)['api-key'][':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ai)['api-key'][':id']['$patch']>,
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
  const mutationDefaults = getPatchAiApiKeyIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPrivateNetworkQueryKey() {
  return ['private-network', '/private-network'] as const
}

export function getPrivateNetworkQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPrivateNetworkQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['private-network'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePrivateNetwork<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['private-network']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['private-network']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['private-network']['$get']>>>
            >
          >,
          ReturnType<typeof getPrivateNetworkQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['private-network']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPrivateNetworkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPrivateNetworkQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['private-network'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPrivateNetworkMutationKey() {
  return ['private-network', '/private-network', 'POST'] as const
}

export function getPostPrivateNetworkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['private-network']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['private-network']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPrivateNetworkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['private-network']['$post']>) {
      return parseResponse(client['private-network'].$post(args, options))
    },
  })
}

export function usePostPrivateNetwork<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['private-network']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['private-network']['$post']>,
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
  const mutationDefaults = getPostPrivateNetworkMutationOptions<TError, TOnMutateResult>(
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

export function getVpcQueryKey() {
  return ['vpc', '/vpc'] as const
}

export function getVpcQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getVpcQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vpc.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVpc<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vpc.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vpc.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vpc.$get>>>>>,
          ReturnType<typeof getVpcQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vpc.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVpcQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getVpcQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.vpc.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVpcMutationKey() {
  return ['vpc', '/vpc', 'POST'] as const
}

export function getPostVpcMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vpc.$post>>>>>,
    TError,
    InferRequestType<typeof client.vpc.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVpcMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.vpc.$post>) {
      return parseResponse(client.vpc.$post(args, options))
    },
  })
}

export function usePostVpc<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vpc.$post>>>>>,
          TError,
          InferRequestType<typeof client.vpc.$post>,
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
  const mutationDefaults = getPostVpcMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAiApiKeyIdRotateMutationKey() {
  return ['ai', '/ai/api-key/:id/rotate', 'POST'] as const
}

export function getPostAiApiKeyIdRotateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ai)['api-key'][':id']['rotate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ai)['api-key'][':id']['rotate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAiApiKeyIdRotateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ai)['api-key'][':id']['rotate']['$post']>,
    ) {
      return parseResponse(client.ai['api-key'][':id'].rotate.$post(args, options))
    },
  })
}

export function usePostAiApiKeyIdRotate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ai)['api-key'][':id']['rotate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ai)['api-key'][':id']['rotate']['$post']>,
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
  const mutationDefaults = getPostAiApiKeyIdRotateMutationOptions<TError, TOnMutateResult>(
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

export function getPutInstanceIdStartMutationKey() {
  return ['instance', '/instance/:id:start', 'PUT'] as const
}

export function getPutInstanceIdStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.instance)[':id:start']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.instance)[':id:start']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutInstanceIdStartMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.instance)[':id:start']['$put']>) {
      return parseResponse(client.instance[':id:start'].$put(args, options))
    },
  })
}

export function usePutInstanceIdStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instance)[':id:start']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.instance)[':id:start']['$put']>,
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
  const mutationDefaults = getPutInstanceIdStartMutationOptions<TError, TOnMutateResult>(
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

export function getPostInstanceIdEnableTpmMutationKey() {
  return ['instance', '/instance/:id:enable-tpm', 'POST'] as const
}

export function getPostInstanceIdEnableTpmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instance)[':id:enable-tpm']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.instance)[':id:enable-tpm']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInstanceIdEnableTpmMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.instance)[':id:enable-tpm']['$post']>) {
      return parseResponse(client.instance[':id:enable-tpm'].$post(args, options))
    },
  })
}

export function usePostInstanceIdEnableTpm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instance)[':id:enable-tpm']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.instance)[':id:enable-tpm']['$post']>,
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
  const mutationDefaults = getPostInstanceIdEnableTpmMutationOptions<TError, TOnMutateResult>(
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

export function getOrganizationQueryKey() {
  return ['organization', '/organization'] as const
}

export function getOrganizationQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOrganizationQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrganization<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.$get>>>>
          >,
          ReturnType<typeof getOrganizationQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrganizationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOrganizationQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSecurityGroupIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['security-group'][':id']['$get']>>,
) {
  return ['security-group', '/security-group/:id', toValue(args)] as const
}

export function getSecurityGroupIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['security-group'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSecurityGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['security-group'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSecurityGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['security-group'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['security-group'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['security-group'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['security-group'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSecurityGroupIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['security-group'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSecurityGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSecurityGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['security-group'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSecurityGroupIdMutationKey() {
  return ['security-group', '/security-group/:id', 'DELETE'] as const
}

export function getDeleteSecurityGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['security-group'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['security-group'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSecurityGroupIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['security-group'][':id']['$delete']>) {
      return parseResponse(client['security-group'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteSecurityGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['security-group'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['security-group'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteSecurityGroupIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteDbaasClickhouseServiceNameRoleRoleUuidMutationKey() {
  return ['dbaas-clickhouse', '/dbaas-clickhouse/:service-name/role/:role-uuid', 'DELETE'] as const
}

export function getDeleteDbaasClickhouseServiceNameRoleRoleUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['dbaas-clickhouse'][':service-name']['role'][':role-uuid']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['dbaas-clickhouse'][':service-name']['role'][':role-uuid']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteDbaasClickhouseServiceNameRoleRoleUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-clickhouse'][':service-name']['role'][':role-uuid']['$delete']
      >,
    ) {
      return parseResponse(
        client['dbaas-clickhouse'][':service-name'].role[':role-uuid'].$delete(args, options),
      )
    },
  })
}

export function useDeleteDbaasClickhouseServiceNameRoleRoleUuid<
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
                    (typeof client)['dbaas-clickhouse'][':service-name']['role'][':role-uuid']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-clickhouse'][':service-name']['role'][':role-uuid']['$delete']
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
  const mutationDefaults = getDeleteDbaasClickhouseServiceNameRoleRoleUuidMutationOptions<
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

export function getSksClusterIdAuthorityAuthorityCertQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['sks-cluster'][':id']['authority'][':authority']['cert']['$get']
    >
  >,
) {
  return ['sks-cluster', '/sks-cluster/:id/authority/:authority/cert', toValue(args)] as const
}

export function getSksClusterIdAuthorityAuthorityCertQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['sks-cluster'][':id']['authority'][':authority']['cert']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSksClusterIdAuthorityAuthorityCertQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['sks-cluster'][':id'].authority[':authority'].cert.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSksClusterIdAuthorityAuthorityCert<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['sks-cluster'][':id']['authority'][':authority']['cert']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['sks-cluster'][':id']['authority'][':authority']['cert']['$get']
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
                    (typeof client)['sks-cluster'][':id']['authority'][':authority']['cert']['$get']
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
                    (typeof client)['sks-cluster'][':id']['authority'][':authority']['cert']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSksClusterIdAuthorityAuthorityCertQueryKey>
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
              (typeof client)['sks-cluster'][':id']['authority'][':authority']['cert']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSksClusterIdAuthorityAuthorityCertQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSksClusterIdAuthorityAuthorityCertQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['sks-cluster'][':id'].authority[':authority'].cert.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSnapshotIdExportMutationKey() {
  return ['snapshot', '/snapshot/:id:export', 'POST'] as const
}

export function getPostSnapshotIdExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.snapshot)[':id:export']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.snapshot)[':id:export']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSnapshotIdExportMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.snapshot)[':id:export']['$post']>) {
      return parseResponse(client.snapshot[':id:export'].$post(args, options))
    },
  })
}

export function usePostSnapshotIdExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.snapshot)[':id:export']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.snapshot)[':id:export']['$post']>,
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
  const mutationDefaults = getPostSnapshotIdExportMutationOptions<TError, TOnMutateResult>(
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

export function getAiDeploymentIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ai.deployment)[':id']['$get']>>,
) {
  return ['ai', '/ai/deployment/:id', toValue(args)] as const
}

export function getAiDeploymentIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ai.deployment)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAiDeploymentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ai.deployment[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAiDeploymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ai.deployment)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ai.deployment)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ai.deployment)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ai.deployment)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAiDeploymentIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.ai.deployment)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAiDeploymentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAiDeploymentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ai.deployment[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAiDeploymentIdMutationKey() {
  return ['ai', '/ai/deployment/:id', 'DELETE'] as const
}

export function getDeleteAiDeploymentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ai.deployment)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.ai.deployment)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAiDeploymentIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ai.deployment)[':id']['$delete']>) {
      return parseResponse(client.ai.deployment[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAiDeploymentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ai.deployment)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ai.deployment)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteAiDeploymentIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchAiDeploymentIdMutationKey() {
  return ['ai', '/ai/deployment/:id', 'PATCH'] as const
}

export function getPatchAiDeploymentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ai.deployment)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.ai.deployment)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAiDeploymentIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ai.deployment)[':id']['$patch']>) {
      return parseResponse(client.ai.deployment[':id'].$patch(args, options))
    },
  })
}

export function usePatchAiDeploymentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ai.deployment)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ai.deployment)[':id']['$patch']>,
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
  const mutationDefaults = getPatchAiDeploymentIdMutationOptions<TError, TOnMutateResult>(
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

export function getDbaasKafkaServiceNameConnectPasswordRevealQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['dbaas-kafka'][':service-name']['connect']['password']['reveal']['$get']
    >
  >,
) {
  return [
    'dbaas-kafka',
    '/dbaas-kafka/:service-name/connect/password/reveal',
    toValue(args),
  ] as const
}

export function getDbaasKafkaServiceNameConnectPasswordRevealQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['dbaas-kafka'][':service-name']['connect']['password']['reveal']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDbaasKafkaServiceNameConnectPasswordRevealQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-kafka'][':service-name'].connect.password.reveal.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDbaasKafkaServiceNameConnectPasswordReveal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['dbaas-kafka'][':service-name']['connect']['password']['reveal']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['dbaas-kafka'][':service-name']['connect']['password']['reveal']['$get']
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
                    (typeof client)['dbaas-kafka'][':service-name']['connect']['password']['reveal']['$get']
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
                    (typeof client)['dbaas-kafka'][':service-name']['connect']['password']['reveal']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDbaasKafkaServiceNameConnectPasswordRevealQueryKey>
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
              (typeof client)['dbaas-kafka'][':service-name']['connect']['password']['reveal']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasKafkaServiceNameConnectPasswordRevealQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDbaasKafkaServiceNameConnectPasswordRevealQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-kafka'][':service-name'].connect.password.reveal.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostKmsKeyIdEnableKeyRotationMutationKey() {
  return ['kms-key', '/kms-key/:id/enable-key-rotation', 'POST'] as const
}

export function getPostKmsKeyIdEnableKeyRotationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['kms-key'][':id']['enable-key-rotation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['kms-key'][':id']['enable-key-rotation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKmsKeyIdEnableKeyRotationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['kms-key'][':id']['enable-key-rotation']['$post']>,
    ) {
      return parseResponse(client['kms-key'][':id']['enable-key-rotation'].$post(args, options))
    },
  })
}

export function usePostKmsKeyIdEnableKeyRotation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['kms-key'][':id']['enable-key-rotation']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['kms-key'][':id']['enable-key-rotation']['$post']>,
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
  const mutationDefaults = getPostKmsKeyIdEnableKeyRotationMutationOptions<TError, TOnMutateResult>(
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

export function getVpcVpcIdSubnetSubnetIdRouteQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['route']['$get']>
  >,
) {
  return ['vpc', '/vpc/:vpc-id/subnet/:subnet-id/route', toValue(args)] as const
}

export function getVpcVpcIdSubnetSubnetIdRouteQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['route']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVpcVpcIdSubnetSubnetIdRouteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vpc[':vpc-id'].subnet[':subnet-id'].route.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVpcVpcIdSubnetSubnetIdRoute<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['route']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['route']['$get']>
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
                    (typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['route']['$get']
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
                    (typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['route']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVpcVpcIdSubnetSubnetIdRouteQueryKey>
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
            ReturnType<(typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['route']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVpcVpcIdSubnetSubnetIdRouteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVpcVpcIdSubnetSubnetIdRouteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vpc[':vpc-id'].subnet[':subnet-id'].route.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVpcVpcIdSubnetSubnetIdRouteMutationKey() {
  return ['vpc', '/vpc/:vpc-id/subnet/:subnet-id/route', 'POST'] as const
}

export function getPostVpcVpcIdSubnetSubnetIdRouteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['route']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['route']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVpcVpcIdSubnetSubnetIdRouteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['route']['$post']
      >,
    ) {
      return parseResponse(client.vpc[':vpc-id'].subnet[':subnet-id'].route.$post(args, options))
    },
  })
}

export function usePostVpcVpcIdSubnetSubnetIdRoute<
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
                    (typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['route']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['route']['$post']
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
  const mutationDefaults = getPostVpcVpcIdSubnetSubnetIdRouteMutationOptions<
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

export function getDeleteElasticIpIdFieldMutationKey() {
  return ['elastic-ip', '/elastic-ip/:id/:field', 'DELETE'] as const
}

export function getDeleteElasticIpIdFieldMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['elastic-ip'][':id'][':field']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['elastic-ip'][':id'][':field']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteElasticIpIdFieldMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['elastic-ip'][':id'][':field']['$delete']>,
    ) {
      return parseResponse(client['elastic-ip'][':id'][':field'].$delete(args, options))
    },
  })
}

export function useDeleteElasticIpIdField<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['elastic-ip'][':id'][':field']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['elastic-ip'][':id'][':field']['$delete']>,
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
  const mutationDefaults = getDeleteElasticIpIdFieldMutationOptions<TError, TOnMutateResult>(
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

export function getQuotaEntityQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.quota)[':entity']['$get']>>,
) {
  return ['quota', '/quota/:entity', toValue(args)] as const
}

export function getQuotaEntityQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.quota)[':entity']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuotaEntityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.quota[':entity'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQuotaEntity<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.quota)[':entity']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.quota)[':entity']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.quota)[':entity']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.quota)[':entity']['$get']>>>
            >
          >,
          ReturnType<typeof getQuotaEntityQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.quota)[':entity']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuotaEntityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuotaEntityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.quota[':entity'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVpcVpcIdSubnetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vpc)[':vpc-id']['subnet']['$get']>>,
) {
  return ['vpc', '/vpc/:vpc-id/subnet', toValue(args)] as const
}

export function getVpcVpcIdSubnetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vpc)[':vpc-id']['subnet']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVpcVpcIdSubnetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vpc[':vpc-id'].subnet.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVpcVpcIdSubnet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.vpc)[':vpc-id']['subnet']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vpc)[':vpc-id']['subnet']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vpc)[':vpc-id']['subnet']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vpc)[':vpc-id']['subnet']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVpcVpcIdSubnetQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.vpc)[':vpc-id']['subnet']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVpcVpcIdSubnetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVpcVpcIdSubnetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vpc[':vpc-id'].subnet.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVpcVpcIdSubnetMutationKey() {
  return ['vpc', '/vpc/:vpc-id/subnet', 'POST'] as const
}

export function getPostVpcVpcIdSubnetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.vpc)[':vpc-id']['subnet']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.vpc)[':vpc-id']['subnet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVpcVpcIdSubnetMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.vpc)[':vpc-id']['subnet']['$post']>) {
      return parseResponse(client.vpc[':vpc-id'].subnet.$post(args, options))
    },
  })
}

export function usePostVpcVpcIdSubnet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vpc)[':vpc-id']['subnet']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.vpc)[':vpc-id']['subnet']['$post']>,
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
  const mutationDefaults = getPostVpcVpcIdSubnetMutationOptions<TError, TOnMutateResult>(
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

export function getSksClusterDeprecatedResourcesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['sks-cluster-deprecated-resources'][':id']['$get']>
  >,
) {
  return [
    'sks-cluster-deprecated-resources',
    '/sks-cluster-deprecated-resources/:id',
    toValue(args),
  ] as const
}

export function getSksClusterDeprecatedResourcesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['sks-cluster-deprecated-resources'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSksClusterDeprecatedResourcesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['sks-cluster-deprecated-resources'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSksClusterDeprecatedResourcesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['sks-cluster-deprecated-resources'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['sks-cluster-deprecated-resources'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['sks-cluster-deprecated-resources'][':id']['$get']>
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
                  ReturnType<(typeof client)['sks-cluster-deprecated-resources'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSksClusterDeprecatedResourcesIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['sks-cluster-deprecated-resources'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSksClusterDeprecatedResourcesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSksClusterDeprecatedResourcesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['sks-cluster-deprecated-resources'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBlockStorageIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['block-storage'][':id']['$get']>>,
) {
  return ['block-storage', '/block-storage/:id', toValue(args)] as const
}

export function getBlockStorageIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['block-storage'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBlockStorageIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['block-storage'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBlockStorageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['block-storage'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['block-storage'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['block-storage'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['block-storage'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBlockStorageIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['block-storage'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBlockStorageIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBlockStorageIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['block-storage'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutBlockStorageIdMutationKey() {
  return ['block-storage', '/block-storage/:id', 'PUT'] as const
}

export function getPutBlockStorageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['block-storage'][':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['block-storage'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBlockStorageIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['block-storage'][':id']['$put']>) {
      return parseResponse(client['block-storage'][':id'].$put(args, options))
    },
  })
}

export function usePutBlockStorageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['block-storage'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['block-storage'][':id']['$put']>,
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
  const mutationDefaults = getPutBlockStorageIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteBlockStorageIdMutationKey() {
  return ['block-storage', '/block-storage/:id', 'DELETE'] as const
}

export function getDeleteBlockStorageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['block-storage'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['block-storage'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBlockStorageIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['block-storage'][':id']['$delete']>) {
      return parseResponse(client['block-storage'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteBlockStorageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['block-storage'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['block-storage'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteBlockStorageIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteDbaasOpensearchServiceNameUserUsernameMutationKey() {
  return ['dbaas-opensearch', '/dbaas-opensearch/:service-name/user/:username', 'DELETE'] as const
}

export function getDeleteDbaasOpensearchServiceNameUserUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['dbaas-opensearch'][':service-name']['user'][':username']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['dbaas-opensearch'][':service-name']['user'][':username']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteDbaasOpensearchServiceNameUserUsernameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-opensearch'][':service-name']['user'][':username']['$delete']
      >,
    ) {
      return parseResponse(
        client['dbaas-opensearch'][':service-name'].user[':username'].$delete(args, options),
      )
    },
  })
}

export function useDeleteDbaasOpensearchServiceNameUserUsername<
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
                    (typeof client)['dbaas-opensearch'][':service-name']['user'][':username']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-opensearch'][':service-name']['user'][':username']['$delete']
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
  const mutationDefaults = getDeleteDbaasOpensearchServiceNameUserUsernameMutationOptions<
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

export function getDbaasExternalEndpointPrometheusEndpointIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-external-endpoint-prometheus'][':endpoint-id']['$get']>
  >,
) {
  return [
    'dbaas-external-endpoint-prometheus',
    '/dbaas-external-endpoint-prometheus/:endpoint-id',
    toValue(args),
  ] as const
}

export function getDbaasExternalEndpointPrometheusEndpointIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-external-endpoint-prometheus'][':endpoint-id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDbaasExternalEndpointPrometheusEndpointIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-external-endpoint-prometheus'][':endpoint-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDbaasExternalEndpointPrometheusEndpointId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['dbaas-external-endpoint-prometheus'][':endpoint-id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-external-endpoint-prometheus'][':endpoint-id']['$get']>
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
                    (typeof client)['dbaas-external-endpoint-prometheus'][':endpoint-id']['$get']
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
                    (typeof client)['dbaas-external-endpoint-prometheus'][':endpoint-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDbaasExternalEndpointPrometheusEndpointIdQueryKey>
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
              (typeof client)['dbaas-external-endpoint-prometheus'][':endpoint-id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasExternalEndpointPrometheusEndpointIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDbaasExternalEndpointPrometheusEndpointIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-external-endpoint-prometheus'][':endpoint-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDbaasExternalEndpointPrometheusEndpointIdMutationKey() {
  return [
    'dbaas-external-endpoint-prometheus',
    '/dbaas-external-endpoint-prometheus/:endpoint-id',
    'PUT',
  ] as const
}

export function getPutDbaasExternalEndpointPrometheusEndpointIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['dbaas-external-endpoint-prometheus'][':endpoint-id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-external-endpoint-prometheus'][':endpoint-id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDbaasExternalEndpointPrometheusEndpointIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-external-endpoint-prometheus'][':endpoint-id']['$put']
      >,
    ) {
      return parseResponse(
        client['dbaas-external-endpoint-prometheus'][':endpoint-id'].$put(args, options),
      )
    },
  })
}

export function usePutDbaasExternalEndpointPrometheusEndpointId<
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
                    (typeof client)['dbaas-external-endpoint-prometheus'][':endpoint-id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-external-endpoint-prometheus'][':endpoint-id']['$put']
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
  const mutationDefaults = getPutDbaasExternalEndpointPrometheusEndpointIdMutationOptions<
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

export function getDeleteDbaasExternalEndpointPrometheusEndpointIdMutationKey() {
  return [
    'dbaas-external-endpoint-prometheus',
    '/dbaas-external-endpoint-prometheus/:endpoint-id',
    'DELETE',
  ] as const
}

export function getDeleteDbaasExternalEndpointPrometheusEndpointIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['dbaas-external-endpoint-prometheus'][':endpoint-id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['dbaas-external-endpoint-prometheus'][':endpoint-id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteDbaasExternalEndpointPrometheusEndpointIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-external-endpoint-prometheus'][':endpoint-id']['$delete']
      >,
    ) {
      return parseResponse(
        client['dbaas-external-endpoint-prometheus'][':endpoint-id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteDbaasExternalEndpointPrometheusEndpointId<
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
                    (typeof client)['dbaas-external-endpoint-prometheus'][':endpoint-id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-external-endpoint-prometheus'][':endpoint-id']['$delete']
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
  const mutationDefaults = getDeleteDbaasExternalEndpointPrometheusEndpointIdMutationOptions<
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

export function getPostBlockStorageIdCreateSnapshotMutationKey() {
  return ['block-storage', '/block-storage/:id:create-snapshot', 'POST'] as const
}

export function getPostBlockStorageIdCreateSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['block-storage'][':id:create-snapshot']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['block-storage'][':id:create-snapshot']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBlockStorageIdCreateSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['block-storage'][':id:create-snapshot']['$post']>,
    ) {
      return parseResponse(client['block-storage'][':id:create-snapshot'].$post(args, options))
    },
  })
}

export function usePostBlockStorageIdCreateSnapshot<
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
                  ReturnType<(typeof client)['block-storage'][':id:create-snapshot']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['block-storage'][':id:create-snapshot']['$post']>,
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
  const mutationDefaults = getPostBlockStorageIdCreateSnapshotMutationOptions<
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

export function getPutPrivateNetworkIdDetachMutationKey() {
  return ['private-network', '/private-network/:id:detach', 'PUT'] as const
}

export function getPutPrivateNetworkIdDetachMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['private-network'][':id:detach']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['private-network'][':id:detach']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPrivateNetworkIdDetachMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['private-network'][':id:detach']['$put']>,
    ) {
      return parseResponse(client['private-network'][':id:detach'].$put(args, options))
    },
  })
}

export function usePutPrivateNetworkIdDetach<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['private-network'][':id:detach']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['private-network'][':id:detach']['$put']>,
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
  const mutationDefaults = getPutPrivateNetworkIdDetachMutationOptions<TError, TOnMutateResult>(
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

export function getPrivateNetworkIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['private-network'][':id']['$get']>>,
) {
  return ['private-network', '/private-network/:id', toValue(args)] as const
}

export function getPrivateNetworkIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['private-network'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPrivateNetworkIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['private-network'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePrivateNetworkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['private-network'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['private-network'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['private-network'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['private-network'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPrivateNetworkIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['private-network'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPrivateNetworkIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPrivateNetworkIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['private-network'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutPrivateNetworkIdMutationKey() {
  return ['private-network', '/private-network/:id', 'PUT'] as const
}

export function getPutPrivateNetworkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['private-network'][':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['private-network'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPrivateNetworkIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['private-network'][':id']['$put']>) {
      return parseResponse(client['private-network'][':id'].$put(args, options))
    },
  })
}

export function usePutPrivateNetworkId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['private-network'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['private-network'][':id']['$put']>,
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
  const mutationDefaults = getPutPrivateNetworkIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeletePrivateNetworkIdMutationKey() {
  return ['private-network', '/private-network/:id', 'DELETE'] as const
}

export function getDeletePrivateNetworkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['private-network'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['private-network'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePrivateNetworkIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['private-network'][':id']['$delete']>) {
      return parseResponse(client['private-network'][':id'].$delete(args, options))
    },
  })
}

export function useDeletePrivateNetworkId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['private-network'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['private-network'][':id']['$delete']>,
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
  const mutationDefaults = getDeletePrivateNetworkIdMutationOptions<TError, TOnMutateResult>(
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

export function getAiInstanceTypeQueryKey() {
  return ['ai', '/ai/instance-type'] as const
}

export function getAiInstanceTypeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAiInstanceTypeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ai['instance-type'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAiInstanceType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ai)['instance-type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ai)['instance-type']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ai)['instance-type']['$get']>>>
            >
          >,
          ReturnType<typeof getAiInstanceTypeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.ai)['instance-type']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAiInstanceTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAiInstanceTypeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.ai['instance-type'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteLoadBalancerIdFieldMutationKey() {
  return ['load-balancer', '/load-balancer/:id/:field', 'DELETE'] as const
}

export function getDeleteLoadBalancerIdFieldMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['load-balancer'][':id'][':field']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['load-balancer'][':id'][':field']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLoadBalancerIdFieldMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['load-balancer'][':id'][':field']['$delete']>,
    ) {
      return parseResponse(client['load-balancer'][':id'][':field'].$delete(args, options))
    },
  })
}

export function useDeleteLoadBalancerIdField<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['load-balancer'][':id'][':field']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['load-balancer'][':id'][':field']['$delete']>,
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
  const mutationDefaults = getDeleteLoadBalancerIdFieldMutationOptions<TError, TOnMutateResult>(
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

export function getPutInstanceIdScaleMutationKey() {
  return ['instance', '/instance/:id:scale', 'PUT'] as const
}

export function getPutInstanceIdScaleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.instance)[':id:scale']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.instance)[':id:scale']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutInstanceIdScaleMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.instance)[':id:scale']['$put']>) {
      return parseResponse(client.instance[':id:scale'].$put(args, options))
    },
  })
}

export function usePutInstanceIdScale<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instance)[':id:scale']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.instance)[':id:scale']['$put']>,
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
  const mutationDefaults = getPutInstanceIdScaleMutationOptions<TError, TOnMutateResult>(
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

export function getApiKeyQueryKey() {
  return ['api-key', '/api-key'] as const
}

export function getApiKeyQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiKeyQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['api-key'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-key']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['api-key']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['api-key']['$get']>>>
            >
          >,
          ReturnType<typeof getApiKeyQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-key']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiKeyQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['api-key'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiKeyMutationKey() {
  return ['api-key', '/api-key', 'POST'] as const
}

export function getPostApiKeyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-key']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['api-key']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['api-key']['$post']>) {
      return parseResponse(client['api-key'].$post(args, options))
    },
  })
}

export function usePostApiKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['api-key']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['api-key']['$post']>,
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
  const mutationDefaults = getPostApiKeyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBlockStorageSnapshotQueryKey() {
  return ['block-storage-snapshot', '/block-storage-snapshot'] as const
}

export function getBlockStorageSnapshotQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getBlockStorageSnapshotQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['block-storage-snapshot'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBlockStorageSnapshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['block-storage-snapshot']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['block-storage-snapshot']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['block-storage-snapshot']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBlockStorageSnapshotQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['block-storage-snapshot']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBlockStorageSnapshotQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getBlockStorageSnapshotQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['block-storage-snapshot'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDnsDomainQueryKey() {
  return ['dns-domain', '/dns-domain'] as const
}

export function getDnsDomainQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDnsDomainQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dns-domain'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDnsDomain<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['dns-domain']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['dns-domain']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['dns-domain']['$get']>>>
            >
          >,
          ReturnType<typeof getDnsDomainQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['dns-domain']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDnsDomainQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDnsDomainQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['dns-domain'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDnsDomainMutationKey() {
  return ['dns-domain', '/dns-domain', 'POST'] as const
}

export function getPostDnsDomainMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['dns-domain']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['dns-domain']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDnsDomainMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['dns-domain']['$post']>) {
      return parseResponse(client['dns-domain'].$post(args, options))
    },
  })
}

export function usePostDnsDomain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['dns-domain']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['dns-domain']['$post']>,
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
  const mutationDefaults = getPostDnsDomainMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutInstanceIdStopMutationKey() {
  return ['instance', '/instance/:id:stop', 'PUT'] as const
}

export function getPutInstanceIdStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.instance)[':id:stop']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.instance)[':id:stop']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutInstanceIdStopMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.instance)[':id:stop']['$put']>) {
      return parseResponse(client.instance[':id:stop'].$put(args, options))
    },
  })
}

export function usePutInstanceIdStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instance)[':id:stop']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.instance)[':id:stop']['$put']>,
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
  const mutationDefaults = getPutInstanceIdStopMutationOptions<TError, TOnMutateResult>(
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

export function getDnsDomainDomainIdRecordRecordIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dns-domain'][':domain-id']['record'][':record-id']['$get']>
  >,
) {
  return ['dns-domain', '/dns-domain/:domain-id/record/:record-id', toValue(args)] as const
}

export function getDnsDomainDomainIdRecordRecordIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dns-domain'][':domain-id']['record'][':record-id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDnsDomainDomainIdRecordRecordIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dns-domain'][':domain-id'].record[':record-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDnsDomainDomainIdRecordRecordId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['dns-domain'][':domain-id']['record'][':record-id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dns-domain'][':domain-id']['record'][':record-id']['$get']>
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
                    (typeof client)['dns-domain'][':domain-id']['record'][':record-id']['$get']
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
                    (typeof client)['dns-domain'][':domain-id']['record'][':record-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDnsDomainDomainIdRecordRecordIdQueryKey>
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
            ReturnType<(typeof client)['dns-domain'][':domain-id']['record'][':record-id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDnsDomainDomainIdRecordRecordIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDnsDomainDomainIdRecordRecordIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['dns-domain'][':domain-id'].record[':record-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDnsDomainDomainIdRecordRecordIdMutationKey() {
  return ['dns-domain', '/dns-domain/:domain-id/record/:record-id', 'PUT'] as const
}

export function getPutDnsDomainDomainIdRecordRecordIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['dns-domain'][':domain-id']['record'][':record-id']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dns-domain'][':domain-id']['record'][':record-id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDnsDomainDomainIdRecordRecordIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dns-domain'][':domain-id']['record'][':record-id']['$put']
      >,
    ) {
      return parseResponse(
        client['dns-domain'][':domain-id'].record[':record-id'].$put(args, options),
      )
    },
  })
}

export function usePutDnsDomainDomainIdRecordRecordId<
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
                    (typeof client)['dns-domain'][':domain-id']['record'][':record-id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dns-domain'][':domain-id']['record'][':record-id']['$put']
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
  const mutationDefaults = getPutDnsDomainDomainIdRecordRecordIdMutationOptions<
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

export function getDeleteDnsDomainDomainIdRecordRecordIdMutationKey() {
  return ['dns-domain', '/dns-domain/:domain-id/record/:record-id', 'DELETE'] as const
}

export function getDeleteDnsDomainDomainIdRecordRecordIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['dns-domain'][':domain-id']['record'][':record-id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['dns-domain'][':domain-id']['record'][':record-id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteDnsDomainDomainIdRecordRecordIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dns-domain'][':domain-id']['record'][':record-id']['$delete']
      >,
    ) {
      return parseResponse(
        client['dns-domain'][':domain-id'].record[':record-id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteDnsDomainDomainIdRecordRecordId<
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
                    (typeof client)['dns-domain'][':domain-id']['record'][':record-id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dns-domain'][':domain-id']['record'][':record-id']['$delete']
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
  const mutationDefaults = getDeleteDnsDomainDomainIdRecordRecordIdMutationOptions<
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

export function getPostDbaasKafkaServiceNameUserMutationKey() {
  return ['dbaas-kafka', '/dbaas-kafka/:service-name/user', 'POST'] as const
}

export function getPostDbaasKafkaServiceNameUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-kafka'][':service-name']['user']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-kafka'][':service-name']['user']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDbaasKafkaServiceNameUserMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['dbaas-kafka'][':service-name']['user']['$post']>,
    ) {
      return parseResponse(client['dbaas-kafka'][':service-name'].user.$post(args, options))
    },
  })
}

export function usePostDbaasKafkaServiceNameUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['dbaas-kafka'][':service-name']['user']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-kafka'][':service-name']['user']['$post']>,
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
  const mutationDefaults = getPostDbaasKafkaServiceNameUserMutationOptions<TError, TOnMutateResult>(
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

export function getPutDbaasValkeyServiceNameUserUsernamePasswordResetMutationKey() {
  return [
    'dbaas-valkey',
    '/dbaas-valkey/:service-name/user/:username/password/reset',
    'PUT',
  ] as const
}

export function getPutDbaasValkeyServiceNameUserUsernamePasswordResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['dbaas-valkey'][':service-name']['user'][':username']['password']['reset']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['dbaas-valkey'][':service-name']['user'][':username']['password']['reset']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutDbaasValkeyServiceNameUserUsernamePasswordResetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-valkey'][':service-name']['user'][':username']['password']['reset']['$put']
      >,
    ) {
      return parseResponse(
        client['dbaas-valkey'][':service-name'].user[':username'].password.reset.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutDbaasValkeyServiceNameUserUsernamePasswordReset<
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
                    (typeof client)['dbaas-valkey'][':service-name']['user'][':username']['password']['reset']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-valkey'][':service-name']['user'][':username']['password']['reset']['$put']
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
  const mutationDefaults = getPutDbaasValkeyServiceNameUserUsernamePasswordResetMutationOptions<
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

export function getDbaasExternalIntegrationSettingsDatadogIntegrationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['dbaas-external-integration-settings-datadog'][':integration-id']['$get']
    >
  >,
) {
  return [
    'dbaas-external-integration-settings-datadog',
    '/dbaas-external-integration-settings-datadog/:integration-id',
    toValue(args),
  ] as const
}

export function getDbaasExternalIntegrationSettingsDatadogIntegrationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['dbaas-external-integration-settings-datadog'][':integration-id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDbaasExternalIntegrationSettingsDatadogIntegrationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-external-integration-settings-datadog'][':integration-id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useDbaasExternalIntegrationSettingsDatadogIntegrationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['dbaas-external-integration-settings-datadog'][':integration-id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['dbaas-external-integration-settings-datadog'][':integration-id']['$get']
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
                    (typeof client)['dbaas-external-integration-settings-datadog'][':integration-id']['$get']
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
                    (typeof client)['dbaas-external-integration-settings-datadog'][':integration-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDbaasExternalIntegrationSettingsDatadogIntegrationIdQueryKey>
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
              (typeof client)['dbaas-external-integration-settings-datadog'][':integration-id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasExternalIntegrationSettingsDatadogIntegrationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDbaasExternalIntegrationSettingsDatadogIntegrationIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-external-integration-settings-datadog'][':integration-id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostDbaasExternalIntegrationSettingsDatadogIntegrationIdMutationKey() {
  return [
    'dbaas-external-integration-settings-datadog',
    '/dbaas-external-integration-settings-datadog/:integration-id',
    'POST',
  ] as const
}

export function getPostDbaasExternalIntegrationSettingsDatadogIntegrationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['dbaas-external-integration-settings-datadog'][':integration-id']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['dbaas-external-integration-settings-datadog'][':integration-id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDbaasExternalIntegrationSettingsDatadogIntegrationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-external-integration-settings-datadog'][':integration-id']['$post']
      >,
    ) {
      return parseResponse(
        client['dbaas-external-integration-settings-datadog'][':integration-id'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostDbaasExternalIntegrationSettingsDatadogIntegrationId<
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
                    (typeof client)['dbaas-external-integration-settings-datadog'][':integration-id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-external-integration-settings-datadog'][':integration-id']['$post']
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
  const mutationDefaults =
    getPostDbaasExternalIntegrationSettingsDatadogIntegrationIdMutationOptions<
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

export function getPutSecurityGroupIdAttachMutationKey() {
  return ['security-group', '/security-group/:id:attach', 'PUT'] as const
}

export function getPutSecurityGroupIdAttachMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['security-group'][':id:attach']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['security-group'][':id:attach']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSecurityGroupIdAttachMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['security-group'][':id:attach']['$put']>,
    ) {
      return parseResponse(client['security-group'][':id:attach'].$put(args, options))
    },
  })
}

export function usePutSecurityGroupIdAttach<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['security-group'][':id:attach']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['security-group'][':id:attach']['$put']>,
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
  const mutationDefaults = getPutSecurityGroupIdAttachMutationOptions<TError, TOnMutateResult>(
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

export function getSnapshotIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.snapshot)[':id']['$get']>>,
) {
  return ['snapshot', '/snapshot/:id', toValue(args)] as const
}

export function getSnapshotIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.snapshot)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSnapshotIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.snapshot[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSnapshotId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.snapshot)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.snapshot)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.snapshot)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.snapshot)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getSnapshotIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.snapshot)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSnapshotIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSnapshotIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.snapshot[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSnapshotIdMutationKey() {
  return ['snapshot', '/snapshot/:id', 'DELETE'] as const
}

export function getDeleteSnapshotIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.snapshot)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.snapshot)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSnapshotIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.snapshot)[':id']['$delete']>) {
      return parseResponse(client.snapshot[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSnapshotId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.snapshot)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.snapshot)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteSnapshotIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutSksClusterIdNodepoolSksNodepoolIdScaleMutationKey() {
  return ['sks-cluster', '/sks-cluster/:id/nodepool/:sks-nodepool-id:scale', 'PUT'] as const
}

export function getPutSksClusterIdNodepoolSksNodepoolIdScaleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id:scale']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id:scale']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutSksClusterIdNodepoolSksNodepoolIdScaleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id:scale']['$put']
      >,
    ) {
      return parseResponse(
        client['sks-cluster'][':id'].nodepool[':sks-nodepool-id:scale'].$put(args, options),
      )
    },
  })
}

export function usePutSksClusterIdNodepoolSksNodepoolIdScale<
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
                    (typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id:scale']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id:scale']['$put']
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
  const mutationDefaults = getPutSksClusterIdNodepoolSksNodepoolIdScaleMutationOptions<
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

export function getDbaasSettingsMysqlQueryKey() {
  return ['dbaas-settings-mysql', '/dbaas-settings-mysql'] as const
}

export function getDbaasSettingsMysqlQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDbaasSettingsMysqlQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-settings-mysql'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDbaasSettingsMysql<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-settings-mysql']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-settings-mysql']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-settings-mysql']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDbaasSettingsMysqlQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-settings-mysql']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasSettingsMysqlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDbaasSettingsMysqlQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-settings-mysql'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSksClusterIdUpgradeServiceLevelMutationKey() {
  return ['sks-cluster', '/sks-cluster/:id/upgrade-service-level', 'PUT'] as const
}

export function getPutSksClusterIdUpgradeServiceLevelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['sks-cluster'][':id']['upgrade-service-level']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['sks-cluster'][':id']['upgrade-service-level']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSksClusterIdUpgradeServiceLevelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['sks-cluster'][':id']['upgrade-service-level']['$put']
      >,
    ) {
      return parseResponse(
        client['sks-cluster'][':id']['upgrade-service-level'].$put(args, options),
      )
    },
  })
}

export function usePutSksClusterIdUpgradeServiceLevel<
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
                  ReturnType<(typeof client)['sks-cluster'][':id']['upgrade-service-level']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['sks-cluster'][':id']['upgrade-service-level']['$put']>,
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
  const mutationDefaults = getPutSksClusterIdUpgradeServiceLevelMutationOptions<
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

export function getDbaasSettingsValkeyQueryKey() {
  return ['dbaas-settings-valkey', '/dbaas-settings-valkey'] as const
}

export function getDbaasSettingsValkeyQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDbaasSettingsValkeyQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-settings-valkey'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDbaasSettingsValkey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-settings-valkey']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-settings-valkey']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-settings-valkey']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDbaasSettingsValkeyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-settings-valkey']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasSettingsValkeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDbaasSettingsValkeyQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-settings-valkey'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiKeyIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['api-key'][':id']['$get']>>,
) {
  return ['api-key', '/api-key/:id', toValue(args)] as const
}

export function getApiKeyIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['api-key'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiKeyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['api-key'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiKeyId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-key'][':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['api-key'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['api-key'][':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['api-key'][':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiKeyIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['api-key'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiKeyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiKeyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['api-key'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiKeyIdMutationKey() {
  return ['api-key', '/api-key/:id', 'DELETE'] as const
}

export function getDeleteApiKeyIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['api-key'][':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['api-key'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiKeyIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['api-key'][':id']['$delete']>) {
      return parseResponse(client['api-key'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['api-key'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['api-key'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiKeyIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteLoadBalancerIdServiceServiceIdFieldMutationKey() {
  return ['load-balancer', '/load-balancer/:id/service/:service-id/:field', 'DELETE'] as const
}

export function getDeleteLoadBalancerIdServiceServiceIdFieldMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['load-balancer'][':id']['service'][':service-id'][':field']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['load-balancer'][':id']['service'][':service-id'][':field']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteLoadBalancerIdServiceServiceIdFieldMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['load-balancer'][':id']['service'][':service-id'][':field']['$delete']
      >,
    ) {
      return parseResponse(
        client['load-balancer'][':id'].service[':service-id'][':field'].$delete(args, options),
      )
    },
  })
}

export function useDeleteLoadBalancerIdServiceServiceIdField<
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
                    (typeof client)['load-balancer'][':id']['service'][':service-id'][':field']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['load-balancer'][':id']['service'][':service-id'][':field']['$delete']
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
  const mutationDefaults = getDeleteLoadBalancerIdServiceServiceIdFieldMutationOptions<
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

export function getPostDbaasPostgresServiceNameDatabaseMutationKey() {
  return ['dbaas-postgres', '/dbaas-postgres/:service-name/database', 'POST'] as const
}

export function getPostDbaasPostgresServiceNameDatabaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['dbaas-postgres'][':service-name']['database']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-postgres'][':service-name']['database']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDbaasPostgresServiceNameDatabaseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-postgres'][':service-name']['database']['$post']
      >,
    ) {
      return parseResponse(client['dbaas-postgres'][':service-name'].database.$post(args, options))
    },
  })
}

export function usePostDbaasPostgresServiceNameDatabase<
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
                    (typeof client)['dbaas-postgres'][':service-name']['database']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-postgres'][':service-name']['database']['$post']>,
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
  const mutationDefaults = getPostDbaasPostgresServiceNameDatabaseMutationOptions<
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

export function getPostKmsKeyIdRotateMutationKey() {
  return ['kms-key', '/kms-key/:id/rotate', 'POST'] as const
}

export function getPostKmsKeyIdRotateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['kms-key'][':id']['rotate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['kms-key'][':id']['rotate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKmsKeyIdRotateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['kms-key'][':id']['rotate']['$post']>) {
      return parseResponse(client['kms-key'][':id'].rotate.$post(args, options))
    },
  })
}

export function usePostKmsKeyIdRotate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['kms-key'][':id']['rotate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['kms-key'][':id']['rotate']['$post']>,
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
  const mutationDefaults = getPostKmsKeyIdRotateMutationOptions<TError, TOnMutateResult>(
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

export function getDbaasSettingsThanosQueryKey() {
  return ['dbaas-settings-thanos', '/dbaas-settings-thanos'] as const
}

export function getDbaasSettingsThanosQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDbaasSettingsThanosQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-settings-thanos'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDbaasSettingsThanos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-settings-thanos']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-settings-thanos']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-settings-thanos']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDbaasSettingsThanosQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-settings-thanos']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasSettingsThanosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDbaasSettingsThanosQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-settings-thanos'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSecurityGroupIdRulesMutationKey() {
  return ['security-group', '/security-group/:id/rules', 'POST'] as const
}

export function getPostSecurityGroupIdRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['security-group'][':id']['rules']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['security-group'][':id']['rules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSecurityGroupIdRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['security-group'][':id']['rules']['$post']>,
    ) {
      return parseResponse(client['security-group'][':id'].rules.$post(args, options))
    },
  })
}

export function usePostSecurityGroupIdRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['security-group'][':id']['rules']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['security-group'][':id']['rules']['$post']>,
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
  const mutationDefaults = getPostSecurityGroupIdRulesMutationOptions<TError, TOnMutateResult>(
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

export function getDbaasSettingsClickhouseQueryKey() {
  return ['dbaas-settings-clickhouse', '/dbaas-settings-clickhouse'] as const
}

export function getDbaasSettingsClickhouseQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDbaasSettingsClickhouseQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-settings-clickhouse'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDbaasSettingsClickhouse<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['dbaas-settings-clickhouse']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-settings-clickhouse']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-settings-clickhouse']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDbaasSettingsClickhouseQueryKey>
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
          Awaited<ReturnType<(typeof client)['dbaas-settings-clickhouse']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasSettingsClickhouseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDbaasSettingsClickhouseQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-settings-clickhouse'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDbaasOpensearchServiceNameUserMutationKey() {
  return ['dbaas-opensearch', '/dbaas-opensearch/:service-name/user', 'POST'] as const
}

export function getPostDbaasOpensearchServiceNameUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-opensearch'][':service-name']['user']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-opensearch'][':service-name']['user']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDbaasOpensearchServiceNameUserMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['dbaas-opensearch'][':service-name']['user']['$post']>,
    ) {
      return parseResponse(client['dbaas-opensearch'][':service-name'].user.$post(args, options))
    },
  })
}

export function usePostDbaasOpensearchServiceNameUser<
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
                  ReturnType<(typeof client)['dbaas-opensearch'][':service-name']['user']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-opensearch'][':service-name']['user']['$post']>,
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
  const mutationDefaults = getPostDbaasOpensearchServiceNameUserMutationOptions<
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

export function getDbaasIntegrationTypesQueryKey() {
  return ['dbaas-integration-types', '/dbaas-integration-types'] as const
}

export function getDbaasIntegrationTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDbaasIntegrationTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-integration-types'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDbaasIntegrationTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-integration-types']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-integration-types']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-integration-types']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDbaasIntegrationTypesQueryKey>
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
          Awaited<ReturnType<(typeof client)['dbaas-integration-types']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasIntegrationTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDbaasIntegrationTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-integration-types'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEnvImpactPeriodQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['env-impact'][':period']['$get']>>,
) {
  return ['env-impact', '/env-impact/:period', toValue(args)] as const
}

export function getEnvImpactPeriodQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['env-impact'][':period']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEnvImpactPeriodQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['env-impact'][':period'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEnvImpactPeriod<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['env-impact'][':period']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['env-impact'][':period']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['env-impact'][':period']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['env-impact'][':period']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEnvImpactPeriodQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['env-impact'][':period']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnvImpactPeriodQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEnvImpactPeriodQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['env-impact'][':period'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteDbaasPostgresServiceNameUserUsernameMutationKey() {
  return ['dbaas-postgres', '/dbaas-postgres/:service-name/user/:username', 'DELETE'] as const
}

export function getDeleteDbaasPostgresServiceNameUserUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['dbaas-postgres'][':service-name']['user'][':username']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['dbaas-postgres'][':service-name']['user'][':username']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteDbaasPostgresServiceNameUserUsernameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-postgres'][':service-name']['user'][':username']['$delete']
      >,
    ) {
      return parseResponse(
        client['dbaas-postgres'][':service-name'].user[':username'].$delete(args, options),
      )
    },
  })
}

export function useDeleteDbaasPostgresServiceNameUserUsername<
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
                    (typeof client)['dbaas-postgres'][':service-name']['user'][':username']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-postgres'][':service-name']['user'][':username']['$delete']
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
  const mutationDefaults = getDeleteDbaasPostgresServiceNameUserUsernameMutationOptions<
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

export function getPutInstanceIdAddProtectionMutationKey() {
  return ['instance', '/instance/:id:add-protection', 'PUT'] as const
}

export function getPutInstanceIdAddProtectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instance)[':id:add-protection']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.instance)[':id:add-protection']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutInstanceIdAddProtectionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.instance)[':id:add-protection']['$put']>,
    ) {
      return parseResponse(client.instance[':id:add-protection'].$put(args, options))
    },
  })
}

export function usePutInstanceIdAddProtection<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instance)[':id:add-protection']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.instance)[':id:add-protection']['$put']>,
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
  const mutationDefaults = getPutInstanceIdAddProtectionMutationOptions<TError, TOnMutateResult>(
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

export function getPutDbaasPostgresServiceNameUserUsernameAllowReplicationMutationKey() {
  return [
    'dbaas-postgres',
    '/dbaas-postgres/:service-name/user/:username/allow-replication',
    'PUT',
  ] as const
}

export function getPutDbaasPostgresServiceNameUserUsernameAllowReplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['dbaas-postgres'][':service-name']['user'][':username']['allow-replication']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['dbaas-postgres'][':service-name']['user'][':username']['allow-replication']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutDbaasPostgresServiceNameUserUsernameAllowReplicationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-postgres'][':service-name']['user'][':username']['allow-replication']['$put']
      >,
    ) {
      return parseResponse(
        client['dbaas-postgres'][':service-name'].user[':username']['allow-replication'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutDbaasPostgresServiceNameUserUsernameAllowReplication<
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
                    (typeof client)['dbaas-postgres'][':service-name']['user'][':username']['allow-replication']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-postgres'][':service-name']['user'][':username']['allow-replication']['$put']
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
  const mutationDefaults =
    getPutDbaasPostgresServiceNameUserUsernameAllowReplicationMutationOptions<
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

export function getIamRoleIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['iam-role'][':id']['$get']>>,
) {
  return ['iam-role', '/iam-role/:id', toValue(args)] as const
}

export function getIamRoleIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['iam-role'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIamRoleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['iam-role'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIamRoleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['iam-role'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['iam-role'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['iam-role'][':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['iam-role'][':id']['$get']>>>
            >
          >,
          ReturnType<typeof getIamRoleIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['iam-role'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIamRoleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIamRoleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['iam-role'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutIamRoleIdMutationKey() {
  return ['iam-role', '/iam-role/:id', 'PUT'] as const
}

export function getPutIamRoleIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['iam-role'][':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['iam-role'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIamRoleIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['iam-role'][':id']['$put']>) {
      return parseResponse(client['iam-role'][':id'].$put(args, options))
    },
  })
}

export function usePutIamRoleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['iam-role'][':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['iam-role'][':id']['$put']>,
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
  const mutationDefaults = getPutIamRoleIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteIamRoleIdMutationKey() {
  return ['iam-role', '/iam-role/:id', 'DELETE'] as const
}

export function getDeleteIamRoleIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['iam-role'][':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['iam-role'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIamRoleIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['iam-role'][':id']['$delete']>) {
      return parseResponse(client['iam-role'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteIamRoleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['iam-role'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['iam-role'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteIamRoleIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteInstanceIdFieldMutationKey() {
  return ['instance', '/instance/:id/:field', 'DELETE'] as const
}

export function getDeleteInstanceIdFieldMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instance)[':id'][':field']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.instance)[':id'][':field']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteInstanceIdFieldMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.instance)[':id'][':field']['$delete']>) {
      return parseResponse(client.instance[':id'][':field'].$delete(args, options))
    },
  })
}

export function useDeleteInstanceIdField<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instance)[':id'][':field']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.instance)[':id'][':field']['$delete']>,
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
  const mutationDefaults = getDeleteInstanceIdFieldMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteInstancePoolIdFieldMutationKey() {
  return ['instance-pool', '/instance-pool/:id/:field', 'DELETE'] as const
}

export function getDeleteInstancePoolIdFieldMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['instance-pool'][':id'][':field']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['instance-pool'][':id'][':field']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteInstancePoolIdFieldMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['instance-pool'][':id'][':field']['$delete']>,
    ) {
      return parseResponse(client['instance-pool'][':id'][':field'].$delete(args, options))
    },
  })
}

export function useDeleteInstancePoolIdField<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['instance-pool'][':id'][':field']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['instance-pool'][':id'][':field']['$delete']>,
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
  const mutationDefaults = getDeleteInstancePoolIdFieldMutationOptions<TError, TOnMutateResult>(
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

export function getPutInstanceIdRemoveProtectionMutationKey() {
  return ['instance', '/instance/:id:remove-protection', 'PUT'] as const
}

export function getPutInstanceIdRemoveProtectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instance)[':id:remove-protection']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.instance)[':id:remove-protection']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutInstanceIdRemoveProtectionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.instance)[':id:remove-protection']['$put']>,
    ) {
      return parseResponse(client.instance[':id:remove-protection'].$put(args, options))
    },
  })
}

export function usePutInstanceIdRemoveProtection<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instance)[':id:remove-protection']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.instance)[':id:remove-protection']['$put']>,
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
  const mutationDefaults = getPutInstanceIdRemoveProtectionMutationOptions<TError, TOnMutateResult>(
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

export function getPostDbaasKafkaNameTopicAclConfigMutationKey() {
  return ['dbaas-kafka', '/dbaas-kafka/:name/topic/acl-config', 'POST'] as const
}

export function getPostDbaasKafkaNameTopicAclConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['dbaas-kafka'][':name']['topic']['acl-config']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-kafka'][':name']['topic']['acl-config']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDbaasKafkaNameTopicAclConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-kafka'][':name']['topic']['acl-config']['$post']
      >,
    ) {
      return parseResponse(client['dbaas-kafka'][':name'].topic['acl-config'].$post(args, options))
    },
  })
}

export function usePostDbaasKafkaNameTopicAclConfig<
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
                    (typeof client)['dbaas-kafka'][':name']['topic']['acl-config']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-kafka'][':name']['topic']['acl-config']['$post']>,
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
  const mutationDefaults = getPostDbaasKafkaNameTopicAclConfigMutationOptions<
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

export function getSnapshotQueryKey() {
  return ['snapshot', '/snapshot'] as const
}

export function getSnapshotQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSnapshotQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.snapshot.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSnapshot<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshot.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshot.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshot.$get>>>>
          >,
          ReturnType<typeof getSnapshotQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshot.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSnapshotQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSnapshotQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.snapshot.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOperationIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.operation)[':id']['$get']>>,
) {
  return ['operation', '/operation/:id', toValue(args)] as const
}

export function getOperationIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.operation)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOperationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.operation[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOperationId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.operation)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.operation)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.operation)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.operation)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getOperationIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.operation)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOperationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOperationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.operation[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDnsDomainIdZoneQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dns-domain'][':id']['zone']['$get']>>,
) {
  return ['dns-domain', '/dns-domain/:id/zone', toValue(args)] as const
}

export function getDnsDomainIdZoneQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dns-domain'][':id']['zone']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDnsDomainIdZoneQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dns-domain'][':id'].zone.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDnsDomainIdZone<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['dns-domain'][':id']['zone']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dns-domain'][':id']['zone']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dns-domain'][':id']['zone']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dns-domain'][':id']['zone']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDnsDomainIdZoneQueryKey>
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
          Awaited<ReturnType<(typeof client)['dns-domain'][':id']['zone']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDnsDomainIdZoneQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDnsDomainIdZoneQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['dns-domain'][':id'].zone.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDbaasExternalEndpointOpensearchNameMutationKey() {
  return [
    'dbaas-external-endpoint-opensearch',
    '/dbaas-external-endpoint-opensearch/:name',
    'POST',
  ] as const
}

export function getPostDbaasExternalEndpointOpensearchNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['dbaas-external-endpoint-opensearch'][':name']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-external-endpoint-opensearch'][':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDbaasExternalEndpointOpensearchNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-external-endpoint-opensearch'][':name']['$post']
      >,
    ) {
      return parseResponse(
        client['dbaas-external-endpoint-opensearch'][':name'].$post(args, options),
      )
    },
  })
}

export function usePostDbaasExternalEndpointOpensearchName<
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
                    (typeof client)['dbaas-external-endpoint-opensearch'][':name']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-external-endpoint-opensearch'][':name']['$post']>,
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
  const mutationDefaults = getPostDbaasExternalEndpointOpensearchNameMutationOptions<
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

export function getDeleteDbaasMysqlServiceNameDatabaseDatabaseNameMutationKey() {
  return ['dbaas-mysql', '/dbaas-mysql/:service-name/database/:database-name', 'DELETE'] as const
}

export function getDeleteDbaasMysqlServiceNameDatabaseDatabaseNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['dbaas-mysql'][':service-name']['database'][':database-name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['dbaas-mysql'][':service-name']['database'][':database-name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteDbaasMysqlServiceNameDatabaseDatabaseNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-mysql'][':service-name']['database'][':database-name']['$delete']
      >,
    ) {
      return parseResponse(
        client['dbaas-mysql'][':service-name'].database[':database-name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteDbaasMysqlServiceNameDatabaseDatabaseName<
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
                    (typeof client)['dbaas-mysql'][':service-name']['database'][':database-name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-mysql'][':service-name']['database'][':database-name']['$delete']
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
  const mutationDefaults = getDeleteDbaasMysqlServiceNameDatabaseDatabaseNameMutationOptions<
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

export function getPutSecurityGroupIdRemoveSourceMutationKey() {
  return ['security-group', '/security-group/:id:remove-source', 'PUT'] as const
}

export function getPutSecurityGroupIdRemoveSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['security-group'][':id:remove-source']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['security-group'][':id:remove-source']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSecurityGroupIdRemoveSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['security-group'][':id:remove-source']['$put']>,
    ) {
      return parseResponse(client['security-group'][':id:remove-source'].$put(args, options))
    },
  })
}

export function usePutSecurityGroupIdRemoveSource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['security-group'][':id:remove-source']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['security-group'][':id:remove-source']['$put']>,
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
  const mutationDefaults = getPutSecurityGroupIdRemoveSourceMutationOptions<
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

export function getIamOrganizationPolicyQueryKey() {
  return ['iam-organization-policy', '/iam-organization-policy'] as const
}

export function getIamOrganizationPolicyQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getIamOrganizationPolicyQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['iam-organization-policy'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIamOrganizationPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['iam-organization-policy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['iam-organization-policy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['iam-organization-policy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIamOrganizationPolicyQueryKey>
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
          Awaited<ReturnType<(typeof client)['iam-organization-policy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIamOrganizationPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getIamOrganizationPolicyQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['iam-organization-policy'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutIamOrganizationPolicyMutationKey() {
  return ['iam-organization-policy', '/iam-organization-policy', 'PUT'] as const
}

export function getPutIamOrganizationPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['iam-organization-policy']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['iam-organization-policy']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIamOrganizationPolicyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['iam-organization-policy']['$put']>) {
      return parseResponse(client['iam-organization-policy'].$put(args, options))
    },
  })
}

export function usePutIamOrganizationPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['iam-organization-policy']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['iam-organization-policy']['$put']>,
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
  const mutationDefaults = getPutIamOrganizationPolicyMutationOptions<TError, TOnMutateResult>(
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

export function getPostDbaasServiceLogsServiceNameMutationKey() {
  return ['dbaas-service-logs', '/dbaas-service-logs/:service-name', 'POST'] as const
}

export function getPostDbaasServiceLogsServiceNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-service-logs'][':service-name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-service-logs'][':service-name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDbaasServiceLogsServiceNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['dbaas-service-logs'][':service-name']['$post']>,
    ) {
      return parseResponse(client['dbaas-service-logs'][':service-name'].$post(args, options))
    },
  })
}

export function usePostDbaasServiceLogsServiceName<
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
                Awaited<ReturnType<(typeof client)['dbaas-service-logs'][':service-name']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-service-logs'][':service-name']['$post']>,
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
  const mutationDefaults = getPostDbaasServiceLogsServiceNameMutationOptions<
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

export function getPostKmsKeyIdDecryptMutationKey() {
  return ['kms-key', '/kms-key/:id/decrypt', 'POST'] as const
}

export function getPostKmsKeyIdDecryptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['kms-key'][':id']['decrypt']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['kms-key'][':id']['decrypt']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKmsKeyIdDecryptMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['kms-key'][':id']['decrypt']['$post']>,
    ) {
      return parseResponse(client['kms-key'][':id'].decrypt.$post(args, options))
    },
  })
}

export function usePostKmsKeyIdDecrypt<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['kms-key'][':id']['decrypt']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['kms-key'][':id']['decrypt']['$post']>,
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
  const mutationDefaults = getPostKmsKeyIdDecryptMutationOptions<TError, TOnMutateResult>(
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

export function getTemplateIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.template)[':id']['$get']>>,
) {
  return ['template', '/template/:id', toValue(args)] as const
}

export function getTemplateIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.template)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTemplateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.template[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTemplateId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.template)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.template)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.template)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.template)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getTemplateIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.template)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTemplateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTemplateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.template[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutTemplateIdMutationKey() {
  return ['template', '/template/:id', 'PUT'] as const
}

export function getPutTemplateIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.template)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.template)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTemplateIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.template)[':id']['$put']>) {
      return parseResponse(client.template[':id'].$put(args, options))
    },
  })
}

export function usePutTemplateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.template)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.template)[':id']['$put']>,
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
  const mutationDefaults = getPutTemplateIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTemplateIdMutationKey() {
  return ['template', '/template/:id', 'POST'] as const
}

export function getPostTemplateIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.template)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.template)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplateIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.template)[':id']['$post']>) {
      return parseResponse(client.template[':id'].$post(args, options))
    },
  })
}

export function usePostTemplateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.template)[':id']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.template)[':id']['$post']>,
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
  const mutationDefaults = getPostTemplateIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteTemplateIdMutationKey() {
  return ['template', '/template/:id', 'DELETE'] as const
}

export function getDeleteTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.template)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.template)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTemplateIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.template)[':id']['$delete']>) {
      return parseResponse(client.template[':id'].$delete(args, options))
    },
  })
}

export function useDeleteTemplateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.template)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.template)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteTemplateIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutDbaasPostgresNameMaintenanceStartMutationKey() {
  return ['dbaas-postgres', '/dbaas-postgres/:name/maintenance/start', 'PUT'] as const
}

export function getPutDbaasPostgresNameMaintenanceStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['dbaas-postgres'][':name']['maintenance']['start']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-postgres'][':name']['maintenance']['start']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDbaasPostgresNameMaintenanceStartMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-postgres'][':name']['maintenance']['start']['$put']
      >,
    ) {
      return parseResponse(client['dbaas-postgres'][':name'].maintenance.start.$put(args, options))
    },
  })
}

export function usePutDbaasPostgresNameMaintenanceStart<
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
                    (typeof client)['dbaas-postgres'][':name']['maintenance']['start']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-postgres'][':name']['maintenance']['start']['$put']
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
  const mutationDefaults = getPutDbaasPostgresNameMaintenanceStartMutationOptions<
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

export function getDbaasGrafanaServiceNameUserUsernamePasswordRevealQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['dbaas-grafana'][':service-name']['user'][':username']['password']['reveal']['$get']
    >
  >,
) {
  return [
    'dbaas-grafana',
    '/dbaas-grafana/:service-name/user/:username/password/reveal',
    toValue(args),
  ] as const
}

export function getDbaasGrafanaServiceNameUserUsernamePasswordRevealQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['dbaas-grafana'][':service-name']['user'][':username']['password']['reveal']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDbaasGrafanaServiceNameUserUsernamePasswordRevealQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-grafana'][':service-name'].user[':username'].password.reveal.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useDbaasGrafanaServiceNameUserUsernamePasswordReveal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['dbaas-grafana'][':service-name']['user'][':username']['password']['reveal']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['dbaas-grafana'][':service-name']['user'][':username']['password']['reveal']['$get']
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
                    (typeof client)['dbaas-grafana'][':service-name']['user'][':username']['password']['reveal']['$get']
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
                    (typeof client)['dbaas-grafana'][':service-name']['user'][':username']['password']['reveal']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDbaasGrafanaServiceNameUserUsernamePasswordRevealQueryKey>
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
              (typeof client)['dbaas-grafana'][':service-name']['user'][':username']['password']['reveal']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasGrafanaServiceNameUserUsernamePasswordRevealQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDbaasGrafanaServiceNameUserUsernamePasswordRevealQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-grafana'][':service-name'].user[':username'].password.reveal.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutUserIdMutationKey() {
  return ['user', '/user/:id', 'PUT'] as const
}

export function getPutUserIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.user)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.user)[':id']['$put']>) {
      return parseResponse(client.user[':id'].$put(args, options))
    },
  })
}

export function usePutUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.user)[':id']['$put']>,
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
  const mutationDefaults = getPutUserIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteUserIdMutationKey() {
  return ['user', '/user/:id', 'DELETE'] as const
}

export function getDeleteUserIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':id']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.user)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.user)[':id']['$delete']>) {
      return parseResponse(client.user[':id'].$delete(args, options))
    },
  })
}

export function useDeleteUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.user)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteUserIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getReverseDnsInstanceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['reverse-dns']['instance'][':id']['$get']>
  >,
) {
  return ['reverse-dns', '/reverse-dns/instance/:id', toValue(args)] as const
}

export function getReverseDnsInstanceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['reverse-dns']['instance'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReverseDnsInstanceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['reverse-dns'].instance[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReverseDnsInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['reverse-dns']['instance'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['reverse-dns']['instance'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['reverse-dns']['instance'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['reverse-dns']['instance'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReverseDnsInstanceIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['reverse-dns']['instance'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReverseDnsInstanceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReverseDnsInstanceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['reverse-dns'].instance[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostReverseDnsInstanceIdMutationKey() {
  return ['reverse-dns', '/reverse-dns/instance/:id', 'POST'] as const
}

export function getPostReverseDnsInstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['reverse-dns']['instance'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['reverse-dns']['instance'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostReverseDnsInstanceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['reverse-dns']['instance'][':id']['$post']>,
    ) {
      return parseResponse(client['reverse-dns'].instance[':id'].$post(args, options))
    },
  })
}

export function usePostReverseDnsInstanceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['reverse-dns']['instance'][':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['reverse-dns']['instance'][':id']['$post']>,
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
  const mutationDefaults = getPostReverseDnsInstanceIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteReverseDnsInstanceIdMutationKey() {
  return ['reverse-dns', '/reverse-dns/instance/:id', 'DELETE'] as const
}

export function getDeleteReverseDnsInstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['reverse-dns']['instance'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['reverse-dns']['instance'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteReverseDnsInstanceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['reverse-dns']['instance'][':id']['$delete']>,
    ) {
      return parseResponse(client['reverse-dns'].instance[':id'].$delete(args, options))
    },
  })
}

export function useDeleteReverseDnsInstanceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['reverse-dns']['instance'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['reverse-dns']['instance'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteReverseDnsInstanceIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutInstancePoolIdEvictMutationKey() {
  return ['instance-pool', '/instance-pool/:id:evict', 'PUT'] as const
}

export function getPutInstancePoolIdEvictMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['instance-pool'][':id:evict']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['instance-pool'][':id:evict']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutInstancePoolIdEvictMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['instance-pool'][':id:evict']['$put']>,
    ) {
      return parseResponse(client['instance-pool'][':id:evict'].$put(args, options))
    },
  })
}

export function usePutInstancePoolIdEvict<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['instance-pool'][':id:evict']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['instance-pool'][':id:evict']['$put']>,
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
  const mutationDefaults = getPutInstancePoolIdEvictMutationOptions<TError, TOnMutateResult>(
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

export function getPutSksClusterIdRotateCsiCredentialsMutationKey() {
  return ['sks-cluster', '/sks-cluster/:id/rotate-csi-credentials', 'PUT'] as const
}

export function getPutSksClusterIdRotateCsiCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['sks-cluster'][':id']['rotate-csi-credentials']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['sks-cluster'][':id']['rotate-csi-credentials']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSksClusterIdRotateCsiCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['sks-cluster'][':id']['rotate-csi-credentials']['$put']
      >,
    ) {
      return parseResponse(
        client['sks-cluster'][':id']['rotate-csi-credentials'].$put(args, options),
      )
    },
  })
}

export function usePutSksClusterIdRotateCsiCredentials<
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
                    (typeof client)['sks-cluster'][':id']['rotate-csi-credentials']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['sks-cluster'][':id']['rotate-csi-credentials']['$put']>,
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
  const mutationDefaults = getPutSksClusterIdRotateCsiCredentialsMutationOptions<
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

export function getPutDbaasGrafanaServiceNameUserUsernamePasswordResetMutationKey() {
  return [
    'dbaas-grafana',
    '/dbaas-grafana/:service-name/user/:username/password/reset',
    'PUT',
  ] as const
}

export function getPutDbaasGrafanaServiceNameUserUsernamePasswordResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['dbaas-grafana'][':service-name']['user'][':username']['password']['reset']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['dbaas-grafana'][':service-name']['user'][':username']['password']['reset']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutDbaasGrafanaServiceNameUserUsernamePasswordResetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-grafana'][':service-name']['user'][':username']['password']['reset']['$put']
      >,
    ) {
      return parseResponse(
        client['dbaas-grafana'][':service-name'].user[':username'].password.reset.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutDbaasGrafanaServiceNameUserUsernamePasswordReset<
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
                    (typeof client)['dbaas-grafana'][':service-name']['user'][':username']['password']['reset']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-grafana'][':service-name']['user'][':username']['password']['reset']['$put']
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
  const mutationDefaults = getPutDbaasGrafanaServiceNameUserUsernamePasswordResetMutationOptions<
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

export function getPutDbaasClickhouseServiceNameUserUsernamePasswordResetMutationKey() {
  return [
    'dbaas-clickhouse',
    '/dbaas-clickhouse/:service-name/user/:username/password/reset',
    'PUT',
  ] as const
}

export function getPutDbaasClickhouseServiceNameUserUsernamePasswordResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['dbaas-clickhouse'][':service-name']['user'][':username']['password']['reset']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['dbaas-clickhouse'][':service-name']['user'][':username']['password']['reset']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutDbaasClickhouseServiceNameUserUsernamePasswordResetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-clickhouse'][':service-name']['user'][':username']['password']['reset']['$put']
      >,
    ) {
      return parseResponse(
        client['dbaas-clickhouse'][':service-name'].user[':username'].password.reset.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutDbaasClickhouseServiceNameUserUsernamePasswordReset<
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
                    (typeof client)['dbaas-clickhouse'][':service-name']['user'][':username']['password']['reset']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-clickhouse'][':service-name']['user'][':username']['password']['reset']['$put']
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
  const mutationDefaults = getPutDbaasClickhouseServiceNameUserUsernamePasswordResetMutationOptions<
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

export function getPutSecurityGroupIdDetachMutationKey() {
  return ['security-group', '/security-group/:id:detach', 'PUT'] as const
}

export function getPutSecurityGroupIdDetachMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['security-group'][':id:detach']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['security-group'][':id:detach']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSecurityGroupIdDetachMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['security-group'][':id:detach']['$put']>,
    ) {
      return parseResponse(client['security-group'][':id:detach'].$put(args, options))
    },
  })
}

export function usePutSecurityGroupIdDetach<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['security-group'][':id:detach']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['security-group'][':id:detach']['$put']>,
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
  const mutationDefaults = getPutSecurityGroupIdDetachMutationOptions<TError, TOnMutateResult>(
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

export function getDbaasClickhouseServiceNameAclConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-clickhouse'][':service-name']['acl-config']['$get']>
  >,
) {
  return ['dbaas-clickhouse', '/dbaas-clickhouse/:service-name/acl-config', toValue(args)] as const
}

export function getDbaasClickhouseServiceNameAclConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-clickhouse'][':service-name']['acl-config']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDbaasClickhouseServiceNameAclConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-clickhouse'][':service-name']['acl-config'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDbaasClickhouseServiceNameAclConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['dbaas-clickhouse'][':service-name']['acl-config']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-clickhouse'][':service-name']['acl-config']['$get']>
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
                    (typeof client)['dbaas-clickhouse'][':service-name']['acl-config']['$get']
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
                    (typeof client)['dbaas-clickhouse'][':service-name']['acl-config']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDbaasClickhouseServiceNameAclConfigQueryKey>
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
            ReturnType<(typeof client)['dbaas-clickhouse'][':service-name']['acl-config']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasClickhouseServiceNameAclConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDbaasClickhouseServiceNameAclConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-clickhouse'][':service-name']['acl-config'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDbaasClickhouseServiceNameUserQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-clickhouse'][':service-name']['user']['$get']>
  >,
) {
  return ['dbaas-clickhouse', '/dbaas-clickhouse/:service-name/user', toValue(args)] as const
}

export function getDbaasClickhouseServiceNameUserQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-clickhouse'][':service-name']['user']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDbaasClickhouseServiceNameUserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-clickhouse'][':service-name'].user.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDbaasClickhouseServiceNameUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['dbaas-clickhouse'][':service-name']['user']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-clickhouse'][':service-name']['user']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['dbaas-clickhouse'][':service-name']['user']['$get']>
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
                  ReturnType<(typeof client)['dbaas-clickhouse'][':service-name']['user']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDbaasClickhouseServiceNameUserQueryKey>
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
          Awaited<ReturnType<(typeof client)['dbaas-clickhouse'][':service-name']['user']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasClickhouseServiceNameUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDbaasClickhouseServiceNameUserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-clickhouse'][':service-name'].user.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDbaasClickhouseServiceNameUserMutationKey() {
  return ['dbaas-clickhouse', '/dbaas-clickhouse/:service-name/user', 'POST'] as const
}

export function getPostDbaasClickhouseServiceNameUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-clickhouse'][':service-name']['user']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-clickhouse'][':service-name']['user']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDbaasClickhouseServiceNameUserMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['dbaas-clickhouse'][':service-name']['user']['$post']>,
    ) {
      return parseResponse(client['dbaas-clickhouse'][':service-name'].user.$post(args, options))
    },
  })
}

export function usePostDbaasClickhouseServiceNameUser<
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
                  ReturnType<(typeof client)['dbaas-clickhouse'][':service-name']['user']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-clickhouse'][':service-name']['user']['$post']>,
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
  const mutationDefaults = getPostDbaasClickhouseServiceNameUserMutationOptions<
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

export function getPutSksClusterIdNodepoolSksNodepoolIdEvictMutationKey() {
  return ['sks-cluster', '/sks-cluster/:id/nodepool/:sks-nodepool-id:evict', 'PUT'] as const
}

export function getPutSksClusterIdNodepoolSksNodepoolIdEvictMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id:evict']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id:evict']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutSksClusterIdNodepoolSksNodepoolIdEvictMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id:evict']['$put']
      >,
    ) {
      return parseResponse(
        client['sks-cluster'][':id'].nodepool[':sks-nodepool-id:evict'].$put(args, options),
      )
    },
  })
}

export function usePutSksClusterIdNodepoolSksNodepoolIdEvict<
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
                    (typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id:evict']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id:evict']['$put']
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
  const mutationDefaults = getPutSksClusterIdNodepoolSksNodepoolIdEvictMutationOptions<
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

export function getPutDbaasValkeyServiceNameUserUsernameMutationKey() {
  return ['dbaas-valkey', '/dbaas-valkey/:service-name/user/:username', 'PUT'] as const
}

export function getPutDbaasValkeyServiceNameUserUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['dbaas-valkey'][':service-name']['user'][':username']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-valkey'][':service-name']['user'][':username']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDbaasValkeyServiceNameUserUsernameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-valkey'][':service-name']['user'][':username']['$put']
      >,
    ) {
      return parseResponse(
        client['dbaas-valkey'][':service-name'].user[':username'].$put(args, options),
      )
    },
  })
}

export function usePutDbaasValkeyServiceNameUserUsername<
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
                    (typeof client)['dbaas-valkey'][':service-name']['user'][':username']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-valkey'][':service-name']['user'][':username']['$put']
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
  const mutationDefaults = getPutDbaasValkeyServiceNameUserUsernameMutationOptions<
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

export function getDeleteDbaasValkeyServiceNameUserUsernameMutationKey() {
  return ['dbaas-valkey', '/dbaas-valkey/:service-name/user/:username', 'DELETE'] as const
}

export function getDeleteDbaasValkeyServiceNameUserUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['dbaas-valkey'][':service-name']['user'][':username']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['dbaas-valkey'][':service-name']['user'][':username']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteDbaasValkeyServiceNameUserUsernameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-valkey'][':service-name']['user'][':username']['$delete']
      >,
    ) {
      return parseResponse(
        client['dbaas-valkey'][':service-name'].user[':username'].$delete(args, options),
      )
    },
  })
}

export function useDeleteDbaasValkeyServiceNameUserUsername<
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
                    (typeof client)['dbaas-valkey'][':service-name']['user'][':username']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-valkey'][':service-name']['user'][':username']['$delete']
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
  const mutationDefaults = getDeleteDbaasValkeyServiceNameUserUsernameMutationOptions<
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

export function getPostKmsKeyIdDisableMutationKey() {
  return ['kms-key', '/kms-key/:id/disable', 'POST'] as const
}

export function getPostKmsKeyIdDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['kms-key'][':id']['disable']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['kms-key'][':id']['disable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKmsKeyIdDisableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['kms-key'][':id']['disable']['$post']>,
    ) {
      return parseResponse(client['kms-key'][':id'].disable.$post(args, options))
    },
  })
}

export function usePostKmsKeyIdDisable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['kms-key'][':id']['disable']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['kms-key'][':id']['disable']['$post']>,
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
  const mutationDefaults = getPostKmsKeyIdDisableMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteDbaasKafkaNameSchemaRegistryAclConfigAclIdMutationKey() {
  return ['dbaas-kafka', '/dbaas-kafka/:name/schema-registry/acl-config/:acl-id', 'DELETE'] as const
}

export function getDeleteDbaasKafkaNameSchemaRegistryAclConfigAclIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['dbaas-kafka'][':name']['schema-registry']['acl-config'][':acl-id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['dbaas-kafka'][':name']['schema-registry']['acl-config'][':acl-id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteDbaasKafkaNameSchemaRegistryAclConfigAclIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-kafka'][':name']['schema-registry']['acl-config'][':acl-id']['$delete']
      >,
    ) {
      return parseResponse(
        client['dbaas-kafka'][':name']['schema-registry']['acl-config'][':acl-id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteDbaasKafkaNameSchemaRegistryAclConfigAclId<
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
                    (typeof client)['dbaas-kafka'][':name']['schema-registry']['acl-config'][':acl-id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-kafka'][':name']['schema-registry']['acl-config'][':acl-id']['$delete']
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
  const mutationDefaults = getDeleteDbaasKafkaNameSchemaRegistryAclConfigAclIdMutationOptions<
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

export function getDnsDomainIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dns-domain'][':id']['$get']>>,
) {
  return ['dns-domain', '/dns-domain/:id', toValue(args)] as const
}

export function getDnsDomainIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dns-domain'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDnsDomainIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dns-domain'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDnsDomainId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['dns-domain'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dns-domain'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dns-domain'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dns-domain'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDnsDomainIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dns-domain'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDnsDomainIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDnsDomainIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['dns-domain'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteDnsDomainIdMutationKey() {
  return ['dns-domain', '/dns-domain/:id', 'DELETE'] as const
}

export function getDeleteDnsDomainIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dns-domain'][':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['dns-domain'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDnsDomainIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['dns-domain'][':id']['$delete']>) {
      return parseResponse(client['dns-domain'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteDnsDomainId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dns-domain'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dns-domain'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteDnsDomainIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutBlockStorageIdResizeVolumeMutationKey() {
  return ['block-storage', '/block-storage/:id:resize-volume', 'PUT'] as const
}

export function getPutBlockStorageIdResizeVolumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['block-storage'][':id:resize-volume']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['block-storage'][':id:resize-volume']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBlockStorageIdResizeVolumeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['block-storage'][':id:resize-volume']['$put']>,
    ) {
      return parseResponse(client['block-storage'][':id:resize-volume'].$put(args, options))
    },
  })
}

export function usePutBlockStorageIdResizeVolume<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['block-storage'][':id:resize-volume']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['block-storage'][':id:resize-volume']['$put']>,
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
  const mutationDefaults = getPutBlockStorageIdResizeVolumeMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteDbaasKafkaServiceNameUserUsernameMutationKey() {
  return ['dbaas-kafka', '/dbaas-kafka/:service-name/user/:username', 'DELETE'] as const
}

export function getDeleteDbaasKafkaServiceNameUserUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['dbaas-kafka'][':service-name']['user'][':username']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['dbaas-kafka'][':service-name']['user'][':username']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteDbaasKafkaServiceNameUserUsernameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-kafka'][':service-name']['user'][':username']['$delete']
      >,
    ) {
      return parseResponse(
        client['dbaas-kafka'][':service-name'].user[':username'].$delete(args, options),
      )
    },
  })
}

export function useDeleteDbaasKafkaServiceNameUserUsername<
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
                    (typeof client)['dbaas-kafka'][':service-name']['user'][':username']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-kafka'][':service-name']['user'][':username']['$delete']
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
  const mutationDefaults = getDeleteDbaasKafkaServiceNameUserUsernameMutationOptions<
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

export function getDbaasServiceTypeServiceTypeNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-service-type'][':service-type-name']['$get']>
  >,
) {
  return ['dbaas-service-type', '/dbaas-service-type/:service-type-name', toValue(args)] as const
}

export function getDbaasServiceTypeServiceTypeNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-service-type'][':service-type-name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDbaasServiceTypeServiceTypeNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-service-type'][':service-type-name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDbaasServiceTypeServiceTypeName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['dbaas-service-type'][':service-type-name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-service-type'][':service-type-name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['dbaas-service-type'][':service-type-name']['$get']>
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
                  ReturnType<(typeof client)['dbaas-service-type'][':service-type-name']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDbaasServiceTypeServiceTypeNameQueryKey>
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
          Awaited<ReturnType<(typeof client)['dbaas-service-type'][':service-type-name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasServiceTypeServiceTypeNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDbaasServiceTypeServiceTypeNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-service-type'][':service-type-name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSecurityGroupIdAddSourceMutationKey() {
  return ['security-group', '/security-group/:id:add-source', 'PUT'] as const
}

export function getPutSecurityGroupIdAddSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['security-group'][':id:add-source']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['security-group'][':id:add-source']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSecurityGroupIdAddSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['security-group'][':id:add-source']['$put']>,
    ) {
      return parseResponse(client['security-group'][':id:add-source'].$put(args, options))
    },
  })
}

export function usePutSecurityGroupIdAddSource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['security-group'][':id:add-source']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['security-group'][':id:add-source']['$put']>,
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
  const mutationDefaults = getPutSecurityGroupIdAddSourceMutationOptions<TError, TOnMutateResult>(
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

export function getPostDbaasExternalEndpointDatadogNameMutationKey() {
  return [
    'dbaas-external-endpoint-datadog',
    '/dbaas-external-endpoint-datadog/:name',
    'POST',
  ] as const
}

export function getPostDbaasExternalEndpointDatadogNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-external-endpoint-datadog'][':name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-external-endpoint-datadog'][':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDbaasExternalEndpointDatadogNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['dbaas-external-endpoint-datadog'][':name']['$post']>,
    ) {
      return parseResponse(client['dbaas-external-endpoint-datadog'][':name'].$post(args, options))
    },
  })
}

export function usePostDbaasExternalEndpointDatadogName<
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
                  ReturnType<(typeof client)['dbaas-external-endpoint-datadog'][':name']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-external-endpoint-datadog'][':name']['$post']>,
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
  const mutationDefaults = getPostDbaasExternalEndpointDatadogNameMutationOptions<
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

export function getPutDbaasMysqlNameMaintenanceStartMutationKey() {
  return ['dbaas-mysql', '/dbaas-mysql/:name/maintenance/start', 'PUT'] as const
}

export function getPutDbaasMysqlNameMaintenanceStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['dbaas-mysql'][':name']['maintenance']['start']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-mysql'][':name']['maintenance']['start']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDbaasMysqlNameMaintenanceStartMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-mysql'][':name']['maintenance']['start']['$put']
      >,
    ) {
      return parseResponse(client['dbaas-mysql'][':name'].maintenance.start.$put(args, options))
    },
  })
}

export function usePutDbaasMysqlNameMaintenanceStart<
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
                    (typeof client)['dbaas-mysql'][':name']['maintenance']['start']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-mysql'][':name']['maintenance']['start']['$put']>,
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
  const mutationDefaults = getPutDbaasMysqlNameMaintenanceStartMutationOptions<
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

export function getPutDbaasOpensearchServiceNameUserUsernamePasswordResetMutationKey() {
  return [
    'dbaas-opensearch',
    '/dbaas-opensearch/:service-name/user/:username/password/reset',
    'PUT',
  ] as const
}

export function getPutDbaasOpensearchServiceNameUserUsernamePasswordResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['dbaas-opensearch'][':service-name']['user'][':username']['password']['reset']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['dbaas-opensearch'][':service-name']['user'][':username']['password']['reset']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutDbaasOpensearchServiceNameUserUsernamePasswordResetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-opensearch'][':service-name']['user'][':username']['password']['reset']['$put']
      >,
    ) {
      return parseResponse(
        client['dbaas-opensearch'][':service-name'].user[':username'].password.reset.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutDbaasOpensearchServiceNameUserUsernamePasswordReset<
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
                    (typeof client)['dbaas-opensearch'][':service-name']['user'][':username']['password']['reset']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-opensearch'][':service-name']['user'][':username']['password']['reset']['$put']
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
  const mutationDefaults = getPutDbaasOpensearchServiceNameUserUsernamePasswordResetMutationOptions<
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

export function getAiModelIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ai.model)[':id']['$get']>>,
) {
  return ['ai', '/ai/model/:id', toValue(args)] as const
}

export function getAiModelIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ai.model)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAiModelIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ai.model[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAiModelId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ai.model)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ai.model)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ai.model)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ai.model)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getAiModelIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ai.model)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAiModelIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAiModelIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ai.model[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAiModelIdMutationKey() {
  return ['ai', '/ai/model/:id', 'DELETE'] as const
}

export function getDeleteAiModelIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ai.model)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.ai.model)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAiModelIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ai.model)[':id']['$delete']>) {
      return parseResponse(client.ai.model[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAiModelId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ai.model)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.ai.model)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteAiModelIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSosBucketsUsageQueryKey() {
  return ['sos-buckets-usage', '/sos-buckets-usage'] as const
}

export function getSosBucketsUsageQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSosBucketsUsageQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['sos-buckets-usage'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSosBucketsUsage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['sos-buckets-usage']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['sos-buckets-usage']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['sos-buckets-usage']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSosBucketsUsageQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['sos-buckets-usage']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSosBucketsUsageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSosBucketsUsageQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['sos-buckets-usage'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutInstanceIdResetMutationKey() {
  return ['instance', '/instance/:id:reset', 'PUT'] as const
}

export function getPutInstanceIdResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.instance)[':id:reset']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.instance)[':id:reset']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutInstanceIdResetMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.instance)[':id:reset']['$put']>) {
      return parseResponse(client.instance[':id:reset'].$put(args, options))
    },
  })
}

export function usePutInstanceIdReset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instance)[':id:reset']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.instance)[':id:reset']['$put']>,
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
  const mutationDefaults = getPutInstanceIdResetMutationOptions<TError, TOnMutateResult>(
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

export function getDbaasMysqlServiceNameUserUsernamePasswordRevealQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['dbaas-mysql'][':service-name']['user'][':username']['password']['reveal']['$get']
    >
  >,
) {
  return [
    'dbaas-mysql',
    '/dbaas-mysql/:service-name/user/:username/password/reveal',
    toValue(args),
  ] as const
}

export function getDbaasMysqlServiceNameUserUsernamePasswordRevealQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['dbaas-mysql'][':service-name']['user'][':username']['password']['reveal']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDbaasMysqlServiceNameUserUsernamePasswordRevealQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-mysql'][':service-name'].user[':username'].password.reveal.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useDbaasMysqlServiceNameUserUsernamePasswordReveal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['dbaas-mysql'][':service-name']['user'][':username']['password']['reveal']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['dbaas-mysql'][':service-name']['user'][':username']['password']['reveal']['$get']
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
                    (typeof client)['dbaas-mysql'][':service-name']['user'][':username']['password']['reveal']['$get']
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
                    (typeof client)['dbaas-mysql'][':service-name']['user'][':username']['password']['reveal']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDbaasMysqlServiceNameUserUsernamePasswordRevealQueryKey>
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
              (typeof client)['dbaas-mysql'][':service-name']['user'][':username']['password']['reveal']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasMysqlServiceNameUserUsernamePasswordRevealQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDbaasMysqlServiceNameUserUsernamePasswordRevealQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-mysql'][':service-name'].user[':username'].password.reveal.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getSshKeyNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['ssh-key'][':name']['$get']>>,
) {
  return ['ssh-key', '/ssh-key/:name', toValue(args)] as const
}

export function getSshKeyNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['ssh-key'][':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSshKeyNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['ssh-key'][':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSshKeyName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-key'][':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['ssh-key'][':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-key'][':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-key'][':name']['$get']>>>
            >
          >,
          ReturnType<typeof getSshKeyNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-key'][':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSshKeyNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSshKeyNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['ssh-key'][':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSshKeyNameMutationKey() {
  return ['ssh-key', '/ssh-key/:name', 'DELETE'] as const
}

export function getDeleteSshKeyNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-key'][':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['ssh-key'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSshKeyNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['ssh-key'][':name']['$delete']>) {
      return parseResponse(client['ssh-key'][':name'].$delete(args, options))
    },
  })
}

export function useDeleteSshKeyName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['ssh-key'][':name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['ssh-key'][':name']['$delete']>,
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
  const mutationDefaults = getDeleteSshKeyNameMutationOptions<TError, TOnMutateResult>(
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

export function getPostDbaasServiceMetricsServiceNameMutationKey() {
  return ['dbaas-service-metrics', '/dbaas-service-metrics/:service-name', 'POST'] as const
}

export function getPostDbaasServiceMetricsServiceNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-service-metrics'][':service-name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-service-metrics'][':service-name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDbaasServiceMetricsServiceNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['dbaas-service-metrics'][':service-name']['$post']>,
    ) {
      return parseResponse(client['dbaas-service-metrics'][':service-name'].$post(args, options))
    },
  })
}

export function usePostDbaasServiceMetricsServiceName<
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
                  ReturnType<(typeof client)['dbaas-service-metrics'][':service-name']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-service-metrics'][':service-name']['$post']>,
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
  const mutationDefaults = getPostDbaasServiceMetricsServiceNameMutationOptions<
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

export function getDeployTargetIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['deploy-target'][':id']['$get']>>,
) {
  return ['deploy-target', '/deploy-target/:id', toValue(args)] as const
}

export function getDeployTargetIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['deploy-target'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDeployTargetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['deploy-target'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDeployTargetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['deploy-target'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['deploy-target'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['deploy-target'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['deploy-target'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDeployTargetIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['deploy-target'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeployTargetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDeployTargetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['deploy-target'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutElasticIpIdDetachMutationKey() {
  return ['elastic-ip', '/elastic-ip/:id:detach', 'PUT'] as const
}

export function getPutElasticIpIdDetachMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['elastic-ip'][':id:detach']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['elastic-ip'][':id:detach']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutElasticIpIdDetachMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['elastic-ip'][':id:detach']['$put']>) {
      return parseResponse(client['elastic-ip'][':id:detach'].$put(args, options))
    },
  })
}

export function usePutElasticIpIdDetach<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['elastic-ip'][':id:detach']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['elastic-ip'][':id:detach']['$put']>,
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
  const mutationDefaults = getPutElasticIpIdDetachMutationOptions<TError, TOnMutateResult>(
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

export function getPutDbaasMysqlNameEnableWritesMutationKey() {
  return ['dbaas-mysql', '/dbaas-mysql/:name/enable/writes', 'PUT'] as const
}

export function getPutDbaasMysqlNameEnableWritesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-mysql'][':name']['enable']['writes']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-mysql'][':name']['enable']['writes']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDbaasMysqlNameEnableWritesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['dbaas-mysql'][':name']['enable']['writes']['$put']>,
    ) {
      return parseResponse(client['dbaas-mysql'][':name'].enable.writes.$put(args, options))
    },
  })
}

export function usePutDbaasMysqlNameEnableWrites<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['dbaas-mysql'][':name']['enable']['writes']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-mysql'][':name']['enable']['writes']['$put']>,
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
  const mutationDefaults = getPutDbaasMysqlNameEnableWritesMutationOptions<TError, TOnMutateResult>(
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

export function getDbaasKafkaServiceNameUserUsernamePasswordRevealQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['dbaas-kafka'][':service-name']['user'][':username']['password']['reveal']['$get']
    >
  >,
) {
  return [
    'dbaas-kafka',
    '/dbaas-kafka/:service-name/user/:username/password/reveal',
    toValue(args),
  ] as const
}

export function getDbaasKafkaServiceNameUserUsernamePasswordRevealQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['dbaas-kafka'][':service-name']['user'][':username']['password']['reveal']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDbaasKafkaServiceNameUserUsernamePasswordRevealQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-kafka'][':service-name'].user[':username'].password.reveal.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useDbaasKafkaServiceNameUserUsernamePasswordReveal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['dbaas-kafka'][':service-name']['user'][':username']['password']['reveal']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['dbaas-kafka'][':service-name']['user'][':username']['password']['reveal']['$get']
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
                    (typeof client)['dbaas-kafka'][':service-name']['user'][':username']['password']['reveal']['$get']
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
                    (typeof client)['dbaas-kafka'][':service-name']['user'][':username']['password']['reveal']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDbaasKafkaServiceNameUserUsernamePasswordRevealQueryKey>
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
              (typeof client)['dbaas-kafka'][':service-name']['user'][':username']['password']['reveal']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasKafkaServiceNameUserUsernamePasswordRevealQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDbaasKafkaServiceNameUserUsernamePasswordRevealQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-kafka'][':service-name'].user[':username'].password.reveal.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteVpcVpcIdSubnetSubnetIdRouteIdMutationKey() {
  return ['vpc', '/vpc/:vpc-id/subnet/:subnet-id/route/:id', 'DELETE'] as const
}

export function getDeleteVpcVpcIdSubnetSubnetIdRouteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['route'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['route'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteVpcVpcIdSubnetSubnetIdRouteIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['route'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.vpc[':vpc-id'].subnet[':subnet-id'].route[':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteVpcVpcIdSubnetSubnetIdRouteId<
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
                    (typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['route'][':id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['route'][':id']['$delete']
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
  const mutationDefaults = getDeleteVpcVpcIdSubnetSubnetIdRouteIdMutationOptions<
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

export function getPostKmsKeyIdEncryptMutationKey() {
  return ['kms-key', '/kms-key/:id/encrypt', 'POST'] as const
}

export function getPostKmsKeyIdEncryptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['kms-key'][':id']['encrypt']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['kms-key'][':id']['encrypt']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKmsKeyIdEncryptMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['kms-key'][':id']['encrypt']['$post']>,
    ) {
      return parseResponse(client['kms-key'][':id'].encrypt.$post(args, options))
    },
  })
}

export function usePostKmsKeyIdEncrypt<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['kms-key'][':id']['encrypt']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['kms-key'][':id']['encrypt']['$post']>,
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
  const mutationDefaults = getPostKmsKeyIdEncryptMutationOptions<TError, TOnMutateResult>(
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

export function getPostDbaasTaskMigrationCheckServiceMutationKey() {
  return ['dbaas-task-migration-check', '/dbaas-task-migration-check/:service', 'POST'] as const
}

export function getPostDbaasTaskMigrationCheckServiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-task-migration-check'][':service']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-task-migration-check'][':service']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDbaasTaskMigrationCheckServiceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['dbaas-task-migration-check'][':service']['$post']>,
    ) {
      return parseResponse(client['dbaas-task-migration-check'][':service'].$post(args, options))
    },
  })
}

export function usePostDbaasTaskMigrationCheckService<
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
                  ReturnType<(typeof client)['dbaas-task-migration-check'][':service']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-task-migration-check'][':service']['$post']>,
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
  const mutationDefaults = getPostDbaasTaskMigrationCheckServiceMutationOptions<
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

export function getDbaasExternalEndpointDatadogEndpointIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-external-endpoint-datadog'][':endpoint-id']['$get']>
  >,
) {
  return [
    'dbaas-external-endpoint-datadog',
    '/dbaas-external-endpoint-datadog/:endpoint-id',
    toValue(args),
  ] as const
}

export function getDbaasExternalEndpointDatadogEndpointIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-external-endpoint-datadog'][':endpoint-id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDbaasExternalEndpointDatadogEndpointIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-external-endpoint-datadog'][':endpoint-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDbaasExternalEndpointDatadogEndpointId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['dbaas-external-endpoint-datadog'][':endpoint-id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-external-endpoint-datadog'][':endpoint-id']['$get']>
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
                    (typeof client)['dbaas-external-endpoint-datadog'][':endpoint-id']['$get']
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
                    (typeof client)['dbaas-external-endpoint-datadog'][':endpoint-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDbaasExternalEndpointDatadogEndpointIdQueryKey>
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
            ReturnType<(typeof client)['dbaas-external-endpoint-datadog'][':endpoint-id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasExternalEndpointDatadogEndpointIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDbaasExternalEndpointDatadogEndpointIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-external-endpoint-datadog'][':endpoint-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDbaasExternalEndpointDatadogEndpointIdMutationKey() {
  return [
    'dbaas-external-endpoint-datadog',
    '/dbaas-external-endpoint-datadog/:endpoint-id',
    'PUT',
  ] as const
}

export function getPutDbaasExternalEndpointDatadogEndpointIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['dbaas-external-endpoint-datadog'][':endpoint-id']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-external-endpoint-datadog'][':endpoint-id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDbaasExternalEndpointDatadogEndpointIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-external-endpoint-datadog'][':endpoint-id']['$put']
      >,
    ) {
      return parseResponse(
        client['dbaas-external-endpoint-datadog'][':endpoint-id'].$put(args, options),
      )
    },
  })
}

export function usePutDbaasExternalEndpointDatadogEndpointId<
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
                    (typeof client)['dbaas-external-endpoint-datadog'][':endpoint-id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-external-endpoint-datadog'][':endpoint-id']['$put']
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
  const mutationDefaults = getPutDbaasExternalEndpointDatadogEndpointIdMutationOptions<
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

export function getDeleteDbaasExternalEndpointDatadogEndpointIdMutationKey() {
  return [
    'dbaas-external-endpoint-datadog',
    '/dbaas-external-endpoint-datadog/:endpoint-id',
    'DELETE',
  ] as const
}

export function getDeleteDbaasExternalEndpointDatadogEndpointIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['dbaas-external-endpoint-datadog'][':endpoint-id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-external-endpoint-datadog'][':endpoint-id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDbaasExternalEndpointDatadogEndpointIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-external-endpoint-datadog'][':endpoint-id']['$delete']
      >,
    ) {
      return parseResponse(
        client['dbaas-external-endpoint-datadog'][':endpoint-id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteDbaasExternalEndpointDatadogEndpointId<
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
                    (typeof client)['dbaas-external-endpoint-datadog'][':endpoint-id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-external-endpoint-datadog'][':endpoint-id']['$delete']
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
  const mutationDefaults = getDeleteDbaasExternalEndpointDatadogEndpointIdMutationOptions<
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

export function getPostLoadBalancerIdServiceMutationKey() {
  return ['load-balancer', '/load-balancer/:id/service', 'POST'] as const
}

export function getPostLoadBalancerIdServiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['load-balancer'][':id']['service']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['load-balancer'][':id']['service']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLoadBalancerIdServiceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['load-balancer'][':id']['service']['$post']>,
    ) {
      return parseResponse(client['load-balancer'][':id'].service.$post(args, options))
    },
  })
}

export function usePostLoadBalancerIdService<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['load-balancer'][':id']['service']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['load-balancer'][':id']['service']['$post']>,
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
  const mutationDefaults = getPostLoadBalancerIdServiceMutationOptions<TError, TOnMutateResult>(
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

export function getSshKeyQueryKey() {
  return ['ssh-key', '/ssh-key'] as const
}

export function getSshKeyQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSshKeyQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['ssh-key'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSshKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-key']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-key']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-key']['$get']>>>
            >
          >,
          ReturnType<typeof getSshKeyQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-key']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSshKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSshKeyQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['ssh-key'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSshKeyMutationKey() {
  return ['ssh-key', '/ssh-key', 'POST'] as const
}

export function getPostSshKeyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-key']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['ssh-key']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSshKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['ssh-key']['$post']>) {
      return parseResponse(client['ssh-key'].$post(args, options))
    },
  })
}

export function usePostSshKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-key']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['ssh-key']['$post']>,
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
  const mutationDefaults = getPostSshKeyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSnapshotIdPromoteMutationKey() {
  return ['snapshot', '/snapshot/:id:promote', 'POST'] as const
}

export function getPostSnapshotIdPromoteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.snapshot)[':id:promote']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.snapshot)[':id:promote']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSnapshotIdPromoteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.snapshot)[':id:promote']['$post']>) {
      return parseResponse(client.snapshot[':id:promote'].$post(args, options))
    },
  })
}

export function usePostSnapshotIdPromote<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.snapshot)[':id:promote']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.snapshot)[':id:promote']['$post']>,
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
  const mutationDefaults = getPostSnapshotIdPromoteMutationOptions<TError, TOnMutateResult>(
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

export function getDbaasClickhouseServiceNameUserUsernamePasswordRevealQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['dbaas-clickhouse'][':service-name']['user'][':username']['password']['reveal']['$get']
    >
  >,
) {
  return [
    'dbaas-clickhouse',
    '/dbaas-clickhouse/:service-name/user/:username/password/reveal',
    toValue(args),
  ] as const
}

export function getDbaasClickhouseServiceNameUserUsernamePasswordRevealQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['dbaas-clickhouse'][':service-name']['user'][':username']['password']['reveal']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDbaasClickhouseServiceNameUserUsernamePasswordRevealQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-clickhouse'][':service-name'].user[':username'].password.reveal.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useDbaasClickhouseServiceNameUserUsernamePasswordReveal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['dbaas-clickhouse'][':service-name']['user'][':username']['password']['reveal']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['dbaas-clickhouse'][':service-name']['user'][':username']['password']['reveal']['$get']
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
                    (typeof client)['dbaas-clickhouse'][':service-name']['user'][':username']['password']['reveal']['$get']
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
                    (typeof client)['dbaas-clickhouse'][':service-name']['user'][':username']['password']['reveal']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDbaasClickhouseServiceNameUserUsernamePasswordRevealQueryKey>
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
              (typeof client)['dbaas-clickhouse'][':service-name']['user'][':username']['password']['reveal']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasClickhouseServiceNameUserUsernamePasswordRevealQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDbaasClickhouseServiceNameUserUsernamePasswordRevealQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-clickhouse'][':service-name'].user[':username'].password.reveal.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getSksClusterQueryKey() {
  return ['sks-cluster', '/sks-cluster'] as const
}

export function getSksClusterQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSksClusterQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['sks-cluster'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSksCluster<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['sks-cluster']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['sks-cluster']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['sks-cluster']['$get']>>>
            >
          >,
          ReturnType<typeof getSksClusterQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['sks-cluster']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSksClusterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSksClusterQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['sks-cluster'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSksClusterMutationKey() {
  return ['sks-cluster', '/sks-cluster', 'POST'] as const
}

export function getPostSksClusterMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['sks-cluster']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['sks-cluster']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSksClusterMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['sks-cluster']['$post']>) {
      return parseResponse(client['sks-cluster'].$post(args, options))
    },
  })
}

export function usePostSksCluster<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['sks-cluster']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['sks-cluster']['$post']>,
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
  const mutationDefaults = getPostSksClusterMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutBlockStorageIdDetachMutationKey() {
  return ['block-storage', '/block-storage/:id:detach', 'PUT'] as const
}

export function getPutBlockStorageIdDetachMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['block-storage'][':id:detach']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['block-storage'][':id:detach']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBlockStorageIdDetachMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['block-storage'][':id:detach']['$put']>,
    ) {
      return parseResponse(client['block-storage'][':id:detach'].$put(args, options))
    },
  })
}

export function usePutBlockStorageIdDetach<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['block-storage'][':id:detach']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['block-storage'][':id:detach']['$put']>,
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
  const mutationDefaults = getPutBlockStorageIdDetachMutationOptions<TError, TOnMutateResult>(
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

export function getPostDbaasExternalEndpointPrometheusNameMutationKey() {
  return [
    'dbaas-external-endpoint-prometheus',
    '/dbaas-external-endpoint-prometheus/:name',
    'POST',
  ] as const
}

export function getPostDbaasExternalEndpointPrometheusNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['dbaas-external-endpoint-prometheus'][':name']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-external-endpoint-prometheus'][':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDbaasExternalEndpointPrometheusNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-external-endpoint-prometheus'][':name']['$post']
      >,
    ) {
      return parseResponse(
        client['dbaas-external-endpoint-prometheus'][':name'].$post(args, options),
      )
    },
  })
}

export function usePostDbaasExternalEndpointPrometheusName<
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
                    (typeof client)['dbaas-external-endpoint-prometheus'][':name']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-external-endpoint-prometheus'][':name']['$post']>,
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
  const mutationDefaults = getPostDbaasExternalEndpointPrometheusNameMutationOptions<
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

export function getConsoleIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.console)[':id']['$get']>>,
) {
  return ['console', '/console/:id', toValue(args)] as const
}

export function getConsoleIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.console)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConsoleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.console[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConsoleId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.console)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.console)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.console)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.console)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getConsoleIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.console)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConsoleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConsoleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.console[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDbaasIntegrationIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dbaas-integration'][':id']['$get']>>,
) {
  return ['dbaas-integration', '/dbaas-integration/:id', toValue(args)] as const
}

export function getDbaasIntegrationIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dbaas-integration'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDbaasIntegrationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-integration'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDbaasIntegrationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-integration'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dbaas-integration'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-integration'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-integration'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDbaasIntegrationIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['dbaas-integration'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasIntegrationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDbaasIntegrationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-integration'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDbaasIntegrationIdMutationKey() {
  return ['dbaas-integration', '/dbaas-integration/:id', 'PUT'] as const
}

export function getPutDbaasIntegrationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-integration'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-integration'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDbaasIntegrationIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['dbaas-integration'][':id']['$put']>) {
      return parseResponse(client['dbaas-integration'][':id'].$put(args, options))
    },
  })
}

export function usePutDbaasIntegrationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-integration'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-integration'][':id']['$put']>,
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
  const mutationDefaults = getPutDbaasIntegrationIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteDbaasIntegrationIdMutationKey() {
  return ['dbaas-integration', '/dbaas-integration/:id', 'DELETE'] as const
}

export function getDeleteDbaasIntegrationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-integration'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-integration'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDbaasIntegrationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['dbaas-integration'][':id']['$delete']>,
    ) {
      return parseResponse(client['dbaas-integration'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteDbaasIntegrationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-integration'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-integration'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteDbaasIntegrationIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutElasticIpIdAttachMutationKey() {
  return ['elastic-ip', '/elastic-ip/:id:attach', 'PUT'] as const
}

export function getPutElasticIpIdAttachMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['elastic-ip'][':id:attach']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['elastic-ip'][':id:attach']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutElasticIpIdAttachMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['elastic-ip'][':id:attach']['$put']>) {
      return parseResponse(client['elastic-ip'][':id:attach'].$put(args, options))
    },
  })
}

export function usePutElasticIpIdAttach<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['elastic-ip'][':id:attach']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['elastic-ip'][':id:attach']['$put']>,
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
  const mutationDefaults = getPutElasticIpIdAttachMutationOptions<TError, TOnMutateResult>(
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

export function getSksClusterIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['sks-cluster'][':id']['$get']>>,
) {
  return ['sks-cluster', '/sks-cluster/:id', toValue(args)] as const
}

export function getSksClusterIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['sks-cluster'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSksClusterIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['sks-cluster'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSksClusterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['sks-cluster'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['sks-cluster'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['sks-cluster'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['sks-cluster'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSksClusterIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['sks-cluster'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSksClusterIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSksClusterIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['sks-cluster'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSksClusterIdMutationKey() {
  return ['sks-cluster', '/sks-cluster/:id', 'PUT'] as const
}

export function getPutSksClusterIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['sks-cluster'][':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['sks-cluster'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSksClusterIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['sks-cluster'][':id']['$put']>) {
      return parseResponse(client['sks-cluster'][':id'].$put(args, options))
    },
  })
}

export function usePutSksClusterId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['sks-cluster'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['sks-cluster'][':id']['$put']>,
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
  const mutationDefaults = getPutSksClusterIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteSksClusterIdMutationKey() {
  return ['sks-cluster', '/sks-cluster/:id', 'DELETE'] as const
}

export function getDeleteSksClusterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['sks-cluster'][':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['sks-cluster'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSksClusterIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['sks-cluster'][':id']['$delete']>) {
      return parseResponse(client['sks-cluster'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteSksClusterId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['sks-cluster'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['sks-cluster'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteSksClusterIdMutationOptions<TError, TOnMutateResult>(
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

export function getQuotaQueryKey() {
  return ['quota', '/quota'] as const
}

export function getQuotaQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getQuotaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.quota.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useQuota<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quota.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quota.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quota.$get>>>>>,
          ReturnType<typeof getQuotaQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quota.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQuotaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getQuotaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.quota.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDbaasIntegrationSettingsIntegrationTypeSourceTypeDestTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['dbaas-integration-settings'][':integration-type'][':source-type'][':dest-type']['$get']
    >
  >,
) {
  return [
    'dbaas-integration-settings',
    '/dbaas-integration-settings/:integration-type/:source-type/:dest-type',
    toValue(args),
  ] as const
}

export function getDbaasIntegrationSettingsIntegrationTypeSourceTypeDestTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['dbaas-integration-settings'][':integration-type'][':source-type'][':dest-type']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDbaasIntegrationSettingsIntegrationTypeSourceTypeDestTypeQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-integration-settings'][':integration-type'][':source-type'][
          ':dest-type'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDbaasIntegrationSettingsIntegrationTypeSourceTypeDestType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['dbaas-integration-settings'][':integration-type'][':source-type'][':dest-type']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['dbaas-integration-settings'][':integration-type'][':source-type'][':dest-type']['$get']
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
                    (typeof client)['dbaas-integration-settings'][':integration-type'][':source-type'][':dest-type']['$get']
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
                    (typeof client)['dbaas-integration-settings'][':integration-type'][':source-type'][':dest-type']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDbaasIntegrationSettingsIntegrationTypeSourceTypeDestTypeQueryKey>
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
              (typeof client)['dbaas-integration-settings'][':integration-type'][':source-type'][':dest-type']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasIntegrationSettingsIntegrationTypeSourceTypeDestTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDbaasIntegrationSettingsIntegrationTypeSourceTypeDestTypeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-integration-settings'][':integration-type'][':source-type'][
            ':dest-type'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getDbaasThanosServiceNameUserUsernamePasswordRevealQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['dbaas-thanos'][':service-name']['user'][':username']['password']['reveal']['$get']
    >
  >,
) {
  return [
    'dbaas-thanos',
    '/dbaas-thanos/:service-name/user/:username/password/reveal',
    toValue(args),
  ] as const
}

export function getDbaasThanosServiceNameUserUsernamePasswordRevealQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['dbaas-thanos'][':service-name']['user'][':username']['password']['reveal']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDbaasThanosServiceNameUserUsernamePasswordRevealQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-thanos'][':service-name'].user[':username'].password.reveal.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useDbaasThanosServiceNameUserUsernamePasswordReveal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['dbaas-thanos'][':service-name']['user'][':username']['password']['reveal']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['dbaas-thanos'][':service-name']['user'][':username']['password']['reveal']['$get']
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
                    (typeof client)['dbaas-thanos'][':service-name']['user'][':username']['password']['reveal']['$get']
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
                    (typeof client)['dbaas-thanos'][':service-name']['user'][':username']['password']['reveal']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDbaasThanosServiceNameUserUsernamePasswordRevealQueryKey>
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
              (typeof client)['dbaas-thanos'][':service-name']['user'][':username']['password']['reveal']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasThanosServiceNameUserUsernamePasswordRevealQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDbaasThanosServiceNameUserUsernamePasswordRevealQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-thanos'][':service-name'].user[':username'].password.reveal.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteDbaasClickhouseServiceNameUserUserUuidMutationKey() {
  return ['dbaas-clickhouse', '/dbaas-clickhouse/:service-name/user/:user-uuid', 'DELETE'] as const
}

export function getDeleteDbaasClickhouseServiceNameUserUserUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['dbaas-clickhouse'][':service-name']['user'][':user-uuid']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['dbaas-clickhouse'][':service-name']['user'][':user-uuid']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteDbaasClickhouseServiceNameUserUserUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-clickhouse'][':service-name']['user'][':user-uuid']['$delete']
      >,
    ) {
      return parseResponse(
        client['dbaas-clickhouse'][':service-name'].user[':user-uuid'].$delete(args, options),
      )
    },
  })
}

export function useDeleteDbaasClickhouseServiceNameUserUserUuid<
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
                    (typeof client)['dbaas-clickhouse'][':service-name']['user'][':user-uuid']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-clickhouse'][':service-name']['user'][':user-uuid']['$delete']
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
  const mutationDefaults = getDeleteDbaasClickhouseServiceNameUserUserUuidMutationOptions<
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

export function getDbaasSettingsPgQueryKey() {
  return ['dbaas-settings-pg', '/dbaas-settings-pg'] as const
}

export function getDbaasSettingsPgQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDbaasSettingsPgQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-settings-pg'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDbaasSettingsPg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-settings-pg']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-settings-pg']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-settings-pg']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDbaasSettingsPgQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-settings-pg']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasSettingsPgQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDbaasSettingsPgQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-settings-pg'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getElasticIpIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['elastic-ip'][':id']['$get']>>,
) {
  return ['elastic-ip', '/elastic-ip/:id', toValue(args)] as const
}

export function getElasticIpIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['elastic-ip'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getElasticIpIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['elastic-ip'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useElasticIpId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['elastic-ip'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['elastic-ip'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['elastic-ip'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['elastic-ip'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getElasticIpIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['elastic-ip'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getElasticIpIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getElasticIpIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['elastic-ip'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutElasticIpIdMutationKey() {
  return ['elastic-ip', '/elastic-ip/:id', 'PUT'] as const
}

export function getPutElasticIpIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['elastic-ip'][':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['elastic-ip'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutElasticIpIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['elastic-ip'][':id']['$put']>) {
      return parseResponse(client['elastic-ip'][':id'].$put(args, options))
    },
  })
}

export function usePutElasticIpId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['elastic-ip'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['elastic-ip'][':id']['$put']>,
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
  const mutationDefaults = getPutElasticIpIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteElasticIpIdMutationKey() {
  return ['elastic-ip', '/elastic-ip/:id', 'DELETE'] as const
}

export function getDeleteElasticIpIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['elastic-ip'][':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['elastic-ip'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteElasticIpIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['elastic-ip'][':id']['$delete']>) {
      return parseResponse(client['elastic-ip'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteElasticIpId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['elastic-ip'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['elastic-ip'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteElasticIpIdMutationOptions<TError, TOnMutateResult>(
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

export function getSksClusterIdInspectionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['sks-cluster'][':id']['inspection']['$get']>
  >,
) {
  return ['sks-cluster', '/sks-cluster/:id/inspection', toValue(args)] as const
}

export function getSksClusterIdInspectionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['sks-cluster'][':id']['inspection']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSksClusterIdInspectionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['sks-cluster'][':id'].inspection.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSksClusterIdInspection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['sks-cluster'][':id']['inspection']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['sks-cluster'][':id']['inspection']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['sks-cluster'][':id']['inspection']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['sks-cluster'][':id']['inspection']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSksClusterIdInspectionQueryKey>
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
          Awaited<ReturnType<(typeof client)['sks-cluster'][':id']['inspection']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSksClusterIdInspectionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSksClusterIdInspectionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['sks-cluster'][':id'].inspection.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDbaasValkeyNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dbaas-valkey'][':name']['$get']>>,
) {
  return ['dbaas-valkey', '/dbaas-valkey/:name', toValue(args)] as const
}

export function getDbaasValkeyNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dbaas-valkey'][':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDbaasValkeyNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-valkey'][':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDbaasValkeyName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-valkey'][':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dbaas-valkey'][':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-valkey'][':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-valkey'][':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDbaasValkeyNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-valkey'][':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasValkeyNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDbaasValkeyNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-valkey'][':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDbaasValkeyNameMutationKey() {
  return ['dbaas-valkey', '/dbaas-valkey/:name', 'PUT'] as const
}

export function getPutDbaasValkeyNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-valkey'][':name']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-valkey'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDbaasValkeyNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['dbaas-valkey'][':name']['$put']>) {
      return parseResponse(client['dbaas-valkey'][':name'].$put(args, options))
    },
  })
}

export function usePutDbaasValkeyName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-valkey'][':name']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-valkey'][':name']['$put']>,
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
  const mutationDefaults = getPutDbaasValkeyNameMutationOptions<TError, TOnMutateResult>(
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

export function getPostDbaasValkeyNameMutationKey() {
  return ['dbaas-valkey', '/dbaas-valkey/:name', 'POST'] as const
}

export function getPostDbaasValkeyNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-valkey'][':name']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-valkey'][':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDbaasValkeyNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['dbaas-valkey'][':name']['$post']>) {
      return parseResponse(client['dbaas-valkey'][':name'].$post(args, options))
    },
  })
}

export function usePostDbaasValkeyName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-valkey'][':name']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-valkey'][':name']['$post']>,
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
  const mutationDefaults = getPostDbaasValkeyNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteDbaasValkeyNameMutationKey() {
  return ['dbaas-valkey', '/dbaas-valkey/:name', 'DELETE'] as const
}

export function getDeleteDbaasValkeyNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-valkey'][':name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-valkey'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDbaasValkeyNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['dbaas-valkey'][':name']['$delete']>) {
      return parseResponse(client['dbaas-valkey'][':name'].$delete(args, options))
    },
  })
}

export function useDeleteDbaasValkeyName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-valkey'][':name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-valkey'][':name']['$delete']>,
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
  const mutationDefaults = getDeleteDbaasValkeyNameMutationOptions<TError, TOnMutateResult>(
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

export function getInstanceIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instance)[':id']['$get']>>,
) {
  return ['instance', '/instance/:id', toValue(args)] as const
}

export function getInstanceIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instance)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstanceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instance[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstanceId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.instance)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.instance)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.instance)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.instance)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getInstanceIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.instance)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInstanceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstanceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instance[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutInstanceIdMutationKey() {
  return ['instance', '/instance/:id', 'PUT'] as const
}

export function getPutInstanceIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.instance)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.instance)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutInstanceIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.instance)[':id']['$put']>) {
      return parseResponse(client.instance[':id'].$put(args, options))
    },
  })
}

export function usePutInstanceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.instance)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.instance)[':id']['$put']>,
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
  const mutationDefaults = getPutInstanceIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteInstanceIdMutationKey() {
  return ['instance', '/instance/:id', 'DELETE'] as const
}

export function getDeleteInstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.instance)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.instance)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteInstanceIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.instance)[':id']['$delete']>) {
      return parseResponse(client.instance[':id'].$delete(args, options))
    },
  })
}

export function useDeleteInstanceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.instance)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.instance)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteInstanceIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostDbaasMysqlNameMigrationStopMutationKey() {
  return ['dbaas-mysql', '/dbaas-mysql/:name/migration/stop', 'POST'] as const
}

export function getPostDbaasMysqlNameMigrationStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-mysql'][':name']['migration']['stop']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-mysql'][':name']['migration']['stop']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDbaasMysqlNameMigrationStopMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['dbaas-mysql'][':name']['migration']['stop']['$post']>,
    ) {
      return parseResponse(client['dbaas-mysql'][':name'].migration.stop.$post(args, options))
    },
  })
}

export function usePostDbaasMysqlNameMigrationStop<
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
                  ReturnType<(typeof client)['dbaas-mysql'][':name']['migration']['stop']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-mysql'][':name']['migration']['stop']['$post']>,
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
  const mutationDefaults = getPostDbaasMysqlNameMigrationStopMutationOptions<
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

export function getVpcVpcIdSubnetIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vpc)[':vpc-id']['subnet'][':id']['$get']>>,
) {
  return ['vpc', '/vpc/:vpc-id/subnet/:id', toValue(args)] as const
}

export function getVpcVpcIdSubnetIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vpc)[':vpc-id']['subnet'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVpcVpcIdSubnetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vpc[':vpc-id'].subnet[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVpcVpcIdSubnetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vpc)[':vpc-id']['subnet'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vpc)[':vpc-id']['subnet'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vpc)[':vpc-id']['subnet'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vpc)[':vpc-id']['subnet'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVpcVpcIdSubnetIdQueryKey>
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
          Awaited<ReturnType<(typeof client.vpc)[':vpc-id']['subnet'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVpcVpcIdSubnetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVpcVpcIdSubnetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vpc[':vpc-id'].subnet[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutVpcVpcIdSubnetIdMutationKey() {
  return ['vpc', '/vpc/:vpc-id/subnet/:id', 'PUT'] as const
}

export function getPutVpcVpcIdSubnetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vpc)[':vpc-id']['subnet'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.vpc)[':vpc-id']['subnet'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVpcVpcIdSubnetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.vpc)[':vpc-id']['subnet'][':id']['$put']>,
    ) {
      return parseResponse(client.vpc[':vpc-id'].subnet[':id'].$put(args, options))
    },
  })
}

export function usePutVpcVpcIdSubnetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vpc)[':vpc-id']['subnet'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.vpc)[':vpc-id']['subnet'][':id']['$put']>,
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
  const mutationDefaults = getPutVpcVpcIdSubnetIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteVpcVpcIdSubnetIdMutationKey() {
  return ['vpc', '/vpc/:vpc-id/subnet/:id', 'DELETE'] as const
}

export function getDeleteVpcVpcIdSubnetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vpc)[':vpc-id']['subnet'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.vpc)[':vpc-id']['subnet'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVpcVpcIdSubnetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.vpc)[':vpc-id']['subnet'][':id']['$delete']>,
    ) {
      return parseResponse(client.vpc[':vpc-id'].subnet[':id'].$delete(args, options))
    },
  })
}

export function useDeleteVpcVpcIdSubnetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vpc)[':vpc-id']['subnet'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.vpc)[':vpc-id']['subnet'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteVpcVpcIdSubnetIdMutationOptions<TError, TOnMutateResult>(
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

export function getDbaasExternalEndpointsQueryKey() {
  return ['dbaas-external-endpoints', '/dbaas-external-endpoints'] as const
}

export function getDbaasExternalEndpointsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDbaasExternalEndpointsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-external-endpoints'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDbaasExternalEndpoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-external-endpoints']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-external-endpoints']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-external-endpoints']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDbaasExternalEndpointsQueryKey>
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
          Awaited<ReturnType<(typeof client)['dbaas-external-endpoints']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasExternalEndpointsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDbaasExternalEndpointsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-external-endpoints'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDbaasKafkaNameMaintenanceStartMutationKey() {
  return ['dbaas-kafka', '/dbaas-kafka/:name/maintenance/start', 'PUT'] as const
}

export function getPutDbaasKafkaNameMaintenanceStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['dbaas-kafka'][':name']['maintenance']['start']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-kafka'][':name']['maintenance']['start']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDbaasKafkaNameMaintenanceStartMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-kafka'][':name']['maintenance']['start']['$put']
      >,
    ) {
      return parseResponse(client['dbaas-kafka'][':name'].maintenance.start.$put(args, options))
    },
  })
}

export function usePutDbaasKafkaNameMaintenanceStart<
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
                    (typeof client)['dbaas-kafka'][':name']['maintenance']['start']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-kafka'][':name']['maintenance']['start']['$put']>,
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
  const mutationDefaults = getPutDbaasKafkaNameMaintenanceStartMutationOptions<
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

export function getPutSksClusterIdRotateCcmCredentialsMutationKey() {
  return ['sks-cluster', '/sks-cluster/:id/rotate-ccm-credentials', 'PUT'] as const
}

export function getPutSksClusterIdRotateCcmCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['sks-cluster'][':id']['rotate-ccm-credentials']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['sks-cluster'][':id']['rotate-ccm-credentials']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSksClusterIdRotateCcmCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['sks-cluster'][':id']['rotate-ccm-credentials']['$put']
      >,
    ) {
      return parseResponse(
        client['sks-cluster'][':id']['rotate-ccm-credentials'].$put(args, options),
      )
    },
  })
}

export function usePutSksClusterIdRotateCcmCredentials<
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
                    (typeof client)['sks-cluster'][':id']['rotate-ccm-credentials']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['sks-cluster'][':id']['rotate-ccm-credentials']['$put']>,
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
  const mutationDefaults = getPutSksClusterIdRotateCcmCredentialsMutationOptions<
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

export function getPutDbaasPostgresServiceNameConnectionPoolConnectionPoolNameMutationKey() {
  return [
    'dbaas-postgres',
    '/dbaas-postgres/:service-name/connection-pool/:connection-pool-name',
    'PUT',
  ] as const
}

export function getPutDbaasPostgresServiceNameConnectionPoolConnectionPoolNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['dbaas-postgres'][':service-name']['connection-pool'][':connection-pool-name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['dbaas-postgres'][':service-name']['connection-pool'][':connection-pool-name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutDbaasPostgresServiceNameConnectionPoolConnectionPoolNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-postgres'][':service-name']['connection-pool'][':connection-pool-name']['$put']
      >,
    ) {
      return parseResponse(
        client['dbaas-postgres'][':service-name']['connection-pool'][':connection-pool-name'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutDbaasPostgresServiceNameConnectionPoolConnectionPoolName<
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
                    (typeof client)['dbaas-postgres'][':service-name']['connection-pool'][':connection-pool-name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-postgres'][':service-name']['connection-pool'][':connection-pool-name']['$put']
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
  const mutationDefaults =
    getPutDbaasPostgresServiceNameConnectionPoolConnectionPoolNameMutationOptions<
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

export function getDeleteDbaasPostgresServiceNameConnectionPoolConnectionPoolNameMutationKey() {
  return [
    'dbaas-postgres',
    '/dbaas-postgres/:service-name/connection-pool/:connection-pool-name',
    'DELETE',
  ] as const
}

export function getDeleteDbaasPostgresServiceNameConnectionPoolConnectionPoolNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['dbaas-postgres'][':service-name']['connection-pool'][':connection-pool-name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['dbaas-postgres'][':service-name']['connection-pool'][':connection-pool-name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteDbaasPostgresServiceNameConnectionPoolConnectionPoolNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-postgres'][':service-name']['connection-pool'][':connection-pool-name']['$delete']
      >,
    ) {
      return parseResponse(
        client['dbaas-postgres'][':service-name']['connection-pool'][
          ':connection-pool-name'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteDbaasPostgresServiceNameConnectionPoolConnectionPoolName<
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
                    (typeof client)['dbaas-postgres'][':service-name']['connection-pool'][':connection-pool-name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-postgres'][':service-name']['connection-pool'][':connection-pool-name']['$delete']
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
  const mutationDefaults =
    getDeleteDbaasPostgresServiceNameConnectionPoolConnectionPoolNameMutationOptions<
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

export function getKmsKeyQueryKey() {
  return ['kms-key', '/kms-key'] as const
}

export function getKmsKeyQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getKmsKeyQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['kms-key'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useKmsKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['kms-key']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['kms-key']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['kms-key']['$get']>>>
            >
          >,
          ReturnType<typeof getKmsKeyQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['kms-key']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getKmsKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getKmsKeyQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['kms-key'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostKmsKeyMutationKey() {
  return ['kms-key', '/kms-key', 'POST'] as const
}

export function getPostKmsKeyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['kms-key']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['kms-key']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKmsKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['kms-key']['$post']>) {
      return parseResponse(client['kms-key'].$post(args, options))
    },
  })
}

export function usePostKmsKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['kms-key']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['kms-key']['$post']>,
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
  const mutationDefaults = getPostKmsKeyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDbaasThanosNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dbaas-thanos'][':name']['$get']>>,
) {
  return ['dbaas-thanos', '/dbaas-thanos/:name', toValue(args)] as const
}

export function getDbaasThanosNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dbaas-thanos'][':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDbaasThanosNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-thanos'][':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDbaasThanosName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-thanos'][':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dbaas-thanos'][':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-thanos'][':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-thanos'][':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDbaasThanosNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-thanos'][':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasThanosNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDbaasThanosNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-thanos'][':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDbaasThanosNameMutationKey() {
  return ['dbaas-thanos', '/dbaas-thanos/:name', 'PUT'] as const
}

export function getPutDbaasThanosNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-thanos'][':name']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-thanos'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDbaasThanosNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['dbaas-thanos'][':name']['$put']>) {
      return parseResponse(client['dbaas-thanos'][':name'].$put(args, options))
    },
  })
}

export function usePutDbaasThanosName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-thanos'][':name']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-thanos'][':name']['$put']>,
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
  const mutationDefaults = getPutDbaasThanosNameMutationOptions<TError, TOnMutateResult>(
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

export function getPostDbaasThanosNameMutationKey() {
  return ['dbaas-thanos', '/dbaas-thanos/:name', 'POST'] as const
}

export function getPostDbaasThanosNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-thanos'][':name']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-thanos'][':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDbaasThanosNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['dbaas-thanos'][':name']['$post']>) {
      return parseResponse(client['dbaas-thanos'][':name'].$post(args, options))
    },
  })
}

export function usePostDbaasThanosName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-thanos'][':name']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-thanos'][':name']['$post']>,
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
  const mutationDefaults = getPostDbaasThanosNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteDbaasThanosNameMutationKey() {
  return ['dbaas-thanos', '/dbaas-thanos/:name', 'DELETE'] as const
}

export function getDeleteDbaasThanosNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-thanos'][':name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-thanos'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDbaasThanosNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['dbaas-thanos'][':name']['$delete']>) {
      return parseResponse(client['dbaas-thanos'][':name'].$delete(args, options))
    },
  })
}

export function useDeleteDbaasThanosName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-thanos'][':name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-thanos'][':name']['$delete']>,
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
  const mutationDefaults = getDeleteDbaasThanosNameMutationOptions<TError, TOnMutateResult>(
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

export function getPutIamRoleIdPolicyMutationKey() {
  return ['iam-role', '/iam-role/:id:policy', 'PUT'] as const
}

export function getPutIamRoleIdPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['iam-role'][':id:policy']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['iam-role'][':id:policy']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIamRoleIdPolicyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['iam-role'][':id:policy']['$put']>) {
      return parseResponse(client['iam-role'][':id:policy'].$put(args, options))
    },
  })
}

export function usePutIamRoleIdPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['iam-role'][':id:policy']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['iam-role'][':id:policy']['$put']>,
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
  const mutationDefaults = getPutIamRoleIdPolicyMutationOptions<TError, TOnMutateResult>(
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

export function getDbaasMigrationStatusNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-migration-status'][':name']['$get']>
  >,
) {
  return ['dbaas-migration-status', '/dbaas-migration-status/:name', toValue(args)] as const
}

export function getDbaasMigrationStatusNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-migration-status'][':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDbaasMigrationStatusNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-migration-status'][':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDbaasMigrationStatusName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['dbaas-migration-status'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-migration-status'][':name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-migration-status'][':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-migration-status'][':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDbaasMigrationStatusNameQueryKey>
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
          Awaited<ReturnType<(typeof client)['dbaas-migration-status'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasMigrationStatusNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDbaasMigrationStatusNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-migration-status'][':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteDbaasMysqlServiceNameUserUsernameMutationKey() {
  return ['dbaas-mysql', '/dbaas-mysql/:service-name/user/:username', 'DELETE'] as const
}

export function getDeleteDbaasMysqlServiceNameUserUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['dbaas-mysql'][':service-name']['user'][':username']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['dbaas-mysql'][':service-name']['user'][':username']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteDbaasMysqlServiceNameUserUsernameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-mysql'][':service-name']['user'][':username']['$delete']
      >,
    ) {
      return parseResponse(
        client['dbaas-mysql'][':service-name'].user[':username'].$delete(args, options),
      )
    },
  })
}

export function useDeleteDbaasMysqlServiceNameUserUsername<
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
                    (typeof client)['dbaas-mysql'][':service-name']['user'][':username']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-mysql'][':service-name']['user'][':username']['$delete']
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
  const mutationDefaults = getDeleteDbaasMysqlServiceNameUserUsernameMutationOptions<
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

export function getPutSksClusterIdGenerateKarpenterNodepoolMutationKey() {
  return ['sks-cluster', '/sks-cluster/:id/generate-karpenter-nodepool', 'PUT'] as const
}

export function getPutSksClusterIdGenerateKarpenterNodepoolMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['sks-cluster'][':id']['generate-karpenter-nodepool']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['sks-cluster'][':id']['generate-karpenter-nodepool']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSksClusterIdGenerateKarpenterNodepoolMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['sks-cluster'][':id']['generate-karpenter-nodepool']['$put']
      >,
    ) {
      return parseResponse(
        client['sks-cluster'][':id']['generate-karpenter-nodepool'].$put(args, options),
      )
    },
  })
}

export function usePutSksClusterIdGenerateKarpenterNodepool<
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
                    (typeof client)['sks-cluster'][':id']['generate-karpenter-nodepool']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['sks-cluster'][':id']['generate-karpenter-nodepool']['$put']
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
  const mutationDefaults = getPutSksClusterIdGenerateKarpenterNodepoolMutationOptions<
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

export function getLoadBalancerIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['load-balancer'][':id']['$get']>>,
) {
  return ['load-balancer', '/load-balancer/:id', toValue(args)] as const
}

export function getLoadBalancerIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['load-balancer'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLoadBalancerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['load-balancer'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLoadBalancerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['load-balancer'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['load-balancer'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['load-balancer'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['load-balancer'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLoadBalancerIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['load-balancer'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLoadBalancerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLoadBalancerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['load-balancer'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutLoadBalancerIdMutationKey() {
  return ['load-balancer', '/load-balancer/:id', 'PUT'] as const
}

export function getPutLoadBalancerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['load-balancer'][':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['load-balancer'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLoadBalancerIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['load-balancer'][':id']['$put']>) {
      return parseResponse(client['load-balancer'][':id'].$put(args, options))
    },
  })
}

export function usePutLoadBalancerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['load-balancer'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['load-balancer'][':id']['$put']>,
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
  const mutationDefaults = getPutLoadBalancerIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteLoadBalancerIdMutationKey() {
  return ['load-balancer', '/load-balancer/:id', 'DELETE'] as const
}

export function getDeleteLoadBalancerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['load-balancer'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['load-balancer'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLoadBalancerIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['load-balancer'][':id']['$delete']>) {
      return parseResponse(client['load-balancer'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteLoadBalancerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['load-balancer'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['load-balancer'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteLoadBalancerIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteDbaasServiceNameMutationKey() {
  return ['dbaas-service', '/dbaas-service/:name', 'DELETE'] as const
}

export function getDeleteDbaasServiceNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-service'][':name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-service'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDbaasServiceNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['dbaas-service'][':name']['$delete']>) {
      return parseResponse(client['dbaas-service'][':name'].$delete(args, options))
    },
  })
}

export function useDeleteDbaasServiceName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-service'][':name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-service'][':name']['$delete']>,
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
  const mutationDefaults = getDeleteDbaasServiceNameMutationOptions<TError, TOnMutateResult>(
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

export function getPutVpcVpcIdSubnetSubnetIdDetachMutationKey() {
  return ['vpc', '/vpc/:vpc-id/subnet/:subnet-id/detach', 'PUT'] as const
}

export function getPutVpcVpcIdSubnetSubnetIdDetachMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['detach']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['detach']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVpcVpcIdSubnetSubnetIdDetachMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['detach']['$put']
      >,
    ) {
      return parseResponse(client.vpc[':vpc-id'].subnet[':subnet-id'].detach.$put(args, options))
    },
  })
}

export function usePutVpcVpcIdSubnetSubnetIdDetach<
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
                    (typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['detach']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['detach']['$put']
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
  const mutationDefaults = getPutVpcVpcIdSubnetSubnetIdDetachMutationOptions<
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

export function getPostDbaasMysqlServiceNameDatabaseMutationKey() {
  return ['dbaas-mysql', '/dbaas-mysql/:service-name/database', 'POST'] as const
}

export function getPostDbaasMysqlServiceNameDatabaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-mysql'][':service-name']['database']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-mysql'][':service-name']['database']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDbaasMysqlServiceNameDatabaseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['dbaas-mysql'][':service-name']['database']['$post']>,
    ) {
      return parseResponse(client['dbaas-mysql'][':service-name'].database.$post(args, options))
    },
  })
}

export function usePostDbaasMysqlServiceNameDatabase<
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
                  ReturnType<(typeof client)['dbaas-mysql'][':service-name']['database']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-mysql'][':service-name']['database']['$post']>,
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
  const mutationDefaults = getPostDbaasMysqlServiceNameDatabaseMutationOptions<
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

export function getTemplateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.template.$get>>,
) {
  return ['template', '/template', toValue(args)] as const
}

export function getTemplateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.template.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTemplateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.template.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTemplate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.template.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.template.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.template.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.template.$get>>>>
          >,
          ReturnType<typeof getTemplateQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.template.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTemplateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTemplateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.template.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTemplateMutationKey() {
  return ['template', '/template', 'POST'] as const
}

export function getPostTemplateMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.template.$post>>>>>,
    TError,
    InferRequestType<typeof client.template.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.template.$post>) {
      return parseResponse(client.template.$post(args, options))
    },
  })
}

export function usePostTemplate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.template.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.template.$post>,
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
  const mutationDefaults = getPostTemplateMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutInstanceIdRebootMutationKey() {
  return ['instance', '/instance/:id:reboot', 'PUT'] as const
}

export function getPutInstanceIdRebootMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.instance)[':id:reboot']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.instance)[':id:reboot']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutInstanceIdRebootMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.instance)[':id:reboot']['$put']>) {
      return parseResponse(client.instance[':id:reboot'].$put(args, options))
    },
  })
}

export function usePutInstanceIdReboot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.instance)[':id:reboot']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.instance)[':id:reboot']['$put']>,
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
  const mutationDefaults = getPutInstanceIdRebootMutationOptions<TError, TOnMutateResult>(
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

export function getEnvironmentalImpactReportQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['environmental-impact']['report']['$get']>
  >,
) {
  return ['environmental-impact', '/environmental-impact/report', toValue(args)] as const
}

export function getEnvironmentalImpactReportQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['environmental-impact']['report']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEnvironmentalImpactReportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['environmental-impact'].report.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEnvironmentalImpactReport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['environmental-impact']['report']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['environmental-impact']['report']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['environmental-impact']['report']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['environmental-impact']['report']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEnvironmentalImpactReportQueryKey>
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
          Awaited<ReturnType<(typeof client)['environmental-impact']['report']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnvironmentalImpactReportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEnvironmentalImpactReportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['environmental-impact'].report.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDbaasSettingsKafkaQueryKey() {
  return ['dbaas-settings-kafka', '/dbaas-settings-kafka'] as const
}

export function getDbaasSettingsKafkaQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDbaasSettingsKafkaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-settings-kafka'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDbaasSettingsKafka<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-settings-kafka']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-settings-kafka']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-settings-kafka']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDbaasSettingsKafkaQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-settings-kafka']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasSettingsKafkaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDbaasSettingsKafkaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-settings-kafka'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDbaasPostgresServiceNameUserUsernamePasswordRevealQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['dbaas-postgres'][':service-name']['user'][':username']['password']['reveal']['$get']
    >
  >,
) {
  return [
    'dbaas-postgres',
    '/dbaas-postgres/:service-name/user/:username/password/reveal',
    toValue(args),
  ] as const
}

export function getDbaasPostgresServiceNameUserUsernamePasswordRevealQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['dbaas-postgres'][':service-name']['user'][':username']['password']['reveal']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDbaasPostgresServiceNameUserUsernamePasswordRevealQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-postgres'][':service-name'].user[':username'].password.reveal.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useDbaasPostgresServiceNameUserUsernamePasswordReveal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['dbaas-postgres'][':service-name']['user'][':username']['password']['reveal']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['dbaas-postgres'][':service-name']['user'][':username']['password']['reveal']['$get']
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
                    (typeof client)['dbaas-postgres'][':service-name']['user'][':username']['password']['reveal']['$get']
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
                    (typeof client)['dbaas-postgres'][':service-name']['user'][':username']['password']['reveal']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDbaasPostgresServiceNameUserUsernamePasswordRevealQueryKey>
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
              (typeof client)['dbaas-postgres'][':service-name']['user'][':username']['password']['reveal']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasPostgresServiceNameUserUsernamePasswordRevealQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDbaasPostgresServiceNameUserUsernamePasswordRevealQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-postgres'][':service-name'].user[':username'].password.reveal.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostIamOrganizationPolicyResetMutationKey() {
  return ['iam-organization-policy:reset', '/iam-organization-policy:reset', 'POST'] as const
}

export function getPostIamOrganizationPolicyResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['iam-organization-policy:reset']['$post']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostIamOrganizationPolicyResetMutationKey(),
    async mutationFn() {
      return parseResponse(client['iam-organization-policy:reset'].$post(undefined, options))
    },
  })
}

export function usePostIamOrganizationPolicyReset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['iam-organization-policy:reset']['$post']>>
              >
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostIamOrganizationPolicyResetMutationOptions<
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

export function getDbaasSettingsOpensearchQueryKey() {
  return ['dbaas-settings-opensearch', '/dbaas-settings-opensearch'] as const
}

export function getDbaasSettingsOpensearchQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDbaasSettingsOpensearchQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-settings-opensearch'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDbaasSettingsOpensearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['dbaas-settings-opensearch']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-settings-opensearch']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-settings-opensearch']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDbaasSettingsOpensearchQueryKey>
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
          Awaited<ReturnType<(typeof client)['dbaas-settings-opensearch']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasSettingsOpensearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDbaasSettingsOpensearchQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-settings-opensearch'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDbaasExternalEndpointSourceServiceNameAttachMutationKey() {
  return [
    'dbaas-external-endpoint',
    '/dbaas-external-endpoint/:source-service-name/attach',
    'PUT',
  ] as const
}

export function getPutDbaasExternalEndpointSourceServiceNameAttachMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['dbaas-external-endpoint'][':source-service-name']['attach']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['dbaas-external-endpoint'][':source-service-name']['attach']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutDbaasExternalEndpointSourceServiceNameAttachMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-external-endpoint'][':source-service-name']['attach']['$put']
      >,
    ) {
      return parseResponse(
        client['dbaas-external-endpoint'][':source-service-name'].attach.$put(args, options),
      )
    },
  })
}

export function usePutDbaasExternalEndpointSourceServiceNameAttach<
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
                    (typeof client)['dbaas-external-endpoint'][':source-service-name']['attach']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-external-endpoint'][':source-service-name']['attach']['$put']
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
  const mutationDefaults = getPutDbaasExternalEndpointSourceServiceNameAttachMutationOptions<
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

export function getPostKmsKeyIdScheduleDeletionMutationKey() {
  return ['kms-key', '/kms-key/:id/schedule-deletion', 'POST'] as const
}

export function getPostKmsKeyIdScheduleDeletionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['kms-key'][':id']['schedule-deletion']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['kms-key'][':id']['schedule-deletion']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKmsKeyIdScheduleDeletionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['kms-key'][':id']['schedule-deletion']['$post']>,
    ) {
      return parseResponse(client['kms-key'][':id']['schedule-deletion'].$post(args, options))
    },
  })
}

export function usePostKmsKeyIdScheduleDeletion<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['kms-key'][':id']['schedule-deletion']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['kms-key'][':id']['schedule-deletion']['$post']>,
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
  const mutationDefaults = getPostKmsKeyIdScheduleDeletionMutationOptions<TError, TOnMutateResult>(
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

export function getDbaasGrafanaNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dbaas-grafana'][':name']['$get']>>,
) {
  return ['dbaas-grafana', '/dbaas-grafana/:name', toValue(args)] as const
}

export function getDbaasGrafanaNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dbaas-grafana'][':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDbaasGrafanaNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-grafana'][':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDbaasGrafanaName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-grafana'][':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dbaas-grafana'][':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-grafana'][':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-grafana'][':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDbaasGrafanaNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-grafana'][':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasGrafanaNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDbaasGrafanaNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-grafana'][':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDbaasGrafanaNameMutationKey() {
  return ['dbaas-grafana', '/dbaas-grafana/:name', 'PUT'] as const
}

export function getPutDbaasGrafanaNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-grafana'][':name']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-grafana'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDbaasGrafanaNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['dbaas-grafana'][':name']['$put']>) {
      return parseResponse(client['dbaas-grafana'][':name'].$put(args, options))
    },
  })
}

export function usePutDbaasGrafanaName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-grafana'][':name']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-grafana'][':name']['$put']>,
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
  const mutationDefaults = getPutDbaasGrafanaNameMutationOptions<TError, TOnMutateResult>(
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

export function getPostDbaasGrafanaNameMutationKey() {
  return ['dbaas-grafana', '/dbaas-grafana/:name', 'POST'] as const
}

export function getPostDbaasGrafanaNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-grafana'][':name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-grafana'][':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDbaasGrafanaNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['dbaas-grafana'][':name']['$post']>) {
      return parseResponse(client['dbaas-grafana'][':name'].$post(args, options))
    },
  })
}

export function usePostDbaasGrafanaName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-grafana'][':name']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-grafana'][':name']['$post']>,
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
  const mutationDefaults = getPostDbaasGrafanaNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteDbaasGrafanaNameMutationKey() {
  return ['dbaas-grafana', '/dbaas-grafana/:name', 'DELETE'] as const
}

export function getDeleteDbaasGrafanaNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-grafana'][':name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-grafana'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDbaasGrafanaNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['dbaas-grafana'][':name']['$delete']>) {
      return parseResponse(client['dbaas-grafana'][':name'].$delete(args, options))
    },
  })
}

export function useDeleteDbaasGrafanaName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-grafana'][':name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-grafana'][':name']['$delete']>,
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
  const mutationDefaults = getDeleteDbaasGrafanaNameMutationOptions<TError, TOnMutateResult>(
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

export function getDbaasExternalEndpointRsyslogEndpointIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-external-endpoint-rsyslog'][':endpoint-id']['$get']>
  >,
) {
  return [
    'dbaas-external-endpoint-rsyslog',
    '/dbaas-external-endpoint-rsyslog/:endpoint-id',
    toValue(args),
  ] as const
}

export function getDbaasExternalEndpointRsyslogEndpointIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-external-endpoint-rsyslog'][':endpoint-id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDbaasExternalEndpointRsyslogEndpointIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-external-endpoint-rsyslog'][':endpoint-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDbaasExternalEndpointRsyslogEndpointId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['dbaas-external-endpoint-rsyslog'][':endpoint-id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-external-endpoint-rsyslog'][':endpoint-id']['$get']>
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
                    (typeof client)['dbaas-external-endpoint-rsyslog'][':endpoint-id']['$get']
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
                    (typeof client)['dbaas-external-endpoint-rsyslog'][':endpoint-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDbaasExternalEndpointRsyslogEndpointIdQueryKey>
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
            ReturnType<(typeof client)['dbaas-external-endpoint-rsyslog'][':endpoint-id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasExternalEndpointRsyslogEndpointIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDbaasExternalEndpointRsyslogEndpointIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-external-endpoint-rsyslog'][':endpoint-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDbaasExternalEndpointRsyslogEndpointIdMutationKey() {
  return [
    'dbaas-external-endpoint-rsyslog',
    '/dbaas-external-endpoint-rsyslog/:endpoint-id',
    'PUT',
  ] as const
}

export function getPutDbaasExternalEndpointRsyslogEndpointIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['dbaas-external-endpoint-rsyslog'][':endpoint-id']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-external-endpoint-rsyslog'][':endpoint-id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDbaasExternalEndpointRsyslogEndpointIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-external-endpoint-rsyslog'][':endpoint-id']['$put']
      >,
    ) {
      return parseResponse(
        client['dbaas-external-endpoint-rsyslog'][':endpoint-id'].$put(args, options),
      )
    },
  })
}

export function usePutDbaasExternalEndpointRsyslogEndpointId<
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
                    (typeof client)['dbaas-external-endpoint-rsyslog'][':endpoint-id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-external-endpoint-rsyslog'][':endpoint-id']['$put']
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
  const mutationDefaults = getPutDbaasExternalEndpointRsyslogEndpointIdMutationOptions<
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

export function getDeleteDbaasExternalEndpointRsyslogEndpointIdMutationKey() {
  return [
    'dbaas-external-endpoint-rsyslog',
    '/dbaas-external-endpoint-rsyslog/:endpoint-id',
    'DELETE',
  ] as const
}

export function getDeleteDbaasExternalEndpointRsyslogEndpointIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['dbaas-external-endpoint-rsyslog'][':endpoint-id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-external-endpoint-rsyslog'][':endpoint-id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDbaasExternalEndpointRsyslogEndpointIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-external-endpoint-rsyslog'][':endpoint-id']['$delete']
      >,
    ) {
      return parseResponse(
        client['dbaas-external-endpoint-rsyslog'][':endpoint-id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteDbaasExternalEndpointRsyslogEndpointId<
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
                    (typeof client)['dbaas-external-endpoint-rsyslog'][':endpoint-id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-external-endpoint-rsyslog'][':endpoint-id']['$delete']
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
  const mutationDefaults = getDeleteDbaasExternalEndpointRsyslogEndpointIdMutationOptions<
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

export function getPutSksClusterIdGenerateKarpenterExoscaleNodeclassMutationKey() {
  return ['sks-cluster', '/sks-cluster/:id/generate-karpenter-exoscale-nodeclass', 'PUT'] as const
}

export function getPutSksClusterIdGenerateKarpenterExoscaleNodeclassMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['sks-cluster'][':id']['generate-karpenter-exoscale-nodeclass']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['sks-cluster'][':id']['generate-karpenter-exoscale-nodeclass']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutSksClusterIdGenerateKarpenterExoscaleNodeclassMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['sks-cluster'][':id']['generate-karpenter-exoscale-nodeclass']['$put']
      >,
    ) {
      return parseResponse(
        client['sks-cluster'][':id']['generate-karpenter-exoscale-nodeclass'].$put(args, options),
      )
    },
  })
}

export function usePutSksClusterIdGenerateKarpenterExoscaleNodeclass<
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
                    (typeof client)['sks-cluster'][':id']['generate-karpenter-exoscale-nodeclass']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['sks-cluster'][':id']['generate-karpenter-exoscale-nodeclass']['$put']
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
  const mutationDefaults = getPutSksClusterIdGenerateKarpenterExoscaleNodeclassMutationOptions<
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

export function getPostSksClusterIdNodepoolMutationKey() {
  return ['sks-cluster', '/sks-cluster/:id/nodepool', 'POST'] as const
}

export function getPostSksClusterIdNodepoolMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['sks-cluster'][':id']['nodepool']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['sks-cluster'][':id']['nodepool']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSksClusterIdNodepoolMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['sks-cluster'][':id']['nodepool']['$post']>,
    ) {
      return parseResponse(client['sks-cluster'][':id'].nodepool.$post(args, options))
    },
  })
}

export function usePostSksClusterIdNodepool<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['sks-cluster'][':id']['nodepool']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['sks-cluster'][':id']['nodepool']['$post']>,
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
  const mutationDefaults = getPostSksClusterIdNodepoolMutationOptions<TError, TOnMutateResult>(
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

export function getPostDbaasExternalEndpointElasticsearchNameMutationKey() {
  return [
    'dbaas-external-endpoint-elasticsearch',
    '/dbaas-external-endpoint-elasticsearch/:name',
    'POST',
  ] as const
}

export function getPostDbaasExternalEndpointElasticsearchNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['dbaas-external-endpoint-elasticsearch'][':name']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-external-endpoint-elasticsearch'][':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDbaasExternalEndpointElasticsearchNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-external-endpoint-elasticsearch'][':name']['$post']
      >,
    ) {
      return parseResponse(
        client['dbaas-external-endpoint-elasticsearch'][':name'].$post(args, options),
      )
    },
  })
}

export function usePostDbaasExternalEndpointElasticsearchName<
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
                    (typeof client)['dbaas-external-endpoint-elasticsearch'][':name']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-external-endpoint-elasticsearch'][':name']['$post']
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
  const mutationDefaults = getPostDbaasExternalEndpointElasticsearchNameMutationOptions<
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

export function getAiApiKeyIdRevealQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ai)['api-key'][':id']['reveal']['$get']>>,
) {
  return ['ai', '/ai/api-key/:id/reveal', toValue(args)] as const
}

export function getAiApiKeyIdRevealQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ai)['api-key'][':id']['reveal']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAiApiKeyIdRevealQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ai['api-key'][':id'].reveal.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAiApiKeyIdReveal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ai)['api-key'][':id']['reveal']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ai)['api-key'][':id']['reveal']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ai)['api-key'][':id']['reveal']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ai)['api-key'][':id']['reveal']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAiApiKeyIdRevealQueryKey>
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
          Awaited<ReturnType<(typeof client.ai)['api-key'][':id']['reveal']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAiApiKeyIdRevealQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAiApiKeyIdRevealQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ai['api-key'][':id'].reveal.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDbaasOpensearchNameMaintenanceStartMutationKey() {
  return ['dbaas-opensearch', '/dbaas-opensearch/:name/maintenance/start', 'PUT'] as const
}

export function getPutDbaasOpensearchNameMaintenanceStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['dbaas-opensearch'][':name']['maintenance']['start']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-opensearch'][':name']['maintenance']['start']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDbaasOpensearchNameMaintenanceStartMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-opensearch'][':name']['maintenance']['start']['$put']
      >,
    ) {
      return parseResponse(
        client['dbaas-opensearch'][':name'].maintenance.start.$put(args, options),
      )
    },
  })
}

export function usePutDbaasOpensearchNameMaintenanceStart<
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
                    (typeof client)['dbaas-opensearch'][':name']['maintenance']['start']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-opensearch'][':name']['maintenance']['start']['$put']
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
  const mutationDefaults = getPutDbaasOpensearchNameMaintenanceStartMutationOptions<
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

export function getDbaasKafkaNameAclConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-kafka'][':name']['acl-config']['$get']>
  >,
) {
  return ['dbaas-kafka', '/dbaas-kafka/:name/acl-config', toValue(args)] as const
}

export function getDbaasKafkaNameAclConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-kafka'][':name']['acl-config']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDbaasKafkaNameAclConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-kafka'][':name']['acl-config'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDbaasKafkaNameAclConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['dbaas-kafka'][':name']['acl-config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-kafka'][':name']['acl-config']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-kafka'][':name']['acl-config']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-kafka'][':name']['acl-config']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDbaasKafkaNameAclConfigQueryKey>
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
          Awaited<ReturnType<(typeof client)['dbaas-kafka'][':name']['acl-config']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasKafkaNameAclConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDbaasKafkaNameAclConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-kafka'][':name']['acl-config'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDbaasKafkaServiceNameUserUsernamePasswordResetMutationKey() {
  return ['dbaas-kafka', '/dbaas-kafka/:service-name/user/:username/password/reset', 'PUT'] as const
}

export function getPutDbaasKafkaServiceNameUserUsernamePasswordResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['dbaas-kafka'][':service-name']['user'][':username']['password']['reset']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['dbaas-kafka'][':service-name']['user'][':username']['password']['reset']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutDbaasKafkaServiceNameUserUsernamePasswordResetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-kafka'][':service-name']['user'][':username']['password']['reset']['$put']
      >,
    ) {
      return parseResponse(
        client['dbaas-kafka'][':service-name'].user[':username'].password.reset.$put(args, options),
      )
    },
  })
}

export function usePutDbaasKafkaServiceNameUserUsernamePasswordReset<
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
                    (typeof client)['dbaas-kafka'][':service-name']['user'][':username']['password']['reset']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-kafka'][':service-name']['user'][':username']['password']['reset']['$put']
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
  const mutationDefaults = getPutDbaasKafkaServiceNameUserUsernamePasswordResetMutationOptions<
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

export function getAiApiKeyQueryKey() {
  return ['ai', '/ai/api-key'] as const
}

export function getAiApiKeyQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAiApiKeyQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ai['api-key'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAiApiKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ai)['api-key']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ai)['api-key']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ai)['api-key']['$get']>>>
            >
          >,
          ReturnType<typeof getAiApiKeyQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ai)['api-key']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAiApiKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAiApiKeyQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.ai['api-key'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAiApiKeyMutationKey() {
  return ['ai', '/ai/api-key', 'POST'] as const
}

export function getPostAiApiKeyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ai)['api-key']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client.ai)['api-key']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAiApiKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ai)['api-key']['$post']>) {
      return parseResponse(client.ai['api-key'].$post(args, options))
    },
  })
}

export function usePostAiApiKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ai)['api-key']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.ai)['api-key']['$post']>,
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
  const mutationDefaults = getPostAiApiKeyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostKmsKeyIdReEncryptMutationKey() {
  return ['kms-key', '/kms-key/:id/re-encrypt', 'POST'] as const
}

export function getPostKmsKeyIdReEncryptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['kms-key'][':id']['re-encrypt']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['kms-key'][':id']['re-encrypt']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKmsKeyIdReEncryptMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['kms-key'][':id']['re-encrypt']['$post']>,
    ) {
      return parseResponse(client['kms-key'][':id']['re-encrypt'].$post(args, options))
    },
  })
}

export function usePostKmsKeyIdReEncrypt<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['kms-key'][':id']['re-encrypt']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['kms-key'][':id']['re-encrypt']['$post']>,
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
  const mutationDefaults = getPostKmsKeyIdReEncryptMutationOptions<TError, TOnMutateResult>(
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

export function getDbaasOpensearchServiceNameUserUsernamePasswordRevealQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['dbaas-opensearch'][':service-name']['user'][':username']['password']['reveal']['$get']
    >
  >,
) {
  return [
    'dbaas-opensearch',
    '/dbaas-opensearch/:service-name/user/:username/password/reveal',
    toValue(args),
  ] as const
}

export function getDbaasOpensearchServiceNameUserUsernamePasswordRevealQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['dbaas-opensearch'][':service-name']['user'][':username']['password']['reveal']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDbaasOpensearchServiceNameUserUsernamePasswordRevealQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-opensearch'][':service-name'].user[':username'].password.reveal.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useDbaasOpensearchServiceNameUserUsernamePasswordReveal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['dbaas-opensearch'][':service-name']['user'][':username']['password']['reveal']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['dbaas-opensearch'][':service-name']['user'][':username']['password']['reveal']['$get']
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
                    (typeof client)['dbaas-opensearch'][':service-name']['user'][':username']['password']['reveal']['$get']
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
                    (typeof client)['dbaas-opensearch'][':service-name']['user'][':username']['password']['reveal']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDbaasOpensearchServiceNameUserUsernamePasswordRevealQueryKey>
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
              (typeof client)['dbaas-opensearch'][':service-name']['user'][':username']['password']['reveal']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasOpensearchServiceNameUserUsernamePasswordRevealQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDbaasOpensearchServiceNameUserUsernamePasswordRevealQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-opensearch'][':service-name'].user[':username'].password.reveal.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutDbaasValkeyNameMaintenanceStartMutationKey() {
  return ['dbaas-valkey', '/dbaas-valkey/:name/maintenance/start', 'PUT'] as const
}

export function getPutDbaasValkeyNameMaintenanceStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['dbaas-valkey'][':name']['maintenance']['start']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-valkey'][':name']['maintenance']['start']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDbaasValkeyNameMaintenanceStartMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-valkey'][':name']['maintenance']['start']['$put']
      >,
    ) {
      return parseResponse(client['dbaas-valkey'][':name'].maintenance.start.$put(args, options))
    },
  })
}

export function usePutDbaasValkeyNameMaintenanceStart<
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
                    (typeof client)['dbaas-valkey'][':name']['maintenance']['start']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-valkey'][':name']['maintenance']['start']['$put']
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
  const mutationDefaults = getPutDbaasValkeyNameMaintenanceStartMutationOptions<
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

export function getDbaasOpensearchNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dbaas-opensearch'][':name']['$get']>>,
) {
  return ['dbaas-opensearch', '/dbaas-opensearch/:name', toValue(args)] as const
}

export function getDbaasOpensearchNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dbaas-opensearch'][':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDbaasOpensearchNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-opensearch'][':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDbaasOpensearchName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['dbaas-opensearch'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dbaas-opensearch'][':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-opensearch'][':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-opensearch'][':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDbaasOpensearchNameQueryKey>
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
          Awaited<ReturnType<(typeof client)['dbaas-opensearch'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasOpensearchNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDbaasOpensearchNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-opensearch'][':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDbaasOpensearchNameMutationKey() {
  return ['dbaas-opensearch', '/dbaas-opensearch/:name', 'PUT'] as const
}

export function getPutDbaasOpensearchNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-opensearch'][':name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-opensearch'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDbaasOpensearchNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['dbaas-opensearch'][':name']['$put']>) {
      return parseResponse(client['dbaas-opensearch'][':name'].$put(args, options))
    },
  })
}

export function usePutDbaasOpensearchName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-opensearch'][':name']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-opensearch'][':name']['$put']>,
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
  const mutationDefaults = getPutDbaasOpensearchNameMutationOptions<TError, TOnMutateResult>(
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

export function getPostDbaasOpensearchNameMutationKey() {
  return ['dbaas-opensearch', '/dbaas-opensearch/:name', 'POST'] as const
}

export function getPostDbaasOpensearchNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-opensearch'][':name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-opensearch'][':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDbaasOpensearchNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['dbaas-opensearch'][':name']['$post']>,
    ) {
      return parseResponse(client['dbaas-opensearch'][':name'].$post(args, options))
    },
  })
}

export function usePostDbaasOpensearchName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-opensearch'][':name']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-opensearch'][':name']['$post']>,
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
  const mutationDefaults = getPostDbaasOpensearchNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteDbaasOpensearchNameMutationKey() {
  return ['dbaas-opensearch', '/dbaas-opensearch/:name', 'DELETE'] as const
}

export function getDeleteDbaasOpensearchNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-opensearch'][':name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-opensearch'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDbaasOpensearchNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['dbaas-opensearch'][':name']['$delete']>,
    ) {
      return parseResponse(client['dbaas-opensearch'][':name'].$delete(args, options))
    },
  })
}

export function useDeleteDbaasOpensearchName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-opensearch'][':name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-opensearch'][':name']['$delete']>,
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
  const mutationDefaults = getDeleteDbaasOpensearchNameMutationOptions<TError, TOnMutateResult>(
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

export function getPutDbaasExternalEndpointSourceServiceNameDetachMutationKey() {
  return [
    'dbaas-external-endpoint',
    '/dbaas-external-endpoint/:source-service-name/detach',
    'PUT',
  ] as const
}

export function getPutDbaasExternalEndpointSourceServiceNameDetachMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['dbaas-external-endpoint'][':source-service-name']['detach']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['dbaas-external-endpoint'][':source-service-name']['detach']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutDbaasExternalEndpointSourceServiceNameDetachMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-external-endpoint'][':source-service-name']['detach']['$put']
      >,
    ) {
      return parseResponse(
        client['dbaas-external-endpoint'][':source-service-name'].detach.$put(args, options),
      )
    },
  })
}

export function usePutDbaasExternalEndpointSourceServiceNameDetach<
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
                    (typeof client)['dbaas-external-endpoint'][':source-service-name']['detach']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-external-endpoint'][':source-service-name']['detach']['$put']
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
  const mutationDefaults = getPutDbaasExternalEndpointSourceServiceNameDetachMutationOptions<
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

export function getDbaasValkeyServiceNameUserUsernamePasswordRevealQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['dbaas-valkey'][':service-name']['user'][':username']['password']['reveal']['$get']
    >
  >,
) {
  return [
    'dbaas-valkey',
    '/dbaas-valkey/:service-name/user/:username/password/reveal',
    toValue(args),
  ] as const
}

export function getDbaasValkeyServiceNameUserUsernamePasswordRevealQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['dbaas-valkey'][':service-name']['user'][':username']['password']['reveal']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDbaasValkeyServiceNameUserUsernamePasswordRevealQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-valkey'][':service-name'].user[':username'].password.reveal.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useDbaasValkeyServiceNameUserUsernamePasswordReveal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['dbaas-valkey'][':service-name']['user'][':username']['password']['reveal']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['dbaas-valkey'][':service-name']['user'][':username']['password']['reveal']['$get']
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
                    (typeof client)['dbaas-valkey'][':service-name']['user'][':username']['password']['reveal']['$get']
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
                    (typeof client)['dbaas-valkey'][':service-name']['user'][':username']['password']['reveal']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDbaasValkeyServiceNameUserUsernamePasswordRevealQueryKey>
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
              (typeof client)['dbaas-valkey'][':service-name']['user'][':username']['password']['reveal']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasValkeyServiceNameUserUsernamePasswordRevealQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDbaasValkeyServiceNameUserUsernamePasswordRevealQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-valkey'][':service-name'].user[':username'].password.reveal.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAiQuotaQueryKey() {
  return ['ai', '/ai/quota'] as const
}

export function getAiQuotaQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAiQuotaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ai.quota.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAiQuota<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.quota.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.quota.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.quota.$get>>>>
          >,
          ReturnType<typeof getAiQuotaQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.quota.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAiQuotaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAiQuotaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.ai.quota.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDbaasPostgresNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dbaas-postgres'][':name']['$get']>>,
) {
  return ['dbaas-postgres', '/dbaas-postgres/:name', toValue(args)] as const
}

export function getDbaasPostgresNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dbaas-postgres'][':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDbaasPostgresNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-postgres'][':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDbaasPostgresName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-postgres'][':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dbaas-postgres'][':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-postgres'][':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-postgres'][':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDbaasPostgresNameQueryKey>
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
          Awaited<ReturnType<(typeof client)['dbaas-postgres'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasPostgresNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDbaasPostgresNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-postgres'][':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDbaasPostgresNameMutationKey() {
  return ['dbaas-postgres', '/dbaas-postgres/:name', 'PUT'] as const
}

export function getPutDbaasPostgresNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-postgres'][':name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-postgres'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDbaasPostgresNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['dbaas-postgres'][':name']['$put']>) {
      return parseResponse(client['dbaas-postgres'][':name'].$put(args, options))
    },
  })
}

export function usePutDbaasPostgresName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-postgres'][':name']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-postgres'][':name']['$put']>,
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
  const mutationDefaults = getPutDbaasPostgresNameMutationOptions<TError, TOnMutateResult>(
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

export function getPostDbaasPostgresNameMutationKey() {
  return ['dbaas-postgres', '/dbaas-postgres/:name', 'POST'] as const
}

export function getPostDbaasPostgresNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-postgres'][':name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-postgres'][':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDbaasPostgresNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['dbaas-postgres'][':name']['$post']>) {
      return parseResponse(client['dbaas-postgres'][':name'].$post(args, options))
    },
  })
}

export function usePostDbaasPostgresName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-postgres'][':name']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-postgres'][':name']['$post']>,
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
  const mutationDefaults = getPostDbaasPostgresNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteDbaasPostgresNameMutationKey() {
  return ['dbaas-postgres', '/dbaas-postgres/:name', 'DELETE'] as const
}

export function getDeleteDbaasPostgresNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-postgres'][':name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-postgres'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDbaasPostgresNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['dbaas-postgres'][':name']['$delete']>,
    ) {
      return parseResponse(client['dbaas-postgres'][':name'].$delete(args, options))
    },
  })
}

export function useDeleteDbaasPostgresName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-postgres'][':name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-postgres'][':name']['$delete']>,
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
  const mutationDefaults = getDeleteDbaasPostgresNameMutationOptions<TError, TOnMutateResult>(
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

export function getDbaasValkeyServiceNameUserQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-valkey'][':service-name']['user']['$get']>
  >,
) {
  return ['dbaas-valkey', '/dbaas-valkey/:service-name/user', toValue(args)] as const
}

export function getDbaasValkeyServiceNameUserQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-valkey'][':service-name']['user']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDbaasValkeyServiceNameUserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-valkey'][':service-name'].user.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDbaasValkeyServiceNameUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['dbaas-valkey'][':service-name']['user']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-valkey'][':service-name']['user']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['dbaas-valkey'][':service-name']['user']['$get']>
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
                  ReturnType<(typeof client)['dbaas-valkey'][':service-name']['user']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDbaasValkeyServiceNameUserQueryKey>
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
          Awaited<ReturnType<(typeof client)['dbaas-valkey'][':service-name']['user']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasValkeyServiceNameUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDbaasValkeyServiceNameUserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-valkey'][':service-name'].user.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDbaasValkeyServiceNameUserMutationKey() {
  return ['dbaas-valkey', '/dbaas-valkey/:service-name/user', 'POST'] as const
}

export function getPostDbaasValkeyServiceNameUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-valkey'][':service-name']['user']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-valkey'][':service-name']['user']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDbaasValkeyServiceNameUserMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['dbaas-valkey'][':service-name']['user']['$post']>,
    ) {
      return parseResponse(client['dbaas-valkey'][':service-name'].user.$post(args, options))
    },
  })
}

export function usePostDbaasValkeyServiceNameUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['dbaas-valkey'][':service-name']['user']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-valkey'][':service-name']['user']['$post']>,
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
  const mutationDefaults = getPostDbaasValkeyServiceNameUserMutationOptions<
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

export function getPutSksClusterIdRotateKarpenterCredentialsMutationKey() {
  return ['sks-cluster', '/sks-cluster/:id/rotate-karpenter-credentials', 'PUT'] as const
}

export function getPutSksClusterIdRotateKarpenterCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['sks-cluster'][':id']['rotate-karpenter-credentials']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['sks-cluster'][':id']['rotate-karpenter-credentials']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSksClusterIdRotateKarpenterCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['sks-cluster'][':id']['rotate-karpenter-credentials']['$put']
      >,
    ) {
      return parseResponse(
        client['sks-cluster'][':id']['rotate-karpenter-credentials'].$put(args, options),
      )
    },
  })
}

export function usePutSksClusterIdRotateKarpenterCredentials<
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
                    (typeof client)['sks-cluster'][':id']['rotate-karpenter-credentials']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['sks-cluster'][':id']['rotate-karpenter-credentials']['$put']
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
  const mutationDefaults = getPutSksClusterIdRotateKarpenterCredentialsMutationOptions<
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

export function getPostDbaasIntegrationMutationKey() {
  return ['dbaas-integration', '/dbaas-integration', 'POST'] as const
}

export function getPostDbaasIntegrationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-integration']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-integration']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDbaasIntegrationMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['dbaas-integration']['$post']>) {
      return parseResponse(client['dbaas-integration'].$post(args, options))
    },
  })
}

export function usePostDbaasIntegration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-integration']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dbaas-integration']['$post']>,
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
  const mutationDefaults = getPostDbaasIntegrationMutationOptions<TError, TOnMutateResult>(
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

export function getDbaasTaskServiceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-task'][':service'][':id']['$get']>
  >,
) {
  return ['dbaas-task', '/dbaas-task/:service/:id', toValue(args)] as const
}

export function getDbaasTaskServiceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-task'][':service'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDbaasTaskServiceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dbaas-task'][':service'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDbaasTaskServiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['dbaas-task'][':service'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['dbaas-task'][':service'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-task'][':service'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dbaas-task'][':service'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDbaasTaskServiceIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['dbaas-task'][':service'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbaasTaskServiceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDbaasTaskServiceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['dbaas-task'][':service'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSosBucketPresignedUrlQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sos)[':bucket']['presigned-url']['$get']>>,
) {
  return ['sos', '/sos/:bucket/presigned-url', toValue(args)] as const
}

export function getSosBucketPresignedUrlQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sos)[':bucket']['presigned-url']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSosBucketPresignedUrlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sos[':bucket']['presigned-url'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSosBucketPresignedUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sos)[':bucket']['presigned-url']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sos)[':bucket']['presigned-url']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sos)[':bucket']['presigned-url']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sos)[':bucket']['presigned-url']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSosBucketPresignedUrlQueryKey>
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
          Awaited<ReturnType<(typeof client.sos)[':bucket']['presigned-url']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSosBucketPresignedUrlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSosBucketPresignedUrlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sos[':bucket']['presigned-url'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSksClusterIdRotateOperatorsCaMutationKey() {
  return ['sks-cluster', '/sks-cluster/:id/rotate-operators-ca', 'PUT'] as const
}

export function getPutSksClusterIdRotateOperatorsCaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['sks-cluster'][':id']['rotate-operators-ca']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['sks-cluster'][':id']['rotate-operators-ca']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSksClusterIdRotateOperatorsCaMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['sks-cluster'][':id']['rotate-operators-ca']['$put']>,
    ) {
      return parseResponse(client['sks-cluster'][':id']['rotate-operators-ca'].$put(args, options))
    },
  })
}

export function usePutSksClusterIdRotateOperatorsCa<
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
                  ReturnType<(typeof client)['sks-cluster'][':id']['rotate-operators-ca']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['sks-cluster'][':id']['rotate-operators-ca']['$put']>,
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
  const mutationDefaults = getPutSksClusterIdRotateOperatorsCaMutationOptions<
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

export function getAiDeploymentIdApiKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ai.deployment)[':id']['api-key']['$get']>>,
) {
  return ['ai', '/ai/deployment/:id/api-key', toValue(args)] as const
}

export function getAiDeploymentIdApiKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ai.deployment)[':id']['api-key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAiDeploymentIdApiKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ai.deployment[':id']['api-key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAiDeploymentIdApiKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ai.deployment)[':id']['api-key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ai.deployment)[':id']['api-key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ai.deployment)[':id']['api-key']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ai.deployment)[':id']['api-key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAiDeploymentIdApiKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.ai.deployment)[':id']['api-key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAiDeploymentIdApiKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAiDeploymentIdApiKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ai.deployment[':id']['api-key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAntiAffinityGroupIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['anti-affinity-group'][':id']['$get']>>,
) {
  return ['anti-affinity-group', '/anti-affinity-group/:id', toValue(args)] as const
}

export function getAntiAffinityGroupIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['anti-affinity-group'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAntiAffinityGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['anti-affinity-group'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAntiAffinityGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['anti-affinity-group'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['anti-affinity-group'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['anti-affinity-group'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['anti-affinity-group'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAntiAffinityGroupIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['anti-affinity-group'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAntiAffinityGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAntiAffinityGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['anti-affinity-group'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAntiAffinityGroupIdMutationKey() {
  return ['anti-affinity-group', '/anti-affinity-group/:id', 'DELETE'] as const
}

export function getDeleteAntiAffinityGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['anti-affinity-group'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['anti-affinity-group'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAntiAffinityGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['anti-affinity-group'][':id']['$delete']>,
    ) {
      return parseResponse(client['anti-affinity-group'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteAntiAffinityGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['anti-affinity-group'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['anti-affinity-group'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteAntiAffinityGroupIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostKmsKeyIdReplicateMutationKey() {
  return ['kms-key', '/kms-key/:id/replicate', 'POST'] as const
}

export function getPostKmsKeyIdReplicateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['kms-key'][':id']['replicate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['kms-key'][':id']['replicate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKmsKeyIdReplicateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['kms-key'][':id']['replicate']['$post']>,
    ) {
      return parseResponse(client['kms-key'][':id'].replicate.$post(args, options))
    },
  })
}

export function usePostKmsKeyIdReplicate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['kms-key'][':id']['replicate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['kms-key'][':id']['replicate']['$post']>,
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
  const mutationDefaults = getPostKmsKeyIdReplicateMutationOptions<TError, TOnMutateResult>(
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

export function getSksClusterVersionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['sks-cluster-version']['$get']>>,
) {
  return ['sks-cluster-version', '/sks-cluster-version', toValue(args)] as const
}

export function getSksClusterVersionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['sks-cluster-version']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSksClusterVersionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['sks-cluster-version'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSksClusterVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['sks-cluster-version']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['sks-cluster-version']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['sks-cluster-version']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['sks-cluster-version']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSksClusterVersionQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['sks-cluster-version']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSksClusterVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSksClusterVersionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['sks-cluster-version'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstanceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.instance.$get>>,
) {
  return ['instance', '/instance', toValue(args)] as const
}

export function getInstanceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.instance.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstanceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instance.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInstance<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.instance.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.$get>>>>
          >,
          ReturnType<typeof getInstanceQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInstanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstanceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.instance.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostInstanceMutationKey() {
  return ['instance', '/instance', 'POST'] as const
}

export function getPostInstanceMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.$post>>>>>,
    TError,
    InferRequestType<typeof client.instance.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInstanceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.instance.$post>) {
      return parseResponse(client.instance.$post(args, options))
    },
  })
}

export function usePostInstance<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.instance.$post>,
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
  const mutationDefaults = getPostInstanceMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIamRoleQueryKey() {
  return ['iam-role', '/iam-role'] as const
}

export function getIamRoleQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getIamRoleQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['iam-role'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIamRole<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['iam-role']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['iam-role']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['iam-role']['$get']>>>
            >
          >,
          ReturnType<typeof getIamRoleQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['iam-role']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIamRoleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getIamRoleQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['iam-role'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostIamRoleMutationKey() {
  return ['iam-role', '/iam-role', 'POST'] as const
}

export function getPostIamRoleMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['iam-role']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['iam-role']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIamRoleMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['iam-role']['$post']>) {
      return parseResponse(client['iam-role'].$post(args, options))
    },
  })
}

export function usePostIamRole<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['iam-role']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['iam-role']['$post']>,
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
  const mutationDefaults = getPostIamRoleMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeletePrivateNetworkIdFieldMutationKey() {
  return ['private-network', '/private-network/:id/:field', 'DELETE'] as const
}

export function getDeletePrivateNetworkIdFieldMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['private-network'][':id'][':field']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['private-network'][':id'][':field']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePrivateNetworkIdFieldMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['private-network'][':id'][':field']['$delete']>,
    ) {
      return parseResponse(client['private-network'][':id'][':field'].$delete(args, options))
    },
  })
}

export function useDeletePrivateNetworkIdField<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['private-network'][':id'][':field']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['private-network'][':id'][':field']['$delete']>,
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
  const mutationDefaults = getDeletePrivateNetworkIdFieldMutationOptions<TError, TOnMutateResult>(
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

export function getUserQueryKey() {
  return ['user', '/user'] as const
}

export function getUserQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUserQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUser<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
          ReturnType<typeof getUserQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUserQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.user.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUserMutationKey() {
  return ['user', '/user', 'POST'] as const
}

export function getPostUserMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$post>>>>>,
    TError,
    InferRequestType<typeof client.user.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.$post>) {
      return parseResponse(client.user.$post(args, options))
    },
  })
}

export function usePostUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$post>>>>>,
          TError,
          InferRequestType<typeof client.user.$post>,
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
  const mutationDefaults = getPostUserMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutDbaasClickhouseNameMaintenanceStartMutationKey() {
  return ['dbaas-clickhouse', '/dbaas-clickhouse/:name/maintenance/start', 'PUT'] as const
}

export function getPutDbaasClickhouseNameMaintenanceStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['dbaas-clickhouse'][':name']['maintenance']['start']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dbaas-clickhouse'][':name']['maintenance']['start']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDbaasClickhouseNameMaintenanceStartMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-clickhouse'][':name']['maintenance']['start']['$put']
      >,
    ) {
      return parseResponse(
        client['dbaas-clickhouse'][':name'].maintenance.start.$put(args, options),
      )
    },
  })
}

export function usePutDbaasClickhouseNameMaintenanceStart<
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
                    (typeof client)['dbaas-clickhouse'][':name']['maintenance']['start']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-clickhouse'][':name']['maintenance']['start']['$put']
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
  const mutationDefaults = getPutDbaasClickhouseNameMaintenanceStartMutationOptions<
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

export function getAiDeploymentIdLogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ai.deployment)[':id']['logs']['$get']>>,
) {
  return ['ai', '/ai/deployment/:id/logs', toValue(args)] as const
}

export function getAiDeploymentIdLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ai.deployment)[':id']['logs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAiDeploymentIdLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ai.deployment[':id'].logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAiDeploymentIdLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ai.deployment)[':id']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ai.deployment)[':id']['logs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ai.deployment)[':id']['logs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ai.deployment)[':id']['logs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAiDeploymentIdLogsQueryKey>
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
          Awaited<ReturnType<(typeof client.ai.deployment)[':id']['logs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAiDeploymentIdLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAiDeploymentIdLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ai.deployment[':id'].logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSksClusterIdUpgradeMutationKey() {
  return ['sks-cluster', '/sks-cluster/:id/upgrade', 'PUT'] as const
}

export function getPutSksClusterIdUpgradeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['sks-cluster'][':id']['upgrade']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['sks-cluster'][':id']['upgrade']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSksClusterIdUpgradeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['sks-cluster'][':id']['upgrade']['$put']>,
    ) {
      return parseResponse(client['sks-cluster'][':id'].upgrade.$put(args, options))
    },
  })
}

export function usePutSksClusterIdUpgrade<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['sks-cluster'][':id']['upgrade']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['sks-cluster'][':id']['upgrade']['$put']>,
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
  const mutationDefaults = getPutSksClusterIdUpgradeMutationOptions<TError, TOnMutateResult>(
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

export function getPostKmsKeyIdCancelDeletionMutationKey() {
  return ['kms-key', '/kms-key/:id/cancel-deletion', 'POST'] as const
}

export function getPostKmsKeyIdCancelDeletionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['kms-key'][':id']['cancel-deletion']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['kms-key'][':id']['cancel-deletion']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKmsKeyIdCancelDeletionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['kms-key'][':id']['cancel-deletion']['$post']>,
    ) {
      return parseResponse(client['kms-key'][':id']['cancel-deletion'].$post(args, options))
    },
  })
}

export function usePostKmsKeyIdCancelDeletion<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['kms-key'][':id']['cancel-deletion']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['kms-key'][':id']['cancel-deletion']['$post']>,
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
  const mutationDefaults = getPostKmsKeyIdCancelDeletionMutationOptions<TError, TOnMutateResult>(
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

export function getPostKmsKeyIdGenerateDataKeyMutationKey() {
  return ['kms-key', '/kms-key/:id/generate-data-key', 'POST'] as const
}

export function getPostKmsKeyIdGenerateDataKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['kms-key'][':id']['generate-data-key']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['kms-key'][':id']['generate-data-key']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKmsKeyIdGenerateDataKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['kms-key'][':id']['generate-data-key']['$post']>,
    ) {
      return parseResponse(client['kms-key'][':id']['generate-data-key'].$post(args, options))
    },
  })
}

export function usePostKmsKeyIdGenerateDataKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['kms-key'][':id']['generate-data-key']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['kms-key'][':id']['generate-data-key']['$post']>,
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
  const mutationDefaults = getPostKmsKeyIdGenerateDataKeyMutationOptions<TError, TOnMutateResult>(
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

export function getVpcIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vpc)[':id']['$get']>>,
) {
  return ['vpc', '/vpc/:id', toValue(args)] as const
}

export function getVpcIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vpc)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVpcIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vpc[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVpcId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.vpc)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vpc)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.vpc)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.vpc)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getVpcIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.vpc)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getVpcIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVpcIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vpc[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutVpcIdMutationKey() {
  return ['vpc', '/vpc/:id', 'PUT'] as const
}

export function getPutVpcIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.vpc)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.vpc)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVpcIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.vpc)[':id']['$put']>) {
      return parseResponse(client.vpc[':id'].$put(args, options))
    },
  })
}

export function usePutVpcId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.vpc)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.vpc)[':id']['$put']>,
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
  const mutationDefaults = getPutVpcIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteVpcIdMutationKey() {
  return ['vpc', '/vpc/:id', 'DELETE'] as const
}

export function getDeleteVpcIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.vpc)[':id']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.vpc)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVpcIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.vpc)[':id']['$delete']>) {
      return parseResponse(client.vpc[':id'].$delete(args, options))
    },
  })
}

export function useDeleteVpcId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.vpc)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.vpc)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteVpcIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBlockStorageQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['block-storage']['$get']>>,
) {
  return ['block-storage', '/block-storage', toValue(args)] as const
}

export function getBlockStorageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['block-storage']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBlockStorageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['block-storage'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBlockStorage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['block-storage']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['block-storage']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['block-storage']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['block-storage']['$get']>>>
            >
          >,
          ReturnType<typeof getBlockStorageQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['block-storage']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBlockStorageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBlockStorageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['block-storage'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBlockStorageMutationKey() {
  return ['block-storage', '/block-storage', 'POST'] as const
}

export function getPostBlockStorageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['block-storage']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['block-storage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBlockStorageMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['block-storage']['$post']>) {
      return parseResponse(client['block-storage'].$post(args, options))
    },
  })
}

export function usePostBlockStorage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['block-storage']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['block-storage']['$post']>,
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
  const mutationDefaults = getPostBlockStorageMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteDbaasKafkaNameTopicAclConfigAclIdMutationKey() {
  return ['dbaas-kafka', '/dbaas-kafka/:name/topic/acl-config/:acl-id', 'DELETE'] as const
}

export function getDeleteDbaasKafkaNameTopicAclConfigAclIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['dbaas-kafka'][':name']['topic']['acl-config'][':acl-id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['dbaas-kafka'][':name']['topic']['acl-config'][':acl-id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteDbaasKafkaNameTopicAclConfigAclIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-kafka'][':name']['topic']['acl-config'][':acl-id']['$delete']
      >,
    ) {
      return parseResponse(
        client['dbaas-kafka'][':name'].topic['acl-config'][':acl-id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteDbaasKafkaNameTopicAclConfigAclId<
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
                    (typeof client)['dbaas-kafka'][':name']['topic']['acl-config'][':acl-id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-kafka'][':name']['topic']['acl-config'][':acl-id']['$delete']
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
  const mutationDefaults = getDeleteDbaasKafkaNameTopicAclConfigAclIdMutationOptions<
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

export function getPostInstanceInstanceIdRevertSnapshotMutationKey() {
  return ['instance', '/instance/:instance-id:revert-snapshot', 'POST'] as const
}

export function getPostInstanceInstanceIdRevertSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instance)[':instance-id:revert-snapshot']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.instance)[':instance-id:revert-snapshot']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInstanceInstanceIdRevertSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.instance)[':instance-id:revert-snapshot']['$post']>,
    ) {
      return parseResponse(client.instance[':instance-id:revert-snapshot'].$post(args, options))
    },
  })
}

export function usePostInstanceInstanceIdRevertSnapshot<
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
                  ReturnType<(typeof client.instance)[':instance-id:revert-snapshot']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.instance)[':instance-id:revert-snapshot']['$post']>,
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
  const mutationDefaults = getPostInstanceInstanceIdRevertSnapshotMutationOptions<
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

export function getPutDbaasPostgresServiceNameUserUsernamePasswordResetMutationKey() {
  return [
    'dbaas-postgres',
    '/dbaas-postgres/:service-name/user/:username/password/reset',
    'PUT',
  ] as const
}

export function getPutDbaasPostgresServiceNameUserUsernamePasswordResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['dbaas-postgres'][':service-name']['user'][':username']['password']['reset']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['dbaas-postgres'][':service-name']['user'][':username']['password']['reset']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutDbaasPostgresServiceNameUserUsernamePasswordResetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['dbaas-postgres'][':service-name']['user'][':username']['password']['reset']['$put']
      >,
    ) {
      return parseResponse(
        client['dbaas-postgres'][':service-name'].user[':username'].password.reset.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutDbaasPostgresServiceNameUserUsernamePasswordReset<
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
                    (typeof client)['dbaas-postgres'][':service-name']['user'][':username']['password']['reset']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['dbaas-postgres'][':service-name']['user'][':username']['password']['reset']['$put']
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
  const mutationDefaults = getPutDbaasPostgresServiceNameUserUsernamePasswordResetMutationOptions<
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
