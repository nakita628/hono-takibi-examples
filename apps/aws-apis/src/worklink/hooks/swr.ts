import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getUpdateFleetMetadataKey() {
  return ['UpdateFleetMetadata'] as const
}

export function getAssociateDomainKey() {
  return ['associateDomain'] as const
}

export function getAssociateWebsiteAuthorizationProviderKey() {
  return ['associateWebsiteAuthorizationProvider'] as const
}

export function getAssociateWebsiteCertificateAuthorityKey() {
  return ['associateWebsiteCertificateAuthority'] as const
}

export function getCreateFleetKey() {
  return ['createFleet'] as const
}

export function getDeleteFleetKey() {
  return ['deleteFleet'] as const
}

export function getDescribeAuditStreamConfigurationKey() {
  return ['describeAuditStreamConfiguration'] as const
}

export function getDescribeCompanyNetworkConfigurationKey() {
  return ['describeCompanyNetworkConfiguration'] as const
}

export function getDescribeDeviceKey() {
  return ['describeDevice'] as const
}

export function getDescribeDevicePolicyConfigurationKey() {
  return ['describeDevicePolicyConfiguration'] as const
}

export function getDescribeDomainKey() {
  return ['describeDomain'] as const
}

export function getDescribeFleetMetadataKey() {
  return ['describeFleetMetadata'] as const
}

export function getDescribeIdentityProviderConfigurationKey() {
  return ['describeIdentityProviderConfiguration'] as const
}

export function getDescribeWebsiteCertificateAuthorityKey() {
  return ['describeWebsiteCertificateAuthority'] as const
}

export function getDisassociateDomainKey() {
  return ['disassociateDomain'] as const
}

export function getDisassociateWebsiteAuthorizationProviderKey() {
  return ['disassociateWebsiteAuthorizationProvider'] as const
}

export function getDisassociateWebsiteCertificateAuthorityKey() {
  return ['disassociateWebsiteCertificateAuthority'] as const
}

export function getListDevicesKey() {
  return ['listDevices'] as const
}

export function getListDomainsKey() {
  return ['listDomains'] as const
}

export function getListFleetsKey() {
  return ['listFleets'] as const
}

export function getListWebsiteAuthorizationProvidersKey() {
  return ['listWebsiteAuthorizationProviders'] as const
}

export function getListWebsiteCertificateAuthoritiesKey() {
  return ['listWebsiteCertificateAuthorities'] as const
}

export function getRestoreDomainAccessKey() {
  return ['restoreDomainAccess'] as const
}

export function getRevokeDomainAccessKey() {
  return ['revokeDomainAccess'] as const
}

