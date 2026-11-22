import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetTrentServiceCancelKeyDeletionHandler,
  XAmzTargetTrentServiceConnectCustomKeyStoreHandler,
  XAmzTargetTrentServiceCreateAliasHandler,
  XAmzTargetTrentServiceCreateCustomKeyStoreHandler,
  XAmzTargetTrentServiceCreateGrantHandler,
  XAmzTargetTrentServiceCreateKeyHandler,
  XAmzTargetTrentServiceDecryptHandler,
  XAmzTargetTrentServiceDeleteAliasHandler,
  XAmzTargetTrentServiceDeleteCustomKeyStoreHandler,
  XAmzTargetTrentServiceDeleteImportedKeyMaterialHandler,
  XAmzTargetTrentServiceDescribeCustomKeyStoresHandler,
  XAmzTargetTrentServiceDescribeKeyHandler,
  XAmzTargetTrentServiceDisableKeyHandler,
  XAmzTargetTrentServiceDisableKeyRotationHandler,
  XAmzTargetTrentServiceDisconnectCustomKeyStoreHandler,
  XAmzTargetTrentServiceEnableKeyHandler,
  XAmzTargetTrentServiceEnableKeyRotationHandler,
  XAmzTargetTrentServiceEncryptHandler,
  XAmzTargetTrentServiceGenerateDataKeyHandler,
  XAmzTargetTrentServiceGenerateDataKeyPairHandler,
  XAmzTargetTrentServiceGenerateDataKeyPairWithoutPlaintextHandler,
  XAmzTargetTrentServiceGenerateDataKeyWithoutPlaintextHandler,
  XAmzTargetTrentServiceGenerateMacHandler,
  XAmzTargetTrentServiceGenerateRandomHandler,
  XAmzTargetTrentServiceGetKeyPolicyHandler,
  XAmzTargetTrentServiceGetKeyRotationStatusHandler,
  XAmzTargetTrentServiceGetParametersForImportHandler,
  XAmzTargetTrentServiceGetPublicKeyHandler,
  XAmzTargetTrentServiceImportKeyMaterialHandler,
  XAmzTargetTrentServiceListAliasesHandler,
  XAmzTargetTrentServiceListGrantsHandler,
  XAmzTargetTrentServiceListKeyPoliciesHandler,
  XAmzTargetTrentServiceListKeysHandler,
  XAmzTargetTrentServiceListResourceTagsHandler,
  XAmzTargetTrentServiceListRetirableGrantsHandler,
  XAmzTargetTrentServicePutKeyPolicyHandler,
  XAmzTargetTrentServiceReEncryptHandler,
  XAmzTargetTrentServiceReplicateKeyHandler,
  XAmzTargetTrentServiceRetireGrantHandler,
  XAmzTargetTrentServiceRevokeGrantHandler,
  XAmzTargetTrentServiceScheduleKeyDeletionHandler,
  XAmzTargetTrentServiceSignHandler,
  XAmzTargetTrentServiceTagResourceHandler,
  XAmzTargetTrentServiceUntagResourceHandler,
  XAmzTargetTrentServiceUpdateAliasHandler,
  XAmzTargetTrentServiceUpdateCustomKeyStoreHandler,
  XAmzTargetTrentServiceUpdateKeyDescriptionHandler,
  XAmzTargetTrentServiceUpdatePrimaryRegionHandler,
  XAmzTargetTrentServiceVerifyHandler,
  XAmzTargetTrentServiceVerifyMacHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetTrentServiceCancelKeyDeletionHandler)
  .route('/', XAmzTargetTrentServiceConnectCustomKeyStoreHandler)
  .route('/', XAmzTargetTrentServiceCreateAliasHandler)
  .route('/', XAmzTargetTrentServiceCreateCustomKeyStoreHandler)
  .route('/', XAmzTargetTrentServiceCreateGrantHandler)
  .route('/', XAmzTargetTrentServiceCreateKeyHandler)
  .route('/', XAmzTargetTrentServiceDecryptHandler)
  .route('/', XAmzTargetTrentServiceDeleteAliasHandler)
  .route('/', XAmzTargetTrentServiceDeleteCustomKeyStoreHandler)
  .route('/', XAmzTargetTrentServiceDeleteImportedKeyMaterialHandler)
  .route('/', XAmzTargetTrentServiceDescribeCustomKeyStoresHandler)
  .route('/', XAmzTargetTrentServiceDescribeKeyHandler)
  .route('/', XAmzTargetTrentServiceDisableKeyHandler)
  .route('/', XAmzTargetTrentServiceDisableKeyRotationHandler)
  .route('/', XAmzTargetTrentServiceDisconnectCustomKeyStoreHandler)
  .route('/', XAmzTargetTrentServiceEnableKeyHandler)
  .route('/', XAmzTargetTrentServiceEnableKeyRotationHandler)
  .route('/', XAmzTargetTrentServiceEncryptHandler)
  .route('/', XAmzTargetTrentServiceGenerateDataKeyHandler)
  .route('/', XAmzTargetTrentServiceGenerateDataKeyPairHandler)
  .route('/', XAmzTargetTrentServiceGenerateDataKeyPairWithoutPlaintextHandler)
  .route('/', XAmzTargetTrentServiceGenerateDataKeyWithoutPlaintextHandler)
  .route('/', XAmzTargetTrentServiceGenerateMacHandler)
  .route('/', XAmzTargetTrentServiceGenerateRandomHandler)
  .route('/', XAmzTargetTrentServiceGetKeyPolicyHandler)
  .route('/', XAmzTargetTrentServiceGetKeyRotationStatusHandler)
  .route('/', XAmzTargetTrentServiceGetParametersForImportHandler)
  .route('/', XAmzTargetTrentServiceGetPublicKeyHandler)
  .route('/', XAmzTargetTrentServiceImportKeyMaterialHandler)
  .route('/', XAmzTargetTrentServiceListAliasesHandler)
  .route('/', XAmzTargetTrentServiceListGrantsHandler)
  .route('/', XAmzTargetTrentServiceListKeyPoliciesHandler)
  .route('/', XAmzTargetTrentServiceListKeysHandler)
  .route('/', XAmzTargetTrentServiceListResourceTagsHandler)
  .route('/', XAmzTargetTrentServiceListRetirableGrantsHandler)
  .route('/', XAmzTargetTrentServicePutKeyPolicyHandler)
  .route('/', XAmzTargetTrentServiceReEncryptHandler)
  .route('/', XAmzTargetTrentServiceReplicateKeyHandler)
  .route('/', XAmzTargetTrentServiceRetireGrantHandler)
  .route('/', XAmzTargetTrentServiceRevokeGrantHandler)
  .route('/', XAmzTargetTrentServiceScheduleKeyDeletionHandler)
  .route('/', XAmzTargetTrentServiceSignHandler)
  .route('/', XAmzTargetTrentServiceTagResourceHandler)
  .route('/', XAmzTargetTrentServiceUntagResourceHandler)
  .route('/', XAmzTargetTrentServiceUpdateAliasHandler)
  .route('/', XAmzTargetTrentServiceUpdateCustomKeyStoreHandler)
  .route('/', XAmzTargetTrentServiceUpdateKeyDescriptionHandler)
  .route('/', XAmzTargetTrentServiceUpdatePrimaryRegionHandler)
  .route('/', XAmzTargetTrentServiceVerifyHandler)
  .route('/', XAmzTargetTrentServiceVerifyMacHandler)

export default app
