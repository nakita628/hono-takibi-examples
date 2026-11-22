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

export function getPostAssociateDomainMutationKey() {
  return ['associateDomain', '/associateDomain', 'POST'] as const
}

export function getPostAssociateDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.associateDomain.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.associateDomain.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssociateDomainMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.associateDomain.$post>) {
      return parseResponse(client.associateDomain.$post(args, options))
    },
  })
}

export function createPostAssociateDomain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.associateDomain.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.associateDomain.$post>,
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
    const mutationDefaults = getPostAssociateDomainMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAssociateWebsiteAuthorizationProviderMutationKey() {
  return [
    'associateWebsiteAuthorizationProvider',
    '/associateWebsiteAuthorizationProvider',
    'POST',
  ] as const
}

export function getPostAssociateWebsiteAuthorizationProviderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.associateWebsiteAuthorizationProvider.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.associateWebsiteAuthorizationProvider.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssociateWebsiteAuthorizationProviderMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.associateWebsiteAuthorizationProvider.$post>,
    ) {
      return parseResponse(client.associateWebsiteAuthorizationProvider.$post(args, options))
    },
  })
}

export function createPostAssociateWebsiteAuthorizationProvider<
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
                Awaited<ReturnType<typeof client.associateWebsiteAuthorizationProvider.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.associateWebsiteAuthorizationProvider.$post>,
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
    const mutationDefaults = getPostAssociateWebsiteAuthorizationProviderMutationOptions<
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

export function getPostAssociateWebsiteCertificateAuthorityMutationKey() {
  return [
    'associateWebsiteCertificateAuthority',
    '/associateWebsiteCertificateAuthority',
    'POST',
  ] as const
}

export function getPostAssociateWebsiteCertificateAuthorityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.associateWebsiteCertificateAuthority.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.associateWebsiteCertificateAuthority.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssociateWebsiteCertificateAuthorityMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.associateWebsiteCertificateAuthority.$post>,
    ) {
      return parseResponse(client.associateWebsiteCertificateAuthority.$post(args, options))
    },
  })
}

export function createPostAssociateWebsiteCertificateAuthority<
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
                Awaited<ReturnType<typeof client.associateWebsiteCertificateAuthority.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.associateWebsiteCertificateAuthority.$post>,
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
    const mutationDefaults = getPostAssociateWebsiteCertificateAuthorityMutationOptions<
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

export function getPostCreateFleetMutationKey() {
  return ['createFleet', '/createFleet', 'POST'] as const
}

export function getPostCreateFleetMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createFleet.$post>>>>>,
    TError,
    InferRequestType<typeof client.createFleet.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateFleetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.createFleet.$post>) {
      return parseResponse(client.createFleet.$post(args, options))
    },
  })
}

export function createPostCreateFleet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createFleet.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.createFleet.$post>,
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
    const mutationDefaults = getPostCreateFleetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDeleteFleetMutationKey() {
  return ['deleteFleet', '/deleteFleet', 'POST'] as const
}

export function getPostDeleteFleetMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteFleet.$post>>>>>,
    TError,
    InferRequestType<typeof client.deleteFleet.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteFleetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.deleteFleet.$post>) {
      return parseResponse(client.deleteFleet.$post(args, options))
    },
  })
}

export function createPostDeleteFleet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteFleet.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.deleteFleet.$post>,
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
    const mutationDefaults = getPostDeleteFleetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDescribeAuditStreamConfigurationMutationKey() {
  return ['describeAuditStreamConfiguration', '/describeAuditStreamConfiguration', 'POST'] as const
}

export function getPostDescribeAuditStreamConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.describeAuditStreamConfiguration.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.describeAuditStreamConfiguration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeAuditStreamConfigurationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.describeAuditStreamConfiguration.$post>) {
      return parseResponse(client.describeAuditStreamConfiguration.$post(args, options))
    },
  })
}

export function createPostDescribeAuditStreamConfiguration<
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
                Awaited<ReturnType<typeof client.describeAuditStreamConfiguration.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.describeAuditStreamConfiguration.$post>,
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
    const mutationDefaults = getPostDescribeAuditStreamConfigurationMutationOptions<
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

export function getPostDescribeCompanyNetworkConfigurationMutationKey() {
  return [
    'describeCompanyNetworkConfiguration',
    '/describeCompanyNetworkConfiguration',
    'POST',
  ] as const
}

export function getPostDescribeCompanyNetworkConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.describeCompanyNetworkConfiguration.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.describeCompanyNetworkConfiguration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeCompanyNetworkConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.describeCompanyNetworkConfiguration.$post>,
    ) {
      return parseResponse(client.describeCompanyNetworkConfiguration.$post(args, options))
    },
  })
}

export function createPostDescribeCompanyNetworkConfiguration<
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
                Awaited<ReturnType<typeof client.describeCompanyNetworkConfiguration.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.describeCompanyNetworkConfiguration.$post>,
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
    const mutationDefaults = getPostDescribeCompanyNetworkConfigurationMutationOptions<
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

export function getPostDescribeDeviceMutationKey() {
  return ['describeDevice', '/describeDevice', 'POST'] as const
}

export function getPostDescribeDeviceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.describeDevice.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.describeDevice.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeDeviceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.describeDevice.$post>) {
      return parseResponse(client.describeDevice.$post(args, options))
    },
  })
}

export function createPostDescribeDevice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.describeDevice.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.describeDevice.$post>,
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
    const mutationDefaults = getPostDescribeDeviceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDescribeDevicePolicyConfigurationMutationKey() {
  return [
    'describeDevicePolicyConfiguration',
    '/describeDevicePolicyConfiguration',
    'POST',
  ] as const
}

export function getPostDescribeDevicePolicyConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.describeDevicePolicyConfiguration.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.describeDevicePolicyConfiguration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeDevicePolicyConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.describeDevicePolicyConfiguration.$post>,
    ) {
      return parseResponse(client.describeDevicePolicyConfiguration.$post(args, options))
    },
  })
}

export function createPostDescribeDevicePolicyConfiguration<
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
                Awaited<ReturnType<typeof client.describeDevicePolicyConfiguration.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.describeDevicePolicyConfiguration.$post>,
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
    const mutationDefaults = getPostDescribeDevicePolicyConfigurationMutationOptions<
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

export function getPostDescribeDomainMutationKey() {
  return ['describeDomain', '/describeDomain', 'POST'] as const
}

export function getPostDescribeDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.describeDomain.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.describeDomain.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeDomainMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.describeDomain.$post>) {
      return parseResponse(client.describeDomain.$post(args, options))
    },
  })
}

export function createPostDescribeDomain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.describeDomain.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.describeDomain.$post>,
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
    const mutationDefaults = getPostDescribeDomainMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDescribeFleetMetadataMutationKey() {
  return ['describeFleetMetadata', '/describeFleetMetadata', 'POST'] as const
}

export function getPostDescribeFleetMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.describeFleetMetadata.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.describeFleetMetadata.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeFleetMetadataMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.describeFleetMetadata.$post>) {
      return parseResponse(client.describeFleetMetadata.$post(args, options))
    },
  })
}

export function createPostDescribeFleetMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.describeFleetMetadata.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.describeFleetMetadata.$post>,
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
    const mutationDefaults = getPostDescribeFleetMetadataMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDescribeIdentityProviderConfigurationMutationKey() {
  return [
    'describeIdentityProviderConfiguration',
    '/describeIdentityProviderConfiguration',
    'POST',
  ] as const
}

export function getPostDescribeIdentityProviderConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.describeIdentityProviderConfiguration.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.describeIdentityProviderConfiguration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeIdentityProviderConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.describeIdentityProviderConfiguration.$post>,
    ) {
      return parseResponse(client.describeIdentityProviderConfiguration.$post(args, options))
    },
  })
}

export function createPostDescribeIdentityProviderConfiguration<
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
                Awaited<ReturnType<typeof client.describeIdentityProviderConfiguration.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.describeIdentityProviderConfiguration.$post>,
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
    const mutationDefaults = getPostDescribeIdentityProviderConfigurationMutationOptions<
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

export function getPostDescribeWebsiteCertificateAuthorityMutationKey() {
  return [
    'describeWebsiteCertificateAuthority',
    '/describeWebsiteCertificateAuthority',
    'POST',
  ] as const
}

export function getPostDescribeWebsiteCertificateAuthorityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.describeWebsiteCertificateAuthority.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.describeWebsiteCertificateAuthority.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeWebsiteCertificateAuthorityMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.describeWebsiteCertificateAuthority.$post>,
    ) {
      return parseResponse(client.describeWebsiteCertificateAuthority.$post(args, options))
    },
  })
}

