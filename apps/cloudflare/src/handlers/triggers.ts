import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdBuildsTriggersTriggerUuidRoute,
  patchAccountsAccountIdBuildsTriggersTriggerUuidRoute,
  postAccountsAccountIdBuildsTriggersRoute,
  postAccountsAccountIdBuildsTriggersTriggerUuidBuildsRoute,
  postAccountsAccountIdBuildsTriggersTriggerUuidPurgeBuildCacheRoute,
} from '../routes'

const app = new OpenAPIHono()

export const triggersHandler = app
  .openapi(postAccountsAccountIdBuildsTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdBuildsTriggersTriggerUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdBuildsTriggersTriggerUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdBuildsTriggersTriggerUuidBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdBuildsTriggersTriggerUuidPurgeBuildCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