export function getSignOutUserKey() {
  return ['signOutUser'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getUpdateAuditStreamConfigurationKey() {
  return ['updateAuditStreamConfiguration'] as const
}

export function getUpdateCompanyNetworkConfigurationKey() {
  return ['updateCompanyNetworkConfiguration'] as const
}

export function getUpdateDevicePolicyConfigurationKey() {
  return ['updateDevicePolicyConfiguration'] as const
}

export function getUpdateDomainMetadataKey() {
  return ['updateDomainMetadata'] as const
}

export function getUpdateIdentityProviderConfigurationKey() {
  return ['updateIdentityProviderConfiguration'] as const
}

export function getPostAssociateDomainKey() {
  return ['associateDomain', '/associateDomain', 'POST'] as const
}

export function usePostAssociateDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.associateDomain.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.associateDomain.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssociateDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.associateDomain.$post> }) =>
        parseResponse(client.associateDomain.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssociateWebsiteAuthorizationProviderKey() {
  return [
    'associateWebsiteAuthorizationProvider',
    '/associateWebsiteAuthorizationProvider',
    'POST',
  ] as const
}

export function usePostAssociateWebsiteAuthorizationProvider<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.associateWebsiteAuthorizationProvider.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.associateWebsiteAuthorizationProvider.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssociateWebsiteAuthorizationProviderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.associateWebsiteAuthorizationProvider.$post> },
      ) => parseResponse(client.associateWebsiteAuthorizationProvider.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssociateWebsiteCertificateAuthorityKey() {
  return [
    'associateWebsiteCertificateAuthority',
    '/associateWebsiteCertificateAuthority',
    'POST',
  ] as const
}

export function usePostAssociateWebsiteCertificateAuthority<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.associateWebsiteCertificateAuthority.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.associateWebsiteCertificateAuthority.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssociateWebsiteCertificateAuthorityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.associateWebsiteCertificateAuthority.$post> },
      ) => parseResponse(client.associateWebsiteCertificateAuthority.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreateFleetKey() {
  return ['createFleet', '/createFleet', 'POST'] as const
}

export function usePostCreateFleet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createFleet.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.createFleet.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateFleetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.createFleet.$post> }) =>
        parseResponse(client.createFleet.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteFleetKey() {
  return ['deleteFleet', '/deleteFleet', 'POST'] as const
}

export function usePostDeleteFleet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteFleet.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.deleteFleet.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteFleetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.deleteFleet.$post> }) =>
        parseResponse(client.deleteFleet.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeAuditStreamConfigurationKey() {
  return ['describeAuditStreamConfiguration', '/describeAuditStreamConfiguration', 'POST'] as const
}

export function usePostDescribeAuditStreamConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.describeAuditStreamConfiguration.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.describeAuditStreamConfiguration.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeAuditStreamConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.describeAuditStreamConfiguration.$post> },
      ) => parseResponse(client.describeAuditStreamConfiguration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeCompanyNetworkConfigurationKey() {
  return [
    'describeCompanyNetworkConfiguration',
    '/describeCompanyNetworkConfiguration',
    'POST',
  ] as const
}

export function usePostDescribeCompanyNetworkConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.describeCompanyNetworkConfiguration.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.describeCompanyNetworkConfiguration.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeCompanyNetworkConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.describeCompanyNetworkConfiguration.$post> },
      ) => parseResponse(client.describeCompanyNetworkConfiguration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeDeviceKey() {
  return ['describeDevice', '/describeDevice', 'POST'] as const
}

export function usePostDescribeDevice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.describeDevice.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.describeDevice.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeDeviceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.describeDevice.$post> }) =>
        parseResponse(client.describeDevice.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeDevicePolicyConfigurationKey() {
  return [
    'describeDevicePolicyConfiguration',
    '/describeDevicePolicyConfiguration',
    'POST',
  ] as const
}

export function usePostDescribeDevicePolicyConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.describeDevicePolicyConfiguration.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.describeDevicePolicyConfiguration.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeDevicePolicyConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.describeDevicePolicyConfiguration.$post> },
      ) => parseResponse(client.describeDevicePolicyConfiguration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeDomainKey() {
  return ['describeDomain', '/describeDomain', 'POST'] as const
}

export function usePostDescribeDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.describeDomain.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.describeDomain.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.describeDomain.$post> }) =>
        parseResponse(client.describeDomain.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeFleetMetadataKey() {
  return ['describeFleetMetadata', '/describeFleetMetadata', 'POST'] as const
}

export function usePostDescribeFleetMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.describeFleetMetadata.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.describeFleetMetadata.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeFleetMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.describeFleetMetadata.$post> },
      ) => parseResponse(client.describeFleetMetadata.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeIdentityProviderConfigurationKey() {
  return [
    'describeIdentityProviderConfiguration',
    '/describeIdentityProviderConfiguration',
    'POST',
  ] as const
}

export function usePostDescribeIdentityProviderConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.describeIdentityProviderConfiguration.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.describeIdentityProviderConfiguration.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeIdentityProviderConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.describeIdentityProviderConfiguration.$post> },
      ) => parseResponse(client.describeIdentityProviderConfiguration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeWebsiteCertificateAuthorityKey() {
  return [
    'describeWebsiteCertificateAuthority',
    '/describeWebsiteCertificateAuthority',
    'POST',
  ] as const
}

export function usePostDescribeWebsiteCertificateAuthority<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.describeWebsiteCertificateAuthority.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.describeWebsiteCertificateAuthority.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeWebsiteCertificateAuthorityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.describeWebsiteCertificateAuthority.$post> },
      ) => parseResponse(client.describeWebsiteCertificateAuthority.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDisassociateDomainKey() {
  return ['disassociateDomain', '/disassociateDomain', 'POST'] as const
}

export function usePostDisassociateDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disassociateDomain.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.disassociateDomain.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDisassociateDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.disassociateDomain.$post> }) =>
        parseResponse(client.disassociateDomain.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDisassociateWebsiteAuthorizationProviderKey() {
  return [
    'disassociateWebsiteAuthorizationProvider',
    '/disassociateWebsiteAuthorizationProvider',
    'POST',
  ] as const
}

export function usePostDisassociateWebsiteAuthorizationProvider<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.disassociateWebsiteAuthorizationProvider.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.disassociateWebsiteAuthorizationProvider.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDisassociateWebsiteAuthorizationProviderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.disassociateWebsiteAuthorizationProvider.$post> },
      ) => parseResponse(client.disassociateWebsiteAuthorizationProvider.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDisassociateWebsiteCertificateAuthorityKey() {
  return [
    'disassociateWebsiteCertificateAuthority',
    '/disassociateWebsiteCertificateAuthority',
    'POST',
  ] as const
}

export function usePostDisassociateWebsiteCertificateAuthority<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.disassociateWebsiteCertificateAuthority.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.disassociateWebsiteCertificateAuthority.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDisassociateWebsiteCertificateAuthorityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.disassociateWebsiteCertificateAuthority.$post> },
      ) => parseResponse(client.disassociateWebsiteCertificateAuthority.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListDevicesKey() {
  return ['listDevices', '/listDevices', 'POST'] as const
}

export function usePostListDevices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listDevices.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.listDevices.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListDevicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.listDevices.$post> }) =>
        parseResponse(client.listDevices.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListDomainsKey() {
  return ['listDomains', '/listDomains', 'POST'] as const
}

export function usePostListDomains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listDomains.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.listDomains.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListDomainsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.listDomains.$post> }) =>
        parseResponse(client.listDomains.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListFleetsKey() {
  return ['listFleets', '/listFleets', 'POST'] as const
}

export function usePostListFleets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listFleets.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.listFleets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListFleetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.listFleets.$post> }) =>
        parseResponse(client.listFleets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagsResourceArnKey(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:ResourceArn', keyArgs] as const
}

export function useGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
        >
      >,
      TError
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
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':ResourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
        >
      >,
      TError
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
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':ResourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagsResourceArnKey() {
  return ['tags', '/tags/:ResourceArn', 'POST'] as const
}