export function createPostDescribeWebsiteCertificateAuthority<
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
                Awaited<ReturnType<typeof client.describeWebsiteCertificateAuthority.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.describeWebsiteCertificateAuthority.$post>,
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
    const mutationDefaults = getPostDescribeWebsiteCertificateAuthorityMutationOptions<
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

export function getPostDisassociateDomainMutationKey() {
  return ['disassociateDomain', '/disassociateDomain', 'POST'] as const
}

export function getPostDisassociateDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disassociateDomain.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.disassociateDomain.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDisassociateDomainMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.disassociateDomain.$post>) {
      return parseResponse(client.disassociateDomain.$post(args, options))
    },
  })
}

export function createPostDisassociateDomain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.disassociateDomain.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.disassociateDomain.$post>,
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
    const mutationDefaults = getPostDisassociateDomainMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDisassociateWebsiteAuthorizationProviderMutationKey() {
  return [
    'disassociateWebsiteAuthorizationProvider',
    '/disassociateWebsiteAuthorizationProvider',
    'POST',
  ] as const
}

export function getPostDisassociateWebsiteAuthorizationProviderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.disassociateWebsiteAuthorizationProvider.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.disassociateWebsiteAuthorizationProvider.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDisassociateWebsiteAuthorizationProviderMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.disassociateWebsiteAuthorizationProvider.$post>,
    ) {
      return parseResponse(client.disassociateWebsiteAuthorizationProvider.$post(args, options))
    },
  })
}

export function createPostDisassociateWebsiteAuthorizationProvider<
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
                Awaited<ReturnType<typeof client.disassociateWebsiteAuthorizationProvider.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.disassociateWebsiteAuthorizationProvider.$post>,
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
    const mutationDefaults = getPostDisassociateWebsiteAuthorizationProviderMutationOptions<
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

export function getPostDisassociateWebsiteCertificateAuthorityMutationKey() {
  return [
    'disassociateWebsiteCertificateAuthority',
    '/disassociateWebsiteCertificateAuthority',
    'POST',
  ] as const
}

export function getPostDisassociateWebsiteCertificateAuthorityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.disassociateWebsiteCertificateAuthority.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.disassociateWebsiteCertificateAuthority.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDisassociateWebsiteCertificateAuthorityMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.disassociateWebsiteCertificateAuthority.$post>,
    ) {
      return parseResponse(client.disassociateWebsiteCertificateAuthority.$post(args, options))
    },
  })
}

export function createPostDisassociateWebsiteCertificateAuthority<
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
                Awaited<ReturnType<typeof client.disassociateWebsiteCertificateAuthority.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.disassociateWebsiteCertificateAuthority.$post>,
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
    const mutationDefaults = getPostDisassociateWebsiteCertificateAuthorityMutationOptions<
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

export function getPostListDevicesMutationKey() {
  return ['listDevices', '/listDevices', 'POST'] as const
}

export function getPostListDevicesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listDevices.$post>>>>>,
    TError,
    InferRequestType<typeof client.listDevices.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListDevicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listDevices.$post>) {
      return parseResponse(client.listDevices.$post(args, options))
    },
  })
}

export function createPostListDevices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listDevices.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.listDevices.$post>,
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
    const mutationDefaults = getPostListDevicesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostListDomainsMutationKey() {
  return ['listDomains', '/listDomains', 'POST'] as const
}

export function getPostListDomainsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listDomains.$post>>>>>,
    TError,
    InferRequestType<typeof client.listDomains.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListDomainsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listDomains.$post>) {
      return parseResponse(client.listDomains.$post(args, options))
    },
  })
}

export function createPostListDomains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listDomains.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.listDomains.$post>,
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
    const mutationDefaults = getPostListDomainsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostListFleetsMutationKey() {
  return ['listFleets', '/listFleets', 'POST'] as const
}

export function getPostListFleetsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listFleets.$post>>>>>,
    TError,
    InferRequestType<typeof client.listFleets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListFleetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listFleets.$post>) {
      return parseResponse(client.listFleets.$post(args, options))
    },
  })
}

