import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetSecretsmanagerCancelRotateSecretHandler,
  XAmzTargetSecretsmanagerCreateSecretHandler,
  XAmzTargetSecretsmanagerDeleteResourcePolicyHandler,
  XAmzTargetSecretsmanagerDeleteSecretHandler,
  XAmzTargetSecretsmanagerDescribeSecretHandler,
  XAmzTargetSecretsmanagerGetRandomPasswordHandler,
  XAmzTargetSecretsmanagerGetResourcePolicyHandler,
  XAmzTargetSecretsmanagerGetSecretValueHandler,
  XAmzTargetSecretsmanagerListSecretsHandler,
  XAmzTargetSecretsmanagerListSecretVersionIdsHandler,
  XAmzTargetSecretsmanagerPutResourcePolicyHandler,
  XAmzTargetSecretsmanagerPutSecretValueHandler,
  XAmzTargetSecretsmanagerRemoveRegionsFromReplicationHandler,
  XAmzTargetSecretsmanagerReplicateSecretToRegionsHandler,
  XAmzTargetSecretsmanagerRestoreSecretHandler,
  XAmzTargetSecretsmanagerRotateSecretHandler,
  XAmzTargetSecretsmanagerStopReplicationToReplicaHandler,
  XAmzTargetSecretsmanagerTagResourceHandler,
  XAmzTargetSecretsmanagerUntagResourceHandler,
  XAmzTargetSecretsmanagerUpdateSecretHandler,
  XAmzTargetSecretsmanagerUpdateSecretVersionStageHandler,
  XAmzTargetSecretsmanagerValidateResourcePolicyHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetSecretsmanagerCancelRotateSecretHandler)
  .route('/', XAmzTargetSecretsmanagerCreateSecretHandler)
  .route('/', XAmzTargetSecretsmanagerDeleteResourcePolicyHandler)
  .route('/', XAmzTargetSecretsmanagerDeleteSecretHandler)
  .route('/', XAmzTargetSecretsmanagerDescribeSecretHandler)
  .route('/', XAmzTargetSecretsmanagerGetRandomPasswordHandler)
  .route('/', XAmzTargetSecretsmanagerGetResourcePolicyHandler)
  .route('/', XAmzTargetSecretsmanagerGetSecretValueHandler)
  .route('/', XAmzTargetSecretsmanagerListSecretVersionIdsHandler)
  .route('/', XAmzTargetSecretsmanagerListSecretsHandler)
  .route('/', XAmzTargetSecretsmanagerPutResourcePolicyHandler)
  .route('/', XAmzTargetSecretsmanagerPutSecretValueHandler)
  .route('/', XAmzTargetSecretsmanagerRemoveRegionsFromReplicationHandler)
  .route('/', XAmzTargetSecretsmanagerReplicateSecretToRegionsHandler)
  .route('/', XAmzTargetSecretsmanagerRestoreSecretHandler)
  .route('/', XAmzTargetSecretsmanagerRotateSecretHandler)
  .route('/', XAmzTargetSecretsmanagerStopReplicationToReplicaHandler)
  .route('/', XAmzTargetSecretsmanagerTagResourceHandler)
  .route('/', XAmzTargetSecretsmanagerUntagResourceHandler)
  .route('/', XAmzTargetSecretsmanagerUpdateSecretHandler)
  .route('/', XAmzTargetSecretsmanagerUpdateSecretVersionStageHandler)
  .route('/', XAmzTargetSecretsmanagerValidateResourcePolicyHandler)

export default app
