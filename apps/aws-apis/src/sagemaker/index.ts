import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetSageMakerAddAssociationHandler,
  XAmzTargetSageMakerAddTagsHandler,
  XAmzTargetSageMakerAssociateTrialComponentHandler,
  XAmzTargetSageMakerBatchDescribeModelPackageHandler,
  XAmzTargetSageMakerCreateActionHandler,
  XAmzTargetSageMakerCreateAlgorithmHandler,
  XAmzTargetSageMakerCreateAppHandler,
  XAmzTargetSageMakerCreateAppImageConfigHandler,
  XAmzTargetSageMakerCreateArtifactHandler,
  XAmzTargetSageMakerCreateAutoMLJobHandler,
  XAmzTargetSageMakerCreateAutoMLJobV2Handler,
  XAmzTargetSageMakerCreateCodeRepositoryHandler,
  XAmzTargetSageMakerCreateCompilationJobHandler,
  XAmzTargetSageMakerCreateContextHandler,
  XAmzTargetSageMakerCreateDataQualityJobDefinitionHandler,
  XAmzTargetSageMakerCreateDeviceFleetHandler,
  XAmzTargetSageMakerCreateDomainHandler,
  XAmzTargetSageMakerCreateEdgeDeploymentPlanHandler,
  XAmzTargetSageMakerCreateEdgeDeploymentStageHandler,
  XAmzTargetSageMakerCreateEdgePackagingJobHandler,
  XAmzTargetSageMakerCreateEndpointConfigHandler,
  XAmzTargetSageMakerCreateEndpointHandler,
  XAmzTargetSageMakerCreateExperimentHandler,
  XAmzTargetSageMakerCreateFeatureGroupHandler,
  XAmzTargetSageMakerCreateFlowDefinitionHandler,
  XAmzTargetSageMakerCreateHubHandler,
  XAmzTargetSageMakerCreateHumanTaskUiHandler,
  XAmzTargetSageMakerCreateHyperParameterTuningJobHandler,
  XAmzTargetSageMakerCreateImageHandler,
  XAmzTargetSageMakerCreateImageVersionHandler,
  XAmzTargetSageMakerCreateInferenceExperimentHandler,
  XAmzTargetSageMakerCreateInferenceRecommendationsJobHandler,
  XAmzTargetSageMakerCreateLabelingJobHandler,
  XAmzTargetSageMakerCreateModelBiasJobDefinitionHandler,
  XAmzTargetSageMakerCreateModelCardExportJobHandler,
  XAmzTargetSageMakerCreateModelCardHandler,
  XAmzTargetSageMakerCreateModelExplainabilityJobDefinitionHandler,
  XAmzTargetSageMakerCreateModelHandler,
  XAmzTargetSageMakerCreateModelPackageGroupHandler,
  XAmzTargetSageMakerCreateModelPackageHandler,
  XAmzTargetSageMakerCreateModelQualityJobDefinitionHandler,
  XAmzTargetSageMakerCreateMonitoringScheduleHandler,
  XAmzTargetSageMakerCreateNotebookInstanceHandler,
  XAmzTargetSageMakerCreateNotebookInstanceLifecycleConfigHandler,
  XAmzTargetSageMakerCreatePipelineHandler,
  XAmzTargetSageMakerCreatePresignedDomainUrlHandler,
  XAmzTargetSageMakerCreatePresignedNotebookInstanceUrlHandler,
  XAmzTargetSageMakerCreateProcessingJobHandler,
  XAmzTargetSageMakerCreateProjectHandler,
  XAmzTargetSageMakerCreateSpaceHandler,
  XAmzTargetSageMakerCreateStudioLifecycleConfigHandler,
  XAmzTargetSageMakerCreateTrainingJobHandler,
  XAmzTargetSageMakerCreateTransformJobHandler,
  XAmzTargetSageMakerCreateTrialComponentHandler,
  XAmzTargetSageMakerCreateTrialHandler,
  XAmzTargetSageMakerCreateUserProfileHandler,
  XAmzTargetSageMakerCreateWorkforceHandler,
  XAmzTargetSageMakerCreateWorkteamHandler,
  XAmzTargetSageMakerDeleteActionHandler,
  XAmzTargetSageMakerDeleteAlgorithmHandler,
  XAmzTargetSageMakerDeleteAppHandler,
  XAmzTargetSageMakerDeleteAppImageConfigHandler,
  XAmzTargetSageMakerDeleteArtifactHandler,
  XAmzTargetSageMakerDeleteAssociationHandler,
  XAmzTargetSageMakerDeleteCodeRepositoryHandler,
  XAmzTargetSageMakerDeleteContextHandler,
  XAmzTargetSageMakerDeleteDataQualityJobDefinitionHandler,
  XAmzTargetSageMakerDeleteDeviceFleetHandler,
  XAmzTargetSageMakerDeleteDomainHandler,
  XAmzTargetSageMakerDeleteEdgeDeploymentPlanHandler,
  XAmzTargetSageMakerDeleteEdgeDeploymentStageHandler,
  XAmzTargetSageMakerDeleteEndpointConfigHandler,
  XAmzTargetSageMakerDeleteEndpointHandler,
  XAmzTargetSageMakerDeleteExperimentHandler,
  XAmzTargetSageMakerDeleteFeatureGroupHandler,
  XAmzTargetSageMakerDeleteFlowDefinitionHandler,
  XAmzTargetSageMakerDeleteHubContentHandler,
  XAmzTargetSageMakerDeleteHubHandler,
  XAmzTargetSageMakerDeleteHumanTaskUiHandler,
  XAmzTargetSageMakerDeleteImageHandler,
  XAmzTargetSageMakerDeleteImageVersionHandler,
  XAmzTargetSageMakerDeleteInferenceExperimentHandler,
  XAmzTargetSageMakerDeleteModelBiasJobDefinitionHandler,
  XAmzTargetSageMakerDeleteModelCardHandler,
  XAmzTargetSageMakerDeleteModelExplainabilityJobDefinitionHandler,
  XAmzTargetSageMakerDeleteModelHandler,
  XAmzTargetSageMakerDeleteModelPackageGroupHandler,
  XAmzTargetSageMakerDeleteModelPackageGroupPolicyHandler,
  XAmzTargetSageMakerDeleteModelPackageHandler,
  XAmzTargetSageMakerDeleteModelQualityJobDefinitionHandler,
  XAmzTargetSageMakerDeleteMonitoringScheduleHandler,
  XAmzTargetSageMakerDeleteNotebookInstanceHandler,
  XAmzTargetSageMakerDeleteNotebookInstanceLifecycleConfigHandler,
  XAmzTargetSageMakerDeletePipelineHandler,
  XAmzTargetSageMakerDeleteProjectHandler,
  XAmzTargetSageMakerDeleteSpaceHandler,
  XAmzTargetSageMakerDeleteStudioLifecycleConfigHandler,
  XAmzTargetSageMakerDeleteTagsHandler,
  XAmzTargetSageMakerDeleteTrialComponentHandler,
  XAmzTargetSageMakerDeleteTrialHandler,
  XAmzTargetSageMakerDeleteUserProfileHandler,
  XAmzTargetSageMakerDeleteWorkforceHandler,
  XAmzTargetSageMakerDeleteWorkteamHandler,
  XAmzTargetSageMakerDeregisterDevicesHandler,
  XAmzTargetSageMakerDescribeActionHandler,
  XAmzTargetSageMakerDescribeAlgorithmHandler,
  XAmzTargetSageMakerDescribeAppHandler,
  XAmzTargetSageMakerDescribeAppImageConfigHandler,
  XAmzTargetSageMakerDescribeArtifactHandler,
  XAmzTargetSageMakerDescribeAutoMLJobHandler,
  XAmzTargetSageMakerDescribeAutoMLJobV2Handler,
  XAmzTargetSageMakerDescribeCodeRepositoryHandler,
  XAmzTargetSageMakerDescribeCompilationJobHandler,
  XAmzTargetSageMakerDescribeContextHandler,
  XAmzTargetSageMakerDescribeDataQualityJobDefinitionHandler,
  XAmzTargetSageMakerDescribeDeviceFleetHandler,
  XAmzTargetSageMakerDescribeDeviceHandler,
  XAmzTargetSageMakerDescribeDomainHandler,
  XAmzTargetSageMakerDescribeEdgeDeploymentPlanHandler,
  XAmzTargetSageMakerDescribeEdgePackagingJobHandler,
  XAmzTargetSageMakerDescribeEndpointConfigHandler,
  XAmzTargetSageMakerDescribeEndpointHandler,
  XAmzTargetSageMakerDescribeExperimentHandler,
  XAmzTargetSageMakerDescribeFeatureGroupHandler,
  XAmzTargetSageMakerDescribeFeatureMetadataHandler,
  XAmzTargetSageMakerDescribeFlowDefinitionHandler,
  XAmzTargetSageMakerDescribeHubContentHandler,
  XAmzTargetSageMakerDescribeHubHandler,
  XAmzTargetSageMakerDescribeHumanTaskUiHandler,
  XAmzTargetSageMakerDescribeHyperParameterTuningJobHandler,
  XAmzTargetSageMakerDescribeImageHandler,
  XAmzTargetSageMakerDescribeImageVersionHandler,
  XAmzTargetSageMakerDescribeInferenceExperimentHandler,
  XAmzTargetSageMakerDescribeInferenceRecommendationsJobHandler,
  XAmzTargetSageMakerDescribeLabelingJobHandler,
  XAmzTargetSageMakerDescribeLineageGroupHandler,
  XAmzTargetSageMakerDescribeModelBiasJobDefinitionHandler,
  XAmzTargetSageMakerDescribeModelCardExportJobHandler,
  XAmzTargetSageMakerDescribeModelCardHandler,
  XAmzTargetSageMakerDescribeModelExplainabilityJobDefinitionHandler,
  XAmzTargetSageMakerDescribeModelHandler,
  XAmzTargetSageMakerDescribeModelPackageGroupHandler,
  XAmzTargetSageMakerDescribeModelPackageHandler,
  XAmzTargetSageMakerDescribeModelQualityJobDefinitionHandler,
  XAmzTargetSageMakerDescribeMonitoringScheduleHandler,
  XAmzTargetSageMakerDescribeNotebookInstanceHandler,
  XAmzTargetSageMakerDescribeNotebookInstanceLifecycleConfigHandler,
  XAmzTargetSageMakerDescribePipelineDefinitionForExecutionHandler,
  XAmzTargetSageMakerDescribePipelineExecutionHandler,
  XAmzTargetSageMakerDescribePipelineHandler,
  XAmzTargetSageMakerDescribeProcessingJobHandler,
  XAmzTargetSageMakerDescribeProjectHandler,
  XAmzTargetSageMakerDescribeSpaceHandler,
  XAmzTargetSageMakerDescribeStudioLifecycleConfigHandler,
  XAmzTargetSageMakerDescribeSubscribedWorkteamHandler,
  XAmzTargetSageMakerDescribeTrainingJobHandler,
  XAmzTargetSageMakerDescribeTransformJobHandler,
  XAmzTargetSageMakerDescribeTrialComponentHandler,
  XAmzTargetSageMakerDescribeTrialHandler,
  XAmzTargetSageMakerDescribeUserProfileHandler,
  XAmzTargetSageMakerDescribeWorkforceHandler,
  XAmzTargetSageMakerDescribeWorkteamHandler,
  XAmzTargetSageMakerDisableSagemakerServicecatalogPortfolioHandler,
  XAmzTargetSageMakerDisassociateTrialComponentHandler,
  XAmzTargetSageMakerEnableSagemakerServicecatalogPortfolioHandler,
  XAmzTargetSageMakerGetDeviceFleetReportHandler,
  XAmzTargetSageMakerGetLineageGroupPolicyHandler,
  XAmzTargetSageMakerGetModelPackageGroupPolicyHandler,
  XAmzTargetSageMakerGetSagemakerServicecatalogPortfolioStatusHandler,
  XAmzTargetSageMakerGetSearchSuggestionsHandler,
  XAmzTargetSageMakerImportHubContentHandler,
  XAmzTargetSageMakerListActionsHandler,
  XAmzTargetSageMakerListAlgorithmsHandler,
  XAmzTargetSageMakerListAliasesHandler,
  XAmzTargetSageMakerListAppImageConfigsHandler,
  XAmzTargetSageMakerListAppsHandler,
  XAmzTargetSageMakerListArtifactsHandler,
  XAmzTargetSageMakerListAssociationsHandler,
  XAmzTargetSageMakerListAutoMLJobsHandler,
  XAmzTargetSageMakerListCandidatesForAutoMLJobHandler,
  XAmzTargetSageMakerListCodeRepositoriesHandler,
  XAmzTargetSageMakerListCompilationJobsHandler,
  XAmzTargetSageMakerListContextsHandler,
  XAmzTargetSageMakerListDataQualityJobDefinitionsHandler,
  XAmzTargetSageMakerListDeviceFleetsHandler,
  XAmzTargetSageMakerListDevicesHandler,
  XAmzTargetSageMakerListDomainsHandler,
  XAmzTargetSageMakerListEdgeDeploymentPlansHandler,
  XAmzTargetSageMakerListEdgePackagingJobsHandler,
  XAmzTargetSageMakerListEndpointConfigsHandler,
  XAmzTargetSageMakerListEndpointsHandler,
  XAmzTargetSageMakerListExperimentsHandler,
  XAmzTargetSageMakerListFeatureGroupsHandler,
  XAmzTargetSageMakerListFlowDefinitionsHandler,
  XAmzTargetSageMakerListHubContentsHandler,
  XAmzTargetSageMakerListHubContentVersionsHandler,
  XAmzTargetSageMakerListHubsHandler,
  XAmzTargetSageMakerListHumanTaskUisHandler,
  XAmzTargetSageMakerListHyperParameterTuningJobsHandler,
  XAmzTargetSageMakerListImagesHandler,
  XAmzTargetSageMakerListImageVersionsHandler,
  XAmzTargetSageMakerListInferenceExperimentsHandler,
  XAmzTargetSageMakerListInferenceRecommendationsJobsHandler,
  XAmzTargetSageMakerListInferenceRecommendationsJobStepsHandler,
  XAmzTargetSageMakerListLabelingJobsForWorkteamHandler,
  XAmzTargetSageMakerListLabelingJobsHandler,
  XAmzTargetSageMakerListLineageGroupsHandler,
  XAmzTargetSageMakerListModelBiasJobDefinitionsHandler,
  XAmzTargetSageMakerListModelCardExportJobsHandler,
  XAmzTargetSageMakerListModelCardsHandler,
  XAmzTargetSageMakerListModelCardVersionsHandler,
  XAmzTargetSageMakerListModelExplainabilityJobDefinitionsHandler,
  XAmzTargetSageMakerListModelMetadataHandler,
  XAmzTargetSageMakerListModelPackageGroupsHandler,
  XAmzTargetSageMakerListModelPackagesHandler,
  XAmzTargetSageMakerListModelQualityJobDefinitionsHandler,
  XAmzTargetSageMakerListModelsHandler,
  XAmzTargetSageMakerListMonitoringAlertHistoryHandler,
  XAmzTargetSageMakerListMonitoringAlertsHandler,
  XAmzTargetSageMakerListMonitoringExecutionsHandler,
  XAmzTargetSageMakerListMonitoringSchedulesHandler,
  XAmzTargetSageMakerListNotebookInstanceLifecycleConfigsHandler,
  XAmzTargetSageMakerListNotebookInstancesHandler,
  XAmzTargetSageMakerListPipelineExecutionsHandler,
  XAmzTargetSageMakerListPipelineExecutionStepsHandler,
  XAmzTargetSageMakerListPipelineParametersForExecutionHandler,
  XAmzTargetSageMakerListPipelinesHandler,
  XAmzTargetSageMakerListProcessingJobsHandler,
  XAmzTargetSageMakerListProjectsHandler,
  XAmzTargetSageMakerListSpacesHandler,
  XAmzTargetSageMakerListStageDevicesHandler,
  XAmzTargetSageMakerListStudioLifecycleConfigsHandler,
  XAmzTargetSageMakerListSubscribedWorkteamsHandler,
  XAmzTargetSageMakerListTagsHandler,
  XAmzTargetSageMakerListTrainingJobsForHyperParameterTuningJobHandler,
  XAmzTargetSageMakerListTrainingJobsHandler,
  XAmzTargetSageMakerListTransformJobsHandler,
  XAmzTargetSageMakerListTrialComponentsHandler,
  XAmzTargetSageMakerListTrialsHandler,
  XAmzTargetSageMakerListUserProfilesHandler,
  XAmzTargetSageMakerListWorkforcesHandler,
  XAmzTargetSageMakerListWorkteamsHandler,
  XAmzTargetSageMakerPutModelPackageGroupPolicyHandler,
  XAmzTargetSageMakerQueryLineageHandler,
  XAmzTargetSageMakerRegisterDevicesHandler,
  XAmzTargetSageMakerRenderUiTemplateHandler,
  XAmzTargetSageMakerRetryPipelineExecutionHandler,
  XAmzTargetSageMakerSearchHandler,
  XAmzTargetSageMakerSendPipelineExecutionStepFailureHandler,
  XAmzTargetSageMakerSendPipelineExecutionStepSuccessHandler,
  XAmzTargetSageMakerStartEdgeDeploymentStageHandler,
  XAmzTargetSageMakerStartInferenceExperimentHandler,
  XAmzTargetSageMakerStartMonitoringScheduleHandler,
  XAmzTargetSageMakerStartNotebookInstanceHandler,
  XAmzTargetSageMakerStartPipelineExecutionHandler,
  XAmzTargetSageMakerStopAutoMLJobHandler,
  XAmzTargetSageMakerStopCompilationJobHandler,
  XAmzTargetSageMakerStopEdgeDeploymentStageHandler,
  XAmzTargetSageMakerStopEdgePackagingJobHandler,
  XAmzTargetSageMakerStopHyperParameterTuningJobHandler,
  XAmzTargetSageMakerStopInferenceExperimentHandler,
  XAmzTargetSageMakerStopInferenceRecommendationsJobHandler,
  XAmzTargetSageMakerStopLabelingJobHandler,
  XAmzTargetSageMakerStopMonitoringScheduleHandler,
  XAmzTargetSageMakerStopNotebookInstanceHandler,
  XAmzTargetSageMakerStopPipelineExecutionHandler,
  XAmzTargetSageMakerStopProcessingJobHandler,
  XAmzTargetSageMakerStopTrainingJobHandler,
  XAmzTargetSageMakerStopTransformJobHandler,
  XAmzTargetSageMakerUpdateActionHandler,
  XAmzTargetSageMakerUpdateAppImageConfigHandler,
  XAmzTargetSageMakerUpdateArtifactHandler,
  XAmzTargetSageMakerUpdateCodeRepositoryHandler,
  XAmzTargetSageMakerUpdateContextHandler,
  XAmzTargetSageMakerUpdateDeviceFleetHandler,
  XAmzTargetSageMakerUpdateDevicesHandler,
  XAmzTargetSageMakerUpdateDomainHandler,
  XAmzTargetSageMakerUpdateEndpointHandler,
  XAmzTargetSageMakerUpdateEndpointWeightsAndCapacitiesHandler,
  XAmzTargetSageMakerUpdateExperimentHandler,
  XAmzTargetSageMakerUpdateFeatureGroupHandler,
  XAmzTargetSageMakerUpdateFeatureMetadataHandler,
  XAmzTargetSageMakerUpdateHubHandler,
  XAmzTargetSageMakerUpdateImageHandler,
  XAmzTargetSageMakerUpdateImageVersionHandler,
  XAmzTargetSageMakerUpdateInferenceExperimentHandler,
  XAmzTargetSageMakerUpdateModelCardHandler,
  XAmzTargetSageMakerUpdateModelPackageHandler,
  XAmzTargetSageMakerUpdateMonitoringAlertHandler,
  XAmzTargetSageMakerUpdateMonitoringScheduleHandler,
  XAmzTargetSageMakerUpdateNotebookInstanceHandler,
  XAmzTargetSageMakerUpdateNotebookInstanceLifecycleConfigHandler,
  XAmzTargetSageMakerUpdatePipelineExecutionHandler,
  XAmzTargetSageMakerUpdatePipelineHandler,
  XAmzTargetSageMakerUpdateProjectHandler,
  XAmzTargetSageMakerUpdateSpaceHandler,
  XAmzTargetSageMakerUpdateTrainingJobHandler,
  XAmzTargetSageMakerUpdateTrialComponentHandler,
  XAmzTargetSageMakerUpdateTrialHandler,
  XAmzTargetSageMakerUpdateUserProfileHandler,
  XAmzTargetSageMakerUpdateWorkforceHandler,
  XAmzTargetSageMakerUpdateWorkteamHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetSageMakerAddAssociationHandler)
  .route('/', XAmzTargetSageMakerAddTagsHandler)
  .route('/', XAmzTargetSageMakerAssociateTrialComponentHandler)
  .route('/', XAmzTargetSageMakerBatchDescribeModelPackageHandler)
  .route('/', XAmzTargetSageMakerCreateActionHandler)
  .route('/', XAmzTargetSageMakerCreateAlgorithmHandler)
  .route('/', XAmzTargetSageMakerCreateAppHandler)
  .route('/', XAmzTargetSageMakerCreateAppImageConfigHandler)
  .route('/', XAmzTargetSageMakerCreateArtifactHandler)
  .route('/', XAmzTargetSageMakerCreateAutoMLJobHandler)
  .route('/', XAmzTargetSageMakerCreateAutoMLJobV2Handler)
  .route('/', XAmzTargetSageMakerCreateCodeRepositoryHandler)
  .route('/', XAmzTargetSageMakerCreateCompilationJobHandler)
  .route('/', XAmzTargetSageMakerCreateContextHandler)
  .route('/', XAmzTargetSageMakerCreateDataQualityJobDefinitionHandler)
  .route('/', XAmzTargetSageMakerCreateDeviceFleetHandler)
  .route('/', XAmzTargetSageMakerCreateDomainHandler)
  .route('/', XAmzTargetSageMakerCreateEdgeDeploymentPlanHandler)
  .route('/', XAmzTargetSageMakerCreateEdgeDeploymentStageHandler)
  .route('/', XAmzTargetSageMakerCreateEdgePackagingJobHandler)
  .route('/', XAmzTargetSageMakerCreateEndpointHandler)
  .route('/', XAmzTargetSageMakerCreateEndpointConfigHandler)
  .route('/', XAmzTargetSageMakerCreateExperimentHandler)
  .route('/', XAmzTargetSageMakerCreateFeatureGroupHandler)
  .route('/', XAmzTargetSageMakerCreateFlowDefinitionHandler)
  .route('/', XAmzTargetSageMakerCreateHubHandler)
  .route('/', XAmzTargetSageMakerCreateHumanTaskUiHandler)
  .route('/', XAmzTargetSageMakerCreateHyperParameterTuningJobHandler)
  .route('/', XAmzTargetSageMakerCreateImageHandler)
  .route('/', XAmzTargetSageMakerCreateImageVersionHandler)
  .route('/', XAmzTargetSageMakerCreateInferenceExperimentHandler)
  .route('/', XAmzTargetSageMakerCreateInferenceRecommendationsJobHandler)
  .route('/', XAmzTargetSageMakerCreateLabelingJobHandler)
  .route('/', XAmzTargetSageMakerCreateModelHandler)
  .route('/', XAmzTargetSageMakerCreateModelBiasJobDefinitionHandler)
  .route('/', XAmzTargetSageMakerCreateModelCardHandler)
  .route('/', XAmzTargetSageMakerCreateModelCardExportJobHandler)
  .route('/', XAmzTargetSageMakerCreateModelExplainabilityJobDefinitionHandler)
  .route('/', XAmzTargetSageMakerCreateModelPackageHandler)
  .route('/', XAmzTargetSageMakerCreateModelPackageGroupHandler)
  .route('/', XAmzTargetSageMakerCreateModelQualityJobDefinitionHandler)
  .route('/', XAmzTargetSageMakerCreateMonitoringScheduleHandler)
  .route('/', XAmzTargetSageMakerCreateNotebookInstanceHandler)
  .route('/', XAmzTargetSageMakerCreateNotebookInstanceLifecycleConfigHandler)
  .route('/', XAmzTargetSageMakerCreatePipelineHandler)
  .route('/', XAmzTargetSageMakerCreatePresignedDomainUrlHandler)
  .route('/', XAmzTargetSageMakerCreatePresignedNotebookInstanceUrlHandler)
  .route('/', XAmzTargetSageMakerCreateProcessingJobHandler)
  .route('/', XAmzTargetSageMakerCreateProjectHandler)
  .route('/', XAmzTargetSageMakerCreateSpaceHandler)
  .route('/', XAmzTargetSageMakerCreateStudioLifecycleConfigHandler)
  .route('/', XAmzTargetSageMakerCreateTrainingJobHandler)
  .route('/', XAmzTargetSageMakerCreateTransformJobHandler)
  .route('/', XAmzTargetSageMakerCreateTrialHandler)
  .route('/', XAmzTargetSageMakerCreateTrialComponentHandler)
  .route('/', XAmzTargetSageMakerCreateUserProfileHandler)
  .route('/', XAmzTargetSageMakerCreateWorkforceHandler)
  .route('/', XAmzTargetSageMakerCreateWorkteamHandler)
  .route('/', XAmzTargetSageMakerDeleteActionHandler)
  .route('/', XAmzTargetSageMakerDeleteAlgorithmHandler)
  .route('/', XAmzTargetSageMakerDeleteAppHandler)
  .route('/', XAmzTargetSageMakerDeleteAppImageConfigHandler)
  .route('/', XAmzTargetSageMakerDeleteArtifactHandler)
  .route('/', XAmzTargetSageMakerDeleteAssociationHandler)
  .route('/', XAmzTargetSageMakerDeleteCodeRepositoryHandler)
  .route('/', XAmzTargetSageMakerDeleteContextHandler)
  .route('/', XAmzTargetSageMakerDeleteDataQualityJobDefinitionHandler)
  .route('/', XAmzTargetSageMakerDeleteDeviceFleetHandler)
  .route('/', XAmzTargetSageMakerDeleteDomainHandler)
  .route('/', XAmzTargetSageMakerDeleteEdgeDeploymentPlanHandler)
  .route('/', XAmzTargetSageMakerDeleteEdgeDeploymentStageHandler)
  .route('/', XAmzTargetSageMakerDeleteEndpointHandler)
  .route('/', XAmzTargetSageMakerDeleteEndpointConfigHandler)
  .route('/', XAmzTargetSageMakerDeleteExperimentHandler)
  .route('/', XAmzTargetSageMakerDeleteFeatureGroupHandler)
  .route('/', XAmzTargetSageMakerDeleteFlowDefinitionHandler)
  .route('/', XAmzTargetSageMakerDeleteHubHandler)
  .route('/', XAmzTargetSageMakerDeleteHubContentHandler)
  .route('/', XAmzTargetSageMakerDeleteHumanTaskUiHandler)
  .route('/', XAmzTargetSageMakerDeleteImageHandler)
  .route('/', XAmzTargetSageMakerDeleteImageVersionHandler)
  .route('/', XAmzTargetSageMakerDeleteInferenceExperimentHandler)
  .route('/', XAmzTargetSageMakerDeleteModelHandler)
  .route('/', XAmzTargetSageMakerDeleteModelBiasJobDefinitionHandler)
  .route('/', XAmzTargetSageMakerDeleteModelCardHandler)
  .route('/', XAmzTargetSageMakerDeleteModelExplainabilityJobDefinitionHandler)
  .route('/', XAmzTargetSageMakerDeleteModelPackageHandler)
  .route('/', XAmzTargetSageMakerDeleteModelPackageGroupHandler)
  .route('/', XAmzTargetSageMakerDeleteModelPackageGroupPolicyHandler)
  .route('/', XAmzTargetSageMakerDeleteModelQualityJobDefinitionHandler)
  .route('/', XAmzTargetSageMakerDeleteMonitoringScheduleHandler)
  .route('/', XAmzTargetSageMakerDeleteNotebookInstanceHandler)
  .route('/', XAmzTargetSageMakerDeleteNotebookInstanceLifecycleConfigHandler)
  .route('/', XAmzTargetSageMakerDeletePipelineHandler)
  .route('/', XAmzTargetSageMakerDeleteProjectHandler)
  .route('/', XAmzTargetSageMakerDeleteSpaceHandler)
  .route('/', XAmzTargetSageMakerDeleteStudioLifecycleConfigHandler)
  .route('/', XAmzTargetSageMakerDeleteTagsHandler)
  .route('/', XAmzTargetSageMakerDeleteTrialHandler)
  .route('/', XAmzTargetSageMakerDeleteTrialComponentHandler)
  .route('/', XAmzTargetSageMakerDeleteUserProfileHandler)
  .route('/', XAmzTargetSageMakerDeleteWorkforceHandler)
  .route('/', XAmzTargetSageMakerDeleteWorkteamHandler)
  .route('/', XAmzTargetSageMakerDeregisterDevicesHandler)
  .route('/', XAmzTargetSageMakerDescribeActionHandler)
  .route('/', XAmzTargetSageMakerDescribeAlgorithmHandler)
  .route('/', XAmzTargetSageMakerDescribeAppHandler)
  .route('/', XAmzTargetSageMakerDescribeAppImageConfigHandler)
  .route('/', XAmzTargetSageMakerDescribeArtifactHandler)
  .route('/', XAmzTargetSageMakerDescribeAutoMLJobHandler)
  .route('/', XAmzTargetSageMakerDescribeAutoMLJobV2Handler)
  .route('/', XAmzTargetSageMakerDescribeCodeRepositoryHandler)
  .route('/', XAmzTargetSageMakerDescribeCompilationJobHandler)
  .route('/', XAmzTargetSageMakerDescribeContextHandler)
  .route('/', XAmzTargetSageMakerDescribeDataQualityJobDefinitionHandler)
  .route('/', XAmzTargetSageMakerDescribeDeviceHandler)
  .route('/', XAmzTargetSageMakerDescribeDeviceFleetHandler)
  .route('/', XAmzTargetSageMakerDescribeDomainHandler)
  .route('/', XAmzTargetSageMakerDescribeEdgeDeploymentPlanHandler)
  .route('/', XAmzTargetSageMakerDescribeEdgePackagingJobHandler)
  .route('/', XAmzTargetSageMakerDescribeEndpointHandler)
  .route('/', XAmzTargetSageMakerDescribeEndpointConfigHandler)
  .route('/', XAmzTargetSageMakerDescribeExperimentHandler)
  .route('/', XAmzTargetSageMakerDescribeFeatureGroupHandler)
  .route('/', XAmzTargetSageMakerDescribeFeatureMetadataHandler)
  .route('/', XAmzTargetSageMakerDescribeFlowDefinitionHandler)
  .route('/', XAmzTargetSageMakerDescribeHubHandler)
  .route('/', XAmzTargetSageMakerDescribeHubContentHandler)
  .route('/', XAmzTargetSageMakerDescribeHumanTaskUiHandler)
  .route('/', XAmzTargetSageMakerDescribeHyperParameterTuningJobHandler)
  .route('/', XAmzTargetSageMakerDescribeImageHandler)
  .route('/', XAmzTargetSageMakerDescribeImageVersionHandler)
  .route('/', XAmzTargetSageMakerDescribeInferenceExperimentHandler)
  .route('/', XAmzTargetSageMakerDescribeInferenceRecommendationsJobHandler)
  .route('/', XAmzTargetSageMakerDescribeLabelingJobHandler)
  .route('/', XAmzTargetSageMakerDescribeLineageGroupHandler)
  .route('/', XAmzTargetSageMakerDescribeModelHandler)
  .route('/', XAmzTargetSageMakerDescribeModelBiasJobDefinitionHandler)
  .route('/', XAmzTargetSageMakerDescribeModelCardHandler)
  .route('/', XAmzTargetSageMakerDescribeModelCardExportJobHandler)
  .route('/', XAmzTargetSageMakerDescribeModelExplainabilityJobDefinitionHandler)
  .route('/', XAmzTargetSageMakerDescribeModelPackageHandler)
  .route('/', XAmzTargetSageMakerDescribeModelPackageGroupHandler)
  .route('/', XAmzTargetSageMakerDescribeModelQualityJobDefinitionHandler)
  .route('/', XAmzTargetSageMakerDescribeMonitoringScheduleHandler)
  .route('/', XAmzTargetSageMakerDescribeNotebookInstanceHandler)
  .route('/', XAmzTargetSageMakerDescribeNotebookInstanceLifecycleConfigHandler)
  .route('/', XAmzTargetSageMakerDescribePipelineHandler)
  .route('/', XAmzTargetSageMakerDescribePipelineDefinitionForExecutionHandler)
  .route('/', XAmzTargetSageMakerDescribePipelineExecutionHandler)
  .route('/', XAmzTargetSageMakerDescribeProcessingJobHandler)
  .route('/', XAmzTargetSageMakerDescribeProjectHandler)
  .route('/', XAmzTargetSageMakerDescribeSpaceHandler)
  .route('/', XAmzTargetSageMakerDescribeStudioLifecycleConfigHandler)
  .route('/', XAmzTargetSageMakerDescribeSubscribedWorkteamHandler)
  .route('/', XAmzTargetSageMakerDescribeTrainingJobHandler)
  .route('/', XAmzTargetSageMakerDescribeTransformJobHandler)
  .route('/', XAmzTargetSageMakerDescribeTrialHandler)
  .route('/', XAmzTargetSageMakerDescribeTrialComponentHandler)
  .route('/', XAmzTargetSageMakerDescribeUserProfileHandler)
  .route('/', XAmzTargetSageMakerDescribeWorkforceHandler)
  .route('/', XAmzTargetSageMakerDescribeWorkteamHandler)
  .route('/', XAmzTargetSageMakerDisableSagemakerServicecatalogPortfolioHandler)
  .route('/', XAmzTargetSageMakerDisassociateTrialComponentHandler)
  .route('/', XAmzTargetSageMakerEnableSagemakerServicecatalogPortfolioHandler)
  .route('/', XAmzTargetSageMakerGetDeviceFleetReportHandler)
  .route('/', XAmzTargetSageMakerGetLineageGroupPolicyHandler)
  .route('/', XAmzTargetSageMakerGetModelPackageGroupPolicyHandler)
  .route('/', XAmzTargetSageMakerGetSagemakerServicecatalogPortfolioStatusHandler)
  .route('/', XAmzTargetSageMakerGetSearchSuggestionsHandler)
  .route('/', XAmzTargetSageMakerImportHubContentHandler)
  .route('/', XAmzTargetSageMakerListActionsHandler)
  .route('/', XAmzTargetSageMakerListAlgorithmsHandler)
  .route('/', XAmzTargetSageMakerListAliasesHandler)
  .route('/', XAmzTargetSageMakerListAppImageConfigsHandler)
  .route('/', XAmzTargetSageMakerListAppsHandler)
  .route('/', XAmzTargetSageMakerListArtifactsHandler)
  .route('/', XAmzTargetSageMakerListAssociationsHandler)
  .route('/', XAmzTargetSageMakerListAutoMLJobsHandler)
  .route('/', XAmzTargetSageMakerListCandidatesForAutoMLJobHandler)
  .route('/', XAmzTargetSageMakerListCodeRepositoriesHandler)
  .route('/', XAmzTargetSageMakerListCompilationJobsHandler)
  .route('/', XAmzTargetSageMakerListContextsHandler)
  .route('/', XAmzTargetSageMakerListDataQualityJobDefinitionsHandler)
  .route('/', XAmzTargetSageMakerListDeviceFleetsHandler)
  .route('/', XAmzTargetSageMakerListDevicesHandler)
  .route('/', XAmzTargetSageMakerListDomainsHandler)
  .route('/', XAmzTargetSageMakerListEdgeDeploymentPlansHandler)
  .route('/', XAmzTargetSageMakerListEdgePackagingJobsHandler)
  .route('/', XAmzTargetSageMakerListEndpointConfigsHandler)
  .route('/', XAmzTargetSageMakerListEndpointsHandler)
  .route('/', XAmzTargetSageMakerListExperimentsHandler)
  .route('/', XAmzTargetSageMakerListFeatureGroupsHandler)
  .route('/', XAmzTargetSageMakerListFlowDefinitionsHandler)
  .route('/', XAmzTargetSageMakerListHubContentVersionsHandler)
  .route('/', XAmzTargetSageMakerListHubContentsHandler)
  .route('/', XAmzTargetSageMakerListHubsHandler)
  .route('/', XAmzTargetSageMakerListHumanTaskUisHandler)
  .route('/', XAmzTargetSageMakerListHyperParameterTuningJobsHandler)
  .route('/', XAmzTargetSageMakerListImageVersionsHandler)
  .route('/', XAmzTargetSageMakerListImagesHandler)
  .route('/', XAmzTargetSageMakerListInferenceExperimentsHandler)
  .route('/', XAmzTargetSageMakerListInferenceRecommendationsJobStepsHandler)
  .route('/', XAmzTargetSageMakerListInferenceRecommendationsJobsHandler)
  .route('/', XAmzTargetSageMakerListLabelingJobsHandler)
  .route('/', XAmzTargetSageMakerListLabelingJobsForWorkteamHandler)
  .route('/', XAmzTargetSageMakerListLineageGroupsHandler)
  .route('/', XAmzTargetSageMakerListModelBiasJobDefinitionsHandler)
  .route('/', XAmzTargetSageMakerListModelCardExportJobsHandler)
  .route('/', XAmzTargetSageMakerListModelCardVersionsHandler)
  .route('/', XAmzTargetSageMakerListModelCardsHandler)
  .route('/', XAmzTargetSageMakerListModelExplainabilityJobDefinitionsHandler)
  .route('/', XAmzTargetSageMakerListModelMetadataHandler)
  .route('/', XAmzTargetSageMakerListModelPackageGroupsHandler)
  .route('/', XAmzTargetSageMakerListModelPackagesHandler)
  .route('/', XAmzTargetSageMakerListModelQualityJobDefinitionsHandler)
  .route('/', XAmzTargetSageMakerListModelsHandler)
  .route('/', XAmzTargetSageMakerListMonitoringAlertHistoryHandler)
  .route('/', XAmzTargetSageMakerListMonitoringAlertsHandler)
  .route('/', XAmzTargetSageMakerListMonitoringExecutionsHandler)
  .route('/', XAmzTargetSageMakerListMonitoringSchedulesHandler)
  .route('/', XAmzTargetSageMakerListNotebookInstanceLifecycleConfigsHandler)
  .route('/', XAmzTargetSageMakerListNotebookInstancesHandler)
  .route('/', XAmzTargetSageMakerListPipelineExecutionStepsHandler)
  .route('/', XAmzTargetSageMakerListPipelineExecutionsHandler)
  .route('/', XAmzTargetSageMakerListPipelineParametersForExecutionHandler)
  .route('/', XAmzTargetSageMakerListPipelinesHandler)
  .route('/', XAmzTargetSageMakerListProcessingJobsHandler)
  .route('/', XAmzTargetSageMakerListProjectsHandler)
  .route('/', XAmzTargetSageMakerListSpacesHandler)
  .route('/', XAmzTargetSageMakerListStageDevicesHandler)
  .route('/', XAmzTargetSageMakerListStudioLifecycleConfigsHandler)
  .route('/', XAmzTargetSageMakerListSubscribedWorkteamsHandler)
  .route('/', XAmzTargetSageMakerListTagsHandler)
  .route('/', XAmzTargetSageMakerListTrainingJobsHandler)
  .route('/', XAmzTargetSageMakerListTrainingJobsForHyperParameterTuningJobHandler)
  .route('/', XAmzTargetSageMakerListTransformJobsHandler)
  .route('/', XAmzTargetSageMakerListTrialComponentsHandler)
  .route('/', XAmzTargetSageMakerListTrialsHandler)
  .route('/', XAmzTargetSageMakerListUserProfilesHandler)
  .route('/', XAmzTargetSageMakerListWorkforcesHandler)
  .route('/', XAmzTargetSageMakerListWorkteamsHandler)
  .route('/', XAmzTargetSageMakerPutModelPackageGroupPolicyHandler)
  .route('/', XAmzTargetSageMakerQueryLineageHandler)
  .route('/', XAmzTargetSageMakerRegisterDevicesHandler)
  .route('/', XAmzTargetSageMakerRenderUiTemplateHandler)
  .route('/', XAmzTargetSageMakerRetryPipelineExecutionHandler)
  .route('/', XAmzTargetSageMakerSearchHandler)
  .route('/', XAmzTargetSageMakerSendPipelineExecutionStepFailureHandler)
  .route('/', XAmzTargetSageMakerSendPipelineExecutionStepSuccessHandler)
  .route('/', XAmzTargetSageMakerStartEdgeDeploymentStageHandler)
  .route('/', XAmzTargetSageMakerStartInferenceExperimentHandler)
  .route('/', XAmzTargetSageMakerStartMonitoringScheduleHandler)
  .route('/', XAmzTargetSageMakerStartNotebookInstanceHandler)
  .route('/', XAmzTargetSageMakerStartPipelineExecutionHandler)
  .route('/', XAmzTargetSageMakerStopAutoMLJobHandler)
  .route('/', XAmzTargetSageMakerStopCompilationJobHandler)
  .route('/', XAmzTargetSageMakerStopEdgeDeploymentStageHandler)
  .route('/', XAmzTargetSageMakerStopEdgePackagingJobHandler)
  .route('/', XAmzTargetSageMakerStopHyperParameterTuningJobHandler)
  .route('/', XAmzTargetSageMakerStopInferenceExperimentHandler)
  .route('/', XAmzTargetSageMakerStopInferenceRecommendationsJobHandler)
  .route('/', XAmzTargetSageMakerStopLabelingJobHandler)
  .route('/', XAmzTargetSageMakerStopMonitoringScheduleHandler)
  .route('/', XAmzTargetSageMakerStopNotebookInstanceHandler)
  .route('/', XAmzTargetSageMakerStopPipelineExecutionHandler)
  .route('/', XAmzTargetSageMakerStopProcessingJobHandler)
  .route('/', XAmzTargetSageMakerStopTrainingJobHandler)
  .route('/', XAmzTargetSageMakerStopTransformJobHandler)
  .route('/', XAmzTargetSageMakerUpdateActionHandler)
  .route('/', XAmzTargetSageMakerUpdateAppImageConfigHandler)
  .route('/', XAmzTargetSageMakerUpdateArtifactHandler)
  .route('/', XAmzTargetSageMakerUpdateCodeRepositoryHandler)
  .route('/', XAmzTargetSageMakerUpdateContextHandler)
  .route('/', XAmzTargetSageMakerUpdateDeviceFleetHandler)
  .route('/', XAmzTargetSageMakerUpdateDevicesHandler)
  .route('/', XAmzTargetSageMakerUpdateDomainHandler)
  .route('/', XAmzTargetSageMakerUpdateEndpointHandler)
  .route('/', XAmzTargetSageMakerUpdateEndpointWeightsAndCapacitiesHandler)
  .route('/', XAmzTargetSageMakerUpdateExperimentHandler)
  .route('/', XAmzTargetSageMakerUpdateFeatureGroupHandler)
  .route('/', XAmzTargetSageMakerUpdateFeatureMetadataHandler)
  .route('/', XAmzTargetSageMakerUpdateHubHandler)
  .route('/', XAmzTargetSageMakerUpdateImageHandler)
  .route('/', XAmzTargetSageMakerUpdateImageVersionHandler)
  .route('/', XAmzTargetSageMakerUpdateInferenceExperimentHandler)
  .route('/', XAmzTargetSageMakerUpdateModelCardHandler)
  .route('/', XAmzTargetSageMakerUpdateModelPackageHandler)
  .route('/', XAmzTargetSageMakerUpdateMonitoringAlertHandler)
  .route('/', XAmzTargetSageMakerUpdateMonitoringScheduleHandler)
  .route('/', XAmzTargetSageMakerUpdateNotebookInstanceHandler)
  .route('/', XAmzTargetSageMakerUpdateNotebookInstanceLifecycleConfigHandler)
  .route('/', XAmzTargetSageMakerUpdatePipelineHandler)
  .route('/', XAmzTargetSageMakerUpdatePipelineExecutionHandler)
  .route('/', XAmzTargetSageMakerUpdateProjectHandler)
  .route('/', XAmzTargetSageMakerUpdateSpaceHandler)
  .route('/', XAmzTargetSageMakerUpdateTrainingJobHandler)
  .route('/', XAmzTargetSageMakerUpdateTrialHandler)
  .route('/', XAmzTargetSageMakerUpdateTrialComponentHandler)
  .route('/', XAmzTargetSageMakerUpdateUserProfileHandler)
  .route('/', XAmzTargetSageMakerUpdateWorkforceHandler)
  .route('/', XAmzTargetSageMakerUpdateWorkteamHandler)

export default app
