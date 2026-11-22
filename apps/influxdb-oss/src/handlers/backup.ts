import { OpenAPIHono } from '@hono/zod-openapi'
import { getBackupKvRoute, getBackupMetadataRoute, getBackupShardsShardIDRoute } from '../routes'

const app = new OpenAPIHono()

export const backupHandler = app
  .openapi(getBackupKvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBackupMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBackupShardsShardIDRoute, (c) => {
    throw new Error('Not implemented')
  })
