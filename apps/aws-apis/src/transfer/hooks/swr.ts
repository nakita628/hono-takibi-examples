import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetTransferServiceCreateAccessKey() {
  return [
    '#X-Amz-Target=TransferService.CreateAccess',
    '/#X-Amz-Target=TransferService.CreateAccess',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceCreateAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.CreateAccess']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceCreateAccessKey()
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
            (typeof client)['#X-Amz-Target=TransferService.CreateAccess']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.CreateAccess'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceCreateAgreementKey() {
  return [
    '#X-Amz-Target=TransferService.CreateAgreement',
    '/#X-Amz-Target=TransferService.CreateAgreement',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceCreateAgreement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.CreateAgreement']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceCreateAgreementKey()
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
            (typeof client)['#X-Amz-Target=TransferService.CreateAgreement']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.CreateAgreement'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceCreateConnectorKey() {
  return [
    '#X-Amz-Target=TransferService.CreateConnector',
    '/#X-Amz-Target=TransferService.CreateConnector',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceCreateConnector<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.CreateConnector']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceCreateConnectorKey()
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
            (typeof client)['#X-Amz-Target=TransferService.CreateConnector']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.CreateConnector'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceCreateProfileKey() {
  return [
    '#X-Amz-Target=TransferService.CreateProfile',
    '/#X-Amz-Target=TransferService.CreateProfile',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceCreateProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.CreateProfile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceCreateProfileKey()
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
            (typeof client)['#X-Amz-Target=TransferService.CreateProfile']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.CreateProfile'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceCreateServerKey() {
  return [
    '#X-Amz-Target=TransferService.CreateServer',
    '/#X-Amz-Target=TransferService.CreateServer',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceCreateServer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.CreateServer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceCreateServerKey()
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
            (typeof client)['#X-Amz-Target=TransferService.CreateServer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.CreateServer'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceCreateUserKey() {
  return [
    '#X-Amz-Target=TransferService.CreateUser',
    '/#X-Amz-Target=TransferService.CreateUser',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceCreateUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TransferService.CreateUser']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.CreateUser']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceCreateUserKey()
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
            (typeof client)['#X-Amz-Target=TransferService.CreateUser']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=TransferService.CreateUser'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceCreateWorkflowKey() {
  return [
    '#X-Amz-Target=TransferService.CreateWorkflow',
    '/#X-Amz-Target=TransferService.CreateWorkflow',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceCreateWorkflow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.CreateWorkflow']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceCreateWorkflowKey()
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
            (typeof client)['#X-Amz-Target=TransferService.CreateWorkflow']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.CreateWorkflow'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceDeleteAccessKey() {
  return [
    '#X-Amz-Target=TransferService.DeleteAccess',
    '/#X-Amz-Target=TransferService.DeleteAccess',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceDeleteAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DeleteAccess']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceDeleteAccessKey()
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
            (typeof client)['#X-Amz-Target=TransferService.DeleteAccess']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.DeleteAccess'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceDeleteAgreementKey() {
  return [
    '#X-Amz-Target=TransferService.DeleteAgreement',
    '/#X-Amz-Target=TransferService.DeleteAgreement',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceDeleteAgreement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DeleteAgreement']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceDeleteAgreementKey()
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
            (typeof client)['#X-Amz-Target=TransferService.DeleteAgreement']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.DeleteAgreement'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceDeleteCertificateKey() {
  return [
    '#X-Amz-Target=TransferService.DeleteCertificate',
    '/#X-Amz-Target=TransferService.DeleteCertificate',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceDeleteCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DeleteCertificate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceDeleteCertificateKey()
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
            (typeof client)['#X-Amz-Target=TransferService.DeleteCertificate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.DeleteCertificate'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceDeleteConnectorKey() {
  return [
    '#X-Amz-Target=TransferService.DeleteConnector',
    '/#X-Amz-Target=TransferService.DeleteConnector',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceDeleteConnector<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DeleteConnector']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceDeleteConnectorKey()
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
            (typeof client)['#X-Amz-Target=TransferService.DeleteConnector']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.DeleteConnector'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceDeleteHostKeyKey() {
  return [
    '#X-Amz-Target=TransferService.DeleteHostKey',
    '/#X-Amz-Target=TransferService.DeleteHostKey',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceDeleteHostKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DeleteHostKey']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceDeleteHostKeyKey()
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
            (typeof client)['#X-Amz-Target=TransferService.DeleteHostKey']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.DeleteHostKey'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceDeleteProfileKey() {
  return [
    '#X-Amz-Target=TransferService.DeleteProfile',
    '/#X-Amz-Target=TransferService.DeleteProfile',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceDeleteProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DeleteProfile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceDeleteProfileKey()
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
            (typeof client)['#X-Amz-Target=TransferService.DeleteProfile']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.DeleteProfile'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceDeleteServerKey() {
  return [
    '#X-Amz-Target=TransferService.DeleteServer',
    '/#X-Amz-Target=TransferService.DeleteServer',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceDeleteServer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DeleteServer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceDeleteServerKey()
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
            (typeof client)['#X-Amz-Target=TransferService.DeleteServer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.DeleteServer'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceDeleteSshPublicKeyKey() {
  return [
    '#X-Amz-Target=TransferService.DeleteSshPublicKey',
    '/#X-Amz-Target=TransferService.DeleteSshPublicKey',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceDeleteSshPublicKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DeleteSshPublicKey']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceDeleteSshPublicKeyKey()
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
            (typeof client)['#X-Amz-Target=TransferService.DeleteSshPublicKey']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.DeleteSshPublicKey'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceDeleteUserKey() {
  return [
    '#X-Amz-Target=TransferService.DeleteUser',
    '/#X-Amz-Target=TransferService.DeleteUser',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceDeleteUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TransferService.DeleteUser']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DeleteUser']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceDeleteUserKey()
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
            (typeof client)['#X-Amz-Target=TransferService.DeleteUser']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=TransferService.DeleteUser'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceDeleteWorkflowKey() {
  return [
    '#X-Amz-Target=TransferService.DeleteWorkflow',
    '/#X-Amz-Target=TransferService.DeleteWorkflow',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceDeleteWorkflow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DeleteWorkflow']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceDeleteWorkflowKey()
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
            (typeof client)['#X-Amz-Target=TransferService.DeleteWorkflow']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.DeleteWorkflow'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceDescribeAccessKey() {
  return [
    '#X-Amz-Target=TransferService.DescribeAccess',
    '/#X-Amz-Target=TransferService.DescribeAccess',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceDescribeAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DescribeAccess']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceDescribeAccessKey()
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
            (typeof client)['#X-Amz-Target=TransferService.DescribeAccess']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.DescribeAccess'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceDescribeAgreementKey() {
  return [
    '#X-Amz-Target=TransferService.DescribeAgreement',
    '/#X-Amz-Target=TransferService.DescribeAgreement',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceDescribeAgreement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DescribeAgreement']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceDescribeAgreementKey()
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
            (typeof client)['#X-Amz-Target=TransferService.DescribeAgreement']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.DescribeAgreement'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceDescribeCertificateKey() {
  return [
    '#X-Amz-Target=TransferService.DescribeCertificate',
    '/#X-Amz-Target=TransferService.DescribeCertificate',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceDescribeCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DescribeCertificate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceDescribeCertificateKey()
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
            (typeof client)['#X-Amz-Target=TransferService.DescribeCertificate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.DescribeCertificate'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceDescribeConnectorKey() {
  return [
    '#X-Amz-Target=TransferService.DescribeConnector',
    '/#X-Amz-Target=TransferService.DescribeConnector',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceDescribeConnector<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DescribeConnector']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceDescribeConnectorKey()
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
            (typeof client)['#X-Amz-Target=TransferService.DescribeConnector']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.DescribeConnector'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceDescribeExecutionKey() {
  return [
    '#X-Amz-Target=TransferService.DescribeExecution',
    '/#X-Amz-Target=TransferService.DescribeExecution',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceDescribeExecution<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DescribeExecution']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceDescribeExecutionKey()
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
            (typeof client)['#X-Amz-Target=TransferService.DescribeExecution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.DescribeExecution'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceDescribeHostKeyKey() {
  return [
    '#X-Amz-Target=TransferService.DescribeHostKey',
    '/#X-Amz-Target=TransferService.DescribeHostKey',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceDescribeHostKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DescribeHostKey']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceDescribeHostKeyKey()
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
            (typeof client)['#X-Amz-Target=TransferService.DescribeHostKey']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.DescribeHostKey'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceDescribeProfileKey() {
  return [
    '#X-Amz-Target=TransferService.DescribeProfile',
    '/#X-Amz-Target=TransferService.DescribeProfile',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceDescribeProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DescribeProfile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceDescribeProfileKey()
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
            (typeof client)['#X-Amz-Target=TransferService.DescribeProfile']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.DescribeProfile'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceDescribeSecurityPolicyKey() {
  return [
    '#X-Amz-Target=TransferService.DescribeSecurityPolicy',
    '/#X-Amz-Target=TransferService.DescribeSecurityPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceDescribeSecurityPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=TransferService.DescribeSecurityPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceDescribeSecurityPolicyKey()
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
            (typeof client)['#X-Amz-Target=TransferService.DescribeSecurityPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.DescribeSecurityPolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceDescribeServerKey() {
  return [
    '#X-Amz-Target=TransferService.DescribeServer',
    '/#X-Amz-Target=TransferService.DescribeServer',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceDescribeServer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DescribeServer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceDescribeServerKey()
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
            (typeof client)['#X-Amz-Target=TransferService.DescribeServer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.DescribeServer'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceDescribeUserKey() {
  return [
    '#X-Amz-Target=TransferService.DescribeUser',
    '/#X-Amz-Target=TransferService.DescribeUser',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceDescribeUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DescribeUser']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceDescribeUserKey()
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
            (typeof client)['#X-Amz-Target=TransferService.DescribeUser']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.DescribeUser'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceDescribeWorkflowKey() {
  return [
    '#X-Amz-Target=TransferService.DescribeWorkflow',
    '/#X-Amz-Target=TransferService.DescribeWorkflow',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceDescribeWorkflow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DescribeWorkflow']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceDescribeWorkflowKey()
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
            (typeof client)['#X-Amz-Target=TransferService.DescribeWorkflow']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.DescribeWorkflow'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceImportCertificateKey() {
  return [
    '#X-Amz-Target=TransferService.ImportCertificate',
    '/#X-Amz-Target=TransferService.ImportCertificate',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceImportCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ImportCertificate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceImportCertificateKey()
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
            (typeof client)['#X-Amz-Target=TransferService.ImportCertificate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.ImportCertificate'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceImportHostKeyKey() {
  return [
    '#X-Amz-Target=TransferService.ImportHostKey',
    '/#X-Amz-Target=TransferService.ImportHostKey',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceImportHostKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ImportHostKey']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceImportHostKeyKey()
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
            (typeof client)['#X-Amz-Target=TransferService.ImportHostKey']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.ImportHostKey'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceImportSshPublicKeyKey() {
  return [
    '#X-Amz-Target=TransferService.ImportSshPublicKey',
    '/#X-Amz-Target=TransferService.ImportSshPublicKey',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceImportSshPublicKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ImportSshPublicKey']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceImportSshPublicKeyKey()
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
            (typeof client)['#X-Amz-Target=TransferService.ImportSshPublicKey']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.ImportSshPublicKey'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceListAccessesKey() {
  return [
    '#X-Amz-Target=TransferService.ListAccesses',
    '/#X-Amz-Target=TransferService.ListAccesses',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceListAccesses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ListAccesses']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceListAccessesKey()
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
            (typeof client)['#X-Amz-Target=TransferService.ListAccesses']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.ListAccesses'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceListAgreementsKey() {
  return [
    '#X-Amz-Target=TransferService.ListAgreements',
    '/#X-Amz-Target=TransferService.ListAgreements',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceListAgreements<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ListAgreements']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceListAgreementsKey()
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
            (typeof client)['#X-Amz-Target=TransferService.ListAgreements']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.ListAgreements'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceListCertificatesKey() {
  return [
    '#X-Amz-Target=TransferService.ListCertificates',
    '/#X-Amz-Target=TransferService.ListCertificates',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceListCertificates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ListCertificates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceListCertificatesKey()
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
            (typeof client)['#X-Amz-Target=TransferService.ListCertificates']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.ListCertificates'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceListConnectorsKey() {
  return [
    '#X-Amz-Target=TransferService.ListConnectors',
    '/#X-Amz-Target=TransferService.ListConnectors',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceListConnectors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ListConnectors']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceListConnectorsKey()
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
            (typeof client)['#X-Amz-Target=TransferService.ListConnectors']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.ListConnectors'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceListExecutionsKey() {
  return [
    '#X-Amz-Target=TransferService.ListExecutions',
    '/#X-Amz-Target=TransferService.ListExecutions',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceListExecutions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ListExecutions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceListExecutionsKey()
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
            (typeof client)['#X-Amz-Target=TransferService.ListExecutions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.ListExecutions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceListHostKeysKey() {
  return [
    '#X-Amz-Target=TransferService.ListHostKeys',
    '/#X-Amz-Target=TransferService.ListHostKeys',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceListHostKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ListHostKeys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceListHostKeysKey()
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
            (typeof client)['#X-Amz-Target=TransferService.ListHostKeys']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.ListHostKeys'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceListProfilesKey() {
  return [
    '#X-Amz-Target=TransferService.ListProfiles',
    '/#X-Amz-Target=TransferService.ListProfiles',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceListProfiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ListProfiles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceListProfilesKey()
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
            (typeof client)['#X-Amz-Target=TransferService.ListProfiles']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.ListProfiles'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceListSecurityPoliciesKey() {
  return [
    '#X-Amz-Target=TransferService.ListSecurityPolicies',
    '/#X-Amz-Target=TransferService.ListSecurityPolicies',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceListSecurityPolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ListSecurityPolicies']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceListSecurityPoliciesKey()
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
            (typeof client)['#X-Amz-Target=TransferService.ListSecurityPolicies']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.ListSecurityPolicies'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceListServersKey() {
  return [
    '#X-Amz-Target=TransferService.ListServers',
    '/#X-Amz-Target=TransferService.ListServers',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceListServers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TransferService.ListServers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ListServers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceListServersKey()
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
            (typeof client)['#X-Amz-Target=TransferService.ListServers']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.ListServers'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceListTagsForResourceKey() {
  return [
    '#X-Amz-Target=TransferService.ListTagsForResource',
    '/#X-Amz-Target=TransferService.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceListTagsForResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ListTagsForResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=TransferService.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.ListTagsForResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceListUsersKey() {
  return [
    '#X-Amz-Target=TransferService.ListUsers',
    '/#X-Amz-Target=TransferService.ListUsers',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceListUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TransferService.ListUsers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ListUsers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceListUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ListUsers']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=TransferService.ListUsers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceListWorkflowsKey() {
  return [
    '#X-Amz-Target=TransferService.ListWorkflows',
    '/#X-Amz-Target=TransferService.ListWorkflows',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceListWorkflows<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ListWorkflows']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceListWorkflowsKey()
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
            (typeof client)['#X-Amz-Target=TransferService.ListWorkflows']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.ListWorkflows'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceSendWorkflowStepStateKey() {
  return [
    '#X-Amz-Target=TransferService.SendWorkflowStepState',
    '/#X-Amz-Target=TransferService.SendWorkflowStepState',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceSendWorkflowStepState<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=TransferService.SendWorkflowStepState']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceSendWorkflowStepStateKey()
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
            (typeof client)['#X-Amz-Target=TransferService.SendWorkflowStepState']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.SendWorkflowStepState'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceStartFileTransferKey() {
  return [
    '#X-Amz-Target=TransferService.StartFileTransfer',
    '/#X-Amz-Target=TransferService.StartFileTransfer',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceStartFileTransfer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.StartFileTransfer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceStartFileTransferKey()
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
            (typeof client)['#X-Amz-Target=TransferService.StartFileTransfer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.StartFileTransfer'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceStartServerKey() {
  return [
    '#X-Amz-Target=TransferService.StartServer',
    '/#X-Amz-Target=TransferService.StartServer',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceStartServer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TransferService.StartServer']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.StartServer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceStartServerKey()
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
            (typeof client)['#X-Amz-Target=TransferService.StartServer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.StartServer'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceStopServerKey() {
  return [
    '#X-Amz-Target=TransferService.StopServer',
    '/#X-Amz-Target=TransferService.StopServer',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceStopServer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TransferService.StopServer']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.StopServer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceStopServerKey()
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
            (typeof client)['#X-Amz-Target=TransferService.StopServer']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=TransferService.StopServer'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceTagResourceKey() {
  return [
    '#X-Amz-Target=TransferService.TagResource',
    '/#X-Amz-Target=TransferService.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceTagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TransferService.TagResource']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceTagResourceKey()
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
            (typeof client)['#X-Amz-Target=TransferService.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceTestIdentityProviderKey() {
  return [
    '#X-Amz-Target=TransferService.TestIdentityProvider',
    '/#X-Amz-Target=TransferService.TestIdentityProvider',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceTestIdentityProvider<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.TestIdentityProvider']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceTestIdentityProviderKey()
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
            (typeof client)['#X-Amz-Target=TransferService.TestIdentityProvider']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.TestIdentityProvider'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceUntagResourceKey() {
  return [
    '#X-Amz-Target=TransferService.UntagResource',
    '/#X-Amz-Target=TransferService.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceUntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceUntagResourceKey()
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
            (typeof client)['#X-Amz-Target=TransferService.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceUpdateAccessKey() {
  return [
    '#X-Amz-Target=TransferService.UpdateAccess',
    '/#X-Amz-Target=TransferService.UpdateAccess',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceUpdateAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.UpdateAccess']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceUpdateAccessKey()
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
            (typeof client)['#X-Amz-Target=TransferService.UpdateAccess']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.UpdateAccess'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceUpdateAgreementKey() {
  return [
    '#X-Amz-Target=TransferService.UpdateAgreement',
    '/#X-Amz-Target=TransferService.UpdateAgreement',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceUpdateAgreement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.UpdateAgreement']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceUpdateAgreementKey()
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
            (typeof client)['#X-Amz-Target=TransferService.UpdateAgreement']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.UpdateAgreement'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceUpdateCertificateKey() {
  return [
    '#X-Amz-Target=TransferService.UpdateCertificate',
    '/#X-Amz-Target=TransferService.UpdateCertificate',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceUpdateCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.UpdateCertificate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceUpdateCertificateKey()
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
            (typeof client)['#X-Amz-Target=TransferService.UpdateCertificate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.UpdateCertificate'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceUpdateConnectorKey() {
  return [
    '#X-Amz-Target=TransferService.UpdateConnector',
    '/#X-Amz-Target=TransferService.UpdateConnector',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceUpdateConnector<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.UpdateConnector']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceUpdateConnectorKey()
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
            (typeof client)['#X-Amz-Target=TransferService.UpdateConnector']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.UpdateConnector'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceUpdateHostKeyKey() {
  return [
    '#X-Amz-Target=TransferService.UpdateHostKey',
    '/#X-Amz-Target=TransferService.UpdateHostKey',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceUpdateHostKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.UpdateHostKey']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceUpdateHostKeyKey()
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
            (typeof client)['#X-Amz-Target=TransferService.UpdateHostKey']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.UpdateHostKey'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceUpdateProfileKey() {
  return [
    '#X-Amz-Target=TransferService.UpdateProfile',
    '/#X-Amz-Target=TransferService.UpdateProfile',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceUpdateProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.UpdateProfile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceUpdateProfileKey()
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
            (typeof client)['#X-Amz-Target=TransferService.UpdateProfile']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.UpdateProfile'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceUpdateServerKey() {
  return [
    '#X-Amz-Target=TransferService.UpdateServer',
    '/#X-Amz-Target=TransferService.UpdateServer',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceUpdateServer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.UpdateServer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceUpdateServerKey()
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
            (typeof client)['#X-Amz-Target=TransferService.UpdateServer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TransferService.UpdateServer'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTransferServiceUpdateUserKey() {
  return [
    '#X-Amz-Target=TransferService.UpdateUser',
    '/#X-Amz-Target=TransferService.UpdateUser',
    'POST',
  ] as const
}

export function usePostXAmzTargetTransferServiceUpdateUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TransferService.UpdateUser']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TransferService.UpdateUser']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTransferServiceUpdateUserKey()
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
            (typeof client)['#X-Amz-Target=TransferService.UpdateUser']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=TransferService.UpdateUser'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
