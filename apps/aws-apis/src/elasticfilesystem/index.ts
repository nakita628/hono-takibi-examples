import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete20150201AccessPointsAccessPointIdRoute,
  delete20150201FileSystemsFileSystemIdPolicyRoute,
  delete20150201FileSystemsFileSystemIdRoute,
  delete20150201FileSystemsSourceFileSystemIdReplicationConfigurationRoute,
  delete20150201MountTargetsMountTargetIdRoute,
  delete20150201ResourceTagsResourceIdTagKeysRoute,
  get20150201AccessPointsRoute,
  get20150201AccountPreferencesRoute,
  get20150201FileSystemsFileSystemIdBackupPolicyRoute,
  get20150201FileSystemsFileSystemIdLifecycleConfigurationRoute,
  get20150201FileSystemsFileSystemIdPolicyRoute,
  get20150201FileSystemsReplicationConfigurationsRoute,
  get20150201FileSystemsRoute,
  get20150201MountTargetsMountTargetIdSecurityGroupsRoute,
  get20150201MountTargetsRoute,
  get20150201ResourceTagsResourceIdRoute,
  get20150201TagsFileSystemIdIndexRoute,
  post20150201AccessPointsRoute,
  post20150201CreateTagsFileSystemIdRoute,
  post20150201DeleteTagsFileSystemIdRoute,
  post20150201FileSystemsRoute,
  post20150201FileSystemsSourceFileSystemIdReplicationConfigurationRoute,
  post20150201MountTargetsRoute,
  post20150201ResourceTagsResourceIdRoute,
  put20150201AccountPreferencesRoute,
  put20150201FileSystemsFileSystemIdBackupPolicyRoute,
  put20150201FileSystemsFileSystemIdLifecycleConfigurationRoute,
  put20150201FileSystemsFileSystemIdPolicyRoute,
  put20150201FileSystemsFileSystemIdRoute,
  put20150201MountTargetsMountTargetIdSecurityGroupsRoute,
} from './routes'
import {
  delete20150201AccessPointsAccessPointIdRouteHandler,
  delete20150201FileSystemsFileSystemIdPolicyRouteHandler,
  delete20150201FileSystemsFileSystemIdRouteHandler,
  delete20150201FileSystemsSourceFileSystemIdReplicationConfigurationRouteHandler,
  delete20150201MountTargetsMountTargetIdRouteHandler,
  delete20150201ResourceTagsResourceIdTagKeysRouteHandler,
  get20150201AccessPointsRouteHandler,
  get20150201AccountPreferencesRouteHandler,
  get20150201FileSystemsFileSystemIdBackupPolicyRouteHandler,
  get20150201FileSystemsFileSystemIdLifecycleConfigurationRouteHandler,
  get20150201FileSystemsFileSystemIdPolicyRouteHandler,
  get20150201FileSystemsReplicationConfigurationsRouteHandler,
  get20150201FileSystemsRouteHandler,
  get20150201MountTargetsMountTargetIdSecurityGroupsRouteHandler,
  get20150201MountTargetsRouteHandler,
  get20150201ResourceTagsResourceIdRouteHandler,
  get20150201TagsFileSystemIdIndexRouteHandler,
  post20150201AccessPointsRouteHandler,
  post20150201CreateTagsFileSystemIdRouteHandler,
  post20150201DeleteTagsFileSystemIdRouteHandler,
  post20150201FileSystemsRouteHandler,
  post20150201FileSystemsSourceFileSystemIdReplicationConfigurationRouteHandler,
  post20150201MountTargetsRouteHandler,
  post20150201ResourceTagsResourceIdRouteHandler,
  put20150201AccountPreferencesRouteHandler,
  put20150201FileSystemsFileSystemIdBackupPolicyRouteHandler,
  put20150201FileSystemsFileSystemIdLifecycleConfigurationRouteHandler,
  put20150201FileSystemsFileSystemIdPolicyRouteHandler,
  put20150201FileSystemsFileSystemIdRouteHandler,
  put20150201MountTargetsMountTargetIdSecurityGroupsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(post20150201AccessPointsRoute, post20150201AccessPointsRouteHandler)
  .openapi(get20150201AccessPointsRoute, get20150201AccessPointsRouteHandler)
  .openapi(post20150201FileSystemsRoute, post20150201FileSystemsRouteHandler)
  .openapi(get20150201FileSystemsRoute, get20150201FileSystemsRouteHandler)
  .openapi(post20150201MountTargetsRoute, post20150201MountTargetsRouteHandler)
  .openapi(get20150201MountTargetsRoute, get20150201MountTargetsRouteHandler)
  .openapi(
    post20150201FileSystemsSourceFileSystemIdReplicationConfigurationRoute,
    post20150201FileSystemsSourceFileSystemIdReplicationConfigurationRouteHandler,
  )
  .openapi(
    delete20150201FileSystemsSourceFileSystemIdReplicationConfigurationRoute,
    delete20150201FileSystemsSourceFileSystemIdReplicationConfigurationRouteHandler,
  )
  .openapi(post20150201CreateTagsFileSystemIdRoute, post20150201CreateTagsFileSystemIdRouteHandler)
  .openapi(
    delete20150201AccessPointsAccessPointIdRoute,
    delete20150201AccessPointsAccessPointIdRouteHandler,
  )
  .openapi(
    delete20150201FileSystemsFileSystemIdRoute,
    delete20150201FileSystemsFileSystemIdRouteHandler,
  )
  .openapi(put20150201FileSystemsFileSystemIdRoute, put20150201FileSystemsFileSystemIdRouteHandler)
  .openapi(
    delete20150201FileSystemsFileSystemIdPolicyRoute,
    delete20150201FileSystemsFileSystemIdPolicyRouteHandler,
  )
  .openapi(
    get20150201FileSystemsFileSystemIdPolicyRoute,
    get20150201FileSystemsFileSystemIdPolicyRouteHandler,
  )
  .openapi(
    put20150201FileSystemsFileSystemIdPolicyRoute,
    put20150201FileSystemsFileSystemIdPolicyRouteHandler,
  )
  .openapi(
    delete20150201MountTargetsMountTargetIdRoute,
    delete20150201MountTargetsMountTargetIdRouteHandler,
  )
  .openapi(post20150201DeleteTagsFileSystemIdRoute, post20150201DeleteTagsFileSystemIdRouteHandler)
  .openapi(get20150201AccountPreferencesRoute, get20150201AccountPreferencesRouteHandler)
  .openapi(put20150201AccountPreferencesRoute, put20150201AccountPreferencesRouteHandler)
  .openapi(
    get20150201FileSystemsFileSystemIdBackupPolicyRoute,
    get20150201FileSystemsFileSystemIdBackupPolicyRouteHandler,
  )
  .openapi(
    put20150201FileSystemsFileSystemIdBackupPolicyRoute,
    put20150201FileSystemsFileSystemIdBackupPolicyRouteHandler,
  )
  .openapi(
    get20150201FileSystemsFileSystemIdLifecycleConfigurationRoute,
    get20150201FileSystemsFileSystemIdLifecycleConfigurationRouteHandler,
  )
  .openapi(
    put20150201FileSystemsFileSystemIdLifecycleConfigurationRoute,
    put20150201FileSystemsFileSystemIdLifecycleConfigurationRouteHandler,
  )
  .openapi(
    get20150201MountTargetsMountTargetIdSecurityGroupsRoute,
    get20150201MountTargetsMountTargetIdSecurityGroupsRouteHandler,
  )
  .openapi(
    put20150201MountTargetsMountTargetIdSecurityGroupsRoute,
    put20150201MountTargetsMountTargetIdSecurityGroupsRouteHandler,
  )
  .openapi(
    get20150201FileSystemsReplicationConfigurationsRoute,
    get20150201FileSystemsReplicationConfigurationsRouteHandler,
  )
  .openapi(get20150201TagsFileSystemIdIndexRoute, get20150201TagsFileSystemIdIndexRouteHandler)
  .openapi(get20150201ResourceTagsResourceIdRoute, get20150201ResourceTagsResourceIdRouteHandler)
  .openapi(post20150201ResourceTagsResourceIdRoute, post20150201ResourceTagsResourceIdRouteHandler)
  .openapi(
    delete20150201ResourceTagsResourceIdTagKeysRoute,
    delete20150201ResourceTagsResourceIdTagKeysRouteHandler,
  )

export default app