export function createPostListFleets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listFleets.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.listFleets.$post>,
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
    const mutationDefaults = getPostListFleetsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:ResourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >({
    queryKey: getTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':ResourceArn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTagsResourceArnQueryKey>
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
    return { ...getTagsResourceArnQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags', '/tags/:ResourceArn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':ResourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':ResourceArn']['$post']>) {
      return parseResponse(client.tags[':ResourceArn'].$post(args, options))
    },
  })
}

export function createPostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':ResourceArn']['$post']>,
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
    const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostListWebsiteAuthorizationProvidersMutationKey() {
  return [
    'listWebsiteAuthorizationProviders',
    '/listWebsiteAuthorizationProviders',
    'POST',
  ] as const
}

export function getPostListWebsiteAuthorizationProvidersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.listWebsiteAuthorizationProviders.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.listWebsiteAuthorizationProviders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListWebsiteAuthorizationProvidersMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.listWebsiteAuthorizationProviders.$post>,
    ) {
      return parseResponse(client.listWebsiteAuthorizationProviders.$post(args, options))
    },
  })
}

export function createPostListWebsiteAuthorizationProviders<
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
                Awaited<ReturnType<typeof client.listWebsiteAuthorizationProviders.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.listWebsiteAuthorizationProviders.$post>,
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
    const mutationDefaults = getPostListWebsiteAuthorizationProvidersMutationOptions<
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

export function getPostListWebsiteCertificateAuthoritiesMutationKey() {
  return [
    'listWebsiteCertificateAuthorities',
    '/listWebsiteCertificateAuthorities',
    'POST',
  ] as const
}

export function getPostListWebsiteCertificateAuthoritiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.listWebsiteCertificateAuthorities.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.listWebsiteCertificateAuthorities.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListWebsiteCertificateAuthoritiesMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.listWebsiteCertificateAuthorities.$post>,
    ) {
      return parseResponse(client.listWebsiteCertificateAuthorities.$post(args, options))
    },
  })
}

export function createPostListWebsiteCertificateAuthorities<
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
                Awaited<ReturnType<typeof client.listWebsiteCertificateAuthorities.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.listWebsiteCertificateAuthorities.$post>,
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
    const mutationDefaults = getPostListWebsiteCertificateAuthoritiesMutationOptions<
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

export function getPostRestoreDomainAccessMutationKey() {
  return ['restoreDomainAccess', '/restoreDomainAccess', 'POST'] as const
}

export function getPostRestoreDomainAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restoreDomainAccess.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.restoreDomainAccess.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRestoreDomainAccessMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.restoreDomainAccess.$post>) {
      return parseResponse(client.restoreDomainAccess.$post(args, options))
    },
  })
}

export function createPostRestoreDomainAccess<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.restoreDomainAccess.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.restoreDomainAccess.$post>,
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
    const mutationDefaults = getPostRestoreDomainAccessMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostRevokeDomainAccessMutationKey() {
  return ['revokeDomainAccess', '/revokeDomainAccess', 'POST'] as const
}

export function getPostRevokeDomainAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.revokeDomainAccess.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.revokeDomainAccess.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRevokeDomainAccessMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.revokeDomainAccess.$post>) {
      return parseResponse(client.revokeDomainAccess.$post(args, options))
    },
  })
}

export function createPostRevokeDomainAccess<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.revokeDomainAccess.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.revokeDomainAccess.$post>,
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
    const mutationDefaults = getPostRevokeDomainAccessMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSignOutUserMutationKey() {
  return ['signOutUser', '/signOutUser', 'POST'] as const
}

export function getPostSignOutUserMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signOutUser.$post>>>>>,
    TError,
    InferRequestType<typeof client.signOutUser.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSignOutUserMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.signOutUser.$post>) {
      return parseResponse(client.signOutUser.$post(args, options))
    },
  })
}

export function createPostSignOutUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signOutUser.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.signOutUser.$post>,
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
    const mutationDefaults = getPostSignOutUserMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:ResourceArn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':ResourceArn#tagKeys'].$delete(args, options))
    },
  })
}

export function createDeleteTagsResourceArnTagKeys<
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
                Awaited<ReturnType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>,
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
    const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<
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

export function getPostUpdateAuditStreamConfigurationMutationKey() {
  return ['updateAuditStreamConfiguration', '/updateAuditStreamConfiguration', 'POST'] as const
}

export function getPostUpdateAuditStreamConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.updateAuditStreamConfiguration.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.updateAuditStreamConfiguration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateAuditStreamConfigurationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.updateAuditStreamConfiguration.$post>) {
      return parseResponse(client.updateAuditStreamConfiguration.$post(args, options))
    },
  })
}

export function createPostUpdateAuditStreamConfiguration<
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
                Awaited<ReturnType<typeof client.updateAuditStreamConfiguration.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.updateAuditStreamConfiguration.$post>,
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
    const mutationDefaults = getPostUpdateAuditStreamConfigurationMutationOptions<
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

export function getPostUpdateCompanyNetworkConfigurationMutationKey() {
  return [
    'updateCompanyNetworkConfiguration',
    '/updateCompanyNetworkConfiguration',
    'POST',
  ] as const
}

export function getPostUpdateCompanyNetworkConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.updateCompanyNetworkConfiguration.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.updateCompanyNetworkConfiguration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateCompanyNetworkConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.updateCompanyNetworkConfiguration.$post>,
    ) {
      return parseResponse(client.updateCompanyNetworkConfiguration.$post(args, options))
    },
  })
}

export function createPostUpdateCompanyNetworkConfiguration<
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
                Awaited<ReturnType<typeof client.updateCompanyNetworkConfiguration.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.updateCompanyNetworkConfiguration.$post>,
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
    const mutationDefaults = getPostUpdateCompanyNetworkConfigurationMutationOptions<
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

export function getPostUpdateDevicePolicyConfigurationMutationKey() {
  return ['updateDevicePolicyConfiguration', '/updateDevicePolicyConfiguration', 'POST'] as const
}

export function getPostUpdateDevicePolicyConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.updateDevicePolicyConfiguration.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.updateDevicePolicyConfiguration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateDevicePolicyConfigurationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.updateDevicePolicyConfiguration.$post>) {
      return parseResponse(client.updateDevicePolicyConfiguration.$post(args, options))
    },
  })
}

export function createPostUpdateDevicePolicyConfiguration<
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
                Awaited<ReturnType<typeof client.updateDevicePolicyConfiguration.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.updateDevicePolicyConfiguration.$post>,
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
    const mutationDefaults = getPostUpdateDevicePolicyConfigurationMutationOptions<
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

export function getPostUpdateDomainMetadataMutationKey() {
  return ['updateDomainMetadata', '/updateDomainMetadata', 'POST'] as const
}

export function getPostUpdateDomainMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.updateDomainMetadata.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.updateDomainMetadata.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateDomainMetadataMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.updateDomainMetadata.$post>) {
      return parseResponse(client.updateDomainMetadata.$post(args, options))
    },
  })
}

export function createPostUpdateDomainMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.updateDomainMetadata.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.updateDomainMetadata.$post>,
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
    const mutationDefaults = getPostUpdateDomainMetadataMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUpdateFleetMetadataMutationKey() {
  return ['UpdateFleetMetadata', '/UpdateFleetMetadata', 'POST'] as const
}

export function getPostUpdateFleetMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UpdateFleetMetadata.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.UpdateFleetMetadata.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateFleetMetadataMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.UpdateFleetMetadata.$post>) {
      return parseResponse(client.UpdateFleetMetadata.$post(args, options))
    },
  })
}

export function createPostUpdateFleetMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.UpdateFleetMetadata.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.UpdateFleetMetadata.$post>,
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
    const mutationDefaults = getPostUpdateFleetMetadataMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUpdateIdentityProviderConfigurationMutationKey() {
  return [
    'updateIdentityProviderConfiguration',
    '/updateIdentityProviderConfiguration',
    'POST',
  ] as const
}

export function getPostUpdateIdentityProviderConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.updateIdentityProviderConfiguration.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.updateIdentityProviderConfiguration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateIdentityProviderConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.updateIdentityProviderConfiguration.$post>,
    ) {
      return parseResponse(client.updateIdentityProviderConfiguration.$post(args, options))
    },
  })
}

export function createPostUpdateIdentityProviderConfiguration<
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
                Awaited<ReturnType<typeof client.updateIdentityProviderConfiguration.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.updateIdentityProviderConfiguration.$post>,
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
    const mutationDefaults = getPostUpdateIdentityProviderConfigurationMutationOptions<
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
