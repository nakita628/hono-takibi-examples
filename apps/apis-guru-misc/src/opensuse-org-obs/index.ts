import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAttributeNamespaceAttributeNameMetaRoute,
  deleteAttributeNamespaceAttributeNameRoute,
  deleteAttributeNamespaceMetaRoute,
  deleteAttributeNamespaceRoute,
  deleteDistributionsDistributionIdRoute,
  deleteGroupGroupTitleRoute,
  deleteIssueTrackersIssueTrackerNameRoute,
  deletePersonLoginTokenIdRoute,
  deleteRequestIdRoute,
  getAboutRoute,
  getArchitecturesArchitectureNameRoute,
  getArchitecturesRoute,
  getAttributeNamespaceAttributeNameMetaRoute,
  getAttributeNamespaceMetaRoute,
  getAttributeNamespaceRoute,
  getAttributeRoute,
  getBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoRoute,
  getBuildProjectNameRepositoryNameArchitectureNamePackageNameBuildinfoRoute,
  getBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameRoute,
  getBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameViewFileinfoRoute,
  getBuildProjectNameRepositoryNameArchitectureNamePackageNameHistoryRoute,
  getBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatusRoute,
  getBuildProjectNameRepositoryNameArchitectureNamePackageNameLogRoute,
  getBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonRoute,
  getBuildProjectNameRepositoryNameArchitectureNamePackageNameRoute,
  getBuildProjectNameRepositoryNameArchitectureNamePackageNameStatusRoute,
  getBuildProjectNameRepositoryNameArchitectureNameRepositoryRoute,
  getBuildProjectNameRepositoryNameBuildconfigRoute,
  getBuildProjectNameRepositoryNameRoute,
  getBuildProjectNameResultRoute,
  getBuildProjectNameRoute,
  getBuildRoute,
  getConfigurationRoute,
  getDistributionsDistributionIdRoute,
  getDistributionsIncludeRemotesRoute,
  getDistributionsRoute,
  getGroupGroupTitleRoute,
  getGroupRoute,
  getIssueTrackersIssueTrackerNameIssuesIssueNameRoute,
  getIssueTrackersIssueTrackerNameRoute,
  getIssueTrackersRoute,
  getPersonLoginGroupRoute,
  getPersonLoginRoute,
  getPersonLoginTokenRoute,
  getPersonRoute,
  getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameRoute,
  getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewYmpRoute,
  getPublishedProjectNameRepositoryNameArchitectureNameRoute,
  getPublishedProjectNameRepositoryNameRoute,
  getPublishedProjectNameRepositoryNameViewStatusRoute,
  getPublishedProjectNameRoute,
  getPublishedRoute,
  getRequestIdRoute,
  getRequestRoute,
  getRequestViewCollectionRoute,
  getWorkerArchitectureNameWorkerIdRoute,
  getWorkerStatusRoute,
  postAttributeNamespaceAttributeNameMetaRoute,
  postAttributeNamespaceMetaRoute,
  postBuildProjectNameRoute,
  postDistributionsRoute,
  postGroupGroupTitleRoute,
  postIssueTrackersRoute,
  postPersonLoginRoute,
  postPersonLoginTokenRoute,
  postPersonRegisterRoute,
  postPersonRoute,
  postRequestIdCmdDiffRoute,
  postRequestIdRoute,
  postRequestRoute,
  postWorkerCmdCheckconstraintsRoute,
  putAttributeNamespaceAttributeNameMetaRoute,
  putAttributeNamespaceMetaRoute,
  putBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameRoute,
  putConfigurationRoute,
  putDistributionsBulkReplaceRoute,
  putDistributionsDistributionIdRoute,
  putGroupGroupTitleRoute,
  putIssueTrackersIssueTrackerNameRoute,
  putPersonLoginRoute,
  putRequestIdRoute,
} from './routes'
import {
  deleteAttributeNamespaceAttributeNameMetaRouteHandler,
  deleteAttributeNamespaceAttributeNameRouteHandler,
  deleteAttributeNamespaceMetaRouteHandler,
  deleteAttributeNamespaceRouteHandler,
  deleteDistributionsDistributionIdRouteHandler,
  deleteGroupGroupTitleRouteHandler,
  deleteIssueTrackersIssueTrackerNameRouteHandler,
  deletePersonLoginTokenIdRouteHandler,
  deleteRequestIdRouteHandler,
  getAboutRouteHandler,
  getArchitecturesArchitectureNameRouteHandler,
  getArchitecturesRouteHandler,
  getAttributeNamespaceAttributeNameMetaRouteHandler,
  getAttributeNamespaceMetaRouteHandler,
  getAttributeNamespaceRouteHandler,
  getAttributeRouteHandler,
  getBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoRouteHandler,
  getBuildProjectNameRepositoryNameArchitectureNamePackageNameBuildinfoRouteHandler,
  getBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameRouteHandler,
  getBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameViewFileinfoRouteHandler,
  getBuildProjectNameRepositoryNameArchitectureNamePackageNameHistoryRouteHandler,
  getBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatusRouteHandler,
  getBuildProjectNameRepositoryNameArchitectureNamePackageNameLogRouteHandler,
  getBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonRouteHandler,
  getBuildProjectNameRepositoryNameArchitectureNamePackageNameRouteHandler,
  getBuildProjectNameRepositoryNameArchitectureNamePackageNameStatusRouteHandler,
  getBuildProjectNameRepositoryNameArchitectureNameRepositoryRouteHandler,
  getBuildProjectNameRepositoryNameBuildconfigRouteHandler,
  getBuildProjectNameRepositoryNameRouteHandler,
  getBuildProjectNameResultRouteHandler,
  getBuildProjectNameRouteHandler,
  getBuildRouteHandler,
  getConfigurationRouteHandler,
  getDistributionsDistributionIdRouteHandler,
  getDistributionsIncludeRemotesRouteHandler,
  getDistributionsRouteHandler,
  getGroupGroupTitleRouteHandler,
  getGroupRouteHandler,
  getIssueTrackersIssueTrackerNameIssuesIssueNameRouteHandler,
  getIssueTrackersIssueTrackerNameRouteHandler,
  getIssueTrackersRouteHandler,
  getPersonLoginGroupRouteHandler,
  getPersonLoginRouteHandler,
  getPersonLoginTokenRouteHandler,
  getPersonRouteHandler,
  getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameRouteHandler,
  getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewYmpRouteHandler,
  getPublishedProjectNameRepositoryNameArchitectureNameRouteHandler,
  getPublishedProjectNameRepositoryNameRouteHandler,
  getPublishedProjectNameRepositoryNameViewStatusRouteHandler,
  getPublishedProjectNameRouteHandler,
  getPublishedRouteHandler,
  getRequestIdRouteHandler,
  getRequestRouteHandler,
  getRequestViewCollectionRouteHandler,
  getWorkerArchitectureNameWorkerIdRouteHandler,
  getWorkerStatusRouteHandler,
  postAttributeNamespaceAttributeNameMetaRouteHandler,
  postAttributeNamespaceMetaRouteHandler,
  postBuildProjectNameRouteHandler,
  postDistributionsRouteHandler,
  postGroupGroupTitleRouteHandler,
  postIssueTrackersRouteHandler,
  postPersonLoginRouteHandler,
  postPersonLoginTokenRouteHandler,
  postPersonRegisterRouteHandler,
  postPersonRouteHandler,
  postRequestIdCmdDiffRouteHandler,
  postRequestIdRouteHandler,
  postRequestRouteHandler,
  postWorkerCmdCheckconstraintsRouteHandler,
  putAttributeNamespaceAttributeNameMetaRouteHandler,
  putAttributeNamespaceMetaRouteHandler,
  putBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameRouteHandler,
  putConfigurationRouteHandler,
  putDistributionsBulkReplaceRouteHandler,
  putDistributionsDistributionIdRouteHandler,
  putGroupGroupTitleRouteHandler,
  putIssueTrackersIssueTrackerNameRouteHandler,
  putPersonLoginRouteHandler,
  putRequestIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAboutRoute, getAboutRouteHandler)
  .openapi(getArchitecturesRoute, getArchitecturesRouteHandler)
  .openapi(getArchitecturesArchitectureNameRoute, getArchitecturesArchitectureNameRouteHandler)
  .openapi(getAttributeRoute, getAttributeRouteHandler)
  .openapi(deleteAttributeNamespaceRoute, deleteAttributeNamespaceRouteHandler)
  .openapi(getAttributeNamespaceRoute, getAttributeNamespaceRouteHandler)
  .openapi(deleteAttributeNamespaceMetaRoute, deleteAttributeNamespaceMetaRouteHandler)
  .openapi(getAttributeNamespaceMetaRoute, getAttributeNamespaceMetaRouteHandler)
  .openapi(postAttributeNamespaceMetaRoute, postAttributeNamespaceMetaRouteHandler)
  .openapi(putAttributeNamespaceMetaRoute, putAttributeNamespaceMetaRouteHandler)
  .openapi(
    deleteAttributeNamespaceAttributeNameRoute,
    deleteAttributeNamespaceAttributeNameRouteHandler,
  )
  .openapi(
    deleteAttributeNamespaceAttributeNameMetaRoute,
    deleteAttributeNamespaceAttributeNameMetaRouteHandler,
  )
  .openapi(
    getAttributeNamespaceAttributeNameMetaRoute,
    getAttributeNamespaceAttributeNameMetaRouteHandler,
  )
  .openapi(
    postAttributeNamespaceAttributeNameMetaRoute,
    postAttributeNamespaceAttributeNameMetaRouteHandler,
  )
  .openapi(
    putAttributeNamespaceAttributeNameMetaRoute,
    putAttributeNamespaceAttributeNameMetaRouteHandler,
  )
  .openapi(getBuildRoute, getBuildRouteHandler)
  .openapi(getBuildProjectNameRoute, getBuildProjectNameRouteHandler)
  .openapi(postBuildProjectNameRoute, postBuildProjectNameRouteHandler)
  .openapi(getBuildProjectNameResultRoute, getBuildProjectNameResultRouteHandler)
  .openapi(getBuildProjectNameRepositoryNameRoute, getBuildProjectNameRepositoryNameRouteHandler)
  .openapi(
    getBuildProjectNameRepositoryNameBuildconfigRoute,
    getBuildProjectNameRepositoryNameBuildconfigRouteHandler,
  )
  .openapi(
    getBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoRoute,
    getBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoRouteHandler,
  )
  .openapi(
    getBuildProjectNameRepositoryNameArchitectureNameRepositoryRoute,
    getBuildProjectNameRepositoryNameArchitectureNameRepositoryRouteHandler,
  )
  .openapi(
    getBuildProjectNameRepositoryNameArchitectureNamePackageNameRoute,
    getBuildProjectNameRepositoryNameArchitectureNamePackageNameRouteHandler,
  )
  .openapi(
    getBuildProjectNameRepositoryNameArchitectureNamePackageNameBuildinfoRoute,
    getBuildProjectNameRepositoryNameArchitectureNamePackageNameBuildinfoRouteHandler,
  )
  .openapi(
    getBuildProjectNameRepositoryNameArchitectureNamePackageNameHistoryRoute,
    getBuildProjectNameRepositoryNameArchitectureNamePackageNameHistoryRouteHandler,
  )
  .openapi(
    getBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatusRoute,
    getBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatusRouteHandler,
  )
  .openapi(
    getBuildProjectNameRepositoryNameArchitectureNamePackageNameLogRoute,
    getBuildProjectNameRepositoryNameArchitectureNamePackageNameLogRouteHandler,
  )
  .openapi(
    getBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonRoute,
    getBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonRouteHandler,
  )
  .openapi(
    getBuildProjectNameRepositoryNameArchitectureNamePackageNameStatusRoute,
    getBuildProjectNameRepositoryNameArchitectureNamePackageNameStatusRouteHandler,
  )
  .openapi(
    getBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameRoute,
    getBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameRouteHandler,
  )
  .openapi(
    putBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameRoute,
    putBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameRouteHandler,
  )
  .openapi(
    getBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameViewFileinfoRoute,
    getBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameViewFileinfoRouteHandler,
  )
  .openapi(getConfigurationRoute, getConfigurationRouteHandler)
  .openapi(putConfigurationRoute, putConfigurationRouteHandler)
  .openapi(getDistributionsRoute, getDistributionsRouteHandler)
  .openapi(postDistributionsRoute, postDistributionsRouteHandler)
  .openapi(putDistributionsBulkReplaceRoute, putDistributionsBulkReplaceRouteHandler)
  .openapi(getDistributionsIncludeRemotesRoute, getDistributionsIncludeRemotesRouteHandler)
  .openapi(deleteDistributionsDistributionIdRoute, deleteDistributionsDistributionIdRouteHandler)
  .openapi(getDistributionsDistributionIdRoute, getDistributionsDistributionIdRouteHandler)
  .openapi(putDistributionsDistributionIdRoute, putDistributionsDistributionIdRouteHandler)
  .openapi(getGroupRoute, getGroupRouteHandler)
  .openapi(deleteGroupGroupTitleRoute, deleteGroupGroupTitleRouteHandler)
  .openapi(getGroupGroupTitleRoute, getGroupGroupTitleRouteHandler)
  .openapi(postGroupGroupTitleRoute, postGroupGroupTitleRouteHandler)
  .openapi(putGroupGroupTitleRoute, putGroupGroupTitleRouteHandler)
  .openapi(getIssueTrackersRoute, getIssueTrackersRouteHandler)
  .openapi(postIssueTrackersRoute, postIssueTrackersRouteHandler)
  .openapi(
    deleteIssueTrackersIssueTrackerNameRoute,
    deleteIssueTrackersIssueTrackerNameRouteHandler,
  )
  .openapi(getIssueTrackersIssueTrackerNameRoute, getIssueTrackersIssueTrackerNameRouteHandler)
  .openapi(putIssueTrackersIssueTrackerNameRoute, putIssueTrackersIssueTrackerNameRouteHandler)
  .openapi(
    getIssueTrackersIssueTrackerNameIssuesIssueNameRoute,
    getIssueTrackersIssueTrackerNameIssuesIssueNameRouteHandler,
  )
  .openapi(getPersonRoute, getPersonRouteHandler)
  .openapi(postPersonRoute, postPersonRouteHandler)
  .openapi(postPersonRegisterRoute, postPersonRegisterRouteHandler)
  .openapi(getPersonLoginRoute, getPersonLoginRouteHandler)
  .openapi(postPersonLoginRoute, postPersonLoginRouteHandler)
  .openapi(putPersonLoginRoute, putPersonLoginRouteHandler)
  .openapi(getPersonLoginGroupRoute, getPersonLoginGroupRouteHandler)
  .openapi(getPersonLoginTokenRoute, getPersonLoginTokenRouteHandler)
  .openapi(postPersonLoginTokenRoute, postPersonLoginTokenRouteHandler)
  .openapi(deletePersonLoginTokenIdRoute, deletePersonLoginTokenIdRouteHandler)
  .openapi(getPublishedRoute, getPublishedRouteHandler)
  .openapi(getPublishedProjectNameRoute, getPublishedProjectNameRouteHandler)
  .openapi(
    getPublishedProjectNameRepositoryNameRoute,
    getPublishedProjectNameRepositoryNameRouteHandler,
  )
  .openapi(
    getPublishedProjectNameRepositoryNameArchitectureNameRoute,
    getPublishedProjectNameRepositoryNameArchitectureNameRouteHandler,
  )
  .openapi(
    getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameRoute,
    getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameRouteHandler,
  )
  .openapi(
    getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewYmpRoute,
    getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewYmpRouteHandler,
  )
  .openapi(
    getPublishedProjectNameRepositoryNameViewStatusRoute,
    getPublishedProjectNameRepositoryNameViewStatusRouteHandler,
  )
  .openapi(getRequestRoute, getRequestRouteHandler)
  .openapi(postRequestRoute, postRequestRouteHandler)
  .openapi(deleteRequestIdRoute, deleteRequestIdRouteHandler)
  .openapi(getRequestIdRoute, getRequestIdRouteHandler)
  .openapi(postRequestIdRoute, postRequestIdRouteHandler)
  .openapi(putRequestIdRoute, putRequestIdRouteHandler)
  .openapi(postRequestIdCmdDiffRoute, postRequestIdCmdDiffRouteHandler)
  .openapi(getRequestViewCollectionRoute, getRequestViewCollectionRouteHandler)
  .openapi(getWorkerStatusRoute, getWorkerStatusRouteHandler)
  .openapi(getWorkerArchitectureNameWorkerIdRoute, getWorkerArchitectureNameWorkerIdRouteHandler)
  .openapi(postWorkerCmdCheckconstraintsRoute, postWorkerCmdCheckconstraintsRouteHandler)

export default app
