import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetTransferServiceCreateAccessKey() {
  return ['#X-Amz-Target=TransferService.CreateAccess'] as const
}

export function getXAmzTargetTransferServiceCreateAgreementKey() {
  return ['#X-Amz-Target=TransferService.CreateAgreement'] as const
}

export function getXAmzTargetTransferServiceCreateConnectorKey() {
  return ['#X-Amz-Target=TransferService.CreateConnector'] as const
}

export function getXAmzTargetTransferServiceCreateProfileKey() {
  return ['#X-Amz-Target=TransferService.CreateProfile'] as const
}

export function getXAmzTargetTransferServiceCreateServerKey() {
  return ['#X-Amz-Target=TransferService.CreateServer'] as const
}

export function getXAmzTargetTransferServiceCreateUserKey() {
  return ['#X-Amz-Target=TransferService.CreateUser'] as const
}

export function getXAmzTargetTransferServiceCreateWorkflowKey() {
  return ['#X-Amz-Target=TransferService.CreateWorkflow'] as const
}

export function getXAmzTargetTransferServiceDeleteAccessKey() {
  return ['#X-Amz-Target=TransferService.DeleteAccess'] as const
}

export function getXAmzTargetTransferServiceDeleteAgreementKey() {
  return ['#X-Amz-Target=TransferService.DeleteAgreement'] as const
}

export function getXAmzTargetTransferServiceDeleteCertificateKey() {
  return ['#X-Amz-Target=TransferService.DeleteCertificate'] as const
}

export function getXAmzTargetTransferServiceDeleteConnectorKey() {
  return ['#X-Amz-Target=TransferService.DeleteConnector'] as const
}

export function getXAmzTargetTransferServiceDeleteHostKeyKey() {
  return ['#X-Amz-Target=TransferService.DeleteHostKey'] as const
}

export function getXAmzTargetTransferServiceDeleteProfileKey() {
  return ['#X-Amz-Target=TransferService.DeleteProfile'] as const
}

export function getXAmzTargetTransferServiceDeleteServerKey() {
  return ['#X-Amz-Target=TransferService.DeleteServer'] as const
}

export function getXAmzTargetTransferServiceDeleteSshPublicKeyKey() {
  return ['#X-Amz-Target=TransferService.DeleteSshPublicKey'] as const
}

export function getXAmzTargetTransferServiceDeleteUserKey() {
  return ['#X-Amz-Target=TransferService.DeleteUser'] as const
}

export function getXAmzTargetTransferServiceDeleteWorkflowKey() {
  return ['#X-Amz-Target=TransferService.DeleteWorkflow'] as const
}

export function getXAmzTargetTransferServiceDescribeAccessKey() {
  return ['#X-Amz-Target=TransferService.DescribeAccess'] as const
}

export function getXAmzTargetTransferServiceDescribeAgreementKey() {
  return ['#X-Amz-Target=TransferService.DescribeAgreement'] as const
}

export function getXAmzTargetTransferServiceDescribeCertificateKey() {
  return ['#X-Amz-Target=TransferService.DescribeCertificate'] as const
}

export function getXAmzTargetTransferServiceDescribeConnectorKey() {
  return ['#X-Amz-Target=TransferService.DescribeConnector'] as const
}

export function getXAmzTargetTransferServiceDescribeExecutionKey() {
  return ['#X-Amz-Target=TransferService.DescribeExecution'] as const
}

export function getXAmzTargetTransferServiceDescribeHostKeyKey() {
  return ['#X-Amz-Target=TransferService.DescribeHostKey'] as const
}

export function getXAmzTargetTransferServiceDescribeProfileKey() {
  return ['#X-Amz-Target=TransferService.DescribeProfile'] as const
}

export function getXAmzTargetTransferServiceDescribeSecurityPolicyKey() {
  return ['#X-Amz-Target=TransferService.DescribeSecurityPolicy'] as const
}

export function getXAmzTargetTransferServiceDescribeServerKey() {
  return ['#X-Amz-Target=TransferService.DescribeServer'] as const
}

export function getXAmzTargetTransferServiceDescribeUserKey() {
  return ['#X-Amz-Target=TransferService.DescribeUser'] as const
}

export function getXAmzTargetTransferServiceDescribeWorkflowKey() {
  return ['#X-Amz-Target=TransferService.DescribeWorkflow'] as const
}

export function getXAmzTargetTransferServiceImportCertificateKey() {
  return ['#X-Amz-Target=TransferService.ImportCertificate'] as const
}

export function getXAmzTargetTransferServiceImportHostKeyKey() {
  return ['#X-Amz-Target=TransferService.ImportHostKey'] as const
}

export function getXAmzTargetTransferServiceImportSshPublicKeyKey() {
  return ['#X-Amz-Target=TransferService.ImportSshPublicKey'] as const
}

export function getXAmzTargetTransferServiceListAccessesKey() {
  return ['#X-Amz-Target=TransferService.ListAccesses'] as const
}

export function getXAmzTargetTransferServiceListAgreementsKey() {
  return ['#X-Amz-Target=TransferService.ListAgreements'] as const
}

export function getXAmzTargetTransferServiceListCertificatesKey() {
  return ['#X-Amz-Target=TransferService.ListCertificates'] as const
}

export function getXAmzTargetTransferServiceListConnectorsKey() {
  return ['#X-Amz-Target=TransferService.ListConnectors'] as const
}

export function getXAmzTargetTransferServiceListExecutionsKey() {
  return ['#X-Amz-Target=TransferService.ListExecutions'] as const
}

export function getXAmzTargetTransferServiceListHostKeysKey() {
  return ['#X-Amz-Target=TransferService.ListHostKeys'] as const
}

