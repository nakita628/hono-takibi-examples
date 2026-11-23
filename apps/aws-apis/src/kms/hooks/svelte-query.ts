import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
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

export function getPostXAmzTargetTrentServiceCancelKeyDeletionMutationKey() {
  return [
    '#X-Amz-Target=TrentService.CancelKeyDeletion',
    '/#X-Amz-Target=TrentService.CancelKeyDeletion',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceCancelKeyDeletionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.CancelKeyDeletion']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceCancelKeyDeletionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TrentService.CancelKeyDeletion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TrentService.CancelKeyDeletion'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTrentServiceCancelKeyDeletion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client)['#X-Amz-Target=TrentService.CancelKeyDeletion']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceCancelKeyDeletionMutationOptions<
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

export function getPostXAmzTargetTrentServiceConnectCustomKeyStoreMutationKey() {
  return [
    '#X-Amz-Target=TrentService.ConnectCustomKeyStore',
    '/#X-Amz-Target=TrentService.ConnectCustomKeyStore',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceConnectCustomKeyStoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ConnectCustomKeyStore']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceConnectCustomKeyStoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TrentService.ConnectCustomKeyStore']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TrentService.ConnectCustomKeyStore'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTrentServiceConnectCustomKeyStore<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=TrentService.ConnectCustomKeyStore']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=TrentService.ConnectCustomKeyStore']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceConnectCustomKeyStoreMutationOptions<
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

export function getPostXAmzTargetTrentServiceCreateAliasMutationKey() {
  return [
    '#X-Amz-Target=TrentService.CreateAlias',
    '/#X-Amz-Target=TrentService.CreateAlias',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceCreateAliasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.CreateAlias']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.CreateAlias']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceCreateAliasMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.CreateAlias']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=TrentService.CreateAlias'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetTrentServiceCreateAlias<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=TrentService.CreateAlias']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=TrentService.CreateAlias']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceCreateAliasMutationOptions<
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

export function getPostXAmzTargetTrentServiceCreateCustomKeyStoreMutationKey() {
  return [
    '#X-Amz-Target=TrentService.CreateCustomKeyStore',
    '/#X-Amz-Target=TrentService.CreateCustomKeyStore',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceCreateCustomKeyStoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.CreateCustomKeyStore']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceCreateCustomKeyStoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TrentService.CreateCustomKeyStore']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TrentService.CreateCustomKeyStore'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTrentServiceCreateCustomKeyStore<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=TrentService.CreateCustomKeyStore']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=TrentService.CreateCustomKeyStore']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceCreateCustomKeyStoreMutationOptions<
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

export function getPostXAmzTargetTrentServiceCreateGrantMutationKey() {
  return [
    '#X-Amz-Target=TrentService.CreateGrant',
    '/#X-Amz-Target=TrentService.CreateGrant',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceCreateGrantMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.CreateGrant']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.CreateGrant']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceCreateGrantMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.CreateGrant']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=TrentService.CreateGrant'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetTrentServiceCreateGrant<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=TrentService.CreateGrant']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=TrentService.CreateGrant']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceCreateGrantMutationOptions<
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

export function getPostXAmzTargetTrentServiceCreateKeyMutationKey() {
  return [
    '#X-Amz-Target=TrentService.CreateKey',
    '/#X-Amz-Target=TrentService.CreateKey',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceCreateKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.CreateKey']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.CreateKey']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceCreateKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.CreateKey']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=TrentService.CreateKey'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetTrentServiceCreateKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.CreateKey']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=TrentService.CreateKey']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceCreateKeyMutationOptions<
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

export function getPostXAmzTargetTrentServiceDecryptMutationKey() {
  return [
    '#X-Amz-Target=TrentService.Decrypt',
    '/#X-Amz-Target=TrentService.Decrypt',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceDecryptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.Decrypt']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.Decrypt']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceDecryptMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.Decrypt']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=TrentService.Decrypt'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetTrentServiceDecrypt<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.Decrypt']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=TrentService.Decrypt']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceDecryptMutationOptions<
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

export function getPostXAmzTargetTrentServiceDeleteAliasMutationKey() {
  return [
    '#X-Amz-Target=TrentService.DeleteAlias',
    '/#X-Amz-Target=TrentService.DeleteAlias',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceDeleteAliasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.DeleteAlias']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.DeleteAlias']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceDeleteAliasMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.DeleteAlias']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=TrentService.DeleteAlias'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetTrentServiceDeleteAlias<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=TrentService.DeleteAlias']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=TrentService.DeleteAlias']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceDeleteAliasMutationOptions<
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

export function getPostXAmzTargetTrentServiceDeleteCustomKeyStoreMutationKey() {
  return [
    '#X-Amz-Target=TrentService.DeleteCustomKeyStore',
    '/#X-Amz-Target=TrentService.DeleteCustomKeyStore',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceDeleteCustomKeyStoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.DeleteCustomKeyStore']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceDeleteCustomKeyStoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TrentService.DeleteCustomKeyStore']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TrentService.DeleteCustomKeyStore'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTrentServiceDeleteCustomKeyStore<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=TrentService.DeleteCustomKeyStore']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=TrentService.DeleteCustomKeyStore']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceDeleteCustomKeyStoreMutationOptions<
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

export function getPostXAmzTargetTrentServiceDeleteImportedKeyMaterialMutationKey() {
  return [
    '#X-Amz-Target=TrentService.DeleteImportedKeyMaterial',
    '/#X-Amz-Target=TrentService.DeleteImportedKeyMaterial',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceDeleteImportedKeyMaterialMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=TrentService.DeleteImportedKeyMaterial']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceDeleteImportedKeyMaterialMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TrentService.DeleteImportedKeyMaterial']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TrentService.DeleteImportedKeyMaterial'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTrentServiceDeleteImportedKeyMaterial<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=TrentService.DeleteImportedKeyMaterial']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceDeleteImportedKeyMaterialMutationOptions<
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

export function getPostXAmzTargetTrentServiceDescribeCustomKeyStoresMutationKey() {
  return [
    '#X-Amz-Target=TrentService.DescribeCustomKeyStores',
    '/#X-Amz-Target=TrentService.DescribeCustomKeyStores',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceDescribeCustomKeyStoresMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=TrentService.DescribeCustomKeyStores']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceDescribeCustomKeyStoresMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TrentService.DescribeCustomKeyStores']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TrentService.DescribeCustomKeyStores'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTrentServiceDescribeCustomKeyStores<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=TrentService.DescribeCustomKeyStores']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceDescribeCustomKeyStoresMutationOptions<
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

export function getPostXAmzTargetTrentServiceDescribeKeyMutationKey() {
  return [
    '#X-Amz-Target=TrentService.DescribeKey',
    '/#X-Amz-Target=TrentService.DescribeKey',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceDescribeKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.DescribeKey']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.DescribeKey']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceDescribeKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.DescribeKey']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=TrentService.DescribeKey'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetTrentServiceDescribeKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=TrentService.DescribeKey']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=TrentService.DescribeKey']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceDescribeKeyMutationOptions<
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

export function getPostXAmzTargetTrentServiceDisableKeyMutationKey() {
  return [
    '#X-Amz-Target=TrentService.DisableKey',
    '/#X-Amz-Target=TrentService.DisableKey',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceDisableKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.DisableKey']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.DisableKey']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceDisableKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.DisableKey']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=TrentService.DisableKey'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetTrentServiceDisableKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.DisableKey']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=TrentService.DisableKey']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceDisableKeyMutationOptions<
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

export function getPostXAmzTargetTrentServiceDisableKeyRotationMutationKey() {
  return [
    '#X-Amz-Target=TrentService.DisableKeyRotation',
    '/#X-Amz-Target=TrentService.DisableKeyRotation',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceDisableKeyRotationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.DisableKeyRotation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceDisableKeyRotationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TrentService.DisableKeyRotation']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TrentService.DisableKeyRotation'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTrentServiceDisableKeyRotation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=TrentService.DisableKeyRotation']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=TrentService.DisableKeyRotation']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceDisableKeyRotationMutationOptions<
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

export function getPostXAmzTargetTrentServiceDisconnectCustomKeyStoreMutationKey() {
  return [
    '#X-Amz-Target=TrentService.DisconnectCustomKeyStore',
    '/#X-Amz-Target=TrentService.DisconnectCustomKeyStore',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceDisconnectCustomKeyStoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=TrentService.DisconnectCustomKeyStore']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceDisconnectCustomKeyStoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TrentService.DisconnectCustomKeyStore']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TrentService.DisconnectCustomKeyStore'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTrentServiceDisconnectCustomKeyStore<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=TrentService.DisconnectCustomKeyStore']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceDisconnectCustomKeyStoreMutationOptions<
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

export function getPostXAmzTargetTrentServiceEnableKeyMutationKey() {
  return [
    '#X-Amz-Target=TrentService.EnableKey',
    '/#X-Amz-Target=TrentService.EnableKey',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceEnableKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.EnableKey']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.EnableKey']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceEnableKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.EnableKey']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=TrentService.EnableKey'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetTrentServiceEnableKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.EnableKey']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=TrentService.EnableKey']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceEnableKeyMutationOptions<
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

export function getPostXAmzTargetTrentServiceEnableKeyRotationMutationKey() {
  return [
    '#X-Amz-Target=TrentService.EnableKeyRotation',
    '/#X-Amz-Target=TrentService.EnableKeyRotation',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceEnableKeyRotationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.EnableKeyRotation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceEnableKeyRotationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TrentService.EnableKeyRotation']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TrentService.EnableKeyRotation'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTrentServiceEnableKeyRotation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client)['#X-Amz-Target=TrentService.EnableKeyRotation']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceEnableKeyRotationMutationOptions<
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

export function getPostXAmzTargetTrentServiceEncryptMutationKey() {
  return [
    '#X-Amz-Target=TrentService.Encrypt',
    '/#X-Amz-Target=TrentService.Encrypt',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceEncryptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.Encrypt']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.Encrypt']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceEncryptMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.Encrypt']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=TrentService.Encrypt'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetTrentServiceEncrypt<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.Encrypt']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=TrentService.Encrypt']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceEncryptMutationOptions<
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

export function getPostXAmzTargetTrentServiceGenerateDataKeyMutationKey() {
  return [
    '#X-Amz-Target=TrentService.GenerateDataKey',
    '/#X-Amz-Target=TrentService.GenerateDataKey',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceGenerateDataKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.GenerateDataKey']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceGenerateDataKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TrentService.GenerateDataKey']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TrentService.GenerateDataKey'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTrentServiceGenerateDataKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client)['#X-Amz-Target=TrentService.GenerateDataKey']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceGenerateDataKeyMutationOptions<
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

export function getPostXAmzTargetTrentServiceGenerateDataKeyPairMutationKey() {
  return [
    '#X-Amz-Target=TrentService.GenerateDataKeyPair',
    '/#X-Amz-Target=TrentService.GenerateDataKeyPair',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceGenerateDataKeyPairMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.GenerateDataKeyPair']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceGenerateDataKeyPairMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TrentService.GenerateDataKeyPair']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TrentService.GenerateDataKeyPair'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTrentServiceGenerateDataKeyPair<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=TrentService.GenerateDataKeyPair']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=TrentService.GenerateDataKeyPair']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceGenerateDataKeyPairMutationOptions<
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

export function getPostXAmzTargetTrentServiceGenerateDataKeyPairWithoutPlaintextMutationKey() {
  return [
    '#X-Amz-Target=TrentService.GenerateDataKeyPairWithoutPlaintext',
    '/#X-Amz-Target=TrentService.GenerateDataKeyPairWithoutPlaintext',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceGenerateDataKeyPairWithoutPlaintextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=TrentService.GenerateDataKeyPairWithoutPlaintext']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceGenerateDataKeyPairWithoutPlaintextMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TrentService.GenerateDataKeyPairWithoutPlaintext']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TrentService.GenerateDataKeyPairWithoutPlaintext'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetTrentServiceGenerateDataKeyPairWithoutPlaintext<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=TrentService.GenerateDataKeyPairWithoutPlaintext']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetTrentServiceGenerateDataKeyPairWithoutPlaintextMutationOptions<
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

export function getPostXAmzTargetTrentServiceGenerateDataKeyWithoutPlaintextMutationKey() {
  return [
    '#X-Amz-Target=TrentService.GenerateDataKeyWithoutPlaintext',
    '/#X-Amz-Target=TrentService.GenerateDataKeyWithoutPlaintext',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceGenerateDataKeyWithoutPlaintextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=TrentService.GenerateDataKeyWithoutPlaintext']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceGenerateDataKeyWithoutPlaintextMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TrentService.GenerateDataKeyWithoutPlaintext']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TrentService.GenerateDataKeyWithoutPlaintext'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTrentServiceGenerateDataKeyWithoutPlaintext<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=TrentService.GenerateDataKeyWithoutPlaintext']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetTrentServiceGenerateDataKeyWithoutPlaintextMutationOptions<
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

export function getPostXAmzTargetTrentServiceGenerateMacMutationKey() {
  return [
    '#X-Amz-Target=TrentService.GenerateMac',
    '/#X-Amz-Target=TrentService.GenerateMac',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceGenerateMacMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.GenerateMac']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.GenerateMac']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceGenerateMacMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.GenerateMac']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=TrentService.GenerateMac'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetTrentServiceGenerateMac<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=TrentService.GenerateMac']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=TrentService.GenerateMac']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceGenerateMacMutationOptions<
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

export function getPostXAmzTargetTrentServiceGenerateRandomMutationKey() {
  return [
    '#X-Amz-Target=TrentService.GenerateRandom',
    '/#X-Amz-Target=TrentService.GenerateRandom',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceGenerateRandomMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.GenerateRandom']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.GenerateRandom']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceGenerateRandomMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.GenerateRandom']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=TrentService.GenerateRandom'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetTrentServiceGenerateRandom<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=TrentService.GenerateRandom']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=TrentService.GenerateRandom']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceGenerateRandomMutationOptions<
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

export function getPostXAmzTargetTrentServiceGetKeyPolicyMutationKey() {
  return [
    '#X-Amz-Target=TrentService.GetKeyPolicy',
    '/#X-Amz-Target=TrentService.GetKeyPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceGetKeyPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.GetKeyPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.GetKeyPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceGetKeyPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.GetKeyPolicy']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=TrentService.GetKeyPolicy'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetTrentServiceGetKeyPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=TrentService.GetKeyPolicy']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=TrentService.GetKeyPolicy']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceGetKeyPolicyMutationOptions<
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

export function getPostXAmzTargetTrentServiceGetKeyRotationStatusMutationKey() {
  return [
    '#X-Amz-Target=TrentService.GetKeyRotationStatus',
    '/#X-Amz-Target=TrentService.GetKeyRotationStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceGetKeyRotationStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.GetKeyRotationStatus']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceGetKeyRotationStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TrentService.GetKeyRotationStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TrentService.GetKeyRotationStatus'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTrentServiceGetKeyRotationStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=TrentService.GetKeyRotationStatus']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=TrentService.GetKeyRotationStatus']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceGetKeyRotationStatusMutationOptions<
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

export function getPostXAmzTargetTrentServiceGetParametersForImportMutationKey() {
  return [
    '#X-Amz-Target=TrentService.GetParametersForImport',
    '/#X-Amz-Target=TrentService.GetParametersForImport',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceGetParametersForImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.GetParametersForImport']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceGetParametersForImportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TrentService.GetParametersForImport']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TrentService.GetParametersForImport'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTrentServiceGetParametersForImport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=TrentService.GetParametersForImport']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceGetParametersForImportMutationOptions<
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

export function getPostXAmzTargetTrentServiceGetPublicKeyMutationKey() {
  return [
    '#X-Amz-Target=TrentService.GetPublicKey',
    '/#X-Amz-Target=TrentService.GetPublicKey',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceGetPublicKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.GetPublicKey']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.GetPublicKey']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceGetPublicKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.GetPublicKey']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=TrentService.GetPublicKey'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetTrentServiceGetPublicKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=TrentService.GetPublicKey']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=TrentService.GetPublicKey']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceGetPublicKeyMutationOptions<
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

export function getPostXAmzTargetTrentServiceImportKeyMaterialMutationKey() {
  return [
    '#X-Amz-Target=TrentService.ImportKeyMaterial',
    '/#X-Amz-Target=TrentService.ImportKeyMaterial',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceImportKeyMaterialMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ImportKeyMaterial']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceImportKeyMaterialMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TrentService.ImportKeyMaterial']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TrentService.ImportKeyMaterial'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTrentServiceImportKeyMaterial<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ImportKeyMaterial']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceImportKeyMaterialMutationOptions<
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

export function getPostXAmzTargetTrentServiceListAliasesMutationKey() {
  return [
    '#X-Amz-Target=TrentService.ListAliases',
    '/#X-Amz-Target=TrentService.ListAliases',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceListAliasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.ListAliases']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ListAliases']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceListAliasesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ListAliases']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=TrentService.ListAliases'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetTrentServiceListAliases<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=TrentService.ListAliases']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ListAliases']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceListAliasesMutationOptions<
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

export function getPostXAmzTargetTrentServiceListGrantsMutationKey() {
  return [
    '#X-Amz-Target=TrentService.ListGrants',
    '/#X-Amz-Target=TrentService.ListGrants',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceListGrantsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.ListGrants']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ListGrants']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceListGrantsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ListGrants']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=TrentService.ListGrants'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetTrentServiceListGrants<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.ListGrants']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ListGrants']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceListGrantsMutationOptions<
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

export function getPostXAmzTargetTrentServiceListKeyPoliciesMutationKey() {
  return [
    '#X-Amz-Target=TrentService.ListKeyPolicies',
    '/#X-Amz-Target=TrentService.ListKeyPolicies',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceListKeyPoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ListKeyPolicies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceListKeyPoliciesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TrentService.ListKeyPolicies']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TrentService.ListKeyPolicies'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTrentServiceListKeyPolicies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ListKeyPolicies']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceListKeyPoliciesMutationOptions<
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

export function getPostXAmzTargetTrentServiceListKeysMutationKey() {
  return [
    '#X-Amz-Target=TrentService.ListKeys',
    '/#X-Amz-Target=TrentService.ListKeys',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceListKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.ListKeys']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ListKeys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceListKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ListKeys']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=TrentService.ListKeys'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetTrentServiceListKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.ListKeys']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ListKeys']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceListKeysMutationOptions<
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

export function getPostXAmzTargetTrentServiceListResourceTagsMutationKey() {
  return [
    '#X-Amz-Target=TrentService.ListResourceTags',
    '/#X-Amz-Target=TrentService.ListResourceTags',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceListResourceTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ListResourceTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceListResourceTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TrentService.ListResourceTags']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TrentService.ListResourceTags'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTrentServiceListResourceTags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ListResourceTags']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceListResourceTagsMutationOptions<
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

export function getPostXAmzTargetTrentServiceListRetirableGrantsMutationKey() {
  return [
    '#X-Amz-Target=TrentService.ListRetirableGrants',
    '/#X-Amz-Target=TrentService.ListRetirableGrants',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceListRetirableGrantsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ListRetirableGrants']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceListRetirableGrantsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TrentService.ListRetirableGrants']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TrentService.ListRetirableGrants'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTrentServiceListRetirableGrants<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=TrentService.ListRetirableGrants']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=TrentService.ListRetirableGrants']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceListRetirableGrantsMutationOptions<
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

export function getPostXAmzTargetTrentServicePutKeyPolicyMutationKey() {
  return [
    '#X-Amz-Target=TrentService.PutKeyPolicy',
    '/#X-Amz-Target=TrentService.PutKeyPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServicePutKeyPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.PutKeyPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.PutKeyPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServicePutKeyPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.PutKeyPolicy']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=TrentService.PutKeyPolicy'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetTrentServicePutKeyPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=TrentService.PutKeyPolicy']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=TrentService.PutKeyPolicy']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServicePutKeyPolicyMutationOptions<
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

export function getPostXAmzTargetTrentServiceReEncryptMutationKey() {
  return [
    '#X-Amz-Target=TrentService.ReEncrypt',
    '/#X-Amz-Target=TrentService.ReEncrypt',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceReEncryptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.ReEncrypt']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ReEncrypt']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceReEncryptMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ReEncrypt']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=TrentService.ReEncrypt'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetTrentServiceReEncrypt<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.ReEncrypt']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ReEncrypt']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceReEncryptMutationOptions<
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

export function getPostXAmzTargetTrentServiceReplicateKeyMutationKey() {
  return [
    '#X-Amz-Target=TrentService.ReplicateKey',
    '/#X-Amz-Target=TrentService.ReplicateKey',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceReplicateKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.ReplicateKey']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ReplicateKey']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceReplicateKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ReplicateKey']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=TrentService.ReplicateKey'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetTrentServiceReplicateKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=TrentService.ReplicateKey']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ReplicateKey']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceReplicateKeyMutationOptions<
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

export function getPostXAmzTargetTrentServiceRetireGrantMutationKey() {
  return [
    '#X-Amz-Target=TrentService.RetireGrant',
    '/#X-Amz-Target=TrentService.RetireGrant',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceRetireGrantMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.RetireGrant']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.RetireGrant']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceRetireGrantMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.RetireGrant']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=TrentService.RetireGrant'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetTrentServiceRetireGrant<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=TrentService.RetireGrant']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=TrentService.RetireGrant']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceRetireGrantMutationOptions<
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

export function getPostXAmzTargetTrentServiceRevokeGrantMutationKey() {
  return [
    '#X-Amz-Target=TrentService.RevokeGrant',
    '/#X-Amz-Target=TrentService.RevokeGrant',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceRevokeGrantMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.RevokeGrant']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.RevokeGrant']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceRevokeGrantMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.RevokeGrant']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=TrentService.RevokeGrant'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetTrentServiceRevokeGrant<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=TrentService.RevokeGrant']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=TrentService.RevokeGrant']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceRevokeGrantMutationOptions<
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

export function getPostXAmzTargetTrentServiceScheduleKeyDeletionMutationKey() {
  return [
    '#X-Amz-Target=TrentService.ScheduleKeyDeletion',
    '/#X-Amz-Target=TrentService.ScheduleKeyDeletion',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceScheduleKeyDeletionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ScheduleKeyDeletion']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceScheduleKeyDeletionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TrentService.ScheduleKeyDeletion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TrentService.ScheduleKeyDeletion'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTrentServiceScheduleKeyDeletion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=TrentService.ScheduleKeyDeletion']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=TrentService.ScheduleKeyDeletion']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceScheduleKeyDeletionMutationOptions<
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

export function getPostXAmzTargetTrentServiceSignMutationKey() {
  return ['#X-Amz-Target=TrentService.Sign', '/#X-Amz-Target=TrentService.Sign', 'POST'] as const
}

export function getPostXAmzTargetTrentServiceSignMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.Sign']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.Sign']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceSignMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.Sign']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=TrentService.Sign'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetTrentServiceSign<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.Sign']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=TrentService.Sign']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceSignMutationOptions<
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

export function getPostXAmzTargetTrentServiceTagResourceMutationKey() {
  return [
    '#X-Amz-Target=TrentService.TagResource',
    '/#X-Amz-Target=TrentService.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceTagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.TagResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceTagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.TagResource']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=TrentService.TagResource'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetTrentServiceTagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=TrentService.TagResource']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=TrentService.TagResource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceTagResourceMutationOptions<
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

export function getPostXAmzTargetTrentServiceUntagResourceMutationKey() {
  return [
    '#X-Amz-Target=TrentService.UntagResource',
    '/#X-Amz-Target=TrentService.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.UntagResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceUntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.UntagResource']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=TrentService.UntagResource'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetTrentServiceUntagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=TrentService.UntagResource']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=TrentService.UntagResource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceUntagResourceMutationOptions<
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

export function getPostXAmzTargetTrentServiceUpdateAliasMutationKey() {
  return [
    '#X-Amz-Target=TrentService.UpdateAlias',
    '/#X-Amz-Target=TrentService.UpdateAlias',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceUpdateAliasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.UpdateAlias']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.UpdateAlias']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceUpdateAliasMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.UpdateAlias']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=TrentService.UpdateAlias'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetTrentServiceUpdateAlias<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=TrentService.UpdateAlias']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=TrentService.UpdateAlias']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceUpdateAliasMutationOptions<
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

export function getPostXAmzTargetTrentServiceUpdateCustomKeyStoreMutationKey() {
  return [
    '#X-Amz-Target=TrentService.UpdateCustomKeyStore',
    '/#X-Amz-Target=TrentService.UpdateCustomKeyStore',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceUpdateCustomKeyStoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.UpdateCustomKeyStore']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceUpdateCustomKeyStoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TrentService.UpdateCustomKeyStore']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TrentService.UpdateCustomKeyStore'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTrentServiceUpdateCustomKeyStore<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=TrentService.UpdateCustomKeyStore']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=TrentService.UpdateCustomKeyStore']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceUpdateCustomKeyStoreMutationOptions<
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

export function getPostXAmzTargetTrentServiceUpdateKeyDescriptionMutationKey() {
  return [
    '#X-Amz-Target=TrentService.UpdateKeyDescription',
    '/#X-Amz-Target=TrentService.UpdateKeyDescription',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceUpdateKeyDescriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.UpdateKeyDescription']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceUpdateKeyDescriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TrentService.UpdateKeyDescription']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TrentService.UpdateKeyDescription'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTrentServiceUpdateKeyDescription<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=TrentService.UpdateKeyDescription']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=TrentService.UpdateKeyDescription']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceUpdateKeyDescriptionMutationOptions<
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

export function getPostXAmzTargetTrentServiceUpdatePrimaryRegionMutationKey() {
  return [
    '#X-Amz-Target=TrentService.UpdatePrimaryRegion',
    '/#X-Amz-Target=TrentService.UpdatePrimaryRegion',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceUpdatePrimaryRegionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.UpdatePrimaryRegion']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceUpdatePrimaryRegionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=TrentService.UpdatePrimaryRegion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=TrentService.UpdatePrimaryRegion'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTrentServiceUpdatePrimaryRegion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=TrentService.UpdatePrimaryRegion']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=TrentService.UpdatePrimaryRegion']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceUpdatePrimaryRegionMutationOptions<
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

export function getPostXAmzTargetTrentServiceVerifyMutationKey() {
  return [
    '#X-Amz-Target=TrentService.Verify',
    '/#X-Amz-Target=TrentService.Verify',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.Verify']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.Verify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceVerifyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.Verify']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=TrentService.Verify'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetTrentServiceVerify<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.Verify']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=TrentService.Verify']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceVerifyMutationOptions<
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

export function getPostXAmzTargetTrentServiceVerifyMacMutationKey() {
  return [
    '#X-Amz-Target=TrentService.VerifyMac',
    '/#X-Amz-Target=TrentService.VerifyMac',
    'POST',
  ] as const
}

export function getPostXAmzTargetTrentServiceVerifyMacMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.VerifyMac']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=TrentService.VerifyMac']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTrentServiceVerifyMacMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.VerifyMac']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=TrentService.VerifyMac'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetTrentServiceVerifyMac<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=TrentService.VerifyMac']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=TrentService.VerifyMac']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTrentServiceVerifyMacMutationOptions<
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
