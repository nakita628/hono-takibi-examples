import { OpenAPIHono } from '@hono/zod-openapi'
import {
  alicloudMountPathHandler,
  authHandler,
  awsMountPathHandler,
  azureMountPathHandler,
  consulMountPathHandler,
  cubbyholeHandler,
  databaseMountPathHandler,
  gcpkmsMountPathHandler,
  gcpMountPathHandler,
  identityHandler,
  kubernetesMountPathHandler,
  kvV1MountPathHandler,
  kvV2MountPathHandler,
  ldapMountPathHandler,
  mongodbatlasMountPathHandler,
  nomadMountPathHandler,
  pkiMountPathHandler,
  rabbitmqMountPathHandler,
  sshMountPathHandler,
  sysHandler,
  terraformMountPathHandler,
  totpMountPathHandler,
  transitMountPathHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', authHandler)
  .route('/', cubbyholeHandler)
  .route('/', identityHandler)
  .route('/', sysHandler)
  .route('/', alicloudMountPathHandler)
  .route('/', awsMountPathHandler)
  .route('/', azureMountPathHandler)
  .route('/', consulMountPathHandler)
  .route('/', databaseMountPathHandler)
  .route('/', gcpMountPathHandler)
  .route('/', gcpkmsMountPathHandler)
  .route('/', kubernetesMountPathHandler)
  .route('/', kvV1MountPathHandler)
  .route('/', kvV2MountPathHandler)
  .route('/', ldapMountPathHandler)
  .route('/', mongodbatlasMountPathHandler)
  .route('/', nomadMountPathHandler)
  .route('/', pkiMountPathHandler)
  .route('/', rabbitmqMountPathHandler)
  .route('/', sshMountPathHandler)
  .route('/', terraformMountPathHandler)
  .route('/', totpMountPathHandler)
  .route('/', transitMountPathHandler)

export default app