export function usePostTagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':ResourceArn']['$post']>
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
        { arg }: { arg: InferRequestType<(typeof client.tags)[':ResourceArn']['$post']> },
      ) => parseResponse(client.tags[':ResourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListWebsiteAuthorizationProvidersKey() {
  return [
    'listWebsiteAuthorizationProviders',
    '/listWebsiteAuthorizationProviders',
    'POST',
  ] as const
}

export function usePostListWebsiteAuthorizationProviders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.listWebsiteAuthorizationProviders.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.listWebsiteAuthorizationProviders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListWebsiteAuthorizationProvidersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.listWebsiteAuthorizationProviders.$post> },
      ) => parseResponse(client.listWebsiteAuthorizationProviders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListWebsiteCertificateAuthoritiesKey() {
  return [
    'listWebsiteCertificateAuthorities',
    '/listWebsiteCertificateAuthorities',
    'POST',
  ] as const
}

export function usePostListWebsiteCertificateAuthorities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.listWebsiteCertificateAuthorities.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.listWebsiteCertificateAuthorities.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListWebsiteCertificateAuthoritiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.listWebsiteCertificateAuthorities.$post> },
      ) => parseResponse(client.listWebsiteCertificateAuthorities.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRestoreDomainAccessKey() {
  return ['restoreDomainAccess', '/restoreDomainAccess', 'POST'] as const
}

export function usePostRestoreDomainAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restoreDomainAccess.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.restoreDomainAccess.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestoreDomainAccessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.restoreDomainAccess.$post> }) =>
        parseResponse(client.restoreDomainAccess.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRevokeDomainAccessKey() {
  return ['revokeDomainAccess', '/revokeDomainAccess', 'POST'] as const
}

export function usePostRevokeDomainAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.revokeDomainAccess.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.revokeDomainAccess.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRevokeDomainAccessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.revokeDomainAccess.$post> }) =>
        parseResponse(client.revokeDomainAccess.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSignOutUserKey() {
  return ['signOutUser', '/signOutUser', 'POST'] as const
}

export function usePostSignOutUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signOutUser.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.signOutUser.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSignOutUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.signOutUser.$post> }) =>
        parseResponse(client.signOutUser.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTagsResourceArnTagKeysKey() {
  return ['tags', '/tags/:ResourceArn#tagKeys', 'DELETE'] as const
}

export function useDeleteTagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>
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
        { arg }: { arg: InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']> },
      ) => parseResponse(client.tags[':ResourceArn#tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateAuditStreamConfigurationKey() {
  return ['updateAuditStreamConfiguration', '/updateAuditStreamConfiguration', 'POST'] as const
}

export function usePostUpdateAuditStreamConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.updateAuditStreamConfiguration.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.updateAuditStreamConfiguration.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateAuditStreamConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.updateAuditStreamConfiguration.$post> },
      ) => parseResponse(client.updateAuditStreamConfiguration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateCompanyNetworkConfigurationKey() {
  return [
    'updateCompanyNetworkConfiguration',
    '/updateCompanyNetworkConfiguration',
    'POST',
  ] as const
}

export function usePostUpdateCompanyNetworkConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.updateCompanyNetworkConfiguration.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.updateCompanyNetworkConfiguration.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateCompanyNetworkConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.updateCompanyNetworkConfiguration.$post> },
      ) => parseResponse(client.updateCompanyNetworkConfiguration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateDevicePolicyConfigurationKey() {
  return ['updateDevicePolicyConfiguration', '/updateDevicePolicyConfiguration', 'POST'] as const
}

export function usePostUpdateDevicePolicyConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.updateDevicePolicyConfiguration.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.updateDevicePolicyConfiguration.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateDevicePolicyConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.updateDevicePolicyConfiguration.$post> },
      ) => parseResponse(client.updateDevicePolicyConfiguration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateDomainMetadataKey() {
  return ['updateDomainMetadata', '/updateDomainMetadata', 'POST'] as const
}

export function usePostUpdateDomainMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.updateDomainMetadata.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.updateDomainMetadata.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateDomainMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.updateDomainMetadata.$post> },
      ) => parseResponse(client.updateDomainMetadata.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateFleetMetadataKey() {
  return ['UpdateFleetMetadata', '/UpdateFleetMetadata', 'POST'] as const
}

export function usePostUpdateFleetMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UpdateFleetMetadata.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.UpdateFleetMetadata.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateFleetMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.UpdateFleetMetadata.$post> }) =>
        parseResponse(client.UpdateFleetMetadata.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateIdentityProviderConfigurationKey() {
  return [
    'updateIdentityProviderConfiguration',
    '/updateIdentityProviderConfiguration',
    'POST',
  ] as const
}

export function usePostUpdateIdentityProviderConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.updateIdentityProviderConfiguration.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.updateIdentityProviderConfiguration.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateIdentityProviderConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.updateIdentityProviderConfiguration.$post> },
      ) => parseResponse(client.updateIdentityProviderConfiguration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
