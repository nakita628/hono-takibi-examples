import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppClientsAppClientIdRoute,
  deleteAssetsAssetIdRoute,
  deleteDatasetsDatasetIdRoute,
  deleteDocumentsDocumentIdRoute,
  deleteDocumentsRoute,
  deleteModelsModelIdDataBundlesDataBundleIdRoute,
  deleteModelsModelIdRoute,
  deletePaymentMethodsPaymentMethodIdRoute,
  deleteSecretsSecretIdRoute,
  deleteTransitionsTransitionIdRoute,
  deleteUsersUserIdRoute,
  deleteWorkflowsWorkflowIdExecutionsExecutionIdRoute,
  deleteWorkflowsWorkflowIdRoute,
  getAppClientsRoute,
  getAssetsAssetIdRoute,
  getAssetsRoute,
  getDatasetsDatasetIdRoute,
  getDatasetsRoute,
  getDeploymentEnvironmentsDeploymentEnvironmentIdRoute,
  getDeploymentEnvironmentsRoute,
  getDocumentsDocumentIdRoute,
  getDocumentsRoute,
  getLogsLogIdRoute,
  getLogsRoute,
  getModelsModelIdDataBundlesRoute,
  getModelsModelIdRoute,
  getModelsModelIdTrainingsRoute,
  getModelsRoute,
  getOrganizationsOrganizationIdRoute,
  getOrganizationsRoute,
  getPaymentMethodsPaymentMethodIdRoute,
  getPaymentMethodsRoute,
  getPlansPlanIdRoute,
  getPlansRoute,
  getPredictionsRoute,
  getProfilesProfileIdRoute,
  getSecretsRoute,
  getTransitionsRoute,
  getTransitionsTransitionIdExecutionsExecutionIdRoute,
  getTransitionsTransitionIdExecutionsRoute,
  getTransitionsTransitionIdRoute,
  getUsersRoute,
  getUsersUserIdRoute,
  getWorkflowsRoute,
  getWorkflowsWorkflowIdExecutionsExecutionIdRoute,
  getWorkflowsWorkflowIdExecutionsRoute,
  getWorkflowsWorkflowIdRoute,
  optionsAppClientsAppClientIdRoute,
  optionsAppClientsRoute,
  optionsAssetsAssetIdRoute,
  optionsAssetsRoute,
  optionsDatasetsDatasetIdRoute,
  optionsDatasetsRoute,
  optionsDeploymentEnvironmentsDeploymentEnvironmentIdRoute,
  optionsDeploymentEnvironmentsRoute,
  optionsDocumentsDocumentIdRoute,
  optionsDocumentsRoute,
  optionsLogsLogIdRoute,
  optionsLogsRoute,
  optionsModelsModelIdDataBundlesDataBundleIdRoute,
  optionsModelsModelIdDataBundlesRoute,
  optionsModelsModelIdRoute,
  optionsModelsModelIdTrainingsRoute,
  optionsModelsModelIdTrainingsTrainingIdRoute,
  optionsModelsRoute,
  optionsOrganizationsOrganizationIdRoute,
  optionsOrganizationsRoute,
  optionsPaymentMethodsPaymentMethodIdRoute,
  optionsPaymentMethodsRoute,
  optionsPlansPlanIdRoute,
  optionsPlansRoute,
  optionsPredictionsRoute,
  optionsProfilesProfileIdRoute,
  optionsSecretsRoute,
  optionsSecretsSecretIdRoute,
  optionsSignupRoute,
  optionsTransitionsRoute,
  optionsTransitionsTransitionIdExecutionsExecutionIdHeartbeatsRoute,
  optionsTransitionsTransitionIdExecutionsExecutionIdRoute,
  optionsTransitionsTransitionIdExecutionsRoute,
  optionsTransitionsTransitionIdRoute,
  optionsUsersRoute,
  optionsUsersUserIdRoute,
  optionsWorkflowsRoute,
  optionsWorkflowsWorkflowIdExecutionsExecutionIdRoute,
  optionsWorkflowsWorkflowIdExecutionsRoute,
  optionsWorkflowsWorkflowIdRoute,
  patchAppClientsAppClientIdRoute,
  patchAssetsAssetIdRoute,
  patchDatasetsDatasetIdRoute,
  patchDocumentsDocumentIdRoute,
  patchModelsModelIdDataBundlesDataBundleIdRoute,
  patchModelsModelIdRoute,
  patchModelsModelIdTrainingsTrainingIdRoute,
  patchOrganizationsOrganizationIdRoute,
  patchPaymentMethodsPaymentMethodIdRoute,
  patchProfilesProfileIdRoute,
  patchSecretsSecretIdRoute,
  patchTransitionsTransitionIdExecutionsExecutionIdRoute,
  patchTransitionsTransitionIdRoute,
  patchUsersUserIdRoute,
  patchWorkflowsWorkflowIdExecutionsExecutionIdRoute,
  patchWorkflowsWorkflowIdRoute,
  postAppClientsRoute,
  postAssetsRoute,
  postDatasetsRoute,
  postDocumentsRoute,
  postModelsModelIdDataBundlesRoute,
  postModelsModelIdTrainingsRoute,
  postModelsRoute,
  postOrganizationsRoute,
  postPaymentMethodsRoute,
  postPredictionsRoute,
  postSecretsRoute,
  postSignupRoute,
  postTransitionsRoute,
  postTransitionsTransitionIdExecutionsExecutionIdHeartbeatsRoute,
  postTransitionsTransitionIdExecutionsRoute,
  postUsersRoute,
  postWorkflowsRoute,
  postWorkflowsWorkflowIdExecutionsRoute,
} from './routes'
import {
  deleteAppClientsAppClientIdRouteHandler,
  deleteAssetsAssetIdRouteHandler,
  deleteDatasetsDatasetIdRouteHandler,
  deleteDocumentsDocumentIdRouteHandler,
  deleteDocumentsRouteHandler,
  deleteModelsModelIdDataBundlesDataBundleIdRouteHandler,
  deleteModelsModelIdRouteHandler,
  deletePaymentMethodsPaymentMethodIdRouteHandler,
  deleteSecretsSecretIdRouteHandler,
  deleteTransitionsTransitionIdRouteHandler,
  deleteUsersUserIdRouteHandler,
  deleteWorkflowsWorkflowIdExecutionsExecutionIdRouteHandler,
  deleteWorkflowsWorkflowIdRouteHandler,
  getAppClientsRouteHandler,
  getAssetsAssetIdRouteHandler,
  getAssetsRouteHandler,
  getDatasetsDatasetIdRouteHandler,
  getDatasetsRouteHandler,
  getDeploymentEnvironmentsDeploymentEnvironmentIdRouteHandler,
  getDeploymentEnvironmentsRouteHandler,
  getDocumentsDocumentIdRouteHandler,
  getDocumentsRouteHandler,
  getLogsLogIdRouteHandler,
  getLogsRouteHandler,
  getModelsModelIdDataBundlesRouteHandler,
  getModelsModelIdRouteHandler,
  getModelsModelIdTrainingsRouteHandler,
  getModelsRouteHandler,
  getOrganizationsOrganizationIdRouteHandler,
  getOrganizationsRouteHandler,
  getPaymentMethodsPaymentMethodIdRouteHandler,
  getPaymentMethodsRouteHandler,
  getPlansPlanIdRouteHandler,
  getPlansRouteHandler,
  getPredictionsRouteHandler,
  getProfilesProfileIdRouteHandler,
  getSecretsRouteHandler,
  getTransitionsRouteHandler,
  getTransitionsTransitionIdExecutionsExecutionIdRouteHandler,
  getTransitionsTransitionIdExecutionsRouteHandler,
  getTransitionsTransitionIdRouteHandler,
  getUsersRouteHandler,
  getUsersUserIdRouteHandler,
  getWorkflowsRouteHandler,
  getWorkflowsWorkflowIdExecutionsExecutionIdRouteHandler,
  getWorkflowsWorkflowIdExecutionsRouteHandler,
  getWorkflowsWorkflowIdRouteHandler,
  optionsAppClientsAppClientIdRouteHandler,
  optionsAppClientsRouteHandler,
  optionsAssetsAssetIdRouteHandler,
  optionsAssetsRouteHandler,
  optionsDatasetsDatasetIdRouteHandler,
  optionsDatasetsRouteHandler,
  optionsDeploymentEnvironmentsDeploymentEnvironmentIdRouteHandler,
  optionsDeploymentEnvironmentsRouteHandler,
  optionsDocumentsDocumentIdRouteHandler,
  optionsDocumentsRouteHandler,
  optionsLogsLogIdRouteHandler,
  optionsLogsRouteHandler,
  optionsModelsModelIdDataBundlesDataBundleIdRouteHandler,
  optionsModelsModelIdDataBundlesRouteHandler,
  optionsModelsModelIdRouteHandler,
  optionsModelsModelIdTrainingsRouteHandler,
  optionsModelsModelIdTrainingsTrainingIdRouteHandler,
  optionsModelsRouteHandler,
  optionsOrganizationsOrganizationIdRouteHandler,
  optionsOrganizationsRouteHandler,
  optionsPaymentMethodsPaymentMethodIdRouteHandler,
  optionsPaymentMethodsRouteHandler,
  optionsPlansPlanIdRouteHandler,
  optionsPlansRouteHandler,
  optionsPredictionsRouteHandler,
  optionsProfilesProfileIdRouteHandler,
  optionsSecretsRouteHandler,
  optionsSecretsSecretIdRouteHandler,
  optionsSignupRouteHandler,
  optionsTransitionsRouteHandler,
  optionsTransitionsTransitionIdExecutionsExecutionIdHeartbeatsRouteHandler,
  optionsTransitionsTransitionIdExecutionsExecutionIdRouteHandler,
  optionsTransitionsTransitionIdExecutionsRouteHandler,
  optionsTransitionsTransitionIdRouteHandler,
  optionsUsersRouteHandler,
  optionsUsersUserIdRouteHandler,
  optionsWorkflowsRouteHandler,
  optionsWorkflowsWorkflowIdExecutionsExecutionIdRouteHandler,
  optionsWorkflowsWorkflowIdExecutionsRouteHandler,
  optionsWorkflowsWorkflowIdRouteHandler,
  patchAppClientsAppClientIdRouteHandler,
  patchAssetsAssetIdRouteHandler,
  patchDatasetsDatasetIdRouteHandler,
  patchDocumentsDocumentIdRouteHandler,
  patchModelsModelIdDataBundlesDataBundleIdRouteHandler,
  patchModelsModelIdRouteHandler,
  patchModelsModelIdTrainingsTrainingIdRouteHandler,
  patchOrganizationsOrganizationIdRouteHandler,
  patchPaymentMethodsPaymentMethodIdRouteHandler,
  patchProfilesProfileIdRouteHandler,
  patchSecretsSecretIdRouteHandler,
  patchTransitionsTransitionIdExecutionsExecutionIdRouteHandler,
  patchTransitionsTransitionIdRouteHandler,
  patchUsersUserIdRouteHandler,
  patchWorkflowsWorkflowIdExecutionsExecutionIdRouteHandler,
  patchWorkflowsWorkflowIdRouteHandler,
  postAppClientsRouteHandler,
  postAssetsRouteHandler,
  postDatasetsRouteHandler,
  postDocumentsRouteHandler,
  postModelsModelIdDataBundlesRouteHandler,
  postModelsModelIdTrainingsRouteHandler,
  postModelsRouteHandler,
  postOrganizationsRouteHandler,
  postPaymentMethodsRouteHandler,
  postPredictionsRouteHandler,
  postSecretsRouteHandler,
  postSignupRouteHandler,
  postTransitionsRouteHandler,
  postTransitionsTransitionIdExecutionsExecutionIdHeartbeatsRouteHandler,
  postTransitionsTransitionIdExecutionsRouteHandler,
  postUsersRouteHandler,
  postWorkflowsRouteHandler,
  postWorkflowsWorkflowIdExecutionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAppClientsRoute, getAppClientsRouteHandler)
  .openapi(optionsAppClientsRoute, optionsAppClientsRouteHandler)
  .openapi(postAppClientsRoute, postAppClientsRouteHandler)
  .openapi(deleteAppClientsAppClientIdRoute, deleteAppClientsAppClientIdRouteHandler)
  .openapi(optionsAppClientsAppClientIdRoute, optionsAppClientsAppClientIdRouteHandler)
  .openapi(patchAppClientsAppClientIdRoute, patchAppClientsAppClientIdRouteHandler)
  .openapi(getAssetsRoute, getAssetsRouteHandler)
  .openapi(optionsAssetsRoute, optionsAssetsRouteHandler)
  .openapi(postAssetsRoute, postAssetsRouteHandler)
  .openapi(deleteAssetsAssetIdRoute, deleteAssetsAssetIdRouteHandler)
  .openapi(getAssetsAssetIdRoute, getAssetsAssetIdRouteHandler)
  .openapi(optionsAssetsAssetIdRoute, optionsAssetsAssetIdRouteHandler)
  .openapi(patchAssetsAssetIdRoute, patchAssetsAssetIdRouteHandler)
  .openapi(getDatasetsRoute, getDatasetsRouteHandler)
  .openapi(optionsDatasetsRoute, optionsDatasetsRouteHandler)
  .openapi(postDatasetsRoute, postDatasetsRouteHandler)
  .openapi(deleteDatasetsDatasetIdRoute, deleteDatasetsDatasetIdRouteHandler)
  .openapi(getDatasetsDatasetIdRoute, getDatasetsDatasetIdRouteHandler)
  .openapi(optionsDatasetsDatasetIdRoute, optionsDatasetsDatasetIdRouteHandler)
  .openapi(patchDatasetsDatasetIdRoute, patchDatasetsDatasetIdRouteHandler)
  .openapi(getDeploymentEnvironmentsRoute, getDeploymentEnvironmentsRouteHandler)
  .openapi(optionsDeploymentEnvironmentsRoute, optionsDeploymentEnvironmentsRouteHandler)
  .openapi(
    getDeploymentEnvironmentsDeploymentEnvironmentIdRoute,
    getDeploymentEnvironmentsDeploymentEnvironmentIdRouteHandler,
  )
  .openapi(
    optionsDeploymentEnvironmentsDeploymentEnvironmentIdRoute,
    optionsDeploymentEnvironmentsDeploymentEnvironmentIdRouteHandler,
  )
  .openapi(deleteDocumentsRoute, deleteDocumentsRouteHandler)
  .openapi(getDocumentsRoute, getDocumentsRouteHandler)
  .openapi(optionsDocumentsRoute, optionsDocumentsRouteHandler)
  .openapi(postDocumentsRoute, postDocumentsRouteHandler)
  .openapi(deleteDocumentsDocumentIdRoute, deleteDocumentsDocumentIdRouteHandler)
  .openapi(getDocumentsDocumentIdRoute, getDocumentsDocumentIdRouteHandler)
  .openapi(optionsDocumentsDocumentIdRoute, optionsDocumentsDocumentIdRouteHandler)
  .openapi(patchDocumentsDocumentIdRoute, patchDocumentsDocumentIdRouteHandler)
  .openapi(getLogsRoute, getLogsRouteHandler)
  .openapi(optionsLogsRoute, optionsLogsRouteHandler)
  .openapi(getLogsLogIdRoute, getLogsLogIdRouteHandler)
  .openapi(optionsLogsLogIdRoute, optionsLogsLogIdRouteHandler)
  .openapi(getModelsRoute, getModelsRouteHandler)
  .openapi(optionsModelsRoute, optionsModelsRouteHandler)
  .openapi(postModelsRoute, postModelsRouteHandler)
  .openapi(deleteModelsModelIdRoute, deleteModelsModelIdRouteHandler)
  .openapi(getModelsModelIdRoute, getModelsModelIdRouteHandler)
  .openapi(optionsModelsModelIdRoute, optionsModelsModelIdRouteHandler)
  .openapi(patchModelsModelIdRoute, patchModelsModelIdRouteHandler)
  .openapi(getModelsModelIdDataBundlesRoute, getModelsModelIdDataBundlesRouteHandler)
  .openapi(optionsModelsModelIdDataBundlesRoute, optionsModelsModelIdDataBundlesRouteHandler)
  .openapi(postModelsModelIdDataBundlesRoute, postModelsModelIdDataBundlesRouteHandler)
  .openapi(
    deleteModelsModelIdDataBundlesDataBundleIdRoute,
    deleteModelsModelIdDataBundlesDataBundleIdRouteHandler,
  )
  .openapi(
    optionsModelsModelIdDataBundlesDataBundleIdRoute,
    optionsModelsModelIdDataBundlesDataBundleIdRouteHandler,
  )
  .openapi(
    patchModelsModelIdDataBundlesDataBundleIdRoute,
    patchModelsModelIdDataBundlesDataBundleIdRouteHandler,
  )
  .openapi(getModelsModelIdTrainingsRoute, getModelsModelIdTrainingsRouteHandler)
  .openapi(optionsModelsModelIdTrainingsRoute, optionsModelsModelIdTrainingsRouteHandler)
  .openapi(postModelsModelIdTrainingsRoute, postModelsModelIdTrainingsRouteHandler)
  .openapi(
    optionsModelsModelIdTrainingsTrainingIdRoute,
    optionsModelsModelIdTrainingsTrainingIdRouteHandler,
  )
  .openapi(
    patchModelsModelIdTrainingsTrainingIdRoute,
    patchModelsModelIdTrainingsTrainingIdRouteHandler,
  )
  .openapi(getOrganizationsRoute, getOrganizationsRouteHandler)
  .openapi(optionsOrganizationsRoute, optionsOrganizationsRouteHandler)
  .openapi(postOrganizationsRoute, postOrganizationsRouteHandler)
  .openapi(getOrganizationsOrganizationIdRoute, getOrganizationsOrganizationIdRouteHandler)
  .openapi(optionsOrganizationsOrganizationIdRoute, optionsOrganizationsOrganizationIdRouteHandler)
  .openapi(patchOrganizationsOrganizationIdRoute, patchOrganizationsOrganizationIdRouteHandler)
  .openapi(getPaymentMethodsRoute, getPaymentMethodsRouteHandler)
  .openapi(optionsPaymentMethodsRoute, optionsPaymentMethodsRouteHandler)
  .openapi(postPaymentMethodsRoute, postPaymentMethodsRouteHandler)
  .openapi(
    deletePaymentMethodsPaymentMethodIdRoute,
    deletePaymentMethodsPaymentMethodIdRouteHandler,
  )
  .openapi(getPaymentMethodsPaymentMethodIdRoute, getPaymentMethodsPaymentMethodIdRouteHandler)
  .openapi(
    optionsPaymentMethodsPaymentMethodIdRoute,
    optionsPaymentMethodsPaymentMethodIdRouteHandler,
  )
  .openapi(patchPaymentMethodsPaymentMethodIdRoute, patchPaymentMethodsPaymentMethodIdRouteHandler)
  .openapi(getPlansRoute, getPlansRouteHandler)
  .openapi(optionsPlansRoute, optionsPlansRouteHandler)
  .openapi(getPlansPlanIdRoute, getPlansPlanIdRouteHandler)
  .openapi(optionsPlansPlanIdRoute, optionsPlansPlanIdRouteHandler)
  .openapi(getPredictionsRoute, getPredictionsRouteHandler)
  .openapi(optionsPredictionsRoute, optionsPredictionsRouteHandler)
  .openapi(postPredictionsRoute, postPredictionsRouteHandler)
  .openapi(getProfilesProfileIdRoute, getProfilesProfileIdRouteHandler)
  .openapi(optionsProfilesProfileIdRoute, optionsProfilesProfileIdRouteHandler)
  .openapi(patchProfilesProfileIdRoute, patchProfilesProfileIdRouteHandler)
  .openapi(getSecretsRoute, getSecretsRouteHandler)
  .openapi(optionsSecretsRoute, optionsSecretsRouteHandler)
  .openapi(postSecretsRoute, postSecretsRouteHandler)
  .openapi(deleteSecretsSecretIdRoute, deleteSecretsSecretIdRouteHandler)
  .openapi(optionsSecretsSecretIdRoute, optionsSecretsSecretIdRouteHandler)
  .openapi(patchSecretsSecretIdRoute, patchSecretsSecretIdRouteHandler)
  .openapi(optionsSignupRoute, optionsSignupRouteHandler)
  .openapi(postSignupRoute, postSignupRouteHandler)
  .openapi(getTransitionsRoute, getTransitionsRouteHandler)
  .openapi(optionsTransitionsRoute, optionsTransitionsRouteHandler)
  .openapi(postTransitionsRoute, postTransitionsRouteHandler)
  .openapi(deleteTransitionsTransitionIdRoute, deleteTransitionsTransitionIdRouteHandler)
  .openapi(getTransitionsTransitionIdRoute, getTransitionsTransitionIdRouteHandler)
  .openapi(optionsTransitionsTransitionIdRoute, optionsTransitionsTransitionIdRouteHandler)
  .openapi(patchTransitionsTransitionIdRoute, patchTransitionsTransitionIdRouteHandler)
  .openapi(
    getTransitionsTransitionIdExecutionsRoute,
    getTransitionsTransitionIdExecutionsRouteHandler,
  )
  .openapi(
    optionsTransitionsTransitionIdExecutionsRoute,
    optionsTransitionsTransitionIdExecutionsRouteHandler,
  )
  .openapi(
    postTransitionsTransitionIdExecutionsRoute,
    postTransitionsTransitionIdExecutionsRouteHandler,
  )
  .openapi(
    getTransitionsTransitionIdExecutionsExecutionIdRoute,
    getTransitionsTransitionIdExecutionsExecutionIdRouteHandler,
  )
  .openapi(
    optionsTransitionsTransitionIdExecutionsExecutionIdRoute,
    optionsTransitionsTransitionIdExecutionsExecutionIdRouteHandler,
  )
  .openapi(
    patchTransitionsTransitionIdExecutionsExecutionIdRoute,
    patchTransitionsTransitionIdExecutionsExecutionIdRouteHandler,
  )
  .openapi(
    optionsTransitionsTransitionIdExecutionsExecutionIdHeartbeatsRoute,
    optionsTransitionsTransitionIdExecutionsExecutionIdHeartbeatsRouteHandler,
  )
  .openapi(
    postTransitionsTransitionIdExecutionsExecutionIdHeartbeatsRoute,
    postTransitionsTransitionIdExecutionsExecutionIdHeartbeatsRouteHandler,
  )
  .openapi(getUsersRoute, getUsersRouteHandler)
  .openapi(optionsUsersRoute, optionsUsersRouteHandler)
  .openapi(postUsersRoute, postUsersRouteHandler)
  .openapi(deleteUsersUserIdRoute, deleteUsersUserIdRouteHandler)
  .openapi(getUsersUserIdRoute, getUsersUserIdRouteHandler)
  .openapi(optionsUsersUserIdRoute, optionsUsersUserIdRouteHandler)
  .openapi(patchUsersUserIdRoute, patchUsersUserIdRouteHandler)
  .openapi(getWorkflowsRoute, getWorkflowsRouteHandler)
  .openapi(optionsWorkflowsRoute, optionsWorkflowsRouteHandler)
  .openapi(postWorkflowsRoute, postWorkflowsRouteHandler)
  .openapi(deleteWorkflowsWorkflowIdRoute, deleteWorkflowsWorkflowIdRouteHandler)
  .openapi(getWorkflowsWorkflowIdRoute, getWorkflowsWorkflowIdRouteHandler)
  .openapi(optionsWorkflowsWorkflowIdRoute, optionsWorkflowsWorkflowIdRouteHandler)
  .openapi(patchWorkflowsWorkflowIdRoute, patchWorkflowsWorkflowIdRouteHandler)
  .openapi(getWorkflowsWorkflowIdExecutionsRoute, getWorkflowsWorkflowIdExecutionsRouteHandler)
  .openapi(
    optionsWorkflowsWorkflowIdExecutionsRoute,
    optionsWorkflowsWorkflowIdExecutionsRouteHandler,
  )
  .openapi(postWorkflowsWorkflowIdExecutionsRoute, postWorkflowsWorkflowIdExecutionsRouteHandler)
  .openapi(
    deleteWorkflowsWorkflowIdExecutionsExecutionIdRoute,
    deleteWorkflowsWorkflowIdExecutionsExecutionIdRouteHandler,
  )
  .openapi(
    getWorkflowsWorkflowIdExecutionsExecutionIdRoute,
    getWorkflowsWorkflowIdExecutionsExecutionIdRouteHandler,
  )
  .openapi(
    optionsWorkflowsWorkflowIdExecutionsExecutionIdRoute,
    optionsWorkflowsWorkflowIdExecutionsExecutionIdRouteHandler,
  )
  .openapi(
    patchWorkflowsWorkflowIdExecutionsExecutionIdRoute,
    patchWorkflowsWorkflowIdExecutionsExecutionIdRouteHandler,
  )

export default app
