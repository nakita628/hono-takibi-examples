import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetTrentServiceCancelKeyDeletionHandler,
  xAmzTargetTrentServiceConnectCustomKeyStoreHandler,
  xAmzTargetTrentServiceCreateAliasHandler,
  xAmzTargetTrentServiceCreateCustomKeyStoreHandler,
  xAmzTargetTrentServiceCreateGrantHandler,
  xAmzTargetTrentServiceCreateKeyHandler,
  xAmzTargetTrentServiceDecryptHandler,
  xAmzTargetTrentServiceDeleteAliasHandler,
  xAmzTargetTrentServiceDeleteCustomKeyStoreHandler,
  xAmzTargetTrentServiceDeleteImportedKeyMaterialHandler,
  xAmzTargetTrentServiceDescribeCustomKeyStoresHandler,
  xAmzTargetTrentServiceDescribeKeyHandler,
  xAmzTargetTrentServiceDisableKeyHandler,
  xAmzTargetTrentServiceDisableKeyRotationHandler,
  xAmzTargetTrentServiceDisconnectCustomKeyStoreHandler,
  xAmzTargetTrentServiceEnableKeyHandler,
  xAmzTargetTrentServiceEnableKeyRotationHandler,
  xAmzTargetTrentServiceEncryptHandler,
  xAmzTargetTrentServiceGenerateDataKeyHandler,
  xAmzTargetTrentServiceGenerateDataKeyPairHandler,
  xAmzTargetTrentServiceGenerateDataKeyPairWithoutPlaintextHandler,
  xAmzTargetTrentServiceGenerateDataKeyWithoutPlaintextHandler,
  xAmzTargetTrentServiceGenerateMacHandler,
  xAmzTargetTrentServiceGenerateRandomHandler,
  xAmzTargetTrentServiceGetKeyPolicyHandler,
  xAmzTargetTrentServiceGetKeyRotationStatusHandler,
  xAmzTargetTrentServiceGetParametersForImportHandler,
  xAmzTargetTrentServiceGetPublicKeyHandler,
  xAmzTargetTrentServiceImportKeyMaterialHandler,
  xAmzTargetTrentServiceListAliasesHandler,
  xAmzTargetTrentServiceListGrantsHandler,
  xAmzTargetTrentServiceListKeyPoliciesHandler,
  xAmzTargetTrentServiceListKeysHandler,
  xAmzTargetTrentServiceListResourceTagsHandler,
  xAmzTargetTrentServiceListRetirableGrantsHandler,
  xAmzTargetTrentServicePutKeyPolicyHandler,
  xAmzTargetTrentServiceReEncryptHandler,
  xAmzTargetTrentServiceReplicateKeyHandler,
  xAmzTargetTrentServiceRetireGrantHandler,
  xAmzTargetTrentServiceRevokeGrantHandler,
  xAmzTargetTrentServiceScheduleKeyDeletionHandler,
  xAmzTargetTrentServiceSignHandler,
  xAmzTargetTrentServiceTagResourceHandler,
  xAmzTargetTrentServiceUntagResourceHandler,
  xAmzTargetTrentServiceUpdateAliasHandler,
  xAmzTargetTrentServiceUpdateCustomKeyStoreHandler,
  xAmzTargetTrentServiceUpdateKeyDescriptionHandler,
  xAmzTargetTrentServiceUpdatePrimaryRegionHandler,
  xAmzTargetTrentServiceVerifyHandler,
  xAmzTargetTrentServiceVerifyMacHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetTrentServiceCancelKeyDeletionHandler)
  .route('/', xAmzTargetTrentServiceConnectCustomKeyStoreHandler)
  .route('/', xAmzTargetTrentServiceCreateAliasHandler)
  .route('/', xAmzTargetTrentServiceCreateCustomKeyStoreHandler)
  .route('/', xAmzTargetTrentServiceCreateGrantHandler)
  .route('/', xAmzTargetTrentServiceCreateKeyHandler)
  .route('/', xAmzTargetTrentServiceDecryptHandler)
  .route('/', xAmzTargetTrentServiceDeleteAliasHandler)
  .route('/', xAmzTargetTrentServiceDeleteCustomKeyStoreHandler)
  .route('/', xAmzTargetTrentServiceDeleteImportedKeyMaterialHandler)
  .route('/', xAmzTargetTrentServiceDescribeCustomKeyStoresHandler)
  .route('/', xAmzTargetTrentServiceDescribeKeyHandler)
  .route('/', xAmzTargetTrentServiceDisableKeyHandler)
  .route('/', xAmzTargetTrentServiceDisableKeyRotationHandler)
  .route('/', xAmzTargetTrentServiceDisconnectCustomKeyStoreHandler)
  .route('/', xAmzTargetTrentServiceEnableKeyHandler)
  .route('/', xAmzTargetTrentServiceEnableKeyRotationHandler)
  .route('/', xAmzTargetTrentServiceEncryptHandler)
  .route('/', xAmzTargetTrentServiceGenerateDataKeyHandler)
  .route('/', xAmzTargetTrentServiceGenerateDataKeyPairHandler)
  .route('/', xAmzTargetTrentServiceGenerateDataKeyPairWithoutPlaintextHandler)
  .route('/', xAmzTargetTrentServiceGenerateDataKeyWithoutPlaintextHandler)
  .route('/', xAmzTargetTrentServiceGenerateMacHandler)
  .route('/', xAmzTargetTrentServiceGenerateRandomHandler)
  .route('/', xAmzTargetTrentServiceGetKeyPolicyHandler)
  .route('/', xAmzTargetTrentServiceGetKeyRotationStatusHandler)
  .route('/', xAmzTargetTrentServiceGetParametersForImportHandler)
  .route('/', xAmzTargetTrentServiceGetPublicKeyHandler)
  .route('/', xAmzTargetTrentServiceImportKeyMaterialHandler)
  .route('/', xAmzTargetTrentServiceListAliasesHandler)
  .route('/', xAmzTargetTrentServiceListGrantsHandler)
  .route('/', xAmzTargetTrentServiceListKeyPoliciesHandler)
  .route('/', xAmzTargetTrentServiceListKeysHandler)
  .route('/', xAmzTargetTrentServiceListResourceTagsHandler)
  .route('/', xAmzTargetTrentServiceListRetirableGrantsHandler)
  .route('/', xAmzTargetTrentServicePutKeyPolicyHandler)
  .route('/', xAmzTargetTrentServiceReEncryptHandler)
  .route('/', xAmzTargetTrentServiceReplicateKeyHandler)
  .route('/', xAmzTargetTrentServiceRetireGrantHandler)
  .route('/', xAmzTargetTrentServiceRevokeGrantHandler)
  .route('/', xAmzTargetTrentServiceScheduleKeyDeletionHandler)
  .route('/', xAmzTargetTrentServiceSignHandler)
  .route('/', xAmzTargetTrentServiceTagResourceHandler)
  .route('/', xAmzTargetTrentServiceUntagResourceHandler)
  .route('/', xAmzTargetTrentServiceUpdateAliasHandler)
  .route('/', xAmzTargetTrentServiceUpdateCustomKeyStoreHandler)
  .route('/', xAmzTargetTrentServiceUpdateKeyDescriptionHandler)
  .route('/', xAmzTargetTrentServiceUpdatePrimaryRegionHandler)
  .route('/', xAmzTargetTrentServiceVerifyHandler)
  .route('/', xAmzTargetTrentServiceVerifyMacHandler)

export default app
