import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetTrentServiceCancelKeyDeletion(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.CancelKeyDeletion']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TrentService.CancelKeyDeletion'].$post(args, options),
  )
}

export async function postXAmzTargetTrentServiceConnectCustomKeyStore(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=TrentService.ConnectCustomKeyStore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TrentService.ConnectCustomKeyStore'].$post(args, options),
  )
}

export async function postXAmzTargetTrentServiceCreateAlias(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.CreateAlias']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=TrentService.CreateAlias'].$post(args, options))
}

export async function postXAmzTargetTrentServiceCreateCustomKeyStore(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=TrentService.CreateCustomKeyStore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TrentService.CreateCustomKeyStore'].$post(args, options),
  )
}

export async function postXAmzTargetTrentServiceCreateGrant(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.CreateGrant']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=TrentService.CreateGrant'].$post(args, options))
}

export async function postXAmzTargetTrentServiceCreateKey(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.CreateKey']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=TrentService.CreateKey'].$post(args, options))
}

export async function postXAmzTargetTrentServiceDecrypt(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.Decrypt']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=TrentService.Decrypt'].$post(args, options))
}

export async function postXAmzTargetTrentServiceDeleteAlias(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.DeleteAlias']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=TrentService.DeleteAlias'].$post(args, options))
}

export async function postXAmzTargetTrentServiceDeleteCustomKeyStore(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=TrentService.DeleteCustomKeyStore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TrentService.DeleteCustomKeyStore'].$post(args, options),
  )
}

export async function postXAmzTargetTrentServiceDeleteImportedKeyMaterial(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=TrentService.DeleteImportedKeyMaterial']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TrentService.DeleteImportedKeyMaterial'].$post(args, options),
  )
}

export async function postXAmzTargetTrentServiceDescribeCustomKeyStores(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=TrentService.DescribeCustomKeyStores']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TrentService.DescribeCustomKeyStores'].$post(args, options),
  )
}

export async function postXAmzTargetTrentServiceDescribeKey(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.DescribeKey']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=TrentService.DescribeKey'].$post(args, options))
}

export async function postXAmzTargetTrentServiceDisableKey(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.DisableKey']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=TrentService.DisableKey'].$post(args, options))
}

export async function postXAmzTargetTrentServiceDisableKeyRotation(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.DisableKeyRotation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TrentService.DisableKeyRotation'].$post(args, options),
  )
}

export async function postXAmzTargetTrentServiceDisconnectCustomKeyStore(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=TrentService.DisconnectCustomKeyStore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TrentService.DisconnectCustomKeyStore'].$post(args, options),
  )
}

export async function postXAmzTargetTrentServiceEnableKey(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.EnableKey']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=TrentService.EnableKey'].$post(args, options))
}

export async function postXAmzTargetTrentServiceEnableKeyRotation(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.EnableKeyRotation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TrentService.EnableKeyRotation'].$post(args, options),
  )
}

export async function postXAmzTargetTrentServiceEncrypt(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.Encrypt']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=TrentService.Encrypt'].$post(args, options))
}

export async function postXAmzTargetTrentServiceGenerateDataKey(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.GenerateDataKey']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TrentService.GenerateDataKey'].$post(args, options),
  )
}

export async function postXAmzTargetTrentServiceGenerateDataKeyPair(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=TrentService.GenerateDataKeyPair']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TrentService.GenerateDataKeyPair'].$post(args, options),
  )
}

export async function postXAmzTargetTrentServiceGenerateDataKeyPairWithoutPlaintext(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=TrentService.GenerateDataKeyPairWithoutPlaintext']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TrentService.GenerateDataKeyPairWithoutPlaintext'].$post(args, options),
  )
}

export async function postXAmzTargetTrentServiceGenerateDataKeyWithoutPlaintext(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=TrentService.GenerateDataKeyWithoutPlaintext']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TrentService.GenerateDataKeyWithoutPlaintext'].$post(args, options),
  )
}

export async function postXAmzTargetTrentServiceGenerateMac(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.GenerateMac']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=TrentService.GenerateMac'].$post(args, options))
}

