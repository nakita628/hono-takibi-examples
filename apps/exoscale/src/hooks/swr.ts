import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetLoadBalancerIdServiceServiceIdKey(
  args: InferRequestType<(typeof client)['load-balancer'][':id']['service'][':service-id']['$get']>,
) {
  return ['load-balancer', '/load-balancer/:id/service/:service-id', args] as const
}

export function useGetLoadBalancerIdServiceServiceId<TError = unknown>(
  args: InferRequestType<(typeof client)['load-balancer'][':id']['service'][':service-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['load-balancer'][':id']['service'][':service-id']['$get']>
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
        ? getGetLoadBalancerIdServiceServiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['load-balancer'][':id']['service'][':service-id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['load-balancer'][':id'].service[':service-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLoadBalancerIdServiceServiceId<TError = unknown>(
  args: InferRequestType<(typeof client)['load-balancer'][':id']['service'][':service-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['load-balancer'][':id']['service'][':service-id']['$get']>
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
        ? getGetLoadBalancerIdServiceServiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['load-balancer'][':id']['service'][':service-id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['load-balancer'][':id'].service[':service-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutLoadBalancerIdServiceServiceIdKey() {
  return ['load-balancer', '/load-balancer/:id/service/:service-id', 'PUT'] as const
}

export function usePutLoadBalancerIdServiceServiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['load-balancer'][':id']['service'][':service-id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLoadBalancerIdServiceServiceIdKey()
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
            (typeof client)['load-balancer'][':id']['service'][':service-id']['$put']
          >
        },
      ) =>
        parseResponse(
          client['load-balancer'][':id'].service[':service-id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteLoadBalancerIdServiceServiceIdKey() {
  return ['load-balancer', '/load-balancer/:id/service/:service-id', 'DELETE'] as const
}

export function useDeleteLoadBalancerIdServiceServiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['load-balancer'][':id']['service'][':service-id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLoadBalancerIdServiceServiceIdKey()
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
            (typeof client)['load-balancer'][':id']['service'][':service-id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['load-balancer'][':id'].service[':service-id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDbaasExternalEndpointOpensearchEndpointIdKey(
  args: InferRequestType<
    (typeof client)['dbaas-external-endpoint-opensearch'][':endpoint-id']['$get']
  >,
) {
  return [
    'dbaas-external-endpoint-opensearch',
    '/dbaas-external-endpoint-opensearch/:endpoint-id',
    args,
  ] as const
}

export function useGetDbaasExternalEndpointOpensearchEndpointId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['dbaas-external-endpoint-opensearch'][':endpoint-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDbaasExternalEndpointOpensearchEndpointIdKey(args)
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
                (typeof client)['dbaas-external-endpoint-opensearch'][':endpoint-id']['$get']
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
          client['dbaas-external-endpoint-opensearch'][':endpoint-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasExternalEndpointOpensearchEndpointId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['dbaas-external-endpoint-opensearch'][':endpoint-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDbaasExternalEndpointOpensearchEndpointIdKey(args)
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
                (typeof client)['dbaas-external-endpoint-opensearch'][':endpoint-id']['$get']
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
          client['dbaas-external-endpoint-opensearch'][':endpoint-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutDbaasExternalEndpointOpensearchEndpointIdKey() {
  return [
    'dbaas-external-endpoint-opensearch',
    '/dbaas-external-endpoint-opensearch/:endpoint-id',
    'PUT',
  ] as const
}

export function usePutDbaasExternalEndpointOpensearchEndpointId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['dbaas-external-endpoint-opensearch'][':endpoint-id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDbaasExternalEndpointOpensearchEndpointIdKey()
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
            (typeof client)['dbaas-external-endpoint-opensearch'][':endpoint-id']['$put']
          >
        },
      ) =>
        parseResponse(
          client['dbaas-external-endpoint-opensearch'][':endpoint-id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteDbaasExternalEndpointOpensearchEndpointIdKey() {
  return [
    'dbaas-external-endpoint-opensearch',
    '/dbaas-external-endpoint-opensearch/:endpoint-id',
    'DELETE',
  ] as const
}

export function useDeleteDbaasExternalEndpointOpensearchEndpointId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['dbaas-external-endpoint-opensearch'][':endpoint-id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDbaasExternalEndpointOpensearchEndpointIdKey()
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
            (typeof client)['dbaas-external-endpoint-opensearch'][':endpoint-id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['dbaas-external-endpoint-opensearch'][':endpoint-id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDbaasOpensearchNameAclConfigKey(
  args: InferRequestType<(typeof client)['dbaas-opensearch'][':name']['acl-config']['$get']>,
) {
  return ['dbaas-opensearch', '/dbaas-opensearch/:name/acl-config', args] as const
}

export function useGetDbaasOpensearchNameAclConfig<TError = unknown>(
  args: InferRequestType<(typeof client)['dbaas-opensearch'][':name']['acl-config']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-opensearch'][':name']['acl-config']['$get']>>
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
        ? getGetDbaasOpensearchNameAclConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-opensearch'][':name']['acl-config']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['dbaas-opensearch'][':name']['acl-config'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasOpensearchNameAclConfig<TError = unknown>(
  args: InferRequestType<(typeof client)['dbaas-opensearch'][':name']['acl-config']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-opensearch'][':name']['acl-config']['$get']>>
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
        ? getGetDbaasOpensearchNameAclConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-opensearch'][':name']['acl-config']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['dbaas-opensearch'][':name']['acl-config'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDbaasOpensearchNameAclConfigKey() {
  return ['dbaas-opensearch', '/dbaas-opensearch/:name/acl-config', 'PUT'] as const
}

export function usePutDbaasOpensearchNameAclConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-opensearch'][':name']['acl-config']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dbaas-opensearch'][':name']['acl-config']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDbaasOpensearchNameAclConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['dbaas-opensearch'][':name']['acl-config']['$put']>
        },
      ) =>
        parseResponse(client['dbaas-opensearch'][':name']['acl-config'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutInstancePoolIdScaleKey() {
  return ['instance-pool', '/instance-pool/:id:scale', 'PUT'] as const
}

export function usePutInstancePoolIdScale<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['instance-pool'][':id:scale']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['instance-pool'][':id:scale']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutInstancePoolIdScaleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['instance-pool'][':id:scale']['$put']> },
      ) => parseResponse(client['instance-pool'][':id:scale'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInstanceIdCreateSnapshotKey() {
  return ['instance', '/instance/:id:create-snapshot', 'POST'] as const
}

export function usePostInstanceIdCreateSnapshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instance)[':id:create-snapshot']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.instance)[':id:create-snapshot']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInstanceIdCreateSnapshotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.instance)[':id:create-snapshot']['$post']> },
      ) => parseResponse(client.instance[':id:create-snapshot'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDbaasValkeyNameMigrationStopKey() {
  return ['dbaas-valkey', '/dbaas-valkey/:name/migration/stop', 'POST'] as const
}

export function usePostDbaasValkeyNameMigrationStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['dbaas-valkey'][':name']['migration']['stop']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDbaasValkeyNameMigrationStopKey()
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
            (typeof client)['dbaas-valkey'][':name']['migration']['stop']['$post']
          >
        },
      ) => parseResponse(client['dbaas-valkey'][':name'].migration.stop.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetReverseDnsElasticIpIdKey(
  args: InferRequestType<(typeof client)['reverse-dns']['elastic-ip'][':id']['$get']>,
) {
  return ['reverse-dns', '/reverse-dns/elastic-ip/:id', args] as const
}

export function useGetReverseDnsElasticIpId<TError = unknown>(
  args: InferRequestType<(typeof client)['reverse-dns']['elastic-ip'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['reverse-dns']['elastic-ip'][':id']['$get']>>
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
        ? getGetReverseDnsElasticIpIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['reverse-dns']['elastic-ip'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['reverse-dns']['elastic-ip'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReverseDnsElasticIpId<TError = unknown>(
  args: InferRequestType<(typeof client)['reverse-dns']['elastic-ip'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['reverse-dns']['elastic-ip'][':id']['$get']>>
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
        ? getGetReverseDnsElasticIpIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['reverse-dns']['elastic-ip'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['reverse-dns']['elastic-ip'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostReverseDnsElasticIpIdKey() {
  return ['reverse-dns', '/reverse-dns/elastic-ip/:id', 'POST'] as const
}

export function usePostReverseDnsElasticIpId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['reverse-dns']['elastic-ip'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['reverse-dns']['elastic-ip'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReverseDnsElasticIpIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['reverse-dns']['elastic-ip'][':id']['$post']> },
      ) => parseResponse(client['reverse-dns']['elastic-ip'][':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteReverseDnsElasticIpIdKey() {
  return ['reverse-dns', '/reverse-dns/elastic-ip/:id', 'DELETE'] as const
}

export function useDeleteReverseDnsElasticIpId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['reverse-dns']['elastic-ip'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['reverse-dns']['elastic-ip'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteReverseDnsElasticIpIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['reverse-dns']['elastic-ip'][':id']['$delete']>
        },
      ) => parseResponse(client['reverse-dns']['elastic-ip'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAntiAffinityGroupKey() {
  return ['anti-affinity-group', '/anti-affinity-group'] as const
}

export function useGetAntiAffinityGroup<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['anti-affinity-group']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAntiAffinityGroupKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['anti-affinity-group']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['anti-affinity-group'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAntiAffinityGroup<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['anti-affinity-group']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAntiAffinityGroupKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['anti-affinity-group']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['anti-affinity-group'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAntiAffinityGroupKey() {
  return ['anti-affinity-group', '/anti-affinity-group', 'POST'] as const
}

export function usePostAntiAffinityGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['anti-affinity-group']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['anti-affinity-group']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAntiAffinityGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['anti-affinity-group']['$post']> },
      ) => parseResponse(client['anti-affinity-group'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsageReportKey(
  args: InferRequestType<(typeof client)['usage-report']['$get']>,
) {
  return ['usage-report', '/usage-report', args] as const
}

export function useGetUsageReport<TError = unknown>(
  args: InferRequestType<(typeof client)['usage-report']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['usage-report']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsageReportKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['usage-report']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['usage-report'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsageReport<TError = unknown>(
  args: InferRequestType<(typeof client)['usage-report']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['usage-report']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsageReportKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['usage-report']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['usage-report'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventKey(args: InferRequestType<typeof client.event.$get>) {
  return ['event', '/event', args] as const
}

export function useGetEvent<TError = unknown>(
  args: InferRequestType<typeof client.event.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.event.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetEvent<TError = unknown>(
  args: InferRequestType<typeof client.event.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.event.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getDeleteSecurityGroupIdRulesRuleIdKey() {
  return ['security-group', '/security-group/:id/rules/:rule-id', 'DELETE'] as const
}

export function useDeleteSecurityGroupIdRulesRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['security-group'][':id']['rules'][':rule-id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSecurityGroupIdRulesRuleIdKey()
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
            (typeof client)['security-group'][':id']['rules'][':rule-id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['security-group'][':id'].rules[':rule-id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutDbaasGrafanaNameMaintenanceStartKey() {
  return ['dbaas-grafana', '/dbaas-grafana/:name/maintenance/start', 'PUT'] as const
}

export function usePutDbaasGrafanaNameMaintenanceStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['dbaas-grafana'][':name']['maintenance']['start']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDbaasGrafanaNameMaintenanceStartKey()
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
            (typeof client)['dbaas-grafana'][':name']['maintenance']['start']['$put']
          >
        },
      ) =>
        parseResponse(client['dbaas-grafana'][':name'].maintenance.start.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostKmsKeyIdDisableKeyRotationKey() {
  return ['kms-key', '/kms-key/:id/disable-key-rotation', 'POST'] as const
}

export function usePostKmsKeyIdDisableKeyRotation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['kms-key'][':id']['disable-key-rotation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['kms-key'][':id']['disable-key-rotation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKmsKeyIdDisableKeyRotationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['kms-key'][':id']['disable-key-rotation']['$post']>
        },
      ) =>
        parseResponse(client['kms-key'][':id']['disable-key-rotation'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDbaasPostgresServiceUpgradeCheckKey() {
  return ['dbaas-postgres', '/dbaas-postgres/:service/upgrade-check', 'POST'] as const
}

export function usePostDbaasPostgresServiceUpgradeCheck<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['dbaas-postgres'][':service']['upgrade-check']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDbaasPostgresServiceUpgradeCheckKey()
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
            (typeof client)['dbaas-postgres'][':service']['upgrade-check']['$post']
          >
        },
      ) =>
        parseResponse(
          client['dbaas-postgres'][':service']['upgrade-check'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutDbaasMysqlServiceNameUserUsernamePasswordResetKey() {
  return ['dbaas-mysql', '/dbaas-mysql/:service-name/user/:username/password/reset', 'PUT'] as const
}

export function usePutDbaasMysqlServiceNameUserUsernamePasswordReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['dbaas-mysql'][':service-name']['user'][':username']['password']['reset']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDbaasMysqlServiceNameUserUsernamePasswordResetKey()
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
            (typeof client)['dbaas-mysql'][':service-name']['user'][':username']['password']['reset']['$put']
          >
        },
      ) =>
        parseResponse(
          client['dbaas-mysql'][':service-name'].user[':username'].password.reset.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAiHelpInferenceEngineParametersKey(
  args: InferRequestType<(typeof client.ai.help)['inference-engine-parameters']['$get']>,
) {
  return ['ai', '/ai/help/inference-engine-parameters', args] as const
}

export function useGetAiHelpInferenceEngineParameters<TError = unknown>(
  args: InferRequestType<(typeof client.ai.help)['inference-engine-parameters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ai.help)['inference-engine-parameters']['$get']>>
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
        ? getGetAiHelpInferenceEngineParametersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ai.help)['inference-engine-parameters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ai.help['inference-engine-parameters'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAiHelpInferenceEngineParameters<TError = unknown>(
  args: InferRequestType<(typeof client.ai.help)['inference-engine-parameters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ai.help)['inference-engine-parameters']['$get']>>
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
        ? getGetAiHelpInferenceEngineParametersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ai.help)['inference-engine-parameters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ai.help['inference-engine-parameters'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLoadBalancerKey() {
  return ['load-balancer', '/load-balancer'] as const
}

export function useGetLoadBalancer<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['load-balancer']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLoadBalancerKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['load-balancer']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['load-balancer'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLoadBalancer<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['load-balancer']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLoadBalancerKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['load-balancer']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['load-balancer'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLoadBalancerKey() {
  return ['load-balancer', '/load-balancer', 'POST'] as const
}

export function usePostLoadBalancer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['load-balancer']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['load-balancer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLoadBalancerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['load-balancer']['$post']> },
      ) => parseResponse(client['load-balancer'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSecurityGroupKey(
  args: InferRequestType<(typeof client)['security-group']['$get']>,
) {
  return ['security-group', '/security-group', args] as const
}

export function useGetSecurityGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['security-group']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['security-group']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSecurityGroupKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['security-group']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['security-group'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSecurityGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['security-group']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['security-group']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSecurityGroupKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['security-group']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['security-group'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSecurityGroupKey() {
  return ['security-group', '/security-group', 'POST'] as const
}

export function usePostSecurityGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['security-group']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['security-group']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSecurityGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['security-group']['$post']> },
      ) => parseResponse(client['security-group'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDbaasPostgresServiceNameConnectionPoolKey() {
  return ['dbaas-postgres', '/dbaas-postgres/:service-name/connection-pool', 'POST'] as const
}

export function usePostDbaasPostgresServiceNameConnectionPool<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['dbaas-postgres'][':service-name']['connection-pool']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDbaasPostgresServiceNameConnectionPoolKey()
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
            (typeof client)['dbaas-postgres'][':service-name']['connection-pool']['$post']
          >
        },
      ) =>
        parseResponse(
          client['dbaas-postgres'][':service-name']['connection-pool'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDbaasMysqlNameKey(
  args: InferRequestType<(typeof client)['dbaas-mysql'][':name']['$get']>,
) {
  return ['dbaas-mysql', '/dbaas-mysql/:name', args] as const
}

export function useGetDbaasMysqlName<TError = unknown>(
  args: InferRequestType<(typeof client)['dbaas-mysql'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-mysql'][':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDbaasMysqlNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-mysql'][':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-mysql'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasMysqlName<TError = unknown>(
  args: InferRequestType<(typeof client)['dbaas-mysql'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-mysql'][':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDbaasMysqlNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-mysql'][':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-mysql'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDbaasMysqlNameKey() {
  return ['dbaas-mysql', '/dbaas-mysql/:name', 'PUT'] as const
}

export function usePutDbaasMysqlName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-mysql'][':name']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dbaas-mysql'][':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDbaasMysqlNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['dbaas-mysql'][':name']['$put']> },
      ) => parseResponse(client['dbaas-mysql'][':name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDbaasMysqlNameKey() {
  return ['dbaas-mysql', '/dbaas-mysql/:name', 'POST'] as const
}

export function usePostDbaasMysqlName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-mysql'][':name']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dbaas-mysql'][':name']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDbaasMysqlNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['dbaas-mysql'][':name']['$post']> },
      ) => parseResponse(client['dbaas-mysql'][':name'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDbaasMysqlNameKey() {
  return ['dbaas-mysql', '/dbaas-mysql/:name', 'DELETE'] as const
}

export function useDeleteDbaasMysqlName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-mysql'][':name']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dbaas-mysql'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDbaasMysqlNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['dbaas-mysql'][':name']['$delete']> },
      ) => parseResponse(client['dbaas-mysql'][':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutPrivateNetworkIdAttachKey() {
  return ['private-network', '/private-network/:id:attach', 'PUT'] as const
}

export function usePutPrivateNetworkIdAttach<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['private-network'][':id:attach']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['private-network'][':id:attach']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPrivateNetworkIdAttachKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['private-network'][':id:attach']['$put']> },
      ) => parseResponse(client['private-network'][':id:attach'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIamRoleIdAssumeKey() {
  return ['iam-role', '/iam-role/:id/assume', 'POST'] as const
}

export function usePostIamRoleIdAssume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['iam-role'][':id']['assume']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['iam-role'][':id']['assume']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIamRoleIdAssumeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['iam-role'][':id']['assume']['$post']> },
      ) => parseResponse(client['iam-role'][':id'].assume.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutVpcVpcIdSubnetSubnetIdAttachKey() {
  return ['vpc', '/vpc/:vpc-id/subnet/:subnet-id/attach', 'PUT'] as const
}

export function usePutVpcVpcIdSubnetSubnetIdAttach<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['attach']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVpcVpcIdSubnetSubnetIdAttachKey()
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
            (typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['attach']['$put']
          >
        },
      ) =>
        parseResponse(client.vpc[':vpc-id'].subnet[':subnet-id'].attach.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKmsKeyIdKey(
  args: InferRequestType<(typeof client)['kms-key'][':id']['$get']>,
) {
  return ['kms-key', '/kms-key/:id', args] as const
}

export function useGetKmsKeyId<TError = unknown>(
  args: InferRequestType<(typeof client)['kms-key'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['kms-key'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetKmsKeyIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['kms-key'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['kms-key'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKmsKeyId<TError = unknown>(
  args: InferRequestType<(typeof client)['kms-key'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['kms-key'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetKmsKeyIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['kms-key'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['kms-key'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDbaasThanosNameMaintenanceStartKey() {
  return ['dbaas-thanos', '/dbaas-thanos/:name/maintenance/start', 'PUT'] as const
}

export function usePutDbaasThanosNameMaintenanceStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['dbaas-thanos'][':name']['maintenance']['start']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDbaasThanosNameMaintenanceStartKey()
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
            (typeof client)['dbaas-thanos'][':name']['maintenance']['start']['$put']
          >
        },
      ) =>
        parseResponse(client['dbaas-thanos'][':name'].maintenance.start.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDbaasExternalEndpointElasticsearchEndpointIdKey(
  args: InferRequestType<
    (typeof client)['dbaas-external-endpoint-elasticsearch'][':endpoint-id']['$get']
  >,
) {
  return [
    'dbaas-external-endpoint-elasticsearch',
    '/dbaas-external-endpoint-elasticsearch/:endpoint-id',
    args,
  ] as const
}

export function useGetDbaasExternalEndpointElasticsearchEndpointId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['dbaas-external-endpoint-elasticsearch'][':endpoint-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDbaasExternalEndpointElasticsearchEndpointIdKey(args)
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
                (typeof client)['dbaas-external-endpoint-elasticsearch'][':endpoint-id']['$get']
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
          client['dbaas-external-endpoint-elasticsearch'][':endpoint-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasExternalEndpointElasticsearchEndpointId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['dbaas-external-endpoint-elasticsearch'][':endpoint-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDbaasExternalEndpointElasticsearchEndpointIdKey(args)
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
                (typeof client)['dbaas-external-endpoint-elasticsearch'][':endpoint-id']['$get']
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
          client['dbaas-external-endpoint-elasticsearch'][':endpoint-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutDbaasExternalEndpointElasticsearchEndpointIdKey() {
  return [
    'dbaas-external-endpoint-elasticsearch',
    '/dbaas-external-endpoint-elasticsearch/:endpoint-id',
    'PUT',
  ] as const
}

export function usePutDbaasExternalEndpointElasticsearchEndpointId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['dbaas-external-endpoint-elasticsearch'][':endpoint-id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDbaasExternalEndpointElasticsearchEndpointIdKey()
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
            (typeof client)['dbaas-external-endpoint-elasticsearch'][':endpoint-id']['$put']
          >
        },
      ) =>
        parseResponse(
          client['dbaas-external-endpoint-elasticsearch'][':endpoint-id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteDbaasExternalEndpointElasticsearchEndpointIdKey() {
  return [
    'dbaas-external-endpoint-elasticsearch',
    '/dbaas-external-endpoint-elasticsearch/:endpoint-id',
    'DELETE',
  ] as const
}

export function useDeleteDbaasExternalEndpointElasticsearchEndpointId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['dbaas-external-endpoint-elasticsearch'][':endpoint-id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDbaasExternalEndpointElasticsearchEndpointIdKey()
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
            (typeof client)['dbaas-external-endpoint-elasticsearch'][':endpoint-id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['dbaas-external-endpoint-elasticsearch'][':endpoint-id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAiModelKey() {
  return ['ai', '/ai/model'] as const
}

export function useGetAiModel<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.model.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAiModelKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.model.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ai.model.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAiModel<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.model.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAiModelKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.model.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ai.model.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAiModelKey() {
  return ['ai', '/ai/model', 'POST'] as const
}

export function usePostAiModel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.model.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.ai.model.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAiModelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ai.model.$post> }) =>
        parseResponse(client.ai.model.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDbaasMysqlServiceNameUserKey() {
  return ['dbaas-mysql', '/dbaas-mysql/:service-name/user', 'POST'] as const
}

export function usePostDbaasMysqlServiceNameUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-mysql'][':service-name']['user']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dbaas-mysql'][':service-name']['user']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDbaasMysqlServiceNameUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['dbaas-mysql'][':service-name']['user']['$post']>
        },
      ) => parseResponse(client['dbaas-mysql'][':service-name'].user.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDbaasServiceTypeKey() {
  return ['dbaas-service-type', '/dbaas-service-type'] as const
}

export function useGetDbaasServiceType<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-service-type']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDbaasServiceTypeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-service-type']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-service-type'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasServiceType<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-service-type']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDbaasServiceTypeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-service-type']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-service-type'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAiDeploymentIdScaleKey() {
  return ['ai', '/ai/deployment/:id/scale', 'POST'] as const
}

export function usePostAiDeploymentIdScale<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ai.deployment)[':id']['scale']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ai.deployment)[':id']['scale']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAiDeploymentIdScaleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ai.deployment)[':id']['scale']['$post']> },
      ) => parseResponse(client.ai.deployment[':id'].scale.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInstanceTypeIdKey(
  args: InferRequestType<(typeof client)['instance-type'][':id']['$get']>,
) {
  return ['instance-type', '/instance-type/:id', args] as const
}

export function useGetInstanceTypeId<TError = unknown>(
  args: InferRequestType<(typeof client)['instance-type'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['instance-type'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetInstanceTypeIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['instance-type'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['instance-type'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstanceTypeId<TError = unknown>(
  args: InferRequestType<(typeof client)['instance-type'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['instance-type'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetInstanceTypeIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['instance-type'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['instance-type'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDbaasClickhouseNameKey(
  args: InferRequestType<(typeof client)['dbaas-clickhouse'][':name']['$get']>,
) {
  return ['dbaas-clickhouse', '/dbaas-clickhouse/:name', args] as const
}

export function useGetDbaasClickhouseName<TError = unknown>(
  args: InferRequestType<(typeof client)['dbaas-clickhouse'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-clickhouse'][':name']['$get']>>
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
        ? getGetDbaasClickhouseNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-clickhouse'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-clickhouse'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasClickhouseName<TError = unknown>(
  args: InferRequestType<(typeof client)['dbaas-clickhouse'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-clickhouse'][':name']['$get']>>
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
        ? getGetDbaasClickhouseNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-clickhouse'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-clickhouse'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDbaasClickhouseNameKey() {
  return ['dbaas-clickhouse', '/dbaas-clickhouse/:name', 'PUT'] as const
}

export function usePutDbaasClickhouseName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-clickhouse'][':name']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dbaas-clickhouse'][':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDbaasClickhouseNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['dbaas-clickhouse'][':name']['$put']> },
      ) => parseResponse(client['dbaas-clickhouse'][':name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDbaasClickhouseNameKey() {
  return ['dbaas-clickhouse', '/dbaas-clickhouse/:name', 'POST'] as const
}

export function usePostDbaasClickhouseName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-clickhouse'][':name']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dbaas-clickhouse'][':name']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDbaasClickhouseNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['dbaas-clickhouse'][':name']['$post']> },
      ) => parseResponse(client['dbaas-clickhouse'][':name'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDbaasClickhouseNameKey() {
  return ['dbaas-clickhouse', '/dbaas-clickhouse/:name', 'DELETE'] as const
}

export function useDeleteDbaasClickhouseName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-clickhouse'][':name']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dbaas-clickhouse'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDbaasClickhouseNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['dbaas-clickhouse'][':name']['$delete']> },
      ) => parseResponse(client['dbaas-clickhouse'][':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInstanceIdPasswordKey(
  args: InferRequestType<(typeof client.instance)[':id:password']['$get']>,
) {
  return ['instance', '/instance/:id:password', args] as const
}

export function useGetInstanceIdPassword<TError = unknown>(
  args: InferRequestType<(typeof client.instance)[':id:password']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instance)[':id:password']['$get']>>
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
        ? getGetInstanceIdPasswordKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instance)[':id:password']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instance[':id:password'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstanceIdPassword<TError = unknown>(
  args: InferRequestType<(typeof client.instance)[':id:password']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instance)[':id:password']['$get']>>
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
        ? getGetInstanceIdPasswordKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instance)[':id:password']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instance[':id:password'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSksTemplateKubeVersionVariantKey(
  args: InferRequestType<(typeof client)['sks-template'][':kube-version'][':variant']['$get']>,
) {
  return ['sks-template', '/sks-template/:kube-version/:variant', args] as const
}

export function useGetSksTemplateKubeVersionVariant<TError = unknown>(
  args: InferRequestType<(typeof client)['sks-template'][':kube-version'][':variant']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['sks-template'][':kube-version'][':variant']['$get']>
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
        ? getGetSksTemplateKubeVersionVariantKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['sks-template'][':kube-version'][':variant']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['sks-template'][':kube-version'][':variant'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSksTemplateKubeVersionVariant<TError = unknown>(
  args: InferRequestType<(typeof client)['sks-template'][':kube-version'][':variant']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['sks-template'][':kube-version'][':variant']['$get']>
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
        ? getGetSksTemplateKubeVersionVariantKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['sks-template'][':kube-version'][':variant']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['sks-template'][':kube-version'][':variant'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutInstanceIdResizeDiskKey() {
  return ['instance', '/instance/:id:resize-disk', 'PUT'] as const
}

export function usePutInstanceIdResizeDisk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instance)[':id:resize-disk']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.instance)[':id:resize-disk']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutInstanceIdResizeDiskKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.instance)[':id:resize-disk']['$put']> },
      ) => parseResponse(client.instance[':id:resize-disk'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDbaasServiceKey() {
  return ['dbaas-service', '/dbaas-service'] as const
}

export function useGetDbaasService<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-service']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDbaasServiceKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-service']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-service'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasService<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-service']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDbaasServiceKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-service']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-service'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetElasticIpKey() {
  return ['elastic-ip', '/elastic-ip'] as const
}

export function useGetElasticIp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['elastic-ip']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetElasticIpKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['elastic-ip']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['elastic-ip'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetElasticIp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['elastic-ip']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetElasticIpKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['elastic-ip']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['elastic-ip'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostElasticIpKey() {
  return ['elastic-ip', '/elastic-ip', 'POST'] as const
}

export function usePostElasticIp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['elastic-ip']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['elastic-ip']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostElasticIpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['elastic-ip']['$post']> }) =>
        parseResponse(client['elastic-ip'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetZoneKey() {
  return ['zone', '/zone'] as const
}

export function useGetZone<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zone.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetZoneKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zone.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.zone.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetZone<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zone.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetZoneKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zone.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.zone.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInstancePoolKey() {
  return ['instance-pool', '/instance-pool'] as const
}

export function useGetInstancePool<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['instance-pool']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInstancePoolKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['instance-pool']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['instance-pool'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancePool<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['instance-pool']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInstancePoolKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['instance-pool']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['instance-pool'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostInstancePoolKey() {
  return ['instance-pool', '/instance-pool', 'POST'] as const
}

export function usePostInstancePool<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['instance-pool']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['instance-pool']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInstancePoolKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['instance-pool']['$post']> },
      ) => parseResponse(client['instance-pool'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDbaasExternalEndpointRsyslogNameKey() {
  return [
    'dbaas-external-endpoint-rsyslog',
    '/dbaas-external-endpoint-rsyslog/:name',
    'POST',
  ] as const
}

export function usePostDbaasExternalEndpointRsyslogName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-external-endpoint-rsyslog'][':name']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dbaas-external-endpoint-rsyslog'][':name']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDbaasExternalEndpointRsyslogNameKey()
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
            (typeof client)['dbaas-external-endpoint-rsyslog'][':name']['$post']
          >
        },
      ) =>
        parseResponse(client['dbaas-external-endpoint-rsyslog'][':name'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSksClusterKubeconfigIdKey() {
  return ['sks-cluster-kubeconfig', '/sks-cluster-kubeconfig/:id', 'POST'] as const
}

export function usePostSksClusterKubeconfigId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['sks-cluster-kubeconfig'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['sks-cluster-kubeconfig'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSksClusterKubeconfigIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['sks-cluster-kubeconfig'][':id']['$post']> },
      ) => parseResponse(client['sks-cluster-kubeconfig'][':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDnsDomainDomainIdRecordKey(
  args: InferRequestType<(typeof client)['dns-domain'][':domain-id']['record']['$get']>,
) {
  return ['dns-domain', '/dns-domain/:domain-id/record', args] as const
}

export function useGetDnsDomainDomainIdRecord<TError = unknown>(
  args: InferRequestType<(typeof client)['dns-domain'][':domain-id']['record']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dns-domain'][':domain-id']['record']['$get']>>
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
        ? getGetDnsDomainDomainIdRecordKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dns-domain'][':domain-id']['record']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['dns-domain'][':domain-id'].record.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDnsDomainDomainIdRecord<TError = unknown>(
  args: InferRequestType<(typeof client)['dns-domain'][':domain-id']['record']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dns-domain'][':domain-id']['record']['$get']>>
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
        ? getGetDnsDomainDomainIdRecordKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dns-domain'][':domain-id']['record']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['dns-domain'][':domain-id'].record.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDnsDomainDomainIdRecordKey() {
  return ['dns-domain', '/dns-domain/:domain-id/record', 'POST'] as const
}

export function usePostDnsDomainDomainIdRecord<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dns-domain'][':domain-id']['record']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dns-domain'][':domain-id']['record']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDnsDomainDomainIdRecordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['dns-domain'][':domain-id']['record']['$post']>
        },
      ) => parseResponse(client['dns-domain'][':domain-id'].record.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDbaasCaCertificateKey() {
  return ['dbaas-ca-certificate', '/dbaas-ca-certificate'] as const
}

export function useGetDbaasCaCertificate<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-ca-certificate']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDbaasCaCertificateKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-ca-certificate']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-ca-certificate'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasCaCertificate<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-ca-certificate']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDbaasCaCertificateKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-ca-certificate']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-ca-certificate'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDbaasSettingsGrafanaKey() {
  return ['dbaas-settings-grafana', '/dbaas-settings-grafana'] as const
}

export function useGetDbaasSettingsGrafana<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-settings-grafana']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDbaasSettingsGrafanaKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-settings-grafana']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-settings-grafana'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasSettingsGrafana<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-settings-grafana']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDbaasSettingsGrafanaKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-settings-grafana']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-settings-grafana'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEnvironmentalImpactEstimateKey() {
  return ['environmental-impact', '/environmental-impact/estimate', 'POST'] as const
}

export function usePostEnvironmentalImpactEstimate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['environmental-impact']['estimate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['environmental-impact']['estimate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEnvironmentalImpactEstimateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['environmental-impact']['estimate']['$post']> },
      ) => parseResponse(client['environmental-impact'].estimate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDeployTargetKey() {
  return ['deploy-target', '/deploy-target'] as const
}

export function useGetDeployTarget<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['deploy-target']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDeployTargetKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['deploy-target']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['deploy-target'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeployTarget<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['deploy-target']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDeployTargetKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['deploy-target']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['deploy-target'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInstanceTypeKey() {
  return ['instance-type', '/instance-type'] as const
}

export function useGetInstanceType<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['instance-type']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInstanceTypeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['instance-type']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['instance-type'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstanceType<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['instance-type']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInstanceTypeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['instance-type']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['instance-type'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAiDeploymentKey(args: InferRequestType<typeof client.ai.deployment.$get>) {
  return ['ai', '/ai/deployment', args] as const
}

export function useGetAiDeployment<TError = unknown>(
  args: InferRequestType<typeof client.ai.deployment.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.deployment.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAiDeploymentKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.deployment.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ai.deployment.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAiDeployment<TError = unknown>(
  args: InferRequestType<typeof client.ai.deployment.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.deployment.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAiDeploymentKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.deployment.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ai.deployment.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAiDeploymentKey() {
  return ['ai', '/ai/deployment', 'POST'] as const
}

export function usePostAiDeployment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.deployment.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ai.deployment.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAiDeploymentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ai.deployment.$post> }) =>
        parseResponse(client.ai.deployment.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLiveBalanceKey() {
  return ['live-balance', '/live-balance'] as const
}

export function useGetLiveBalance<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['live-balance']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLiveBalanceKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['live-balance']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['live-balance'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLiveBalance<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['live-balance']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLiveBalanceKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['live-balance']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['live-balance'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteDbaasPostgresServiceNameDatabaseDatabaseNameKey() {
  return [
    'dbaas-postgres',
    '/dbaas-postgres/:service-name/database/:database-name',
    'DELETE',
  ] as const
}

export function useDeleteDbaasPostgresServiceNameDatabaseDatabaseName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['dbaas-postgres'][':service-name']['database'][':database-name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDbaasPostgresServiceNameDatabaseDatabaseNameKey()
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
            (typeof client)['dbaas-postgres'][':service-name']['database'][':database-name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['dbaas-postgres'][':service-name'].database[':database-name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDbaasClickhouseServiceNameRoleKey(
  args: InferRequestType<(typeof client)['dbaas-clickhouse'][':service-name']['role']['$get']>,
) {
  return ['dbaas-clickhouse', '/dbaas-clickhouse/:service-name/role', args] as const
}

export function useGetDbaasClickhouseServiceNameRole<TError = unknown>(
  args: InferRequestType<(typeof client)['dbaas-clickhouse'][':service-name']['role']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['dbaas-clickhouse'][':service-name']['role']['$get']>
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
        ? getGetDbaasClickhouseServiceNameRoleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['dbaas-clickhouse'][':service-name']['role']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['dbaas-clickhouse'][':service-name'].role.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasClickhouseServiceNameRole<TError = unknown>(
  args: InferRequestType<(typeof client)['dbaas-clickhouse'][':service-name']['role']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['dbaas-clickhouse'][':service-name']['role']['$get']>
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
        ? getGetDbaasClickhouseServiceNameRoleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['dbaas-clickhouse'][':service-name']['role']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['dbaas-clickhouse'][':service-name'].role.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBlockStorageIdAttachKey() {
  return ['block-storage', '/block-storage/:id:attach', 'PUT'] as const
}

export function usePutBlockStorageIdAttach<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['block-storage'][':id:attach']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['block-storage'][':id:attach']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBlockStorageIdAttachKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['block-storage'][':id:attach']['$put']> },
      ) => parseResponse(client['block-storage'][':id:attach'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostKmsKeyIdEnableKey() {
  return ['kms-key', '/kms-key/:id/enable', 'POST'] as const
}

export function usePostKmsKeyIdEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['kms-key'][':id']['enable']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['kms-key'][':id']['enable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKmsKeyIdEnableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['kms-key'][':id']['enable']['$post']> },
      ) => parseResponse(client['kms-key'][':id'].enable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDbaasPostgresNameMigrationStopKey() {
  return ['dbaas-postgres', '/dbaas-postgres/:name/migration/stop', 'POST'] as const
}

export function usePostDbaasPostgresNameMigrationStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['dbaas-postgres'][':name']['migration']['stop']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDbaasPostgresNameMigrationStopKey()
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
            (typeof client)['dbaas-postgres'][':name']['migration']['stop']['$post']
          >
        },
      ) =>
        parseResponse(client['dbaas-postgres'][':name'].migration.stop.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDbaasKafkaNameKey(
  args: InferRequestType<(typeof client)['dbaas-kafka'][':name']['$get']>,
) {
  return ['dbaas-kafka', '/dbaas-kafka/:name', args] as const
}

export function useGetDbaasKafkaName<TError = unknown>(
  args: InferRequestType<(typeof client)['dbaas-kafka'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-kafka'][':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDbaasKafkaNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-kafka'][':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-kafka'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasKafkaName<TError = unknown>(
  args: InferRequestType<(typeof client)['dbaas-kafka'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-kafka'][':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDbaasKafkaNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-kafka'][':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-kafka'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDbaasKafkaNameKey() {
  return ['dbaas-kafka', '/dbaas-kafka/:name', 'PUT'] as const
}

export function usePutDbaasKafkaName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-kafka'][':name']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dbaas-kafka'][':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDbaasKafkaNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['dbaas-kafka'][':name']['$put']> },
      ) => parseResponse(client['dbaas-kafka'][':name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDbaasKafkaNameKey() {
  return ['dbaas-kafka', '/dbaas-kafka/:name', 'POST'] as const
}

export function usePostDbaasKafkaName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-kafka'][':name']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dbaas-kafka'][':name']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDbaasKafkaNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['dbaas-kafka'][':name']['$post']> },
      ) => parseResponse(client['dbaas-kafka'][':name'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDbaasKafkaNameKey() {
  return ['dbaas-kafka', '/dbaas-kafka/:name', 'DELETE'] as const
}

export function useDeleteDbaasKafkaName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-kafka'][':name']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dbaas-kafka'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDbaasKafkaNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['dbaas-kafka'][':name']['$delete']> },
      ) => parseResponse(client['dbaas-kafka'][':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutInstanceIdResetPasswordKey() {
  return ['instance', '/instance/:id:reset-password', 'PUT'] as const
}

export function usePutInstanceIdResetPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instance)[':id:reset-password']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.instance)[':id:reset-password']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutInstanceIdResetPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.instance)[':id:reset-password']['$put']> },
      ) => parseResponse(client.instance[':id:reset-password'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDbaasKafkaNameSchemaRegistryAclConfigKey() {
  return ['dbaas-kafka', '/dbaas-kafka/:name/schema-registry/acl-config', 'POST'] as const
}

export function usePostDbaasKafkaNameSchemaRegistryAclConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['dbaas-kafka'][':name']['schema-registry']['acl-config']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDbaasKafkaNameSchemaRegistryAclConfigKey()
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
            (typeof client)['dbaas-kafka'][':name']['schema-registry']['acl-config']['$post']
          >
        },
      ) =>
        parseResponse(
          client['dbaas-kafka'][':name']['schema-registry']['acl-config'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutPrivateNetworkIdUpdateIpKey() {
  return ['private-network', '/private-network/:id:update-ip', 'PUT'] as const
}

export function usePutPrivateNetworkIdUpdateIp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['private-network'][':id:update-ip']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['private-network'][':id:update-ip']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPrivateNetworkIdUpdateIpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['private-network'][':id:update-ip']['$put']> },
      ) => parseResponse(client['private-network'][':id:update-ip'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVpcVpcIdRouteKey(
  args: InferRequestType<(typeof client.vpc)[':vpc-id']['route']['$get']>,
) {
  return ['vpc', '/vpc/:vpc-id/route', args] as const
}

export function useGetVpcVpcIdRoute<TError = unknown>(
  args: InferRequestType<(typeof client.vpc)[':vpc-id']['route']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.vpc)[':vpc-id']['route']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetVpcVpcIdRouteKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.vpc)[':vpc-id']['route']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vpc[':vpc-id'].route.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVpcVpcIdRoute<TError = unknown>(
  args: InferRequestType<(typeof client.vpc)[':vpc-id']['route']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.vpc)[':vpc-id']['route']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetVpcVpcIdRouteKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.vpc)[':vpc-id']['route']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vpc[':vpc-id'].route.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSksClusterIdNodepoolSksNodepoolIdKey(
  args: InferRequestType<
    (typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id']['$get']
  >,
) {
  return ['sks-cluster', '/sks-cluster/:id/nodepool/:sks-nodepool-id', args] as const
}

export function useGetSksClusterIdNodepoolSksNodepoolId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSksClusterIdNodepoolSksNodepoolIdKey(args)
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
                (typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id']['$get']
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
          client['sks-cluster'][':id'].nodepool[':sks-nodepool-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSksClusterIdNodepoolSksNodepoolId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSksClusterIdNodepoolSksNodepoolIdKey(args)
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
                (typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id']['$get']
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
          client['sks-cluster'][':id'].nodepool[':sks-nodepool-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutSksClusterIdNodepoolSksNodepoolIdKey() {
  return ['sks-cluster', '/sks-cluster/:id/nodepool/:sks-nodepool-id', 'PUT'] as const
}

export function usePutSksClusterIdNodepoolSksNodepoolId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSksClusterIdNodepoolSksNodepoolIdKey()
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
            (typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id']['$put']
          >
        },
      ) =>
        parseResponse(
          client['sks-cluster'][':id'].nodepool[':sks-nodepool-id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSksClusterIdNodepoolSksNodepoolIdKey() {
  return ['sks-cluster', '/sks-cluster/:id/nodepool/:sks-nodepool-id', 'DELETE'] as const
}

export function useDeleteSksClusterIdNodepoolSksNodepoolId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSksClusterIdNodepoolSksNodepoolIdKey()
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
            (typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['sks-cluster'][':id'].nodepool[':sks-nodepool-id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBlockStorageSnapshotIdKey(
  args: InferRequestType<(typeof client)['block-storage-snapshot'][':id']['$get']>,
) {
  return ['block-storage-snapshot', '/block-storage-snapshot/:id', args] as const
}

export function useGetBlockStorageSnapshotId<TError = unknown>(
  args: InferRequestType<(typeof client)['block-storage-snapshot'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['block-storage-snapshot'][':id']['$get']>>
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
        ? getGetBlockStorageSnapshotIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['block-storage-snapshot'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['block-storage-snapshot'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBlockStorageSnapshotId<TError = unknown>(
  args: InferRequestType<(typeof client)['block-storage-snapshot'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['block-storage-snapshot'][':id']['$get']>>
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
        ? getGetBlockStorageSnapshotIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['block-storage-snapshot'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['block-storage-snapshot'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBlockStorageSnapshotIdKey() {
  return ['block-storage-snapshot', '/block-storage-snapshot/:id', 'PUT'] as const
}

export function usePutBlockStorageSnapshotId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['block-storage-snapshot'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['block-storage-snapshot'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBlockStorageSnapshotIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['block-storage-snapshot'][':id']['$put']> },
      ) => parseResponse(client['block-storage-snapshot'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBlockStorageSnapshotIdKey() {
  return ['block-storage-snapshot', '/block-storage-snapshot/:id', 'DELETE'] as const
}

export function useDeleteBlockStorageSnapshotId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['block-storage-snapshot'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['block-storage-snapshot'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBlockStorageSnapshotIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['block-storage-snapshot'][':id']['$delete']> },
      ) => parseResponse(client['block-storage-snapshot'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKmsKeyIdListKeyRotationsKey(
  args: InferRequestType<(typeof client)['kms-key'][':id']['list-key-rotations']['$get']>,
) {
  return ['kms-key', '/kms-key/:id/list-key-rotations', args] as const
}

export function useGetKmsKeyIdListKeyRotations<TError = unknown>(
  args: InferRequestType<(typeof client)['kms-key'][':id']['list-key-rotations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['kms-key'][':id']['list-key-rotations']['$get']>>
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
        ? getGetKmsKeyIdListKeyRotationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['kms-key'][':id']['list-key-rotations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['kms-key'][':id']['list-key-rotations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKmsKeyIdListKeyRotations<TError = unknown>(
  args: InferRequestType<(typeof client)['kms-key'][':id']['list-key-rotations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['kms-key'][':id']['list-key-rotations']['$get']>>
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
        ? getGetKmsKeyIdListKeyRotationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['kms-key'][':id']['list-key-rotations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['kms-key'][':id']['list-key-rotations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDbaasPostgresServiceNameUserKey() {
  return ['dbaas-postgres', '/dbaas-postgres/:service-name/user', 'POST'] as const
}

export function usePostDbaasPostgresServiceNameUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-postgres'][':service-name']['user']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dbaas-postgres'][':service-name']['user']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDbaasPostgresServiceNameUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['dbaas-postgres'][':service-name']['user']['$post']>
        },
      ) => parseResponse(client['dbaas-postgres'][':service-name'].user.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDbaasExternalIntegrationsServiceNameKey(
  args: InferRequestType<(typeof client)['dbaas-external-integrations'][':service-name']['$get']>,
) {
  return [
    'dbaas-external-integrations',
    '/dbaas-external-integrations/:service-name',
    args,
  ] as const
}

export function useGetDbaasExternalIntegrationsServiceName<TError = unknown>(
  args: InferRequestType<(typeof client)['dbaas-external-integrations'][':service-name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['dbaas-external-integrations'][':service-name']['$get']>
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
        ? getGetDbaasExternalIntegrationsServiceNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['dbaas-external-integrations'][':service-name']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['dbaas-external-integrations'][':service-name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasExternalIntegrationsServiceName<TError = unknown>(
  args: InferRequestType<(typeof client)['dbaas-external-integrations'][':service-name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['dbaas-external-integrations'][':service-name']['$get']>
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
        ? getGetDbaasExternalIntegrationsServiceNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['dbaas-external-integrations'][':service-name']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['dbaas-external-integrations'][':service-name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDbaasExternalIntegrationIntegrationIdKey(
  args: InferRequestType<(typeof client)['dbaas-external-integration'][':integration-id']['$get']>,
) {
  return [
    'dbaas-external-integration',
    '/dbaas-external-integration/:integration-id',
    args,
  ] as const
}

export function useGetDbaasExternalIntegrationIntegrationId<TError = unknown>(
  args: InferRequestType<(typeof client)['dbaas-external-integration'][':integration-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['dbaas-external-integration'][':integration-id']['$get']>
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
        ? getGetDbaasExternalIntegrationIntegrationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['dbaas-external-integration'][':integration-id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['dbaas-external-integration'][':integration-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasExternalIntegrationIntegrationId<TError = unknown>(
  args: InferRequestType<(typeof client)['dbaas-external-integration'][':integration-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['dbaas-external-integration'][':integration-id']['$get']>
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
        ? getGetDbaasExternalIntegrationIntegrationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['dbaas-external-integration'][':integration-id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['dbaas-external-integration'][':integration-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetInstancePoolIdKey(
  args: InferRequestType<(typeof client)['instance-pool'][':id']['$get']>,
) {
  return ['instance-pool', '/instance-pool/:id', args] as const
}

export function useGetInstancePoolId<TError = unknown>(
  args: InferRequestType<(typeof client)['instance-pool'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['instance-pool'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetInstancePoolIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['instance-pool'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['instance-pool'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancePoolId<TError = unknown>(
  args: InferRequestType<(typeof client)['instance-pool'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['instance-pool'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetInstancePoolIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['instance-pool'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['instance-pool'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutInstancePoolIdKey() {
  return ['instance-pool', '/instance-pool/:id', 'PUT'] as const
}

export function usePutInstancePoolId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['instance-pool'][':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['instance-pool'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutInstancePoolIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['instance-pool'][':id']['$put']> },
      ) => parseResponse(client['instance-pool'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteInstancePoolIdKey() {
  return ['instance-pool', '/instance-pool/:id', 'DELETE'] as const
}

export function useDeleteInstancePoolId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['instance-pool'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['instance-pool'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteInstancePoolIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['instance-pool'][':id']['$delete']> },
      ) => parseResponse(client['instance-pool'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDbaasExternalEndpointTypesKey() {
  return ['dbaas-external-endpoint-types', '/dbaas-external-endpoint-types'] as const
}

export function useGetDbaasExternalEndpointTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-external-endpoint-types']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDbaasExternalEndpointTypesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-external-endpoint-types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['dbaas-external-endpoint-types'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasExternalEndpointTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-external-endpoint-types']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDbaasExternalEndpointTypesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-external-endpoint-types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['dbaas-external-endpoint-types'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAiApiKeyIdKey(
  args: InferRequestType<(typeof client.ai)['api-key'][':id']['$get']>,
) {
  return ['ai', '/ai/api-key/:id', args] as const
}

export function useGetAiApiKeyId<TError = unknown>(
  args: InferRequestType<(typeof client.ai)['api-key'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ai)['api-key'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAiApiKeyIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ai)['api-key'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ai['api-key'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAiApiKeyId<TError = unknown>(
  args: InferRequestType<(typeof client.ai)['api-key'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ai)['api-key'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAiApiKeyIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ai)['api-key'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ai['api-key'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAiApiKeyIdKey() {
  return ['ai', '/ai/api-key/:id', 'DELETE'] as const
}

export function useDeleteAiApiKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ai)['api-key'][':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ai)['api-key'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAiApiKeyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ai)['api-key'][':id']['$delete']> },
      ) => parseResponse(client.ai['api-key'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAiApiKeyIdKey() {
  return ['ai', '/ai/api-key/:id', 'PATCH'] as const
}

export function usePatchAiApiKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ai)['api-key'][':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ai)['api-key'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAiApiKeyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ai)['api-key'][':id']['$patch']> },
      ) => parseResponse(client.ai['api-key'][':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPrivateNetworkKey() {
  return ['private-network', '/private-network'] as const
}

export function useGetPrivateNetwork<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['private-network']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPrivateNetworkKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['private-network']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['private-network'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPrivateNetwork<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['private-network']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPrivateNetworkKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['private-network']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['private-network'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPrivateNetworkKey() {
  return ['private-network', '/private-network', 'POST'] as const
}

export function usePostPrivateNetwork<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['private-network']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['private-network']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPrivateNetworkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['private-network']['$post']> },
      ) => parseResponse(client['private-network'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVpcKey() {
  return ['vpc', '/vpc'] as const
}

export function useGetVpc<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vpc.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetVpcKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vpc.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.vpc.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetVpc<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vpc.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetVpcKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vpc.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.vpc.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function getPostVpcKey() {
  return ['vpc', '/vpc', 'POST'] as const
}

export function usePostVpc<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vpc.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.vpc.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVpcKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.vpc.$post> }) =>
        parseResponse(client.vpc.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAiApiKeyIdRotateKey() {
  return ['ai', '/ai/api-key/:id/rotate', 'POST'] as const
}

export function usePostAiApiKeyIdRotate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ai)['api-key'][':id']['rotate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ai)['api-key'][':id']['rotate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAiApiKeyIdRotateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ai)['api-key'][':id']['rotate']['$post']> },
      ) => parseResponse(client.ai['api-key'][':id'].rotate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutInstanceIdStartKey() {
  return ['instance', '/instance/:id:start', 'PUT'] as const
}

export function usePutInstanceIdStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.instance)[':id:start']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.instance)[':id:start']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutInstanceIdStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.instance)[':id:start']['$put']> },
      ) => parseResponse(client.instance[':id:start'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInstanceIdEnableTpmKey() {
  return ['instance', '/instance/:id:enable-tpm', 'POST'] as const
}

export function usePostInstanceIdEnableTpm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instance)[':id:enable-tpm']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.instance)[':id:enable-tpm']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInstanceIdEnableTpmKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.instance)[':id:enable-tpm']['$post']> },
      ) => parseResponse(client.instance[':id:enable-tpm'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationKey() {
  return ['organization', '/organization'] as const
}

export function useGetOrganization<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrganizationKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganization<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrganizationKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSecurityGroupIdKey(
  args: InferRequestType<(typeof client)['security-group'][':id']['$get']>,
) {
  return ['security-group', '/security-group/:id', args] as const
}

export function useGetSecurityGroupId<TError = unknown>(
  args: InferRequestType<(typeof client)['security-group'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['security-group'][':id']['$get']>>
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
        ? getGetSecurityGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['security-group'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['security-group'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSecurityGroupId<TError = unknown>(
  args: InferRequestType<(typeof client)['security-group'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['security-group'][':id']['$get']>>
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
        ? getGetSecurityGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['security-group'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['security-group'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSecurityGroupIdKey() {
  return ['security-group', '/security-group/:id', 'DELETE'] as const
}

export function useDeleteSecurityGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['security-group'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['security-group'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSecurityGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['security-group'][':id']['$delete']> },
      ) => parseResponse(client['security-group'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDbaasClickhouseServiceNameRoleRoleUuidKey() {
  return ['dbaas-clickhouse', '/dbaas-clickhouse/:service-name/role/:role-uuid', 'DELETE'] as const
}

export function useDeleteDbaasClickhouseServiceNameRoleRoleUuid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['dbaas-clickhouse'][':service-name']['role'][':role-uuid']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDbaasClickhouseServiceNameRoleRoleUuidKey()
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
            (typeof client)['dbaas-clickhouse'][':service-name']['role'][':role-uuid']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['dbaas-clickhouse'][':service-name'].role[':role-uuid'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSksClusterIdAuthorityAuthorityCertKey(
  args: InferRequestType<
    (typeof client)['sks-cluster'][':id']['authority'][':authority']['cert']['$get']
  >,
) {
  return ['sks-cluster', '/sks-cluster/:id/authority/:authority/cert', args] as const
}

export function useGetSksClusterIdAuthorityAuthorityCert<TError = unknown>(
  args: InferRequestType<
    (typeof client)['sks-cluster'][':id']['authority'][':authority']['cert']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSksClusterIdAuthorityAuthorityCertKey(args)
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
                (typeof client)['sks-cluster'][':id']['authority'][':authority']['cert']['$get']
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
          client['sks-cluster'][':id'].authority[':authority'].cert.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSksClusterIdAuthorityAuthorityCert<TError = unknown>(
  args: InferRequestType<
    (typeof client)['sks-cluster'][':id']['authority'][':authority']['cert']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetSksClusterIdAuthorityAuthorityCertKey(args)
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
                (typeof client)['sks-cluster'][':id']['authority'][':authority']['cert']['$get']
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
          client['sks-cluster'][':id'].authority[':authority'].cert.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSnapshotIdExportKey() {
  return ['snapshot', '/snapshot/:id:export', 'POST'] as const
}

export function usePostSnapshotIdExport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.snapshot)[':id:export']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.snapshot)[':id:export']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSnapshotIdExportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.snapshot)[':id:export']['$post']> },
      ) => parseResponse(client.snapshot[':id:export'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAiDeploymentIdKey(
  args: InferRequestType<(typeof client.ai.deployment)[':id']['$get']>,
) {
  return ['ai', '/ai/deployment/:id', args] as const
}

export function useGetAiDeploymentId<TError = unknown>(
  args: InferRequestType<(typeof client.ai.deployment)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ai.deployment)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAiDeploymentIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ai.deployment)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ai.deployment[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAiDeploymentId<TError = unknown>(
  args: InferRequestType<(typeof client.ai.deployment)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ai.deployment)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAiDeploymentIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ai.deployment)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ai.deployment[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAiDeploymentIdKey() {
  return ['ai', '/ai/deployment/:id', 'DELETE'] as const
}

export function useDeleteAiDeploymentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ai.deployment)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ai.deployment)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAiDeploymentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ai.deployment)[':id']['$delete']> },
      ) => parseResponse(client.ai.deployment[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAiDeploymentIdKey() {
  return ['ai', '/ai/deployment/:id', 'PATCH'] as const
}

export function usePatchAiDeploymentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ai.deployment)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ai.deployment)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAiDeploymentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ai.deployment)[':id']['$patch']> },
      ) => parseResponse(client.ai.deployment[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDbaasKafkaServiceNameConnectPasswordRevealKey(
  args: InferRequestType<
    (typeof client)['dbaas-kafka'][':service-name']['connect']['password']['reveal']['$get']
  >,
) {
  return ['dbaas-kafka', '/dbaas-kafka/:service-name/connect/password/reveal', args] as const
}

export function useGetDbaasKafkaServiceNameConnectPasswordReveal<TError = unknown>(
  args: InferRequestType<
    (typeof client)['dbaas-kafka'][':service-name']['connect']['password']['reveal']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDbaasKafkaServiceNameConnectPasswordRevealKey(args)
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
                (typeof client)['dbaas-kafka'][':service-name']['connect']['password']['reveal']['$get']
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
          client['dbaas-kafka'][':service-name'].connect.password.reveal.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasKafkaServiceNameConnectPasswordReveal<TError = unknown>(
  args: InferRequestType<
    (typeof client)['dbaas-kafka'][':service-name']['connect']['password']['reveal']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDbaasKafkaServiceNameConnectPasswordRevealKey(args)
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
                (typeof client)['dbaas-kafka'][':service-name']['connect']['password']['reveal']['$get']
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
          client['dbaas-kafka'][':service-name'].connect.password.reveal.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostKmsKeyIdEnableKeyRotationKey() {
  return ['kms-key', '/kms-key/:id/enable-key-rotation', 'POST'] as const
}

export function usePostKmsKeyIdEnableKeyRotation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['kms-key'][':id']['enable-key-rotation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['kms-key'][':id']['enable-key-rotation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKmsKeyIdEnableKeyRotationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['kms-key'][':id']['enable-key-rotation']['$post']>
        },
      ) => parseResponse(client['kms-key'][':id']['enable-key-rotation'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVpcVpcIdSubnetSubnetIdRouteKey(
  args: InferRequestType<(typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['route']['$get']>,
) {
  return ['vpc', '/vpc/:vpc-id/subnet/:subnet-id/route', args] as const
}

export function useGetVpcVpcIdSubnetSubnetIdRoute<TError = unknown>(
  args: InferRequestType<(typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['route']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['route']['$get']>
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
        ? getGetVpcVpcIdSubnetSubnetIdRouteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['route']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.vpc[':vpc-id'].subnet[':subnet-id'].route.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVpcVpcIdSubnetSubnetIdRoute<TError = unknown>(
  args: InferRequestType<(typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['route']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['route']['$get']>
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
        ? getGetVpcVpcIdSubnetSubnetIdRouteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['route']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.vpc[':vpc-id'].subnet[':subnet-id'].route.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVpcVpcIdSubnetSubnetIdRouteKey() {
  return ['vpc', '/vpc/:vpc-id/subnet/:subnet-id/route', 'POST'] as const
}

export function usePostVpcVpcIdSubnetSubnetIdRoute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['route']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVpcVpcIdSubnetSubnetIdRouteKey()
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
            (typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['route']['$post']
          >
        },
      ) =>
        parseResponse(client.vpc[':vpc-id'].subnet[':subnet-id'].route.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteElasticIpIdFieldKey() {
  return ['elastic-ip', '/elastic-ip/:id/:field', 'DELETE'] as const
}

export function useDeleteElasticIpIdField<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['elastic-ip'][':id'][':field']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['elastic-ip'][':id'][':field']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteElasticIpIdFieldKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['elastic-ip'][':id'][':field']['$delete']> },
      ) => parseResponse(client['elastic-ip'][':id'][':field'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetQuotaEntityKey(
  args: InferRequestType<(typeof client.quota)[':entity']['$get']>,
) {
  return ['quota', '/quota/:entity', args] as const
}

export function useGetQuotaEntity<TError = unknown>(
  args: InferRequestType<(typeof client.quota)[':entity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.quota)[':entity']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetQuotaEntityKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.quota)[':entity']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quota[':entity'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuotaEntity<TError = unknown>(
  args: InferRequestType<(typeof client.quota)[':entity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.quota)[':entity']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetQuotaEntityKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.quota)[':entity']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quota[':entity'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVpcVpcIdSubnetKey(
  args: InferRequestType<(typeof client.vpc)[':vpc-id']['subnet']['$get']>,
) {
  return ['vpc', '/vpc/:vpc-id/subnet', args] as const
}

export function useGetVpcVpcIdSubnet<TError = unknown>(
  args: InferRequestType<(typeof client.vpc)[':vpc-id']['subnet']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vpc)[':vpc-id']['subnet']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetVpcVpcIdSubnetKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vpc)[':vpc-id']['subnet']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vpc[':vpc-id'].subnet.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVpcVpcIdSubnet<TError = unknown>(
  args: InferRequestType<(typeof client.vpc)[':vpc-id']['subnet']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vpc)[':vpc-id']['subnet']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetVpcVpcIdSubnetKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vpc)[':vpc-id']['subnet']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vpc[':vpc-id'].subnet.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVpcVpcIdSubnetKey() {
  return ['vpc', '/vpc/:vpc-id/subnet', 'POST'] as const
}

export function usePostVpcVpcIdSubnet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.vpc)[':vpc-id']['subnet']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.vpc)[':vpc-id']['subnet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVpcVpcIdSubnetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.vpc)[':vpc-id']['subnet']['$post']> },
      ) => parseResponse(client.vpc[':vpc-id'].subnet.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSksClusterDeprecatedResourcesIdKey(
  args: InferRequestType<(typeof client)['sks-cluster-deprecated-resources'][':id']['$get']>,
) {
  return [
    'sks-cluster-deprecated-resources',
    '/sks-cluster-deprecated-resources/:id',
    args,
  ] as const
}

export function useGetSksClusterDeprecatedResourcesId<TError = unknown>(
  args: InferRequestType<(typeof client)['sks-cluster-deprecated-resources'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['sks-cluster-deprecated-resources'][':id']['$get']>>
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
        ? getGetSksClusterDeprecatedResourcesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['sks-cluster-deprecated-resources'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['sks-cluster-deprecated-resources'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSksClusterDeprecatedResourcesId<TError = unknown>(
  args: InferRequestType<(typeof client)['sks-cluster-deprecated-resources'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['sks-cluster-deprecated-resources'][':id']['$get']>>
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
        ? getGetSksClusterDeprecatedResourcesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['sks-cluster-deprecated-resources'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['sks-cluster-deprecated-resources'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBlockStorageIdKey(
  args: InferRequestType<(typeof client)['block-storage'][':id']['$get']>,
) {
  return ['block-storage', '/block-storage/:id', args] as const
}

export function useGetBlockStorageId<TError = unknown>(
  args: InferRequestType<(typeof client)['block-storage'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['block-storage'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetBlockStorageIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['block-storage'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['block-storage'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBlockStorageId<TError = unknown>(
  args: InferRequestType<(typeof client)['block-storage'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['block-storage'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetBlockStorageIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['block-storage'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['block-storage'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBlockStorageIdKey() {
  return ['block-storage', '/block-storage/:id', 'PUT'] as const
}

export function usePutBlockStorageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['block-storage'][':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['block-storage'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBlockStorageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['block-storage'][':id']['$put']> },
      ) => parseResponse(client['block-storage'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBlockStorageIdKey() {
  return ['block-storage', '/block-storage/:id', 'DELETE'] as const
}

export function useDeleteBlockStorageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['block-storage'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['block-storage'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBlockStorageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['block-storage'][':id']['$delete']> },
      ) => parseResponse(client['block-storage'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDbaasOpensearchServiceNameUserUsernameKey() {
  return ['dbaas-opensearch', '/dbaas-opensearch/:service-name/user/:username', 'DELETE'] as const
}

export function useDeleteDbaasOpensearchServiceNameUserUsername<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['dbaas-opensearch'][':service-name']['user'][':username']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDbaasOpensearchServiceNameUserUsernameKey()
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
            (typeof client)['dbaas-opensearch'][':service-name']['user'][':username']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['dbaas-opensearch'][':service-name'].user[':username'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDbaasExternalEndpointPrometheusEndpointIdKey(
  args: InferRequestType<
    (typeof client)['dbaas-external-endpoint-prometheus'][':endpoint-id']['$get']
  >,
) {
  return [
    'dbaas-external-endpoint-prometheus',
    '/dbaas-external-endpoint-prometheus/:endpoint-id',
    args,
  ] as const
}

export function useGetDbaasExternalEndpointPrometheusEndpointId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['dbaas-external-endpoint-prometheus'][':endpoint-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDbaasExternalEndpointPrometheusEndpointIdKey(args)
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
                (typeof client)['dbaas-external-endpoint-prometheus'][':endpoint-id']['$get']
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
          client['dbaas-external-endpoint-prometheus'][':endpoint-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasExternalEndpointPrometheusEndpointId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['dbaas-external-endpoint-prometheus'][':endpoint-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDbaasExternalEndpointPrometheusEndpointIdKey(args)
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
                (typeof client)['dbaas-external-endpoint-prometheus'][':endpoint-id']['$get']
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
          client['dbaas-external-endpoint-prometheus'][':endpoint-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutDbaasExternalEndpointPrometheusEndpointIdKey() {
  return [
    'dbaas-external-endpoint-prometheus',
    '/dbaas-external-endpoint-prometheus/:endpoint-id',
    'PUT',
  ] as const
}

export function usePutDbaasExternalEndpointPrometheusEndpointId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['dbaas-external-endpoint-prometheus'][':endpoint-id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDbaasExternalEndpointPrometheusEndpointIdKey()
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
            (typeof client)['dbaas-external-endpoint-prometheus'][':endpoint-id']['$put']
          >
        },
      ) =>
        parseResponse(
          client['dbaas-external-endpoint-prometheus'][':endpoint-id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteDbaasExternalEndpointPrometheusEndpointIdKey() {
  return [
    'dbaas-external-endpoint-prometheus',
    '/dbaas-external-endpoint-prometheus/:endpoint-id',
    'DELETE',
  ] as const
}

export function useDeleteDbaasExternalEndpointPrometheusEndpointId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['dbaas-external-endpoint-prometheus'][':endpoint-id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDbaasExternalEndpointPrometheusEndpointIdKey()
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
            (typeof client)['dbaas-external-endpoint-prometheus'][':endpoint-id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['dbaas-external-endpoint-prometheus'][':endpoint-id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBlockStorageIdCreateSnapshotKey() {
  return ['block-storage', '/block-storage/:id:create-snapshot', 'POST'] as const
}

export function usePostBlockStorageIdCreateSnapshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['block-storage'][':id:create-snapshot']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['block-storage'][':id:create-snapshot']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBlockStorageIdCreateSnapshotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['block-storage'][':id:create-snapshot']['$post']>
        },
      ) => parseResponse(client['block-storage'][':id:create-snapshot'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutPrivateNetworkIdDetachKey() {
  return ['private-network', '/private-network/:id:detach', 'PUT'] as const
}

export function usePutPrivateNetworkIdDetach<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['private-network'][':id:detach']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['private-network'][':id:detach']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPrivateNetworkIdDetachKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['private-network'][':id:detach']['$put']> },
      ) => parseResponse(client['private-network'][':id:detach'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPrivateNetworkIdKey(
  args: InferRequestType<(typeof client)['private-network'][':id']['$get']>,
) {
  return ['private-network', '/private-network/:id', args] as const
}

export function useGetPrivateNetworkId<TError = unknown>(
  args: InferRequestType<(typeof client)['private-network'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['private-network'][':id']['$get']>>
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
        ? getGetPrivateNetworkIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['private-network'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['private-network'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPrivateNetworkId<TError = unknown>(
  args: InferRequestType<(typeof client)['private-network'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['private-network'][':id']['$get']>>
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
        ? getGetPrivateNetworkIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['private-network'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['private-network'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPrivateNetworkIdKey() {
  return ['private-network', '/private-network/:id', 'PUT'] as const
}

export function usePutPrivateNetworkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['private-network'][':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['private-network'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPrivateNetworkIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['private-network'][':id']['$put']> },
      ) => parseResponse(client['private-network'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePrivateNetworkIdKey() {
  return ['private-network', '/private-network/:id', 'DELETE'] as const
}

export function useDeletePrivateNetworkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['private-network'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['private-network'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePrivateNetworkIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['private-network'][':id']['$delete']> },
      ) => parseResponse(client['private-network'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAiInstanceTypeKey() {
  return ['ai', '/ai/instance-type'] as const
}

export function useGetAiInstanceType<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ai)['instance-type']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAiInstanceTypeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ai)['instance-type']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ai['instance-type'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAiInstanceType<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ai)['instance-type']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAiInstanceTypeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ai)['instance-type']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ai['instance-type'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteLoadBalancerIdFieldKey() {
  return ['load-balancer', '/load-balancer/:id/:field', 'DELETE'] as const
}

export function useDeleteLoadBalancerIdField<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['load-balancer'][':id'][':field']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['load-balancer'][':id'][':field']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLoadBalancerIdFieldKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['load-balancer'][':id'][':field']['$delete']> },
      ) => parseResponse(client['load-balancer'][':id'][':field'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutInstanceIdScaleKey() {
  return ['instance', '/instance/:id:scale', 'PUT'] as const
}

export function usePutInstanceIdScale<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.instance)[':id:scale']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.instance)[':id:scale']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutInstanceIdScaleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.instance)[':id:scale']['$put']> },
      ) => parseResponse(client.instance[':id:scale'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiKeyKey() {
  return ['api-key', '/api-key'] as const
}

export function useGetApiKey<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-key']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiKeyKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-key']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['api-key'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiKey<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-key']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiKeyKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-key']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['api-key'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiKeyKey() {
  return ['api-key', '/api-key', 'POST'] as const
}

export function usePostApiKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-key']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['api-key']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['api-key']['$post']> }) =>
        parseResponse(client['api-key'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBlockStorageSnapshotKey() {
  return ['block-storage-snapshot', '/block-storage-snapshot'] as const
}

export function useGetBlockStorageSnapshot<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['block-storage-snapshot']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBlockStorageSnapshotKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['block-storage-snapshot']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['block-storage-snapshot'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBlockStorageSnapshot<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['block-storage-snapshot']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBlockStorageSnapshotKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['block-storage-snapshot']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['block-storage-snapshot'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDnsDomainKey() {
  return ['dns-domain', '/dns-domain'] as const
}

export function useGetDnsDomain<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['dns-domain']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDnsDomainKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['dns-domain']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dns-domain'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDnsDomain<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['dns-domain']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDnsDomainKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['dns-domain']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dns-domain'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDnsDomainKey() {
  return ['dns-domain', '/dns-domain', 'POST'] as const
}

export function usePostDnsDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['dns-domain']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dns-domain']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDnsDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['dns-domain']['$post']> }) =>
        parseResponse(client['dns-domain'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutInstanceIdStopKey() {
  return ['instance', '/instance/:id:stop', 'PUT'] as const
}

export function usePutInstanceIdStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.instance)[':id:stop']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.instance)[':id:stop']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutInstanceIdStopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.instance)[':id:stop']['$put']> },
      ) => parseResponse(client.instance[':id:stop'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDnsDomainDomainIdRecordRecordIdKey(
  args: InferRequestType<
    (typeof client)['dns-domain'][':domain-id']['record'][':record-id']['$get']
  >,
) {
  return ['dns-domain', '/dns-domain/:domain-id/record/:record-id', args] as const
}

export function useGetDnsDomainDomainIdRecordRecordId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['dns-domain'][':domain-id']['record'][':record-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDnsDomainDomainIdRecordRecordIdKey(args)
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
                (typeof client)['dns-domain'][':domain-id']['record'][':record-id']['$get']
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
          client['dns-domain'][':domain-id'].record[':record-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDnsDomainDomainIdRecordRecordId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['dns-domain'][':domain-id']['record'][':record-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDnsDomainDomainIdRecordRecordIdKey(args)
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
                (typeof client)['dns-domain'][':domain-id']['record'][':record-id']['$get']
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
          client['dns-domain'][':domain-id'].record[':record-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutDnsDomainDomainIdRecordRecordIdKey() {
  return ['dns-domain', '/dns-domain/:domain-id/record/:record-id', 'PUT'] as const
}

export function usePutDnsDomainDomainIdRecordRecordId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['dns-domain'][':domain-id']['record'][':record-id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDnsDomainDomainIdRecordRecordIdKey()
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
            (typeof client)['dns-domain'][':domain-id']['record'][':record-id']['$put']
          >
        },
      ) =>
        parseResponse(
          client['dns-domain'][':domain-id'].record[':record-id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteDnsDomainDomainIdRecordRecordIdKey() {
  return ['dns-domain', '/dns-domain/:domain-id/record/:record-id', 'DELETE'] as const
}

export function useDeleteDnsDomainDomainIdRecordRecordId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['dns-domain'][':domain-id']['record'][':record-id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDnsDomainDomainIdRecordRecordIdKey()
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
            (typeof client)['dns-domain'][':domain-id']['record'][':record-id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['dns-domain'][':domain-id'].record[':record-id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDbaasKafkaServiceNameUserKey() {
  return ['dbaas-kafka', '/dbaas-kafka/:service-name/user', 'POST'] as const
}

export function usePostDbaasKafkaServiceNameUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-kafka'][':service-name']['user']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dbaas-kafka'][':service-name']['user']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDbaasKafkaServiceNameUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['dbaas-kafka'][':service-name']['user']['$post']>
        },
      ) => parseResponse(client['dbaas-kafka'][':service-name'].user.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutDbaasValkeyServiceNameUserUsernamePasswordResetKey() {
  return [
    'dbaas-valkey',
    '/dbaas-valkey/:service-name/user/:username/password/reset',
    'PUT',
  ] as const
}

export function usePutDbaasValkeyServiceNameUserUsernamePasswordReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['dbaas-valkey'][':service-name']['user'][':username']['password']['reset']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDbaasValkeyServiceNameUserUsernamePasswordResetKey()
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
            (typeof client)['dbaas-valkey'][':service-name']['user'][':username']['password']['reset']['$put']
          >
        },
      ) =>
        parseResponse(
          client['dbaas-valkey'][':service-name'].user[':username'].password.reset.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDbaasExternalIntegrationSettingsDatadogIntegrationIdKey(
  args: InferRequestType<
    (typeof client)['dbaas-external-integration-settings-datadog'][':integration-id']['$get']
  >,
) {
  return [
    'dbaas-external-integration-settings-datadog',
    '/dbaas-external-integration-settings-datadog/:integration-id',
    args,
  ] as const
}

export function useGetDbaasExternalIntegrationSettingsDatadogIntegrationId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['dbaas-external-integration-settings-datadog'][':integration-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDbaasExternalIntegrationSettingsDatadogIntegrationIdKey(args)
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
                (typeof client)['dbaas-external-integration-settings-datadog'][':integration-id']['$get']
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
          client['dbaas-external-integration-settings-datadog'][':integration-id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasExternalIntegrationSettingsDatadogIntegrationId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['dbaas-external-integration-settings-datadog'][':integration-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDbaasExternalIntegrationSettingsDatadogIntegrationIdKey(args)
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
                (typeof client)['dbaas-external-integration-settings-datadog'][':integration-id']['$get']
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
          client['dbaas-external-integration-settings-datadog'][':integration-id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDbaasExternalIntegrationSettingsDatadogIntegrationIdKey() {
  return [
    'dbaas-external-integration-settings-datadog',
    '/dbaas-external-integration-settings-datadog/:integration-id',
    'POST',
  ] as const
}

export function usePostDbaasExternalIntegrationSettingsDatadogIntegrationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['dbaas-external-integration-settings-datadog'][':integration-id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDbaasExternalIntegrationSettingsDatadogIntegrationIdKey()
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
            (typeof client)['dbaas-external-integration-settings-datadog'][':integration-id']['$post']
          >
        },
      ) =>
        parseResponse(
          client['dbaas-external-integration-settings-datadog'][':integration-id'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutSecurityGroupIdAttachKey() {
  return ['security-group', '/security-group/:id:attach', 'PUT'] as const
}

export function usePutSecurityGroupIdAttach<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['security-group'][':id:attach']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['security-group'][':id:attach']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSecurityGroupIdAttachKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['security-group'][':id:attach']['$put']> },
      ) => parseResponse(client['security-group'][':id:attach'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSnapshotIdKey(
  args: InferRequestType<(typeof client.snapshot)[':id']['$get']>,
) {
  return ['snapshot', '/snapshot/:id', args] as const
}

export function useGetSnapshotId<TError = unknown>(
  args: InferRequestType<(typeof client.snapshot)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.snapshot)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSnapshotIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.snapshot)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.snapshot[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSnapshotId<TError = unknown>(
  args: InferRequestType<(typeof client.snapshot)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.snapshot)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSnapshotIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.snapshot)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.snapshot[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSnapshotIdKey() {
  return ['snapshot', '/snapshot/:id', 'DELETE'] as const
}

export function useDeleteSnapshotId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.snapshot)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.snapshot)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSnapshotIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.snapshot)[':id']['$delete']> },
      ) => parseResponse(client.snapshot[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSksClusterIdNodepoolSksNodepoolIdScaleKey() {
  return ['sks-cluster', '/sks-cluster/:id/nodepool/:sks-nodepool-id:scale', 'PUT'] as const
}

export function usePutSksClusterIdNodepoolSksNodepoolIdScale<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id:scale']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSksClusterIdNodepoolSksNodepoolIdScaleKey()
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
            (typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id:scale']['$put']
          >
        },
      ) =>
        parseResponse(
          client['sks-cluster'][':id'].nodepool[':sks-nodepool-id:scale'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDbaasSettingsMysqlKey() {
  return ['dbaas-settings-mysql', '/dbaas-settings-mysql'] as const
}

export function useGetDbaasSettingsMysql<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-settings-mysql']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDbaasSettingsMysqlKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-settings-mysql']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-settings-mysql'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasSettingsMysql<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-settings-mysql']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDbaasSettingsMysqlKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-settings-mysql']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-settings-mysql'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSksClusterIdUpgradeServiceLevelKey() {
  return ['sks-cluster', '/sks-cluster/:id/upgrade-service-level', 'PUT'] as const
}

export function usePutSksClusterIdUpgradeServiceLevel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['sks-cluster'][':id']['upgrade-service-level']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSksClusterIdUpgradeServiceLevelKey()
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
            (typeof client)['sks-cluster'][':id']['upgrade-service-level']['$put']
          >
        },
      ) =>
        parseResponse(
          client['sks-cluster'][':id']['upgrade-service-level'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDbaasSettingsValkeyKey() {
  return ['dbaas-settings-valkey', '/dbaas-settings-valkey'] as const
}

export function useGetDbaasSettingsValkey<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-settings-valkey']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDbaasSettingsValkeyKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-settings-valkey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-settings-valkey'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasSettingsValkey<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-settings-valkey']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDbaasSettingsValkeyKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-settings-valkey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-settings-valkey'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiKeyIdKey(
  args: InferRequestType<(typeof client)['api-key'][':id']['$get']>,
) {
  return ['api-key', '/api-key/:id', args] as const
}

export function useGetApiKeyId<TError = unknown>(
  args: InferRequestType<(typeof client)['api-key'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['api-key'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiKeyIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['api-key'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['api-key'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiKeyId<TError = unknown>(
  args: InferRequestType<(typeof client)['api-key'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['api-key'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiKeyIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['api-key'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['api-key'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiKeyIdKey() {
  return ['api-key', '/api-key/:id', 'DELETE'] as const
}

export function useDeleteApiKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['api-key'][':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['api-key'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiKeyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['api-key'][':id']['$delete']> },
      ) => parseResponse(client['api-key'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteLoadBalancerIdServiceServiceIdFieldKey() {
  return ['load-balancer', '/load-balancer/:id/service/:service-id/:field', 'DELETE'] as const
}

export function useDeleteLoadBalancerIdServiceServiceIdField<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['load-balancer'][':id']['service'][':service-id'][':field']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLoadBalancerIdServiceServiceIdFieldKey()
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
            (typeof client)['load-balancer'][':id']['service'][':service-id'][':field']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['load-balancer'][':id'].service[':service-id'][':field'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDbaasPostgresServiceNameDatabaseKey() {
  return ['dbaas-postgres', '/dbaas-postgres/:service-name/database', 'POST'] as const
}

export function usePostDbaasPostgresServiceNameDatabase<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['dbaas-postgres'][':service-name']['database']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDbaasPostgresServiceNameDatabaseKey()
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
            (typeof client)['dbaas-postgres'][':service-name']['database']['$post']
          >
        },
      ) =>
        parseResponse(client['dbaas-postgres'][':service-name'].database.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostKmsKeyIdRotateKey() {
  return ['kms-key', '/kms-key/:id/rotate', 'POST'] as const
}

export function usePostKmsKeyIdRotate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['kms-key'][':id']['rotate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['kms-key'][':id']['rotate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKmsKeyIdRotateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['kms-key'][':id']['rotate']['$post']> },
      ) => parseResponse(client['kms-key'][':id'].rotate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDbaasSettingsThanosKey() {
  return ['dbaas-settings-thanos', '/dbaas-settings-thanos'] as const
}

export function useGetDbaasSettingsThanos<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-settings-thanos']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDbaasSettingsThanosKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-settings-thanos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-settings-thanos'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasSettingsThanos<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-settings-thanos']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDbaasSettingsThanosKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-settings-thanos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-settings-thanos'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSecurityGroupIdRulesKey() {
  return ['security-group', '/security-group/:id/rules', 'POST'] as const
}

export function usePostSecurityGroupIdRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['security-group'][':id']['rules']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['security-group'][':id']['rules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSecurityGroupIdRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['security-group'][':id']['rules']['$post']> },
      ) => parseResponse(client['security-group'][':id'].rules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDbaasSettingsClickhouseKey() {
  return ['dbaas-settings-clickhouse', '/dbaas-settings-clickhouse'] as const
}

export function useGetDbaasSettingsClickhouse<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-settings-clickhouse']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDbaasSettingsClickhouseKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-settings-clickhouse']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-settings-clickhouse'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasSettingsClickhouse<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-settings-clickhouse']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDbaasSettingsClickhouseKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-settings-clickhouse']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-settings-clickhouse'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDbaasOpensearchServiceNameUserKey() {
  return ['dbaas-opensearch', '/dbaas-opensearch/:service-name/user', 'POST'] as const
}

export function usePostDbaasOpensearchServiceNameUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-opensearch'][':service-name']['user']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dbaas-opensearch'][':service-name']['user']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDbaasOpensearchServiceNameUserKey()
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
            (typeof client)['dbaas-opensearch'][':service-name']['user']['$post']
          >
        },
      ) =>
        parseResponse(client['dbaas-opensearch'][':service-name'].user.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDbaasIntegrationTypesKey() {
  return ['dbaas-integration-types', '/dbaas-integration-types'] as const
}

export function useGetDbaasIntegrationTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-integration-types']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDbaasIntegrationTypesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-integration-types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-integration-types'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasIntegrationTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-integration-types']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDbaasIntegrationTypesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-integration-types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-integration-types'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEnvImpactPeriodKey(
  args: InferRequestType<(typeof client)['env-impact'][':period']['$get']>,
) {
  return ['env-impact', '/env-impact/:period', args] as const
}

export function useGetEnvImpactPeriod<TError = unknown>(
  args: InferRequestType<(typeof client)['env-impact'][':period']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['env-impact'][':period']['$get']>>
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
        ? getGetEnvImpactPeriodKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['env-impact'][':period']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['env-impact'][':period'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnvImpactPeriod<TError = unknown>(
  args: InferRequestType<(typeof client)['env-impact'][':period']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['env-impact'][':period']['$get']>>
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
        ? getGetEnvImpactPeriodKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['env-impact'][':period']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['env-impact'][':period'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteDbaasPostgresServiceNameUserUsernameKey() {
  return ['dbaas-postgres', '/dbaas-postgres/:service-name/user/:username', 'DELETE'] as const
}

export function useDeleteDbaasPostgresServiceNameUserUsername<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['dbaas-postgres'][':service-name']['user'][':username']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDbaasPostgresServiceNameUserUsernameKey()
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
            (typeof client)['dbaas-postgres'][':service-name']['user'][':username']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['dbaas-postgres'][':service-name'].user[':username'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutInstanceIdAddProtectionKey() {
  return ['instance', '/instance/:id:add-protection', 'PUT'] as const
}

export function usePutInstanceIdAddProtection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instance)[':id:add-protection']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.instance)[':id:add-protection']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutInstanceIdAddProtectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.instance)[':id:add-protection']['$put']> },
      ) => parseResponse(client.instance[':id:add-protection'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutDbaasPostgresServiceNameUserUsernameAllowReplicationKey() {
  return [
    'dbaas-postgres',
    '/dbaas-postgres/:service-name/user/:username/allow-replication',
    'PUT',
  ] as const
}

export function usePutDbaasPostgresServiceNameUserUsernameAllowReplication<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['dbaas-postgres'][':service-name']['user'][':username']['allow-replication']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDbaasPostgresServiceNameUserUsernameAllowReplicationKey()
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
            (typeof client)['dbaas-postgres'][':service-name']['user'][':username']['allow-replication']['$put']
          >
        },
      ) =>
        parseResponse(
          client['dbaas-postgres'][':service-name'].user[':username']['allow-replication'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIamRoleIdKey(
  args: InferRequestType<(typeof client)['iam-role'][':id']['$get']>,
) {
  return ['iam-role', '/iam-role/:id', args] as const
}

export function useGetIamRoleId<TError = unknown>(
  args: InferRequestType<(typeof client)['iam-role'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['iam-role'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetIamRoleIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['iam-role'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['iam-role'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIamRoleId<TError = unknown>(
  args: InferRequestType<(typeof client)['iam-role'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['iam-role'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetIamRoleIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['iam-role'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['iam-role'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutIamRoleIdKey() {
  return ['iam-role', '/iam-role/:id', 'PUT'] as const
}

export function usePutIamRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['iam-role'][':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['iam-role'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIamRoleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['iam-role'][':id']['$put']> },
      ) => parseResponse(client['iam-role'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteIamRoleIdKey() {
  return ['iam-role', '/iam-role/:id', 'DELETE'] as const
}

export function useDeleteIamRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['iam-role'][':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['iam-role'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIamRoleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['iam-role'][':id']['$delete']> },
      ) => parseResponse(client['iam-role'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteInstanceIdFieldKey() {
  return ['instance', '/instance/:id/:field', 'DELETE'] as const
}

export function useDeleteInstanceIdField<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instance)[':id'][':field']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.instance)[':id'][':field']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteInstanceIdFieldKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.instance)[':id'][':field']['$delete']> },
      ) => parseResponse(client.instance[':id'][':field'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteInstancePoolIdFieldKey() {
  return ['instance-pool', '/instance-pool/:id/:field', 'DELETE'] as const
}

export function useDeleteInstancePoolIdField<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['instance-pool'][':id'][':field']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['instance-pool'][':id'][':field']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteInstancePoolIdFieldKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['instance-pool'][':id'][':field']['$delete']> },
      ) => parseResponse(client['instance-pool'][':id'][':field'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutInstanceIdRemoveProtectionKey() {
  return ['instance', '/instance/:id:remove-protection', 'PUT'] as const
}

export function usePutInstanceIdRemoveProtection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instance)[':id:remove-protection']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.instance)[':id:remove-protection']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutInstanceIdRemoveProtectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.instance)[':id:remove-protection']['$put']> },
      ) => parseResponse(client.instance[':id:remove-protection'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDbaasKafkaNameTopicAclConfigKey() {
  return ['dbaas-kafka', '/dbaas-kafka/:name/topic/acl-config', 'POST'] as const
}

export function usePostDbaasKafkaNameTopicAclConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['dbaas-kafka'][':name']['topic']['acl-config']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDbaasKafkaNameTopicAclConfigKey()
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
            (typeof client)['dbaas-kafka'][':name']['topic']['acl-config']['$post']
          >
        },
      ) =>
        parseResponse(client['dbaas-kafka'][':name'].topic['acl-config'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSnapshotKey() {
  return ['snapshot', '/snapshot'] as const
}

export function useGetSnapshot<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshot.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSnapshotKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshot.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.snapshot.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSnapshot<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshot.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSnapshotKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshot.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.snapshot.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOperationIdKey(
  args: InferRequestType<(typeof client.operation)[':id']['$get']>,
) {
  return ['operation', '/operation/:id', args] as const
}

export function useGetOperationId<TError = unknown>(
  args: InferRequestType<(typeof client.operation)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.operation)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetOperationIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.operation)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.operation[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOperationId<TError = unknown>(
  args: InferRequestType<(typeof client.operation)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.operation)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetOperationIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.operation)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.operation[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDnsDomainIdZoneKey(
  args: InferRequestType<(typeof client)['dns-domain'][':id']['zone']['$get']>,
) {
  return ['dns-domain', '/dns-domain/:id/zone', args] as const
}

export function useGetDnsDomainIdZone<TError = unknown>(
  args: InferRequestType<(typeof client)['dns-domain'][':id']['zone']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dns-domain'][':id']['zone']['$get']>>
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
        ? getGetDnsDomainIdZoneKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dns-domain'][':id']['zone']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dns-domain'][':id'].zone.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDnsDomainIdZone<TError = unknown>(
  args: InferRequestType<(typeof client)['dns-domain'][':id']['zone']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dns-domain'][':id']['zone']['$get']>>
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
        ? getGetDnsDomainIdZoneKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dns-domain'][':id']['zone']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dns-domain'][':id'].zone.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDbaasExternalEndpointOpensearchNameKey() {
  return [
    'dbaas-external-endpoint-opensearch',
    '/dbaas-external-endpoint-opensearch/:name',
    'POST',
  ] as const
}

export function usePostDbaasExternalEndpointOpensearchName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['dbaas-external-endpoint-opensearch'][':name']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDbaasExternalEndpointOpensearchNameKey()
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
            (typeof client)['dbaas-external-endpoint-opensearch'][':name']['$post']
          >
        },
      ) =>
        parseResponse(
          client['dbaas-external-endpoint-opensearch'][':name'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteDbaasMysqlServiceNameDatabaseDatabaseNameKey() {
  return ['dbaas-mysql', '/dbaas-mysql/:service-name/database/:database-name', 'DELETE'] as const
}

export function useDeleteDbaasMysqlServiceNameDatabaseDatabaseName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['dbaas-mysql'][':service-name']['database'][':database-name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDbaasMysqlServiceNameDatabaseDatabaseNameKey()
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
            (typeof client)['dbaas-mysql'][':service-name']['database'][':database-name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['dbaas-mysql'][':service-name'].database[':database-name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutSecurityGroupIdRemoveSourceKey() {
  return ['security-group', '/security-group/:id:remove-source', 'PUT'] as const
}

export function usePutSecurityGroupIdRemoveSource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['security-group'][':id:remove-source']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['security-group'][':id:remove-source']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSecurityGroupIdRemoveSourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['security-group'][':id:remove-source']['$put']>
        },
      ) => parseResponse(client['security-group'][':id:remove-source'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIamOrganizationPolicyKey() {
  return ['iam-organization-policy', '/iam-organization-policy'] as const
}

export function useGetIamOrganizationPolicy<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['iam-organization-policy']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIamOrganizationPolicyKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['iam-organization-policy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['iam-organization-policy'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIamOrganizationPolicy<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['iam-organization-policy']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIamOrganizationPolicyKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['iam-organization-policy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['iam-organization-policy'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutIamOrganizationPolicyKey() {
  return ['iam-organization-policy', '/iam-organization-policy', 'PUT'] as const
}

export function usePutIamOrganizationPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['iam-organization-policy']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['iam-organization-policy']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIamOrganizationPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['iam-organization-policy']['$put']> },
      ) => parseResponse(client['iam-organization-policy'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDbaasServiceLogsServiceNameKey() {
  return ['dbaas-service-logs', '/dbaas-service-logs/:service-name', 'POST'] as const
}

export function usePostDbaasServiceLogsServiceName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-service-logs'][':service-name']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dbaas-service-logs'][':service-name']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDbaasServiceLogsServiceNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['dbaas-service-logs'][':service-name']['$post']>
        },
      ) => parseResponse(client['dbaas-service-logs'][':service-name'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostKmsKeyIdDecryptKey() {
  return ['kms-key', '/kms-key/:id/decrypt', 'POST'] as const
}

export function usePostKmsKeyIdDecrypt<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['kms-key'][':id']['decrypt']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['kms-key'][':id']['decrypt']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKmsKeyIdDecryptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['kms-key'][':id']['decrypt']['$post']> },
      ) => parseResponse(client['kms-key'][':id'].decrypt.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTemplateIdKey(
  args: InferRequestType<(typeof client.template)[':id']['$get']>,
) {
  return ['template', '/template/:id', args] as const
}

export function useGetTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.template)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.template)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTemplateIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.template)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.template[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.template)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.template)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTemplateIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.template)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.template[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTemplateIdKey() {
  return ['template', '/template/:id', 'PUT'] as const
}

export function usePutTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.template)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.template)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTemplateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.template)[':id']['$put']> }) =>
        parseResponse(client.template[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTemplateIdKey() {
  return ['template', '/template/:id', 'POST'] as const
}

export function usePostTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.template)[':id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.template)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.template)[':id']['$post']> },
      ) => parseResponse(client.template[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTemplateIdKey() {
  return ['template', '/template/:id', 'DELETE'] as const
}

export function useDeleteTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.template)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.template)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTemplateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.template)[':id']['$delete']> },
      ) => parseResponse(client.template[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutDbaasPostgresNameMaintenanceStartKey() {
  return ['dbaas-postgres', '/dbaas-postgres/:name/maintenance/start', 'PUT'] as const
}

export function usePutDbaasPostgresNameMaintenanceStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['dbaas-postgres'][':name']['maintenance']['start']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDbaasPostgresNameMaintenanceStartKey()
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
            (typeof client)['dbaas-postgres'][':name']['maintenance']['start']['$put']
          >
        },
      ) =>
        parseResponse(client['dbaas-postgres'][':name'].maintenance.start.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDbaasGrafanaServiceNameUserUsernamePasswordRevealKey(
  args: InferRequestType<
    (typeof client)['dbaas-grafana'][':service-name']['user'][':username']['password']['reveal']['$get']
  >,
) {
  return [
    'dbaas-grafana',
    '/dbaas-grafana/:service-name/user/:username/password/reveal',
    args,
  ] as const
}

export function useGetDbaasGrafanaServiceNameUserUsernamePasswordReveal<TError = unknown>(
  args: InferRequestType<
    (typeof client)['dbaas-grafana'][':service-name']['user'][':username']['password']['reveal']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDbaasGrafanaServiceNameUserUsernamePasswordRevealKey(args)
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
                (typeof client)['dbaas-grafana'][':service-name']['user'][':username']['password']['reveal']['$get']
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
          client['dbaas-grafana'][':service-name'].user[':username'].password.reveal.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasGrafanaServiceNameUserUsernamePasswordReveal<TError = unknown>(
  args: InferRequestType<
    (typeof client)['dbaas-grafana'][':service-name']['user'][':username']['password']['reveal']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDbaasGrafanaServiceNameUserUsernamePasswordRevealKey(args)
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
                (typeof client)['dbaas-grafana'][':service-name']['user'][':username']['password']['reveal']['$get']
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
          client['dbaas-grafana'][':service-name'].user[':username'].password.reveal.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutUserIdKey() {
  return ['user', '/user/:id', 'PUT'] as const
}

export function usePutUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.user)[':id']['$put']> }) =>
        parseResponse(client.user[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUserIdKey() {
  return ['user', '/user/:id', 'DELETE'] as const
}

export function useDeleteUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':id']['$delete']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.user)[':id']['$delete']> }) =>
        parseResponse(client.user[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetReverseDnsInstanceIdKey(
  args: InferRequestType<(typeof client)['reverse-dns']['instance'][':id']['$get']>,
) {
  return ['reverse-dns', '/reverse-dns/instance/:id', args] as const
}

export function useGetReverseDnsInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client)['reverse-dns']['instance'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['reverse-dns']['instance'][':id']['$get']>>
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
        ? getGetReverseDnsInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['reverse-dns']['instance'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['reverse-dns'].instance[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReverseDnsInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client)['reverse-dns']['instance'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['reverse-dns']['instance'][':id']['$get']>>
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
        ? getGetReverseDnsInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['reverse-dns']['instance'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['reverse-dns'].instance[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostReverseDnsInstanceIdKey() {
  return ['reverse-dns', '/reverse-dns/instance/:id', 'POST'] as const
}

export function usePostReverseDnsInstanceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['reverse-dns']['instance'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['reverse-dns']['instance'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReverseDnsInstanceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['reverse-dns']['instance'][':id']['$post']> },
      ) => parseResponse(client['reverse-dns'].instance[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteReverseDnsInstanceIdKey() {
  return ['reverse-dns', '/reverse-dns/instance/:id', 'DELETE'] as const
}

export function useDeleteReverseDnsInstanceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['reverse-dns']['instance'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['reverse-dns']['instance'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteReverseDnsInstanceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['reverse-dns']['instance'][':id']['$delete']> },
      ) => parseResponse(client['reverse-dns'].instance[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutInstancePoolIdEvictKey() {
  return ['instance-pool', '/instance-pool/:id:evict', 'PUT'] as const
}

export function usePutInstancePoolIdEvict<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['instance-pool'][':id:evict']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['instance-pool'][':id:evict']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutInstancePoolIdEvictKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['instance-pool'][':id:evict']['$put']> },
      ) => parseResponse(client['instance-pool'][':id:evict'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSksClusterIdRotateCsiCredentialsKey() {
  return ['sks-cluster', '/sks-cluster/:id/rotate-csi-credentials', 'PUT'] as const
}

export function usePutSksClusterIdRotateCsiCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['sks-cluster'][':id']['rotate-csi-credentials']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSksClusterIdRotateCsiCredentialsKey()
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
            (typeof client)['sks-cluster'][':id']['rotate-csi-credentials']['$put']
          >
        },
      ) =>
        parseResponse(
          client['sks-cluster'][':id']['rotate-csi-credentials'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutDbaasGrafanaServiceNameUserUsernamePasswordResetKey() {
  return [
    'dbaas-grafana',
    '/dbaas-grafana/:service-name/user/:username/password/reset',
    'PUT',
  ] as const
}

export function usePutDbaasGrafanaServiceNameUserUsernamePasswordReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['dbaas-grafana'][':service-name']['user'][':username']['password']['reset']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDbaasGrafanaServiceNameUserUsernamePasswordResetKey()
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
            (typeof client)['dbaas-grafana'][':service-name']['user'][':username']['password']['reset']['$put']
          >
        },
      ) =>
        parseResponse(
          client['dbaas-grafana'][':service-name'].user[':username'].password.reset.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutDbaasClickhouseServiceNameUserUsernamePasswordResetKey() {
  return [
    'dbaas-clickhouse',
    '/dbaas-clickhouse/:service-name/user/:username/password/reset',
    'PUT',
  ] as const
}

export function usePutDbaasClickhouseServiceNameUserUsernamePasswordReset<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['dbaas-clickhouse'][':service-name']['user'][':username']['password']['reset']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDbaasClickhouseServiceNameUserUsernamePasswordResetKey()
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
            (typeof client)['dbaas-clickhouse'][':service-name']['user'][':username']['password']['reset']['$put']
          >
        },
      ) =>
        parseResponse(
          client['dbaas-clickhouse'][':service-name'].user[':username'].password.reset.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutSecurityGroupIdDetachKey() {
  return ['security-group', '/security-group/:id:detach', 'PUT'] as const
}

export function usePutSecurityGroupIdDetach<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['security-group'][':id:detach']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['security-group'][':id:detach']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSecurityGroupIdDetachKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['security-group'][':id:detach']['$put']> },
      ) => parseResponse(client['security-group'][':id:detach'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDbaasClickhouseServiceNameAclConfigKey(
  args: InferRequestType<
    (typeof client)['dbaas-clickhouse'][':service-name']['acl-config']['$get']
  >,
) {
  return ['dbaas-clickhouse', '/dbaas-clickhouse/:service-name/acl-config', args] as const
}

export function useGetDbaasClickhouseServiceNameAclConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client)['dbaas-clickhouse'][':service-name']['acl-config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['dbaas-clickhouse'][':service-name']['acl-config']['$get']>
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
        ? getGetDbaasClickhouseServiceNameAclConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['dbaas-clickhouse'][':service-name']['acl-config']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['dbaas-clickhouse'][':service-name']['acl-config'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasClickhouseServiceNameAclConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client)['dbaas-clickhouse'][':service-name']['acl-config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['dbaas-clickhouse'][':service-name']['acl-config']['$get']>
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
        ? getGetDbaasClickhouseServiceNameAclConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['dbaas-clickhouse'][':service-name']['acl-config']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['dbaas-clickhouse'][':service-name']['acl-config'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDbaasClickhouseServiceNameUserKey(
  args: InferRequestType<(typeof client)['dbaas-clickhouse'][':service-name']['user']['$get']>,
) {
  return ['dbaas-clickhouse', '/dbaas-clickhouse/:service-name/user', args] as const
}

export function useGetDbaasClickhouseServiceNameUser<TError = unknown>(
  args: InferRequestType<(typeof client)['dbaas-clickhouse'][':service-name']['user']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['dbaas-clickhouse'][':service-name']['user']['$get']>
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
        ? getGetDbaasClickhouseServiceNameUserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['dbaas-clickhouse'][':service-name']['user']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['dbaas-clickhouse'][':service-name'].user.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasClickhouseServiceNameUser<TError = unknown>(
  args: InferRequestType<(typeof client)['dbaas-clickhouse'][':service-name']['user']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['dbaas-clickhouse'][':service-name']['user']['$get']>
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
        ? getGetDbaasClickhouseServiceNameUserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['dbaas-clickhouse'][':service-name']['user']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['dbaas-clickhouse'][':service-name'].user.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDbaasClickhouseServiceNameUserKey() {
  return ['dbaas-clickhouse', '/dbaas-clickhouse/:service-name/user', 'POST'] as const
}

export function usePostDbaasClickhouseServiceNameUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-clickhouse'][':service-name']['user']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dbaas-clickhouse'][':service-name']['user']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDbaasClickhouseServiceNameUserKey()
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
            (typeof client)['dbaas-clickhouse'][':service-name']['user']['$post']
          >
        },
      ) =>
        parseResponse(client['dbaas-clickhouse'][':service-name'].user.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSksClusterIdNodepoolSksNodepoolIdEvictKey() {
  return ['sks-cluster', '/sks-cluster/:id/nodepool/:sks-nodepool-id:evict', 'PUT'] as const
}

export function usePutSksClusterIdNodepoolSksNodepoolIdEvict<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id:evict']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSksClusterIdNodepoolSksNodepoolIdEvictKey()
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
            (typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id:evict']['$put']
          >
        },
      ) =>
        parseResponse(
          client['sks-cluster'][':id'].nodepool[':sks-nodepool-id:evict'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutDbaasValkeyServiceNameUserUsernameKey() {
  return ['dbaas-valkey', '/dbaas-valkey/:service-name/user/:username', 'PUT'] as const
}

export function usePutDbaasValkeyServiceNameUserUsername<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['dbaas-valkey'][':service-name']['user'][':username']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDbaasValkeyServiceNameUserUsernameKey()
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
            (typeof client)['dbaas-valkey'][':service-name']['user'][':username']['$put']
          >
        },
      ) =>
        parseResponse(
          client['dbaas-valkey'][':service-name'].user[':username'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteDbaasValkeyServiceNameUserUsernameKey() {
  return ['dbaas-valkey', '/dbaas-valkey/:service-name/user/:username', 'DELETE'] as const
}

export function useDeleteDbaasValkeyServiceNameUserUsername<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['dbaas-valkey'][':service-name']['user'][':username']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDbaasValkeyServiceNameUserUsernameKey()
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
            (typeof client)['dbaas-valkey'][':service-name']['user'][':username']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['dbaas-valkey'][':service-name'].user[':username'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostKmsKeyIdDisableKey() {
  return ['kms-key', '/kms-key/:id/disable', 'POST'] as const
}

export function usePostKmsKeyIdDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['kms-key'][':id']['disable']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['kms-key'][':id']['disable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKmsKeyIdDisableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['kms-key'][':id']['disable']['$post']> },
      ) => parseResponse(client['kms-key'][':id'].disable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDbaasKafkaNameSchemaRegistryAclConfigAclIdKey() {
  return ['dbaas-kafka', '/dbaas-kafka/:name/schema-registry/acl-config/:acl-id', 'DELETE'] as const
}

export function useDeleteDbaasKafkaNameSchemaRegistryAclConfigAclId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['dbaas-kafka'][':name']['schema-registry']['acl-config'][':acl-id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDbaasKafkaNameSchemaRegistryAclConfigAclIdKey()
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
            (typeof client)['dbaas-kafka'][':name']['schema-registry']['acl-config'][':acl-id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['dbaas-kafka'][':name']['schema-registry']['acl-config'][':acl-id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDnsDomainIdKey(
  args: InferRequestType<(typeof client)['dns-domain'][':id']['$get']>,
) {
  return ['dns-domain', '/dns-domain/:id', args] as const
}

export function useGetDnsDomainId<TError = unknown>(
  args: InferRequestType<(typeof client)['dns-domain'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['dns-domain'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDnsDomainIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['dns-domain'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dns-domain'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDnsDomainId<TError = unknown>(
  args: InferRequestType<(typeof client)['dns-domain'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['dns-domain'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDnsDomainIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['dns-domain'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dns-domain'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteDnsDomainIdKey() {
  return ['dns-domain', '/dns-domain/:id', 'DELETE'] as const
}

export function useDeleteDnsDomainId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dns-domain'][':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dns-domain'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDnsDomainIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['dns-domain'][':id']['$delete']> },
      ) => parseResponse(client['dns-domain'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBlockStorageIdResizeVolumeKey() {
  return ['block-storage', '/block-storage/:id:resize-volume', 'PUT'] as const
}

export function usePutBlockStorageIdResizeVolume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['block-storage'][':id:resize-volume']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['block-storage'][':id:resize-volume']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBlockStorageIdResizeVolumeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['block-storage'][':id:resize-volume']['$put']> },
      ) => parseResponse(client['block-storage'][':id:resize-volume'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDbaasKafkaServiceNameUserUsernameKey() {
  return ['dbaas-kafka', '/dbaas-kafka/:service-name/user/:username', 'DELETE'] as const
}

export function useDeleteDbaasKafkaServiceNameUserUsername<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['dbaas-kafka'][':service-name']['user'][':username']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDbaasKafkaServiceNameUserUsernameKey()
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
            (typeof client)['dbaas-kafka'][':service-name']['user'][':username']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['dbaas-kafka'][':service-name'].user[':username'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDbaasServiceTypeServiceTypeNameKey(
  args: InferRequestType<(typeof client)['dbaas-service-type'][':service-type-name']['$get']>,
) {
  return ['dbaas-service-type', '/dbaas-service-type/:service-type-name', args] as const
}

export function useGetDbaasServiceTypeServiceTypeName<TError = unknown>(
  args: InferRequestType<(typeof client)['dbaas-service-type'][':service-type-name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-service-type'][':service-type-name']['$get']>>
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
        ? getGetDbaasServiceTypeServiceTypeNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-service-type'][':service-type-name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['dbaas-service-type'][':service-type-name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasServiceTypeServiceTypeName<TError = unknown>(
  args: InferRequestType<(typeof client)['dbaas-service-type'][':service-type-name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-service-type'][':service-type-name']['$get']>>
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
        ? getGetDbaasServiceTypeServiceTypeNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-service-type'][':service-type-name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['dbaas-service-type'][':service-type-name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSecurityGroupIdAddSourceKey() {
  return ['security-group', '/security-group/:id:add-source', 'PUT'] as const
}

export function usePutSecurityGroupIdAddSource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['security-group'][':id:add-source']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['security-group'][':id:add-source']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSecurityGroupIdAddSourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['security-group'][':id:add-source']['$put']> },
      ) => parseResponse(client['security-group'][':id:add-source'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDbaasExternalEndpointDatadogNameKey() {
  return [
    'dbaas-external-endpoint-datadog',
    '/dbaas-external-endpoint-datadog/:name',
    'POST',
  ] as const
}

export function usePostDbaasExternalEndpointDatadogName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-external-endpoint-datadog'][':name']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dbaas-external-endpoint-datadog'][':name']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDbaasExternalEndpointDatadogNameKey()
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
            (typeof client)['dbaas-external-endpoint-datadog'][':name']['$post']
          >
        },
      ) =>
        parseResponse(client['dbaas-external-endpoint-datadog'][':name'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutDbaasMysqlNameMaintenanceStartKey() {
  return ['dbaas-mysql', '/dbaas-mysql/:name/maintenance/start', 'PUT'] as const
}

export function usePutDbaasMysqlNameMaintenanceStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['dbaas-mysql'][':name']['maintenance']['start']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDbaasMysqlNameMaintenanceStartKey()
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
            (typeof client)['dbaas-mysql'][':name']['maintenance']['start']['$put']
          >
        },
      ) => parseResponse(client['dbaas-mysql'][':name'].maintenance.start.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutDbaasOpensearchServiceNameUserUsernamePasswordResetKey() {
  return [
    'dbaas-opensearch',
    '/dbaas-opensearch/:service-name/user/:username/password/reset',
    'PUT',
  ] as const
}

export function usePutDbaasOpensearchServiceNameUserUsernamePasswordReset<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['dbaas-opensearch'][':service-name']['user'][':username']['password']['reset']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDbaasOpensearchServiceNameUserUsernamePasswordResetKey()
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
            (typeof client)['dbaas-opensearch'][':service-name']['user'][':username']['password']['reset']['$put']
          >
        },
      ) =>
        parseResponse(
          client['dbaas-opensearch'][':service-name'].user[':username'].password.reset.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAiModelIdKey(
  args: InferRequestType<(typeof client.ai.model)[':id']['$get']>,
) {
  return ['ai', '/ai/model/:id', args] as const
}

export function useGetAiModelId<TError = unknown>(
  args: InferRequestType<(typeof client.ai.model)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ai.model)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAiModelIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ai.model)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ai.model[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAiModelId<TError = unknown>(
  args: InferRequestType<(typeof client.ai.model)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ai.model)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAiModelIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ai.model)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ai.model[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAiModelIdKey() {
  return ['ai', '/ai/model/:id', 'DELETE'] as const
}

export function useDeleteAiModelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ai.model)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ai.model)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAiModelIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ai.model)[':id']['$delete']> },
      ) => parseResponse(client.ai.model[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSosBucketsUsageKey() {
  return ['sos-buckets-usage', '/sos-buckets-usage'] as const
}

export function useGetSosBucketsUsage<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['sos-buckets-usage']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSosBucketsUsageKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['sos-buckets-usage']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['sos-buckets-usage'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSosBucketsUsage<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['sos-buckets-usage']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSosBucketsUsageKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['sos-buckets-usage']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['sos-buckets-usage'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutInstanceIdResetKey() {
  return ['instance', '/instance/:id:reset', 'PUT'] as const
}

export function usePutInstanceIdReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.instance)[':id:reset']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.instance)[':id:reset']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutInstanceIdResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.instance)[':id:reset']['$put']> },
      ) => parseResponse(client.instance[':id:reset'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDbaasMysqlServiceNameUserUsernamePasswordRevealKey(
  args: InferRequestType<
    (typeof client)['dbaas-mysql'][':service-name']['user'][':username']['password']['reveal']['$get']
  >,
) {
  return ['dbaas-mysql', '/dbaas-mysql/:service-name/user/:username/password/reveal', args] as const
}

export function useGetDbaasMysqlServiceNameUserUsernamePasswordReveal<TError = unknown>(
  args: InferRequestType<
    (typeof client)['dbaas-mysql'][':service-name']['user'][':username']['password']['reveal']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDbaasMysqlServiceNameUserUsernamePasswordRevealKey(args)
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
                (typeof client)['dbaas-mysql'][':service-name']['user'][':username']['password']['reveal']['$get']
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
          client['dbaas-mysql'][':service-name'].user[':username'].password.reveal.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasMysqlServiceNameUserUsernamePasswordReveal<TError = unknown>(
  args: InferRequestType<
    (typeof client)['dbaas-mysql'][':service-name']['user'][':username']['password']['reveal']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDbaasMysqlServiceNameUserUsernamePasswordRevealKey(args)
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
                (typeof client)['dbaas-mysql'][':service-name']['user'][':username']['password']['reveal']['$get']
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
          client['dbaas-mysql'][':service-name'].user[':username'].password.reveal.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSshKeyNameKey(
  args: InferRequestType<(typeof client)['ssh-key'][':name']['$get']>,
) {
  return ['ssh-key', '/ssh-key/:name', args] as const
}

export function useGetSshKeyName<TError = unknown>(
  args: InferRequestType<(typeof client)['ssh-key'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-key'][':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSshKeyNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-key'][':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['ssh-key'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSshKeyName<TError = unknown>(
  args: InferRequestType<(typeof client)['ssh-key'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-key'][':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSshKeyNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-key'][':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['ssh-key'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSshKeyNameKey() {
  return ['ssh-key', '/ssh-key/:name', 'DELETE'] as const
}

export function useDeleteSshKeyName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-key'][':name']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['ssh-key'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSshKeyNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['ssh-key'][':name']['$delete']> },
      ) => parseResponse(client['ssh-key'][':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDbaasServiceMetricsServiceNameKey() {
  return ['dbaas-service-metrics', '/dbaas-service-metrics/:service-name', 'POST'] as const
}

export function usePostDbaasServiceMetricsServiceName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-service-metrics'][':service-name']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dbaas-service-metrics'][':service-name']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDbaasServiceMetricsServiceNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['dbaas-service-metrics'][':service-name']['$post']>
        },
      ) =>
        parseResponse(client['dbaas-service-metrics'][':service-name'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDeployTargetIdKey(
  args: InferRequestType<(typeof client)['deploy-target'][':id']['$get']>,
) {
  return ['deploy-target', '/deploy-target/:id', args] as const
}

export function useGetDeployTargetId<TError = unknown>(
  args: InferRequestType<(typeof client)['deploy-target'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['deploy-target'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDeployTargetIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['deploy-target'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['deploy-target'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeployTargetId<TError = unknown>(
  args: InferRequestType<(typeof client)['deploy-target'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['deploy-target'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDeployTargetIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['deploy-target'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['deploy-target'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutElasticIpIdDetachKey() {
  return ['elastic-ip', '/elastic-ip/:id:detach', 'PUT'] as const
}

export function usePutElasticIpIdDetach<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['elastic-ip'][':id:detach']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['elastic-ip'][':id:detach']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutElasticIpIdDetachKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['elastic-ip'][':id:detach']['$put']> },
      ) => parseResponse(client['elastic-ip'][':id:detach'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutDbaasMysqlNameEnableWritesKey() {
  return ['dbaas-mysql', '/dbaas-mysql/:name/enable/writes', 'PUT'] as const
}

export function usePutDbaasMysqlNameEnableWrites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-mysql'][':name']['enable']['writes']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dbaas-mysql'][':name']['enable']['writes']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDbaasMysqlNameEnableWritesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['dbaas-mysql'][':name']['enable']['writes']['$put']>
        },
      ) => parseResponse(client['dbaas-mysql'][':name'].enable.writes.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDbaasKafkaServiceNameUserUsernamePasswordRevealKey(
  args: InferRequestType<
    (typeof client)['dbaas-kafka'][':service-name']['user'][':username']['password']['reveal']['$get']
  >,
) {
  return ['dbaas-kafka', '/dbaas-kafka/:service-name/user/:username/password/reveal', args] as const
}

export function useGetDbaasKafkaServiceNameUserUsernamePasswordReveal<TError = unknown>(
  args: InferRequestType<
    (typeof client)['dbaas-kafka'][':service-name']['user'][':username']['password']['reveal']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDbaasKafkaServiceNameUserUsernamePasswordRevealKey(args)
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
                (typeof client)['dbaas-kafka'][':service-name']['user'][':username']['password']['reveal']['$get']
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
          client['dbaas-kafka'][':service-name'].user[':username'].password.reveal.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasKafkaServiceNameUserUsernamePasswordReveal<TError = unknown>(
  args: InferRequestType<
    (typeof client)['dbaas-kafka'][':service-name']['user'][':username']['password']['reveal']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDbaasKafkaServiceNameUserUsernamePasswordRevealKey(args)
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
                (typeof client)['dbaas-kafka'][':service-name']['user'][':username']['password']['reveal']['$get']
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
          client['dbaas-kafka'][':service-name'].user[':username'].password.reveal.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteVpcVpcIdSubnetSubnetIdRouteIdKey() {
  return ['vpc', '/vpc/:vpc-id/subnet/:subnet-id/route/:id', 'DELETE'] as const
}

export function useDeleteVpcVpcIdSubnetSubnetIdRouteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['route'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVpcVpcIdSubnetSubnetIdRouteIdKey()
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
            (typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['route'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.vpc[':vpc-id'].subnet[':subnet-id'].route[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostKmsKeyIdEncryptKey() {
  return ['kms-key', '/kms-key/:id/encrypt', 'POST'] as const
}

export function usePostKmsKeyIdEncrypt<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['kms-key'][':id']['encrypt']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['kms-key'][':id']['encrypt']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKmsKeyIdEncryptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['kms-key'][':id']['encrypt']['$post']> },
      ) => parseResponse(client['kms-key'][':id'].encrypt.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDbaasTaskMigrationCheckServiceKey() {
  return ['dbaas-task-migration-check', '/dbaas-task-migration-check/:service', 'POST'] as const
}

export function usePostDbaasTaskMigrationCheckService<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-task-migration-check'][':service']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dbaas-task-migration-check'][':service']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDbaasTaskMigrationCheckServiceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['dbaas-task-migration-check'][':service']['$post']>
        },
      ) =>
        parseResponse(client['dbaas-task-migration-check'][':service'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDbaasExternalEndpointDatadogEndpointIdKey(
  args: InferRequestType<
    (typeof client)['dbaas-external-endpoint-datadog'][':endpoint-id']['$get']
  >,
) {
  return [
    'dbaas-external-endpoint-datadog',
    '/dbaas-external-endpoint-datadog/:endpoint-id',
    args,
  ] as const
}

export function useGetDbaasExternalEndpointDatadogEndpointId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['dbaas-external-endpoint-datadog'][':endpoint-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['dbaas-external-endpoint-datadog'][':endpoint-id']['$get']>
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
        ? getGetDbaasExternalEndpointDatadogEndpointIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['dbaas-external-endpoint-datadog'][':endpoint-id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['dbaas-external-endpoint-datadog'][':endpoint-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasExternalEndpointDatadogEndpointId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['dbaas-external-endpoint-datadog'][':endpoint-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['dbaas-external-endpoint-datadog'][':endpoint-id']['$get']>
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
        ? getGetDbaasExternalEndpointDatadogEndpointIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['dbaas-external-endpoint-datadog'][':endpoint-id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['dbaas-external-endpoint-datadog'][':endpoint-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutDbaasExternalEndpointDatadogEndpointIdKey() {
  return [
    'dbaas-external-endpoint-datadog',
    '/dbaas-external-endpoint-datadog/:endpoint-id',
    'PUT',
  ] as const
}

export function usePutDbaasExternalEndpointDatadogEndpointId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['dbaas-external-endpoint-datadog'][':endpoint-id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDbaasExternalEndpointDatadogEndpointIdKey()
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
            (typeof client)['dbaas-external-endpoint-datadog'][':endpoint-id']['$put']
          >
        },
      ) =>
        parseResponse(
          client['dbaas-external-endpoint-datadog'][':endpoint-id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteDbaasExternalEndpointDatadogEndpointIdKey() {
  return [
    'dbaas-external-endpoint-datadog',
    '/dbaas-external-endpoint-datadog/:endpoint-id',
    'DELETE',
  ] as const
}

export function useDeleteDbaasExternalEndpointDatadogEndpointId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['dbaas-external-endpoint-datadog'][':endpoint-id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDbaasExternalEndpointDatadogEndpointIdKey()
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
            (typeof client)['dbaas-external-endpoint-datadog'][':endpoint-id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['dbaas-external-endpoint-datadog'][':endpoint-id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostLoadBalancerIdServiceKey() {
  return ['load-balancer', '/load-balancer/:id/service', 'POST'] as const
}

export function usePostLoadBalancerIdService<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['load-balancer'][':id']['service']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['load-balancer'][':id']['service']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLoadBalancerIdServiceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['load-balancer'][':id']['service']['$post']> },
      ) => parseResponse(client['load-balancer'][':id'].service.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSshKeyKey() {
  return ['ssh-key', '/ssh-key'] as const
}

export function useGetSshKey<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-key']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSshKeyKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-key']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['ssh-key'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSshKey<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-key']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSshKeyKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-key']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['ssh-key'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSshKeyKey() {
  return ['ssh-key', '/ssh-key', 'POST'] as const
}

export function usePostSshKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-key']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['ssh-key']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSshKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['ssh-key']['$post']> }) =>
        parseResponse(client['ssh-key'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSnapshotIdPromoteKey() {
  return ['snapshot', '/snapshot/:id:promote', 'POST'] as const
}

export function usePostSnapshotIdPromote<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.snapshot)[':id:promote']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.snapshot)[':id:promote']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSnapshotIdPromoteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.snapshot)[':id:promote']['$post']> },
      ) => parseResponse(client.snapshot[':id:promote'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDbaasClickhouseServiceNameUserUsernamePasswordRevealKey(
  args: InferRequestType<
    (typeof client)['dbaas-clickhouse'][':service-name']['user'][':username']['password']['reveal']['$get']
  >,
) {
  return [
    'dbaas-clickhouse',
    '/dbaas-clickhouse/:service-name/user/:username/password/reveal',
    args,
  ] as const
}

export function useGetDbaasClickhouseServiceNameUserUsernamePasswordReveal<TError = unknown>(
  args: InferRequestType<
    (typeof client)['dbaas-clickhouse'][':service-name']['user'][':username']['password']['reveal']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDbaasClickhouseServiceNameUserUsernamePasswordRevealKey(args)
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
                (typeof client)['dbaas-clickhouse'][':service-name']['user'][':username']['password']['reveal']['$get']
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
          client['dbaas-clickhouse'][':service-name'].user[':username'].password.reveal.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasClickhouseServiceNameUserUsernamePasswordReveal<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['dbaas-clickhouse'][':service-name']['user'][':username']['password']['reveal']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDbaasClickhouseServiceNameUserUsernamePasswordRevealKey(args)
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
                (typeof client)['dbaas-clickhouse'][':service-name']['user'][':username']['password']['reveal']['$get']
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
          client['dbaas-clickhouse'][':service-name'].user[':username'].password.reveal.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSksClusterKey() {
  return ['sks-cluster', '/sks-cluster'] as const
}

export function useGetSksCluster<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['sks-cluster']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSksClusterKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['sks-cluster']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['sks-cluster'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSksCluster<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['sks-cluster']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSksClusterKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['sks-cluster']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['sks-cluster'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSksClusterKey() {
  return ['sks-cluster', '/sks-cluster', 'POST'] as const
}

export function usePostSksCluster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['sks-cluster']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['sks-cluster']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSksClusterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['sks-cluster']['$post']> }) =>
        parseResponse(client['sks-cluster'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBlockStorageIdDetachKey() {
  return ['block-storage', '/block-storage/:id:detach', 'PUT'] as const
}

export function usePutBlockStorageIdDetach<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['block-storage'][':id:detach']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['block-storage'][':id:detach']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBlockStorageIdDetachKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['block-storage'][':id:detach']['$put']> },
      ) => parseResponse(client['block-storage'][':id:detach'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDbaasExternalEndpointPrometheusNameKey() {
  return [
    'dbaas-external-endpoint-prometheus',
    '/dbaas-external-endpoint-prometheus/:name',
    'POST',
  ] as const
}

export function usePostDbaasExternalEndpointPrometheusName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['dbaas-external-endpoint-prometheus'][':name']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDbaasExternalEndpointPrometheusNameKey()
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
            (typeof client)['dbaas-external-endpoint-prometheus'][':name']['$post']
          >
        },
      ) =>
        parseResponse(
          client['dbaas-external-endpoint-prometheus'][':name'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetConsoleIdKey(args: InferRequestType<(typeof client.console)[':id']['$get']>) {
  return ['console', '/console/:id', args] as const
}

export function useGetConsoleId<TError = unknown>(
  args: InferRequestType<(typeof client.console)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.console)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetConsoleIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.console)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.console[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConsoleId<TError = unknown>(
  args: InferRequestType<(typeof client.console)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.console)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetConsoleIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.console)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.console[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDbaasIntegrationIdKey(
  args: InferRequestType<(typeof client)['dbaas-integration'][':id']['$get']>,
) {
  return ['dbaas-integration', '/dbaas-integration/:id', args] as const
}

export function useGetDbaasIntegrationId<TError = unknown>(
  args: InferRequestType<(typeof client)['dbaas-integration'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-integration'][':id']['$get']>>
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
        ? getGetDbaasIntegrationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-integration'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-integration'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasIntegrationId<TError = unknown>(
  args: InferRequestType<(typeof client)['dbaas-integration'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-integration'][':id']['$get']>>
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
        ? getGetDbaasIntegrationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-integration'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-integration'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDbaasIntegrationIdKey() {
  return ['dbaas-integration', '/dbaas-integration/:id', 'PUT'] as const
}

export function usePutDbaasIntegrationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-integration'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dbaas-integration'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDbaasIntegrationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['dbaas-integration'][':id']['$put']> },
      ) => parseResponse(client['dbaas-integration'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDbaasIntegrationIdKey() {
  return ['dbaas-integration', '/dbaas-integration/:id', 'DELETE'] as const
}

export function useDeleteDbaasIntegrationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-integration'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dbaas-integration'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDbaasIntegrationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['dbaas-integration'][':id']['$delete']> },
      ) => parseResponse(client['dbaas-integration'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutElasticIpIdAttachKey() {
  return ['elastic-ip', '/elastic-ip/:id:attach', 'PUT'] as const
}

export function usePutElasticIpIdAttach<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['elastic-ip'][':id:attach']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['elastic-ip'][':id:attach']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutElasticIpIdAttachKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['elastic-ip'][':id:attach']['$put']> },
      ) => parseResponse(client['elastic-ip'][':id:attach'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSksClusterIdKey(
  args: InferRequestType<(typeof client)['sks-cluster'][':id']['$get']>,
) {
  return ['sks-cluster', '/sks-cluster/:id', args] as const
}

export function useGetSksClusterId<TError = unknown>(
  args: InferRequestType<(typeof client)['sks-cluster'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['sks-cluster'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSksClusterIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['sks-cluster'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['sks-cluster'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSksClusterId<TError = unknown>(
  args: InferRequestType<(typeof client)['sks-cluster'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['sks-cluster'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSksClusterIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['sks-cluster'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['sks-cluster'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSksClusterIdKey() {
  return ['sks-cluster', '/sks-cluster/:id', 'PUT'] as const
}

export function usePutSksClusterId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['sks-cluster'][':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['sks-cluster'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSksClusterIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['sks-cluster'][':id']['$put']> },
      ) => parseResponse(client['sks-cluster'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSksClusterIdKey() {
  return ['sks-cluster', '/sks-cluster/:id', 'DELETE'] as const
}

export function useDeleteSksClusterId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['sks-cluster'][':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['sks-cluster'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSksClusterIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['sks-cluster'][':id']['$delete']> },
      ) => parseResponse(client['sks-cluster'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetQuotaKey() {
  return ['quota', '/quota'] as const
}

export function useGetQuota<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quota.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetQuotaKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quota.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quota.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuota<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quota.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetQuotaKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quota.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quota.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDbaasIntegrationSettingsIntegrationTypeSourceTypeDestTypeKey(
  args: InferRequestType<
    (typeof client)['dbaas-integration-settings'][':integration-type'][':source-type'][':dest-type']['$get']
  >,
) {
  return [
    'dbaas-integration-settings',
    '/dbaas-integration-settings/:integration-type/:source-type/:dest-type',
    args,
  ] as const
}

export function useGetDbaasIntegrationSettingsIntegrationTypeSourceTypeDestType<TError = unknown>(
  args: InferRequestType<
    (typeof client)['dbaas-integration-settings'][':integration-type'][':source-type'][':dest-type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDbaasIntegrationSettingsIntegrationTypeSourceTypeDestTypeKey(args)
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
                (typeof client)['dbaas-integration-settings'][':integration-type'][':source-type'][':dest-type']['$get']
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
          client['dbaas-integration-settings'][':integration-type'][':source-type'][
            ':dest-type'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasIntegrationSettingsIntegrationTypeSourceTypeDestType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['dbaas-integration-settings'][':integration-type'][':source-type'][':dest-type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDbaasIntegrationSettingsIntegrationTypeSourceTypeDestTypeKey(args)
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
                (typeof client)['dbaas-integration-settings'][':integration-type'][':source-type'][':dest-type']['$get']
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
          client['dbaas-integration-settings'][':integration-type'][':source-type'][
            ':dest-type'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDbaasThanosServiceNameUserUsernamePasswordRevealKey(
  args: InferRequestType<
    (typeof client)['dbaas-thanos'][':service-name']['user'][':username']['password']['reveal']['$get']
  >,
) {
  return [
    'dbaas-thanos',
    '/dbaas-thanos/:service-name/user/:username/password/reveal',
    args,
  ] as const
}

export function useGetDbaasThanosServiceNameUserUsernamePasswordReveal<TError = unknown>(
  args: InferRequestType<
    (typeof client)['dbaas-thanos'][':service-name']['user'][':username']['password']['reveal']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDbaasThanosServiceNameUserUsernamePasswordRevealKey(args)
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
                (typeof client)['dbaas-thanos'][':service-name']['user'][':username']['password']['reveal']['$get']
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
          client['dbaas-thanos'][':service-name'].user[':username'].password.reveal.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasThanosServiceNameUserUsernamePasswordReveal<TError = unknown>(
  args: InferRequestType<
    (typeof client)['dbaas-thanos'][':service-name']['user'][':username']['password']['reveal']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDbaasThanosServiceNameUserUsernamePasswordRevealKey(args)
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
                (typeof client)['dbaas-thanos'][':service-name']['user'][':username']['password']['reveal']['$get']
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
          client['dbaas-thanos'][':service-name'].user[':username'].password.reveal.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteDbaasClickhouseServiceNameUserUserUuidKey() {
  return ['dbaas-clickhouse', '/dbaas-clickhouse/:service-name/user/:user-uuid', 'DELETE'] as const
}

export function useDeleteDbaasClickhouseServiceNameUserUserUuid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['dbaas-clickhouse'][':service-name']['user'][':user-uuid']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDbaasClickhouseServiceNameUserUserUuidKey()
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
            (typeof client)['dbaas-clickhouse'][':service-name']['user'][':user-uuid']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['dbaas-clickhouse'][':service-name'].user[':user-uuid'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDbaasSettingsPgKey() {
  return ['dbaas-settings-pg', '/dbaas-settings-pg'] as const
}

export function useGetDbaasSettingsPg<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-settings-pg']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDbaasSettingsPgKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-settings-pg']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-settings-pg'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasSettingsPg<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-settings-pg']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDbaasSettingsPgKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-settings-pg']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-settings-pg'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetElasticIpIdKey(
  args: InferRequestType<(typeof client)['elastic-ip'][':id']['$get']>,
) {
  return ['elastic-ip', '/elastic-ip/:id', args] as const
}

export function useGetElasticIpId<TError = unknown>(
  args: InferRequestType<(typeof client)['elastic-ip'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['elastic-ip'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetElasticIpIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['elastic-ip'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['elastic-ip'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetElasticIpId<TError = unknown>(
  args: InferRequestType<(typeof client)['elastic-ip'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['elastic-ip'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetElasticIpIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['elastic-ip'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['elastic-ip'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutElasticIpIdKey() {
  return ['elastic-ip', '/elastic-ip/:id', 'PUT'] as const
}

export function usePutElasticIpId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['elastic-ip'][':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['elastic-ip'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutElasticIpIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['elastic-ip'][':id']['$put']> },
      ) => parseResponse(client['elastic-ip'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteElasticIpIdKey() {
  return ['elastic-ip', '/elastic-ip/:id', 'DELETE'] as const
}

export function useDeleteElasticIpId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['elastic-ip'][':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['elastic-ip'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteElasticIpIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['elastic-ip'][':id']['$delete']> },
      ) => parseResponse(client['elastic-ip'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSksClusterIdInspectionKey(
  args: InferRequestType<(typeof client)['sks-cluster'][':id']['inspection']['$get']>,
) {
  return ['sks-cluster', '/sks-cluster/:id/inspection', args] as const
}

export function useGetSksClusterIdInspection<TError = unknown>(
  args: InferRequestType<(typeof client)['sks-cluster'][':id']['inspection']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['sks-cluster'][':id']['inspection']['$get']>>
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
        ? getGetSksClusterIdInspectionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['sks-cluster'][':id']['inspection']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['sks-cluster'][':id'].inspection.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSksClusterIdInspection<TError = unknown>(
  args: InferRequestType<(typeof client)['sks-cluster'][':id']['inspection']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['sks-cluster'][':id']['inspection']['$get']>>
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
        ? getGetSksClusterIdInspectionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['sks-cluster'][':id']['inspection']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['sks-cluster'][':id'].inspection.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDbaasValkeyNameKey(
  args: InferRequestType<(typeof client)['dbaas-valkey'][':name']['$get']>,
) {
  return ['dbaas-valkey', '/dbaas-valkey/:name', args] as const
}

export function useGetDbaasValkeyName<TError = unknown>(
  args: InferRequestType<(typeof client)['dbaas-valkey'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-valkey'][':name']['$get']>>
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
        ? getGetDbaasValkeyNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-valkey'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-valkey'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasValkeyName<TError = unknown>(
  args: InferRequestType<(typeof client)['dbaas-valkey'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-valkey'][':name']['$get']>>
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
        ? getGetDbaasValkeyNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-valkey'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-valkey'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDbaasValkeyNameKey() {
  return ['dbaas-valkey', '/dbaas-valkey/:name', 'PUT'] as const
}

export function usePutDbaasValkeyName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-valkey'][':name']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dbaas-valkey'][':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDbaasValkeyNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['dbaas-valkey'][':name']['$put']> },
      ) => parseResponse(client['dbaas-valkey'][':name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDbaasValkeyNameKey() {
  return ['dbaas-valkey', '/dbaas-valkey/:name', 'POST'] as const
}

export function usePostDbaasValkeyName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-valkey'][':name']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dbaas-valkey'][':name']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDbaasValkeyNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['dbaas-valkey'][':name']['$post']> },
      ) => parseResponse(client['dbaas-valkey'][':name'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDbaasValkeyNameKey() {
  return ['dbaas-valkey', '/dbaas-valkey/:name', 'DELETE'] as const
}

export function useDeleteDbaasValkeyName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-valkey'][':name']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dbaas-valkey'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDbaasValkeyNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['dbaas-valkey'][':name']['$delete']> },
      ) => parseResponse(client['dbaas-valkey'][':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInstanceIdKey(
  args: InferRequestType<(typeof client.instance)[':id']['$get']>,
) {
  return ['instance', '/instance/:id', args] as const
}

export function useGetInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client.instance)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.instance)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetInstanceIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.instance)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instance[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client.instance)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.instance)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetInstanceIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.instance)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instance[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutInstanceIdKey() {
  return ['instance', '/instance/:id', 'PUT'] as const
}

export function usePutInstanceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.instance)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.instance)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutInstanceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.instance)[':id']['$put']> }) =>
        parseResponse(client.instance[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteInstanceIdKey() {
  return ['instance', '/instance/:id', 'DELETE'] as const
}

export function useDeleteInstanceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.instance)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.instance)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteInstanceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.instance)[':id']['$delete']> },
      ) => parseResponse(client.instance[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDbaasMysqlNameMigrationStopKey() {
  return ['dbaas-mysql', '/dbaas-mysql/:name/migration/stop', 'POST'] as const
}

export function usePostDbaasMysqlNameMigrationStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-mysql'][':name']['migration']['stop']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dbaas-mysql'][':name']['migration']['stop']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDbaasMysqlNameMigrationStopKey()
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
            (typeof client)['dbaas-mysql'][':name']['migration']['stop']['$post']
          >
        },
      ) => parseResponse(client['dbaas-mysql'][':name'].migration.stop.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVpcVpcIdSubnetIdKey(
  args: InferRequestType<(typeof client.vpc)[':vpc-id']['subnet'][':id']['$get']>,
) {
  return ['vpc', '/vpc/:vpc-id/subnet/:id', args] as const
}

export function useGetVpcVpcIdSubnetId<TError = unknown>(
  args: InferRequestType<(typeof client.vpc)[':vpc-id']['subnet'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vpc)[':vpc-id']['subnet'][':id']['$get']>>
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
        ? getGetVpcVpcIdSubnetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vpc)[':vpc-id']['subnet'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vpc[':vpc-id'].subnet[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVpcVpcIdSubnetId<TError = unknown>(
  args: InferRequestType<(typeof client.vpc)[':vpc-id']['subnet'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vpc)[':vpc-id']['subnet'][':id']['$get']>>
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
        ? getGetVpcVpcIdSubnetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vpc)[':vpc-id']['subnet'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vpc[':vpc-id'].subnet[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutVpcVpcIdSubnetIdKey() {
  return ['vpc', '/vpc/:vpc-id/subnet/:id', 'PUT'] as const
}

export function usePutVpcVpcIdSubnetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vpc)[':vpc-id']['subnet'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.vpc)[':vpc-id']['subnet'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVpcVpcIdSubnetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.vpc)[':vpc-id']['subnet'][':id']['$put']> },
      ) => parseResponse(client.vpc[':vpc-id'].subnet[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteVpcVpcIdSubnetIdKey() {
  return ['vpc', '/vpc/:vpc-id/subnet/:id', 'DELETE'] as const
}

export function useDeleteVpcVpcIdSubnetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vpc)[':vpc-id']['subnet'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.vpc)[':vpc-id']['subnet'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVpcVpcIdSubnetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.vpc)[':vpc-id']['subnet'][':id']['$delete']> },
      ) => parseResponse(client.vpc[':vpc-id'].subnet[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDbaasExternalEndpointsKey() {
  return ['dbaas-external-endpoints', '/dbaas-external-endpoints'] as const
}

export function useGetDbaasExternalEndpoints<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-external-endpoints']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDbaasExternalEndpointsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-external-endpoints']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-external-endpoints'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasExternalEndpoints<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-external-endpoints']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDbaasExternalEndpointsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-external-endpoints']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-external-endpoints'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDbaasKafkaNameMaintenanceStartKey() {
  return ['dbaas-kafka', '/dbaas-kafka/:name/maintenance/start', 'PUT'] as const
}

export function usePutDbaasKafkaNameMaintenanceStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['dbaas-kafka'][':name']['maintenance']['start']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDbaasKafkaNameMaintenanceStartKey()
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
            (typeof client)['dbaas-kafka'][':name']['maintenance']['start']['$put']
          >
        },
      ) => parseResponse(client['dbaas-kafka'][':name'].maintenance.start.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSksClusterIdRotateCcmCredentialsKey() {
  return ['sks-cluster', '/sks-cluster/:id/rotate-ccm-credentials', 'PUT'] as const
}

export function usePutSksClusterIdRotateCcmCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['sks-cluster'][':id']['rotate-ccm-credentials']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSksClusterIdRotateCcmCredentialsKey()
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
            (typeof client)['sks-cluster'][':id']['rotate-ccm-credentials']['$put']
          >
        },
      ) =>
        parseResponse(
          client['sks-cluster'][':id']['rotate-ccm-credentials'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutDbaasPostgresServiceNameConnectionPoolConnectionPoolNameKey() {
  return [
    'dbaas-postgres',
    '/dbaas-postgres/:service-name/connection-pool/:connection-pool-name',
    'PUT',
  ] as const
}

export function usePutDbaasPostgresServiceNameConnectionPoolConnectionPoolName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['dbaas-postgres'][':service-name']['connection-pool'][':connection-pool-name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDbaasPostgresServiceNameConnectionPoolConnectionPoolNameKey()
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
            (typeof client)['dbaas-postgres'][':service-name']['connection-pool'][':connection-pool-name']['$put']
          >
        },
      ) =>
        parseResponse(
          client['dbaas-postgres'][':service-name']['connection-pool'][
            ':connection-pool-name'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteDbaasPostgresServiceNameConnectionPoolConnectionPoolNameKey() {
  return [
    'dbaas-postgres',
    '/dbaas-postgres/:service-name/connection-pool/:connection-pool-name',
    'DELETE',
  ] as const
}

export function useDeleteDbaasPostgresServiceNameConnectionPoolConnectionPoolName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['dbaas-postgres'][':service-name']['connection-pool'][':connection-pool-name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDbaasPostgresServiceNameConnectionPoolConnectionPoolNameKey()
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
            (typeof client)['dbaas-postgres'][':service-name']['connection-pool'][':connection-pool-name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['dbaas-postgres'][':service-name']['connection-pool'][
            ':connection-pool-name'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKmsKeyKey() {
  return ['kms-key', '/kms-key'] as const
}

export function useGetKmsKey<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['kms-key']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetKmsKeyKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['kms-key']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['kms-key'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKmsKey<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['kms-key']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetKmsKeyKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['kms-key']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['kms-key'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostKmsKeyKey() {
  return ['kms-key', '/kms-key', 'POST'] as const
}

export function usePostKmsKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['kms-key']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['kms-key']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKmsKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['kms-key']['$post']> }) =>
        parseResponse(client['kms-key'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDbaasThanosNameKey(
  args: InferRequestType<(typeof client)['dbaas-thanos'][':name']['$get']>,
) {
  return ['dbaas-thanos', '/dbaas-thanos/:name', args] as const
}

export function useGetDbaasThanosName<TError = unknown>(
  args: InferRequestType<(typeof client)['dbaas-thanos'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-thanos'][':name']['$get']>>
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
        ? getGetDbaasThanosNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-thanos'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-thanos'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasThanosName<TError = unknown>(
  args: InferRequestType<(typeof client)['dbaas-thanos'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-thanos'][':name']['$get']>>
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
        ? getGetDbaasThanosNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-thanos'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-thanos'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDbaasThanosNameKey() {
  return ['dbaas-thanos', '/dbaas-thanos/:name', 'PUT'] as const
}

export function usePutDbaasThanosName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-thanos'][':name']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dbaas-thanos'][':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDbaasThanosNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['dbaas-thanos'][':name']['$put']> },
      ) => parseResponse(client['dbaas-thanos'][':name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDbaasThanosNameKey() {
  return ['dbaas-thanos', '/dbaas-thanos/:name', 'POST'] as const
}

export function usePostDbaasThanosName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-thanos'][':name']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dbaas-thanos'][':name']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDbaasThanosNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['dbaas-thanos'][':name']['$post']> },
      ) => parseResponse(client['dbaas-thanos'][':name'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDbaasThanosNameKey() {
  return ['dbaas-thanos', '/dbaas-thanos/:name', 'DELETE'] as const
}

export function useDeleteDbaasThanosName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-thanos'][':name']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dbaas-thanos'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDbaasThanosNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['dbaas-thanos'][':name']['$delete']> },
      ) => parseResponse(client['dbaas-thanos'][':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutIamRoleIdPolicyKey() {
  return ['iam-role', '/iam-role/:id:policy', 'PUT'] as const
}

export function usePutIamRoleIdPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['iam-role'][':id:policy']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['iam-role'][':id:policy']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIamRoleIdPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['iam-role'][':id:policy']['$put']> },
      ) => parseResponse(client['iam-role'][':id:policy'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDbaasMigrationStatusNameKey(
  args: InferRequestType<(typeof client)['dbaas-migration-status'][':name']['$get']>,
) {
  return ['dbaas-migration-status', '/dbaas-migration-status/:name', args] as const
}

export function useGetDbaasMigrationStatusName<TError = unknown>(
  args: InferRequestType<(typeof client)['dbaas-migration-status'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-migration-status'][':name']['$get']>>
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
        ? getGetDbaasMigrationStatusNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-migration-status'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['dbaas-migration-status'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasMigrationStatusName<TError = unknown>(
  args: InferRequestType<(typeof client)['dbaas-migration-status'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-migration-status'][':name']['$get']>>
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
        ? getGetDbaasMigrationStatusNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-migration-status'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['dbaas-migration-status'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteDbaasMysqlServiceNameUserUsernameKey() {
  return ['dbaas-mysql', '/dbaas-mysql/:service-name/user/:username', 'DELETE'] as const
}

export function useDeleteDbaasMysqlServiceNameUserUsername<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['dbaas-mysql'][':service-name']['user'][':username']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDbaasMysqlServiceNameUserUsernameKey()
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
            (typeof client)['dbaas-mysql'][':service-name']['user'][':username']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['dbaas-mysql'][':service-name'].user[':username'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutSksClusterIdGenerateKarpenterNodepoolKey() {
  return ['sks-cluster', '/sks-cluster/:id/generate-karpenter-nodepool', 'PUT'] as const
}

export function usePutSksClusterIdGenerateKarpenterNodepool<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['sks-cluster'][':id']['generate-karpenter-nodepool']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSksClusterIdGenerateKarpenterNodepoolKey()
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
            (typeof client)['sks-cluster'][':id']['generate-karpenter-nodepool']['$put']
          >
        },
      ) =>
        parseResponse(
          client['sks-cluster'][':id']['generate-karpenter-nodepool'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetLoadBalancerIdKey(
  args: InferRequestType<(typeof client)['load-balancer'][':id']['$get']>,
) {
  return ['load-balancer', '/load-balancer/:id', args] as const
}

export function useGetLoadBalancerId<TError = unknown>(
  args: InferRequestType<(typeof client)['load-balancer'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['load-balancer'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetLoadBalancerIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['load-balancer'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['load-balancer'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLoadBalancerId<TError = unknown>(
  args: InferRequestType<(typeof client)['load-balancer'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['load-balancer'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetLoadBalancerIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['load-balancer'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['load-balancer'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutLoadBalancerIdKey() {
  return ['load-balancer', '/load-balancer/:id', 'PUT'] as const
}

export function usePutLoadBalancerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['load-balancer'][':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['load-balancer'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLoadBalancerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['load-balancer'][':id']['$put']> },
      ) => parseResponse(client['load-balancer'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteLoadBalancerIdKey() {
  return ['load-balancer', '/load-balancer/:id', 'DELETE'] as const
}

export function useDeleteLoadBalancerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['load-balancer'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['load-balancer'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLoadBalancerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['load-balancer'][':id']['$delete']> },
      ) => parseResponse(client['load-balancer'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDbaasServiceNameKey() {
  return ['dbaas-service', '/dbaas-service/:name', 'DELETE'] as const
}

export function useDeleteDbaasServiceName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-service'][':name']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dbaas-service'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDbaasServiceNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['dbaas-service'][':name']['$delete']> },
      ) => parseResponse(client['dbaas-service'][':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutVpcVpcIdSubnetSubnetIdDetachKey() {
  return ['vpc', '/vpc/:vpc-id/subnet/:subnet-id/detach', 'PUT'] as const
}

export function usePutVpcVpcIdSubnetSubnetIdDetach<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['detach']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVpcVpcIdSubnetSubnetIdDetachKey()
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
            (typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['detach']['$put']
          >
        },
      ) =>
        parseResponse(client.vpc[':vpc-id'].subnet[':subnet-id'].detach.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDbaasMysqlServiceNameDatabaseKey() {
  return ['dbaas-mysql', '/dbaas-mysql/:service-name/database', 'POST'] as const
}

export function usePostDbaasMysqlServiceNameDatabase<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-mysql'][':service-name']['database']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dbaas-mysql'][':service-name']['database']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDbaasMysqlServiceNameDatabaseKey()
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
            (typeof client)['dbaas-mysql'][':service-name']['database']['$post']
          >
        },
      ) => parseResponse(client['dbaas-mysql'][':service-name'].database.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTemplateKey(args: InferRequestType<typeof client.template.$get>) {
  return ['template', '/template', args] as const
}

export function useGetTemplate<TError = unknown>(
  args: InferRequestType<typeof client.template.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.template.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTemplateKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.template.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.template.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetTemplate<TError = unknown>(
  args: InferRequestType<typeof client.template.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.template.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTemplateKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.template.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.template.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostTemplateKey() {
  return ['template', '/template', 'POST'] as const
}

export function usePostTemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.template.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.template.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.template.$post> }) =>
        parseResponse(client.template.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutInstanceIdRebootKey() {
  return ['instance', '/instance/:id:reboot', 'PUT'] as const
}

export function usePutInstanceIdReboot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.instance)[':id:reboot']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.instance)[':id:reboot']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutInstanceIdRebootKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.instance)[':id:reboot']['$put']> },
      ) => parseResponse(client.instance[':id:reboot'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEnvironmentalImpactReportKey(
  args: InferRequestType<(typeof client)['environmental-impact']['report']['$get']>,
) {
  return ['environmental-impact', '/environmental-impact/report', args] as const
}

export function useGetEnvironmentalImpactReport<TError = unknown>(
  args: InferRequestType<(typeof client)['environmental-impact']['report']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['environmental-impact']['report']['$get']>>
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
        ? getGetEnvironmentalImpactReportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['environmental-impact']['report']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['environmental-impact'].report.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnvironmentalImpactReport<TError = unknown>(
  args: InferRequestType<(typeof client)['environmental-impact']['report']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['environmental-impact']['report']['$get']>>
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
        ? getGetEnvironmentalImpactReportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['environmental-impact']['report']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['environmental-impact'].report.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDbaasSettingsKafkaKey() {
  return ['dbaas-settings-kafka', '/dbaas-settings-kafka'] as const
}

export function useGetDbaasSettingsKafka<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-settings-kafka']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDbaasSettingsKafkaKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-settings-kafka']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-settings-kafka'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasSettingsKafka<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-settings-kafka']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDbaasSettingsKafkaKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-settings-kafka']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-settings-kafka'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDbaasPostgresServiceNameUserUsernamePasswordRevealKey(
  args: InferRequestType<
    (typeof client)['dbaas-postgres'][':service-name']['user'][':username']['password']['reveal']['$get']
  >,
) {
  return [
    'dbaas-postgres',
    '/dbaas-postgres/:service-name/user/:username/password/reveal',
    args,
  ] as const
}

export function useGetDbaasPostgresServiceNameUserUsernamePasswordReveal<TError = unknown>(
  args: InferRequestType<
    (typeof client)['dbaas-postgres'][':service-name']['user'][':username']['password']['reveal']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDbaasPostgresServiceNameUserUsernamePasswordRevealKey(args)
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
                (typeof client)['dbaas-postgres'][':service-name']['user'][':username']['password']['reveal']['$get']
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
          client['dbaas-postgres'][':service-name'].user[':username'].password.reveal.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasPostgresServiceNameUserUsernamePasswordReveal<TError = unknown>(
  args: InferRequestType<
    (typeof client)['dbaas-postgres'][':service-name']['user'][':username']['password']['reveal']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDbaasPostgresServiceNameUserUsernamePasswordRevealKey(args)
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
                (typeof client)['dbaas-postgres'][':service-name']['user'][':username']['password']['reveal']['$get']
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
          client['dbaas-postgres'][':service-name'].user[':username'].password.reveal.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostIamOrganizationPolicyResetKey() {
  return ['iam-organization-policy:reset', '/iam-organization-policy:reset', 'POST'] as const
}

export function usePostIamOrganizationPolicyReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['iam-organization-policy:reset']['$post']>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIamOrganizationPolicyResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client['iam-organization-policy:reset'].$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDbaasSettingsOpensearchKey() {
  return ['dbaas-settings-opensearch', '/dbaas-settings-opensearch'] as const
}

export function useGetDbaasSettingsOpensearch<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-settings-opensearch']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDbaasSettingsOpensearchKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-settings-opensearch']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-settings-opensearch'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasSettingsOpensearch<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-settings-opensearch']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDbaasSettingsOpensearchKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-settings-opensearch']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-settings-opensearch'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDbaasExternalEndpointSourceServiceNameAttachKey() {
  return [
    'dbaas-external-endpoint',
    '/dbaas-external-endpoint/:source-service-name/attach',
    'PUT',
  ] as const
}

export function usePutDbaasExternalEndpointSourceServiceNameAttach<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['dbaas-external-endpoint'][':source-service-name']['attach']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDbaasExternalEndpointSourceServiceNameAttachKey()
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
            (typeof client)['dbaas-external-endpoint'][':source-service-name']['attach']['$put']
          >
        },
      ) =>
        parseResponse(
          client['dbaas-external-endpoint'][':source-service-name'].attach.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostKmsKeyIdScheduleDeletionKey() {
  return ['kms-key', '/kms-key/:id/schedule-deletion', 'POST'] as const
}

export function usePostKmsKeyIdScheduleDeletion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['kms-key'][':id']['schedule-deletion']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['kms-key'][':id']['schedule-deletion']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKmsKeyIdScheduleDeletionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['kms-key'][':id']['schedule-deletion']['$post']>
        },
      ) => parseResponse(client['kms-key'][':id']['schedule-deletion'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDbaasGrafanaNameKey(
  args: InferRequestType<(typeof client)['dbaas-grafana'][':name']['$get']>,
) {
  return ['dbaas-grafana', '/dbaas-grafana/:name', args] as const
}

export function useGetDbaasGrafanaName<TError = unknown>(
  args: InferRequestType<(typeof client)['dbaas-grafana'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-grafana'][':name']['$get']>>
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
        ? getGetDbaasGrafanaNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-grafana'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-grafana'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasGrafanaName<TError = unknown>(
  args: InferRequestType<(typeof client)['dbaas-grafana'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-grafana'][':name']['$get']>>
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
        ? getGetDbaasGrafanaNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-grafana'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-grafana'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDbaasGrafanaNameKey() {
  return ['dbaas-grafana', '/dbaas-grafana/:name', 'PUT'] as const
}

export function usePutDbaasGrafanaName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-grafana'][':name']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dbaas-grafana'][':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDbaasGrafanaNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['dbaas-grafana'][':name']['$put']> },
      ) => parseResponse(client['dbaas-grafana'][':name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDbaasGrafanaNameKey() {
  return ['dbaas-grafana', '/dbaas-grafana/:name', 'POST'] as const
}

export function usePostDbaasGrafanaName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-grafana'][':name']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dbaas-grafana'][':name']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDbaasGrafanaNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['dbaas-grafana'][':name']['$post']> },
      ) => parseResponse(client['dbaas-grafana'][':name'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDbaasGrafanaNameKey() {
  return ['dbaas-grafana', '/dbaas-grafana/:name', 'DELETE'] as const
}

export function useDeleteDbaasGrafanaName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-grafana'][':name']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dbaas-grafana'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDbaasGrafanaNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['dbaas-grafana'][':name']['$delete']> },
      ) => parseResponse(client['dbaas-grafana'][':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDbaasExternalEndpointRsyslogEndpointIdKey(
  args: InferRequestType<
    (typeof client)['dbaas-external-endpoint-rsyslog'][':endpoint-id']['$get']
  >,
) {
  return [
    'dbaas-external-endpoint-rsyslog',
    '/dbaas-external-endpoint-rsyslog/:endpoint-id',
    args,
  ] as const
}

export function useGetDbaasExternalEndpointRsyslogEndpointId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['dbaas-external-endpoint-rsyslog'][':endpoint-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['dbaas-external-endpoint-rsyslog'][':endpoint-id']['$get']>
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
        ? getGetDbaasExternalEndpointRsyslogEndpointIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['dbaas-external-endpoint-rsyslog'][':endpoint-id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['dbaas-external-endpoint-rsyslog'][':endpoint-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasExternalEndpointRsyslogEndpointId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['dbaas-external-endpoint-rsyslog'][':endpoint-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['dbaas-external-endpoint-rsyslog'][':endpoint-id']['$get']>
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
        ? getGetDbaasExternalEndpointRsyslogEndpointIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['dbaas-external-endpoint-rsyslog'][':endpoint-id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['dbaas-external-endpoint-rsyslog'][':endpoint-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutDbaasExternalEndpointRsyslogEndpointIdKey() {
  return [
    'dbaas-external-endpoint-rsyslog',
    '/dbaas-external-endpoint-rsyslog/:endpoint-id',
    'PUT',
  ] as const
}

export function usePutDbaasExternalEndpointRsyslogEndpointId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['dbaas-external-endpoint-rsyslog'][':endpoint-id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDbaasExternalEndpointRsyslogEndpointIdKey()
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
            (typeof client)['dbaas-external-endpoint-rsyslog'][':endpoint-id']['$put']
          >
        },
      ) =>
        parseResponse(
          client['dbaas-external-endpoint-rsyslog'][':endpoint-id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteDbaasExternalEndpointRsyslogEndpointIdKey() {
  return [
    'dbaas-external-endpoint-rsyslog',
    '/dbaas-external-endpoint-rsyslog/:endpoint-id',
    'DELETE',
  ] as const
}

export function useDeleteDbaasExternalEndpointRsyslogEndpointId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['dbaas-external-endpoint-rsyslog'][':endpoint-id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDbaasExternalEndpointRsyslogEndpointIdKey()
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
            (typeof client)['dbaas-external-endpoint-rsyslog'][':endpoint-id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['dbaas-external-endpoint-rsyslog'][':endpoint-id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutSksClusterIdGenerateKarpenterExoscaleNodeclassKey() {
  return ['sks-cluster', '/sks-cluster/:id/generate-karpenter-exoscale-nodeclass', 'PUT'] as const
}

export function usePutSksClusterIdGenerateKarpenterExoscaleNodeclass<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['sks-cluster'][':id']['generate-karpenter-exoscale-nodeclass']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSksClusterIdGenerateKarpenterExoscaleNodeclassKey()
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
            (typeof client)['sks-cluster'][':id']['generate-karpenter-exoscale-nodeclass']['$put']
          >
        },
      ) =>
        parseResponse(
          client['sks-cluster'][':id']['generate-karpenter-exoscale-nodeclass'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSksClusterIdNodepoolKey() {
  return ['sks-cluster', '/sks-cluster/:id/nodepool', 'POST'] as const
}

export function usePostSksClusterIdNodepool<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['sks-cluster'][':id']['nodepool']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['sks-cluster'][':id']['nodepool']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSksClusterIdNodepoolKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['sks-cluster'][':id']['nodepool']['$post']> },
      ) => parseResponse(client['sks-cluster'][':id'].nodepool.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDbaasExternalEndpointElasticsearchNameKey() {
  return [
    'dbaas-external-endpoint-elasticsearch',
    '/dbaas-external-endpoint-elasticsearch/:name',
    'POST',
  ] as const
}

export function usePostDbaasExternalEndpointElasticsearchName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['dbaas-external-endpoint-elasticsearch'][':name']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDbaasExternalEndpointElasticsearchNameKey()
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
            (typeof client)['dbaas-external-endpoint-elasticsearch'][':name']['$post']
          >
        },
      ) =>
        parseResponse(
          client['dbaas-external-endpoint-elasticsearch'][':name'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAiApiKeyIdRevealKey(
  args: InferRequestType<(typeof client.ai)['api-key'][':id']['reveal']['$get']>,
) {
  return ['ai', '/ai/api-key/:id/reveal', args] as const
}

export function useGetAiApiKeyIdReveal<TError = unknown>(
  args: InferRequestType<(typeof client.ai)['api-key'][':id']['reveal']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ai)['api-key'][':id']['reveal']['$get']>>
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
        ? getGetAiApiKeyIdRevealKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ai)['api-key'][':id']['reveal']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ai['api-key'][':id'].reveal.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAiApiKeyIdReveal<TError = unknown>(
  args: InferRequestType<(typeof client.ai)['api-key'][':id']['reveal']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ai)['api-key'][':id']['reveal']['$get']>>
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
        ? getGetAiApiKeyIdRevealKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ai)['api-key'][':id']['reveal']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ai['api-key'][':id'].reveal.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDbaasOpensearchNameMaintenanceStartKey() {
  return ['dbaas-opensearch', '/dbaas-opensearch/:name/maintenance/start', 'PUT'] as const
}

export function usePutDbaasOpensearchNameMaintenanceStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['dbaas-opensearch'][':name']['maintenance']['start']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDbaasOpensearchNameMaintenanceStartKey()
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
            (typeof client)['dbaas-opensearch'][':name']['maintenance']['start']['$put']
          >
        },
      ) =>
        parseResponse(
          client['dbaas-opensearch'][':name'].maintenance.start.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDbaasKafkaNameAclConfigKey(
  args: InferRequestType<(typeof client)['dbaas-kafka'][':name']['acl-config']['$get']>,
) {
  return ['dbaas-kafka', '/dbaas-kafka/:name/acl-config', args] as const
}

export function useGetDbaasKafkaNameAclConfig<TError = unknown>(
  args: InferRequestType<(typeof client)['dbaas-kafka'][':name']['acl-config']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-kafka'][':name']['acl-config']['$get']>>
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
        ? getGetDbaasKafkaNameAclConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-kafka'][':name']['acl-config']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['dbaas-kafka'][':name']['acl-config'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasKafkaNameAclConfig<TError = unknown>(
  args: InferRequestType<(typeof client)['dbaas-kafka'][':name']['acl-config']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-kafka'][':name']['acl-config']['$get']>>
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
        ? getGetDbaasKafkaNameAclConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-kafka'][':name']['acl-config']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['dbaas-kafka'][':name']['acl-config'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDbaasKafkaServiceNameUserUsernamePasswordResetKey() {
  return ['dbaas-kafka', '/dbaas-kafka/:service-name/user/:username/password/reset', 'PUT'] as const
}

export function usePutDbaasKafkaServiceNameUserUsernamePasswordReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['dbaas-kafka'][':service-name']['user'][':username']['password']['reset']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDbaasKafkaServiceNameUserUsernamePasswordResetKey()
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
            (typeof client)['dbaas-kafka'][':service-name']['user'][':username']['password']['reset']['$put']
          >
        },
      ) =>
        parseResponse(
          client['dbaas-kafka'][':service-name'].user[':username'].password.reset.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAiApiKeyKey() {
  return ['ai', '/ai/api-key'] as const
}

export function useGetAiApiKey<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ai)['api-key']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAiApiKeyKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ai)['api-key']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ai['api-key'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAiApiKey<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ai)['api-key']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAiApiKeyKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ai)['api-key']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ai['api-key'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAiApiKeyKey() {
  return ['ai', '/ai/api-key', 'POST'] as const
}

export function usePostAiApiKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ai)['api-key']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ai)['api-key']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAiApiKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.ai)['api-key']['$post']> }) =>
        parseResponse(client.ai['api-key'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostKmsKeyIdReEncryptKey() {
  return ['kms-key', '/kms-key/:id/re-encrypt', 'POST'] as const
}

export function usePostKmsKeyIdReEncrypt<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['kms-key'][':id']['re-encrypt']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['kms-key'][':id']['re-encrypt']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKmsKeyIdReEncryptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['kms-key'][':id']['re-encrypt']['$post']> },
      ) => parseResponse(client['kms-key'][':id']['re-encrypt'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDbaasOpensearchServiceNameUserUsernamePasswordRevealKey(
  args: InferRequestType<
    (typeof client)['dbaas-opensearch'][':service-name']['user'][':username']['password']['reveal']['$get']
  >,
) {
  return [
    'dbaas-opensearch',
    '/dbaas-opensearch/:service-name/user/:username/password/reveal',
    args,
  ] as const
}

export function useGetDbaasOpensearchServiceNameUserUsernamePasswordReveal<TError = unknown>(
  args: InferRequestType<
    (typeof client)['dbaas-opensearch'][':service-name']['user'][':username']['password']['reveal']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDbaasOpensearchServiceNameUserUsernamePasswordRevealKey(args)
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
                (typeof client)['dbaas-opensearch'][':service-name']['user'][':username']['password']['reveal']['$get']
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
          client['dbaas-opensearch'][':service-name'].user[':username'].password.reveal.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasOpensearchServiceNameUserUsernamePasswordReveal<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['dbaas-opensearch'][':service-name']['user'][':username']['password']['reveal']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDbaasOpensearchServiceNameUserUsernamePasswordRevealKey(args)
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
                (typeof client)['dbaas-opensearch'][':service-name']['user'][':username']['password']['reveal']['$get']
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
          client['dbaas-opensearch'][':service-name'].user[':username'].password.reveal.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutDbaasValkeyNameMaintenanceStartKey() {
  return ['dbaas-valkey', '/dbaas-valkey/:name/maintenance/start', 'PUT'] as const
}

export function usePutDbaasValkeyNameMaintenanceStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['dbaas-valkey'][':name']['maintenance']['start']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDbaasValkeyNameMaintenanceStartKey()
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
            (typeof client)['dbaas-valkey'][':name']['maintenance']['start']['$put']
          >
        },
      ) =>
        parseResponse(client['dbaas-valkey'][':name'].maintenance.start.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDbaasOpensearchNameKey(
  args: InferRequestType<(typeof client)['dbaas-opensearch'][':name']['$get']>,
) {
  return ['dbaas-opensearch', '/dbaas-opensearch/:name', args] as const
}

export function useGetDbaasOpensearchName<TError = unknown>(
  args: InferRequestType<(typeof client)['dbaas-opensearch'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-opensearch'][':name']['$get']>>
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
        ? getGetDbaasOpensearchNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-opensearch'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-opensearch'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasOpensearchName<TError = unknown>(
  args: InferRequestType<(typeof client)['dbaas-opensearch'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-opensearch'][':name']['$get']>>
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
        ? getGetDbaasOpensearchNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-opensearch'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-opensearch'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDbaasOpensearchNameKey() {
  return ['dbaas-opensearch', '/dbaas-opensearch/:name', 'PUT'] as const
}

export function usePutDbaasOpensearchName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-opensearch'][':name']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dbaas-opensearch'][':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDbaasOpensearchNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['dbaas-opensearch'][':name']['$put']> },
      ) => parseResponse(client['dbaas-opensearch'][':name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDbaasOpensearchNameKey() {
  return ['dbaas-opensearch', '/dbaas-opensearch/:name', 'POST'] as const
}

export function usePostDbaasOpensearchName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-opensearch'][':name']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dbaas-opensearch'][':name']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDbaasOpensearchNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['dbaas-opensearch'][':name']['$post']> },
      ) => parseResponse(client['dbaas-opensearch'][':name'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDbaasOpensearchNameKey() {
  return ['dbaas-opensearch', '/dbaas-opensearch/:name', 'DELETE'] as const
}

export function useDeleteDbaasOpensearchName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-opensearch'][':name']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dbaas-opensearch'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDbaasOpensearchNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['dbaas-opensearch'][':name']['$delete']> },
      ) => parseResponse(client['dbaas-opensearch'][':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutDbaasExternalEndpointSourceServiceNameDetachKey() {
  return [
    'dbaas-external-endpoint',
    '/dbaas-external-endpoint/:source-service-name/detach',
    'PUT',
  ] as const
}

export function usePutDbaasExternalEndpointSourceServiceNameDetach<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['dbaas-external-endpoint'][':source-service-name']['detach']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDbaasExternalEndpointSourceServiceNameDetachKey()
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
            (typeof client)['dbaas-external-endpoint'][':source-service-name']['detach']['$put']
          >
        },
      ) =>
        parseResponse(
          client['dbaas-external-endpoint'][':source-service-name'].detach.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDbaasValkeyServiceNameUserUsernamePasswordRevealKey(
  args: InferRequestType<
    (typeof client)['dbaas-valkey'][':service-name']['user'][':username']['password']['reveal']['$get']
  >,
) {
  return [
    'dbaas-valkey',
    '/dbaas-valkey/:service-name/user/:username/password/reveal',
    args,
  ] as const
}

export function useGetDbaasValkeyServiceNameUserUsernamePasswordReveal<TError = unknown>(
  args: InferRequestType<
    (typeof client)['dbaas-valkey'][':service-name']['user'][':username']['password']['reveal']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDbaasValkeyServiceNameUserUsernamePasswordRevealKey(args)
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
                (typeof client)['dbaas-valkey'][':service-name']['user'][':username']['password']['reveal']['$get']
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
          client['dbaas-valkey'][':service-name'].user[':username'].password.reveal.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasValkeyServiceNameUserUsernamePasswordReveal<TError = unknown>(
  args: InferRequestType<
    (typeof client)['dbaas-valkey'][':service-name']['user'][':username']['password']['reveal']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDbaasValkeyServiceNameUserUsernamePasswordRevealKey(args)
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
                (typeof client)['dbaas-valkey'][':service-name']['user'][':username']['password']['reveal']['$get']
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
          client['dbaas-valkey'][':service-name'].user[':username'].password.reveal.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAiQuotaKey() {
  return ['ai', '/ai/quota'] as const
}

export function useGetAiQuota<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.quota.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAiQuotaKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.quota.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ai.quota.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAiQuota<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.quota.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAiQuotaKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.quota.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ai.quota.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDbaasPostgresNameKey(
  args: InferRequestType<(typeof client)['dbaas-postgres'][':name']['$get']>,
) {
  return ['dbaas-postgres', '/dbaas-postgres/:name', args] as const
}

export function useGetDbaasPostgresName<TError = unknown>(
  args: InferRequestType<(typeof client)['dbaas-postgres'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-postgres'][':name']['$get']>>
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
        ? getGetDbaasPostgresNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-postgres'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-postgres'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasPostgresName<TError = unknown>(
  args: InferRequestType<(typeof client)['dbaas-postgres'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-postgres'][':name']['$get']>>
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
        ? getGetDbaasPostgresNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-postgres'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-postgres'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDbaasPostgresNameKey() {
  return ['dbaas-postgres', '/dbaas-postgres/:name', 'PUT'] as const
}

export function usePutDbaasPostgresName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-postgres'][':name']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dbaas-postgres'][':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDbaasPostgresNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['dbaas-postgres'][':name']['$put']> },
      ) => parseResponse(client['dbaas-postgres'][':name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDbaasPostgresNameKey() {
  return ['dbaas-postgres', '/dbaas-postgres/:name', 'POST'] as const
}

export function usePostDbaasPostgresName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-postgres'][':name']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dbaas-postgres'][':name']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDbaasPostgresNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['dbaas-postgres'][':name']['$post']> },
      ) => parseResponse(client['dbaas-postgres'][':name'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDbaasPostgresNameKey() {
  return ['dbaas-postgres', '/dbaas-postgres/:name', 'DELETE'] as const
}

export function useDeleteDbaasPostgresName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-postgres'][':name']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dbaas-postgres'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDbaasPostgresNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['dbaas-postgres'][':name']['$delete']> },
      ) => parseResponse(client['dbaas-postgres'][':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDbaasValkeyServiceNameUserKey(
  args: InferRequestType<(typeof client)['dbaas-valkey'][':service-name']['user']['$get']>,
) {
  return ['dbaas-valkey', '/dbaas-valkey/:service-name/user', args] as const
}

export function useGetDbaasValkeyServiceNameUser<TError = unknown>(
  args: InferRequestType<(typeof client)['dbaas-valkey'][':service-name']['user']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-valkey'][':service-name']['user']['$get']>>
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
        ? getGetDbaasValkeyServiceNameUserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-valkey'][':service-name']['user']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['dbaas-valkey'][':service-name'].user.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasValkeyServiceNameUser<TError = unknown>(
  args: InferRequestType<(typeof client)['dbaas-valkey'][':service-name']['user']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-valkey'][':service-name']['user']['$get']>>
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
        ? getGetDbaasValkeyServiceNameUserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-valkey'][':service-name']['user']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['dbaas-valkey'][':service-name'].user.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDbaasValkeyServiceNameUserKey() {
  return ['dbaas-valkey', '/dbaas-valkey/:service-name/user', 'POST'] as const
}

export function usePostDbaasValkeyServiceNameUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dbaas-valkey'][':service-name']['user']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dbaas-valkey'][':service-name']['user']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDbaasValkeyServiceNameUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['dbaas-valkey'][':service-name']['user']['$post']>
        },
      ) => parseResponse(client['dbaas-valkey'][':service-name'].user.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSksClusterIdRotateKarpenterCredentialsKey() {
  return ['sks-cluster', '/sks-cluster/:id/rotate-karpenter-credentials', 'PUT'] as const
}

export function usePutSksClusterIdRotateKarpenterCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['sks-cluster'][':id']['rotate-karpenter-credentials']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSksClusterIdRotateKarpenterCredentialsKey()
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
            (typeof client)['sks-cluster'][':id']['rotate-karpenter-credentials']['$put']
          >
        },
      ) =>
        parseResponse(
          client['sks-cluster'][':id']['rotate-karpenter-credentials'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDbaasIntegrationKey() {
  return ['dbaas-integration', '/dbaas-integration', 'POST'] as const
}

export function usePostDbaasIntegration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dbaas-integration']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dbaas-integration']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDbaasIntegrationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['dbaas-integration']['$post']> },
      ) => parseResponse(client['dbaas-integration'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDbaasTaskServiceIdKey(
  args: InferRequestType<(typeof client)['dbaas-task'][':service'][':id']['$get']>,
) {
  return ['dbaas-task', '/dbaas-task/:service/:id', args] as const
}

export function useGetDbaasTaskServiceId<TError = unknown>(
  args: InferRequestType<(typeof client)['dbaas-task'][':service'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-task'][':service'][':id']['$get']>>
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
        ? getGetDbaasTaskServiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-task'][':service'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-task'][':service'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDbaasTaskServiceId<TError = unknown>(
  args: InferRequestType<(typeof client)['dbaas-task'][':service'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-task'][':service'][':id']['$get']>>
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
        ? getGetDbaasTaskServiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dbaas-task'][':service'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dbaas-task'][':service'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSosBucketPresignedUrlKey(
  args: InferRequestType<(typeof client.sos)[':bucket']['presigned-url']['$get']>,
) {
  return ['sos', '/sos/:bucket/presigned-url', args] as const
}

export function useGetSosBucketPresignedUrl<TError = unknown>(
  args: InferRequestType<(typeof client.sos)[':bucket']['presigned-url']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sos)[':bucket']['presigned-url']['$get']>>
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
        ? getGetSosBucketPresignedUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sos)[':bucket']['presigned-url']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sos[':bucket']['presigned-url'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSosBucketPresignedUrl<TError = unknown>(
  args: InferRequestType<(typeof client.sos)[':bucket']['presigned-url']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sos)[':bucket']['presigned-url']['$get']>>
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
        ? getGetSosBucketPresignedUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sos)[':bucket']['presigned-url']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sos[':bucket']['presigned-url'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSksClusterIdRotateOperatorsCaKey() {
  return ['sks-cluster', '/sks-cluster/:id/rotate-operators-ca', 'PUT'] as const
}

export function usePutSksClusterIdRotateOperatorsCa<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['sks-cluster'][':id']['rotate-operators-ca']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['sks-cluster'][':id']['rotate-operators-ca']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSksClusterIdRotateOperatorsCaKey()
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
            (typeof client)['sks-cluster'][':id']['rotate-operators-ca']['$put']
          >
        },
      ) =>
        parseResponse(client['sks-cluster'][':id']['rotate-operators-ca'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAiDeploymentIdApiKeyKey(
  args: InferRequestType<(typeof client.ai.deployment)[':id']['api-key']['$get']>,
) {
  return ['ai', '/ai/deployment/:id/api-key', args] as const
}

export function useGetAiDeploymentIdApiKey<TError = unknown>(
  args: InferRequestType<(typeof client.ai.deployment)[':id']['api-key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ai.deployment)[':id']['api-key']['$get']>>
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
        ? getGetAiDeploymentIdApiKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ai.deployment)[':id']['api-key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ai.deployment[':id']['api-key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAiDeploymentIdApiKey<TError = unknown>(
  args: InferRequestType<(typeof client.ai.deployment)[':id']['api-key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ai.deployment)[':id']['api-key']['$get']>>
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
        ? getGetAiDeploymentIdApiKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ai.deployment)[':id']['api-key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ai.deployment[':id']['api-key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAntiAffinityGroupIdKey(
  args: InferRequestType<(typeof client)['anti-affinity-group'][':id']['$get']>,
) {
  return ['anti-affinity-group', '/anti-affinity-group/:id', args] as const
}

export function useGetAntiAffinityGroupId<TError = unknown>(
  args: InferRequestType<(typeof client)['anti-affinity-group'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['anti-affinity-group'][':id']['$get']>>
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
        ? getGetAntiAffinityGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['anti-affinity-group'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['anti-affinity-group'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAntiAffinityGroupId<TError = unknown>(
  args: InferRequestType<(typeof client)['anti-affinity-group'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['anti-affinity-group'][':id']['$get']>>
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
        ? getGetAntiAffinityGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['anti-affinity-group'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['anti-affinity-group'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAntiAffinityGroupIdKey() {
  return ['anti-affinity-group', '/anti-affinity-group/:id', 'DELETE'] as const
}

export function useDeleteAntiAffinityGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['anti-affinity-group'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['anti-affinity-group'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAntiAffinityGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['anti-affinity-group'][':id']['$delete']> },
      ) => parseResponse(client['anti-affinity-group'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostKmsKeyIdReplicateKey() {
  return ['kms-key', '/kms-key/:id/replicate', 'POST'] as const
}

export function usePostKmsKeyIdReplicate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['kms-key'][':id']['replicate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['kms-key'][':id']['replicate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKmsKeyIdReplicateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['kms-key'][':id']['replicate']['$post']> },
      ) => parseResponse(client['kms-key'][':id'].replicate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSksClusterVersionKey(
  args: InferRequestType<(typeof client)['sks-cluster-version']['$get']>,
) {
  return ['sks-cluster-version', '/sks-cluster-version', args] as const
}

export function useGetSksClusterVersion<TError = unknown>(
  args: InferRequestType<(typeof client)['sks-cluster-version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['sks-cluster-version']['$get']>>>
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
        ? getGetSksClusterVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['sks-cluster-version']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['sks-cluster-version'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSksClusterVersion<TError = unknown>(
  args: InferRequestType<(typeof client)['sks-cluster-version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['sks-cluster-version']['$get']>>>
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
        ? getGetSksClusterVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['sks-cluster-version']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['sks-cluster-version'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInstanceKey(args: InferRequestType<typeof client.instance.$get>) {
  return ['instance', '/instance', args] as const
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

export function getPostInstanceKey() {
  return ['instance', '/instance', 'POST'] as const
}

export function usePostInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instance.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.instance.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInstanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.instance.$post> }) =>
        parseResponse(client.instance.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIamRoleKey() {
  return ['iam-role', '/iam-role'] as const
}

export function useGetIamRole<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['iam-role']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIamRoleKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['iam-role']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['iam-role'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIamRole<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['iam-role']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIamRoleKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['iam-role']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['iam-role'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIamRoleKey() {
  return ['iam-role', '/iam-role', 'POST'] as const
}

export function usePostIamRole<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['iam-role']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['iam-role']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIamRoleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['iam-role']['$post']> }) =>
        parseResponse(client['iam-role'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePrivateNetworkIdFieldKey() {
  return ['private-network', '/private-network/:id/:field', 'DELETE'] as const
}

export function useDeletePrivateNetworkIdField<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['private-network'][':id'][':field']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['private-network'][':id'][':field']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePrivateNetworkIdFieldKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['private-network'][':id'][':field']['$delete']>
        },
      ) => parseResponse(client['private-network'][':id'][':field'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserKey() {
  return ['user', '/user'] as const
}

export function useGetUser<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetUserKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUser<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetUserKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserKey() {
  return ['user', '/user', 'POST'] as const
}

export function usePostUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.user.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.user.$post> }) =>
        parseResponse(client.user.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutDbaasClickhouseNameMaintenanceStartKey() {
  return ['dbaas-clickhouse', '/dbaas-clickhouse/:name/maintenance/start', 'PUT'] as const
}

export function usePutDbaasClickhouseNameMaintenanceStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['dbaas-clickhouse'][':name']['maintenance']['start']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDbaasClickhouseNameMaintenanceStartKey()
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
            (typeof client)['dbaas-clickhouse'][':name']['maintenance']['start']['$put']
          >
        },
      ) =>
        parseResponse(
          client['dbaas-clickhouse'][':name'].maintenance.start.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAiDeploymentIdLogsKey(
  args: InferRequestType<(typeof client.ai.deployment)[':id']['logs']['$get']>,
) {
  return ['ai', '/ai/deployment/:id/logs', args] as const
}

export function useGetAiDeploymentIdLogs<TError = unknown>(
  args: InferRequestType<(typeof client.ai.deployment)[':id']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ai.deployment)[':id']['logs']['$get']>>
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
        ? getGetAiDeploymentIdLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ai.deployment)[':id']['logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ai.deployment[':id'].logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAiDeploymentIdLogs<TError = unknown>(
  args: InferRequestType<(typeof client.ai.deployment)[':id']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ai.deployment)[':id']['logs']['$get']>>
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
        ? getGetAiDeploymentIdLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ai.deployment)[':id']['logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ai.deployment[':id'].logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSksClusterIdUpgradeKey() {
  return ['sks-cluster', '/sks-cluster/:id/upgrade', 'PUT'] as const
}

export function usePutSksClusterIdUpgrade<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['sks-cluster'][':id']['upgrade']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['sks-cluster'][':id']['upgrade']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSksClusterIdUpgradeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['sks-cluster'][':id']['upgrade']['$put']> },
      ) => parseResponse(client['sks-cluster'][':id'].upgrade.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostKmsKeyIdCancelDeletionKey() {
  return ['kms-key', '/kms-key/:id/cancel-deletion', 'POST'] as const
}

export function usePostKmsKeyIdCancelDeletion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['kms-key'][':id']['cancel-deletion']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['kms-key'][':id']['cancel-deletion']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKmsKeyIdCancelDeletionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['kms-key'][':id']['cancel-deletion']['$post']> },
      ) => parseResponse(client['kms-key'][':id']['cancel-deletion'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostKmsKeyIdGenerateDataKeyKey() {
  return ['kms-key', '/kms-key/:id/generate-data-key', 'POST'] as const
}

export function usePostKmsKeyIdGenerateDataKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['kms-key'][':id']['generate-data-key']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['kms-key'][':id']['generate-data-key']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKmsKeyIdGenerateDataKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['kms-key'][':id']['generate-data-key']['$post']>
        },
      ) => parseResponse(client['kms-key'][':id']['generate-data-key'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVpcIdKey(args: InferRequestType<(typeof client.vpc)[':id']['$get']>) {
  return ['vpc', '/vpc/:id', args] as const
}

export function useGetVpcId<TError = unknown>(
  args: InferRequestType<(typeof client.vpc)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.vpc)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVpcIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.vpc)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vpc[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVpcId<TError = unknown>(
  args: InferRequestType<(typeof client.vpc)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.vpc)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVpcIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.vpc)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vpc[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutVpcIdKey() {
  return ['vpc', '/vpc/:id', 'PUT'] as const
}

export function usePutVpcId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.vpc)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.vpc)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVpcIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.vpc)[':id']['$put']> }) =>
        parseResponse(client.vpc[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteVpcIdKey() {
  return ['vpc', '/vpc/:id', 'DELETE'] as const
}

export function useDeleteVpcId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.vpc)[':id']['$delete']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.vpc)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVpcIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.vpc)[':id']['$delete']> }) =>
        parseResponse(client.vpc[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBlockStorageKey(
  args: InferRequestType<(typeof client)['block-storage']['$get']>,
) {
  return ['block-storage', '/block-storage', args] as const
}

export function useGetBlockStorage<TError = unknown>(
  args: InferRequestType<(typeof client)['block-storage']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['block-storage']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetBlockStorageKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['block-storage']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['block-storage'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBlockStorage<TError = unknown>(
  args: InferRequestType<(typeof client)['block-storage']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['block-storage']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetBlockStorageKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['block-storage']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['block-storage'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBlockStorageKey() {
  return ['block-storage', '/block-storage', 'POST'] as const
}

export function usePostBlockStorage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['block-storage']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['block-storage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBlockStorageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['block-storage']['$post']> },
      ) => parseResponse(client['block-storage'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDbaasKafkaNameTopicAclConfigAclIdKey() {
  return ['dbaas-kafka', '/dbaas-kafka/:name/topic/acl-config/:acl-id', 'DELETE'] as const
}

export function useDeleteDbaasKafkaNameTopicAclConfigAclId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['dbaas-kafka'][':name']['topic']['acl-config'][':acl-id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDbaasKafkaNameTopicAclConfigAclIdKey()
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
            (typeof client)['dbaas-kafka'][':name']['topic']['acl-config'][':acl-id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['dbaas-kafka'][':name'].topic['acl-config'][':acl-id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostInstanceInstanceIdRevertSnapshotKey() {
  return ['instance', '/instance/:instance-id:revert-snapshot', 'POST'] as const
}

export function usePostInstanceInstanceIdRevertSnapshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instance)[':instance-id:revert-snapshot']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.instance)[':instance-id:revert-snapshot']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInstanceInstanceIdRevertSnapshotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.instance)[':instance-id:revert-snapshot']['$post']>
        },
      ) => parseResponse(client.instance[':instance-id:revert-snapshot'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutDbaasPostgresServiceNameUserUsernamePasswordResetKey() {
  return [
    'dbaas-postgres',
    '/dbaas-postgres/:service-name/user/:username/password/reset',
    'PUT',
  ] as const
}

export function usePutDbaasPostgresServiceNameUserUsernamePasswordReset<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['dbaas-postgres'][':service-name']['user'][':username']['password']['reset']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDbaasPostgresServiceNameUserUsernamePasswordResetKey()
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
            (typeof client)['dbaas-postgres'][':service-name']['user'][':username']['password']['reset']['$put']
          >
        },
      ) =>
        parseResponse(
          client['dbaas-postgres'][':service-name'].user[':username'].password.reset.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