export function getXAmzTargetTransferServiceListProfilesKey() {
  return ['#X-Amz-Target=TransferService.ListProfiles'] as const
}

export function getXAmzTargetTransferServiceListSecurityPoliciesKey() {
  return ['#X-Amz-Target=TransferService.ListSecurityPolicies'] as const
}

export function getXAmzTargetTransferServiceListServersKey() {
  return ['#X-Amz-Target=TransferService.ListServers'] as const
}

export function getXAmzTargetTransferServiceListTagsForResourceKey() {
  return ['#X-Amz-Target=TransferService.ListTagsForResource'] as const
}

export function getXAmzTargetTransferServiceListUsersKey() {
  return ['#X-Amz-Target=TransferService.ListUsers'] as const
}

export function getXAmzTargetTransferServiceListWorkflowsKey() {
  return ['#X-Amz-Target=TransferService.ListWorkflows'] as const
}

export function getXAmzTargetTransferServiceSendWorkflowStepStateKey() {
  return ['#X-Amz-Target=TransferService.SendWorkflowStepState'] as const
}

export function getXAmzTargetTransferServiceStartFileTransferKey() {
  return ['#X-Amz-Target=TransferService.StartFileTransfer'] as const
}

export function getXAmzTargetTransferServiceStartServerKey() {
  return ['#X-Amz-Target=TransferService.StartServer'] as const
}

export function getXAmzTargetTransferServiceStopServerKey() {
  return ['#X-Amz-Target=TransferService.StopServer'] as const
}

export function getXAmzTargetTransferServiceTagResourceKey() {
  return ['#X-Amz-Target=TransferService.TagResource'] as const
}

export function getXAmzTargetTransferServiceTestIdentityProviderKey() {
  return ['#X-Amz-Target=TransferService.TestIdentityProvider'] as const
}

export function getXAmzTargetTransferServiceUntagResourceKey() {
  return ['#X-Amz-Target=TransferService.UntagResource'] as const
}

export function getXAmzTargetTransferServiceUpdateAccessKey() {
  return ['#X-Amz-Target=TransferService.UpdateAccess'] as const
}

export function getXAmzTargetTransferServiceUpdateAgreementKey() {
  return ['#X-Amz-Target=TransferService.UpdateAgreement'] as const
}

export function getXAmzTargetTransferServiceUpdateCertificateKey() {
  return ['#X-Amz-Target=TransferService.UpdateCertificate'] as const
}

export function getXAmzTargetTransferServiceUpdateConnectorKey() {
  return ['#X-Amz-Target=TransferService.UpdateConnector'] as const
}

export function getXAmzTargetTransferServiceUpdateHostKeyKey() {
  return ['#X-Amz-Target=TransferService.UpdateHostKey'] as const
}

export function getXAmzTargetTransferServiceUpdateProfileKey() {
  return ['#X-Amz-Target=TransferService.UpdateProfile'] as const
}

export function getXAmzTargetTransferServiceUpdateServerKey() {
  return ['#X-Amz-Target=TransferService.UpdateServer'] as const
}

export function getXAmzTargetTransferServiceUpdateUserKey() {
  return ['#X-Amz-Target=TransferService.UpdateUser'] as const
}

