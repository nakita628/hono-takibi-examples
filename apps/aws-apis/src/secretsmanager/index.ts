import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetSecretsmanagerCancelRotateSecretHandler,
  xAmzTargetSecretsmanagerCreateSecretHandler,
  xAmzTargetSecretsmanagerDeleteResourcePolicyHandler,
  xAmzTargetSecretsmanagerDeleteSecretHandler,
  xAmzTargetSecretsmanagerDescribeSecretHandler,
  xAmzTargetSecretsmanagerGetRandomPasswordHandler,
  xAmzTargetSecretsmanagerGetResourcePolicyHandler,
  xAmzTargetSecretsmanagerGetSecretValueHandler,
  xAmzTargetSecretsmanagerListSecretsHandler,
  xAmzTargetSecretsmanagerListSecretVersionIdsHandler,
  xAmzTargetSecretsmanagerPutResourcePolicyHandler,
  xAmzTargetSecretsmanagerPutSecretValueHandler,
  xAmzTargetSecretsmanagerRemoveRegionsFromReplicationHandler,
  xAmzTargetSecretsmanagerReplicateSecretToRegionsHandler,
  xAmzTargetSecretsmanagerRestoreSecretHandler,
  xAmzTargetSecretsmanagerRotateSecretHandler,
  xAmzTargetSecretsmanagerStopReplicationToReplicaHandler,
  xAmzTargetSecretsmanagerTagResourceHandler,
  xAmzTargetSecretsmanagerUntagResourceHandler,
  xAmzTargetSecretsmanagerUpdateSecretHandler,
  xAmzTargetSecretsmanagerUpdateSecretVersionStageHandler,
  xAmzTargetSecretsmanagerValidateResourcePolicyHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetSecretsmanagerCancelRotateSecretHandler)
  .route('/', xAmzTargetSecretsmanagerCreateSecretHandler)
  .route('/', xAmzTargetSecretsmanagerDeleteResourcePolicyHandler)
  .route('/', xAmzTargetSecretsmanagerDeleteSecretHandler)
  .route('/', xAmzTargetSecretsmanagerDescribeSecretHandler)
  .route('/', xAmzTargetSecretsmanagerGetRandomPasswordHandler)
  .route('/', xAmzTargetSecretsmanagerGetResourcePolicyHandler)
  .route('/', xAmzTargetSecretsmanagerGetSecretValueHandler)
  .route('/', xAmzTargetSecretsmanagerListSecretVersionIdsHandler)
  .route('/', xAmzTargetSecretsmanagerListSecretsHandler)
  .route('/', xAmzTargetSecretsmanagerPutResourcePolicyHandler)
  .route('/', xAmzTargetSecretsmanagerPutSecretValueHandler)
  .route('/', xAmzTargetSecretsmanagerRemoveRegionsFromReplicationHandler)
  .route('/', xAmzTargetSecretsmanagerReplicateSecretToRegionsHandler)
  .route('/', xAmzTargetSecretsmanagerRestoreSecretHandler)
  .route('/', xAmzTargetSecretsmanagerRotateSecretHandler)
  .route('/', xAmzTargetSecretsmanagerStopReplicationToReplicaHandler)
  .route('/', xAmzTargetSecretsmanagerTagResourceHandler)
  .route('/', xAmzTargetSecretsmanagerUntagResourceHandler)
  .route('/', xAmzTargetSecretsmanagerUpdateSecretHandler)
  .route('/', xAmzTargetSecretsmanagerUpdateSecretVersionStageHandler)
  .route('/', xAmzTargetSecretsmanagerValidateResourcePolicyHandler)

export default app