export async function postXAmzTargetTrentServiceGenerateRandom(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.GenerateRandom']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TrentService.GenerateRandom'].$post(args, options),
  )
}

export async function postXAmzTargetTrentServiceGetKeyPolicy(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.GetKeyPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=TrentService.GetKeyPolicy'].$post(args, options))
}

export async function postXAmzTargetTrentServiceGetKeyRotationStatus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=TrentService.GetKeyRotationStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TrentService.GetKeyRotationStatus'].$post(args, options),
  )
}

export async function postXAmzTargetTrentServiceGetParametersForImport(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=TrentService.GetParametersForImport']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TrentService.GetParametersForImport'].$post(args, options),
  )
}

export async function postXAmzTargetTrentServiceGetPublicKey(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.GetPublicKey']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=TrentService.GetPublicKey'].$post(args, options))
}

export async function postXAmzTargetTrentServiceImportKeyMaterial(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ImportKeyMaterial']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TrentService.ImportKeyMaterial'].$post(args, options),
  )
}

export async function postXAmzTargetTrentServiceListAliases(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ListAliases']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=TrentService.ListAliases'].$post(args, options))
}

export async function postXAmzTargetTrentServiceListGrants(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ListGrants']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=TrentService.ListGrants'].$post(args, options))
}

export async function postXAmzTargetTrentServiceListKeyPolicies(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ListKeyPolicies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TrentService.ListKeyPolicies'].$post(args, options),
  )
}

export async function postXAmzTargetTrentServiceListKeys(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ListKeys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=TrentService.ListKeys'].$post(args, options))
}

export async function postXAmzTargetTrentServiceListResourceTags(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ListResourceTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TrentService.ListResourceTags'].$post(args, options),
  )
}

export async function postXAmzTargetTrentServiceListRetirableGrants(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=TrentService.ListRetirableGrants']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TrentService.ListRetirableGrants'].$post(args, options),
  )
}

export async function postXAmzTargetTrentServicePutKeyPolicy(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.PutKeyPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=TrentService.PutKeyPolicy'].$post(args, options))
}

export async function postXAmzTargetTrentServiceReEncrypt(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ReEncrypt']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=TrentService.ReEncrypt'].$post(args, options))
}

export async function postXAmzTargetTrentServiceReplicateKey(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.ReplicateKey']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=TrentService.ReplicateKey'].$post(args, options))
}

export async function postXAmzTargetTrentServiceRetireGrant(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.RetireGrant']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=TrentService.RetireGrant'].$post(args, options))
}

export async function postXAmzTargetTrentServiceRevokeGrant(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.RevokeGrant']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=TrentService.RevokeGrant'].$post(args, options))
}

export async function postXAmzTargetTrentServiceScheduleKeyDeletion(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=TrentService.ScheduleKeyDeletion']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TrentService.ScheduleKeyDeletion'].$post(args, options),
  )
}

export async function postXAmzTargetTrentServiceSign(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.Sign']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=TrentService.Sign'].$post(args, options))
}

export async function postXAmzTargetTrentServiceTagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.TagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=TrentService.TagResource'].$post(args, options))
}

export async function postXAmzTargetTrentServiceUntagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.UntagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TrentService.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetTrentServiceUpdateAlias(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.UpdateAlias']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=TrentService.UpdateAlias'].$post(args, options))
}

export async function postXAmzTargetTrentServiceUpdateCustomKeyStore(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=TrentService.UpdateCustomKeyStore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TrentService.UpdateCustomKeyStore'].$post(args, options),
  )
}

export async function postXAmzTargetTrentServiceUpdateKeyDescription(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=TrentService.UpdateKeyDescription']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TrentService.UpdateKeyDescription'].$post(args, options),
  )
}

export async function postXAmzTargetTrentServiceUpdatePrimaryRegion(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=TrentService.UpdatePrimaryRegion']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TrentService.UpdatePrimaryRegion'].$post(args, options),
  )
}

export async function postXAmzTargetTrentServiceVerify(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.Verify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=TrentService.Verify'].$post(args, options))
}

export async function postXAmzTargetTrentServiceVerifyMac(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TrentService.VerifyMac']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=TrentService.VerifyMac'].$post(args, options))
}