export function getPostXAmzTargetTransferServiceCreateAccessMutationKey() {
  return [
    '#X-Amz-Target=TransferService.CreateAccess',
    '/#X-Amz-Target=TransferService.CreateAccess',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceCreateAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TransferService.CreateAccess']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.CreateAccess']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceCreateAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.CreateAccess']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.CreateAccess'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceCreateAccess<
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
                  ReturnType<(typeof client)['#X-Amz-Target=TransferService.CreateAccess']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=TransferService.CreateAccess']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetTransferServiceCreateAccessMutationOptions<
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

export function getPostXAmzTargetTransferServiceCreateAgreementMutationKey() {
  return [
    '#X-Amz-Target=TransferService.CreateAgreement',
    '/#X-Amz-Target=TransferService.CreateAgreement',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceCreateAgreementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TransferService.CreateAgreement']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.CreateAgreement']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceCreateAgreementMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.CreateAgreement']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.CreateAgreement'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceCreateAgreement<
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
                    (typeof client)['#X-Amz-Target=TransferService.CreateAgreement']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=TransferService.CreateAgreement']['$post']
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
    const mutationDefaults = getPostXAmzTargetTransferServiceCreateAgreementMutationOptions<
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

export function getPostXAmzTargetTransferServiceCreateConnectorMutationKey() {
  return [
    '#X-Amz-Target=TransferService.CreateConnector',
    '/#X-Amz-Target=TransferService.CreateConnector',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceCreateConnectorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TransferService.CreateConnector']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.CreateConnector']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceCreateConnectorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.CreateConnector']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.CreateConnector'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceCreateConnector<
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
                    (typeof client)['#X-Amz-Target=TransferService.CreateConnector']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=TransferService.CreateConnector']['$post']
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
    const mutationDefaults = getPostXAmzTargetTransferServiceCreateConnectorMutationOptions<
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

export function getPostXAmzTargetTransferServiceCreateProfileMutationKey() {
  return [
    '#X-Amz-Target=TransferService.CreateProfile',
    '/#X-Amz-Target=TransferService.CreateProfile',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceCreateProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TransferService.CreateProfile']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.CreateProfile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceCreateProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.CreateProfile']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.CreateProfile'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceCreateProfile<
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
                    (typeof client)['#X-Amz-Target=TransferService.CreateProfile']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=TransferService.CreateProfile']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetTransferServiceCreateProfileMutationOptions<
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

export function getPostXAmzTargetTransferServiceCreateServerMutationKey() {
  return [
    '#X-Amz-Target=TransferService.CreateServer',
    '/#X-Amz-Target=TransferService.CreateServer',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceCreateServerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TransferService.CreateServer']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.CreateServer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceCreateServerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.CreateServer']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.CreateServer'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceCreateServer<
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
                  ReturnType<(typeof client)['#X-Amz-Target=TransferService.CreateServer']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=TransferService.CreateServer']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetTransferServiceCreateServerMutationOptions<
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

export function getPostXAmzTargetTransferServiceCreateUserMutationKey() {
  return [
    '#X-Amz-Target=TransferService.CreateUser',
    '/#X-Amz-Target=TransferService.CreateUser',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceCreateUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TransferService.CreateUser']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.CreateUser']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceCreateUserMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.CreateUser']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=TransferService.CreateUser'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetTransferServiceCreateUser<
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
                  ReturnType<(typeof client)['#X-Amz-Target=TransferService.CreateUser']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=TransferService.CreateUser']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetTransferServiceCreateUserMutationOptions<
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

export function getPostXAmzTargetTransferServiceCreateWorkflowMutationKey() {
  return [
    '#X-Amz-Target=TransferService.CreateWorkflow',
    '/#X-Amz-Target=TransferService.CreateWorkflow',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceCreateWorkflowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TransferService.CreateWorkflow']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.CreateWorkflow']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceCreateWorkflowMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.CreateWorkflow']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.CreateWorkflow'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceCreateWorkflow<
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
                    (typeof client)['#X-Amz-Target=TransferService.CreateWorkflow']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=TransferService.CreateWorkflow']['$post']
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
    const mutationDefaults = getPostXAmzTargetTransferServiceCreateWorkflowMutationOptions<
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

export function getPostXAmzTargetTransferServiceDeleteAccessMutationKey() {
  return [
    '#X-Amz-Target=TransferService.DeleteAccess',
    '/#X-Amz-Target=TransferService.DeleteAccess',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceDeleteAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TransferService.DeleteAccess']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DeleteAccess']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceDeleteAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.DeleteAccess']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.DeleteAccess'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceDeleteAccess<
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
                  ReturnType<(typeof client)['#X-Amz-Target=TransferService.DeleteAccess']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DeleteAccess']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetTransferServiceDeleteAccessMutationOptions<
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

export function getPostXAmzTargetTransferServiceDeleteAgreementMutationKey() {
  return [
    '#X-Amz-Target=TransferService.DeleteAgreement',
    '/#X-Amz-Target=TransferService.DeleteAgreement',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceDeleteAgreementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TransferService.DeleteAgreement']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DeleteAgreement']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceDeleteAgreementMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.DeleteAgreement']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.DeleteAgreement'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceDeleteAgreement<
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
                    (typeof client)['#X-Amz-Target=TransferService.DeleteAgreement']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=TransferService.DeleteAgreement']['$post']
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
    const mutationDefaults = getPostXAmzTargetTransferServiceDeleteAgreementMutationOptions<
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

export function getPostXAmzTargetTransferServiceDeleteCertificateMutationKey() {
  return [
    '#X-Amz-Target=TransferService.DeleteCertificate',
    '/#X-Amz-Target=TransferService.DeleteCertificate',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceDeleteCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TransferService.DeleteCertificate']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DeleteCertificate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceDeleteCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.DeleteCertificate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.DeleteCertificate'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceDeleteCertificate<
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
                    (typeof client)['#X-Amz-Target=TransferService.DeleteCertificate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=TransferService.DeleteCertificate']['$post']
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
    const mutationDefaults = getPostXAmzTargetTransferServiceDeleteCertificateMutationOptions<
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

export function getPostXAmzTargetTransferServiceDeleteConnectorMutationKey() {
  return [
    '#X-Amz-Target=TransferService.DeleteConnector',
    '/#X-Amz-Target=TransferService.DeleteConnector',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceDeleteConnectorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TransferService.DeleteConnector']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DeleteConnector']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceDeleteConnectorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.DeleteConnector']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.DeleteConnector'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceDeleteConnector<
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
                    (typeof client)['#X-Amz-Target=TransferService.DeleteConnector']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=TransferService.DeleteConnector']['$post']
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
    const mutationDefaults = getPostXAmzTargetTransferServiceDeleteConnectorMutationOptions<
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

export function getPostXAmzTargetTransferServiceDeleteHostKeyMutationKey() {
  return [
    '#X-Amz-Target=TransferService.DeleteHostKey',
    '/#X-Amz-Target=TransferService.DeleteHostKey',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceDeleteHostKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TransferService.DeleteHostKey']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DeleteHostKey']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceDeleteHostKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.DeleteHostKey']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.DeleteHostKey'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceDeleteHostKey<
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
                    (typeof client)['#X-Amz-Target=TransferService.DeleteHostKey']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DeleteHostKey']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetTransferServiceDeleteHostKeyMutationOptions<
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

export function getPostXAmzTargetTransferServiceDeleteProfileMutationKey() {
  return [
    '#X-Amz-Target=TransferService.DeleteProfile',
    '/#X-Amz-Target=TransferService.DeleteProfile',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceDeleteProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TransferService.DeleteProfile']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DeleteProfile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceDeleteProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.DeleteProfile']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.DeleteProfile'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceDeleteProfile<
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
                    (typeof client)['#X-Amz-Target=TransferService.DeleteProfile']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DeleteProfile']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetTransferServiceDeleteProfileMutationOptions<
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

export function getPostXAmzTargetTransferServiceDeleteServerMutationKey() {
  return [
    '#X-Amz-Target=TransferService.DeleteServer',
    '/#X-Amz-Target=TransferService.DeleteServer',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceDeleteServerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TransferService.DeleteServer']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DeleteServer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceDeleteServerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.DeleteServer']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.DeleteServer'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceDeleteServer<
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
                  ReturnType<(typeof client)['#X-Amz-Target=TransferService.DeleteServer']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DeleteServer']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetTransferServiceDeleteServerMutationOptions<
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

export function getPostXAmzTargetTransferServiceDeleteSshPublicKeyMutationKey() {
  return [
    '#X-Amz-Target=TransferService.DeleteSshPublicKey',
    '/#X-Amz-Target=TransferService.DeleteSshPublicKey',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceDeleteSshPublicKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TransferService.DeleteSshPublicKey']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DeleteSshPublicKey']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceDeleteSshPublicKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.DeleteSshPublicKey']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.DeleteSshPublicKey'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceDeleteSshPublicKey<
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
                    (typeof client)['#X-Amz-Target=TransferService.DeleteSshPublicKey']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=TransferService.DeleteSshPublicKey']['$post']
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
    const mutationDefaults = getPostXAmzTargetTransferServiceDeleteSshPublicKeyMutationOptions<
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

export function getPostXAmzTargetTransferServiceDeleteUserMutationKey() {
  return [
    '#X-Amz-Target=TransferService.DeleteUser',
    '/#X-Amz-Target=TransferService.DeleteUser',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceDeleteUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TransferService.DeleteUser']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DeleteUser']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceDeleteUserMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DeleteUser']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=TransferService.DeleteUser'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetTransferServiceDeleteUser<
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
                  ReturnType<(typeof client)['#X-Amz-Target=TransferService.DeleteUser']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DeleteUser']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetTransferServiceDeleteUserMutationOptions<
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

export function getPostXAmzTargetTransferServiceDeleteWorkflowMutationKey() {
  return [
    '#X-Amz-Target=TransferService.DeleteWorkflow',
    '/#X-Amz-Target=TransferService.DeleteWorkflow',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceDeleteWorkflowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TransferService.DeleteWorkflow']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DeleteWorkflow']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceDeleteWorkflowMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.DeleteWorkflow']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.DeleteWorkflow'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceDeleteWorkflow<
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
                    (typeof client)['#X-Amz-Target=TransferService.DeleteWorkflow']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=TransferService.DeleteWorkflow']['$post']
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
    const mutationDefaults = getPostXAmzTargetTransferServiceDeleteWorkflowMutationOptions<
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

export function getPostXAmzTargetTransferServiceDescribeAccessMutationKey() {
  return [
    '#X-Amz-Target=TransferService.DescribeAccess',
    '/#X-Amz-Target=TransferService.DescribeAccess',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceDescribeAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TransferService.DescribeAccess']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DescribeAccess']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceDescribeAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.DescribeAccess']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.DescribeAccess'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceDescribeAccess<
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
                    (typeof client)['#X-Amz-Target=TransferService.DescribeAccess']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=TransferService.DescribeAccess']['$post']
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
    const mutationDefaults = getPostXAmzTargetTransferServiceDescribeAccessMutationOptions<
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

export function getPostXAmzTargetTransferServiceDescribeAgreementMutationKey() {
  return [
    '#X-Amz-Target=TransferService.DescribeAgreement',
    '/#X-Amz-Target=TransferService.DescribeAgreement',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceDescribeAgreementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TransferService.DescribeAgreement']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DescribeAgreement']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceDescribeAgreementMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.DescribeAgreement']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.DescribeAgreement'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceDescribeAgreement<
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
                    (typeof client)['#X-Amz-Target=TransferService.DescribeAgreement']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=TransferService.DescribeAgreement']['$post']
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
    const mutationDefaults = getPostXAmzTargetTransferServiceDescribeAgreementMutationOptions<
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

export function getPostXAmzTargetTransferServiceDescribeCertificateMutationKey() {
  return [
    '#X-Amz-Target=TransferService.DescribeCertificate',
    '/#X-Amz-Target=TransferService.DescribeCertificate',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceDescribeCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=TransferService.DescribeCertificate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DescribeCertificate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceDescribeCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.DescribeCertificate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.DescribeCertificate'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceDescribeCertificate<
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
                    (typeof client)['#X-Amz-Target=TransferService.DescribeCertificate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=TransferService.DescribeCertificate']['$post']
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
    const mutationDefaults = getPostXAmzTargetTransferServiceDescribeCertificateMutationOptions<
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

export function getPostXAmzTargetTransferServiceDescribeConnectorMutationKey() {
  return [
    '#X-Amz-Target=TransferService.DescribeConnector',
    '/#X-Amz-Target=TransferService.DescribeConnector',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceDescribeConnectorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TransferService.DescribeConnector']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DescribeConnector']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceDescribeConnectorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.DescribeConnector']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.DescribeConnector'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceDescribeConnector<
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
                    (typeof client)['#X-Amz-Target=TransferService.DescribeConnector']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=TransferService.DescribeConnector']['$post']
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
    const mutationDefaults = getPostXAmzTargetTransferServiceDescribeConnectorMutationOptions<
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

export function getPostXAmzTargetTransferServiceDescribeExecutionMutationKey() {
  return [
    '#X-Amz-Target=TransferService.DescribeExecution',
    '/#X-Amz-Target=TransferService.DescribeExecution',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceDescribeExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TransferService.DescribeExecution']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DescribeExecution']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceDescribeExecutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.DescribeExecution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.DescribeExecution'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceDescribeExecution<
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
                    (typeof client)['#X-Amz-Target=TransferService.DescribeExecution']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=TransferService.DescribeExecution']['$post']
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
    const mutationDefaults = getPostXAmzTargetTransferServiceDescribeExecutionMutationOptions<
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

export function getPostXAmzTargetTransferServiceDescribeHostKeyMutationKey() {
  return [
    '#X-Amz-Target=TransferService.DescribeHostKey',
    '/#X-Amz-Target=TransferService.DescribeHostKey',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceDescribeHostKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TransferService.DescribeHostKey']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DescribeHostKey']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceDescribeHostKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.DescribeHostKey']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.DescribeHostKey'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceDescribeHostKey<
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
                    (typeof client)['#X-Amz-Target=TransferService.DescribeHostKey']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=TransferService.DescribeHostKey']['$post']
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
    const mutationDefaults = getPostXAmzTargetTransferServiceDescribeHostKeyMutationOptions<
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

export function getPostXAmzTargetTransferServiceDescribeProfileMutationKey() {
  return [
    '#X-Amz-Target=TransferService.DescribeProfile',
    '/#X-Amz-Target=TransferService.DescribeProfile',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceDescribeProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TransferService.DescribeProfile']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DescribeProfile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceDescribeProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.DescribeProfile']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.DescribeProfile'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceDescribeProfile<
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
                    (typeof client)['#X-Amz-Target=TransferService.DescribeProfile']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=TransferService.DescribeProfile']['$post']
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
    const mutationDefaults = getPostXAmzTargetTransferServiceDescribeProfileMutationOptions<
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

export function getPostXAmzTargetTransferServiceDescribeSecurityPolicyMutationKey() {
  return [
    '#X-Amz-Target=TransferService.DescribeSecurityPolicy',
    '/#X-Amz-Target=TransferService.DescribeSecurityPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceDescribeSecurityPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=TransferService.DescribeSecurityPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=TransferService.DescribeSecurityPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceDescribeSecurityPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.DescribeSecurityPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.DescribeSecurityPolicy'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceDescribeSecurityPolicy<
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
                    (typeof client)['#X-Amz-Target=TransferService.DescribeSecurityPolicy']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=TransferService.DescribeSecurityPolicy']['$post']
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
    const mutationDefaults = getPostXAmzTargetTransferServiceDescribeSecurityPolicyMutationOptions<
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

export function getPostXAmzTargetTransferServiceDescribeServerMutationKey() {
  return [
    '#X-Amz-Target=TransferService.DescribeServer',
    '/#X-Amz-Target=TransferService.DescribeServer',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceDescribeServerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TransferService.DescribeServer']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DescribeServer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceDescribeServerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.DescribeServer']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.DescribeServer'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceDescribeServer<
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
                    (typeof client)['#X-Amz-Target=TransferService.DescribeServer']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=TransferService.DescribeServer']['$post']
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
    const mutationDefaults = getPostXAmzTargetTransferServiceDescribeServerMutationOptions<
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

export function getPostXAmzTargetTransferServiceDescribeUserMutationKey() {
  return [
    '#X-Amz-Target=TransferService.DescribeUser',
    '/#X-Amz-Target=TransferService.DescribeUser',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceDescribeUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TransferService.DescribeUser']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DescribeUser']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceDescribeUserMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.DescribeUser']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.DescribeUser'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceDescribeUser<
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
                  ReturnType<(typeof client)['#X-Amz-Target=TransferService.DescribeUser']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DescribeUser']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetTransferServiceDescribeUserMutationOptions<
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

export function getPostXAmzTargetTransferServiceDescribeWorkflowMutationKey() {
  return [
    '#X-Amz-Target=TransferService.DescribeWorkflow',
    '/#X-Amz-Target=TransferService.DescribeWorkflow',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceDescribeWorkflowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TransferService.DescribeWorkflow']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DescribeWorkflow']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceDescribeWorkflowMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.DescribeWorkflow']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.DescribeWorkflow'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceDescribeWorkflow<
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
                    (typeof client)['#X-Amz-Target=TransferService.DescribeWorkflow']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=TransferService.DescribeWorkflow']['$post']
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
    const mutationDefaults = getPostXAmzTargetTransferServiceDescribeWorkflowMutationOptions<
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

export function getPostXAmzTargetTransferServiceImportCertificateMutationKey() {
  return [
    '#X-Amz-Target=TransferService.ImportCertificate',
    '/#X-Amz-Target=TransferService.ImportCertificate',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceImportCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TransferService.ImportCertificate']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ImportCertificate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceImportCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.ImportCertificate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.ImportCertificate'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceImportCertificate<
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
                    (typeof client)['#X-Amz-Target=TransferService.ImportCertificate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=TransferService.ImportCertificate']['$post']
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
    const mutationDefaults = getPostXAmzTargetTransferServiceImportCertificateMutationOptions<
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

export function getPostXAmzTargetTransferServiceImportHostKeyMutationKey() {
  return [
    '#X-Amz-Target=TransferService.ImportHostKey',
    '/#X-Amz-Target=TransferService.ImportHostKey',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceImportHostKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TransferService.ImportHostKey']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ImportHostKey']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceImportHostKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.ImportHostKey']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.ImportHostKey'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceImportHostKey<
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
                    (typeof client)['#X-Amz-Target=TransferService.ImportHostKey']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ImportHostKey']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetTransferServiceImportHostKeyMutationOptions<
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

export function getPostXAmzTargetTransferServiceImportSshPublicKeyMutationKey() {
  return [
    '#X-Amz-Target=TransferService.ImportSshPublicKey',
    '/#X-Amz-Target=TransferService.ImportSshPublicKey',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceImportSshPublicKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TransferService.ImportSshPublicKey']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ImportSshPublicKey']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceImportSshPublicKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.ImportSshPublicKey']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.ImportSshPublicKey'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceImportSshPublicKey<
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
                    (typeof client)['#X-Amz-Target=TransferService.ImportSshPublicKey']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=TransferService.ImportSshPublicKey']['$post']
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
    const mutationDefaults = getPostXAmzTargetTransferServiceImportSshPublicKeyMutationOptions<
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

export function getPostXAmzTargetTransferServiceListAccessesMutationKey() {
  return [
    '#X-Amz-Target=TransferService.ListAccesses',
    '/#X-Amz-Target=TransferService.ListAccesses',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceListAccessesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TransferService.ListAccesses']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ListAccesses']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceListAccessesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.ListAccesses']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.ListAccesses'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceListAccesses<
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
                  ReturnType<(typeof client)['#X-Amz-Target=TransferService.ListAccesses']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ListAccesses']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetTransferServiceListAccessesMutationOptions<
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

export function getPostXAmzTargetTransferServiceListAgreementsMutationKey() {
  return [
    '#X-Amz-Target=TransferService.ListAgreements',
    '/#X-Amz-Target=TransferService.ListAgreements',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceListAgreementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TransferService.ListAgreements']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ListAgreements']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceListAgreementsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.ListAgreements']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.ListAgreements'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceListAgreements<
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
                    (typeof client)['#X-Amz-Target=TransferService.ListAgreements']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=TransferService.ListAgreements']['$post']
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
    const mutationDefaults = getPostXAmzTargetTransferServiceListAgreementsMutationOptions<
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

export function getPostXAmzTargetTransferServiceListCertificatesMutationKey() {
  return [
    '#X-Amz-Target=TransferService.ListCertificates',
    '/#X-Amz-Target=TransferService.ListCertificates',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceListCertificatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TransferService.ListCertificates']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ListCertificates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceListCertificatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.ListCertificates']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.ListCertificates'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceListCertificates<
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
                    (typeof client)['#X-Amz-Target=TransferService.ListCertificates']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=TransferService.ListCertificates']['$post']
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
    const mutationDefaults = getPostXAmzTargetTransferServiceListCertificatesMutationOptions<
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

export function getPostXAmzTargetTransferServiceListConnectorsMutationKey() {
  return [
    '#X-Amz-Target=TransferService.ListConnectors',
    '/#X-Amz-Target=TransferService.ListConnectors',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceListConnectorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TransferService.ListConnectors']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ListConnectors']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceListConnectorsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.ListConnectors']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.ListConnectors'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceListConnectors<
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
                    (typeof client)['#X-Amz-Target=TransferService.ListConnectors']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=TransferService.ListConnectors']['$post']
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
    const mutationDefaults = getPostXAmzTargetTransferServiceListConnectorsMutationOptions<
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

export function getPostXAmzTargetTransferServiceListExecutionsMutationKey() {
  return [
    '#X-Amz-Target=TransferService.ListExecutions',
    '/#X-Amz-Target=TransferService.ListExecutions',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceListExecutionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TransferService.ListExecutions']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ListExecutions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceListExecutionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.ListExecutions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.ListExecutions'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceListExecutions<
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
                    (typeof client)['#X-Amz-Target=TransferService.ListExecutions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=TransferService.ListExecutions']['$post']
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
    const mutationDefaults = getPostXAmzTargetTransferServiceListExecutionsMutationOptions<
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

export function getPostXAmzTargetTransferServiceListHostKeysMutationKey() {
  return [
    '#X-Amz-Target=TransferService.ListHostKeys',
    '/#X-Amz-Target=TransferService.ListHostKeys',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceListHostKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TransferService.ListHostKeys']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ListHostKeys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceListHostKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.ListHostKeys']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.ListHostKeys'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceListHostKeys<
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
                  ReturnType<(typeof client)['#X-Amz-Target=TransferService.ListHostKeys']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ListHostKeys']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetTransferServiceListHostKeysMutationOptions<
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

export function getPostXAmzTargetTransferServiceListProfilesMutationKey() {
  return [
    '#X-Amz-Target=TransferService.ListProfiles',
    '/#X-Amz-Target=TransferService.ListProfiles',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceListProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TransferService.ListProfiles']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ListProfiles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceListProfilesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.ListProfiles']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.ListProfiles'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceListProfiles<
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
                  ReturnType<(typeof client)['#X-Amz-Target=TransferService.ListProfiles']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ListProfiles']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetTransferServiceListProfilesMutationOptions<
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

export function getPostXAmzTargetTransferServiceListSecurityPoliciesMutationKey() {
  return [
    '#X-Amz-Target=TransferService.ListSecurityPolicies',
    '/#X-Amz-Target=TransferService.ListSecurityPolicies',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceListSecurityPoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=TransferService.ListSecurityPolicies']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=TransferService.ListSecurityPolicies']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceListSecurityPoliciesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.ListSecurityPolicies']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.ListSecurityPolicies'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceListSecurityPolicies<
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
                    (typeof client)['#X-Amz-Target=TransferService.ListSecurityPolicies']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=TransferService.ListSecurityPolicies']['$post']
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
    const mutationDefaults = getPostXAmzTargetTransferServiceListSecurityPoliciesMutationOptions<
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

export function getPostXAmzTargetTransferServiceListServersMutationKey() {
  return [
    '#X-Amz-Target=TransferService.ListServers',
    '/#X-Amz-Target=TransferService.ListServers',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceListServersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TransferService.ListServers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ListServers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceListServersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ListServers']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=TransferService.ListServers'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetTransferServiceListServers<
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
                  ReturnType<(typeof client)['#X-Amz-Target=TransferService.ListServers']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ListServers']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetTransferServiceListServersMutationOptions<
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

export function getPostXAmzTargetTransferServiceListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=TransferService.ListTagsForResource',
    '/#X-Amz-Target=TransferService.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=TransferService.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ListTagsForResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceListTagsForResource<
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
                    (typeof client)['#X-Amz-Target=TransferService.ListTagsForResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=TransferService.ListTagsForResource']['$post']
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
    const mutationDefaults = getPostXAmzTargetTransferServiceListTagsForResourceMutationOptions<
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

export function getPostXAmzTargetTransferServiceListUsersMutationKey() {
  return [
    '#X-Amz-Target=TransferService.ListUsers',
    '/#X-Amz-Target=TransferService.ListUsers',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceListUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TransferService.ListUsers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ListUsers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceListUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ListUsers']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=TransferService.ListUsers'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetTransferServiceListUsers<
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
                  ReturnType<(typeof client)['#X-Amz-Target=TransferService.ListUsers']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ListUsers']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetTransferServiceListUsersMutationOptions<
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

export function getPostXAmzTargetTransferServiceListWorkflowsMutationKey() {
  return [
    '#X-Amz-Target=TransferService.ListWorkflows',
    '/#X-Amz-Target=TransferService.ListWorkflows',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceListWorkflowsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TransferService.ListWorkflows']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ListWorkflows']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceListWorkflowsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.ListWorkflows']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.ListWorkflows'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceListWorkflows<
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
                    (typeof client)['#X-Amz-Target=TransferService.ListWorkflows']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ListWorkflows']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetTransferServiceListWorkflowsMutationOptions<
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

export function getPostXAmzTargetTransferServiceSendWorkflowStepStateMutationKey() {
  return [
    '#X-Amz-Target=TransferService.SendWorkflowStepState',
    '/#X-Amz-Target=TransferService.SendWorkflowStepState',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceSendWorkflowStepStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=TransferService.SendWorkflowStepState']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=TransferService.SendWorkflowStepState']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceSendWorkflowStepStateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.SendWorkflowStepState']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.SendWorkflowStepState'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceSendWorkflowStepState<
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
                    (typeof client)['#X-Amz-Target=TransferService.SendWorkflowStepState']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=TransferService.SendWorkflowStepState']['$post']
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
    const mutationDefaults = getPostXAmzTargetTransferServiceSendWorkflowStepStateMutationOptions<
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

export function getPostXAmzTargetTransferServiceStartFileTransferMutationKey() {
  return [
    '#X-Amz-Target=TransferService.StartFileTransfer',
    '/#X-Amz-Target=TransferService.StartFileTransfer',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceStartFileTransferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TransferService.StartFileTransfer']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.StartFileTransfer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceStartFileTransferMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.StartFileTransfer']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.StartFileTransfer'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceStartFileTransfer<
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
                    (typeof client)['#X-Amz-Target=TransferService.StartFileTransfer']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=TransferService.StartFileTransfer']['$post']
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
    const mutationDefaults = getPostXAmzTargetTransferServiceStartFileTransferMutationOptions<
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

export function getPostXAmzTargetTransferServiceStartServerMutationKey() {
  return [
    '#X-Amz-Target=TransferService.StartServer',
    '/#X-Amz-Target=TransferService.StartServer',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceStartServerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TransferService.StartServer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.StartServer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceStartServerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.StartServer']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=TransferService.StartServer'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetTransferServiceStartServer<
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
                  ReturnType<(typeof client)['#X-Amz-Target=TransferService.StartServer']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=TransferService.StartServer']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetTransferServiceStartServerMutationOptions<
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

export function getPostXAmzTargetTransferServiceStopServerMutationKey() {
  return [
    '#X-Amz-Target=TransferService.StopServer',
    '/#X-Amz-Target=TransferService.StopServer',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceStopServerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TransferService.StopServer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.StopServer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceStopServerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.StopServer']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=TransferService.StopServer'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetTransferServiceStopServer<
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
                  ReturnType<(typeof client)['#X-Amz-Target=TransferService.StopServer']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=TransferService.StopServer']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetTransferServiceStopServerMutationOptions<
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

export function getPostXAmzTargetTransferServiceTagResourceMutationKey() {
  return [
    '#X-Amz-Target=TransferService.TagResource',
    '/#X-Amz-Target=TransferService.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceTagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TransferService.TagResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceTagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.TagResource']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=TransferService.TagResource'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetTransferServiceTagResource<
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
                  ReturnType<(typeof client)['#X-Amz-Target=TransferService.TagResource']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=TransferService.TagResource']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetTransferServiceTagResourceMutationOptions<
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

export function getPostXAmzTargetTransferServiceTestIdentityProviderMutationKey() {
  return [
    '#X-Amz-Target=TransferService.TestIdentityProvider',
    '/#X-Amz-Target=TransferService.TestIdentityProvider',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceTestIdentityProviderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=TransferService.TestIdentityProvider']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=TransferService.TestIdentityProvider']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceTestIdentityProviderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.TestIdentityProvider']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.TestIdentityProvider'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceTestIdentityProvider<
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
                    (typeof client)['#X-Amz-Target=TransferService.TestIdentityProvider']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=TransferService.TestIdentityProvider']['$post']
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
    const mutationDefaults = getPostXAmzTargetTransferServiceTestIdentityProviderMutationOptions<
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

export function getPostXAmzTargetTransferServiceUntagResourceMutationKey() {
  return [
    '#X-Amz-Target=TransferService.UntagResource',
    '/#X-Amz-Target=TransferService.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TransferService.UntagResource']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceUntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.UntagResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceUntagResource<
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
                    (typeof client)['#X-Amz-Target=TransferService.UntagResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=TransferService.UntagResource']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetTransferServiceUntagResourceMutationOptions<
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

export function getPostXAmzTargetTransferServiceUpdateAccessMutationKey() {
  return [
    '#X-Amz-Target=TransferService.UpdateAccess',
    '/#X-Amz-Target=TransferService.UpdateAccess',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceUpdateAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TransferService.UpdateAccess']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.UpdateAccess']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceUpdateAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.UpdateAccess']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.UpdateAccess'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceUpdateAccess<
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
                  ReturnType<(typeof client)['#X-Amz-Target=TransferService.UpdateAccess']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=TransferService.UpdateAccess']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetTransferServiceUpdateAccessMutationOptions<
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

export function getPostXAmzTargetTransferServiceUpdateAgreementMutationKey() {
  return [
    '#X-Amz-Target=TransferService.UpdateAgreement',
    '/#X-Amz-Target=TransferService.UpdateAgreement',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceUpdateAgreementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TransferService.UpdateAgreement']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.UpdateAgreement']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceUpdateAgreementMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.UpdateAgreement']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.UpdateAgreement'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceUpdateAgreement<
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
                    (typeof client)['#X-Amz-Target=TransferService.UpdateAgreement']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=TransferService.UpdateAgreement']['$post']
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
    const mutationDefaults = getPostXAmzTargetTransferServiceUpdateAgreementMutationOptions<
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

export function getPostXAmzTargetTransferServiceUpdateCertificateMutationKey() {
  return [
    '#X-Amz-Target=TransferService.UpdateCertificate',
    '/#X-Amz-Target=TransferService.UpdateCertificate',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceUpdateCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TransferService.UpdateCertificate']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.UpdateCertificate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceUpdateCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.UpdateCertificate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.UpdateCertificate'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceUpdateCertificate<
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
                    (typeof client)['#X-Amz-Target=TransferService.UpdateCertificate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=TransferService.UpdateCertificate']['$post']
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
    const mutationDefaults = getPostXAmzTargetTransferServiceUpdateCertificateMutationOptions<
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

export function getPostXAmzTargetTransferServiceUpdateConnectorMutationKey() {
  return [
    '#X-Amz-Target=TransferService.UpdateConnector',
    '/#X-Amz-Target=TransferService.UpdateConnector',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceUpdateConnectorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TransferService.UpdateConnector']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.UpdateConnector']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceUpdateConnectorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.UpdateConnector']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.UpdateConnector'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceUpdateConnector<
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
                    (typeof client)['#X-Amz-Target=TransferService.UpdateConnector']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=TransferService.UpdateConnector']['$post']
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
    const mutationDefaults = getPostXAmzTargetTransferServiceUpdateConnectorMutationOptions<
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

export function getPostXAmzTargetTransferServiceUpdateHostKeyMutationKey() {
  return [
    '#X-Amz-Target=TransferService.UpdateHostKey',
    '/#X-Amz-Target=TransferService.UpdateHostKey',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceUpdateHostKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TransferService.UpdateHostKey']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.UpdateHostKey']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceUpdateHostKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.UpdateHostKey']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.UpdateHostKey'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceUpdateHostKey<
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
                    (typeof client)['#X-Amz-Target=TransferService.UpdateHostKey']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=TransferService.UpdateHostKey']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetTransferServiceUpdateHostKeyMutationOptions<
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

export function getPostXAmzTargetTransferServiceUpdateProfileMutationKey() {
  return [
    '#X-Amz-Target=TransferService.UpdateProfile',
    '/#X-Amz-Target=TransferService.UpdateProfile',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceUpdateProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TransferService.UpdateProfile']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.UpdateProfile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceUpdateProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.UpdateProfile']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.UpdateProfile'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceUpdateProfile<
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
                    (typeof client)['#X-Amz-Target=TransferService.UpdateProfile']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=TransferService.UpdateProfile']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetTransferServiceUpdateProfileMutationOptions<
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

export function getPostXAmzTargetTransferServiceUpdateServerMutationKey() {
  return [
    '#X-Amz-Target=TransferService.UpdateServer',
    '/#X-Amz-Target=TransferService.UpdateServer',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceUpdateServerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TransferService.UpdateServer']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.UpdateServer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceUpdateServerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TransferService.UpdateServer']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TransferService.UpdateServer'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTransferServiceUpdateServer<
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
                  ReturnType<(typeof client)['#X-Amz-Target=TransferService.UpdateServer']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=TransferService.UpdateServer']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetTransferServiceUpdateServerMutationOptions<
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

export function getPostXAmzTargetTransferServiceUpdateUserMutationKey() {
  return [
    '#X-Amz-Target=TransferService.UpdateUser',
    '/#X-Amz-Target=TransferService.UpdateUser',
    'POST',
  ] as const
}

export function getPostXAmzTargetTransferServiceUpdateUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TransferService.UpdateUser']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.UpdateUser']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTransferServiceUpdateUserMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.UpdateUser']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=TransferService.UpdateUser'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetTransferServiceUpdateUser<
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
                  ReturnType<(typeof client)['#X-Amz-Target=TransferService.UpdateUser']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=TransferService.UpdateUser']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetTransferServiceUpdateUserMutationOptions<
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
