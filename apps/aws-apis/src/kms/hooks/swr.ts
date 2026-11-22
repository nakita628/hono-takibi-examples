import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetTrentServiceCancelKeyDeletionKey() {
  return ['#X-Amz-Target=TrentService.CancelKeyDeletion'] as const
}

export function getXAmzTargetTrentServiceConnectCustomKeyStoreKey() {
  return ['#X-Amz-Target=TrentService.ConnectCustomKeyStore'] as const
}

export function getXAmzTargetTrentServiceCreateAliasKey() {
  return ['#X-Amz-Target=TrentService.CreateAlias'] as const
}

export function getXAmzTargetTrentServiceCreateCustomKeyStoreKey() {
  return ['#X-Amz-Target=TrentService.CreateCustomKeyStore'] as const
}

export function getXAmzTargetTrentServiceCreateGrantKey() {
  return ['#X-Amz-Target=TrentService.CreateGrant'] as const
}

export function getXAmzTargetTrentServiceCreateKeyKey() {
  return ['#X-Amz-Target=TrentService.CreateKey'] as const
}

export function getXAmzTargetTrentServiceDecryptKey() {
  return ['#X-Amz-Target=TrentService.Decrypt'] as const
}

export function getXAmzTargetTrentServiceDeleteAliasKey() {
  return ['#X-Amz-Target=TrentService.DeleteAlias'] as const
}

export function getXAmzTargetTrentServiceDeleteCustomKeyStoreKey() {
  return ['#X-Amz-Target=TrentService.DeleteCustomKeyStore'] as const
}

export function getXAmzTargetTrentServiceDeleteImportedKeyMaterialKey() {
  return ['#X-Amz-Target=TrentService.DeleteImportedKeyMaterial'] as const
}

export function getXAmzTargetTrentServiceDescribeCustomKeyStoresKey() {
  return ['#X-Amz-Target=TrentService.DescribeCustomKeyStores'] as const
}

export function getXAmzTargetTrentServiceDescribeKeyKey() {
  return ['#X-Amz-Target=TrentService.DescribeKey'] as const
}

export function getXAmzTargetTrentServiceDisableKeyKey() {
  return ['#X-Amz-Target=TrentService.DisableKey'] as const
}

export function getXAmzTargetTrentServiceDisableKeyRotationKey() {
  return ['#X-Amz-Target=TrentService.DisableKeyRotation'] as const
}

export function getXAmzTargetTrentServiceDisconnectCustomKeyStoreKey() {
  return ['#X-Amz-Target=TrentService.DisconnectCustomKeyStore'] as const
}

export function getXAmzTargetTrentServiceEnableKeyKey() {
  return ['#X-Amz-Target=TrentService.EnableKey'] as const
}

export function getXAmzTargetTrentServiceEnableKeyRotationKey() {
  return ['#X-Amz-Target=TrentService.EnableKeyRotation'] as const
}

export function getXAmzTargetTrentServiceEncryptKey() {
  return ['#X-Amz-Target=TrentService.Encrypt'] as const
}

export function getXAmzTargetTrentServiceGenerateDataKeyKey() {
  return ['#X-Amz-Target=TrentService.GenerateDataKey'] as const
}

export function getXAmzTargetTrentServiceGenerateDataKeyPairKey() {
  return ['#X-Amz-Target=TrentService.GenerateDataKeyPair'] as const
}

export function getXAmzTargetTrentServiceGenerateDataKeyPairWithoutPlaintextKey() {
  return ['#X-Amz-Target=TrentService.GenerateDataKeyPairWithoutPlaintext'] as const
}

export function getXAmzTargetTrentServiceGenerateDataKeyWithoutPlaintextKey() {
  return ['#X-Amz-Target=TrentService.GenerateDataKeyWithoutPlaintext'] as const
}

export function getXAmzTargetTrentServiceGenerateMacKey() {
  return ['#X-Amz-Target=TrentService.GenerateMac'] as const
}

export function getXAmzTargetTrentServiceGenerateRandomKey() {
  return ['#X-Amz-Target=TrentService.GenerateRandom'] as const
}

