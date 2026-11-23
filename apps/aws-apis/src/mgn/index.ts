import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTagsResourceArnTagKeysRoute,
  getDescribeVcenterClientsRoute,
  getTagsResourceArnRoute,
  postArchiveApplicationRoute,
  postArchiveWaveRoute,
  postAssociateApplicationsRoute,
  postAssociateSourceServersRoute,
  postChangeServerLifeCycleStateRoute,
  postCreateApplicationRoute,
  postCreateLaunchConfigurationTemplateRoute,
  postCreateReplicationConfigurationTemplateRoute,
  postCreateWaveRoute,
  postDeleteApplicationRoute,
  postDeleteJobRoute,
  postDeleteLaunchConfigurationTemplateRoute,
  postDeleteReplicationConfigurationTemplateRoute,
  postDeleteSourceServerRoute,
  postDeleteVcenterClientRoute,
  postDeleteWaveRoute,
  postDescribeJobLogItemsRoute,
  postDescribeJobsRoute,
  postDescribeLaunchConfigurationTemplatesRoute,
  postDescribeReplicationConfigurationTemplatesRoute,
  postDescribeSourceServersRoute,
  postDisassociateApplicationsRoute,
  postDisassociateSourceServersRoute,
  postDisconnectFromServiceRoute,
  postFinalizeCutoverRoute,
  postGetLaunchConfigurationRoute,
  postGetReplicationConfigurationRoute,
  postInitializeServiceRoute,
  postListApplicationsRoute,
  postListExportErrorsRoute,
  postListExportsRoute,
  postListImportErrorsRoute,
  postListImportsRoute,
  postListSourceServerActionsRoute,
  postListTemplateActionsRoute,
  postListWavesRoute,
  postMarkAsArchivedRoute,
  postPutSourceServerActionRoute,
  postPutTemplateActionRoute,
  postRemoveSourceServerActionRoute,
  postRemoveTemplateActionRoute,
  postRetryDataReplicationRoute,
  postStartCutoverRoute,
  postStartExportRoute,
  postStartImportRoute,
  postStartReplicationRoute,
  postStartTestRoute,
  postTagsResourceArnRoute,
  postTerminateTargetInstancesRoute,
  postUnarchiveApplicationRoute,
  postUnarchiveWaveRoute,
  postUpdateApplicationRoute,
  postUpdateLaunchConfigurationRoute,
  postUpdateLaunchConfigurationTemplateRoute,
  postUpdateReplicationConfigurationRoute,
  postUpdateReplicationConfigurationTemplateRoute,
  postUpdateSourceServerReplicationTypeRoute,
  postUpdateWaveRoute,
} from './routes'
import {
  deleteTagsResourceArnTagKeysRouteHandler,
  getDescribeVcenterClientsRouteHandler,
  getTagsResourceArnRouteHandler,
  postArchiveApplicationRouteHandler,
  postArchiveWaveRouteHandler,
  postAssociateApplicationsRouteHandler,
  postAssociateSourceServersRouteHandler,
  postChangeServerLifeCycleStateRouteHandler,
  postCreateApplicationRouteHandler,
  postCreateLaunchConfigurationTemplateRouteHandler,
  postCreateReplicationConfigurationTemplateRouteHandler,
  postCreateWaveRouteHandler,
  postDeleteApplicationRouteHandler,
  postDeleteJobRouteHandler,
  postDeleteLaunchConfigurationTemplateRouteHandler,
  postDeleteReplicationConfigurationTemplateRouteHandler,
  postDeleteSourceServerRouteHandler,
  postDeleteVcenterClientRouteHandler,
  postDeleteWaveRouteHandler,
  postDescribeJobLogItemsRouteHandler,
  postDescribeJobsRouteHandler,
  postDescribeLaunchConfigurationTemplatesRouteHandler,
  postDescribeReplicationConfigurationTemplatesRouteHandler,
  postDescribeSourceServersRouteHandler,
  postDisassociateApplicationsRouteHandler,
  postDisassociateSourceServersRouteHandler,
  postDisconnectFromServiceRouteHandler,
  postFinalizeCutoverRouteHandler,
  postGetLaunchConfigurationRouteHandler,
  postGetReplicationConfigurationRouteHandler,
  postInitializeServiceRouteHandler,
  postListApplicationsRouteHandler,
  postListExportErrorsRouteHandler,
  postListExportsRouteHandler,
  postListImportErrorsRouteHandler,
  postListImportsRouteHandler,
  postListSourceServerActionsRouteHandler,
  postListTemplateActionsRouteHandler,
  postListWavesRouteHandler,
  postMarkAsArchivedRouteHandler,
  postPutSourceServerActionRouteHandler,
  postPutTemplateActionRouteHandler,
  postRemoveSourceServerActionRouteHandler,
  postRemoveTemplateActionRouteHandler,
  postRetryDataReplicationRouteHandler,
  postStartCutoverRouteHandler,
  postStartExportRouteHandler,
  postStartImportRouteHandler,
  postStartReplicationRouteHandler,
  postStartTestRouteHandler,
  postTagsResourceArnRouteHandler,
  postTerminateTargetInstancesRouteHandler,
  postUnarchiveApplicationRouteHandler,
  postUnarchiveWaveRouteHandler,
  postUpdateApplicationRouteHandler,
  postUpdateLaunchConfigurationRouteHandler,
  postUpdateLaunchConfigurationTemplateRouteHandler,
  postUpdateReplicationConfigurationRouteHandler,
  postUpdateReplicationConfigurationTemplateRouteHandler,
  postUpdateSourceServerReplicationTypeRouteHandler,
  postUpdateWaveRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postArchiveApplicationRoute, postArchiveApplicationRouteHandler)
  .openapi(postArchiveWaveRoute, postArchiveWaveRouteHandler)
  .openapi(postAssociateApplicationsRoute, postAssociateApplicationsRouteHandler)
  .openapi(postAssociateSourceServersRoute, postAssociateSourceServersRouteHandler)
  .openapi(postChangeServerLifeCycleStateRoute, postChangeServerLifeCycleStateRouteHandler)
  .openapi(postCreateApplicationRoute, postCreateApplicationRouteHandler)
  .openapi(
    postCreateLaunchConfigurationTemplateRoute,
    postCreateLaunchConfigurationTemplateRouteHandler,
  )
  .openapi(
    postCreateReplicationConfigurationTemplateRoute,
    postCreateReplicationConfigurationTemplateRouteHandler,
  )
  .openapi(postCreateWaveRoute, postCreateWaveRouteHandler)
  .openapi(postDeleteApplicationRoute, postDeleteApplicationRouteHandler)
  .openapi(postDeleteJobRoute, postDeleteJobRouteHandler)
  .openapi(
    postDeleteLaunchConfigurationTemplateRoute,
    postDeleteLaunchConfigurationTemplateRouteHandler,
  )
  .openapi(
    postDeleteReplicationConfigurationTemplateRoute,
    postDeleteReplicationConfigurationTemplateRouteHandler,
  )
  .openapi(postDeleteSourceServerRoute, postDeleteSourceServerRouteHandler)
  .openapi(postDeleteVcenterClientRoute, postDeleteVcenterClientRouteHandler)
  .openapi(postDeleteWaveRoute, postDeleteWaveRouteHandler)
  .openapi(postDescribeJobLogItemsRoute, postDescribeJobLogItemsRouteHandler)
  .openapi(postDescribeJobsRoute, postDescribeJobsRouteHandler)
  .openapi(
    postDescribeLaunchConfigurationTemplatesRoute,
    postDescribeLaunchConfigurationTemplatesRouteHandler,
  )
  .openapi(
    postDescribeReplicationConfigurationTemplatesRoute,
    postDescribeReplicationConfigurationTemplatesRouteHandler,
  )
  .openapi(postDescribeSourceServersRoute, postDescribeSourceServersRouteHandler)
  .openapi(getDescribeVcenterClientsRoute, getDescribeVcenterClientsRouteHandler)
  .openapi(postDisassociateApplicationsRoute, postDisassociateApplicationsRouteHandler)
  .openapi(postDisassociateSourceServersRoute, postDisassociateSourceServersRouteHandler)
  .openapi(postDisconnectFromServiceRoute, postDisconnectFromServiceRouteHandler)
  .openapi(postFinalizeCutoverRoute, postFinalizeCutoverRouteHandler)
  .openapi(postGetLaunchConfigurationRoute, postGetLaunchConfigurationRouteHandler)
  .openapi(postGetReplicationConfigurationRoute, postGetReplicationConfigurationRouteHandler)
  .openapi(postInitializeServiceRoute, postInitializeServiceRouteHandler)
  .openapi(postListApplicationsRoute, postListApplicationsRouteHandler)
  .openapi(postListExportErrorsRoute, postListExportErrorsRouteHandler)
  .openapi(postListExportsRoute, postListExportsRouteHandler)
  .openapi(postListImportErrorsRoute, postListImportErrorsRouteHandler)
  .openapi(postListImportsRoute, postListImportsRouteHandler)
  .openapi(postListSourceServerActionsRoute, postListSourceServerActionsRouteHandler)
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(postListTemplateActionsRoute, postListTemplateActionsRouteHandler)
  .openapi(postListWavesRoute, postListWavesRouteHandler)
  .openapi(postMarkAsArchivedRoute, postMarkAsArchivedRouteHandler)
  .openapi(postPutSourceServerActionRoute, postPutSourceServerActionRouteHandler)
  .openapi(postPutTemplateActionRoute, postPutTemplateActionRouteHandler)
  .openapi(postRemoveSourceServerActionRoute, postRemoveSourceServerActionRouteHandler)
  .openapi(postRemoveTemplateActionRoute, postRemoveTemplateActionRouteHandler)
  .openapi(postRetryDataReplicationRoute, postRetryDataReplicationRouteHandler)
  .openapi(postStartCutoverRoute, postStartCutoverRouteHandler)
  .openapi(postStartExportRoute, postStartExportRouteHandler)
  .openapi(postStartImportRoute, postStartImportRouteHandler)
  .openapi(postStartReplicationRoute, postStartReplicationRouteHandler)
  .openapi(postStartTestRoute, postStartTestRouteHandler)
  .openapi(postTerminateTargetInstancesRoute, postTerminateTargetInstancesRouteHandler)
  .openapi(postUnarchiveApplicationRoute, postUnarchiveApplicationRouteHandler)
  .openapi(postUnarchiveWaveRoute, postUnarchiveWaveRouteHandler)
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)
  .openapi(postUpdateApplicationRoute, postUpdateApplicationRouteHandler)
  .openapi(postUpdateLaunchConfigurationRoute, postUpdateLaunchConfigurationRouteHandler)
  .openapi(
    postUpdateLaunchConfigurationTemplateRoute,
    postUpdateLaunchConfigurationTemplateRouteHandler,
  )
  .openapi(postUpdateReplicationConfigurationRoute, postUpdateReplicationConfigurationRouteHandler)
  .openapi(
    postUpdateReplicationConfigurationTemplateRoute,
    postUpdateReplicationConfigurationTemplateRouteHandler,
  )
  .openapi(
    postUpdateSourceServerReplicationTypeRoute,
    postUpdateSourceServerReplicationTypeRouteHandler,
  )
  .openapi(postUpdateWaveRoute, postUpdateWaveRouteHandler)

export default app
