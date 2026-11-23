import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetSageMakerAddAssociationHandler,
  xAmzTargetSageMakerAddTagsHandler,
  xAmzTargetSageMakerAssociateTrialComponentHandler,
  xAmzTargetSageMakerBatchDescribeModelPackageHandler,
  xAmzTargetSageMakerCreateActionHandler,
  xAmzTargetSageMakerCreateAlgorithmHandler,
  xAmzTargetSageMakerCreateAppHandler,
  xAmzTargetSageMakerCreateAppImageConfigHandler,
  xAmzTargetSageMakerCreateArtifactHandler,
  xAmzTargetSageMakerCreateAutoMlJobHandler,
  xAmzTargetSageMakerCreateAutoMlJobV2Handler,
  xAmzTargetSageMakerCreateCodeRepositoryHandler,
  xAmzTargetSageMakerCreateCompilationJobHandler,
  xAmzTargetSageMakerCreateContextHandler,
  xAmzTargetSageMakerCreateDataQualityJobDefinitionHandler,
  xAmzTargetSageMakerCreateDeviceFleetHandler,
  xAmzTargetSageMakerCreateDomainHandler,
  xAmzTargetSageMakerCreateEdgeDeploymentPlanHandler,
  xAmzTargetSageMakerCreateEdgeDeploymentStageHandler,
  xAmzTargetSageMakerCreateEdgePackagingJobHandler,
  xAmzTargetSageMakerCreateEndpointConfigHandler,
  xAmzTargetSageMakerCreateEndpointHandler,
  xAmzTargetSageMakerCreateExperimentHandler,
  xAmzTargetSageMakerCreateFeatureGroupHandler,
  xAmzTargetSageMakerCreateFlowDefinitionHandler,
  xAmzTargetSageMakerCreateHubHandler,
  xAmzTargetSageMakerCreateHumanTaskUiHandler,
  xAmzTargetSageMakerCreateHyperParameterTuningJobHandler,
  xAmzTargetSageMakerCreateImageHandler,
  xAmzTargetSageMakerCreateImageVersionHandler,
  xAmzTargetSageMakerCreateInferenceExperimentHandler,
  xAmzTargetSageMakerCreateInferenceRecommendationsJobHandler,
  xAmzTargetSageMakerCreateLabelingJobHandler,
  xAmzTargetSageMakerCreateModelBiasJobDefinitionHandler,
  xAmzTargetSageMakerCreateModelCardExportJobHandler,
  xAmzTargetSageMakerCreateModelCardHandler,
  xAmzTargetSageMakerCreateModelExplainabilityJobDefinitionHandler,
  xAmzTargetSageMakerCreateModelHandler,
  xAmzTargetSageMakerCreateModelPackageGroupHandler,
  xAmzTargetSageMakerCreateModelPackageHandler,
  xAmzTargetSageMakerCreateModelQualityJobDefinitionHandler,
  xAmzTargetSageMakerCreateMonitoringScheduleHandler,
  xAmzTargetSageMakerCreateNotebookInstanceHandler,
  xAmzTargetSageMakerCreateNotebookInstanceLifecycleConfigHandler,
  xAmzTargetSageMakerCreatePipelineHandler,
  xAmzTargetSageMakerCreatePresignedDomainUrlHandler,
  xAmzTargetSageMakerCreatePresignedNotebookInstanceUrlHandler,
  xAmzTargetSageMakerCreateProcessingJobHandler,
  xAmzTargetSageMakerCreateProjectHandler,
  xAmzTargetSageMakerCreateSpaceHandler,
  xAmzTargetSageMakerCreateStudioLifecycleConfigHandler,
  xAmzTargetSageMakerCreateTrainingJobHandler,
  xAmzTargetSageMakerCreateTransformJobHandler,
  xAmzTargetSageMakerCreateTrialComponentHandler,
  xAmzTargetSageMakerCreateTrialHandler,
  xAmzTargetSageMakerCreateUserProfileHandler,
  xAmzTargetSageMakerCreateWorkforceHandler,
  xAmzTargetSageMakerCreateWorkteamHandler,
  xAmzTargetSageMakerDeleteActionHandler,
  xAmzTargetSageMakerDeleteAlgorithmHandler,
  xAmzTargetSageMakerDeleteAppHandler,
  xAmzTargetSageMakerDeleteAppImageConfigHandler,
  xAmzTargetSageMakerDeleteArtifactHandler,
  xAmzTargetSageMakerDeleteAssociationHandler,
  xAmzTargetSageMakerDeleteCodeRepositoryHandler,
  xAmzTargetSageMakerDeleteContextHandler,
  xAmzTargetSageMakerDeleteDataQualityJobDefinitionHandler,
  xAmzTargetSageMakerDeleteDeviceFleetHandler,
  xAmzTargetSageMakerDeleteDomainHandler,
  xAmzTargetSageMakerDeleteEdgeDeploymentPlanHandler,
  xAmzTargetSageMakerDeleteEdgeDeploymentStageHandler,
  xAmzTargetSageMakerDeleteEndpointConfigHandler,
  xAmzTargetSageMakerDeleteEndpointHandler,
  xAmzTargetSageMakerDeleteExperimentHandler,
  xAmzTargetSageMakerDeleteFeatureGroupHandler,
  xAmzTargetSageMakerDeleteFlowDefinitionHandler,
  xAmzTargetSageMakerDeleteHubContentHandler,
  xAmzTargetSageMakerDeleteHubHandler,
  xAmzTargetSageMakerDeleteHumanTaskUiHandler,
  xAmzTargetSageMakerDeleteImageHandler,
  xAmzTargetSageMakerDeleteImageVersionHandler,
  xAmzTargetSageMakerDeleteInferenceExperimentHandler,
  xAmzTargetSageMakerDeleteModelBiasJobDefinitionHandler,
  xAmzTargetSageMakerDeleteModelCardHandler,
  xAmzTargetSageMakerDeleteModelExplainabilityJobDefinitionHandler,
  xAmzTargetSageMakerDeleteModelHandler,
  xAmzTargetSageMakerDeleteModelPackageGroupHandler,
  xAmzTargetSageMakerDeleteModelPackageGroupPolicyHandler,
  xAmzTargetSageMakerDeleteModelPackageHandler,
  xAmzTargetSageMakerDeleteModelQualityJobDefinitionHandler,
  xAmzTargetSageMakerDeleteMonitoringScheduleHandler,
  xAmzTargetSageMakerDeleteNotebookInstanceHandler,
  xAmzTargetSageMakerDeleteNotebookInstanceLifecycleConfigHandler,
  xAmzTargetSageMakerDeletePipelineHandler,
  xAmzTargetSageMakerDeleteProjectHandler,
  xAmzTargetSageMakerDeleteSpaceHandler,
  xAmzTargetSageMakerDeleteStudioLifecycleConfigHandler,
  xAmzTargetSageMakerDeleteTagsHandler,
  xAmzTargetSageMakerDeleteTrialComponentHandler,
  xAmzTargetSageMakerDeleteTrialHandler,
  xAmzTargetSageMakerDeleteUserProfileHandler,
  xAmzTargetSageMakerDeleteWorkforceHandler,
  xAmzTargetSageMakerDeleteWorkteamHandler,
  xAmzTargetSageMakerDeregisterDevicesHandler,
  xAmzTargetSageMakerDescribeActionHandler,
  xAmzTargetSageMakerDescribeAlgorithmHandler,
  xAmzTargetSageMakerDescribeAppHandler,
  xAmzTargetSageMakerDescribeAppImageConfigHandler,
  xAmzTargetSageMakerDescribeArtifactHandler,
  xAmzTargetSageMakerDescribeAutoMlJobHandler,
  xAmzTargetSageMakerDescribeAutoMlJobV2Handler,
  xAmzTargetSageMakerDescribeCodeRepositoryHandler,
  xAmzTargetSageMakerDescribeCompilationJobHandler,
  xAmzTargetSageMakerDescribeContextHandler,
  xAmzTargetSageMakerDescribeDataQualityJobDefinitionHandler,
  xAmzTargetSageMakerDescribeDeviceFleetHandler,
  xAmzTargetSageMakerDescribeDeviceHandler,
  xAmzTargetSageMakerDescribeDomainHandler,
  xAmzTargetSageMakerDescribeEdgeDeploymentPlanHandler,
  xAmzTargetSageMakerDescribeEdgePackagingJobHandler,
  xAmzTargetSageMakerDescribeEndpointConfigHandler,
  xAmzTargetSageMakerDescribeEndpointHandler,
  xAmzTargetSageMakerDescribeExperimentHandler,
  xAmzTargetSageMakerDescribeFeatureGroupHandler,
  xAmzTargetSageMakerDescribeFeatureMetadataHandler,
  xAmzTargetSageMakerDescribeFlowDefinitionHandler,
  xAmzTargetSageMakerDescribeHubContentHandler,
  xAmzTargetSageMakerDescribeHubHandler,
  xAmzTargetSageMakerDescribeHumanTaskUiHandler,
  xAmzTargetSageMakerDescribeHyperParameterTuningJobHandler,
  xAmzTargetSageMakerDescribeImageHandler,
  xAmzTargetSageMakerDescribeImageVersionHandler,
  xAmzTargetSageMakerDescribeInferenceExperimentHandler,
  xAmzTargetSageMakerDescribeInferenceRecommendationsJobHandler,
  xAmzTargetSageMakerDescribeLabelingJobHandler,
  xAmzTargetSageMakerDescribeLineageGroupHandler,
  xAmzTargetSageMakerDescribeModelBiasJobDefinitionHandler,
  xAmzTargetSageMakerDescribeModelCardExportJobHandler,
  xAmzTargetSageMakerDescribeModelCardHandler,
  xAmzTargetSageMakerDescribeModelExplainabilityJobDefinitionHandler,
  xAmzTargetSageMakerDescribeModelHandler,
  xAmzTargetSageMakerDescribeModelPackageGroupHandler,
  xAmzTargetSageMakerDescribeModelPackageHandler,
  xAmzTargetSageMakerDescribeModelQualityJobDefinitionHandler,
  xAmzTargetSageMakerDescribeMonitoringScheduleHandler,
  xAmzTargetSageMakerDescribeNotebookInstanceHandler,
  xAmzTargetSageMakerDescribeNotebookInstanceLifecycleConfigHandler,
  xAmzTargetSageMakerDescribePipelineDefinitionForExecutionHandler,
  xAmzTargetSageMakerDescribePipelineExecutionHandler,
  xAmzTargetSageMakerDescribePipelineHandler,
  xAmzTargetSageMakerDescribeProcessingJobHandler,
  xAmzTargetSageMakerDescribeProjectHandler,
  xAmzTargetSageMakerDescribeSpaceHandler,
  xAmzTargetSageMakerDescribeStudioLifecycleConfigHandler,
  xAmzTargetSageMakerDescribeSubscribedWorkteamHandler,
  xAmzTargetSageMakerDescribeTrainingJobHandler,
  xAmzTargetSageMakerDescribeTransformJobHandler,
  xAmzTargetSageMakerDescribeTrialComponentHandler,
  xAmzTargetSageMakerDescribeTrialHandler,
  xAmzTargetSageMakerDescribeUserProfileHandler,
  xAmzTargetSageMakerDescribeWorkforceHandler,
  xAmzTargetSageMakerDescribeWorkteamHandler,
  xAmzTargetSageMakerDisableSagemakerServicecatalogPortfolioHandler,
  xAmzTargetSageMakerDisassociateTrialComponentHandler,
  xAmzTargetSageMakerEnableSagemakerServicecatalogPortfolioHandler,
  xAmzTargetSageMakerGetDeviceFleetReportHandler,
  xAmzTargetSageMakerGetLineageGroupPolicyHandler,
  xAmzTargetSageMakerGetModelPackageGroupPolicyHandler,
  xAmzTargetSageMakerGetSagemakerServicecatalogPortfolioStatusHandler,
  xAmzTargetSageMakerGetSearchSuggestionsHandler,
  xAmzTargetSageMakerImportHubContentHandler,
  xAmzTargetSageMakerListActionsHandler,
  xAmzTargetSageMakerListAlgorithmsHandler,
  xAmzTargetSageMakerListAliasesHandler,
  xAmzTargetSageMakerListAppImageConfigsHandler,
  xAmzTargetSageMakerListAppsHandler,
  xAmzTargetSageMakerListArtifactsHandler,
  xAmzTargetSageMakerListAssociationsHandler,
  xAmzTargetSageMakerListAutoMlJobsHandler,
  xAmzTargetSageMakerListCandidatesForAutoMlJobHandler,
  xAmzTargetSageMakerListCodeRepositoriesHandler,
  xAmzTargetSageMakerListCompilationJobsHandler,
  xAmzTargetSageMakerListContextsHandler,
  xAmzTargetSageMakerListDataQualityJobDefinitionsHandler,
  xAmzTargetSageMakerListDeviceFleetsHandler,
  xAmzTargetSageMakerListDevicesHandler,
  xAmzTargetSageMakerListDomainsHandler,
  xAmzTargetSageMakerListEdgeDeploymentPlansHandler,
  xAmzTargetSageMakerListEdgePackagingJobsHandler,
  xAmzTargetSageMakerListEndpointConfigsHandler,
  xAmzTargetSageMakerListEndpointsHandler,
  xAmzTargetSageMakerListExperimentsHandler,
  xAmzTargetSageMakerListFeatureGroupsHandler,
  xAmzTargetSageMakerListFlowDefinitionsHandler,
  xAmzTargetSageMakerListHubContentsHandler,
  xAmzTargetSageMakerListHubContentVersionsHandler,
  xAmzTargetSageMakerListHubsHandler,
  xAmzTargetSageMakerListHumanTaskUisHandler,
  xAmzTargetSageMakerListHyperParameterTuningJobsHandler,
  xAmzTargetSageMakerListImagesHandler,
  xAmzTargetSageMakerListImageVersionsHandler,
  xAmzTargetSageMakerListInferenceExperimentsHandler,
  xAmzTargetSageMakerListInferenceRecommendationsJobsHandler,
  xAmzTargetSageMakerListInferenceRecommendationsJobStepsHandler,
  xAmzTargetSageMakerListLabelingJobsForWorkteamHandler,
  xAmzTargetSageMakerListLabelingJobsHandler,
  xAmzTargetSageMakerListLineageGroupsHandler,
  xAmzTargetSageMakerListModelBiasJobDefinitionsHandler,
  xAmzTargetSageMakerListModelCardExportJobsHandler,
  xAmzTargetSageMakerListModelCardsHandler,
  xAmzTargetSageMakerListModelCardVersionsHandler,
  xAmzTargetSageMakerListModelExplainabilityJobDefinitionsHandler,
  xAmzTargetSageMakerListModelMetadataHandler,
  xAmzTargetSageMakerListModelPackageGroupsHandler,
  xAmzTargetSageMakerListModelPackagesHandler,
  xAmzTargetSageMakerListModelQualityJobDefinitionsHandler,
  xAmzTargetSageMakerListModelsHandler,
  xAmzTargetSageMakerListMonitoringAlertHistoryHandler,
  xAmzTargetSageMakerListMonitoringAlertsHandler,
  xAmzTargetSageMakerListMonitoringExecutionsHandler,
  xAmzTargetSageMakerListMonitoringSchedulesHandler,
  xAmzTargetSageMakerListNotebookInstanceLifecycleConfigsHandler,
  xAmzTargetSageMakerListNotebookInstancesHandler,
  xAmzTargetSageMakerListPipelineExecutionsHandler,
  xAmzTargetSageMakerListPipelineExecutionStepsHandler,
  xAmzTargetSageMakerListPipelineParametersForExecutionHandler,
  xAmzTargetSageMakerListPipelinesHandler,
  xAmzTargetSageMakerListProcessingJobsHandler,
  xAmzTargetSageMakerListProjectsHandler,
  xAmzTargetSageMakerListSpacesHandler,
  xAmzTargetSageMakerListStageDevicesHandler,
  xAmzTargetSageMakerListStudioLifecycleConfigsHandler,
  xAmzTargetSageMakerListSubscribedWorkteamsHandler,
  xAmzTargetSageMakerListTagsHandler,
  xAmzTargetSageMakerListTrainingJobsForHyperParameterTuningJobHandler,
  xAmzTargetSageMakerListTrainingJobsHandler,
  xAmzTargetSageMakerListTransformJobsHandler,
  xAmzTargetSageMakerListTrialComponentsHandler,
  xAmzTargetSageMakerListTrialsHandler,
  xAmzTargetSageMakerListUserProfilesHandler,
  xAmzTargetSageMakerListWorkforcesHandler,
  xAmzTargetSageMakerListWorkteamsHandler,
  xAmzTargetSageMakerPutModelPackageGroupPolicyHandler,
  xAmzTargetSageMakerQueryLineageHandler,
  xAmzTargetSageMakerRegisterDevicesHandler,
  xAmzTargetSageMakerRenderUiTemplateHandler,
  xAmzTargetSageMakerRetryPipelineExecutionHandler,
  xAmzTargetSageMakerSearchHandler,
  xAmzTargetSageMakerSendPipelineExecutionStepFailureHandler,
  xAmzTargetSageMakerSendPipelineExecutionStepSuccessHandler,
  xAmzTargetSageMakerStartEdgeDeploymentStageHandler,
  xAmzTargetSageMakerStartInferenceExperimentHandler,
  xAmzTargetSageMakerStartMonitoringScheduleHandler,
  xAmzTargetSageMakerStartNotebookInstanceHandler,
  xAmzTargetSageMakerStartPipelineExecutionHandler,
  xAmzTargetSageMakerStopAutoMlJobHandler,
  xAmzTargetSageMakerStopCompilationJobHandler,
  xAmzTargetSageMakerStopEdgeDeploymentStageHandler,
  xAmzTargetSageMakerStopEdgePackagingJobHandler,
  xAmzTargetSageMakerStopHyperParameterTuningJobHandler,
  xAmzTargetSageMakerStopInferenceExperimentHandler,
  xAmzTargetSageMakerStopInferenceRecommendationsJobHandler,
  xAmzTargetSageMakerStopLabelingJobHandler,
  xAmzTargetSageMakerStopMonitoringScheduleHandler,
  xAmzTargetSageMakerStopNotebookInstanceHandler,
  xAmzTargetSageMakerStopPipelineExecutionHandler,
  xAmzTargetSageMakerStopProcessingJobHandler,
  xAmzTargetSageMakerStopTrainingJobHandler,
  xAmzTargetSageMakerStopTransformJobHandler,
  xAmzTargetSageMakerUpdateActionHandler,
  xAmzTargetSageMakerUpdateAppImageConfigHandler,
  xAmzTargetSageMakerUpdateArtifactHandler,
  xAmzTargetSageMakerUpdateCodeRepositoryHandler,
  xAmzTargetSageMakerUpdateContextHandler,
  xAmzTargetSageMakerUpdateDeviceFleetHandler,
  xAmzTargetSageMakerUpdateDevicesHandler,
  xAmzTargetSageMakerUpdateDomainHandler,
  xAmzTargetSageMakerUpdateEndpointHandler,
  xAmzTargetSageMakerUpdateEndpointWeightsAndCapacitiesHandler,
  xAmzTargetSageMakerUpdateExperimentHandler,
  xAmzTargetSageMakerUpdateFeatureGroupHandler,
  xAmzTargetSageMakerUpdateFeatureMetadataHandler,
  xAmzTargetSageMakerUpdateHubHandler,
  xAmzTargetSageMakerUpdateImageHandler,
  xAmzTargetSageMakerUpdateImageVersionHandler,
  xAmzTargetSageMakerUpdateInferenceExperimentHandler,
  xAmzTargetSageMakerUpdateModelCardHandler,
  xAmzTargetSageMakerUpdateModelPackageHandler,
  xAmzTargetSageMakerUpdateMonitoringAlertHandler,
  xAmzTargetSageMakerUpdateMonitoringScheduleHandler,
  xAmzTargetSageMakerUpdateNotebookInstanceHandler,
  xAmzTargetSageMakerUpdateNotebookInstanceLifecycleConfigHandler,
  xAmzTargetSageMakerUpdatePipelineExecutionHandler,
  xAmzTargetSageMakerUpdatePipelineHandler,
  xAmzTargetSageMakerUpdateProjectHandler,
  xAmzTargetSageMakerUpdateSpaceHandler,
  xAmzTargetSageMakerUpdateTrainingJobHandler,
  xAmzTargetSageMakerUpdateTrialComponentHandler,
  xAmzTargetSageMakerUpdateTrialHandler,
  xAmzTargetSageMakerUpdateUserProfileHandler,
  xAmzTargetSageMakerUpdateWorkforceHandler,
  xAmzTargetSageMakerUpdateWorkteamHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetSageMakerAddAssociationHandler)
  .route('/', xAmzTargetSageMakerAddTagsHandler)
  .route('/', xAmzTargetSageMakerAssociateTrialComponentHandler)
  .route('/', xAmzTargetSageMakerBatchDescribeModelPackageHandler)
  .route('/', xAmzTargetSageMakerCreateActionHandler)
  .route('/', xAmzTargetSageMakerCreateAlgorithmHandler)
  .route('/', xAmzTargetSageMakerCreateAppHandler)
  .route('/', xAmzTargetSageMakerCreateAppImageConfigHandler)
  .route('/', xAmzTargetSageMakerCreateArtifactHandler)
  .route('/', xAmzTargetSageMakerCreateAutoMlJobHandler)
  .route('/', xAmzTargetSageMakerCreateAutoMlJobV2Handler)
  .route('/', xAmzTargetSageMakerCreateCodeRepositoryHandler)
  .route('/', xAmzTargetSageMakerCreateCompilationJobHandler)
  .route('/', xAmzTargetSageMakerCreateContextHandler)
  .route('/', xAmzTargetSageMakerCreateDataQualityJobDefinitionHandler)
  .route('/', xAmzTargetSageMakerCreateDeviceFleetHandler)
  .route('/', xAmzTargetSageMakerCreateDomainHandler)
  .route('/', xAmzTargetSageMakerCreateEdgeDeploymentPlanHandler)
  .route('/', xAmzTargetSageMakerCreateEdgeDeploymentStageHandler)
  .route('/', xAmzTargetSageMakerCreateEdgePackagingJobHandler)
  .route('/', xAmzTargetSageMakerCreateEndpointHandler)
  .route('/', xAmzTargetSageMakerCreateEndpointConfigHandler)
  .route('/', xAmzTargetSageMakerCreateExperimentHandler)
  .route('/', xAmzTargetSageMakerCreateFeatureGroupHandler)
  .route('/', xAmzTargetSageMakerCreateFlowDefinitionHandler)
  .route('/', xAmzTargetSageMakerCreateHubHandler)
  .route('/', xAmzTargetSageMakerCreateHumanTaskUiHandler)
  .route('/', xAmzTargetSageMakerCreateHyperParameterTuningJobHandler)
  .route('/', xAmzTargetSageMakerCreateImageHandler)
  .route('/', xAmzTargetSageMakerCreateImageVersionHandler)
  .route('/', xAmzTargetSageMakerCreateInferenceExperimentHandler)
  .route('/', xAmzTargetSageMakerCreateInferenceRecommendationsJobHandler)
  .route('/', xAmzTargetSageMakerCreateLabelingJobHandler)
  .route('/', xAmzTargetSageMakerCreateModelHandler)
  .route('/', xAmzTargetSageMakerCreateModelBiasJobDefinitionHandler)
  .route('/', xAmzTargetSageMakerCreateModelCardHandler)
  .route('/', xAmzTargetSageMakerCreateModelCardExportJobHandler)
  .route('/', xAmzTargetSageMakerCreateModelExplainabilityJobDefinitionHandler)
  .route('/', xAmzTargetSageMakerCreateModelPackageHandler)
  .route('/', xAmzTargetSageMakerCreateModelPackageGroupHandler)
  .route('/', xAmzTargetSageMakerCreateModelQualityJobDefinitionHandler)
  .route('/', xAmzTargetSageMakerCreateMonitoringScheduleHandler)
  .route('/', xAmzTargetSageMakerCreateNotebookInstanceHandler)
  .route('/', xAmzTargetSageMakerCreateNotebookInstanceLifecycleConfigHandler)
  .route('/', xAmzTargetSageMakerCreatePipelineHandler)
  .route('/', xAmzTargetSageMakerCreatePresignedDomainUrlHandler)
  .route('/', xAmzTargetSageMakerCreatePresignedNotebookInstanceUrlHandler)
  .route('/', xAmzTargetSageMakerCreateProcessingJobHandler)
  .route('/', xAmzTargetSageMakerCreateProjectHandler)
  .route('/', xAmzTargetSageMakerCreateSpaceHandler)
  .route('/', xAmzTargetSageMakerCreateStudioLifecycleConfigHandler)
  .route('/', xAmzTargetSageMakerCreateTrainingJobHandler)
  .route('/', xAmzTargetSageMakerCreateTransformJobHandler)
  .route('/', xAmzTargetSageMakerCreateTrialHandler)
  .route('/', xAmzTargetSageMakerCreateTrialComponentHandler)
  .route('/', xAmzTargetSageMakerCreateUserProfileHandler)
  .route('/', xAmzTargetSageMakerCreateWorkforceHandler)
  .route('/', xAmzTargetSageMakerCreateWorkteamHandler)
  .route('/', xAmzTargetSageMakerDeleteActionHandler)
  .route('/', xAmzTargetSageMakerDeleteAlgorithmHandler)
  .route('/', xAmzTargetSageMakerDeleteAppHandler)
  .route('/', xAmzTargetSageMakerDeleteAppImageConfigHandler)
  .route('/', xAmzTargetSageMakerDeleteArtifactHandler)
  .route('/', xAmzTargetSageMakerDeleteAssociationHandler)
  .route('/', xAmzTargetSageMakerDeleteCodeRepositoryHandler)
  .route('/', xAmzTargetSageMakerDeleteContextHandler)
  .route('/', xAmzTargetSageMakerDeleteDataQualityJobDefinitionHandler)
  .route('/', xAmzTargetSageMakerDeleteDeviceFleetHandler)
  .route('/', xAmzTargetSageMakerDeleteDomainHandler)
  .route('/', xAmzTargetSageMakerDeleteEdgeDeploymentPlanHandler)
  .route('/', xAmzTargetSageMakerDeleteEdgeDeploymentStageHandler)
  .route('/', xAmzTargetSageMakerDeleteEndpointHandler)
  .route('/', xAmzTargetSageMakerDeleteEndpointConfigHandler)
  .route('/', xAmzTargetSageMakerDeleteExperimentHandler)
  .route('/', xAmzTargetSageMakerDeleteFeatureGroupHandler)
  .route('/', xAmzTargetSageMakerDeleteFlowDefinitionHandler)
  .route('/', xAmzTargetSageMakerDeleteHubHandler)
  .route('/', xAmzTargetSageMakerDeleteHubContentHandler)
  .route('/', xAmzTargetSageMakerDeleteHumanTaskUiHandler)
  .route('/', xAmzTargetSageMakerDeleteImageHandler)
  .route('/', xAmzTargetSageMakerDeleteImageVersionHandler)
  .route('/', xAmzTargetSageMakerDeleteInferenceExperimentHandler)
  .route('/', xAmzTargetSageMakerDeleteModelHandler)
  .route('/', xAmzTargetSageMakerDeleteModelBiasJobDefinitionHandler)
  .route('/', xAmzTargetSageMakerDeleteModelCardHandler)
  .route('/', xAmzTargetSageMakerDeleteModelExplainabilityJobDefinitionHandler)
  .route('/', xAmzTargetSageMakerDeleteModelPackageHandler)
  .route('/', xAmzTargetSageMakerDeleteModelPackageGroupHandler)
  .route('/', xAmzTargetSageMakerDeleteModelPackageGroupPolicyHandler)
  .route('/', xAmzTargetSageMakerDeleteModelQualityJobDefinitionHandler)
  .route('/', xAmzTargetSageMakerDeleteMonitoringScheduleHandler)
  .route('/', xAmzTargetSageMakerDeleteNotebookInstanceHandler)
  .route('/', xAmzTargetSageMakerDeleteNotebookInstanceLifecycleConfigHandler)
  .route('/', xAmzTargetSageMakerDeletePipelineHandler)
  .route('/', xAmzTargetSageMakerDeleteProjectHandler)
  .route('/', xAmzTargetSageMakerDeleteSpaceHandler)
  .route('/', xAmzTargetSageMakerDeleteStudioLifecycleConfigHandler)
  .route('/', xAmzTargetSageMakerDeleteTagsHandler)
  .route('/', xAmzTargetSageMakerDeleteTrialHandler)
  .route('/', xAmzTargetSageMakerDeleteTrialComponentHandler)
  .route('/', xAmzTargetSageMakerDeleteUserProfileHandler)
  .route('/', xAmzTargetSageMakerDeleteWorkforceHandler)
  .route('/', xAmzTargetSageMakerDeleteWorkteamHandler)
  .route('/', xAmzTargetSageMakerDeregisterDevicesHandler)
  .route('/', xAmzTargetSageMakerDescribeActionHandler)
  .route('/', xAmzTargetSageMakerDescribeAlgorithmHandler)
  .route('/', xAmzTargetSageMakerDescribeAppHandler)
  .route('/', xAmzTargetSageMakerDescribeAppImageConfigHandler)
  .route('/', xAmzTargetSageMakerDescribeArtifactHandler)
  .route('/', xAmzTargetSageMakerDescribeAutoMlJobHandler)
  .route('/', xAmzTargetSageMakerDescribeAutoMlJobV2Handler)
  .route('/', xAmzTargetSageMakerDescribeCodeRepositoryHandler)
  .route('/', xAmzTargetSageMakerDescribeCompilationJobHandler)
  .route('/', xAmzTargetSageMakerDescribeContextHandler)
  .route('/', xAmzTargetSageMakerDescribeDataQualityJobDefinitionHandler)
  .route('/', xAmzTargetSageMakerDescribeDeviceHandler)
  .route('/', xAmzTargetSageMakerDescribeDeviceFleetHandler)
  .route('/', xAmzTargetSageMakerDescribeDomainHandler)
  .route('/', xAmzTargetSageMakerDescribeEdgeDeploymentPlanHandler)
  .route('/', xAmzTargetSageMakerDescribeEdgePackagingJobHandler)
  .route('/', xAmzTargetSageMakerDescribeEndpointHandler)
  .route('/', xAmzTargetSageMakerDescribeEndpointConfigHandler)
  .route('/', xAmzTargetSageMakerDescribeExperimentHandler)
  .route('/', xAmzTargetSageMakerDescribeFeatureGroupHandler)
  .route('/', xAmzTargetSageMakerDescribeFeatureMetadataHandler)
  .route('/', xAmzTargetSageMakerDescribeFlowDefinitionHandler)
  .route('/', xAmzTargetSageMakerDescribeHubHandler)
  .route('/', xAmzTargetSageMakerDescribeHubContentHandler)
  .route('/', xAmzTargetSageMakerDescribeHumanTaskUiHandler)
  .route('/', xAmzTargetSageMakerDescribeHyperParameterTuningJobHandler)
  .route('/', xAmzTargetSageMakerDescribeImageHandler)
  .route('/', xAmzTargetSageMakerDescribeImageVersionHandler)
  .route('/', xAmzTargetSageMakerDescribeInferenceExperimentHandler)
  .route('/', xAmzTargetSageMakerDescribeInferenceRecommendationsJobHandler)
  .route('/', xAmzTargetSageMakerDescribeLabelingJobHandler)
  .route('/', xAmzTargetSageMakerDescribeLineageGroupHandler)
  .route('/', xAmzTargetSageMakerDescribeModelHandler)
  .route('/', xAmzTargetSageMakerDescribeModelBiasJobDefinitionHandler)
  .route('/', xAmzTargetSageMakerDescribeModelCardHandler)
  .route('/', xAmzTargetSageMakerDescribeModelCardExportJobHandler)
  .route('/', xAmzTargetSageMakerDescribeModelExplainabilityJobDefinitionHandler)
  .route('/', xAmzTargetSageMakerDescribeModelPackageHandler)
  .route('/', xAmzTargetSageMakerDescribeModelPackageGroupHandler)
  .route('/', xAmzTargetSageMakerDescribeModelQualityJobDefinitionHandler)
  .route('/', xAmzTargetSageMakerDescribeMonitoringScheduleHandler)
  .route('/', xAmzTargetSageMakerDescribeNotebookInstanceHandler)
  .route('/', xAmzTargetSageMakerDescribeNotebookInstanceLifecycleConfigHandler)
  .route('/', xAmzTargetSageMakerDescribePipelineHandler)
  .route('/', xAmzTargetSageMakerDescribePipelineDefinitionForExecutionHandler)
  .route('/', xAmzTargetSageMakerDescribePipelineExecutionHandler)
  .route('/', xAmzTargetSageMakerDescribeProcessingJobHandler)
  .route('/', xAmzTargetSageMakerDescribeProjectHandler)
  .route('/', xAmzTargetSageMakerDescribeSpaceHandler)
  .route('/', xAmzTargetSageMakerDescribeStudioLifecycleConfigHandler)
  .route('/', xAmzTargetSageMakerDescribeSubscribedWorkteamHandler)
  .route('/', xAmzTargetSageMakerDescribeTrainingJobHandler)
  .route('/', xAmzTargetSageMakerDescribeTransformJobHandler)
  .route('/', xAmzTargetSageMakerDescribeTrialHandler)
  .route('/', xAmzTargetSageMakerDescribeTrialComponentHandler)
  .route('/', xAmzTargetSageMakerDescribeUserProfileHandler)
  .route('/', xAmzTargetSageMakerDescribeWorkforceHandler)
  .route('/', xAmzTargetSageMakerDescribeWorkteamHandler)
  .route('/', xAmzTargetSageMakerDisableSagemakerServicecatalogPortfolioHandler)
  .route('/', xAmzTargetSageMakerDisassociateTrialComponentHandler)
  .route('/', xAmzTargetSageMakerEnableSagemakerServicecatalogPortfolioHandler)
  .route('/', xAmzTargetSageMakerGetDeviceFleetReportHandler)
  .route('/', xAmzTargetSageMakerGetLineageGroupPolicyHandler)
  .route('/', xAmzTargetSageMakerGetModelPackageGroupPolicyHandler)
  .route('/', xAmzTargetSageMakerGetSagemakerServicecatalogPortfolioStatusHandler)
  .route('/', xAmzTargetSageMakerGetSearchSuggestionsHandler)
  .route('/', xAmzTargetSageMakerImportHubContentHandler)
  .route('/', xAmzTargetSageMakerListActionsHandler)
  .route('/', xAmzTargetSageMakerListAlgorithmsHandler)
  .route('/', xAmzTargetSageMakerListAliasesHandler)
  .route('/', xAmzTargetSageMakerListAppImageConfigsHandler)
  .route('/', xAmzTargetSageMakerListAppsHandler)
  .route('/', xAmzTargetSageMakerListArtifactsHandler)
  .route('/', xAmzTargetSageMakerListAssociationsHandler)
  .route('/', xAmzTargetSageMakerListAutoMlJobsHandler)
  .route('/', xAmzTargetSageMakerListCandidatesForAutoMlJobHandler)
  .route('/', xAmzTargetSageMakerListCodeRepositoriesHandler)
  .route('/', xAmzTargetSageMakerListCompilationJobsHandler)
  .route('/', xAmzTargetSageMakerListContextsHandler)
  .route('/', xAmzTargetSageMakerListDataQualityJobDefinitionsHandler)
  .route('/', xAmzTargetSageMakerListDeviceFleetsHandler)
  .route('/', xAmzTargetSageMakerListDevicesHandler)
  .route('/', xAmzTargetSageMakerListDomainsHandler)
  .route('/', xAmzTargetSageMakerListEdgeDeploymentPlansHandler)
  .route('/', xAmzTargetSageMakerListEdgePackagingJobsHandler)
  .route('/', xAmzTargetSageMakerListEndpointConfigsHandler)
  .route('/', xAmzTargetSageMakerListEndpointsHandler)
  .route('/', xAmzTargetSageMakerListExperimentsHandler)
  .route('/', xAmzTargetSageMakerListFeatureGroupsHandler)
  .route('/', xAmzTargetSageMakerListFlowDefinitionsHandler)
  .route('/', xAmzTargetSageMakerListHubContentVersionsHandler)
  .route('/', xAmzTargetSageMakerListHubContentsHandler)
  .route('/', xAmzTargetSageMakerListHubsHandler)
  .route('/', xAmzTargetSageMakerListHumanTaskUisHandler)
  .route('/', xAmzTargetSageMakerListHyperParameterTuningJobsHandler)
  .route('/', xAmzTargetSageMakerListImageVersionsHandler)
  .route('/', xAmzTargetSageMakerListImagesHandler)
  .route('/', xAmzTargetSageMakerListInferenceExperimentsHandler)
  .route('/', xAmzTargetSageMakerListInferenceRecommendationsJobStepsHandler)
  .route('/', xAmzTargetSageMakerListInferenceRecommendationsJobsHandler)
  .route('/', xAmzTargetSageMakerListLabelingJobsHandler)
  .route('/', xAmzTargetSageMakerListLabelingJobsForWorkteamHandler)
  .route('/', xAmzTargetSageMakerListLineageGroupsHandler)
  .route('/', xAmzTargetSageMakerListModelBiasJobDefinitionsHandler)
  .route('/', xAmzTargetSageMakerListModelCardExportJobsHandler)
  .route('/', xAmzTargetSageMakerListModelCardVersionsHandler)
  .route('/', xAmzTargetSageMakerListModelCardsHandler)
  .route('/', xAmzTargetSageMakerListModelExplainabilityJobDefinitionsHandler)
  .route('/', xAmzTargetSageMakerListModelMetadataHandler)
  .route('/', xAmzTargetSageMakerListModelPackageGroupsHandler)
  .route('/', xAmzTargetSageMakerListModelPackagesHandler)
  .route('/', xAmzTargetSageMakerListModelQualityJobDefinitionsHandler)
  .route('/', xAmzTargetSageMakerListModelsHandler)
  .route('/', xAmzTargetSageMakerListMonitoringAlertHistoryHandler)
  .route('/', xAmzTargetSageMakerListMonitoringAlertsHandler)
  .route('/', xAmzTargetSageMakerListMonitoringExecutionsHandler)
  .route('/', xAmzTargetSageMakerListMonitoringSchedulesHandler)
  .route('/', xAmzTargetSageMakerListNotebookInstanceLifecycleConfigsHandler)
  .route('/', xAmzTargetSageMakerListNotebookInstancesHandler)
  .route('/', xAmzTargetSageMakerListPipelineExecutionStepsHandler)
  .route('/', xAmzTargetSageMakerListPipelineExecutionsHandler)
  .route('/', xAmzTargetSageMakerListPipelineParametersForExecutionHandler)
  .route('/', xAmzTargetSageMakerListPipelinesHandler)
  .route('/', xAmzTargetSageMakerListProcessingJobsHandler)
  .route('/', xAmzTargetSageMakerListProjectsHandler)
  .route('/', xAmzTargetSageMakerListSpacesHandler)
  .route('/', xAmzTargetSageMakerListStageDevicesHandler)
  .route('/', xAmzTargetSageMakerListStudioLifecycleConfigsHandler)
  .route('/', xAmzTargetSageMakerListSubscribedWorkteamsHandler)
  .route('/', xAmzTargetSageMakerListTagsHandler)
  .route('/', xAmzTargetSageMakerListTrainingJobsHandler)
  .route('/', xAmzTargetSageMakerListTrainingJobsForHyperParameterTuningJobHandler)
  .route('/', xAmzTargetSageMakerListTransformJobsHandler)
  .route('/', xAmzTargetSageMakerListTrialComponentsHandler)
  .route('/', xAmzTargetSageMakerListTrialsHandler)
  .route('/', xAmzTargetSageMakerListUserProfilesHandler)
  .route('/', xAmzTargetSageMakerListWorkforcesHandler)
  .route('/', xAmzTargetSageMakerListWorkteamsHandler)
  .route('/', xAmzTargetSageMakerPutModelPackageGroupPolicyHandler)
  .route('/', xAmzTargetSageMakerQueryLineageHandler)
  .route('/', xAmzTargetSageMakerRegisterDevicesHandler)
  .route('/', xAmzTargetSageMakerRenderUiTemplateHandler)
  .route('/', xAmzTargetSageMakerRetryPipelineExecutionHandler)
  .route('/', xAmzTargetSageMakerSearchHandler)
  .route('/', xAmzTargetSageMakerSendPipelineExecutionStepFailureHandler)
  .route('/', xAmzTargetSageMakerSendPipelineExecutionStepSuccessHandler)
  .route('/', xAmzTargetSageMakerStartEdgeDeploymentStageHandler)
  .route('/', xAmzTargetSageMakerStartInferenceExperimentHandler)
  .route('/', xAmzTargetSageMakerStartMonitoringScheduleHandler)
  .route('/', xAmzTargetSageMakerStartNotebookInstanceHandler)
  .route('/', xAmzTargetSageMakerStartPipelineExecutionHandler)
  .route('/', xAmzTargetSageMakerStopAutoMlJobHandler)
  .route('/', xAmzTargetSageMakerStopCompilationJobHandler)
  .route('/', xAmzTargetSageMakerStopEdgeDeploymentStageHandler)
  .route('/', xAmzTargetSageMakerStopEdgePackagingJobHandler)
  .route('/', xAmzTargetSageMakerStopHyperParameterTuningJobHandler)
  .route('/', xAmzTargetSageMakerStopInferenceExperimentHandler)
  .route('/', xAmzTargetSageMakerStopInferenceRecommendationsJobHandler)
  .route('/', xAmzTargetSageMakerStopLabelingJobHandler)
  .route('/', xAmzTargetSageMakerStopMonitoringScheduleHandler)
  .route('/', xAmzTargetSageMakerStopNotebookInstanceHandler)
  .route('/', xAmzTargetSageMakerStopPipelineExecutionHandler)
  .route('/', xAmzTargetSageMakerStopProcessingJobHandler)
  .route('/', xAmzTargetSageMakerStopTrainingJobHandler)
  .route('/', xAmzTargetSageMakerStopTransformJobHandler)
  .route('/', xAmzTargetSageMakerUpdateActionHandler)
  .route('/', xAmzTargetSageMakerUpdateAppImageConfigHandler)
  .route('/', xAmzTargetSageMakerUpdateArtifactHandler)
  .route('/', xAmzTargetSageMakerUpdateCodeRepositoryHandler)
  .route('/', xAmzTargetSageMakerUpdateContextHandler)
  .route('/', xAmzTargetSageMakerUpdateDeviceFleetHandler)
  .route('/', xAmzTargetSageMakerUpdateDevicesHandler)
  .route('/', xAmzTargetSageMakerUpdateDomainHandler)
  .route('/', xAmzTargetSageMakerUpdateEndpointHandler)
  .route('/', xAmzTargetSageMakerUpdateEndpointWeightsAndCapacitiesHandler)
  .route('/', xAmzTargetSageMakerUpdateExperimentHandler)
  .route('/', xAmzTargetSageMakerUpdateFeatureGroupHandler)
  .route('/', xAmzTargetSageMakerUpdateFeatureMetadataHandler)
  .route('/', xAmzTargetSageMakerUpdateHubHandler)
  .route('/', xAmzTargetSageMakerUpdateImageHandler)
  .route('/', xAmzTargetSageMakerUpdateImageVersionHandler)
  .route('/', xAmzTargetSageMakerUpdateInferenceExperimentHandler)
  .route('/', xAmzTargetSageMakerUpdateModelCardHandler)
  .route('/', xAmzTargetSageMakerUpdateModelPackageHandler)
  .route('/', xAmzTargetSageMakerUpdateMonitoringAlertHandler)
  .route('/', xAmzTargetSageMakerUpdateMonitoringScheduleHandler)
  .route('/', xAmzTargetSageMakerUpdateNotebookInstanceHandler)
  .route('/', xAmzTargetSageMakerUpdateNotebookInstanceLifecycleConfigHandler)
  .route('/', xAmzTargetSageMakerUpdatePipelineHandler)
  .route('/', xAmzTargetSageMakerUpdatePipelineExecutionHandler)
  .route('/', xAmzTargetSageMakerUpdateProjectHandler)
  .route('/', xAmzTargetSageMakerUpdateSpaceHandler)
  .route('/', xAmzTargetSageMakerUpdateTrainingJobHandler)
  .route('/', xAmzTargetSageMakerUpdateTrialHandler)
  .route('/', xAmzTargetSageMakerUpdateTrialComponentHandler)
  .route('/', xAmzTargetSageMakerUpdateUserProfileHandler)
  .route('/', xAmzTargetSageMakerUpdateWorkforceHandler)
  .route('/', xAmzTargetSageMakerUpdateWorkteamHandler)

export default app