export function getXAmzTargetTrentServiceGetKeyPolicyKey() {
  return ['#X-Amz-Target=TrentService.GetKeyPolicy'] as const
}

export function getXAmzTargetTrentServiceGetKeyRotationStatusKey() {
  return ['#X-Amz-Target=TrentService.GetKeyRotationStatus'] as const
}

export function getXAmzTargetTrentServiceGetParametersForImportKey() {
  return ['#X-Amz-Target=TrentService.GetParametersForImport'] as const
}

export function getXAmzTargetTrentServiceGetPublicKeyKey() {
  return ['#X-Amz-Target=TrentService.GetPublicKey'] as const
}

export function getXAmzTargetTrentServiceImportKeyMaterialKey() {
  return ['#X-Amz-Target=TrentService.ImportKeyMaterial'] as const
}

export function getXAmzTargetTrentServiceListAliasesKey() {
  return ['#X-Amz-Target=TrentService.ListAliases'] as const
}

export function getXAmzTargetTrentServiceListGrantsKey() {
  return ['#X-Amz-Target=TrentService.ListGrants'] as const
}

export function getXAmzTargetTrentServiceListKeyPoliciesKey() {
  return ['#X-Amz-Target=TrentService.ListKeyPolicies'] as const
}

export function getXAmzTargetTrentServiceListKeysKey() {
  return ['#X-Amz-Target=TrentService.ListKeys'] as const
}

export function getXAmzTargetTrentServiceListResourceTagsKey() {
  return ['#X-Amz-Target=TrentService.ListResourceTags'] as const
}

export function getXAmzTargetTrentServiceListRetirableGrantsKey() {
  return ['#X-Amz-Target=TrentService.ListRetirableGrants'] as const
}

export function getXAmzTargetTrentServicePutKeyPolicyKey() {
  return ['#X-Amz-Target=TrentService.PutKeyPolicy'] as const
}

export function getXAmzTargetTrentServiceReEncryptKey() {
  return ['#X-Amz-Target=TrentService.ReEncrypt'] as const
}

export function getXAmzTargetTrentServiceReplicateKeyKey() {
  return ['#X-Amz-Target=TrentService.ReplicateKey'] as const
}

export function getXAmzTargetTrentServiceRetireGrantKey() {
  return ['#X-Amz-Target=TrentService.RetireGrant'] as const
}

export function getXAmzTargetTrentServiceRevokeGrantKey() {
  return ['#X-Amz-Target=TrentService.RevokeGrant'] as const
}

export function getXAmzTargetTrentServiceScheduleKeyDeletionKey() {
  return ['#X-Amz-Target=TrentService.ScheduleKeyDeletion'] as const
}

export function getXAmzTargetTrentServiceSignKey() {
  return ['#X-Amz-Target=TrentService.Sign'] as const
}

export function getXAmzTargetTrentServiceTagResourceKey() {
  return ['#X-Amz-Target=TrentService.TagResource'] as const
}

export function getXAmzTargetTrentServiceUntagResourceKey() {
  return ['#X-Amz-Target=TrentService.UntagResource'] as const
}

export function getXAmzTargetTrentServiceUpdateAliasKey() {
  return ['#X-Amz-Target=TrentService.UpdateAlias'] as const
}

export function getXAmzTargetTrentServiceUpdateCustomKeyStoreKey() {
  return ['#X-Amz-Target=TrentService.UpdateCustomKeyStore'] as const
}

export function getXAmzTargetTrentServiceUpdateKeyDescriptionKey() {
  return ['#X-Amz-Target=TrentService.UpdateKeyDescription'] as const
}

export function getXAmzTargetTrentServiceUpdatePrimaryRegionKey() {
  return ['#X-Amz-Target=TrentService.UpdatePrimaryRegion'] as const
}

export function getXAmzTargetTrentServiceVerifyKey() {
  return ['#X-Amz-Target=TrentService.Verify'] as const
}

export function getXAmzTargetTrentServiceVerifyMacKey() {
  return ['#X-Amz-Target=TrentService.VerifyMac'] as const
}

export function getPostXAmzTargetTrentServiceCancelKeyDeletionKey() {
  return [
    '#X-Amz-Target=TrentService.CancelKeyDeletion',
    '/#X-Amz-Target=TrentService.CancelKeyDeletion',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceCancelKeyDeletion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TrentService.CancelKeyDeletion']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.CancelKeyDeletion']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceCancelKeyDeletionKey()
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
            (typeof client)['#X-Amz-Target=TrentService.CancelKeyDeletion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TrentService.CancelKeyDeletion'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceConnectCustomKeyStoreKey() {
  return [
    '#X-Amz-Target=TrentService.ConnectCustomKeyStore',
    '/#X-Amz-Target=TrentService.ConnectCustomKeyStore',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceConnectCustomKeyStore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TrentService.ConnectCustomKeyStore']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ConnectCustomKeyStore']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceConnectCustomKeyStoreKey()
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
            (typeof client)['#X-Amz-Target=TrentService.ConnectCustomKeyStore']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TrentService.ConnectCustomKeyStore'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceCreateAliasKey() {
  return [
    '#X-Amz-Target=TrentService.CreateAlias',
    '/#X-Amz-Target=TrentService.CreateAlias',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceCreateAlias<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.CreateAlias']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.CreateAlias']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceCreateAliasKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.CreateAlias']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=TrentService.CreateAlias'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceCreateCustomKeyStoreKey() {
  return [
    '#X-Amz-Target=TrentService.CreateCustomKeyStore',
    '/#X-Amz-Target=TrentService.CreateCustomKeyStore',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceCreateCustomKeyStore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TrentService.CreateCustomKeyStore']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.CreateCustomKeyStore']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceCreateCustomKeyStoreKey()
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
            (typeof client)['#X-Amz-Target=TrentService.CreateCustomKeyStore']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TrentService.CreateCustomKeyStore'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceCreateGrantKey() {
  return [
    '#X-Amz-Target=TrentService.CreateGrant',
    '/#X-Amz-Target=TrentService.CreateGrant',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceCreateGrant<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.CreateGrant']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.CreateGrant']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceCreateGrantKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.CreateGrant']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=TrentService.CreateGrant'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceCreateKeyKey() {
  return [
    '#X-Amz-Target=TrentService.CreateKey',
    '/#X-Amz-Target=TrentService.CreateKey',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceCreateKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.CreateKey']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.CreateKey']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceCreateKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.CreateKey']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=TrentService.CreateKey'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceDecryptKey() {
  return [
    '#X-Amz-Target=TrentService.Decrypt',
    '/#X-Amz-Target=TrentService.Decrypt',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceDecrypt<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.Decrypt']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.Decrypt']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceDecryptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.Decrypt']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=TrentService.Decrypt'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceDeleteAliasKey() {
  return [
    '#X-Amz-Target=TrentService.DeleteAlias',
    '/#X-Amz-Target=TrentService.DeleteAlias',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceDeleteAlias<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.DeleteAlias']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.DeleteAlias']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceDeleteAliasKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.DeleteAlias']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=TrentService.DeleteAlias'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceDeleteCustomKeyStoreKey() {
  return [
    '#X-Amz-Target=TrentService.DeleteCustomKeyStore',
    '/#X-Amz-Target=TrentService.DeleteCustomKeyStore',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceDeleteCustomKeyStore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TrentService.DeleteCustomKeyStore']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.DeleteCustomKeyStore']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceDeleteCustomKeyStoreKey()
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
            (typeof client)['#X-Amz-Target=TrentService.DeleteCustomKeyStore']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TrentService.DeleteCustomKeyStore'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceDeleteImportedKeyMaterialKey() {
  return [
    '#X-Amz-Target=TrentService.DeleteImportedKeyMaterial',
    '/#X-Amz-Target=TrentService.DeleteImportedKeyMaterial',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceDeleteImportedKeyMaterial<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=TrentService.DeleteImportedKeyMaterial']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=TrentService.DeleteImportedKeyMaterial']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceDeleteImportedKeyMaterialKey()
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
            (typeof client)['#X-Amz-Target=TrentService.DeleteImportedKeyMaterial']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TrentService.DeleteImportedKeyMaterial'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceDescribeCustomKeyStoresKey() {
  return [
    '#X-Amz-Target=TrentService.DescribeCustomKeyStores',
    '/#X-Amz-Target=TrentService.DescribeCustomKeyStores',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceDescribeCustomKeyStores<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=TrentService.DescribeCustomKeyStores']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.DescribeCustomKeyStores']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceDescribeCustomKeyStoresKey()
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
            (typeof client)['#X-Amz-Target=TrentService.DescribeCustomKeyStores']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TrentService.DescribeCustomKeyStores'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceDescribeKeyKey() {
  return [
    '#X-Amz-Target=TrentService.DescribeKey',
    '/#X-Amz-Target=TrentService.DescribeKey',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceDescribeKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.DescribeKey']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.DescribeKey']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceDescribeKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.DescribeKey']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=TrentService.DescribeKey'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceDisableKeyKey() {
  return [
    '#X-Amz-Target=TrentService.DisableKey',
    '/#X-Amz-Target=TrentService.DisableKey',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceDisableKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.DisableKey']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.DisableKey']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceDisableKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.DisableKey']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=TrentService.DisableKey'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceDisableKeyRotationKey() {
  return [
    '#X-Amz-Target=TrentService.DisableKeyRotation',
    '/#X-Amz-Target=TrentService.DisableKeyRotation',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceDisableKeyRotation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TrentService.DisableKeyRotation']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.DisableKeyRotation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceDisableKeyRotationKey()
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
            (typeof client)['#X-Amz-Target=TrentService.DisableKeyRotation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TrentService.DisableKeyRotation'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceDisconnectCustomKeyStoreKey() {
  return [
    '#X-Amz-Target=TrentService.DisconnectCustomKeyStore',
    '/#X-Amz-Target=TrentService.DisconnectCustomKeyStore',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceDisconnectCustomKeyStore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=TrentService.DisconnectCustomKeyStore']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=TrentService.DisconnectCustomKeyStore']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceDisconnectCustomKeyStoreKey()
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
            (typeof client)['#X-Amz-Target=TrentService.DisconnectCustomKeyStore']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TrentService.DisconnectCustomKeyStore'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceEnableKeyKey() {
  return [
    '#X-Amz-Target=TrentService.EnableKey',
    '/#X-Amz-Target=TrentService.EnableKey',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceEnableKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.EnableKey']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.EnableKey']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceEnableKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.EnableKey']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=TrentService.EnableKey'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceEnableKeyRotationKey() {
  return [
    '#X-Amz-Target=TrentService.EnableKeyRotation',
    '/#X-Amz-Target=TrentService.EnableKeyRotation',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceEnableKeyRotation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TrentService.EnableKeyRotation']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.EnableKeyRotation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceEnableKeyRotationKey()
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
            (typeof client)['#X-Amz-Target=TrentService.EnableKeyRotation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TrentService.EnableKeyRotation'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceEncryptKey() {
  return [
    '#X-Amz-Target=TrentService.Encrypt',
    '/#X-Amz-Target=TrentService.Encrypt',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceEncrypt<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.Encrypt']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.Encrypt']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceEncryptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.Encrypt']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=TrentService.Encrypt'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceGenerateDataKeyKey() {
  return [
    '#X-Amz-Target=TrentService.GenerateDataKey',
    '/#X-Amz-Target=TrentService.GenerateDataKey',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceGenerateDataKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TrentService.GenerateDataKey']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.GenerateDataKey']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceGenerateDataKeyKey()
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
            (typeof client)['#X-Amz-Target=TrentService.GenerateDataKey']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TrentService.GenerateDataKey'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceGenerateDataKeyPairKey() {
  return [
    '#X-Amz-Target=TrentService.GenerateDataKeyPair',
    '/#X-Amz-Target=TrentService.GenerateDataKeyPair',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceGenerateDataKeyPair<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TrentService.GenerateDataKeyPair']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.GenerateDataKeyPair']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceGenerateDataKeyPairKey()
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
            (typeof client)['#X-Amz-Target=TrentService.GenerateDataKeyPair']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TrentService.GenerateDataKeyPair'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceGenerateDataKeyPairWithoutPlaintextKey() {
  return [
    '#X-Amz-Target=TrentService.GenerateDataKeyPairWithoutPlaintext',
    '/#X-Amz-Target=TrentService.GenerateDataKeyPairWithoutPlaintext',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceGenerateDataKeyPairWithoutPlaintext<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=TrentService.GenerateDataKeyPairWithoutPlaintext']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=TrentService.GenerateDataKeyPairWithoutPlaintext']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceGenerateDataKeyPairWithoutPlaintextKey()
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
            (typeof client)['#X-Amz-Target=TrentService.GenerateDataKeyPairWithoutPlaintext']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TrentService.GenerateDataKeyPairWithoutPlaintext'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceGenerateDataKeyWithoutPlaintextKey() {
  return [
    '#X-Amz-Target=TrentService.GenerateDataKeyWithoutPlaintext',
    '/#X-Amz-Target=TrentService.GenerateDataKeyWithoutPlaintext',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceGenerateDataKeyWithoutPlaintext<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=TrentService.GenerateDataKeyWithoutPlaintext']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=TrentService.GenerateDataKeyWithoutPlaintext']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceGenerateDataKeyWithoutPlaintextKey()
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
            (typeof client)['#X-Amz-Target=TrentService.GenerateDataKeyWithoutPlaintext']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TrentService.GenerateDataKeyWithoutPlaintext'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceGenerateMacKey() {
  return [
    '#X-Amz-Target=TrentService.GenerateMac',
    '/#X-Amz-Target=TrentService.GenerateMac',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceGenerateMac<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.GenerateMac']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.GenerateMac']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceGenerateMacKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.GenerateMac']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=TrentService.GenerateMac'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceGenerateRandomKey() {
  return [
    '#X-Amz-Target=TrentService.GenerateRandom',
    '/#X-Amz-Target=TrentService.GenerateRandom',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceGenerateRandom<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.GenerateRandom']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.GenerateRandom']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceGenerateRandomKey()
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
            (typeof client)['#X-Amz-Target=TrentService.GenerateRandom']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TrentService.GenerateRandom'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceGetKeyPolicyKey() {
  return [
    '#X-Amz-Target=TrentService.GetKeyPolicy',
    '/#X-Amz-Target=TrentService.GetKeyPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceGetKeyPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.GetKeyPolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.GetKeyPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceGetKeyPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.GetKeyPolicy']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=TrentService.GetKeyPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceGetKeyRotationStatusKey() {
  return [
    '#X-Amz-Target=TrentService.GetKeyRotationStatus',
    '/#X-Amz-Target=TrentService.GetKeyRotationStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceGetKeyRotationStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TrentService.GetKeyRotationStatus']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.GetKeyRotationStatus']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceGetKeyRotationStatusKey()
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
            (typeof client)['#X-Amz-Target=TrentService.GetKeyRotationStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TrentService.GetKeyRotationStatus'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceGetParametersForImportKey() {
  return [
    '#X-Amz-Target=TrentService.GetParametersForImport',
    '/#X-Amz-Target=TrentService.GetParametersForImport',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceGetParametersForImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=TrentService.GetParametersForImport']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.GetParametersForImport']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceGetParametersForImportKey()
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
            (typeof client)['#X-Amz-Target=TrentService.GetParametersForImport']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TrentService.GetParametersForImport'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceGetPublicKeyKey() {
  return [
    '#X-Amz-Target=TrentService.GetPublicKey',
    '/#X-Amz-Target=TrentService.GetPublicKey',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceGetPublicKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.GetPublicKey']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.GetPublicKey']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceGetPublicKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.GetPublicKey']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=TrentService.GetPublicKey'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceImportKeyMaterialKey() {
  return [
    '#X-Amz-Target=TrentService.ImportKeyMaterial',
    '/#X-Amz-Target=TrentService.ImportKeyMaterial',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceImportKeyMaterial<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TrentService.ImportKeyMaterial']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ImportKeyMaterial']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceImportKeyMaterialKey()
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
            (typeof client)['#X-Amz-Target=TrentService.ImportKeyMaterial']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TrentService.ImportKeyMaterial'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceListAliasesKey() {
  return [
    '#X-Amz-Target=TrentService.ListAliases',
    '/#X-Amz-Target=TrentService.ListAliases',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceListAliases<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.ListAliases']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ListAliases']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceListAliasesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ListAliases']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=TrentService.ListAliases'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceListGrantsKey() {
  return [
    '#X-Amz-Target=TrentService.ListGrants',
    '/#X-Amz-Target=TrentService.ListGrants',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceListGrants<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.ListGrants']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ListGrants']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceListGrantsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ListGrants']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=TrentService.ListGrants'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceListKeyPoliciesKey() {
  return [
    '#X-Amz-Target=TrentService.ListKeyPolicies',
    '/#X-Amz-Target=TrentService.ListKeyPolicies',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceListKeyPolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TrentService.ListKeyPolicies']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ListKeyPolicies']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceListKeyPoliciesKey()
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
            (typeof client)['#X-Amz-Target=TrentService.ListKeyPolicies']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TrentService.ListKeyPolicies'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceListKeysKey() {
  return [
    '#X-Amz-Target=TrentService.ListKeys',
    '/#X-Amz-Target=TrentService.ListKeys',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceListKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.ListKeys']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ListKeys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceListKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ListKeys']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=TrentService.ListKeys'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceListResourceTagsKey() {
  return [
    '#X-Amz-Target=TrentService.ListResourceTags',
    '/#X-Amz-Target=TrentService.ListResourceTags',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceListResourceTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TrentService.ListResourceTags']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ListResourceTags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceListResourceTagsKey()
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
            (typeof client)['#X-Amz-Target=TrentService.ListResourceTags']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TrentService.ListResourceTags'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceListRetirableGrantsKey() {
  return [
    '#X-Amz-Target=TrentService.ListRetirableGrants',
    '/#X-Amz-Target=TrentService.ListRetirableGrants',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceListRetirableGrants<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TrentService.ListRetirableGrants']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ListRetirableGrants']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceListRetirableGrantsKey()
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
            (typeof client)['#X-Amz-Target=TrentService.ListRetirableGrants']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TrentService.ListRetirableGrants'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServicePutKeyPolicyKey() {
  return [
    '#X-Amz-Target=TrentService.PutKeyPolicy',
    '/#X-Amz-Target=TrentService.PutKeyPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServicePutKeyPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.PutKeyPolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.PutKeyPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServicePutKeyPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.PutKeyPolicy']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=TrentService.PutKeyPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceReEncryptKey() {
  return [
    '#X-Amz-Target=TrentService.ReEncrypt',
    '/#X-Amz-Target=TrentService.ReEncrypt',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceReEncrypt<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.ReEncrypt']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ReEncrypt']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceReEncryptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ReEncrypt']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=TrentService.ReEncrypt'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceReplicateKeyKey() {
  return [
    '#X-Amz-Target=TrentService.ReplicateKey',
    '/#X-Amz-Target=TrentService.ReplicateKey',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceReplicateKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.ReplicateKey']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ReplicateKey']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceReplicateKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ReplicateKey']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=TrentService.ReplicateKey'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceRetireGrantKey() {
  return [
    '#X-Amz-Target=TrentService.RetireGrant',
    '/#X-Amz-Target=TrentService.RetireGrant',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceRetireGrant<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.RetireGrant']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.RetireGrant']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceRetireGrantKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.RetireGrant']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=TrentService.RetireGrant'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceRevokeGrantKey() {
  return [
    '#X-Amz-Target=TrentService.RevokeGrant',
    '/#X-Amz-Target=TrentService.RevokeGrant',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceRevokeGrant<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.RevokeGrant']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.RevokeGrant']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceRevokeGrantKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.RevokeGrant']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=TrentService.RevokeGrant'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceScheduleKeyDeletionKey() {
  return [
    '#X-Amz-Target=TrentService.ScheduleKeyDeletion',
    '/#X-Amz-Target=TrentService.ScheduleKeyDeletion',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceScheduleKeyDeletion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TrentService.ScheduleKeyDeletion']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ScheduleKeyDeletion']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceScheduleKeyDeletionKey()
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
            (typeof client)['#X-Amz-Target=TrentService.ScheduleKeyDeletion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TrentService.ScheduleKeyDeletion'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceSignKey() {
  return ['#X-Amz-Target=TrentService.Sign', '/#X-Amz-Target=TrentService.Sign', 'POST'] as const
}

export function usePostXAmzTargetTrentServiceSign<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.Sign']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.Sign']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceSignKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.Sign']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=TrentService.Sign'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceTagResourceKey() {
  return [
    '#X-Amz-Target=TrentService.TagResource',
    '/#X-Amz-Target=TrentService.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceTagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.TagResource']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceTagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.TagResource']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=TrentService.TagResource'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceUntagResourceKey() {
  return [
    '#X-Amz-Target=TrentService.UntagResource',
    '/#X-Amz-Target=TrentService.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceUntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.UntagResource']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceUntagResourceKey()
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
            (typeof client)['#X-Amz-Target=TrentService.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=TrentService.UntagResource'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceUpdateAliasKey() {
  return [
    '#X-Amz-Target=TrentService.UpdateAlias',
    '/#X-Amz-Target=TrentService.UpdateAlias',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceUpdateAlias<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.UpdateAlias']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.UpdateAlias']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceUpdateAliasKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.UpdateAlias']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=TrentService.UpdateAlias'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceUpdateCustomKeyStoreKey() {
  return [
    '#X-Amz-Target=TrentService.UpdateCustomKeyStore',
    '/#X-Amz-Target=TrentService.UpdateCustomKeyStore',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceUpdateCustomKeyStore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TrentService.UpdateCustomKeyStore']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.UpdateCustomKeyStore']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceUpdateCustomKeyStoreKey()
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
            (typeof client)['#X-Amz-Target=TrentService.UpdateCustomKeyStore']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TrentService.UpdateCustomKeyStore'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceUpdateKeyDescriptionKey() {
  return [
    '#X-Amz-Target=TrentService.UpdateKeyDescription',
    '/#X-Amz-Target=TrentService.UpdateKeyDescription',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceUpdateKeyDescription<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TrentService.UpdateKeyDescription']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.UpdateKeyDescription']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceUpdateKeyDescriptionKey()
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
            (typeof client)['#X-Amz-Target=TrentService.UpdateKeyDescription']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TrentService.UpdateKeyDescription'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceUpdatePrimaryRegionKey() {
  return [
    '#X-Amz-Target=TrentService.UpdatePrimaryRegion',
    '/#X-Amz-Target=TrentService.UpdatePrimaryRegion',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceUpdatePrimaryRegion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=TrentService.UpdatePrimaryRegion']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.UpdatePrimaryRegion']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceUpdatePrimaryRegionKey()
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
            (typeof client)['#X-Amz-Target=TrentService.UpdatePrimaryRegion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=TrentService.UpdatePrimaryRegion'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceVerifyKey() {
  return [
    '#X-Amz-Target=TrentService.Verify',
    '/#X-Amz-Target=TrentService.Verify',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.Verify']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.Verify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceVerifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.Verify']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=TrentService.Verify'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTrentServiceVerifyMacKey() {
  return [
    '#X-Amz-Target=TrentService.VerifyMac',
    '/#X-Amz-Target=TrentService.VerifyMac',
    'POST',
  ] as const
}

export function usePostXAmzTargetTrentServiceVerifyMac<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.VerifyMac']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.VerifyMac']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTrentServiceVerifyMacKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.VerifyMac']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=TrentService.VerifyMac'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
